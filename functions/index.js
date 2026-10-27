/* IQRA Digital School: secure sentence translation (English -> Urdu).
   The Anthropic key lives ONLY in Firebase Secret Manager (ANTHROPIC_API_KEY). Never put it in index.html or reader.js. */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const Anthropic = require("@anthropic-ai/sdk");

admin.initializeApp();
const db = admin.firestore();
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

const MODEL = "claude-sonnet-5-5";
const DAILY_LIMIT_STUDENT = 150;   // new translations per signed-in user per day
const DAILY_LIMIT_STAFF = 1500;
const MAX_CHARS = 400;

// Same normalisation + hash as tools/sent.py (FNV-1a 32-bit over the lower-cased alphanumeric text)
function norm(t) { return String(t).toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim(); }
function fnv(s) { let h = 0x811c9dc5; const b = Buffer.from(s, "utf8"); for (const x of b) { h ^= x; h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, "0"); }

const SYSTEM = `You translate sentences from Pakistani primary-school English textbooks (KG to Class 5) into Urdu.
Rules: natural, simple Pakistani Urdu a young child can follow. Keep numbers, names, maths symbols and the words being taught (like 'cat', 'a', 'an') in their original form. Keep the meaning and punctuation. Do not add explanations. If the sentence is only a fragment or unreadable, return {"urdu":""}.
Answer with JSON only: {"urdu":"..."}`;

exports.translateSentence = onCall(
  { secrets: [ANTHROPIC_API_KEY], region: "asia-south1", maxInstances: 5, timeoutSeconds: 30, memory: "256MiB", enforceAppCheck: false },
  async (req) => {
    if (!req.auth) throw new HttpsError("unauthenticated", "Please sign in.");
    const d = req.data || {};
    const bookId = String(d.bookId || "").slice(0, 80);
    const page = parseInt(d.page, 10);
    const text = String(d.text || "").trim();
    if (!/^[a-z0-9._-]+$/i.test(bookId) || !(page >= 1 && page <= 2000) || text.length < 2 || text.length > MAX_CHARS) throw new HttpsError("invalid-argument", "Bad request.");
    if (!/[A-Za-z]/.test(text)) throw new HttpsError("invalid-argument", "English text only.");

    const key = bookId + "__" + fnv(norm(text));
    const ref = db.collection("translations").doc(key);
    const snap = await ref.get();
    if (snap.exists && snap.data().urdu) { const x = snap.data(); return { urdu: x.urdu, status: x.status, cached: true }; }

    // daily limit per user (counts only NEW translations)
    const day = new Date().toISOString().slice(0, 10);
    const isStaff = !!(req.auth.token && (req.auth.token.admin || req.auth.token.teacher));
    const lim = isStaff ? DAILY_LIMIT_STAFF : DAILY_LIMIT_STUDENT;
    const useRef = db.collection("translationUsage").doc(req.auth.uid + "__" + day);
    const ok = await db.runTransaction(async (tx) => { const u = await tx.get(useRef); const n = (u.exists ? u.data().n : 0) + 1; if (n > lim) return false; tx.set(useRef, { n, uid: req.auth.uid, day, ts: admin.firestore.FieldValue.serverTimestamp() }); return true; });
    if (!ok) throw new HttpsError("resource-exhausted", "Daily translation limit reached. Try again tomorrow.");

    let urdu = "";
    try {
      const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY.value() });
      const r = await client.messages.create({ model: MODEL, max_tokens: 300, system: SYSTEM, messages: [{ role: "user", content: text }] });
      const out = (r.content && r.content[0] && r.content[0].text) || "";
      const m = out.match(/\{[\s\S]*\}/); urdu = m ? String(JSON.parse(m[0]).urdu || "").trim() : "";
    } catch (e) { console.error("translate failed", e && e.message); throw new HttpsError("unavailable", "Translation service is not available right now."); }
    if (!urdu) throw new HttpsError("failed-precondition", "This sentence could not be translated.");

    await ref.set({ bookId, page, en: text, urdu, status: "draft", source: "claude:" + MODEL, created: admin.firestore.FieldValue.serverTimestamp(), by: req.auth.uid }, { merge: false });
    return { urdu, status: "draft", cached: false };
  }
);

// Teachers/admins approve or correct a translation (also invalidates stale ones by deleting the doc in the console).
exports.reviewTranslation = onCall({ region: "asia-south1", maxInstances: 3 }, async (req) => {
  if (!req.auth) throw new HttpsError("unauthenticated", "Please sign in.");
  const role = await db.collection("roles").doc(req.auth.uid).get();
  const r = role.exists ? role.data().role : "";
  if (r !== "admin" && r !== "teacher") throw new HttpsError("permission-denied", "Teachers only.");
  const d = req.data || {}; const key = String(d.key || "");
  if (!/^[a-z0-9._-]+__[0-9a-f]{8}$/i.test(key)) throw new HttpsError("invalid-argument", "Bad key.");
  const upd = { status: d.approve ? "approved" : "draft", reviewer: req.auth.uid, reviewed: admin.firestore.FieldValue.serverTimestamp() };
  if (typeof d.urdu === "string" && d.urdu.trim()) upd.urdu = d.urdu.trim().slice(0, 1000);
  await db.collection("translations").doc(key).set(upd, { merge: true });
  return { ok: true };
});
