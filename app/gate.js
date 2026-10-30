const cfg={apiKey:"AIzaSyAJNg33j6nklSRU9H5PW2EAorth_ieMkO8",authDomain:"iqra-d3243.firebaseapp.com",projectId:"iqra-d3243",storageBucket:"iqra-d3243.firebasestorage.app",messagingSenderId:"268215254460",appId:"1:268215254460:web:279ce43aa50fd5a9d8bfb9"};
const OWNER="zaibislam0@gmail.com";
let ready;window.__claudeReady=new Promise(r=>ready=r);
const G=document.getElementById('iqgate'),$=s=>G.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const show=h=>{G.innerHTML='<div class="gc">'+h+'</div>';G.style.display='grid'};
const SP=()=>window.__iqEntry&&window.__iqEntry.active;
if(!SP())show('<h1>IQRA</h1><p>Loading...</p>');
try{
const B='https://cdn.jsdelivr.net/npm/firebase@10.12.5/';
const [A,Au,F]=await Promise.all([import(B+'app/+esm'),import(B+'auth/+esm'),import(B+'firestore/+esm')]);
const app=A.initializeApp(cfg),auth=Au.getAuth(app),fs=F.getFirestore(app);
let role='student',uid=null,started=false;
function loginView(msg){if(SP()){G.style.display='none';window.__iqEntry.ready(msg);gisInit().then(ok=>{if(ok&&!msg)try{google.accounts.id.prompt()}catch(e){}});return}show('<div class="lg">ا</div><h1>IQRA</h1><p class="tag">Learn more, be more · سیکھیں، آگے بڑھیں</p><ul><li>Pakistan syllabus, KG to F.A</li><li>Videos, books, games and tests</li><li>Urdu and English, parents can follow along</li></ul><button class="gb" id="gb"><svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.3 5.7c4.3-4 6.7-9.9 6.7-17.1z"/><path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.8-4.6l-7.9-6.2A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.2z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.9 2.3-8.6 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.2C6.5 42.6 14.6 48 24 48z"/></svg>Continue with Google</button><p class="er" id="er" aria-live="polite">'+esc(msg||'')+'</p>');
 $('#gb').onclick=async()=>{try{await Au.signInWithPopup(auth,new Au.GoogleAuthProvider())}catch(e){$('#er').textContent=e.code==='auth/popup-closed-by-user'?'':(e.code||e.message)}}}
const CID="268215254460-10dh00cif550u6pdcj5g202adcs1cghc.apps.googleusercontent.com";let gisOK=false;
const loadGIS=()=>new Promise(r=>{if(window.google&&google.accounts&&google.accounts.id)return r(true);const x=document.createElement('script');x.src='https://accounts.google.com/gsi/client';x.async=true;x.onload=()=>r(true);x.onerror=()=>r(false);document.head.appendChild(x)});
async function gisInit(){if(gisOK)return true;if(!await loadGIS())return false;
 try{google.accounts.id.initialize({client_id:CID,use_fedcm_for_prompt:true,auto_select:true,cancel_on_tap_outside:false,callback:async r=>{try{await Au.signInWithCredential(auth,Au.GoogleAuthProvider.credential(r.credential))}catch(e){window.__iqEntry&&window.__iqEntry.ready(e.code||e.message)}}});gisOK=true}catch(e){return false}return true}
const gisPrompt=()=>new Promise(r=>{try{google.accounts.id.prompt(n=>{if((n.isNotDisplayed&&n.isNotDisplayed())||(n.isSkippedMoment&&n.isSkippedMoment()))r('fallback');else if(n.isDismissedMoment&&n.isDismissedMoment())r('done')})}catch(e){r('fallback')}setTimeout(()=>r('done'),2500)});
window.__iqSignIn=async()=>{if(await gisInit()){if(await gisPrompt()!=='fallback')return ''}
 try{await Au.signInWithPopup(auth,new Au.GoogleAuthProvider());return ''}catch(e){return e.code==='auth/popup-closed-by-user'?'':(e.code||e.message)}};
function profileView(u,d){const cl=['Play Group','Nursery','KG','1','2','3','4','5','6','7','8','9','10','F.A'];
 show('<h1>IQRA</h1><p>Welcome. Tell us about the student.</p><label>Student name<input id="pn" value="'+esc(d?.name||u.displayName||'')+'"></label><label>Class<select id="pc">'+cl.map(x=>'<option'+(d?.cls===x?' selected':'')+'>'+x+'</option>').join('')+'</select></label><label>City<input id="pt" value="'+esc(d?.city||'')+'"></label><label>Parent phone<input id="pp" inputmode="tel" value="'+esc(d?.phone||'')+'"></label><button class="pb" id="ps">Start learning</button><button class="gb" id="po">Sign out</button><p class="er" id="er" aria-live="polite"></p>');
 $('#po').onclick=()=>Au.signOut(auth);
 $('#ps').onclick=async()=>{const n=$('#pn').value.trim();if(!n){$('#er').textContent='Please enter a name.';return}
  try{await F.setDoc(F.doc(fs,'students',u.uid),{name:n,cls:$('#pc').value,city:$('#pt').value.trim(),phone:$('#pp').value.trim(),email:u.email||'',updated:Date.now()},{merge:true});window.__iqProfile={name:n,cls:$('#pc').value};begin(u)}catch(e){$('#er').textContent=e.code||e.message}}}
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
function begin(u){G.style.display='none';G.setAttribute('aria-hidden','true');G.removeAttribute('role');G.removeAttribute('aria-modal');if(window.__iqEntry)window.__iqEntry.remove();document.getElementById('iqout').style.display='block';if(!started){started=true;window.__iqReady=true;ready()}}
document.getElementById('iqout').onclick=()=>Au.signOut(auth).then(()=>location.reload());
let pendMsg='';
Au.onAuthStateChanged(auth,async u=>{if(!u){if(window.IQRA_STAFF_PAGE){location.replace('/');return}if(started)return location.reload();return loginView(pendMsg)}
 uid=u.uid;role=(u.email===OWNER&&u.emailVerified)?'admin':'student';
 try{const r=await F.getDoc(F.doc(fs,'roles',u.uid));if(r.exists()&&['admin','teacher'].includes(r.data().role))role=role==='admin'?'admin':r.data().role}catch(e){}
 if(!window.IQRA_STAFF_PAGE)role='student'; /* the student site never grants staff powers; staff use admin.html */
 if(window.IQRA_STAFF_PAGE&&role==='student'){location.replace('/');return} /* anyone who is not staff is sent away without seeing anything */
 let d=null;try{const s=await F.getDoc(F.doc(fs,'students',u.uid));d=s.exists()?s.data():null}catch(e){}
 if(window.IQRA_STAFF_PAGE||(d&&d.name)){window.__iqProfile=d||{};begin(u)}else profileView(u,d)});
}catch(e){show('<h1>IQRA</h1><p class="er">Could not load sign-in: '+esc(e.message||e)+'</p>')}
