// Firestore rules tests. Run with:  npm install && npm run test:rules   (needs Java; uses the local Firebase emulator, never production)
import { initializeTestEnvironment, assertSucceeds, assertFails } from "@firebase/rules-unit-testing";
import { readFileSync } from "node:fs";
import { doc, getDoc, setDoc, updateDoc, deleteDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";

process.on("unhandledRejection", (e) => { console.log("::error title=unhandled::" + String(e && e.message).replace(/[\r\n%]/g, " ").slice(0, 300)); process.exit(2); });
const env = await initializeTestEnvironment({ projectId: "demo-iqra", firestore: { rules: readFileSync(new URL("../firestore.rules", import.meta.url), "utf8"), host: "127.0.0.1", port: 8080 } });
const OWNER = { email: "zaibislam0@gmail.com", email_verified: true, firebase: { sign_in_provider: "google.com" } };
const as = (uid, claims = {}) => env.authenticatedContext(uid, claims).firestore();
const anon = () => env.unauthenticatedContext().firestore();
const now = Date.now();

async function seed() {
  await env.clearFirestore();
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, "roles/admin1"), { role: "admin", by: "owner1", at: now });
    await setDoc(doc(db, "roles/admin2"), { role: "admin", by: "owner1", at: now });
    await setDoc(doc(db, "roles/t0"), { role: "teacher", by: "admin1", at: now });                                   // teacher with NO assignment
    await setDoc(doc(db, "roles/t1"), { role: "teacher", by: "admin1", at: now, classes: ["3"], subjects: ["math"] });
    await setDoc(doc(db, "roles/t2"), { role: "teacher", by: "admin1", at: now, classes: ["4"], subjects: ["math"] });
    await setDoc(doc(db, "students/s3"), { name: "A", cls: "3", email: "", updated: now });
    await setDoc(doc(db, "students/s4"), { name: "B", cls: "4", email: "", updated: now });
    await setDoc(doc(db, "students/sp"), { name: "P", cls: "9", sboard: "punjab", email: "", updated: now });
    await setDoc(doc(db, "students/sf"), { name: "F", cls: "9", sboard: "federal", email: "", updated: now });
    await setDoc(doc(db, "students/sleg"), { name: "L", cls: "9", email: "", updated: now });             // legacy: Grade 9 with no board yet
    await setDoc(doc(db, "students/sfa"), { name: "FA", cls: "F.A", email: "", updated: now });
    const res = (id, o) => setDoc(doc(db, "resources/" + id), { type: "note", title: id, grade: "3", subject: "math", published: true, aud: "all", author: "t1", updated: now, ...o });
    await res("pub3", {}); await res("draft3", { published: false });
    await res("pub9p", { grade: "9", aud: "punjab" }); await res("pub9f", { grade: "9", aud: "federal" }); await res("pub9none", { grade: "9", aud: "none" });
    await res("draft4", { grade: "4", published: false, author: "t2" });
    await setDoc(doc(db, "chapters/c1"), { lesson: { id: "c1" }, bookId: "b", grade: "3", subject: "math", published: true, aud: "all" });
    await setDoc(doc(db, "chapters/c2"), { lesson: { id: "c2" }, bookId: "b", grade: "3", subject: "math", published: false, aud: "all" });
    await setDoc(doc(db, "meta/__version"), { v: "x" });
  });
}
let pass = 0, fail = 0;
async function t(name, fn) { try { await seed(); await fn(); pass++; console.log("  ok   " + name); } catch (e) { fail++; const m = String(e && e.message).split("\n")[0]; console.log("  FAIL " + name + "\n       " + m); if (process.env.GITHUB_ACTIONS) console.log("::error title=" + name.replace(/[:,]/g, " ") + "::" + m.replace(/[\r\n%]/g, " ").slice(0, 300)); } }
const pub = (db, aud) => getDocs(query(collection(db, "resources"), where("published", "==", true), where("aud", "==", aud)));

