# IQRA: admin safety checklist

The browser can never be trusted: anyone can open DevTools and change `gate.js`. So the REAL lock is in Firebase.
The site's own checks (owner e-mail in gate.js, admin.html noindex, "student site never gets staff powers") are only convenience.

Already good in the code:
- Staff page is `admin.html`; the student site never enables staff mode, and non-staff are sent away.
- Owner counts as admin only with a VERIFIED Google e-mail.
- File upload / AI-generate worker verifies the Firebase login token on the server and allows admins only, with type and size limits and an origin list.

## What only you can do in the consoles (about 15 minutes)

### 1. Publish the Firestore rules  (most important)
1. console.firebase.google.com -> project iqra-d3243 -> Firestore Database -> Rules.
2. Copy the old rules somewhere safe (Notepad) first, so you can go back.
3. Paste the whole of `firestore.rules.recommended`, press Publish.
4. Test: open the student site and admin.html while signed in as the owner; everything should still load. Use the "Rules playground" to check that a normal student cannot write to `roles`, `chapters`, `meta`.
   If something shows "permission denied" tell me which screen and I will adjust the rules.
What it stops: a student making themselves admin/teacher, changing lessons, reading other children's phone numbers, teachers editing other teachers' content.

### 2. Restrict the Firebase API key
(The key in gate.js is public by design, but it must only work from your site.)
1. console.cloud.google.com -> APIs & Services -> Credentials -> the Browser key for iqra-d3243.
2. Application restrictions: Websites. Add: `https://iqradigitalschool.com/*`, `https://www.iqradigitalschool.com/*`, `https://iqra-d3243.firebaseapp.com/*` (Google sign-in uses it). Add `http://localhost:*` only while testing.
3. API restrictions: keep only Identity Toolkit API, Token Service API, Cloud Firestore API.

### 3. Authentication settings
- Authentication -> Sign-in method: only Google enabled (turn off anonymous, e-mail/password if unused).
- Authentication -> Settings -> Authorized domains: only iqradigitalschool.com, www.iqradigitalschool.com, iqra-d3243.firebaseapp.com (delete extras such as old github.io if not needed).
- Turn on 2-Step Verification on zaibislam0@gmail.com (this one account is the master key; also keep a recovery phone/e-mail).

### 4. Budgets
Google Cloud -> Billing -> Budgets & alerts, and the same on Cloudflare / Anthropic if used. Alerts only warn; they do not stop spending.

### 5. Cloudflare worker
`ALLOWED_ORIGINS` in wrangler.toml should list only your two domains (no localhost in production). Keep the R2 bucket private except through the worker.

### 6. Habits
- Add teachers only from the Team tab; remove them when they leave.
- Never share the owner Google password; do not sign in as owner on shared computers.
- Review Firebase console -> Usage once a month for strange spikes.
