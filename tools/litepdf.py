"""Makes the light ("lite") copy of a book PDF for weak internet.

What it changes: only the pictures inside the PDF. Each large picture is re-saved as a normal JPEG
at a size that is still sharp on a phone or laptop screen (longest side at most MAXPX pixels,
quality Q). JPEG 2000 pictures become normal JPEGs too, which phones decode much faster.
Text, vector drawings, fonts, page order and page numbers are not touched.
A picture is only replaced when the new one is clearly smaller. Transparency masks are kept as they are.
The file is then written with a clean index (object streams), like tools/fastpdf.py.

The original file is never changed. The light copy goes to books/fast/<same name>.pdf and
books/fast/index.json lists it (the reader looks there first and falls back to the original).

Needs pikepdf and Pillow.

  python3 tools/litepdf.py                 all PDFs in books/
  python3 tools/litepdf.py in.pdf out.pdf  one file (for a book kept in Cloudflare R2: download it, run this,
                                           upload out.pdf as a new file and put its address in the resource's
                                           src.fast field; the original stays in R2)
"""
import io, json, os, sys, zlib

import pikepdf
from pikepdf import Name, PdfImage
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOKS = os.path.join(ROOT, "books")
FAST = os.path.join(BOOKS, "fast")
MAXPX = 2400      # longest side of a picture after shrinking (an A3 two-page spread stays sharp)
Q = 62            # JPEG quality (readable text inside pictures, clean illustrations)
MIN_BYTES = 30000  # small pictures are left alone


def lighten(img):
    """Returns the number of bytes saved for one image XObject (0 when it was left alone)."""
    raw = img.read_raw_bytes()
    filt = img.get("/Filter")
    filts = [str(f) for f in (filt if isinstance(filt, pikepdf.Array) else [filt])] if filt is not None else []
    if len(raw) < MIN_BYTES or not filts or filts[-1] not in ("/DCTDecode", "/JPXDecode"):
        return 0
    if "/Decode" in img or img.get("/ImageMask") or img.get("/BitsPerComponent", 8) != 8:
        return 0
    try:
        pim = PdfImage(img).as_pil_image()
    except Exception:
        return 0
    if pim.mode not in ("RGB", "L"):
        return 0  # CMYK, palettes and odd colour spaces stay exactly as they are
    w, h = pim.size
    if max(w, h) > MAXPX:
        k = MAXPX / float(max(w, h))
        pim = pim.resize((max(1, round(w * k)), max(1, round(h * k))), Image.LANCZOS)
    buf = io.BytesIO()
    pim.save(buf, "JPEG", quality=Q, optimize=True, progressive=False)
    data = buf.getvalue()
    # JPEG 2000 -> JPEG is worth it even at the same size (phones decode JPEG much faster);
    # a JPEG is only re-saved when that makes it clearly smaller
    if len(data) > len(raw) * (1.0 if filts[-1] == "/JPXDecode" else 0.85):
        return 0
    smask = img.get("/SMask")
    img.write(data, filter=Name.DCTDecode)
    img.Width, img.Height = pim.size[0], pim.size[1]
    img.ColorSpace = Name.DeviceRGB if pim.mode == "RGB" else Name.DeviceGray
    img.BitsPerComponent = 8
    for k in ("/DecodeParms", "/SMaskInData", "/Intent"):
        if k in img:
            del img[k]
    if smask is not None:
        img.SMask = smask  # PDF viewers stretch the mask to the picture, so a smaller picture still lines up
    return len(raw) - len(data)


def make(src, dst):
    with pikepdf.open(src) as pdf:
        n = len(pdf.pages)
        saved, seen = 0, set()
        for obj in pdf.objects:
            if isinstance(obj, pikepdf.Stream) and obj.get("/Subtype") == "/Image" and obj.objgen not in seen:
                seen.add(obj.objgen)
                saved += lighten(obj)
        if "/Metadata" in pdf.Root:
            del pdf.Root["/Metadata"]  # XMP metadata is not needed for reading
        pdf.save(dst, object_stream_mode=pikepdf.ObjectStreamMode.generate, compress_streams=True,
                 recompress_flate=True, linearize=False)
    with pikepdf.open(dst) as chk:
        if len(chk.pages) != n:
            os.remove(dst)
            raise RuntimeError("page count changed; light copy not kept")
    return n, saved


def main():
    args = sys.argv[1:]
    if len(args) == 2:
        n, _ = make(args[0], args[1])
        a, b = os.path.getsize(args[0]), os.path.getsize(args[1])
        print("%s -> %s  %d pages  %.1f MB -> %.1f MB" % (args[0], args[1], n, a / 1048576, b / 1048576))
        return
    os.makedirs(FAST, exist_ok=True)
    idx = {}
    for name in sorted(os.listdir(BOOKS)):
        if not name.lower().endswith(".pdf") or name.startswith("_"):
            continue
        src, dst = os.path.join(BOOKS, name), os.path.join(FAST, name)
        try:
            n, _ = make(src, dst)
            a, b = os.path.getsize(src), os.path.getsize(dst)
            idx[name] = {"size": b, "orig": a, "pages": n}
            print("ok   %-36s %3d pages  %6.1f MB -> %6.1f MB" % (name, n, a / 1048576, b / 1048576))
        except Exception as e:  # keep going: the reader simply uses the original for this book
            print("skip %-36s %s" % (name, e))
    with open(os.path.join(FAST, "index.json"), "w") as f:
        json.dump(idx, f, indent=0)


if __name__ == "__main__":
    main()