console.log("Signed-out visitor");
await t("cannot read resources", () => assertFails(getDocs(collection(anon(), "resources"))));
await t("cannot read a profile", () => assertFails(getDoc(doc(anon(), "students/s3"))));
await t("cannot read meta", () => assertFails(getDoc(doc(anon(), "meta/__version"))));

console.log("Student: profile and roles");
await t("reads own profile", () => assertSucceeds(getDoc(doc(as("s3"), "students/s3"))));
await t("cannot read another student's profile", () => assertFails(getDoc(doc(as("s3"), "students/s4"))));
await t("cannot list all students", () => assertFails(getDocs(collection(as("s3"), "students"))));
await t("can update own name and phone", () => assertSucceeds(updateDoc(doc(as("s3"), "students/s3"), { name: "New", phone: "0300", updated: now + 1 })));
await t("cannot change own official class", () => assertFails(updateDoc(doc(as("s3"), "students/s3"), { cls: "10", updated: now + 1 })));
await t("cannot move themselves to F.A", () => assertFails(updateDoc(doc(as("s3"), "students/s3"), { cls: "F.A", updated: now + 1 })));
await t("cannot switch board", () => assertFails(updateDoc(doc(as("sp"), "students/sp"), { sboard: "federal", updated: now + 1 })));
await t("cannot add a role field to the profile", () => assertFails(updateDoc(doc(as("s3"), "students/s3"), { role: "admin", updated: now + 1 })));
await t("cannot create their own role document", () => assertFails(setDoc(doc(as("s3"), "roles/s3"), { role: "admin", by: "s3", at: now })));
await t("cannot make themselves teacher", () => assertFails(setDoc(doc(as("s3"), "roles/s3"), { role: "teacher", by: "s3", at: now, classes: ["3"], subjects: ["math"] })));
await t("cannot read other people's role documents", () => assertFails(getDoc(doc(as("s3"), "roles/t1"))));
await t("can read own role document (none exists)", () => assertSucceeds(getDoc(doc(as("s3"), "roles/s3"))));
await t("cannot delete own profile", () => assertFails(deleteDoc(doc(as("s3"), "students/s3"))));
await t("legacy F.A student can still edit personal details", () => assertSucceeds(updateDoc(doc(as("sfa"), "students/sfa"), { name: "FA2", updated: now + 1 })));
await t("legacy F.A student cannot change class", () => assertFails(updateDoc(doc(as("sfa"), "students/sfa"), { cls: "10", updated: now + 1 })));

console.log("Student: first sign-up");
await t("new student can choose KG (Prep)", () => assertSucceeds(setDoc(doc(as("n1", { email: "n1@x.com" }), "students/n1"), { name: "N", cls: "KG", email: "n1@x.com", updated: now })));
await t("new student can no longer choose Play Group or Nursery", async () => { await assertFails(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "Play Group", updated: now })); await assertFails(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "Nursery", updated: now })); });
await t("an existing Play Group record is kept and its owner can still edit personal details", async () => { await env.withSecurityRulesDisabled(async (c) => { await setDoc(doc(c.firestore(), "students/spg"), { name: "PG", cls: "Play Group", email: "", updated: now }); }); await assertSucceeds(updateDoc(doc(as("spg"), "students/spg"), { name: "PG2", updated: now + 1 })); await assertFails(updateDoc(doc(as("spg"), "students/spg"), { cls: "KG", updated: now + 2 })); });
await t("new student cannot choose F.A", () => assertFails(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "F.A", updated: now })));
await t("new student cannot choose an invented class", () => assertFails(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "Grade 12", updated: now })));
await t("Grade 9 sign-up needs a board", () => assertFails(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "9", updated: now })));
await t("Grade 9 sign-up with Punjab board works", () => assertSucceeds(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "9", sboard: "punjab", updated: now })));
await t("Grade 9 sign-up with an invented board fails", () => assertFails(setDoc(doc(as("n1"), "students/n1"), { name: "N", cls: "9", sboard: "cambridge", updated: now })));
await t("cannot sign up as someone else", () => assertFails(setDoc(doc(as("n1"), "students/s3x"), { name: "N", cls: "3", updated: now })));
await t("legacy Grade 9 profile may set its board once", () => assertSucceeds(updateDoc(doc(as("sleg"), "students/sleg"), { sboard: "federal", updated: now + 1 })));
await t("...but not change it afterwards", async () => { await assertSucceeds(updateDoc(doc(as("sleg"), "students/sleg"), { sboard: "federal", updated: now + 1 })); await assertFails(updateDoc(doc(as("sleg"), "students/sleg"), { sboard: "punjab", updated: now + 2 })); });

