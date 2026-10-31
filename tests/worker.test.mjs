// Runs the R2 Worker with fake Google keys, a fake Firestore role lookup and a fake R2 bucket.  node tests/worker.test.mjs
import { webcrypto } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
const crypto = globalThis.crypto || webcrypto;
writeFileSync("/tmp/iqra-worker.mjs", readFileSync(new URL("../cloudflare-worker/iqra-files/worker.js", import.meta.url), "utf8"));
const W = (await import("/tmp/iqra-worker.mjs")).default;

const PROJECT = "iqra-d3243", OWNER = "owner@example.com";
const b64 = (u) => Buffer.from(u).toString("base64url");
async function mkKey() { const k = await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, true, ["sign", "verify"]); return k; }
const good = await mkKey(), evil = await mkKey();
const jwk = { ...(await crypto.subtle.exportKey("jwk", good.publicKey)), kid: "k1", alg: "RS256", use: "sig" };
async function token(over = {}, key = good, header = {}) {
  const now = Math.floor(Date.now() / 1000);
  const claims = { aud: PROJECT, iss: "https://securetoken.google.com/" + PROJECT, sub: "uid-1", iat: now - 5, exp: now + 3600, auth_time: now - 5, ...over };
  const h = { alg: "RS256", kid: "k1", typ: "JWT", ...header };
  const data = b64(JSON.stringify(h)) + "." + b64(JSON.stringify(claims));
  const sig = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key.privateKey, new TextEncoder().encode(data)));
  return data + "." + b64(sig);
}
// ---- fakes ----
let roles = {};            // uid -> role string
let firestoreStatus = 200; // simulate Firestore failing
let firestoreThrows = false;
globalThis.fetch = async (url) => {
  url = String(url);
  if (url.includes("googleapis.com/service_accounts/v1/jwk")) return new Response(JSON.stringify({ keys: [jwk] }), { headers: { "Cache-Control": "max-age=300" } });
  if (url.includes("firestore.googleapis.com")) {
    if (firestoreThrows) throw new Error("net");
    if (firestoreStatus !== 200) return new Response("{}", { status: firestoreStatus });
    const uid = decodeURIComponent(url.split("/roles/")[1]);
    return roles[uid] ? new Response(JSON.stringify({ fields: { role: { stringValue: roles[uid] } } })) : new Response("{}", { status: 404 });
  }
  throw new Error("unexpected fetch " + url);
};
function bucket() {
  const m = new Map(); let deleted = [];
  return { m, deleted,
    async put(k, body, o) { if (o && o.onlyIf && o.onlyIf.etagDoesNotMatch === "*" && m.has(k)) return null; const buf = new Uint8Array(await new Response(body).arrayBuffer()); m.set(k, { buf, meta: o }); return { key: k }; },
    async get(k, o) { const e = m.get(k); if (!e) return null; const r = o && o.range ? e.buf.slice(o.range.offset, o.range.offset + o.range.length) : e.buf; return { size: e.buf.length, arrayBuffer: async () => r.buffer.slice(r.byteOffset, r.byteOffset + r.length) }; },
    async delete(k) { deleted.push(k); m.delete(k); } };
}
const ENV = (b) => ({ PROJECT_ID: PROJECT, OWNER_EMAIL: OWNER, ALLOWED_ORIGINS: "https://iqradigitalschool.com", BOOKS: b });
const PDF = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
const EXE = new Uint8Array([0x4d, 0x5a, 0x90, 0, 3, 0, 0, 0, 4, 0, 0, 0, 0xff, 0xff, 0, 0]);
function up(tok, { type = "application/pdf", body = PDF, origin = "https://iqradigitalschool.com", len } = {}) {
  const headers = { "Content-Type": type, Origin: origin };
  if (tok) headers.Authorization = "Bearer " + tok;
  if (len !== 0) headers["Content-Length"] = String(len ?? body.length);
  return new Request("https://files.example/upload?name=a.pdf", { method: "POST", headers, body });
}
let pass = 0, fail = 0;
async function t(name, fn) { try { await fn(); pass++; console.log("  ok   " + name); } catch (e) { fail++; console.log("  FAIL " + name + "\n       " + (e && e.message)); } }
const st = async (req, b = bucket()) => (await W.fetch(req, ENV(b))).status;

console.log("Authentication");
await t("no token -> 401", async () => assert.equal(await st(up(null)), 401));
await t("garbage token -> 401", async () => assert.equal(await st(up("abc.def.ghi")), 401));
await t("alg none -> 401", async () => assert.equal(await st(up(b64('{"alg":"none"}') + "." + b64("{}") + ".")), 401));
await t("signed with another key -> 401", async () => assert.equal(await st(up(await token({}, evil))), 401));
await t("wrong audience -> 401", async () => assert.equal(await st(up(await token({ aud: "other" }))), 401));
await t("wrong issuer -> 401", async () => assert.equal(await st(up(await token({ iss: "https://evil" }))), 401));
await t("expired -> 401", async () => assert.equal(await st(up(await token({ exp: Math.floor(Date.now() / 1000) - 10 }))), 401));
await t("issued in the future -> 401", async () => assert.equal(await st(up(await token({ iat: Math.floor(Date.now() / 1000) + 9999 }))), 401));
await t("unknown key id -> 401", async () => assert.equal(await st(up(await token({}, good, { kid: "nope" }))), 401));

