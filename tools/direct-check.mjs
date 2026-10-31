#!/usr/bin/env node
/* Sends REAL requests straight to Firestore (no website, no app code) with the ID tokens of a test student, a test teacher and an admin,
   and checks that forbidden things are refused. Run it against STAGING first, then production.
     STUDENT_TOKEN=... TEACHER_TOKEN=... ADMIN_TOKEN=... STUDENT_UID=... node tools/direct-check.mjs
   Get an ID token: sign in on the site as that person, then in the browser console run:  await firebase auth currentUser.getIdToken()
   (or use the Firebase Auth REST API).  Use throw-away test accounts, never real children's accounts. */
const P = "iqra-d3243", B = "https://firestore.googleapis.com/v1/projects/" + P + "/databases/(default)/documents";
const T = { student: process.env.STUDENT_TOKEN, teacher: process.env.TEACHER_TOKEN, admin: process.env.ADMIN_TOKEN }, SUID = process.env.STUDENT_UID;
if (!T.student || !T.teacher || !T.admin || !SUID) { console.error("Set STUDENT_TOKEN, TEACHER_TOKEN, ADMIN_TOKEN and STUDENT_UID."); process.exit(1); }
const call = async (who, method, path, body) => { const r = await fetch(B + path, { method, headers: { Authorization: "Bearer " + T[who], "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined }); return r.status; };
const q = async (who, col, filters) => { const r = await fetch(B + ":runQuery", { method: "POST", headers: { Authorization: "Bearer " + T[who], "Content-Type": "application/json" }, body: JSON.stringify({ structuredQuery: { from: [{ collectionId: col }], where: filters ? { compositeFilter: { op: "AND", filters } } : undefined, limit: 5 } }) }); const j = await r.json(); return Array.isArray(j) && j[0] && j[0].error ? j[0].error.code : r.status; };
const eq = (f, v) => ({ fieldFilter: { field: { fieldPath: f }, op: "EQUAL", value: typeof v === "boolean" ? { booleanValue: v } : { stringValue: v } } });
let bad = 0;
const must = (name, got, ok) => { const pass = ok.includes(got); if (!pass) bad++; console.log((pass ? "  ok   " : "  FAIL ") + name + "  (HTTP " + got + ")"); };
const DENIED = [403, 401], OK = [200];
console.log("Student");
must("reads the whole resources collection", await q("student", "resources"), DENIED);
must("reads unpublished resources", await q("student", "resources", [eq("published", false)]), DENIED);
must("lists all students", await q("student", "students"), DENIED);
must("writes a role document for self", await call("student", "PATCH", "/roles/" + SUID, { fields: { role: { stringValue: "admin" }, by: { stringValue: SUID }, at: { integerValue: "1" } } }), DENIED);
must("changes own class", await call("student", "PATCH", "/students/" + SUID + "?updateMask.fieldPaths=cls", { fields: { cls: { stringValue: "10" } } }), DENIED);
must("changes own board", await call("student", "PATCH", "/students/" + SUID + "?updateMask.fieldPaths=sboard", { fields: { sboard: { stringValue: "federal" } } }), DENIED);
must("writes verification meta", await call("student", "PATCH", "/meta/hack", { fields: { m: { mapValue: {} } } }), DENIED);
must("reads the audit log", await q("student", "auditLog"), DENIED);
console.log("Teacher (use one with NO assignment, then one with an assignment)");
must("reads the whole resources collection", await q("teacher", "resources"), DENIED);
must("lists all students", await q("teacher", "students"), DENIED);
must("publishes content", await call("teacher", "PATCH", "/resources/doesnotexist-check?updateMask.fieldPaths=published", { fields: { published: { booleanValue: true } } }), DENIED);
must("writes chapters", await call("teacher", "PATCH", "/chapters/hack", { fields: { published: { booleanValue: true } } }), DENIED);
must("writes meta", await call("teacher", "PATCH", "/meta/hack", { fields: {} }), DENIED);
must("grants roles", await call("teacher", "PATCH", "/roles/" + SUID, { fields: { role: { stringValue: "teacher" } } }), DENIED);
console.log("Admin");
must("lists students", await q("admin", "students"), OK);
must("reads the audit log", await q("admin", "auditLog"), OK);
must("an unknown collection stays closed", await call("admin", "GET", "/secrets/x"), DENIED);
console.log(bad ? "\n" + bad + " check(s) FAILED: do not publish." : "\nAll checks passed.");
process.exit(bad ? 1 : 0);
