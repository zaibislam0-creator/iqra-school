# IQRA files (Cloudflare R2): book uploads from the admin page

What it does
- Admin page: the owner (and anyone with `role: "admin"` in the `roles` collection) can upload a PDF, or several photos of book pages, or a video.
- Photos are turned into ONE PDF inside the browser (`lib/topdf.js`), so every book opens in the same Kindle-style reader students already know.
- The worker stores the file in the R2 bucket `iqra-books` and returns an https link. The site saves that link on the book, exactly like any other book.
- Nothing is switched on until `FILES_API` in `index.html` holds this worker's address. Until then the upload button stays hidden.

Owner steps (your own Cloudflare account; never share passwords or tokens in chat)
1. Cloudflare dashboard -> R2 -> Create bucket, name it `iqra-books`. (R2 asks for a payment method; the free part is 10 GB of storage and no download fees.)
2. Deploy the worker, pick one:
   - Dashboard -> Workers & Pages -> Create -> import the GitHub repo `iqra-school`, root directory `cloudflare-worker/iqra-files`. `wrangler.toml` already names the bucket and settings.
   - or on a computer: `cd cloudflare-worker/iqra-files && npx wrangler deploy`.
3. Give the worker a clean address (optional, recommended): Worker -> Settings -> Domains & Routes -> Add custom domain `files.iqradigitalschool.com`.
4. Tell Claude the worker address (it is not a secret). It is put in `FILES_API` in `index.html` and pushed.

Limits and notes
- Up to 90 MB per file. Types: PDF, MP4, WebM (photos become a PDF first, up to 300 photos, long side shrunk to 2000 px).
- Uploading needs a valid Firebase login that belongs to an admin. The worker checks the token itself (signature, project `iqra-d3243`, expiry) and the admin role.
- Reading a file needs no login (like the PDFs in `/books`): anyone who has the exact link can open it. Links are random, not guessable.
- Deleting a book in the admin page does not delete its file from R2 yet; unused files can be removed in the R2 dashboard.
- No rate limit yet. Only admins can upload, so abuse is limited to a signed-in admin account.