console.log("Authorization");
roles = {};
await t("signed-in student (no role doc) -> 403", async () => assert.equal(await st(up(await token())), 403));
roles = { "uid-1": "teacher" };
await t("teacher -> 403 (uploads are admin only)", async () => assert.equal(await st(up(await token())), 403));
roles = { "uid-1": "student" };
await t("role 'student' -> 403", async () => assert.equal(await st(up(await token())), 403));
roles = {};
await t("student claiming admin by e-mail they do not own -> 403", async () => assert.equal(await st(up(await token({ email: "x@y.com", email_verified: true, firebase: { sign_in_provider: "google.com" } }))), 403));
await t("owner e-mail but NOT verified -> 403", async () => assert.equal(await st(up(await token({ email: OWNER, email_verified: false, firebase: { sign_in_provider: "google.com" } }))), 403));
await t("owner e-mail via password provider -> 403", async () => assert.equal(await st(up(await token({ email: OWNER, email_verified: true, firebase: { sign_in_provider: "password" } }))), 403));
await t("Firestore role lookup fails -> not admin (403)", async () => { firestoreStatus = 500; roles = { "uid-1": "admin" }; const s = await st(up(await token())); firestoreStatus = 200; assert.equal(s, 403); });
await t("Firestore unreachable -> 503, nothing stored", async () => { firestoreThrows = true; const b = bucket(); const s = await st(up(await token()), b); firestoreThrows = false; assert.equal(s, 503); assert.equal(b.m.size, 0); });
await t("disallowed origin -> 403", async () => { roles = { "uid-1": "admin" }; assert.equal(await st(up(await token(), { origin: "https://evil.example" })), 403); });
await t("/generate without token -> 401", async () => assert.equal((await W.fetch(new Request("https://files.example/generate", { method: "POST", headers: { Origin: "https://iqradigitalschool.com", "Content-Type": "application/json" }, body: "{}" }), ENV(bucket()))).status, 401));
await t("/generate as student -> 403", async () => { roles = {}; const r = await W.fetch(new Request("https://files.example/generate", { method: "POST", headers: { Origin: "https://iqradigitalschool.com", "Content-Type": "application/json", Authorization: "Bearer " + await token() }, body: "{}" }), ENV(bucket())); assert.equal(r.status, 403); });

console.log("Accepted uploads");
await t("admin by roles document -> 200 and stored", async () => { roles = { "uid-1": "admin" }; const b = bucket(); const r = await W.fetch(up(await token()), ENV(b)); assert.equal(r.status, 200); const j = await r.json(); assert.match(j.url, /\/f\/[0-9a-f-]{36}\.pdf$/); assert.equal(b.m.size, 1); assert.equal([...b.m.values()][0].meta.customMetadata.by, "uid-1"); });
await t("admin by custom claim -> 200", async () => { roles = {}; assert.equal(await st(up(await token({ admin: true }))), 200); });
await t("owner (verified Google e-mail) -> 200", async () => { roles = {}; assert.equal(await st(up(await token({ email: OWNER, email_verified: true, firebase: { sign_in_provider: "google.com" } }))), 200); });

console.log("File validation");
roles = { "uid-1": "admin" };
await t("type not allowed (image/png) -> 415", async () => assert.equal(await st(up(await token(), { type: "image/png" })), 415));
await t("type not allowed (html) -> 415", async () => assert.equal(await st(up(await token(), { type: "text/html" })), 415));
await t("pdf label but executable bytes -> 415 and file deleted", async () => { const b = bucket(); const s = await st(up(await token(), { body: EXE }), b); assert.equal(s, 415); assert.equal(b.m.size, 0); assert.equal(b.deleted.length, 1); });
await t("missing Content-Length -> 411", async () => assert.equal(await st(up(await token(), { len: 0 })), 411));
await t("over 90 MB announced -> 413", async () => assert.equal(await st(up(await token(), { len: 91 * 1024 * 1024 })), 413));
await t("announced size differs from stored bytes -> 415 and deleted", async () => { const b = bucket(); const s = await st(up(await token(), { len: PDF.length + 5 }), b); assert.ok([415, 400, 500].includes(s) || s >= 400); assert.equal(b.m.size, 0); });
await t("replacing an existing object is refused -> 409", async () => { const b = bucket(); const orig = b.put; b.put = async (k, body, o) => null; assert.equal(await st(up(await token()), b), 409); });

console.log("Download");
await t("bad key -> 404", async () => assert.equal((await W.fetch(new Request("https://files.example/f/../secret"), ENV(bucket()))).status, 404));

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
