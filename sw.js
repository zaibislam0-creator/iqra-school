/* IQRA service worker: keeps pictures, audio and the PDF reader available on weak connections.
   The page itself is always fetched from the network first, so updates appear immediately. */
const CACHE = 'iqra-static-v55';
const APP = 'iqra-app-v1';
const STATIC = /^\/(img|audio|lib|notes|books)\//;
const APPFILE = /^\/app\/[^/]+\.(js|css)$/; /* versioned with ?v= in index.html, so a new release always has a new address */

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== APP).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith('/__/')) return;

  if (url.pathname === '/admin' || url.pathname.startsWith('/admin.')) return; /* staff page is never cached */

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put('/index.html', copy));
      return res;
    }).catch(() => caches.match('/index.html')));
    return;
  }

  if (APPFILE.test(url.pathname) && url.searchParams.has('v')) {
    /* site code and styles: served from the phone after the first visit, so the next open is instant and works on weak signal */
    e.respondWith(caches.open(APP).then(c => c.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok && res.status === 200) {
        const copy = res.clone();
        c.keys().then(ks => Promise.all(ks.filter(k => new URL(k.url).pathname === url.pathname).map(k => c.delete(k))))
          .then(() => c.put(req, copy));
      }
      return res;
    }))));
    return;
  }

  if (STATIC.test(url.pathname)) {
    if (req.headers.has('range')) return; /* PDF pages arrive in small ranges straight from the network */
    e.respondWith(caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        const size = Number(res.headers.get('content-length') || 0); /* never store huge books: a phone should not keep 70 MB */
        if (res.ok && res.status === 200 && size < 8 * 1048576) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    }));
  }
});
