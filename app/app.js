(function () {
  "use strict";
  var D = window.DATA;
  var KEY = "pds-state-v1";

  var UI = {
    en: {
      app: "IQRA", welcome: "Welcome to IQRA! Let's set up your classroom.",
      name: "Your name", province: "Province / Region", grade: "Grade", start: "Start learning",
      learn: "Learn", character: "Character", tutor: "AI Tutor", progress: "Progress", admin: "Admin",
      subjects: "Your subjects", lessons: "Lessons", nolesson: "No lesson mapped for this subject and grade yet. Administrators can add verified content in the Admin tab.",
      sample: "Sample content: not an official textbook. Verify against the approved curriculum.",
      quiz: "Quick quiz", submit: "Check answers", score: "Score", back: "Back", listen: "Listen",
      reflect: "Reflection", ask: "Ask a question…", send: "Send", lowband: "Low-bandwidth mode",
      offline: "Save for offline", offlineDone: "Saved. This works offline now.", lang: "اردو",
      gaps: "Learning gaps", plan: "Revision plan", none: "No data yet. Complete a quiz to see your progress.",
      weak: "Needs practice", strong: "Doing well", practice: "Practice this topic",
      adminTitle: "Curriculum mapping", adminNote: "Each entry must cite an official, verified source before it is marked approved.",
      status: "Status", unverified: "Unverified sample", addMap: "Add mapping", source: "Official source reference",
      safe: "If you feel unsafe or someone hurts you, tell a trusted adult or teacher right away.",
      tutorHi: "Hi! I'm your study helper. Ask me about a lesson and I'll guide you with questions.",
      reset: "Reset all data", greetA: "Hello", greetB: "What shall we learn today?", soon: "Lessons for your class are coming soon. Let us hear a story!", stories: "Stories", readyQuiz: "Well done! Ready for some questions?", startQuiz: "Play questions", askHelper: "Ask the cat", prev: "Back", next: "Next", great: "Wonderful!", playAgain: "Play again", toLessons: "More lessons", nice: "Good try! Try again.", tryAgain: "Try again", howMany: "How many apples?", countAlong: "Count with me", moodQ: "How do you feel today?", moodHappy: "Happy", moodOk: "OK", moodTired: "Tired", moodSad: "Sad", skip: "Skip", moodRH: "I am happy too! Let us learn.", moodRO: "Good. Let us learn slowly.", moodRT: "That is fine. We will do a little and rest.", moodRS: "Thank you for telling me. If you feel sad, tell a grown-up you trust. We can do something easy.", breakT: "Great work! Let us rest our eyes and stretch. Look far away, then take a deep breath.", ready: "I am ready", starsTab: "Stars", starsMsg: "Look at your stars!", starsHave: "Stars you earned by trying", grownups: "Grown-ups", gateQ: "Grown-ups only. Please solve:", gateGo: "Open", gateNo: "Not correct. Try the new question.", hubTitle: "Grown-ups area", hubProgress: "Progress and coverage", hubExams: "Practice exams", hubAdmin: "Curriculum register", settings: "Settings", childview: "Back to child view", readq: "Can the child read?", readAuto: "Automatic (by class)", readNone: "Cannot read yet (pictures and voice)", readLittle: "Reads a little", readFull: "Reads well", autoVoice: "Read aloud", on: "On", off: "Off", voice: "Switch", settingsNote: "Voice uses your device speech. Urdu voice may not exist on every phone. IQRA is a learning aid, not a medical or counselling service.", explain: "Tell me", more: "More", readIt: "Read all", pick1: "Pick a lesson to talk about", helpMe: "I need help", pickcat: "Choose your category", switchc: "Change class", addbook: "Add a book (PDF)", bookIntro: "Choose a PDF of a textbook you have the right to use. IQRA reads it on this device, finds the chapters, and turns each one into short cards with a listening button and fill-the-gap questions.", pdfFile: "PDF file", readPdf: "Read the book", reading: "Reading page", bookNote: "The text stays on this device. A PDF made from scanned pictures has no text to read yet. Sentences that are too long for the chosen class are skipped, not rewritten. Chapters stay pending review until a teacher checks them and fills in the register.", mybooks: "Your books", nobooks: "No books added yet.", chapters: "chapters", delete: "Delete", chaptersFound: "chapters found", draftNote: "Check the titles and untick anything that is not a chapter.", noText: "No readable text was found. This PDF may be scanned pictures.", keep: "Keep this chapter", sentences: "sentences", questions: "questions", preview: "Preview", saveBook: "Save to IQRA", cancel: "Cancel", nothingKept: "No chapters were kept.", storageFull: "Not enough storage on this device to save the book.", bookSaved: "saved as pending review.", pickFile: "Please choose a PDF first.", pdfFail: "Could not read this PDF. You need an internet connection the first time, and the file must be a normal PDF.", tCheck: "Check", tClear: "Clear", tMore: "Trace a little more along the shape.", tSlow: "Go slowly and stay on the shape.", tGood: "Beautiful tracing!", voiceRec: "Voice recordings", voiceIntro: "Most children speak Urdu, but many phones have no Urdu voice. Record a person reading each line. IQRA plays your recording first and uses the phone voice only as a back-up.", urduVoiceDev: "Urdu voice on this device", hindiVoiceDev: "Hindi back-up voice (says the built-in Urdu phrases)", yes: "Yes", no: "No", recLang: "Recording language", recWhich: "Choose a lesson", commonP: "Common phrases (praise, hints, greetings)", recStart: "Record", recStop: "Stop", recDone: "Recorded. Tap the speaker to listen.", recNone: "Not recorded yet.", recNoMic: "The microphone is not available or was not allowed.", recGo: "Recording... speak now. It stops by itself after 15 seconds.", recSaved: "Saved on this device.", vtest: "Test voice now", diag: "Voice check", hasSynth: "Browser can speak", inFrame: "Page is inside a frame", voicesFound: "Voices found", lastTry: "Last try", started: "Started", errLbl: "Error", noTry: "No test yet. Tap the button above.", clipsHave: "recordings on this device", expHelp: "If no file downloaded, select all of this text, copy it, and save it in Notepad as iqra-voice-recordings.json.", expClips: "Save recordings to a file", impClips: "Load recordings from a file", clipsImported: "recordings loaded.", clipsBad: "That file could not be read.", missionT: "Today's mission", missionDone: "Mission complete! See you tomorrow.", missionOf: "done", streakN: "days in a row", streakBack: "Welcome back! Let us start again. No worries.", streakStart: "Do one lesson to begin", heroH: "Learn at your own pace, in Urdu and English", heroS: "From KG to F.A, made around Pakistan's national curriculum. Pictures and voice first for little ones.", heroT1: "KG to F.A", heroT2: "Urdu and English", heroT3: "Learn by playing", uploadHint: "Upload a textbook PDF and IQRA turns it into easy chapters", adminApp: "IQRA Admin", hubTitleA: "Admin home", adminIntro: "This page is for the school team only. Upload books, record voices and fill the curriculum register here. Then make a content pack and load it in the student app.", packT: "Content pack", packLoad: "Load content pack", packExp: "Save content pack", packIntro: "Books, voice recordings and the curriculum register become one content pack file. Open the student app, go to Grown-ups, and load it there.", packIntroS: "Load the content pack made on the IQRA Admin page. Books, recordings and register entries are updated from it.", packFile: "Content pack file", packPaste: "Or paste the pack text here", packLoadBtn: "Load from text", packDone: "Loaded:", packBad: "That is not a valid IQRA content pack.", books: "books", recordings: "recordings", home: "Home", homeStart: "Start learning", pickClassUp: "Choose the class first. Books you add belong to that class only.", allClasses: "All classes", subjectsHere: "Subjects of this class", uploaded: "uploaded", builtin: "sample chapters", upHere: "Upload", tabBooks: "Classes", moreOpts: "More options (optional)", step1: "Choose the class", step2: "Upload the PDF book", step3: "Save the content pack (last tab)", staffTab: "Admin panel", teacherTab: "Teacher", role_admin: "Admin", role_teacher: "Teacher", role_student: "Student", viewingAs: "Viewing as", viewAsT: "View as:", cloudOn: "Connected: what you save here is shared with teachers and students.", cloudErr: "Could not save to the shared store. Check that you have Editor access.", migrate: "Send books and recordings from this device to the shared store", migrateNote: "Use once if you added books before the shared store was connected.", migrated: "Sent:", clipBig: "That recording is too long to share. Record a shorter one.", teachIntro: "Prepare a lecture for a class: write short cards, add up to 3 questions, then publish. Students of that class will see it at once.", lecNew: "New lecture", lecMine: "Lectures", lecNone: "No lectures yet.", lecPub: "Published", lecDraft: "Draft", lecEdit: "Edit", lecPubBtn: "Publish", lecUnpub: "Unpublish", lecTitle: "Lecture title", lecCards: "Lecture cards (one sentence per line)", lecCardsHint: "Each line becomes one card the child can listen to.", lecQuiz: "Questions (optional)", lecQ: "Question", lecRight: "Correct answer", lecPublishNow: "Publish for students", lecNeed: "Please add a title, a subject and at least one card.", lecSaved: "Lecture saved.", lecSaveBtn: "Save lecture", heroGo: "Start today's mission", heroBrowse: "Browse subjects", subjectsHd: "Subjects", enter: "Enter", unit: "Unit", lessonSample: "Sample lesson", noContent: "No content yet", sylmap: "Official syllabus map (pending review)", opensrc: "Open source document", unitsWith: "units have any lesson", sylNote: "Outcomes are paraphrased from the official document by an automated reading and have not been checked by a human reviewer. Compare them with the source before verifying.", srcdocs: "Official source documents", partialNote: "Partial: the source text could not be read past Unit 7.2, so the rest of this grade is missing.", officialUnits: "official units covered", exam: "Exams", exams: "Exams", board: "Education board", pending: "Pending review", verified: "Verified official", inreview: "In review", needs: "Needs review (new version)", chapter: "Chapter", textbook: "Textbook title and edition", outcomes: "Official learning outcomes", srcdoc: "Source document", year: "Academic year", version: "Curriculum version", coverage: "Syllabus coverage", covered: "chapters covered", covnote: "Only chapters mapped so far are counted. The full syllabus is not mapped yet.", practiceNote: "Practice test. This is not an official board paper.", mock: "Start mock exam", pastp: "Past papers: add only where legally available, and mark them verified only after their authenticity is checked.", pickctx: "Choose your subject and chapter first, so I follow your syllabus.", subject: "Subject", notsel: "Not selected", meta: "Curriculum details", save: "Save entry", signoff: "Mark verified", newver: "Start new curriculum version", newverNote: "Content verified under an older version is shown as needing review. Old and new syllabi are never mixed silently.", reviewcount: "items need review", required: "Fill every field, including the source document, before an item can be marked verified. A reviewer must check it against the official document.", outside: "That seems to be outside this chapter. Check your textbook or ask your teacher.", pendingNote: "This chapter is pending review, so treat my help as practice only.", noexam: "No mapped chapters for exams in this subject yet.", edit: "Change class or board", province2: "Region"
    },
    ur: {
      app: "اقرا", welcome: "اقرا میں خوش آمدید! آئیے آپ کی کلاس ترتیب دیں۔",
      name: "آپ کا نام", province: "صوبہ / علاقہ", grade: "جماعت", start: "سیکھنا شروع کریں",
      learn: "سیکھیں", character: "کردار", tutor: "اے آئی استاد", progress: "پیش رفت", admin: "منتظم",
      subjects: "آپ کے مضامین", lessons: "اسباق", nolesson: "اس مضمون اور جماعت کے لیے ابھی کوئی سبق شامل نہیں۔ منتظم تصدیق شدہ مواد شامل کر سکتے ہیں۔",
      sample: "نمونہ مواد: سرکاری نصابی کتاب نہیں۔ منظور شدہ نصاب سے تصدیق کریں۔",
      quiz: "مختصر کوئز", submit: "جوابات جانچیں", score: "نمبر", back: "واپس", listen: "سنیں",
      reflect: "غور و فکر", ask: "سوال پوچھیں…", send: "بھیجیں", lowband: "کم انٹرنیٹ موڈ",
      offline: "آف لائن محفوظ کریں", offlineDone: "محفوظ ہو گیا۔ اب آف لائن بھی چلے گا۔", lang: "English",
      gaps: "سیکھنے کی کمزوریاں", plan: "دہرائی کا منصوبہ", none: "ابھی ڈیٹا نہیں۔ پیش رفت دیکھنے کے لیے کوئز مکمل کریں۔",
      weak: "مشق درکار", strong: "بہت اچھا", practice: "اس موضوع کی مشق",
      adminTitle: "نصاب کی ترتیب", adminNote: "ہر اندراج کو منظور شدہ لکھنے سے پہلے سرکاری تصدیق شدہ ماخذ کا حوالہ ضروری ہے۔",
      status: "حیثیت", unverified: "غیر تصدیق شدہ نمونہ", addMap: "ترتیب شامل کریں", source: "سرکاری ماخذ کا حوالہ",
      safe: "اگر آپ محفوظ محسوس نہیں کرتے یا کوئی آپ کو تکلیف دے تو فوراً کسی قابلِ اعتماد بڑے یا استاد کو بتائیں۔",
      tutorHi: "سلام! میں آپ کا مددگار ہوں۔ سبق کے بارے میں پوچھیں، میں سوالوں سے رہنمائی کروں گا۔",
      reset: "تمام ڈیٹا مٹائیں", greetA: "السلام علیکم", greetB: "آج ہم کیا سیکھیں گے؟", soon: "آپ کی جماعت کے اسباق جلد آ رہے ہیں۔ آئیے کہانی سنیں!", stories: "کہانیاں", readyQuiz: "شاباش! سوالوں کے لیے تیار ہیں؟", startQuiz: "سوال کھیلیں", askHelper: "بلی سے پوچھیں", prev: "پیچھے", next: "آگے", great: "واہ، شاباش!", playAgain: "دوبارہ کھیلیں", toLessons: "مزید اسباق", nice: "اچھی کوشش! دوبارہ کریں۔", tryAgain: "دوبارہ کوشش", howMany: "کتنے سیب ہیں؟", countAlong: "میرے ساتھ گنیں", moodQ: "آج آپ کیسا محسوس کر رہے ہیں؟", moodHappy: "خوش", moodOk: "ٹھیک", moodTired: "تھکا ہوا", moodSad: "اداس", skip: "چھوڑیں", moodRH: "علم کی شمع سے ہو مجھ کو محبت یا رب۔", moodRO: "اچھا۔ ہم آہستہ آہستہ سیکھیں گے۔", moodRT: "کوئی بات نہیں۔ تھوڑا کریں گے اور آرام کریں گے۔", moodRS: "بتانے کا شکریہ۔ اداس ہوں تو کسی بھروسے والے بڑے کو بتائیں۔ ہم آسان کام کریں گے۔", breakT: "بہت اچھا کام! آنکھوں کو آرام دیں اور بدن کھینچیں۔ دور دیکھیں، پھر گہرا سانس لیں۔", ready: "میں تیار ہوں", starsTab: "ستارے", starsMsg: "اپنے ستارے دیکھیں!", starsHave: "کوشش سے ملے ستارے", grownups: "بڑوں کے لیے", gateQ: "صرف بڑوں کے لیے۔ حل کریں:", gateGo: "کھولیں", gateNo: "درست نہیں۔ نیا سوال حل کریں۔", hubTitle: "بڑوں کا حصہ", hubProgress: "پیش رفت اور نصاب کی تکمیل", hubExams: "مشقی امتحان", hubAdmin: "نصاب رجسٹر", settings: "ترتیبات", childview: "بچے کے صفحے پر واپس", readq: "کیا بچہ پڑھ سکتا ہے؟", readAuto: "خودکار (جماعت کے مطابق)", readNone: "ابھی پڑھ نہیں سکتا (تصاویر اور آواز)", readLittle: "تھوڑا پڑھتا ہے", readFull: "اچھا پڑھتا ہے", autoVoice: "بلند آواز سے پڑھنا", on: "چالو", off: "بند", voice: "تبدیل کریں", settingsNote: "آواز آپ کے فون کی ہے۔ اردو آواز ہر فون پر نہیں ہوتی۔ اقرا سیکھنے کا معاون ہے، طبی یا مشاورتی سہولت نہیں۔", explain: "بتائیں", more: "مزید", readIt: "پورا پڑھیں", pick1: "بات کرنے کے لیے سبق چنیں", helpMe: "مجھے مدد چاہیے", pickcat: "اپنی کیٹیگری چنیں", switchc: "جماعت بدلیں", addbook: "کتاب شامل کریں (PDF)", bookIntro: "کسی ایسی نصابی کتاب کی PDF چنیں جسے استعمال کرنے کا آپ کو حق ہو۔ اقرا اسے اسی ڈیوائس پر پڑھ کر ابواب نکالتا ہے اور ہر باب کو چھوٹے کارڈز، سننے کے بٹن اور خالی جگہ والے سوالوں میں بدلتا ہے۔", pdfFile: "PDF فائل", readPdf: "کتاب پڑھیں", reading: "صفحہ پڑھا جا رہا ہے", bookNote: "متن اسی ڈیوائس پر رہتا ہے۔ تصویروں سے بنی (اسکین) PDF میں ابھی پڑھنے کے لیے متن نہیں ہوتا۔ منتخب جماعت کے لیے بہت لمبے جملے چھوڑ دیے جاتے ہیں، بدلے نہیں جاتے۔ ابواب اس وقت تک زیرِ جائزہ رہتے ہیں جب تک استاد جانچ کر رجسٹر نہ بھر دے۔", mybooks: "آپ کی کتابیں", nobooks: "ابھی کوئی کتاب شامل نہیں۔", chapters: "ابواب", delete: "مٹائیں", chaptersFound: "ابواب ملے", draftNote: "عنوان دیکھ لیں اور جو باب نہیں اس کا نشان ہٹا دیں۔", noText: "پڑھنے کے قابل متن نہیں ملا۔ ہو سکتا ہے یہ تصویروں والی PDF ہو۔", keep: "یہ باب رکھیں", sentences: "جملے", questions: "سوال", preview: "جھلک", saveBook: "اقرا میں محفوظ کریں", cancel: "منسوخ", nothingKept: "کوئی باب نہیں رکھا گیا۔", storageFull: "اس ڈیوائس پر کتاب محفوظ کرنے کی جگہ کافی نہیں۔", bookSaved: "زیرِ جائزہ کے طور پر محفوظ ہوئے۔", pickFile: "پہلے PDF چنیں۔", pdfFail: "یہ PDF نہیں پڑھی جا سکی۔ پہلی بار انٹرنیٹ چاہیے اور فائل عام PDF ہونی چاہیے۔", tCheck: "دیکھیں", tClear: "مٹائیں", tMore: "شکل پر تھوڑا اور انگلی پھیریں۔", tSlow: "آہستہ چلیں اور شکل پر رہیں۔", tGood: "کیا خوبصورت لکیریں!", voiceRec: "آواز کی ریکارڈنگ", voiceIntro: "زیادہ تر بچے اردو بولتے ہیں مگر بہت سے فونز میں اردو آواز نہیں ہوتی۔ ہر سطر کو کسی انسان کی آواز میں ریکارڈ کریں۔ اقرا پہلے آپ کی ریکارڈنگ چلاتا ہے اور فون کی آواز صرف متبادل کے طور پر۔", urduVoiceDev: "اس ڈیوائس پر اردو آواز", hindiVoiceDev: "ہندی متبادل آواز (بنے ہوئے اردو جملے بولتی ہے)", yes: "ہاں", no: "نہیں", recLang: "ریکارڈنگ کی زبان", recWhich: "سبق چنیں", commonP: "عام جملے (شاباش، اشارے، سلام)", recStart: "ریکارڈ", recStop: "بند", recDone: "ریکارڈ ہو گیا۔ سننے کے لیے سپیکر دبائیں۔", recNone: "ابھی ریکارڈ نہیں ہوا۔", recNoMic: "مائیکروفون دستیاب نہیں یا اجازت نہیں ملی۔", recGo: "ریکارڈ ہو رہا ہے... اب بولیں۔ 15 سیکنڈ بعد خود رک جائے گا۔", recSaved: "اس ڈیوائس پر محفوظ ہو گیا۔", vtest: "آواز ابھی جانچیں", diag: "آواز کی جانچ", hasSynth: "براؤزر بول سکتا ہے", inFrame: "صفحہ فریم کے اندر ہے", voicesFound: "ملی ہوئی آوازیں", lastTry: "آخری کوشش", started: "شروع ہوئی", errLbl: "خرابی", noTry: "ابھی جانچ نہیں ہوئی۔ اوپر کا بٹن دبائیں۔", clipsHave: "ریکارڈنگز اس ڈیوائس پر ہیں", expHelp: "اگر فائل ڈاؤن لوڈ نہ ہو تو یہ سارا متن کاپی کریں اور نوٹ پیڈ میں iqra-voice-recordings.json کے نام سے محفوظ کریں۔", expClips: "ریکارڈنگز فائل میں محفوظ کریں", impClips: "فائل سے ریکارڈنگز لوڈ کریں", clipsImported: "ریکارڈنگز لوڈ ہوئیں۔", clipsBad: "یہ فائل پڑھی نہیں جا سکی۔", missionT: "آج کا مشن", missionDone: "مشن مکمل! شاباش، کل پھر ملیں گے۔", missionOf: "مکمل", streakN: "دن لگاتار", streakBack: "خوش آمدید! چلیں پھر سے شروع کرتے ہیں، کوئی بات نہیں۔", streakStart: "شروع کرنے کے لیے ایک سبق کریں", heroH: "اپنی رفتار سے، اردو اور انگریزی میں سیکھیں", heroS: "کے جی سے ایف اے تک، پاکستان کے قومی نصاب کے مطابق۔ چھوٹے بچوں کے لیے پہلے تصویر اور آواز۔", heroT1: "کے جی سے ایف اے", heroT2: "اردو اور انگریزی", heroT3: "کھیل کھیل میں سیکھیں", uploadHint: "نصابی کتاب کی PDF ڈالیں، اقرا اسے آسان ابواب میں بدل دے گا", adminApp: "اقرا ایڈمن", hubTitleA: "ایڈمن ہوم", adminIntro: "یہ صفحہ صرف اسکول کی ٹیم کے لیے ہے۔ یہاں کتابیں ڈالیں، آوازیں ریکارڈ کریں اور نصاب رجسٹر بھریں۔ پھر مواد کا پیک بنا کر طلبہ کی ایپ میں لوڈ کریں۔", packT: "مواد کا پیک", packLoad: "مواد کا پیک لوڈ کریں", packExp: "مواد کا پیک محفوظ کریں", packIntro: "کتابیں، آواز کی ریکارڈنگز اور نصاب رجسٹر ایک مواد پیک فائل بن جاتے ہیں۔ طلبہ کی ایپ کھولیں، بڑوں کے حصے میں جائیں اور وہاں لوڈ کریں۔", packIntroS: "اقرا ایڈمن صفحے پر بنا ہوا مواد پیک لوڈ کریں۔ اس سے کتابیں، ریکارڈنگز اور رجسٹر کے اندراجات اپڈیٹ ہوں گے۔", packFile: "مواد پیک فائل", packPaste: "یا پیک کا متن یہاں چسپاں کریں", packLoadBtn: "متن سے لوڈ کریں", packDone: "لوڈ ہوا:", packBad: "یہ درست اقرا مواد پیک نہیں۔", books: "کتابیں", recordings: "ریکارڈنگز", home: "ہوم", homeStart: "سیکھنا شروع کریں", pickClassUp: "پہلے جماعت چنیں۔ جو کتاب آپ ڈالیں گے وہ صرف اسی جماعت کی ہوگی۔", allClasses: "تمام جماعتیں", subjectsHere: "اس جماعت کے مضامین", uploaded: "اپ لوڈ ہوئے", builtin: "نمونہ ابواب", upHere: "اپ لوڈ", tabBooks: "کلاسیں", moreOpts: "مزید آپشنز (ضروری نہیں)", step1: "جماعت چنیں", step2: "PDF کتاب ڈالیں", step3: "مواد پیک محفوظ کریں (آخری ٹیب)", staffTab: "ایڈمن پینل", teacherTab: "استاد", role_admin: "ایڈمن", role_teacher: "استاد", role_student: "طالب علم", viewingAs: "دیکھ رہے ہیں بطور", viewAsT: "بطور دیکھیں:", cloudOn: "جڑا ہوا: جو آپ یہاں محفوظ کریں گے وہ اساتذہ اور طلبہ کے ساتھ شیئر ہوگا۔", cloudErr: "مشترکہ ذخیرے میں محفوظ نہیں ہو سکا۔ دیکھیں کہ آپ کے پاس ایڈیٹر کی رسائی ہے۔", migrate: "اس ڈیوائس کی کتابیں اور ریکارڈنگز مشترکہ ذخیرے میں بھیجیں", migrateNote: "اگر مشترکہ ذخیرہ جڑنے سے پہلے کتابیں ڈالی تھیں تو ایک بار استعمال کریں۔", migrated: "بھیجا گیا:", clipBig: "یہ ریکارڈنگ شیئر کرنے کے لیے بہت لمبی ہے۔ چھوٹی ریکارڈ کریں۔", teachIntro: "کسی جماعت کے لیے لیکچر تیار کریں: چھوٹے کارڈز لکھیں، زیادہ سے زیادہ 3 سوال ڈالیں، پھر شائع کریں۔ اس جماعت کے طلبہ کو فوراً نظر آئے گا۔", lecNew: "نیا لیکچر", lecMine: "لیکچرز", lecNone: "ابھی کوئی لیکچر نہیں۔", lecPub: "شائع شدہ", lecDraft: "مسودہ", lecEdit: "ترمیم", lecPubBtn: "شائع کریں", lecUnpub: "شائع ختم کریں", lecTitle: "لیکچر کا عنوان", lecCards: "لیکچر کے کارڈز (ہر سطر میں ایک جملہ)", lecCardsHint: "ہر سطر ایک کارڈ بنتی ہے جسے بچہ سن سکتا ہے۔", lecQuiz: "سوالات (اختیاری)", lecQ: "سوال", lecRight: "درست جواب", lecPublishNow: "طلبہ کے لیے شائع کریں", lecNeed: "عنوان، مضمون اور کم از کم ایک کارڈ ڈالیں۔", lecSaved: "لیکچر محفوظ ہو گیا۔", lecSaveBtn: "لیکچر محفوظ کریں", heroGo: "آج کا مشن شروع کریں", heroBrowse: "مضامین دیکھیں", subjectsHd: "مضامین", enter: "داخل ہوں", unit: "یونٹ", lessonSample: "نمونہ سبق", noContent: "ابھی مواد نہیں", sylmap: "سرکاری نصاب کا نقشہ (زیرِ جائزہ)", opensrc: "ماخذ دستاویز کھولیں", unitsWith: "یونٹس میں کوئی سبق موجود ہے", sylNote: "تدریسی نتائج سرکاری دستاویز سے خودکار طریقے سے پڑھ کر مختصر لکھے گئے ہیں اور کسی انسانی جائزہ کار نے ابھی نہیں جانچے۔ تصدیق سے پہلے ماخذ سے ملائیں۔", srcdocs: "سرکاری ماخذ دستاویزات", partialNote: "ادھورا: ماخذ کا متن یونٹ 7.2 سے آگے نہیں پڑھا جا سکا، اس لیے اس جماعت کا باقی حصہ موجود نہیں۔", officialUnits: "سرکاری یونٹس مکمل", exam: "امتحان", exams: "امتحان", board: "تعلیمی بورڈ", pending: "زیرِ جائزہ", verified: "تصدیق شدہ سرکاری", inreview: "نظرِ ثانی میں", needs: "نظرِ ثانی درکار (نیا ورژن)", chapter: "باب", textbook: "نصابی کتاب اور ایڈیشن", outcomes: "سرکاری تدریسی نتائج", srcdoc: "ماخذ دستاویز", year: "تعلیمی سال", version: "نصاب کا ورژن", coverage: "نصاب کی تکمیل", covered: "ابواب مکمل", covnote: "صرف وہ ابواب شمار ہوتے ہیں جو اب تک شامل ہوئے ہیں۔ پورا نصاب ابھی شامل نہیں۔", practiceNote: "مشقی امتحان۔ یہ سرکاری بورڈ کا پرچہ نہیں۔", mock: "مشقی امتحان شروع کریں", pastp: "پرانے پرچے: صرف وہیں شامل کریں جہاں قانوناً اجازت ہو، اور صداقت جانچنے کے بعد ہی تصدیق شدہ لکھیں۔", pickctx: "پہلے اپنا مضمون اور باب چنیں تاکہ میں آپ کے نصاب کی پیروی کروں۔", subject: "مضمون", notsel: "منتخب نہیں", meta: "نصاب کی تفصیل", save: "اندراج محفوظ کریں", signoff: "تصدیق شدہ لکھیں", newver: "نیا نصابی ورژن شروع کریں", newverNote: "پرانے ورژن میں تصدیق شدہ مواد پر نظرِ ثانی درکار دکھائی جاتی ہے۔ پرانا اور نیا نصاب خاموشی سے ملایا نہیں جاتا۔", reviewcount: "اندراجات پر نظرِ ثانی درکار", required: "تصدیق شدہ لکھنے سے پہلے ماخذ دستاویز سمیت ہر خانہ بھریں۔ نظرِ ثانی کنندہ سرکاری دستاویز سے ملائے۔", outside: "یہ سوال اس باب سے باہر لگتا ہے۔ اپنی کتاب دیکھیں یا استاد سے پوچھیں۔", pendingNote: "اس باب پر ابھی نظرِ ثانی باقی ہے، اس لیے میری مدد کو صرف مشق سمجھیں۔", noexam: "اس مضمون کے لیے امتحان کے ابواب ابھی شامل نہیں۔", edit: "جماعت یا بورڈ بدلیں", province2: "علاقہ"
    }
  };

  var ADMIN = !!window.IQRA_ADMIN;
  var STAFFPAGE = !!window.IQRA_STAFF_PAGE; /* true only on admin.html: staff console, no student screens */
  var cloud = { on: false, db: null, uid: null, role: "student", viewAs: "", err: "" };
  var staffTab = "addbook", lecStore = [], tf = null, lecMsg = "";
  var state = load();
  state.meta = state.meta || {}; state.version = (!state.version || state.version === "2026-27 (draft)") ? "SNC 2020" : state.version; state.board = state.board || "";
  if (state.guide === undefined) state.guide = "ur"; if (state.read === undefined) state.read = "auto"; if (state.voice === undefined) state.voice = true; state.stars = state.stars || 0;
  var view = ADMIN ? "addbook" : (state.setup ? "learn" : "setup");
  var openLesson = null, openStory = null, chat = [], adminMaps = state.maps || [];

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || defaults(); } catch (e) { return defaults(); }
  }
  function defaults() { return { lang: "ur", low: false, setup: false, name: "", province: "pakistan", pathway: "premed", board: "", version: "SNC 2020", meta: {}, classNotes: {}, grade: 3, progress: {}, studied: {}, bookSeen: {}, maps: [], read: "auto", voice: true, stars: 0 }; }
  function save() { state.maps = adminMaps; try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
  function kidCtx() { return !!(state.setup && kidUI() && ["setup", "gate", "exam", "progress", "admin", "settings", "adult", "addbook", "voice"].indexOf(view) < 0); }
  var forceUr = false;
  function LANG() { if (forceUr) return "ur"; return kidCtx() ? (state.guide || "ur") : state.lang; }
  UI.en.library = "Library"; UI.ur.library = "کتب خانہ";
  function t(k) { return UI[LANG()][k] || k; }
  function L(o) { return o[LANG()] || o.en; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function gnum(g) { return g === "KG" ? 0 : Number(g); }
  function provLabel(id) { var p = D.provinces.filter(function (x) { return x.id === id; })[0]; return p ? L(p) : ""; }
  function boardsFor() { return D.boards[state.province] || D.boards.pakistan; }
  function metaOf(l) {
    var b = l.meta || {}, o = state.meta[l.id] || {};
    function pick(k) { return o[k] ? o[k] : (b[k] || ""); }
    return { province: pick("province"), board: pick("board"), year: pick("year"), version: pick("version"), textbook: pick("textbook"), chapter: pick("chapter"), outcomes: pick("outcomes"), source: pick("source"), status: o.status || b.status || "pending" };
  }
  function complete(m) { return !!(m.board && m.year && m.version && m.textbook && m.chapter && m.outcomes && m.source); }
  function statusOf(l) {
    var m = metaOf(l);
    if (m.status === "verified") return m.version === state.version ? "verified" : "needs";
    return m.status === "inreview" ? "inreview" : "pending";
  }
  function badge(l) { var s = statusOf(l); return '<span class="badge ' + s + '">' + esc(t(s)) + "</span>"; }
  function mrow(k, v) { return "<dt>" + esc(k) + "</dt><dd>" + esc(v || "—") + "</dd>"; }
  function boardSelect() {
    var h = "<label>" + esc(t("board")) + '<select id="sboard"><option value="">' + esc(t("notsel")) + "</option>";
    boardsFor().exam.forEach(function (x) { h += '<option value="' + esc(x) + '"' + (state.board === x ? " selected" : "") + ">" + esc(x) + "</option>"; });
    return h + "</select></label>";
  }

  var root = document.getElementById("app");

  try { if (history.scrollRestoration) history.scrollRestoration = "manual"; } catch (e) {}
  var renderKey = "";
  // ---- Browser Back button support ----
  // Each screen change (home, subject, lesson, library, ...) adds a history entry, so the
  // phone/browser Back button steps back inside the site instead of leaving it.
  var navKey = null, navRestoring = false;
  function navSnap() { return { iq: 1, view: view, sub: curSubject || null, lesson: openLesson || null, pt: pathTest || null, story: openStory || null }; }
  function navSync() {
    var su = state.setup ? "1" : "0";
    var nk = view + "|" + (openLesson || "") + "|" + (curSubject || "") + "|" + (pathTest || "") + "|" + (openStory || "") + "|" + su;
    if (nk === navKey) return;
    var first = navKey === null, setupChanged = !first && navKey.slice(-1) !== su;
    navKey = nk;
    if (navRestoring) return;
    try {
      if (first || setupChanged || (history.state && history.state.iqReader)) history.replaceState(navSnap(), "");
      else history.pushState(navSnap(), "");
    } catch (e) {}
  }
  window.addEventListener("popstate", function (e) {
    if (window.__iqIgnorePop > 0) { window.__iqIgnorePop--; return; }
    if (window.IQReader && window.IQReader.isOpen && window.IQReader.isOpen()) window.IQReader.close();
    var s = e.state;
    if (!s || !s.iq) return;
    navRestoring = true;
    try {
      quizRun = null; countGame = null; gameRun = null; traceRun = null; tVis = null; cgToken++; lessonStep = 0; resRun = null;
      pathTest = s.pt || null; openStory = s.story || null; curSubject = s.sub || null; openLesson = null; view = s.view || "learn";
      if (s.lesson) act("openLesson", s.lesson); else render();
    } finally { navRestoring = false; }
  });
  function render() {
    if (view === "home") view = "learn";
    if (ADMIN && ["addbook", "voice", "admin", "pack"].indexOf(view) < 0) view = "addbook";
    if (!ADMIN && ["addbook", "voice", "admin", "pack"].indexOf(view) > -1) { if (isStaff()) { staffTab = view; view = "staff"; } else if (view !== "pack") view = "adult"; }
    if (isPlainStudent() && ["adult", "gate", "settings", "addbook", "voice", "admin", "pack", "staff", "teacher"].indexOf(view) > -1) view = "learn";
    if (view === "staff" && !isStaff()) view = "learn";
    if (view === "teacher" && !isTeacher()) view = "learn";
    if (STAFFPAGE) {
      if (!cloud.on) view = "staffwait";
      else if (cloud.role === "student") { view = "staffwait"; location.replace("/"); }
      else if (view !== "staff" && view !== "teacher") view = isStaff() ? "staff" : "teacher";
    }
    if (STAFFPAGE && cloud.on && cloud.role !== "student") document.title = "IQRA Admin";
    var kid = !ADMIN && !STAFFPAGE && state.setup && kidUI();
    if (kid && ADULT_VIEWS.indexOf(view) > -1 && !adultOK) view = "gate";
    document.documentElement.lang = LANG();
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.dir = LANG() === "ur" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-band", band());
    document.body.classList.toggle("low", !!state.low);
    document.body.classList.toggle("inlesson", !!openLesson);
    var h;
    if (kid) {
      h = '<div class="topbar"><header class="kid"><span class="brand">' + brandMark(44) + '<span class="brand-t"><h1>' + esc(t("app")) + '</h1><small class="brand-tag">' + esc(LANG() === "ur" ? "زیادہ سیکھیں، زیادہ بنیں" : "Learn more, be more") + '</small></span></span><div class="hb">' + roleChip() + '<button class="chip" data-act="voice" aria-label="' + esc(t("autoVoice")) + '">' + svg(state.voice ? "speaker" : "mute", 24) + '</button>' + (state.setup ? '<button class="chip" data-act="go" data-arg="setup" aria-label="' + esc(t("switchc")) + '">' + (gnum(state.grade) >= 11 ? "F.A" : '<span class="gw">' + (LANG() === "ur" ? "جماعت " : "Class ") + "</span>" + esc(state.grade)) + "</button>" : "") + '<button id="langb" class="chip">' + esc(t("lang")) + "</button>" + '<button class="chip" data-act="signout" aria-label="' + esc(LANG() === "ur" ? "لاگ آؤٹ" : "Sign out") + '">' + svg("signout", 22) + '</button></div></header><main>';
    } else {
      h = '<div class="topbar"><header><h1>' + esc(ADMIN || STAFFPAGE ? t("adminApp") : t("app")) + '</h1><div class="hb">' + roleChip() + (state.setup && !STAFFPAGE ? '<button class="chip" data-act="go" data-arg="setup" aria-label="' + esc(t("switchc")) + '"><b>' + "ABC".charAt(D.levels.indexOf(levelOf(state.grade))) + "</b> · " + esc(gnum(state.grade) >= 11 ? "F.A" : (LANG() === "ur" ? "جماعت " : "Class ") + state.grade) + "</button>" : "") + 
        (STAFFPAGE ? "" : '<button id="lowb" class="chip' + (state.low ? " on" : "") + '">' + esc(t("lowband")) + '</button>') +
        '<button id="langb" class="chip">' + esc(t("lang")) + '</button><button class="chip" data-act="signout" aria-label="' + esc(LANG() === "ur" ? "لاگ آؤٹ" : "Sign out") + '">' + svg("signout", 22) + '</button></div></header><main>';
    }
    if (kid && (view === "learn" || view === "home") && sess.breakDue && !openLesson) h += breakView();
    else if (false) h += moodView();
    else if (view === "setup") h += setupView();
    else if (view === "home") h += homeView();
    else if (view === "learn") h += learnView();
    else if (view === "character") h += characterView();
    else if (view === "library") h += libraryView();
    else if (view === "syllabus") h += syllabusView();
    else if (view === "tutor") h += tutorView();
    else if (view === "exam") h += examView();
    else if (view === "progress") h += progressView();
    else if (view === "admin") h += adminView();
    else if (view === "stars") h += starsView();
    else if (view === "gate") h += gateView();
    else if (view === "adult") h += hubView();
    else if (view === "settings") h += settingsView();
    else if (view === "addbook") h += addBookView();
    else if (view === "voice") h += voiceView();
    else if (view === "pack") h += packView();
    else if (view === "staff") h += staffView();
    else if (view === "teacher") h += teacherView();
    else if (view === "staffwait") h += staffGateView();
    h += "</main>";
    var navH = "";
    if (ADMIN) {
      navH += "<nav>";
      [["addbook", "tabBooks"], ["voice", "voiceRec"], ["admin", "hubAdmin"], ["pack", "packT"]].forEach(function (v) {
        navH += '<button data-nav="' + v[0] + '" class="' + (view === v[0] ? "act" : "") + '">' + esc(t(v[1])) + "</button>";
      });
      navH += "</nav>";
    } else if (STAFFPAGE) {
      navH += "<nav>";
      (isStaff() ? ["staff"] : []).concat(isTeacher() ? ["teacher"] : []).forEach(function (v) {
        navH += '<button data-nav="' + v + '" class="' + (view === v ? "act" : "") + '">' + esc(t(v === "staff" ? "staffTab" : "teacherTab")) + "</button>";
      });
      navH += '<a class="navlink" href="/">' + esc(LANG() === "ur" ? "طلبہ کی سائٹ ↗" : "Student site ↗") + "</a></nav>";
    } else if (state.setup && kid) {
      navH += '<nav class="kidnav">';
      [["learn", "home"], ["library", "lib"], ["tutor", "owl"], ["stars", "star"]].forEach(function (v) {
        navH += '<button data-nav="' + v[0] + '" aria-label="' + esc(t(v[0] === "stars" ? "starsTab" : v[0] === "learn" ? "home" : v[0])) + '" class="' + (view === v[0] ? "act" : "") + '">' + svg(v[1], 34) + "<span>" + esc(t(v[0] === "stars" ? "starsTab" : v[0] === "learn" ? "home" : v[0])) + "</span></button>";
      });
      if (!isPlainStudent()) navH += '<button data-act="adult" aria-label="' + esc(t("grownups")) + '" class="' + (ADULT_VIEWS.indexOf(view) > -1 || view === "gate" ? "act" : "") + '">' + svg("lock", 34) + "<span>" + esc(t("grownups")) + "</span></button>";
      navH += "</nav>";
    } else if (state.setup) {
      navH += '<nav>';
      (["learn", "library", "tutor", "exam", "progress"].concat(isTeacher() ? ["teacher"] : [], isStaff() ? ["staff"] : [])).forEach(function (v) {
        navH += '<button data-nav="' + v + '" class="' + (view === v ? "act" : "") + '">' + esc(t(v === "learn" ? "home" : v === "teacher" ? "teacherTab" : v === "staff" ? "staffTab" : v)) + "</button>";
      });
      navH += "</nav>";
    }
        var hi = h.indexOf("</header><main>");
    if (hi > -1) h = h.slice(0, hi) + "</header>" + navH + "</div><main>" + h.slice(hi + 15);
    root.innerHTML = h;
    var rk = view + "|" + (openLesson || "") + "|" + (curSubject || "") + "|" + (sess.mood ? 1 : 0) + "|" + (state.setup ? 1 : 0);
    if (rk !== renderKey) { renderKey = rk; try { window.scrollTo(0, 0); } catch (e) {} }
    navSync();
    bind();
  }

  function heroView() {
    return '<section class="hero2"><h2>' + esc(t("heroH")) + "</h2><p>" + esc(t("heroS")) + '</p><div class="htiles"><div>' + svg("book", 34) + "<span>" + esc(t("heroT1")) + "</span></div><div>" + svg("owl", 34) + "<span>" + esc(t("heroT2")) + "</span></div><div>" + svg("star", 34) + "<span>" + esc(t("heroT3")) + "</span></div></div></section>";
  }
  function homeView() {
    var nm = state.name ? " " + state.name : "";
    var h = staffBarHTML() + announceHTML() + '<div class="homegrid"><section class="hero2"><h2>' + esc(t("greetA") + nm) + "</h2><p>" + esc(t("heroS")) + '</p><button class="bigbtn" data-nav="learn">' + esc(t("homeStart")) + '</button></section>';
    h += subjectsFor(state.grade).some(function (x) { return lessonsFor(x.id, state.grade).length; }) ? missionCard() : "<div></div>";
    h += "</div>";
    h += '<div class="htiles">';
    [["book", "heroT1"], ["owl", "heroT2"], ["star", "heroT3"]].forEach(function (x) { h += "<div>" + svg(x[0], 34) + "<span>" + esc(t(x[1])) + "</span></div>"; });
    return h + '</div><p class="homeclass"><button class="link" data-act="go" data-arg="setup">' + esc(t("edit")) + "</button></p>";
  }
  function shortGrade(g){ var n=gnum(g); if(n>=11) return "F.A "+(n-10); if(String(g)==="KG"||n<=0) return LANG()==="ur"?"کے جی":"KG"; return String(n); }
  function setupView() {
    var h = (state.setup ? '<div class="setupone">' : '<div class="setupgrid">' + welcomeHero()) + '<section class="card setup3"><h2 class="setup3-h">' + esc(state.setup ? t("welcome") : st3("setupTitle")) + "</h2>";
    h += '<div class="step"><span class="stepno" aria-hidden="true">1</span><label for="sname">' + esc(st3("yourName")) + '</label></div>';
    h += '<input id="sname" class="nameinp" autocomplete="given-name" placeholder="' + esc(st3("namePh")) + '" value="' + esc(state.name) + '">';
    h += '<div class="step"><span class="stepno" aria-hidden="true">2</span><span class="steplbl" id="gradelbl">' + esc(st3("yourClass")) + "</span></div>";
    h += '<div class="gpick" role="group" aria-labelledby="gradelbl">';
    D.levels.forEach(function (lv, li) {
      h += '<div class="gcat c' + "ABC".charAt(li) + '"><div class="gcat-h"><b aria-hidden="true">' + "ABC".charAt(li) + "</b><span>" + esc(L(lv)) + '</span></div><div class="gchips">';
      D.grades.forEach(function (g) { var n = gnum(g); if (n >= lv.min && n <= lv.max) { var on = String(state.grade) === String(g); h += '<button type="button" class="gchip' + (on ? " on" : "") + '" data-sgrade="' + g + '" aria-pressed="' + on + '">' + esc(shortGrade(g)) + "</button>"; } });
      h += "</div></div>";
    });
    h += "</div>";
    h += '<select id="sgrade" hidden aria-hidden="true" tabindex="-1">';
    D.grades.forEach(function (g) { h += '<option value="' + g + '"' + (String(state.grade) === String(g) ? " selected" : "") + ">" + esc(gradeLabel(g)) + "</option>"; });
    h += "</select>";
    h += '<details class="more"' + (gnum(state.grade) >= 11 ? " open" : "") + "><summary>" + esc(t("moreOpts")) + "</summary>";
    h += '<label>' + esc(t("province")) + '<select id="sprov">';
    D.provinces.forEach(function (p) { h += '<option value="' + p.id + '"' + (state.province === p.id ? " selected" : "") + ">" + esc(L(p)) + "</option>"; });
    h += '</select></label>' + boardSelect();
    if (gnum(state.grade) >= 11) {
      h += "<label>" + (LANG() === "ur" ? "گروپ" : "Group / Pathway") + '<select id="spath">';
      D.pathways.forEach(function (p) { h += '<option value="' + p.id + '"' + (state.pathway === p.id ? " selected" : "") + ">" + esc(L(p)) + "</option>"; });
      h += "</select></label>";
    }
    h += "<label>" + esc(t("readq")) + '<select id="sread">' + readOptions() + "</select></label></details>";
    h += '<button class="bigbtn gobtn" id="sgo">' + esc(t("start")) + "</button></section></div>";
    return h;
  }
  var ST3 = {
    setupTitle: { en: "Let's set up your classroom", ur: "آئیے آپ کی کلاس ترتیب دیں" },
    yourName: { en: "What is your name?", ur: "آپ کا نام کیا ہے؟" },
    namePh: { en: "Type your name", ur: "اپنا نام لکھیں" },
    yourClass: { en: "Choose your class", ur: "اپنی جماعت چنیں" },
    classesT: { en: "Classes", ur: "کلاسیں" },
    statClasses: { en: "Classes with content", ur: "مواد والی کلاسیں" },
    statChapters: { en: "Chapters", ur: "ابواب" },
    statReview: { en: "Waiting for review", ur: "جائزے کے منتظر" },
    statHidden: { en: "Hidden from students", ur: "طلبہ سے چھپے ہوئے" },
    noteT: { en: "Class announcement", ur: "کلاس کا اعلان" },
    notePh: { en: "A short message your students will see on their home screen", ur: "ایک مختصر پیغام جو طلبہ کو ہوم اسکرین پر نظر آئے گا" },
    noteSave: { en: "Save announcement", ur: "اعلان محفوظ کریں" },
    noteSaved: { en: "Saved", ur: "محفوظ ہو گیا" },
    noteHint: { en: "Leave it empty to remove the announcement.", ur: "خالی چھوڑیں تو اعلان ہٹ جائے گا۔" },
    announce: { en: "From your teacher", ur: "آپ کے استاد کی طرف سے" },
    manageT: { en: "Manage chapters", ur: "ابواب کا انتظام" },
    renameHint: { en: "Tap a title to rename it.", ur: "نام بدلنے کے لیے عنوان پر دبائیں۔" },
    shown: { en: "Visible", ur: "نظر آ رہا ہے" },
    hiddenL: { en: "Hidden", ur: "چھپا ہوا ہے" },
    showB: { en: "Show", ur: "دکھائیں" },
    hideB: { en: "Hide", ur: "چھپائیں" },
    moveUp: { en: "Move up", ur: "اوپر" },
    moveDown: { en: "Move down", ur: "نیچے" },
    delAgain: { en: "Tap again to delete", ur: "حذف کرنے کے لیے دوبارہ دبائیں" },
    delCh: { en: "Delete chapter", ur: "باب حذف کریں" },
    moveBook: { en: "Move this book to another class", ur: "یہ کتاب کسی اور کلاس میں لے جائیں" },
    moveGo: { en: "Move", ur: "منتقل کریں" },
    moveBad: { en: "That class does not teach this subject.", ur: "اس کلاس میں یہ مضمون نہیں ہے۔" },
    moved: { en: "Book moved.", ur: "کتاب منتقل ہو گئی۔" },
    hiddenN: { en: "hidden", ur: "چھپے" },
    pendingN: { en: "to review", ur: "جائزہ باقی" },
    barT: { en: "Admin tools", ur: "ایڈمن ٹولز" },
    barGo: { en: "Add class data", ur: "کلاس کا ڈیٹا شامل کریں" },
    barSub: { en: "Type lessons, upload books and manage every class.", ur: "اسباق لکھیں، کتابیں اپ لوڈ کریں اور ہر کلاس کا انتظام کریں۔" },
    barTeach: { en: "Write a lecture", ur: "لیکچر لکھیں" },
    efT: { en: "Add lessons by typing", ur: "ٹائپ کر کے اسباق شامل کریں" },
    efSubject: { en: "Subject", ur: "مضمون" },
    efTitle: { en: "Lesson title", ur: "سبق کا عنوان" },
    efText: { en: "Lesson text", ur: "سبق کا متن" },
    efTextHint: { en: "Write one sentence per line. Each line becomes one card for the student.", ur: "ہر سطر میں ایک جملہ لکھیں۔ ہر سطر طالب علم کے لیے ایک کارڈ بنے گی۔" },
    efQuiz: { en: "Questions (optional)", ur: "سوالات (اختیاری)" },
    efQ: { en: "Question", ur: "سوال" },
    efOpt: { en: "Option", ur: "آپشن" },
    efRight: { en: "Correct answer", ur: "صحیح جواب" },
    efPub: { en: "Show to students now", ur: "ابھی طلبہ کو دکھائیں" },
    efMore: { en: "Source details", ur: "ماخذ کی تفصیل" },
    efSave: { en: "Save lesson", ur: "سبق محفوظ کریں" },
    efNeed: { en: "Choose a subject, add a title and write at least one line of text.", ur: "مضمون چنیں، عنوان لکھیں اور کم از کم ایک سطر کا متن لکھیں۔" },
    efDone: { en: "Lesson saved. You can add the next one.", ur: "سبق محفوظ ہو گیا۔ اب اگلا شامل کریں۔" },
    efFull: { en: "The device storage is full, so the lesson was not saved.", ur: "ڈیوائس کی جگہ بھر گئی ہے، اس لیے سبق محفوظ نہیں ہوا۔" },
    efPend: { en: "New content is marked 'pending review' until a teacher checks it against the official textbook.", ur: "نیا مواد 'جائزہ باقی' رہتا ہے جب تک کوئی استاد اسے سرکاری کتاب سے نہ ملا لے۔" },
    efBulkT: { en: "Paste many lessons at once", ur: "کئی اسباق ایک ساتھ پیسٹ کریں" },
    efBulkHint: { en: "Separate lessons with a line of three dashes (---). The first line of each lesson is its title, the lines after it are the text.", ur: "اسباق کے درمیان تین ڈیش (---) کی لائن لگائیں۔ ہر سبق کی پہلی سطر اس کا عنوان ہے، اس کے بعد کی سطریں متن ہیں۔" },
    efBulkGo: { en: "Add these lessons", ur: "یہ اسباق شامل کریں" },
    efBulkDone: { en: "lessons added.", ur: "اسباق شامل ہو گئے۔" },
    efBulkNone: { en: "Nothing to add. Check the format above.", ur: "شامل کرنے کے لیے کچھ نہیں۔ اوپر دیا گیا طریقہ دیکھیں۔" },
    launQ: {"en": "What would you like to do?", "ur": "آج کیا کرنا ہے؟"},
    lessonsT: {"en": "Lessons", "ur": "سبق"},
    lessonsS: {"en": "Learn something new", "ur": "آج کچھ نیا سیکھیں"},
    launSyl: {"en": "Pakistan syllabus", "ur": "پاکستان کا نصاب"},
    launSylS: {"en": "What your class studies", "ur": "آپ کی کلاس میں کیا پڑھایا جاتا ہے"},
    libT: {"en": "Library", "ur": "کتب خانہ"},
    launLibS: {"en": "Books of every kind", "ur": "ہر قسم کی کتابیں"},
    storiesT: {"en": "Stories", "ur": "کہانیاں"},
    storiesS: {"en": "Listen and read", "ur": "سنیں اور پڑھیں"},
    sylHead: {"en": "Pakistan syllabus", "ur": "پاکستان کا نصاب"},
    sylIntro: {"en": "See what each class studies and where the official document is.", "ur": "دیکھیں کہ ہر کلاس میں کیا پڑھایا جاتا ہے اور سرکاری دستاویز کہاں ہے۔"},
    sylClass: {"en": "Class", "ur": "کلاس"},
    sylPick: {"en": "Choose a subject", "ur": "مضمون چنیں"},
    sylHas: {"en": "Syllabus added", "ur": "نصاب شامل ہے"},
    sylNoSub: {"en": "Not added yet", "ur": "ابھی شامل نہیں"},
    sylNone: {"en": "The syllabus for this class and subject has not been added yet. See the official documents below.", "ur": "اس کلاس اور مضمون کا نصاب ابھی شامل نہیں ہوا۔ نیچے سرکاری دستاویزات دیکھیں۔"},
    sylSoFar: {"en": "Syllabus added so far", "ur": "اب تک شامل نصاب"},
    sylPartial: {"en": "partial", "ur": "جزوی"},
    sylDocs: {"en": "Official curriculum documents", "ur": "سرکاری نصاب کی دستاویزات"},
    sylBoard: {"en": "Authority for your province", "ur": "آپ کے صوبے کا ادارہ"},
    sylBoardNote: {"en": "This name is a guide until an admin confirms it against an official notification.", "ur": "یہ نام صرف رہنمائی کے لیے ہے، جب تک ایڈمن اسے سرکاری نوٹیفکیشن سے تصدیق نہ کر لے۔"},
    sylRule: {"en": "Syllabus comes only from official Pakistani documents. Anything not yet checked by a teacher is marked.", "ur": "نصاب صرف پاکستان کی سرکاری دستاویزات سے لیا جاتا ہے۔ جس حصے کو استاد نے ابھی نہیں جانچا اس پر نشان لگا ہوتا ہے۔"},
    toLib: {"en": "Go to the Library", "ur": "کتب خانے میں جائیں"},
    toSyl: {"en": "See the syllabus", "ur": "نصاب دیکھیں"},
    libIntro: {"en": "Books of every kind in one place: textbooks, Quran, Urdu, English, science, stories and more.", "ur": "ہر قسم کی کتابیں ایک جگہ: نصابی کتابیں، قرآن، اردو، انگریزی، سائنس، کہانیاں اور مزید۔"},
    libSearch: {"en": "Search by title or author", "ur": "کتاب یا مصنف کا نام لکھیں"},
    libGo: {"en": "Search", "ur": "تلاش"},
    libAll: {"en": "All books", "ur": "تمام کتابیں"},
    libMine: {"en": "My class", "ur": "میری کلاس"},
    libAllC: {"en": "All classes", "ur": "تمام کلاسیں"},
    libCatT: {"en": "Choose a kind of book", "ur": "کتاب کی قسم چنیں"},
    cat_textbook: {"en": "Class textbooks", "ur": "نصابی کتابیں"},
    cat_quran: {"en": "Quran and Islamiyat", "ur": "قرآن اور اسلامیات"},
    cat_urdu: {"en": "Urdu literature", "ur": "اردو ادب"},
    cat_english: {"en": "English reading", "ur": "انگریزی مطالعہ"},
    cat_science: {"en": "Science and maths", "ur": "سائنس اور ریاضی"},
    cat_stories: {"en": "Children's stories", "ur": "بچوں کی کہانیاں"},
    cat_pak: {"en": "Pakistan studies and history", "ur": "پاکستان اسٹڈیز اور تاریخ"},
    cat_ref: {"en": "Dictionaries and reference", "ur": "لغت اور حوالہ جاتی کتب"},
    cat_exam: {"en": "Past papers and exam help", "ur": "پرانے پرچے اور امتحان"},
    cat_general: {"en": "General reading", "ur": "عمومی مطالعہ"},
    libVer: {"en": "Verified source", "ur": "تصدیق شدہ ماخذ"},
    libUnver: {"en": "Not yet checked", "ur": "جانچ باقی"},
    libInApp: {"en": "Read in app", "ur": "ایپ میں پڑھیں"},
    libOpen: {"en": "Visit website", "ur": "ویب سائٹ کھولیں"},
    libHere: {"en": "Read here in IQRA", "ur": "یہیں آئی اقرا میں پڑھیں"},
    libExt: {"en": "Official websites (open outside IQRA)", "ur": "سرکاری ویب سائٹس (آئی اقرا سے باہر کھلتی ہیں)"},
    libOutside: {"en": "Opens another website", "ur": "دوسری ویب سائٹ کھلے گی"},
    libChap: {"en": "chapters", "ur": "ابواب"},
    libEmpty: {"en": "No books here yet.", "ur": "یہاں ابھی کوئی کتاب نہیں۔"},
    libNote: {"en": "Library books are not part of the syllabus unless they are marked as a verified source.", "ur": "کتب خانے کی کتابیں نصاب کا حصہ نہیں ہوتیں جب تک ان پر تصدیق شدہ ماخذ نہ لکھا ہو۔"},
    libFound: {"en": "books found", "ur": "کتابیں ملیں"},
    langur: {"en": "Urdu", "ur": "اردو"},
    langen: {"en": "English", "ur": "انگریزی"},
    langar: {"en": "Arabic", "ur": "عربی"},
    langot: {"en": "Other", "ur": "دیگر"},
    libAddT: {"en": "Add a book to the Library", "ur": "کتب خانے میں کتاب شامل کریں"},
    libTitle: {"en": "Book title", "ur": "کتاب کا نام"},
    libAuthor: {"en": "Author or publisher", "ur": "مصنف یا ادارہ"},
    libCat: {"en": "Kind of book", "ur": "کتاب کی قسم"},
    libClass: {"en": "Class", "ur": "کلاس"},
    libLang: {"en": "Language", "ur": "زبان"},
    libUrl: {"en": "Web link (starts with https://)", "ur": "ویب لنک (https:// سے شروع)"},
    libNoteF: {"en": "Short note (optional)", "ur": "مختصر نوٹ (اختیاری)"},
    libVerF: {"en": "I checked this against the official or a trusted source", "ur": "میں نے اسے سرکاری یا معتبر ماخذ سے ملا لیا ہے"},
    libSave: {"en": "Save book", "ur": "کتاب محفوظ کریں"},
    libBadUrl: {"en": "The link must start with https://", "ur": "لنک https:// سے شروع ہونا چاہیے۔"},
    libNeed: {"en": "Title and kind are required.", "ur": "نام اور قسم لازمی ہیں۔"},
    libSaved: {"en": "Book added.", "ur": "کتاب شامل ہو گئی۔"},
    libDel: {"en": "Remove", "ur": "ہٹائیں"},
    libDelAgain: {"en": "Tap again to remove", "ur": "ہٹانے کے لیے دوبارہ دبائیں"},
    libNoRight: {"en": "Only an admin can add books.", "ur": "صرف ایڈمن کتاب شامل کر سکتا ہے۔"},
    libBoards: {"en": "Official board websites still to add", "ur": "وہ سرکاری بورڈ جن کی ویب سائٹ ابھی شامل کرنی ہے"},
    libBoardsHint: {"en": "Open the board's official site, copy its address, then add it here as a verified source.", "ur": "بورڈ کی سرکاری ویب سائٹ کھولیں، اس کا پتہ نقل کریں، پھر یہاں تصدیق شدہ ماخذ کے طور پر شامل کریں۔"},
    libFromApp: {"en": "Textbook in this app", "ur": "اس ایپ میں موجود کتاب"},
    orPdf: { en: "Or upload a PDF book", ur: "یا پی ڈی ایف کتاب اپ لوڈ کریں" },
    pickClass: { en: "Choose a class", ur: "کلاس چنیں" },
    pickClassHint: { en: "Step 1: choose the class. Step 2: choose the subject. Step 3: add the book, notes or video.", ur: "پہلے کلاس چنیں، پھر مضمون، پھر کتاب، نوٹس یا ویڈیو شامل کریں۔" },
    pickSub: { en: "Choose the subject", ur: "مضمون چنیں" },
    pickSubHint: { en: "Tap a subject above. The buttons to add a book, notes or video will appear.", ur: "اوپر سے مضمون دبائیں۔ پھر کتاب، نوٹس یا ویڈیو شامل کرنے کے بٹن نظر آئیں گے۔" },
    addHere: { en: "Add a book, notes, video or test", ur: "کتاب، نوٹس، ویڈیو یا ٹیسٹ شامل کریں" },
    moreWays: { en: "Other ways to add content", ur: "مواد شامل کرنے کے دوسرے طریقے" },
    wayType: { en: "Type lessons", ur: "ٹائپ کر کے اسباق" },
    wayPdf: { en: "PDF into chapters", ur: "پی ڈی ایف سے ابواب" },
    wayNote: { en: "Class note", ur: "کلاس نوٹ" }
  };
  function st3(k) { var o = ST3[k]; return o ? (o[LANG()] || o.en) : k; }
  function welcomeHero() {
    var h = '<section class="welcome3"><div class="welcome3-orb" aria-hidden="true"><img alt="" src="' + (window.IQRA_ORB || "") + '"></div>';
    h += '<div class="wordmark">IQRA<span lang="ur" dir="rtl">اقرا</span></div><h2>' + esc(t("heroH")) + "</h2><p>" + esc(t("heroS")) + '</p><div class="welcome3-tiles">';
    [["book", "heroT1"], ["owl", "heroT2"], ["star", "heroT3"]].forEach(function (x) { h += "<div>" + svg(x[0], 30) + "<span>" + esc(t(x[1])) + "</span></div>"; });
    return h + "</div></section>";
  }

  function levelOf(g) { var n = gnum(g); return D.levels.filter(function (lv) { return n >= lv.min && n <= lv.max; })[0]; }
  function subjectsFor(g) {
    var n = gnum(g);
    if (n >= 11) {
      var path = D.pathways.filter(function (p) { return p.id === state.pathway; })[0] || D.pathways[0];
      var ids = D.faCompulsory.concat(path.subjects, D.faExtras);
      return D.subjects.filter(function (s) { return ids.indexOf(s.id) > -1; });
    }
    return D.subjects.filter(function (s) { return n >= s.min && n <= s.max; });
  }
  function lessonsFor(sid, g) { var n = gnum(g); return D.lessons.filter(function (l) { return l.subject === sid && n >= l.min && n <= l.max && !(l.hidden && !isStaff()); }); }

  function syllabusCard(sid, gr) {
    if (gr === undefined) gr = state.grade; var G = gr;
    var h = "";
    D.syllabus.filter(function (x) { return x.subject === sid && x.grade === gnum(G); }).forEach(function (sx) {
      var doc = D.sources.filter(function (d) { return d.id === sx.docId; })[0];
      var here = lessonsFor(sid, G), covered = 0, body = "";
      sx.units.forEach(function (u) {
        var has = !sx.pctb && here.some(function (l) { return ((l.unit || {})[gnum(G)] || []).some(function (r) { return r.split(".")[0] === String(u.n); }); });
        if (has) covered++;
        body += "<details><summary><b>" + esc(t("unit")) + " " + u.n + ": " + esc(L(u.title)) + "</b> " + (sx.pctb ? "" : has ? '<span class="badge inreview">' + esc(t("lessonSample")) + "</span>" : '<span class="badge pending">' + esc(t("noContent")) + "</span>") + "</summary><ul>";
        u.slo.forEach(function (s) { body += "<li><b>" + esc(s.ref) + "</b> " + esc(s.t) + "</li>"; });
        body += "</ul></details>";
      });
      h += '<div class="card"><h3>' + esc(t("sylmap")) + '</h3><p class="small">' + esc(doc.title) + " · " + esc(doc.authority) + (doc.url ? ' · <a href="' + esc(doc.url) + '" target="_blank" rel="noopener">' + esc(t("opensrc")) + "</a>" : "") + "</p><p>" + (sx.pctb ? sx.units.length + " " + esc(t("unit")) : covered + "/" + sx.units.length + " " + esc(t("unitsWith"))) + '</p><p class="note">' + esc(t("sylNote")) + "</p>" + (sx.partial ? '<p class="note warnnote">' + esc((sx.partialNote || t("partialNote"))) + "</p>" : "") + (sx.note ? '<p class="note">' + esc(sx.note) + "</p>" : "") + body + "</div>";
    });
    return h;
  }

  var curSubject = null; var afterGate = null;
  function uploadCard() { return ""; }
  function learnView() {
    if (kidUI() || !openLesson) return kidHome();
    if (openLesson) return lessonView(openLesson);
    var h = (curSubject ? "" : homeHero() + staffBarHTML() + announceHTML() + launcherHTML() + missionCard() + '<h3 class="subhd" id="subjects">' + esc(t("subjectsHd")) + "</h3>") + '<p class="note">' + esc(t("sample")) + "</p>";
    if (curSubject) {
      var ls = lessonsFor(curSubject, state.grade);
      var s = D.subjects.filter(function (x) { return x.id === curSubject; })[0];
      h += '<button class="link" id="bsub">‹ ' + esc(t("back")) + "</button><h2>" + esc(L(s)) + "</h2>";
      h += syllabusCard(curSubject);
      h += resHub(curSubject, state.grade);
      if (!ls.length) h += '<p class="card">' + esc(t("nolesson")) + "</p>";
      ls.forEach(function (l) { h += '<button class="card row" data-lesson="' + l.id + '"><b>' + esc(L(l.title)) + "</b> " + badge(l) + "</button>"; });
      return h;
    }
    h += '<p class="note">' + esc(provLabel(state.province)) + (state.board ? " · " + esc(state.board) : "") + " · " + esc(t("version")) + ": " + esc(state.version) + "</p>";
    h += "<p><b>" + esc(L(levelOf(state.grade))) + '</b> <button class="link" id="resetup">' + esc(t("edit")) + "</button></p>";
    h += "<h2>" + esc(t("subjects")) + ' <small>(' + (state.name ? esc(state.name) + ", " : "") + esc(t("grade")) + " " + esc(state.grade) + ")</small></h2><div class=\"grid\">";
    subjectsFor(state.grade).forEach(function (s) {
      var has = lessonsFor(s.id, state.grade).length;
      h += '<button class="tile' + (has ? "" : " dim") + '" data-sub="' + s.id + '"><span class="ic">' + s.icon + "</span>" + esc(L(s)) + "</button>";
    });
    h += "</div>";
    h += '<button class="btn alt" id="offb">' + esc(t("offline")) + "</button>";
    return h;
  }

  // Lesson text is shown point by point: one block per sentence, Quran verses large and centred with their label below.
  function bodyBlocks(txt, speak) {
    var out = "";
    function plain(x) {
      var p = '<p class="blk" dir="auto">' + esc(x) + "</p>";
      return speak ? '<div class="blkrow"><button type="button" class="chip lightchip sq" data-act="speak" data-arg="' + esc(x) + '" aria-label="' + esc(t("listen")) + '">' + svg("speaker", 26) + "</button>" + p + "</div>" : p;
    }
    sentences(txt).forEach(function (s) {
      var harakat = (s.match(/[ً-ْٰ۝]/g) || []).length, i = s.indexOf("(");
      if (harakat >= 6) {
        var lead = "", rest = s, c = s.indexOf(":");
        if (c > 0 && (s.slice(0, c).match(/[ً-ْٰ۝]/g) || []).length < 2) { lead = s.slice(0, c + 1).trim(); rest = s.slice(c + 1).trim(); }
        var j = rest.indexOf("("), ar = j > 0 ? rest.slice(0, j).trim() : rest, cap = j > 0 ? rest.slice(j).trim() : "";
        if (lead) out += plain(lead);
        out += '<p class="blk ayah" lang="ar" dir="rtl">' + esc(ar) + "</p>";
        if (cap) out += '<p class="blk cap" dir="auto">' + esc(cap) + "</p>";
      } else out += plain(s);
    });
    return '<div class="lessonbody">' + out + "</div>";
  }
  function lessonView(id) {
    var l = D.lessons.filter(function (x) { return x.id === id; })[0];
    var h = '<button class="link" id="blesson">‹ ' + esc(t("back")) + "</button><article class=\"card\"><h2>" + esc(L(l.title)) + "</h2>" + bodyBlocks(L(l.body));
    h += '<button class="chip" id="speak">🔊 ' + esc(t("listen")) + "</button></article>";
    var m = metaOf(l);
    h += '<div class="card meta"><h3>' + esc(t("meta")) + " " + badge(l) + "</h3><dl>" + mrow(t("province2"), provLabel(m.province)) + mrow(t("board"), m.board) + mrow(t("year"), m.year) + mrow(t("version"), m.version) + mrow(t("textbook"), m.textbook) + mrow(t("chapter"), m.chapter) + mrow(t("outcomes"), m.outcomes) + mrow(t("srcdoc"), m.source) + "</dl></div>";
    h += '<form id="quizf" class="card"><h3>' + esc(t("quiz")) + "</h3>";
    l.quiz.forEach(function (q, i) {
      h += "<fieldset><legend>" + (i + 1) + ". " + esc(L(q.q)) + "</legend>";
      q.opts.forEach(function (o, j) { h += '<label class="opt"><input type="radio" name="q' + i + '" value="' + j + '"> ' + esc(o) + "</label>"; });
      h += "</fieldset>";
    });
    h += '<button class="btn" type="submit">' + esc(t("submit")) + '</button><p id="qres" aria-live="polite"></p></form>';
    return h;
  }

  function characterView() {
    var n = gnum(state.grade);
    var mods = D.character.filter(function (c) { return n >= c.min && n <= c.max; });
    if (openStory) {
      var c = D.character.filter(function (x) { return x.id === openStory; })[0];
      var h = '<button class="link" id="bstory">‹ ' + esc(t("back")) + '</button><article class="card"><h2>' + esc(L(c.title)) + "</h2><p>" + esc(L(c.story)) + '</p><button class="chip lightchip" data-act="speak" data-arg="' + esc(L(c.story)) + '">' + svg("speaker", 24) + " " + esc(t("listen")) + "</button>";
      c.choices.forEach(function (ch, i) { h += '<button class="opt btnopt' + (kidUI() ? " optbig" : "") + '" data-choice="' + i + '">' + esc(L(ch.t)) + "</button>"; });
      h += '<p id="fb" class="fb" aria-live="polite"></p><h3>' + esc(t("reflect")) + "</h3><p>" + esc(L(c.reflect)) + '</p><textarea rows="3"></textarea></article>';
      return h;
    }
    var h2 = "<h2>" + esc(t("character")) + "</h2>";
    mods.forEach(function (c) { h2 += '<button class="card row" data-story="' + c.id + '"><small>' + esc(L(c.value)) + "</small><b>" + esc(L(c.title)) + "</b></button>"; });
    return h2;
  }

  var tutorCtx = { subject: "", lesson: "" };
  var SAFE = new RegExp([
    "kill myself","killing myself","suicide","want to die","wanna die","hurt myself","harm myself","end my life","don'?t want to live","abuse","abused","hits me","hit me","beats me","beat me","touch(es|ed)? me","touching me","bully","bullied","bullying","molest","kidnap","scared to go home","afraid to go home","unsafe","hurting me","hurts me",
    "khud ?ko (maar|khatam|nuqsan)","khudkushi","khud ?kushi","mar ?jana chahta","mar ?jana chahti","marna chahta","marna chahti","jeena nahi","jeena nahin","mujhe (maar|marta|marti|peet)","mujhay (maar|marta|marti|peet)","maarta hai","marta hai","peetta hai","galat tareeke se (choo|chhu)","gandi harkat","dar lagta hai ghar","ghar nahi jana","tang (karta|karti|kar)",
    "خودکشی","خود کو مار","خود کو نقصان","مرنا چاہت","جینا نہیں","جینا نہیں چاہت","مجھے مار","مجھے مارتا","مجھے مارتی","مجھے پیٹ","مارتا ہے","مارتی ہے","پیٹتا ہے","تنگ کر","غلط طریقے سے چھو","چھوتا ہے","چھوتی ہے","گندی حرکت","ڈر لگتا ہے","گھر نہیں جانا","اغوا"
  ].join("|"), "i");
  function firstSentence(s) { var i = s.search(/[.۔]/); return i > 0 ? s.slice(0, i + 1) : s; }
  function tutorReply(q) {
    if (SAFE.test(q)) return { safe: true, text: t("safe") };
    var l = D.lessons.filter(function (x) { return x.id === tutorCtx.lesson; })[0];
    if (!l) return { text: t("pickctx") };
    var pre = statusOf(l) === "verified" ? "" : t("pendingNote") + " ";
    var hay = (l.title.en + " " + l.topic + " " + l.body.en + " " + l.title.ur + " " + l.body.ur).toLowerCase();
    var hit = q.toLowerCase().split(/[^a-z0-9\u0600-\u06ff]+/).some(function (w) { return w.length > 3 && hay.indexOf(w) > -1; }) || (l.subject === "math" && /\d\s*[+\-x×*\/]\s*\d/.test(q));
    if (!hit) return { text: pre + t("outside") };
    var lead = LANG() === "ur" ? "آئیے باب «" + L(l.title) + "» کی یہ سطر دوبارہ پڑھیں: " : "Let's reread this line from the chapter \u201c" + L(l.title) + "\u201d: ";
    var ask = LANG() === "ur" ? " یہ آپ کے سوال کے بارے میں کیا بتاتی ہے؟ اپنے الفاظ میں لکھیں۔" : " What does it tell you about your question? Say it in your own words.";
    return { text: pre + lead + firstSentence(L(l.body)) + ask };
  }
  function tutorView() {
    if (kidUI()) return kidTutor();
    var h = "<h2>" + esc(t("tutor")) + "</h2>";
    h += '<p class="note">' + esc(provLabel(state.province)) + " · " + esc(state.board || t("notsel")) + " · " + esc(t("grade")) + " " + esc(state.grade) + "</p>";
    h += "<label>" + esc(t("subject")) + '<select id="tsub"><option value="">' + esc(t("notsel")) + "</option>";
    subjectsFor(state.grade).forEach(function (s) { if (lessonsFor(s.id, state.grade).length) h += '<option value="' + s.id + '"' + (tutorCtx.subject === s.id ? " selected" : "") + ">" + esc(L(s)) + "</option>"; });
    h += "</select></label>";
    if (tutorCtx.subject) {
      h += "<label>" + esc(t("chapter")) + '<select id="tles"><option value="">' + esc(t("notsel")) + "</option>";
      lessonsFor(tutorCtx.subject, state.grade).forEach(function (l) { h += '<option value="' + l.id + '"' + (tutorCtx.lesson === l.id ? " selected" : "") + ">" + esc(L(l.title)) + "</option>"; });
      h += "</select></label>";
    }
    h += '<div class="chat" aria-live="polite"><div class="msg bot">' + esc(tutorCtx.lesson ? t("tutorHi") : t("pickctx")) + "</div>";
    chat.forEach(function (m) { h += '<div class="msg ' + m.who + (m.safe ? " warn" : "") + '">' + esc(m.text) + "</div>"; });
    h += "</div>";
    if (tutorCtx.lesson) h += '<form id="chatf" class="send"><input id="chatq" placeholder="' + esc(t("ask")) + '" autocomplete="off"><button class="btn">' + esc(t("send")) + "</button></form>";
    h += '<p class="note">' + esc(LANG() === "ur" ? "یہ مددگار ابھی تجرباتی ہے اور صرف منتخب باب کے اندر رہ کر جواب دیتا ہے۔" : "This helper is experimental and answers only from the chapter you chose.") + "</p>";
    return h;
  }

  var examSub = "";
  function examQuestions(sid) { var qs = []; lessonsFor(sid, state.grade).forEach(function (l) { l.quiz.forEach(function (q) { qs.push(q); }); }); return qs; }
  function examView() {
    var h = "<h2>" + esc(t("exams")) + '</h2><p class="note">' + esc(t("practiceNote")) + "</p>";
    if (examSub) {
      var s = D.subjects.filter(function (x) { return x.id === examSub; })[0];
      h += '<button class="link" id="bexam">‹ ' + esc(t("back")) + '</button><form id="examf" class="card"><h3>' + esc(L(s)) + "</h3>";
      examQuestions(examSub).forEach(function (q, i) {
        h += "<fieldset><legend>" + (i + 1) + ". " + esc(L(q.q)) + "</legend>";
        q.opts.forEach(function (o, j) { h += '<label class="opt"><input type="radio" name="e' + i + '" value="' + j + '"> ' + esc(o) + "</label>"; });
        h += "</fieldset>";
      });
      return h + '<button class="btn" type="submit">' + esc(t("submit")) + '</button><p id="eres" aria-live="polite"></p></form>';
    }
    var any = false;
    h += '<div class="grid">';
    subjectsFor(state.grade).forEach(function (s) {
      if (!lessonsFor(s.id, state.grade).length) return;
      any = true;
      h += '<button class="tile" data-exam="' + s.id + '"><span class="ic">' + s.icon + "</span>" + esc(L(s)) + "<small>" + esc(t("mock")) + "</small></button>";
    });
    h += "</div>";
    if (!any) h += '<p class="card">' + esc(t("noexam")) + "</p>";
    return h + '<p class="note">' + esc(t("pastp")) + "</p>";
  }

  function coverageView() {
    var h = '<section class="card"><h3>' + esc(t("coverage")) + "</h3>", any = false;
    subjectsFor(state.grade).forEach(function (s) {
      var ls = lessonsFor(s.id, state.grade);
      var syl = D.syllabus.filter(function (x) { return x.subject === s.id && x.grade === gnum(state.grade); })[0];
      if (syl) {
        any = true;
        var ud = syl.units.filter(function (u) { return ls.some(function (l) { return state.progress[l.id] && ((l.unit || {})[gnum(state.grade)] || []).some(function (r) { return r.split(".")[0] === String(u.n); }); }); }).length;
        h += '<div class="bar"><span>' + esc(L(s)) + " " + ud + "/" + syl.units.length + " " + esc(t("officialUnits")) + '</span><i style="width:' + Math.round(100 * ud / syl.units.length) + '%" class="s"></i></div>';
        return;
      }
      if (!ls.length) return;
      any = true;
      var done = ls.filter(function (l) { return state.progress[l.id]; }).length;
      h += '<div class="bar"><span>' + esc(L(s)) + " " + done + "/" + ls.length + " " + esc(t("covered")) + '</span><i style="width:' + Math.round(100 * done / ls.length) + '%" class="s"></i></div>';
    });
    if (!any) h += "<p>" + esc(t("none")) + "</p>";
    return h + '<p class="note">' + esc(t("covnote")) + "</p></section>";
  }

  function progressView() {
    var topics = {}, any = false;
    Object.keys(state.progress).forEach(function (lid) {
      var p = state.progress[lid].topics || {};
      Object.keys(p).forEach(function (k) { any = true; topics[k] = topics[k] || { c: 0, t: 0 }; topics[k].c += p[k].c; topics[k].t += p[k].t; });
    });
    var h = "<h2>" + esc(t("progress")) + "</h2>";
    if (!any) return h + '<p class="card">' + esc(t("none")) + "</p>" + coverageView();
    var weak = [];
    h += '<section class="card"><h3>' + esc(t("gaps")) + "</h3>";
    Object.keys(topics).forEach(function (k) {
      var pct = Math.round(100 * topics[k].c / topics[k].t);
      if (pct < 70) weak.push(k);
      h += '<div class="bar"><span>' + esc(k) + " " + pct + '%</span><i style="width:' + pct + '%" class="' + (pct < 70 ? "w" : "s") + '"></i></div>';
    });
    h += "</section><section class=\"card\"><h3>" + esc(t("plan")) + "</h3>";
    if (!weak.length) h += "<p>" + esc(t("strong")) + "</p>";
    else weak.forEach(function (k, i) { h += "<p>" + (i + 1) + ". " + esc(t("practice")) + ": <b>" + esc(k) + "</b></p>"; });
    return h + "</section>" + coverageView();
  }

  function adminView() {
    var needs = D.lessons.filter(function (l) { return statusOf(l) === "needs"; }).length;
    var h = '<button class="btn" data-nav="addbook">' + esc(t("addbook")) + "</button><h2>" + esc(t("adminTitle")) + '</h2><p class="note">' + esc(t("adminNote")) + "</p>";
    if (needs) h += '<p class="note warnnote">' + needs + " " + esc(t("reviewcount")) + "</p>";
    h += '<section class="card"><h3>' + esc(t("version")) + ": " + esc(state.version) + '</h3><p class="small">' + esc(t("newverNote")) + '</p><form id="verf"><input id="nv" placeholder="2027-28" required><button class="btn alt">' + esc(t("newver")) + "</button></form></section>";
    h += '<section class="card"><h3>' + esc(t("srcdocs")) + "</h3>";
    D.sources.forEach(function (d) { h += "<p><b>" + esc(d.title) + "</b><br><small>" + esc(d.authority) + " · " + esc(d.version) + (d.url ? ' · <a href="' + esc(d.url) + '" target="_blank" rel="noopener">' + esc(t("opensrc")) + "</a>" : "") + "</small></p>"; });
    h += "</section>";
    D.lessons.forEach(function (l) {
      var m = metaOf(l);
      h += '<div class="card"><b>' + esc(L(l.title)) + "</b> " + badge(l) + "<br><small>" + esc(l.subject) + " · " + l.min + "–" + l.max + (m.province ? " · " + esc(provLabel(m.province)) : "") + "</small>";
      if (m.status === "inreview" && complete(m)) h += '<br><button class="btn alt" data-verify="' + l.id + '">' + esc(t("signoff")) + "</button>";
      h += "</div>";
    });
    h += '<form id="mapf" class="card"><h3>' + esc(t("addMap")) + "</h3><label>" + esc(t("chapter")) + '<select id="mid">';
    D.lessons.forEach(function (l) { h += '<option value="' + l.id + '">' + esc(L(l.title)) + "</option>"; });
    h += "</select></label>";
    [["mb", "board"], ["my", "year"], ["mtb", "textbook"], ["mch", "chapter"], ["mo", "outcomes"], ["ms", "srcdoc"]].forEach(function (f) { h += "<label>" + esc(t(f[1])) + '<input id="' + f[0] + '"></label>'; });
    h += '<p class="small">' + esc(t("required")) + '</p><button class="btn">' + esc(t("save")) + "</button></form>";
    h += '<section class="card"><h3>' + (LANG() === "ur" ? "علاقوں کی کوریج" : "Coverage by region") + "</h3>";
    D.provinces.forEach(function (p) {
      if (p.id === "pakistan") return;
      var n = D.lessons.filter(function (l) { return metaOf(l).province === p.id && statusOf(l) === "verified"; }).length;
      h += "<p>" + esc(L(p)) + " (" + esc((D.boards[p.id] || {}).authority || "") + "): " + (LANG() === "ur" ? "تصدیق شدہ اندراجات: " : "Verified items: ") + n + "</p>";
    });
    h += "</section>";
    h += '<button class="btn alt" id="rst">' + esc(t("reset")) + "</button>";
    return h;
  }

  // ================= age bands, reading level, voice =================
  function band() { var n = gnum(state.grade); return n <= 2 ? "early" : n <= 5 ? "primary" : n <= 10 ? "mid" : "fa"; }
  function readLevel() {
    if (state.read && state.read !== "auto") return state.read;
    var n = gnum(state.grade);
    return n <= 1 ? "none" : n === 2 ? "little" : "full";
  }
  function kidUI() { return band() === "early" || band() === "primary" || readLevel() !== "full"; }
  function autoVoice() { return !navRestoring && !!state.voice && !!state.setup && kidUI() && (readLevel() !== "full" || band() === "early"); }

  var sess = { done: 0, breakDue: false, mood: "", moodMsg: "" };
  var gameRun = null, adultOK = false, gateQ = null, lessonStep = 0, quizRun = null, countGame = null, cgToken = 0, tutorIdx = 0;
  var ADULT_VIEWS = ["exam", "progress", "admin", "settings", "adult", "addbook", "voice", "pack", "staff", "teacher"];

  function breakLimit() { var b = band() === "early" ? 3 : 4; return (sess.mood === "tired" || sess.mood === "sad") ? 2 : b; }
  function today() { var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function dayNum(k) { var p = k.split("-"); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 86400000); }
  function streakInfo() {
    var days = state.days || [], td = today(), n = dayNum(td), set = {}, c = 0, i;
    days.forEach(function (d) { set[dayNum(d)] = 1; });
    var doneToday = !!set[n], start = doneToday ? n : n - 1;
    for (i = start; set[i]; i--) c++;
    return { n: c, doneToday: doneToday, back: days.length > 0 && !doneToday && !set[n - 1] };
  }
  function missionList() {
    var subs = subjectsFor(state.grade).filter(function (x) { return lessonsFor(x.id, state.grade).filter(notStudy).length; });
    if (!subs.length) return [];
    var off = dayNum(today()), out = [], i, ls;
    for (i = 0; i < subs.length && out.length < 3; i++) {
      var sj = subs[(off + i) % subs.length]; ls = lessonsFor(sj.id, state.grade).filter(notStudy);
      out.push(ls[off % ls.length]);
    }
    return out;
  }
  function missionDoneIds() { var m = state.mdone; return m && m.d === today() ? m.ids : []; }
  function finishActivity() {
    var d = today(), l = openLesson ? curLesson() : null;
    state.days = state.days || [];
    if (state.days.indexOf(d) < 0) { state.days.push(d); state.days = state.days.slice(-120); }
    if (l) { if (!state.mdone || state.mdone.d !== d) state.mdone = { d: d, ids: [] }; if (state.mdone.ids.indexOf(l.id) < 0) state.mdone.ids.push(l.id); state.kgdone = state.kgdone || []; if (state.kgdone.indexOf(l.id) < 0) state.kgdone.push(l.id); if (state.kgskip) state.kgskip = state.kgskip.filter(function (x) { return x !== l.id; }); }
    save(); sess.done++; if (kidUI() && sess.done % breakLimit() === 0) sess.breakDue = true; }
  // Voice: a recorded human clip wins; otherwise the phone's own voice; Urdu is never read by a non-Urdu voice.
  var voiceBank = {}, curAudio = null, vState = { tried: false };
  function vkey(text) { return LANG() + ":" + String(text); }
  function urduVoice() {
    try { var vs = window.speechSynthesis.getVoices(); for (var i = 0; i < vs.length; i++) if (/^ur/i.test(vs[i].lang)) return vs[i]; } catch (e) {}
    return null;
  }
  function hindiVoice() {
    try { var vs = window.speechSynthesis.getVoices(); for (var i = 0; i < vs.length; i++) if (/^hi/i.test(vs[i].lang)) return vs[i]; } catch (e) {}
    return null;
  }
  var hindiKeys = null;
  function toHindi(text) {
    var map = D.hindiVoice || {}, s = String(text);
    if (Object.prototype.hasOwnProperty.call(map, s)) return map[s];
    if (!hindiKeys) hindiKeys = Object.keys(map).sort(function (x, y) { return y.length - x.length; });
    hindiKeys.forEach(function (k) { if (s.indexOf(k) > -1) s = s.split(k).join(map[k]); });
    return /[\u0600-\u06ff]/.test(s) ? null : s;
  }
  function stopVoice() { speakTok = (speakTok || 0) + 1; try { if (curAudio) { curAudio.pause(); curAudio = null; } if (window.speechSynthesis) window.speechSynthesis.cancel(); } catch (e) {} }
  function speak(text, force) {
    if (!force && !state.voice) return;
    stopVoice();
    var clip = voiceBank[vkey(text)];
    if (clip) { try { curAudio = new Audio(clip); curAudio.play().catch(function () {}); } catch (e) {} return; }
    var key = vkey(text);
    if (cloud.on && cloud.db && cloud.role === "student" && !clipMiss[key]) {
      var tok = ++speakTok;
      var done = false, fall = function () { if (done) return; done = true; clipMiss[key] = 1; if (tok === speakTok) speakTTS(text); };
      var timer = setTimeout(fall, 1800);
      try {
        cloud.db.collection("clips").doc(hashKey(key)).get().then(function (d) {
          if (done) return; done = true; clearTimeout(timer);
          var x = d && d.exists !== false && d.data ? d.data() : null;
          if (x && x.k === key && typeof x.url === "string") {
            voiceBank[key] = x.url;
            if (tok === speakTok) { try { curAudio = new Audio(x.url); curAudio.play().catch(function () {}); } catch (e) {} }
          } else { clipMiss[key] = 1; if (tok === speakTok) speakTTS(text); }
        }).catch(function () { clearTimeout(timer); fall(); });
      } catch (e) { clearTimeout(timer); fall(); }
      return;
    }
    speakTTS(text);
  }
  var clipMiss = {}, speakTok = 0;
  function speakTTS(text) {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      var u = new SpeechSynthesisUtterance(String(text));
      if (LANG() === "ur") {
        var v = urduVoice(), tx = String(text);
        if (v) { u.voice = v; u.lang = v.lang; }
        else { var hv = hindiVoice(), hs = toHindi(tx); if (!hv || !hs) { vState = { tried: true, started: false, err: "no voice", lang: "ur" }; return; } u = new SpeechSynthesisUtterance(hs); u.voice = hv; u.lang = hv.lang; }
      } else u.lang = "en-US";
      u.rate = band() === "early" ? 0.85 : 0.95;
      vState = { tried: true, started: false, ended: false, err: "", lang: u.lang, text: String(u.text).slice(0, 40) };
      u.onstart = function () { vState.started = true; }; u.onend = function () { vState.ended = true; };
      u.onerror = function (e) { vState.err = (e && e.error) || "error"; };
      // Chrome can drop an utterance spoken right after cancel(), so wait a moment and resume first.
      setTimeout(function () { try { window.speechSynthesis.resume(); window.speechSynthesis.speak(u); } catch (e) { vState.err = "speak"; } }, 80);
    } catch (e) {}
  }
  function idbOpen() {
    return new Promise(function (res, rej) {
      try {
        var r = indexedDB.open("pds-voice", 1);
        r.onupgradeneeded = function () { r.result.createObjectStore("clips", { keyPath: "k" }); };
        r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
      } catch (e) { rej(e); }
    });
  }
  function idbDo(mode, fn) { return idbOpen().then(function (db) { return new Promise(function (res, rej) { var tx = db.transaction("clips", mode), st = tx.objectStore("clips"), q = fn(st); tx.oncomplete = function () { res(q && q.result); }; tx.onerror = function () { rej(tx.error); }; }); }); }
  function loadClips() {
    var bc = D.voiceClips || {}; Object.keys(bc).forEach(function (k) { voiceBank[k] = bc[k]; });
    if (typeof indexedDB === "undefined") return;
    idbDo("readonly", function (st) { return st.getAll(); }).then(function (all) { (all || []).forEach(function (c) { voiceBank[c.k] = c.url; }); render(); }).catch(function () {});
  }
  function saveClip(k, url) { voiceBank[k] = url; cloudClip(k, url); return idbDo("readwrite", function (st) { return st.put({ k: k, url: url }); }).catch(function () {}); }
  function delClip(k) { delete voiceBank[k]; cloudClipDel(k); return idbDo("readwrite", function (st) { return st.delete(k); }).catch(function () {}); }
  var recSel = "", recKey = "", recRec = null, recMsg = "";
  function phrasesFor(l) {
    var out = [];
    function add(x) { x = String(x || "").trim(); if (x && out.indexOf(x) < 0) out.push(x); }
    add(L(l.title));
    if (l.rounds) l.rounds.forEach(function (r) { add(L(r.say)); r.c.forEach(function (c) { add(c[1]); }); });
    else if (l.items) l.items.forEach(function (i) { add(L(i.say)); });
    else if (l.type !== "count") sentences(L(l.body)).forEach(add);
    (l.quiz || []).forEach(function (q) { add(L(q.q)); q.opts.forEach(add); });
    return out;
  }
  function commonPhrases() { return [t("great"), t("nice"), t("tGood"), t("howMany"), t("moodQ"), t("moodRH"), t("moodRO"), t("moodRT"), t("moodRS"), t("breakT"), t("starsMsg"), t("tutorHi"), t("safe")]; }
  function voiceView() {
    var h = "<h2>" + esc(t("voiceRec")) + '</h2><div class="card"><p>' + esc(t("voiceIntro")) + "</p><p><b>" + esc(t("urduVoiceDev")) + ":</b> " + esc(urduVoice() ? t("yes") : t("no")) + "<br><b>" + esc(t("hindiVoiceDev")) + ":</b> " + esc(hindiVoice() ? t("yes") : t("no")) + "</p>";
    h += '<p><button class="btn alt" data-act="vtest">' + esc(t("vtest")) + "</button></p>" + voiceDiag();
    h += '<div class="card"><p>' + Object.keys(voiceBank).length + " " + esc(t("clipsHave")) + '</p><button class="btn alt" data-act="expClips">' + esc(t("expClips")) + '</button><label>' + esc(t("impClips")) + '<input id="vimp" type="file" accept="application/json,.json"></label>' + (expText ? "<p class=\"small\">" + esc(t("expHelp")) + '</p><textarea readonly rows="4" onfocus="this.select()">' + esc(expText) + "</textarea>" : "") + "</div>";
    h += "<p>" + esc(t("recLang")) + ": <b>" + (LANG() === "ur" ? "اردو" : "English") + "</b></p>";
    h += '<label>' + esc(t("recWhich")) + '<select id="recsel"><option value="">' + esc(t("notsel")) + '</option><option value="__common"' + (recSel === "__common" ? " selected" : "") + ">" + esc(t("commonP")) + "</option>";
    D.lessons.forEach(function (l) { h += '<option value="' + esc(l.id) + '"' + (recSel === l.id ? " selected" : "") + ">" + esc(L(l.title)) + " (" + (l.min === 0 ? "KG" : l.min) + ")</option>"; });
    h += '</select></label><p id="recmsg" class="small" aria-live="polite">' + esc(recMsg) + "</p></div>";
    if (recSel) {
      var list = recSel === "__common" ? commonPhrases() : (function () { var l = lessonById(recSel); return l ? phrasesFor(l) : []; })();
      list.forEach(function (tx, i) {
        var k = vkey(tx), has = !!voiceBank[k], on = recKey === k;
        h += '<div class="card"><p dir="auto">' + esc(tx) + '</p><div class="actions">' +
          '<button class="bigbtn' + (on ? "" : " alt") + '" data-act="recToggle" data-arg="' + i + '">' + esc(on ? t("recStop") : t("recStart")) + "</button>" +
          (has ? '<button class="bigbtn alt" data-act="recPlay" data-arg="' + i + '">' + svg("speaker", 26) + '</button><button class="bigbtn alt" data-act="recDel" data-arg="' + i + '">' + esc(t("delete")) + "</button>" : "") +
          '</div><p class="small">' + esc(has ? t("recDone") : t("recNone")) + "</p></div>";
      });
    }
    return h;
  }
  function voiceDiag() {
    var vs = []; try { vs = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; } catch (e) {}
    var inFrame = false; try { inFrame = window.self !== window.top; } catch (e) { inFrame = true; }
    var h = '<div class="card small"><b>' + esc(t("diag")) + "</b><br>" + esc(t("hasSynth")) + ": " + esc(("speechSynthesis" in window) ? t("yes") : t("no")) + "<br>" + esc(t("inFrame")) + ": " + esc(inFrame ? t("yes") : t("no")) + "<br>" + esc(t("voicesFound")) + ": " + vs.length;
    if (vs.length) h += "<br>" + esc(vs.slice(0, 14).map(function (v) { return v.name + " (" + v.lang + ")"; }).join("; "));
    if (vState.tried) h += "<br>" + esc(t("lastTry")) + ": " + esc(vState.lang) + " · " + esc(t("started")) + ": " + esc(vState.started ? t("yes") : t("no")) + (vState.err ? " · " + esc(t("errLbl")) + ": " + esc(vState.err) : "");
    else h += "<br>" + esc(t("noTry"));
    return h + "</div>";
  }
  var expText = "";
  function exportClips() {
    var data = JSON.stringify(voiceBank), blob = new Blob([data], { type: "application/json" }), url = URL.createObjectURL(blob), l = document.createElement("a");
    l.href = url; l.download = "iqra-voice-recordings.json"; document.body.appendChild(l); l.click(); document.body.removeChild(l);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    expText = data; render();
  }
  function importClips(file) {
    var fr = new FileReader();
    fr.onload = function () {
      try {
        var obj = JSON.parse(fr.result), n = 0, ps = [];
        Object.keys(obj).forEach(function (k) { if (typeof obj[k] === "string" && obj[k].indexOf("data:audio") === 0) { ps.push(saveClip(k, obj[k])); n++; } });
        Promise.all(ps).then(function () { recMsg = n + " " + t("clipsImported"); render(); });
      } catch (e) { recMsg = t("clipsBad"); render(); }
    };
    fr.readAsText(file);
  }
  function recPhrase(i) {
    var list = recSel === "__common" ? commonPhrases() : (function () { var l = lessonById(recSel); return l ? phrasesFor(l) : []; })();
    return list[Number(i)];
  }
  function recToggle(i) {
    var tx = recPhrase(i); if (!tx) return;
    if (recRec) { try { recRec.stop(); } catch (e) {} return; }
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || typeof MediaRecorder === "undefined") { recMsg = t("recNoMic"); render(); return; }
    var k = vkey(tx);
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      var chunks = [], mr = new MediaRecorder(stream); recRec = mr; recKey = k; recMsg = t("recGo"); render();
      mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = function () {
        stream.getTracks().forEach(function (x) { x.stop(); });
        var blob = new Blob(chunks, { type: mr.mimeType || "audio/webm" }), fr = new FileReader();
        fr.onload = function () { saveClip(k, fr.result).then(function () { recRec = null; recKey = ""; recMsg = t("recSaved"); render(); }); };
        fr.readAsDataURL(blob);
      };
      mr.start();
      setTimeout(function () { if (recRec === mr && mr.state === "recording") mr.stop(); }, 15000);
    }).catch(function () { recRec = null; recKey = ""; recMsg = t("recNoMic"); render(); });
  }
  function sentences(s) { return (String(s).match(/[^.۔?!]+[.۔?!]*/g) || [String(s)]).map(function (x) { return x.trim(); }).filter(Boolean); }
  function curLesson() { return D.lessons.filter(function (x) { return x.id === openLesson; })[0]; }
  // ================= study first: games and tests unlock after the unit's lesson is read =================
  var pathTest = null;
  var GATE = {"pp-m-colours": ["s-kg-math-u1"], "pp-m-size": ["s-kg-math-u2"], "pp-m-find15": ["s-kg-math-u3"], "pp-m-count15": ["s-kg-math-u3"], "pp-m-back5": ["s-kg-math-u3"], "pp-m-shapes": ["s-kg-math-u3", "s-kg-math-u4"], "pp-m-hardsoft": ["s-kg-math-u4"], "pp-m-find610": ["s-kg-math-u4"], "pp-m-count610": ["s-kg-math-u4"], "pp-m-days": ["s-kg-math-u8"], "pp-m-ten": ["s-kg-math-u4"], "pp-m-oddeven": ["s-kg-math-u6"], "pp-m-between": ["s-kg-math-u7"], "pp-m-morelss": ["s-kg-math-u7", "s-kg-math-u8"], "pp-m-add": ["s-kg-math-u8"], "pp-m-sub": ["s-kg-math-u8"], "pp-m-money": ["s-kg-math-u8"], "pp-m-position": ["s-kg-math-u8"], "pp-m-ordinal": ["s-kg-math-u8"], "pp-m-daynight": ["s-kg-math-u8"], "pp-m-time": ["s-kg-math-u8"], "pp-u-pics1": ["s-kg-q1"], "pp-u-pics2": ["s-kg-q1"], "pp-u-pics3": ["s-kg-q1"], "pp-u-pics4": ["s-kg-q1"], "pp-u-pics5": ["s-kg-q1"], "pp-u-order": ["s-kg-q1"], "pp-u-feel": ["s-kg-u4"], "pp-u-plural": ["s-kg-u4"], "pp-e-pics1": ["s-kg-e2"], "pp-e-pics2": ["s-kg-e3", "s-kg-e4"], "pp-e-case": ["s-kg-e2", "s-kg-e3", "s-kg-e4"], "pp-e-order": ["s-kg-e2", "s-kg-e3", "s-kg-e4", "s-kg-e5"], "pp-e-vowel": ["s-kg-e6"], "pp-e-hotcold": ["s-kg-e1"], "pp-e-seasons": ["s-kg-e1"], "pp-e-polite": ["s-kg-e1"], "pp-e-pics3": ["s-kg-e2", "s-kg-e3"], "pp-e-pics4": ["s-kg-e3", "s-kg-e4"], "pp-e-pics5": ["s-kg-e4", "s-kg-e5"], "pp-e-pics6": ["s-kg-e5"], "pp-e-body": ["s-kg-e2"], "pp-e-days": ["s-kg-e2"], "pp-e-prof": ["s-kg-e4"], "pp-e-living": ["s-kg-e3"], "pp-e-food": ["s-kg-e3"], "pp-e-natural": ["s-kg-e4"], "pp-e-citizen": ["s-kg-e4"], "pp-u-manners": ["s-kg-u2"], "pp-u-numbers": ["s-kg-q6"], "pp-u-join": ["s-kg-q2"], "pp-u-marks": ["s-kg-q3"], "c1-m-count": ["s-c1-math-u1"], "c1-m-order": ["s-c1-math-u1"], "c1-m-add": ["s-c1-math-u2"], "c1-m-sub": ["s-c1-math-u2"], "c1-m-money": ["s-c1-math-u4"], "c1-m-time": ["s-c1-math-u5"], "c1-m-days": ["s-c1-math-u5"], "c1-m-shapes": ["s-c1-math-u6"], "c1-m-measure": ["s-c1-math-u3"], "c1-e-letters": ["s-c1-eng-u1"], "c1-e-family": ["s-c1-eng-u2"], "c1-e-jobs": ["s-c1-eng-u3"], "c1-e-plurals": ["s-c1-eng-u10"], "c1-e-seasons": ["s-c1-eng-u8"], "c1-e-animals": ["s-c1-eng-u11"], "c1-e-food": ["s-c1-eng-u6"], "c1-i-quran": ["s-c1-isl-u1"], "c1-i-prayer": ["s-c1-isl-u2"], "c1-i-manners": ["s-c1-isl-u3", "s-c1-isl-u4"], "c1-g-senses": ["s-c1-gk-u2"], "c1-g-clean": ["s-c1-gk-u3"], "c1-g-traffic": ["s-c1-gk-u11"], "c1-g-transport": ["s-c1-gk-u10"], "c1-g-pakistan": ["s-c1-gk-u8"], "c1-g-worship": ["s-c1-gk-u7"], "c1-g-nature": ["s-c1-gk-u13", "s-c1-gk-u14"], "c1-et-books": ["s-c1-ethics-u1"], "c1-et-places": ["s-c1-ethics-u1"], "c1-et-values": ["s-c1-ethics-u2"], "c1-q-harakat": ["s-c1-taj-u2"], "c1-q-signs": ["s-c1-taj-u4", "s-c1-taj-u5"], "c1-u-letters": ["s-c1-urdu-u1"], "c1-u-grammar": ["s-c1-urdu-u4", "s-c1-urdu-u5"], "c1-u-lessons": ["s-c1-urdu-u2", "s-c1-urdu-u3", "s-c1-urdu-u7", "s-c1-urdu-u8"]};
  function notStudy(l) { return l.type !== "study" && !missingStudy(l.id); }
  function studiedOK(id) { return !!(state.studied && state.studied[id]); }
  function needsOf(id) { if (gnum(state.grade) === 0) return []; if (GATE[id]) return GATE[id]; if (/^t-(kg|c1)-/.test(id)) { var sid = "s" + id.slice(1); return lessonById(sid) ? [sid] : []; } return []; }
  function unitsFor(sid) { var n = gnum(state.grade); if (n === 0) return []; return D.lessons.filter(function (l) { return l.study && l.subject === sid && n >= l.min && n <= l.max; }); }
  function testOfStudy(sid) { return resById("t" + sid.slice(1)); }
  function testPassed(sid) { var x = testOfStudy(sid); if (!x) return true; var sc = (state.resScore || {})[x.id]; return !!(sc && sc.t && sc.best / sc.t >= 0.6); }
  function unitDone(l) { return studiedOK(l.id) && testPassed(l.id); }
  function currentUnit(sid) { var us = unitsFor(sid), i; for (i = 0; i < us.length; i++) if (!unitDone(us[i])) return us[i]; return null; }
  function unitLocked(l) { if (ADMIN || isStaff()) return false; var us = unitsFor(l.subject), c = currentUnit(l.subject); return !!c && us.indexOf(l) > us.indexOf(c); }
  function missingStudy(id) {
    if (ADMIN || isStaff()) return null;
    var n = needsOf(id), i, l, c;
    for (i = 0; i < n.length; i++) { l = lessonById(n[i]); if (!l) continue; if (unitLocked(l)) { c = currentUnit(l.subject); return c ? c.id : n[i]; } if (!studiedOK(n[i])) return n[i]; }
    return null;
  }
  function lockText() { return LANG() === "ur" ? "پہلے سبق پڑھیں" : "Read the lesson first"; }
  function pathCard(us, gu) {
    var ur = LANG() === "ur", dn = us.filter(unitDone).length, cu = currentUnit(us[0].subject), h = '<section class="card pathcard"><div class="pathtop"><b>' + esc(ur ? "میرا سفر" : "My journey") + "</b><span>" + dn + " / " + us.length + '</span></div><div class="pbar"><i style="width:' + Math.round(100 * dn / us.length) + '%"></i></div>';
    if (!cu) h += '<p class="bigtext small center">' + esc(ur ? "شاباش! آپ نے سارے سبق مکمل کر لیے۔" : "Well done! You finished every lesson.") + "</p>";
    else {
      var rd = studiedOK(cu.id), te = testOfStudy(cu.id), ttl = L(cu.title).replace(/^(Read first: |پہلے پڑھیں: )/, "");
      h += '<p class="pathnow">' + esc((ur ? "سبق " : "Lesson ") + (us.indexOf(cu) + 1)) + '</p><h3 class="pathttl">' + esc(ttl) + "</h3>";
      h += '<button type="button" class="pstep' + (rd ? " ok" : " go") + '" data-act="openLesson" data-arg="' + esc(cu.id) + '"><i>1</i><span>' + esc(ur ? "📖 سبق پڑھیں" : "📖 Read the lesson") + (partsOf(cu).length > 1 && !rd ? ' <small>' + esc(partLabel(cu)) + "</small>" : "") + "</span><em>" + svg(rd ? "check" : "next", 24) + "</em></button>";
      var gl = gu[cu.id] || [];
      if (gl.length) h += '<button type="button" class="pstep' + (rd ? " go" : " lock") + '"' + (rd ? ' data-act="openLesson" data-arg="' + esc(gl[0].id) + '"' : " disabled") + "><i>2</i><span>" + esc(ur ? "🎮 کھیل کر مشق کریں" : "🎮 Practise with games") + " (" + gl.length + ")</span><em>" + (rd ? svg("next", 24) : "🔒") + "</em></button>";
      else h += '<div class="pstep ok"><i>2</i><span>' + esc(ur ? "🎮 اس سبق کے کھیل جلد آئیں گے — ٹیسٹ دیں" : "🎮 Games coming soon — go to the test") + "</span></div>";
      if (rd && gl.length > 1) gl.slice(1).forEach(function (g) { h += gameCard(g); });
      if (te) {
        var sc = (state.resScore || {})[te.id];
        h += '<button type="button" class="pstep' + (rd ? " go" : " lock") + '"' + (rd ? ' data-act="pathTest" data-arg="' + esc(te.id) + '"' : " disabled") + "><i>3</i><span>" + esc(ur ? "📝 سبق کا ٹیسٹ" : "📝 Lesson test") + (sc ? " · " + sc.best + "/" + sc.t : "") + "</span><em>" + (rd ? svg("next", 24) : "🔒") + "</em></button>";
        h += '<p class="small center">' + esc(ur ? "اگلا سبق تب کھلے گا جب ٹیسٹ میں کم از کم 60٪ نمبر آئیں۔" : "The next lesson opens when you score at least 60% in the test.") + "</p>";
      }
    }
    h += '<details class="roadmap"><summary>' + esc(ur ? "تمام اسباق" : "All lessons") + "</summary>";
    us.forEach(function (u, i) {
      var d = unitDone(u), isCur = cu && u === cu;
      h += '<button type="button" class="ktile wide studytile' + (d ? " done" : "") + (!d && !isCur ? " lockedt" : "") + '"' + (d || isCur ? ' data-act="openLesson" data-arg="' + esc(u.id) + '"' : " disabled") + ">" + "<span>" + (i + 1) + ". " + esc(L(u.title).replace(/^(Read first: |پہلے پڑھیں: )/, "")) + "</span><em>" + (d ? svg("check", 24) : isCur ? svg("next", 24) : "🔒") + "</em></button>";
    });
    return h + "</details></section>";
  }
  function pathTestPage() {
    var x = resById(pathTest);
    if (!x) { pathTest = null; return ""; }
    return '<button class="link" data-act="pathBack">‹ ' + esc(t("back")) + '</button><section class="card pathcard"><h3 class="pathttl">' + esc(x.d.title) + "</h3>" + resTestCard(x) + "</section>";
  }
  function withReader(cb) {
    if (window.IQReader) return cb();
    var sc = document.createElement("script"); sc.src = "lib/reader.js"; sc.onload = cb; sc.onerror = function () { window.open(sc.dataset.fallback || "#", "_blank"); }; document.head.appendChild(sc);
  }
  function bookRtl(u) { return /urdu|islamiat|gk|ethics|tajweedi|qaida/i.test(u); }
  function bookToc(u) {
    var arr = [{ t: LANG() === "ur" ? "شروع" : "Start", p: 1 }];
    D.lessons.filter(function (x) { return x.study && x.book === u && x.bpage; }).sort(function (a, b) { return a.bpage - b.bpage; }).forEach(function (x) { arr.push({ t: L(x.title).replace(/^(Read first: |پہلے پڑھیں: )/, ""), p: x.bpage }); });
    return arr;
  }
  function partsOf(l) {
    if (!l || !l.bpage || !l.bend) return [];
    var len = l.bend - l.bpage + 1, n = len > 12 ? Math.ceil(len / 10) : 1, sz = Math.ceil(len / n), r = [], i, a;
    for (i = 0; i < n; i++) { a = l.bpage + i * sz; r.push({ a: a, b: Math.min(l.bend, a + sz - 1) }); }
    return r;
  }
  function partNow(l) { var ps = partsOf(l), k = Math.min((state.partsDone || {})[l.id] || 0, Math.max(0, ps.length - 1)); return { ps: ps, k: k, p: ps[k] }; }
  function partLabel(l) { var q = partNow(l), ur = LANG() === "ur"; if (!q.p) return ""; return (q.ps.length > 1 ? (ur ? "حصہ " : "Part ") + (q.k + 1) + "/" + q.ps.length + " · " : "") + (ur ? "صفحہ " : "Pages ") + q.p.a + "–" + q.p.b; }
  function markStudied(id) { state.studied = state.studied || {}; state.studied[id] = true; save(); }
  function readBookAct(arg) {
    var kind = arg.split(":")[0], id = arg.slice(kind.length + 1), ur = LANG() === "ur", o, l, x, u;
    if (kind === "res") { x = resById(id); if (!x) return; u = safeUrl((x.d.src || {}).url); if (!u) return; o = { url: u, title: x.d.title, rtl: bookRtl(u), toc: bookToc(u), lang: LANG(), textMode: true }; }
    else {
      l = lessonById(id); if (!l) return; u = kind === "notes" ? l.notes : l.book;
      o = { url: u, title: L(l.title).replace(/^(Read first: |پہلے پڑھیں: )/, ""), rtl: bookRtl(u), toc: kind === "notes" ? [] : bookToc(u), lang: LANG() };
      if (kind === "study") {
        var q = partNow(l), last = q.k >= q.ps.length - 1;
        o.page = q.p.a; o.end = q.p.b; o.resume = false;
        if (!last) o.doneLabel = ur ? "اگلا حصہ ›" : "Next part ›";
        o.onProgress = function (mx) { if (last && l.bend && mx >= l.bend && !(state.bookSeen && state.bookSeen[id])) { state.bookSeen = state.bookSeen || {}; state.bookSeen[id] = true; save(); } };
        o.onDone = function () {
          if (!last) { state.partsDone = state.partsDone || {}; state.partsDone[id] = q.k + 1; save(); render(); setTimeout(function () { readBookAct(arg); }, 30); return; }
          markStudied(id); finishActivity(); openLesson = null; render(); window.scrollTo(0, 0); if (autoVoice()) speak(t("great"));
        };
      }
    }
    o.speak = function (tx) { speak(tx, true); };
    withReader(function () { window.IQReader.open(o); });
  }

  // ================= editorial reading layout (shared by chapter and study lessons) =================
  var RD_TXT = {
    min: ["دقیقہ", "min read"], pts: ["نکات", "points"], pages: ["کتاب کے صفحے", "Book pages"], lesson: ["سبق", "Lesson"], inbook: ["کتاب میں", "In your book"], think: ["سوچیں اور بتائیں", "Think and tell"], finish: ["مکمل کریں", "Finish"], key: ["اہم باتیں", "Key points"], toc: ["اس سبق میں", "In this lesson"], prev: ["پچھلا سبق", "Previous lesson"], next: ["اگلا سبق", "Next lesson"], listen: ["سنیں", "Listen"], donemsg: ["شاباش! یہ سبق مکمل ہو گیا۔", "Well done! This lesson is complete."], locked: ["پہلے موجودہ سبق مکمل کریں", "Finish the current lesson first"]
  };
  function rdt(k) { return RD_TXT[k][LANG() === "ur" ? 0 : 1]; }
  function readMin(txt) { var w = String(txt).trim().split(/\s+/).length, m = Math.max(1, Math.round(w / 70)); return m; }
  function reflectQs() {
    return LANG() === "ur"
      ? ["اس سبق کی کون سی بات آپ کو سب سے اچھی لگی؟", "اس سبق کی ایک بات اپنے گھر والوں کو سنائیں۔", "کیا آپ کو اپنے ارد گرد اس سبق کی کوئی مثال نظر آتی ہے؟"]
      : ["Which idea in this lesson did you like the most?", "Tell someone at home one thing you learned.", "Can you find an example of this lesson around you?"];
  }
  function lessonOrder(l) {
    if (l.study) return unitsFor(l.subject);
    var n = gnum(state.grade);
    return D.lessons.filter(function (x) { return !x.study && !x.type && x.subject === l.subject && n >= x.min && n <= x.max; });
  }
  function rdSec(id, title, inner, cls) { return '<section class="rd2-sec ' + (cls || "") + '" id="rd2-' + id + '" aria-labelledby="rd2h-' + id + '"><h2 id="rd2h-' + id + '">' + esc(title) + "</h2>" + inner + "</section>"; }
  function readShell(l, o) {
    var ur = LANG() === "ur", sj = D.subjects.filter(function (x) { return x.id === l.subject; })[0], title = L(l.title).replace(/^(Read first: |پہلے پڑھیں: )/, ""), body = L(l.body), m = l.meta || {};
    var sub = m.textbook || m.chapter || "", pts = sentences(body).length;
    var h = '<article class="rd2" id="rd2root" lang="' + (ur ? "ur" : "en") + '" dir="' + (ur ? "rtl" : "ltr") + '"><div class="rd2-prog" aria-hidden="true"><i></i></div>';
    h += '<div class="rd2-hero"><span class="rd2-cat">' + picon(l.subject) + "<span>" + esc(sj ? L(sj) : "") + '</span></span><h1 class="rd2-title">' + esc(title) + "</h1>" + (sub ? '<p class="rd2-sub">' + esc(String(sub).split(" · ")[ur ? 1 : 0] || sub) + "</p>" : "");
    h += '<div class="rd2-meta"><span>⏱ ' + readMin(body) + " " + esc(rdt("min")) + "</span><span>" + pts + " " + esc(rdt("pts")) + "</span>" + (l.bpage ? "<span>📖 " + esc(rdt("pages")) + " " + l.bpage + "–" + l.bend + "</span>" : "") + "</span></div>";
    h += '<button type="button" class="rd2-listen" data-act="speak" data-arg="' + esc(body) + '">' + svg("speaker", 24) + " " + esc(rdt("listen")) + "</button></div>";
    var toc = [["read", rdt("lesson")]]; if (o.book) toc.push(["book", rdt("inbook")]); toc.push(["think", rdt("think")], ["finish", rdt("finish")]);
    h += '<div class="rd2-toc" role="navigation" aria-label="' + esc(rdt("toc")) + '">' + toc.map(function (x) { return '<button type="button" data-act="rdJump" data-arg="rd2-' + x[0] + '">' + esc(x[1]) + "</button>"; }).join("") + "</div>";
    h += rdSec("read", rdt("lesson"), bodyBlocks(body, true));
    if (l.takeaways && l.takeaways.length) h += rdSec("key", rdt("key"), "<ul>" + l.takeaways.map(function (x) { return "<li>" + esc(L(x)) + "</li>"; }).join("") + "</ul>", "rd2-key");
    if (o.book) h += rdSec("book", rdt("inbook"), o.book);
    h += rdSec("think", rdt("think"), '<ol class="rd2-q">' + reflectQs().map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>");
    h += rdSec("finish", rdt("finish"), o.finish, "rd2-done");
    var ord = lessonOrder(l), i = ord.indexOf(l), pv = i > 0 ? ord[i - 1] : null, nx = i > -1 && i < ord.length - 1 ? ord[i + 1] : null;
    function nb(x, cls, lab) { var lk = x && l.study && unitLocked(x); return '<button type="button" class="' + cls + '"' + (x && !lk ? ' data-act="openLesson" data-arg="' + esc(x.id) + '"' : " disabled") + "><small>" + esc(lk ? rdt("locked") : lab) + "</small><span>" + (x ? esc(L(x.title).replace(/^(Read first: |پہلے پڑھیں: )/, "")) : "—") + "</span></button>"; }
    h += '<div class="rd2-pn" role="navigation" aria-label="' + esc(rdt("lesson")) + '">' + nb(pv, "pv", "‹ " + rdt("prev")) + nb(nx, "nx", rdt("next") + " ›") + "</div></article>";
    return h;
  }
  function rdProgress() {
    var r = document.getElementById("rd2root"); if (!r) return; var b = r.querySelector(".rd2-prog i"); if (!b) return;
    var d = document.documentElement, mx = Math.max(1, d.scrollHeight - window.innerHeight); b.style.width = Math.min(100, Math.round(100 * (window.pageYOffset || d.scrollTop) / mx)) + "%";
  }
  window.addEventListener("scroll", rdProgress, { passive: true }); window.addEventListener("resize", rdProgress);
  function studyView(l) {
    var ur = LANG() === "ur", done = studiedOK(l.id);
    var needBook = !!(l.book && l.bpage && !done && !(state.bookSeen && state.bookSeen[l.id]) && !(ADMIN || isStaff()));
    var bk = "";
    if (l.book) bk += '<p class="small">' + esc(ur ? "پہلے اپنی کتاب میں یہ صفحے پڑھیں۔ پھر کھیل اور ٹیسٹ کھلیں گے۔" : "Read these pages in your book first. Then the games and the test will open.") + '</p><div class="rd2-acts"><button type="button" class="bigbtn' + (needBook ? "" : " alt") + '" data-act="readBook" data-arg="study:' + esc(l.id) + '">' + esc((ur ? "📖 کتاب میں پڑھیں" : "📖 Read in the book") + (partLabel(l) ? " (" + partLabel(l) + ")" : "")) + "</button>" +
      (l.notes ? '<button type="button" class="bigbtn alt" data-act="readBook" data-arg="notes:' + esc(l.id) + '">' + esc(ur ? "📝 نوٹس" : "📝 Notes") + "</button>" : "") + "</div>";
    var fin = (done ? '<p class="okmsg">✓ ' + esc(rdt("donemsg")) + "</p>" : "") +
      '<div class="rd2-acts"><button type="button" class="bigbtn"' + (needBook ? " disabled" : "") + ' data-act="studyDone" data-arg="' + esc(l.id) + '">' + svg("check", 30) + " " + esc(done ? (ur ? "دوبارہ پڑھ لیا" : "Read again") : (ur ? "میں نے پڑھ لیا" : "I have read it")) + "</button></div>" +
      (needBook ? '<p class="small">' + esc(ur ? "پہلے کتاب کے صفحے آخر تک پڑھیں۔ پھر یہ بٹن کھلے گا۔" : "First read the book pages up to the end. Then this button will open.") + "</p>" : "");
    return readShell(l, { book: bk, finish: fin });
  }
  function lessonById(id) { return D.lessons.filter(function (x) { return x.id === id; })[0]; }

  // ================= pictures: icons, mascot, faces, apples =================
  var P = {
    dot: '<circle cx="24" cy="24" r="14"/>',
    urdu: '<text x="24" y="35" font-size="30" text-anchor="middle" fill="currentColor" stroke="none" font-family="Noto Nastaliq Urdu,serif">ب</text>',
    english: '<text x="24" y="33" font-size="24" font-weight="800" text-anchor="middle" fill="currentColor" stroke="none" font-family="Baloo 2,Nunito,sans-serif">Aa</text>',
    math: '<path d="M8 16h14M15 9v14M28 14h12M28 22h12M10 36h12M30 32l10 10M40 32l-10 10"/>',
    science: '<path d="M19 8h10M21 8v14L11 38a3 3 0 0 0 3 5h20a3 3 0 0 0 3-5L27 22V8"/><path d="M15 32h18"/>',
    physics: '<ellipse cx="24" cy="24" rx="18" ry="7"/><ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(120 24 24)"/><circle cx="24" cy="24" r="3" fill="currentColor"/>',
    chemistry: '<path d="M14 8v26a5 5 0 0 0 10 0V8M12 8h14M30 14v20a4 4 0 0 0 8 0V14M28 14h12"/>',
    biology: '<path d="M10 38C10 18 22 8 40 8c0 20-10 32-30 30z"/><path d="M10 38L28 20"/>',
    computer: '<rect x="6" y="9" width="36" height="24" rx="3"/><path d="M18 41h12M24 33v8"/>',
    pakstudies: '<path d="M30 8a16 16 0 1 0 0 32 13 13 0 1 1 0-32z"/><path d="M37 19l1.500 4 4.500.4-3.400 3 1 4.400L37 28.400l-3.600 2.400 1-4.400-3.400-3 4.500-.4z"/>',
    social: '<circle cx="24" cy="24" r="16"/><path d="M8 24h32M24 8c-8 9-8 23 0 32M24 8c8 9 8 23 0 32"/>',
    ethics: '<path d="M24 41S9 32 9 20a8.500 8.500 0 0 1 15-5.500A8.500 8.500 0 0 1 39 20c0 12-15 21-15 21z"/>',
    quran: '<path d="M24 14c-4-3-9-4-15-3v26c6-1 11 0 15 3 4-3 9-4 15-3V11c-6-1-11 0-15 3z"/><path d="M24 14v26"/>',
    islamiat: '<path d="M32 10a16 16 0 1 0 0 28 13 13 0 1 1 0-28z"/>',
    gk: '<path d="M18 33v-3c-5-3-7-8-5-13a11 11 0 0 1 22 0c2 5 0 10-5 13v3z"/><path d="M19 39h10M21 43h6"/>',
    arts: '<path d="M24 8C14 8 7 15 7 24s7 16 15 16c3 0 3-3 2-5s0-5 3-5h6c5 0 8-3 8-7 0-7-7-15-17-15z"/><circle cx="16" cy="22" r="2"/><circle cx="23" cy="16" r="2"/><circle cx="31" cy="18" r="2"/>',
    pe: '<circle cx="24" cy="24" r="16"/><path d="M24 17l6 4-2 7h-8l-2-7z"/><path d="M24 17V8M30 21l9-3M28 28l5 8M20 28l-5 8M18 21l-9-3"/>',
    finlit: '<circle cx="24" cy="24" r="16"/><text x="24" y="30" font-size="14" font-weight="800" text-anchor="middle" fill="currentColor" stroke="none" font-family="Nunito,sans-serif">Rs</text>',
    digilit: '<rect x="14" y="6" width="20" height="36" rx="4"/><path d="M21 36h6"/>',
    comm: '<path d="M8 10h32v22H22l-9 8v-8H8z"/>',
    env: '<path d="M24 42V26M14 42h20"/><circle cx="24" cy="18" r="10"/>',
    book: '<path d="M8 10c6-3 11-3 16 0 5-3 10-3 16 0v28c-6-3-11-3-16 0-5-3-10-3-16 0z"/><path d="M24 10v28"/>',
    lib: '<path d="M9 8h8v30H9zM19 12h8v26h-8z"/><path d="M30 38l3-28 8 2-3 27z"/><path d="M6 42h36"/>',
    syl: '<rect x="11" y="6" width="26" height="36" rx="4"/><path d="M17 16h14M17 24h14M17 32h8"/>',
    home: '<path d="M7 24L24 8l17 16M12 20v20h24V20"/>',
    flame: '<path d="M24 5c2 9 13 13 13 25a13 13 0 0 1-26 0c0-6 4-10 7-14 1 4 3 5 4 6 1-6 0-11 2-17z"/>',
    check: '<path d="M10 25l9 9 19-20"/>',
    heart: '<path d="M24 41S7 30 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 12-17 23-17 23z"/>',
    owl: '<path d="M10 22c0-5 2-9 6-11l-1-7 8 5 2 0 8-5-1 7c4 2 6 6 6 11 0 8-6 14-14 14S10 30 10 22z"/><circle cx="19" cy="24" r="1.800" fill="currentColor"/><circle cx="29" cy="24" r="1.800" fill="currentColor"/><path d="M22 29h4l-2 2.500zM24 31.500q-2 3-5 2M24 31.500q2 3 5 2"/>',
    star: '<path d="M24 6l5.500 11.500 12.500 1.800-9 8.800 2.200 12.400L24 34.700l-11.200 5.800 2.200-12.400-9-8.800 12.500-1.800z"/>',
    lock: '<rect x="10" y="21" width="28" height="20" rx="4"/><path d="M16 21v-6a8 8 0 0 1 16 0v6"/>',
    speaker: '<path d="M8 20h8l10-8v24l-10-8H8z"/><path d="M32 18c3 3 3 9 0 12M37 13c6 6 6 16 0 22"/>',
    signout: '<path d="M20 8H10v32h10"/><path d="M18 24h22M32 15l9 9-9 9"/>',
    mute: '<path d="M8 20h8l10-8v24l-10-8H8z"/><path d="M32 19l10 10M42 19l-10 10"/>',
    next: '<path d="M10 24h26M26 12l12 12-12 12"/>',
    prev: '<path d="M38 24H12M22 12L10 24l12 12"/>'
  };
  var SC = { urdu: "#ffd8a8", english: "#c7e6ff", math: "#ffc2b9", science: "#c8f0cf", physics: "#d9d3ff", chemistry: "#ffd1dc", biology: "#bff0d4", computer: "#cfe3ff", pakstudies: "#cdeccf", social: "#c6ecf5", islamiat: "#d8f0c0", ethics: "#ffd6e0", quran: "#d9f2d0", gk: "#fff0a6", arts: "#ffd0e6", pe: "#ffd3b3", finlit: "#e1f0b8", digilit: "#d3e0ff", comm: "#ffe0c2", env: "#c9f0c1" };
  var svgCache = {};
  function svg(name, size) { var ck = name + "|" + size; return svgCache[ck] || (svgCache[ck] = svgBuild(name, size)); }
  function svgBuild(name, size) {
    if (name === "owl" && window.IQRA_ORB) return '<img class="owlogo" alt="" width="' + size + '" height="' + size + '" src="' + window.IQRA_ORB + '">';
    return '<svg viewBox="0 0 48 48" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + (P[name] || P.dot) + "</svg>";
  }
  function picon(id, big) { return '<span class="picon' + (big ? " big" : "") + '" style="background:' + (SC[id] || "#d7efe0") + '">' + svg(id, big ? 96 : 56) + "</span>"; }
  function starSvg(size) { return '<svg viewBox="0 0 48 48" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false"><path d="M24 5l5.800 12 13.200 1.900-9.600 9.300 2.300 13.100L24 35.200l-11.700 6.100 2.300-13.100L5 18.900 18.200 17z" fill="#ffc933" stroke="#c98a00" stroke-width="2.500" stroke-linejoin="round"/></svg>'; }
  function starRow(n, size) { var h = '<div class="starrow">'; for (var i = 0; i < n; i++) h += starSvg(size); return h + "</div>"; }
  var mascotN = 0;
  // Original IQRA cat mascot: ginger fur, cream muzzle, green collar with a gold bell.
  // The IQRA logo is the mascot everywhere. A small badge keeps the mood (think, cheer, sleepy).
  function mascot(mood, size) {
    if (!window.IQRA_ORB) return catMascot(mood, size);
    var m = mood || "happy";
    var bd = m === "think" ? '<span class="mbadge">?</span>' : m === "sleepy" ? '<span class="mbadge">z</span>' : m === "cheer" ? '<span class="mbadge">' + starSvg(Math.max(14, Math.round(size * 0.26))) + "</span>" : "";
    return '<span class="mlogo m-' + m + '" style="width:' + size + "px;height:" + size + 'px"><img alt="" width="' + size + '" height="' + size + '" src="' + window.IQRA_ORB + '">' + bd + "</span>";
  }
  function catMascot(mood, size) {
    var m = mood || "happy", id = "ct" + (++mascotN), ex = [46, 74], ey = 54, look = m === "think" ? [3, -3] : [0, 0];
    var eyes = "";
    if (m === "sleepy") eyes = '<path d="M37 55q9 8 18 0M65 55q9 8 18 0" stroke="#3b2210" stroke-width="3.500" fill="none" stroke-linecap="round"/>';
    else if (m === "cheer") eyes = '<path d="M37 57q9-11 18 0M65 57q9-11 18 0" stroke="#3b2210" stroke-width="3.800" fill="none" stroke-linecap="round"/>';
    else ex.forEach(function (x) {
      var X = x + look[0], Y = ey + look[1];
      eyes += '<ellipse cx="' + x + '" cy="' + ey + '" rx="10" ry="10.500" fill="#fffdf6"/><circle cx="' + X + '" cy="' + Y + '" r="7" fill="#3f9d5b"/><ellipse cx="' + X + '" cy="' + Y + '" rx="2.800" ry="5.600" fill="#0b1612"/>' +
        '<circle cx="' + (X + 2.600) + '" cy="' + (Y - 3) + '" r="2.100" fill="#fff"/>';
    });
    var mouth = m === "cheer" ? '<path d="M52 68q8 10 16 0z" fill="#8c3b2b" stroke="#6b2a1f" stroke-width="1.500" stroke-linejoin="round"/>'
      : m === "sleepy" ? '<path d="M60 66v2M60 68q-3 3-6 1M60 68q3 3 6 1" stroke="#7a4a22" stroke-width="2" fill="none" stroke-linecap="round"/>'
      : '<path d="M60 66v3M60 69q-4 5-9 1M60 69q4 5 9 1" stroke="#7a4a22" stroke-width="2.200" fill="none" stroke-linecap="round"/>';
    var paws = m === "cheer"
      ? '<ellipse cx="25" cy="72" rx="7" ry="13" fill="#e9923a" transform="rotate(-18 25 72)"/><ellipse cx="95" cy="72" rx="7" ry="13" fill="#e9923a" transform="rotate(18 95 72)"/><circle cx="21" cy="62" r="5" fill="#e6f6f4"/><circle cx="99" cy="62" r="5" fill="#e6f6f4"/>'
      : '<ellipse cx="42" cy="112" rx="10" ry="6" fill="#e6f6f4"/><ellipse cx="78" cy="112" rx="10" ry="6" fill="#e6f6f4"/>';
    var extra = "";
    if (m === "think") extra = '<circle cx="103" cy="24" r="13" fill="#f4fbfa" stroke="#a6e9db" stroke-width="2"/><text x="103" y="31" font-size="19" font-weight="800" text-anchor="middle" fill="#076c6e" font-family="Inter,sans-serif">?</text>';
    if (m === "cheer") extra = '<path d="M12 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2zM106 14l1.600 4 4 1.600-4 1.600-1.600 4-1.600-4-4-1.600 4-1.600z" fill="#d3f6ee"/>';
    if (m === "sleepy") extra = '<text x="98" y="26" font-size="15" font-weight="800" fill="#a6e9db" font-family="Inter,sans-serif">z</text><text x="106" y="15" font-size="11" font-weight="800" fill="#a6e9db" font-family="Inter,sans-serif">z</text>';
    return '<svg viewBox="0 0 120 120" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false">' +
      '<defs><linearGradient id="' + id + 'f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6b25f"/><stop offset="1" stop-color="#e08a33"/></linearGradient></defs>' +
      '<ellipse cx="60" cy="118" rx="30" ry="2.800" fill="#000" opacity=".16"/>' +
      '<path d="M86 104C110 106 114 82 102 72" stroke="#e9923a" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M103 75l-2 4" stroke="#e6f6f4" stroke-width="9" stroke-linecap="round"/>' +
      '<ellipse cx="60" cy="92" rx="30" ry="25" fill="url(#' + id + 'f)"/><ellipse cx="60" cy="98" rx="17" ry="16" fill="#e6f6f4"/>' + paws +
      '<path d="M31 46L29 14l24 17z" fill="#e9923a"/><path d="M89 46l2-32-24 17z" fill="#e9923a"/><path d="M34 38l-1-16 12 9zM86 38l1-16-12 9z" fill="#ffa7b3"/>' +
      '<ellipse cx="60" cy="54" rx="34" ry="28" fill="url(#' + id + 'f)"/>' +
      '<path d="M54 30v8M60 28v10M66 30v8" stroke="#c9741f" stroke-width="3" stroke-linecap="round"/>' +
      '<ellipse cx="60" cy="68" rx="15" ry="10" fill="#e6f6f4"/>' + eyes +
      '<path d="M55 62h10l-5 5.500z" fill="#ff8fa0" stroke="#e0657b" stroke-width="1" stroke-linejoin="round"/>' + mouth +
      '<path d="M40 66L24 62M40 70l-16 5M80 66l16-4M80 70l16 5" stroke="#a0652a" stroke-width="1.600" stroke-linecap="round" opacity=".7"/>' +
      '<circle cx="35" cy="68" r="4.500" fill="#ff9aa2" opacity=".55"/><circle cx="85" cy="68" r="4.500" fill="#ff9aa2" opacity=".55"/>' +
      '<path d="M40 82q20 9 40 0" stroke="#0a7d80" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="60" cy="88" r="4.500" fill="#d3f6ee" stroke="#c9a23a" stroke-width="1.200"/><path d="M58.500 88h3" stroke="#a07a1a" stroke-width="1.200"/>' + extra + "</svg>";
  }
  function face(kind, size) {
    var mouth = { happy: "M14 30q10 10 20 0", ok: "M16 32h16", tired: "M18 34q6-3 12 0", sad: "M14 36q10-9 20 0" }[kind];
    var bg = { happy: "#ffc2b9", ok: "#c7e6ff", tired: "#e0d4ff", sad: "#cfe3f0" }[kind];
    var eyes = kind === "tired" ? '<path d="M13 21h8M27 21h8" stroke="#2b2118" stroke-width="3" stroke-linecap="round"/>' : '<circle cx="18" cy="21" r="3" fill="#2b2118"/><circle cx="30" cy="21" r="3" fill="#2b2118"/>';
    return '<svg viewBox="0 0 48 48" width="' + size + '" height="' + size + '" aria-hidden="true" focusable="false"><circle cx="24" cy="24" r="22" fill="' + bg + '" stroke="#2b2118" stroke-width="2.500"/>' + eyes + '<path d="' + mouth + '" fill="none" stroke="#2b2118" stroke-width="3" stroke-linecap="round"/></svg>';
  }
  function apple(n) {
    return '<span class="apple"><svg viewBox="0 0 40 40" width="58" height="58" aria-hidden="true" focusable="false"><circle cx="20" cy="24" r="13" fill="#e5484d"/><path d="M20 11c0-4 2-6 5-7" stroke="#5a3d1e" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="27" cy="9" rx="5" ry="3" fill="#4caf50" transform="rotate(-25 27 9)"/><circle cx="14" cy="21" r="3" fill="#fff" opacity=".35"/></svg>' + (n ? "<b>" + n + "</b>" : "") + "</span>";
  }
  function brandMark(size) {
    if (window.IQRA_ORB) return '<img class="brand-logo" alt="" width="' + size + '" height="' + size + '" src="' + window.IQRA_ORB + '">';
    return mascot("happy", size);
  }
  function bubbleHero(mood, text, size) {
    return '<div class="hero">' + mascot(mood, size || (band() === "early" ? 110 : 92)) + '<div class="bubble">' + esc(text) +
      ' <button class="chip lightchip" data-act="speak" data-arg="' + esc(text) + '" aria-label="' + esc(t("listen")) + '">' + svg("speaker", 24) + "</button></div></div>";
  }
  function numWord(k) { var en = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"], ur = ["صفر", "ایک", "دو", "تین", "چار", "پانچ", "چھ", "سات", "آٹھ", "نو"]; return (LANG() === "ur" ? ur : en)[k] || String(k); }

  // ================= child home, subjects, lessons =================
  function homeHero() {
    var kid = kidUI(), nm = state.name ? " " + state.name : "";
    var st = streakInfo(), ms = missionList(), done = missionDoneIds();
    var next = ms.filter(function (l) { return done.indexOf(l.id) < 0; })[0];
    var line = kid && sess.moodMsg ? sess.moodMsg : (kid && LANG() === "ur") ? t("moodRH") : t("greetA") + nm + (kid ? "! " + t("greetB") : "");
    var h = '<section class="hero3"><div class="hero3-main"><div class="wordmark">IQRA<span lang="ur" dir="rtl">اقرا</span></div><h2>' + esc(t("heroH")) + "</h2><p>" + esc(line) + '</p><div class="hero3-cta">';
    if (next) h += '<button class="bigbtn" data-act="openLesson" data-arg="' + next.id + '">' + svg("star", 28) + " " + esc(t("heroGo")) + "</button>";
    else if (ms.length) h += '<span class="hero3-done">' + svg("check", 26) + " " + esc(t("missionDone")) + "</span>";
    h += '<button class="bigbtn alt" data-act="toSubjects">' + esc(t("heroBrowse")) + "</button>";
    if (kid) h += '<button class="chip lightchip sq" data-act="speak" data-arg="' + esc(line) + '" aria-label="' + esc(t("listen")) + '">' + svg("speaker", 26) + "</button>";
    h += '</div><div class="hero3-stats"><span class="stat">' + svg("book", 22) + esc(gradeLabel(state.grade)) + '</span><span class="stat flame">' + svg("flame", 22) + "<b>" + st.n + "</b> " + esc(t("streakN")) + '</span><span class="stat">' + starSvg(22) + "<b>" + state.stars + "</b></span></div></div>";
    h += '<div class="hero3-art" aria-hidden="true"><img class="logo-orb" alt="" src="' + (window.IQRA_ORB || "") + '"></div></section>';
    return h;
  }
  function kidHome() {
    if (openLesson && !curLesson()) openLesson = null;
    if (openLesson) return kidLessonView(curLesson());
    if (pathTest) return pathTestPage();
    var name = state.name ? " \u2068" + state.name + "\u2069" : "";
    var greet = sess.moodMsg || (t("greetA") + name + "! " + t("greetB"));
    var subs = subjectsFor(state.grade).filter(function (x) { return !kidUI() || lessonsFor(x.id, state.grade).length || resFor(x.id, state.grade).length || canRes(); });
    if (!subs.length) {
      return homeHero() + staffBarHTML() + announceHTML() + launcherHTML() + uploadCard() + '<div class="card pager"><p class="bigtext">' + esc(t("soon")) + '</p><button class="bigbtn" data-act="go" data-arg="character">' + svg("heart", 30) + " " + esc(t("stories")) + "</button></div>";
    }
    var cur = curSubject && subs.some(function (x) { return x.id === curSubject; }) ? curSubject : subs[0].id;
    var h = (gnum(state.grade) === 0 ? "" : kidBanner(greet)) + (gnum(state.grade) === 0 && kgSec ? "" : staffBarHTML()) + announceHTML();
    if (gnum(state.grade) === 0) return h + kgHome();
    if (subs.length > 1) {
      h += '<div class="ksubpills" role="tablist">';
      subs.forEach(function (x) { h += '<button type="button" role="tab" aria-selected="' + (x.id === cur ? "true" : "false") + '" class="ksp' + (x.id === cur ? " on" : "") + '" data-act="sub" data-arg="' + x.id + '">' + picon(x.id) + "<span>" + esc(L(x)) + "</span></button>"; });
      h += "</div>";
    }
    var s = D.subjects.filter(function (x) { return x.id === cur; })[0];
    var KGMIN = gnum(state.grade) === 0;
    if (!KGMIN) h += kidSubjBanner(s);
    var lsAll = lessonsFor(cur, state.grade), gm = "", ot = "", gu = {}, path = unitsFor(cur), kgTiles = "", kgList = [];
    lsAll.forEach(function (l) {
      if (l.type === "study") return;
      if (gnum(state.grade) === 0) { kgList.push(l); return; }
      if (l.type === "game") { var nds = needsOf(l.id); if (nds.length && path.length) nds.forEach(function (nd) { (gu[nd] = gu[nd] || []).push(l); }); else gm += gameCard(l); }
      else ot += '<button class="ktile wide" data-act="openLesson" data-arg="' + l.id + '">' + picon(l.subject) + "<span>" + esc(L(l.title)) + "</span>" + (kidUI() ? "" : " " + badge(l)) + "</button>";
    });
    h += path.length ? pathCard(path, gu) : "";
    if (!KGMIN) h += missionCard();
    if (kgList.length) h += kgPath(cur, kgList);
    if (KGMIN) return h + (ot ? '<div class="kgrid">' + ot + "</div>" : "") + (canRes() || ADMIN ? resHub(cur, state.grade) : "");
    var more = (gm ? '<h3 class="subhd">' + esc(LANG() === "ur" ? "کھیلیں اور سیکھیں" : "Play and learn") + "</h3>" + gm : "") + ot;
    if (more) h += '<details class="morebox"><summary>' + esc(LANG() === "ur" ? "🎮 مزید کھیل اور سرگرمیاں" : "🎮 More games and activities") + "</summary>" + more + "</details>";
    h += path.length ? '<details class="morebox"><summary>' + esc(LANG() === "ur" ? "📚 کتابیں، نوٹس اور ٹیسٹ" : "📚 Books, notes and tests") + "</summary>" + resHub(cur, state.grade) + "</details>" : resHub(cur, state.grade);
    if (!kidUI()) { h += syllabusCard(cur); if (!lsAll.length) h += '<p class="card">' + esc(t("nolesson")) + "</p>"; }
    h += launcherHTML();
    return h + uploadCard();
  }

  var KG_ORDER = {
    urdu: "u-letters-0 u-words-0 t-ur-0 pp-u-pics1 pp-u-pics2 pp-u-pics3 pp-u-pics4 pp-u-pics5 pp-u-order u-animals-0 u-fruits-0 u-veg-0 u-things-0 u-group-0 u-odd-0 u-colour-0 u-sound-0 u-use-0 pp-u-numbers pp-u-feel pp-u-plural pp-u-manners pp-u-join pp-u-marks",
    english: "e-sounds-0 pp-e-pics1 pp-e-pics2 pp-e-pics3 pp-e-pics4 pp-e-pics5 pp-e-pics6 e-words-0 t-en-0 t-shape-0 pp-e-order pp-e-case e-animals-0 e-fruits-0 e-veg-0 e-things-0 e-group-0 e-odd-0 e-colour-0 e-sound-0 e-use-0 pp-e-vowel pp-e-body pp-e-days pp-e-hotcold pp-e-seasons pp-e-polite pp-e-prof pp-e-living pp-e-food pp-e-natural pp-e-citizen",
    math: "pp-m-colours pp-m-size m-count-1 pp-m-find15 pp-m-count15 m-after-0 m-before-0 m-missing-0 pp-m-back5 pp-m-shapes pp-m-hardsoft pp-m-find610 pp-m-count610 m-cnt10-0 m-bigger-0 m-pattern-0 pp-m-ten pp-m-between pp-m-morelss pp-m-oddeven pp-m-add m-double-0 pp-m-sub m-takeaway-0 pp-m-money pp-m-position pp-m-ordinal pp-m-daynight pp-m-days pp-m-time"
  };
  // KG: one task at a time; finish it and the next one comes
  function kgPath(sid, list) {
    var ord = (KG_ORDER[sid] || "").split(" "), done = state.kgdone || [], skip = state.kgskip || [];
    var arr = list.slice().sort(function (a, b) { var x = ord.indexOf(a.id), y = ord.indexOf(b.id); return (x < 0 ? 999 : x) - (y < 0 ? 999 : y); });
    var open = arr.filter(function (l) { return done.indexOf(l.id) < 0; }), pend = open.filter(function (l) { return skip.indexOf(l.id) < 0; });
    var cur = pend[0] || open[0], h = '<div class="kgdots">';
    arr.forEach(function (l) { h += '<i class="' + (done.indexOf(l.id) > -1 ? "on" : cur && l.id === cur.id ? "now" : "") + '"></i>'; });
    h += "</div>";
    if (!cur) return h + '<div class="kgdone"><span>🌟</span><b>' + esc(LANG() === "ur" ? "شاباش! سب کھیل مکمل" : "Well done! All finished") + '</b><button type="button" class="kgskip" data-act="kgReset" data-arg="' + esc(sid) + '">↻</button></div>';
    h += '<div class="kgone">' + gameTile(cur) + "</div>";
    var ci = arr.indexOf(cur), pv = null, ur = LANG() === "ur";
    for (var q = ci - 1; q >= 0; q--) { if (done.indexOf(arr[q].id) > -1 || skip.indexOf(arr[q].id) > -1) { pv = arr[q]; break; } }
    h += '<div class="kgnav">';
    if (pv) h += '<button type="button" class="kgskip wide" data-act="kgPrev" data-arg="' + esc(pv.id) + '" aria-label="previous">' + (ur ? "▶ " : "◀ ") + esc(ur ? "پچھلا" : "Back") + "</button>";
    if (open.length > 1) h += '<button type="button" class="kgskip wide" data-act="kgSkip" data-arg="' + esc(cur.id) + '" aria-label="next">' + esc(ur ? "اگلا" : "Next") + (ur ? " ◀" : " ▶") + "</button>";
    return h + "</div>";
  }
  // KG home: parents or children pick a section; "Today's Play" mixes everything
  var kgSec = null;
  var KG_SECS = [
    { id: "letters", icon: "🐪", t: { en: "Urdu Letters", ur: "اردو حروف" }, ids: "u-letters-0 u-words-0 t-ur-0 pp-u-pics1 pp-u-pics2 pp-u-pics3 pp-u-pics4 pp-u-pics5 pp-u-order pp-u-join pp-u-marks" },
    { id: "abc", icon: "🔤", t: { en: "ABC", ur: "اے بی سی" }, ids: "e-sounds-0 pp-e-pics1 pp-e-pics2 pp-e-pics3 pp-e-pics4 pp-e-pics5 pp-e-pics6 e-words-0 t-en-0 pp-e-order pp-e-case pp-e-vowel" },
    { id: "animals", icon: "img:animals_cat", t: { en: "Animals", ur: "جانور" }, ids: "u-hear-0 e-hear-0 u-animals-0 e-animals-0 u-sound-0 e-sound-0" },
    { id: "fruits", icon: "img:fruits_apple", t: { en: "Fruits", ur: "پھل" }, ids: "u-fruits-0 e-fruits-0" },
    { id: "veg", icon: "img:veg_carrot", t: { en: "Vegetables", ur: "سبزیاں" }, ids: "u-veg-0 e-veg-0" },
    { id: "things", icon: "img:things_ball", t: { en: "Things", ur: "چیزیں" }, ids: "u-things-0 e-things-0 u-use-0 e-use-0" },
    { id: "colours", icon: "🌈", t: { en: "Colours", ur: "رنگ" }, ids: "pp-m-colours u-colour-0 e-colour-0" },
    { id: "numbers", icon: "🔢", t: { en: "Counting and Maths", ur: "گنتی اور حساب" }, ids: "m-count-1 pp-m-find15 pp-m-count15 m-after-0 m-before-0 m-missing-0 pp-m-back5 pp-m-find610 pp-m-count610 m-cnt10-0 m-bigger-0 pp-m-ten pp-m-between pp-m-morelss pp-m-oddeven pp-m-add m-double-0 pp-m-sub m-takeaway-0 pp-u-numbers pp-m-money pp-m-ordinal" },
    { id: "shapes", icon: "🔺", t: { en: "Shapes and Size", ur: "شکلیں اور سائز" }, ids: "pp-m-shapes t-shape-0 pp-m-size pp-m-hardsoft pp-m-position m-pattern-0" },
    { id: "think", icon: "🧩", t: { en: "Think and Pick", ur: "سوچو اور چنو" }, ids: "u-group-0 e-group-0 u-odd-0 e-odd-0" },
    { id: "world", icon: "🌍", t: { en: "My World", ur: "میری دنیا" }, ids: "pp-u-feel pp-u-manners pp-e-polite pp-u-plural pp-e-body pp-e-days pp-m-days pp-m-daynight pp-m-time pp-e-hotcold pp-e-seasons pp-e-prof pp-e-living pp-e-food pp-e-natural pp-e-citizen" }
  ];
  function kgAll() {
    var out = [];
    D.subjects.forEach(function (sb) { lessonsFor(sb.id, state.grade).forEach(function (l) { if (l.type !== "study" && l.id !== "kg-mix" && out.indexOf(l) < 0) out.push(l); }); });
    return out;
  }
  function kgMix() {
    var l = lessonById("kg-mix"), src = lessonById("u-animals-0");
    if (!l) { l = { id: "kg-mix", subject: "urdu", min: 0, max: 0, topic: "mix", type: "game", meta: src ? src.meta : {}, title: { en: "Today's Play", ur: "آج کا کھیل" }, body: { en: "Play and learn.", ur: "کھیلیں اور سیکھیں۔" }, rounds: [], quiz: [] }; D.lessons.push(l); }
    var picks = ["u-animals-0", "u-fruits-0", "u-veg-0", "u-things-0", "u-colour-0", "u-sound-0", "u-use-0", "m-cnt10-0", "m-after-0", "m-bigger-0", "m-pattern-0", "e-sounds-0"], rs = [];
    picks.forEach(function (id) { var x = lessonById(id); if (x && x.rounds && x.rounds.length) rs.push(x.rounds[Math.floor(Math.random() * x.rounds.length)]); });
    l.rounds = shuffle(rs).slice(0, 10);
    return l;
  }
  function kgSections() {
    var all = kgAll(), used = {}, secs = [];
    KG_SECS.forEach(function (sec) {
      KG_ORDER[sec.id] = sec.ids;
      var ids = sec.ids.split(" "), list = all.filter(function (l) { return ids.indexOf(l.id) > -1; });
      list.forEach(function (l) { used[l.id] = 1; });
      if (list.length) secs.push({ sec: sec, list: list });
    });
    var rest = all.filter(function (l) { return !used[l.id]; });
    if (rest.length) { var more = { id: "more", icon: "🎮", t: { en: "More Games", ur: "مزید کھیل" }, ids: rest.map(function (l) { return l.id; }).join(" ") }; KG_ORDER.more = more.ids; secs.push({ sec: more, list: rest }); }
    return secs;
  }
  function kgHome() {
    var secs = kgSections(), done = state.kgdone || [], ur = LANG() === "ur", h = "";
    var cur = kgSec && secs.filter(function (x) { return x.sec.id === kgSec; })[0];
    if (cur) {
      var credit = cur.sec.id === "animals" ? '<p class="kgcredit" dir="ltr">Animal sounds: Secretlondon (Mudchute City Farm), CC-BY-SA 3.0; others CC0. Via OpenGameArt.org</p>' : "";
      return '<div class="kgbar"><button type="button" class="kgback" data-act="kgBack" aria-label="' + (ur ? "واپس" : "Back") + '"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false" style="' + (ur ? "" : "transform:scaleX(-1)") + '"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button><span class="kgpic sm" aria-hidden="true">' + emoOrImg(cur.sec.icon) + "</span><b>" + esc(ur ? cur.sec.t.ur : cur.sec.t.en) + "</b></div>" + kgPath(cur.sec.id, cur.list) + credit;
    }
    kgSec = null;
    var mix = kgMix();
    h += '<button type="button" class="kgmix" data-act="openLesson" data-arg="kg-mix"><span class="kgpic" aria-hidden="true">🎲</span><b>' + esc(ur ? "آج کا کھیل" : "Today's Play") + "</b><em>" + esc(ur ? "سب کچھ ملا کر" : "A bit of everything") + "</em></button>";
    h += '<h3 class="subhd">' + esc(ur ? "کیا سیکھنا ہے؟" : "What shall we learn?") + '</h3><div class="kgrid">';
    secs.forEach(function (x) {
      var n = x.list.filter(function (l) { return done.indexOf(l.id) > -1; }).length;
      h += '<button type="button" class="kgtile kgsec" data-act="kgSec" data-arg="' + esc(x.sec.id) + '"><span class="kgpic" aria-hidden="true">' + emoOrImg(x.sec.icon) + "</span><b>" + esc(ur ? x.sec.t.ur : x.sec.t.en) + '</b><small>' + n + "/" + x.list.length + "</small></button>";
    });
    return h + "</div>";
  }
  function gameIcon(l) {
    var r = l.rounds && l.rounds[0], c = r && r.c && r.c.filter(function (x) { return x[2] === 1; })[0];
    return c && c[0] && String(c[0]).trim() ? emoOrImg(c[0]) : l.type === "trace" ? "✏️" : "🎮";
  }
  function gameTile(l) {
    return '<button type="button" class="kgtile" data-act="openLesson" data-arg="' + esc(l.id) + '"><span class="kgpic" aria-hidden="true">' + gameIcon(l) + "</span><b>" + esc(L(l.title)) + "</b></button>";
  }
  function missionCard() {
    var ms = missionList(); if (!ms.length) return "";
    var done = missionDoneIds(), nd = ms.filter(function (l) { return done.indexOf(l.id) > -1; }).length, all = nd === ms.length;
    var st = streakInfo();
    var h = '<section class="mission"><div class="mhead"><h2>' + esc(t("missionT")) + '</h2><button class="chip lightchip sq" data-act="speak" data-arg="' + esc(all ? t("missionDone") : t("missionT")) + '" aria-label="' + esc(t("listen")) + '">' + svg("speaker", 24) + '</button><span class="streakchip' + (st.n ? " on" : "") + '">' + svg("flame", 22) + "<b>" + st.n + "</b></span></div>";
    h += '<div class="mdots">';
    ms.forEach(function (l) { h += '<i class="' + (done.indexOf(l.id) > -1 ? "on" : "") + '"></i>'; });
    h += "<span>" + nd + "/" + ms.length + " " + esc(t("missionOf")) + "</span></div>";
    ms.forEach(function (l) {
      var ok = done.indexOf(l.id) > -1;
      h += '<button class="mstep' + (ok ? " ok" : "") + '" data-act="openLesson" data-arg="' + l.id + '">' + picon(l.subject) + "<span>" + esc(L(l.title)) + '</span><em>' + svg(ok ? "check" : "next", 26) + "</em></button>";
    });
    if (all) h += '<p class="mmsg">' + esc(t("missionDone")) + "</p>";
    else if (st.back) h += '<p class="mmsg soft">' + esc(t("streakBack")) + "</p>";
    return h + "</section>";
  }

  function lessonCards(l) { return [{ text: L(l.title), title: true }].concat(sentences(L(l.body)).map(function (x) { return { text: x }; })); }

  function kidLessonView(l) {
    var back = '<button class="link" data-act="closeLesson">‹ ' + esc(t("back")) + "</button>";
    if (l.type === "study") return back + studyView(l);
    if (l.type === "count") return back + countView(l);
    if (l.type === "game") return back + gameView(l);
    if (l.type === "trace") return back + traceView(l);
    if (quizRun) return back + quizRunView(l);
    // Chapter reading page: editorial layout
    var ur0 = LANG() === "ur", fin = '<p class="bigtext small center">' + esc(t("readyQuiz")) + '</p><div class="rd2-acts">' +
      (l.quiz.length ? '<button type="button" class="bigbtn" data-act="startQuiz">' + svg("star", 30) + " " + esc(t("startQuiz")) + "</button>" : '<button type="button" class="bigbtn" data-act="rdComplete" data-arg="' + esc(l.id) + '">' + svg("check", 30) + " " + esc(ur0 ? "سبق مکمل کریں" : "Mark as completed") + "</button>") +
      '<button type="button" class="bigbtn alt" data-act="askHelper" data-arg="' + l.id + '">' + svg("owl", 30) + " " + esc(t("askHelper")) + "</button></div>";
    var ch = readShell(l, { finish: fin });
    return back + ch;
  }

  function quizRunView(l) {
    var r = quizRun;
    if (r.done) {
      var total = l.quiz.length;
      return '<div class="card pager"><div class="center">' + mascot("cheer", 130) + '</div><p class="bigtext">' + esc(t("great")) + "</p>" + starRow(total, 56) +
        '<div class="actions"><button class="bigbtn" data-act="startQuiz">' + esc(t("playAgain")) + '</button><button class="bigbtn alt" data-act="closeLesson">' + esc(t("toLessons")) + "</button></div></div>";
    }
    var q = l.quiz[r.i], mood = r.status === "right" ? "cheer" : r.status === "wrong" ? "think" : "happy";
    var h = '<div class="card pager"><div class="center">' + mascot(mood, 100) + '</div><p class="bigtext">' + esc(L(q.q)) + '</p><button class="bigbtn alt" data-act="speak" data-arg="' + esc(L(q.q)) + '">' + svg("speaker", 30) + " " + esc(t("listen")) + "</button>";
    h += '<div class="dots">' + l.quiz.map(function (x, i) { return '<i class="' + (i <= r.i ? "on" : "") + '"></i>'; }).join("") + "</div>";
    q.opts.forEach(function (o, j) {
      var cls = r.status !== "ask" && r.picked === j ? (r.status === "right" ? " right" : " wrong") : "";
      h += '<div class="optrow"><button class="chip lightchip sq" data-act="speak" data-arg="' + esc(o) + '" aria-label="' + esc(t("listen")) + '">' + svg("speaker", 26) + '</button><button class="optbig' + cls + '" data-act="pick" data-arg="' + j + '"' + (r.status === "right" ? " disabled" : "") + ">" + esc(o) + "</button></div>";
    });
    if (r.status === "wrong") h += '<p class="bigtext small">' + esc(t("nice")) + '</p><div class="actions"><button class="bigbtn" data-act="retry">' + esc(t("tryAgain")) + "</button></div>";
    if (r.status === "right") h += '<p class="bigtext small">' + esc(t("great")) + '</p><div class="actions"><button class="bigbtn" data-act="qnext">' + esc(t("next")) + ' <span class="dir">' + svg("next", 30) + "</span></button></div>";
    return h + "</div>";
  }

  function countView(l) {
    var g = countGame;
    if (!g) return "";
    if (g.done) {
      return '<div class="card pager"><div class="center">' + mascot("cheer", 130) + '</div><p class="bigtext">' + esc(t("great")) + "</p>" + starRow(g.rounds, 56) +
        '<div class="actions"><button class="bigbtn" data-act="countAgain">' + esc(t("playAgain")) + '</button><button class="bigbtn alt" data-act="closeLesson">' + esc(t("toLessons")) + "</button></div></div>";
    }
    var mood = g.status === "right" ? "cheer" : g.status === "wrong" ? "think" : "happy";
    var h = '<div class="card pager"><div class="center">' + mascot(mood, 100) + '</div><p class="bigtext">' + esc(t("howMany")) + '</p><button class="bigbtn alt" data-act="speak" data-arg="' + esc(t("howMany")) + '">' + svg("speaker", 30) + " " + esc(t("listen")) + "</button>";
    h += '<div class="applegrid" role="img" aria-label="' + g.n + '">';
    for (var i = 0; i < g.n; i++) h += apple(g.shown > i ? i + 1 : 0);
    h += "</div>";
    h += '<div class="dots">';
    for (var r = 1; r <= g.rounds; r++) h += '<i class="' + (r <= g.round ? "on" : "") + '"></i>';
    h += '</div><div class="actions">';
    g.opts.forEach(function (o) {
      var cls = g.status !== "ask" && g.picked === o ? (g.status === "right" ? " right" : " wrong") : "";
      h += '<button class="optbig numbtn' + cls + '" data-act="countPick" data-arg="' + o + '"' + (g.status === "right" ? " disabled" : "") + ">" + o + "</button>";
    });
    h += '</div><div class="actions"><button class="bigbtn alt" data-act="countAlong">' + svg("speaker", 28) + " " + esc(t("countAlong")) + "</button></div>";
    if (g.status === "wrong") h += '<p class="bigtext small">' + esc(t("nice")) + '</p><div class="actions"><button class="bigbtn" data-act="countRetry">' + esc(t("tryAgain")) + "</button></div>";
    if (g.status === "right") h += '<p class="bigtext small">' + esc(t("great")) + " " + g.n + '</p><div class="actions"><button class="bigbtn" data-act="countNext">' + esc(t("next")) + ' <span class="dir">' + svg("next", 30) + "</span></button></div>";
    return h + "</div>";
  }

  function shuffle(arr) { var a2 = arr.slice(); for (var i = a2.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a2[i]; a2[i] = a2[j]; a2[j] = x; } return a2; }
  function startGame(l) {
    gameRun = { i: 0, status: "ask", picked: -1, firstTry: true, good: 0, done: false, rounds: shuffle(l.rounds).map(function (r) { return { say: r.say, show: r.show, snd: r.snd, c: shuffle(r.c) }; }) };
  }
  // a picture choice is either an emoji or "img:<set>_<name>" (a cartoon card in img/kg/)
  function emoOrImg(v) { return /^img:[a-z_]+$/.test(v) ? '<img src="img/kg/' + v.slice(4) + '.webp" alt="" width="96" height="96" decoding="async">' : esc(v); }
  var sndEl = null;
  function playSnd(u) { try { if (sndEl) sndEl.pause(); sndEl = new Audio(u); sndEl.play().catch(function () {}); } catch (e) {} }
  function gameView(l) {
    var g = gameRun;
    if (!g) return "";
    if (g.done) {
      return '<div class="card pager"><div class="center">' + mascot("cheer", 130) + '</div><p class="bigtext">' + esc(t("great")) + "</p>" + starRow(g.rounds.length, 52) +
        '<div class="actions"><button class="bigbtn" data-act="gAgain">' + esc(t("playAgain")) + '</button><button class="bigbtn alt" data-act="closeLesson">' + esc(t("toLessons")) + "</button></div></div>";
    }
    var r = g.rounds[g.i], mood = g.status === "right" ? "cheer" : g.status === "wrong" ? "think" : "happy";
    var say = L(r.say);
    var h = '<div class="card pager gv"><div class="center">' + mascot(mood, 96) + "</div>";
    if (r.show) h += '<div class="bigletter" dir="auto">' + esc(r.show) + "</div>";
    if (r.snd) {
      h += '<button type="button" class="sndbtn" data-act="playSnd" data-arg="' + esc(r.snd) + '" aria-label="' + esc(t("listen")) + '">🔊</button>';
      if (g.sndI !== g.i && g.status === "ask") { g.sndI = g.i; setTimeout(function () { playSnd(r.snd); }, 350); }
    }
    h += '<p class="bigtext">' + esc(say) + '</p><button class="bigbtn alt" data-act="speak" data-arg="' + esc(say) + '">' + svg("speaker", 30) + " " + esc(t("listen")) + "</button>";
    h += '<div class="dots">' + g.rounds.map(function (x, i) { return '<i class="' + (i <= g.i ? "on" : "") + '"></i>'; }).join("") + '</div><div class="picchoices">';
    r.c.forEach(function (c, j) {
      var cls = g.status !== "ask" && g.picked === j ? (g.status === "right" ? " right" : " wrong") : "";
      h += '<button class="picbtn' + cls + '" data-act="gPick" data-arg="' + j + '"' + (g.status === "right" ? " disabled" : "") + '><span class="emo" aria-hidden="true">' + emoOrImg(c[0]) + "</span><span>" + esc(c[1]) + "</span></button>";
    });
    h += "</div>";
    if (g.status === "wrong") h += '<p class="bigtext small">' + esc(t("nice")) + '</p><div class="actions"><button class="bigbtn" data-act="gRetry">' + esc(t("tryAgain")) + "</button></div>";
    if (g.status === "right") h += '<p class="bigtext small">' + esc(t("great")) + '</p><div class="actions"><button class="bigbtn" data-act="gNext">' + esc(t("next")) + ' <span class="dir">' + svg("next", 30) + "</span></button></div>";
    return h + "</div>";
  }
  // ================= tracing (pencil control, letters, shapes) =================
  var traceRun = null, tStroke = null, tVis = null, tMsgKey = "";
  function startTrace(l) { traceRun = { i: 0, status: "ask", tries: 0, good: 0, done: false, items: l.items }; tMsgKey = ""; }
  function traceDraw(ctx, item, mode) {
    ctx.save(); ctx.lineJoin = "round"; ctx.lineCap = "round";
    if (item.shape) {
      ctx.lineWidth = mode === 0 ? 14 : mode === 1 ? 26 : 62; ctx.strokeStyle = mode === 0 ? "#cfc6ad" : "#000";
      if (mode === 0) ctx.setLineDash([1, 24]);
      ctx.beginPath();
      if (item.shape === "circle") ctx.arc(150, 150, 95, 0, Math.PI * 2);
      else if (item.shape === "square") ctx.rect(60, 60, 180, 180);
      else if (item.shape === "triangle") { ctx.moveTo(150, 50); ctx.lineTo(250, 240); ctx.lineTo(50, 240); ctx.closePath(); }
      else if (item.shape === "vline") { ctx.moveTo(150, 40); ctx.lineTo(150, 260); }
      else if (item.shape === "hline") { ctx.moveTo(40, 150); ctx.lineTo(260, 150); }
      else if (item.shape === "wave") { ctx.moveTo(20, 150); for (var k = 0; k < 4; k++) ctx.quadraticCurveTo(20 + k * 65 + 32, k % 2 ? 210 : 90, 20 + (k + 1) * 65, 150); }
      ctx.stroke();
    } else {
      var ur = item.lang === "ur";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.font = (ur ? "190px " : "bold 230px ") + '"Baloo 2","Noto Nastaliq Urdu","Nunito",sans-serif';
      var y = ur ? 150 : 160;
      if (mode === 0) { ctx.fillStyle = "#d8cfb6"; ctx.fillText(item.text, 150, y); }
      else if (mode === 1) { ctx.fillStyle = "#000"; ctx.fillText(item.text, 150, y); }
      else { ctx.fillStyle = "#000"; ctx.strokeStyle = "#000"; ctx.lineWidth = 44; ctx.fillText(item.text, 150, y); ctx.strokeText(item.text, 150, y); }
    }
    ctx.restore();
  }
  function paintTrace() {
    if (!tVis || !traceRun || traceRun.done) return;
    var c = tVis.getContext("2d");
    c.clearRect(0, 0, 300, 300); c.fillStyle = "#fbfdfc"; c.fillRect(0, 0, 300, 300);
    traceDraw(c, traceRun.items[traceRun.i], 0);
    c.drawImage(tStroke, 0, 0);
  }
  function traceScore(item) {
    var g1 = document.createElement("canvas"), g2 = document.createElement("canvas"); g1.width = g1.height = g2.width = g2.height = 300;
    traceDraw(g1.getContext("2d"), item, 1); traceDraw(g2.getContext("2d"), item, 2);
    var a1 = g1.getContext("2d").getImageData(0, 0, 300, 300).data, a2 = g2.getContext("2d").getImageData(0, 0, 300, 300).data, s = tStroke.getContext("2d").getImageData(0, 0, 300, 300).data;
    var gp = 0, hit = 0, sp = 0, out = 0;
    for (var i = 3; i < s.length; i += 4) {
      var gl = a1[i] > 128, st = s[i] > 128;
      if (gl) { gp++; if (st) hit++; }
      if (st) { sp++; if (a2[i] <= 128) out++; }
    }
    return { cover: gp ? hit / gp : 0, spill: sp ? out / sp : 1, ink: sp };
  }
  function setupTrace() {
    var cv = root.querySelector("#tcv");
    if (!cv || !traceRun || traceRun.done) { tVis = null; return; }
    tVis = cv; tStroke = document.createElement("canvas"); tStroke.width = tStroke.height = 300;
    var sc = tStroke.getContext("2d"); sc.lineWidth = 26; sc.lineCap = "round"; sc.lineJoin = "round"; sc.strokeStyle = "#e5484d";
    paintTrace();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (tVis === cv) paintTrace(); });
    var drawing = false, last = null;
    function pos(e) { var r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * 300 / r.width, y: (e.clientY - r.top) * 300 / r.height }; }
    cv.addEventListener("pointerdown", function (e) { e.preventDefault(); drawing = true; last = pos(e); try { cv.setPointerCapture(e.pointerId); } catch (x) {} sc.beginPath(); sc.moveTo(last.x, last.y); sc.lineTo(last.x + 0.1, last.y); sc.stroke(); paintTrace(); });
    cv.addEventListener("pointermove", function (e) { if (!drawing) return; e.preventDefault(); var p = pos(e); sc.beginPath(); sc.moveTo(last.x, last.y); sc.lineTo(p.x, p.y); sc.stroke(); last = p; paintTrace(); });
    function up() { drawing = false; }
    cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
    var cb = root.querySelector("#tclear"); if (cb) cb.addEventListener("click", function () { sc.clearRect(0, 0, 300, 300); tMsgKey = ""; var m = root.querySelector("#tmsg"); if (m) m.textContent = ""; paintTrace(); });
    var ck = root.querySelector("#tcheck"); if (ck) ck.addEventListener("click", function () {
      var r = traceRun, sco = traceScore(r.items[r.i]); r.tries++;
      if (sco.ink > 400 && sco.cover >= 0.45 && sco.spill <= 0.55) {
        r.status = "right"; if (r.tries === 1) r.good++; state.stars++; save(); render(); speak(t("tGood")); var tr0 = r, ti0 = r.i; autoNext("tNext", function () { return traceRun === tr0 && tr0.status === "right" && tr0.i === ti0 && !tr0.done && !!curLesson(); });
      } else {
        var key = sco.cover < 0.45 ? "tMore" : "tSlow", m = root.querySelector("#tmsg"); if (m) m.textContent = t(key);
        speak(t(key)); sc.clearRect(0, 0, 300, 300); paintTrace();
      }
    });
  }
  function traceView(l) {
    var r = traceRun;
    if (!r) return "";
    if (r.done) {
      return '<div class="card pager"><div class="center">' + mascot("cheer", 130) + '</div><p class="bigtext">' + esc(t("great")) + "</p>" + starRow(r.items.length, 52) +
        '<div class="actions"><button class="bigbtn" data-act="tAgain">' + esc(t("playAgain")) + '</button><button class="bigbtn alt" data-act="closeLesson">' + esc(t("toLessons")) + "</button></div></div>";
    }
    var it = r.items[r.i], say = L(it.say), mood = r.status === "right" ? "cheer" : "happy";
    var h = '<div class="card pager"><div class="center">' + mascot(mood, 84) + '</div><p class="bigtext">' + esc(say) + '</p><button class="bigbtn alt" data-act="speak" data-arg="' + esc(say) + '">' + svg("speaker", 30) + " " + esc(t("listen")) + "</button>";
    if (r.status === "right") {
      h += '<p class="bigtext small">' + esc(t("tGood")) + "</p>";
    } else {
      h += '<canvas id="tcv" class="tcanvas" width="300" height="300" aria-label="' + esc(say) + '"></canvas><p id="tmsg" class="bigtext small" aria-live="polite"></p>';
      h += '<div class="actions"><button class="bigbtn alt" id="tclear">' + esc(t("tClear")) + '</button><button class="bigbtn" id="tcheck">' + esc(t("tCheck")) + "</button></div>";
      if (r.tries >= 3) h += '<div class="actions"><button class="bigbtn alt" data-act="tNext">' + esc(t("next")) + "</button></div>";
    }
    return h + "</div>";
  }

  function startCount() { countGame = { round: 1, rounds: 3, firstOK: 0, status: "ask", picked: 0, shown: 0, firstTry: true, done: false, n: 1, opts: [] }; newRound(); }
  function newRound() {
    var maxN = gnum(state.grade) === 0 ? 5 : 9, n = 1 + Math.floor(Math.random() * maxN), pool = [];
    for (var k = 1; k <= maxN; k++) if (k !== n) pool.push(k);
    pool.sort(function (a, b) { return Math.abs(a - n) - Math.abs(b - n) || Math.random() - 0.5; });
    var opts = [n, pool[0], pool[1]];
    opts.sort(function () { return Math.random() - 0.5; });
    countGame.n = n; countGame.opts = opts; countGame.status = "ask"; countGame.picked = 0; countGame.shown = 0; countGame.firstTry = true; cgToken++;
  }
  function countAlong() {
    var tok = ++cgToken;
    (function step(k) {
      if (tok !== cgToken || !countGame) return;
      countGame.shown = k; render(); speak(numWord(k), true);
      if (k < countGame.n) setTimeout(function () { step(k + 1); }, 1000);
    })(1);
  }

  // ================= mood, break, stars =================
  function moodView() {
    var h = '<section class="mood3"><div class="mood3-stage">' + bubbleHero("happy", t("moodQ"), 140) + "</div>";
    h += '<div class="faces mood3-faces">';
    ["happy", "ok", "tired"].forEach(function (k) {
      h += '<button class="facebtn m-' + k + '" data-act="mood" data-arg="' + k + '"><span class="faceorb">' + face(k, 96) + "</span><span class=\"facelbl\">" + esc(t("mood" + k.charAt(0).toUpperCase() + k.slice(1))) + "</span></button>";
    });
    return h + '</div><p class="center"><button class="skipbtn" data-act="mood" data-arg="skip">' + esc(t("skip")) + "</button></p></section>";
  }
  function breakView() {
    return bubbleHero("sleepy", t("breakT"), 130) + '<div class="actions"><button class="bigbtn" data-act="endBreak">' + esc(t("ready")) + "</button></div>";
  }
  function starsView() {
    return kidBanner(t("starsMsg")) + '<div class="card pager starscard"><p class="small">' + esc(t("starsHave")) + '</p><div class="starbig">' + starSvg(72) + "<span>" + state.stars + "</span></div>" +
      starRow(Math.min(state.stars, 12), 40) + (state.stars ? "" : '<p class="small">' + esc(LANG() === "ur" ? "کوئی کھیل کھیلیں اور اپنا پہلا ستارہ جیتیں۔" : "Play a game to win your first star.") + "</p>") + '<p class="streakline">' + svg("flame", 26) + " <b>" + streakInfo().n + "</b> " + esc(t("streakN")) + "</p></div>";
  }

  // ================= grown-ups area =================
  function newGate() { return { a: 11 + Math.floor(Math.random() * 9), b: 4 + Math.floor(Math.random() * 6) }; }
  function gateView() {
    gateQ = gateQ || newGate();
    return '<form id="gatef" class="card"><h2>' + esc(t("grownups")) + "</h2><p>" + esc(t("gateQ")) + " <b>" + gateQ.a + " + " + gateQ.b + " = ?</b></p>" +
      '<input id="gans" type="number" inputmode="numeric" autocomplete="off"><button class="btn">' + esc(t("gateGo")) + '</button><p id="gmsg" class="small" aria-live="polite"></p></form>';
  }
  function hubView() {
    var items = ADMIN ? [["addbook", "addbook"], ["voice", "voiceRec"], ["admin", "hubAdmin"], ["pack", "packT"]] : [["progress", "hubProgress"], ["exam", "hubExams"], ["settings", "settings"]].concat(cloud.on ? [] : [["pack", "packLoad"]]);
    if (!ADMIN && isTeacher()) items.unshift(["teacher", "teacherTab"]);
    if (!ADMIN && isStaff()) items.unshift(["staff", "staffTab"]);
    var ICO = {
      addbook: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z"/><path d="M12 8v6M9 11h6"/>',
      voice: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
      admin: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/><path d="M9 12l2 2 4-4"/>',
      pack: '<path d="M4 8l8-4 8 4v8l-8 4-8-4V8z"/><path d="M4 8l8 4 8-4M12 12v8"/>',
      progress: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
      exam: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
      settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
      teacher: '<path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/>',
      staff: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M17 9h4M19 7v4"/>'
    };
    var h = kidBanner(t(ADMIN ? "hubTitleA" : "hubTitle") + (ADMIN ? ". " + t("adminIntro") : "")) + '<div class="hubgrid">';
    items.forEach(function (x) {
      h += '<button class="hubtile" data-nav="' + x[0] + '"><span class="hubico"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICO[x[0]] || ICO.admin) + "</svg></span><b>" + esc(t(x[1])) + "</b></button>";
    });
    h += "</div>";
    return h + (ADMIN ? "" : '<button class="btn" data-act="childview">' + esc(t("childview")) + "</button>");
  }
  // ---- content pack: admin exports, student app loads ----
  var packMsg = "", packText = "";
  function buildPack() { return { app: "iqra-pack", v: 1, created: new Date().toISOString(), version: state.version, books: bookStore, clips: voiceBank, meta: state.meta, maps: adminMaps }; }
  function exportPack() {
    var data = JSON.stringify(buildPack()); packText = data; packMsg = "";
    var done = function () { render(); };
    try {
      if (window.claude && claude.use) {
        claude.use("downloads").then(function (d) { if (d) d.save({ filename: "iqra-content-pack.json", data: data }).catch(function () {}); }).catch(function () {});
      }
    } catch (e) {}
    done();
  }
  function mergePack(p) {
    if (!p || p.app !== "iqra-pack" || p.v !== 1) { packMsg = t("packBad"); return render(); }
    var nb = 0, nc = 0, ps = [];
    bookStore.forEach(function (b) { b.lessons.forEach(function (l) { var i = D.lessons.indexOf(l); if (i > -1) D.lessons.splice(i, 1); }); });
    bookStore = [];
    (p.books || []).forEach(function (b) {
      if (!b || typeof b.id !== "string" || !Array.isArray(b.lessons)) return;
      var ok = b.lessons.filter(function (l) { return l && typeof l.id === "string" && l.title && l.body && Array.isArray(l.quiz) && typeof l.subject === "string"; });
      if (!ok.length) return;
      b.lessons = ok; bookStore.push(b); ok.forEach(function (l) { D.lessons.push(l); }); nb++;
    });
    saveBooks();
    if (cloud.on && isStaff()) bookStore.forEach(cloudPushBook);
    var c = p.clips || {};
    Object.keys(c).forEach(function (k) { if (typeof c[k] === "string" && c[k].indexOf("data:audio") === 0) { ps.push(saveClip(k, c[k])); nc++; } });
    if (p.meta && typeof p.meta === "object") Object.keys(p.meta).forEach(function (k) { if (p.meta[k] && typeof p.meta[k] === "object") state.meta[k] = p.meta[k]; });
    if (typeof p.version === "string" && p.version) state.version = p.version;
    if (Array.isArray(p.maps)) adminMaps = p.maps.slice();
    save();
    Promise.all(ps).then(function () { packMsg = t("packDone") + " " + nb + " " + t("books") + ", " + nc + " " + t("recordings"); render(); });
  }
  function importPackText(txt) { try { mergePack(JSON.parse(txt)); } catch (e) { packMsg = t("packBad"); render(); } }
  function packView() {
    var h = "<h2>" + esc(t(ADMIN ? "packT" : "packLoad")) + '</h2><div class="card"><p>' + esc(t(ADMIN ? "packIntro" : "packIntroS")) + "</p>";
    h += "<p><b>" + bookStore.length + "</b> " + esc(t("books")) + " · <b>" + Object.keys(voiceBank).length + "</b> " + esc(t("recordings")) + "</p>";
    if (ADMIN) h += '<p><button class="btn" data-act="expPack">' + esc(t("packExp")) + "</button></p>" + (packText ? '<p class="small">' + esc(t("expHelp").replace("iqra-voice-recordings.json", "iqra-content-pack.json")) + '</p><textarea readonly rows="4" onfocus="this.select()">' + esc(packText) + "</textarea>" : "");
    h += '<label>' + esc(t("packFile")) + '<input id="pkfile" type="file" accept="application/json,.json"></label><label>' + esc(t("packPaste")) + '<textarea id="pktext" rows="3"></textarea></label><p><button class="btn alt" data-act="packLoadBtn">' + esc(t("packLoadBtn")) + "</button></p>";
    h += '<p id="pkmsg" class="small" aria-live="polite">' + esc(packMsg) + "</p></div>";
    return h;
  }
  function readOptions() {
    var h = "";
    [["auto", "readAuto"], ["none", "readNone"], ["little", "readLittle"], ["full", "readFull"]].forEach(function (x) { h += '<option value="' + x[0] + '"' + ((state.read || "auto") === x[0] ? " selected" : "") + ">" + esc(t(x[1])) + "</option>"; });
    return h;
  }
  function settingsView() {
    return "<h2>" + esc(t("settings")) + '</h2><div class="card"><label>' + esc(t("readq")) + '<select id="sread2">' + readOptions() + "</select></label>" +
      "<p>" + esc(t("autoVoice")) + ': <b>' + esc(state.voice ? t("on") : t("off")) + '</b> <button class="btn alt" data-act="voice">' + esc(t("voice")) + "</button></p>" +
      '<p><button class="btn alt" id="lowb">' + esc(t("lowband")) + ": " + esc(state.low ? t("on") : t("off")) + '</button></p><p><button class="btn alt" id="resetup">' + esc(t("edit")) + '</button></p><p class="note">' + esc(t("settingsNote")) + "</p></div>";
  }

  // ================= helper (tutor) for children =================
  function tutorChips() {
    return '<div class="actions">' + [["explain", "explain"], ["more", "more"], ["read", "readIt"]].map(function (x) { return '<button class="bigbtn alt" data-act="chip" data-arg="' + x[0] + '">' + esc(t(x[1])) + "</button>"; }).join("") + '<button class="bigbtn alt" data-act="help">' + svg("heart", 28) + " " + esc(t("helpMe")) + "</button></div>";
  }
  function tutorChip(kind) {
    var l = lessonById(tutorCtx.lesson);
    if (!l) return;
    var s = sentences(L(l.body)), text, label = t(kind === "read" ? "readIt" : kind);
    if (kind === "explain") { tutorIdx = 0; text = s[0]; }
    else if (kind === "more") { tutorIdx = (tutorIdx + 1) % s.length; text = s[tutorIdx]; }
    else text = L(l.body);
    chat.push({ who: "me", text: label });
    chat.push({ who: "bot", text: text });
    render();
    speak(text, true);
  }
  function kidTutor() {
    var l = lessonById(tutorCtx.lesson);
    if (!l) {
      var h = kidBanner(t("pick1")), n = gnum(state.grade);
      D.subjects.forEach(function (sb) {
        var tl = "";
        D.lessons.forEach(function (x) {
          if (x.subject === sb.id && n >= x.min && n <= x.max) tl += '<button class="ktile" data-act="askHelper" data-arg="' + x.id + '">' + picon(x.subject) + "<span>" + esc(L(x.title)) + "</span></button>";
        });
        if (tl) h += '<details class="tgroup"><summary>' + picon(sb.id) + "<b>" + esc(L(sb)) + '</b></summary><div class="ktiles">' + tl + "</div></details>";
      });
      return h;
    }
    var out = kidBanner(t("tutorHi")) + '<div class="chat" aria-live="polite">';
    chat.forEach(function (m) { out += '<div class="msg ' + m.who + (m.safe ? " warn" : "") + '">' + esc(m.text) + "</div>"; });
    out += "</div>" + tutorChips();
    return out + '<p class="note">' + esc(statusOf(l) === "verified" ? "" : t("pendingNote")) + "</p>";
  }

  // ================= actions (all taps with data-act) =================
  function readSetupLite() { var nm = root.querySelector ? root.querySelector("#sname") : null; if (nm) state.name = nm.value.trim(); }
  var autoTimer = 0;
  function autoNext(name, still) {
    clearTimeout(autoTimer);
    autoTimer = setTimeout(function () { try { if (still()) act(name); } catch (e) {} }, 1500);
  }
  function act(name, arg) {
    if (name.indexOf("res") === 0) { resAct(name, arg); return; }
    if (ef && name !== "upClass" && name !== "upBack") readEF();
    if (libDraft && view === "library") readLibDraft();
    var l, q, ok, g;
    switch (name) {
      case "cat":
        var lvv = D.levels[Number(arg)]; readSetupLite(); state.grade = lvv.min === 0 ? "KG" : String(lvv.min); state.board = state.board; render(); break;
      case "expClips": exportClips(); break;
      case "expPack": exportPack(); break;
      case "packLoadBtn": var pt = root.querySelector("#pktext"); if (pt && pt.value.trim()) importPackText(pt.value); break;
      case "vtest": forceUr = true; speak(UI.ur.great, true); forceUr = false; setTimeout(function () { render(); }, 1800); break;
      case "recToggle": recToggle(arg); break;
      case "recPlay": var rt = recPhrase(arg); if (rt) speak(rt, true); break;
      case "recDel": var rd = recPhrase(arg); if (rd) delClip(vkey(rd)).then(function () { render(); }); break;
      case "toSubjects": var sj = root.querySelector("#subjects"); if (sj && sj.scrollIntoView) sj.scrollIntoView({ behavior: "smooth", block: "start" }); break;
      case "viewAs": cloud.viewAs = arg; if (arg === "student" && (view === "staff" || view === "teacher")) view = "learn"; render(); break;
      case "staffTab": staffTab = arg; render(); break;
      case "teamSet": teamSet(arg); break;
      case "migrate": cloudMigrate(); break;
      case "lecNew": lecMsg = ""; tf = newTF(); render(); break;
      case "lecCancel": tf = null; render(); break;
      case "lecSave": saveLecture(); break;
      case "lecEdit": var le = lecStore.filter(function (x) { return x.id === arg; })[0]; if (le) { tf = { id: le.id, grade: String(le.d.grade), subject: le.d.subject, title: L(le.d.lesson.title), cards: le.d.cards || "", qs: (le.d.qs || newTF().qs), published: !!le.d.published }; lecMsg = ""; render(); } break;
      case "lecToggle": var lt = lecStore.filter(function (x) { return x.id === arg; })[0]; if (lt) { cloud.db.collection("lectures").doc(arg).update({ published: !lt.d.published }).catch(cloudFail); } break;
      case "lecDel": cloud.db.collection("lectures").doc(arg).delete().catch(cloudFail); break;
      case "libCat": libCat = arg; render(); break;
      case "libClear": libQ = ""; libCat = "all"; render(); break;
      case "sylSubj": sylSubj = arg; render(); break;
      case "libDel": if (libArm === arg) { libArm = ""; libDelete(arg); } else libArm = arg; render(); break;
      case "libPrefill": libDraft = newLibDraft(); var bd = D.boards[arg]; libDraft.title = bd ? bd.authority : ""; libOpen = true; render(); break;
      case "efSave": efSave(arg); render(); break;
      case "efBulk": efBulkSave(arg); render(); break;
      case "noteSave": var cnoteEl = root.querySelector("#cnote"); saveClassNote(arg, cnoteEl ? cnoteEl.value : ""); render(); break;
      case "chUp": armedDel = ""; chShift(arg, -1); render(); break;
      case "chDown": armedDel = ""; chShift(arg, 1); render(); break;
      case "chHide": armedDel = ""; chToggleHide(arg); render(); break;
      case "chDel": if (armedDel === arg) { armedDel = ""; chDelete(arg); } else armedDel = arg; render(); break;
      case "delbookArm": if (armedDel === "book:" + arg) { armedDel = ""; act("delbook", arg); return; } armedDel = "book:" + arg; render(); break;
      case "bookMove": armedDel = ""; var mvSel = root.querySelector("#mv-" + arg); if (mvSel) bookMoveTo(arg, mvSel.value); render(); break;
      case "upClass": ef = null; efMsg = ""; upGrade = arg; upSubj = ""; advTab = ""; bookMsg = ""; render(); break;
      case "upBack": ef = null; upGrade = null; bookMsg = ""; render(); break;
      case "advTab": advTab = advTab === arg ? "" : arg; render(); break;
      case "upSubj": upSubj = arg; render(); var uf = root.querySelector("#subhub"); if (uf && uf.scrollIntoView) uf.scrollIntoView({ block: "start" }); break;
      case "bcancel": draft = null; bookMsg = ""; render(); break;
      case "delbook":
        openLesson = null; quizRun = null; gameRun = null; countGame = null;
        bookStore = bookStore.filter(function (b) { if (b.id !== arg) return true; b.lessons.forEach(function (l) { D.lessons = D.lessons.filter(function (x) { return x.id !== l.id; }); delete state.progress[l.id]; delete state.meta[l.id]; }); return false; });
        saveBooks(); save(); cloudDelBook(arg); render(); break;
      case "signout": var so = document.getElementById("iqout"); if (so) so.click(); break;
      case "voice": state.voice = !state.voice; save(); render(); break;
      case "upload": afterGate = "addbook"; gateQ = newGate(); view = adultOK ? "addbook" : "gate"; render(); break;
      case "adult": afterGate = null; gateQ = newGate(); view = adultOK ? "adult" : "gate"; render(); break;
      case "childview": adultOK = false; view = "learn"; render(); break;
      case "go": view = arg; render(); break;
      case "speak": speak(arg, true); break;
      case "home": curSubject = null; openLesson = null; render(); break;
      case "sub": curSubject = arg; render(); if (autoVoice()) speak(L(D.subjects.filter(function (x) { return x.id === arg; })[0])); break;
      case "openLesson":
        var _ll = lessonById(arg), _ms = _ll && _ll.type === "game" ? missingStudy(arg) : (_ll && _ll.study && unitLocked(_ll) ? (currentUnit(_ll.subject) || {}).id : null); if (_ms) arg = _ms;
        view = "learn"; openLesson = arg; lessonStep = 0; quizRun = null; countGame = null; cgToken++;
        l = curLesson(); if (l && l.type === "count") startCount(); if (l && l.type === "trace") startTrace(l); if (l && l.type === "game") { startGame(l); if (autoVoice()) { render(); speak(L(gameRun.rounds[0].say)); break; } }
        render(); if (autoVoice() && l) speak(L(l.title)); break;
      case "studyDone": state.studied = state.studied || {}; state.studied[arg] = true; save(); finishActivity(); openLesson = null; render(); window.scrollTo(0, 0); if (autoVoice()) speak(t("great")); break;
      case "readBook": readBookAct(arg); break;
      case "pathTest": pathTest = arg; resRun = null; render(); window.scrollTo(0, 0); break;
      case "pathBack": pathTest = null; resRun = null; render(); window.scrollTo(0, 0); break;
      case "rdJump": var _je = document.getElementById(arg); if (_je) _je.scrollIntoView({ behavior: window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); break;
      case "rdComplete": finishActivity(); openLesson = null; render(); window.scrollTo(0, 0); if (autoVoice()) speak(t("great")); break;
      case "playSnd": playSnd(arg); break;
      case "kgSec": kgSec = arg; render(); window.scrollTo(0, 0); break;
      case "kgBack": kgSec = null; render(); window.scrollTo(0, 0); break;
      case "kgPrev": state.kgdone = (state.kgdone || []).filter(function (x) { return x !== arg; }); state.kgskip = (state.kgskip || []).filter(function (x) { return x !== arg; }); save(); render(); break;
      case "kgSkip": state.kgskip = (state.kgskip || []).concat([arg]); save(); render(); break;
      case "kgReset": state.kgdone = (state.kgdone || []).filter(function (x) { return !(KG_ORDER[arg] || "").split(" ").some(function (y) { return y === x; }); }); state.kgskip = []; save(); render(); break;
      case "closeLesson": openLesson = null; quizRun = null; countGame = null; gameRun = null; traceRun = null; tVis = null; cgToken++; lessonStep = 0; render(); setTimeout(function () { var m = document.querySelector(".mission .mstep:not(.ok)") || document.querySelector(".mission"); if (m && m.scrollIntoView) m.scrollIntoView({ block: "center", behavior: "smooth" }); }, 60); break;
      case "next": l = curLesson(); if (l) { lessonStep = Math.min(lessonStep + 1, lessonCards(l).length); render(); var cs = lessonCards(l); if (autoVoice() && cs[lessonStep]) speak(cs[lessonStep].text); } break;
      case "prev": l = curLesson(); lessonStep = Math.max(0, lessonStep - 1); render(); if (l && autoVoice()) speak(lessonCards(l)[lessonStep].text); break;
      case "startQuiz":
        l = curLesson(); quizRun = { i: 0, status: "ask", picked: -1, first: [], starred: [], topics: {}, done: false }; render();
        if (l && autoVoice()) speak(L(l.quiz[0].q)); break;
      case "pick":
        l = curLesson(); q = l.quiz[quizRun.i]; ok = Number(arg) === q.a;
        if (quizRun.first[quizRun.i] === undefined) {
          quizRun.first[quizRun.i] = ok;
          var tp = quizRun.topics[q.topic] = quizRun.topics[q.topic] || { c: 0, t: 0 };
          tp.t++; if (ok) tp.c++;
        }
        quizRun.picked = Number(arg); quizRun.status = ok ? "right" : "wrong";
        if (ok && !quizRun.starred[quizRun.i]) { quizRun.starred[quizRun.i] = true; state.stars++; save(); }
        render(); speak(ok ? t("great") : t("nice"));
        if (ok) { var qi0 = quizRun.i, qr0 = quizRun; autoNext("qnext", function () { return quizRun === qr0 && !qr0.done && qr0.status === "right" && qr0.i === qi0 && !!curLesson(); }); }
        break;
      case "retry": quizRun.status = "ask"; quizRun.picked = -1; render(); break;
      case "qnext":
        l = curLesson();
        if (quizRun.i + 1 < l.quiz.length) { quizRun.i++; quizRun.status = "ask"; quizRun.picked = -1; render(); if (autoVoice()) speak(L(l.quiz[quizRun.i].q)); }
        else {
          state.progress[l.id] = { score: quizRun.first.filter(Boolean).length, total: l.quiz.length, topics: quizRun.topics }; save();
          quizRun.done = true; finishActivity(); render(); speak(t("great"));
        }
        break;
      case "countPick":
        g = countGame; ok = Number(arg) === g.n; g.picked = Number(arg);
        if (ok) { if (g.firstTry) g.firstOK++; g.status = "right"; state.stars++; save(); speak(t("great") + " " + numWord(g.n)); }
        else { g.firstTry = false; g.status = "wrong"; speak(t("nice")); }
        render();
        if (ok) { var cr0 = g.round, cg0 = g; autoNext("countNext", function () { return countGame === cg0 && cg0.status === "right" && cg0.round === cr0 && !!curLesson(); }); }
        break;
      case "gPick":
        g = gameRun; var rr = g.rounds[g.i]; ok = !!rr.c[Number(arg)][2]; g.picked = Number(arg);
        if (ok) { if (g.firstTry) g.good++; g.status = "right"; state.stars++; save(); speak(t("great")); }
        else { g.firstTry = false; g.status = "wrong"; speak(t("nice")); }
        render();
        if (ok) { var gi0 = g.i, gg0 = g; autoNext("gNext", function () { return gameRun === gg0 && !gg0.done && gg0.status === "right" && gg0.i === gi0 && !!curLesson(); }); }
        break;
      case "tNext":
        g = traceRun;
        if (g.i + 1 < g.items.length) { g.i++; g.status = "ask"; g.tries = 0; render(); if (autoVoice()) speak(L(g.items[g.i].say)); }
        else {
          l = curLesson(); g.done = true;
          if (l) { state.progress[l.id] = { score: g.good, total: g.items.length, topics: { tracing: { c: g.good, t: g.items.length } } }; save(); }
          finishActivity(); render(); speak(t("great"));
        }
        break;
      case "tAgain": l = curLesson(); startTrace(l); render(); break;
      case "gRetry": gameRun.status = "ask"; gameRun.picked = -1; render(); break;
      case "gNext":
        g = gameRun;
        if (g.i + 1 < g.rounds.length) { g.i++; g.status = "ask"; g.picked = -1; g.firstTry = true; render(); if (autoVoice()) speak(L(g.rounds[g.i].say)); }
        else {
          l = curLesson(); g.done = true;
          if (l) { state.progress[l.id] = { score: g.good, total: g.rounds.length, topics: {} }; state.progress[l.id].topics[l.topic] = { c: g.good, t: g.rounds.length }; save(); }
          finishActivity(); render(); speak(t("great"));
        }
        break;
      case "gAgain": l = curLesson(); startGame(l); render(); if (autoVoice()) speak(L(gameRun.rounds[0].say)); break;
      case "countRetry": countGame.status = "ask"; countGame.picked = 0; render(); break;
      case "countNext":
        g = countGame;
        if (g.round < g.rounds) { g.round++; newRound(); render(); }
        else {
          l = curLesson(); g.done = true;
          if (l) { state.progress[l.id] = { score: g.firstOK, total: g.rounds, topics: { counting: { c: g.firstOK, t: g.rounds } } }; save(); }
          finishActivity(); render();
        }
        break;
      case "countAgain": startCount(); render(); break;
      case "countAlong": countAlong(); break;
      case "mood":
        sess.mood = arg; state.moodDay = today(); save();
        sess.moodMsg = { happy: t("moodRH"), ok: t("moodRO"), tired: t("moodRT"), sad: t("moodRS") }[arg] || "";
        render(); if (sess.moodMsg) speak(sess.moodMsg); break;
      case "endBreak": sess.breakDue = false; render(); break;
      case "askHelper":
        l = lessonById(arg); if (l) { tutorCtx = { subject: l.subject, lesson: l.id }; tutorIdx = 0; chat = []; view = "tutor"; render(); }
        break;
      case "chip": tutorChip(arg); break;
      case "help": chat.push({ who: "bot", text: t("safe"), safe: true }); render(); speak(t("safe"), true); break;
    }
  }

  // ================= add a book (PDF) : read in the browser, nothing leaves the device =================
  var BKEY = "pds-books-v1";
  var bookStore = [], draft = null, bookMsg = "";
  var STOP = /^(the|and|that|with|this|from|have|they|were|there|their|what|when|which|about|into|than|then|them|these|those|will|would|could|should|also|been|your|some|more|such|each)$/i;
  function loadBooks() {
    try { bookStore = JSON.parse(localStorage.getItem(BKEY)) || []; } catch (e) { bookStore = []; }
    seedBooks();
    bookStore.forEach(function (b) { b.lessons.forEach(function (l) { D.lessons.push(l); }); });
  }
  // Built-in textbook packs (typed in from official PDFs). Added once; admin can edit or delete them afterwards.
  var SEEDS = [JSON.parse("{\"id\":\"seed-pctb-isl-1\",\"grade\":\"1\",\"subject\":\"islamiat\",\"name\":\"\u0627\u0633\u0644\u0627\u0645\u06cc\u0627\u062a \u062c\u0645\u0627\u0639\u062a \u0627\u0648\u0651\u0644 \u2014 PCTB \u067e\u0646\u062c\u0627\u0628 2025-26\",\"chapters\":[{\"title\":\"\u062d\u0641\u0638\u0650 \u0642\u0631\u0622\u0646\u0650 \u0645\u062c\u06cc\u062f\",\"page\":1,\"cards\":[\"\u0627\u0633 \u0633\u0628\u0642 \u0645\u06cc\u06ba \u06c1\u0645 \u0633\u0648\u0631\u06c3 \u0627\u0644\u06a9\u0648\u062b\u0631 \u0627\u0648\u0631 \u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635 \u062f\u0631\u0633\u062a \u062a\u0644\u0641\u0638 \u06a9\u06d2 \u0633\u0627\u062a\u06be \u062d\u0641\u0638 \u06a9\u0631\u06cc\u06ba \u06af\u06d2\u06d4\",\"\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0652\u0645\u0650 (\u0627\u0644\u0644\u06c1 \u06a9\u06d2 \u0646\u0627\u0645 \u0633\u06d2 \u0634\u0631\u0648\u0639 \u062c\u0648 \u0628\u0691\u0627 \u0645\u06c1\u0631\u0628\u0627\u0646 \u0646\u06c1\u0627\u06cc\u062a \u0631\u062d\u0645 \u0641\u0631\u0645\u0627\u0646\u06d2 \u0648\u0627\u0644\u0627 \u06c1\u06d2)\u06d4\",\"\u0627\u0650\u0646\u064e\u0651\u0622 \u0627\u064e\u0639\u0652\u0637\u064e\u064a\u0652\u0646\u0670\u0643\u064e \u0627\u0644\u0652\u0643\u064e\u0648\u0652\u062b\u064e\u0631\u064e \u06dd \u0641\u064e\u0635\u064e\u0644\u0650\u0651 \u0644\u0650\u0631\u064e\u0628\u0650\u0651\u0643\u064e \u0648\u064e\u0627\u0646\u0652\u062d\u064e\u0631\u0652 \u06dd \u0627\u0650\u0646\u064e\u0651 \u0634\u064e\u0627\u0646\u0650\u0626\u064e\u0643\u064e \u0647\u064f\u0648\u064e \u0627\u0644\u0652\u0627\u064e\u0628\u0652\u062a\u064e\u0631\u064f \u06dd (\u0633\u0648\u0631\u06c3 \u0627\u0644\u06a9\u0648\u062b\u0631)\u06d4\",\"\u0642\u064f\u0644\u0652 \u0647\u064f\u0648\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f \u0627\u064e\u062d\u064e\u062f\u064c \u06dd \u0627\u064e\u0644\u0644\u0651\u0670\u0647\u064f \u0627\u0644\u0635\u064e\u0651\u0645\u064e\u062f\u064f \u06dd \u0644\u064e\u0645\u0652 \u064a\u064e\u0644\u0650\u062f\u0652 \u0648\u064e\u0644\u064e\u0645\u0652 \u064a\u064f\u0648\u0652\u0644\u064e\u062f\u0652 \u06dd \u0648\u064e\u0644\u064e\u0645\u0652 \u064a\u064e\u0643\u064f\u0646\u0652 \u0644\u064e\u0651\u0647\u0657 \u0643\u064f\u0641\u064f\u0648\u064b\u0627 \u0627\u064e\u062d\u064e\u062f\u064c \u06dd (\u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635)\u06d4\",\"\u06a9\u06cc\u0627 \u0622\u067e \u062c\u0627\u0646\u062a\u06d2 \u06c1\u06cc\u06ba\u061f \u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635 \u062a\u06cc\u0646 \u0645\u0631\u062a\u0628\u06c1 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u0645\u06a9\u0645\u0644 \u0642\u0631\u0622\u0646 \u067e\u0691\u06be\u0646\u06d2 \u06a9\u0627 \u062b\u0648\u0627\u0628 \u0645\u0644\u062a\u0627 \u06c1\u06d2 (\u0633\u0646\u0646 \u0627\u0628\u0648 \u062f\u0627\u0624\u062f\u060c \u062d\u062f\u06cc\u062b: 1461)\u06d4\",\"\u0633\u0631\u06af\u0631\u0645\u06cc: \u062c\u0648 \u0633\u0648\u0631\u062a\u06cc\u06ba \u0622\u067e \u0646\u06d2 \u0633\u06a9\u0648\u0644 \u0645\u06cc\u06ba \u067e\u0691\u06be\u06cc \u06c1\u06cc\u06ba \u0627\u0646\u06be\u06cc\u06ba \u06af\u06be\u0631 \u0645\u06cc\u06ba \u0633\u0646\u0627\u0626\u06cc\u06ba\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u06a9\u0648\u0646 \u0633\u06cc \u062f\u0648 \u0633\u0648\u0631\u062a\u06cc\u06ba \u0627\u0633 \u0633\u0628\u0642 \u0645\u06cc\u06ba \u06cc\u0627\u062f \u06a9\u0631\u0646\u06cc \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u06a9\u0648\u0646 \u0633\u06cc \u062f\u0648 \u0633\u0648\u0631\u062a\u06cc\u06ba \u0627\u0633 \u0633\u0628\u0642 \u0645\u06cc\u06ba \u06cc\u0627\u062f \u06a9\u0631\u0646\u06cc \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0633\u0648\u0631\u06c3 \u0627\u0644\u06a9\u0648\u062b\u0631 \u0627\u0648\u0631 \u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635\",\"\u0633\u0648\u0631\u06c3 \u0627\u0644\u0641\u0627\u062a\u062d\u06c1 \u0627\u0648\u0631 \u0633\u0648\u0631\u06c3 \u0627\u0644\u0646\u0627\u0633\",\"\u0633\u0648\u0631\u06c3 \u0627\u0644\u0641\u06cc\u0644 \u0627\u0648\u0631 \u0633\u0648\u0631\u06c3 \u0627\u0644\u0639\u0635\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635 \u062a\u06cc\u0646 \u0645\u0631\u062a\u0628\u06c1 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u06a9\u06cc\u0627 \u062b\u0648\u0627\u0628 \u0645\u0644\u062a\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635 \u062a\u06cc\u0646 \u0645\u0631\u062a\u0628\u06c1 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u06a9\u06cc\u0627 \u062b\u0648\u0627\u0628 \u0645\u0644\u062a\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0622\u062f\u06be\u06d2 \u0642\u0631\u0622\u0646 \u06a9\u0627\",\"\u0645\u06a9\u0645\u0644 \u0642\u0631\u0622\u0646 \u067e\u0691\u06be\u0646\u06d2 \u06a9\u0627\",\"\u0627\u06cc\u06a9 \u0633\u0648\u0631\u062a \u06a9\u0627\"],\"a\":1,\"topic\":\"chapter\"}]},{\"title\":\"\u062d\u0641\u0638 \u0648 \u062a\u0631\u062c\u0645\u06c1\",\"page\":3,\"cards\":[\"\u06a9\u0644\u0645\u06c1 \u0637\u06cc\u0628\u06c1: \u0644\u064e\u0622 \u0627\u0650\u0644\u0670\u0647\u064e \u0627\u0650\u0644\u064e\u0651\u0627 \u0627\u0644\u0644\u0651\u0670\u0647\u064f \u0645\u064f\u062d\u064e\u0645\u064e\u0651\u062f\u064c \u0631\u064e\u0651\u0633\u064f\u0648\u0652\u0644\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650\u06d4\",\"\u062a\u0631\u062c\u0645\u06c1: \u0627\u0644\u0644\u06c1 \u06a9\u06d2 \u0633\u0648\u0627 \u06a9\u0648\u0626\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u06d2 \u0644\u0627\u0626\u0642 \u0646\u06c1\u06cc\u06ba\u060c \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \ufdfa \u0627\u0644\u0644\u06c1 \u06a9\u06d2 \u0631\u0633\u0648\u0644 \u06c1\u06cc\u06ba\u06d4\",\"\u0627\u0686\u06be\u06cc \u0686\u06cc\u0632 \u062f\u06cc\u06a9\u06be\u06cc\u06ba \u062a\u0648 \u06a9\u06c1\u06cc\u06ba: \u0645\u064e\u0627 \u0634\u064e\u0622\u0621\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f\u06d4 \u0627\u0633 \u06a9\u0627 \u062a\u0631\u062c\u0645\u06c1 \u06c1\u06d2: \u062c\u06cc\u0633\u0627 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0686\u0627\u06c1\u0627\u06d4\",\"\u06a9\u0648\u0626\u06cc \u06a9\u0627\u0645 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06ba \u062a\u0648 \u06a9\u06c1\u06cc\u06ba: \u0627\u0650\u0646\u0652 \u0634\u064e\u0622\u0621\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f\u06d4 \u0627\u0633 \u06a9\u0627 \u062a\u0631\u062c\u0645\u06c1 \u06c1\u06d2: \u0627\u06af\u0631 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0686\u0627\u06c1\u0627 \u062a\u0648\u06d4\",\"\u0645\u062b\u0627\u0644: \u0645\u06cc\u06ba \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0648\u06ba \u06af\u0627\u060c \u0627\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\u06d4 \u06c1\u0645\u0627\u0631\u0627 \u0645\u0644\u06a9 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0628\u06c1\u062a \u067e\u06cc\u0627\u0631\u0627 \u0645\u0644\u06a9 \u06c1\u06d2\u060c \u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u06a9\u0644\u0645\u06c1 \u0637\u06cc\u0628\u06c1 \u06a9\u0627 \u062a\u0631\u062c\u0645\u06c1 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u06a9\u0644\u0645\u06c1 \u0637\u06cc\u0628\u06c1 \u06a9\u0627 \u062a\u0631\u062c\u0645\u06c1 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0627\u0644\u0644\u06c1 \u06a9\u06d2 \u0633\u0648\u0627 \u06a9\u0648\u0626\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u06d2 \u0644\u0627\u0626\u0642 \u0646\u06c1\u06cc\u06ba\u060c \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \ufdfa \u0627\u0644\u0644\u06c1 \u06a9\u06d2 \u0631\u0633\u0648\u0644 \u06c1\u06cc\u06ba\",\"\u0627\u0644\u0644\u06c1 \u0628\u0691\u0627 \u06c1\u06d2\",\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0627\u06cc\u06a9 \u06c1\u06d2\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06a9\u0648\u0626\u06cc \u06a9\u0627\u0645 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06ba \u062a\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u06a9\u0648\u0626\u06cc \u06a9\u0627\u0645 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06ba \u062a\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u0627\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u0627\u0644\u062d\u0645\u062f \u0644\u0644\u06c1\"],\"a\":1,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0686\u06be\u06cc \u0686\u06cc\u0632 \u062f\u06cc\u06a9\u06be\u06cc\u06ba \u062a\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u0686\u06be\u06cc \u0686\u06cc\u0632 \u062f\u06cc\u06a9\u06be\u06cc\u06ba \u062a\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u0627\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u0633\u0628\u062d\u0627\u0646 \u0627\u0644\u0644\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u00ab\u0645\u06cc\u06ba \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0648\u06ba \u06af\u0627\u00bb \u06a9\u06d2 \u0633\u0627\u062a\u06be \u06a9\u0648\u0646 \u0633\u0627 \u06a9\u0644\u0645\u06c1 \u0644\u06af\u0627\u0626\u06cc\u06ba \u06af\u06d2\u061f\",\"ur\":\"\u00ab\u0645\u06cc\u06ba \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0648\u06ba \u06af\u0627\u00bb \u06a9\u06d2 \u0633\u0627\u062a\u06be \u06a9\u0648\u0646 \u0633\u0627 \u06a9\u0644\u0645\u06c1 \u0644\u06af\u0627\u0626\u06cc\u06ba \u06af\u06d2\u061f\"},\"opts\":[\"\u0645\u0627 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u0627\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u062f\u0648\u0646\u0648\u06ba \u063a\u0644\u0637 \u06c1\u06cc\u06ba\"],\"a\":1,\"topic\":\"chapter\"}]},{\"title\":\"\u062d\u062f\u06cc\u062b\u0650 \u0646\u0628\u0648\u06cc\",\"page\":7,\"cards\":[\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u064e\u0644\u0637\u064f\u0651\u0647\u064f\u0648\u0652\u0631\u064f \u0634\u064e\u0637\u0652\u0631\u064f \u0627\u0644\u0652\u0627\u0650\u064a\u0652\u0645\u064e\u0627\u0646\u0650\u06d4\",\"\u062a\u0631\u062c\u0645\u06c1: \u067e\u0627\u06a9\u06cc\u0632\u06af\u06cc \u0646\u0635\u0641 (\u0622\u062f\u06be\u0627) \u0627\u06cc\u0645\u0627\u0646 \u06c1\u06d2\u06d4 (\u0635\u062d\u06cc\u062d \u0645\u0633\u0644\u0645\u060c \u062d\u062f\u06cc\u062b: 534)\u06d4\",\"\u06c1\u0645\u06cc\u06ba \u0635\u0627\u0641 \u0633\u062a\u06be\u0631\u0627 \u0627\u0648\u0631 \u067e\u0627\u06a9 \u0631\u06c1\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"\u06a9\u06cc\u0627 \u0622\u067e \u062c\u0627\u0646\u062a\u06d2 \u06c1\u06cc\u06ba\u061f \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u06a9\u0644\u0627\u0645 \u0642\u0631\u0622\u0646\u0650 \u0645\u062c\u06cc\u062f \u0627\u0648\u0631 \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \ufdfa \u06a9\u06d2 \u0641\u0631\u0645\u0627\u0646 \u06a9\u0648 \u062d\u062f\u06cc\u062b \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u062d\u062f\u06cc\u062b \u0645\u06cc\u06ba \u067e\u0627\u06a9\u06cc\u0632\u06af\u06cc \u06a9\u0648 \u06a9\u06cc\u0627 \u0641\u0631\u0645\u0627\u06cc\u0627 \u06af\u06cc\u0627\u061f\",\"ur\":\"\u062d\u062f\u06cc\u062b \u0645\u06cc\u06ba \u067e\u0627\u06a9\u06cc\u0632\u06af\u06cc \u06a9\u0648 \u06a9\u06cc\u0627 \u0641\u0631\u0645\u0627\u06cc\u0627 \u06af\u06cc\u0627\u061f\"},\"opts\":[\"\u0622\u062f\u06be\u0627 \u0627\u06cc\u0645\u0627\u0646\",\"\u067e\u0648\u0631\u0627 \u0627\u06cc\u0645\u0627\u0646\",\"\u0627\u06cc\u06a9 \u0646\u0645\u0627\u0632\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06d2 \u0641\u0631\u0645\u0627\u0646 \u06a9\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06d2 \u0641\u0631\u0645\u0627\u0646 \u06a9\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062f\u0639\u0627\",\"\u062d\u062f\u06cc\u062b\",\"\u0633\u0648\u0631\u062a\"],\"a\":1,\"topic\":\"chapter\"}]},{\"title\":\"\u062f\u0639\u0627\u0626\u06cc\u06ba (\u0632\u0628\u0627\u0646\u06cc)\",\"page\":8,\"cards\":[\"\u0639\u0644\u0645 \u0645\u06cc\u06ba \u0627\u0636\u0627\u0641\u06d2 \u06a9\u06cc \u062f\u0639\u0627: \u0631\u064e\u0628\u0650\u0651 \u0632\u0650\u062f\u0652\u0646\u0650\u064a\u0652 \u0639\u0650\u0644\u0652\u0645\u064b\u0627\u06d4\",\"\u062a\u0631\u062c\u0645\u06c1: \u0627\u06d2 \u0645\u06cc\u0631\u06d2 \u0631\u0628\u0651! \u0645\u062c\u06be\u06d2 \u0639\u0644\u0645 \u0645\u06cc\u06ba \u0627\u0648\u0631 \u062a\u0631\u0642\u06cc \u0639\u0637\u0627 \u0641\u0631\u0645\u0627\u06d4 (\u0633\u0648\u0631\u06c3 \u0637\u0670\u06c1\u0670\u060c \u0622\u06cc\u062a: 114)\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0639\u0644\u0645 \u0646\u064f\u0648\u0631 \u06c1\u06d2\u06d4\",\"\u06c1\u0645\u06cc\u06ba \u0631\u0648\u0632\u0645\u0631\u06c1 \u0632\u0646\u062f\u06af\u06cc \u0645\u06cc\u06ba \u06cc\u06c1 \u062f\u0639\u0627 \u067e\u0691\u06be\u0646\u06d2 \u06a9\u06cc \u0639\u0627\u062f\u062a \u0628\u0646\u0627\u0646\u06cc \u0686\u0627\u06c1\u06cc\u06d2\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0639\u0644\u0645 \u0645\u06cc\u06ba \u0627\u0636\u0627\u0641\u06d2 \u06a9\u06cc \u062f\u0639\u0627 \u06a9\u0648\u0646 \u0633\u06cc \u06c1\u06d2\u061f\",\"ur\":\"\u0639\u0644\u0645 \u0645\u06cc\u06ba \u0627\u0636\u0627\u0641\u06d2 \u06a9\u06cc \u062f\u0639\u0627 \u06a9\u0648\u0646 \u0633\u06cc \u06c1\u06d2\u061f\"},\"opts\":[\"\u0631\u064e\u0628\u0650\u0651 \u0632\u0650\u062f\u0652\u0646\u0650\u064a\u0652 \u0639\u0650\u0644\u0652\u0645\u064b\u0627\",\"\u0627\u064e\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u0670\u0647\u0650\",\"\u0645\u064e\u0627 \u0634\u064e\u0622\u0621\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0639\u0644\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0639\u0644\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0646\u064f\u0648\u0631\",\"\u0645\u0627\u0644\",\"\u06a9\u06be\u06cc\u0644\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u062a\u0648\u062d\u06cc\u062f \u06a9\u0627 \u062a\u0639\u0627\u0631\u0641\",\"page\":9,\"cards\":[\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0627\u06cc\u06a9 \u06c1\u06d2\u06d4\",\"\u0642\u064f\u0644\u0652 \u0647\u064f\u0648\u064e \u0627\u0644\u0644\u0651\u0670\u0647\u064f \u0627\u064e\u062d\u064e\u062f\u064c \u06dd (\u0627\u06d2 \u0646\u0628\u06cc \ufdfa! \u0622\u067e \u0641\u0631\u0645\u0627 \u062f\u06cc\u062c\u06cc\u06d2 \u0648\u06c1 \u0627\u0644\u0644\u06c1 \u0627\u06cc\u06a9 (\u06c1\u06cc) \u06c1\u06d2) (\u0633\u0648\u0631\u06c3 \u0627\u0644\u0627\u062e\u0644\u0627\u0635\u060c \u0622\u06cc\u062a: 1)\u06d4\",\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u06c1\u0645 \u0633\u0628 \u06a9\u0648 \u067e\u06cc\u062f\u0627 \u06a9\u06cc\u0627 \u06c1\u06d2\u06d4\",\"\u0633\u0628 \u0686\u06cc\u0632\u06cc\u06ba \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0628\u0646\u0627\u0626\u06cc \u06c1\u06cc\u06ba\u06d4\",\"\u0632\u0645\u06cc\u0646\u060c \u0633\u0648\u0631\u062c\u060c \u0686\u0627\u0646\u062f\u060c \u0633\u062a\u0627\u0631\u06d2\u060c \u062f\u0631\u062e\u062a\u060c \u062c\u0627\u0646\u0648\u0631 \u0627\u0648\u0631 \u067e\u0631\u0646\u062f\u06d2 \u0633\u0628 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0628\u0646\u0627\u0626\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u06c1\u0645\u06cc\u06ba \u06c1\u0627\u062a\u06be\u060c \u067e\u0627\u0624\u06ba\u060c \u0622\u0646\u06a9\u06be\u06cc\u06ba\u060c \u0646\u0627\u06a9\u060c \u06a9\u0627\u0646 \u0627\u0648\u0631 \u0632\u0628\u0627\u0646 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0639\u0637\u0627 \u06a9\u06cc\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u062a\u0645\u0627\u0645 \u0646\u0639\u0645\u062a\u0648\u06ba \u067e\u0631 \u06c1\u0645\u06cc\u06ba \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 \u0634\u06a9\u0631 \u0627\u062f\u0627 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 \u0634\u06a9\u0631 \u0627\u062f\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u06c1\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2: \u0627\u064e\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u0670\u0647\u0650\u06d4\",\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06cc \u0630\u0627\u062a \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06cc \u0628\u06c1\u062a \u0628\u0691\u06cc \u0646\u0639\u0645\u062a \u06c1\u06d2\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 ______ \u06c1\u06d2\u06d4\",\"ur\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 ______ \u06c1\u06d2\u06d4\"},\"opts\":[\"\u0627\u06cc\u06a9\",\"\u062f\u0648\",\"\u062a\u06cc\u0646\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06c1\u0645\u06cc\u06ba \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 ______ \u0627\u062f\u0627 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"ur\":\"\u06c1\u0645\u06cc\u06ba \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 ______ \u0627\u062f\u0627 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\"},\"opts\":[\"\u0634\u06a9\u0631\",\"\u063a\u0635\u06c1\",\"\u0648\u0639\u062f\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0633\u0628 \u0686\u06cc\u0632\u06cc\u06ba \u06a9\u0633 \u0646\u06d2 \u0628\u0646\u0627\u0626\u06cc \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0633\u0628 \u0686\u06cc\u0632\u06cc\u06ba \u06a9\u0633 \u0646\u06d2 \u0628\u0646\u0627\u0626\u06cc \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0627\u0646\u0633\u0627\u0646\u0648\u06ba \u0646\u06d2\",\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2\",\"\u062f\u0631\u062e\u062a\u0648\u06ba \u0646\u06d2\"],\"a\":1,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06c1\u0645 \u0633\u0628 \u06a9\u0648 \u06a9\u0633 \u0646\u06d2 \u067e\u06cc\u062f\u0627 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u06c1\u0645 \u0633\u0628 \u06a9\u0648 \u06a9\u0633 \u0646\u06d2 \u067e\u06cc\u062f\u0627 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2\",\"\u06c1\u0645\u0627\u0631\u06d2 \u0627\u0628\u0648 \u0646\u06d2\",\"\u0627\u0633\u062a\u0627\u062f \u0646\u06d2\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 \u0634\u06a9\u0631 \u0627\u062f\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 \u0634\u06a9\u0631 \u0627\u062f\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0627\u064e\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u0670\u0647\u0650\",\"\u0627\u0646 \u0634\u0627\u0621 \u0627\u0644\u0644\u06c1\",\"\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u06cc\u06a9\u0645\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0646\u0628\u0648\u0651\u062a \u0648 \u0631\u0633\u0627\u0644\u062a\",\"page\":13,\"cards\":[\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0628\u06be\u06cc\u062c\u06d2 \u06c1\u0648\u0626\u06d2 \u062e\u0627\u0635 \u0628\u0646\u062f\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u062d\u06a9\u0645 \u0633\u06d2 \u062d\u0636\u0631\u062a \u062c\u0628\u0631\u06cc\u0644 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u062a\u0645\u0627\u0645 \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u062a\u06a9 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 \u067e\u06cc\u063a\u0627\u0645 \u067e\u06c1\u0646\u0686\u0627\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0646\u06d2 \u0627\u06cc\u06a9 \u0627\u0644\u0644\u06c1 \u06a9\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u0631\u0646\u06d2 \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u0627\u06d4\",\"\u0648\u06c1 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 \u0627\u0686\u06be\u06d2 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u062a\u06d2 \u062a\u06be\u06d2 \u0627\u0648\u0631 \u0628\u0631\u06d2 \u06a9\u0627\u0645\u0648\u06ba \u0633\u06d2 \u0645\u0646\u0639 \u0641\u0631\u0645\u0627\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u06c1\u0645 \u062a\u0645\u0627\u0645 \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u067e\u0631 \u0627\u06cc\u0645\u0627\u0646 \u0631\u06a9\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0645\u0634\u06c1\u0648\u0631 \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645: \u062d\u0636\u0631\u062a \u0646\u0648\u062d \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\u060c \u062d\u0636\u0631\u062a \u0627\u0628\u0631\u0627\u06c1\u06cc\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\u060c \u062d\u0636\u0631\u062a \u0645\u0648\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\u060c \u062d\u0636\u0631\u062a \u0639\u06cc\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u0627\u0648\u0631 \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa\u06d4\",\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u067e\u06c1\u0644\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0622\u062f\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u06c1\u06cc\u06ba \u0627\u0648\u0631 \u0622\u062e\u0631\u06cc \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06c1\u06cc\u06ba\u06d4\",\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \u06a9\u0627 \u0646\u0627\u0645 \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06c1\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u06a9\u06d2 \u0628\u0639\u062f \u0642\u06cc\u0627\u0645\u062a \u062a\u06a9 \u06a9\u0648\u0626\u06cc \u0646\u0628\u06cc \u06cc\u0627 \u0631\u0633\u0648\u0644 \u0646\u06c1\u06cc\u06ba \u0622\u0626\u06d2 \u06af\u0627\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u067e\u06c1\u0644\u06d2 \u0646\u0628\u06cc \u06a9\u0627 \u0646\u0627\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u067e\u06c1\u0644\u06d2 \u0646\u0628\u06cc \u06a9\u0627 \u0646\u0627\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u062d\u0636\u0631\u062a \u0622\u062f\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\",\"\u062d\u0636\u0631\u062a \u0645\u0648\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\",\"\u062d\u0636\u0631\u062a \u0646\u0648\u062d \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06c1\u0645 \u062a\u0645\u0627\u0645 \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u067e\u0631 \u06a9\u06cc\u0627 \u0644\u0627\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u06c1\u0645 \u062a\u0645\u0627\u0645 \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u067e\u0631 \u06a9\u06cc\u0627 \u0644\u0627\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0627\u06cc\u0645\u0627\u0646\",\"\u063a\u0635\u06c1\",\"\u0633\u0627\u0645\u0627\u0646\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0628\u06be\u06cc\u062c\u06d2 \u06c1\u0648\u0626\u06d2 ______ \u0628\u0646\u062f\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"ur\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0628\u06be\u06cc\u062c\u06d2 \u06c1\u0648\u0626\u06d2 ______ \u0628\u0646\u062f\u06d2 \u06c1\u06cc\u06ba\u06d4\"},\"opts\":[\"\u062e\u0627\u0635\",\"\u0639\u0627\u0645\",\"\u0686\u06be\u0648\u0679\u06d2\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0622\u062e\u0631\u06cc \u0646\u0628\u06cc \u0627\u0648\u0631 \u0631\u0633\u0648\u0644 \u06a9\u0648\u0646 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0622\u062e\u0631\u06cc \u0646\u0628\u06cc \u0627\u0648\u0631 \u0631\u0633\u0648\u0644 \u06a9\u0648\u0646 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa\",\"\u062d\u0636\u0631\u062a \u0639\u06cc\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\",\"\u062d\u0636\u0631\u062a \u0627\u0628\u0631\u0627\u06c1\u06cc\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0646\u06d2 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 \u06a9\u0633 \u0628\u0627\u062a \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u0627\u061f\",\"ur\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0646\u06d2 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 \u06a9\u0633 \u0628\u0627\u062a \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u0627\u061f\"},\"opts\":[\"\u0627\u06cc\u06a9 \u0627\u0644\u0644\u06c1 \u06a9\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u0631\u0646\u06d2 \u06a9\u0627\",\"\u0644\u0691\u0646\u06d2 \u06a9\u0627\",\"\u062c\u06be\u0648\u0679 \u0628\u0648\u0644\u0646\u06d2 \u06a9\u0627\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0645\u0633\u062c\u062f\",\"page\":16,\"cards\":[\"\u0645\u0633\u062c\u062f \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u06a9\u06cc \u062c\u06af\u06c1 \u06c1\u06d2\u06d4\",\"\u0645\u0633\u062c\u062f \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 \u06af\u06be\u0631 \u06c1\u06d2\u06d4\",\"\u06cc\u06c1\u0627\u06ba \u0645\u0633\u0644\u0645\u0627\u0646 \u062f\u0646 \u0645\u06cc\u06ba \u067e\u0627\u0646\u0686 \u0628\u0627\u0631 \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4 \u0645\u0633\u062c\u062f \u0645\u06cc\u06ba \u0642\u0631\u0622\u0646\u0650 \u0645\u062c\u06cc\u062f \u06a9\u06cc \u062a\u0644\u0627\u0648\u062a \u0628\u06be\u06cc \u06a9\u06cc \u062c\u0627\u062a\u06cc \u06c1\u06d2\u06d4\",\"\u0645\u0633\u062c\u062f \u0645\u06cc\u06ba \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0632\u06cc\u0627\u062f\u06c1 \u062e\u0648\u0634 \u06c1\u0648\u062a\u0627 \u06c1\u06d2\u06d4\",\"\u0645\u0633\u062c\u062f \u06a9\u0648 \u06c1\u0645\u06cc\u0634\u06c1 \u067e\u0627\u06a9 \u0635\u0627\u0641 \u0631\u06a9\u06be\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"\u06c1\u0645\u06cc\u06ba \u0645\u0633\u062c\u062f \u06a9\u06d2 \u0622\u062f\u0627\u0628 \u06a9\u0627 \u062e\u06cc\u0627\u0644 \u0631\u06a9\u06be\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0632\u0645\u06cc\u0646 \u067e\u0631 \u0645\u0633\u062c\u062f\u0650 \u062d\u0631\u0627\u0645\u060c \u0645\u0633\u062c\u062f\u0650 \u0646\u0628\u0648\u06cc \u0627\u0648\u0631 \u0645\u0633\u062c\u062f\u0650 \u0627\u0642\u0635\u06cc\u0670 \u0628\u06c1\u062a \u0641\u0636\u06cc\u0644\u062a \u0648\u0627\u0644\u06cc \u0645\u0633\u062c\u062f\u06cc\u06ba \u06c1\u06cc\u06ba\u06d4\",\"\u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u0646\u06d2 \u062c\u0648 \u0645\u0633\u062c\u062f \u0628\u0646\u0627\u0626\u06cc \u0627\u0633\u06d2 \u0645\u0633\u062c\u062f\u0650 \u0646\u0628\u0648\u06cc \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0632\u0645\u06cc\u0646 \u067e\u0631 \u0633\u0628 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0628\u06cc\u062a \u0627\u0644\u0644\u06c1 (\u062e\u0627\u0646\u06c1 \u06a9\u0639\u0628\u06c1) \u062a\u0639\u0645\u06cc\u0631 \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0645\u0633\u062c\u062f \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 ______ \u06c1\u06d2\u06d4\",\"ur\":\"\u0645\u0633\u062c\u062f \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u0627 ______ \u06c1\u06d2\u06d4\"},\"opts\":[\"\u06af\u06be\u0631\",\"\u0628\u0627\u063a\",\"\u0628\u0627\u0632\u0627\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0645\u0633\u0644\u0645\u0627\u0646 \u0645\u0633\u062c\u062f \u0645\u06cc\u06ba ______ \u067e\u0691\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"ur\":\"\u0645\u0633\u0644\u0645\u0627\u0646 \u0645\u0633\u062c\u062f \u0645\u06cc\u06ba ______ \u067e\u0691\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0646\u0645\u0627\u0632\",\"\u06a9\u062a\u0627\u0628\",\"\u0627\u062e\u0628\u0627\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0645\u0633\u0644\u0645\u0627\u0646 \u062f\u0646 \u0645\u06cc\u06ba \u06a9\u062a\u0646\u06cc \u0646\u0645\u0627\u0632\u06cc\u06ba \u067e\u0691\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0645\u0633\u0644\u0645\u0627\u0646 \u062f\u0646 \u0645\u06cc\u06ba \u06a9\u062a\u0646\u06cc \u0646\u0645\u0627\u0632\u06cc\u06ba \u067e\u0691\u06be\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u067e\u0627\u0646\u0686\",\"\u062a\u06cc\u0646\",\"\u0633\u0627\u062a\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0632\u0645\u06cc\u0646 \u067e\u0631 \u0633\u0628 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u06a9\u0648\u0646 \u0633\u0627 \u06af\u06be\u0631 \u062a\u0639\u0645\u06cc\u0631 \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u061f\",\"ur\":\"\u0632\u0645\u06cc\u0646 \u067e\u0631 \u0633\u0628 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u06a9\u0648\u0646 \u0633\u0627 \u06af\u06be\u0631 \u062a\u0639\u0645\u06cc\u0631 \u06a9\u06cc\u0627 \u06af\u06cc\u0627\u061f\"},\"opts\":[\"\u0628\u06cc\u062a \u0627\u0644\u0644\u06c1 (\u062e\u0627\u0646\u06c1 \u06a9\u0639\u0628\u06c1)\",\"\u0645\u0633\u062c\u062f\u0650 \u0627\u0642\u0635\u06cc\u0670\",\"\u06c1\u0645\u0627\u0631\u0627 \u0633\u06a9\u0648\u0644\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0645\u0633\u062c\u062f \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u06a9\u0648\u0646 \u0633\u06cc \u0628\u0627\u062a \u062f\u0631\u0633\u062a \u06c1\u06d2\u061f\",\"ur\":\"\u0645\u0633\u062c\u062f \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u06a9\u0648\u0646 \u0633\u06cc \u0628\u0627\u062a \u062f\u0631\u0633\u062a \u06c1\u06d2\u061f\"},\"opts\":[\"\u0645\u0633\u062c\u062f \u06a9\u0648 \u067e\u0627\u06a9 \u0635\u0627\u0641 \u0631\u06a9\u06be\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\",\"\u0645\u0633\u062c\u062f \u0645\u06cc\u06ba \u0634\u0648\u0631 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\",\"\u0645\u0633\u062c\u062f \u0645\u06cc\u06ba \u06af\u0646\u062f\u06af\u06cc \u06a9\u0631\u0646\u06cc \u0686\u0627\u06c1\u06cc\u06d2\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0627\u0630\u0627\u0646\",\"page\":19,\"cards\":[\"\u0646\u0645\u0627\u0632 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u06a9\u0627\u0631\u0646\u06d2 \u06a9\u0648 \u0627\u0630\u0627\u0646 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0646\u0645\u0627\u0632 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0627\u0630\u0627\u0646 \u062f\u06cc \u062c\u0627\u062a\u06cc \u06c1\u06d2\u06d4\",\"\u0627\u0630\u0627\u0646 \u0633\u0646 \u06a9\u0631 \u0644\u0648\u06af \u0646\u0645\u0627\u0632 \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u0633\u062c\u062f \u0622\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0627\u0630\u0627\u0646 \u0628\u0644\u0646\u062f \u0622\u0648\u0627\u0632 \u0633\u06d2 \u062f\u06cc \u062c\u0627\u062a\u06cc \u06c1\u06d2\u06d4\",\"\u0627\u0630\u0627\u0646 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0648 \u0645\u0624\u0630\u0651\u0646 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0627\u0630\u0627\u0646 \u06a9\u06d2 \u0648\u0642\u062a \u062e\u0627\u0645\u0648\u0634 \u0631\u06c1\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u062d\u0636\u0631\u062a \u0628\u0644\u0627\u0644 \u0631\u0636\u06cc \u0627\u0644\u0644\u06c1 \u0639\u0646\u06c1 \u0627\u0633\u0644\u0627\u0645 \u06a9\u06d2 \u067e\u06c1\u0644\u06d2 \u0645\u0624\u0630\u0651\u0646 \u06c1\u06cc\u06ba\u06d4\",\"\u0641\u0631\u0645\u0627\u0646\u0650 \u0645\u0635\u0637\u0641\u06cc\u0670 \ufdfa: \u0627\u0630\u0627\u0646 \u0633\u0646 \u06a9\u0631 \u0648\u06c1\u06cc \u0627\u0644\u0641\u0627\u0638 \u0628\u0648\u0644\u0646\u06d2 \u0686\u0627\u06c1\u06cc\u06cc\u06ba \u062c\u0648 \u0627\u0630\u0627\u0646 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u0627 \u06a9\u06c1\u06d2 (\u0635\u062d\u06cc\u062d \u0645\u0633\u0644\u0645\u060c \u062d\u062f\u06cc\u062b: 385)\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06a9\u06cc \u0645\u0633\u062c\u062f \u0645\u06cc\u06ba \u062d\u0636\u0631\u062a \u0628\u0644\u0627\u0644 \u0631\u0636\u06cc \u0627\u0644\u0644\u06c1 \u0639\u0646\u06c1 \u0627\u0630\u0627\u0646 \u062f\u06cc\u0627 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0646\u0645\u0627\u0632 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u06a9\u0627\u0631\u0646\u06d2 \u06a9\u0648 ______ \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"ur\":\"\u0646\u0645\u0627\u0632 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u06a9\u0627\u0631\u0646\u06d2 \u06a9\u0648 ______ \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0627\u0630\u0627\u0646\",\"\u062a\u0644\u0627\u0648\u062a\",\"\u062a\u0633\u0645\u06cc\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0630\u0627\u0646 \u0633\u0646 \u06a9\u0631 \u0644\u0648\u06af ______ \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u0633\u062c\u062f \u0622\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"ur\":\"\u0627\u0630\u0627\u0646 \u0633\u0646 \u06a9\u0631 \u0644\u0648\u06af ______ \u06a9\u06d2 \u0644\u06cc\u06d2 \u0645\u0633\u062c\u062f \u0622\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0646\u0645\u0627\u0632\",\"\u0631\u0648\u0632\u06c1\",\"\u062d\u062c\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0630\u0627\u0646 ______ \u0622\u0648\u0627\u0632 \u0645\u06cc\u06ba \u062f\u06cc\u0646\u06cc \u0686\u0627\u06c1\u06cc\u06d2\u06d4\",\"ur\":\"\u0627\u0630\u0627\u0646 ______ \u0622\u0648\u0627\u0632 \u0645\u06cc\u06ba \u062f\u06cc\u0646\u06cc \u0686\u0627\u06c1\u06cc\u06d2\u06d4\"},\"opts\":[\"\u0628\u0644\u0646\u062f\",\"\u0622\u06c1\u0633\u062a\u06c1\",\"\u0628\u06c1\u062a \u0622\u06c1\u0633\u062a\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0630\u0627\u0646 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u0630\u0627\u0646 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0648 \u06a9\u06cc\u0627 \u06a9\u06c1\u062a\u06d2 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u0645\u0624\u0630\u0651\u0646\",\"\u0627\u0645\u0627\u0645\",\"\u0642\u0627\u0631\u06cc\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0630\u0627\u0646 \u06a9\u06d2 \u0648\u0642\u062a \u06a9\u06cc\u0627 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u061f\",\"ur\":\"\u0627\u0630\u0627\u0646 \u06a9\u06d2 \u0648\u0642\u062a \u06a9\u06cc\u0627 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\u061f\"},\"opts\":[\"\u062e\u0627\u0645\u0648\u0634 \u0631\u06c1\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\",\"\u0634\u0648\u0631 \u06a9\u0631\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\",\"\u0628\u06be\u0627\u06af\u0646\u0627 \u0686\u0627\u06c1\u06cc\u06d2\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0633\u0644\u0627\u0645 \u06a9\u06d2 \u067e\u06c1\u0644\u06d2 \u0645\u0624\u0630\u0651\u0646 \u06a9\u0648\u0646 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u0633\u0644\u0627\u0645 \u06a9\u06d2 \u067e\u06c1\u0644\u06d2 \u0645\u0624\u0630\u0651\u0646 \u06a9\u0648\u0646 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062d\u0636\u0631\u062a \u0628\u0644\u0627\u0644 \u0631\u0636\u06cc \u0627\u0644\u0644\u06c1 \u0639\u0646\u06c1\",\"\u062d\u0636\u0631\u062a \u0622\u062f\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\",\"\u062d\u0636\u0631\u062a \u0645\u0648\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0646\u0645\u0627\u0632\",\"page\":21,\"cards\":[\"\u0646\u0645\u0627\u0632 \u0627\u0633\u0644\u0627\u0645 \u06a9\u0627 \u0628\u0646\u06cc\u0627\u062f\u06cc \u0631\u06a9\u0646 \u06c1\u06d2\u06d4\",\"\u0646\u0645\u0627\u0632 \u0627\u062f\u0627 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u0627\u06a9 \u0635\u0627\u0641 \u06c1\u0648\u0646\u0627 \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2\u06d4\",\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u0627\u067e\u0646\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u06d2 \u0644\u06cc\u06d2 \u067e\u06cc\u062f\u0627 \u06a9\u06cc\u0627 \u06c1\u06d2\u06d4\",\"\u0639\u0628\u0627\u062f\u062a \u06a9\u0627 \u0633\u0628 \u0633\u06d2 \u0628\u06c1\u062a\u0631\u06cc\u0646 \u0637\u0631\u06cc\u0642\u06c1 \u0646\u0645\u0627\u0632 \u06c1\u06d2\u06d4\",\"\u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u062e\u0648\u0634 \u06c1\u0648\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0648\u0636\u0648 \u06a9\u0631\u0646\u0627 \u0636\u0631\u0648\u0631\u06cc \u06c1\u06d2\u06d4\",\"\u0648\u0636\u0648 \u06a9\u0631\u0646\u06d2 \u0633\u06d2 \u06c1\u0645 \u067e\u0627\u06a9 \u0635\u0627\u0641 \u06c1\u0648 \u062c\u0627\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"\u0627\u06cc\u06a9 \u0645\u0633\u0644\u0645\u0627\u0646 \u067e\u0631 \u062f\u0646 \u0645\u06cc\u06ba \u067e\u0627\u0646\u0686 \u0646\u0645\u0627\u0632\u06cc\u06ba \u0641\u0631\u0636 \u06c1\u06cc\u06ba\u06d4\",\"\u067e\u0627\u0646\u0686 \u0646\u0645\u0627\u0632\u0648\u06ba \u06a9\u06d2 \u0646\u0627\u0645 \u06cc\u06c1 \u06c1\u06cc\u06ba: \u0641\u062c\u0631\u060c \u0638\u06c1\u0631\u060c \u0639\u0635\u0631\u060c \u0645\u063a\u0631\u0628 \u0627\u0648\u0631 \u0639\u0634\u0627\u0621\u06d4\",\"\u0641\u0631\u0645\u0627\u0646\u0650 \u0645\u0635\u0637\u0641\u06cc\u0670 \ufdfa: \u062c\u0648 \u0634\u062e\u0635 \u067e\u0627\u0646\u0686 \u0646\u0645\u0627\u0632\u06cc\u06ba \u067e\u0691\u06be\u062a\u0627 \u06c1\u06d2 \u0627\u0633\u06d2 \u067e\u0686\u0627\u0633 \u0646\u0645\u0627\u0632\u0648\u06ba \u06a9\u0627 \u062b\u0648\u0627\u0628 \u0645\u0644\u062a\u0627 \u06c1\u06d2 (\u0635\u062d\u06cc\u062d \u0645\u0633\u0644\u0645\u060c \u062d\u062f\u06cc\u062b: 411)\u06d4\",\"\u0641\u0631\u0645\u0627\u0646\u0650 \u0645\u0635\u0637\u0641\u06cc\u0670 \ufdfa: \u0646\u0645\u0627\u0632 \u062f\u06cc\u0646 \u06a9\u0627 \u0633\u062a\u0648\u0646 \u06c1\u06d2 (\u062c\u0627\u0645\u0639 \u062a\u0631\u0645\u0630\u06cc\u060c \u062d\u062f\u06cc\u062b: 2616)\u06d4\",\"\u0641\u0631\u0645\u0627\u0646\u0650 \u0645\u0635\u0637\u0641\u06cc\u0670 \ufdfa: \u0645\u06cc\u0631\u06cc \u0622\u0646\u06a9\u06be\u0648\u06ba \u06a9\u06cc \u0679\u06be\u0646\u0688\u06a9 \u0646\u0645\u0627\u0632 \u0645\u06cc\u06ba \u0631\u06a9\u06be \u062f\u06cc \u06af\u0626\u06cc \u06c1\u06d2 (\u0633\u0646\u0646 \u0646\u0633\u0627\u0626\u06cc\u060c \u062d\u062f\u06cc\u062b: 3391)\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0645\u0633\u062c\u062f \u0645\u06cc\u06ba \u062c\u0645\u0627\u0639\u062a \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u0632\u06cc\u0627\u062f\u06c1 \u062b\u0648\u0627\u0628 \u0645\u0644\u062a\u0627 \u06c1\u06d2\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0639\u0628\u0627\u062f\u062a \u06a9\u0627 \u0633\u0628 \u0633\u06d2 \u0628\u06c1\u062a\u0631\u06cc\u0646 \u0637\u0631\u06cc\u0642\u06c1 ______ \u06c1\u06d2\u06d4\",\"ur\":\"\u0639\u0628\u0627\u062f\u062a \u06a9\u0627 \u0633\u0628 \u0633\u06d2 \u0628\u06c1\u062a\u0631\u06cc\u0646 \u0637\u0631\u06cc\u0642\u06c1 ______ \u06c1\u06d2\u06d4\"},\"opts\":[\"\u0646\u0645\u0627\u0632\",\"\u06a9\u06be\u06cc\u0644\",\"\u0633\u06cc\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u06c1\u0645 ______ \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\",\"ur\":\"\u0646\u0645\u0627\u0632 \u067e\u0691\u06be\u0646\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u06c1\u0645 ______ \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0648\u0636\u0648\",\"\u0633\u0641\u0631\",\"\u06a9\u06be\u0627\u0646\u0627\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u06cc\u06a9 \u0645\u0633\u0644\u0645\u0627\u0646 \u067e\u0631 \u062f\u0646 \u0645\u06cc\u06ba \u06a9\u062a\u0646\u06cc \u0646\u0645\u0627\u0632\u06cc\u06ba \u0641\u0631\u0636 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u06cc\u06a9 \u0645\u0633\u0644\u0645\u0627\u0646 \u067e\u0631 \u062f\u0646 \u0645\u06cc\u06ba \u06a9\u062a\u0646\u06cc \u0646\u0645\u0627\u0632\u06cc\u06ba \u0641\u0631\u0636 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u067e\u0627\u0646\u0686\",\"\u062f\u0648\",\"\u062f\u0633\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0646 \u0645\u06cc\u06ba \u0633\u06d2 \u06a9\u0648\u0646 \u0633\u0627 \u0646\u0645\u0627\u0632 \u06a9\u0627 \u0646\u0627\u0645 \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u0646 \u0645\u06cc\u06ba \u0633\u06d2 \u06a9\u0648\u0646 \u0633\u0627 \u0646\u0645\u0627\u0632 \u06a9\u0627 \u0646\u0627\u0645 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0639\u0635\u0631\",\"\u067e\u06cc\u0631\",\"\u06a9\u062a\u0627\u0628\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u06a9\u0633 \u0644\u06cc\u06d2 \u067e\u06cc\u062f\u0627 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u06a9\u0633 \u0644\u06cc\u06d2 \u067e\u06cc\u062f\u0627 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0627\u067e\u0646\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u06d2 \u0644\u06cc\u06d2\",\"\u0635\u0631\u0641 \u06a9\u06be\u06cc\u0644\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2\",\"\u0633\u0648\u0646\u06d2 \u06a9\u06d2 \u0644\u06cc\u06d2\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa\",\"page\":24,\"cards\":[\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa 12 \u0631\u0628\u06cc\u0639 \u0627\u0644\u0627\u0648\u0651\u0644 \u0628\u0645\u0637\u0627\u0628\u0642 22 \u0627\u067e\u0631\u06cc\u0644 571\u0621 \u06a9\u0648 \u0645\u06a9\u0651\u06c1 \u0645\u06a9\u0631\u0651\u0645\u06c1 \u0645\u06cc\u06ba \u067e\u06cc\u062f\u0627 \u06c1\u0648\u0626\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u06a9\u06d2 \u0648\u0627\u0644\u062f\u0650 \u0645\u0627\u062c\u062f \u06a9\u0627 \u0646\u0627\u0645 \u062d\u0636\u0631\u062a \u0639\u0628\u062f\u0627\u0644\u0644\u06c1 \u0627\u0648\u0631 \u0648\u0627\u0644\u062f\u06c1 \u0645\u0627\u062c\u062f\u06c1 \u06a9\u0627 \u0646\u0627\u0645 \u062d\u0636\u0631\u062a \u0622\u0645\u0646\u06c1 \u06c1\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u06a9\u06d2 \u0648\u0627\u0644\u062f\u0650 \u0645\u0627\u062c\u062f \u0622\u067e \ufdfa \u06a9\u06d2 \u067e\u06cc\u062f\u0627 \u06c1\u0648\u0646\u06d2 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0648\u0641\u0627\u062a \u067e\u0627 \u06af\u0626\u06d2\u06d4\",\"\u062c\u0628 \u0622\u067e \ufdfa \u067e\u06cc\u062f\u0627 \u06c1\u0648\u0626\u06d2 \u062a\u0648 \u0622\u067e \ufdfa \u06a9\u06d2 \u062f\u0627\u062f\u0627 \u062d\u0636\u0631\u062a \u0639\u0628\u062f\u0627\u0644\u0645\u0637\u0644\u0628 \u0628\u06c1\u062a \u062e\u0648\u0634 \u06c1\u0648\u0626\u06d2\u06d4\",\"\u0648\u0627\u0644\u062f\u06c1 \u0645\u0627\u062c\u062f\u06c1 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u0627 \u0646\u0627\u0645 \u0627\u062d\u0645\u062f \u0627\u0648\u0631 \u062f\u0627\u062f\u0627 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u0627 \u0646\u0627\u0645 \u0645\u062d\u0645\u062f \u0631\u06a9\u06be\u0627\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06a9\u0627 \u062a\u0639\u0644\u0642 \u06c1\u0627\u0634\u0645\u06cc \u062e\u0627\u0646\u062f\u0627\u0646 \u0633\u06d2 \u062a\u06be\u0627\u06d4\",\"\u062c\u0628 \u0622\u067e \ufdfa \u06a9\u06cc \u0639\u0645\u0631 \u0686\u06be\u06d2 \u0633\u0627\u0644 \u06c1\u0648\u0626\u06cc \u062a\u0648 \u0622\u067e \ufdfa \u06a9\u06cc \u0648\u0627\u0644\u062f\u06c1 \u0645\u062d\u062a\u0631\u0645\u06c1 \u0628\u06be\u06cc \u0648\u0641\u0627\u062a \u067e\u0627 \u06af\u0626\u06cc\u06ba\u06d4\",\"\u0648\u0627\u0644\u062f\u06c1 \u0645\u0627\u062c\u062f\u06c1 \u06a9\u06cc \u0648\u0641\u0627\u062a \u06a9\u06d2 \u0628\u0639\u062f \u0622\u067e \ufdfa \u06a9\u06d2 \u062f\u0627\u062f\u0627 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u06cc \u067e\u0631\u0648\u0631\u0634 \u06a9\u06cc\u06d4\",\"\u062d\u0636\u0631\u062a \u0639\u0628\u062f\u0627\u0644\u0645\u0637\u0644\u0628 \u0622\u067e \ufdfa \u0633\u06d2 \u0628\u06c1\u062a \u067e\u06cc\u0627\u0631 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2 \u0627\u0648\u0631 \u06c1\u0645\u06cc\u0634\u06c1 \u0622\u067e \ufdfa \u06a9\u0648 \u0627\u067e\u0646\u06d2 \u0642\u0631\u06cc\u0628 \u0631\u06a9\u06be\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u062c\u0628 \u0622\u067e \ufdfa \u0622\u0679\u06be \u0633\u0627\u0644 \u06a9\u06cc \u0639\u0645\u0631 \u0645\u06cc\u06ba \u067e\u06c1\u0646\u0686\u06d2 \u062a\u0648 \u0622\u067e \ufdfa \u06a9\u06d2 \u062f\u0627\u062f\u0627 \u062c\u0627\u0646 \u0628\u06be\u06cc \u0648\u0641\u0627\u062a \u067e\u0627 \u06af\u0626\u06d2\u06d4\",\"\u062f\u0627\u062f\u0627 \u06a9\u06cc \u0648\u0641\u0627\u062a \u06a9\u06d2 \u0628\u0639\u062f \u0622\u067e \ufdfa \u06a9\u06cc \u067e\u0631\u0648\u0631\u0634 \u0622\u067e \ufdfa \u06a9\u06d2 \u0686\u0686\u0627 \u062d\u0636\u0631\u062a \u0627\u0628\u0648 \u0637\u0627\u0644\u0628 \u0646\u06d2 \u06a9\u06cc\u06d4\",\"\u062d\u0636\u0631\u062a \u0627\u0628\u0648 \u0637\u0627\u0644\u0628 \u0622\u067e \ufdfa \u0633\u06d2 \u0628\u06d2 \u062d\u062f \u067e\u06cc\u0627\u0631 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2 \u0627\u0648\u0631 \u0622\u067e \ufdfa \u06a9\u0627 \u0627\u067e\u0646\u06d2 \u0628\u06cc\u0679\u0648\u06ba \u0633\u06d2 \u0628\u0691\u06be \u06a9\u0631 \u062e\u06cc\u0627\u0644 \u0631\u06a9\u06be\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u062d\u0636\u0631\u062a \u062d\u0644\u06cc\u0645\u06c1 \u0633\u0639\u062f\u06cc\u06c1 \u0631\u0636\u06cc \u0627\u0644\u0644\u06c1 \u0639\u0646\u06c1\u0627 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u06cc \u0628\u0686\u067e\u0646 \u0645\u06cc\u06ba \u067e\u0631\u0648\u0631\u0634 \u06a9\u06cc\u06d4\",\"\u06cc\u06c1\u0627\u06ba \u062a\u06a9 \u06a9\u06c1 \u0622\u067e \ufdfa \u067e\u0686\u06cc\u0633 \u0633\u0627\u0644 \u06a9\u06cc \u0639\u0645\u0631 \u0645\u06cc\u06ba \u062c\u0648\u0627\u0646 \u06c1\u0648 \u06af\u0626\u06d2\u06d4 \u0622\u067e \ufdfa \u06a9\u0627 \u0646\u06a9\u0627\u062d \u062d\u0636\u0631\u062a \u062e\u062f\u06cc\u062c\u06c3 \u0627\u0644\u06a9\u0628\u0631\u06cc\u0670 \u0631\u0636\u06cc \u0627\u0644\u0644\u06c1 \u0639\u0646\u06c1\u0627 \u0633\u06d2 \u06c1\u0648\u0627\u06d4\",\"\u0686\u0627\u0644\u06cc\u0633 \u0633\u0627\u0644 \u06a9\u06cc \u0639\u0645\u0631 \u0645\u06cc\u06ba \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u0648 \u0646\u0628\u0648\u0651\u062a \u0627\u0648\u0631 \u0631\u0633\u0627\u0644\u062a \u0639\u0637\u0627 \u0641\u0631\u0645\u0627\u0626\u06cc\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06d2 \u0648\u0627\u0644\u062f\u0650 \u0645\u0627\u062c\u062f \u06a9\u0627 \u0646\u0627\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06d2 \u0648\u0627\u0644\u062f\u0650 \u0645\u0627\u062c\u062f \u06a9\u0627 \u0646\u0627\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u062d\u0636\u0631\u062a \u0639\u0628\u062f\u0627\u0644\u0644\u06c1\",\"\u062d\u0636\u0631\u062a \u0627\u0628\u0648 \u0637\u0627\u0644\u0628\",\"\u062d\u0636\u0631\u062a \u0639\u0628\u062f\u0627\u0644\u0645\u0637\u0644\u0628\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06cc \u0648\u0627\u0644\u062f\u06c1 \u0645\u0627\u062c\u062f\u06c1 \u06a9\u0627 \u0646\u0627\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06cc \u0648\u0627\u0644\u062f\u06c1 \u0645\u0627\u062c\u062f\u06c1 \u06a9\u0627 \u0646\u0627\u0645 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u062d\u0636\u0631\u062a \u0622\u0645\u0646\u06c1\",\"\u062d\u0636\u0631\u062a \u062e\u062f\u06cc\u062c\u06c1\",\"\u062d\u0636\u0631\u062a \u062d\u0644\u06cc\u0645\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u062c\u0628 \u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06cc \u0639\u0645\u0631 ______ \u0633\u0627\u0644 \u06c1\u0648\u0626\u06cc \u062a\u0648 \u0648\u0627\u0644\u062f\u06c1 \u0645\u062d\u062a\u0631\u0645\u06c1 \u0628\u06be\u06cc \u0648\u0641\u0627\u062a \u067e\u0627 \u06af\u0626\u06cc\u06ba\u06d4\",\"ur\":\"\u062c\u0628 \u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u06cc \u0639\u0645\u0631 ______ \u0633\u0627\u0644 \u06c1\u0648\u0626\u06cc \u062a\u0648 \u0648\u0627\u0644\u062f\u06c1 \u0645\u062d\u062a\u0631\u0645\u06c1 \u0628\u06be\u06cc \u0648\u0641\u0627\u062a \u067e\u0627 \u06af\u0626\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0686\u06be\u06d2\",\"\u0686\u0627\u0644\u06cc\u0633\",\"\u067e\u0686\u06cc\u0633\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0622\u067e \ufdfa \u06a9\u06d2 \u062f\u0627\u062f\u0627 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u0627 \u06a9\u06cc\u0627 \u0646\u0627\u0645 \u0631\u06a9\u06be\u0627\u061f\",\"ur\":\"\u0622\u067e \ufdfa \u06a9\u06d2 \u062f\u0627\u062f\u0627 \u0646\u06d2 \u0622\u067e \ufdfa \u06a9\u0627 \u06a9\u06cc\u0627 \u0646\u0627\u0645 \u0631\u06a9\u06be\u0627\u061f\"},\"opts\":[\"\u0645\u062d\u0645\u062f\",\"\u0627\u062d\u0645\u062f\",\"\u0639\u0644\u06cc\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u0648 \u06a9\u062a\u0646\u06d2 \u0633\u0627\u0644 \u06a9\u06cc \u0639\u0645\u0631 \u0645\u06cc\u06ba \u0646\u0628\u0648\u0651\u062a \u0639\u0637\u0627 \u0641\u0631\u0645\u0627\u0626\u06cc\u061f\",\"ur\":\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u06a9\u0648 \u06a9\u062a\u0646\u06d2 \u0633\u0627\u0644 \u06a9\u06cc \u0639\u0645\u0631 \u0645\u06cc\u06ba \u0646\u0628\u0648\u0651\u062a \u0639\u0637\u0627 \u0641\u0631\u0645\u0627\u0626\u06cc\u061f\"},\"opts\":[\"\u0686\u0627\u0644\u06cc\u0633\",\"\u067e\u0686\u06cc\u0633\",\"\u0622\u0679\u06be\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06a9\u06c1\u0627\u06ba \u067e\u06cc\u062f\u0627 \u06c1\u0648\u0626\u06d2\u061f\",\"ur\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06a9\u06c1\u0627\u06ba \u067e\u06cc\u062f\u0627 \u06c1\u0648\u0626\u06d2\u061f\"},\"opts\":[\"\u0645\u06a9\u0651\u06c1 \u0645\u06a9\u0631\u0651\u0645\u06c1 \u0645\u06cc\u06ba\",\"\u0644\u0627\u06c1\u0648\u0631 \u0645\u06cc\u06ba\",\"\u06a9\u0631\u0627\u0686\u06cc \u0645\u06cc\u06ba\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06a9\u06d2 \u0627\u062e\u0644\u0627\u0642\u0650 \u062d\u0633\u0646\u06c1\",\"page\":28,\"cards\":[\"\u0627\u06cc\u06a9 \u0645\u0631\u062a\u0628\u06c1 \u06c1\u0645\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u0635\u0641\u0627 \u06a9\u06cc \u067e\u06c1\u0627\u0691\u06cc \u067e\u0631 \u062a\u0634\u0631\u06cc\u0641 \u0644\u06d2 \u06af\u0626\u06d2 \u0627\u0648\u0631 \u0645\u06a9\u0651\u06c1 \u0645\u06a9\u0631\u0651\u0645\u06c1 \u0648\u0627\u0644\u0648\u06ba \u06a9\u0648 \u0622\u0648\u0627\u0632 \u062f\u06cc\u06d4 \u0633\u0628 \u0644\u0648\u06af \u062c\u0644\u062f\u06cc \u062c\u0644\u062f\u06cc \u0622\u067e \ufdfa \u06a9\u06d2 \u067e\u0627\u0633 \u062c\u0645\u0639 \u06c1\u0648 \u06af\u0626\u06d2\u06d4\",\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u0646\u06d2 \u0644\u0648\u06af\u0648\u06ba \u0633\u06d2 \u067e\u0648\u0686\u06be\u0627: \u062a\u0645 \u0644\u0648\u06af\u0648\u06ba \u0646\u06d2 \u0645\u062c\u06be\u06d2 \u06a9\u06cc\u0633\u0627 \u067e\u0627\u06cc\u0627 \u06c1\u06d2\u061f \u0633\u0628 \u0628\u0648\u0644\u06d2: \u0622\u067e \ufdfa \u0635\u0627\u062f\u0642 \u0627\u0648\u0631 \u0627\u0645\u06cc\u0646 \u06c1\u06cc\u06ba\u06d4\",\"\u062a\u0628 \u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u06d2 \u0644\u0648\u06af\u0648 \u06a9\u06c1\u06c1 \u062f\u0648 \u06a9\u06c1 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0639\u0644\u0627\u0648\u06c1 \u06a9\u0648\u0626\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u06d2 \u0644\u0627\u0626\u0642 \u0646\u06c1\u06cc\u06ba\u060c \u062a\u0645 \u0641\u0644\u0627\u062d \u067e\u0627 \u062c\u0627\u0624 \u06af\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u06c1\u0645\u06cc\u0634\u06c1 \u0633\u0686 \u0628\u0648\u0644\u062a\u06d2 \u062a\u06be\u06d2\u06d4 \u0622\u067e \ufdfa \u0646\u06d2 \u06c1\u0645\u06cc\u0634\u06c1 \u0627\u0645\u0627\u0646\u062a\u0648\u06ba \u06a9\u0627 \u062e\u06cc\u0627\u0644 \u0631\u06a9\u06be\u0627\u06d4\",\"\u06a9\u0627\u0641\u0631 \u0628\u06be\u06cc \u0627\u067e\u0646\u06cc \u0686\u06cc\u0632\u06cc\u06ba \u0622\u067e \ufdfa \u06a9\u06d2 \u067e\u0627\u0633 \u0631\u06a9\u06be\u0648\u0627\u06cc\u0627 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4 \u0622\u067e \ufdfa \u0646\u06d2 \u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u0648 \u0628\u06be\u06cc \u0633\u0686\u0627\u0626\u06cc \u0627\u0648\u0631 \u0627\u0645\u0627\u0646\u062a \u062f\u0627\u0631\u06cc \u0633\u06a9\u06be\u0627\u0626\u06cc\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0635\u0627\u062f\u0642 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u06c1\u0645\u06cc\u0634\u06c1 \u0633\u0686 \u0628\u0648\u0644\u0646\u06d2 \u0648\u0627\u0644\u0627\u06d4 \u0627\u0645\u06cc\u0646 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u06cc \u0686\u06cc\u0632\u0648\u06ba \u06a9\u0648 \u062d\u0641\u0627\u0638\u062a \u0633\u06d2 \u0631\u06a9\u06be\u0646\u06d2 \u0648\u0627\u0644\u0627\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0633\u0686 \u0628\u0648\u0644\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u06a9\u0648 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u067e\u0633\u0646\u062f \u06a9\u0631\u062a\u0627 \u06c1\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0633\u0686 \u0646\u06cc\u06a9\u06cc \u06a9\u06cc \u0637\u0631\u0641 \u0644\u06d2 \u062c\u0627\u062a\u0627 \u06c1\u06d2 (\u0635\u062d\u06cc\u062d \u0628\u062e\u0627\u0631\u06cc\u060c \u062d\u062f\u06cc\u062b: 6094)\u06d4\",\"\u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u062c\u0633 \u0645\u06cc\u06ba \u0627\u0645\u0627\u0646\u062a \u0646\u06c1\u06cc\u06ba \u0648\u06c1 (\u0633\u0686\u0627) \u0645\u0648\u0645\u0646 \u0646\u06c1\u06cc\u06ba (\u0645\u0633\u0646\u062f \u0627\u062d\u0645\u062f\u060c \u062d\u062f\u06cc\u062b: 5140)\u06d4\",\"\u06c1\u0645\u06cc\u06ba \u0686\u0627\u06c1\u06cc\u06d2 \u06a9\u06c1 \u06c1\u0645 \u0628\u06be\u06cc \u0627\u067e\u0646\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06a9\u06cc \u0633\u0646\u0651\u062a \u067e\u0631 \u0639\u0645\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u06c1\u0645\u06cc\u0634\u06c1 \u0633\u0686 \u0628\u0648\u0644\u06cc\u06ba \u0627\u0648\u0631 \u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u06cc \u0627\u0645\u0627\u0646\u062a \u06a9\u0627 \u062e\u06cc\u0627\u0644 \u0631\u06a9\u06be\u06cc\u06ba\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06c1\u0645\u06cc\u0634\u06c1 ______ \u0628\u0648\u0644\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"ur\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06c1\u0645\u06cc\u0634\u06c1 ______ \u0628\u0648\u0644\u062a\u06d2 \u062a\u06be\u06d2\u06d4\"},\"opts\":[\"\u0633\u0686\",\"\u062c\u06be\u0648\u0679\",\"\u063a\u0635\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0635\u0627\u062f\u0642 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0635\u0627\u062f\u0642 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u06c1\u0645\u06cc\u0634\u06c1 \u0633\u0686 \u0628\u0648\u0644\u0646\u06d2 \u0648\u0627\u0644\u0627\",\"\u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u06cc \u0686\u06cc\u0632\u06cc\u06ba \u0631\u06a9\u06be\u0646\u06d2 \u0648\u0627\u0644\u0627\",\"\u0628\u06c1\u062a \u062a\u06cc\u0632 \u062f\u0648\u0691\u0646\u06d2 \u0648\u0627\u0644\u0627\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0645\u06cc\u0646 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u0645\u06cc\u0646 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u06cc \u0686\u06cc\u0632\u0648\u06ba \u06a9\u0648 \u062d\u0641\u0627\u0638\u062a \u0633\u06d2 \u0631\u06a9\u06be\u0646\u06d2 \u0648\u0627\u0644\u0627\",\"\u06c1\u0645\u06cc\u0634\u06c1 \u06c1\u0646\u0633\u0646\u06d2 \u0648\u0627\u0644\u0627\",\"\u0628\u06c1\u062a \u0628\u0648\u0644\u0646\u06d2 \u0648\u0627\u0644\u0627\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u0646\u06d2 \u0645\u06a9\u0651\u06c1 \u0648\u0627\u0644\u0648\u06ba \u0633\u06d2 \u06a9\u0633 \u067e\u06c1\u0627\u0691\u06cc \u067e\u0631 \u062e\u0637\u0627\u0628 \u0641\u0631\u0645\u0627\u06cc\u0627\u061f\",\"ur\":\"\u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u0646\u06d2 \u0645\u06a9\u0651\u06c1 \u0648\u0627\u0644\u0648\u06ba \u0633\u06d2 \u06a9\u0633 \u067e\u06c1\u0627\u0691\u06cc \u067e\u0631 \u062e\u0637\u0627\u0628 \u0641\u0631\u0645\u0627\u06cc\u0627\u061f\"},\"opts\":[\"\u0635\u0641\u0627\",\"\u06c1\u0645\u0627\u0644\u06cc\u06c1\",\"\u06a9\u06d2 \u0679\u0648\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0633\u0686 ______ \u06a9\u06cc \u0637\u0631\u0641 \u0644\u06d2 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4\",\"ur\":\"\u0633\u0686 ______ \u06a9\u06cc \u0637\u0631\u0641 \u0644\u06d2 \u062c\u0627\u062a\u0627 \u06c1\u06d2\u06d4\"},\"opts\":[\"\u0646\u06cc\u06a9\u06cc\",\"\u0628\u0631\u0627\u0626\u06cc\",\"\u063a\u0635\u06d2\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0627\u0686\u06be\u06d2 \u0627\u062e\u0644\u0627\u0642\",\"page\":31,\"cards\":[\"\u0627\u06cc\u06a9 \u0645\u0631\u062a\u0628\u06c1 \u0627\u06cc\u06a9 \u0634\u062e\u0635 \u06a9\u0645\u0628\u0644 \u0644\u067e\u06cc\u0679\u06d2 \u06c1\u0648\u0626\u06d2 \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06a9\u06cc \u062e\u062f\u0645\u062a \u0645\u06cc\u06ba \u062d\u0627\u0636\u0631 \u06c1\u0648\u0627\u06d4 \u0627\u0633 \u0646\u06d2 \u0639\u0631\u0636 \u06a9\u06cc\u0627: \u0627\u0644\u0644\u06c1 \u06a9\u06d2 \u0631\u0633\u0648\u0644! \u0645\u06cc\u06ba \u0646\u06d2 \u0631\u0627\u0633\u062a\u06d2 \u0645\u06cc\u06ba \u062f\u0631\u062e\u062a\u0648\u06ba \u06a9\u0627 \u0627\u06cc\u06a9 \u062c\u06be\u0646\u0688 \u062f\u06cc\u06a9\u06be\u0627 \u0627\u0648\u0631 \u0648\u06c1\u0627\u06ba \u0686\u0691\u06cc\u0627 \u06a9\u06d2 \u0628\u0686\u0648\u06ba \u06a9\u06cc \u0622\u0648\u0627\u0632 \u0633\u0646\u06cc\u06d4\",\"\u0645\u06cc\u06ba \u0646\u06d2 \u0627\u0646\u06be\u06cc\u06ba \u067e\u06a9\u0691 \u06a9\u0631 \u0627\u067e\u0646\u06d2 \u06a9\u0645\u0628\u0644 \u0645\u06cc\u06ba \u0631\u06a9\u06be \u0644\u06cc\u0627\u06d4 \u0627\u062a\u0646\u06d2 \u0645\u06cc\u06ba \u0628\u0686\u0648\u06ba \u06a9\u06cc \u0645\u0627\u06ba \u0622 \u06af\u0626\u06cc \u0627\u0648\u0631 \u0648\u06c1 \u0645\u06cc\u0631\u06d2 \u0633\u0631 \u067e\u0631 \u0645\u0646\u0688\u0644\u0627\u0646\u06d2 \u0644\u06af\u06cc\u06d4 \u0645\u06cc\u06ba \u0646\u06d2 \u0627\u0633\u06d2 \u0628\u06be\u06cc \u0627\u067e\u0646\u06d2 \u06a9\u0645\u0628\u0644 \u0645\u06cc\u06ba \u0644\u067e\u06cc\u0679 \u0644\u06cc\u0627\u06d4\",\"\u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u0646\u06be\u06cc\u06ba \u06cc\u06c1\u0627\u06ba \u0631\u06a9\u06be \u062f\u0648\u06d4 \u0627\u0633 \u0634\u062e\u0635 \u0646\u06d2 \u0627\u0646\u06be\u06cc\u06ba \u0631\u06a9\u06be \u062f\u06cc\u0627 \u0644\u06cc\u06a9\u0646 \u0645\u0627\u06ba \u0646\u06d2 \u0627\u067e\u0646\u06d2 \u0628\u0686\u0648\u06ba \u06a9\u0627 \u0633\u0627\u062a\u06be \u0646\u06c1\u06cc\u06ba \u0686\u06be\u0648\u0691\u0627\u06d4\",\"\u062a\u0628 \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u0646\u06d2 \u0635\u062d\u0627\u0628\u06c1 \u06a9\u0631\u0627\u0645 \u0633\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u06a9\u06cc\u0627 \u062a\u0645 \u0627\u0633 \u0686\u0691\u06cc\u0627 \u06a9\u06d2 \u0627\u067e\u0646\u06d2 \u0628\u0686\u0648\u06ba \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0645\u062d\u0628\u062a \u06a9\u0631\u0646\u06d2 \u067e\u0631 \u062a\u0639\u062c\u0628 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u061f \u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0627\u067e\u0646\u06d2 \u0628\u0646\u062f\u0648\u06ba \u0633\u06d2 \u0627\u0633 \u0633\u06d2 \u06a9\u06c1\u06cc\u06ba \u0632\u06cc\u0627\u062f\u06c1 \u0645\u062d\u0628\u062a \u0631\u06a9\u06be\u062a\u0627 \u06c1\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u062a\u0645 \u0627\u0646\u06be\u06cc\u06ba \u0627\u0646 \u06a9\u06cc \u0645\u0627\u06ba \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0644\u06d2 \u062c\u0627\u0624 \u0627\u0648\u0631 \u0648\u06c1\u06cc\u06ba \u0686\u06be\u0648\u0691 \u0622\u0624 \u062c\u06c1\u0627\u06ba \u0633\u06d2 \u0627\u0646\u06be\u06cc\u06ba \u0644\u0627\u0626\u06d2 \u06c1\u0648\u06d4 \u062a\u0648 \u0648\u06c1 \u0634\u062e\u0635 \u0627\u0646\u06be\u06cc\u06ba \u0648\u0627\u067e\u0633 \u0686\u06be\u0648\u0691 \u0622\u06cc\u0627 (\u0633\u0646\u0646 \u0627\u0628\u0648 \u062f\u0627\u0624\u062f\u060c \u062d\u062f\u06cc\u062b: 3089)\u06d4\",\"\u0622\u067e \ufdfa \u0627\u0646\u0633\u0627\u0646\u0648\u06ba \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0633\u0627\u062a\u06be \u062c\u0627\u0646\u0648\u0631\u0648\u06ba \u0633\u06d2 \u0628\u06be\u06cc \u0627\u0686\u06be\u0627 \u0633\u0644\u0648\u06a9 \u06a9\u06cc\u0627 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u06c1\u0645\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u0627\u0686\u06be\u06cc \u0627\u0686\u06be\u06cc \u0628\u0627\u062a\u06cc\u06ba \u0633\u06a9\u06be\u0627\u0626\u06cc\u06ba\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0628\u06c1\u062a \u0633\u0627\u0631\u06d2 \u06a9\u0627\u0641\u0631 \u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06a9\u06d2 \u0627\u0686\u06be\u06d2 \u0627\u062e\u0644\u0627\u0642 \u06a9\u06cc \u0648\u062c\u06c1 \u0633\u06d2 \u0645\u0633\u0644\u0645\u0627\u0646 \u06c1\u0648 \u06af\u0626\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u0633\u06a9\u06be\u0627\u06cc\u0627 \u06a9\u06c1 \u06c1\u0645 \u0627\u067e\u0646\u06d2 \u0627\u0645\u06cc \u0627\u0628\u0648 \u06a9\u06cc \u0628\u0627\u062a \u0645\u0627\u0646\u06cc\u06ba\u06d4\",\"\u0628\u06c1\u0646 \u0628\u06be\u0627\u0626\u06cc\u0648\u06ba \u0627\u0648\u0631 \u062f\u0648\u0633\u062a\u0648\u06ba \u06a9\u06d2 \u0633\u0627\u062a\u06be \u0645\u0644 \u062c\u0644 \u06a9\u0631 \u0631\u06c1\u06cc\u06ba\u06d4\",\"\u062f\u0648\u0633\u062a\u0648\u06ba \u06a9\u0648 \u0627\u0686\u06be\u06d2 \u0646\u0627\u0645 \u0633\u06d2 \u067e\u06a9\u0627\u0631\u06cc\u06ba\u06d4 \u0648\u0642\u062a \u06a9\u06cc \u067e\u0627\u0628\u0646\u062f\u06cc \u06a9\u0631\u06cc\u06ba\u06d4 \u0627\u067e\u0646\u06cc \u0628\u0627\u0631\u06cc \u06a9\u0627 \u0627\u0646\u062a\u0638\u0627\u0631 \u06a9\u0631\u06cc\u06ba\u06d4\",\"\u0627\u067e\u0646\u06d2 \u0633\u06d2 \u0628\u0691\u0648\u06ba \u06a9\u0627 \u0627\u062f\u0628 \u06a9\u0631\u06cc\u06ba\u06d4 \u0627\u067e\u0646\u06d2 \u0633\u06d2 \u0686\u06be\u0648\u0679\u0648\u06ba \u0633\u06d2 \u067e\u06cc\u0627\u0631 \u06a9\u0631\u06cc\u06ba\u06d4 \u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u0648 \u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0645\u06cc\u06ba \u067e\u06c1\u0644 \u06a9\u0631\u06cc\u06ba\u06d4\",\"\u0641\u0631\u0645\u0627\u0646\u0650 \u0627\u0644\u0670\u06c1\u06cc: \u0648\u064e\u0627\u0650\u0646\u064e\u0651\u0643\u064e \u0644\u064e\u0639\u064e\u0644\u0670\u0649 \u062e\u064f\u0644\u064f\u0642\u064d \u0639\u064e\u0638\u0650\u064a\u0652\u0645\u064d \u06dd \u0627\u0648\u0631 \u06cc\u0642\u06cc\u0646\u0627\u064b \u0622\u067e \u0627\u062e\u0644\u0627\u0642 \u06a9\u06d2 \u0627\u0639\u0644\u06cc\u0670 \u0645\u0631\u062a\u0628\u06d2 \u067e\u0631 \u06c1\u06cc\u06ba (\u0633\u0648\u0631\u06c3 \u0627\u0644\u0642\u0644\u0645\u060c \u0622\u06cc\u062a: 4)\u06d4\",\"\u0641\u0631\u0645\u0627\u0646\u0650 \u0645\u0635\u0637\u0641\u06cc\u0670 \ufdfa: \u062a\u0645 \u0645\u06cc\u06ba \u0633\u06d2 \u0627\u0686\u06be\u0627 \u0648\u06c1 \u06c1\u06d2 \u062c\u0633 \u06a9\u06d2 \u0627\u062e\u0644\u0627\u0642 \u0627\u0686\u06be\u06d2 \u06c1\u06cc\u06ba (\u0633\u0646\u0646 \u062a\u0631\u0645\u0630\u06cc\u060c \u062d\u062f\u06cc\u062b: 1162)\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u062f\u0648\u0633\u062a\u0648\u06ba \u06a9\u0648 ______ \u0646\u0627\u0645 \u0633\u06d2 \u067e\u06a9\u0627\u0631\u06cc\u06ba\u06d4\",\"ur\":\"\u062f\u0648\u0633\u062a\u0648\u06ba \u06a9\u0648 ______ \u0646\u0627\u0645 \u0633\u06d2 \u067e\u06a9\u0627\u0631\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0627\u0686\u06be\u06d2\",\"\u0628\u0631\u06d2\",\"\u0627\u0644\u0679\u06d2\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0628\u0691\u0648\u06ba \u06a9\u0627 ______ \u06a9\u0631\u06cc\u06ba\u06d4\",\"ur\":\"\u0628\u0691\u0648\u06ba \u06a9\u0627 ______ \u06a9\u0631\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0627\u062f\u0628\",\"\u0645\u0630\u0627\u0642\",\"\u0634\u0648\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0648\u0642\u062a \u06a9\u06cc ______ \u06a9\u0631\u06cc\u06ba\u06d4\",\"ur\":\"\u0648\u0642\u062a \u06a9\u06cc ______ \u06a9\u0631\u06cc\u06ba\u06d4\"},\"opts\":[\"\u067e\u0627\u0628\u0646\u062f\u06cc\",\"\u0628\u06d2 \u067e\u0631\u0648\u0627\u0626\u06cc\",\"\u062f\u06cc\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06a9\u0633\u06cc \u06a9\u06cc \u0686\u06cc\u0632 ______ \u0644\u06d2 \u06a9\u0631 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u06cc\u06ba\u06d4\",\"ur\":\"\u06a9\u0633\u06cc \u06a9\u06cc \u0686\u06cc\u0632 ______ \u0644\u06d2 \u06a9\u0631 \u0627\u0633\u062a\u0639\u0645\u0627\u0644 \u06a9\u0631\u06cc\u06ba\u06d4\"},\"opts\":[\"\u0627\u062c\u0627\u0632\u062a\",\"\u0686\u06be\u067e \u06a9\u0631\",\"\u0632\u0628\u0631\u062f\u0633\u062a\u06cc\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u06a9\u06cc\u0627 \u0633\u06a9\u06be\u0627\u06cc\u0627\u061f\",\"ur\":\"\u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u0646\u06d2 \u06c1\u0645\u06cc\u06ba \u06a9\u06cc\u0627 \u0633\u06a9\u06be\u0627\u06cc\u0627\u061f\"},\"opts\":[\"\u0627\u0686\u06be\u06cc \u0627\u0686\u06be\u06cc \u0628\u0627\u062a\u06cc\u06ba\",\"\u0628\u0631\u06cc \u0628\u0627\u062a\u06cc\u06ba\",\"\u0635\u0631\u0641 \u06a9\u06be\u06cc\u0644\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u0627\",\"page\":34,\"cards\":[\"\u0627\u06cc\u06a9 \u0634\u062e\u0635 \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06a9\u06d2 \u067e\u0627\u0633 \u0622\u06cc\u0627 \u0627\u0648\u0631 \u0627\u0633 \u0646\u06d2 \u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u06a9\u06c1\u0627\u06d4 \u0622\u067e \ufdfa \u0646\u06d2 \u0627\u0633\u06d2 \u0633\u0644\u0627\u0645 \u06a9\u0627 \u062c\u0648\u0627\u0628 \u062f\u06cc\u0627\u06d4 \u067e\u06be\u0631 \u0648\u06c1 \u0628\u06cc\u0679\u06be \u06af\u06cc\u0627 \u062a\u0648 \u0646\u0628\u06cc \u06a9\u0631\u06cc\u0645 \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u0633 \u06a9\u0648 \u062f\u0633 \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u06cc\u06ba\u06d4\",\"\u067e\u06be\u0631 \u0627\u06cc\u06a9 \u0627\u0648\u0631 \u0634\u062e\u0635 \u0622\u06cc\u0627 \u0627\u0648\u0631 \u0627\u0633 \u0646\u06d2 \u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u06a9\u06c1\u0627\u06d4 \u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u0633 \u06a9\u0648 \u0628\u06cc\u0633 \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u06cc\u06ba\u06d4\",\"\u067e\u06be\u0631 \u0627\u06cc\u06a9 \u0627\u0648\u0631 \u0634\u062e\u0635 \u0622\u06cc\u0627 \u0627\u0633 \u0646\u06d2 \u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u0648\u064e\u0628\u064e\u0631\u064e\u0643\u064e\u0627\u062a\u064f\u0647\u0657 \u06a9\u06c1\u0627\u06d4 \u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u0633\u06d2 \u062a\u06cc\u0633 \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u06cc\u06ba (\u0633\u0646\u0646 \u0627\u0628\u0648 \u062f\u0627\u0624\u062f\u060c \u062d\u062f\u06cc\u062b: 5195)\u06d4\",\"\u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u0627 \u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u06a9\u06cc \u0633\u0646\u0651\u062a \u06c1\u06d2\u06d4 \u0622\u067e \ufdfa \u0646\u06d2 \u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0627\u0648\u0631 \u0627\u0633 \u06a9\u0627 \u062c\u0648\u0627\u0628 \u062f\u06cc\u0646\u06d2 \u06a9\u0627 \u062d\u06a9\u0645 \u0641\u0631\u0645\u0627\u06cc\u0627 \u06c1\u06d2\u06d4\",\"\u0622\u067e \ufdfa \u0646\u06d2 \u0641\u0631\u0645\u0627\u06cc\u0627: \u0627\u064e\u0641\u0652\u0634\u064f\u0648\u0627 \u0627\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064e\u060c \u06cc\u0639\u0646\u06cc \u0633\u0644\u0627\u0645 \u06a9\u0648 \u0639\u0627\u0645 \u06a9\u0631\u0648 \u0627\u0648\u0631 \u0627\u0633\u06d2 \u067e\u06be\u06cc\u0644\u0627\u0624 (\u0633\u0646\u0646 \u062a\u0631\u0645\u0630\u06cc\u060c \u062d\u062f\u06cc\u062b: 1854)\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2: \u062a\u0645 \u067e\u0631 \u0633\u0644\u0627\u0645\u062a\u06cc \u06c1\u0648\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u0648\u064e\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u064f \u0627\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2: \u0627\u0648\u0631 \u062a\u0645 \u067e\u0631 \u0628\u06be\u06cc \u0633\u0644\u0627\u0645\u062a\u06cc \u06c1\u0648\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0627\u0645\u0648\u06ba \u0645\u06cc\u06ba \u0633\u06d2 \u0627\u06cc\u06a9 \u0646\u0627\u0645 (\u0633\u0644\u0627\u0645\u062a\u06cc \u0648\u0627\u0644\u0627) \u0628\u06be\u06cc \u06c1\u06d2\u06d4 \u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0633\u06d2 \u0645\u062d\u0628\u062a \u0628\u0691\u06be\u062a\u06cc \u06c1\u06d2\u06d4\",\"\u0635\u062d\u0627\u0628\u06c1 \u06a9\u0631\u0627\u0645 \u0631\u0636\u06cc \u0627\u0644\u0644\u06c1 \u0639\u0646\u06c1\u0645 \u0627\u06cc\u06a9 \u062f\u0648\u0633\u0631\u06d2 \u06a9\u0648 \u0633\u0644\u0627\u0645 \u06a9\u06cc\u0627 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4 \u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u0628\u0686\u0648\u06ba \u06a9\u0648 \u0628\u06be\u06cc \u0633\u0644\u0627\u0645 \u06a9\u06cc\u0627 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u06d2 \u0622\u062f\u0627\u0628: \u06c1\u0645\u06cc\u0634\u06c1 \u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0645\u06cc\u06ba \u067e\u06c1\u0644 \u06a9\u0631\u06cc\u06ba\u06d4 \u0686\u06be\u0648\u0679\u0627 \u0628\u0691\u06d2 \u06a9\u0648 \u067e\u06c1\u0644\u06d2 \u0633\u0644\u0627\u0645 \u06a9\u0631\u06d2\u06d4\",\"\u0633\u0648\u0627\u0631\u06cc \u067e\u0631 \u0628\u06cc\u0679\u06be\u0627 \u06c1\u0648\u0627 \u0634\u062e\u0635 \u067e\u06cc\u062f\u0644 \u0686\u0644\u0646\u06d2 \u0648\u0627\u0644\u06d2 \u0634\u062e\u0635 \u06a9\u0648 \u067e\u06c1\u0644\u06d2 \u0633\u0644\u0627\u0645 \u06a9\u0631\u06d2\u06d4\",\"\u0627\u06af\u0631 \u06a9\u0648\u0626\u06cc \u0633\u0644\u0627\u0645 \u06a9\u0631\u06d2 \u062a\u0648 \u0627\u0633 \u06a9\u0627 \u0645\u06a9\u0645\u0644 \u062c\u0648\u0627\u0628 \u062f\u06cc\u06ba\u06d4 \u06af\u06be\u0631 \u0633\u06d2 \u0646\u06a9\u0644\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0627\u0648\u0631 \u06af\u06be\u0631 \u0645\u06cc\u06ba \u062f\u0627\u062e\u0644 \u06c1\u0648\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0633\u0644\u0627\u0645 \u06a9\u0631\u06cc\u06ba\u06d4\",\"\u06c1\u0645\u06cc\u06ba \u0686\u0627\u06c1\u06cc\u06d2 \u06a9\u06c1 \u06c1\u0645 \u0627\u067e\u0646\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06a9\u06cc \u0633\u06cc\u0631\u062a \u067e\u0631 \u0639\u0645\u0644 \u06a9\u0631\u062a\u06d2 \u06c1\u0648\u0626\u06d2 \u0633\u0644\u0627\u0645 \u0645\u06cc\u06ba \u067e\u06c1\u0644 \u06a9\u0631\u06cc\u06ba\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u06a9\u06c1\u0646\u06d2 \u067e\u0631 \u06a9\u062a\u0646\u06cc \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u062a\u06cc \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u06a9\u06c1\u0646\u06d2 \u067e\u0631 \u06a9\u062a\u0646\u06cc \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u062a\u06cc \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062f\u0633\",\"\u0628\u06cc\u0633\",\"\u062a\u06cc\u0633\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u06a9\u06c1\u0646\u06d2 \u067e\u0631 \u06a9\u062a\u0646\u06cc \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u062a\u06cc \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u06a9\u06c1\u0646\u06d2 \u067e\u0631 \u06a9\u062a\u0646\u06cc \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u062a\u06cc \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062f\u0633\",\"\u0628\u06cc\u0633\",\"\u062a\u06cc\u0633\"],\"a\":1,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u0648\u064e\u0628\u064e\u0631\u064e\u0643\u064e\u0627\u062a\u064f\u0647\u0657 \u06a9\u06c1\u0646\u06d2 \u067e\u0631 \u06a9\u062a\u0646\u06cc \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u062a\u06cc \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064f \u0627\u0644\u0644\u0651\u0670\u0647\u0650 \u0648\u064e\u0628\u064e\u0631\u064e\u0643\u064e\u0627\u062a\u064f\u0647\u0657 \u06a9\u06c1\u0646\u06d2 \u067e\u0631 \u06a9\u062a\u0646\u06cc \u0646\u06cc\u06a9\u06cc\u0627\u06ba \u0645\u0644\u062a\u06cc \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062f\u0633\",\"\u0628\u06cc\u0633\",\"\u062a\u06cc\u0633\"],\"a\":2,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u064e\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u062a\u0645 \u067e\u0631 \u0633\u0644\u0627\u0645\u062a\u06cc \u06c1\u0648\",\"\u0635\u0628\u062d \u0628\u062e\u06cc\u0631\",\"\u062e\u062f\u0627 \u062d\u0627\u0641\u0638\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0645\u06cc\u06ba \u06a9\u0648\u0646 \u067e\u06c1\u0644 \u06a9\u0631\u06d2\u061f\",\"ur\":\"\u0633\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0645\u06cc\u06ba \u06a9\u0648\u0646 \u067e\u06c1\u0644 \u06a9\u0631\u06d2\u061f\"},\"opts\":[\"\u062c\u0648 \u0628\u06be\u06cc \u067e\u06c1\u0644\u06d2 \u062f\u06cc\u06a9\u06be\u06d2\",\"\u0635\u0631\u0641 \u0628\u0691\u0627\",\"\u06a9\u0648\u0626\u06cc \u0646\u06c1\u06cc\u06ba\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0686\u06be\u0648\u0679\u0627 \u0628\u0691\u06d2 \u06a9\u0648 \u06a9\u06cc\u0627 \u06a9\u0631\u06d2\u061f\",\"ur\":\"\u0686\u06be\u0648\u0679\u0627 \u0628\u0691\u06d2 \u06a9\u0648 \u06a9\u06cc\u0627 \u06a9\u0631\u06d2\u061f\"},\"opts\":[\"\u067e\u06c1\u0644\u06d2 \u0633\u0644\u0627\u0645 \u06a9\u0631\u06d2\",\"\u0688\u0631\u0627\u0626\u06d2\",\"\u0646\u0638\u0631 \u0627\u0646\u062f\u0627\u0632 \u06a9\u0631\u06d2\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u0627 \u062a\u0639\u0627\u0631\u0641\",\"page\":38,\"cards\":[\"\u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u0646\u06d2 \u0627\u0646\u0633\u0627\u0646\u0648\u06ba \u06a9\u06cc \u06c1\u062f\u0627\u06cc\u062a \u0627\u0648\u0631 \u0631\u06c1\u0646\u0645\u0627\u0626\u06cc \u06a9\u06d2 \u0644\u06cc\u06d2 \u06c1\u0631 \u0632\u0645\u0627\u0646\u06d2 \u0645\u06cc\u06ba \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u0648 \u0628\u06be\u06cc\u062c\u0627\u06d4\",\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0646\u06d2 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 \u0628\u062a\u0627\u06cc\u0627 \u06a9\u06c1 \u0648\u06c1 \u0635\u0631\u0641 \u0627\u06cc\u06a9 \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u0631\u06cc\u06ba\u06d4\",\"\u0648\u06c1 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 \u0628\u062a\u0627\u062a\u06d2 \u06a9\u06c1 \u0646\u06cc\u06a9 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0648\u06ba \u06a9\u0648 \u062c\u0646\u0651\u062a \u0645\u0644\u06d2 \u06af\u06cc\u06d4 \u0648\u06c1 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 \u0646\u06cc\u06a9\u06cc \u06a9\u06d2 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u062a\u06d2 \u0627\u0648\u0631 \u0628\u0631\u0627\u0626\u06cc \u0633\u06d2 \u0645\u0646\u0639 \u0641\u0631\u0645\u0627\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u062f\u0646\u06cc\u0627 \u0645\u06cc\u06ba \u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u0627\u06cc\u06a9 \u0644\u0627\u06a9\u06be \u0686\u0648\u0628\u06cc\u0633 \u06c1\u0632\u0627\u0631 \u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u062a\u0634\u0631\u06cc\u0641 \u0644\u0627\u0626\u06d2\u06d4\",\"\u0633\u0628 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0627\u0646\u0633\u0627\u0646 \u0627\u0648\u0631 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0622\u062f\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u06c1\u06cc\u06ba\u06d4 \u0633\u0628 \u0633\u06d2 \u0622\u062e\u0631 \u0645\u06cc\u06ba \u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u062a\u0634\u0631\u06cc\u0641 \u0644\u0627\u0626\u06d2\u06d4\",\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0648\u06af\u0648\u06ba \u0645\u06cc\u06ba \u0633\u0628 \u0633\u06d2 \u0632\u06cc\u0627\u062f\u06c1 \u0646\u06cc\u06a9 \u0627\u0648\u0631 \u067e\u0631\u06c1\u06cc\u0632\u06af\u0627\u0631 \u062a\u06be\u06d2\u06d4\",\"\u0648\u06c1 \u0644\u0648\u06af\u0648\u06ba \u06a9\u06cc \u0645\u062f\u062f \u06a9\u0631\u062a\u06d2\u060c \u06c1\u0645\u06cc\u0634\u06c1 \u0633\u0686 \u0628\u0648\u0644\u062a\u06d2\u060c \u062f\u0648\u0633\u0631\u0648\u06ba \u06a9\u06cc \u0627\u0645\u0627\u0646\u062a\u0648\u06ba \u06a9\u0627 \u062e\u06cc\u0627\u0644 \u0631\u06a9\u06be\u062a\u06d2 \u0627\u0648\u0631 \u0633\u0628 \u0633\u06d2 \u0627\u0686\u06be\u0627 \u0633\u0644\u0648\u06a9 \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u0627\u0644\u0644\u06c1 \u062a\u0639\u0627\u0644\u06cc\u0670 \u06a9\u06d2 \u0646\u0628\u06cc \u062d\u0636\u0631\u062a \u0633\u0644\u06cc\u0645\u0627\u0646 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u067e\u0631\u0646\u062f\u0648\u06ba \u0633\u06d2 \u0628\u06be\u06cc \u0628\u0627\u062a \u06a9\u0631\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"\u0645\u0632\u06cc\u062f \u062c\u0627\u0646\u06cc\u06d2! \u062d\u0636\u0631\u062a \u0645\u0648\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u0627 \u0644\u0642\u0628 \u06a9\u0644\u06cc\u0645 \u0627\u0644\u0644\u06c1 (\u0627\u0644\u0644\u06c1 \u0633\u06d2 \u06a9\u0644\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0627) \u06c1\u06d2\u06d4\",\"\u06cc\u0627\u062f \u0631\u06a9\u06be\u06cc\u06d2! \u06c1\u0645\u0627\u0631\u06d2 \u067e\u06cc\u0627\u0631\u06d2 \u0646\u0628\u06cc \ufdfa \u06a9\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba \u0633\u0628 \u0646\u0628\u06cc\u0648\u06ba \u0646\u06d2 \u0628\u062a\u0627\u06cc\u0627 \u062a\u06be\u0627 \u06a9\u06c1 \u062d\u0636\u0631\u062a \u0645\u062d\u0645\u062f \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u06c1 \ufdfa \u0622\u062e\u0631\u06cc \u0646\u0628\u06cc \u0627\u0648\u0631 \u0631\u0633\u0648\u0644 \u0628\u0646 \u06a9\u0631 \u062f\u0646\u06cc\u0627 \u0645\u06cc\u06ba \u062a\u0634\u0631\u06cc\u0641 \u0644\u0627\u0626\u06cc\u06ba \u06af\u06d2\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 ______ \u06a9\u06d2 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u062a\u06d2 \u062a\u06be\u06d2\u06d4\",\"ur\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0648\u06af\u0648\u06ba \u06a9\u0648 ______ \u06a9\u06d2 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u06a9\u0627 \u062d\u06a9\u0645 \u062f\u06cc\u062a\u06d2 \u062a\u06be\u06d2\u06d4\"},\"opts\":[\"\u0646\u06cc\u06a9\u06cc\",\"\u0628\u0631\u0627\u0626\u06cc\",\"\u0644\u0691\u0627\u0626\u06cc\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0646\u06cc\u06a9 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0648\u06ba \u06a9\u0648 ______ \u0645\u0644\u06d2 \u06af\u06cc\u06d4\",\"ur\":\"\u0646\u06cc\u06a9 \u06a9\u0627\u0645 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0648\u06ba \u06a9\u0648 ______ \u0645\u0644\u06d2 \u06af\u06cc\u06d4\"},\"opts\":[\"\u062c\u0646\u0651\u062a\",\"\u0633\u0632\u0627\",\"\u062e\u0627\u0644\u06cc \u06c1\u0627\u062a\u06be\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0648\u06af\u0648\u06ba \u0645\u06cc\u06ba \u0633\u0628 \u0633\u06d2 \u0632\u06cc\u0627\u062f\u06c1 ______ \u062a\u06be\u06d2\u06d4\",\"ur\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u0644\u0648\u06af\u0648\u06ba \u0645\u06cc\u06ba \u0633\u0628 \u0633\u06d2 \u0632\u06cc\u0627\u062f\u06c1 ______ \u062a\u06be\u06d2\u06d4\"},\"opts\":[\"\u0646\u06cc\u06a9\",\"\u063a\u0635\u06d2 \u0648\u0627\u0644\u06d2\",\"\u0633\u0633\u062a\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u06cc \u062a\u0639\u062f\u0627\u062f \u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u06a9\u062a\u0646\u06cc \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u0646\u0628\u06cc\u0627\u0626\u06d2 \u06a9\u0631\u0627\u0645 \u0639\u0644\u06cc\u06c1\u0645 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u06cc \u062a\u0639\u062f\u0627\u062f \u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u06a9\u062a\u0646\u06cc \u06c1\u06d2\u061f\"},\"opts\":[\"\u0627\u06cc\u06a9 \u0644\u0627\u06a9\u06be \u0686\u0648\u0628\u06cc\u0633 \u06c1\u0632\u0627\u0631\",\"\u0633\u0648\",\"\u062f\u0633 \u06c1\u0632\u0627\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0633\u0628 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0627\u0646\u0633\u0627\u0646 \u0627\u0648\u0631 \u0646\u0628\u06cc \u06a9\u0648\u0646 \u06c1\u06cc\u06ba\u061f\",\"ur\":\"\u0633\u0628 \u0633\u06d2 \u067e\u06c1\u0644\u06d2 \u0627\u0646\u0633\u0627\u0646 \u0627\u0648\u0631 \u0646\u0628\u06cc \u06a9\u0648\u0646 \u06c1\u06cc\u06ba\u061f\"},\"opts\":[\"\u062d\u0636\u0631\u062a \u0622\u062f\u0645 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\",\"\u062d\u0636\u0631\u062a \u0646\u0648\u062d \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\",\"\u062d\u0636\u0631\u062a \u0639\u06cc\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u062d\u0636\u0631\u062a \u0645\u0648\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u0627 \u0644\u0642\u0628 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\",\"ur\":\"\u062d\u0636\u0631\u062a \u0645\u0648\u0633\u06cc\u0670 \u0639\u0644\u06cc\u06c1 \u0627\u0644\u0633\u0644\u0627\u0645 \u06a9\u0627 \u0644\u0642\u0628 \u06a9\u06cc\u0627 \u06c1\u06d2\u061f\"},\"opts\":[\"\u06a9\u0644\u06cc\u0645 \u0627\u0644\u0644\u06c1\",\"\u062e\u0644\u06cc\u0644 \u0627\u0644\u0644\u06c1\",\"\u0631\u0648\u062d \u0627\u0644\u0644\u06c1\"],\"a\":0,\"topic\":\"chapter\"}]},{\"title\":\"\u0641\u0631\u06c1\u0646\u06af (\u0645\u0634\u06a9\u0644 \u0627\u0644\u0641\u0627\u0638 \u06a9\u06d2 \u0645\u0639\u0646\u06cc)\",\"page\":41,\"cards\":[\"\u0646\u0635\u0641 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0622\u062f\u06be\u0627\u06d4 \u062e\u0627\u0635 \u0628\u0646\u062f\u06d2 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0686\u0646\u06d2 \u06c1\u0648\u0626\u06d2 \u0644\u0648\u06af\u06d4\",\"\u0627\u06cc\u0645\u0627\u0646 \u0644\u0627\u0646\u0627 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u062f\u0644 \u0648 \u062c\u0627\u0646 \u0633\u06d2 \u0645\u0627\u0646\u0646\u0627\u06d4 \u062e\u0627\u062a\u0645 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u062e\u062a\u0645 \u06a9\u0631\u0646\u06d2 \u0648\u0627\u0644\u0627\u06d4\",\"\u0627\u0644\u0646\u0628\u06cc\u0651\u06cc\u0646 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0646\u0628\u06cc \u06a9\u06cc \u062c\u0645\u0639 \u06cc\u0639\u0646\u06cc \u0627\u0646\u0628\u06cc\u0627\u0621\u06d4 \u0642\u06cc\u0627\u0645\u062a \u06a9\u0627 \u062f\u0646 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0622\u062e\u0631\u062a \u06a9\u0627 \u062f\u0646\u06d4\",\"\u0641\u0636\u06cc\u0644\u062a \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0628\u0631\u062a\u0631\u06cc\u06d4 \u0639\u0628\u0627\u062f\u062a \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0628\u0646\u062f\u06af\u06cc\u06d4\",\"\u0646\u0628\u06cc \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u062e\u0628\u0631 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u0627\u06d4 \u0627\u062e\u0644\u0627\u0642\u0650 \u062d\u0633\u0646\u06c1 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u0627\u0686\u06be\u06cc \u0639\u0627\u062f\u062a\u06cc\u06ba\u06d4\",\"\u0641\u0644\u0627\u062d \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u06a9\u0627\u0645\u06cc\u0627\u0628\u06cc\u06d4 \u0627\u0639\u0636\u0627\u0621 \u06a9\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2 \u06c1\u0627\u062a\u06be\u060c \u067e\u0627\u0624\u06ba\u060c \u0686\u06c1\u0631\u06c1 \u0648\u063a\u06cc\u0631\u06c1\u06d4\"],\"quiz\":[{\"q\":{\"en\":\"\u0646\u0635\u0641 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0646\u0635\u0641 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0622\u062f\u06be\u0627\",\"\u067e\u0648\u0631\u0627\",\"\u062f\u06af\u0646\u0627\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0639\u0628\u0627\u062f\u062a \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0639\u0628\u0627\u062f\u062a \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0628\u0646\u062f\u06af\u06cc\",\"\u06a9\u06be\u06cc\u0644\",\"\u0633\u0641\u0631\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0641\u0644\u0627\u062d \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0641\u0644\u0627\u062d \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u06a9\u0627\u0645\u06cc\u0627\u0628\u06cc\",\"\u0646\u0627\u06a9\u0627\u0645\u06cc\",\"\u063a\u0635\u06c1\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0627\u062e\u0644\u0627\u0642\u0650 \u062d\u0633\u0646\u06c1 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0627\u062e\u0644\u0627\u0642\u0650 \u062d\u0633\u0646\u06c1 \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u0627\u0686\u06be\u06cc \u0639\u0627\u062f\u062a\u06cc\u06ba\",\"\u0628\u0631\u06cc \u0639\u0627\u062f\u062a\u06cc\u06ba\",\"\u0646\u06cc\u0627 \u06a9\u06be\u06cc\u0644\"],\"a\":0,\"topic\":\"chapter\"},{\"q\":{\"en\":\"\u0646\u0628\u06cc \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\",\"ur\":\"\u0646\u0628\u06cc \u06a9\u0627 \u06a9\u06cc\u0627 \u0645\u0637\u0644\u0628 \u06c1\u06d2\u061f\"},\"opts\":[\"\u062e\u0628\u0631 \u062f\u06cc\u0646\u06d2 \u0648\u0627\u0644\u0627\",\"\u06a9\u06be\u06cc\u0644\u0646\u06d2 \u0648\u0627\u0644\u0627\",\"\u0628\u06cc\u0686\u0646\u06d2 \u0648\u0627\u0644\u0627\"],\"a\":0,\"topic\":\"chapter\"}]}]}")];
  function seedBooks() {
    var flags = {}; try { flags = JSON.parse(localStorage.getItem("pds-seeds-v2")) || {}; } catch (e) {}
    var changed = false;
    SEEDS.forEach(function (sd) {
      if (flags[sd.id]) return;
      flags[sd.id] = 1; changed = true;
      if (bookStore.some(function (b) { return b.id === sd.id; })) return;
      var ng = gnum(sd.grade);
      var meta = { province: "punjab", board: "Punjab Curriculum and Textbook Board (PCTB)", year: "2025-26", version: "SNC 2020", textbook: "Islamiyat Class 1 (PCTB, Lahore)", outcomes: "", source: "Class 1 Islamiyat Punjab textbook 2025-26 (PDF from taleem360.com, web version of PCTB textbook)", status: "pending" };
      var b = { id: sd.id, name: sd.name, subject: sd.subject, grade: String(sd.grade), lessons: [] };
      sd.chapters.forEach(function (c, i) {
        var body = c.cards.join(" ");
        b.lessons.push({ id: "up-" + sd.id + "-" + (i + 1), subject: sd.subject, min: ng, max: ng, topic: "chapter", uploaded: true, unit: {}, title: { en: c.title, ur: c.title }, body: { en: body, ur: body }, quiz: c.quiz,
          meta: { province: meta.province, board: meta.board, year: meta.year, version: meta.version, textbook: meta.textbook, chapter: c.title + " (p. " + c.page + ")", outcomes: meta.outcomes, source: meta.source, status: "pending" } });
      });
      bookStore.push(b);
    });
    if (changed) { try { localStorage.setItem("pds-seeds-v2", JSON.stringify(flags)); } catch (e) {} saveBooks(); }
  }
  function saveBooks() { try { localStorage.setItem(BKEY, JSON.stringify(bookStore)); return true; } catch (e) { return false; } }
  function loadPdfJs() {
    return new Promise(function (res, rej) {
      if (window.pdfjsLib) return res(window.pdfjsLib);
      var s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      s.onload = function () { window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"; res(window.pdfjsLib); };
      s.onerror = function () { rej(new Error("load")); };
      document.head.appendChild(s);
    });
  }
  async function extractPages(buf, onPage) {
    var lib = await loadPdfJs(), pdf = await lib.getDocument({ data: buf }).promise, pages = [], n = Math.min(pdf.numPages, 400);
    for (var p = 1; p <= n; p++) {
      var page = await pdf.getPage(p), tc = await page.getTextContent(), lines = [], cur = null;
      tc.items.forEach(function (it) {
        if (!it.str || !it.str.trim()) { return; }
        var y = it.transform[5], h = Math.abs(it.transform[3]) || it.height || 10;
        if (cur && Math.abs(cur.y - y) < h * 0.5) { cur.text += " " + it.str.trim(); cur.h = Math.max(cur.h, h); }
        else { cur = { text: it.str.trim(), y: y, h: h }; lines.push(cur); }
      });
      pages.push(lines);
      if (onPage) onPage(p, n);
    }
    return pages;
  }
  var CH_RE = /^(chapter|unit|lesson|topic)\b\s*[\divxl۰-۹]*\s*[.:\-–]?\s*/i, CH_UR = /^(باب|سبق|یونٹ|اکائی)\s*[\d۰-۹]*/;
  function words(s) { return String(s).match(/[^\s،,.۔؟?!:;()"'“”]+/g) || []; }
  function sentenceList(text, maxW) {
    var seen = {}, out = [];
    text.replace(/-\s+(?=[a-z])/g, "").split(/(?<=[.!?۔؟])\s+/).forEach(function (s) {
      s = s.replace(/\s+/g, " ").trim();
      var n = words(s).length, letters = (s.match(/[A-Za-z؀-ۿ]/g) || []).length;
      if (n < 3 || n > maxW || letters < s.length * 0.6 || seen[s]) return;
      seen[s] = 1; out.push(s);
    });
    return out;
  }
  function makeQuiz(sents, grade) {
    var vocab = [];
    sents.forEach(function (s) { words(s).forEach(function (w) { var c = w.replace(/[^A-Za-z؀-ۿ]/g, ""); if (c.length >= 4 && !STOP.test(c) && vocab.indexOf(c) < 0) vocab.push(c); }); });
    var quiz = [];
    if (vocab.length < 4) return quiz;
    sents.some(function (s, idx) {
      if (quiz.length >= 5) return true;
      if (idx % 2) return false;
      var ws = words(s).map(function (w) { return w.replace(/[^A-Za-z؀-ۿ]/g, ""); }).filter(function (w) { return w.length >= 4 && !STOP.test(w); });
      if (!ws.length) return false;
      var key = ws.sort(function (a, b) { return b.length - a.length; })[0];
      var d = vocab.filter(function (v) { return v !== key && v.length >= 3; });
      if (d.length < 2) return false;
      var d1 = d[(idx * 3) % d.length], d2 = d[(idx * 3 + 1 + Math.floor(d.length / 2)) % d.length];
      if (d1 === d2) d2 = d[(d.indexOf(d1) + 1) % d.length];
      var opts = [key, d1, d2], pos = idx % 3; opts = opts.slice(1); opts.splice(pos, 0, key);
      var gap = s.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), "____");
      quiz.push({ topic: "chapter", q: { en: "Fill the gap: " + gap, ur: "خالی جگہ بھریں: " + gap }, opts: opts, a: pos });
      return false;
    });
    return quiz;
  }
  function buildChapters(pages, grade) {
    var hs = []; pages.forEach(function (pg) { pg.forEach(function (l) { hs.push(l.h); }); });
    hs.sort(function (a, b) { return a - b; });
    var med = hs.length ? hs[Math.floor(hs.length / 2)] : 10, chapters = [], cur = null;
    var maxW = grade <= 2 ? 8 : grade <= 5 ? 14 : 25;
    pages.forEach(function (pg, pi) {
      pg.forEach(function (l) {
        var tx = l.text;
        if (/^[\d۰-۹\s]+$/.test(tx)) return;
        var big = l.h > med * 1.3 && words(tx).length <= 8 && !/[.۔]$/.test(tx);
        var isHead = tx.length <= 70 && (CH_RE.test(tx) || CH_UR.test(tx) || big);
        if (isHead) {
          if (cur && !cur.text.trim()) { cur.title += " " + tx; }
          else { cur = { title: tx, text: "", page: pi + 1 }; chapters.push(cur); }
        } else if (cur) { cur.text += " " + tx; }
      });
    });
    if (chapters.filter(function (c) { return c.text.length > 80; }).length < 2) {
      chapters = [];
      for (var i = 0; i < pages.length; i += 3) {
        chapters.push({ title: "Pages " + (i + 1) + "-" + Math.min(i + 3, pages.length), page: i + 1, text: pages.slice(i, i + 3).map(function (pg) { return pg.map(function (l) { return l.text; }).join(" "); }).join(" ") });
      }
    }
    return chapters.map(function (c) {
      var s = sentenceList(c.text, maxW).slice(0, 30);
      return { title: c.title.slice(0, 80), page: c.page, sents: s, quiz: makeQuiz(s, grade), keep: s.length >= 2 };
    }).filter(function (c) { return c.sents.length > 0; });
  }
  var upGrade = null, upSubj = "", advTab = "";
  function gradeLabel(g) { var n = gnum(g); return n === 0 ? (LANG() === "ur" ? "کے جی" : "KG") : n >= 11 ? (LANG() === "ur" ? "ایف اے سال " : "F.A Year ") + (n - 10) : (LANG() === "ur" ? "جماعت " : "Class ") + g; }
  function gradeCounts(g) {
    var n = gnum(g), up = 0, nb = 0;
    bookStore.forEach(function (b) { if (String(b.grade) === String(g)) { up += b.lessons.length; nb++; } });
    var own = D.lessons.filter(function (l) { return !l.uploaded && n >= l.min && n <= l.max; }).length;
    return { up: up, books: nb, own: own };
  }
  function classSubjects(g) {
    var n = gnum(g);
    if (n < 11) return D.subjects.filter(function (x) { return n >= x.min && n <= x.max; });
    var ids = D.faCompulsory.concat(D.faExtras); D.pathways.forEach(function (p) { ids = ids.concat(p.subjects); });
    return D.subjects.filter(function (x) { return ids.indexOf(x.id) > -1; });
  }
  // ---- typed lesson entry ----
  var ef = null, efMsg = "";
  function newEF(subs) { return { subject: upSubj || (subs[0] ? subs[0].id : ""), title: "", cards: "", qs: [0, 1, 2].map(function () { return { q: "", o: ["", "", "", ""], c: 0 }; }), pub: true, province: state.province || "pakistan", board: state.board || "", textbook: "", year: "", bulk: "" }; }
  function readEF() {
    if (!ef) return;
    var v = function (id) { var e = root.querySelector("#" + id); return e ? e.value : null; }, x;
    if ((x = v("efsubj")) !== null) ef.subject = x;
    if ((x = v("eftitle")) !== null) ef.title = x;
    if ((x = v("efcards")) !== null) ef.cards = x;
    if ((x = v("efprov")) !== null) ef.province = x;
    if ((x = v("efboard")) !== null) ef.board = x;
    if ((x = v("eftb")) !== null) ef.textbook = x;
    if ((x = v("efyr")) !== null) ef.year = x;
    if ((x = v("efbulk")) !== null) ef.bulk = x;
    ef.qs.forEach(function (q, i) {
      if ((x = v("efq" + i)) !== null) q.q = x;
      for (var j = 0; j < 4; j++) if ((x = v("efo" + i + "_" + j)) !== null) q.o[j] = x;
      if ((x = v("efc" + i)) !== null) q.c = Number(x);
    });
    var pb = root.querySelector("#efpub"); if (pb) ef.pub = pb.checked;
  }
  function typedBook(g, subj) {
    var id = "typed-" + String(g) + "-" + subj, b = bookStore.filter(function (x) { return x.id === id; })[0];
    if (!b) { b = { id: id, name: (LANG() === "ur" ? "ٹائپ کیے ہوئے اسباق" : "Typed lessons") + " · " + gradeLabel(g), subject: subj, grade: String(g), lessons: [] }; bookStore.push(b); b._new = true; }
    return b;
  }
  function addTypedLessons(g, subj, items, meta, hidden) {
    var b = typedBook(g, subj), isNew = !!b._new, n0 = b.lessons.length, seq = 0, ng = gnum(g), added = [];
    b.lessons.forEach(function (l) { var m = /-(\d+)$/.exec(l.id); if (m) seq = Math.max(seq, Number(m[1])); });
    items.forEach(function (it) {
      seq++;
      var body = it.cards.join(" ");
      var l = { id: "up-" + b.id + "-" + seq, subject: subj, min: ng, max: ng, topic: "chapter", uploaded: true, unit: {}, title: { en: it.title, ur: it.title }, body: { en: body, ur: body }, quiz: it.quiz || [],
        meta: { province: meta.province, board: meta.board, year: meta.year, version: "", textbook: meta.textbook, chapter: it.title, outcomes: "", source: "Typed by admin", status: "pending" } };
      if (hidden) l.hidden = true;
      b.lessons.push(l); added.push(l);
    });
    delete b._new;
    if (!saveBooks()) {
      b.lessons.splice(n0, added.length); if (isNew) bookStore = bookStore.filter(function (x) { return x !== b; });
      saveBooks(); return -1;
    }
    added.forEach(function (l) { D.lessons.push(l); });
    persistBook(b, added);
    return added.length;
  }
  function efSave(g) {
    readEF(); var cards = ef.cards.split(/\n+/).map(function (x) { return x.trim(); }).filter(Boolean).map(endStop), title = ef.title.trim();
    if (!ef.subject || !title || !cards.length) { efMsg = st3("efNeed"); return; }
    var quiz = [];
    ef.qs.forEach(function (q) {
      var opts = q.o.map(function (x) { return x.trim(); }), idx = [];
      opts.forEach(function (x, i) { if (x) idx.push(i); });
      if (!q.q.trim() || idx.length < 2 || !opts[q.c]) return;
      quiz.push({ q: { en: q.q.trim(), ur: q.q.trim() }, opts: idx.map(function (i) { return opts[i]; }), a: idx.indexOf(q.c), topic: "chapter" });
    });
    if (!quiz.length) quiz = makeQuiz(cards, gnum(g));
    var n = addTypedLessons(g, ef.subject, [{ title: title, cards: cards, quiz: quiz }], ef, !ef.pub);
    if (n < 0) { efMsg = st3("efFull"); return; }
    efMsg = st3("efDone"); ef.title = ""; ef.cards = ""; ef.qs.forEach(function (q) { q.q = ""; q.o = ["", "", "", ""]; q.c = 0; });
  }
  function efBulkSave(g) {
    readEF(); var items = [];
    String(ef.bulk || "").split(/\n\s*-{3,}\s*\n/).forEach(function (blk) {
      var lines = blk.split(/\n/).map(function (x) { return x.trim(); }).filter(Boolean);
      if (lines.length < 2) return;
      var cards = lines.slice(1).map(endStop);
      items.push({ title: lines[0].slice(0, 120), cards: cards, quiz: makeQuiz(cards, gnum(g)) });
    });
    if (!ef.subject || !items.length) { efMsg = st3("efBulkNone"); return; }
    var n = addTypedLessons(g, ef.subject, items, ef, !ef.pub);
    if (n < 0) { efMsg = st3("efFull"); return; }
    efMsg = n + " " + st3("efBulkDone"); ef.bulk = "";
  }
  function entryFormHTML(g, subs) {
    if (!ef) ef = newEF(subs);
    if (!subs.some(function (x) { return x.id === ef.subject; })) ef.subject = subs[0] ? subs[0].id : "";
    var h = '<section class="card entrycard"><h3>' + esc(st3("efT")) + "</h3>";
    if (efMsg) { h += '<p class="note" aria-live="polite">' + esc(efMsg) + "</p>"; efMsg = ""; }
    h += '<label for="efsubj">' + esc(st3("efSubject")) + '</label><select id="efsubj">';
    subs.forEach(function (x) { h += '<option value="' + x.id + '"' + (ef.subject === x.id ? " selected" : "") + ">" + esc(L(x)) + "</option>"; });
    h += '</select><label for="eftitle">' + esc(st3("efTitle")) + '</label><input id="eftitle" dir="auto" value="' + esc(ef.title) + '">';
    h += '<label for="efcards">' + esc(st3("efText")) + '</label><textarea id="efcards" dir="auto" rows="7">' + esc(ef.cards) + '</textarea><p class="small">' + esc(st3("efTextHint")) + "</p>";
    h += "<h4>" + esc(st3("efQuiz")) + "</h4>";
    ef.qs.forEach(function (q, i) {
      h += '<div class="qblock"><label for="efq' + i + '">' + esc(st3("efQ")) + " " + (i + 1) + '</label><input id="efq' + i + '" dir="auto" value="' + esc(q.q) + '"><div class="optgrid">';
      for (var j = 0; j < 4; j++) h += '<label class="optl"><span>' + "ABCD".charAt(j) + '</span><input id="efo' + i + "_" + j + '" dir="auto" aria-label="' + esc(st3("efOpt")) + " " + "ABCD".charAt(j) + '" value="' + esc(q.o[j]) + '"></label>';
      h += '</div><label for="efc' + i + '">' + esc(st3("efRight")) + '</label><select id="efc' + i + '">';
      for (var k = 0; k < 4; k++) h += '<option value="' + k + '"' + (q.c === k ? " selected" : "") + ">" + "ABCD".charAt(k) + "</option>";
      h += "</select></div>";
    });
    h += '<details class="more"><summary>' + esc(st3("efMore")) + '</summary><label for="efprov">' + esc(t("province2")) + '</label><select id="efprov">';
    D.provinces.forEach(function (p) { h += '<option value="' + p.id + '"' + (ef.province === p.id ? " selected" : "") + ">" + esc(L(p)) + "</option>"; });
    h += '</select><label for="efboard">' + esc(t("board")) + '</label><input id="efboard" value="' + esc(ef.board) + '"><label for="eftb">' + esc(t("textbook")) + '</label><input id="eftb" value="' + esc(ef.textbook) + '"><label for="efyr">' + esc(t("year")) + '</label><input id="efyr" placeholder="2026-27" value="' + esc(ef.year) + '"></details>';
    h += '<label class="inl"><input type="checkbox" id="efpub"' + (ef.pub ? " checked" : "") + "> " + esc(st3("efPub")) + '</label><button class="bigbtn gobtn2" data-act="efSave" data-arg="' + g + '">' + esc(st3("efSave")) + '</button><p class="note">' + esc(st3("efPend")) + "</p>";
    h += '<details class="more"><summary>' + esc(st3("efBulkT")) + '</summary><p class="small">' + esc(st3("efBulkHint")) + '</p><label class="sr" for="efbulk">' + esc(st3("efBulkT")) + '</label><textarea id="efbulk" dir="auto" rows="9" placeholder="Title one&#10;First sentence.&#10;Second sentence.&#10;---&#10;Title two&#10;First sentence.">' + esc(ef.bulk) + '</textarea><button class="btn" data-act="efBulk" data-arg="' + g + '">' + esc(st3("efBulkGo")) + "</button></details></section>";
    return h;
  }
  // ---- class manager helpers ----
  var armedDel = "", noteMsg = "", moveMsg = "";
  function findLesson(id) { for (var i = 0; i < bookStore.length; i++) { var b = bookStore[i]; for (var j = 0; j < b.lessons.length; j++) if (b.lessons[j].id === id) return { b: b, l: b.lessons[j], j: j }; } return null; }
  function chOrd(l) { if (typeof l.order === "number") return l.order; var m = /-(\d+)$/.exec(l.id); return m ? Number(m[1]) * 10 : 0; }
  function chSort(arr) { arr.sort(function (a, c) { return chOrd(a) - chOrd(c) || (a.id < c.id ? -1 : 1); }); }
  function rebuildBookInD(b) { D.lessons = D.lessons.filter(function (x) { return b.lessons.indexOf(x) < 0; }); b.lessons.forEach(function (l) { D.lessons.push(l); }); }
  function persistBook(b, only) {
    saveBooks(); save();
    if (cloudOK()) (only || b.lessons).forEach(function (l) { cloudCol("chapters").doc(l.id).set({ lesson: l, bookId: b.id, bookName: b.name, subject: b.subject, grade: String(b.grade), updated: Date.now() }).catch(cloudFail); });
  }
  function chRename(id, v) { var f = findLesson(id); v = String(v || "").trim(); if (!f || !v) return; f.l.title = { en: v, ur: v }; if (f.l.meta) f.l.meta.chapter = v; persistBook(f.b, [f.l]); }
  function chToggleHide(id) { var f = findLesson(id); if (!f) return; f.l.hidden = !f.l.hidden; persistBook(f.b, [f.l]); }
  function chShift(id, dir) {
    var f = findLesson(id); if (!f) return; var b = f.b; chSort(b.lessons);
    var i = b.lessons.indexOf(f.l), k = i + dir; if (k < 0 || k >= b.lessons.length) return;
    b.lessons.forEach(function (x, n) { x.order = n * 10; });
    var tmp = b.lessons[i].order; b.lessons[i].order = b.lessons[k].order; b.lessons[k].order = tmp;
    chSort(b.lessons); rebuildBookInD(b); persistBook(b);
  }
  function chDelete(id) {
    var f = findLesson(id); if (!f) return; var b = f.b;
    b.lessons.splice(f.j, 1); D.lessons = D.lessons.filter(function (x) { return x.id !== id; }); delete state.progress[id]; delete state.meta[id];
    if (openLesson === id) openLesson = null;
    if (cloudOK()) cloudCol("chapters").doc(id).delete().catch(cloudFail);
    if (!b.lessons.length) { bookStore = bookStore.filter(function (x) { return x !== b; }); saveBooks(); save(); return; }
    saveBooks(); save();
  }
  function bookMoveTo(bid, g2) {
    var b = bookStore.filter(function (x) { return x.id === bid; })[0]; if (!b) return;
    if (!classSubjects(g2).some(function (x) { return x.id === b.subject; })) { moveMsg = t_("moveBad"); return; }
    b.grade = String(g2); b.lessons.forEach(function (l) { l.min = gnum(g2); l.max = gnum(g2); });
    persistBook(b); moveMsg = t_("moved"); upGrade = String(g2);
  }
  function saveClassNote(g, v) {
    v = String(v || "").trim().slice(0, 400); state.classNotes = state.classNotes || {};
    if (v) state.classNotes[String(g)] = v; else delete state.classNotes[String(g)];
    save(); if (cloudOK()) cloudCol("meta").doc("note-" + g).set({ note: v }).catch(cloudFail);
    noteMsg = t_("noteSaved");
  }
  function t_(k) { return st3(k); }
  function staffBarHTML() {
    if (ADMIN || !cloud.on || (!isStaff() && !isTeacher())) return "";
    var h = '<section class="staffbar"><div class="staffbar-t"><b>' + esc(st3("barT")) + "</b><span>" + esc(st3("barSub")) + '</span></div><div class="staffbar-b">';
    if (isStaff()) h += '<button class="bigbtn" data-nav="addbook">' + esc(st3("barGo")) + "</button>";
    if (isTeacher()) h += '<button class="bigbtn alt" data-nav="teacher">' + esc(st3("barTeach")) + "</button>";
    return h + "</div></section>";
  }

  // ================= Pakistan syllabus (Nisaab) and Library (Kutub khana) =================
  var sylGrade = null, sylSubj = "";
  var libCat = "all", libQ = "", libGrade = "mine", libMsg = "", libArm = "", libDraft = null, libCloud = null, libOpen = false;
  var LIB_CATS = ["textbook", "quran", "urdu", "english", "science", "stories", "pak", "ref", "exam", "general"];
  // Starter entries: only official or trusted sites that were opened and checked. Admins add the rest.
  var LIB_STARTER = [
    { id: "s-kp-tbb", title: { en: "Khyber Pakhtunkhwa Textbook Board", ur: "خیبر پختونخوا ٹیکسٹ بک بورڈ" }, author: { en: "Government of Khyber Pakhtunkhwa", ur: "حکومت خیبر پختونخوا" }, cat: "textbook", grade: "all", lang: "ur", url: "https://tbb.kp.gov.pk/", verified: true, note: { en: "The official textbook board for Khyber Pakhtunkhwa schools.", ur: "خیبر پختونخوا کے سکولوں کی نصابی کتابوں کا سرکاری بورڈ۔" } },
    { id: "s-nbf", title: { en: "National Book Foundation", ur: "نیشنل بک فاؤنڈیشن" }, author: { en: "Government of Pakistan", ur: "حکومت پاکستان" }, cat: "general", grade: "all", lang: "ur", url: "https://www.nbf.org.pk", verified: true, note: { en: "Pakistan's national book body, founded in 1972 to make books available at moderate prices.", ur: "پاکستان کا قومی ادارہ جو 1972 میں مناسب قیمت پر کتابیں فراہم کرنے کے لیے قائم ہوا۔" } },
    { id: "s-iqbal", title: { en: "Iqbal Cyber Library", ur: "اقبال سائبر لائبریری" }, author: { en: "Iqbal Academy Pakistan", ur: "اقبال اکیڈمی پاکستان" }, cat: "urdu", grade: "all", lang: "ur", url: "https://iqbalcyberlibrary.net/", verified: true, note: { en: "The official website of Iqbal Academy Pakistan.", ur: "اقبال اکیڈمی پاکستان کی سرکاری ویب سائٹ۔" } }
  ];
  function lt(x) { return x && typeof x === "object" ? (x[LANG()] || x.en || "") : String(x || ""); }
  function cleanLib(o, id) {
    var g = String(o.grade || "all"); if (g !== "all" && D.grades.map(String).indexOf(g) < 0) g = "all";
    var u = String(o.url || ""); if (!/^https:\/\/[^\s]+$/i.test(u)) u = "";
    return { id: String(o.id || id), title: String(o.title || "").slice(0, 140), author: String(o.author || "").slice(0, 100), cat: LIB_CATS.indexOf(o.cat) > -1 ? o.cat : "general", grade: g, lang: ["ur", "en", "ar", "ot"].indexOf(o.lang) > -1 ? o.lang : "ur", url: u.slice(0, 500), note: String(o.note || "").slice(0, 240), verified: !!o.verified, added: Number(o.added) || 0 };
  }
  function getLib() { return cloud.on ? (libCloud || []) : (state.library || []).map(function (x) { return cleanLib(x, x.id); }); }
  function canEditLib() { return isStaff() || (!cloud.on && adultOK); }
  function newLibDraft() { return { title: "", author: "", cat: "textbook", grade: "all", lang: "ur", url: "", note: "", verified: false }; }
  function readLibDraft() {
    if (!libDraft) return;
    var v = function (id) { var e = root.querySelector("#" + id); return e ? e.value : null; }, x;
    if ((x = v("libt")) !== null) libDraft.title = x;
    if ((x = v("liba")) !== null) libDraft.author = x;
    if ((x = v("libc")) !== null) libDraft.cat = x;
    if ((x = v("libg")) !== null) libDraft.grade = x;
    if ((x = v("libl")) !== null) libDraft.lang = x;
    if ((x = v("libu")) !== null) libDraft.url = x;
    if ((x = v("libn")) !== null) libDraft.note = x;
    var vv = root.querySelector("#libv"); if (vv) libDraft.verified = vv.checked;
  }
  function libSave() {
    readLibDraft(); var d = libDraft || newLibDraft(), title = d.title.trim(), url = d.url.trim();
    if (!title || !d.cat) { libMsg = st3("libNeed"); return; }
    if (url && !/^https:\/\/[^\s]+$/i.test(url)) { libMsg = st3("libBadUrl"); return; }
    var item = cleanLib({ id: "b" + Date.now().toString(36) + Math.random().toString(36).slice(2, 4), title: title, author: d.author.trim(), cat: d.cat, grade: d.grade, lang: d.lang, url: url, note: d.note.trim(), verified: d.verified, added: Date.now() }, "x");
    if (cloud.on) {
      if (!cloudOK()) { libMsg = st3("libNoRight"); return; }
      cloudCol("meta").doc("lib-" + item.id).set({ lib: item }).catch(cloudFail); libCloud = (libCloud || []).concat([item]);
    } else { state.library = state.library || []; state.library.push(item); save(); }
    libMsg = st3("libSaved"); libDraft = newLibDraft();
  }
  function libDelete(id) {
    if (cloud.on) { if (!cloudOK()) return; cloudCol("meta").doc("lib-" + id).delete().catch(cloudFail); libCloud = (libCloud || []).filter(function (x) { return x.id !== id; }); }
    else { state.library = (state.library || []).filter(function (x) { return x.id !== id; }); save(); }
  }
  function libItems() {
    var out = LIB_STARTER.slice();
    getLib().forEach(function (x) { out.push(x); });
    bookStore.forEach(function (b) {
      var ls = b.lessons.filter(function (l) { return !(l.hidden && !isStaff()); }); if (!ls.length) return;
      ls = ls.slice(); chSort(ls);
      out.push({ id: "app-" + b.id, title: b.name, author: "IQRA", cat: "textbook", grade: String(b.grade), lang: LANG() === "ur" ? "ur" : "en", app: true, first: ls[0].id, n: ls.length, verified: ls.every(function (l) { return statusOf(l) === "verified"; }), note: "" });
    });
    return out;
  }
  function langLabel(c) { return st3("lang" + (c === "ot" ? "ot" : c)); }
  function launcherHTML() {
    var items = [["learn", "lessonsT", "lessonsS", "book", "a"], ["syllabus", "launSyl", "launSylS", "syl", "b"], ["library", "libT", "launLibS", "lib", "c"], ["character", "storiesT", "storiesS", "heart", "d"]];
    var h = '<section class="launch"><h3 class="launch-h">' + esc(st3("launQ")) + '</h3><div class="launch-g">';
    items.forEach(function (x) {
      h += '<button class="lcard l-' + x[4] + '" ' + (x[0] === "learn" ? 'data-act="toSubjects"' : 'data-nav="' + x[0] + '"') + '><span class="lic">' + svg(x[3], 34) + "</span><b>" + esc(st3(x[1])) + "</b><small>" + esc(st3(x[2])) + "</small></button>";
    });
    return h + "</div></section>";
  }
  function syllabusView() {
    if (sylGrade === null) sylGrade = state.grade;
    var g = sylGrade, n = gnum(g);
    var h = '<section class="page3"><h2>' + esc(st3("sylHead")) + '</h2><p class="lead3">' + esc(st3("sylIntro")) + "</p>";
    h += '<div class="pagebar"><label for="sylg">' + esc(st3("sylClass")) + '</label><select id="sylg">';
    D.grades.forEach(function (x) { h += '<option value="' + x + '"' + (String(x) === String(g) ? " selected" : "") + ">" + esc(gradeLabel(x)) + "</option>"; });
    h += '</select><button class="chip lightchip" data-nav="library">' + esc(st3("toLib")) + "</button></div>";
    var subs = subjectsFor(g);
    if (!sylSubj || !subs.some(function (x) { return x.id === sylSubj; })) { var fs = subs.filter(function (x) { return D.syllabus.some(function (sx) { return sx.subject === x.id && sx.grade === n; }); })[0]; if (fs) sylSubj = fs.id; }
    h += "<h3>" + esc(st3("sylPick")) + '</h3><div class="sylgrid">';
    subs.forEach(function (x) {
      var has = D.syllabus.some(function (sx) { return sx.subject === x.id && sx.grade === n; });
      h += '<button class="sylsub' + (sylSubj === x.id ? " on" : "") + '" data-act="sylSubj" data-arg="' + x.id + '"><b>' + esc(L(x)) + '</b><span class="badge ' + (has ? "inreview" : "pending") + '">' + esc(st3(has ? "sylHas" : "sylNoSub")) + "</span></button>";
    });
    h += "</div>";
    if (sylSubj && subs.some(function (x) { return x.id === sylSubj; })) {
      var card = syllabusCard(sylSubj, g);
      h += card ? card : '<p class="card note">' + esc(st3("sylNone")) + "</p>";
    }
    h += '<div class="card"><h3>' + esc(st3("sylSoFar")) + "</h3>";
    var by = {}; D.syllabus.forEach(function (sx) { (by[sx.grade] = by[sx.grade] || []).push(sx); });
    var ks = Object.keys(by).map(Number).sort(function (a, b) { return a - b; });
    if (!ks.length) h += '<p class="small">-</p>';
    ks.forEach(function (k) {
      var names = by[k].map(function (sx) { var sj = D.subjects.filter(function (x) { return x.id === sx.subject; })[0]; return (sj ? L(sj) : sx.subject) + (sx.partial ? " (" + st3("sylPartial") + ")" : ""); }).filter(function (v, i, a) { return a.indexOf(v) === i; });
      h += '<p class="sylline"><b>' + esc(gradeLabel(k === 0 ? "KG" : k)) + ":</b> " + esc(names.join("، ")) + "</p>";
    });
    h += "</div>";
    h += '<div class="card"><h3>' + esc(st3("sylDocs")) + "</h3>";
    D.sources.forEach(function (d) { h += '<p class="docrow"><b>' + esc(d.title) + '</b><br><span class="small">' + esc(d.authority) + " · " + esc(d.version) + '</span>' + (d.url ? '<br><a href="' + esc(d.url) + '" target="_blank" rel="noopener noreferrer">' + esc(t("opensrc")) + "</a>" : "") + "</p>"; });
    var bd = D.boards[state.province];
    if (bd) h += '<p class="small"><b>' + esc(st3("sylBoard")) + ":</b> " + esc(bd.authority) + "<br>" + esc(st3("sylBoardNote")) + "</p>";
    h += "</div>";
    return h + '<p class="note">' + esc(st3("sylRule")) + "</p></section>";
  }
  function libraryView() {
    var all = libItems(), q = libQ.toLowerCase(), n = gnum(state.grade);
    var base = all.filter(function (x) {
      if (libGrade === "mine" && !(x.grade === "all" || gnum(x.grade) === n)) return false;
      if (q && (lt(x.title) + " " + lt(x.author) + " " + lt(x.note)).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
    var shown = base.filter(function (x) { return libCat === "all" || x.cat === libCat; });
    var h = '<section class="page3">' + (kidUI() ? kidBanner(st3("libT")) : '<h2>' + esc(st3("libT")) + '</h2><p class="lead3">' + esc(st3("libIntro")) + "</p>");
    h += '<form id="libf" class="libbar"><label class="sr" for="libq">' + esc(st3("libSearch")) + '</label><input id="libq" type="search" dir="auto" placeholder="' + esc(st3("libSearch")) + '" value="' + esc(libQ) + '"><button class="btn" type="submit">' + esc(st3("libGo")) + "</button></form>";
    h += '<div class="pagebar"><label for="libgrade">' + esc(st3("sylClass")) + '</label><select id="libgrade"><option value="mine"' + (libGrade === "mine" ? " selected" : "") + ">" + esc(st3("libMine")) + " (" + esc(gradeLabel(state.grade)) + ')</option><option value="all"' + (libGrade === "all" ? " selected" : "") + ">" + esc(st3("libAllC")) + '</option></select><button class="chip lightchip" data-nav="syllabus">' + esc(st3("toSyl")) + "</button></div>";
    h += "<h3>" + esc(st3("libCatT")) + '</h3><div class="libcats"><button class="libcat' + (libCat === "all" ? " on" : "") + '" data-act="libCat" data-arg="all"><b>' + esc(st3("libAll")) + "</b><span>" + base.length + "</span></button>";
    LIB_CATS.forEach(function (c) {
      var cnt = base.filter(function (x) { return x.cat === c; }).length;
      if (!cnt && libCat !== c) return;
      h += '<button class="libcat' + (libCat === c ? " on" : "") + (cnt ? "" : " zero") + '" data-act="libCat" data-arg="' + c + '"><b>' + esc(st3("cat_" + c)) + "</b><span>" + cnt + "</span></button>";
    });
    h += "</div>";
    h += '<p class="small" aria-live="polite">' + shown.length + " " + esc(st3("libFound")) + (libQ || libCat !== "all" ? ' · <button class="link" data-act="libClear">✕</button>' : "") + "</p>";
    if (!shown.length) h += '<p class="card">' + esc(st3("libEmpty")) + "</p>";
    shown = shown.filter(function (x) { return x.app; }).concat(shown.filter(function (x) { return !x.app; }));
    var libSeen = "";
    shown.forEach(function (x) {
      var grp = x.app ? "here" : "ext";
      if (grp !== libSeen && (grp === "ext" || shown.some(function (y) { return !!y.app !== !!x.app; }))) h += '<h3 class="libgroup">' + esc(st3(grp === "here" ? "libHere" : "libExt")) + "</h3>";
      libSeen = grp;
      var host = ""; if (x.url) { try { host = new URL(x.url).hostname; } catch (e) {} }
      var mine = !x.app && String(x.id).indexOf("s-") !== 0, ar = libArm === x.id;
      h += '<article class="bk"><span class="bk-ic" aria-hidden="true">' + svg(x.app ? "book" : "lib", 28) + '</span><div class="bk-m"><b>' + esc(lt(x.title)) + "</b>";
      if (lt(x.author)) h += '<span class="bk-a">' + esc(lt(x.author)) + "</span>";
      h += '<div class="bk-t"><span class="badge ' + (x.verified ? "verified" : "pending") + '">' + esc(st3(x.verified ? "libVer" : "libUnver")) + '</span><span class="tag">' + esc(st3("cat_" + x.cat)) + '</span><span class="tag">' + esc(x.grade === "all" ? st3("libAllC") : gradeLabel(x.grade)) + '</span><span class="tag">' + esc(langLabel(x.lang)) + "</span></div>";
      if (x.app) h += '<p class="small">' + x.n + " " + esc(st3("libChap")) + " · " + esc(st3("libFromApp")) + "</p>";
      if (lt(x.note)) h += '<p class="small">' + esc(lt(x.note)) + "</p>";
      if (host) h += '<p class="small host">' + esc(host) + "</p>";
      h += '</div><div class="bk-act">';
      if (x.app) h += '<button class="bigbtn sm" data-act="openLesson" data-arg="' + x.first + '">' + esc(st3("libInApp")) + "</button>";
      else if (x.url) h += '<a class="bigbtn sm ext" href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(st3("libOpen") + " · " + st3("libOutside")) + '">' + esc(st3("libOpen")) + "</a>";
      if (mine && canEditLib()) h += '<button class="btn alt sm' + (ar ? " danger" : "") + '" data-act="libDel" data-arg="' + x.id + '">' + esc(st3(ar ? "libDelAgain" : "libDel")) + "</button>";
      h += "</div></article>";
    });
    h += '<p class="note">' + esc(st3("libNote")) + "</p>";
    if (canEditLib()) h += libAddHTML();
    return h + "</section>";
  }
  function libAddHTML() {
    if (!libDraft) libDraft = newLibDraft();
    var d = libDraft, h = '<details class="more libadd" id="libform"' + (libOpen ? " open" : "") + "><summary>" + esc(st3("libAddT")) + '</summary><form id="libaddf">';
    if (libMsg) { h += '<p class="note" aria-live="polite">' + esc(libMsg) + "</p>"; libMsg = ""; }
    var miss = ["punjab", "sindh", "balochistan"].filter(function (id) { var b = D.boards[id]; return b && !getLib().some(function (x) { return x.title === b.authority; }); });
    if (miss.length) {
      h += "<h4>" + esc(st3("libBoards")) + '</h4><p class="small">' + esc(st3("libBoardsHint")) + '</p><div class="chiprow">';
      miss.forEach(function (id) { h += '<button type="button" class="chip lightchip" data-act="libPrefill" data-arg="' + id + '">' + esc(D.boards[id].authority) + "</button>"; });
      h += "</div>";
    }
    h += '<label for="libt">' + esc(st3("libTitle")) + '</label><input id="libt" dir="auto" maxlength="140" value="' + esc(d.title) + '">';
    h += '<label for="liba">' + esc(st3("libAuthor")) + '</label><input id="liba" dir="auto" maxlength="100" value="' + esc(d.author) + '">';
    h += '<label for="libc">' + esc(st3("libCat")) + '</label><select id="libc">';
    LIB_CATS.forEach(function (c) { h += '<option value="' + c + '"' + (d.cat === c ? " selected" : "") + ">" + esc(st3("cat_" + c)) + "</option>"; });
    h += '</select><label for="libg">' + esc(st3("libClass")) + '</label><select id="libg"><option value="all"' + (d.grade === "all" ? " selected" : "") + ">" + esc(st3("libAllC")) + "</option>";
    D.grades.forEach(function (g) { h += '<option value="' + g + '"' + (String(d.grade) === String(g) ? " selected" : "") + ">" + esc(gradeLabel(g)) + "</option>"; });
    h += '</select><label for="libl">' + esc(st3("libLang")) + '</label><select id="libl">';
    [["ur", "langur"], ["en", "langen"], ["ar", "langar"], ["ot", "langot"]].forEach(function (x) { h += '<option value="' + x[0] + '"' + (d.lang === x[0] ? " selected" : "") + ">" + esc(st3(x[1])) + "</option>"; });
    h += '</select><label for="libu">' + esc(st3("libUrl")) + '</label><input id="libu" type="url" inputmode="url" dir="ltr" placeholder="https://" value="' + esc(d.url) + '">';
    h += '<label for="libn">' + esc(st3("libNoteF")) + '</label><input id="libn" dir="auto" maxlength="240" value="' + esc(d.note) + '">';
    h += '<label class="inl"><input type="checkbox" id="libv"' + (d.verified ? " checked" : "") + "> " + esc(st3("libVerF")) + '</label><button class="bigbtn gobtn2" type="submit">' + esc(st3("libSave")) + "</button></form></details>";
    return h;
  }
  function announceHTML() {
    var n = (state.classNotes || {})[String(state.grade)]; if (!n) return "";
    return '<section class="announce"><span class="announce-i" aria-hidden="true">' + svg("star", 26) + "</span><div><b>" + esc(st3("announce")) + "</b><p>" + esc(n) + "</p></div></section>";
  }
  function classStats() {
    var ch = 0, hid = 0, pend = 0, cls = {};
    bookStore.forEach(function (b) { cls[String(b.grade)] = 1; b.lessons.forEach(function (l) { ch++; if (l.hidden) hid++; if (statusOf(l) !== "verified") pend++; }); });
    return { classes: Object.keys(cls).length, chapters: ch, hidden: hid, pending: pend };
  }
  function addBookView() {
    if (draft) return draftView();
    if (upGrade === null) {
      var h = "<h2>" + esc(st3("pickClass")) + '</h2><p class="small">' + esc(st3("pickClassHint")) + "</p>";
      D.levels.forEach(function (lv, li) {
        h += '<section class="card"><h3><span class="catdot c' + "ABC".charAt(li) + '">' + "ABC".charAt(li) + "</span> " + esc(L(lv)) + '</h3><div class="classgrid">';
        D.grades.forEach(function (g) {
          var n = gnum(g); if (n < lv.min || n > lv.max) return;
          var c = gradeCounts(g), hn = 0, pn = 0;
          bookStore.forEach(function (b) { if (String(b.grade) === String(g)) b.lessons.forEach(function (l) { if (l.hidden) hn++; if (statusOf(l) !== "verified") pn++; }); });
          var hasNote = !!((state.classNotes || {})[String(g)]);
          h += '<button class="classbtn' + (c.up ? " has" : "") + '" data-act="upClass" data-arg="' + g + '"><b>' + esc(gradeLabel(g)) + (hasNote ? ' <i class="notedot" title="' + esc(st3("noteT")) + '"></i>' : "") + "</b><small>" + c.up + " " + esc(t("chapters")) + (c.books ? " · " + c.books + " " + esc(t("books")) : "") + "</small>" + (c.up ? '<span class="cbadges">' + (pn ? "<em>" + pn + " " + esc(st3("pendingN")) + "</em>" : "") + (hn ? "<em class=\"h\">" + hn + " " + esc(st3("hiddenN")) + "</em>" : "") + "</span>" : "") + "</button>";
        });
        h += "</div></section>";
      });
      return h;
    }
    var g = upGrade, subs = classSubjects(g);
    var h = '<button class="link" data-act="upBack">‹ ' + esc(t("allClasses")) + "</button><h2>" + esc(gradeLabel(g)) + "</h2>";
    h += '<section class="card"><h3>' + esc(st3("pickSub")) + '</h3><div class="subpick">';
    subs.forEach(function (sj) { h += '<button type="button" class="chip' + (upSubj === sj.id ? " on" : "") + '" data-act="upSubj" data-arg="' + sj.id + '">' + esc(L(sj)) + "</button>"; });
    h += "</div>" + (upSubj ? "" : '<p class="small">' + esc(st3("pickSubHint")) + "</p>") + "</section>";
    if (upSubj) h += '<div id="subhub"><h3>' + esc(st3("addHere")) + "</h3>" + resHub(upSubj, g) + "</div>";
    h += "<h3>" + esc(st3("moreWays")) + '</h3><div class="subtabs">';
    [["type", "wayType"], ["pdf", "wayPdf"], ["note", "wayNote"]].forEach(function (x) { h += '<button type="button" class="chip' + (advTab === x[0] ? " on" : "") + '" data-act="advTab" data-arg="' + x[0] + '">' + esc(st3(x[1])) + "</button>"; });
    h += "</div>";
    if (advTab === "type") h += entryFormHTML(g, subs);
    if (advTab === "note") {
    h += '<div class="card notecard"><h3>' + esc(st3("noteT")) + '</h3><label class="sr" for="cnote">' + esc(st3("noteT")) + '</label><textarea id="cnote" rows="3" maxlength="400" placeholder="' + esc(st3("notePh")) + '">' + esc((state.classNotes || {})[String(g)] || "") + '</textarea><p class="small">' + esc(st3("noteHint")) + '</p><button class="btn" data-act="noteSave" data-arg="' + g + '">' + esc(st3("noteSave")) + '</button> <span class="small" aria-live="polite">' + esc(noteMsg) + "</span></div>";
    }
    noteMsg = advTab === "note" ? "" : noteMsg;
    if (advTab === "pdf") {
    h += '<div class="card" id="upform"><h3>' + esc(st3("orPdf")) + "</h3><p>" + esc(t("bookIntro")) + "</p>";
    h += "<label>" + esc(t("pdfFile")) + '<input id="bfile" type="file" accept="application/pdf,.pdf"></label>';
    h += "<label>" + esc(t("subject")) + '<select id="bsubj">';
    subs.forEach(function (sj) { h += '<option value="' + sj.id + '"' + (upSubj === sj.id ? " selected" : "") + ">" + esc(L(sj)) + "</option>"; });
    h += '</select></label><input type="hidden" id="bgrade" value="' + esc(g) + '"><label>' + esc(t("province2")) + '<select id="bprov">';
    D.provinces.forEach(function (p) { h += '<option value="' + p.id + '"' + (state.province === p.id ? " selected" : "") + ">" + esc(L(p)) + "</option>"; });
    h += '</select></label><label>' + esc(t("board")) + '<input id="bboard" value="' + esc(state.board || "") + '"></label>';
    h += "<label>" + esc(t("textbook")) + '<input id="btb"></label><label>' + esc(t("year")) + '<input id="byr" placeholder="2026-27"></label>';
    h += '<button class="btn" id="bgo">' + esc(t("readPdf")) + '</button><p id="bmsg" class="small" aria-live="polite">' + esc(bookMsg) + '</p><p class="note">' + esc(t("bookNote")) + "</p></div>";
    }
    h += "<h3>" + esc(t("mybooks")) + " · " + esc(gradeLabel(g)) + "</h3>";
    var mine = bookStore.filter(function (b) { return String(b.grade) === String(g); });
    if (!mine.length) h += '<p class="small">' + esc(t("nobooks")) + "</p>";
    if (moveMsg) { h += '<p class="note" aria-live="polite">' + esc(moveMsg) + "</p>"; moveMsg = ""; }
    if (mine.length) h += '<p class="small">' + esc(st3("renameHint")) + "</p>";
    mine.forEach(function (b) {
      chSort(b.lessons);
      h += '<section class="card bookcard"><div class="bookhead"><div><b>' + esc(b.name) + '</b><br><span class="small">' + esc(b.subject) + " · " + b.lessons.length + " " + esc(t("chapters")) + "</span></div>";
      h += '<button class="btn alt sm' + (armedDel === "book:" + b.id ? " danger" : "") + '" data-act="delbookArm" data-arg="' + b.id + '">' + esc(armedDel === "book:" + b.id ? st3("delAgain") : t("delete")) + "</button></div>";
      h += '<ol class="chlist">';
      b.lessons.forEach(function (l, i) {
        h += '<li class="chrow' + (l.hidden ? " is-hidden" : "") + '"><span class="chno" aria-hidden="true">' + (i + 1) + '</span><input class="chtitle" data-chtitle="' + l.id + '" value="' + esc(L(l.title)) + '" aria-label="' + esc(t("chapter")) + " " + (i + 1) + '">';
        h += '<div class="chbtns"><button class="icbtn" data-act="chUp" data-arg="' + l.id + '" aria-label="' + esc(st3("moveUp")) + '"' + (i === 0 ? " disabled" : "") + ">▲</button>";
        h += '<button class="icbtn" data-act="chDown" data-arg="' + l.id + '" aria-label="' + esc(st3("moveDown")) + '"' + (i === b.lessons.length - 1 ? " disabled" : "") + ">▼</button>";
        h += '<button class="pill ' + (l.hidden ? "off" : "on") + '" data-act="chHide" data-arg="' + l.id + '" aria-pressed="' + (!l.hidden) + '">' + esc(st3(l.hidden ? "hiddenL" : "shown")) + "</button>";
        h += '<button class="icbtn del' + (armedDel === l.id ? " armed" : "") + '" data-act="chDel" data-arg="' + l.id + '" aria-label="' + esc(st3("delCh")) + '">' + (armedDel === l.id ? esc(st3("delAgain")) : "✕") + "</button></div></li>";
      });
      h += "</ol>";
      h += '<div class="moverow"><label for="mv-' + b.id + '">' + esc(st3("moveBook")) + '</label><select id="mv-' + b.id + '">';
      D.grades.forEach(function (g2) { if (String(g2) !== String(g)) h += '<option value="' + g2 + '">' + esc(gradeLabel(g2)) + "</option>"; });
      h += '</select><button class="btn alt sm" data-act="bookMove" data-arg="' + b.id + '">' + esc(st3("moveGo")) + "</button></div></section>";
    });
    return h;
  }
  function draftView() {
    var h = "<h2>" + esc(draft.name) + "</h2><p>" + draft.chapters.length + " " + esc(t("chaptersFound")) + '</p><p class="note">' + esc(t("draftNote")) + "</p>";
    if (!draft.chapters.length) return h + '<p class="warnnote note">' + esc(t("noText")) + '</p><button class="btn alt" data-act="bcancel">' + esc(t("back")) + "</button>";
    draft.chapters.forEach(function (c, i) {
      h += '<div class="card"><label class="opt"><input type="checkbox" id="bk' + i + '"' + (c.keep ? " checked" : "") + "> " + esc(t("keep")) + '</label><input id="bt' + i + '" value="' + esc(c.title) + '"><p class="small">' + c.sents.length + " " + esc(t("sentences")) + " · " + c.quiz.length + " " + esc(t("questions")) + " · p." + c.page + "</p><details><summary>" + esc(t("preview")) + "</summary><p>" + esc(c.sents.slice(0, 4).join(" ")) + "</p></details></div>";
    });
    return h + '<button class="btn" id="bsave">' + esc(t("saveBook")) + '</button> <button class="btn alt" data-act="bcancel">' + esc(t("cancel")) + "</button>";
  }
  function saveDraft() {
    var f = draft.form, id = "b" + Date.now().toString(36), g = gnum(f.grade), lessons = [];
    draft.chapters.forEach(function (c, i) {
      var kb = root.querySelector("#bk" + i), tt = root.querySelector("#bt" + i);
      if (kb) c.keep = kb.checked; if (tt) c.title = tt.value.trim() || c.title;
      if (!c.keep) return;
      lessons.push({
        id: "up-" + id + "-" + (lessons.length + 1), subject: f.subject, min: g, max: g, topic: "chapter", uploaded: true, unit: {},
        title: { en: c.title, ur: c.title }, body: { en: c.sents.join(" "), ur: c.sents.join(" ") }, quiz: c.quiz,
        meta: { province: f.province, board: f.board, year: f.year, version: "", textbook: f.textbook, chapter: c.title, outcomes: "", source: "Uploaded PDF: " + draft.name, status: "pending" }
      });
    });
    if (!lessons.length) { bookMsg = t("nothingKept"); draft = null; return; }
    bookStore.push({ id: id, name: draft.name, subject: f.subject, grade: f.grade, lessons: lessons });
    if (!saveBooks()) { bookStore.pop(); bookMsg = t("storageFull"); draft = null; return; }
    lessons.forEach(function (l) { D.lessons.push(l); });
    cloudPushBook(bookStore[bookStore.length - 1]);
    bookMsg = lessons.length + " " + t("chapters") + " " + t("bookSaved"); draft = null;
  }
  function startBookRead() {
    var fi = root.querySelector("#bfile"), file = fi && fi.files && fi.files[0];
    if (!file) { bookMsg = t("pickFile"); render(); return; }
    var form = { subject: root.querySelector("#bsubj").value, grade: root.querySelector("#bgrade").value, province: root.querySelector("#bprov").value, board: root.querySelector("#bboard").value.trim(), textbook: root.querySelector("#btb").value.trim(), year: root.querySelector("#byr").value.trim() };
    var msg = root.querySelector("#bmsg"); if (msg) msg.textContent = t("reading");
    file.arrayBuffer().then(function (buf) {
      return extractPages(buf, function (p, n) { var m = root.querySelector("#bmsg"); if (m) m.textContent = t("reading") + " " + p + "/" + n; });
    }).then(function (pages) {
      draft = { name: file.name, form: form, chapters: buildChapters(pages, gnum(form.grade)) }; bookMsg = ""; render();
    }).catch(function () { bookMsg = t("pdfFail"); render(); });
  }

  loadBooks();
  loadClips();
  try { if (window.speechSynthesis) { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = function () { if (view === "voice") render(); }; } } catch (e) {}
  function bind() {
    function $(s) { return root.querySelector(s); }
    function on(s, fn) { var e = $(s); if (e) e.addEventListener("click", fn); }
    on("#langb", function () { if (kidCtx()) state.guide = LANG() === "ur" ? "en" : "ur"; else state.lang = state.lang === "en" ? "ur" : "en"; save(); render(); });
    on("#lowb", function () { state.low = !state.low; save(); render(); });
    function readSetup() {
      state.name = $("#sname").value.trim(); state.province = $("#sprov").value; state.grade = $("#sgrade").value;
      var sb = $("#sboard"); if (sb) state.board = sb.value;
      var sp = $("#spath"); if (sp) state.pathway = sp.value;
      var sr = $("#sread"); if (sr) state.read = sr.value;
    }
    var sp0 = $("#sprov");
    if (sp0) sp0.addEventListener("change", function () { readSetup(); state.board = ""; render(); });
    var sg = $("#sgrade");
    if (sg) sg.addEventListener("change", function () { readSetup(); render(); });
    var lgSel = $("#libgrade"); if (lgSel) lgSel.addEventListener("change", function () { libGrade = lgSel.value; render(); });
    var sgSel = $("#sylg"); if (sgSel) sgSel.addEventListener("change", function () { sylGrade = sgSel.value; sylSubj = ""; render(); });
    var lqf = $("#libf"); if (lqf) lqf.addEventListener("submit", function (e) { e.preventDefault(); var qi = $("#libq"); libQ = qi ? qi.value.trim() : ""; render(); });
    var lfm = $("#libform"); if (lfm) lfm.addEventListener("toggle", function () { libOpen = lfm.open; });
    var lad = $("#libaddf"); if (lad) lad.addEventListener("submit", function (e) { e.preventDefault(); libSave(); render(); });
    root.querySelectorAll("[data-chtitle]").forEach(function (i) { i.addEventListener("change", function () { chRename(i.dataset.chtitle, i.value); }); });
    root.querySelectorAll("[data-sgrade]").forEach(function (b) { b.addEventListener("click", function () { readSetup(); state.grade = b.dataset.sgrade; render(); }); });
    on("#sgo", function () { readSetup(); state.setup = true; save(); view = "learn"; render(); });
    on("#resetup", function () { view = "setup"; render(); });
    root.querySelectorAll("[data-nav]").forEach(function (b) { b.addEventListener("click", function () { view = b.dataset.nav; examSub = ""; quizRun = null; countGame = null; gameRun = null; traceRun = null; tVis = null; cgToken++; lessonStep = 0; openLesson = null; openStory = null; curSubject = null; render(); }); });
    root.querySelectorAll("[data-sub]").forEach(function (b) { b.addEventListener("click", function () { curSubject = b.dataset.sub; render(); }); });
    root.querySelectorAll("[data-lesson]").forEach(function (b) { b.addEventListener("click", function () { openLesson = b.dataset.lesson; render(); }); });
    on("#bsub", function () { curSubject = null; render(); });
    on("#blesson", function () { openLesson = null; render(); });
    on("#bstory", function () { openStory = null; render(); });
    root.querySelectorAll("[data-story]").forEach(function (b) { b.addEventListener("click", function () { openStory = b.dataset.story; render(); }); });
    root.querySelectorAll("[data-choice]").forEach(function (b) {
      b.addEventListener("click", function () {
        var c = D.character.filter(function (x) { return x.id === openStory; })[0];
        $("#fb").textContent = L(c.choices[Number(b.dataset.choice)].f);
      });
    });
    on("#speak", function () {
      var l = D.lessons.filter(function (x) { return x.id === openLesson; })[0];
      if ("speechSynthesis" in window) {
        var u = new SpeechSynthesisUtterance(L(l.body)); u.lang = LANG() === "ur" ? "ur-PK" : "en-US";
        speechSynthesis.cancel(); speechSynthesis.speak(u);
      }
    });
    on("#offb", function () {
      if ("caches" in window) {
        caches.open("pds-offline-v1").then(function (c) { return c.addAll(["./", "index.html", "styles.css", "data.js", "app.js"]); })
          .then(function () { alert(t("offlineDone")); }).catch(function () {});
      }
    });
    var qf = $("#quizf");
    if (qf) qf.addEventListener("submit", function (e) {
      e.preventDefault();
      var l = D.lessons.filter(function (x) { return x.id === openLesson; })[0];
      var correct = 0, topics = {};
      l.quiz.forEach(function (q, i) {
        var sel = qf.querySelector('input[name="q' + i + '"]:checked');
        var ok = sel && Number(sel.value) === q.a;
        if (ok) correct++;
        topics[q.topic] = topics[q.topic] || { c: 0, t: 0 }; topics[q.topic].t++; if (ok) topics[q.topic].c++;
      });
      state.progress[l.id] = { score: correct, total: l.quiz.length, topics: topics }; save();
      $("#qres").textContent = t("score") + ": " + correct + "/" + l.quiz.length;
    });
    on("#bgo", startBookRead);
    var pk = $("#pkfile"); if (pk) pk.addEventListener("change", function () { if (pk.files && pk.files[0]) { var fr = new FileReader(); fr.onload = function () { importPackText(fr.result); }; fr.readAsText(pk.files[0]); } });
    var vi = $("#vimp"); if (vi) vi.addEventListener("change", function () { if (vi.files && vi.files[0]) importClips(vi.files[0]); });
    var rs = $("#recsel"); if (rs) rs.addEventListener("change", function () { recSel = rs.value; recMsg = ""; render(); });
    setupTrace();
    on("#bsave", function () { saveDraft(); render(); });
    var gf = $("#gatef");
    if (gf) gf.addEventListener("submit", function (e) {
      e.preventDefault();
      if (Number($("#gans").value) === gateQ.a + gateQ.b) { adultOK = true; gateQ = null; view = afterGate || "adult"; afterGate = null; render(); }
      else { gateQ = newGate(); render(); var gm = $("#gmsg"); if (gm) gm.textContent = t("gateNo"); }
    });
    var sr2 = $("#sread2");
    if (sr2) sr2.addEventListener("change", function () { state.read = sr2.value; save(); render(); });
    var cf = $("#chatf");
    if (cf) cf.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = $("#chatq").value.trim(); if (!q) return;
      chat.push({ who: "me", text: q });
      var r = tutorReply(q); chat.push({ who: "bot", text: r.text, safe: r.safe });
      render();
    });
    var ts = $("#tsub");
    if (ts) ts.addEventListener("change", function () { tutorCtx.subject = ts.value; tutorCtx.lesson = ""; chat = []; render(); });
    var tl = $("#tles");
    if (tl) tl.addEventListener("change", function () { tutorCtx.lesson = tl.value; chat = []; render(); });
    root.querySelectorAll("[data-exam]").forEach(function (b) { b.addEventListener("click", function () { examSub = b.dataset.exam; render(); }); });
    on("#bexam", function () { examSub = ""; render(); });
    var ef = $("#examf");
    if (ef) ef.addEventListener("submit", function (e) {
      e.preventDefault();
      var qs = examQuestions(examSub), c = 0;
      qs.forEach(function (q, i) { var sel = ef.querySelector('input[name="e' + i + '"]:checked'); if (sel && Number(sel.value) === q.a) c++; });
      $("#eres").textContent = t("score") + ": " + c + "/" + qs.length;
    });
    root.querySelectorAll("[data-verify]").forEach(function (b) {
      b.addEventListener("click", function () { var m = state.meta[b.dataset.verify]; if (m && complete(m)) { m.status = "verified"; save(); cloudMeta(b.dataset.verify); render(); } });
    });
    var vf = $("#verf");
    if (vf) vf.addEventListener("submit", function (e) { e.preventDefault(); var v = $("#nv").value.trim(); if (v) { state.version = v; save(); cloudVersion(); render(); } });
    var mf = $("#mapf");
    if (mf) mf.addEventListener("submit", function (e) {
      e.preventDefault();
      var m = { province: state.province, board: $("#mb").value.trim(), year: $("#my").value.trim(), version: state.version, textbook: $("#mtb").value.trim(), chapter: $("#mch").value.trim(), outcomes: $("#mo").value.trim(), source: $("#ms").value.trim(), status: "pending" };
      if (complete(m)) m.status = "inreview";
      state.meta[$("#mid").value] = m; save(); cloudMeta($("#mid").value); render();
    });
    on("#rst", function () { if (confirm(LANG() === "ur" ? "کیا آپ اس ڈیوائس کا سارا ڈیٹا مٹانا چاہتے ہیں؟" : "Reset all progress on this device?")) { localStorage.removeItem(KEY); state = defaults(); adminMaps = []; chat = []; sess = { done: 0, breakDue: false, mood: "", moodMsg: "" }; adultOK = false; view = "setup"; render(); } });
  }


  // ================= cloud: roles + shared database =================
  function effRole() { var r = cloud.role; if (cloud.viewAs === "student") return "student"; if (cloud.viewAs === "teacher" && (r === "admin" || r === "teacher")) return "teacher"; return r; }
  function isPlainStudent() { return !ADMIN && cloud.on && cloud.role === "student"; }
  function isStaff() { return !ADMIN && cloud.on && effRole() === "admin"; }
  function isTeacher() { return !ADMIN && cloud.on && (effRole() === "teacher" || effRole() === "admin"); }
  function staffGateView() { return '<p class="note" role="status">' + esc(LANG() === "ur" ? "لوڈ ہو رہا ہے…" : "Loading…") + "</p>"; }
  function roleChip() {
    if (ADMIN || STAFFPAGE || !cloud.on || cloud.role === "student") return "";
    var lab = cloud.viewAs ? t("viewingAs") + " " + t("role_" + effRole()) : t("role_" + cloud.role);
    return '<button class="chip rolechip' + (cloud.viewAs ? " on" : "") + '" data-act="viewAs" data-arg="' + (cloud.viewAs ? "" : "student") + '">' + esc(lab) + (cloud.viewAs ? " ✕" : "") + "</button>";
  }
  function hashKey(k) { var h = 5381, i; for (i = 0; i < k.length; i++) h = ((h << 5) + h + k.charCodeAt(i)) | 0; return "c" + (h >>> 0).toString(36) + "-" + k.length; }
  function cloudCol(n) { return cloud.db.collection(n); }
  function cloudOK() { return cloud.on && cloud.role === "admin"; }
  function cloudFail(e) { cloud.err = (e && (e.code || e.message)) || "error"; }
  function serial(list, fn) { return list.reduce(function (p, x) { return p.then(function () { return fn(x); }); }, Promise.resolve()); }
  function cloudPushBook(b) {
    if (!cloudOK() || !b) return Promise.resolve();
    return serial(b.lessons, function (l) { return cloudCol("chapters").doc(l.id).set({ lesson: l, bookId: b.id, bookName: b.name, subject: b.subject, grade: String(b.grade), updated: Date.now() }); }).catch(cloudFail);
  }
  function cloudDelBook(id) {
    if (!cloudOK()) return;
    cloudCol("chapters").where("bookId", "==", id).get().then(function (snap) { return serial(snap.docs, function (d) { return cloudCol("chapters").doc(d.id).delete(); }); }).catch(cloudFail);
  }
  function cloudMeta(id) { if (!cloudOK() || !state.meta[id]) return; cloudCol("meta").doc(id).set({ m: state.meta[id] }).catch(cloudFail); }
  function cloudVersion() { if (!cloudOK()) return; cloudCol("meta").doc("__version").set({ v: state.version }).catch(cloudFail); }
  function cloudClip(k, url) { if (!cloudOK()) return; if (url.length > 240000) { recMsg = t("clipBig"); return; } cloudCol("clips").doc(hashKey(k)).set({ k: k, url: url }).catch(cloudFail); }
  function cloudClipDel(k) { if (!cloudOK()) return; cloudCol("clips").doc(hashKey(k)).delete().catch(cloudFail); }
  function cloudMigrate() {
    if (!cloudOK()) return;
    var ls = []; try { ls = JSON.parse(localStorage.getItem(BKEY)) || []; } catch (e) {}
    var n = 0; serial(ls, function (b) { n++; return cloudPushBook(b); }).then(function () {
      return serial(Object.keys(voiceBank), function (k) { return typeof voiceBank[k] === "string" && voiceBank[k].indexOf("data:audio") === 0 ? Promise.resolve(cloudClip(k, voiceBank[k])) : Promise.resolve(); });
    }).then(function () { Object.keys(state.meta).forEach(cloudMeta); cloudVersion(); packMsg = t("migrated") + " " + n + " " + t("books"); render(); });
  }
  var rerenderT = 0;
  function softRender(force) {
    clearTimeout(rerenderT);
    rerenderT = setTimeout(function () {
      if (draft || recRec || resForm || (resRun && !resRun.done) || (tf && view === "teacher")) return;
      if (view === "library" && document.activeElement && document.activeElement.closest && document.activeElement.closest("#libform")) return;
      // do not interrupt a child who is inside a lesson, quiz or chat
      if (!force && (openLesson || openStory || view === "exam" || view === "tutor" || view === "character")) return;
      render();
    }, 300);
  }
  function applyChapters(snap) {
    var by = {}, order = [];
    D.lessons = D.lessons.filter(function (l) { return !(l.uploaded && !l.lecture); });
    snap.docs.forEach(function (d) {
      var x = d.data(); if (!x || !x.lesson || typeof x.bookId !== "string") return;
      if (x.lesson.hidden && cloud.role === "student") return;
      if (!by[x.bookId]) { by[x.bookId] = { id: x.bookId, name: x.bookName || "", subject: x.subject, grade: x.grade, lessons: [] }; order.push(x.bookId); }
      by[x.bookId].lessons.push(x.lesson);
    });
    var keepSeeds = bookStore.filter(function (b) { return /^seed-/.test(b.id) && !by[b.id]; });
    bookStore = order.map(function (id) { var b = by[id]; chSort(b.lessons); b.lessons.forEach(function (l) { D.lessons.push(l); }); return b; });
    keepSeeds.forEach(function (b) { bookStore.push(b); b.lessons.forEach(function (l) { D.lessons.push(l); }); });
    softRender();
  }
  function applyLectures(snap) {
    lecStore = [];
    D.lessons = D.lessons.filter(function (l) { return !l.lecture; });
    snap.docs.forEach(function (d) {
      var x = d.data(); if (!x || !x.lesson) return;
      var mine = x.author && x.author === cloud.uid, vis = x.published || mine || cloud.role === "admin";
      lecStore.push({ id: d.id, d: x });
      if (x.published || (vis && effRole() !== "student")) D.lessons.push(x.lesson);
    });
    softRender();
  }
  function applyMeta(snap) {
    var libs = [];
    snap.docs.forEach(function (d) {
      var x = d.data(); if (!x) return;
      if (d.id === "__version") { if (typeof x.v === "string" && x.v) state.version = x.v; }
      else if (d.id.indexOf("note-") === 0 && typeof x.note === "string") { state.classNotes = state.classNotes || {}; if (x.note) state.classNotes[d.id.slice(5)] = x.note; else delete state.classNotes[d.id.slice(5)]; }
      else if (d.id.indexOf("lib-") === 0 && x.lib && typeof x.lib === "object") libs.push(cleanLib(x.lib, d.id.slice(4)));
      else if (x.m && typeof x.m === "object") state.meta[d.id] = x.m;
    });
    libCloud = libs;
    softRender();
  }
  function applyClips(snap) {
    snap.docChanges().forEach(function (c) {
      var x = c.doc.data();
      if (c.type === "removed") { if (x && x.k && cloud.role !== "admin") delete voiceBank[x.k]; }
      else if (x && typeof x.k === "string" && typeof x.url === "string") voiceBank[x.k] = x.url;
    });
    if (view === "voice" || view === "staff") softRender();
  }
  function initCloud() {
    if (typeof window === "undefined" || !window.claude || typeof window.claude.use !== "function") return;
    Promise.all([window.claude.use("db"), window.claude.use("user")]).then(function (r) {
      var db = r[0], user = r[1]; if (!db) return;
      var q = user ? Promise.all([user.isOwner(), user.canEdit(), user.can("data.write"), user.id ? user.id() : null]) : Promise.resolve([false, false, null, null]);
      return q.then(function (x) {
        cloud.db = db; cloud.uid = x[3] || null;
        cloud.role = (x[0] || x[1]) ? "admin" : (x[2] === true ? "teacher" : "student");
        cloud.on = true;
        var er = function (e) { cloudFail(e); };
        db.collection("chapters").onSnapshot(applyChapters, er);
        db.collection("lectures").onSnapshot(applyLectures, er);
        db.collection("meta").onSnapshot(applyMeta, er);
        db.collection("resources").onSnapshot(applyRes, er);
        try { window.claude.use("assets").then(function (a) { resAssets = a || null; if (resForm) render(); }).catch(function () {}); } catch (e2) {}
        render();
        // voice clips are large: staff load them all after the first screen; students fetch only the clip they need (see speak)
        if (cloud.role !== "student") setTimeout(function () { db.collection("clips").onSnapshot(applyClips, er); }, 1500);
      });
    }).catch(function () {});
  }
  function roleSwitch() {
    if (cloud.role === "student") return "";
    var opts = STAFFPAGE ? (cloud.role === "admin" ? ["admin", "teacher"] : ["teacher"]) : cloud.role === "admin" ? ["admin", "teacher", "student"] : ["teacher", "student"], h = '<div class="roleswitch"><span>' + esc(t("viewAsT")) + "</span>";
    opts.forEach(function (o) { h += '<button class="chip' + (effRole() === o ? " on" : "") + '" data-act="viewAs" data-arg="' + (o === cloud.role ? "" : o) + '">' + esc(t("role_" + o)) + "</button>"; });
    return h + "</div>";
  }
  // ---- team: list signed-in users, make teachers ----
  var teamS = [], teamR = {}, teamOn = false, teamMsg = "";
  function teamStart() {
    if (teamOn || !cloud.db) return; teamOn = true;
    cloud.db.collection("students").onSnapshot(function (sn) {
      teamS = []; sn.docs.forEach(function (d) { var x = d.data() || {}; x.uid = d.id; teamS.push(x); });
      if (view === "staff" && staffTab === "team") render();
    }, function (e) { teamOn = false; teamMsg = String(e && (e.code || e.message) || e); cloudFail(e); });
    cloud.db.collection("roles").onSnapshot(function (sn) {
      teamR = {}; sn.docs.forEach(function (d) { var x = d.data() || {}; teamR[d.id] = x.role || ""; });
      if (view === "staff" && staffTab === "team") render();
    }, function (e) { cloudFail(e); });
  }
  function teamView() {
    var ur = LANG() === "ur", OWNER = "zaibislam0@gmail.com";
    var h = '<p class="note">' + (ur ? "جن لوگوں نے گوگل سے لاگ اِن کیا ہے وہ یہاں نظر آتے ہیں۔ 'استاد بنائیں' دبانے سے وہ لیکچر لکھ سکیں گے۔ ان کے اگلے لاگ اِن سے یہ لاگو ہوگا۔" : "Everyone who signed in with Google appears here. Press 'Make teacher' so they can write lectures. It applies the next time they sign in.") + "</p>";
    if (teamMsg) h += '<p class="note warnnote">' + esc(teamMsg) + "</p>";
    h += '<p class="small">' + (ur ? "کل لوگ: " : "People: ") + teamS.length + "</p>";
    if (!teamS.length) h += '<div class="card"><p class="small">' + (ur ? "ابھی کوئی نہیں۔" : "No one yet.") + "</p></div>";
    teamS.forEach(function (x) {
      var isOwner = (x.email || "").toLowerCase() === OWNER, r = isOwner ? "admin" : (teamR[x.uid] || "student");
      var rl = r === "admin" ? (ur ? "ایڈمن" : "Admin") : r === "teacher" ? (ur ? "استاد" : "Teacher") : (ur ? "طالب علم" : "Student");
      h += '<div class="card teamrow"><div class="teaminfo"><b>' + esc(x.name || "—") + '</b> <span class="teamrole ' + r + '">' + rl + "</span><br><small>" + esc(x.email || "") + " · " + esc(x.cls || "") + (x.city ? " · " + esc(x.city) : "") + (x.phone ? " · " + esc(x.phone) : "") + "</small></div>";
      if (!isOwner && r !== "admin") h += r === "teacher"
        ? '<button class="btn alt" data-act="teamSet" data-arg="' + esc(x.uid) + '|student">' + (ur ? "استاد ہٹائیں" : "Remove teacher") + "</button>"
        : '<button class="btn" data-act="teamSet" data-arg="' + esc(x.uid) + '|teacher">' + (ur ? "استاد بنائیں" : "Make teacher") + "</button>";
      h += "</div>";
    });
    return h;
  }
  function teamSet(arg) {
    var p = String(arg).split("|"), uid = p[0], role = p[1]; if (!uid || !cloud.db) return;
    var c = cloud.db.collection("roles").doc(uid);
    (role === "teacher" ? c.set({ role: "teacher", by: cloud.uid, at: Date.now() }) : c.delete()).then(function () { teamMsg = ""; render(); }).catch(function (e) { teamMsg = String(e && (e.code || e.message) || e); cloudFail(e); render(); });
  }
  function staffView() {
    var tabs = [["addbook", "tabBooks"], ["voice", "voiceRec"], ["admin", "hubAdmin"], ["team", "teamT"], ["pack", "packT"]];
    var h = kidBanner(t("staffTab")) + roleSwitch() + '<p class="note cloudnote">' + esc(t(cloud.err ? "cloudErr" : "cloudOn")) + (cloud.err ? " (" + esc(cloud.err) + ")" : "") + "</p><div class=\"subtabs\">";
    tabs.forEach(function (x) { h += '<button class="chip' + (staffTab === x[0] ? " on" : "") + '" data-act="staffTab" data-arg="' + x[0] + '">' + esc(x[0] === "team" ? (LANG() === "ur" ? "ٹیم" : "Team") : t(x[1])) + "</button>"; });
    h += "</div>";
    if (staffTab === "team") { teamStart(); return h + teamView(); }
    if (staffTab === "voice") return h + voiceView();
    if (staffTab === "admin") return h + adminView();
    if (staffTab === "pack") return h + packView() + '<div class="card"><button class="btn alt" data-act="migrate">' + esc(t("migrate")) + "</button><p class=\"small\">" + esc(t("migrateNote")) + "</p></div>";
    return h + addBookView();
  }
  // ---- teacher: lecture builder ----
  function newTF(g) { return { id: "", grade: g || String(state.grade), subject: "", title: "", cards: "", qs: [0, 1, 2].map(function () { return { q: "", o: ["", "", ""], c: 0 }; }), published: true }; }
  function readTF() {
    if (!tf) return;
    var $ = function (id) { return root.querySelector(id); }, v = function (id) { var e = $(id); return e ? e.value : null; };
    var g = v("#tgrade"); if (g !== null) tf.grade = g;
    var sj = v("#tsubj"); if (sj !== null) tf.subject = sj;
    var ti = v("#ttitle"); if (ti !== null) tf.title = ti;
    var ca = v("#tcards"); if (ca !== null) tf.cards = ca;
    tf.qs.forEach(function (q, i) {
      var a = v("#tq" + i); if (a !== null) q.q = a;
      for (var j = 0; j < 3; j++) { var o = v("#to" + i + "_" + j); if (o !== null) q.o[j] = o; }
      var c = v("#tc" + i); if (c !== null) q.c = Number(c);
    });
    var pb = $("#tpub"); if (pb) tf.published = pb.checked;
  }
  function endStop(x) { x = x.trim(); return /[.!?۔؟]$/.test(x) ? x : x + (LANG() === "ur" ? "۔" : "."); }
  function buildLecture() {
    readTF();
    var cards = tf.cards.split(/\n+/).map(function (x) { return x.trim(); }).filter(Boolean).map(endStop);
    if (!tf.title.trim() || !cards.length || !tf.subject) { lecMsg = t("lecNeed"); return null; }
    var quiz = [];
    tf.qs.forEach(function (q) {
      var opts = q.o.map(function (x) { return x.trim(); }), idx = [];
      opts.forEach(function (x, i) { if (x) idx.push(i); });
      if (!q.q.trim() || idx.length < 2 || !opts[q.c]) return;
      var a = idx.indexOf(q.c), list = idx.map(function (i) { return opts[i]; });
      quiz.push({ q: { en: q.q.trim(), ur: q.q.trim() }, opts: list, a: a, topic: "lecture" });
    });
    var g = gnum(tf.grade), id = tf.id || "lec-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), body = cards.join(" ");
    return { id: id, cards: tf.cards, qs: tf.qs, lesson: { id: id, subject: tf.subject, min: g, max: g, topic: "lecture", uploaded: true, lecture: true, unit: {}, title: { en: tf.title.trim(), ur: tf.title.trim() }, body: { en: body, ur: body }, quiz: quiz, meta: { status: "pending", source: "Teacher lecture", chapter: tf.title.trim() } } };
  }
  function saveLecture() {
    var b = buildLecture(); if (!b) return render();
    var ex = lecStore.filter(function (x) { return x.id === b.id; })[0];
    cloud.db.collection("lectures").doc(b.id).set({ lesson: b.lesson, cards: b.cards, qs: b.qs, grade: String(tf.grade), subject: tf.subject, published: !!tf.published, author: ex && ex.d.author ? ex.d.author : cloud.uid, updated: Date.now() })
      .then(function () { lecMsg = t("lecSaved"); tf = null; render(); }).catch(function (e) { cloudFail(e); lecMsg = t("cloudErr"); render(); });
  }
  function teacherView() {
    var h = kidBanner(t("teacherTab") + ". " + t("teachIntro")) + roleSwitch();
    if (lecMsg) h += '<p class="note" aria-live="polite">' + esc(lecMsg) + "</p>";
    if (!tf) {
      h += '<button class="bigbtn" data-act="lecNew">+ ' + esc(t("lecNew")) + "</button>";
      var mine = lecStore.filter(function (x) { return cloud.role === "admin" || x.d.author === cloud.uid; });
      h += "<h3>" + esc(t("lecMine")) + "</h3>";
      if (!mine.length) h += '<p class="small">' + esc(t("lecNone")) + "</p>";
      mine.forEach(function (x) {
        var l = x.d.lesson;
        h += '<div class="card"><b>' + esc(L(l.title)) + '</b><br><span class="small">' + esc(gradeLabel(x.d.grade)) + " · " + esc(x.d.subject) + " · " + esc(t(x.d.published ? "lecPub" : "lecDraft")) + '</span><div class="actions"><button class="btn alt" data-act="lecEdit" data-arg="' + x.id + '">' + esc(t("lecEdit")) + '</button><button class="btn alt" data-act="lecToggle" data-arg="' + x.id + '">' + esc(t(x.d.published ? "lecUnpub" : "lecPubBtn")) + '</button><button class="btn alt" data-act="lecDel" data-arg="' + x.id + '">' + esc(t("delete")) + "</button></div></div>";
      });
      return h;
    }
    var subs = classSubjects(tf.grade);
    if (!tf.subject || !subs.some(function (x) { return x.id === tf.subject; })) tf.subject = subs[0] ? subs[0].id : "";
    h += '<div class="card"><label>' + esc(t("grade")) + '<select id="tgrade">';
    D.grades.forEach(function (g) { h += '<option value="' + g + '"' + (String(tf.grade) === String(g) ? " selected" : "") + ">" + esc(gradeLabel(g)) + "</option>"; });
    h += "</select></label><label>" + esc(t("subject")) + '<select id="tsubj">';
    subs.forEach(function (x) { h += '<option value="' + x.id + '"' + (tf.subject === x.id ? " selected" : "") + ">" + esc(L(x)) + "</option>"; });
    h += "</select></label><label>" + esc(t("lecTitle")) + '<input id="ttitle" value="' + esc(tf.title) + '"></label>';
    h += "<label>" + esc(t("lecCards")) + '<textarea id="tcards" rows="6">' + esc(tf.cards) + "</textarea></label><p class=\"small\">" + esc(t("lecCardsHint")) + "</p>";
    h += "<h3>" + esc(t("lecQuiz")) + "</h3>";
    tf.qs.forEach(function (q, i) {
      h += '<div class="qblock"><label>' + esc(t("lecQ")) + " " + (i + 1) + '<input id="tq' + i + '" value="' + esc(q.q) + '"></label>';
      for (var j = 0; j < 3; j++) h += '<label class="optl">' + "ABC".charAt(j) + '<input id="to' + i + "_" + j + '" value="' + esc(q.o[j]) + '"></label>';
      h += "<label>" + esc(t("lecRight")) + '<select id="tc' + i + '">';
      for (var k = 0; k < 3; k++) h += '<option value="' + k + '"' + (q.c === k ? " selected" : "") + ">" + "ABC".charAt(k) + "</option>";
      h += "</select></label></div>";
    });
    h += '<label class="inl"><input type="checkbox" id="tpub"' + (tf.published ? " checked" : "") + "> " + esc(t("lecPublishNow")) + '</label><div class="actions"><button class="btn" data-act="lecSave">' + esc(t("lecSaveBtn")) + '</button><button class="btn alt" data-act="lecCancel">' + esc(t("cancel")) + "</button></div></div>";
    return h;
  }

  // ================= Class resources hub: video, PDF notes, books, tests, Urdu guide =================
  var resDocs = [], resTab = "video", resForm = null, resMsg = "", resOpenId = "", resRun = null, resArm = "", resAssets = null, autoMsg = "", autoBusy = false, autoBook = "";
  var RT = {
    en: {
      hub: "Class resources", sub_video: "Watch and learn", sub_note: "Read and revise", sub_book: "Explore books", sub_test: "Take tests", sub_guide: "Learn in Urdu", play_now: "Play Now", video: "Video lectures", note: "PDF notes", book: "Books", test: "Tests", guide: "Urdu guide",
      none: "Nothing added here yet.", add_video: "Add video", add_note: "Add notes", add_book: "Add book", add_test: "Add test", add_guide: "Add Urdu guide",
      play: "Play", openyt: "Open on YouTube", open: "Open", download: "Download", start: "Start test", submit: "Check answers", again: "Try again",
      score: "Score", last: "Last score", best: "Best", qcount: "questions", engBook: "English book", guideBtn: "Urdu guide for this book",
      mkGuide: "Make Urdu guide for this book", autoBtn: "✨ Make notes, tests and guide", autoRead: "Reading the book…", autoMaking: "Making study material", autoDone: "Drafts are ready. Check them, then press Publish.", autoNoText: "This book has no readable text (scan or old Urdu font), so notes cannot be made automatically.", autoFail: "Some parts could not be made. You can try again.", autoNoAi: "AI is not set up yet.", autoNoHelp: "AI helper made this: check before use", noteChap: "Chapter notes", draft: "Draft - hidden from students", aiNote: "Made with AI help, checked by a teacher",
      words: "Word meanings", tips: "How to study this", ftype: "Type", fgrade: "Class", fsubj: "Subject", ftitle: "Title", fdesc: "Short description (optional)",
      flink: "Paste a YouTube or https link", fupload: "Or upload a video file (admin only)", fpub: "Show to students", save: "Save", cancel: "Cancel",
      edit: "Edit", del: "Delete", delArm: "Tap again to delete", hide: "Hide", show: "Publish", fen: "This book is in English (needs an Urdu guide)",
      fqs: "Questions", fqsHint: "One question per line: Question | A | B | C | D | right letter (A, B, C or D). 2 to 4 options.",
      fstext: "English text of the chapter (for the AI helper)", aiBtn: "Write Urdu guide with AI", fsum: "Urdu summary (one point per line)",
      fwords: "Word meanings: English = اردو (one per line)", ftips: "Study tips in Urdu (one per line)", fbook: "Linked book (optional)", none2: "None",
      needTitle: "Please write a title.", needSrc: "Please upload a file or paste a link.", needHttps: "The link must start with https://",
      needQs: "No valid questions found. Check the format.", needSum: "Please write the Urdu summary.", saved: "Saved.", tooBig: "This file is too big. Please make it smaller, or paste a link instead.",
      uploading: "Uploading...", uploaded: "File uploaded.", upFail: "Upload failed", making: "Making the book from your photos...", mixFiles: "Choose one PDF, or only photos of the pages.", badImg: "This photo could not be read. Use JPG, PNG or WebP.", fuploadBook: "Or upload a PDF, or photos of the pages (admin only)", aiNo: "The AI helper is not available here. Please write the guide by hand.",
      aiWorking: "Writing the Urdu guide... this can take a minute.", aiDone: "Draft ready. Please read and fix it, then publish.", aiFail: "The AI helper could not finish. You can write it by hand.",
      cloudErr2: "Could not save. Please try again.", file: "File attached", pending: "Review pending"
    },
    ur: {
      hub: "اس جماعت کا مواد", sub_video: "دیکھیں اور سیکھیں", sub_note: "پڑھیں اور دہرائیں", sub_book: "کتابیں دیکھیں", sub_test: "ٹیسٹ دیں", sub_guide: "اردو میں سمجھیں", play_now: "کھیلیں", video: "ویڈیو لیکچر", note: "پی ڈی ایف نوٹس", book: "کتابیں", test: "ٹیسٹ", guide: "اردو رہنمائی",
      none: "ابھی یہاں کچھ شامل نہیں ہوا۔", add_video: "ویڈیو شامل کریں", add_note: "نوٹس شامل کریں", add_book: "کتاب شامل کریں", add_test: "ٹیسٹ شامل کریں", add_guide: "اردو رہنمائی شامل کریں",
      play: "چلائیں", openyt: "یوٹیوب پر کھولیں", open: "کھولیں", download: "ڈاؤن لوڈ", start: "ٹیسٹ شروع کریں", submit: "جوابات جانچیں", again: "دوبارہ کوشش کریں",
      score: "نمبر", last: "آخری نمبر", best: "بہترین", qcount: "سوال", engBook: "انگریزی کتاب", guideBtn: "اس کتاب کی اردو رہنمائی",
      mkGuide: "اس کتاب کی اردو رہنمائی بنائیں", autoBtn: "✨ نوٹس، ٹیسٹ اور رہنمائی بنائیں", autoRead: "کتاب پڑھی جا رہی ہے…", autoMaking: "پڑھائی کا مواد بن رہا ہے", autoDone: "مسودے تیار ہیں۔ دیکھ لیں، پھر «شائع کریں» دبائیں۔", autoNoText: "اس کتاب میں پڑھنے کے قابل متن نہیں (اسکین یا پرانا اردو فونٹ)، اس لیے نوٹس خود نہیں بن سکتے۔", autoFail: "کچھ حصے نہیں بن سکے۔ دوبارہ کوشش کریں۔", autoNoAi: "اے آئی ابھی سیٹ نہیں ہوا۔", autoNoHelp: "اے آئی کی مدد سے بنا: استعمال سے پہلے جانچ لیں", noteChap: "باب کے نوٹس", draft: "مسودہ - طلبہ کو نظر نہیں آتا", aiNote: "اے آئی کی مدد سے بنی، استاد نے جانچی",
      words: "مشکل الفاظ", tips: "پڑھنے کا طریقہ", ftype: "قسم", fgrade: "جماعت", fsubj: "مضمون", ftitle: "عنوان", fdesc: "مختصر تفصیل (اختیاری)",
      flink: "یوٹیوب یا https لنک لگائیں", fupload: "یا ویڈیو فائل اپ لوڈ کریں (صرف ایڈمن)", fpub: "طلبہ کو دکھائیں", save: "محفوظ کریں", cancel: "منسوخ",
      edit: "ترمیم", del: "حذف کریں", delArm: "حذف کرنے کے لیے دوبارہ دبائیں", hide: "چھپائیں", show: "شائع کریں", fen: "یہ کتاب انگریزی میں ہے (اردو رہنمائی چاہیے)",
      fqs: "سوالات", fqsHint: "ہر لائن میں ایک سوال: سوال | A | B | C | D | صحیح حرف (A, B, C یا D)۔ 2 سے 4 آپشن۔",
      fstext: "باب کا انگریزی متن (اے آئی مددگار کے لیے)", aiBtn: "اے آئی سے اردو رہنمائی لکھوائیں", fsum: "اردو خلاصہ (ہر لائن میں ایک نکتہ)",
      fwords: "الفاظ کے معنی: English = اردو (ہر لائن میں ایک)", ftips: "اردو میں پڑھنے کے مشورے (ہر لائن میں ایک)", fbook: "متعلقہ کتاب (اختیاری)", none2: "کوئی نہیں",
      needTitle: "براہ کرم عنوان لکھیں۔", needSrc: "براہ کرم فائل اپ لوڈ کریں یا لنک لگائیں۔", needHttps: "لنک https:// سے شروع ہونا چاہیے۔",
      needQs: "کوئی درست سوال نہیں ملا۔ فارمیٹ دیکھ لیں۔", needSum: "براہ کرم اردو خلاصہ لکھیں۔", saved: "محفوظ ہو گیا۔", tooBig: "یہ فائل بہت بڑی ہے۔ براہ کرم اسے چھوٹا کریں یا لنک لگائیں۔",
      uploading: "اپ لوڈ ہو رہی ہے...", uploaded: "فائل اپ لوڈ ہو گئی۔", upFail: "اپ لوڈ نہیں ہو سکی", making: "تصاویر سے کتاب بن رہی ہے...", mixFiles: "ایک پی ڈی ایف چنیں، یا صرف صفحات کی تصاویر۔", badImg: "یہ تصویر پڑھی نہیں جا سکی۔ جے پی جی، پی این جی یا ویب پی استعمال کریں۔", fuploadBook: "یا پی ڈی ایف، یا صفحات کی تصاویر اپ لوڈ کریں (صرف ایڈمن)", aiNo: "یہاں اے آئی مددگار دستیاب نہیں۔ براہ کرم رہنمائی خود لکھیں۔",
      aiWorking: "اردو رہنمائی لکھی جا رہی ہے... ایک منٹ لگ سکتا ہے۔", aiDone: "مسودہ تیار ہے۔ براہ کرم پڑھ کر درست کریں، پھر شائع کریں۔", aiFail: "اے آئی مددگار مکمل نہیں کر سکا۔ آپ خود لکھ سکتے ہیں۔",
      cloudErr2: "محفوظ نہیں ہو سکا۔ دوبارہ کوشش کریں۔", file: "فائل لگی ہے", pending: "جانچ باقی"
    }
  };
  function rt(k) { var o = RT[LANG()] || RT.en; return o[k] || RT.en[k] || k; }
  var BUILTIN_RES = [{"id": "b-kg-math-primer", "d": {"id": "b-kg-math-primer", "type": "book", "grade": "KG", "subject": "math", "title": "Mathematics Primer (Pre-I) · ریاضی پرائمر", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (150 pages).", "published": true, "builtin": true, "updated": 1, "src": {"kind": "link", "url": "/books/pctb-pre1-math-primer.pdf"}}}, {"id": "n-kg-math-u1", "d": {"id": "n-kg-math-u1", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 1: Colours and tracing · رنگ اور لکیریں", "desc": "Our own revision notes made from the primer, printed pp. 1-8. Pending review by a teacher.", "published": true, "builtin": true, "updated": 11, "src": {"kind": "link", "url": "/notes/kg-math-unit1.pdf"}}}, {"id": "n-kg-math-u2", "d": {"id": "n-kg-math-u2", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 2: Comparing size, length and weight · سائز، لمبائی اور وزن کا موازنہ", "desc": "Our own revision notes made from the primer, printed pp. 9-23. Pending review by a teacher.", "published": true, "builtin": true, "updated": 12, "src": {"kind": "link", "url": "/notes/kg-math-unit2.pdf"}}}, {"id": "n-kg-math-u3", "d": {"id": "n-kg-math-u3", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 3: Numbers 1 to 5 and first shapes · اعداد 1 تا 5 اور ابتدائی اشکال", "desc": "Our own revision notes made from the primer, printed pp. 24-50. Pending review by a teacher.", "published": true, "builtin": true, "updated": 13, "src": {"kind": "link", "url": "/notes/kg-math-unit3.pdf"}}}, {"id": "n-kg-math-u4", "d": {"id": "n-kg-math-u4", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 4: Numbers 6 to 10 and shapes · اعداد 6 تا 10 اور اشکال", "desc": "Our own revision notes made from the primer, printed pp. 51-82. Pending review by a teacher.", "published": true, "builtin": true, "updated": 14, "src": {"kind": "link", "url": "/notes/kg-math-unit4.pdf"}}}, {"id": "n-kg-math-u5", "d": {"id": "n-kg-math-u5", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 5: Numbers 11 to 20 · اعداد 11 تا 20", "desc": "Our own revision notes made from the primer, printed pp. 83-98. Pending review by a teacher.", "published": true, "builtin": true, "updated": 15, "src": {"kind": "link", "url": "/notes/kg-math-unit5.pdf"}}}, {"id": "n-kg-math-u6", "d": {"id": "n-kg-math-u6", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 6: Numbers 21 to 30, odd and even, measurement · اعداد 21 تا 30، طاق و جفت اور پیمائش", "desc": "Our own revision notes made from the primer, printed pp. 99-108. Pending review by a teacher.", "published": true, "builtin": true, "updated": 16, "src": {"kind": "link", "url": "/notes/kg-math-unit6.pdf"}}}, {"id": "n-kg-math-u7", "d": {"id": "n-kg-math-u7", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 7: Numbers 31 to 50, 3-D shapes and sets · اعداد 31 تا 50، سہ ابعادی اشکال اور سیٹ", "desc": "Our own revision notes made from the primer, printed pp. 109-125. Pending review by a teacher.", "published": true, "builtin": true, "updated": 17, "src": {"kind": "link", "url": "/notes/kg-math-unit7.pdf"}}}, {"id": "n-kg-math-u8", "d": {"id": "n-kg-math-u8", "type": "note", "grade": "KG", "subject": "math", "title": "Unit 8: Addition, subtraction, money, position and time · جمع، تفریق، رقم، مقام اور وقت", "desc": "Our own revision notes made from the primer, printed pp. 126-145. Pending review by a teacher.", "published": true, "builtin": true, "updated": 18, "src": {"kind": "link", "url": "/notes/kg-math-unit8.pdf"}}}, {"id": "t-kg-math-u1", "d": {"id": "t-kg-math-u1", "type": "test", "grade": "KG", "subject": "math", "title": "Test 1: Colours and tracing · رنگ اور لکیریں", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 1-8. Pending review by a teacher.", "published": true, "builtin": true, "updated": 31, "qs": [{"q": "آسمان کا رنگ کیا ہے؟||What colour is the sky?", "o": ["نیلا · Blue", "لال · Red", "کالا · Black"], "c": 0}, {"q": "کیلے کا رنگ کیا ہے؟||What colour is a banana?", "o": ["نیلا · Blue", "پیلا · Yellow", "ہرا · Green"], "c": 1}, {"q": "پتے کا رنگ کیا ہے؟||What colour is a leaf?", "o": ["لال · Red", "پیلا · Yellow", "ہرا · Green"], "c": 2}, {"q": "سیب کا رنگ کیا ہے؟||What colour is a ripe apple?", "o": ["لال · Red", "نیلا · Blue", "ہرا · Green"], "c": 0}, {"q": "بینگن کا رنگ کیا ہے؟||What colour is a brinjal?", "o": ["پیلا · Yellow", "جامنی · Purple", "لال · Red"], "c": 1}, {"q": "مالٹے کا رنگ کیا ہے؟||What colour is an orange?", "o": ["جامنی · Purple", "ہرا · Green", "نارنجی · Orange"], "c": 2}, {"q": "کالی بلی کا رنگ کیا ہے؟||What colour is a black cat?", "o": ["کالا · Black", "گلابی · Pink", "پیلا · Yellow"], "c": 0}, {"q": "پھول کا رنگ گلابی ہے۔ گلابی کون سا ہے؟||Which one is pink?", "o": ["کالا · Black", "گلابی · Pink", "ہرا · Green"], "c": 1}]}}, {"id": "t-kg-math-u2", "d": {"id": "t-kg-math-u2", "type": "test", "grade": "KG", "subject": "math", "title": "Test 2: Comparing size, length and weight · سائز، لمبائی اور وزن کا موازنہ", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 9-23. Pending review by a teacher.", "published": true, "builtin": true, "updated": 32, "qs": [{"q": "کون سا سب سے بڑا ہے؟||Which is the biggest?", "o": ["ہاتھی · Elephant", "کتا · Dog", "چوہا · Mouse"], "c": 0}, {"q": "کون سا سب سے چھوٹا ہے؟||Which is the smallest?", "o": ["ہاتھی · Elephant", "چوہا · Mouse", "کتا · Dog"], "c": 1}, {"q": "کون سا لمبا ہے؟||Which one is long?", "o": ["خرگوش · Rabbit", "چوزہ · Chick", "سانپ · Snake"], "c": 2}, {"q": "کون سا بہت اونچا ہے؟||Which one is very tall?", "o": ["زرافہ · Giraffe", "خرگوش · Rabbit", "بلی · Cat"], "c": 0}, {"q": "کون سا بھاری ہے؟||Which one is heavy?", "o": ["تتلی · Butterfly", "گائے · Cow", "پر · Feather"], "c": 1}, {"q": "کون سا ہلکا ہے؟||Which one is light?", "o": ["گائے · Cow", "ہاتھی · Elephant", "تتلی · Butterfly"], "c": 2}, {"q": "کون سا موٹا ہے؟||Which one is thick?", "o": ["موٹی کتاب · Thick book", "پتلی کاپی · Thin copy"], "c": 0}, {"q": "لال، نیلا، لال، نیلا، لال، ___ ۔ اگلا رنگ کون سا ہے؟||Pattern: red, blue, red, blue, red, ___", "o": ["لال · Red", "نیلا · Blue", "ہرا · Green"], "c": 1}]}}, {"id": "t-kg-math-u3", "d": {"id": "t-kg-math-u3", "type": "test", "grade": "KG", "subject": "math", "title": "Test 3: Numbers 1 to 5 and first shapes · اعداد 1 تا 5 اور ابتدائی اشکال", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 24-50. Pending review by a teacher.", "published": true, "builtin": true, "updated": 33, "qs": [{"q": "3 کے بعد کون سا نمبر آتا ہے؟||What comes after 3?", "o": ["4", "2", "5"], "c": 0}, {"q": "5 سے پہلے کون سا نمبر آتا ہے؟||What comes before 5?", "o": ["3", "4", "6"], "c": 1}, {"q": "ہماری کتنی آنکھیں ہیں؟||How many eyes do we have?", "o": ["1", "3", "2"], "c": 2}, {"q": "ایک ہاتھ میں کتنی انگلیاں ہیں؟||How many fingers on one hand?", "o": ["5", "4", "3"], "c": 0}, {"q": "بلی کی کتنی ٹانگیں ہیں؟||How many legs does a cat have?", "o": ["2", "4", "5"], "c": 1}, {"q": "گیند کی شکل کون سی ہے؟||What shape is a ball's face?", "o": ["تکون · Triangle", "چوکور · Square", "دائرہ · Circle"], "c": 2}, {"q": "پیزا کے ٹکڑے کی شکل کون سی ہے؟||What shape is a pizza slice?", "o": ["تکون · Triangle", "دائرہ · Circle", "چوکور · Square"], "c": 0}, {"q": "5, 4, 3, ___, 1 ۔ غائب نمبر کون سا ہے؟||Count backwards: 5, 4, 3, ___, 1", "o": ["5", "2", "0"], "c": 1}]}}, {"id": "t-kg-math-u4", "d": {"id": "t-kg-math-u4", "type": "test", "grade": "KG", "subject": "math", "title": "Test 4: Numbers 6 to 10 and shapes · اعداد 6 تا 10 اور اشکال", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 51-82. Pending review by a teacher.", "published": true, "builtin": true, "updated": 34, "qs": [{"q": "6 کے بعد کون سا نمبر آتا ہے؟||What comes after 6?", "o": ["7", "5", "8"], "c": 0}, {"q": "10 سے پہلے کون سا نمبر آتا ہے؟||What comes before 10?", "o": ["8", "9", "11"], "c": 1}, {"q": "7 اور 9 کے درمیان کون سا نمبر ہے؟||Which number is between 7 and 9?", "o": ["6", "10", "8"], "c": 2}, {"q": "دونوں ہاتھوں میں کل کتنی انگلیاں ہیں؟||How many fingers on both hands?", "o": ["10", "5", "8"], "c": 0}, {"q": "6 اور 9 میں سے بڑا نمبر کون سا ہے؟||Which is bigger, 6 or 9?", "o": ["6", "9"], "c": 1}, {"q": "4 + ؟ = 10 ۔ دس کا دوست کون سا ہے؟||Friends of ten: 4 + ? = 10", "o": ["5", "7", "6"], "c": 2}, {"q": "انڈے کی شکل کون سی ہے؟||What shape is an egg?", "o": ["بیضوی · Oval", "چوکور · Square", "تکون · Triangle"], "c": 0}, {"q": "اینٹ کیسی ہوتی ہے؟||Is a brick hard or soft?", "o": ["نرم · Soft", "سخت · Hard"], "c": 1}]}}, {"id": "t-kg-math-u5", "d": {"id": "t-kg-math-u5", "type": "test", "grade": "KG", "subject": "math", "title": "Test 5: Numbers 11 to 20 · اعداد 11 تا 20", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 83-98. Pending review by a teacher.", "published": true, "builtin": true, "updated": 35, "qs": [{"q": "11 کے بعد کون سا نمبر آتا ہے؟||What comes after 11?", "o": ["12", "10", "13"], "c": 0}, {"q": "20 سے پہلے کون سا نمبر آتا ہے؟||What comes before 20?", "o": ["18", "19", "21"], "c": 1}, {"q": "14 اور 16 کے درمیان کون سا نمبر ہے؟||Which number is between 14 and 16?", "o": ["13", "17", "15"], "c": 2}, {"q": "10 اور 1 مل کر کتنے بنتے ہیں؟||10 and 1 more makes?", "o": ["11", "12", "9"], "c": 0}, {"q": "10 اور 5 مل کر کتنے بنتے ہیں؟||10 and 5 more makes?", "o": ["14", "15", "16"], "c": 1}, {"q": "13 اور 18 میں سے بڑا نمبر کون سا ہے؟||Which is bigger, 13 or 18?", "o": ["18", "13"], "c": 0}, {"q": "19 کے بعد کون سا نمبر آتا ہے؟||What comes after 19?", "o": ["20", "18", "21"], "c": 0}, {"q": "16, 17, ___, 19 ۔ غائب نمبر کون سا ہے؟||16, 17, ___, 19", "o": ["15", "18", "20"], "c": 1}]}}, {"id": "t-kg-math-u6", "d": {"id": "t-kg-math-u6", "type": "test", "grade": "KG", "subject": "math", "title": "Test 6: Numbers 21 to 30, odd and even, measurement · اعداد 21 تا 30، طاق و جفت اور پیمائش", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 99-108. Pending review by a teacher.", "published": true, "builtin": true, "updated": 36, "qs": [{"q": "25 کے بعد کون سا نمبر آتا ہے؟||What comes after 25?", "o": ["26", "24", "27"], "c": 0}, {"q": "30 سے پہلے کون سا نمبر آتا ہے؟||What comes before 30?", "o": ["28", "29", "31"], "c": 1}, {"q": "27 اور 29 کے درمیان کون سا نمبر ہے؟||Which number is between 27 and 29?", "o": ["26", "30", "28"], "c": 2}, {"q": "کون سا نمبر جفت (even) ہے؟||Which number is even?", "o": ["4", "7", "9"], "c": 0}, {"q": "کون سا نمبر طاق (odd) ہے؟||Which number is odd?", "o": ["6", "9", "8"], "c": 1}, {"q": "2, 4, 6, ___ ۔ اگلا جفت نمبر کون سا ہے؟||Even numbers: 2, 4, 6, ___", "o": ["7", "9", "8"], "c": 2}, {"q": "1, 3, 5, ___ ۔ اگلا طاق نمبر کون سا ہے؟||Odd numbers: 1, 3, 5, ___", "o": ["7", "6", "8"], "c": 0}, {"q": "لمبائی ناپنے کے لیے کیا استعمال ہوتا ہے؟||What do we use to measure length?", "o": ["گھڑی · Clock", "فٹا · Ruler", "ترازو · Weighing scale"], "c": 1}]}}, {"id": "t-kg-math-u7", "d": {"id": "t-kg-math-u7", "type": "test", "grade": "KG", "subject": "math", "title": "Test 7: Numbers 31 to 50, 3-D shapes and sets · اعداد 31 تا 50، سہ ابعادی اشکال اور سیٹ", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 109-125. Pending review by a teacher.", "published": true, "builtin": true, "updated": 37, "qs": [{"q": "39 کے بعد کون سا نمبر آتا ہے؟||What comes after 39?", "o": ["40", "38", "41"], "c": 0}, {"q": "50 سے پہلے کون سا نمبر آتا ہے؟||What comes before 50?", "o": ["48", "49", "51"], "c": 1}, {"q": "44 اور 46 کے درمیان کون سا نمبر ہے؟||Which number is between 44 and 46?", "o": ["43", "47", "45"], "c": 2}, {"q": "10, 20, 30, ___ ۔ اگلا نمبر کون سا ہے؟||Count by tens: 10, 20, 30, ___", "o": ["40", "35", "50"], "c": 0}, {"q": "گیند کی ٹھوس شکل کون سی ہے؟||What 3-D shape is a ball?", "o": ["مکعب · Cube", "گولا · Sphere", "بیلن · Cylinder"], "c": 1}, {"q": "لُڈو کے پانسے کی شکل کون سی ہے؟||What 3-D shape is a dice?", "o": ["گولا · Sphere", "مخروط · Cone", "مکعب · Cube"], "c": 2}, {"q": "آئس کریم کون کی شکل جیسی ہوتی ہے؟||What 3-D shape is an ice-cream cone?", "o": ["مخروط · Cone", "مکعب · Cube", "بیلن · Cylinder"], "c": 0}, {"q": "ایک جیسی چیزوں کے گروپ کو کیا کہتے ہیں؟||A group of things that belong together is a ___", "o": ["گیند · Ball", "سیٹ · Set"], "c": 1}]}}, {"id": "t-kg-math-u8", "d": {"id": "t-kg-math-u8", "type": "test", "grade": "KG", "subject": "math", "title": "Test 8: Addition, subtraction, money, position and time · جمع، تفریق، رقم، مقام اور وقت", "desc": "Questions written by IQRA on the topics of the primer, printed pp. 126-145. Pending review by a teacher.", "published": true, "builtin": true, "updated": 38, "qs": [{"q": "2 + 1 = ؟||2 + 1 = ?", "o": ["3", "2", "4"], "c": 0}, {"q": "2 + 2 = ؟||2 + 2 = ?", "o": ["3", "4", "5"], "c": 1}, {"q": "4 + 3 = ؟||4 + 3 = ?", "o": ["6", "8", "7"], "c": 2}, {"q": "3 − 1 = ؟||3 − 1 = ?", "o": ["2", "1", "4"], "c": 0}, {"q": "7 − 4 = ؟||7 − 4 = ?", "o": ["2", "3", "4"], "c": 1}, {"q": "5 روپے کا سکہ ہے یا نوٹ؟||Is Rs. 5 a coin or a note?", "o": ["سکہ · Coin", "نوٹ · Note"], "c": 0}, {"q": "پیر کے بعد کون سا دن آتا ہے؟||Which day comes after Monday?", "o": ["بدھ · Wednesday", "منگل · Tuesday", "اتوار · Sunday"], "c": 1}, {"q": "ایک ہفتے میں کتنے دن ہوتے ہیں؟||How many days are in one week?", "o": ["5", "12", "7"], "c": 2}]}}, {"id": "b-kg-urdu-primer", "d": {"id": "b-kg-urdu-primer", "type": "book", "grade": "KG", "subject": "urdu", "title": "Urdu Primer (Pre-I) · اردو پرائمر", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (166 pages).", "published": true, "builtin": true, "updated": 2, "src": {"kind": "link", "url": "/books/pctb-pre1-urdu-primer.pdf"}}}, {"id": "b-kg-urdu-qaida", "d": {"id": "b-kg-urdu-qaida", "type": "book", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida (Pre-I) · اردو قاعدہ", "desc": "Punjab Curriculum and Textbook Board, Lahore. Supplementary reader (42 pages).", "published": true, "builtin": true, "updated": 2, "src": {"kind": "link", "url": "/books/pctb-pre1-urdu-qaida.pdf"}}}, {"id": "b-kg-english-primer", "d": {"id": "b-kg-english-primer", "type": "book", "grade": "KG", "subject": "english", "title": "English Primer (Pre-I) · انگریزی پرائمر", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (150 pages).", "published": true, "builtin": true, "updated": 2, "src": {"kind": "link", "url": "/books/pctb-pre1-english-primer.pdf"}}}, {"id": "n-kg-u1", "d": {"id": "n-kg-u1", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 1: Hamd, Naat and prayer · حمد، نعت اور دعا", "desc": "Our own revision notes made from the book, printed p. 1-3. Pending review by a teacher.", "published": true, "builtin": true, "updated": 100, "src": {"kind": "link", "url": "/notes/kg-urdu-unit1.pdf"}}}, {"id": "t-kg-u1", "d": {"id": "t-kg-u1", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 1: Hamd, Naat and prayer · حمد، نعت اور دعا", "desc": "Questions written by IQRA on the topics of the book, printed p. 1-3. Pending review by a teacher.", "published": true, "builtin": true, "updated": 200, "qs": [{"q": "حمد کس کی تعریف ہے؟||Hamd is in praise of whom?", "o": ["اللہ · Allah", "چاند · The moon", "استاد · Teacher"], "c": 0}, {"q": "نعت کس کی شان میں کہی جاتی ہے؟||Naat is said in praise of whom?", "o": ["دوست · A friend", "نبی کریم ﷺ · The Prophet ﷺ", "ماں · Mother"], "c": 1}, {"q": "دعا کس سے مانگتے ہیں؟||Whom do we ask when we make dua?", "o": ["دوست سے · From a friend", "گڑیا سے · From a doll", "اللہ سے · From Allah"], "c": 2}, {"q": "کھانے سے پہلے کیا پڑھتے ہیں؟||What do we say before eating?", "o": ["بسم اللہ · Bismillah", "الحمدللہ · Alhamdulillah", "خدا حافظ · Goodbye"], "c": 0}, {"q": "کھانے کے بعد کیا کہتے ہیں؟||What do we say after eating?", "o": ["بسم اللہ · Bismillah", "الحمدللہ · Alhamdulillah", "السلام علیکم · Salam"], "c": 1}]}}, {"id": "n-kg-u2", "d": {"id": "n-kg-u2", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 2: Welcome, manners and my surroundings · خوش آمدید، آداب اور ماحول", "desc": "Our own revision notes made from the book, printed p. 4-11. Pending review by a teacher.", "published": true, "builtin": true, "updated": 101, "src": {"kind": "link", "url": "/notes/kg-urdu-unit2.pdf"}}}, {"id": "t-kg-u2", "d": {"id": "t-kg-u2", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 2: Welcome, manners and my surroundings · خوش آمدید، آداب اور ماحول", "desc": "Questions written by IQRA on the topics of the book, printed p. 4-11. Pending review by a teacher.", "published": true, "builtin": true, "updated": 201, "qs": [{"q": "ملتے وقت کیا کہتے ہیں؟||What do we say when we meet?", "o": ["السلام علیکم · Assalamu alaikum", "خدا حافظ · Goodbye", "شکریہ · Thank you"], "c": 0}, {"q": "کوئی مدد کرے تو کیا کہتے ہیں؟||Someone helps you. What do you say?", "o": ["معاف کیجیے · Sorry", "شکریہ · Thank you", "خدا حافظ · Goodbye"], "c": 1}, {"q": "کلاس روم میں ہم کیسے رہتے ہیں؟||How do we stay in the classroom?", "o": ["شور مچاتے ہوئے · Noisy", "بھاگتے ہوئے · Running", "خاموش · Quiet"], "c": 2}, {"q": "کھیل میں اپنی باری پر کیا کرتے ہیں؟||In a game, what do we do for our turn?", "o": ["انتظار کرتے ہیں · We wait", "دھکا دیتے ہیں · We push", "چھین لیتے ہیں · We snatch"], "c": 0}, {"q": "اپنا تعارف کراتے وقت کون سی بات بتاتے ہیں؟||When you introduce yourself, what do you say?", "o": ["کسی اور کا نام · Another person's name", "اپنا نام · Your name", "کچھ نہیں · Nothing"], "c": 1}]}}, {"id": "n-kg-u3", "d": {"id": "n-kg-u3", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 3: Letters ا to ث, Islam and traffic · حروف ا تا ث، اسلام اور ٹریفک", "desc": "Our own revision notes made from the book, printed p. 12-36. Pending review by a teacher.", "published": true, "builtin": true, "updated": 102, "src": {"kind": "link", "url": "/notes/kg-urdu-unit3.pdf"}}}, {"id": "t-kg-u3", "d": {"id": "t-kg-u3", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 3: Letters ا to ث, Islam and traffic · حروف ا تا ث، اسلام اور ٹریفک", "desc": "Questions written by IQRA on the topics of the book, printed p. 12-36. Pending review by a teacher.", "published": true, "builtin": true, "updated": 202, "qs": [{"q": "انگور کس حرف سے شروع ہوتا ہے؟||Which letter does angoor (grapes) start with?", "o": ["ا", "ب", "پ"], "c": 0}, {"q": "بلی کس حرف سے شروع ہوتی ہے؟||Which letter does billi (cat) start with?", "o": ["ا", "ب", "ت"], "c": 1}, {"q": "پیالہ کس حرف سے شروع ہوتا ہے؟||Which letter does pyala (bowl) start with?", "o": ["ب", "ٹ", "پ"], "c": 2}, {"q": "تربوز کس حرف سے شروع ہوتا ہے؟||Which letter does tarbooz (watermelon) start with?", "o": ["ت", "ٹ", "پ"], "c": 0}, {"q": "ٹوپی کس حرف سے شروع ہوتی ہے؟||Which letter does topi (cap) start with?", "o": ["ت", "ٹ", "ث"], "c": 1}]}}, {"id": "n-kg-u4", "d": {"id": "n-kg-u4", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 4: Letters ج to خ, feelings and stories · حروف ج تا خ، احساس اور کہانی", "desc": "Our own revision notes made from the book, printed p. 37-55. Pending review by a teacher.", "published": true, "builtin": true, "updated": 103, "src": {"kind": "link", "url": "/notes/kg-urdu-unit4.pdf"}}}, {"id": "t-kg-u4", "d": {"id": "t-kg-u4", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 4: Letters ج to خ, feelings and stories · حروف ج تا خ، احساس اور کہانی", "desc": "Questions written by IQRA on the topics of the book, printed p. 37-55. Pending review by a teacher.", "published": true, "builtin": true, "updated": 203, "qs": [{"q": "جہاز کس حرف سے شروع ہوتا ہے؟||Which letter does jahaz (plane) start with?", "o": ["ج", "چ", "خ"], "c": 0}, {"q": "چاند کس حرف سے شروع ہوتا ہے؟||Which letter does chaand (moon) start with?", "o": ["ج", "چ", "ح"], "c": 1}, {"q": "خرگوش کس حرف سے شروع ہوتا ہے؟||Which letter does khargosh (rabbit) start with?", "o": ["ح", "ج", "خ"], "c": 2}, {"q": "خوش کا الٹ کیا ہے؟||What is the opposite of happy (khush)?", "o": ["اداس · Sad", "مسکراتا · Smiling", "اچھا · Good"], "c": 0}, {"q": "'کتاب' کی جمع کون سی ہے؟||What is the plural of kitaab (book)?", "o": ["کتاب · Book", "کتابیں · Books", "کتابا"], "c": 1}]}}, {"id": "n-kg-u5", "d": {"id": "n-kg-u5", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 5: Letters د to ژ and story · حروف د تا ژ اور کہانی", "desc": "Our own revision notes made from the book, printed p. 56-79. Pending review by a teacher.", "published": true, "builtin": true, "updated": 104, "src": {"kind": "link", "url": "/notes/kg-urdu-unit5.pdf"}}}, {"id": "t-kg-u5", "d": {"id": "t-kg-u5", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 5: Letters د to ژ and story · حروف د تا ژ اور کہانی", "desc": "Questions written by IQRA on the topics of the book, printed p. 56-79. Pending review by a teacher.", "published": true, "builtin": true, "updated": 204, "qs": [{"q": "درخت کس حرف سے شروع ہوتا ہے؟||Which letter does darakht (tree) start with?", "o": ["د", "ڈ", "ر"], "c": 0}, {"q": "ڈرم کس حرف سے شروع ہوتا ہے؟||Which letter does drum start with?", "o": ["د", "ڈ", "ذ"], "c": 1}, {"q": "ریل کس حرف سے شروع ہوتی ہے؟||Which letter does rail (train) start with?", "o": ["ز", "د", "ر"], "c": 2}, {"q": "زرافہ کس حرف سے شروع ہوتا ہے؟||Which letter does zarafa (giraffe) start with?", "o": ["ز", "ر", "ژ"], "c": 0}, {"q": "ریچھ کس حرف سے شروع ہوتا ہے؟||Which letter does reech (bear) start with?", "o": ["ر", "ز", "ڑ"], "c": 0}]}}, {"id": "n-kg-u6", "d": {"id": "n-kg-u6", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 6: Letters س to ظ and my family · حروف س تا ظ اور میرا خاندان", "desc": "Our own revision notes made from the book, printed p. 80-100. Pending review by a teacher.", "published": true, "builtin": true, "updated": 105, "src": {"kind": "link", "url": "/notes/kg-urdu-unit6.pdf"}}}, {"id": "t-kg-u6", "d": {"id": "t-kg-u6", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 6: Letters س to ظ and my family · حروف س تا ظ اور میرا خاندان", "desc": "Questions written by IQRA on the topics of the book, printed p. 80-100. Pending review by a teacher.", "published": true, "builtin": true, "updated": 205, "qs": [{"q": "سورج کس حرف سے شروع ہوتا ہے؟||Which letter does sooraj (sun) start with?", "o": ["س", "ش", "ص"], "c": 0}, {"q": "شیر کس حرف سے شروع ہوتا ہے؟||Which letter does sher (lion) start with?", "o": ["س", "ش", "ص"], "c": 1}, {"q": "صابن کس حرف سے شروع ہوتا ہے؟||Which letter does saaban (soap) start with?", "o": ["س", "ش", "ص"], "c": 2}, {"q": "طوطا کس حرف سے شروع ہوتا ہے؟||Which letter does tota (parrot) start with?", "o": ["ط", "ظ", "ت"], "c": 0}, {"q": "ابو کی امی کو کیا کہتے ہیں؟||What do we call father's mother?", "o": ["نانی · Grandmother (maternal)", "دادی · Grandmother (paternal)", "خالہ · Aunt"], "c": 1}]}}, {"id": "n-kg-u7", "d": {"id": "n-kg-u7", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 7: Letters ع to ل and story · حروف ع تا ل اور کہانی", "desc": "Our own revision notes made from the book, printed p. 101-124. Pending review by a teacher.", "published": true, "builtin": true, "updated": 106, "src": {"kind": "link", "url": "/notes/kg-urdu-unit7.pdf"}}}, {"id": "t-kg-u7", "d": {"id": "t-kg-u7", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 7: Letters ع to ل and story · حروف ع تا ل اور کہانی", "desc": "Questions written by IQRA on the topics of the book, printed p. 101-124. Pending review by a teacher.", "published": true, "builtin": true, "updated": 206, "qs": [{"q": "عینک کس حرف سے شروع ہوتی ہے؟||Which letter does ainak (glasses) start with?", "o": ["ع", "غ", "ف"], "c": 0}, {"q": "غبارہ کس حرف سے شروع ہوتا ہے؟||Which letter does ghubara (balloon) start with?", "o": ["ع", "غ", "ف"], "c": 1}, {"q": "قلم کس حرف سے شروع ہوتا ہے؟||Which letter does qalam (pen) start with?", "o": ["ک", "ف", "ق"], "c": 2}, {"q": "کار کس حرف سے شروع ہوتی ہے؟||Which letter does car (kaar) start with?", "o": ["ک", "گ", "ق"], "c": 0}, {"q": "گائے کس حرف سے شروع ہوتی ہے؟||Which letter does gaaye (cow) start with?", "o": ["ک", "گ", "ل"], "c": 1}]}}, {"id": "n-kg-u8", "d": {"id": "n-kg-u8", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 8: Letters م to ے · حروف م تا ے", "desc": "Our own revision notes made from the book, printed p. 125-146. Pending review by a teacher.", "published": true, "builtin": true, "updated": 107, "src": {"kind": "link", "url": "/notes/kg-urdu-unit8.pdf"}}}, {"id": "t-kg-u8", "d": {"id": "t-kg-u8", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 8: Letters م to ے · حروف م تا ے", "desc": "Questions written by IQRA on the topics of the book, printed p. 125-146. Pending review by a teacher.", "published": true, "builtin": true, "updated": 207, "qs": [{"q": "مور کس حرف سے شروع ہوتا ہے؟||Which letter does mor (peacock) start with?", "o": ["م", "ن", "و"], "c": 0}, {"q": "ناک کس حرف سے شروع ہوتی ہے؟||Which letter does naak (nose) start with?", "o": ["م", "ن", "و"], "c": 1}, {"q": "ویگن کس حرف سے شروع ہوتی ہے؟||Which letter does wagon (van) start with?", "o": ["ہ", "ن", "و"], "c": 2}, {"q": "ہاتھی کس حرف سے شروع ہوتا ہے؟||Which letter does haathi (elephant) start with?", "o": ["ہ", "و", "م"], "c": 0}, {"q": "اردو کا آخری حرف کون سا ہے؟||Which is the last letter of the Urdu alphabet?", "o": ["ا", "ے", "ب"], "c": 1}]}}, {"id": "n-kg-u9", "d": {"id": "n-kg-u9", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Unit 9: Writing, word building and punctuation · لکھائی، الفاظ سازی اور رموزِ اوقاف", "desc": "Our own revision notes made from the book, printed p. 147-157. Pending review by a teacher.", "published": true, "builtin": true, "updated": 108, "src": {"kind": "link", "url": "/notes/kg-urdu-unit9.pdf"}}}, {"id": "t-kg-u9", "d": {"id": "t-kg-u9", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Primer · Test 9: Writing, word building and punctuation · لکھائی، الفاظ سازی اور رموزِ اوقاف", "desc": "Questions written by IQRA on the topics of the book, printed p. 147-157. Pending review by a teacher.", "published": true, "builtin": true, "updated": 208, "qs": [{"q": "جملہ ختم ہونے پر کون سی علامت لگاتے ہیں؟||Which mark do we put at the end of a sentence?", "o": ["۔ (فل سٹاپ · Full stop)", "؟ (سوالیہ نشان · Question mark)", "، (کاما · Comma)"], "c": 0}, {"q": "سوال کے آخر میں کون سی علامت لگاتے ہیں؟||Which mark do we put at the end of a question?", "o": ["۔ (فل سٹاپ · Full stop)", "؟ (سوالیہ نشان · Question mark)", "، (کاما · Comma)"], "c": 1}, {"q": "ق + ل + م = ؟||ق + ل + م = ?", "o": ["لقم", "مقل", "قلم · Pen"], "c": 2}, {"q": "ک + ا + ر = ؟||ک + ا + ر = ?", "o": ["کار · Car", "رکا", "اکر"], "c": 0}, {"q": "ب کے بعد کون سا حرف آتا ہے؟||Which letter comes after ب?", "o": ["ت", "پ", "ا"], "c": 1}]}}, {"id": "n-kg-q1", "d": {"id": "n-kg-q1", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Unit 1: Urdu letters with pictures · حروفِ تہجی تصاویر کے ساتھ", "desc": "Our own revision notes made from the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 109, "src": {"kind": "link", "url": "/notes/kg-qaida-unit1.pdf"}}}, {"id": "t-kg-q1", "d": {"id": "t-kg-q1", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Test 1: Urdu letters with pictures · حروفِ تہجی تصاویر کے ساتھ", "desc": "Questions written by IQRA on the topics of the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 209, "qs": [{"q": "ا سے کون سا پھل شروع ہوتا ہے؟||Which fruit starts with ا?", "o": ["انگور · Grapes", "تربوز · Watermelon", "خربوزہ · Melon"], "c": 0}, {"q": "آ سے کون سی چیز شروع ہوتی ہے؟||Which thing starts with آ?", "o": ["انار · Pomegranate", "آم · Mango", "بلی · Cat"], "c": 1}, {"q": "پ سے کون سی چیز شروع ہوتی ہے؟||Which thing starts with پ?", "o": ["تالا · Lock", "ٹوپی · Cap", "پیالہ · Bowl"], "c": 2}, {"q": "چ سے کون سی چیز شروع ہوتی ہے؟||Which thing starts with چ?", "o": ["چاند · Moon", "جہاز · Plane", "جگ · Jug"], "c": 0}, {"q": "ر سے کون سی چیز شروع ہوتی ہے؟||Which thing starts with ر?", "o": ["زرافہ · Giraffe", "ریل · Train", "درخت · Tree"], "c": 1}]}}, {"id": "n-kg-q2", "d": {"id": "n-kg-q2", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Unit 2: Joining letters and reading words · حروف ملانا اور الفاظ پڑھنا", "desc": "Our own revision notes made from the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 110, "src": {"kind": "link", "url": "/notes/kg-qaida-unit2.pdf"}}}, {"id": "t-kg-q2", "d": {"id": "t-kg-q2", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Test 2: Joining letters and reading words · حروف ملانا اور الفاظ پڑھنا", "desc": "Questions written by IQRA on the topics of the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 210, "qs": [{"q": "ب + ا + پ = ؟||ب + ا + پ = ?", "o": ["باپ · Father", "پاب", "بپا"], "c": 0}, {"q": "ت + ا + ج = ؟||ت + ا + ج = ?", "o": ["جات", "تاج · Crown", "اتج"], "c": 1}, {"q": "د + ا + د + ا = ؟||د + ا + د + ا = ?", "o": ["ادادا", "داد", "دادا · Grandfather"], "c": 2}, {"q": "ب + ا + غ = ؟||ب + ا + غ = ?", "o": ["باغ · Garden", "غاب", "بغا"], "c": 0}, {"q": "چ + ا + چ + ا = ؟||چ + ا + چ + ا = ?", "o": ["چاچ", "چاچا · Uncle", "اچاچ"], "c": 1}]}}, {"id": "n-kg-q3", "d": {"id": "n-kg-q3", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Unit 3: Short vowel marks and sentences · اعراب اور جملے", "desc": "Our own revision notes made from the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 111, "src": {"kind": "link", "url": "/notes/kg-qaida-unit3.pdf"}}}, {"id": "t-kg-q3", "d": {"id": "t-kg-q3", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Test 3: Short vowel marks and sentences · اعراب اور جملے", "desc": "Questions written by IQRA on the topics of the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 211, "qs": [{"q": "کون سی علامت زبر ہے؟||Which mark is zabar?", "o": ["ـَ", "ـِ", "ـُ"], "c": 0}, {"q": "کون سی علامت زیر ہے؟||Which mark is zer?", "o": ["ـَ", "ـِ", "ـُ"], "c": 1}, {"q": "کون سی علامت پیش ہے؟||Which mark is pesh?", "o": ["ـَ", "ـِ", "ـُ"], "c": 2}, {"q": "'آپ کا نام کیا ہے؟' کیا ہے؟||'Aap ka naam kya hai?' is a ___", "o": ["سوال · Question", "جواب · Answer", "دعا · Prayer"], "c": 0}, {"q": "اعراب کی تعداد کتنی ہے؟ زبر، زیر، پیش۔||How many short vowel marks are there? zabar, zer, pesh.", "o": ["2", "3", "5"], "c": 1}]}}, {"id": "n-kg-q4", "d": {"id": "n-kg-q4", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Unit 4: Aspirated sounds · بھاری آوازیں", "desc": "Our own revision notes made from the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 112, "src": {"kind": "link", "url": "/notes/kg-qaida-unit4.pdf"}}}, {"id": "t-kg-q4", "d": {"id": "t-kg-q4", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Test 4: Aspirated sounds · بھاری آوازیں", "desc": "Questions written by IQRA on the topics of the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 212, "qs": [{"q": "کون سا بھاری آواز والا حرف ہے؟||Which is an aspirated (heavy) letter?", "o": ["بھ", "ب", "پ"], "c": 0}, {"q": "کون سا بھاری آواز والا حرف ہے؟||Which is an aspirated (heavy) letter?", "o": ["ک", "کھ", "گ"], "c": 1}, {"q": "کون سا بھاری آواز والا حرف ہے؟||Which is an aspirated (heavy) letter?", "o": ["ک", "گ", "گھ"], "c": 2}, {"q": "کون سا بھاری آواز والا حرف ہے؟||Which is an aspirated (heavy) letter?", "o": ["پھ", "پ", "ت"], "c": 0}, {"q": "کون سا بھاری آواز والا حرف ہے؟||Which is an aspirated (heavy) letter?", "o": ["چ", "چھ", "ج"], "c": 1}]}}, {"id": "n-kg-q5", "d": {"id": "n-kg-q5", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Unit 5: Jazm, noon ghunna and shadd · جزم، نون غنہ اور شد", "desc": "Our own revision notes made from the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 113, "src": {"kind": "link", "url": "/notes/kg-qaida-unit5.pdf"}}}, {"id": "t-kg-q5", "d": {"id": "t-kg-q5", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Test 5: Jazm, noon ghunna and shadd · جزم، نون غنہ اور شد", "desc": "Questions written by IQRA on the topics of the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 213, "qs": [{"q": "ں کو کیا کہتے ہیں؟||What is ں called?", "o": ["نون غنہ · Noon ghunna", "جزم · Jazm", "شد · Shadd"], "c": 0}, {"q": "ـْ کو کیا کہتے ہیں؟||What is ـْ called?", "o": ["شد · Shadd", "جزم · Jazm", "زبر · Zabar"], "c": 1}, {"q": "ـّ کو کیا کہتے ہیں؟||What is ـّ called?", "o": ["جزم · Jazm", "پیش · Pesh", "شد · Shadd"], "c": 2}, {"q": "کون سا لفظ نون غنہ والا ہے؟||Which word has noon ghunna?", "o": ["ماں · Mother", "مال · Wealth", "ماہ · Month"], "c": 0}, {"q": "شد والے حرف کو کتنی بار پڑھتے ہیں؟||How many times do we say a letter with shadd?", "o": ["ایک بار · Once", "دو بار · Twice", "تین بار · Three times"], "c": 1}]}}, {"id": "n-kg-q6", "d": {"id": "n-kg-q6", "type": "note", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Unit 6: English alphabet and counting · انگریزی حروفِ تہجی اور گنتی", "desc": "Our own revision notes made from the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 114, "src": {"kind": "link", "url": "/notes/kg-qaida-unit6.pdf"}}}, {"id": "t-kg-q6", "d": {"id": "t-kg-q6", "type": "test", "grade": "KG", "subject": "urdu", "title": "Urdu Qaida · Test 6: English alphabet and counting · انگریزی حروفِ تہجی اور گنتی", "desc": "Questions written by IQRA on the topics of the book, see the book. Pending review by a teacher.", "published": true, "builtin": true, "updated": 214, "qs": [{"q": "One کا اردو لفظ کیا ہے؟||What is 'One' in Urdu?", "o": ["ایک", "دو", "تین"], "c": 0}, {"q": "Ten کا اردو لفظ کیا ہے؟||What is 'Ten' in Urdu?", "o": ["نو", "دس", "آٹھ"], "c": 1}, {"q": "انگریزی کا پہلا حرف کون سا ہے؟||Which is the first English letter?", "o": ["B b", "Z z", "A a"], "c": 2}, {"q": "Five کا اردو لفظ کیا ہے؟||What is 'Five' in Urdu?", "o": ["پانچ", "چار", "چھ"], "c": 0}, {"q": "انگریزی کا آخری حرف کون سا ہے؟||Which is the last English letter?", "o": ["Z z", "A a", "M m"], "c": 0}]}}, {"id": "n-kg-e1", "d": {"id": "n-kg-e1", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 1: Greetings and about me · سلام دعا اور میرے بارے میں", "desc": "Our own revision notes made from the book, printed p. 1-11. Pending review by a teacher.", "published": true, "builtin": true, "updated": 115, "src": {"kind": "link", "url": "/notes/kg-english-unit1.pdf"}}}, {"id": "t-kg-e1", "d": {"id": "t-kg-e1", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 1: Greetings and about me · سلام دعا اور میرے بارے میں", "desc": "Questions written by IQRA on the topics of the book, printed p. 1-11. Pending review by a teacher.", "published": true, "builtin": true, "updated": 215, "qs": [{"q": "heater گرم ہے یا ٹھنڈا؟||Is a heater hot or cold?", "o": ["hot · گرم", "cold · ٹھنڈا"], "c": 0}, {"q": "ice-cream گرم ہے یا ٹھنڈی؟||Is ice-cream hot or cold?", "o": ["hot · گرم", "cold · ٹھنڈی"], "c": 1}, {"q": "ice-cube گرم ہے یا ٹھنڈا؟||Is an ice-cube hot or cold?", "o": ["cold · ٹھنڈا", "hot · گرم"], "c": 0}, {"q": "کون سا موسم گرم ہوتا ہے؟||Which season is hot?", "o": ["winter · سردی", "summer · گرمی", "autumn · خزاں"], "c": 1}, {"q": "کوئی مدد کرے تو کیا کہیں گے؟||Someone helps you. What do you say?", "o": ["excuse me · معاف کیجیے", "good night · شب بخیر", "thank you · شکریہ"], "c": 2}]}}, {"id": "n-kg-e2", "d": {"id": "n-kg-e2", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 2: Letters a to f · حروف a تا f", "desc": "Our own revision notes made from the book, printed p. 12-34. Pending review by a teacher.", "published": true, "builtin": true, "updated": 116, "src": {"kind": "link", "url": "/notes/kg-english-unit2.pdf"}}}, {"id": "t-kg-e2", "d": {"id": "t-kg-e2", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 2: Letters a to f · حروف a تا f", "desc": "Questions written by IQRA on the topics of the book, printed p. 12-34. Pending review by a teacher.", "published": true, "builtin": true, "updated": 216, "qs": [{"q": "apple کس حرف سے شروع ہوتا ہے؟||Which letter does 'apple' start with?", "o": ["a", "b", "c"], "c": 0}, {"q": "ball کس حرف سے شروع ہوتا ہے؟||Which letter does 'ball' start with?", "o": ["d", "b", "a"], "c": 1}, {"q": "car کس حرف سے شروع ہوتا ہے؟||Which letter does 'car' start with?", "o": ["k", "a", "c"], "c": 2}, {"q": "بڑے D کا چھوٹا حرف کون سا ہے؟||Which is the small letter for D?", "o": ["d", "b", "p"], "c": 0}, {"q": "e کے بعد کون سا حرف آتا ہے؟||Which letter comes after e?", "o": ["d", "f", "g"], "c": 1}]}}, {"id": "n-kg-e3", "d": {"id": "n-kg-e3", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 3: Letters g to l · حروف g تا l", "desc": "Our own revision notes made from the book, printed p. 35-56. Pending review by a teacher.", "published": true, "builtin": true, "updated": 117, "src": {"kind": "link", "url": "/notes/kg-english-unit3.pdf"}}}, {"id": "t-kg-e3", "d": {"id": "t-kg-e3", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 3: Letters g to l · حروف g تا l", "desc": "Questions written by IQRA on the topics of the book, printed p. 35-56. Pending review by a teacher.", "published": true, "builtin": true, "updated": 217, "qs": [{"q": "kitten کس حرف سے شروع ہوتا ہے؟||Which letter does 'kitten' start with?", "o": ["k", "c", "l"], "c": 0}, {"q": "leaf کس حرف سے شروع ہوتا ہے؟||Which letter does 'leaf' start with?", "o": ["k", "l", "i"], "c": 1}, {"q": "g کے بعد کون سا حرف آتا ہے؟||Which letter comes after g?", "o": ["f", "i", "h"], "c": 2}, {"q": "l سے پہلے کون سا حرف آتا ہے؟||Which letter comes before l?", "o": ["k", "m", "j"], "c": 0}, {"q": "بڑے I کا چھوٹا حرف کون سا ہے؟||Which is the small letter for I?", "o": ["l", "i", "j"], "c": 1}]}}, {"id": "n-kg-e4", "d": {"id": "n-kg-e4", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 4: Letters m to r · حروف m تا r", "desc": "Our own revision notes made from the book, printed p. 57-79. Pending review by a teacher.", "published": true, "builtin": true, "updated": 118, "src": {"kind": "link", "url": "/notes/kg-english-unit4.pdf"}}}, {"id": "t-kg-e4", "d": {"id": "t-kg-e4", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 4: Letters m to r · حروف m تا r", "desc": "Questions written by IQRA on the topics of the book, printed p. 57-79. Pending review by a teacher.", "published": true, "builtin": true, "updated": 218, "qs": [{"q": "owl کس حرف سے شروع ہوتا ہے؟||Which letter does 'owl' start with?", "o": ["o", "a", "u"], "c": 0}, {"q": "parrot کس حرف سے شروع ہوتا ہے؟||Which letter does 'parrot' start with?", "o": ["b", "p", "q"], "c": 1}, {"q": "m کے بعد کون سا حرف آتا ہے؟||Which letter comes after m?", "o": ["l", "o", "n"], "c": 2}, {"q": "r سے پہلے کون سا حرف آتا ہے؟||Which letter comes before r?", "o": ["q", "s", "p"], "c": 0}, {"q": "بڑے Q کا چھوٹا حرف کون سا ہے؟||Which is the small letter for Q?", "o": ["g", "q", "p"], "c": 1}]}}, {"id": "n-kg-e5", "d": {"id": "n-kg-e5", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 5: Letters s to z and practice · حروف s تا z اور مشق", "desc": "Our own revision notes made from the book, printed p. 80-105. Pending review by a teacher.", "published": true, "builtin": true, "updated": 119, "src": {"kind": "link", "url": "/notes/kg-english-unit5.pdf"}}}, {"id": "t-kg-e5", "d": {"id": "t-kg-e5", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 5: Letters s to z and practice · حروف s تا z اور مشق", "desc": "Questions written by IQRA on the topics of the book, printed p. 80-105. Pending review by a teacher.", "published": true, "builtin": true, "updated": 219, "qs": [{"q": "s کے بعد کون سا حرف آتا ہے؟||Which letter comes after s?", "o": ["t", "r", "u"], "c": 0}, {"q": "z سے پہلے کون سا حرف آتا ہے؟||Which letter comes before z?", "o": ["x", "y", "a"], "c": 1}, {"q": "انگریزی میں کل کتنے حروف ہیں؟||How many letters are in the English alphabet?", "o": ["24", "30", "26"], "c": 2}, {"q": "آخری حرف کون سا ہے؟||Which is the last letter?", "o": ["z", "a", "y"], "c": 0}, {"q": "بڑے W کا چھوٹا حرف کون سا ہے؟||Which is the small letter for W?", "o": ["w", "v", "m"], "c": 0}]}}, {"id": "n-kg-e6", "d": {"id": "n-kg-e6", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 6: Vowels, consonants and word families · حروفِ علت، حروفِ صحیح اور الفاظ کے خاندان", "desc": "Our own revision notes made from the book, printed p. 113-121. Pending review by a teacher.", "published": true, "builtin": true, "updated": 120, "src": {"kind": "link", "url": "/notes/kg-english-unit6.pdf"}}}, {"id": "t-kg-e6", "d": {"id": "t-kg-e6", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 6: Vowels, consonants and word families · حروفِ علت، حروفِ صحیح اور الفاظ کے خاندان", "desc": "Questions written by IQRA on the topics of the book, printed p. 113-121. Pending review by a teacher.", "published": true, "builtin": true, "updated": 220, "qs": [{"q": "کون سا vowel ہے؟||Which one is a vowel?", "o": ["a", "b", "c"], "c": 0}, {"q": "کون سا consonant ہے؟||Which one is a consonant?", "o": ["a", "b", "e"], "c": 1}, {"q": "vowels کتنے ہوتے ہیں؟||How many vowels are there?", "o": ["3", "7", "5"], "c": 2}, {"q": "cat اور hat میں کون سا ملا ہوا حصہ ہے؟||cat and hat both end with", "o": ["at", "ap", "an"], "c": 0}, {"q": "کون سا حرف نیچے جڑ تک جاتا ہے (root letter)؟||Which letter goes below the line (root letter)?", "o": ["a", "g", "b"], "c": 1}]}}, {"id": "n-kg-e7", "d": {"id": "n-kg-e7", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 7: Phrases, sentences and sight words · فقرے، جملے اور پہچانے جانے والے الفاظ", "desc": "Our own revision notes made from the book, printed p. 122-128. Pending review by a teacher.", "published": true, "builtin": true, "updated": 121, "src": {"kind": "link", "url": "/notes/kg-english-unit7.pdf"}}}, {"id": "t-kg-e7", "d": {"id": "t-kg-e7", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 7: Phrases, sentences and sight words · فقرے، جملے اور پہچانے جانے والے الفاظ", "desc": "Questions written by IQRA on the topics of the book, printed p. 122-128. Pending review by a teacher.", "published": true, "builtin": true, "updated": 221, "qs": [{"q": "___ apple: a یا an؟||a or an? ___ apple", "o": ["an", "a"], "c": 0}, {"q": "___ ball: a یا an؟||a or an? ___ ball", "o": ["an", "a"], "c": 1}, {"q": "___ owl: a یا an؟||a or an? ___ owl", "o": ["an", "a"], "c": 0}, {"q": "These are ___۔ (apples)||These are ___ .", "o": ["apple", "an apple", "apples"], "c": 2}, {"q": "کون سا جملہ صحیح ہے؟||Which sentence is correct?", "o": ["This is an cat.", "This is a cat.", "Cat this is a."], "c": 1}]}}, {"id": "n-kg-e8", "d": {"id": "n-kg-e8", "type": "note", "grade": "KG", "subject": "english", "title": "English Primer · Unit 8: Digraphs, action words and creative writing · ملے ہوئے حروف، حرکت کے الفاظ اور تخلیقی لکھائی", "desc": "Our own revision notes made from the book, printed p. 129-142. Pending review by a teacher.", "published": true, "builtin": true, "updated": 122, "src": {"kind": "link", "url": "/notes/kg-english-unit8.pdf"}}}, {"id": "t-kg-e8", "d": {"id": "t-kg-e8", "type": "test", "grade": "KG", "subject": "english", "title": "English Primer · Test 8: Digraphs, action words and creative writing · ملے ہوئے حروف، حرکت کے الفاظ اور تخلیقی لکھائی", "desc": "Questions written by IQRA on the topics of the book, printed p. 129-142. Pending review by a teacher.", "published": true, "builtin": true, "updated": 222, "qs": [{"q": "ship میں شروع کی آواز کون سے دو حروف سے بنتی ہے؟||Which two letters make the first sound in 'ship'?", "o": ["sh", "sp", "ch"], "c": 0}, {"q": "chair میں شروع کی آواز کون سے دو حروف سے بنتی ہے؟||Which two letters make the first sound in 'chair'?", "o": ["sh", "ch", "th"], "c": 1}, {"q": "کون سا word دوڑنے کا action ہے؟||Which word is the action for running?", "o": ["sit", "sleep", "run"], "c": 2}, {"q": "کون سا word اچھلنے کا action ہے؟||Which word is the action for jumping?", "o": ["jump", "clap", "eat"], "c": 0}, {"q": "one summer ___ ۔ جملہ کیسے شروع ہوتا ہے؟||Creative writing: 'One summer, ...' starts with a ___ letter.", "o": ["small · چھوٹے", "capital · بڑے"], "c": 1}]}}, {"id": "b-c1-math", "d": {"id": "b-c1-math", "type": "book", "grade": "1", "subject": "math", "title": "Mathematics Grade 1 · ریاضی جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (134 pages).", "published": true, "builtin": true, "updated": 223, "src": {"kind": "link", "url": "/books/pctb-1-math.pdf"}}}, {"id": "n-c1-math-u1", "d": {"id": "n-c1-math-u1", "type": "note", "grade": "1", "subject": "math", "title": "Unit 1: Whole Numbers · پورے اعداد", "desc": "Our own revision notes made from the book, printed pp. 1-39. Pending review by a teacher.", "published": true, "builtin": true, "updated": 224, "src": {"kind": "link", "url": "/notes/c1-math-unit1.pdf"}}}, {"id": "t-c1-math-u1", "d": {"id": "t-c1-math-u1", "type": "test", "grade": "1", "subject": "math", "title": "Test 1: Whole Numbers · پورے اعداد", "desc": "Questions written by IQRA on the topics of the book, printed pp. 1-39. Pending review by a teacher.", "published": true, "builtin": true, "updated": 225, "qs": [{"q": "نمبر 5 کے بعد کون سا نمبر آتا ہے؟||Which number comes after 5?", "o": ["6", "4", "7"], "c": 0}, {"q": "درخت پر کوئی سیب نہ ہو تو ہم کتنے سیب لکھتے ہیں؟||How many apples do we write if the tree has no apple?", "o": ["0 · صفر zero", "1 · ایک one", "10 · دس ten"], "c": 0}, {"q": "9 سے الٹی گنتی میں 9 کے بعد کون سا نمبر آتا ہے؟||Counting backward from 9, which number comes next?", "o": ["8", "10", "7"], "c": 0}, {"q": "23 میں کتنی دہائیاں اور کتنی اکائیاں ہیں؟||How many tens and ones are in 23?", "o": ["2 tens, 3 ones · 2 دہائیاں، 3 اکائیاں", "3 tens, 2 ones · 3 دہائیاں، 2 اکائیاں", "5 tens, 0 ones · 5 دہائیاں، 0 اکائیاں"], "c": 0}, {"q": "ان میں سب سے بڑا نمبر کون سا ہے؟||Which is the greatest number?", "o": ["38", "47", "29"], "c": 1}]}}, {"id": "n-c1-math-u2", "d": {"id": "n-c1-math-u2", "type": "note", "grade": "1", "subject": "math", "title": "Unit 2: Number Operations (Addition and Subtraction) · جمع اور تفریق", "desc": "Our own revision notes made from the book, printed pp. 40-70. Pending review by a teacher.", "published": true, "builtin": true, "updated": 226, "src": {"kind": "link", "url": "/notes/c1-math-unit2.pdf"}}}, {"id": "t-c1-math-u2", "d": {"id": "t-c1-math-u2", "type": "test", "grade": "1", "subject": "math", "title": "Test 2: Number Operations (Addition and Subtraction) · جمع اور تفریق", "desc": "Questions written by IQRA on the topics of the book, printed pp. 40-70. Pending review by a teacher.", "published": true, "builtin": true, "updated": 227, "qs": [{"q": "3 + 4 کتنے ہوتے ہیں؟||What is 3 + 4?", "o": ["7", "6", "8"], "c": 0}, {"q": "9 − 2 کتنے ہوتے ہیں؟||What is 9 − 2?", "o": ["7", "11", "6"], "c": 0}, {"q": "عطیہ کے پاس 12 کہانی کی کتابیں تھیں اور اس کی امی نے 3 اور دیں۔ اب اس کے پاس کتنی ہیں؟||Attiya had 12 storybooks and her mother gave her 3 more. How many does she have now?", "o": ["15", "9", "14"], "c": 0}, {"q": "4 + 0 کتنے ہوتے ہیں؟||What is 4 + 0?", "o": ["4", "0", "5"], "c": 0}, {"q": "خالی جگہ میں کون سا نمبر آئے گا؟ 8 − ☐ = 5||Which number goes in the blank? 8 − ☐ = 5", "o": ["3", "13", "5"], "c": 0}]}}, {"id": "n-c1-math-u3", "d": {"id": "n-c1-math-u3", "type": "note", "grade": "1", "subject": "math", "title": "Unit 3: Measurement (Length and Mass) · پیمائش (لمبائی اور وزن)", "desc": "Our own revision notes made from the book, printed pp. 71-80. Pending review by a teacher.", "published": true, "builtin": true, "updated": 228, "src": {"kind": "link", "url": "/notes/c1-math-unit3.pdf"}}}, {"id": "t-c1-math-u3", "d": {"id": "t-c1-math-u3", "type": "test", "grade": "1", "subject": "math", "title": "Test 3: Measurement (Length and Mass) · پیمائش (لمبائی اور وزن)", "desc": "Questions written by IQRA on the topics of the book, printed pp. 71-80. Pending review by a teacher.", "published": true, "builtin": true, "updated": 229, "qs": [{"q": "تین پنسلوں میں سے جو سب سے زیادہ لمبی ہو اسے کیا کہتے ہیں؟||What do we call the longest of three pencils?", "o": ["longest · سب سے لمبی", "shortest · سب سے چھوٹی", "lighter · زیادہ ہلکی"], "c": 0}, {"q": "کون سا جانور زیادہ بھاری ہے؟||Which animal is heavier?", "o": ["ہاتھی · Elephant", "چوہا · Mouse", "چڑیا · Sparrow"], "c": 0}, {"q": "زرافے کے بارے میں کون سا لفظ ٹھیک ہے؟||Which word fits a giraffe?", "o": ["tall · لمبا قد", "short · چھوٹا قد", "light · ہلکا"], "c": 0}, {"q": "'Short, shorter, shortest' میں سب سے چھوٹی چیز کے لیے کون سا لفظ ہے؟||In 'short, shorter, shortest', which word is for the smallest thing?", "o": ["shortest", "short", "shorter"], "c": 0}, {"q": "'بھاری' کی الٹ کیا ہے؟||What is the opposite of heavy?", "o": ["ہلکا · light", "لمبا · long", "اونچا · high"], "c": 0}]}}, {"id": "n-c1-math-u4", "d": {"id": "n-c1-math-u4", "type": "note", "grade": "1", "subject": "math", "title": "Unit 4: Money · پیسے", "desc": "Our own revision notes made from the book, printed pp. 81-93. Pending review by a teacher.", "published": true, "builtin": true, "updated": 230, "src": {"kind": "link", "url": "/notes/c1-math-unit4.pdf"}}}, {"id": "t-c1-math-u4", "d": {"id": "t-c1-math-u4", "type": "test", "grade": "1", "subject": "math", "title": "Test 4: Money · پیسے", "desc": "Questions written by IQRA on the topics of the book, printed pp. 81-93. Pending review by a teacher.", "published": true, "builtin": true, "updated": 231, "qs": [{"q": "ان میں سے کون سا پاکستانی سکہ ہے؟||Which of these is a Pakistani coin?", "o": ["5 روپے · Rs 5", "50 روپے کا نوٹ · Rs 50 note", "100 روپے کا نوٹ · Rs 100 note"], "c": 0}, {"q": "5 روپے اور 5 روپے ملا کر کتنے روپے بنتے ہیں؟||How many rupees do Rs 5 and Rs 5 make?", "o": ["10", "5", "15"], "c": 0}, {"q": "علی کے پاس 50 روپے تھے۔ اس نے 30 روپے کا کھلونا خریدا۔ کتنے روپے بچے؟||Ali had Rs 50 and bought a toy for Rs 30. How much is left?", "o": ["20", "80", "30"], "c": 0}, {"q": "ہر سکے اور نوٹ کے کتنے رخ ہوتے ہیں؟||How many sides does each coin and note have?", "o": ["2", "1", "3"], "c": 0}, {"q": "50 روپے اور 50 روپے ملا کر کتنے بنتے ہیں؟||How much do Rs 50 and Rs 50 make together?", "o": ["100", "50", "150"], "c": 0}]}}, {"id": "n-c1-math-u5", "d": {"id": "n-c1-math-u5", "type": "note", "grade": "1", "subject": "math", "title": "Unit 5: Time · وقت", "desc": "Our own revision notes made from the book, printed pp. 94-106. Pending review by a teacher.", "published": true, "builtin": true, "updated": 232, "src": {"kind": "link", "url": "/notes/c1-math-unit5.pdf"}}}, {"id": "t-c1-math-u5", "d": {"id": "t-c1-math-u5", "type": "test", "grade": "1", "subject": "math", "title": "Test 5: Time · وقت", "desc": "Questions written by IQRA on the topics of the book, printed pp. 94-106. Pending review by a teacher.", "published": true, "builtin": true, "updated": 233, "qs": [{"q": "ہفتے میں کتنے دن ہوتے ہیں؟||How many days are there in a week?", "o": ["7", "5", "12"], "c": 0}, {"q": "کتاب کے مطابق ہفتے کا پہلا دن کون سا ہے؟||According to the book, which is the first day of the week?", "o": ["پیر · Monday", "اتوار · Sunday", "جمعہ · Friday"], "c": 0}, {"q": "ایک سال میں شمسی مہینے کتنے ہوتے ہیں؟||How many solar months are there in a year?", "o": ["12", "7", "10"], "c": 0}, {"q": "پہلا اسلامی مہینہ کون سا ہے؟||Which is the first Islamic month?", "o": ["محرم · Muharram", "رمضان · Ramazan", "ذوالحجہ · Zil Hajj"], "c": 0}, {"q": "حج کس اسلامی مہینے میں ہوتا ہے؟||In which Islamic month is Hajj performed?", "o": ["ذوالحجہ · Zil Hajj", "شوال · Shawwal", "صفر · Safar"], "c": 0}]}}, {"id": "n-c1-math-u6", "d": {"id": "n-c1-math-u6", "type": "note", "grade": "1", "subject": "math", "title": "Unit 6: Geometry (Shapes and Position) · جیومیٹری (شکلیں اور مقام)", "desc": "Our own revision notes made from the book, printed pp. 107-130. Pending review by a teacher.", "published": true, "builtin": true, "updated": 234, "src": {"kind": "link", "url": "/notes/c1-math-unit6.pdf"}}}, {"id": "t-c1-math-u6", "d": {"id": "t-c1-math-u6", "type": "test", "grade": "1", "subject": "math", "title": "Test 6: Geometry (Shapes and Position) · جیومیٹری (شکلیں اور مقام)", "desc": "Questions written by IQRA on the topics of the book, printed pp. 107-130. Pending review by a teacher.", "published": true, "builtin": true, "updated": 235, "qs": [{"q": "پہیے کی شکل کیسی ہوتی ہے؟||What shape is a wheel?", "o": ["دائرہ · Circle", "مثلث · Triangle", "چوکور · Square"], "c": 0}, {"q": "انڈے کی شکل کون سی ہے؟||What shape is an egg?", "o": ["بیضوی · Oval", "چوکور · Square", "مثلث · Triangle"], "c": 0}, {"q": "مثلث کے کتنے کنارے ہوتے ہیں؟||How many sides does a triangle have?", "o": ["3", "4", "5"], "c": 0}, {"q": "کس شکل کے کونے نہیں ہوتے؟||Which shape has no corners?", "o": ["دائرہ · Circle", "چوکور · Square", "مثلث · Triangle"], "c": 0}, {"q": "جہاز بادلوں کے ____ ہے۔||The plane is ____ the clouds.", "o": ["اوپر · above", "نیچے · below", "اندر · inside"], "c": 0}]}}, {"id": "b-c1-eng", "d": {"id": "b-c1-eng", "type": "book", "grade": "1", "subject": "english", "title": "English Grade 1 · انگریزی جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (118 pages).", "published": true, "builtin": true, "updated": 236, "src": {"kind": "link", "url": "/books/pctb-1-english.pdf"}}}, {"id": "n-c1-eng-u1", "d": {"id": "n-c1-eng-u1", "type": "note", "grade": "1", "subject": "english", "title": "Unit 1: Time to Recall · وقت یاد کرنے کا", "desc": "Our own revision notes made from the book, printed pp. 1-7. Pending review by a teacher.", "published": true, "builtin": true, "updated": 237, "src": {"kind": "link", "url": "/notes/c1-eng-unit1.pdf"}}}, {"id": "t-c1-eng-u1", "d": {"id": "t-c1-eng-u1", "type": "test", "grade": "1", "subject": "english", "title": "Test 1: Time to Recall · وقت یاد کرنے کا", "desc": "Questions written by IQRA on the topics of the book, printed pp. 1-7. Pending review by a teacher.", "published": true, "builtin": true, "updated": 238, "qs": [{"q": "انگریزی میں کتنے حروف ہوتے ہیں؟||How many letters are there in the English alphabet?", "o": ["26", "24", "20"], "c": 0}, {"q": "انگریزی کس طرف سے لکھی جاتی ہے؟||From which side is English written?", "o": ["Left to right · بائیں سے دائیں", "Right to left · دائیں سے بائیں", "Top to bottom · اوپر سے نیچے"], "c": 0}, {"q": "'Apple' کس حرف سے شروع ہوتا ہے؟||With which letter does 'Apple' start?", "o": ["A", "B", "P"], "c": 0}, {"q": "'a' کا بڑا روپ کون سا ہے؟||Which is the capital form of 'a'?", "o": ["A", "B", "H"], "c": 0}, {"q": "'Cat' کی پہلی آواز کون سی ہے؟||What is the first sound of 'cat'?", "o": ["/k/", "/t/", "/s/"], "c": 0}]}}, {"id": "n-c1-eng-u2", "d": {"id": "n-c1-eng-u2", "type": "note", "grade": "1", "subject": "english", "title": "Unit 2: My Family and I · میرا خاندان اور میں", "desc": "Our own revision notes made from the book, printed pp. 8-17. Pending review by a teacher.", "published": true, "builtin": true, "updated": 239, "src": {"kind": "link", "url": "/notes/c1-eng-unit2.pdf"}}}, {"id": "t-c1-eng-u2", "d": {"id": "t-c1-eng-u2", "type": "test", "grade": "1", "subject": "english", "title": "Test 2: My Family and I · میرا خاندان اور میں", "desc": "Questions written by IQRA on the topics of the book, printed pp. 8-17. Pending review by a teacher.", "published": true, "builtin": true, "updated": 240, "qs": [{"q": "اپنا تعارف کرانے کے لیے کون سا جملہ ٹھیک ہے؟||Which sentence introduces yourself?", "o": ["My name is Sara.", "Name my is.", "Sara name."], "c": 0}, {"q": "'Mother' کا مطلب کیا ہے؟||What does 'mother' mean?", "o": ["ماں", "باپ", "بھائی"], "c": 0}, {"q": "ان میں سے تین حرفی لفظ کون سا ہے؟||Which is a three-letter word?", "o": ["cat", "apple", "school"], "c": 0}, {"q": "'Ali' کیا ہے؟||What is 'Ali'?", "o": ["Noun · اسم", "Pronoun · ضمیر", "Letter · حرف"], "c": 0}, {"q": "لڑکی کے لیے کون سا pronoun استعمال ہوتا ہے؟||Which pronoun is used for a girl?", "o": ["she", "he", "it"], "c": 0}]}}, {"id": "n-c1-eng-u3", "d": {"id": "n-c1-eng-u3", "type": "note", "grade": "1", "subject": "english", "title": "Unit 3: Cobbler, Cobbler · موچی بھائی", "desc": "Our own revision notes made from the book, printed pp. 18-26. Pending review by a teacher.", "published": true, "builtin": true, "updated": 241, "src": {"kind": "link", "url": "/notes/c1-eng-unit3.pdf"}}}, {"id": "t-c1-eng-u3", "d": {"id": "t-c1-eng-u3", "type": "test", "grade": "1", "subject": "english", "title": "Test 3: Cobbler, Cobbler · موچی بھائی", "desc": "Questions written by IQRA on the topics of the book, printed pp. 18-26. Pending review by a teacher.", "published": true, "builtin": true, "updated": 242, "qs": [{"q": "جوتے کون ٹھیک کرتا ہے؟||Who mends shoes?", "o": ["cobbler · موچی", "doctor · ڈاکٹر", "farmer · کسان"], "c": 0}, {"q": "بیمار کا علاج کون کرتا ہے؟||Who treats sick people?", "o": ["doctor · ڈاکٹر", "teacher · استاد", "driver · ڈرائیور"], "c": 0}, {"q": "کسی کی مدد کے بعد ہم کیا کہتے ہیں؟||What do we say after someone helps us?", "o": ["Thank you", "Sorry", "Good night"], "c": 0}, {"q": "'___ apple' میں کون سا article آئے گا؟||Which article goes in '___ apple'?", "o": ["an", "a", "the"], "c": 0}, {"q": "صبح ملنے پر ہم کیا کہتے ہیں؟||What do we say when we meet in the morning?", "o": ["Good morning", "Good night", "Goodbye"], "c": 0}]}}, {"id": "n-c1-eng-u4", "d": {"id": "n-c1-eng-u4", "type": "note", "grade": "1", "subject": "english", "title": "Unit 4: Let's have Fun! · آؤ مزہ کریں", "desc": "Our own revision notes made from the book, printed pp. 30-39. Pending review by a teacher.", "published": true, "builtin": true, "updated": 243, "src": {"kind": "link", "url": "/notes/c1-eng-unit4.pdf"}}}, {"id": "t-c1-eng-u4", "d": {"id": "t-c1-eng-u4", "type": "test", "grade": "1", "subject": "english", "title": "Test 4: Let's have Fun! · آؤ مزہ کریں", "desc": "Questions written by IQRA on the topics of the book, printed pp. 30-39. Pending review by a teacher.", "published": true, "builtin": true, "updated": 244, "qs": [{"q": "'Ship' کی شروع کی آواز کون سی ہے؟||Which sound does 'ship' start with?", "o": ["sh", "ch", "th"], "c": 0}, {"q": "استاد کہیں 'Sit down' تو آپ کیا کریں گے؟||The teacher says 'Sit down'. What do you do?", "o": ["بیٹھ جائیں · Sit", "کھڑے ہو جائیں · Stand", "دوڑیں · Run"], "c": 0}, {"q": "'Girl' کے لیے کون سا لفظ مؤنث ہے؟||Which word is feminine?", "o": ["sister", "brother", "father"], "c": 0}, {"q": "بڑوں کے ساتھ ہمیں کیسا برتاؤ کرنا چاہیے؟||How should we behave with elders?", "o": ["Respect · احترام", "Rude · بدتمیزی", "Ignore · نظر انداز"], "c": 0}, {"q": "'Chair' کی شروع کی آواز کون سی ہے؟||Which sound does 'chair' start with?", "o": ["ch", "sh", "th"], "c": 0}]}}, {"id": "n-c1-eng-u5", "d": {"id": "n-c1-eng-u5", "type": "note", "grade": "1", "subject": "english", "title": "Unit 5: Sharing is Caring · بانٹنا اچھی بات", "desc": "Our own revision notes made from the book, printed pp. 40-49. Pending review by a teacher.", "published": true, "builtin": true, "updated": 245, "src": {"kind": "link", "url": "/notes/c1-eng-unit5.pdf"}}}, {"id": "t-c1-eng-u5", "d": {"id": "t-c1-eng-u5", "type": "test", "grade": "1", "subject": "english", "title": "Test 5: Sharing is Caring · بانٹنا اچھی بات", "desc": "Questions written by IQRA on the topics of the book, printed pp. 40-49. Pending review by a teacher.", "published": true, "builtin": true, "updated": 246, "qs": [{"q": "اپنا ٹفن دوسرے بچے کے ساتھ بانٹنا کیسا ہے؟||Sharing your lunch with another child is:", "o": ["Good · اچھا", "Bad · برا", "Silly · بے وقوفی"], "c": 0}, {"q": "پانی مانگنے کا شائستہ طریقہ کون سا ہے؟||Which is a polite way to ask for water?", "o": ["Can I have water, please?", "Give water.", "Water now!"], "c": 0}, {"q": "ان میں proper noun کون سا ہے؟||Which is a proper noun?", "o": ["Pakistan", "country", "city"], "c": 0}, {"q": "جگہ کے بارے میں پوچھنے کا لفظ کون سا ہے؟||Which question word asks about a place?", "o": ["where", "who", "what"], "c": 0}, {"q": "'Sara' کا پہلا حرف کون سا ہونا چاہیے؟||Names start with which kind of letter?", "o": ["Capital · بڑا", "small · چھوٹا", "Any · کوئی بھی"], "c": 0}]}}, {"id": "n-c1-eng-u6", "d": {"id": "n-c1-eng-u6", "type": "note", "grade": "1", "subject": "english", "title": "Unit 6: Blessings of Allah · اللہ کی نعمتیں", "desc": "Our own revision notes made from the book, printed pp. 53-61. Pending review by a teacher.", "published": true, "builtin": true, "updated": 247, "src": {"kind": "link", "url": "/notes/c1-eng-unit6.pdf"}}}, {"id": "t-c1-eng-u6", "d": {"id": "t-c1-eng-u6", "type": "test", "grade": "1", "subject": "english", "title": "Test 6: Blessings of Allah · اللہ کی نعمتیں", "desc": "Questions written by IQRA on the topics of the book, printed pp. 53-61. Pending review by a teacher.", "published": true, "builtin": true, "updated": 248, "qs": [{"q": "ان میں صحت مند غذا کون سی ہے؟||Which is healthy food?", "o": ["Apple · سیب", "Candy · ٹافی", "Chips · چپس"], "c": 0}, {"q": "'Happy' کا مطلب کیا ہے؟||What does 'happy' mean?", "o": ["خوش", "اداس", "ناراض"], "c": 0}, {"q": "'Dog' کی آخری آواز کون سی ہے؟||What is the last sound of 'dog'?", "o": ["/g/", "/d/", "/o/"], "c": 0}, {"q": "ان میں سبزی کون سی ہے؟||Which one is a vegetable?", "o": ["Carrot · گاجر", "Mango · آم", "Banana · کیلا"], "c": 0}, {"q": "اللہ کی نعمت کون سی ہے؟||Which is a blessing of Allah?", "o": ["Water · پانی", "Plastic · پلاسٹک", "Noise · شور"], "c": 0}]}}, {"id": "n-c1-eng-u7", "d": {"id": "n-c1-eng-u7", "type": "note", "grade": "1", "subject": "english", "title": "Unit 7: Classroom Manners · کلاس کے آداب", "desc": "Our own revision notes made from the book, printed pp. 62-72. Pending review by a teacher.", "published": true, "builtin": true, "updated": 249, "src": {"kind": "link", "url": "/notes/c1-eng-unit7.pdf"}}}, {"id": "t-c1-eng-u7", "d": {"id": "t-c1-eng-u7", "type": "test", "grade": "1", "subject": "english", "title": "Test 7: Classroom Manners · کلاس کے آداب", "desc": "Questions written by IQRA on the topics of the book, printed pp. 62-72. Pending review by a teacher.", "published": true, "builtin": true, "updated": 250, "qs": [{"q": "کلاس میں اندر آنے کے لیے ہم کیا کہتے ہیں؟||What do we say to enter the class?", "o": ["May I come in?", "Move!", "Hey you!"], "c": 0}, {"q": "'Cat' کا قافیہ کون سا لفظ ہے؟||Which word rhymes with 'cat'?", "o": ["hat", "dog", "pen"], "c": 0}, {"q": "ان میں action word کون سا ہے؟||Which is an action word?", "o": ["run", "table", "red"], "c": 0}, {"q": "قطار میں ہم کیسے کھڑے ہوتے ہیں؟||How do we stand in a queue?", "o": ["One behind another · ایک کے پیچھے ایک", "Pushing · دھکا دے کر", "Anywhere · کہیں بھی"], "c": 0}, {"q": "'Pen' کا قافیہ کون سا ہے؟||Which word rhymes with 'pen'?", "o": ["ten", "bat", "sun"], "c": 0}]}}, {"id": "n-c1-eng-u8", "d": {"id": "n-c1-eng-u8", "type": "note", "grade": "1", "subject": "english", "title": "Unit 8: Nature is Beautiful · فطرت خوبصورت ہے", "desc": "Our own revision notes made from the book, printed pp. 73-81. Pending review by a teacher.", "published": true, "builtin": true, "updated": 251, "src": {"kind": "link", "url": "/notes/c1-eng-unit8.pdf"}}}, {"id": "t-c1-eng-u8", "d": {"id": "t-c1-eng-u8", "type": "test", "grade": "1", "subject": "english", "title": "Test 8: Nature is Beautiful · فطرت خوبصورت ہے", "desc": "Questions written by IQRA on the topics of the book, printed pp. 73-81. Pending review by a teacher.", "published": true, "builtin": true, "updated": 252, "qs": [{"q": "'Winter' کون سا موسم ہے؟||What season is 'winter'?", "o": ["سردی · cold season", "گرمی · hot season", "بہار · spring"], "c": 0}, {"q": "ان میں adjective کون سا ہے؟||Which is an adjective?", "o": ["tall", "jump", "Ali"], "c": 0}, {"q": "گفتگو میں ہمیں کیا کرنا چاہیے؟||What should we do in a conversation?", "o": ["Take turns · باری لیں", "Interrupt · بات کاٹیں", "Shout · چلائیں"], "c": 0}, {"q": "گرم موسم کون سا ہے؟||Which is the hot season?", "o": ["summer", "winter", "rainy"], "c": 0}, {"q": "ان میں ایک syllable کا لفظ کون سا ہے؟||Which is a one-syllable word?", "o": ["sun", "table", "banana"], "c": 0}]}}, {"id": "n-c1-eng-u9", "d": {"id": "n-c1-eng-u9", "type": "note", "grade": "1", "subject": "english", "title": "Unit 9: A Greeting Card · مبارک باد کا کارڈ", "desc": "Our own revision notes made from the book, printed pp. 82-89. Pending review by a teacher.", "published": true, "builtin": true, "updated": 253, "src": {"kind": "link", "url": "/notes/c1-eng-unit9.pdf"}}}, {"id": "t-c1-eng-u9", "d": {"id": "t-c1-eng-u9", "type": "test", "grade": "1", "subject": "english", "title": "Test 9: A Greeting Card · مبارک باد کا کارڈ", "desc": "Questions written by IQRA on the topics of the book, printed pp. 82-89. Pending review by a teacher.", "published": true, "builtin": true, "updated": 254, "qs": [{"q": "ان میں sight word کون سا ہے؟||Which is a sight word?", "o": ["the", "elephant", "umbrella"], "c": 0}, {"q": "کلاس صاف رکھنا کیسی عادت ہے؟||Keeping the class clean is a ___ habit.", "o": ["Good · اچھی", "Bad · بری", "Lazy · سستی"], "c": 0}, {"q": "مل کر کام کرنے کو کیا کہتے ہیں؟||Working together is called:", "o": ["Cooperation · تعاون", "Fighting · لڑائی", "Hiding · چھپنا"], "c": 0}, {"q": "کارڈ دینے سے کیا ہوتا ہے؟||What does a greeting card do?", "o": ["Makes others happy · خوشی دیتا ہے", "Makes them sad · اداس کرتا ہے", "Nothing · کچھ نہیں"], "c": 0}, {"q": "'is' کس طرح کا لفظ ہے؟||'is' is a:", "o": ["Sight word", "Animal", "Colour"], "c": 0}]}}, {"id": "n-c1-eng-u10", "d": {"id": "n-c1-eng-u10", "type": "note", "grade": "1", "subject": "english", "title": "Unit 10: The Hare and the Tortoise · خرگوش اور کچھوا", "desc": "Our own revision notes made from the book, printed pp. 93-101. Pending review by a teacher.", "published": true, "builtin": true, "updated": 255, "src": {"kind": "link", "url": "/notes/c1-eng-unit10.pdf"}}}, {"id": "t-c1-eng-u10", "d": {"id": "t-c1-eng-u10", "type": "test", "grade": "1", "subject": "english", "title": "Test 10: The Hare and the Tortoise · خرگوش اور کچھوا", "desc": "Questions written by IQRA on the topics of the book, printed pp. 93-101. Pending review by a teacher.", "published": true, "builtin": true, "updated": 256, "qs": [{"q": "دوڑ کس نے جیتی؟||Who won the race?", "o": ["Tortoise · کچھوا", "Hare · خرگوش", "Nobody · کوئی نہیں"], "c": 0}, {"q": "'Cat' کی جمع کیا ہے؟||What is the plural of 'cat'?", "o": ["cats", "cates", "catz"], "c": 0}, {"q": "کون سا جانور آہستہ چلتا ہے؟||Which animal walks slowly?", "o": ["Tortoise", "Hare", "Horse"], "c": 0}, {"q": "'Dog' کی جمع کون سی ہے؟||What is the plural of 'dog'?", "o": ["dogs", "doges", "dog"], "c": 0}, {"q": "اس کہانی سے ہم کیا سیکھتے ہیں؟||What do we learn from this story?", "o": ["Slow and steady wins · مستقل مزاجی", "Sleep in the race · دوڑ میں سونا", "Be proud · غرور"], "c": 0}]}}, {"id": "n-c1-eng-u11", "d": {"id": "n-c1-eng-u11", "type": "note", "grade": "1", "subject": "english", "title": "Unit 11: Love Animals · جانوروں سے پیار", "desc": "Our own revision notes made from the book, printed pp. 102-109. Pending review by a teacher.", "published": true, "builtin": true, "updated": 257, "src": {"kind": "link", "url": "/notes/c1-eng-unit11.pdf"}}}, {"id": "t-c1-eng-u11", "d": {"id": "t-c1-eng-u11", "type": "test", "grade": "1", "subject": "english", "title": "Test 11: Love Animals · جانوروں سے پیار", "desc": "Questions written by IQRA on the topics of the book, printed pp. 102-109. Pending review by a teacher.", "published": true, "builtin": true, "updated": 258, "qs": [{"q": "جانوروں کے ساتھ ہمارا برتاؤ کیسا ہونا چاہیے؟||How should we treat animals?", "o": ["Kind · مہربان", "Cruel · ظالمانہ", "Rude · بدتمیز"], "c": 0}, {"q": "ان میں پالتو جانور کون سا ہے؟||Which is a pet animal?", "o": ["Cat · بلی", "Lion · شیر", "Wolf · بھیڑیا"], "c": 0}, {"q": "مرغی کو انگریزی میں کیا کہتے ہیں؟||What do we call a murghi in English?", "o": ["hen", "cow", "goat"], "c": 0}, {"q": "سوال کے آخر میں کون سی علامت لگتی ہے؟||Which mark comes at the end of a question?", "o": ["?", "!", "."], "c": 0}, {"q": "ہاتھ ہلانا کس کی مثال ہے؟||Waving is an example of:", "o": ["Body language", "A letter", "A noun"], "c": 0}]}}, {"id": "b-c1-isl", "d": {"id": "b-c1-isl", "type": "book", "grade": "1", "subject": "islamiat", "title": "Islamiat Grade 1 · اسلامیات جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (44 pages).", "published": true, "builtin": true, "updated": 259, "src": {"kind": "link", "url": "/books/pctb-1-islamiat.pdf"}}}, {"id": "n-c1-isl-u1", "d": {"id": "n-c1-isl-u1", "type": "note", "grade": "1", "subject": "islamiat", "title": "Chapter 1: Quran and Hadith · قرآن مجید و حدیث نبوی", "desc": "Our own revision notes made from the book, printed pp. 1-8. Pending review by a teacher.", "published": true, "builtin": true, "updated": 260, "src": {"kind": "link", "url": "/notes/c1-isl-unit1.pdf"}}}, {"id": "t-c1-isl-u1", "d": {"id": "t-c1-isl-u1", "type": "test", "grade": "1", "subject": "islamiat", "title": "Test 1: Quran and Hadith · قرآن مجید و حدیث نبوی", "desc": "Questions written by IQRA on the topics of the book, printed pp. 1-8. Pending review by a teacher.", "published": true, "builtin": true, "updated": 261, "qs": [{"q": "سورۃ الاخلاص میں کتنی آیات ہیں؟||How many ayat are in Surah Al-Ikhlas?", "o": ["4", "3", "5"], "c": 0}, {"q": "سورۃ الکوثر میں کتنی آیات ہیں؟||How many ayat are in Surah Al-Kausar?", "o": ["3", "4", "6"], "c": 0}, {"q": "'ان شاء اللہ' کا مطلب کیا ہے؟||What does 'In sha Allah' mean?", "o": ["اگر اللہ نے چاہا · If Allah wills", "شکریہ · Thank you", "خدا حافظ · Goodbye"], "c": 0}, {"q": "حدیث کے مطابق نصف ایمان کیا ہے؟||According to the hadith, what is half of faith?", "o": ["پاکیزگی · Cleanliness", "کھیل · Play", "سونا · Sleeping"], "c": 0}, {"q": "کلمہ طیبہ میں اللہ کے رسول کون ہیں؟||In the Kalima Tayyiba, who is the Messenger of Allah?", "o": ["محمد ﷺ · Muhammad ﷺ", "موسیٰ · Musa", "ابراہیم · Ibrahim"], "c": 0}]}}, {"id": "n-c1-isl-u2", "d": {"id": "n-c1-isl-u2", "type": "note", "grade": "1", "subject": "islamiat", "title": "Chapter 2: Beliefs and Worship · ایمانیات و عبادات", "desc": "Our own revision notes made from the book, printed pp. 9-23. Pending review by a teacher.", "published": true, "builtin": true, "updated": 262, "src": {"kind": "link", "url": "/notes/c1-isl-unit2.pdf"}}}, {"id": "t-c1-isl-u2", "d": {"id": "t-c1-isl-u2", "type": "test", "grade": "1", "subject": "islamiat", "title": "Test 2: Beliefs and Worship · ایمانیات و عبادات", "desc": "Questions written by IQRA on the topics of the book, printed pp. 9-23. Pending review by a teacher.", "published": true, "builtin": true, "updated": 263, "qs": [{"q": "اللہ کتنے ہیں؟||How many Allah are there?", "o": ["ایک · One", "دو · Two", "تین · Three"], "c": 0}, {"q": "اللہ کا گھر کسے کہتے ہیں؟||What is called the house of Allah?", "o": ["مسجد · Mosque", "اسکول · School", "بازار · Market"], "c": 0}, {"q": "نماز کے لیے بلانے کی آواز کیا ہے؟||What is the call for prayer?", "o": ["اذان · Azan", "گانا · Song", "گھنٹی · Bell"], "c": 0}, {"q": "روزانہ کتنی نمازیں فرض ہیں؟||How many prayers are there each day?", "o": ["5", "3", "7"], "c": 0}, {"q": "پہلی نماز کون سی ہے؟||Which prayer is the first of the day?", "o": ["فجر · Fajr", "ظہر · Zuhr", "عشاء · Isha"], "c": 0}]}}, {"id": "n-c1-isl-u3", "d": {"id": "n-c1-isl-u3", "type": "note", "grade": "1", "subject": "islamiat", "title": "Chapter 3: Seerat-e-Tayyaba · سیرت طیبہ", "desc": "Our own revision notes made from the book, printed pp. 24-30. Pending review by a teacher.", "published": true, "builtin": true, "updated": 264, "src": {"kind": "link", "url": "/notes/c1-isl-unit3.pdf"}}}, {"id": "t-c1-isl-u3", "d": {"id": "t-c1-isl-u3", "type": "test", "grade": "1", "subject": "islamiat", "title": "Test 3: Seerat-e-Tayyaba · سیرت طیبہ", "desc": "Questions written by IQRA on the topics of the book, printed pp. 24-30. Pending review by a teacher.", "published": true, "builtin": true, "updated": 265, "qs": [{"q": "اللہ کے آخری نبی کون ہیں؟||Who is the last Prophet of Allah?", "o": ["حضرت محمد ﷺ · Muhammad ﷺ", "حضرت موسیٰ · Musa", "حضرت عیسیٰ · Isa"], "c": 0}, {"q": "نبی کریم ﷺ کیسے تھے؟||What were the Prophet's ﷺ manners like?", "o": ["سچے اور امانت دار · Truthful and trustworthy", "جھوٹے · Liars", "سخت دل · Hard-hearted"], "c": 0}, {"q": "نبی ﷺ بچوں سے کیسا سلوک کرتے تھے؟||How did the Prophet ﷺ treat children?", "o": ["پیار سے · With love", "غصے سے · With anger", "نظر انداز · Ignored them"], "c": 0}, {"q": "ہمیں کس کی طرح اخلاق اپنانے چاہییں؟||Whose manners should we follow?", "o": ["نبی ﷺ کی · The Prophet's ﷺ", "کارٹون کی · A cartoon's", "کسی کی نہیں · No one's"], "c": 0}, {"q": "اچھے اخلاق کو عربی میں کیا کہتے ہیں؟||Good manners are called what in Arabic?", "o": ["اخلاقِ حسنہ · Akhlaq-e-hasana", "نماز · Namaz", "روزہ · Roza"], "c": 0}]}}, {"id": "n-c1-isl-u4", "d": {"id": "n-c1-isl-u4", "type": "note", "grade": "1", "subject": "islamiat", "title": "Chapter 4: Manners and Etiquette · اخلاق و آداب", "desc": "Our own revision notes made from the book, printed pp. 31-37. Pending review by a teacher.", "published": true, "builtin": true, "updated": 266, "src": {"kind": "link", "url": "/notes/c1-isl-unit4.pdf"}}}, {"id": "t-c1-isl-u4", "d": {"id": "t-c1-isl-u4", "type": "test", "grade": "1", "subject": "islamiat", "title": "Test 4: Manners and Etiquette · اخلاق و آداب", "desc": "Questions written by IQRA on the topics of the book, printed pp. 31-37. Pending review by a teacher.", "published": true, "builtin": true, "updated": 267, "qs": [{"q": "ملاقات پر ہم کیا کہتے ہیں؟||What do we say when we meet?", "o": ["السلام علیکم", "شب بخیر", "الوداع"], "c": 0}, {"q": "سلام کا جواب کیا ہے؟||What is the reply to Salam?", "o": ["وعلیکم السلام", "شکریہ", "جی ہاں"], "c": 0}, {"q": "ان میں سے اچھا اخلاق کون سا ہے؟||Which is a good manner?", "o": ["سچ بولنا · Telling the truth", "جھوٹ بولنا · Lying", "لڑنا · Fighting"], "c": 0}, {"q": "بڑوں کے ساتھ ہمارا رویہ کیسا ہو؟||How should we treat elders?", "o": ["احترام · Respect", "بدتمیزی · Rudeness", "بے رخی · Ignoring"], "c": 0}, {"q": "'السلام علیکم' کا مطلب کیا ہے؟||What does 'Assalamu Alaikum' mean?", "o": ["آپ پر سلامتی ہو · Peace be upon you", "شکریہ · Thank you", "خوش آمدید · Welcome"], "c": 0}]}}, {"id": "n-c1-isl-u5", "d": {"id": "n-c1-isl-u5", "type": "note", "grade": "1", "subject": "islamiat", "title": "Chapter 5: Sources of Guidance and Famous Muslims · ہدایت کے سرچشمے اور مشاہیر اسلام", "desc": "Our own revision notes made from the book, printed pp. 38-40. Pending review by a teacher.", "published": true, "builtin": true, "updated": 268, "src": {"kind": "link", "url": "/notes/c1-isl-unit5.pdf"}}}, {"id": "t-c1-isl-u5", "d": {"id": "t-c1-isl-u5", "type": "test", "grade": "1", "subject": "islamiat", "title": "Test 5: Sources of Guidance and Famous Muslims · ہدایت کے سرچشمے اور مشاہیر اسلام", "desc": "Questions written by IQRA on the topics of the book, printed pp. 38-40. Pending review by a teacher.", "published": true, "builtin": true, "updated": 269, "qs": [{"q": "انبیاء ہمیں کیا سکھاتے ہیں؟||What do the Prophets teach us?", "o": ["اچھی باتیں · Good things", "بری باتیں · Bad things", "کھیل · Games"], "c": 0}, {"q": "ہدایت کی سب سے بڑی کتاب کون سی ہے؟||Which is the book of guidance?", "o": ["قرآن مجید · The Quran", "کہانی کی کتاب · Storybook", "کاپی · Notebook"], "c": 0}, {"q": "انبیاء کو کس نے بھیجا؟||Who sent the Prophets?", "o": ["اللہ · Allah", "بادشاہ · The king", "استاد · The teacher"], "c": 0}, {"q": "نبی کا نام لے کر ہم کیا کہتے ہیں؟||What do we say after a Prophet's name?", "o": ["علیہ السلام", "ما شاء اللہ", "جزاک اللہ"], "c": 0}, {"q": "ہمیں انبیاء کا کیا کرنا چاہیے؟||What should we do for the Prophets?", "o": ["احترام · Respect", "مذاق · Mock", "بھول جانا · Forget"], "c": 0}]}}, {"id": "b-c1-gk", "d": {"id": "b-c1-gk", "type": "book", "grade": "1", "subject": "gk", "title": "General Knowledge Grade 1 · واقفیت عامہ جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (54 pages).", "published": true, "builtin": true, "updated": 270, "src": {"kind": "link", "url": "/books/pctb-1-gk.pdf"}}}, {"id": "n-c1-gk-u1", "d": {"id": "n-c1-gk-u1", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 1: About Me · میرا تعارف", "desc": "Our own revision notes made from the book, printed pp. 1-3. Pending review by a teacher.", "published": true, "builtin": true, "updated": 271, "src": {"kind": "link", "url": "/notes/c1-gk-unit1.pdf"}}}, {"id": "t-c1-gk-u1", "d": {"id": "t-c1-gk-u1", "type": "test", "grade": "1", "subject": "gk", "title": "Test 1: About Me · میرا تعارف", "desc": "Questions written by IQRA on the topics of the book, printed pp. 1-3. Pending review by a teacher.", "published": true, "builtin": true, "updated": 272, "qs": [{"q": "اپنا تعارف کرواتے وقت سب سے پہلے کیا بتاتے ہیں؟||What do we tell first when introducing ourselves?", "o": ["نام · Name", "پسندیدہ رنگ · Favourite colour", "پتہ · Phone number"], "c": 0}, {"q": "اچھی عادت کون سی ہے؟||Which is a good habit?", "o": ["صبح وقت پر اٹھنا · Waking up on time", "دیر تک جاگنا · Staying up late", "گندے ہاتھ · Dirty hands"], "c": 0}, {"q": "دانت کب صاف کرنے چاہییں؟||When should we brush our teeth?", "o": ["صبح اور رات · Morning and night", "کبھی نہیں · Never", "صرف عید پر · Only on Eid"], "c": 0}, {"q": "گھر کے کاموں میں مدد کرنا کیسا ہے؟||Helping with chores at home is:", "o": ["اچھا · Good", "برا · Bad", "فضول · Useless"], "c": 0}, {"q": "میری جماعت کون سی ہے؟||Which class are you in?", "o": ["جماعت اول · Class 1", "جماعت پنجم · Class 5", "جماعت دہم · Class 10"], "c": 0}]}}, {"id": "n-c1-gk-u2", "d": {"id": "n-c1-gk-u2", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 2: My Body · میرا جسم", "desc": "Our own revision notes made from the book, printed pp. 4-6. Pending review by a teacher.", "published": true, "builtin": true, "updated": 273, "src": {"kind": "link", "url": "/notes/c1-gk-unit2.pdf"}}}, {"id": "t-c1-gk-u2", "d": {"id": "t-c1-gk-u2", "type": "test", "grade": "1", "subject": "gk", "title": "Test 2: My Body · میرا جسم", "desc": "Questions written by IQRA on the topics of the book, printed pp. 4-6. Pending review by a teacher.", "published": true, "builtin": true, "updated": 274, "qs": [{"q": "ہم کس سے دیکھتے ہیں؟||What do we see with?", "o": ["آنکھ · Eyes", "کان · Ears", "ناک · Nose"], "c": 0}, {"q": "ہم کس سے سنتے ہیں؟||What do we hear with?", "o": ["کان · Ears", "آنکھ · Eyes", "زبان · Tongue"], "c": 0}, {"q": "پھول کی خوشبو کس سے سونگھتے ہیں؟||What do we smell a flower with?", "o": ["ناک · Nose", "ہاتھ · Hand", "کان · Ear"], "c": 0}, {"q": "ذائقہ کس سے محسوس ہوتا ہے؟||What do we taste with?", "o": ["زبان · Tongue", "آنکھ · Eye", "ناک · Nose"], "c": 0}, {"q": "ہمارے کتنے حواس ہیں؟||How many senses do we have?", "o": ["5", "3", "10"], "c": 0}]}}, {"id": "n-c1-gk-u3", "d": {"id": "n-c1-gk-u3", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 3: Health and Cleanliness · صحت و صفائی", "desc": "Our own revision notes made from the book, printed pp. 7-12. Pending review by a teacher.", "published": true, "builtin": true, "updated": 275, "src": {"kind": "link", "url": "/notes/c1-gk-unit3.pdf"}}}, {"id": "t-c1-gk-u3", "d": {"id": "t-c1-gk-u3", "type": "test", "grade": "1", "subject": "gk", "title": "Test 3: Health and Cleanliness · صحت و صفائی", "desc": "Questions written by IQRA on the topics of the book, printed pp. 7-12. Pending review by a teacher.", "published": true, "builtin": true, "updated": 276, "qs": [{"q": "کھانے سے پہلے ہمیں کیا کرنا چاہیے؟||What should we do before eating?", "o": ["ہاتھ دھونا · Wash hands", "کھیلنا · Play", "سونا · Sleep"], "c": 0}, {"q": "صحت کے لیے اچھی چیز کون سی ہے؟||Which food is good for health?", "o": ["پھل · Fruit", "ٹافیاں · Sweets", "چپس · Chips"], "c": 0}, {"q": "ناخن کیسے ہونے چاہییں؟||How should nails be?", "o": ["کٹے ہوئے · Trimmed", "لمبے · Long", "گندے · Dirty"], "c": 0}, {"q": "نہانا کتنی بار ضروری ہے؟||How often should we bathe?", "o": ["روزانہ · Daily", "کبھی کبھی · Sometimes", "کبھی نہیں · Never"], "c": 0}, {"q": "کون سی عادت صحت کے لیے اچھی ہے؟||Which habit is good for health?", "o": ["صفائی · Cleanliness", "گندگی · Dirt", "سستی · Laziness"], "c": 0}]}}, {"id": "n-c1-gk-u4", "d": {"id": "n-c1-gk-u4", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 4: My Family and Friends · میرا خاندان اور میرے دوست", "desc": "Our own revision notes made from the book, printed pp. 13-17. Pending review by a teacher.", "published": true, "builtin": true, "updated": 277, "src": {"kind": "link", "url": "/notes/c1-gk-unit4.pdf"}}}, {"id": "t-c1-gk-u4", "d": {"id": "t-c1-gk-u4", "type": "test", "grade": "1", "subject": "gk", "title": "Test 4: My Family and Friends · میرا خاندان اور میرے دوست", "desc": "Questions written by IQRA on the topics of the book, printed pp. 13-17. Pending review by a teacher.", "published": true, "builtin": true, "updated": 278, "qs": [{"q": "ابو کے ابو کو ہم کیا کہتے ہیں؟||What do we call father's father?", "o": ["دادا · Grandfather", "ماموں · Uncle", "بھائی · Brother"], "c": 0}, {"q": "اچھا دوست کیسا ہوتا ہے؟||A good friend is:", "o": ["مددگار · Helpful", "جھوٹا · A liar", "لڑاکا · Quarrelsome"], "c": 0}, {"q": "خاندان کے افراد سے کیسا سلوک کریں؟||How should we treat family members?", "o": ["پیار سے · With love", "غصے سے · With anger", "بے رخی سے · Ignoring"], "c": 0}, {"q": "امی کی امی کو کیا کہتے ہیں؟||What do we call mother's mother?", "o": ["نانی · Maternal grandmother", "دادی · Paternal grandmother", "خالہ · Aunt"], "c": 0}, {"q": "دوست سے ملتے ہی کیا کہیں؟||What do we say when meeting a friend?", "o": ["السلام علیکم", "چلو دفع ہو", "کچھ نہیں"], "c": 0}]}}, {"id": "n-c1-gk-u5", "d": {"id": "n-c1-gk-u5", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 5: Games and Rules · کھیل اور قوانین", "desc": "Our own revision notes made from the book, printed pp. 18-19. Pending review by a teacher.", "published": true, "builtin": true, "updated": 279, "src": {"kind": "link", "url": "/notes/c1-gk-unit5.pdf"}}}, {"id": "t-c1-gk-u5", "d": {"id": "t-c1-gk-u5", "type": "test", "grade": "1", "subject": "gk", "title": "Test 5: Games and Rules · کھیل اور قوانین", "desc": "Questions written by IQRA on the topics of the book, printed pp. 18-19. Pending review by a teacher.", "published": true, "builtin": true, "updated": 280, "qs": [{"q": "کھیل ہمیں کیا دیتے ہیں؟||What do games give us?", "o": ["صحت اور خوشی · Health and joy", "بیماری · Illness", "شور · Noise"], "c": 0}, {"q": "کھیل کے قوانین پر کیا کرنا چاہیے؟||What should we do about game rules?", "o": ["عمل کرنا · Follow them", "توڑنا · Break them", "بھولنا · Forget them"], "c": 0}, {"q": "اپنی باری کا کیا کریں؟||What do we do about our turn?", "o": ["انتظار کریں · Wait", "چھین لیں · Snatch it", "بھاگ جائیں · Run away"], "c": 0}, {"q": "ہار جانے پر کیا کریں؟||What should we do if we lose?", "o": ["خوش دلی سے قبول کریں · Accept happily", "لڑیں · Fight", "رو دیں · Cry loudly"], "c": 0}, {"q": "کرکٹ ایک ___ ہے۔||Cricket is a ___.", "o": ["کھیل · Game", "پھل · Fruit", "سبزی · Vegetable"], "c": 0}]}}, {"id": "n-c1-gk-u6", "d": {"id": "n-c1-gk-u6", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 6: Our Neighbourhood · ہمارا علاقہ", "desc": "Our own revision notes made from the book, printed pp. 20-22. Pending review by a teacher.", "published": true, "builtin": true, "updated": 281, "src": {"kind": "link", "url": "/notes/c1-gk-unit6.pdf"}}}, {"id": "t-c1-gk-u6", "d": {"id": "t-c1-gk-u6", "type": "test", "grade": "1", "subject": "gk", "title": "Test 6: Our Neighbourhood · ہمارا علاقہ", "desc": "Questions written by IQRA on the topics of the book, printed pp. 20-22. Pending review by a teacher.", "published": true, "builtin": true, "updated": 282, "qs": [{"q": "مریض کا علاج کہاں ہوتا ہے؟||Where are sick people treated?", "o": ["ہسپتال · Hospital", "پارک · Park", "اسکول · School"], "c": 0}, {"q": "بچوں کو کون پڑھاتا ہے؟||Who teaches children?", "o": ["استاد · Teacher", "ڈاکٹر · Doctor", "درزی · Tailor"], "c": 0}, {"q": "حفاظت کون کرتا ہے؟||Who protects us?", "o": ["پولیس · Police", "دکاندار · Shopkeeper", "باغبان · Gardener"], "c": 0}, {"q": "چیزیں کہاں سے خریدتے ہیں؟||Where do we buy things?", "o": ["دکان · Shop", "ہسپتال · Hospital", "مسجد · Mosque"], "c": 0}, {"q": "اپنے علاقے کو کیسا رکھیں؟||How should we keep our area?", "o": ["صاف · Clean", "گندا · Dirty", "ویران · Empty"], "c": 0}]}}, {"id": "n-c1-gk-u7", "d": {"id": "n-c1-gk-u7", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 7: Places of Worship · عبادت گاہیں", "desc": "Our own revision notes made from the book, printed pp. 23-24. Pending review by a teacher.", "published": true, "builtin": true, "updated": 283, "src": {"kind": "link", "url": "/notes/c1-gk-unit7.pdf"}}}, {"id": "t-c1-gk-u7", "d": {"id": "t-c1-gk-u7", "type": "test", "grade": "1", "subject": "gk", "title": "Test 7: Places of Worship · عبادت گاہیں", "desc": "Questions written by IQRA on the topics of the book, printed pp. 23-24. Pending review by a teacher.", "published": true, "builtin": true, "updated": 284, "qs": [{"q": "مسلمانوں کی عبادت گاہ کون سی ہے؟||What is the Muslims' place of worship?", "o": ["مسجد · Mosque", "گرجا · Church", "مندر · Temple"], "c": 0}, {"q": "عیسائیوں کی عبادت گاہ کون سی ہے؟||What is the Christians' place of worship?", "o": ["گرجا گھر · Church", "مسجد · Mosque", "گوردوارہ · Gurdwara"], "c": 0}, {"q": "سکھوں کی عبادت گاہ کون سی ہے؟||What is the Sikhs' place of worship?", "o": ["گوردوارہ · Gurdwara", "مسجد · Mosque", "گرجا · Church"], "c": 0}, {"q": "ہندوؤں کی عبادت گاہ کون سی ہے؟||What is the Hindus' place of worship?", "o": ["مندر · Temple", "مسجد · Mosque", "گرجا · Church"], "c": 0}, {"q": "دوسروں کی عبادت گاہ کا کیا کریں؟||What should we do about others' places of worship?", "o": ["احترام · Respect", "مذاق · Mock", "نقصان · Damage"], "c": 0}]}}, {"id": "n-c1-gk-u8", "d": {"id": "n-c1-gk-u8", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 8: Our Beloved Homeland Pakistan · ہمارا پیارا وطن پاکستان", "desc": "Our own revision notes made from the book, printed pp. 25-28. Pending review by a teacher.", "published": true, "builtin": true, "updated": 285, "src": {"kind": "link", "url": "/notes/c1-gk-unit8.pdf"}}}, {"id": "t-c1-gk-u8", "d": {"id": "t-c1-gk-u8", "type": "test", "grade": "1", "subject": "gk", "title": "Test 8: Our Beloved Homeland Pakistan · ہمارا پیارا وطن پاکستان", "desc": "Questions written by IQRA on the topics of the book, printed pp. 25-28. Pending review by a teacher.", "published": true, "builtin": true, "updated": 286, "qs": [{"q": "پاکستان کا دارالحکومت کون سا ہے؟||What is the capital of Pakistan?", "o": ["اسلام آباد · Islamabad", "لاہور · Lahore", "کراچی · Karachi"], "c": 0}, {"q": "بانی پاکستان کون ہیں؟||Who is the founder of Pakistan?", "o": ["قائداعظم · Quaid-e-Azam", "علامہ اقبال · Allama Iqbal", "لیاقت علی خان · Liaquat Ali Khan"], "c": 0}, {"q": "یوم آزادی کب ہے؟||When is Independence Day?", "o": ["14 اگست · 14 August", "23 مارچ · 23 March", "25 دسمبر · 25 December"], "c": 0}, {"q": "پاکستانی پرچم کے رنگ کون سے ہیں؟||What are the colours of Pakistan's flag?", "o": ["ہرا اور سفید · Green and white", "سرخ اور نیلا · Red and blue", "پیلا اور کالا · Yellow and black"], "c": 0}, {"q": "پرچم پر کیا بنا ہے؟||What is on the flag?", "o": ["چاند ستارہ · Crescent and star", "سورج · Sun", "درخت · Tree"], "c": 0}]}}, {"id": "n-c1-gk-u9", "d": {"id": "n-c1-gk-u9", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 9: My School · میرا سکول", "desc": "Our own revision notes made from the book, printed pp. 29-31. Pending review by a teacher.", "published": true, "builtin": true, "updated": 287, "src": {"kind": "link", "url": "/notes/c1-gk-unit9.pdf"}}}, {"id": "t-c1-gk-u9", "d": {"id": "t-c1-gk-u9", "type": "test", "grade": "1", "subject": "gk", "title": "Test 9: My School · میرا سکول", "desc": "Questions written by IQRA on the topics of the book, printed pp. 29-31. Pending review by a teacher.", "published": true, "builtin": true, "updated": 288, "qs": [{"q": "کتابیں کہاں سے ملتی ہیں؟||Where do we get books at school?", "o": ["لائبریری · Library", "میدان · Playground", "گیٹ · Gate"], "c": 0}, {"q": "کھیل کہاں کھیلتے ہیں؟||Where do we play?", "o": ["میدان · Playground", "لائبریری · Library", "دفتر · Office"], "c": 0}, {"q": "استاد بولے تو ہم کیا کریں؟||What do we do when the teacher speaks?", "o": ["غور سے سنیں · Listen", "شور کریں · Make noise", "سو جائیں · Sleep"], "c": 0}, {"q": "ہم جماعت کے ساتھ کیسا رویہ ہو؟||How should we treat classmates?", "o": ["محبت · With love", "لڑائی · Fighting", "مذاق · Mocking"], "c": 0}, {"q": "اسکول کے قوانین پر کیا کریں؟||What do we do with school rules?", "o": ["عمل کریں · Follow them", "توڑیں · Break them", "نظر انداز کریں · Ignore them"], "c": 0}]}}, {"id": "n-c1-gk-u10", "d": {"id": "n-c1-gk-u10", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 10: Means of Transport · ذرائع آمدورفت", "desc": "Our own revision notes made from the book, printed pp. 32-34. Pending review by a teacher.", "published": true, "builtin": true, "updated": 289, "src": {"kind": "link", "url": "/notes/c1-gk-unit10.pdf"}}}, {"id": "t-c1-gk-u10", "d": {"id": "t-c1-gk-u10", "type": "test", "grade": "1", "subject": "gk", "title": "Test 10: Means of Transport · ذرائع آمدورفت", "desc": "Questions written by IQRA on the topics of the book, printed pp. 32-34. Pending review by a teacher.", "published": true, "builtin": true, "updated": 290, "qs": [{"q": "ہوائی جہاز کس راستے پر چلتا ہے؟||Where does an aeroplane travel?", "o": ["ہوا میں · In the air", "پانی میں · On water", "پٹڑی پر · On rails"], "c": 0}, {"q": "کشتی کہاں چلتی ہے؟||Where does a boat travel?", "o": ["پانی پر · On water", "سڑک پر · On the road", "ہوا میں · In the air"], "c": 0}, {"q": "ٹرین کس پر چلتی ہے؟||What does a train run on?", "o": ["پٹڑی · Rails", "پانی · Water", "بادل · Clouds"], "c": 0}, {"q": "ان میں زمینی سواری کون سی ہے؟||Which is land transport?", "o": ["بس · Bus", "جہاز · Ship", "ہیلی کاپٹر · Helicopter"], "c": 0}, {"q": "ان میں ہوائی سواری کون سی ہے؟||Which is air transport?", "o": ["ہیلی کاپٹر · Helicopter", "کار · Car", "کشتی · Boat"], "c": 0}]}}, {"id": "n-c1-gk-u11", "d": {"id": "n-c1-gk-u11", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 11: Traffic Rules · ٹریفک قوانین", "desc": "Our own revision notes made from the book, printed pp. 35-37. Pending review by a teacher.", "published": true, "builtin": true, "updated": 291, "src": {"kind": "link", "url": "/notes/c1-gk-unit11.pdf"}}}, {"id": "t-c1-gk-u11", "d": {"id": "t-c1-gk-u11", "type": "test", "grade": "1", "subject": "gk", "title": "Test 11: Traffic Rules · ٹریفک قوانین", "desc": "Questions written by IQRA on the topics of the book, printed pp. 35-37. Pending review by a teacher.", "published": true, "builtin": true, "updated": 292, "qs": [{"q": "سرخ بتی کا کیا مطلب ہے؟||What does the red light mean?", "o": ["رک جاؤ · Stop", "چلو · Go", "تیز چلو · Go fast"], "c": 0}, {"q": "ہری بتی کا کیا مطلب ہے؟||What does the green light mean?", "o": ["چلو · Go", "رک جاؤ · Stop", "سو جاؤ · Sleep"], "c": 0}, {"q": "پیلی بتی کا مطلب کیا ہے؟||What does the yellow light mean?", "o": ["تیار ہو جاؤ · Get ready", "چلو · Go", "دوڑو · Run"], "c": 0}, {"q": "سڑک کہاں سے پار کریں؟||Where should we cross the road?", "o": ["زیبرا کراسنگ · Zebra crossing", "درمیان سے · Anywhere", "موڑ پر · At the bend"], "c": 0}, {"q": "سڑک پار کرنے سے پہلے کیا کریں؟||What do we do before crossing?", "o": ["دونوں طرف دیکھیں · Look both ways", "آنکھیں بند کریں · Close eyes", "دوڑ لگائیں · Run"], "c": 0}]}}, {"id": "n-c1-gk-u12", "d": {"id": "n-c1-gk-u12", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 12: Good Manners and Habits · اچھے اخلاق اور عادات", "desc": "Our own revision notes made from the book, printed pp. 38-40. Pending review by a teacher.", "published": true, "builtin": true, "updated": 293, "src": {"kind": "link", "url": "/notes/c1-gk-unit12.pdf"}}}, {"id": "t-c1-gk-u12", "d": {"id": "t-c1-gk-u12", "type": "test", "grade": "1", "subject": "gk", "title": "Test 12: Good Manners and Habits · اچھے اخلاق اور عادات", "desc": "Questions written by IQRA on the topics of the book, printed pp. 38-40. Pending review by a teacher.", "published": true, "builtin": true, "updated": 294, "qs": [{"q": "اچھی عادت کون سی ہے؟||Which is a good habit?", "o": ["سچ بولنا · Telling the truth", "جھوٹ بولنا · Lying", "چیخنا · Shouting"], "c": 0}, {"q": "مدد ملنے پر کیا کہیں؟||What do we say after getting help?", "o": ["شکریہ · Thank you", "چپ رہو · Be quiet", "کچھ نہیں · Nothing"], "c": 0}, {"q": "غلطی ہو جائے تو کیا کہیں؟||If we make a mistake we say:", "o": ["معذرت · Sorry", "نہیں · No", "میری مرضی · Whatever"], "c": 0}, {"q": "بڑوں سے کیسے بات کریں؟||How do we talk to elders?", "o": ["ادب سے · Politely", "زور سے · Loudly", "بدتمیزی سے · Rudely"], "c": 0}, {"q": "کوڑا کہاں ڈالتے ہیں؟||Where do we throw rubbish?", "o": ["کوڑے دان میں · In the dustbin", "سڑک پر · On the road", "نالی میں · In a drain"], "c": 0}]}}, {"id": "n-c1-gk-u13", "d": {"id": "n-c1-gk-u13", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 13: Plants and Animals · پودے اور جانور", "desc": "Our own revision notes made from the book, printed pp. 41-46. Pending review by a teacher.", "published": true, "builtin": true, "updated": 295, "src": {"kind": "link", "url": "/notes/c1-gk-unit13.pdf"}}}, {"id": "t-c1-gk-u13", "d": {"id": "t-c1-gk-u13", "type": "test", "grade": "1", "subject": "gk", "title": "Test 13: Plants and Animals · پودے اور جانور", "desc": "Questions written by IQRA on the topics of the book, printed pp. 41-46. Pending review by a teacher.", "published": true, "builtin": true, "updated": 296, "qs": [{"q": "پودے کو زمین میں کون پکڑتا ہے؟||Which part holds the plant in the soil?", "o": ["جڑ · Root", "پتا · Leaf", "پھول · Flower"], "c": 0}, {"q": "پودے کو کیا چاہیے؟||What do plants need?", "o": ["پانی اور دھوپ · Water and sunlight", "موبائل · Phone", "ٹافی · Sweets"], "c": 0}, {"q": "پالتو جانور کون سا ہے؟||Which is a pet?", "o": ["بلی · Cat", "شیر · Lion", "ہاتھی · Elephant"], "c": 0}, {"q": "جنگلی جانور کون سا ہے؟||Which is a wild animal?", "o": ["شیر · Lion", "گائے · Cow", "بکری · Goat"], "c": 0}, {"q": "دودھ کون سا جانور دیتا ہے؟||Which animal gives us milk?", "o": ["گائے · Cow", "شیر · Lion", "بھیڑیا · Wolf"], "c": 0}]}}, {"id": "n-c1-gk-u14", "d": {"id": "n-c1-gk-u14", "type": "note", "grade": "1", "subject": "gk", "title": "Chapter 14: Earth and Sky · زمین اور آسمان", "desc": "Our own revision notes made from the book, printed pp. 47-50. Pending review by a teacher.", "published": true, "builtin": true, "updated": 297, "src": {"kind": "link", "url": "/notes/c1-gk-unit14.pdf"}}}, {"id": "t-c1-gk-u14", "d": {"id": "t-c1-gk-u14", "type": "test", "grade": "1", "subject": "gk", "title": "Test 14: Earth and Sky · زمین اور آسمان", "desc": "Questions written by IQRA on the topics of the book, printed pp. 47-50. Pending review by a teacher.", "published": true, "builtin": true, "updated": 298, "qs": [{"q": "دن میں روشنی کون دیتا ہے؟||What gives light in the day?", "o": ["سورج · Sun", "چاند · Moon", "ستارے · Stars"], "c": 0}, {"q": "رات کو آسمان پر کیا نظر آتا ہے؟||What do we see in the sky at night?", "o": ["چاند اور ستارے · Moon and stars", "سورج · Sun", "قوس قزح · Rainbow"], "c": 0}, {"q": "بارش کہاں سے آتی ہے؟||Rain comes from:", "o": ["بادل · Clouds", "درخت · Trees", "زمین · The ground"], "c": 0}, {"q": "ہم کہاں رہتے ہیں؟||Where do we live?", "o": ["زمین · Earth", "چاند · Moon", "سورج · Sun"], "c": 0}, {"q": "بارش کے وقت کیا لیں؟||What do we take when it rains?", "o": ["چھتری · Umbrella", "پنکھا · Fan", "کمبل · Blanket"], "c": 0}]}}, {"id": "b-c1-ethics", "d": {"id": "b-c1-ethics", "type": "book", "grade": "1", "subject": "ethics", "title": "Ethics Grade 1 · اخلاقیات جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (34 pages).", "published": true, "builtin": true, "updated": 299, "src": {"kind": "link", "url": "/books/pctb-1-ethics.pdf"}}}, {"id": "n-c1-ethics-u1", "d": {"id": "n-c1-ethics-u1", "type": "note", "grade": "1", "subject": "ethics", "title": "Chapter 1: Introduction to Religions · مذاہب کا تعارف", "desc": "Our own revision notes made from the book, printed pp. 1-9. Pending review by a teacher.", "published": true, "builtin": true, "updated": 300, "src": {"kind": "link", "url": "/notes/c1-ethics-unit1.pdf"}}}, {"id": "t-c1-ethics-u1", "d": {"id": "t-c1-ethics-u1", "type": "test", "grade": "1", "subject": "ethics", "title": "Test 1: Introduction to Religions · مذاہب کا تعارف", "desc": "Questions written by IQRA on the topics of the book, printed pp. 1-9. Pending review by a teacher.", "published": true, "builtin": true, "updated": 301, "qs": [{"q": "مسلمانوں کی عبادت گاہ کون سی ہے؟||What is the Muslims' place of worship?", "o": ["مسجد · Mosque", "مندر · Temple", "گوردوارہ · Gurdwara"], "c": 0}, {"q": "مسلمانوں کی مقدس کتاب کون سی ہے؟||What is the holy book of Muslims?", "o": ["قرآن مجید · Quran", "بائبل · Bible", "گرو گرنتھ · Guru Granth"], "c": 0}, {"q": "عیسائیوں کی عبادت گاہ کون سی ہے؟||What is the Christians' place of worship?", "o": ["گرجا گھر · Church", "مسجد · Mosque", "مندر · Temple"], "c": 0}, {"q": "سکھوں کی مقدس کتاب کون سی ہے؟||What is the holy book of Sikhs?", "o": ["گرو گرنتھ صاحب · Guru Granth Sahib", "بائبل · Bible", "قرآن · Quran"], "c": 0}, {"q": "دوسرے مذاہب کے ماننے والوں کے ساتھ کیسا سلوک کریں؟||How should we treat followers of other religions?", "o": ["احترام · Respect", "مذاق · Mock", "جھگڑا · Quarrel"], "c": 0}]}}, {"id": "n-c1-ethics-u2", "d": {"id": "n-c1-ethics-u2", "type": "note", "grade": "1", "subject": "ethics", "title": "Chapter 2: Ethics and Values · اخلاقیات اور اقدار", "desc": "Our own revision notes made from the book, printed pp. 10-18. Pending review by a teacher.", "published": true, "builtin": true, "updated": 302, "src": {"kind": "link", "url": "/notes/c1-ethics-unit2.pdf"}}}, {"id": "t-c1-ethics-u2", "d": {"id": "t-c1-ethics-u2", "type": "test", "grade": "1", "subject": "ethics", "title": "Test 2: Ethics and Values · اخلاقیات اور اقدار", "desc": "Questions written by IQRA on the topics of the book, printed pp. 10-18. Pending review by a teacher.", "published": true, "builtin": true, "updated": 303, "qs": [{"q": "انسانی جان کیسی ہے؟||How is human life?", "o": ["قیمتی · Precious", "فضول · Useless", "معمولی · Ordinary"], "c": 0}, {"q": "تعلیم حاصل کرنا کیسا ہے؟||Getting an education is:", "o": ["ضروری · Important", "بے کار · Useless", "مشکل · Unwanted"], "c": 0}, {"q": "بزرگ کو سڑک پار کرنے میں مدد دینا کیسا ہے؟||Helping an elder cross the road is:", "o": ["اچھا عمل · A good deed", "برا عمل · A bad deed", "وقت ضائع · Waste of time"], "c": 0}, {"q": "اچھی قدر کون سی ہے؟||Which is a good value?", "o": ["سچ بولنا · Honesty", "چوری · Stealing", "دھوکا · Cheating"], "c": 0}, {"q": "صحت کا خیال رکھنے کے لیے کیا کریں؟||How do we look after our health?", "o": ["صاف رہیں اور اچھا کھائیں · Keep clean and eat well", "گندا رہیں · Stay dirty", "کھانا چھوڑیں · Skip meals"], "c": 0}]}}, {"id": "n-c1-ethics-u3", "d": {"id": "n-c1-ethics-u3", "type": "note", "grade": "1", "subject": "ethics", "title": "Chapter 3: Good Servants of God · خدا کے نیک بندے", "desc": "Our own revision notes made from the book, printed pp. 19-29. Pending review by a teacher.", "published": true, "builtin": true, "updated": 304, "src": {"kind": "link", "url": "/notes/c1-ethics-unit3.pdf"}}}, {"id": "t-c1-ethics-u3", "d": {"id": "t-c1-ethics-u3", "type": "test", "grade": "1", "subject": "ethics", "title": "Test 3: Good Servants of God · خدا کے نیک بندے", "desc": "Questions written by IQRA on the topics of the book, printed pp. 19-29. Pending review by a teacher.", "published": true, "builtin": true, "updated": 305, "qs": [{"q": "حضرت موسیٰ کو کون سی کتاب دی گئی؟||Which book was given to Prophet Moses?", "o": ["تورات · Torah", "قرآن · Quran", "گیتا · Gita"], "c": 0}, {"q": "خداوند یسوع مسیح کی تعلیم کیا ہے؟||What is the teaching of Lord Jesus Christ?", "o": ["محبت اور خدمت · Love and service", "نفرت · Hatred", "لالچ · Greed"], "c": 0}, {"q": "نیک لوگ کیا کرتے ہیں؟||What do good people do?", "o": ["دوسروں کی مدد · Help others", "دوسروں کو تنگ کرنا · Trouble others", "جھوٹ · Lie"], "c": 0}, {"q": "ہمیں نیک بندوں سے کیا سیکھنا چاہیے؟||What should we learn from good servants of God?", "o": ["اچھی باتیں · Good things", "بری باتیں · Bad things", "کچھ نہیں · Nothing"], "c": 0}, {"q": "نیک بندے کس کی بات مانتے ہیں؟||Whom do good servants obey?", "o": ["خدا کی · God", "دشمن کی · The enemy", "کسی کی نہیں · No one"], "c": 0}]}}, {"id": "b-c1-taj", "d": {"id": "b-c1-taj", "type": "book", "grade": "1", "subject": "quran", "title": "Tajweedi Qaida Grade 1 · تجویدی قاعدہ جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (38 pages).", "published": true, "builtin": true, "updated": 306, "src": {"kind": "link", "url": "/books/pctb-1-tajweedi-qaida.pdf"}}}, {"id": "n-c1-taj-u1", "d": {"id": "n-c1-taj-u1", "type": "note", "grade": "1", "subject": "quran", "title": "Part 1: Single and Joined Letters · حروف مفردات و مرکبات", "desc": "Our own revision notes made from the book, printed pp. 1-3 (Lessons 1-2). Pending review by a teacher.", "published": true, "builtin": true, "updated": 307, "src": {"kind": "link", "url": "/notes/c1-taj-unit1.pdf"}}}, {"id": "t-c1-taj-u1", "d": {"id": "t-c1-taj-u1", "type": "test", "grade": "1", "subject": "quran", "title": "Test 1: Single and Joined Letters · حروف مفردات و مرکبات", "desc": "Questions written by IQRA on the topics of the book, printed pp. 1-3 (Lessons 1-2). Pending review by a teacher.", "published": true, "builtin": true, "updated": 308, "qs": [{"q": "حروف ایک ایک الگ لکھے ہوں تو انہیں کیا کہتے ہیں؟||What are letters written separately called?", "o": ["حروف مفردات", "حروف مرکبات", "حروف مقطعات"], "c": 0}, {"q": "حروف مل جائیں تو کیا بنتا ہے؟||What is made when letters join?", "o": ["حروف مرکبات", "حروف مفردات", "تنوین"], "c": 0}, {"q": "ان میں پہلا حرف کون سا ہے؟||Which is the first letter?", "o": ["ا", "ب", "ت"], "c": 0}, {"q": "ملنے پر حرف کی کیا بدلتی ہے؟||What changes when letters join?", "o": ["شکل · Shape", "نام · Name", "تعداد · Number"], "c": 0}, {"q": "ان میں کون سا حرف 'ب' ہے؟||Which is the letter 'ba'?", "o": ["ب", "ت", "ث"], "c": 0}]}}, {"id": "n-c1-taj-u2", "d": {"id": "n-c1-taj-u2", "type": "note", "grade": "1", "subject": "quran", "title": "Part 2: Harakat and Tanween · حرکات اور تنوین", "desc": "Our own revision notes made from the book, printed pp. 4-9 (Lessons 3-5). Pending review by a teacher.", "published": true, "builtin": true, "updated": 309, "src": {"kind": "link", "url": "/notes/c1-taj-unit2.pdf"}}}, {"id": "t-c1-taj-u2", "d": {"id": "t-c1-taj-u2", "type": "test", "grade": "1", "subject": "quran", "title": "Test 2: Harakat and Tanween · حرکات اور تنوین", "desc": "Questions written by IQRA on the topics of the book, printed pp. 4-9 (Lessons 3-5). Pending review by a teacher.", "published": true, "builtin": true, "updated": 310, "qs": [{"q": "'بَ' کیسے پڑھیں گے؟||How do we read 'بَ'?", "o": ["ba", "bi", "bu"], "c": 0}, {"q": "'بِ' کیسے پڑھیں گے؟||How do we read 'بِ'?", "o": ["bi", "ba", "bu"], "c": 0}, {"q": "'بُ' کیسے پڑھیں گے؟||How do we read 'بُ'?", "o": ["bu", "ba", "bi"], "c": 0}, {"q": "دو زبر، دو زیر یا دو پیش کو کیا کہتے ہیں؟||Double zabar, zer or pesh is called:", "o": ["تنوین · Tanween", "تشدید · Tashdeed", "سکون · Sukoon"], "c": 0}, {"q": "تنوین میں کون سی آواز اضافی آتی ہے؟||Which extra sound does tanween add?", "o": ["ن · n", "م · m", "ل · l"], "c": 0}]}}, {"id": "n-c1-taj-u3", "d": {"id": "n-c1-taj-u3", "type": "note", "grade": "1", "subject": "quran", "title": "Part 3: Standing Harakat and Madd Letters · کھڑی حرکات اور حروف مدہ و لین", "desc": "Our own revision notes made from the book, printed pp. 10-15 (Lessons 6-8). Pending review by a teacher.", "published": true, "builtin": true, "updated": 311, "src": {"kind": "link", "url": "/notes/c1-taj-unit3.pdf"}}}, {"id": "t-c1-taj-u3", "d": {"id": "t-c1-taj-u3", "type": "test", "grade": "1", "subject": "quran", "title": "Test 3: Standing Harakat and Madd Letters · کھڑی حرکات اور حروف مدہ و لین", "desc": "Questions written by IQRA on the topics of the book, printed pp. 10-15 (Lessons 6-8). Pending review by a teacher.", "published": true, "builtin": true, "updated": 312, "qs": [{"q": "حروف مدہ کتنے ہیں؟||How many madd letters are there?", "o": ["3", "2", "5"], "c": 0}, {"q": "ان میں حرف مدہ کون سا ہے؟||Which is a madd letter?", "o": ["ا", "ب", "ت"], "c": 0}, {"q": "مدہ پڑھتے وقت آواز کیسی ہوتی ہے؟||How is the sound in madd?", "o": ["لمبی · Long", "چھوٹی · Short", "خاموش · Silent"], "c": 0}, {"q": "کھڑا زبر کیا دیتا ہے؟||What does a standing zabar give?", "o": ["لمبی 'آ' کی آواز · A long 'aa' sound", "سکون · Silence", "تشدید · Doubling"], "c": 0}, {"q": "ان میں حرف مدہ کون سا نہیں ہے؟||Which is NOT a madd letter?", "o": ["ب", "و", "ی"], "c": 0}]}}, {"id": "n-c1-taj-u4", "d": {"id": "n-c1-taj-u4", "type": "note", "grade": "1", "subject": "quran", "title": "Part 4: Sukoon · سکون", "desc": "Our own revision notes made from the book, printed pp. 16-20 (Lessons 9-10). Pending review by a teacher.", "published": true, "builtin": true, "updated": 313, "src": {"kind": "link", "url": "/notes/c1-taj-unit4.pdf"}}}, {"id": "t-c1-taj-u4", "d": {"id": "t-c1-taj-u4", "type": "test", "grade": "1", "subject": "quran", "title": "Test 4: Sukoon · سکون", "desc": "Questions written by IQRA on the topics of the book, printed pp. 16-20 (Lessons 9-10). Pending review by a teacher.", "published": true, "builtin": true, "updated": 314, "qs": [{"q": "سکون کی علامت کون سی ہے؟||Which is the sukoon sign?", "o": ["ـْ", "ـّ", "ـَ"], "c": 0}, {"q": "سکون کا مطلب کیا ہے؟||What does sukoon mean?", "o": ["حرف ساکن ہے · No vowel", "حرف دوہرا ہے · Doubled", "آواز لمبی ہے · Long sound"], "c": 0}, {"q": "'اَبْ' میں 'ب' پر کیا ہے؟||In 'اَبْ', what is on 'ب'?", "o": ["سکون", "تشدید", "پیش"], "c": 0}, {"q": "ساکن حرف کو کس کے ساتھ ملا کر پڑھتے ہیں؟||A sukoon letter is joined with:", "o": ["پہلے حرف کے · The letter before it", "بعد والے حرف کے · The letter after", "کسی کے نہیں · None"], "c": 0}, {"q": "سکون کو اور کیا کہتے ہیں؟||What else is sukoon called?", "o": ["جزم", "شد", "مد"], "c": 0}]}}, {"id": "n-c1-taj-u5", "d": {"id": "n-c1-taj-u5", "type": "note", "grade": "1", "subject": "quran", "title": "Part 5: Tashdeed · تشدید", "desc": "Our own revision notes made from the book, printed pp. 21-25 (Lessons 11-14). Pending review by a teacher.", "published": true, "builtin": true, "updated": 315, "src": {"kind": "link", "url": "/notes/c1-taj-unit5.pdf"}}}, {"id": "t-c1-taj-u5", "d": {"id": "t-c1-taj-u5", "type": "test", "grade": "1", "subject": "quran", "title": "Test 5: Tashdeed · تشدید", "desc": "Questions written by IQRA on the topics of the book, printed pp. 21-25 (Lessons 11-14). Pending review by a teacher.", "published": true, "builtin": true, "updated": 316, "qs": [{"q": "تشدید کی علامت کون سی ہے؟||Which is the tashdeed sign?", "o": ["ـّ", "ـْ", "ـَ"], "c": 0}, {"q": "تشدید والے حرف کو کتنی بار پڑھتے ہیں؟||How many times do we read a letter with tashdeed?", "o": ["دو بار · Twice", "ایک بار · Once", "تین بار · Three times"], "c": 0}, {"q": "تشدید کو کیسے ادا کریں؟||How do we pronounce tashdeed?", "o": ["زور دے کر · With stress", "آہستہ سے چھوڑ کر · Skipping it", "ہنس کر · Laughing"], "c": 0}, {"q": "ان میں تشدید والا حرف کون سا ہے؟||Which has tashdeed?", "o": ["رَبَّ", "رَبْ", "رَبِ"], "c": 0}, {"q": "تشدید اور سکون میں فرق کیا ہے؟||What is the difference between tashdeed and sukoon?", "o": ["تشدید دوہری، سکون ساکن · Doubled vs still", "کوئی نہیں · None", "دونوں ایک ہیں · Same"], "c": 0}]}}, {"id": "n-c1-taj-u6", "d": {"id": "n-c1-taj-u6", "type": "note", "grade": "1", "subject": "quran", "title": "Part 6: Muqatta'at and Mixed Rules · حروف مقطعات اور متفرق قواعد", "desc": "Our own revision notes made from the book, printed pp. 26-28 (Lessons 15-16). Pending review by a teacher.", "published": true, "builtin": true, "updated": 317, "src": {"kind": "link", "url": "/notes/c1-taj-unit6.pdf"}}}, {"id": "t-c1-taj-u6", "d": {"id": "t-c1-taj-u6", "type": "test", "grade": "1", "subject": "quran", "title": "Test 6: Muqatta'at and Mixed Rules · حروف مقطعات اور متفرق قواعد", "desc": "Questions written by IQRA on the topics of the book, printed pp. 26-28 (Lessons 15-16). Pending review by a teacher.", "published": true, "builtin": true, "updated": 318, "qs": [{"q": "حروف مقطعات کہاں آتے ہیں؟||Where do muqatta'at letters come?", "o": ["بعض سورتوں کے شروع میں · At the start of some Surahs", "اخبار میں · In newspapers", "اسکول بیل میں · In school bell"], "c": 0}, {"q": "انہیں کیسے پڑھتے ہیں؟||How are they read?", "o": ["الگ الگ نام کے ساتھ · Letter by letter", "ایک لفظ بنا کر · As one word", "نہیں پڑھتے · Not read"], "c": 0}, {"q": "مثال کون سی ہے؟||Which is an example?", "o": ["الٓمٓ", "اَبَّ", "رَبْ"], "c": 0}, {"q": "مشق میں کیا ملا کر پڑھتے ہیں؟||What do we combine in practice?", "o": ["سب قواعد · All the rules", "صرف زبر · Only zabar", "صرف زیر · Only zer"], "c": 0}, {"q": "قرآن مجید کس زبان میں ہے؟||In which language is the Quran?", "o": ["عربی · Arabic", "انگریزی · English", "ہندی · Hindi"], "c": 0}]}}, {"id": "n-c1-taj-u7", "d": {"id": "n-c1-taj-u7", "type": "note", "grade": "1", "subject": "quran", "title": "Part 7: Short Surahs, Waqf Signs and Tajweed Colours · آخری سورتیں، رموز اوقاف اور رنگوں کے ساتھ تجوید", "desc": "Our own revision notes made from the book, printed pp. 29-33 (Lessons 17-19). Pending review by a teacher.", "published": true, "builtin": true, "updated": 319, "src": {"kind": "link", "url": "/notes/c1-taj-unit7.pdf"}}}, {"id": "t-c1-taj-u7", "d": {"id": "t-c1-taj-u7", "type": "test", "grade": "1", "subject": "quran", "title": "Test 7: Short Surahs, Waqf Signs and Tajweed Colours · آخری سورتیں، رموز اوقاف اور رنگوں کے ساتھ تجوید", "desc": "Questions written by IQRA on the topics of the book, printed pp. 29-33 (Lessons 17-19). Pending review by a teacher.", "published": true, "builtin": true, "updated": 320, "qs": [{"q": "رموز اوقاف کا کیا کام ہے؟||What do waqf signs do?", "o": ["رکنے کا بتاتے ہیں · Show where to stop", "آواز بند کرتے ہیں · Mute", "تیز پڑھاتے ہیں · Speed up"], "c": 0}, {"q": "رنگ کس لیے ہیں؟||What are the colours for?", "o": ["تجوید کے قاعدے سمجھنے کے لیے · To show tajweed rules", "سجاوٹ · Just decoration", "کھیل · Games"], "c": 0}, {"q": "قرآن کیسے پڑھیں؟||How should we read the Quran?", "o": ["صحیح تلفظ سے · With correct pronunciation", "جلدی جلدی · Very fast", "بغیر دھیان · Carelessly"], "c": 0}, {"q": "قرآن پڑھنے سے پہلے کیا کریں؟||What do we do before reciting?", "o": ["وضو اور بسم اللہ · Wudu and Bismillah", "کھیلنا · Play", "دوڑنا · Run"], "c": 0}, {"q": "قرآن پڑھنے کا ثواب کس سے ملتا ہے؟||Who gives the reward for reciting?", "o": ["اللہ · Allah", "اسکول · School", "دوست · Friend"], "c": 0}]}}, {"id": "b-c1-urdu", "d": {"id": "b-c1-urdu", "type": "book", "grade": "1", "subject": "urdu", "title": "Urdu Grade 1 · اردو جماعت اول", "desc": "Punjab Curriculum and Textbook Board, Lahore. Single National Curriculum 2020. Web version of the textbook (168 pages).", "published": true, "builtin": true, "updated": 321, "src": {"kind": "link", "url": "/books/pctb-1-urdu.pdf"}}}, {"id": "n-c1-urdu-u1", "d": {"id": "n-c1-urdu-u1", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 1: Qaida: Letters, Sounds and Words · حصہ اول: قاعدہ", "desc": "Our own revision notes made from the book, Qaida section, Term 1. Pending review by a teacher.", "published": true, "builtin": true, "updated": 322, "src": {"kind": "link", "url": "/notes/c1-urdu-unit1.pdf"}}}, {"id": "t-c1-urdu-u1", "d": {"id": "t-c1-urdu-u1", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 1: Qaida: Letters, Sounds and Words · حصہ اول: قاعدہ", "desc": "Questions written by IQRA on the topics of the book, Qaida section, Term 1. Pending review by a teacher.", "published": true, "builtin": true, "updated": 323, "qs": [{"q": "اردو حروف تہجی کا پہلا حرف کون سا ہے؟||Which is the first letter of the Urdu alphabet?", "o": ["ا", "ب", "پ"], "c": 0}, {"q": "'انار' کا پہلا حرف کون سا ہے؟||Which is the first letter of 'anaar'?", "o": ["ا", "ب", "ن"], "c": 0}, {"q": "'پنکھا' کس حرف سے شروع ہوتا ہے؟||'Pankha' starts with:", "o": ["پ", "ب", "ت"], "c": 0}, {"q": "ب + ا + ب سے کون سا لفظ بنتا ہے؟||Which word is made by ب + ا + ب?", "o": ["باب", "بات", "بار"], "c": 0}, {"q": "زبر کی آواز کون سی ہے؟||What sound does zabar make?", "o": ["اَ · a", "اِ · i", "اُ · u"], "c": 0}]}}, {"id": "n-c1-urdu-u2", "d": {"id": "n-c1-urdu-u2", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 2: Hamd and Naat · حمد اور نعت", "desc": "Our own revision notes made from the book, Lessons 1-2 (Part 2: Kitab, Term 2). Pending review by a teacher.", "published": true, "builtin": true, "updated": 324, "src": {"kind": "link", "url": "/notes/c1-urdu-unit2.pdf"}}}, {"id": "t-c1-urdu-u2", "d": {"id": "t-c1-urdu-u2", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 2: Hamd and Naat · حمد اور نعت", "desc": "Questions written by IQRA on the topics of the book, Lessons 1-2 (Part 2: Kitab, Term 2). Pending review by a teacher.", "published": true, "builtin": true, "updated": 325, "qs": [{"q": "اللہ کی تعریف میں پڑھی جانے والی نظم کو کیا کہتے ہیں؟||What is a poem in praise of Allah called?", "o": ["حمد", "نعت", "غزل"], "c": 0}, {"q": "نبی کریم ﷺ کی تعریف میں پڑھی جانے والی نظم کیا کہلاتی ہے؟||What is a poem in praise of the Prophet ﷺ called?", "o": ["نعت", "حمد", "لوری"], "c": 0}, {"q": "نعمتوں پر ہمیں کیا کرنا چاہیے؟||What should we do for blessings?", "o": ["شکر · Be thankful", "شکایت · Complain", "غرور · Be proud"], "c": 0}, {"q": "حمد کس کے لیے ہے؟||For whom is a hamd?", "o": ["اللہ · Allah", "استاد · Teacher", "دوست · Friend"], "c": 0}, {"q": "نظم کو کیسے پڑھتے ہیں؟||How do we read a poem?", "o": ["لے اور روانی سے · With rhythm and flow", "رک رک کر · Stop-start", "بغیر سنے · Without listening"], "c": 0}]}}, {"id": "n-c1-urdu-u3", "d": {"id": "n-c1-urdu-u3", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 3: The Last Messenger ﷺ and Working Together · آخری رسول ﷺ اور مل کر کام کریں", "desc": "Our own revision notes made from the book, Lessons 3-4. Pending review by a teacher.", "published": true, "builtin": true, "updated": 326, "src": {"kind": "link", "url": "/notes/c1-urdu-unit3.pdf"}}}, {"id": "t-c1-urdu-u3", "d": {"id": "t-c1-urdu-u3", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 3: The Last Messenger ﷺ and Working Together · آخری رسول ﷺ اور مل کر کام کریں", "desc": "Questions written by IQRA on the topics of the book, Lessons 3-4. Pending review by a teacher.", "published": true, "builtin": true, "updated": 327, "qs": [{"q": "اللہ کے آخری رسول کون ہیں؟||Who is the last Messenger of Allah?", "o": ["حضرت محمد ﷺ", "حضرت موسیٰ", "حضرت عیسیٰ"], "c": 0}, {"q": "ان میں حکم کا جملہ کون سا ہے؟||Which is a command sentence?", "o": ["سچ بولو۔", "وہ سچ بولتا ہے۔", "میں سچ بولتی ہوں۔"], "c": 0}, {"q": "مل کر کام کرنے کا کیا فائدہ ہے؟||What is the benefit of working together?", "o": ["کام آسان ہوتا ہے · Work becomes easy", "کام بڑھ جاتا ہے · More work", "کوئی نہیں · None"], "c": 0}, {"q": "بڑوں کے ساتھ ہمارا رویہ کیسا ہو؟||How should we behave with elders?", "o": ["ادب · Respect", "شرارت · Mischief", "بے رخی · Ignoring"], "c": 0}, {"q": "نبی ﷺ کا نام سن کر ہم کیا پڑھتے ہیں؟||What do we say on hearing the Prophet's ﷺ name?", "o": ["درود شریف · Durood", "ہائے · Alas", "کچھ نہیں · Nothing"], "c": 0}]}}, {"id": "n-c1-urdu-u4", "d": {"id": "n-c1-urdu-u4", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 4: Kiran's Family and My School · کرن کا گھرانا اور میرا سکول", "desc": "Our own revision notes made from the book, Lessons 5-6. Pending review by a teacher.", "published": true, "builtin": true, "updated": 328, "src": {"kind": "link", "url": "/notes/c1-urdu-unit4.pdf"}}}, {"id": "t-c1-urdu-u4", "d": {"id": "t-c1-urdu-u4", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 4: Kiran's Family and My School · کرن کا گھرانا اور میرا سکول", "desc": "Questions written by IQRA on the topics of the book, Lessons 5-6. Pending review by a teacher.", "published": true, "builtin": true, "updated": 329, "qs": [{"q": "'میں طالب علم ___۔' خالی جگہ میں کیا آئے گا؟||Fill the blank: 'Main talib-e-ilm ___.'", "o": ["ہوں", "ہے", "ہیں"], "c": 0}, {"q": "'بچہ' کی جمع کیا ہے؟||What is the plural of 'bacha'?", "o": ["بچے", "بچہیں", "بچی"], "c": 0}, {"q": "'کتاب' کی جمع کون سی ہے؟||What is the plural of 'kitaab'?", "o": ["کتابیں", "کتابے", "کتابہ"], "c": 0}, {"q": "'ہم بچے ___۔'||'Hum bachay ___.'", "o": ["ہیں", "ہے", "ہوں"], "c": 0}, {"q": "گھر کو کیسا رکھیں؟||How should we keep our home?", "o": ["صاف ستھرا · Clean", "گندا · Dirty", "خالی · Empty"], "c": 0}]}}, {"id": "n-c1-urdu-u5", "d": {"id": "n-c1-urdu-u5", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 5: Manners of Conversation and Little Iqbal · بات چیت کے آداب اور ننھے اقبال", "desc": "Our own revision notes made from the book, Lessons 7-8. Pending review by a teacher.", "published": true, "builtin": true, "updated": 330, "src": {"kind": "link", "url": "/notes/c1-urdu-unit5.pdf"}}}, {"id": "t-c1-urdu-u5", "d": {"id": "t-c1-urdu-u5", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 5: Manners of Conversation and Little Iqbal · بات چیت کے آداب اور ننھے اقبال", "desc": "Questions written by IQRA on the topics of the book, Lessons 7-8. Pending review by a teacher.", "published": true, "builtin": true, "updated": 331, "qs": [{"q": "بات چیت میں کیا کرنا چاہیے؟||What should we do in conversation?", "o": ["غور سے سننا · Listen carefully", "بات کاٹنا · Interrupt", "چیخنا · Shout"], "c": 0}, {"q": "'لڑکی' کیا ہے؟||What is 'ladki'?", "o": ["مؤنث · Feminine", "مذکر · Masculine", "جمع · Plural"], "c": 0}, {"q": "'بھائی' کیا ہے؟||What is 'bhai'?", "o": ["مذکر · Masculine", "مؤنث · Feminine", "فعل · Verb"], "c": 0}, {"q": "اقبال کا پورا نام کیا ہے؟||What is Iqbal's name as in the lesson?", "o": ["علامہ محمد اقبال", "علامہ طاہر", "قائداعظم"], "c": 0}, {"q": "سلام کے بعد گفتگو کیسی ہو؟||How should talking be?", "o": ["شائستہ · Polite", "اونچی · Loud", "کڑوی · Rude"], "c": 0}]}}, {"id": "n-c1-urdu-u6", "d": {"id": "n-c1-urdu-u6", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 6: A Walk in the Garden and What to Cook · باغ کی سیر اور آج کیا پکائیں؟", "desc": "Our own revision notes made from the book, Lessons 9-10. Pending review by a teacher.", "published": true, "builtin": true, "updated": 332, "src": {"kind": "link", "url": "/notes/c1-urdu-unit6.pdf"}}}, {"id": "t-c1-urdu-u6", "d": {"id": "t-c1-urdu-u6", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 6: A Walk in the Garden and What to Cook · باغ کی سیر اور آج کیا پکائیں؟", "desc": "Questions written by IQRA on the topics of the book, Lessons 9-10. Pending review by a teacher.", "published": true, "builtin": true, "updated": 333, "qs": [{"q": "باغ میں کیا ہوتا ہے؟||What is in a garden?", "o": ["پھول اور پودے · Flowers and plants", "گاڑیاں · Cars", "کتابیں · Books"], "c": 0}, {"q": "ماضی کے لیے کون سا لفظ آتا ہے؟||Which word shows the past?", "o": ["تھا", "ہے", "گا"], "c": 0}, {"q": "'وہ کل اسکول گیا ___۔'||'Woh kal school gaya ___.'", "o": ["تھا", "ہوں", "گا"], "c": 0}, {"q": "صحت مند خوراک کون سی ہے؟||Which is healthy food?", "o": ["پھل اور سبزی · Fruit and vegetables", "ٹافی · Sweets", "چپس · Chips"], "c": 0}, {"q": "پہیلی کیا ہوتی ہے؟||What is a riddle?", "o": ["بوجھنے والا سوال · A question to solve", "ایک گانا · A song", "ایک خط · A letter"], "c": 0}]}}, {"id": "n-c1-urdu-u7", "d": {"id": "n-c1-urdu-u7", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 7: Our Pakistan and What Shall I Wear · دیس ہمارا پاکستان اور میں کیا پہنوں؟", "desc": "Our own revision notes made from the book, Lessons 11-12. Pending review by a teacher.", "published": true, "builtin": true, "updated": 334, "src": {"kind": "link", "url": "/notes/c1-urdu-unit7.pdf"}}}, {"id": "t-c1-urdu-u7", "d": {"id": "t-c1-urdu-u7", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 7: Our Pakistan and What Shall I Wear · دیس ہمارا پاکستان اور میں کیا پہنوں؟", "desc": "Questions written by IQRA on the topics of the book, Lessons 11-12. Pending review by a teacher.", "published": true, "builtin": true, "updated": 335, "qs": [{"q": "پاکستانی پرچم کے رنگ کون سے ہیں؟||What colours is Pakistan's flag?", "o": ["ہرا اور سفید", "سرخ اور نیلا", "پیلا اور کالا"], "c": 0}, {"q": "ان میں فعل کون سا ہے؟||Which is a verb?", "o": ["کھانا", "لاہور", "بچہ"], "c": 0}, {"q": "ان میں اسم کون سا ہے؟||Which is a noun?", "o": ["لاہور", "جانا", "پڑھنا"], "c": 0}, {"q": "ملی نغمہ کیا ہے؟||What is a national song?", "o": ["وطن سے محبت کا گیت · Song of love for homeland", "کھیل · Game", "لوری · Lullaby"], "c": 0}, {"q": "پاکستان کا قومی لباس کون سا ہے؟||Which is Pakistan's national dress?", "o": ["شلوار قمیض · Shalwar kameez", "سوٹ ٹائی · Suit and tie", "کوٹ پینٹ · Coat pant"], "c": 0}]}}, {"id": "n-c1-urdu-u8", "d": {"id": "n-c1-urdu-u8", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 8: Traffic Lights and the Rainbow · چوک میں لگی بتیاں اور دھنک", "desc": "Our own revision notes made from the book, Lessons 13-14. Pending review by a teacher.", "published": true, "builtin": true, "updated": 336, "src": {"kind": "link", "url": "/notes/c1-urdu-unit8.pdf"}}}, {"id": "t-c1-urdu-u8", "d": {"id": "t-c1-urdu-u8", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 8: Traffic Lights and the Rainbow · چوک میں لگی بتیاں اور دھنک", "desc": "Questions written by IQRA on the topics of the book, Lessons 13-14. Pending review by a teacher.", "published": true, "builtin": true, "updated": 337, "qs": [{"q": "سرخ بتی کا کیا مطلب ہے؟||What does the red light mean?", "o": ["رک جاؤ · Stop", "چلو · Go", "تیز چلو · Go fast"], "c": 0}, {"q": "'میں کل اسکول جاؤں ___۔'||'Main kal school jaoon ___.'", "o": ["گا", "تھا", "ہے"], "c": 0}, {"q": "سوال کے آخر میں کون سی علامت لگتی ہے؟||Which mark ends a question?", "o": ["؟", "۔", "!"], "c": 0}, {"q": "جملے کے آخر میں کون سی علامت لگتی ہے؟||Which mark ends a statement?", "o": ["۔", "؟", "،"], "c": 0}, {"q": "دھنک کب نظر آتی ہے؟||When is a rainbow seen?", "o": ["بارش کے بعد دھوپ میں · After rain, with sun", "رات کو · At night", "اندھیرے میں · In darkness"], "c": 0}]}}, {"id": "n-c1-urdu-u9", "d": {"id": "n-c1-urdu-u9", "type": "note", "grade": "1", "subject": "urdu", "title": "Unit 9: Be Good, Spread Goodness · نیک بنو نیکی پھیلاؤ", "desc": "Our own revision notes made from the book, Lesson 15. Pending review by a teacher.", "published": true, "builtin": true, "updated": 338, "src": {"kind": "link", "url": "/notes/c1-urdu-unit9.pdf"}}}, {"id": "t-c1-urdu-u9", "d": {"id": "t-c1-urdu-u9", "type": "test", "grade": "1", "subject": "urdu", "title": "Test 9: Be Good, Spread Goodness · نیک بنو نیکی پھیلاؤ", "desc": "Questions written by IQRA on the topics of the book, Lesson 15. Pending review by a teacher.", "published": true, "builtin": true, "updated": 339, "qs": [{"q": "نیکی کیا ہے؟||What is 'neki'?", "o": ["اچھا کام · A good deed", "برا کام · A bad deed", "کھیل · A game"], "c": 0}, {"q": "ان میں اچھا کام کون سا ہے؟||Which is a good deed?", "o": ["کسی کی مدد کرنا · Helping someone", "لڑنا · Fighting", "جھوٹ بولنا · Lying"], "c": 0}, {"q": "'کتاب' کی جمع کیا ہے؟||What is the plural of 'kitaab'?", "o": ["کتابیں", "کتابے", "کتابا"], "c": 0}, {"q": "نیکی دوسروں تک کیسے پہنچائیں؟||How do we spread goodness?", "o": ["خود اچھا کر کے · By doing good ourselves", "لڑ کر · By fighting", "چھپ کر · By hiding"], "c": 0}, {"q": "سچ بولنا کیسی عادت ہے؟||Telling the truth is a ___ habit.", "o": ["اچھی · Good", "بری · Bad", "فضول · Useless"], "c": 0}]}}];
  BUILTIN_RES = BUILTIN_RES.filter(function (x) { return String(x.d.grade) !== "KG"; });
  var RES_ICON = { video: "🎬", note: "📄", book: "📚", test: "📝", guide: "🗣️" };
  var RES_TYPES = ["video", "note", "book", "test", "guide"];
  function safeUrl(u) { u = String(u || "").trim(); return (/^https:\/\//i.test(u) || /^\/_blob\//.test(u) || /^\/(books|notes)\/[\w.-]+\.pdf$/.test(u)) ? u : ""; }
  function ytId(u) { var m = String(u || "").match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{11})/); return m ? m[1] : ""; }
  function canRes() { return !ADMIN && cloud.on && isTeacher(); }
  function isAdminRes() { return !ADMIN && cloud.on && effRole() === "admin"; }
  function canEditRes(x) { return canRes() && (effRole() === "admin" || (x.d.author && x.d.author === cloud.uid)); }
  function resVisible(x) { return !!x.d.published || canEditRes(x); }
  function resFor(sid, g, type) {
    return BUILTIN_RES.concat(resDocs).filter(function (x) { return x.d.subject === sid && String(x.d.grade) === String(g) && (!type || x.d.type === type) && resVisible(x); })
      .sort(function (a, b) { return (a.d.updated || 0) - (b.d.updated || 0); });
  }
  function resById(id) { return BUILTIN_RES.concat(resDocs).filter(function (x) { return x.id === id; })[0]; }
  function resLines(s) { return String(s || "").split(/\n+/).map(function (x) { return x.trim(); }).filter(Boolean); }
  function parseTest(txt) {
    var qs = [];
    resLines(txt).forEach(function (line) {
      var p = line.split("|").map(function (s) { return s.trim(); });
      if (p.length < 4) return;
      var idx = "ABCD".indexOf(p[p.length - 1].toUpperCase().charAt(0)), opts = p.slice(1, -1);
      if (!p[0] || opts.length < 2 || opts.length > 4 || !opts.every(Boolean) || idx < 0 || idx >= opts.length || p[p.length - 1].length !== 1) return;
      qs.push({ q: p[0], o: opts, c: idx });
    });
    return qs;
  }
  function applyRes(snap) {
    resDocs = [];
    snap.docs.forEach(function (d) { var x = d.data(); if (x && x.type && x.subject) resDocs.push({ id: d.id, d: x }); });
    softRender();
  }

  // ===== mockup-style kid page pieces =====
  var G1 = "#a6e9db", G2 = "#d3f6ee", CR = "#f1fbf9", DK = "#0a7d80";
  var RC_ICON = {
    video: '<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><rect x="7" y="19" width="34" height="21" rx="3" fill="' + CR + '"/><path d="M7 13.500 41 8l1 7.500L8 21z" fill="' + CR + '"/><path d="M14 12l4 7M23 10.500l4 7M32 9l4 7" stroke="' + DK + '" stroke-width="3" stroke-linecap="round"/><path d="M21 25.500v10l9-5z" fill="' + DK + '"/></svg>',
    note: '<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><path d="M13 6h16l8 8v28a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="' + CR + '"/><path d="M29 6v8h8" fill="#e2d6a8"/><path d="M17 22h14M17 28h14M17 34h9" stroke="' + DK + '" stroke-width="3" stroke-linecap="round"/></svg>',
    book: '<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><rect x="8" y="30" width="32" height="9" rx="2" fill="#e8a33d"/><rect x="10" y="20" width="29" height="9" rx="2" fill="#4aa3d8"/><rect x="7" y="10" width="31" height="9" rx="2" fill="#e5604f"/><path d="M12 13.500h20M14 24.500h18M12 34.500h22" stroke="' + CR + '" stroke-width="2" stroke-linecap="round"/></svg>',
    test: '<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><path d="M10 6h20a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" fill="' + CR + '"/><path d="M13 15l2 2 4-4M13 24l2 2 4-4M13 33l2 2 4-4" stroke="' + DK + '" stroke-width="2.600" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 15h5M23 24h5M23 33h5" stroke="' + DK + '" stroke-width="2.600" stroke-linecap="round"/><path d="M42 12 26 36l-4 1 .6-4.500L38 9z" fill="#e8a33d" stroke="' + DK + '" stroke-width="1.600" stroke-linejoin="round"/></svg>',
    guide: '<svg viewBox="0 0 48 48" width="42" height="42" aria-hidden="true"><path d="M24 16c-4-3-10-3-16-1v23c6-2 12-2 16 1 4-3 10-3 16-1V15c-6-2-12-2-16 1z" fill="' + CR + '"/><path d="M24 16v23" stroke="' + DK + '" stroke-width="2.400"/><path d="M24 4l2 4.500 5 .5-3.700 3.300 1.100 4.900L24 14.600l-4.400 2.600 1.100-4.900L17 9l5-.5z" fill="' + G2 + '"/></svg>'
  };
  var RES_ORN = '<svg viewBox="0 0 120 14" width="120" height="14" aria-hidden="true"><path d="M2 8h40M78 8h40" stroke="' + G1 + '" stroke-width="1.600" stroke-linecap="round"/><path d="M60 1l2.200 4.500 5 .7-3.600 3.500.9 5L60 12.300 55.500 14.700l.9-5L52.800 6.200l5-.7z" fill="' + G1 + '"/></svg>';
  var STAR_FACE = '<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true"><path d="M32 5l7.500 15.500 17 2.400-12.300 12 2.900 17L32 43.800 16.900 51.900l2.900-17-12.300-12 17-2.400z" fill="#ffc933" stroke="#c98a00" stroke-width="3" stroke-linejoin="round"/><circle cx="25" cy="30" r="2.600" fill="#5a3b00"/><circle cx="39" cy="30" r="2.600" fill="#5a3b00"/><path d="M26 37c3 3.500 9 3.500 12 0" stroke="#5a3b00" stroke-width="2.600" fill="none" stroke-linecap="round"/><circle cx="22" cy="36" r="3" fill="#ff9d7a" opacity=".6"/><circle cx="42" cy="36" r="3" fill="#ff9d7a" opacity=".6"/></svg>';
  var KB_SKY = '<svg viewBox="0 0 160 90" width="160" height="90" aria-hidden="true"><path d="M30 14a22 22 0 1 0 22 30A17 17 0 0 1 30 14z" fill="' + G2 + '"/><path d="M70 22l1.800 4 4 .5-3 2.800.8 4-3.600-2-3.600 2 .8-4-3-2.800 4-.5zM110 12l1.300 2.800 3 .4-2.200 2 .6 3-2.700-1.500-2.700 1.500.6-3-2.200-2 3-.4z" fill="' + G2 + '" opacity=".9"/><circle cx="14" cy="60" r="2" fill="' + G2 + '" opacity=".7"/><circle cx="90" cy="48" r="1.600" fill="' + G2 + '" opacity=".7"/><path d="M0 90c20-28 52-30 80-12 20 12 50 14 80-4v16z" fill="#2a9a9c" opacity=".55"/></svg>';
  var KB_ART = '<svg viewBox="0 0 260 130" width="260" height="130" aria-hidden="true"><path d="M215 0v22" stroke="' + G1 + '" stroke-width="2"/><path d="M206 22h18l-2 6h-14z" fill="' + G1 + '"/><rect x="203" y="28" width="24" height="42" rx="7" fill="' + G2 + '" stroke="' + G1 + '" stroke-width="3"/><rect x="211" y="36" width="8" height="26" rx="4" fill="#ffb347"/><path d="M206 70h18l-3 7h-12z" fill="' + G1 + '"/><path d="M20 105c-14-6-16-28-4-42 4 16 14 24 24 26-2 10-10 20-20 16zM44 110c-4-16 6-34 24-40 0 16-8 32-24 40z" fill="#2e9e57" opacity=".85"/><path d="M60 92c24-9 44-9 70 0l-4 20c-24-8-44-8-66 0z" fill="#b57b3b"/><path d="M130 92c20-8 44-8 70 0 2 8 2 14 0 20-22-8-44-8-66 0z" fill="#9a6428"/><path d="M62 88c22-12 44-12 68 4v-34c-24-14-46-14-68-4zM130 92c24-16 46-16 68-4V54c-22-10-44-10-68 4z" fill="' + CR + '" stroke="' + G1 + '" stroke-width="2"/><path d="M72 66c14-6 28-6 42 2M72 76c14-6 28-6 42 2M146 68c14-8 28-8 42-2M146 78c14-8 28-8 42-2" stroke="#d6c58a" stroke-width="2.200" fill="none" stroke-linecap="round"/><path d="M96 120l36-30M168 120l-36-30" stroke="#8a5a22" stroke-width="5" stroke-linecap="round"/></svg>';
  var KS_ART = '<svg viewBox="0 0 220 90" width="220" height="90" aria-hidden="true"><path d="M70 62c18-10 36-10 52 2l32-6c-14-8-30-10-46-4-14-8-28-8-38-2z" fill="#f2e6c2" stroke="' + G1 + '" stroke-width="2"/><path d="M122 64c14-8 30-8 52-2" stroke="' + G1 + '" stroke-width="2" fill="none"/><path d="M178 70c10-16 22-24 34-26-2 12-12 24-34 26zM56 70C44 56 32 50 20 50c2 12 14 24 36 20z" fill="#7fb98d" opacity=".7"/></svg>';
  var KB_PHOTO = "data:image/webp;base64,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";
  function kidBanner(text) {
    var m = String(text).match(/^(.*?[.!?۔؟])\s+(.+)$/), a = m ? m[1] : String(text), b = m ? m[2] : "";
    var orb = window.IQRA_ORB ? '<img alt="" src="' + window.IQRA_ORB + '">' : mascot("happy", 90);
    return '<div class="kbanner"><span class="kb-sky">' + KB_SKY + '</span><span class="kb-orb">' + orb + '</span><p class="kb-text"><span>' + esc(a) + "</span>" + (b ? " <em>" + esc(b) + "</em>" : "") +
      '</p><button type="button" class="kb-say" data-act="speak" data-arg="' + esc(text) + '" aria-label="' + esc(t("listen")) + '">' + svg("speaker", 28) + '</button><span class="kb-art kb-photo"><img alt="" src="' + KB_PHOTO + '"></span></div>';
  }
  function kidSubjBanner(s) {
    var nm = L(s), sub = LANG() === "ur" ? "آئیے مل کر " + nm + " سیکھیں۔" : "Let's learn " + nm + " together.";
    return '<div class="ksubj">' + picon(s.id) + '<div class="ksubj-t"><h2>' + esc(nm) + "</h2><p>" + esc(sub) + '</p></div><span class="ksubj-art">' + KS_ART + "</span></div>";
  }
  function gameCard(l) {
    var miss = missingStudy(l.id);
    var letters = l.subject === "urdu" ? ["ا", "ب", "پ"] : l.subject === "english" ? ["A", "B", "C"] : null;
    var cards = letters ? '<span class="gc-cards" aria-hidden="true"><i class="c1" lang="' + (l.subject === "urdu" ? "ur" : "en") + '">' + letters[0] + '</i><i class="c2" lang="' + (l.subject === "urdu" ? "ur" : "en") + '">' + letters[1] + '</i><i class="c3" lang="' + (l.subject === "urdu" ? "ur" : "en") + '">' + letters[2] + "</i></span>" : "";
    var sub = LANG() === "ur" ? "آئیں کھیلیں اور سیکھیں!" : "Let's play and learn!";
    return '<div class="gamecard"><span class="gc-star">' + STAR_FACE + '</span><div class="gc-t"><h3>' + esc(L(l.title)) + "</h3><p>" + esc(sub) + "</p></div>" + cards +
      '<button type="button" class="gc-play' + (miss ? " lockd" : "") + '" data-act="openLesson" data-arg="' + esc(miss || l.id) + '"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M7 9h10a4 4 0 0 1 4 4v2a3 3 0 0 1-5.200 2L14.500 15.500h-5L8.200 17A3 3 0 0 1 3 15v-2a4 4 0 0 1 4-4z" fill="currentColor"/><path d="M8 11v3M6.500 12.500h3" stroke="' + DK + '" stroke-width="1.400" stroke-linecap="round"/></svg>' + esc(miss ? "🔒 " + lockText() : rt("play_now")) + "</button></div>";
  }
  function resHub(sid, g) {
    if (!sid) return "";
    var h = '<section class="reshub card"><h3 class="reshead">' + esc(rt("hub")) + '</h3><div class="resorn">' + RES_ORN + '</div><div class="rctabs" role="tablist">';
    RES_TYPES.forEach(function (k) {
      var n = resFor(sid, g, k).length;
      h += '<button type="button" role="tab" aria-selected="' + (resTab === k ? "true" : "false") + '" class="rctab' + (resTab === k ? " on" : "") + '" data-act="resTab" data-arg="' + k + '"><span class="rcic">' + RC_ICON[k] + (n ? '<i class="rccount">' + n + "</i>" : "") + "</span><b>" + esc(rt(k)) +
        '</b><span class="rcsub"><small>' + esc(rt("sub_" + k)) + '</small><svg class="rcgo dir" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.600" stroke-linecap="round" stroke-linejoin="round"/></svg></span></button>';
    });
    h += "</div>";
    if (resMsg) h += '<p class="note" aria-live="polite">' + esc(resMsg) + "</p>";
    if (resForm) return h + resFormHTML() + "</section>";
    var items = resFor(sid, g, resTab);
    if (!items.length) h += '<div class="resempty"><span class="resstar">' + STAR_FACE + "</span><span>" + esc(rt("none")) + "</span></div>";
    items.forEach(function (x) { h += resCard(x); });
    if (canRes()) h += '<button type="button" class="btn alt resadd" data-act="resNew" data-arg="' + resTab + "|" + esc(sid) + "|" + esc(g) + '">+ ' + esc(rt("add_" + resTab)) + "</button>";
    return h + "</section>";
  }
  function resAdminBar(x) {
    if (x.d.builtin || !canEditRes(x)) return "";
    return '<div class="resadmin">' + (x.d.type === "note" && !x.d.src ? "" : '<button type="button" class="icbtn" data-act="resEdit" data-arg="' + x.id + '">' + esc(rt("edit")) + "</button>") + '<button type="button" class="icbtn" data-act="resPub" data-arg="' + x.id + '">' + esc(rt(x.d.published ? "hide" : "show")) +
      '</button><button type="button" class="icbtn del' + (resArm === x.id ? " armed" : "") + '" data-act="resDel" data-arg="' + x.id + '">' + esc(rt(resArm === x.id ? "delArm" : "del")) + "</button></div>";
  }
  function resCard(x) {
    var d = x.d, h = '<article class="rescard" id="res-' + esc(x.id) + '"><h4>' + esc(d.title) + (d.published ? "" : ' <span class="badge pending">' + esc(rt("draft")) + "</span>") + "</h4>";
    if (d.desc && d.type !== "guide") h += '<p class="small resdesc">' + esc(d.desc) + "</p>";
    if (d.type === "video") h += resVideoHTML(x);
    else if (d.type === "note" || d.type === "book") h += resFileHTML(x);
    else if (d.type === "test") h += resTestCard(x);
    else if (d.type === "guide") h += resGuideHTML(x);
    return h + resAdminBar(x) + "</article>";
  }
  function resVideoHTML(x) {
    var s = x.d.src || {}, u = safeUrl(s.url);
    if (s.kind === "yt" && /^[\w-]{11}$/.test(s.yt || "")) {
      if (resOpenId === x.id) return '<div class="resframe"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(s.yt) + '" title="' + esc(x.d.title) + '" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><a class="resalink" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(rt("openyt")) + "</a>";
      return '<div class="actions"><button type="button" class="bigbtn" data-act="resOpen" data-arg="' + x.id + '">▶ ' + esc(rt("play")) + '</button><a class="resalink" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(rt("openyt")) + "</a></div>";
    }
    if (!u) return "";
    if (s.kind === "asset") return '<video class="resvideo" controls preload="none" playsinline src="' + esc(u) + '"></video>';
    return '<div class="actions"><a class="bigbtn" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">▶ ' + esc(rt("open")) + "</a></div>";
  }
  function resFileHTML(x) {
    var d = x.d, s = d.src || {}, u = safeUrl(s.url), h = "";
    if (d.type === "book" && d.en) h += '<p class="small"><span class="badge inreview">' + esc(rt("engBook")) + "</span></p>";
    if (u) h += '<div class="actions">' + (/\.pdf($|[?#])/i.test(u) ? '<button type="button" class="bigbtn" data-act="readBook" data-arg="res:' + esc(x.id) + '">📖 ' + esc(rt("open")) + "</button>" : '<a class="bigbtn" href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(rt("open")) + "</a>") + (s.kind === "asset" ? '<a class="bigbtn alt" href="' + esc(u) + '" download>' + esc(rt("download")) + "</a>" : "") + "</div>";
    if (d.type === "note" && Array.isArray(d.sections)) {
      h += '<p class="small"><span class="badge inreview">' + esc(rt("autoNoHelp")) + "</span></p>";
      d.sections.forEach(function (sc, i) {
        h += '<details class="resnote"' + (d.sections.length === 1 ? " open" : "") + '><summary dir="auto"><b>' + esc(sc.t || (rt("noteChap") + " " + (i + 1))) + '</b></summary><ul dir="auto">';
        (sc.pts || []).forEach(function (p) { h += "<li>" + esc(p) + "</li>"; });
        h += "</ul></details>";
      });
    }
    if (d.type === "book" && u && /\.pdf($|[?#])/i.test(u) && isAdminRes() && resAssets && resAssets.generate && !d.builtin)
      h += '<button type="button" class="btn alt" data-act="resAutoMake" data-arg="' + x.id + '"' + (autoBusy ? " disabled" : "") + ">" + esc(rt("autoBtn")) + "</button>" + (autoMsg && autoBook === x.id ? '<p class="note" id="automsg" aria-live="polite">' + esc(autoMsg) + "</p>" : "");
    if (d.type === "book" && d.en) {
      var gs = resDocs.filter(function (y) { return y.d.type === "guide" && y.d.bookId === x.id && resVisible(y); })[0];
      if (gs) h += '<button type="button" class="btn alt" data-act="resShowGuide" data-arg="' + gs.id + '">🗣️ ' + esc(rt("guideBtn")) + "</button>";
      else if (canRes()) h += '<button type="button" class="btn alt" data-act="resGuideFrom" data-arg="' + x.id + '">🗣️ ' + esc(rt("mkGuide")) + "</button>";
    }
    return h;
  }
  var AUTH = { "t-c1-math": "Sadia Jabeen", "t-c1-eng": "Maryam Zafar", "t-c1-gk": "طاہر محمود", "t-c1-ethics": "ڈاکٹر جمیل الرحمان، مہر صفدر ولید، شمس الرحمان", "t-c1-isl": "معظم ادریس", "t-c1-taj": "ڈاکٹر ابوالحسن محمد شاہ الازہری، علامہ زاہد نبی سیفی، علامہ غلام علی", "t-c1-urdu": "تاج محمد، محمد عثمان طفیل" };
  function authorLine(x) {
    if (x.d.ai) return '<p class="small authorl">🤖 ' + esc(rt("autoNoHelp")) + "</p>";
    var k, a = ""; for (k in AUTH) if (x.id.indexOf(k) === 0) a = AUTH[k];
    return '<p class="small authorl">✍️ ' + esc(LANG() === "ur" ? "مصنف" : "Writer") + ": <span dir=\"auto\">" + esc(a || "PCTB") + "</span> · PCTB</p>";
  }
  function resTestCard(x) {
    var qs = x.d.qs || [], sc = (state.resScore || {})[x.id];
    if (resRun && resRun.id === x.id) return resTestRun(x);
    var h = authorLine(x) + '<p class="small">' + qs.length + " " + esc(rt("qcount")) + (sc ? " · " + esc(rt("last")) + ": " + sc.s + "/" + sc.t + " · " + esc(rt("best")) + ": " + sc.best + "/" + sc.t : "") + "</p>";
    var mt = missingStudy(x.id);
    if (mt) return h + '<button type="button" class="bigbtn lockd" data-act="openLesson" data-arg="' + esc(mt) + '">🔒 ' + esc(lockText()) + "</button>";
    return h + '<button type="button" class="bigbtn" data-act="resStart" data-arg="' + x.id + '">' + esc(rt("start")) + "</button>";
  }
  function resTestRun(x) {
    var qs = x.d.qs || [], r = resRun, h = '<div class="restest">' + authorLine(x);
    qs.forEach(function (q, i) {
      var qp = String(q.q).split("||"); h += '<fieldset class="resq"><legend>' + (i + 1) + ". " + (qp.length === 2 ? '<span dir="rtl" lang="ur">' + esc(qp[0]) + '</span><br><span dir="ltr" lang="en">' + esc(qp[1]) + "</span>" : esc(q.q)) + "</legend>";
      q.o.forEach(function (o, j) {
        var cls = r.done ? (j === q.c ? " right" : (r.ans[i] === j ? " wrong" : "")) : "";
        h += '<label class="resopt' + cls + '"><input type="radio" name="rq' + i + '" value="' + j + '"' + (r.ans[i] === j ? " checked" : "") + (r.done ? " disabled" : "") + "> " + esc(o) + "</label>";
      });
      h += "</fieldset>";
    });
    if (!r.done) return h + '<button type="button" class="bigbtn" data-act="resSubmit">' + esc(rt("submit")) + "</button></div>";
    var pass = qs.length && r.s / qs.length >= 0.6, ur2 = LANG() === "ur";
    return h + '<p class="bigtext center">' + esc(rt("score")) + ": " + r.s + "/" + qs.length + "</p>" + (pathTest === x.id ? '<p class="bigtext small center">' + esc(pass ? (ur2 ? "✅ شاباش! یہ سبق مکمل ہوا۔ اگلا سبق کھل گیا۔" : "✅ Well done! Lesson complete. The next lesson is open.") : (ur2 ? "کم از کم 60٪ نمبر چاہییں۔ سبق دوبارہ دیکھیں اور پھر کوشش کریں۔" : "You need at least 60%. Look at the lesson again and try once more.")) + "</p>" : "") + '<div class="actions">' + (pathTest === x.id && pass ? '<button type="button" class="bigbtn" data-act="pathBack">' + esc(ur2 ? "اگلا سبق ‹" : "Next lesson ›") + "</button>" : "") + '<button type="button" class="bigbtn' + (pathTest === x.id && pass ? " alt" : "") + '" data-act="resAgain" data-arg="' + x.id + '">' + esc(rt("again")) + "</button></div></div>";
  }
  function resGuideHTML(x) {
    var d = x.d, h = '<details class="resguide"' + (resOpenId === x.id ? " open" : "") + ' lang="ur" dir="rtl"><summary><b>🗣️ ' + esc(rt("guide")) + "</b> " + (d.ai ? '<span class="badge inreview">' + esc(rt("aiNote")) + "</span>" : "") + "</summary>";
    resLines(d.summary).forEach(function (line) {
      h += '<div class="blkrow"><button type="button" class="chip lightchip sq" data-act="speak" data-arg="' + esc(line) + '" aria-label="' + esc(rt("play")) + '">' + svg("speaker", 26) + '</button><p class="blk" dir="rtl">' + esc(line) + "</p></div>";
    });
    var ws = resLines(d.words);
    if (ws.length) {
      h += "<h5>" + esc(rt("words")) + '</h5><dl class="reswords">';
      ws.forEach(function (w) { var i = w.indexOf("="); h += i > 0 ? "<dt dir=\"ltr\">" + esc(w.slice(0, i).trim()) + "</dt><dd>" + esc(w.slice(i + 1).trim()) + "</dd>" : "<dt></dt><dd>" + esc(w) + "</dd>"; });
      h += "</dl>";
    }
    var tp = resLines(d.tips);
    if (tp.length) { h += "<h5>" + esc(rt("tips")) + "</h5><ul>"; tp.forEach(function (x2) { h += "<li>" + esc(x2) + "</li>"; }); h += "</ul>"; }
    var b = d.bookId ? resById(d.bookId) : null;
    if (b) h += '<p class="small" dir="auto">📚 ' + esc(b.d.title) + "</p>";
    return h + "</details>";
  }

  // ---- teacher/admin form ----
  function newRF(type, sid, g) { return { id: "", type: type, grade: String(g), subject: sid, title: "", desc: "", link: "", file: null, en: false, qtext: "", bookId: "", stext: "", summary: "", words: "", tips: "", pub: type !== "guide", ai: false, busy: "" }; }
  function readRF() {
    if (!resForm) return;
    var f = resForm;
    function v(id) { var e = root.querySelector(id); return e ? e.value : null; }
    function c(id) { var e = root.querySelector(id); return e ? e.checked : null; }
    var m = { "#rfgrade": "grade", "#rfsubj": "subject", "#rftitle": "title", "#rfdesc": "desc", "#rflink": "link", "#rfqs": "qtext", "#rfbook": "bookId", "#rfstext": "stext", "#rfsum": "summary", "#rfwords": "words", "#rftips": "tips" };
    Object.keys(m).forEach(function (k) { var x = v(k); if (x !== null) f[m[k]] = x; });
    var en = c("#rfen"); if (en !== null) f.en = en;
    var pb = c("#rfpub"); if (pb !== null) f.pub = pb;
  }
  function resFormHTML() {
    var f = resForm, subs = classSubjects(f.grade);
    if (!subs.some(function (x) { return x.id === f.subject; })) f.subject = subs[0] ? subs[0].id : "";
    var h = '<div class="resform">';
    if (f.id) {
      h += "<label>" + esc(rt("ftype")) + '<select id="rftype">';
      RES_TYPES.forEach(function (k) { h += '<option value="' + k + '"' + (f.type === k ? " selected" : "") + ">" + esc(rt(k)) + "</option>"; });
      h += "</select></label><label>" + esc(rt("fgrade")) + '<select id="rfgrade">';
      D.grades.forEach(function (g) { h += '<option value="' + g + '"' + (String(f.grade) === String(g) ? " selected" : "") + ">" + esc(gradeLabel(g)) + "</option>"; });
      h += "</select></label><label>" + esc(rt("fsubj")) + '<select id="rfsubj">';
      subs.forEach(function (x) { h += '<option value="' + x.id + '"' + (f.subject === x.id ? " selected" : "") + ">" + esc(L(x)) + "</option>"; });
    } else {
      var sj = subs.filter(function (x) { return x.id === f.subject; })[0];
      h += '<p class="formwhere"><b>' + esc(rt(f.type)) + "</b> \u00b7 " + esc(gradeLabel(f.grade)) + " \u00b7 " + esc(sj ? L(sj) : "") + '</p><div hidden><select id="rftype"><option value="' + esc(f.type) + '" selected></option></select><select id="rfgrade"><option value="' + esc(f.grade) + '" selected></option></select><select id="rfsubj"><option value="' + esc(f.subject) + '" selected></option></select></div>';
    }
    h += (f.id ? "</select></label>" : "") + "<label>" + esc(rt("ftitle")) + '<input id="rftitle" value="' + esc(f.title) + '"></label>';
    if (f.type !== "guide") h += "<label>" + esc(rt("fdesc")) + '<input id="rfdesc" value="' + esc(f.desc) + '"></label>';
    if (f.type === "video" || f.type === "note" || f.type === "book") {
      h += "<label>" + esc(rt("flink")) + '<input id="rflink" type="url" inputmode="url" dir="ltr" placeholder="https://" value="' + esc(f.link) + '"></label>';
      if (isAdminRes() && resAssets) {
        h += "<label>" + esc(rt(f.type === "video" ? "fupload" : "fuploadBook")) + '<input id="rffile" type="file" accept="' + (f.type === "video" ? "video/*" : "application/pdf,image/*") + '"' + (f.type === "video" ? "" : " multiple") + (f.busy ? " disabled" : "") + "></label>";
        if (f.file) h += '<p class="small">✅ ' + esc(rt("file")) + ": " + esc(f.file.name || "") + "</p>";
      }
      if (f.type === "book") h += '<label class="inl"><input type="checkbox" id="rfen"' + (f.en ? " checked" : "") + "> " + esc(rt("fen")) + "</label>";
    }
    if (f.type === "test") h += "<label>" + esc(rt("fqs")) + '<textarea id="rfqs" rows="7" dir="auto">' + esc(f.qtext) + '</textarea></label><p class="small">' + esc(rt("fqsHint")) + "</p>";
    if (f.type === "guide") {
      var books = resFor(f.subject, f.grade, "book");
      h += "<label>" + esc(rt("fbook")) + '<select id="rfbook"><option value="">' + esc(rt("none2")) + "</option>";
      books.forEach(function (b) { h += '<option value="' + esc(b.id) + '"' + (f.bookId === b.id ? " selected" : "") + ">" + esc(b.d.title) + "</option>"; });
      h += "</select></label><label>" + esc(rt("fstext")) + '<textarea id="rfstext" rows="5" dir="ltr">' + esc(f.stext) + '</textarea></label>';
      h += '<button type="button" class="btn alt" data-act="resAI"' + (f.busy === "ai" ? " disabled" : "") + ">✨ " + esc(rt("aiBtn")) + "</button>";
      h += "<label>" + esc(rt("fsum")) + '<textarea id="rfsum" rows="6" dir="rtl" lang="ur">' + esc(f.summary) + "</textarea></label>";
      h += "<label>" + esc(rt("fwords")) + '<textarea id="rfwords" rows="5" dir="auto">' + esc(f.words) + "</textarea></label>";
      h += "<label>" + esc(rt("ftips")) + '<textarea id="rftips" rows="4" dir="rtl" lang="ur">' + esc(f.tips) + "</textarea></label>";
    }
    h += '<label class="inl"><input type="checkbox" id="rfpub"' + (f.pub ? " checked" : "") + "> " + esc(rt("fpub")) + "</label>";
    return h + '<div class="actions"><button type="button" class="btn" data-act="resSave"' + (f.busy ? " disabled" : "") + ">" + esc(rt("save")) + '</button><button type="button" class="btn alt" data-act="resCancel">' + esc(rt("cancel")) + "</button></div></div>";
  }
  function resMsgShow(k) { resMsg = rt(k); render(); }
  function resSave() {
    readRF();
    var f = resForm, ex = f.id ? resById(f.id) : null;
    if (!f.title.trim()) return resMsgShow("needTitle");
    var doc = { type: f.type, grade: String(f.grade), subject: f.subject, title: f.title.trim(), desc: (f.desc || "").trim(), published: !!f.pub, author: ex && ex.d.author ? ex.d.author : cloud.uid, updated: Date.now() };
    if (f.type === "video" || f.type === "note" || f.type === "book") {
      var link = (f.link || "").trim();
      if (f.file) doc.src = { kind: "asset", id: f.file.id, url: f.file.url, name: f.file.name || "" };
      else if (link) {
        var y = f.type === "video" ? ytId(link) : "";
        if (y && safeUrl(link)) doc.src = { kind: "yt", yt: y, url: link };
        else if (safeUrl(link)) doc.src = { kind: "link", url: link };
        else return resMsgShow("needHttps");
      } else return resMsgShow("needSrc");
      if (f.type === "book") doc.en = !!f.en;
    } else if (f.type === "test") {
      var qs = parseTest(f.qtext);
      if (!qs.length) return resMsgShow("needQs");
      doc.qs = qs; doc.qtext = f.qtext;
    } else if (f.type === "guide") {
      if (!f.summary.trim()) return resMsgShow("needSum");
      doc.summary = f.summary.trim(); doc.words = f.words.trim(); doc.tips = f.tips.trim(); doc.bookId = f.bookId || ""; doc.ai = !!f.ai;
    }
    doc = JSON.parse(JSON.stringify(doc));
    var id = f.id || "res-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    resForm.busy = "save";
    cloud.db.collection("resources").doc(id).set(doc).then(function () {
      resMsg = rt("saved"); resTab = f.type; resForm = null; render();
      if (!f.id && f.type === "book" && doc.src && doc.src.kind === "asset" && /\.pdf($|[?#])/i.test(doc.src.url || "") && isAdminRes() && resAssets && resAssets.generate) autoMake(id);
    }).catch(function (e) { cloudFail(e); if (resForm) resForm.busy = ""; resMsgShow("cloudErr2"); });
  }

  // ---- auto notes / tests / Urdu guide (all saved as drafts) ----
  function autoSay(m, redo) {
    autoMsg = m || "";
    var e = document.getElementById("automsg");
    if (e && m) e.textContent = m; else if (!resForm && (redo || !e)) { render(); var e2 = document.getElementById("automsg"); if (e2 && e2.scrollIntoView) e2.scrollIntoView({ block: "center" }); }
  }
  function autoChapters(paras) {
    var secs = [], cur = null;
    function push() { if (cur && cur.text.length >= 400) secs.push(cur); cur = null; }
    var heads = paras.filter(function (p) { return p.t === "h" && p.lv === 1; }).length;
    paras.forEach(function (p) {
      if (p.t === "h" && p.lv === 1 && heads >= 2) { push(); cur = { title: p.s, text: "" }; return; }
      if (!cur) cur = { title: "", text: "" };
      cur.text += (cur.text ? "\n" : "") + (p.t === "h" ? "## " : "") + p.s;
    });
    push();
    var out = [];
    secs.forEach(function (sc) {   // long parts are cut into pieces of about 8000 characters
      var parts = Math.ceil(sc.text.length / 8000), size = Math.ceil(sc.text.length / parts);
      for (var i = 0; i < parts; i++) out.push({ title: (sc.title || "") + (parts > 1 ? " (" + (i + 1) + "/" + parts + ")" : ""), text: sc.text.slice(i * size, (i + 1) * size) });
    });
    secs = out.slice(0, 30);
    secs.forEach(function (sc, i) { if (!sc.title.trim()) sc.title = (LANG() === "ur" ? "حصہ " : "Part ") + (i + 1); });
    return secs;
  }
  function autoPut(id, doc) {
    var ex = resById(id), pub = ex ? !!ex.d.published : false;
    doc = Object.assign({ published: pub, ai: true, auto: true, author: cloud.uid, updated: Date.now() }, doc);
    return cloud.db.collection("resources").doc(id).set(JSON.parse(JSON.stringify(doc)));
  }
  function autoMake(bookId) {
    var b = resById(bookId);
    if (autoBusy || !b || !resAssets || !resAssets.generate) return;
    var u = b.d.src && b.d.src.url; if (!u) return;
    autoBusy = true; autoBook = bookId; autoSay(rt("autoRead"), true);
    withReader(function () {
      window.IQReader.textOf(u, function (f) { autoSay(rt("autoRead") + " " + Math.round(f * 100) + "%"); }).then(function (d) {
        if (!d || !d.ok || !d.paras.length) { autoBusy = false; autoSay(rt("autoNoText"), true); return; }
        var secs = autoChapters(d.paras), lang = d.rtl ? "ur" : "en", wantGuide = lang === "en", done = 0, fail = 0, i = 0;
        if (!secs.length) { autoBusy = false; autoSay(rt("autoNoText"), true); return; }
        var notes = [], tests = [], guide = { summary: [], words: [], tips: [] }, seen = {};
        function next() {
          if (i >= secs.length) return Promise.resolve();
          var k = i++, sc = secs[k];
          return resAssets.generate({ text: sc.text, title: sc.title, grade: b.d.grade, subject: b.d.subject, lang: lang, guide: wantGuide }).then(function (r) {
            if (r.notes && r.notes.length) {
              var pts = r.notes;
              if (r.notesUr && r.notesUr.length === r.notes.length) { pts = []; r.notes.forEach(function (n1, ni) { pts.push(n1); pts.push(r.notesUr[ni]); }); }
              notes[k] = { t: sc.title, pts: pts };
            }
            if (r.questions && r.questions.length) tests[k] = { t: sc.title, qs: r.questions };
            if (r.guide) {
              if (r.guide.summary && r.guide.summary.length) { guide.summary.push(sc.title); r.guide.summary.forEach(function (x) { guide.summary.push(x); }); }
              (r.guide.words || []).forEach(function (w) { var kk = w.en.toLowerCase(); if (!seen[kk] && guide.words.length < 40) { seen[kk] = 1; guide.words.push(w.en + " = " + w.ur); } });
              (r.guide.tips || []).forEach(function (x) { if (guide.tips.length < 8) guide.tips.push(x); });
            }
          }).catch(function (e) { fail++; if (e && e.code === "ai not set up") fail += 1000; }).then(function () {
            done++; autoSay(rt("autoMaking") + " " + done + "/" + secs.length);
            return fail >= 1000 ? null : next();
          });
        }
        autoSay(rt("autoMaking") + " 0/" + secs.length);
        Promise.all([next(), next()]).then(function () {
          if (fail >= 1000) { autoBusy = false; autoSay(rt("autoNoAi"), true); return; }
          var base = { grade: b.d.grade, subject: b.d.subject, bookId: bookId }, jobs = [];
          var nn = notes.filter(Boolean);
          if (nn.length) jobs.push(autoPut("auto-" + bookId + "-notes", Object.assign({ type: "note", title: (LANG() === "ur" ? "نوٹس: " : "Notes: ") + b.d.title, desc: "", sections: nn }, base)));
          tests.forEach(function (t, k) {
            if (!t) return;
            var qtext = t.qs.map(function (q) { return [q.q].concat(q.o, ["ABCD".charAt(q.c)]).join(" | "); }).join("\n"), qs = parseTest(qtext);
            if (qs.length === t.qs.length) qs = qs.map(function (q, qi) {   // English books: Urdu question on top, options as "English / اردو"
              var u = t.qs[qi]; if (!u.qu || !u.ou) return q;
              return { q: u.qu.replace(/\|/g, " ") + "||" + q.q, o: q.o.map(function (o1, oi) { var o2 = String(u.ou[oi] || "").replace(/\|/g, " ").trim(); return !o2 || o2 === o1 || /^[\d\s.,+\-−×÷=%<>()]+$/.test(o1) ? o1 : o1 + " / " + o2; }), c: q.c };
            });
            if (qs.length) jobs.push(autoPut("auto-" + bookId + "-t" + k, Object.assign({ type: "test", title: (LANG() === "ur" ? "ٹیسٹ: " : "Test: ") + t.t, desc: "", qs: qs, qtext: qtext }, base)));
          });
          if (wantGuide && guide.summary.length) {
            jobs.push(autoPut("auto-" + bookId + "-guide", Object.assign({ type: "guide", title: (LANG() === "ur" ? "اردو رہنمائی: " : "Urdu guide: ") + b.d.title, summary: guide.summary.join("\n"), words: guide.words.join("\n"), tips: guide.tips.join("\n") }, base)));
            if (!b.d.en) jobs.push(cloud.db.collection("resources").doc(bookId).update({ en: true }));
          }
          if (!jobs.length) { autoBusy = false; autoSay(rt("autoFail"), true); return; }
          return Promise.all(jobs).then(function () { autoBusy = false; autoSay(fail ? rt("autoDone") + " " + rt("autoFail") : rt("autoDone"), true); });
        }).catch(function (e) { autoBusy = false; cloudFail(e); autoSay(rt("autoFail"), true); });
      }).catch(function () { autoBusy = false; autoSay(rt("autoNoText"), true); });
    });
  }
  function withToPdf(ok, bad) {
    if (window.IQToPdf) return ok();
    var sc = document.createElement("script"); sc.src = "lib/topdf.js"; sc.onload = ok; sc.onerror = bad; document.head.appendChild(sc);
  }
  function resUpload(files) {
    readRF();
    var list = !files ? [] : (files.length != null && !files.name ? Array.prototype.slice.call(files) : [files]);
    if (!list.length || !resAssets || !resForm) return;
    var f = resForm, lim = (window.IQRA_FILES_API ? 90 : 20) * 1024 * 1024;
    function isImg(x) { return /^image\//.test(x.type) || /\.(jpe?g|png|webp|gif|bmp)$/i.test(x.name || ""); }
    var allImg = list.every(isImg);
    if (!allImg && list.length > 1) return resMsgShow("mixFiles");
    function fail(e) { f.busy = ""; resMsg = rt("upFail") + (e && e.code ? " (" + e.code + ")" : ""); render(); }
    function send(file) {
      if (file.size > lim) { f.busy = ""; return resMsgShow("tooBig"); }
      resAssets.upload(file).then(function (r) { f.file = { id: r.id, url: r.url, name: file.name }; f.busy = ""; resMsgShow("uploaded"); }).catch(fail);
    }
    f.busy = "up";
    if (!allImg) { resMsgShow("uploading"); return send(list[0]); }
    resMsgShow("making");
    withToPdf(function () {
      window.IQToPdf.fromImages(list).then(function (blob) {
        var nm = ((f.title || "").trim() || String(list[0].name || "book").replace(/\.[^.]+$/, "")) + ".pdf";
        send(new File([blob], nm, { type: "application/pdf" }));
      }).catch(function (e) { if (e && e.code === "badimage") { f.busy = ""; resMsgShow("badImg"); } else fail(e); });
    }, fail);
  }
  function resAI() {
    readRF();
    var f = resForm;
    if (!f.stext.trim()) return resMsgShow("needSrc");
    window.claude.use("sample").then(function (sample) {
      if (!sample) return resMsgShow("aiNo");
      f.busy = "ai"; resMsgShow("aiWorking");
      var gl = String(f.grade) === "KG" ? "KG (kindergarten)" : "Class " + f.grade;
      var prompt = "You are helping a Pakistani teacher prepare an Urdu study guide for students of " + gl + ", for the chapter text below, which is written in English.\n" +
        "Write ONLY from the chapter text. Do not add facts that are not in it.\n" +
        "Return JSON only, with this exact shape: {\"summary\":[...],\"words\":[{\"en\":\"...\",\"ur\":\"...\"}],\"tips\":[...]}\n" +
        "- summary: 5 to 8 short, simple points in Urdu script that explain the chapter, suitable for the class level.\n" +
        "- words: 8 to 12 important or difficult English words from the text, each with its Urdu meaning in Urdu script.\n" +
        "- tips: 3 to 5 short Urdu tips on how to study and answer questions on this chapter.\n\nChapter text:\n" + f.stext.slice(0, 12000);
      return sample.json(prompt, { cache: false }).then(function (r) {
        var sm = (r && r.summary || []).map(String), ws = (r && r.words || []).map(function (w) { return String(w.en || "").trim() + " = " + String(w.ur || "").trim(); }), tp = (r && r.tips || []).map(String);
        if (!sm.length) throw new Error("empty");
        f.summary = sm.join("\n"); f.words = ws.join("\n"); f.tips = tp.join("\n"); f.ai = true; f.pub = false; f.busy = "";
        resMsgShow("aiDone");
      });
    }).catch(function () { f.busy = ""; resMsgShow("aiFail"); });
  }
  function resAct(name, arg) {
    switch (name) {
      case "resTab": resTab = arg; resForm = null; resMsg = ""; resRun = null; resArm = ""; render(); break;
      case "resOpen": resOpenId = arg; render(); break;
      case "resShowGuide": resTab = "guide"; resOpenId = arg; resMsg = ""; render(); var el = root.querySelector("#res-" + arg); if (el && el.scrollIntoView) el.scrollIntoView({ block: "start" }); break;
      case "resNew": var p = String(arg).split("|"); resMsg = ""; resForm = newRF(p[0], p[1], p[2]); render(); break;
      case "resAutoMake": autoMake(arg); break;
      case "resGuideFrom": var b = resById(arg); if (b) { resMsg = ""; resForm = newRF("guide", b.d.subject, b.d.grade); resForm.bookId = b.id; resForm.title = (LANG() === "ur" ? "اردو رہنمائی: " : "Urdu guide: ") + b.d.title; resTab = "guide"; render(); } break;
      case "resEdit":
        var x = resById(arg); if (!x) break;
        var d = x.d, s = d.src || {};
        resForm = { id: x.id, type: d.type, grade: String(d.grade), subject: d.subject, title: d.title || "", desc: d.desc || "", link: s.kind === "asset" ? "" : (s.url || ""), file: s.kind === "asset" ? { id: s.id, url: s.url, name: s.name } : null, en: !!d.en, qtext: d.qtext || "", bookId: d.bookId || "", stext: "", summary: d.summary || "", words: d.words || "", tips: d.tips || "", pub: !!d.published, ai: !!d.ai, busy: "" };
        resMsg = ""; render(); break;
      case "resCancel": resForm = null; resMsg = ""; render(); break;
      case "resSave": resSave(); break;
      case "resAI": resAI(); break;
      case "resPub": var y = resById(arg); if (y && canEditRes(y)) cloud.db.collection("resources").doc(arg).update({ published: !y.d.published, updated: Date.now() }).catch(function (e) { cloudFail(e); resMsgShow("cloudErr2"); }); break;
      case "resDel":
        if (resArm !== arg) { resArm = arg; render(); break; }
        resArm = ""; var z = resById(arg); if (z && canEditRes(z)) cloud.db.collection("resources").doc(arg).delete().catch(function (e) { cloudFail(e); resMsgShow("cloudErr2"); });
        break;
      case "resStart": { var _mt = missingStudy(arg); if (_mt) { openLesson = _mt; view = "learn"; resRun = null; render(); window.scrollTo(0, 0); break; } } resRun = { id: arg, ans: {}, done: false, s: 0 }; render(); break;
      case "resAgain": resRun = { id: arg, ans: {}, done: false, s: 0 }; render(); break;
      case "resSubmit":
        var t0 = resById(resRun && resRun.id); if (!t0) break;
        var qs = t0.d.qs || [], sc = 0;
        qs.forEach(function (q, i) { var sel = root.querySelector('input[name="rq' + i + '"]:checked'); resRun.ans[i] = sel ? Number(sel.value) : -1; if (resRun.ans[i] === q.c) sc++; });
        resRun.s = sc; resRun.done = true;
        state.resScore = state.resScore || {}; var prev = state.resScore[t0.id];
        state.resScore[t0.id] = { s: sc, t: qs.length, best: Math.max(sc, prev ? prev.best : 0), at: Date.now() }; save();
        render(); break;
    }
    return true;
  }
  if (root.addEventListener) root.addEventListener("change", function (e) {
    var tg = e.target; if (!tg || !resForm) return;
    if (tg.id === "rftype") { readRF(); resForm.type = tg.value; resMsg = ""; render(); }
    else if (tg.id === "rfgrade") { readRF(); render(); }
    else if (tg.id === "rfsubj") { readRF(); render(); }
    else if (tg.id === "rffile" && tg.files && tg.files[0]) resUpload(tg.files);
  });

  if (root.addEventListener) root.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("[data-act]") : null;
    if (el && !el.disabled) act(el.getAttribute("data-act"), el.getAttribute("data-arg"));
  });
  render();
  (function go(n){ if(window.__iqReady||n>6000){ var p=window.__iqProfile; if(p){ if(p.name) state.name=p.name; var g=String(p.cls||p.grade||""); state.grade=g==="F.A"?11:(/^\d+$/.test(g)?Number(g):"KG"); state.setup=true; state.view="learn"; save(); render(); } initCloud(); setTimeout(function(){window.scrollTo(0,0)},50); } else setTimeout(function(){go(n+1)},100); })(0);
  (function entryScreen() {
    if (ADMIN || STAFFPAGE || !window.IQRA_LOGO || !document.body) return;
    try { document.documentElement.style.setProperty("--logo", "url(" + window.IQRA_LOGO + ")"); } catch (e) {}
    var el = document.createElement("div"); el.id = "entry";
    var GSVG = '<svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.2C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.3 5.7c4.3-4 6.7-9.9 6.7-17.1z"/><path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.1.8-4.6l-7.9-6.2A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.2z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.9 2.3-8.6 2.3-6.3 0-11.6-4.1-13.5-9.9l-7.9 6.2C6.5 42.6 14.6 48 24 48z"/></svg>';
    var isReady = false, errMsg = "", freeOpen = null, boardSel = "all", clsSel = 0; /* freeOpen = { item, i } while a free lesson is being read */
    function ext(u) { return /^https:\/\/[^\s"<>]+$/i.test(u || "") ? u : ""; }
    function paint() {
      var ur = LANG() === "ur";
      el.setAttribute("dir", ur ? "rtl" : "ltr");
      var tx = function (en, u) { return ur ? u : en; };
      var cta = function (cls) { return '<button class="entry-go ' + (cls || "") + '" data-enter type="button"' + (isReady ? "" : " disabled") + ">" + GSVG + "<span>" + esc(tx("Sign in to study", "پڑھنے کے لیے سائن اِن کریں")) + "</span></button>"; };
      var libs = LIB_STARTER.filter(function (x) { return ext(x.url); }), docs = (D.sources || []).filter(function (x) { return ext(x.url); }).slice(0, 4), free = Array.isArray(window.IQRA_FREE) ? window.IQRA_FREE : [];
      var h = '<div class="lp-bar" role="banner"><span class="lp-brand">' + (window.IQRA_ORB ? '<img src="' + window.IQRA_ORB + '" alt="" width="34" height="34">' : "") + "<b>" + esc(tx("IQRA Digital School", "اقرا ڈیجیٹل اسکول")) + '</b></span><span class="lp-bar-r"><button class="entry-lang" data-elang type="button">' + esc(t("lang")) + '</button><button class="lp-signin" data-enter type="button"' + (isReady ? "" : " disabled") + ">" + esc(tx("Sign in", "سائن اِن")) + "</button></span></div>";
      h += '<main class="lp-main"><section class="lp-hero"><img class="lp-logo" src="' + window.IQRA_LOGO + '" alt="IQRA"><h1>' + esc(tx("Learn the Pakistani way", "اپنے نصاب کے ساتھ سیکھیں")) + '</h1><p class="lp-lead">' + esc(tx("Games, notes, tests and books for Pakistani children, built on the national curriculum and available in Urdu and English.", "پاکستانی بچوں کے لیے کھیل، نوٹس، ٹیسٹ اور کتابیں، قومی نصاب کی بنیاد پر، اردو اور انگریزی میں۔")) + "</p>" + cta("lp-cta") + '<p class="entry-err" aria-live="polite">' + esc(errMsg) + "</p></section>";
      var menuItems = [["lp-books", tx("Books", "کتابیں")], ["lp-notes", tx("Notes", "نوٹس")], ["lp-papers", tx("Past Papers", "پچھلے پرچے")], ["lp-syl", tx("Syllabus", "نصاب")], ["lp-free", tx("Free Study", "مفت مطالعہ")]];
      h += '<div class="lp-menu" role="navigation" aria-label="' + esc(tx("Explore", "دریافت کریں")) + '">' + menuItems.map(function (m) { return '<button type="button" data-go="' + m[0] + '">' + esc(m[1]) + "</button>"; }).join("") + "</div>";
      var boards = Array.isArray(window.IQRA_BOARDS) ? window.IQRA_BOARDS : [], books = (Array.isArray(window.IQRA_BOOKS) ? window.IQRA_BOOKS : []).filter(function (x) { return ext(x.url) && (boardSel === "all" || x.board === boardSel) && (!clsSel || Number(x.cls) === clsSel); });
      var linkCard = function (x, label) { return '<a class="lp-card" href="' + esc(ext(x.url)) + '" target="_blank" rel="noopener noreferrer"><i>' + esc((x.cls ? tx("Class ", "جماعت ") + x.cls : "") + (x.subject ? (x.cls ? " · " : "") + lt(x.subject) : "")) + "</i><b>" + esc(lt(x.title)) + "</b><em>" + esc(label) + " ↗</em></a>"; };
      var soon = function (en, u) { return '<div class="lp-card lp-soon"><b>' + esc(u === undefined || u === en ? en : tx(en, u)) + "</b><span>" + esc(tx("Sign in to study the full lessons meanwhile.", "اس دوران مکمل اسباق کے لیے سائن اِن کریں۔")) + "</span></div>"; };
      h += '<section class="lp-sec" id="lp-books"><h2>' + esc(tx("Books by class", "جماعت کے لحاظ سے کتابیں")) + "</h2><p>" + esc(tx("Choose your board and class. Links open the official board or publisher.", "اپنا بورڈ اور جماعت چنیں۔ لنک سرکاری بورڈ یا ناشر کی ویب سائٹ کھولتے ہیں۔")) + '</p><div class="lp-chips" role="group" aria-label="' + esc(tx("Board", "بورڈ")) + '"><button type="button" class="lp-chip" data-board="all" aria-pressed="' + (boardSel === "all") + '">' + esc(tx("All", "سب")) + "</button>" + boards.map(function (b) { return '<button type="button" class="lp-chip" data-board="' + esc(b.id) + '" aria-pressed="' + (boardSel === b.id) + '">' + esc(lt(b.name)) + "</button>"; }).join("") + '</div><div class="lp-chips" role="group" aria-label="' + esc(tx("Class", "جماعت")) + '"><button type="button" class="lp-chip" data-cls="0" aria-pressed="' + (!clsSel) + '">' + esc(tx("All classes", "تمام جماعتیں")) + "</button>";
      for (var ci = 1; ci <= 12; ci++) h += '<button type="button" class="lp-chip" data-cls="' + ci + '" aria-pressed="' + (clsSel === ci) + '">' + ci + "</button>";
      h += '</div><div class="lp-grid">';
      books.forEach(function (x) { h += linkCard(x, tx("Open book", "کتاب کھولیں")); });
      boards.filter(function (b) { return ext(b.url) && (boardSel === "all" || b.id === boardSel); }).forEach(function (b) { h += '<a class="lp-card" href="' + esc(ext(b.url)) + '" target="_blank" rel="noopener noreferrer"><i>' + esc(tx("Official board", "سرکاری بورڈ")) + "</i><b>" + esc(lt(b.name)) + "</b><em>" + esc(tx("Find books on the official site", "سرکاری سائٹ پر کتابیں دیکھیں")) + " ↗</em></a>"; });
      if (!books.length && !boards.some(function (b) { return ext(b.url) && (boardSel === "all" || b.id === boardSel); })) h += soon("Books for this board are on the way", "اس بورڈ کی کتابیں جلد آ رہی ہیں");
      h += "</div></section>";
      [["lp-notes", "IQRA_NOTES", tx("Notes", "نوٹس"), tx("Short, clear class notes. Open one to read it.", "جماعت کے مختصر اور واضح نوٹس۔ کھول کر پڑھیں۔"), tx("Notes are on the way", "نوٹس جلد آ رہے ہیں"), tx("Open notes", "نوٹس کھولیں")], ["lp-papers", "IQRA_PAPERS", tx("Past Papers", "پچھلے پرچے"), tx("Practise with past exam papers.", "پچھلے امتحانی پرچوں سے مشق کریں۔"), tx("Past papers are on the way", "پچھلے پرچے جلد آ رہے ہیں"), tx("Open paper", "پرچہ کھولیں")]].forEach(function (g) {
        var arr = (Array.isArray(window[g[1]]) ? window[g[1]] : []).filter(function (x) { return ext(x.url); });
        h += '<section class="lp-sec" id="' + g[0] + '"><h2>' + esc(g[2]) + "</h2><p>" + esc(g[3]) + '</p><div class="lp-grid">';
        arr.forEach(function (x) { h += linkCard(x, g[5]); });
        if (!arr.length) h += soon(g[4], g[4]);
        h += "</div></section>";
      });
      h += '<section class="lp-sec" id="lp-lib"><h2>' + esc(tx("Library", "کتب خانہ")) + "</h2><p>" + esc(tx("Every source here is an official or trusted Pakistani publisher. Books inside IQRA open after you sign in.", "یہاں ہر ماخذ سرکاری یا معتبر پاکستانی ادارے کا ہے۔ آئی اقرا کی اپنی کتابیں سائن اِن کے بعد کھلتی ہیں۔")) + '</p><div class="lp-grid">';
      libs.forEach(function (x) { h += '<a class="lp-card" href="' + esc(ext(x.url)) + '" target="_blank" rel="noopener noreferrer"><b>' + esc(lt(x.title)) + "</b><span>" + esc(lt(x.author)) + "</span><em>" + esc(tx("Visit website", "ویب سائٹ کھولیں")) + " ↗</em></a>"; });
      h += '</div></section><section class="lp-sec" id="lp-syl"><h2>' + esc(tx("Pakistan Syllabus", "پاکستان کا نصاب")) + "</h2><p>" + esc(tx("Our lessons follow official Pakistani documents. Class-wise syllabus is available after you sign in.", "ہمارے اسباق پاکستان کی سرکاری دستاویزات کے مطابق ہیں۔ کلاس کے لحاظ سے نصاب سائن اِن کے بعد دیکھیں۔")) + '</p><div class="lp-grid">';
      docs.forEach(function (x) { h += '<a class="lp-card" dir="ltr" href="' + esc(ext(x.url)) + '" target="_blank" rel="noopener noreferrer"><b>' + esc(x.title) + "</b><span>" + esc((x.authority || "").split(",")[0]) + "</span><em>" + esc(tx("Open official document", "سرکاری دستاویز کھولیں")) + " ↗</em></a>"; });
      h += '</div></section><section class="lp-sec" id="lp-free"><h2>' + esc(tx("Free Study", "مفت مطالعہ")) + "</h2><p>" + esc(tx("Open a lesson and read it here, no account needed. Sign in to unlock games, tests and every class.", "کوئی بھی سبق یہاں کھول کر پڑھیں، اکاؤنٹ کی ضرورت نہیں۔ کھیل، ٹیسٹ اور تمام کلاسز کے لیے سائن اِن کریں۔")) + '</p><div class="lp-grid">';
      if (!free.length) h += '<div class="lp-card lp-soon"><b>' + esc(tx("Free lessons are on the way", "مفت اسباق جلد آ رہے ہیں")) + "</b><span>" + esc(tx("Sign in to start with the full lessons for your class.", "اپنی کلاس کے مکمل اسباق کے لیے سائن اِن کریں۔")) + "</span></div>";
      free.forEach(function (x, n) { h += '<button type="button" class="lp-card lp-free" data-free="' + n + '"><i>' + esc(lt(x.cls)) + " · " + esc(lt(x.subject)) + "</i><b>" + esc(lt(x.title)) + "</b><em>" + esc(tx("Read now", "ابھی پڑھیں")) + "</em></button>"; });
      h += '</div></section><section class="lp-end"><h2>' + esc(tx("Ready to start?", "شروع کرنے کے لیے تیار؟")) + "</h2>" + cta("lp-cta") + "</section></main>";
      if (freeOpen) {
        var fi = freeOpen.item, cards = (fi.cards && (fi.cards[LANG()] || fi.cards.en)) || [], last = freeOpen.i >= cards.length;
        h += '<div class="lp-reader" role="dialog" aria-modal="true" aria-label="' + esc(lt(fi.title)) + '"><div class="lp-rd"><div class="lp-rd-top"><span>' + esc(lt(fi.cls)) + " · " + esc(lt(fi.subject)) + '</span><button type="button" class="lp-x" data-fclose aria-label="' + esc(tx("Close", "بند کریں")) + '">✕</button></div><h3>' + esc(lt(fi.title)) + '</h3><div class="lp-rd-card" dir="auto">' +
          (last ? "<p>" + esc(tx("Well done! Sign in to keep learning with games and tests.", "شاباش! کھیل اور ٹیسٹ کے ساتھ مزید سیکھنے کے لیے سائن اِن کریں۔")) + "</p>" + cta("lp-cta") : "<p>" + esc(cards[freeOpen.i] || "") + "</p>") +
          '</div><div class="lp-rd-nav"><button type="button" class="lp-signin" data-fprev' + (freeOpen.i ? "" : " disabled") + ">" + esc(tx("Back", "پیچھے")) + "</button><span>" + Math.min(freeOpen.i + 1, cards.length) + " / " + cards.length + '</span><button type="button" class="lp-signin" data-fnext' + (last ? " disabled" : "") + ">" + esc(tx("Next", "آگے")) + "</button></div></div></div>";
      }
      var keep = el.scrollTop; el.innerHTML = h; el.scrollTop = keep;
      Array.prototype.forEach.call(el.querySelectorAll("[data-free]"), function (b) { b.onclick = function () { freeOpen = { item: free[Number(b.getAttribute("data-free"))], i: 0 }; paint(); }; });
      var fx = function (sel, fn) { var q = el.querySelector(sel); if (q) q.onclick = fn; };
      fx("[data-fclose]", function () { freeOpen = null; paint(); });
      fx("[data-fprev]", function () { if (freeOpen.i > 0) { freeOpen.i--; paint(); } });
      fx("[data-fnext]", function () { freeOpen.i++; paint(); });
      Array.prototype.forEach.call(el.querySelectorAll("[data-enter]"), function (b) {
        b.onclick = async function () {
          if (!window.__iqSignIn) return;
          errMsg = ""; var m = await window.__iqSignIn(); if (m) { errMsg = m; paint(); }
        };
      });
      Array.prototype.forEach.call(el.querySelectorAll("[data-board]"), function (b) { b.onclick = function () { boardSel = b.getAttribute("data-board"); paint(); }; });
      Array.prototype.forEach.call(el.querySelectorAll("[data-cls]"), function (b) { b.onclick = function () { clsSel = Number(b.getAttribute("data-cls")); paint(); }; });
      Array.prototype.forEach.call(el.querySelectorAll("[data-go]"), function (b) {
        b.onclick = function () { var s = el.querySelector("#" + b.getAttribute("data-go")); if (s) s.scrollIntoView({ behavior: window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); };
      });
      el.querySelector("[data-elang]").onclick = function () { state.lang = state.lang === "ur" ? "en" : "ur"; save(); paint(); render(); };
    }
    window.__iqEntry = {
      active: true,
      ready: function (msg) { isReady = true; errMsg = msg || ""; paint(); var b = el.querySelector(".lp-cta"); if (b && b.focus) b.focus({ preventScroll: true }); },
      remove: function () { window.__iqEntry.active = false; el.classList.add("out"); setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 500); }
    };
    paint(); document.body.appendChild(el);
  })();
})();

