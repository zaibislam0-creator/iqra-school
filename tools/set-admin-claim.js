#!/usr/bin/env node
/* Gives (or removes) a TRUSTED admin/owner flag on a Firebase account, so the rules and the R2 Worker no longer depend on an e-mail comparison.
   Run on YOUR computer, never in the browser or the repo CI:
     npm i firebase-admin
     export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json   (Firebase console > Project settings > Service accounts; keep this file private)
     node tools/set-admin-claim.js owner you@example.com          # owner = can create/remove admins
     node tools/set-admin-claim.js admin someone@example.com
     node tools/set-admin-claim.js none someone@example.com       # removes both flags
   The person must sign out and in again (or wait up to 1 hour) for the new claim to appear in their token. */
const admin = require("firebase-admin");
const [kind, email] = process.argv.slice(2);
if (!["owner", "admin", "none"].includes(kind) || !email) { console.error("usage: set-admin-claim.js owner|admin|none email"); process.exit(1); }
admin.initializeApp({ projectId: "iqra-d3243" });
(async () => {
  const u = await admin.auth().getUserByEmail(email);
  if (!u.emailVerified) throw new Error("Refusing: this e-mail address is not verified.");
  const claims = Object.assign({}, u.customClaims || {});
  delete claims.owner; delete claims.admin;
  if (kind === "owner") { claims.owner = true; claims.admin = true; }
  if (kind === "admin") claims.admin = true;
  await admin.auth().setCustomUserClaims(u.uid, claims);
  await admin.firestore().collection("auditLog").add({ actor: "set-admin-claim.js", action: "claim-" + kind, target: "auth/" + u.uid, detail: email, at: Date.now() });
  console.log("done:", email, JSON.stringify(claims));
})().catch((e) => { console.error(e.message || e); process.exit(1); });
