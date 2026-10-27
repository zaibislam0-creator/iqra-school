# IQRA translation Worker (Cloudflare Workers AI) - TEST ONLY

Status: written, NOT deployed, NOT tested. Whether `@cf/meta/m2m100-1.2b` translates English->Urdu well enough is unknown until you run the self-test.

Owner steps (needs your own Cloudflare account; do not share passwords or tokens in chat):
1. Create a free account at dash.cloudflare.com.
2. On your computer (Node 18+): `npm i -g wrangler`, then `wrangler login`.
3. In this folder: `wrangler deploy`  -> it prints a URL like https://iqra-translate.<you>.workers.dev
4. Open `<that URL>/selftest` in a browser. Send me what it shows (4 English sentences with Urdu). I will compare it with my own translations and tell you if it is good enough.

Limits and risks:
- Free plan: Cloudflare lists 10,000 Neurons/day; above that you need the paid plan. Check the dashboard for what is shown for your account.
- This version has no login check, only an allowed-website check and a length limit. Anyone who finds the URL could use your daily allowance. Add Firebase-token verification or a rate limit before real use.
- Output is a machine draft; a teacher must approve it.
