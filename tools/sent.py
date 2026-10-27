import sys,json,re,glob,collections
tag=sys.argv[1]
def fnv(s):
    h=0x811c9dc5
    for b in s.encode('utf-8'):
        h^=b; h=(h*0x01000193)&0xffffffff
    return '%08x'%h
def norm(t): return re.sub(r'\s+',' ',re.sub(r'[^a-z0-9 ]','',t.lower())).strip()
WM=re.compile(r'web|version|pctb|textbook|not for sale|^sale$',re.I)
out={}
for f in sorted(glob.glob(f'{tag}/p*.tsv')):
    p=int(re.search(r'p(\d+)',f).group(1))
    rows=[l.rstrip('\n').split('\t') for l in open(f,encoding='utf-8')][1:]
    W=H=1; paras=collections.OrderedDict()
    for r in rows:
        if len(r)<12: continue
        lv=int(r[0])
        if lv==1: W,H=int(r[8]),int(r[9]); continue
        if lv!=5: continue
        txt=r[11].strip(); conf=float(r[10])
        if not txt or conf<45: continue
        if not re.search(r'[A-Za-z0-9]',txt): continue
        key=(r[2],r[3]); paras.setdefault(key,[]).append((int(r[4]),r[5],txt,int(r[6]),int(r[7]),int(r[8]),int(r[9])))
    sents=[]
    for key,ws in paras.items():
        ws=[w for w in ws if not WM.search(w[2])] or []
        if len(ws)<3: continue
        cur=[]
        for w in ws:
            cur.append(w)
            if re.search(r'[.?!]["”\')]*$',w[2]) and len(w[2])>1 or w[2] in ('.', '?','!'):
                sents.append(cur); cur=[]
        if cur: sents.append(cur)
    res=[]
    for s in sents:
        text=' '.join(w[2] for w in s).strip()
        if len(s)<3 or len(re.findall(r'[A-Za-z]{2,}',text))<2: continue
        lines=collections.OrderedDict()
        for w in s: lines.setdefault(w[0],[]).append(w)
        rects=[]
        for ln,lw in lines.items():
            x0=min(w[3] for w in lw);y0=min(w[4] for w in lw);x1=max(w[3]+w[5] for w in lw);y1=max(w[4]+w[6] for w in lw)
            rects.append([round(x0/W,4),round(y0/H,4),round((x1-x0)/W,4),round((y1-y0)/H,4)])
        res.append({'h':fnv(norm(text)),'t':text,'r':rects})
    if res: out[p]=res
json.dump(out,open(f'{tag}.json','w'),ensure_ascii=False)
n=sum(len(v) for v in out.values()); u=len({s['h'] for v in out.values() for s in v})
print(tag,'pages',len(out),'sentences',n,'unique',u)
