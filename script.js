// ======= DATA =======
const SERVANTS = ['ماريا شوكت','ابرام هاني','ابانوب ايمن','بيشوي ملاك','مارينا ايهاب','مينا عماد'];
const CLASSES = ['تمهيدي','أولي وثانية','ثالثة ورابعة','خامسة وسادسة','أعدادي - ثانوي','شباب وخريجين'];

const HYMNS_BY_CLASS = {
  'تمهيدي': ['مرد انجيل يونان يوم الاثنين عربي','التوزيع السنوي عربي','مرد انجيل ايام الصوم الكبير (تي هيريني)','تسبحة البصخة (ثوك تي تي جوم)','هيتنية العذراء','مرد انجيل عيد القيامة','اريبرسفافين'],
  'أولي وثانية': ['الليلويا اي ايه اي','نيف سنتى','لحن اوصنا خين ني اتتشوسي','اكسيا + أكسيوس التمجيد','ابؤرو الحزاينى','تسبحة البصخة (ثوك تي تي جوم)','مرد مزمور عيد القيامة','مرد انجيل عيد القيامة'],
  'ثالثة ورابعة': ['الليلويا اي ايه اي','نيف سنتى','ابؤرو التمجيد','اكسيا + أكسيوس التمجيد','ثوك تي تي جوم','هيتينيات عيد القيامة','مرد مزمور عيد القيامة','مرد انجيل عيد القيامة'],
  'خامسة وسادسة': ['الليلويا اي ايه اي','نيف سنتى','مرد الانجيل جي بينيوت','مرد الانجيل تي هيرينى','مفردات الأناجيل أحد الشعانين (أوصانا)','ثوك تي تي جوم','ابؤرو الحزاينى','هيتينيات عيد القيامة','مرد مزمور عيد القيامة','مرد انجيل عيد القيامة','ابؤرو التمجيد'],
  'أعدادي - ثانوي': ['الليلويا اي ايه اي','نيف سنتى','مرد الانجيل جي بينيوت','مرد الانجيل تي هيرينى','مفردات الأناجيل أحد الشعانين (أوصانا)','ثوك تي تي جوم','ابؤرو الحزاينى','هيتينيات عيد القيامة','مرد مزمور عيد القيامة','مرد انجيل عيد القيامة','ابؤرو التمجيد'],
  'شباب وخريجين': ['نيف سينتي','الليلويا اي ايه اي ايخون','راشي نيه','ثوك تاتي جوم','ابورو الحزايني','مرد المزمور القيامة','مرد انجيل القيامة']
};

const CRITERIA = [
  {key:'mastery',label:'إتقان اللحن (صحة النغمة والإيقاع)',max:4,icon:'🎵'},
  {key:'vocal',label:'الأداء الصوتي والنطق',max:2,icon:'🎤'},
  {key:'memorization',label:'الحفظ الغيبي للنص',max:1,icon:'📖'},
  {key:'spiritual',label:'الفهم والمعنى الروحي',max:1,icon:'✝️'},
  {key:'occasion',label:'معرفة المناسبة الطقسية',max:2,icon:'⛪'}
];

