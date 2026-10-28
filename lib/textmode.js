/* IQRA text view: turns the text inside a PDF into reflowed book pages, so the book reads as if it was written here.
   Used by lib/reader.js (the "Aa" button). window.IQText = { extract, attach, quality }.
   Nothing is uploaded or stored on a server: the text is read from the PDF in the browser and cached on the device (IndexedDB). */
(function () {
  var VER = 1;
  var AR = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/, LAT = /[A-Za-z]/;
  var TERM = /[.!?\u06D4\u061F:\u061B\u2026]["\u201D\u2019)\]]*$/;
  var JUNK = /PCTB|Not for Sale|Web version/i;
  var DIGITS = /^[\s\d\u06F0-\u06F9\u0660-\u0669.\-\u2013|]+$/;

  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function arRatio(s) { var a = 0, l = 0, i, ch; for (i = 0; i < s.length; i++) { ch = s.charAt(i); if (AR.test(ch)) a++; else if (LAT.test(ch)) l++; } return a / (a + l || 1); }
  function median(a) { if (!a.length) return 0; a = a.slice().sort(function (x, y) { return x - y; }); return a[Math.floor(a.length / 2)]; }
  function tick() { return new Promise(function (r) { setTimeout(r, 0); }); }

  /* ---------- 1. one PDF page -> lines of text, top to bottom ---------- */
  function linesOf(items) {
    var its = [];
    items.forEach(function (it) {
      if (it.str == null || !it.transform) return;
      var t = it.transform;
      its.push({ s: it.str, x: t[4], y: t[5], w: it.width || 0, h: Math.abs(it.height) || Math.hypot(t[2], t[3]) || Math.hypot(t[0], t[1]) || 10 });
    });
    its.sort(function (a, b) { return b.y - a.y; });
    var lines = [];
    its.forEach(function (it) {
      var ln = lines[lines.length - 1];
      if (ln && Math.abs(ln.y - it.y) <= Math.max(2, 0.5 * Math.min(ln.h, it.h))) { ln.its.push(it); ln.h = Math.max(ln.h, it.h); }
      else lines.push({ y: it.y, h: it.h, its: [it] });
    });
    var out = [];
    lines.forEach(function (ln) {
      var raw = ln.its.map(function (i) { return i.s; }).join(""), rtl = arRatio(raw) > 0.5, txt = "", prev = null, x0 = 1e9, x1 = -1e9;
      ln.its.sort(function (a, b) { return rtl ? (b.x + b.w) - (a.x + a.w) : a.x - b.x; });
      ln.its.forEach(function (it) {
        if (prev) {
          var gap = rtl ? prev.x - (it.x + it.w) : it.x - (prev.x + prev.w);
          if (gap > 0.18 * ln.h && !/\s$/.test(txt) && !/^\s/.test(it.s)) txt += " ";
        }
        txt += it.s; prev = it; x0 = Math.min(x0, it.x); x1 = Math.max(x1, it.x + it.w);
      });
      txt = txt.replace(/\s+/g, " ").trim();
      try { txt = txt.normalize("NFKC"); } catch (e) {} // shaped Arabic-script letters back to plain letters
      if (txt) out.push({ t: txt, y: ln.y, h: ln.h, x0: x0, x1: x1, rtl: rtl });
    });
    return out;
  }

  /* ---------- 2. lines of all pages -> paragraphs and headings ---------- */
  function build(pages) {
    var N = pages.length, count = {};
    // body size = the most common line height, weighted by the amount of text
    var w = {};
    pages.forEach(function (ls) { ls.forEach(function (l) { var k = Math.round(l.h * 2) / 2; w[k] = (w[k] || 0) + l.t.length; }); });
    var body = 12, best = -1; Object.keys(w).forEach(function (k) { if (w[k] > best) { best = w[k]; body = parseFloat(k); } });
    // running heads, page numbers and watermarks: small lines at the top or bottom of the page that repeat on many pages
    function key(l) { return l.t.replace(/[\d\u06F0-\u06F9\u0660-\u0669]+/g, "#").toLowerCase(); }
    pages.forEach(function (ls) {
      var seen = {};
      ls.forEach(function (l, i) {
        l.edge = i < 2 || i >= ls.length - 2;
        if (!l.edge || l.h > body * 1.2) return;
        var k = key(l);
        if (!seen[k]) { seen[k] = 1; count[k] = (count[k] || 0) + 1; }
      });
    });
    var need = Math.max(4, Math.ceil(N * 0.4));
    pages = pages.map(function (ls) {
      return ls.filter(function (l) {
        if (!l.edge) return true;
        if (JUNK.test(l.t) || DIGITS.test(l.t)) return false;
        return !(N >= 6 && l.h <= body * 1.2 && count[key(l)] >= need);
      });
    });
    var paras = [], cur = null, prev = null, prevShort = false;
    pages.forEach(function (ls, pi) {
      var pg = pi + 1, bl = ls.filter(function (l) { return Math.abs(l.h - body) <= body * 0.2; });
      var minx = Math.min.apply(null, bl.map(function (l) { return l.x0; }).concat([1e9])), maxx = Math.max.apply(null, bl.map(function (l) { return l.x1; }).concat([-1e9]));
      var span = Math.max(1, maxx - minx), gaps = [];
      for (var i = 1; i < ls.length; i++) if (Math.abs(ls[i].h - body) <= body * 0.2 && Math.abs(ls[i - 1].h - body) <= body * 0.2) gaps.push(ls[i - 1].y - ls[i].y);
      var typ = median(gaps) || body * 1.4, first = true;
      ls.forEach(function (ln) {
        var isH = ln.h >= body * 1.22 && ln.t.length <= 140;
        if (isH) {
          if (cur && cur.t === "h" && prev && !first && Math.abs(cur.h - ln.h) < body * 0.15 && prev.y - ln.y < ln.h * 2.4) cur.s += " " + ln.t;
          else { cur = { t: "h", s: ln.t, pg: pg, h: ln.h }; paras.push(cur); }
          prev = ln; first = false; prevShort = false; return;
        }
        var width = ln.x1 - ln.x0, newP = !cur || cur.t === "h";
        if (!newP) {
          var gap = prev && !first ? prev.y - ln.y : 0, indent = ln.rtl ? (maxx - ln.x1) : (ln.x0 - minx);
          if (gap > typ * 1.45) newP = true;
          else if (indent > body * 0.9 && indent < span * 0.4) newP = true;
          else if (prevShort && TERM.test(cur.s)) newP = true;
        }
        if (newP) { cur = { t: "p", s: ln.t, pg: pg }; paras.push(cur); }
        else if (/[A-Za-z]-$/.test(cur.s) && /^[a-z]/.test(ln.t)) cur.s = cur.s.slice(0, -1) + ln.t;
        else cur.s += " " + ln.t;
        prev = ln; first = false; prevShort = width < span * 0.72;
      });
    });
    paras = paras.filter(function (p) { return p.s.replace(/\s/g, "").length > 0 && !DIGITS.test(p.s); });
    var sizes = []; paras.forEach(function (p) { if (p.t === "h" && sizes.indexOf(p.h) < 0) sizes.push(p.h); });
    paras.forEach(function (p) { if (p.t === "h") p.lv = p.h >= body * 1.55 ? 1 : 2; delete p.h; });
    return paras;
  }

  /* ---------- 3. is this text good enough to read? (some Urdu PDFs hold garbage text) ---------- */
  function quality(paras, nPages) {
    var text = paras.map(function (p) { return p.s; }).join(" "), n = text.length;
    if (n < Math.max(200, nPages * 40)) return { ok: false, why: "short" };
    var bad = 0, pres = 0, arab = 0, lat = 0, i, c;
    for (i = 0; i < n; i++) {
      c = text.charCodeAt(i);
      if (c === 0xFFFD || (c >= 0xE000 && c <= 0xF8FF) || (c < 32 && c !== 10 && c !== 9)) bad++;
      if ((c >= 0xFE70 && c <= 0xFEFF) || (c >= 0xFB50 && c <= 0xFDFF)) pres++;
      else if ((c >= 0x0600 && c <= 0x06FF) || (c >= 0x0750 && c <= 0x077F)) arab++;
      else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) lat++;
    }
    var tokens = text.split(/\s+/).filter(Boolean), singles = 0;
    tokens.forEach(function (t) { if (t.length === 1 && !/[0-9\u06F0-\u06F9\u0660-\u0669.,;:!?()\-\u06D4\u061F"'aAI&]/.test(t)) singles++; });
    var letters = arab + pres + lat;
    if (bad / n > 0.02) return { ok: false, why: "bad" };
    if (pres / Math.max(1, arab + pres) > 0.2) return { ok: false, why: "forms" };
    if (letters / n < 0.5) return { ok: false, why: "letters" };
    if (singles / Math.max(1, tokens.length) > 0.3) return { ok: false, why: "broken" };
    return { ok: true, rtl: arab + pres > lat };
  }

  function extract(pdf, onProgress) {
    var pages = [], n = pdf.numPages;
    function step(i) {
      if (i > n) return Promise.resolve();
      return pdf.getPage(i).then(function (page) {
        return page.getTextContent().then(function (tc) { pages.push(linesOf(tc.items)); try { page.cleanup(); } catch (e) {} });
      }).catch(function () { pages.push([]); }).then(function () {
        if (onProgress && (i % 3 === 0 || i === n)) onProgress(i / n);
        return i % 3 === 0 ? tick().then(function () { return step(i + 1); }) : step(i + 1);
      });
    }
    return step(1).then(function () {
      var paras = build(pages), q = quality(paras, n);
      return { v: VER, ok: q.ok, why: q.why || "", rtl: !!q.rtl, paras: q.ok ? paras : [] };
    });
  }

  /* ---------- device cache ---------- */
  function idb() { return new Promise(function (res, rej) { var r = indexedDB.open("iqra-text", 1); r.onupgradeneeded = function () { r.result.createObjectStore("b"); }; r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); }; }); }
  function cget(k) { return idb().then(function (db) { return new Promise(function (res) { var q = db.transaction("b").objectStore("b").get(k); q.onsuccess = function () { res(q.result || null); }; q.onerror = function () { res(null); }; }); }).catch(function () { return null; }); }
  function cput(k, v) { idb().then(function (db) { db.transaction("b", "readwrite").objectStore("b").put(v, k); }).catch(function () {}); }

  var CSS = ".iqrd{--rpaper:#fffdf8;--rink:#1d2b2a}.iqrd.sepia{--rpaper:#f6ecd3;--rink:#3b2d17}.iqrd.night{--rpaper:#131e1e;--rink:#dce8e6}" +
    ".rd-txt{display:none;flex:1;min-height:0;position:relative;overflow:hidden;background:var(--rdesk);justify-content:center;align-items:center;touch-action:pan-y}.iqrd.txmode .rd-txt{display:flex}.iqrd.txmode .rd-stage{display:none}" +
    ".iqrd.txmode [data-r=fit],.iqrd.txmode [data-r=tr]{display:none!important}" +
    ".tx-paper{position:relative;overflow:hidden;background:var(--rpaper);color:var(--rink);border-radius:6px;box-shadow:1px 0 0 rgba(0,0,0,.08),0 12px 30px rgba(0,0,0,.28)}" +
    ".tx-flow{column-fill:auto;overflow:visible;will-change:transform;hyphens:auto;-webkit-hyphens:auto}" +
    ".tx-flow p{margin:0 0 .75em;orphans:2;widows:2;text-wrap:pretty}.tx-flow p.u{font-family:'Noto Nastaliq Urdu','Noto Naskh Arabic','Amiri',serif;line-height:2.25;text-align:justify}.tx-flow p.e{font-family:Georgia,'Times New Roman',serif;line-height:1.7;text-align:start}" +
    ".tx-flow h2,.tx-flow h3{margin:.4em 0 .6em;line-height:1.5;break-after:avoid;font-weight:800;text-align:center}.tx-flow h2{font-size:1.45em;break-before:column}.tx-flow h2:first-child{break-before:auto}.tx-flow h3{font-size:1.15em;text-align:start}" +
    ".tx-flow .u-h{font-family:'Noto Nastaliq Urdu','Noto Naskh Arabic','Amiri',serif;line-height:2.1}" +
    ".tx-nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:76px;border-radius:14px;border:0;background:rgba(7,108,110,.62);color:#fff;font-size:1.5rem;cursor:pointer;z-index:3;display:flex;align-items:center;justify-content:center}.tx-nav.L{left:6px}.tx-nav.R{right:6px}.tx-nav:disabled{opacity:.25}" +
    "@media (max-width:640px){.tx-nav{width:30px;height:60px;opacity:.55}}";

  /* ---------- 4. the reader pane ---------- */
  // A = { s, root, stage, o, ur, load, upd, persist, show, pdf, p0 } handed over by lib/reader.js
  function attach(A) {
    var s = A.s, root = A.root, ur = A.ur, o = A.o, $ = function (q) { return root.querySelector(q); };
    if (!document.getElementById("iqtx-css")) { var st = el("style"); st.id = "iqtx-css"; st.textContent = CSS; document.head.appendChild(st); }
    var auto = s.mode !== "pdf", data = null, pane = null, paper = null, flow = null, kids = [], fc = [], lc = [], col = 0, cols = 1, pw = 0, bookRtl = !!o.rtl;
    var btn = el("button", "rd-ib", "Aa"); btn.type = "button"; btn.dataset.r = "tx"; btn.style.display = "none"; btn.setAttribute("aria-label", ur ? "متن کی صورت میں پڑھیں" : "Read as text");
    $(".rd-top").insertBefore(btn, $('[data-r="say"]'));
    var pgEl = $(".rd-pg"), rng = $(".rd-range"), key = "v" + VER + "|" + o.url;

    function getData() {
      return cget(key).then(function (c) {
        if (c && c.v === VER) return c;
        return extract(A.pdf, function (f) { if (auto && !pane) A.load.textContent = (ur ? "کتاب تیار ہو رہی ہے… " : "Preparing the book… ") + Math.round(f * 100) + "%"; }).then(function (d) { cput(key, d); return d; });
      });
    }

    function fsz() { return s.fs || (bookRtl ? 22 : 19); }
    function buildPane() {
      if (pane) return;
      pane = el("div", "rd-txt"); paper = el("div", "tx-paper"); flow = el("div", "tx-flow"); paper.appendChild(flow); pane.appendChild(paper);
      var L = el("button", "tx-nav L", "‹"), Rr = el("button", "tx-nav R", "›"); L.type = Rr.type = "button"; L.dataset.tx = "L"; Rr.dataset.tx = "R"; L.setAttribute("aria-label", "‹"); Rr.setAttribute("aria-label", "›");
      pane.appendChild(L); pane.appendChild(Rr); root.insertBefore(pane, $(".rd-bot"));
      var h = [];
      data.paras.forEach(function (p, i) {
        var u = arRatio(p.s) > 0.5, cls = u ? "u" : "e", t = String(p.s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
        if (p.t === "h") h.push("<" + (p.lv === 1 ? "h2" : "h3") + ' dir="auto" class="' + (u ? "u-h" : "") + '" data-i="' + i + '">' + t + "</" + (p.lv === 1 ? "h2" : "h3") + ">");
        else h.push('<p dir="auto" class="' + cls + '" data-i="' + i + '">' + t + "</p>");
      });
      flow.innerHTML = h.join(""); kids = Array.prototype.slice.call(flow.children);
      flow.dir = bookRtl ? "rtl" : "ltr";
      var x0 = null, y0 = 0;
      pane.addEventListener("touchstart", function (e) { if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; } else x0 = null; }, { passive: true });
      pane.addEventListener("touchend", function (e) {
        if (x0 == null) return; var t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0; x0 = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) turn((bookRtl ? dx > 0 : dx < 0) ? 1 : -1);
      }, { passive: true });
      var rz = null;
      window.addEventListener("resize", function f() { if (!root.isConnected) { window.removeEventListener("resize", f); return; } clearTimeout(rz); rz = setTimeout(function () { if (s.mode === "text") { var i = s.tp || 0; layout(); goPara(i); } }, 200); });
      document.addEventListener("keydown", function f(e) {
        if (!root.isConnected) { document.removeEventListener("keydown", f, true); return; }
        if (s.mode !== "text" || e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
        var k = e.key, d = 0;
        if (k === "ArrowRight") d = bookRtl ? -1 : 1; else if (k === "ArrowLeft") d = bookRtl ? 1 : -1; else if (k === "PageDown" || k === " ") d = 1; else if (k === "PageUp") d = -1;
        if (d) { e.preventDefault(); e.stopPropagation(); turn(d); }
      }, true);
    }

    function colOf(r) { var fr = flow.getBoundingClientRect(), d = bookRtl ? (fr.right - r.right) : (r.left - fr.left); return Math.max(0, Math.floor((d + 2) / pw)); }
    function layout() {
      var W = pane.clientWidth, H = pane.clientHeight; pw = Math.min(W - 12, 780); if (pw < 220) pw = Math.max(200, W);
      var ph = H - 14, pad = Math.round(Math.min(36, pw * 0.07)), vpad = Math.round(Math.min(30, ph * 0.045)), cw = pw - 2 * pad;
      paper.style.width = pw + "px"; paper.style.height = ph + "px";
      flow.style.cssText = "width:" + cw + "px;height:" + (ph - 2 * vpad) + "px;margin:" + vpad + "px " + pad + "px;column-width:" + cw + "px;column-gap:" + (2 * pad) + "px;font-size:" + fsz() + "px;transform:none";
      fc = []; lc = [];
      kids.forEach(function (k, i) { var rs = k.getClientRects(); if (!rs.length) { fc[i] = i ? lc[i - 1] : 0; lc[i] = fc[i]; return; } fc[i] = colOf(rs[0]); lc[i] = colOf(rs[rs.length - 1]); });
      cols = (lc.length ? lc[lc.length - 1] : 0) + 1; rng.max = cols;
    }
    function goCol(c, animate) {
      col = Math.max(0, Math.min(cols - 1, c));
      flow.style.transition = animate ? "transform .22s ease" : "none"; flow.style.transform = "translateX(" + (col * pw * (bookRtl ? 1 : -1)) + "px)";
      var fi = 0, li = 0, i;
      for (i = 0; i < lc.length; i++) { if (lc[i] >= col) { fi = i; break; } }
      for (i = lc.length - 1; i >= 0; i--) { if (fc[i] <= col) { li = i; break; } }
      s.tp = fi; var pa = data.paras[fi].pg, pb = data.paras[Math.max(fi, li)].pg;
      s.p = pa; s.last = pb; if (col >= cols - 1) pb = s.n; if (pb > s.max) s.max = pb;
      A.upd(); label(); A.persist(); if (o.onProgress) o.onProgress(s.max);
    }
    function label() {
      pgEl.textContent = (col + 1) + " / " + cols; rng.value = col + 1; rng.max = cols;
      var pv = $('[data-r="prev"]'), nx = $('[data-r="next"]'); if (pv) pv.disabled = col <= 0; if (nx) nx.disabled = col >= cols - 1;
      var L = pane.querySelector(".tx-nav.L"), R = pane.querySelector(".tx-nav.R"); L.disabled = bookRtl ? col >= cols - 1 : col <= 0; R.disabled = bookRtl ? col <= 0 : col >= cols - 1;
    }
    function turn(d) { goCol(col + d, true); }
    function goPara(i, animate) { i = Math.max(0, Math.min(kids.length - 1, i || 0)); goCol(fc[i] || 0, animate); }
    function paraOfPage(p) { for (var i = 0; i < data.paras.length; i++) if (data.paras[i].pg >= p) return i; return 0; }

    function enter() {
      buildPane(); rng.style.direction = bookRtl ? "rtl" : "ltr"; s.mode = "text"; root.classList.add("txmode"); btn.classList.add("on");
      layout(); goPara(s.tp != null ? s.tp : paraOfPage(A.p0 || 1));
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (s.mode === "text" && root.isConnected) { var i = s.tp || 0; layout(); goPara(i); } });
    }
    function leave() { rng.style.direction = ""; s.mode = "pdf"; root.classList.remove("txmode"); btn.classList.remove("on"); A.show(s.p); A.persist(); }
    function say() {
      var tx = []; kids.forEach(function (k, i) { if (fc[i] <= col && lc[i] >= col) tx.push(data.paras[i].s); }); tx = tx.join(" ");
      if (!tx) return; var lang = arRatio(tx) > 0.5 ? "ur-PK" : "en-US";
      if (o.speak) o.speak(tx, lang); else if (window.speechSynthesis) { window.speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(tx); u.lang = lang; u.rate = .85; window.speechSynthesis.speak(u); }
    }
    function toc() {
      var t = $(".rd-toc"), h = "<h3>" + (ur ? "فہرست اور نشان" : "Contents and bookmarks") + "</h3>", n = 0;
      data.paras.forEach(function (p, i) { if (p.t === "h") { n++; h += '<button data-tp="' + i + '"><span>' + String(p.s).slice(0, 90).replace(/</g, "&lt;") + "</span><b>" + (fc[i] + 1) + "</b></button>"; } });
      if (!n) h += '<p class="small">' + (ur ? "اس کتاب میں ابواب کے عنوان نہیں ملے۔ نیچے والی پٹی سے صفحے بدلیں۔" : "No chapter titles were found in this book. Use the slider to move.") + "</p>";
      if (s.marks.length) { h += "<h3>" + (ur ? "میرے نشان" : "My bookmarks") + "</h3>"; s.marks.slice().sort(function (a, b) { return a - b; }).forEach(function (p) { var i = paraOfPage(p); h += '<button data-tp="' + i + '"><span>★ ' + (ur ? "نشان" : "Bookmark") + "</span><b>" + (fc[i] + 1) + "</b></button>"; }); }
      t.innerHTML = h; t.classList.toggle("on");
    }

    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-r],[data-tx],[data-tp]"); if (!b) return;
      if (b.dataset.r === "tx") { e.stopPropagation(); if (s.mode === "text") leave(); else if (data && data.ok) enter(); return; }
      if (s.mode !== "text") return;
      if (b.dataset.tx) { e.stopPropagation(); turn((b.dataset.tx === "L") === !!bookRtl ? 1 : -1); return; }
      if (b.dataset.tp != null) { e.stopPropagation(); $(".rd-toc").classList.remove("on"); goPara(parseInt(b.dataset.tp, 10), true); return; }
      var r = b.dataset.r;
      if (r === "zi" || r === "zo") { e.stopPropagation(); s.fs = Math.max(14, Math.min(40, fsz() + (r === "zi" ? 2 : -2))); var i = s.tp || 0; layout(); goPara(i); return; }
      if (r === "next" || r === "prev") { e.stopPropagation(); turn(r === "next" ? 1 : -1); return; }
      if (r === "say") { e.stopPropagation(); say(); return; }
      if (r === "toc") { e.stopPropagation(); toc(); return; }
      if (r === "mark") setTimeout(label, 0);
    }, true);
    rng.addEventListener("input", function (e) { if (s.mode === "text") { e.stopImmediatePropagation(); pgEl.textContent = rng.value + " / " + cols; } }, true);
    rng.addEventListener("change", function (e) { if (s.mode === "text") { e.stopImmediatePropagation(); goCol(parseInt(rng.value, 10) - 1, false); } }, true);

    return new Promise(function (resolve) {
      if (!auto) resolve({ entered: false });
      getData().then(function (d) {
        data = d;
        if (!d || !d.ok || !d.paras.length) { resolve({ entered: false }); return; }
        bookRtl = !!o.rtl || !!d.rtl; btn.style.display = "";
        if (auto && root.isConnected && A.s === s) { enter(); resolve({ entered: true }); } else resolve({ entered: false });
      }, function () { resolve({ entered: false }); });
    });
  }

  window.IQText = { extract: extract, attach: attach, quality: quality, _build: build, _lines: linesOf };
})();
