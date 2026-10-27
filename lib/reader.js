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
    ".rd-spread{display:flex;flex:none;align-items:flex-start;justify-content:center}.rd-page{position:relative;flex:none;box-shadow:1px 0 0 #e6e1d4,2px 0 0 #fff,3px 0 0 #d8d2c3,4px 0 0 #fff,5px 1px 0 #c9c3b2,0 12px 30px rgba(0,0,0,.35);background:#fff;border-radius:2px 5px 5px 2px}.rd-page.rtlp{border-radius:5px 2px 2px 5px;box-shadow:-1px 0 0 #e6e1d4,-2px 0 0 #fff,-3px 0 0 #d8d2c3,-4px 0 0 #fff,-5px 1px 0 #c9c3b2,0 12px 30px rgba(0,0,0,.35)}.rd-page:after{content:'';position:absolute;inset:0;pointer-events:none;border-radius:inherit;background:linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 3%,rgba(0,0,0,0) 9%,rgba(0,0,0,0) 94%,rgba(0,0,0,.06))}.rd-page.rtlp:after{background:linear-gradient(270deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 3%,rgba(0,0,0,0) 9%,rgba(0,0,0,0) 94%,rgba(0,0,0,.06))}.rd-rib{position:absolute;top:-2px;right:14px;width:20px;height:46px;background:#e0483c;clip-path:polygon(0 0,100% 0,100% 100%,50% 78%,0 100%);z-index:2;box-shadow:0 2px 4px rgba(0,0,0,.3)}.rd-page.rtlp .rd-rib{right:auto;left:14px}.rd-flip{position:absolute;z-index:4;pointer-events:none;backface-visibility:hidden;animation:rdflip .5s cubic-bezier(.45,.05,.3,1) forwards}@keyframes rdflip{0%{transform:rotateY(0)}100%{transform:rotateY(-110deg);opacity:.1}}@keyframes rdflipr{0%{transform:rotateY(0)}100%{transform:rotateY(110deg);opacity:.1}}@media (prefers-reduced-motion:reduce){.rd-flip{animation-duration:.01s}}.rd-page canvas{display:block;width:100%;height:auto;border-radius:inherit}.iqrd.sepia canvas{filter:sepia(.38) saturate(.9) contrast(.97)}.iqrd.night canvas{filter:invert(.92) hue-rotate(180deg)}" +
    ".rd-load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--racc);background:transparent;pointer-events:none}" +
    ".rd-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:84px;border-radius:14px;border:0;background:rgba(7,108,110,.72);color:#fff;font-size:1.6rem;display:flex;align-items:center;justify-content:center;z-index:3;backdrop-filter:blur(4px)}.rd-nav:disabled{opacity:0;pointer-events:none}.rd-nav.L{left:6px}.rd-nav.R{right:6px}" +
    ".rd-pg{font-weight:800;min-width:74px;text-align:center;font-size:.95rem;direction:ltr}.rd-range{flex:1 1 140px;min-width:120px;accent-color:var(--racc);height:30px}" +
    ".rd-done{min-height:44px;padding:0 18px;border-radius:99px;border:0;background:#fe877b;color:#04393b;font-weight:800}.rd-done:disabled{background:var(--rline);color:var(--rfg);opacity:.75}.rd-float{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);z-index:6;min-height:50px;padding:0 24px;border-radius:99px;border:0;background:#fe877b;color:#04393b;font-weight:800;font-size:1.05rem;box-shadow:0 6px 20px rgba(0,0,0,.35);display:none;white-space:nowrap}.rd-float.on{display:block}.rd-hint{width:100%;text-align:center;font-size:.82rem;opacity:.85}" +
    ".rd-toc{position:absolute;inset:57px 0 0 0;z-index:5;background:var(--rbar);overflow:auto;padding:12px 14px;display:none}.rd-toc.on{display:block}.rd-toc h3{margin:4px 0 10px}.rd-toc button{display:flex;width:100%;gap:10px;justify-content:space-between;align-items:center;text-align:start;padding:12px;margin:0 0 6px;border-radius:12px;border:1px solid var(--rline);background:transparent}.rd-toc b{direction:ltr;opacity:.75}" +
    "@media (max-width:480px){.rd-nav{width:36px;height:70px}.rd-ib{width:38px;height:38px}}";
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null"); localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} return null; }
  function open(o) {
    if (R) close();
    var ur = o.lang === "ur", key = "iq_rd_" + o.url, saved = store(key) || {};
    var s = { o: o, pdf: null, n: 0, p: 1, max: 1, zoom: saved.zoom || 1, fit: saved.fit === "page" ? "page" : "auto", theme: saved.theme || "day", marks: saved.marks || [], tok: 0, task: null };
    if (!document.getElementById("iqrd-css")) { var st = el("style"); st.id = "iqrd-css"; st.textContent = CSS; document.head.appendChild(st); }
    var root = el("div", "iqrd " + s.theme); root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.dir = "ltr";
    root.innerHTML = '<div class="rd-top"><button class="rd-ib" data-r="close" aria-label="' + (ur ? "بند کریں" : "Close") + '">✕</button><div class="rd-title"></div>' +
      '<button class="rd-ib" data-r="toc" aria-label="' + (ur ? "فہرست" : "Contents") + '">☰</button><button class="rd-ib" data-r="mark" aria-label="' + (ur ? "نشان" : "Bookmark") + '">☆</button><button class="rd-ib" data-r="fit" aria-label="' + (ur ? "ایک صفحہ یا دو صفحے" : "One page or two-page spread") + '">⤢</button><button class="rd-ib" data-r="theme" aria-label="' + (ur ? "رنگ" : "Theme") + '">◐</button></div>' +
      '<div class="rd-stage"><div class="rd-spread"><div class="rd-page"><canvas></canvas></div></div><div class="rd-load">' + (ur ? "کتاب کھل رہی ہے…" : "Opening the book…") + '</div><button class="rd-nav L" data-r="L" aria-label="' + (ur ? "پچھلا" : "Previous") + '">‹</button><button class="rd-nav R" data-r="R" aria-label="' + (ur ? "اگلا" : "Next") + '">›</button>' + (o.onDone ? '<button class="rd-float" data-r="done">' + (o.doneLabel || (ur ? "✓ میں نے پڑھ لیا" : "✓ I have read it")) + '</button>' : "") + '</div>' +
      '<div class="rd-bot"><button class="rd-ib" data-r="zo" aria-label="Zoom out">−</button><span class="rd-pg">…</span><input class="rd-range" type="range" min="1" max="1" value="1" aria-label="' + (ur ? "صفحہ" : "Page") + '"><button class="rd-ib" data-r="zi" aria-label="Zoom in">+</button>' +
      (o.onDone ? '<button class="rd-done" data-r="done" disabled>' + (o.doneLabel || (ur ? "✓ میں نے پڑھ لیا" : "✓ I have read it")) + '</button><div class="rd-hint"></div>' : "") + '</div><div class="rd-toc"></div>';
    document.body.appendChild(root); document.body.style.overflow = "hidden";
    var $ = function (q) { return root.querySelector(q); }, stage = $(".rd-stage"), pageBox = $(".rd-spread"), rng = $(".rd-range"), pg = $(".rd-pg"), load = $(".rd-load"), done = $(".rd-done"), hint = $(".rd-hint");
    $(".rd-title").textContent = o.title || ""; s.root = root; R = s;
    var rtl = !!o.rtl;
    // in right-to-left books the next page is on the left, like a real Urdu book
    $('[data-r="L"]').dataset.r = rtl ? "next" : "prev"; $('[data-r="R"]').dataset.r = rtl ? "prev" : "next";
    function theme(t) { s.theme = t; root.className = "iqrd " + t; store(key, { p: s.p, zoom: s.zoom, fit: s.fit, theme: t, marks: s.marks }); }
    function persist() { store(key, { p: s.p, zoom: s.zoom, fit: s.fit, theme: s.theme, marks: s.marks }); }
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
      if (!s.pdf) return; n = Math.max(1, Math.min(s.n, n)); if (dir) flipFrom(dir);
      var sp = isSpread(), list = [n];
      if (sp) { var a = n <= 1 ? 1 : (n % 2 === 0 ? n : n - 1); list = a === 1 ? [1] : (a + 1 <= s.n ? [a, a + 1] : [a]); }
      s.p = list[0]; s.last = list[list.length - 1]; if (s.last > s.max) s.max = s.last; upd(); persist(); if (o.onProgress) o.onProgress(s.max);
      var tok = ++s.tok; load.style.display = "flex"; if (s.task) { s.task.forEach(function (t) { try { t.cancel(); } catch (e) {} }); } s.task = [];
      var order = rtl ? list.slice().reverse() : list;
      Promise.all(order.map(function (pn) { return s.pdf.getPage(pn); })).then(function (pages) {
        if (tok !== s.tok) return;
        var vp0 = pages[0].getViewport({ scale: 1 }), ratio = vp0.width / vp0.height, availW = stage.clientWidth - 16, availH = stage.clientHeight - 20, w;
        if (sp) w = Math.min(availW / 2, availH * ratio, 1100);
        else { var byH = availH * ratio, byW = Math.min(availW, availW > availH * 1.15 ? 1100 : 960); w = (s.fit === "page" || (availW <= availH * 1.15 && byH >= byW * 0.85)) ? Math.min(byW, byH) : byW; }
        w = Math.max(200, w * s.zoom); var css = w / vp0.width, dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        return Promise.all(pages.map(function (page) {
          var vp = page.getViewport({ scale: css * dpr }), c2 = document.createElement("canvas"); c2.width = Math.floor(vp.width); c2.height = Math.floor(vp.height);
          var t = page.render({ canvasContext: c2.getContext("2d"), viewport: vp }); s.task.push(t); return t.promise.then(function () { return c2; });
        })).then(function (cs) {
          if (tok !== s.tok) return;
          pageBox.innerHTML = ""; cs.forEach(function (c2) { var d = el("div", "rd-page"); d.className = "rd-page" + (rtl ? " rtlp" : ""); d.style.width = w + "px"; d.appendChild(c2); if (s.marks.indexOf(list[0]) > -1 || s.marks.indexOf(list[list.length - 1]) > -1) d.appendChild(el("i", "rd-rib")); pageBox.appendChild(d); });
          load.style.display = "none"; stage.scrollTop = 0;
        });
      }).catch(function (e) { if (e && e.name === "RenderingCancelledException") return; load.style.display = "flex"; load.textContent = ur ? "صفحہ نہیں کھل سکا۔ دوبارہ کوشش کریں۔" : "This page could not open. Please try again."; });
      if (s.last < s.n) s.pdf.getPage(s.last + 1).catch(function () {});
    }
    var rz = null; s.rs = function () { clearTimeout(rz); rz = setTimeout(function () { if (s.pdf) show(s.p); }, 220); };
    window.addEventListener("resize", s.rs);
    s.show = show;
    function buildToc() {
      var t = $(".rd-toc"), h = "<h3>" + (ur ? "فہرست اور نشان" : "Contents and bookmarks") + "</h3>";
      (o.toc || []).forEach(function (x) { h += '<button data-p="' + x.p + '"><span>' + String(x.t).replace(/</g, "&lt;") + "</span><b>" + x.p + "</b></button>"; });
      if (s.marks.length) { h += "<h3>" + (ur ? "میرے نشان" : "My bookmarks") + "</h3>"; s.marks.slice().sort(function (a, b) { return a - b; }).forEach(function (p) { h += '<button data-p="' + p + '"><span>★ ' + (ur ? "صفحہ " : "Page ") + p + "</span><b>" + p + "</b></button>"; }); }
      t.innerHTML = h;
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-r],[data-p]"); if (!b) return;
      if (b.dataset.p) { $(".rd-toc").classList.remove("on"); show(parseInt(b.dataset.p, 10)); return; }
      switch (b.dataset.r) {
        case "close": close(); break;
        case "next": show((s.last || s.p) + 1, 1); break; case "prev": show(s.p - 1, -1); break;
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
      if (e.key === "Escape") close(); else if (e.key === "ArrowRight") show(rtl ? s.p - 1 : (s.last || s.p) + 1, rtl ? -1 : 1); else if (e.key === "ArrowLeft") show(rtl ? (s.last || s.p) + 1 : s.p - 1, rtl ? 1 : -1);
    };
    document.addEventListener("keydown", s.key);
    loadLib().then(function (m) { return m.getDocument({ url: o.url }).promise; }).then(function (pdf) {
      if (R !== s) { pdf.destroy(); return; }
      s.pdf = pdf; s.n = pdf.numPages; rng.max = s.n; var p0 = o.page || saved.p || 1;
      if (o.page && saved.p && saved.p > o.page && (!o.end || saved.p <= o.end + 1) && o.resume !== false) p0 = saved.p;
      s.max = Math.max(1, o.seen || 1); show(Math.min(Math.max(1, p0), s.n));
    }).catch(function () { load.textContent = ur ? "کتاب نہیں کھل سکی۔ انٹرنیٹ دیکھیں اور دوبارہ کوشش کریں۔" : "The book could not open. Check the internet and try again."; });
    root.querySelector('[data-r="close"]').focus();
  }
  function close() {
    if (!R) return; var s = R; R = null; document.removeEventListener("keydown", s.key); window.removeEventListener("resize", s.rs);
    try { (s.task || []).forEach(function (t) { t.cancel(); }); } catch (e) {} try { if (s.pdf) s.pdf.destroy(); } catch (e) {}
    s.root.remove(); document.body.style.overflow = "";
  }
  window.IQReader = { open: open, close: close };
})();
