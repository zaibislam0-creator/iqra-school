# IQRA: security runbook (rules, admin, R2, backups)

Status of this branch (`security-fixes`): written and partly tested. **Not deployed.** Nothing here has been published to Firebase or Cloudflare.

## What is enforced where
| Rule | Where it lives |
| --- | --- |
| Students read only their own profile and PUBLISHED content for everyone or for their own board | `firestore.rules` (`learnerMayRead`, `myAud`) |
| Students cannot change `cls`, `sboard`, roles; changes go through `classRequests` and an admin | `firestore.rules` (`students`, `classRequests`) |
| Only the owner creates/removes admins; admins manage teachers | `firestore.rules` (`roles`) |
| Teachers have no access until an admin gives classes AND subjects; they can only write drafts inside that scope | `firestore.rules` (`teacherMay`, `teacherCreates/Edits/Deletes`) |
| Grade 9-10 content separated by board (`aud` = punjab / federal / none) | `firestore.rules` + `aud` written by the app |
| Uploads need a valid Firebase ID token + admin + real PDF/MP4/WebM bytes + size limit; no overwrite | `cloudflare-worker/iqra-files/worker.js` |
| `admin.html` redirects, `iq-session`, `pds-state-v1` | **convenience only**, never trusted |
| Append-only audit trail | `auditLog` collection (rules: create only) |

## Tests (all must pass before anything is published)
1. `npm install`
2. `npm run test:worker`  (runs anywhere; 31 checks on the Worker's login, admin and file checks)
3. `npm run test:rules`   (needs Java; starts the local Firestore emulator and runs 93 checks in `tests/rules.test.mjs`)
4. On STAGING, after publishing the rules there: `node tools/direct-check.mjs` with throw-away student, teacher and admin tokens (real requests, no website).
5. Click-through on staging as student (class 3, Grade 9 Punjab, Grade 9 Federal), teacher (no assignment / assigned) and admin.

## Order of deployment (owner approval required at each step)
1. **Backup**: Firebase console > Firestore > Import/Export (or `gcloud firestore export gs://<bucket>/backup-YYYYMMDD`). Keep the old rules text.
2. Deploy the new website code (branch `security-fixes` merged) **before** the rules; the old rules still work with it.
3. Sign in as owner on admin.html > Team > **Prepare content** (once). It writes `aud` (and `published` for chapters) on existing documents. Chapters stay visible only if not hidden AND verified.
4. Assign teachers: Team > each teacher > tick classes AND subjects > Save access. (All existing teachers start with NO access.)
5. Existing students keep their class. Students with Grade 9-10 and no board are asked to choose a board.
6. Run `node tools/set-admin-claim.js owner <owner e-mail>`, sign in again, confirm admin.html works, then delete the bootstrap e-mail from `ownerBootstrap()` in `firestore.rules`.
7. Publish `firestore.rules` (Firestore > Rules). Re-run step 4 of the tests against production with test accounts.
8. Deploy the Worker (`cd cloudflare-worker/iqra-files && npx wrangler deploy`), then upload a test PDF as admin and as a student (must be refused).

## Rollback
- Rules: paste back the saved old rules text and Publish.
- Data: `gcloud firestore import gs://<bucket>/backup-YYYYMMDD`.
- Website: `git revert` the merge commit on `main`.
- Worker: `npx wrangler rollback`.

## Backups and recovery (to set up)
- Firestore: turn on **point-in-time recovery** (7 days) and a **daily scheduled export** to a private bucket; keep 30 days.
- R2: no versioning; keep a monthly copy of the bucket with `rclone sync` to a second private bucket; the book metadata (`by`, `name`) is stored on each object.
- Practise a restore on staging once per term and write the date here.
- Review `auditLog` weekly (admin only). It records role/teacher assignments, publish/unpublish, class approvals, board tagging, content preparation.

## Known limits (not fixed here)
- Lessons shipped inside `app/data.js` (214 built-in lessons) are public files; rules cannot hide them. Only Firestore content is protected.
- R2 downloads are public by link (random UUID). Unpublished videos/PDFs are protected only by the link being secret.
- Teacher can read all published content in any class (needed for review); drafts only in assigned classes or their own.
- Students may choose their first class and board themselves at sign-up; every later change needs admin approval.
- No per-user upload quota on the Worker; only admins can upload.
