/* IQRA book reader: reads a PDF inside the site, Kindle style. */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || "").replace(/[^\/]*$/, "");
  var lib = null, R = null;
  function loadLib() {
    if (lib) return lib;
    lib = import(BASE + "pdf.min.mjs").then(function (m) { m.GlobalWorkerOptions.workerSrc = BASE + "pdf.worker.min.mjs"; return m; });
    return lib;
  }
  var CSS = ".iqrd{position:fixed;inset:0;z-index:100000;display:flex;flex-direction:column;background:#eaf3f2;color:#12302f;font-family:inherit;--rbg:#eaf3f2;--rfg:#12302f;--rbar:#fff;--rline:#cfe3e1;--racc:#076c6e;--rdesk:radial-gradient(ellipse at 50% 30%,#d5e4e0,#a9bdb8)}" +
    ".iqrd.sepia{--rdesk:radial-gradient(ellipse at 50% 30%,#e6d7b4,#bda677);--rbg:#f1e6cb;--rfg:#43321a;--rbar:#f8efd9;--rline:#dccba6;--racc:#8a5a1f}.iqrd.night{--rdesk:radial-gradient(ellipse at 50% 30%,#1b2b2b,#0a1111);--rbg:#101a1a;--rfg:#d9ecea;--rbar:#182626;--rline:#2b4141;--racc:#7fe0d2}" +
    ".iqrd{background:var(--rbg);color:var(--rfg)}.iqrd button{font:inherit;color:inherit;cursor:pointer}" +
    ".rd-top,.rd-bot{flex:none;display:flex;align-items:center;gap:6px;padding:8px 10px;background:var(--rbar);border-color:var(--rline);border-style:solid;border-width:0}.rd-top{border-bottom-width:1px}.rd-bot{border-top-width:1px;flex-wrap:wrap;justify-content:center;padding-bottom:max(8px,env(safe-area-inset-bottom))}" +
    ".rd-ib{width:42px;height:42px;border-radius:12px;border:1px solid var(--rline);background:transparent;display:inline-flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:700;flex:none}.rd-ib.on{background:var(--racc);color:#fff;border-color:var(--racc)}.rd-ib:disabled{opacity:.35;cursor:default}" +
    ".rd-title{flex:1;min-width:0;font-weight:800;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}" +
    ".rd-stage{flex:1;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;display:flex;justify-content:safe center;align-items:safe center;padding:10px 0;position:relative;touch-action:pan-x pan-y pinch-zoom;background:var(--rdesk);perspective:2200px}" +
    ".rd-spread{display:flex;flex:none;align-items:flex-start;justify-content:center}.rd-page{position:relative;flex:none;box-shadow:1px 0 0 #e6e1d4,2px 0 0 #fff,3px 0 0 #d8d2c3,4px 0 0 #fff,5px 1px 0 #c9c3b2,0 12px 30px rgba(0,0,0,.35);background:#fff;border-radius:2px 5px 5px 2px}.rd-page.rtlp{border-radius:5px 2px 2px 5px;box-shadow:-1px 0 0 #e6e1d4,-2px 0 0 #fff,-3px 0 0 #d8d2c3,-4px 0 0 #fff,-5px 1px 0 #c9c3b2,0 12px 30px rgba(0,0,0,.35)}.rd-page:after{content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;background:linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 3%,rgba(0,0,0,0) 9%,rgba(0,0,0,0) 94%,rgba(0,0,0,.06))}.rd-page.rtlp:after{background:linear-gradient(270deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 3%,rgba(0,0,0,0) 9%,rgba(0,0,0,0) 94%,rgba(0,0,0,.06))}.rd-tl{position:absolute;inset:0;overflow:clip;line-height:1;text-size-adjust:none;transform-origin:0 0;z-index:1;--user-unit:1;--total-scale-factor:calc(var(--scale-factor)*var(--user-unit))}.rd-tl :is(span,br){color:transparent;position:absolute;white-space:pre;cursor:text;transform-origin:0 0}.rd-tl ::selection{background:rgba(7,108,110,.3)}.rd-toast{position:absolute;left:50%;top:70px;transform:translateX(-50%);z-index:8;max-width:86%;padding:10px 16px;border-radius:14px;background:#12302f;color:#fff;font-weight:700;font-size:.9rem;text-align:center;box-shadow:0 6px 20px rgba(0,0,0,.35)}.rd-hot{position:absolute;z-index:3;border-radius:5px;background:rgba(254,135,123,.16);border-bottom:2px dotted rgba(224,72,60,.55);cursor:pointer;-webkit-tap-highlight-color:transparent}.rd-hot:hover,.rd-hot.sel{background:rgba(254,135,123,.38)}.iqrd.nohot .rd-hot{display:none}.rd-sheet{position:absolute;z-index:9;left:0;right:0;bottom:0;max-height:62%;overflow:auto;background:var(--rbar);color:var(--rfg);border-top:1px solid var(--rline);border-radius:22px 22px 0 0;box-shadow:0 -10px 34px rgba(0,0,0,.3);padding:14px 16px max(16px,env(safe-area-inset-bottom));animation:rdup .22s ease-out}@keyframes rdup{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}@media (min-width:760px){.rd-sheet{left:auto;right:18px;bottom:78px;width:430px;border-radius:20px;border:1px solid var(--rline)}}.rd-sh-x{position:absolute;top:8px;right:10px;width:38px;height:38px;border-radius:50%;border:1px solid var(--rline);background:transparent;font-size:1.1rem}.rd-lab{font-size:.74rem;font-weight:800;letter-spacing:.04em;text-transform:uppercase;opacity:.7;margin:2px 0 4px}.rd-en{font-size:1.28rem;font-weight:700;line-height:1.45;padding-right:42px}.rd-ur{direction:rtl;text-align:right;font-family:'Noto Nastaliq Urdu','Jameel Noori Nastaleeq','Nafees Nastaleeq',serif;font-size:1.5rem;line-height:2.2;margin:0 0 6px;font-weight:600}.rd-sh-b{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 6px}.rd-sh-b button{min-height:46px;padding:0 16px;border-radius:99px;border:1px solid var(--rline);background:transparent;font-weight:800;font-size:.95rem}.rd-sh-b button.on{background:var(--racc);color:#fff;border-color:var(--racc)}.rd-note{font-size:.8rem;opacity:.8;margin:4px 0 0}.rd-rib{position:absolute;top:-2px;right:14px;width:20px;height:46px;background:#e0483c;clip-path:polygon(0 0,100% 0,100% 100%,50% 78%,0 100%);z-index:2;box-shadow:0 2px 4px rgba(0,0,0,.3)}.rd-page.rtlp .rd-rib{right:auto;left:14px}.rd-flip{position:absolute;z-index:4;pointer-events:none;backface-visibility:hidden;animation:rdflip .5s cubic-bezier(.45,.05,.3,1) forwards}@keyframes rdflip{0%{transform:rotateY(0)}100%{transform:rotateY(-110deg);opacity:.1}}@keyframes rdflipr{0%{transform:rotateY(0)}100%{transform:rotateY(110deg);opacity:.1}}@media (prefers-reduced-motion:reduce){.rd-flip{animation-duration:.01s}}.rd-page canvas{display:block;width:100%;height:auto;border-radius:inherit}.iqrd.sepia canvas{filter:sepia(.38) saturate(.9) contrast(.97)}.iqrd.night canvas{filter:invert(.92) hue-rotate(180deg)}" +
    ".rd-load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--racc);background:transparent;pointer-events:none}" +
    ".rd-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:84px;border-radius:14px;border:0;background:rgba(7,108,110,.72);color:#fff;font-size:1.6rem;display:flex;align-items:center;justify-content:center;z-index:3;backdrop-filter:blur(4px)}.rd-nav:disabled{opacity:0;pointer-events:none}.rd-nav.L{left:6px}.rd-nav.R{right:6px}" +
    ".rd-pg{font-weight:800;min-width:74px;text-align:center;font-size:.95rem;direction:ltr}.rd-range{flex:1 1 140px;min-width:120px;accent-color:var(--racc);height:30px}" +
    ".rd-done{min-height:44px;padding:0 18px;border-radius:99px;border:0;background:#fe877b;color:#04393b;font-weight:800}.rd-done:disabled{background:var(--rline);color:var(--rfg);opacity:.75}.rd-float{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);z-index:6;min-height:50px;padding:0 24px;border-radius:99px;border:0;background:#fe877b;color:#04393b;font-weight:800;font-size:1.05rem;box-shadow:0 6px 20px rgba(0,0,0,.35);display:none;white-space:nowrap}.rd-float.on{display:block}.rd-hint{width:100%;text-align:center;font-size:.82rem;opacity:.85}" +
    ".rd-toc{position:absolute;inset:57px 0 0 0;z-index:5;background:var(--rbar);overflow:auto;padding:12px 14px;display:none}.rd-toc.on{display:block}.rd-toc h3{margin:4px 0 10px}.rd-toc button{display:flex;width:100%;gap:10px;justify-content:space-between;align-items:center;text-align:start;padding:12px;margin:0 0 6px;border-radius:12px;border:1px solid var(--rline);background:transparent}.rd-toc b{direction:ltr;opacity:.75}" +
    "@media (max-width:480px){.rd-nav{width:36px;height:70px}.rd-ib{width:38px;height:38px}}" +
    // big screens: a clean portrait page on a quiet desk
    "@media (min-width:900px){.iqrd{--rdesk:#e7eaea}.iqrd.sepia{--rdesk:#e3d8bc}.iqrd.night{--rdesk:#0b1212}.iqrd .rd-stage{padding:24px 0}.iqrd .rd-page,.iqrd .rd-page.rtlp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 10px 28px rgba(0,0,0,.14);border-radius:2px}.iqrd .rd-page:after,.iqrd .rd-page.rtlp:after{display:none}.iqrd .rd-ib{width:38px;height:38px;border-radius:10px;font-size:1rem}}" +
    // page arrows: big round buttons that stay on screen (not inside the scrolling page area)
    ".iqrd .rd-nav{position:absolute;top:50%;margin-top:-26px;width:52px;height:52px;border-radius:50%;border:3px solid #fff;background:#076c6e;color:#fff;box-shadow:0 3px 12px rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;z-index:4;transition:transform .12s,background .12s}.iqrd .rd-nav.L{left:10px}.iqrd .rd-nav.R{right:10px}.iqrd .rd-nav:hover{background:#0a8c8f;transform:scale(1.07)}.iqrd .rd-nav:active{transform:scale(.95)}.iqrd .rd-nav:disabled{opacity:0;pointer-events:none}.iqrd .rd-nav svg{display:block}" +
    "@media (min-width:900px){.iqrd .rd-nav.L{left:max(10px,calc(50% - 410px - 74px))}.iqrd .rd-nav.R{right:max(10px,calc(50% - 410px - 74px))}}" +
    "@media (max-width:480px){.iqrd .rd-nav{width:44px;height:44px;margin-top:-22px;border-width:2px}.iqrd .rd-nav svg{width:22px;height:22px}.iqrd .rd-nav.L{left:6px}.iqrd .rd-nav.R{right:6px}}";
  CSS += ".rd-page.sk{width:min(92vw,560px);aspect-ratio:.72;background:linear-gradient(100deg,#fff 30%,#eef3f2 50%,#fff 70%);background-size:300% 100%;animation:rdsk 1.3s linear infinite}.rd-page.sk canvas{display:none}@keyframes rdsk{from{background-position:100% 0}to{background-position:0 0}}" +
    ".iqrd.low .rd-page.sk,.iqrd.low .rd-sheet{animation:none}.iqrd.low .rd-nav{transition:none;backdrop-filter:none}" +
    ".rd-toc .rd-off{margin-top:14px;padding-top:10px;border-top:1px solid var(--rline)}.rd-toc .rd-off p{margin:6px 2px;font-size:.84rem;opacity:.85}.rd-toc .rd-off button.on{background:var(--racc);color:#fff;border-color:var(--racc)}.rd-toc .rd-off button:disabled{opacity:.6}";

  /* ---------- Low Internet Mode ----------
     "1" = on, "0" = off (chosen by the reader); nothing saved = follow what the phone reports (data saver, 2G/3G). */
  function lowAuto() { try { var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection; return !!(c && (c.saveData || /2g|3g/.test(c.effectiveType || ""))); } catch (e) { return false; } }
  function lowOn() { var v = null; try { v = localStorage.getItem("iq-low"); } catch (e) {} return v === "1" || (v !== "0" && lowAuto()); }
  function lowSet(on) { try { localStorage.setItem("iq-low", on ? "1" : "0"); } catch (e) {} try { document.documentElement.classList.toggle("iq-low", !!on); } catch (e2) {} }

  /* ---------- book store: pieces of each PDF kept on the device (IndexedDB "iqra-books") ----------
     A book is read in fixed 128 KB pieces. Every piece that arrives is saved, so a page that was opened once
     opens again without the internet, and "Download for offline reading" simply fetches the remaining pieces.
     Reading progress lives elsewhere (localStorage) and is never touched here. */
  var CH = 131072, RUN = 4, CAP = 250 * 1048576, dbp = null, memMeta = {};
  function bdb() {
    if (!dbp) dbp = new Promise(function (res, rej) {
      var r = indexedDB.open("iqra-books", 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("meta"); r.result.createObjectStore("chunks"); };
      r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
    });
    return dbp;
  }
  function req(q) { return new Promise(function (res, rej) { q.onsuccess = function () { res(q.result); }; q.onerror = function () { rej(q.error); }; }); }
  function span(url) { return IDBKeyRange.bound([url, 0], [url, 1e9]); }
  function metaGet(url) { return bdb().then(function (d) { return req(d.transaction("meta").objectStore("meta").get(url)); }).catch(function () { return memMeta[url] || null; }); }
  function metaPut(url, m) { memMeta[url] = m; return bdb().then(function (d) { return req(d.transaction("meta", "readwrite").objectStore("meta").put(m, url)); }).catch(function () {}); }
  function chunkGet(url, a, b) { // pieces a..b that are already on the device: { index: ArrayBuffer }
    return bdb().then(function (d) {
      return new Promise(function (res) {
        var out = {}, c = d.transaction("chunks").objectStore("chunks").openCursor(IDBKeyRange.bound([url, a], [url, b]));
        c.onsuccess = function () { var k = c.result; if (!k) return res(out); out[k.key[1]] = k.value; k.continue(); };
        c.onerror = function () { res(out); };
      });
    }).catch(function () { return {}; });
  }
  function chunkPut(url, list) { // list of [index, ArrayBuffer]; resolves false when the device has no room
    return bdb().then(function (d) {
      return new Promise(function (res) {
        var t = d.transaction("chunks", "readwrite"), st = t.objectStore("chunks");
        list.forEach(function (x) { st.put(x[1], [url, x[0]]); });
        t.oncomplete = function () { res(true); }; t.onerror = t.onabort = function () { res(false); };
      });
    }).catch(function () { return false; });
  }
  function chunkCount(url) { return bdb().then(function (d) { return req(d.transaction("chunks").objectStore("chunks").count(span(url))); }).catch(function () { return 0; }); }
  function bookDrop(url) {
    delete memMeta[url];
    return bdb().then(function (d) {
      return new Promise(function (res) { var t = d.transaction(["meta", "chunks"], "readwrite"); t.objectStore("meta").delete(url); t.objectStore("chunks").delete(span(url)); t.oncomplete = t.onerror = t.onabort = function () { res(); }; });
    }).catch(function () {});
  }
  function bookList() { // [{ url, size, at, pin, title, have (bytes on the device) }]
    return bdb().then(function (d) {
      return new Promise(function (res) {
        var out = [], c = d.transaction("meta").objectStore("meta").openCursor();
        c.onsuccess = function () { var k = c.result; if (!k) return res(out); var m = k.value || {}; m.url = k.key; out.push(m); k.continue(); };
        c.onerror = function () { res(out); };
      });
    }).then(function (list) {
      return Promise.all(list.map(function (m) { return chunkCount(m.url).then(function (n) { m.have = Math.min(m.size || 0, n * CH); return m; }); }));
    }).catch(function () { return []; });
  }
  // keep recently opened books only: the oldest ones go first; books the reader chose to download are never removed here
  function trim(keep) {
    return bookList().then(function (list) {
      var auto = list.filter(function (m) { return !m.pin && m.url !== keep; }).sort(function (a, b) { return (a.at || 0) - (b.at || 0); });
      var total = list.reduce(function (n, m) { return n + (m.pin ? 0 : m.have); }, 0), jobs = [];
      while (total > CAP && auto.length) { var m = auto.shift(); total -= m.have; jobs.push(bookDrop(m.url)); }
      return Promise.all(jobs);
    }).catch(function () {});
  }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  // one Range request (bytes a..b, inclusive), tried a few times: weak signal drops requests often
  function netRange(url, a, b, tries, onFail) {
    var n = 0;
    function go() {
      var ac = window.AbortController ? new AbortController() : null, timer = setTimeout(function () { if (ac) ac.abort(); }, 60000);
      return fetch(url, { headers: { Range: "bytes=" + a + "-" + b }, signal: ac ? ac.signal : undefined }).then(function (r) {
        if (r.status === 200) { if (ac) ac.abort(); var e = new Error("norange"); e.norange = true; throw e; }
        if (r.status !== 206) { var e2 = new Error("http " + r.status); e2.fatal = r.status >= 400 && r.status < 500; throw e2; }
        var m = /\/(\d+)\s*$/.exec(r.headers.get("Content-Range") || "");
        return r.arrayBuffer().then(function (buf) { clearTimeout(timer); return { buf: buf, total: m ? Number(m[1]) : 0 }; });
      }).catch(function (e) {
        clearTimeout(timer);
        if (e && (e.norange || e.fatal)) throw e;
        if (onFail) onFail();
        if (++n >= (tries || 4)) throw e;
        return wait([800, 2500, 6000][n - 1] || 6000).then(go);
      });
    }
    return go();
  }
  // Opens a book for reading in pieces. Resolves { url, size, first, read(begin,end), ... } or rejects (then the old way is used).
  function bookOpen(url, title) {
    var bk = { url: url, size: 0, first: null, save: true, stale: false, slow: false, dead: false, onWait: null, onStale: null };
    function fetchRun(a, b) { // pieces a..b from the network, saved as they arrive
      var from = a * CH, to = Math.min(bk.size || Infinity, (b + 1) * CH) - 1, t0 = Date.now();
      return netRange(url, from, isFinite(to) ? to : CH - 1, 4, function () { if (bk.onWait && !bk.dead) bk.onWait(true); }).then(function (r) {
        if (r.total && bk.size && r.total !== bk.size) { bk.stale = true; throw new Error("stale"); }
        if (r.total && !bk.size) bk.size = r.total;
        var ms = Date.now() - t0; if (ms > 600) bk.slow = (r.buf.byteLength / ms) < 40; // under about 40 KB a second
        var list = [], i; for (i = a; i <= b; i++) { var part = r.buf.slice((i - a) * CH, (i - a + 1) * CH); if (part.byteLength) list.push([i, part]); }
        var done = bk.save ? chunkPut(url, list).then(function (ok) { if (!ok) { bk.save = false; trim(url); } }) : Promise.resolve();
        return done.then(function () { return list; });
      });
    }
    // bytes begin..end (end not included) as one Uint8Array, from the device where possible
    bk.read = function (begin, end) {
      var a = Math.floor(begin / CH), b = Math.floor((end - 1) / CH);
      return chunkGet(url, a, b).then(function (have) {
        var runs = [], i, cur = null;
        for (i = a; i <= b; i++) { if (have[i]) { cur = null; continue; } if (cur && cur[1] === i - 1 && i - cur[0] < RUN) cur[1] = i; else { cur = [i, i]; runs.push(cur); } }
        var p = Promise.resolve();
        runs.forEach(function (r) { p = p.then(function () { return fetchRun(r[0], r[1]); }).then(function (list) { list.forEach(function (x) { have[x[0]] = x[1]; }); }); });
        return p.then(function () {
          var out = new Uint8Array(end - begin), k, src, off;
          for (k = a; k <= b; k++) { if (!have[k]) throw new Error("short"); src = new Uint8Array(have[k]); off = Math.max(0, begin - k * CH); out.set(src.subarray(off, Math.min(src.length, end - k * CH)), k * CH + off - begin); }
          return out;
        });
      });
    };
    // like read, but never gives up while the book is open: waits for the signal to come back
    bk.readSure = function (begin, end) {
      return bk.read(begin, end).catch(function (e) {
        if (bk.stale && !bk.dead) { bk.dead = true; bookDrop(url).then(function () { if (bk.onStale) bk.onStale(); }); }
        if (bk.dead || (e && (e.norange || e.fatal))) throw e;
        if (bk.onWait) bk.onWait(true);
        return new Promise(function (res) { var t = setTimeout(res, 5000); window.addEventListener("online", function on() { window.removeEventListener("online", on); clearTimeout(t); res(); }); })
          .then(function () { if (bk.dead) throw e; return bk.readSure(begin, end); });
      }).then(function (u) { if (bk.onWait) bk.onWait(false); return u; });
    };
    bk.have = function () { return chunkCount(url).then(function (n) { return Math.min(bk.size, n * CH); }); };
    // fetch every piece that is not on the device yet; cb(fraction). Stops quietly when bk.stopDl is set.
    bk.download = function (cb) {
      var total = Math.ceil(bk.size / CH); bk.stopDl = false;
      return metaGet(url).then(function (m) { m = m || { size: bk.size }; m.pin = true; m.at = Date.now(); if (title) m.title = title; return metaPut(url, m); }).then(function () {
        try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {}); } catch (e) {}
        function step(i) {
          if (i >= total || bk.stopDl || bk.dead) return Promise.resolve();
          var b = Math.min(total - 1, i + RUN - 1);
          return bk.read(i * CH, Math.min(bk.size, (b + 1) * CH)).then(function () { if (!bk.save) throw new Error("full"); if (cb) cb(Math.min(1, (b + 1) / total)); return step(b + 1); });
        }
        return step(0);
      });
    };
    bk.unpin = function () { return metaGet(url).then(function (m) { if (m) { m.pin = false; return metaPut(url, m); } }); };
    return metaGet(url).then(function (m) {
      if (m && m.size) { bk.size = m.size; bk.pin = !!m.pin; return bk.read(0, Math.min(CH, bk.size)); }
      return fetchRun(0, 0).then(function (list) { if (!bk.size) { var e = new Error("nosize"); e.norange = true; throw e; } return new Uint8Array(list[0][1]); });
    }).then(function (first) {
      bk.first = first;
      metaGet(url).then(function (m) { m = m || {}; m.size = bk.size; m.at = Date.now(); if (title) m.title = title; metaPut(url, m); });
      trim(url);
      return bk;
    }).catch(function (e) {
      if (bk.stale) return bookDrop(url).then(function () { return bookOpen(url, title); }); // the file on the server changed: forget the old copy
      throw e;
    });
  }
  // PDF.js document for a book: pieces through the book store; if that cannot work (no Range support), the plain URL way
  var wk = null;
  function engine(m) { try { if (!wk || wk.destroyed) wk = new m.PDFWorker(); return wk; } catch (e) { return undefined; } }
  function openDoc(m, url, title) {
    return bookOpen(url, title).then(function (bk) {
      var tr = new m.PDFDataRangeTransport(bk.size, bk.first);
      tr.requestDataRange = function (begin, end) { bk.readSure(begin, end).then(function (u) { if (!bk.dead) tr.onDataRange(begin, u); }).catch(function () {}); };
      return Promise.all([m.getDocument({ range: tr, length: bk.size, disableAutoFetch: true, disableStream: true, rangeChunkSize: CH, worker: engine(m), wasmUrl: BASE + "wasm/" }).promise, bk.have()]).then(function (r) { return { pdf: r[0], bk: bk, full: r[1] >= bk.size }; });
    }, function (e) {
      if (e && e.fatal) throw e;
      return m.getDocument({ url: url, disableAutoFetch: true, disableStream: true, rangeChunkSize: CH, worker: engine(m), wasmUrl: BASE + "wasm/" }).promise.then(function (pdf) { return { pdf: pdf, bk: null }; });
    });
  }
  // Fast copy of a book: the same pages, rewritten so the reader can jump straight to a page instead of reading the whole file first.
  // books/fast/index.json lists the books that have one; the original file stays where it is and is the fallback.
  var liteIdx = null;
  function liteOf(o) {
    if (o.lite) return Promise.resolve(o.lite);
    var m = /^\/books\/([\w.-]+\.pdf)$/.exec(String(o.url || "").split("?")[0]);
    if (!m) return Promise.resolve(o.url);
    if (!liteIdx) liteIdx = fetch(BASE + "../books/fast/index.json").then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { liteIdx = null; return {}; });
    return liteIdx.then(function (j) { return j && j[m[1]] ? "/books/fast/" + m[1] : o.url; });
  }
  function mb(n) { return n >= 10485760 ? Math.round(n / 1048576) + " MB" : (Math.round(n / 104857.6) / 10) + " MB"; }

  var txLib = null;
  function ensureText() {
    if (window.IQText) return Promise.resolve();
    if (!txLib) txLib = new Promise(function (res, rej) { var sc = document.createElement("script"); sc.src = BASE + "textmode.js?v=20261117a"; sc.onload = res; sc.onerror = function () { txLib = null; rej(new Error("textmode")); }; document.head.appendChild(sc); });
    return txLib;
  }
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null"); localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} return null; }
  function open(o) {
    if (R) close();
    var ur = o.lang === "ur", key = "iq_rd_" + o.url, saved = store(key) || {};
    var s = { o: o, pdf: null, n: 0, p: 1, max: 1, zoom: saved.zoom || 1, fit: saved.fit === "page" ? "page" : "auto", theme: saved.theme || "day", marks: saved.marks || [], tok: 0, task: null, mode: saved.mode, tp: saved.tp, fs: saved.fs };
    if (!document.getElementById("iqrd-css")) { var st = el("style"); st.id = "iqrd-css"; st.textContent = CSS; document.head.appendChild(st); }
    var low = lowOn(); s.low = low; var root = el("div", "iqrd " + s.theme + (low ? " low" : "")); root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.dir = "ltr";
    root.innerHTML = '<div class="rd-top"><button class="rd-ib" data-r="close" aria-label="' + (ur ? "بند کریں" : "Close") + '">✕</button><div class="rd-title"></div>' +
      '<button class="rd-ib" data-r="tr" aria-label="' + (ur ? "اردو ترجمہ" : "Urdu translation") + '" style="display:none">ع</button><button class="rd-ib" data-r="say" aria-label="' + (ur ? "سنیں" : "Listen") + '">🔊</button><button class="rd-ib" data-r="toc" aria-label="' + (ur ? "فہرست" : "Contents") + '">☰</button><button class="rd-ib" data-r="mark" aria-label="' + (ur ? "نشان" : "Bookmark") + '">☆</button><button class="rd-ib" data-r="fit" aria-label="' + (ur ? "ایک صفحہ یا دو صفحے" : "One page or two-page spread") + '">⤢</button><button class="rd-ib" data-r="theme" aria-label="' + (ur ? "رنگ" : "Theme") + '">◐</button></div>' +
      '<div class="rd-stage"><div class="rd-spread"><div class="rd-page sk"><canvas></canvas></div></div><div class="rd-load">' + (ur ? "کتاب کھل رہی ہے…" : "Opening the book…") + '</div><button class="rd-nav L" data-r="L" aria-label="' + (ur ? "پچھلا" : "Previous") + '"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button class="rd-nav R" data-r="R" aria-label="' + (ur ? "اگلا" : "Next") + '"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' + (o.onDone ? '<button class="rd-float" data-r="done">' + (o.doneLabel || (ur ? "✓ میں نے پڑھ لیا" : "✓ I have read it")) + '</button>' : "") + '</div>' +
      '<div class="rd-bot"><button class="rd-ib" data-r="zo" aria-label="Zoom out">−</button><span class="rd-pg">…</span><input class="rd-range" type="range" min="1" max="1" value="1" aria-label="' + (ur ? "صفحہ" : "Page") + '"><button class="rd-ib" data-r="zi" aria-label="Zoom in">+</button>' +
      (o.onDone ? '<button class="rd-done" data-r="done" disabled>' + (o.doneLabel || (ur ? "✓ میں نے پڑھ لیا" : "✓ I have read it")) + '</button><div class="rd-hint"></div>' : "") + '</div><div class="rd-toc"></div>';
    ["L", "R"].forEach(function (k) { var nb = root.querySelector(".rd-nav." + k); if (nb) root.appendChild(nb); });
    document.body.appendChild(root); document.body.style.overflow = "hidden";
    var $ = function (q) { return root.querySelector(q); }, stage = $(".rd-stage"), pageBox = $(".rd-spread"), rng = $(".rd-range"), pg = $(".rd-pg"), load = $(".rd-load"), done = $(".rd-done"), hint = $(".rd-hint");
    $(".rd-title").textContent = o.title || ""; s.root = root; R = s; s.closeSheet = function () { closeSheet(); };
    var rtl = !!o.rtl;
    // in right-to-left books the next page is on the left, like a real Urdu book
    $('[data-r="L"]').dataset.r = rtl ? "next" : "prev"; $('[data-r="R"]').dataset.r = rtl ? "prev" : "next";
    var sdat = null, sheet = null, speakTok = 0, voices = [];
    function getVoices() { try { voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; } catch (e) { voices = []; } return voices; }
    if (window.speechSynthesis) { getVoices(); try { window.speechSynthesis.addEventListener("voiceschanged", getVoices); } catch (e) {} }
    function pickVoice(lang) { var vs = getVoices(), l = lang.toLowerCase(), pre = l.split("-")[0]; return vs.filter(function (v) { return v.lang.toLowerCase().replace("_", "-") === l; })[0] || vs.filter(function (v) { return v.lang.toLowerCase().replace("_", "-").split("-")[0] === pre; })[0] || null; }
    function stopSay() { speakTok++; try { if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {} if (sheet) { sheet.querySelectorAll("[data-sp]").forEach(function (b) { b.classList.remove("on"); }); } }
    function sayText(text, lang, btn, noteEl) {
      stopSay(); var tok = speakTok;
      if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) { noteEl.textContent = ur ? "اس براؤزر میں آواز سے پڑھنے کی سہولت نہیں۔" : "This browser cannot read aloud."; return; }
      var v = pickVoice(lang);
      if (!v) { noteEl.textContent = lang.indexOf("ur") === 0 ? (ur ? "اس ڈیوائس پر اردو آواز نہیں ملی۔ آپ کے فون کی ترتیبات میں اردو آواز شامل ہو سکتی ہے۔" : "No Urdu voice was found on this device. You may be able to add one in your phone's speech settings.") : (ur ? "اس ڈیوائس پر انگریزی آواز نہیں ملی۔" : "No English voice was found on this device."); return; }
      noteEl.textContent = ""; var u = new SpeechSynthesisUtterance(text); u.lang = v.lang; u.voice = v; u.rate = parseFloat(sheet.dataset.rate || "0.85");
      u.onstart = function () { if (tok === speakTok) btn.classList.add("on"); }; u.onend = u.onerror = function () { if (tok === speakTok) btn.classList.remove("on"); };
      try { window.speechSynthesis.speak(u); } catch (e) { noteEl.textContent = ur ? "آواز نہیں چل سکی۔" : "The audio could not play."; }
    }
    function closeSheet() { stopSay(); if (sheet) { sheet.remove(); sheet = null; } root.querySelectorAll(".rd-hot.sel").forEach(function (x) { x.classList.remove("sel"); }); }
    function openSheet(en, urd, hot) {
      closeSheet(); if (hot) hot.classList.add("sel");
      sheet = el("div", "rd-sheet"); sheet.setAttribute("role", "dialog"); sheet.setAttribute("aria-label", ur ? "اردو ترجمہ" : "Urdu translation"); sheet.dataset.rate = "0.85";
      var esc = function (t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
      sheet.innerHTML = '<button class="rd-sh-x" data-sh="x" aria-label="' + (ur ? "بند کریں" : "Close") + '">✕</button><div class="rd-lab">English</div><div class="rd-en" lang="en" dir="ltr">' + esc(en) + '</div><div class="rd-lab" style="margin-top:10px">اردو</div><div class="rd-ur" lang="ur" dir="rtl">' + esc(urd) + '</div>' +
        '<div class="rd-sh-b"><button data-sh="en" data-sp="1">🔊 English</button><button data-sh="ur" data-sp="1">🔊 اردو</button><button data-sh="stop">⏹</button><button data-sh="rate">🐢 ' + (ur ? "آہستہ" : "Slow") + '</button></div><p class="rd-note"></p><p class="rd-note" style="opacity:.6">' + (ur ? "اردو ترجمہ ابھی استاد کی جانچ کا منتظر ہے۔" : "Urdu translation: draft, waiting for a teacher to review it.") + '</p>';
      sheet.addEventListener("click", function (e) {
        var b = e.target.closest("[data-sh]"); if (!b) return; var note = sheet.querySelector(".rd-note");
        if (b.dataset.sh === "x") closeSheet();
        else if (b.dataset.sh === "en") sayText(en, "en-US", b, note);
        else if (b.dataset.sh === "ur") sayText(urd, "ur-PK", b, note);
        else if (b.dataset.sh === "stop") stopSay();
        else if (b.dataset.sh === "rate") { var slow = sheet.dataset.rate === "0.85"; sheet.dataset.rate = slow ? "0.6" : "0.85"; b.textContent = slow ? "🐌 " + (ur ? "بہت آہستہ" : "Very slow") : "🐢 " + (ur ? "آہستہ" : "Slow"); }
      });
      stage.parentNode.appendChild(sheet);
    }
    function addHot(box, pn) {
      if (!sdat) return; var arr = sdat.pages[pn]; if (!arr) return;
      arr.forEach(function (it) {
        var t = sdat.tr[it.h]; if (!t) return;
        it.r.forEach(function (r) {
          var h = el("button", "rd-hot"); h.type = "button"; h.setAttribute("aria-label", it.t);
          h.style.cssText = "left:" + ((r[0] - 0.004) * 100) + "%;top:" + ((r[1] - 0.002) * 100) + "%;width:" + ((r[2] + 0.008) * 100) + "%;height:" + ((r[3] + 0.004) * 100) + "%";
          h.addEventListener("click", function (e) { e.stopPropagation(); openSheet(it.t, t.u, h); });
          box.appendChild(h);
        });
      });
    }
    function theme(t) { s.theme = t; root.className = "iqrd " + t + (root.classList.contains("txmode") ? " txmode" : "") + (s.low ? " low" : "") + (root.classList.contains("nohot") ? " nohot" : ""); store(key, { p: s.p, zoom: s.zoom, fit: s.fit, theme: t, marks: s.marks, mode: s.mode, tp: s.tp, fs: s.fs }); }
    function persist() { store(key, { p: s.p, zoom: s.zoom, fit: s.fit, theme: s.theme, marks: s.marks, mode: s.mode, tp: s.tp, fs: s.fs }); }
    function upd() {
      pg.textContent = (s.last && s.last > s.p ? s.p + "-" + s.last : s.p) + " / " + (s.n || "…"); rng.value = s.p; var m = s.marks.indexOf(s.p) > -1; $('[data-r="fit"]').classList.toggle("on", s.fit === "page"); var b = $('[data-r="mark"]'); b.textContent = m ? "★" : "☆"; b.classList.toggle("on", m);
      $('[data-r="prev"]').disabled = s.p <= 1; $('[data-r="next"]').disabled = (s.last || s.p) >= s.n;
      if (done) {
        var need = o.end || 0, ok = !need || s.max >= need; done.disabled = !ok; var fl = $(".rd-float"); if (fl) { fl.classList.toggle("on", ok); done.style.display = ok ? "none" : ""; }
        hint.textContent = ok ? "" : (ur ? "اس سبق کے آخری صفحے (" + need + ") تک پڑھیں" : "Read up to the last page of this lesson (page " + need + ")");
      }
    }
    function isSpread() { var W = stage.clientWidth, H = stage.clientHeight; return false; }
    function flipFrom(dir) {
      var old = pageBox.querySelector(".rd-page"); if (!old || !dir) return;
      var oc = old.querySelector("canvas"); if (!oc || !oc.width) return;
      var r = old.getBoundingClientRect(), sr = stage.getBoundingClientRect(), f = el("div", "rd-flip"), c = document.createElement("canvas");
      c.width = oc.width; c.height = oc.height; c.style.cssText = "display:block;width:100%;height:100%;border-radius:inherit"; c.getContext("2d").drawImage(oc, 0, 0);
      var leftEdge = rtl ? dir < 0 : dir > 0;
      f.style.cssText = "left:" + (r.left - sr.left + stage.scrollLeft) + "px;top:" + (r.top - sr.top + stage.scrollTop) + "px;width:" + r.width + "px;height:" + r.height + "px;transform-origin:" + (leftEdge ? "left" : "right") + " center;box-shadow:0 10px 30px rgba(0,0,0,.35);background:#fff;border-radius:3px;animation-name:" + (leftEdge ? "rdflip" : "rdflipr");
      f.appendChild(c); stage.appendChild(f); f.addEventListener("animationend", function () { f.remove(); }); setTimeout(function () { f.remove(); }, 800);
    }
    function show(n, dir) {
      if (!s.pdf) return; n = Math.max(1, Math.min(s.n, n)); closeSheet(); if (dir && !s.low) flipFrom(dir);
      var sp = isSpread(), list = [n];
      if (sp) { var a = n <= 1 ? 1 : (n % 2 === 0 ? n : n - 1); list = a === 1 ? [1] : (a + 1 <= s.n ? [a, a + 1] : [a]); }
      s.p = list[0]; s.last = list[list.length - 1]; if (s.last > s.max) s.max = s.last; upd(); persist(); if (o.onProgress) o.onProgress(s.max);
      var tok = ++s.tok; load.style.display = "flex"; s.busy = true; if (s.task) { s.task.forEach(function (t) { try { t.cancel(); } catch (e) {} }); } s.task = [];
      var order = rtl ? list.slice().reverse() : list;
      Promise.all(order.map(function (pn) { return s.pdf.getPage(pn); })).then(function (pages) {
        if (tok !== s.tok) return;
        var vp0 = pages[0].getViewport({ scale: 1 }), ratio = vp0.width / vp0.height, availW = stage.clientWidth - 16, availH = stage.clientHeight - 20, w;
        if (sp) w = Math.min(availW / 2, availH * ratio, 1100);
        else { var byH = availH * ratio, byW = Math.min(availW, availW > availH * 1.15 ? 820 : 960); w = (s.fit === "page" || (availW <= availH * 1.15 && byH >= byW * 0.85)) ? Math.min(byW, byH) : byW; }
        w = Math.max(200, w * s.zoom); var css = w / vp0.width, dpr = Math.min(window.devicePixelRatio || 1, s.low ? 1.5 : 2.5);
        return Promise.all(pages.map(function (page) {
          var vp = page.getViewport({ scale: css * dpr }), c2 = document.createElement("canvas"); c2.width = Math.floor(vp.width); c2.height = Math.floor(vp.height);
          var t = page.render({ canvasContext: c2.getContext("2d"), viewport: vp }); s.task.push(t);
          var cvp = page.getViewport({ scale: css });
          return t.promise.then(function () {
            return page.getTextContent().then(function (tc) {
              var lay = el("div", "rd-tl textLayer"); lay.style.width = Math.floor(cvp.width) + "px"; lay.style.height = Math.floor(cvp.height) + "px"; lay.style.setProperty("--scale-factor", cvp.scale);
              return lib.then(function (m) { return new m.TextLayer({ textContentSource: tc, container: lay, viewport: cvp }).render(); }).then(function () { return { c: c2, l: lay }; });
            }).catch(function () { return { c: c2, l: null }; });
          });
        })).then(function (cs) {
          if (tok !== s.tok) return;
          pageBox.innerHTML = ""; cs.forEach(function (it, csI) { var c2 = it.c; var d = el("div", "rd-page"); d.className = "rd-page" + (rtl ? " rtlp" : ""); d.style.width = w + "px"; d.appendChild(c2); if (it.l) d.appendChild(it.l); addHot(d, order[csI]); if (s.marks.indexOf(list[0]) > -1 || s.marks.indexOf(list[list.length - 1]) > -1) d.appendChild(el("i", "rd-rib")); pageBox.appendChild(d); });
          load.style.display = "none"; s.busy = false; stage.scrollTop = 0; near(tok);
        });
      }).catch(function (e) { if (e && e.name === "RenderingCancelledException") return; load.style.display = "flex"; load.textContent = ur ? "صفحہ نہیں کھل سکا۔ دوبارہ کوشش کریں۔" : "This page could not open. Please try again."; });
    }
    // the next page is fetched and prepared quietly so turning the page does not wait; pages far behind are released
    function near(tok) {
      var nx = s.last + 1;
      if (nx <= s.n) s.pdf.getPage(nx).then(function (pg2) { if (tok !== s.tok || R !== s) return; s.pre = s.pre || {}; if (s.pre[nx]) return; s.pre[nx] = 1; return pg2.getOperatorList(); }).catch(function () {});
      s.seenPg = s.seenPg || {}; s.seenPg[s.p] = 1;
      Object.keys(s.seenPg).forEach(function (k) { k = Number(k); if (Math.abs(k - s.p) > 2) { delete s.seenPg[k]; if (s.pre) delete s.pre[k]; s.pdf.getPage(k).then(function (q) { try { q.cleanup(); } catch (e) {} }).catch(function () {}); } });
    }
    var rz = null, lw = stage.clientWidth, lh = stage.clientHeight; s.rs = function () { clearTimeout(rz); rz = setTimeout(function () { var w2 = stage.clientWidth, h2 = stage.clientHeight; if (Math.abs(w2 - lw) < 24 && Math.abs(h2 - lh) < 110) return; lw = w2; lh = h2; if (s.pdf) show(s.p); }, 220); };
    window.addEventListener("resize", s.rs);
    s.show = show;
    function buildToc() {
      var t = $(".rd-toc"), h = "<h3>" + (ur ? "فہرست اور نشان" : "Contents and bookmarks") + "</h3>";
      (o.toc || []).forEach(function (x) { h += '<button data-p="' + x.p + '"><span>' + String(x.t).replace(/</g, "&lt;") + "</span><b>" + x.p + "</b></button>"; });
      if (s.marks.length) { h += "<h3>" + (ur ? "میرے نشان" : "My bookmarks") + "</h3>"; s.marks.slice().sort(function (a, b) { return a - b; }).forEach(function (p) { h += '<button data-p="' + p + '"><span>★ ' + (ur ? "صفحہ " : "Page ") + p + "</span><b>" + p + "</b></button>"; }); }
      h += '<div class="rd-off"><h3>' + (ur ? "آف لائن اور کم انٹرنیٹ" : "Offline and low internet") + '</h3>' +
        (s.bk ? '<button data-r="dl"><span class="rd-dl-t"></span><b class="rd-dl-n"></b></button>' : "") +
        '<button data-r="low" class="' + (s.low ? "on" : "") + '"><span>' + (ur ? "کم انٹرنیٹ موڈ" : "Low Internet Mode") + '</span><b>' + (s.low ? (ur ? "آن" : "On") : (ur ? "آف" : "Off")) + '</b></button>' +
        '<p>' + (ur ? "کم انٹرنیٹ موڈ میں کتاب ہلکی کھلتی ہے اور حرکت والے اثرات بند رہتے ہیں۔ متن اور تصویریں پڑھنے کے قابل رہتی ہیں۔" : "Low Internet Mode opens books lighter and turns off moving effects. Text and pictures stay readable.") + '</p>' +
        '<p class="rd-used"></p><button data-r="clr" style="display:none"><span>' + (ur ? "دوسری محفوظ کتابیں ہٹائیں" : "Remove other saved books") + '</span><b class="rd-clr-n"></b></button></div>';
      t.innerHTML = h; offUI();
    }
    // fills in the download button and the "saved on this device" line
    function offUI(frac) {
      var t = $(".rd-toc"), b = t.querySelector('[data-r="dl"]'), used = t.querySelector(".rd-used"), clr = t.querySelector('[data-r="clr"]');
      if (!used) return;
      var seq = s.offSeq = (s.offSeq || 0) + 1;
      bookList().then(function (list) {
        if (!used.isConnected || seq !== s.offSeq) return;
        var mine = s.bk ? list.filter(function (m) { return m.url === s.bk.url; })[0] : null, all = list.reduce(function (n, m) { return n + m.have; }, 0), others = all - (mine ? mine.have : 0);
        used.textContent = (ur ? "اس ڈیوائس پر محفوظ کتابیں: " : "Books saved on this device: ") + mb(all) + (ur ? "۔ آپ کی پڑھائی کا ریکارڈ الگ محفوظ ہے۔" : ". Your reading progress is kept separately.");
        if (clr) { clr.style.display = others > 0 ? "" : "none"; clr.querySelector(".rd-clr-n").textContent = mb(others); }
        if (!b || !s.bk) return;
        var full = mine && mine.have >= s.bk.size, lab = b.querySelector(".rd-dl-t"), num = b.querySelector(".rd-dl-n");
        s.dlFull = !!full; b.classList.toggle("on", !!full);
        if (s.dling) { lab.textContent = ur ? "ڈاؤن لوڈ ہو رہی ہے… روکنے کے لیے دبائیں" : "Downloading… press to stop"; num.textContent = Math.round((frac != null ? frac : (mine ? mine.have / s.bk.size : 0)) * 100) + "%"; }
        else if (full) { lab.textContent = ur ? "✓ یہ کتاب انٹرنیٹ کے بغیر پڑھی جا سکتی ہے (ہٹانے کے لیے دبائیں)" : "✓ Saved for offline reading (press to remove)"; num.textContent = mb(s.bk.size); }
        else { lab.textContent = ur ? "⬇ انٹرنیٹ کے بغیر پڑھنے کے لیے ڈاؤن لوڈ کریں" : "⬇ Download for offline reading"; num.textContent = (mine && mine.have > CH ? mb(mine.have) + " / " : "") + mb(s.bk.size); }
      });
    }
    function toast(msg) { var tt = el("div", "rd-toast"); tt.textContent = msg; root.appendChild(tt); setTimeout(function () { tt.remove(); }, 3600); }
    function dlAct() {
      var bk = s.bk; if (!bk) return;
      if (s.dling) { bk.stopDl = true; return; }
      if (s.dlFull) { bookDrop(bk.url).then(function () { return metaPut(bk.url, { size: bk.size, at: Date.now(), title: o.title || "" }); }).then(function () { bk.save = true; offUI(); }); return; }
      var start = function () {
        s.dling = true; offUI();
        bk.download(function (f) { if (R === s) offUI(f); }).then(function () { s.dling = false; if (R !== s) return; offUI(); if (!bk.stopDl) toast(ur ? "کتاب محفوظ ہو گئی۔ اب انٹرنیٹ کے بغیر بھی کھلے گی۔" : "Book saved. It will now open without the internet."); },
          function (e) { s.dling = false; if (R !== s) return; offUI(); toast(e && e.message === "full" ? (ur ? "ڈیوائس میں جگہ کم ہے۔ کچھ محفوظ کتابیں ہٹا کر دوبارہ کوشش کریں۔" : "Not enough space on this device. Remove some saved books and try again.") : (ur ? "ڈاؤن لوڈ رک گیا۔ انٹرنیٹ دیکھیں اور دوبارہ دبائیں، جہاں سے رکا وہیں سے چلے گا۔" : "The download stopped. Check the internet and press again; it continues from where it stopped.")); });
      };
      try {
        if (navigator.storage && navigator.storage.estimate) { navigator.storage.estimate().then(function (q) { if (q && q.quota && q.quota - (q.usage || 0) < bk.size * 1.1) toast(ur ? "ڈیوائس میں اس کتاب کے لیے جگہ کم ہے۔" : "There is not enough space on this device for this book."); else start(); }, start); return; }
      } catch (e) {}
      start();
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-r],[data-p]"); if (!b) return;
      if (b.dataset.p) { $(".rd-toc").classList.remove("on"); show(parseInt(b.dataset.p, 10)); return; }
      switch (b.dataset.r) {
        case "close": closeUI(); break;
        case "next": show((s.last || s.p) + 1, 1); break; case "prev": show(s.p - 1, -1); break;
        case "say": var sel = (window.getSelection && String(window.getSelection()) || "").trim(), tx = sel;
          if (!tx && !rtl) tx = Array.prototype.map.call(pageBox.querySelectorAll(".rd-tl span"), function (x) { return x.textContent; }).filter(function (t) { return !/PCTB|Not for Sale|Web version/i.test(t); }).join(" ").replace(/\s+/g, " ").trim();
          if (!tx) { var tt = el("div", "rd-toast", ur ? "اس صفحے کا متن منتخب نہیں ہو سکتا۔ نوٹس یا سبق کی باتیں 🔊 سے سنیں۔" : "This page is a picture, so its text cannot be read aloud. Listen to the lesson notes instead."); stage.appendChild(tt); setTimeout(function () { tt.remove(); }, 3200); break; }
          if (o.speak) o.speak(tx, rtl ? "ur-PK" : "en-US"); else if (window.speechSynthesis) { window.speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(tx); u.lang = rtl ? "ur-PK" : "en-US"; u.rate = .85; window.speechSynthesis.speak(u); }
          break;
        case "dl": dlAct(); break;
        case "low": s.low = !s.low; lowSet(s.low); root.classList.toggle("low", s.low); buildToc(); if (s.pdf) show(s.p); break;
        case "clr": bookList().then(function (list) { return Promise.all(list.filter(function (m) { return !s.bk || m.url !== s.bk.url; }).map(function (m) { return bookDrop(m.url); })); }).then(function () { offUI(); }); break;
        case "tr": root.classList.toggle("nohot"); b.classList.toggle("on", !root.classList.contains("nohot")); closeSheet(); break;
        case "toc": buildToc(); $(".rd-toc").classList.toggle("on"); break;
        case "mark": var i = s.marks.indexOf(s.p); if (i > -1) s.marks.splice(i, 1); else s.marks.push(s.p); persist(); upd(); pageBox.querySelectorAll(".rd-rib").forEach(function (x) { x.remove(); }); if (s.marks.indexOf(s.p) > -1 && pageBox.firstChild) pageBox.firstChild.appendChild(el("i", "rd-rib")); break;
        case "fit": s.fit = s.fit === "page" ? "auto" : "page"; persist(); upd(); show(s.p); break;
        case "theme": theme(s.theme === "day" ? "sepia" : s.theme === "sepia" ? "night" : "day"); break;
        case "zi": s.zoom = Math.min(3, s.zoom + .25); persist(); show(s.p); break;
        case "zo": s.zoom = Math.max(.6, s.zoom - .25); persist(); show(s.p); break;
        case "done": if (done && !done.disabled) { var cb = o.onDone; close(); cb && cb(); } break;
      }
    });
    rng.addEventListener("input", function () { pg.textContent = rng.value + " / " + s.n; });
    rng.addEventListener("change", function () { show(parseInt(rng.value, 10)); });
    var x0 = null, y0 = 0;
    stage.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } else x0 = null; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (x0 == null) return; var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; x0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6 && stage.scrollWidth <= stage.clientWidth + 4) { var forward = rtl ? dx > 0 : dx < 0; show(forward ? (s.last || s.p) + 1 : s.p - 1, forward ? 1 : -1); }
    }, { passive: true });
    s.key = function (e) {
      if (e.key === "Escape") { if (sheet) closeSheet(); else closeUI(); } else if (e.key === "ArrowRight") show(rtl ? s.p - 1 : (s.last || s.p) + 1, rtl ? -1 : 1); else if (e.key === "ArrowLeft") show(rtl ? (s.last || s.p) + 1 : s.p - 1, rtl ? 1 : -1);
    };
    document.addEventListener("keydown", s.key);
    try { if (!(history.state && history.state.iqReader)) history.pushState({ iqReader: 1 }, ""); } catch (e) {}
    loadLib().then(function (m) { return liteOf(o).then(function (src) { return openDoc(m, src, o.title || "").catch(function (e) { if (src === o.url) throw e; return openDoc(m, o.url, o.title || ""); }); }); }).then(function (d) {
      var pdf = d.pdf;
      if (R !== s) { if (d.bk) d.bk.dead = true; pdf.destroy(); return; }
      s.bk = d.bk; s.dlFull = !!d.full;
      if (d.bk) {
        d.bk.onWait = function (w) { if (R !== s) return; if (w && s.busy === false) return; /* only the quiet next-page fetch failed: nothing to show */ if (w) { load.style.display = "flex"; load.textContent = ur ? "انٹرنیٹ کمزور ہے۔ دوبارہ کوشش ہو رہی ہے…" : "The internet is weak. Trying again…"; } else if (load.dataset.w) load.textContent = ur ? "کتاب کھل رہی ہے…" : "Opening the book…"; load.dataset.w = w ? "1" : ""; };
        d.bk.onStale = function () { if (R === s) { close(); open(o); } };
      }
      s.pdf = pdf; s.n = pdf.numPages;
      (function () { var nm = String(o.url || "").split("?")[0].split("/").pop().replace(/\.pdf$/i, ""); if (!nm) return; fetch(BASE + "../data/sent/" + nm + ".json").then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { if (j && j.pages && R === s) { sdat = j; var tb = $('[data-r="tr"]'); tb.style.display = ""; tb.classList.add("on"); show(s.p); } }).catch(function () {}); })(); rng.max = s.n; var p0 = o.page || saved.p || 1;
      if (o.page && saved.p && saved.p > o.page && (!o.end || saved.p <= o.end + 1) && o.resume !== false) p0 = saved.p;
      s.max = Math.max(1, o.seen || 1);
      var go = function () { if (R === s) show(Math.min(Math.max(1, p0), s.n)); };
      if (o.textMode && s.n <= 400) {
        // book pages made from the PDF text; falls back to the plain PDF pages when the text is not good
        var A = { s: s, root: root, stage: stage, o: o, ur: ur, load: load, upd: upd, persist: persist, show: show, pdf: pdf, p0: p0, noBg: function () { return (s.low || (s.bk && s.bk.slow)) && !s.dlFull; } }, auto = s.mode !== "pdf";
        if (auto) load.textContent = ur ? "کتاب تیار ہو رہی ہے…" : "Preparing the book…";
        ensureText().then(function () { return window.IQText.attach(A); }).then(function (res) { if (!res || !res.entered) go(); }, go);
        if (!auto) go();
      } else go();
    }).catch(function () { load.textContent = ur ? "کتاب نہیں کھل سکی۔ انٹرنیٹ دیکھیں اور دوبارہ کوشش کریں۔" : "The book could not open. Check the internet and try again."; });
    root.querySelector('[data-r="close"]').focus();
  }
  function close() {
    if (!R) return; var s = R; R = null; document.removeEventListener("keydown", s.key); window.removeEventListener("resize", s.rs);
    if (s.bk) { s.bk.dead = true; s.bk.stopDl = true; }
    try { (s.task || []).forEach(function (t) { t.cancel(); }); } catch (e) {} try { if (s.pdf) s.pdf.destroy(); } catch (e) {}
    s.root.remove(); document.body.style.overflow = "";
  }
  // closing with the X button / Esc also removes the history entry the reader added
  function closeUI() {
    close();
    try {
      if (history.state && history.state.iqReader) {
        window.__iqIgnorePop = (window.__iqIgnorePop || 0) + 1;
        history.back();
        setTimeout(function () { window.__iqIgnorePop = 0; }, 1000);
      }
    } catch (e) {}
  }
  // text of a whole PDF for the auto study-material maker (no reader window needed)
  function textOf(url, onProgress) {
    return Promise.all([loadLib(), ensureText()]).then(function (r) {
      return r[0].getDocument({ url: url, disableAutoFetch: true, rangeChunkSize: 1048576, wasmUrl: BASE + "wasm/" }).promise.then(function (pdf) {
        return window.IQText.extract(pdf, onProgress).then(function (d) { try { pdf.destroy(); } catch (e) {} return d; });
      });
    });
  }
  try { if (localStorage.getItem("iq-low") === "1") document.documentElement.classList.add("iq-low"); } catch (e) {} /* site-wide effects only when the reader chose the mode; a phone on 3G gets the lighter reader only */
  window.IQReader = { open: open, close: close, textOf: textOf, isOpen: function () { return !!R; }, low: { on: lowOn, set: lowSet }, saved: { list: bookList, remove: bookDrop } };
})();