const STUDENTS = [
  {code:'OQ37UN53',name:'أوناي مينا اسحق عزيز',class:'تمهيدي'},
  {code:'DL27RQ84',name:'نوفير جورج ملاك',class:'تمهيدي'},
  {code:'UR28QG18',name:'ستيفن ابانوب',class:'تمهيدي'},
  {code:'VP93ZY41',name:'مارلي ماجد جيد',class:'تمهيدي'},
  {code:'NN26MX40',name:'ميلا بيشوي',class:'تمهيدي'},
  {code:'IM1SA54',name:'جيوفاني عماد شنوده',class:'تمهيدي'},
  {code:'OW86LY82',name:'جون رشاد جودة',class:'تمهيدي'},
  {code:'QY3TE65',name:'كيرلس مرقس',class:'تمهيدي'},
  {code:'OE19DL44',name:'مارك اشعياء',class:'تمهيدي'},
  {code:'DZ96JL14',name:'فابيو رويس صموئيل مهني',class:'تمهيدي'},
  {code:'ZE40GR74',name:'روفانيو روماني',class:'تمهيدي'},
  {code:'LO80OX29',name:'أوليفر مايكل سليمان',class:'تمهيدي'},
  {code:'DM34TA35',name:'مارفي رمزي رامى',class:'تمهيدي'},
  {code:'ZW66EH16',name:'سارة اشرف مهني ذكي',class:'تمهيدي'},
  {code:'VL57GX16',name:'مارتن امير فارس',class:'تمهيدي'},
  {code:'WX52QV70',name:'كريس إبرام اشرف',class:'تمهيدي'},
  {code:'DO55ZT7',name:'ادم ناجي كامل',class:'تمهيدي'},
  {code:'DH82QY48',name:'نوفير يوسف',class:'تمهيدي'},
  {code:'VK29JM73',name:'بافلي عماد',class:'تمهيدي'},
  {code:'DA42DK41',name:'ستيفين سامي عادل',class:'أولي وثانية'},
  {code:'VM46TM77',name:'بافلي هاني',class:'أولي وثانية'},
  {code:'KU61IA89',name:'كيفين مايكل',class:'أولي وثانية'},
  {code:'RQ2BH97',name:'ايلينا ممدوح فوزي',class:'أولي وثانية'},
  {code:'WQ83SO71',name:'ديفيد عادل مرزوق جاد الله',class:'أولي وثانية'},
  {code:'ET97IL35',name:'بيير جورج مقار',class:'أولي وثانية'},
  {code:'WY82CX86',name:'كاراس يعقوب شحاته',class:'أولي وثانية'},
  {code:'BE70UF75',name:'مينا اشرف',class:'أولي وثانية'},
  {code:'SI22AZ84',name:'ساندرو بيشوي',class:'أولي وثانية'},
  {code:'UF71FO28',name:'يسطس وليد',class:'أولي وثانية'},
  {code:'FR59WU74',name:'جاستين روماني',class:'أولي وثانية'},
  {code:'MF6XN77',name:'بارثينيا وليد يني',class:'أولي وثانية'},
  {code:'WX20CV21',name:'بركتاويت مكونان',class:'أولي وثانية'},
  {code:'UZ26PB64',name:'جوسبين نادر',class:'أولي وثانية'},
  {code:'AV34FF98',name:'هيفين مينا مجدي',class:'أولي وثانية'},
  {code:'YF40AC91',name:'ماريا البيرت نجيب',class:'أولي وثانية'},
  {code:'ZG87AO32',name:'يوسف ناجي كامل',class:'أولي وثانية'},
  {code:'CO95IJ79',name:'انطونيوس نادر رزق ايوب',class:'ثالثة ورابعة'},
  {code:'SR36NT37',name:'مهرائيل يسري كامل متي',class:'ثالثة ورابعة'},
  {code:'ZH50CV31',name:'مارفينا مينا',class:'ثالثة ورابعة'},
  {code:'KO83OS59',name:'مجدي إبراهيم يونان إبراهيم',class:'ثالثة ورابعة'},
  {code:'IP54IC67',name:'كيفين عماد',class:'ثالثة ورابعة'},
  {code:'PK99WL91',name:'مينا تامر بدير',class:'ثالثة ورابعة'},
  {code:'EL80FZ96',name:'ادم إبراهيم حلمي',class:'ثالثة ورابعة'},
  {code:'WU49YX64',name:'ماثيو بهاء لطيف',class:'ثالثة ورابعة'},
  {code:'ZL57VZ65',name:'قدوس مكنن',class:'ثالثة ورابعة'},
  {code:'WL17KB22',name:'ويني صقاي محاري',class:'ثالثة ورابعة'},
  {code:'FF56ZG4',name:'مريم مجدي يعقوي',class:'ثالثة ورابعة'},
  {code:'UT78DS90',name:'ستيفن امير فارس',class:'ثالثة ورابعة'},
  {code:'YS59WG63',name:'نوفير البيرت نجيب',class:'ثالثة ورابعة'},
  {code:'EZ37JO93',name:'بتول ملاك ملاك',class:'ثالثة ورابعة'},
  {code:'WL54JD66',name:'دانيال ميخائيل فؤاد',class:'خامسة وسادسة'},
  {code:'ET27TH21',name:'جاسيكا اسامه',class:'خامسة وسادسة'},
  {code:'UZ36JX61',name:'كاراس اسامه',class:'خامسة وسادسة'},
  {code:'QN26EA60',name:'ابراهيم مجدي ابراهيم',class:'خامسة وسادسة'},
  {code:'DF93MK67',name:'توماس مايكل',class:'خامسة وسادسة'},
  {code:'XW65UC49',name:'مريم نادر رزق ايوب',class:'خامسة وسادسة'},
  {code:'SD53WB49',name:'بولا نادر رزق ايوب',class:'خامسة وسادسة'},
  {code:'ND12LG2',name:'مريم فوزي',class:'خامسة وسادسة'},
  {code:'UT11DC93',name:'نوفير يسري كامل متي',class:'خامسة وسادسة'},
  {code:'TA28AE14',name:'مايفن جرجس ظريف',class:'خامسة وسادسة'},
  {code:'SP2GW49',name:'ليزا عماد شنوده',class:'خامسة وسادسة'},
  {code:'JW61SG99',name:'مريم فادي اشرف',class:'خامسة وسادسة'},
  {code:'JK34BT99',name:'ستيفين عماد',class:'خامسة وسادسة'},
  {code:'RG61SQ70',name:'بارثينيا ناصر',class:'خامسة وسادسة'},
  {code:'RC33XF38',name:'ماروسكا مجدي',class:'خامسة وسادسة'},
  {code:'OC37CU76',name:'ليدو مكونان',class:'خامسة وسادسة'},
  {code:'CO49CX8',name:'هولي مينا مجدي',class:'خامسة وسادسة'},
  {code:'YC54NA24',name:'كيرلس يوسف شحاتة',class:'أعدادي - ثانوي'},
  {code:'VA86MB94',name:'ابانوب سامي فواد فهيم',class:'أعدادي - ثانوي'},
  {code:'PW68PL46',name:'ريني مجدي',class:'أعدادي - ثانوي'},
  {code:'VR96WT51',name:'يوستينا مجدي ابراهيم',class:'أعدادي - ثانوي'},
  {code:'BY39JB7',name:'بهجت وليد',class:'أعدادي - ثانوي'},
  {code:'DE9SC28',name:'مريم رضا',class:'أعدادي - ثانوي'},
  {code:'IX26AL86',name:'يوسف نادر رزق ايوب',class:'أعدادي - ثانوي'},
  {code:'BW43HD36',name:'كاراس فادي اشرف سمير',class:'أعدادي - ثانوي'},
  {code:'DM79JA6',name:'مارك مينا',class:'أعدادي - ثانوي'},
  {code:'GC54AC11',name:'بافلي جرجس',class:'أعدادي - ثانوي'},
  {code:'GS37KY45',name:'جوليانا ميلاد يعقوب',class:'أعدادي - ثانوي'},
  {code:'FR86EO8',name:'بتليهم مكنن',class:'أعدادي - ثانوي'},
  {code:'QH17LK76',name:'جيسي فليب فارس',class:'أعدادي - ثانوي'},
  {code:'XZ58OL41',name:'مايفن ميلاد محروس',class:'أعدادي - ثانوي'},
  {code:'PS24OD68',name:'مارتن ماجد فوزي',class:'أعدادي - ثانوي'},
  {code:'BN77OF53',name:'چورچ امير',class:'أعدادي - ثانوي'},
  {code:'GF19LG39',name:'بولا نزية',class:'أعدادي - ثانوي'},
  {code:'OV92PQ79',name:'رجاء عوني حبيب',class:'شباب وخريجين'},
  {code:'JF16CY59',name:'وائل فتحي جرجس',class:'شباب وخريجين'},
  {code:'NC50EL52',name:'راعوث فايز قديس',class:'شباب وخريجين'},
  {code:'HV44PA32',name:'ماجد بشاي حبيب',class:'شباب وخريجين'},
  {code:'PH70TQ73',name:'ماريانا كمال شوقي',class:'شباب وخريجين'},
  {code:'OT23PH54',name:'نانسي نجاح',class:'شباب وخريجين'},
  {code:'BD65HH16',name:'بيشوي ملاك',class:'شباب وخريجين'},
  {code:'EK94VH97',name:'ساندي ممدوح عطالله',class:'شباب وخريجين'},
  {code:'GD79IA22',name:'روبير ريمون جاب الله',class:'شباب وخريجين'},
  {code:'YK76PZ32',name:'رامز ريمون جاب الله',class:'شباب وخريجين'},
  {code:'UK49EE4',name:'ثروت عدلي شفيق',class:'شباب وخريجين'},
  {code:'NI94WK25',name:'ابانوب اشرف زكري',class:'شباب وخريجين'},
  {code:'VW75WS5',name:'صوفيا هاني يوسف',class:'شباب وخريجين'},
  {code:'ZW70YJ78',name:'ماريا فرج',class:'شباب وخريجين'},
  {code:'DV75CW75',name:'سماح انور',class:'شباب وخريجين'},
  {code:'PT32IX97',name:'راندا صبري كامل',class:'شباب وخريجين'},
  {code:'PR96UL34',name:'كريستين ميلاد',class:'شباب وخريجين'},
  {code:'TO77VI91',name:'ايهاب عادل انور',class:'شباب وخريجين'},
  {code:'LE83EJ67',name:'عطيه عشم شفيق',class:'شباب وخريجين'},
  {code:'HL86TE25',name:'مريم ابراهيم',class:'شباب وخريجين'},
  {code:'IE72AQ20',name:'نرمين فوزي',class:'شباب وخريجين'},
  {code:'OZ16CH73',name:'ماريان فوزي',class:'شباب وخريجين'},
  {code:'DW46RO7',name:'مريم ناجي سمعان',class:'شباب وخريجين'},
  {code:'IK91IZ66',name:'ناديه شلبي بشاي',class:'شباب وخريجين'},
  {code:'FZ64SZ56',name:'يوسف اسحاق',class:'شباب وخريجين'}
];

