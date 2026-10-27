import sys,subprocess,json,re,os,glob
from concurrent.futures import ThreadPoolExecutor
pdf,tag=sys.argv[1],sys.argv[2]
n=int(re.search(r'Pages:\s+(\d+)',subprocess.run(['pdfinfo',pdf],capture_output=True,text=True).stdout).group(1))
os.makedirs(tag,exist_ok=True)
def job(p):
    base=f'{tag}/p{p:03d}'
    if not os.path.exists(base+'.tsv'):
        subprocess.run(['pdftoppm','-r','150','-png','-f',str(p),'-l',str(p),'-singlefile',pdf,base],check=True)
        subprocess.run(['tesseract',base+'.png',base,'--psm','3','tsv'],capture_output=True)
        os.remove(base+'.png')
    return p
with ThreadPoolExecutor(2) as ex: list(ex.map(job,range(1,n+1)))
print(tag,n,'pages done')