console.log("Student: class change requests");
await t("student can request a class change", () => assertSucceeds(setDoc(doc(as("s3"), "classRequests/s3"), { uid: "s3", name: "A", from: "3", to: "4", toBoard: "", status: "pending", at: now })));
await t("cannot approve own request", () => assertFails(setDoc(doc(as("s3"), "classRequests/s3"), { uid: "s3", name: "A", from: "3", to: "4", toBoard: "", status: "approved", at: now })));
await t("cannot file a request for another student", () => assertFails(setDoc(doc(as("s3"), "classRequests/s4"), { uid: "s4", from: "4", to: "5", toBoard: "", status: "pending", at: now })));
await t("cannot request F.A", () => assertFails(setDoc(doc(as("s3"), "classRequests/s3"), { uid: "s3", from: "3", to: "F.A", toBoard: "", status: "pending", at: now })));
await t("request for Grade 10 needs a board", () => assertFails(setDoc(doc(as("s3"), "classRequests/s3"), { uid: "s3", from: "3", to: "10", toBoard: "", status: "pending", at: now })));

console.log("Student: learning content");
await t("sees published content meant for everyone", async () => { const s = await assertSucceeds(pub(as("s3"), "all")); if (s.size !== 1) throw new Error("expected 1 got " + s.size); });
await t("cannot read an unpublished resource", () => assertFails(getDoc(doc(as("s3"), "resources/draft3"))));
await t("cannot dump the whole collection", () => assertFails(getDocs(collection(as("s3"), "resources"))));
await t("cannot query drafts", () => assertFails(getDocs(query(collection(as("s3"), "resources"), where("published", "==", false)))));
await t("student without a board cannot query a board's content", () => assertFails(pub(as("s3"), "punjab")));
await t("Punjab student reads Punjab content", async () => { const s = await assertSucceeds(pub(as("sp"), "punjab")); if (s.size !== 1) throw new Error("expected 1"); });
await t("Punjab student cannot read Federal content (query)", () => assertFails(pub(as("sp"), "federal")));
await t("Punjab student cannot read a Federal item by id", () => assertFails(getDoc(doc(as("sp"), "resources/pub9f"))));
await t("Federal student cannot read a Punjab item by id", () => assertFails(getDoc(doc(as("sf"), "resources/pub9p"))));
await t("nobody but staff reads a Grade 9 item with no board", () => assertFails(getDoc(doc(as("sp"), "resources/pub9none"))));
await t("legacy Grade 9 student without a board sees no board content", () => assertFails(getDoc(doc(as("sleg"), "resources/pub9p"))));
await t("published chapters readable, unpublished not", async () => { await assertSucceeds(getDoc(doc(as("s3"), "chapters/c1"))); await assertFails(getDoc(doc(as("s3"), "chapters/c2"))); });
await t("student cannot create content", () => assertFails(setDoc(doc(as("s3"), "resources/x"), { type: "note", title: "x", grade: "3", subject: "math", published: true, aud: "all", author: "s3", updated: now })));
await t("student cannot publish a resource", () => assertFails(updateDoc(doc(as("s3"), "resources/draft3"), { published: true })));
await t("student cannot delete content", () => assertFails(deleteDoc(doc(as("s3"), "resources/pub3"))));
await t("student cannot write verification meta", () => assertFails(setDoc(doc(as("s3"), "meta/hack"), { m: { status: "verified" } })));
await t("student cannot read the audit log", () => assertFails(getDocs(collection(as("s3"), "auditLog"))));
await t("student cannot write the audit log", () => assertFails(addDoc(collection(as("s3"), "auditLog"), { actor: "s3", action: "x", at: now })));

