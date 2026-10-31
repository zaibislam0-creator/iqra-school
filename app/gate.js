const cfg={apiKey:"AIzaSyAJNg33j6nklSRU9H5PW2EAorth_ieMkO8",authDomain:"iqra-d3243.firebaseapp.com",projectId:"iqra-d3243",storageBucket:"iqra-d3243.firebasestorage.app",messagingSenderId:"268215254460",appId:"1:268215254460:web:279ce43aa50fd5a9d8bfb9"};
const OWNER="zaibislam0@gmail.com";
let ready;window.__claudeReady=new Promise(r=>ready=r);
const G=document.getElementById('iqgate'),$=s=>G.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const show=h=>{G.innerHTML='<div class="gc">'+h+'</div>';G.style.display='grid'};
const SP=()=>window.__iqEntry&&window.__iqEntry.active;
const RES=document.documentElement.classList;
function leaveSplash(){if(!RES.contains('iq-resume'))return;RES.add('iq-leave');setTimeout(()=>RES.remove('iq-resume','iq-leave'),380)}
setTimeout(leaveSplash,9000);
let LNG='ur';try{LNG=(JSON.parse(localStorage.getItem('pds-state-v1'))||{}).lang==='en'?'en':'ur'}catch(e){}
const T=(en,ur)=>LNG==='ur'?ur:en;
const ERR={'auth/popup-blocked':['Your browser blocked the Google window. Please allow pop-ups for this site and try again.','براؤزر نے گوگل کی ونڈو روک دی۔ براہِ کرم اس سائٹ کے لیے پاپ اپ کی اجازت دیں اور دوبارہ کوشش کریں۔'],'auth/network-request-failed':['No internet connection. Please check your connection and try again.','انٹرنیٹ نہیں ہے۔ براہِ کرم کنکشن دیکھ کر دوبارہ کوشش کریں۔'],'auth/unauthorized-domain':['Sign-in is not allowed from this address.','اس ایڈریس سے لاگ اِن کی اجازت نہیں ہے۔'],'auth/too-many-requests':['Too many attempts. Please wait a little and try again.','بہت زیادہ کوششیں ہو گئیں۔ تھوڑا انتظار کر کے دوبارہ کوشش کریں۔']};
const friendly=e=>{const c=(e&&e.code)||String(e||'');if(c==='auth/popup-closed-by-user'||c==='auth/cancelled-popup-request')return '';const m=ERR[c];return m?T(m[0],m[1]):T('Sign-in did not complete. Please try again.','لاگ اِن مکمل نہیں ہوا۔ براہِ کرم دوبارہ کوشش کریں۔')};
if(!SP())show('<h1>IQRA</h1><p>Loading...</p>');
try{
const B='https://cdn.jsdelivr.net/npm/firebase@10.12.5/';
const [A,Au,F]=await Promise.all([import(B+'app/+esm'),import(B+'auth/+esm'),import(B+'firestore/+esm')]);
const app=A.initializeApp(cfg),auth=Au.getAuth(app),fs=F.getFirestore(app);
let role='student',uid=null,started=false;
function loginView(msg){if(SP()){G.style.display='none';window.__iqEntry.ready(msg);return}show('<div class="lg">ا</div><h1>IQRA</h1><p class="tag">Learn more, be more · سیکھیں، آگے بڑھیں</p><ul><li>Pakistan syllabus, KG to F.A</li><li>Videos, books, games and tests</li><li>Urdu and English, parents can follow along</li></ul><button class="gb" id="gb"><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.3 5.7c4.3-4 6.7-9.9 6.7-17.1z"/><path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.8-4.6l-7.9-6.2A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.2z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.9 2.3-8.6 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.2C6.5 42.6 14.6 48 24 48z"/></svg>Continue with Google</button><p class="er" id="er" aria-live="polite">'+esc(msg||'')+'</p>');
 $('#gb').onclick=async()=>{try{await Au.signInWithPopup(auth,new Au.GoogleAuthProvider())}catch(e){$('#er').textContent=e.code==='auth/popup-closed-by-user'?'':(e.code||e.message)}}}
const CID="268215254460-10dh00cif550u6pdcj5g202adcs1cghc.apps.googleusercontent.com";let gisOK=false;
const loadGIS=()=>new Promise(r=>{if(window.google&&google.accounts&&google.accounts.id)return r(true);const x=document.createElement('script');x.src='https://accounts.google.com/gsi/client';x.async=true;x.onload=()=>r(true);x.onerror=()=>r(false);document.head.appendChild(x)});
async function gisInit(){if(gisOK)return true;if(!await loadGIS())return false;
 try{google.accounts.id.initialize({client_id:CID,use_fedcm_for_prompt:true,auto_select:false,cancel_on_tap_outside:false,callback:async r=>{try{await Au.signInWithCredential(auth,Au.GoogleAuthProvider.credential(r.credential))}catch(e){window.__iqEntry&&window.__iqEntry.ready(friendly(e))}}});gisOK=true}catch(e){return false}return true}
const gisPrompt=()=>new Promise(r=>{try{google.accounts.id.prompt(n=>{if((n.isNotDisplayed&&n.isNotDisplayed())||(n.isSkippedMoment&&n.isSkippedMoment()))r('fallback');else if(n.isDismissedMoment&&n.isDismissedMoment())r('done')})}catch(e){r('fallback')}setTimeout(()=>r('done'),2500)});
window.__iqSignIn=async()=>{if(await gisInit()){if(await gisPrompt()!=='fallback')return ''}
 try{await Au.signInWithPopup(auth,new Au.GoogleAuthProvider());return ''}catch(e){return friendly(e)}};
window.__iqSaveProfile=async p=>{const u=auth.currentUser;if(!u)return false;try{const x={updated:Date.now()};if(p&&p.name)x.name=String(p.name).slice(0,80);if(p&&p.cls)x.cls=String(p.cls);await F.setDoc(F.doc(fs,'students',u.uid),x,{merge:true});return true}catch(e){return false}};
function profileView(u,d){
 leaveSplash();if(window.__iqEntry&&window.__iqEntry.busy)window.__iqEntry.busy(false);
 const cl=[['Play Group','پلے گروپ'],['Nursery','نرسری'],['KG','کے جی'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['F.A','ایف اے']];
 let local={};try{local=JSON.parse(localStorage.getItem('pds-state-v1'))||{}}catch(e){}
 let sel=d&&d.cls||(local.setup&&local.grade!==undefined?(Number(local.grade)>=11?'F.A':String(local.grade)):'');
 G.setAttribute('dir',LNG==='ur'?'rtl':'ltr');G.classList.add('ob-on');
 show('<div class="ob"><img class="ob-logo" src="/icon-192.png" width="64" height="64" alt="IQRA"><h2>'+esc(T('Welcome! Let’s set up the learner','خوش آمدید! آئیے طالب علم کی معلومات بھر لیں'))+'</h2><p class="ob-sub">'+esc(T('This takes under a minute. You can change the class any time from the top bar.','اس میں ایک منٹ سے کم لگتا ہے۔ جماعت آپ کسی بھی وقت اوپر والی بار سے بدل سکتے ہیں۔'))+'</p><p class="ob-acct">'+esc(T('Signed in as ','لاگ اِن: '))+'<b dir="ltr">'+esc(u.email||u.displayName||'')+'</b></p>'
 +'<label class="ob-f"><span>'+esc(T('Student name','طالب علم کا نام'))+'</span><input id="pn" autocomplete="given-name" value="'+esc(d?.name||u.displayName||'')+'"></label>'
 +'<div class="ob-f" role="radiogroup" aria-label="'+esc(T('Class','جماعت'))+'"><span>'+esc(T('Class','جماعت'))+'</span><div class="ob-chips" id="pcl">'+cl.map(x=>'<button type="button" role="radio" class="ob-chip'+(sel===x[0]?' on':'')+'" aria-checked="'+(sel===x[0])+'" data-c="'+x[0]+'">'+esc(T(x[0],x[1]))+'</button>').join('')+'</div></div>'
 +'<label class="ob-f"><span>'+esc(T('City','شہر'))+' <em>'+esc(T('(optional)','(اختیاری)'))+'</em></span><input id="pt" autocomplete="address-level2" value="'+esc(d?.city||'')+'"></label>'
 +'<label class="ob-f"><span>'+esc(T('Parent phone','والدین کا فون'))+' <em>'+esc(T('(optional)','(اختیاری)'))+'</em></span><input id="pp" inputmode="tel" autocomplete="tel" dir="ltr" value="'+esc(d?.phone||'')+'"></label>'
 +'<button class="pb" id="ps" type="button">'+esc(T('Start learning','پڑھائی شروع کریں'))+'</button><button class="ob-alt" id="po" type="button">'+esc(T('Use a different account','دوسرے اکاؤنٹ سے لاگ اِن کریں'))+'</button><p class="er" id="er" aria-live="polite"></p><p class="ob-priv">'+esc(T('Your details are used only to personalise learning.','آپ کی معلومات صرف سیکھنے کو بہتر بنانے کے لیے استعمال ہوتی ہیں۔'))+'</p></div>');
 const rows=[...G.querySelectorAll('.ob-chip')];
 rows.forEach(b=>b.onclick=()=>{sel=b.dataset.c;rows.forEach(x=>{const on=x.dataset.c===sel;x.classList.toggle('on',on);x.setAttribute('aria-checked',on)});$('#er').textContent=''});
 $('#po').onclick=()=>Au.signOut(auth);
 $('#ps').onclick=async()=>{const n=$('#pn').value.trim(),er=$('#er');
  if(!n){er.textContent=T('Please enter the student’s name.','براہِ کرم طالب علم کا نام لکھیں۔');$('#pn').focus();return}
  if(!sel){er.textContent=T('Please choose a class.','براہِ کرم جماعت چنیں۔');return}
  const b=$('#ps');b.disabled=true;b.textContent=T('Saving…','محفوظ ہو رہا ہے…');
  try{const now=Date.now();await F.setDoc(F.doc(fs,'students',u.uid),{name:n,cls:sel,city:$('#pt').value.trim(),phone:$('#pp').value.trim(),email:u.email||'',updated:now},{merge:true});window.__iqProfile={name:n,cls:sel,updated:now};G.classList.remove('ob-on');begin(u)}catch(e){b.disabled=false;b.textContent=T('Start learning','پڑھائی شروع کریں');er.textContent=friendly(e)||T('Could not save. Please try again.','محفوظ نہیں ہو سکا۔ دوبارہ کوشش کریں۔')}}}
function col(n){const c=F.collection(fs,n);return{onSnapshot:(a,b)=>F.onSnapshot(c,a,b),where:(f,o,v)=>({get:()=>F.getDocs(F.query(c,F.where(f,o,v)))}),doc:id=>{const r=F.doc(fs,n,id);return{set:x=>F.setDoc(r,x),update:x=>F.updateDoc(r,x),delete:()=>F.deleteDoc(r),get:()=>F.getDoc(r)}}}}
const db={collection:col};
const staff=()=>role==='admin';
const user={isOwner:async()=>staff(),canEdit:async()=>staff(),can:async()=>(role==='admin'||role==='teacher')?true:null,id:async()=>uid};
const FILES_API="https://iqra-files.zaibislam0.workers.dev";/* address of the Cloudflare worker in cloudflare-worker/iqra-files; empty = file upload stays hidden */
window.IQRA_FILES_API=FILES_API;
const assets=FILES_API?{upload:async f=>{const tok=await auth.currentUser.getIdToken();
 const r=await fetch(FILES_API+'/upload?name='+encodeURIComponent(f.name||'file'),{method:'POST',headers:{'Authorization':'Bearer '+tok,'Content-Type':f.type||'application/octet-stream'},body:f});
 let j=null;try{j=await r.json()}catch(e){}
 if(!r.ok||!j||!j.url){const e=new Error((j&&j.error)||'upload failed');e.code=(j&&j.error)||r.status;throw e}
 return{id:j.id,url:j.url}},
 generate:async b=>{const tok=await auth.currentUser.getIdToken();
 const r=await fetch(FILES_API+'/generate',{method:'POST',headers:{'Authorization':'Bearer '+tok,'Content-Type':'application/json'},body:JSON.stringify(b)});
 let j=null;try{j=await r.json()}catch(e){}
 if(!r.ok||!j){const e=new Error((j&&j.error)||'generate failed');e.code=(j&&j.error)||r.status;throw e}
 return j}}:null;
window.claude={use:async n=>n==='db'?db:n==='user'?user:n==='assets'?(staff()?assets:null):null};
function begin(u){try{localStorage.setItem('iq-session','1')}catch(e){}G.style.display='none';G.setAttribute('aria-hidden','true');G.removeAttribute('role');G.removeAttribute('aria-modal');if(window.__iqEntry)window.__iqEntry.remove();document.getElementById('iqout').style.display='block';if(!started){started=true;window.__iqReady=true;ready()}setTimeout(leaveSplash,450)}
document.getElementById('iqout').onclick=()=>Au.signOut(auth).then(()=>location.reload());
let pendMsg='';
Au.onAuthStateChanged(auth,async u=>{if(!u){try{localStorage.removeItem('iq-session')}catch(e){}leaveSplash();if(window.IQRA_STAFF_PAGE){location.replace('/');return}if(started)return location.reload();return loginView(pendMsg)}
 if(window.__iqEntry&&window.__iqEntry.active&&window.__iqEntry.busy)window.__iqEntry.busy(true);
 uid=u.uid;role=(u.email===OWNER&&u.emailVerified)?'admin':'student';
 try{const r=await F.getDoc(F.doc(fs,'roles',u.uid));if(r.exists()&&['admin','teacher'].includes(r.data().role))role=role==='admin'?'admin':r.data().role}catch(e){}
 if(!window.IQRA_STAFF_PAGE)role='student'; /* the student site never grants staff powers; staff use admin.html */
 if(window.IQRA_STAFF_PAGE&&role==='student'){location.replace('/');return} /* anyone who is not staff is sent away without seeing anything */
 let d=null;try{const s=await F.getDoc(F.doc(fs,'students',u.uid));d=s.exists()?s.data():null}catch(e){}
 if(window.IQRA_STAFF_PAGE||(d&&d.name)){window.__iqProfile=d||{};begin(u)}else profileView(u,d)});
}catch(e){leaveSplash();show('<h1>IQRA</h1><p class="er">Could not load sign-in: '+esc(e.message||e)+'</p>')}
