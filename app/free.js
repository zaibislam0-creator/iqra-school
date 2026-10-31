/* Free Study: lessons anyone can read on the home page without signing in.
   Add only content that has been checked against an official Pakistani textbook or curriculum document.
   Each item: { id, cls:{en,ur}, subject:{en,ur}, title:{en,ur}, cards:{en:[...], ur:[...]} }
   One string in "cards" is one screen of the reader. Leave the list empty to show "coming soon".
   Example (do not publish as is):
   { id: "c1-math-1", cls: {en:"Class 1", ur:"پہلی جماعت"}, subject: {en:"Maths", ur:"ریاضی"}, title: {en:"Counting to 5", ur:"پانچ تک گنتی"},
     cards: { en: ["One, two, three.", "Four, five."], ur: ["ایک، دو، تین۔", "چار، پانچ۔"] } } */
window.IQRA_FREE = [];

/* Books by class, Notes and Past Papers on the public home page.
   Only add https links to official boards or to files you are allowed to share.
   BOARDS: the provincial / federal textbook boards. A board with url:"" is listed but has no link yet.
   BOOKS:  syllabus book (shown under Boards, by board and class):
             { board:"punjab", cls:2, subject:{en,ur}, title:{en,ur}, url:"https://..." }  (cls = 1..12)
           library book (outside the syllabus, for everyone; shown under Library): leave board out or use board:"general"
             { cls:0, subject:{en,ur}, title:{en,ur}, url:"https://..." }
   NOTES / PAPERS: { cls:2, subject:{en,ur}, title:{en,ur}, url:"https://..." } (cls optional) */
window.IQRA_BOARDS = [
  { id: "punjab", name: { en: "Punjab", ur: "پنجاب" }, code: "PCTB", url: "" },
  { id: "sindh", name: { en: "Sindh", ur: "سندھ" }, code: "STBB", url: "" },
  { id: "kp", name: { en: "Khyber Pakhtunkhwa", ur: "خیبر پختونخوا" }, short: { en: "KP", ur: "خیبر پختونخوا" }, code: "KPTBB", url: "https://tbb.kp.gov.pk/" },
  { id: "balochistan", name: { en: "Balochistan", ur: "بلوچستان" }, code: "BTBB", url: "" },
  { id: "federal", name: { en: "National Book Foundation", ur: "نیشنل بک فاؤنڈیشن" }, short: { en: "Federal", ur: "وفاقی" }, code: "NBF", url: "https://www.nbf.org.pk" }
];
window.IQRA_BOOKS = [];
window.IQRA_NOTES = [];
window.IQRA_PAPERS = [];
