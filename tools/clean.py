import json,re,collections,sys
tag=sys.argv[1];minp=int(sys.argv[2])
d=json.load(open(tag+'.json'))
cnt=collections.Counter()
for p,v in d.items():
    for s in v:
        for w in re.findall(r"[a-z']+",s['t'].lower()): cnt[w]+=1
def score(t):
    ws=re.findall(r"[A-Za-z']+",t)
    if not ws: return 0
    ok=sum(1 for w in ws if cnt[w.lower()]>=2 or (len(w)<=2 and w.lower() in ('a','i','is','in','it','to','of','on','at','an','as','be','by','do','go','he','if','me','my','no','so','up','us','we')))
    return ok/len(ws)
keep={};seen=set()
for p,v in d.items():
    if int(p)<minp: continue
    for s in v:
        t=s['t']
        if score(t)>=0.85 and re.search(r'[A-Z]',t[:1]) and s['h'] not in seen:
            if re.search(r'[|_~=<>{}\\]|\d{4,}',t): continue
            keep.setdefault(p,[]).append(s)
        elif score(t)<0.85 and False: pass
tot=sum(len(v) for v in d.values()); k=sum(len(v) for v in keep.values())
print(tag,'all',tot,'kept',k)
json.dump(keep,open(tag+'_clean.json','w'),ensure_ascii=False)
