/* IQRA files: stores book / video files in Cloudflare R2 and serves them to the site.
   - POST /upload?name=...   admin only (Firebase login token checked here). Body = the file bytes.
   - GET  /f/<id>.<ext>      public read, with Range support (the book reader and video player need it).
   - POST /generate          admin only. Makes study notes, test questions and (for English books) an Urdu guide
                             for ONE chapter of text, using Cloudflare Workers AI (binding AI).
   No secrets live in this file. The bucket is bound as BOOKS in wrangler.toml. */

const JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const TYPES = { "application/pdf": "pdf", "video/mp4": "mp4", "video/webm": "webm" }; // photos are turned into a PDF in the browser first
const MAX_BYTES = 90 * 1024 * 1024; // Workers accept request bodies up to 100 MB
const KEY_RE = /^f\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(pdf|mp4|webm)$/;

function origins(env) { return String(env.ALLOWED_ORIGINS || "").split(",").map(function (s) { return s.trim(); }).filter(Boolean); }
function cors(req, env) {
  const o = req.headers.get("Origin") || "", list = origins(env), ok = list.indexOf(o) > -1;
  return {
    "Access-Control-Allow-Origin": ok ? o : (list[0] || ""),
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type, Range",
    "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, ETag",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}
function json(o, status, h) {
  return new Response(JSON.stringify(o), { status: status || 200, headers: Object.assign({ "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }, h) });
}

// ---------- Firebase ID token check (RS256, Google public keys) ----------
let jwks = { keys: null, exp: 0 };
async function getKeys() {
  const now = Date.now();
  if (jwks.keys && now < jwks.exp) return jwks.keys;
  const r = await fetch(JWKS_URL);
  if (!r.ok) throw new Error("jwks");
  const j = await r.json(), m = /max-age=(\d+)/.exec(r.headers.get("Cache-Control") || "");
  jwks = { keys: j.keys || [], exp: now + Math.min(m ? Number(m[1]) : 3600, 3600) * 1000 };
  return jwks.keys;
}
function b64u(s) {
  s = String(s).replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "=";
  const bin = atob(s), u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u;
}
async function verifyToken(token, env) {
  const p = String(token || "").split(".");
  if (p.length !== 3) throw new Error("format");
  const dec = new TextDecoder(), header = JSON.parse(dec.decode(b64u(p[0]))), claims = JSON.parse(dec.decode(b64u(p[1])));
  if (header.alg !== "RS256" || !header.kid) throw new Error("alg");
  const jwk = (await getKeys()).filter(function (k) { return k.kid === header.kid; })[0];
  if (!jwk) throw new Error("kid");
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64u(p[2]), new TextEncoder().encode(p[0] + "." + p[1]));
  if (!ok) throw new Error("signature");
  const now = Math.floor(Date.now() / 1000);
  if (claims.aud !== env.PROJECT_ID || claims.iss !== "https://securetoken.google.com/" + env.PROJECT_ID) throw new Error("audience");
  if (!claims.sub || typeof claims.sub !== "string" || claims.exp <= now || claims.iat > now + 60) throw new Error("expired");
  return claims;
}
// Same rule the site uses: the owner (verified email) or anyone whose roles/<uid> document says "admin".
async function isAdmin(claims, token, env) {
  const mail = String(claims.email || "").toLowerCase();
  if (mail && claims.email_verified === true && mail === String(env.OWNER_EMAIL || "").toLowerCase()) return true;
  const url = "https://firestore.googleapis.com/v1/projects/" + encodeURIComponent(env.PROJECT_ID) + "/databases/(default)/documents/roles/" + encodeURIComponent(claims.sub);
  const r = await fetch(url, { headers: { Authorization: "Bearer " + token } });
  if (!r.ok) return false;
  const d = await r.json();
  return !!(d && d.fields && d.fields.role && d.fields.role.stringValue === "admin");
}

// Returns { claims } for a signed-in admin, or a Response with the error to send back.
async function adminOnly(req, env, h) {
  const m = /^Bearer (.+)$/.exec(req.headers.get("Authorization") || "");
  if (!m) return json({ error: "login" }, 401, h);
  let claims;
  try { claims = await verifyToken(m[1], env); } catch (e) { return json({ error: "login" }, 401, h); }
  let admin = false;
  try { admin = await isAdmin(claims, m[1], env); } catch (e) { return json({ error: "role" }, 503, h); }
  if (!admin) return json({ error: "admin only" }, 403, h);
  return { claims: claims };
}

async function upload(req, env, h) {
  const a = await adminOnly(req, env, h);
  if (a instanceof Response) return a;
  const claims = a.claims;

  const type = String(req.headers.get("Content-Type") || "").split(";")[0].trim().toLowerCase(), ext = TYPES[type];
  if (!ext) return json({ error: "type" }, 415, h);
  const len = Number(req.headers.get("Content-Length"));
  if (!len) return json({ error: "length" }, 411, h);
  if (len > MAX_BYTES) return json({ error: "too big" }, 413, h);
  if (!req.body) return json({ error: "empty" }, 400, h);

  const id = crypto.randomUUID(), key = "f/" + id + "." + ext;
  const name = new URL(req.url).searchParams.get("name") || "";
  await env.BOOKS.put(key, req.body, { httpMetadata: { contentType: type }, customMetadata: { by: claims.sub, name: name.slice(0, 200) } });
  return json({ id: id, url: new URL(req.url).origin + "/" + key, name: name, size: len, type: type }, 200, h);
}

// ---------- study material for one chapter (Workers AI) ----------
const MODEL = "@cf/openai/gpt-oss-120b";
const MAX_TEXT = 9000;
function str(x, n) { return String(x == null ? "" : x).replace(/[|\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, n); }
function list(a, n, len) { return (Array.isArray(a) ? a : []).map(function (x) { return str(x, len); }).filter(Boolean).slice(0, n); }
function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function parseJson(t) {
  t = String(t || "").replace(/```(?:json)?/gi, "");
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a < 0 || b <= a) throw new Error("no json");
  return JSON.parse(t.slice(a, b + 1));
}
// the model's reply can come back in a few shapes (chat style, plain response, or a list of output items)
function textOf(res) {
  if (!res) return "";
  if (typeof res === "string") return res;
  const m = res.choices && res.choices[0] && res.choices[0].message;
  if (m && typeof m.content === "string" && m.content) return m.content;
  if (typeof res.response === "string" && res.response) return res.response;
  if (res.response && typeof res.response === "object") return JSON.stringify(res.response);
  if (Array.isArray(res.output)) {
    let t = "";
    res.output.forEach(function (o) { (Array.isArray(o && o.content) ? o.content : []).forEach(function (c) { if (c && typeof c.text === "string" && (!c.type || c.type === "output_text")) t += c.text; }); });
    if (t) return t;
  }
  return "";
}
function clean(r, wantGuide, bi) {
  const out = { notes: list(r.notes, 8, 240), questions: [] };
  if (bi) { const nu = list(r.notes_ur, 8, 300); out.notesUr = nu.length === out.notes.length ? nu : []; }
  (Array.isArray(r.questions) ? r.questions : []).forEach(function (q) {
    const opts = list(q && q.options, 4, 90), ans = Number(q && q.answer);
    if (!q || !str(q.q, 240) || opts.length !== 4 || new Set(opts).size !== 4 || !(ans >= 0 && ans <= 3) || Math.floor(ans) !== ans) return;
    if (opts.some(function (o) { return /all of the above|none of the above/i.test(o); })) return;
    const order = shuffle([0, 1, 2, 3]), item = { q: str(q.q, 240), o: order.map(function (i) { return opts[i]; }), c: order.indexOf(ans) };
    if (bi) {
      const ou = list(q.options_ur, 4, 90), qu = str(q.q_ur, 300);
      if (qu && ou.length === 4) { item.qu = qu; item.ou = order.map(function (i) { return ou[i]; }); }
    }
    out.questions.push(item);
  });
  out.questions = out.questions.slice(0, 6);
  if (wantGuide) {
    const g = r.guide || {};
    out.guide = {
      summary: list(g.summary, 8, 260),
      words: (Array.isArray(g.words) ? g.words : []).map(function (w) { return { en: str(w && w.en, 60), ur: str(w && w.ur, 80) }; }).filter(function (w) { return w.en && w.ur; }).slice(0, 12),
      tips: list(g.tips, 5, 200)
    };
  }
  return out;
}
function promptFor(b) {
  const lang = b.lang === "ur" ? "Urdu (Urdu script)" : "simple English";
  let p = "Class level: " + b.grade + (b.subject ? ", subject: " + b.subject : "") + ". Chapter: " + b.title + ".\n" +
    "Using ONLY the chapter text below, prepare study material. Do not add facts that are not in the text.\n" +
    "Return JSON only, with exactly this shape:\n" +
    '{"notes":["..."]' + (b.bi ? ',"notes_ur":["..."]' : "") + ',"questions":[{"q":"...","options":["...","...","...","..."],"answer":0' + (b.bi ? ',"q_ur":"...","options_ur":["...","...","...","..."]' : "") + "}]" + (b.guide ? ',"guide":{"summary":["..."],"words":[{"en":"...","ur":"..."}],"tips":["..."]}' : "") + "}\n" +
    "- notes: 5 to 8 short revision points in " + lang + ", easy for the class level.\n" +
    "- questions: 5 multiple-choice questions in " + lang + ". Each has exactly 4 different options and exactly one correct option; answer is the 0-based index of the correct option. Questions must be answerable from the text. Never use 'all of the above' or 'none of the above'.\n";
  if (b.bi) p += "- notes_ur: the same notes translated into simple Urdu (Urdu script), same number and same order as notes.\n- q_ur: each question translated into simple Urdu. options_ur: each option translated into Urdu, in the same order as options (keep numbers and symbols as they are).\n";
  if (b.guide) p += "- guide.summary: 5 to 8 short, simple points in Urdu script explaining the chapter.\n- guide.words: 8 to 12 important English words from the text, each with its Urdu meaning in Urdu script.\n- guide.tips: 3 to 5 short Urdu tips on how to study this chapter.\n";
  return p + "\nChapter text:\n" + b.text;
}
async function generate(req, env, h) {
  const a = await adminOnly(req, env, h);
  if (a instanceof Response) return a;
  if (!env.AI) return json({ error: "ai not set up" }, 501, h);
  if (Number(req.headers.get("Content-Length")) > 60000) return json({ error: "too big" }, 413, h);
  let b;
  try { b = await req.json(); } catch (e) { return json({ error: "json" }, 400, h); }
  const text = str(b && b.text, MAX_TEXT + 100).slice(0, MAX_TEXT);
  if (text.length < 200) return json({ error: "text too short" }, 422, h);
  const body = { text: text, title: str(b.title, 120) || "Chapter", grade: str(b.grade, 12) || "school", subject: str(b.subject, 40), lang: b.lang === "ur" ? "ur" : "en", guide: !!b.guide && b.lang !== "ur", bi: b.lang !== "ur" && b.bilingual !== false };
  let res, out;
  try {
    res = await env.AI.run(MODEL, { messages: [{ role: "system", content: "You prepare study material for Pakistani school students. You write correct, simple, class-appropriate content and answer with JSON only." }, { role: "user", content: promptFor(body) }], max_tokens: body.bi ? 7000 : 3500, temperature: 0.2 });
    out = clean(parseJson(textOf(res)), body.guide, body.bi);
  } catch (e) { return json({ error: "ai failed" }, 502, h); }
  if (!out.notes.length && !out.questions.length) return json({ error: "empty" }, 502, h);
  return json(out, 200, h);
}

async function download(req, env, h, key) {
  if (!KEY_RE.test(key)) return json({ error: "not found" }, 404, h);
  const head = req.method === "HEAD";
  const obj = head ? await env.BOOKS.head(key) : await env.BOOKS.get(key, { range: req.headers, onlyIf: req.headers });
  if (!obj) return json({ error: "not found" }, 404, h);
  const out = new Headers(h);
  obj.writeHttpMetadata(out);
  out.set("ETag", obj.httpEtag);
  out.set("Accept-Ranges", "bytes");
  out.set("Cache-Control", "public, max-age=31536000, immutable");
  out.set("X-Content-Type-Options", "nosniff");
  if (head) { out.set("Content-Length", String(obj.size)); return new Response(null, { headers: out }); }
  if (obj.range) {
    const r = obj.range, start = r.offset !== undefined ? r.offset : obj.size - r.suffix, end = r.end !== undefined ? r.end : (r.length !== undefined ? start + r.length - 1 : obj.size - 1);
    out.set("Content-Range", "bytes " + start + "-" + end + "/" + obj.size);
    out.set("Content-Length", String(end - start + 1));
  } else if (obj.body) out.set("Content-Length", String(obj.size));
  const status = !obj.body ? 304 : (obj.range ? 206 : 200);
  return new Response(obj.body || null, { headers: out, status: status });
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url), h = cors(req, env), o = req.headers.get("Origin");
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: h });
    if (o && origins(env).indexOf(o) < 0 && req.method === "POST") return json({ error: "origin not allowed" }, 403, h);
    if (url.pathname === "/upload" && req.method === "POST") return upload(req, env, h);
    if (url.pathname === "/generate" && req.method === "POST") return generate(req, env, h);
    if (url.pathname.indexOf("/f/") === 0 && (req.method === "GET" || req.method === "HEAD")) return download(req, env, h, url.pathname.slice(1));
    return json({ error: "not found" }, 404, h);
  }
};
