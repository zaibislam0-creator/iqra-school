/* IQRA: turns photos of book pages into one PDF, in the browser, so the book opens in the same reader as every other book.
   window.IQToPdf.fromImages(files) -> Promise<Blob>   (files: File[] / FileList; pages follow the file names, 1, 2, ... 10)
   Every photo becomes a JPEG page (max 2000 px on the long side). Errors carry .code = "badimage" (with .file) or "toomany". */
(function () {
  var MAXSIDE = 2000, QUALITY = 0.85, MAXPAGES = 300;

  function natural(a, b) { return String(a.name).localeCompare(String(b.name), undefined, { numeric: true, sensitivity: "base" }); }
  function fail(code, file) { var e = new Error(code + (file ? ": " + file.name : "")); e.code = code; e.file = file ? file.name : ""; return e; }

  function toJpeg(file) {
    return createImageBitmap(file).catch(function () { throw fail("badimage", file); }).then(function (bmp) {
      var w = bmp.width, h = bmp.height, k = Math.min(1, MAXSIDE / Math.max(w, h));
      w = Math.max(1, Math.round(w * k)); h = Math.max(1, Math.round(h * k));
      var c = document.createElement("canvas"); c.width = w; c.height = h;
      var x = c.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, w, h); x.drawImage(bmp, 0, 0, w, h);
      if (bmp.close) bmp.close();
      return new Promise(function (res, rej) {
        c.toBlob(function (b) { if (!b) return rej(fail("badimage", file)); b.arrayBuffer().then(function (buf) { res({ w: w, h: h, data: new Uint8Array(buf) }); }, rej); }, "image/jpeg", QUALITY);
      });
    });
  }

  function ascii(s) { var u = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i) & 255; return u; }

  function build(pages) {
    var chunks = [], offsets = [], len = 0;
    function put(u) { chunks.push(u); len += u.length; }
    function obj(n, body, stream) {
      offsets[n] = len;
      put(ascii(n + " 0 obj\n" + body));
      if (stream) { put(ascii("\nstream\n")); put(stream); put(ascii("\nendstream")); }
      put(ascii("\nendobj\n"));
    }
    var N = pages.length, kids = [];
    put(ascii("%PDF-1.4\n%âãÏÓ\n"));
    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    for (var i = 0; i < N; i++) kids.push((3 + i * 3) + " 0 R");
    obj(2, "<< /Type /Pages /Kids [" + kids.join(" ") + "] /Count " + N + " >>");
    pages.forEach(function (p, i) {
      var pg = 3 + i * 3, im = pg + 1, ct = pg + 2, W = 612, H = Math.round(612 * p.h / p.w * 100) / 100;
      obj(pg, "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 " + W + " " + H + "] /Resources << /XObject << /Im0 " + im + " 0 R >> >> /Contents " + ct + " 0 R >>");
      obj(im, "<< /Type /XObject /Subtype /Image /Width " + p.w + " /Height " + p.h + " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + p.data.length + " >>", p.data);
      var cs = ascii("q " + W + " 0 0 " + H + " 0 0 cm /Im0 Do Q");
      obj(ct, "<< /Length " + cs.length + " >>", cs);
    });
    var total = 3 + N * 3, xref = len, x = "xref\n0 " + total + "\n0000000000 65535 f \n";
    for (var n = 1; n < total; n++) x += ("0000000000" + offsets[n]).slice(-10) + " 00000 n \n";
    put(ascii(x + "trailer\n<< /Size " + total + " /Root 1 0 R >>\nstartxref\n" + xref + "\n%%EOF\n"));
    return new Blob(chunks, { type: "application/pdf" });
  }

  function fromImages(files) {
    var list = Array.prototype.slice.call(files || []).sort(natural);
    if (!list.length) return Promise.reject(fail("badimage"));
    if (list.length > MAXPAGES) return Promise.reject(fail("toomany"));
    var pages = [];
    return list.reduce(function (p, f) { return p.then(function () { return toJpeg(f).then(function (j) { pages.push(j); }); }); }, Promise.resolve()).then(function () { return build(pages); });
  }

  window.IQToPdf = { fromImages: fromImages };
})();