console.log("Teacher with no assignment");
await t("cannot create content", () => assertFails(setDoc(doc(as("t0"), "resources/n"), { type: "note", title: "n", grade: "3", subject: "math", published: false, author: "t0", updated: now })));
await t("cannot read drafts", () => assertFails(getDoc(doc(as("t0"), "resources/draft3"))));
await t("cannot read profiles", () => assertFails(getDoc(doc(as("t0"), "students/s3"))));

console.log("Teacher with class 3 + math");
await t("creates a draft inside the assignment", () => assertSucceeds(setDoc(doc(as("t1"), "resources/n"), { type: "note", title: "n", grade: "3", subject: "math", published: false, author: "t1", updated: now })));
await t("cannot publish (published:true)", () => assertFails(setDoc(doc(as("t1"), "resources/n"), { type: "note", title: "n", grade: "3", subject: "math", published: true, author: "t1", updated: now })));
await t("cannot create in a class not assigned", () => assertFails(setDoc(doc(as("t1"), "resources/n"), { type: "note", title: "n", grade: "4", subject: "math", published: false, author: "t1", updated: now })));
await t("cannot create in a subject not assigned", () => assertFails(setDoc(doc(as("t1"), "resources/n"), { type: "note", title: "n", grade: "3", subject: "english", published: false, author: "t1", updated: now })));
await t("cannot write as someone else", () => assertFails(setDoc(doc(as("t1"), "resources/n"), { type: "note", title: "n", grade: "3", subject: "math", published: false, author: "t2", updated: now })));
await t("can edit own draft", () => assertSucceeds(updateDoc(doc(as("t1"), "resources/draft3"), { title: "edited", updated: now + 1 })));
await t("cannot move own draft to another class", () => assertFails(updateDoc(doc(as("t1"), "resources/draft3"), { grade: "4" })));
await t("cannot edit another teacher's draft", () => assertFails(updateDoc(doc(as("t1"), "resources/draft4"), { title: "x" })));
await t("cannot edit approved content without sending it back to review", () => assertFails(updateDoc(doc(as("t1"), "resources/pub3"), { title: "x" })));
await t("cannot delete published content", () => assertFails(deleteDoc(doc(as("t1"), "resources/pub3"))));
await t("can delete own draft", () => assertSucceeds(deleteDoc(doc(as("t1"), "resources/draft3"))));
await t("cannot read another class's draft", () => assertFails(getDoc(doc(as("t1"), "resources/draft4"))));
await t("can read published content (query)", () => assertSucceeds(getDocs(query(collection(as("t1"), "resources"), where("published", "==", true)))));
await t("can read drafts of own class (query)", () => assertSucceeds(getDocs(query(collection(as("t1"), "resources"), where("grade", "==", "3")))));
await t("cannot dump the whole collection", () => assertFails(getDocs(collection(as("t1"), "resources"))));
await t("cannot write chapters", () => assertFails(setDoc(doc(as("t1"), "chapters/z"), { lesson: {}, bookId: "b", grade: "3", subject: "math", published: false })));
await t("cannot write meta", () => assertFails(setDoc(doc(as("t1"), "meta/hack"), { m: {} })));
await t("cannot grant roles", () => assertFails(setDoc(doc(as("t1"), "roles/s3"), { role: "teacher", by: "t1", at: now, classes: ["3"], subjects: ["math"] })));
await t("cannot widen own assignment", () => assertFails(updateDoc(doc(as("t1"), "roles/t1"), { classes: ["3", "4"] })));
await t("cannot list students", () => assertFails(getDocs(collection(as("t1"), "students"))));
await t("can append an audit entry for themselves", () => assertSucceeds(addDoc(collection(as("t1"), "auditLog"), { actor: "t1", action: "save", target: "resources/n", at: now })));
await t("cannot forge another actor in the audit log", () => assertFails(addDoc(collection(as("t1"), "auditLog"), { actor: "admin1", action: "save", at: now })));