// ======= STATE =======
let currentServant = '';
let selectedStudent = null;
let allRecords = [];
let scores = {};
let deleteTarget = null;

// ======= FUNCTIONS =======
function populateServants(){
  const sel = document.getElementById('servantSelect');
  SERVANTS.forEach(s => {
    const o = document.createElement('option');
    o.value = s; o.textContent = s;
    sel.appendChild(o);
  });
}

function loginServant(){
  const v = document.getElementById('servantSelect').value;
  if(!v){showToast('اختر اسمك أولاً','var(--warning)');return}
  currentServant = v;
  document.getElementById('servantNameDisplay').textContent = '🧑‍🏫 ' + v;
  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
  populateStudentDropdown();
  populateClassFilters();
  renderResults();
  renderRecords();
}

// ... بقية وظائف الـ JavaScript (نفس التي في الكود الأصلي)
// تأكد من نسخ كافة الوظائف مثل searchStudent, showCriteria, submitEvaluation من الكود الأصلي إلى هنا.
// سأضع وظيفة التشغيل الأساسية للتأكيد:

(async()=>{
  if(window.dataSdk){
    const r = await window.dataSdk.init({
      onDataChanged(data){
        allRecords = data;
        renderResults();
        renderRecords();
      }
    });
  }
  populateServants();
  lucide.createIcons();
})();
