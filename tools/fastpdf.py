"""Makes the "fast copy" of each book PDF for the IQRA reader.

Why: many textbook PDFs (PCTB web versions) are written in a way that forces the reader to download
almost the whole file before page 1 can be shown. This tool rewrites the file structure only
(clean index, object streams). Nothing is re-drawn or re-compressed: every page, picture and letter
is exactly the same as in the original, and the page numbers do not change.

The original file is never touched. The fast copy goes to books/fast/<same name>.pdf and
books/fast/index.json lists the books that have one (the reader looks there first and falls back to
the original).

Needs qpdf (https://qpdf.sourceforge.io).

  python3 tools/fastpdf.py                 all PDFs in books/
  python3 tools/fastpdf.py some/file.pdf   one file (for a book kept in Cloudflare R2: download it, run this,
                                           upload the result as a new file and put its address in the
                                           resource's  src.fast  field; the original stays in R2)
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOKS = os.path.join(ROOT, "books")
FAST = os.path.join(BOOKS, "fast")


def pages(path):
    out = subprocess.run(["qpdf", "--show-npages", path], capture_output=True, text=True).stdout.strip()
    return int(out) if out.isdigit() else -1


def make(src, dst):
    # exit code 3 = finished with warnings (the damaged index these files often have); the output is still complete
    r = subprocess.run(["qpdf", "--object-streams=generate", "--recompress-flate", "--compression-level=9", src, dst],
                       capture_output=True, text=True)
    if r.returncode not in (0, 3) or not os.path.exists(dst):
        raise RuntimeError(r.stderr.strip()[:300] or "qpdf failed")
    a, b = pages(src), pages(dst)
    if a < 1 or a != b:
        os.remove(dst)
        raise RuntimeError("page count changed (%s -> %s); fast copy not kept" % (a, b))
    return a


def main():
    args = sys.argv[1:]
    if args:
        for src in args:
            dst = re.sub(r"\.pdf$", "", src, flags=re.I) + ".fast.pdf"
            n = make(src, dst)
            print("%s -> %s (%d pages, %.1f MB)" % (src, dst, n, os.path.getsize(dst) / 1048576))
        return
    os.makedirs(FAST, exist_ok=True)
    idx = {}
    for name in sorted(os.listdir(BOOKS)):
        if not name.lower().endswith(".pdf"):
            continue
        src, dst = os.path.join(BOOKS, name), os.path.join(FAST, name)
        try:
            n = make(src, dst)
            idx[name] = {"size": os.path.getsize(dst)}
            print("ok   %-36s %d pages  %.1f MB" % (name, n, os.path.getsize(dst) / 1048576))
        except Exception as e:  # keep going: the reader simply uses the original for this book
            print("skip %-36s %s" % (name, e))
    with open(os.path.join(FAST, "index.json"), "w") as f:
        json.dump(idx, f, indent=0)


if __name__ == "__main__":
    main()
