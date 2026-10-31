// Checks the student profile-saving logic in app/gate.js with a fake Firestore: class/board changes must become requests, never direct writes.
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
const src = readFileSync(new URL("../app/gate.js", import.meta.url), "utf8");
const i = src.indexOf("window.__iqSaveProfile=async p=>{"), j = src.indexOf("function profileView(u,d){");
const code = src.slice(i, j);
let writes;
const F = { setDoc: async (ref, data, opt) => { writes.push([ref, data, opt]); }, doc: (fs, c, id) => c + "/" + id };
async function run(profile, p) {
  writes = []; const window = { __iqProfile: profile }; const auth = { currentUser: { uid: "u1" } }, fs = {};
  new Function("window", "auth", "F", "fs", code + "; return window.__iqSaveProfile;")(window, auth, F, fs);
  const r = await window.__iqSaveProfile(p); return { r, writes, window };
}
let ok = 0; const t = async (n, f) => { await f(); ok++; console.log("  ok   " + n); };
await t("same class, new name -> plain update, no request", async () => { const o = await run({ cls: "3" }, { name: "Ali", cls: "3" }); assert.equal(o.r, true); assert.equal(o.writes.length, 1); assert.equal(o.writes[0][1].cls, undefined); });
await t("different class -> request only, student doc has NO cls", async () => { const o = await run({ cls: "3", name: "Ali" }, { name: "Ali", cls: "4" }); assert.equal(o.r, "requested"); assert.equal(o.writes[0][0], "students/u1"); assert.equal(o.writes[0][1].cls, undefined); assert.equal(o.writes[1][0], "classRequests/u1"); assert.equal(o.writes[1][1].to, "4"); assert.equal(o.writes[1][1].status, "pending"); });
await t("moving to F.A is only ever a request (rules then refuse it)", async () => { const o = await run({ cls: "3" }, { name: "A", cls: "F.A" }); assert.equal(o.r, "requested"); assert.equal(o.writes[0][1].cls, undefined); });
await t("Grade 9 -> change board = request", async () => { const o = await run({ cls: "9", sboard: "punjab" }, { name: "A", cls: "9", sboard: "federal" }); assert.equal(o.r, "requested"); assert.equal(o.writes[0][1].sboard, undefined); assert.equal(o.writes[1][1].toBoard, "federal"); });
await t("legacy Grade 9 without a board may set it once", async () => { const o = await run({ cls: "9" }, { name: "A", cls: "9", sboard: "punjab" }); assert.equal(o.r, true); assert.equal(o.writes[0][1].sboard, "punjab"); assert.equal(o.writes.length, 1); });
await t("Grade 3 -> Grade 10 needs a board in the request", async () => { const o = await run({ cls: "3" }, { name: "A", cls: "10", sboard: "federal" }); assert.equal(o.writes[1][1].to, "10"); assert.equal(o.writes[1][1].toBoard, "federal"); });
await t("class 4 request never carries a board", async () => { const o = await run({ cls: "9", sboard: "punjab" }, { name: "A", cls: "4", sboard: "punjab" }); assert.equal(o.writes[1][1].toBoard, ""); });
await t("no profile yet (first sign-up) -> class written once", async () => { const o = await run({}, { name: "A", cls: "Nursery" }); assert.equal(o.r, true); assert.equal(o.writes[0][1].cls, "Nursery"); });
await t("legacy F.A student editing only the name -> no request", async () => { const o = await run({ cls: "F.A" }, { name: "A", cls: "F.A" }); assert.equal(o.r, true); assert.equal(o.writes.length, 1); });
console.log("\n" + ok + " passed");
