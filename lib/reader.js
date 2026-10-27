/* IQRA book reader: reads a PDF inside the site, Kindle style. */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || "").replace(/[^\/]*$/, "");
  var lib = null, R = null;
  function loadLib() {
    if (lib) return lib;
    lib = import(BASE + "pdf.min.mjs").then(function (m) { m.GlobalWorkerOptions.workerSrc = BASE + "pdf.worker.min.mjs"; return m; });
    return lib;
  }
  var CSS = ".iqrd{position:fixed;inset:0;z-index:100000;display:flex;flex-direction:column;background:#eaf3f2;color:#12302f;font-family:inherit;--rbg:#eaf3f2;--rfg:#12302f;--rbar:#fff;--rline:#cfe3e1;--racc:#076c6e}" +
    ".iqrd.sepia{--rbg:#f1e6cb;--rfg:#43321a;--rbar:#f8efd9;--rline:#dccba6;--racc:#8a5a1f}.iqrd.night{--rbg:#101a1a;--rfg:#d9ecea;--rbar:#182626;--rline:#2b4141;--racc:#7fe0d2}" +
    ".iqrd{background:var(--rbg);color:var(--rfg)}.iqrd button{font:inherit;color:inherit;cursor:pointer}" +
    ".rd-top,.rd-bot{flex:none;display:flex;align-items:center;gap:6px;padding:8px 10px;background:var(--rbar);border-color:var(--rline);border-style:solid;border-width:0}.rd-top{border-bottom-width:1px}.rd-bot{border-top-width:1px;flex-wrap:wrap;justify-content:center;padding-bottom:max(8px,env(safe-area-inset-bottom))}" +
    ".rd-ib{width:42px;height:42px;border-radius:12px;border:1px solid var(--rline);background:transparent;display:inline-flex;align-items:center;justify-content:center;font-size:1.15rem;font-weight:700;flex:none}.rd-ib.on{background:var(--racc);color:#fff;border-color:var(--racc)}.rd-ib:disabled{opacity:.35;cursor:default}" +
    ".rd-title{flex:1;min-width:0;font-weight:800;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}" +
    ".rd-stage{flex:1;min-height:0;overflow:auto;-webkit-overflow-scrolling:touch;display:flex;justify-content:safe center;align-items:flex-start;padding:10px 0;position:relative;touch-action:pan-x pan-y pinch-zoom}" +
    ".rd-page{position:relative;flex:none;box-shadow:0 6px 24px rgba(0,0,0,.25);background:#fff;border-radius:4px}.rd-page canvas{display:block;width:100%;height:auto;border-radius:4px}.iqrd.sepia canvas{filter:sepia(.38) saturate(.9) contrast(.97)}.iqrd.night canvas{filter:invert(.92) hue-rotate(180deg)}" +
    ".rd-load{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--racc);background:transparent;pointer-events:none}" +
    ".rd-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:84px;border-radius:14px;border:0;background:rgba(7,108,110,.72);color:#fff;font-size:1.6rem;display:flex;align-items:center;justify-content:center;z-index:3;backdrop-filter:blur(4px)}.rd-nav:disabled{opacity:0;pointer-events:none}.rd-nav.L{left:6px}.rd-nav.R{right:6px}" +
    ".rd-pg{font-weight:800;min-width:74px;text-align:center;font-size:.95rem;direction:ltr}.rd-range{flex:1 1 140px;min-width:120px;accent-color:var(--racc);height:30px}" +
    ".rd-done{min-height:44px;padding:0 18px;border-radius:99px;border:0;background:#fe877b;color:#04393b;font-weight:800}.rd-done:disabled{background:var(--rline);color:var(--rfg);opacity:.75}.rd-hint{width:100%;text-align:center;font-size:.82rem;opacity:.85}" +
    ".rd-toc{position:absolute;inset:57px 0 0 0;z-index:5;background:var(--rbar);overflow:auto;padding:12px 14px;display:none}.rd-toc.on{display:block}.rd-toc h3{margin:4px 0 10px}.rd-toc button{display:flex;width:100%;gap:10px;justify-content:space-between;align-items:center;text-align:start;padding:12px;margin:0 0 6px;border-radius:12px;border:1px solid var(--rline);background:transparent}.rd-toc b{direction:ltr;opacity:.75}" +
    "@media (max-width:480px){.rd-nav{width:36px;height:70px}.rd-ib{width:38px;height:38px}}";
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function store(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k) || "null"); localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} return null; }
  function open(o) {
    if (R) close();
    var ur = o.lang === "ur", key = "iq_rd_" + o.url, saved = store(key) || {};
    var s = { o: o, pdf: null, n: 0, p: 1, max: 1, zoom: saved.zoom || 1, theme: saved.theme || "day", marks: saved.marks || [], tok: 0, task: null };
    if (!document.getElementById("iqrd-css")) { var st = el("style"); st.id = "iqrd-css"; st.textContent = CSS; document.head.appendChild(st); }
    var root = el("div", "iqrd " + s.theme); root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.dir = "ltr";
    root.innerHTML = '<div class="rd-top"><button class="rd-ib" data-r="close" aria-label="' + (ur ? "بند کریں" : "Close") + '">✕</button><div class="rd-title"></div>' +
      '<button class="rd-ib" data-r="toc" aria-label="' + (ur ? "فہرست" : "Contents") + '">☰</button><button class="rd-ib" data-r="mark" aria-label="' + (ur ? "نشان" : "Bookmark") + '">☆</button><button class="rd-ib" data-r="theme" aria-label="' + (ur ? "رنگ" : "Theme") + '">◐</button></div>' +
      '<div class="rd-stage"><div class="rd-page"><canvas></canvas></div><div class="rd-load">' + (ur ? "کتاب کھل رہی ہے…" : "Opening the book…") + '</div><button class="rd-nav L" data-r="L" aria-label="' + (ur ? "پچھلا" : "Previous") + '">‹</button><button class="rd-nav R" data-r="R" aria-label="' + (ur ? "اگلا" : "Next") + '">›</button></div>' +
      '<div class="rd-bot"><button class="rd-ib" data-r="zo" aria-label="Zoom out">−</button><span class="rd-pg">…</span><input class="rd-range" type="range" min="1" max="1" value="1" aria-label="' + (ur ? "صفحہ" : "Page") + '"><button class="rd-ib" data-r="zi" aria-label="Zoom in">+</button>' +
      (o.onDone ? '<button class="rd-done" data-r="done" disabled>' + (o.doneLabel || (ur ? "✓ میں نے پڑھ لیا" : "✓ I have read it")) + '</button><div class="rd-hint"></div>' : "") + '</div><div class="rd-toc"></div>';
    document.body.appendChild(root); document.body.style.overflow = "hidden";
    var $ = function (q) { return root.querySelector(q); }, stage = $(".rd-stage"), pageBox = $(".rd-page"), cv = $("canvas"), rng = $(".rd-range"), pg = $(".rd-pg"), load = $(".rd-load"), done = $(".rd-done"), hint = $(".rd-hint");
    $(".rd-title").textContent = o.title || ""; s.root = root; R = s;
    var rtl = !!o.rtl;
    // in right-to-left books the next page is on the left, like a real Urdu book
    $('[data-r="L"]').dataset.r = rtl ? "next" : "prev"; $('[data-r="R"]').dataset.r = rtl ? "prev" : "next";
    function theme(t) { s.theme = t; root.className = "iqrd " + t; store(key, { p: s.p, zoom: s.zoom, theme: t, marks: s.marks }); }
    function persist() { store(key, { p: s.p, zoom: s.zoom, theme: s.theme, marks: s.marks }); }
    function upd() {
      pg.textContent = s.p + " / " + (s.n || "…"); rng.value = s.p; var m = s.marks.indexOf(s.p) > -1; var b = $('[data-r="mark"]'); b.textContent = m ? "★" : "☆"; b.classList.toggle("on", m);
      $('[data-r="prev"]').disabled = s.p <= 1; $('[data-r="next"]').disabled = s.p >= s.n;
      if (done) {
        var need = o.end || 0, ok = !need || s.max >= need; done.disabled = !ok;
        hint.textContent = ok ? "" : (ur ? "اس سبق کے آخری صفحے (" + need + ") تک پڑھیں" : "Read up to the last page of this lesson (page " + need + ")");
      }
    }
    function show(n) {
      if (!s.pdf) return; n = Math.max(1, Math.min(s.n, n)); s.p = n; if (n > s.max) s.max = n; upd(); persist(); if (o.onProgress) o.onProgress(s.max);
      var tok = ++s.tok; load.style.display = "flex";
      s.pdf.getPage(n).then(function (page) {
        if (tok !== s.tok) return;
        var vp0 = page.getViewport({ scale: 1 }), avail = Math.min(stage.clientWidth - 8, 980), fit = Math.min(avail, (stage.clientHeight - 20) * vp0.width / vp0.height), w = Math.max(220, fit * s.zoom), css = w / vp0.width, dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        var vp = page.getViewport({ scale: css * dpr });
        var c2 = document.createElement("canvas"); c2.width = Math.floor(vp.width); c2.height = Math.floor(vp.height);
        if (s.task) { try { s.task.cancel(); } catch (e) {} }
        s.task = page.render({ canvasContext: c2.getContext("2d"), viewport: vp });
        return s.task.promise.then(function () {
          if (tok !== s.tok) return;
          pageBox.style.width = w + "px"; pageBox.replaceChild(c2, pageBox.querySelector("canvas")); cv = c2; load.style.display = "none"; stage.scrollTop = 0;
        });
      }).catch(function (e) { if (e && e.name === "RenderingCancelledException") return; load.textContent = ur ? "صفحہ نہیں کھل سکا۔ دوبارہ کوشش کریں۔" : "This page could not open. Please try again."; });
      if (n < s.n) s.pdf.getPage(n + 1).catch(function () {});
    }
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
        case "next": show(s.p + 1); break; case "prev": show(s.p - 1); break;
        case "toc": buildToc(); $(".rd-toc").classList.toggle("on"); break;
        case "mark": var i = s.marks.indexOf(s.p); if (i > -1) s.marks.splice(i, 1); else s.marks.push(s.p); persist(); upd(); break;
        case "theme": theme(s.theme === "day" ? "sepia" : s.theme === "sepia" ? "night" : "day"); break;
        case "zi": s.zoom = Math.min(3, s.zoom + .25); persist(); show(s.p); break;
        case "zo": s.zoom = Math.max(.6, s.zoom - .25); persist(); show(s.p); break;
        case "done": if (!done.disabled) { var cb = o.onDone; close(); cb && cb(); } break;
      }
    });
    rng.addEventListener("input", function () { pg.textContent = rng.value + " / " + s.n; });
    rng.addEventListener("change", function () { show(parseInt(rng.value, 10)); });
    var x0 = null, y0 = 0;
    stage.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } else x0 = null; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (x0 == null) return; var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; x0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.6 && stage.scrollWidth <= stage.clientWidth + 4) { var forward = rtl ? dx > 0 : dx < 0; show(s.p + (forward ? 1 : -1)); }
    }, { passive: true });
    s.key = function (e) {
      if (e.key === "Escape") close(); else if (e.key === "ArrowRight") show(s.p + (rtl ? -1 : 1)); else if (e.key === "ArrowLeft") show(s.p + (rtl ? 1 : -1));
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
    if (!R) return; var s = R; R = null; document.removeEventListener("keydown", s.key);
    try { if (s.task) s.task.cancel(); } catch (e) {} try { if (s.pdf) s.pdf.destroy(); } catch (e) {}
    s.root.remove(); document.body.style.overflow = "";
  }
  window.IQReader = { open: open, close: close };
})();