console.log("Admin (roles document)");
const A = () => as("admin1");
await t("reads all students", () => assertSucceeds(getDocs(collection(A(), "students"))));
await t("reads the whole resources collection", () => assertSucceeds(getDocs(collection(A(), "resources"))));
await t("publishes content", () => assertSucceeds(updateDoc(doc(A(), "resources/draft3"), { published: true })));
await t("assigns classes and subjects to a teacher", () => assertSucceeds(setDoc(doc(A(), "roles/t0"), { role: "teacher", by: "admin1", at: now, classes: ["5"], subjects: ["english"] })));
await t("cannot assign an invented class", () => assertFails(setDoc(doc(A(), "roles/t0"), { role: "teacher", by: "admin1", at: now, classes: ["F.A"], subjects: [] })));
await t("cannot create another admin (owner only)", () => assertFails(setDoc(doc(A(), "roles/s3"), { role: "admin", by: "admin1", at: now })));
await t("cannot demote or change another admin", () => assertFails(setDoc(doc(A(), "roles/admin2"), { role: "teacher", by: "admin1", at: now })));
await t("cannot edit own role document", () => assertFails(updateDoc(doc(A(), "roles/admin1"), { classes: [] })));
await t("approves a class change and records history", async () => {
  await assertSucceeds(updateDoc(doc(A(), "students/s3"), { cls: "4", updated: now + 1 }));
  await assertSucceeds(addDoc(collection(A(), "students/s3/history"), { type: "class", from: "3", to: "4", at: now, by: "admin1" }));
});
await t("history cannot be edited or deleted", async () => { const r = await addDoc(collection(A(), "students/s3/history"), { type: "class", at: now }); await assertFails(updateDoc(r, { to: "x" })); await assertFails(deleteDoc(r)); });
await t("audit log: admin reads, nobody edits or deletes", async () => { const r = await addDoc(collection(A(), "auditLog"), { actor: "admin1", action: "x", at: now }); await assertSucceeds(getDoc(r)); await assertFails(updateDoc(r, { action: "y" })); await assertFails(deleteDoc(r)); });
await t("writes verification meta", () => assertSucceeds(setDoc(doc(A(), "meta/lesson1"), { m: { status: "verified" } })));
await t("an unknown collection is closed even to admins", () => assertFails(setDoc(doc(A(), "secrets/x"), { a: 1 })));

console.log("Owner");
await t("owner (verified Google e-mail) can create an admin", () => assertSucceeds(setDoc(doc(as("owner1", OWNER), "roles/s3"), { role: "admin", by: "owner1", at: now })));
await t("same e-mail but NOT verified is just a student", () => assertFails(setDoc(doc(as("fake", { ...OWNER, email_verified: false }), "roles/s3"), { role: "admin", by: "fake", at: now })));
await t("same e-mail through a password sign-in is just a student", () => assertFails(setDoc(doc(as("fake", { ...OWNER, firebase: { sign_in_provider: "password" } }), "roles/s3"), { role: "admin", by: "fake", at: now })));
await t("custom admin claim works without any e-mail", () => assertSucceeds(getDocs(collection(as("c1", { admin: true }), "students"))));
await t("owner claim can create an admin without any e-mail", () => assertSucceeds(setDoc(doc(as("c2", { owner: true }), "roles/s3"), { role: "admin", by: "c2", at: now })));

console.log("\n" + pass + " passed, " + fail + " failed");
await env.cleanup();
process.exit(fail ? 1 : 0);
