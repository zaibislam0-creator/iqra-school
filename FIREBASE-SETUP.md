# IQRA: secure translation service (Firebase Cloud Functions + Claude)

Status: code written (functions/), NOT deployed, NOT tested against the live API.

## What the owner must do (nobody else can; it involves a card and a secret)
1. Firebase console -> project iqra-d3243 -> Upgrade -> **Blaze (pay as you go)**. Needs a Google billing account with a working card.
2. Google Cloud console -> Billing -> Budgets & alerts: create a monthly budget (e.g. a small amount) with email alerts at 50/90/100%.
   Remember: a budget only ALERTS. The function also limits itself (maxInstances 5, per-user daily limit in functions/index.js).
3. console.anthropic.com -> create an API key (set a monthly spend limit there too).
4. On your own computer (Node 20+): 
   - `npm i -g firebase-tools` then `firebase login`
   - in the repo folder: `cd functions && npm install && cd ..`
   - `firebase functions:secrets:set ANTHROPIC_API_KEY` (paste the key when asked; it is stored in Secret Manager, never in the repo)
   - `firebase deploy --only functions`
5. Review `firestore.rules.proposed`, merge it into your existing Firestore rules, then publish the rules.
   Do not replace your existing rules blindly.

## How it works
- Reader calls `translateSentence({bookId, page, text})` (signed-in users only).
- Server checks an existing translation in Firestore `translations/{bookId__hash}`; if found it is returned (no API call).
- Otherwise it calls Claude, saves the result as `draft`, returns it. Teachers approve/correct through `reviewTranslation`.
- Static, hand-checked translations in `data/sent/*.json` are always used first; the function is only for sentences not in those files.

## Not done yet
- Client code in lib/reader.js to call the function (to be added after deploy, so nothing breaks before then).
- Teacher review screen.
- Audio generation (Azure Speech).
