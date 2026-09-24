import { Service } from '@/types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'income-certificate',
    slug: 'income-certificate',
    category: 'certificates',
    name: {
      en: 'Income Certificate',
      hi: 'आय प्रमाण पत्र',
      mr: 'उत्पन्न प्रमाणपत्र',
    },
    shortDescription: {
      en: 'Proof of income',
      hi: 'आय का प्रमाण',
      mr: 'उत्पन्नाचा पुरावा',
    },
    whoItMayHelp: {
      en: [
        'Students applying for government scholarships or fee concessions',
        'Families applying for subsidized food grains or housing schemes',
        'Citizens applying for state welfare benefits',
      ],
      hi: [
        'छात्रवृत्ति या फीस में छूट के लिए आवेदन करने वाले विद्यार्थी',
        'राशन कार्ड या आवास योजनाओं के लिए आवेदन करने वाले परिवार',
        'सरकारी कल्याणकारी योजनाओं के पात्र नागरिक',
      ],
      mr: [
        'शासकीय शिष्यवृत्ती किंवा शैक्षणिक फी सवलतीसाठी अर्ज करणारे विद्यार्थी',
        'रेशन कार्ड किंवा शासकीय गृहनिर्माण योजनांसाठी अर्ज करणारे कुटुंब',
        'शासकीय योजनांचा लाभ घेऊ इच्छिणारे सर्वसामान्य नागरिक',
      ],
    },
    commonRequirements: {
      en: [
        'Proof of family income (Salary slip, Form 16, or Talathi/Tehsildar income declaration report)',
        'Identity proof of the applicant',
        'Address proof within the jurisdiction',
        'Self-declaration / Affidavit of annual earnings',
      ],
      hi: [
        'आय का प्रमाण (वेतन पर्ची, फॉर्म 16 या पटवारी/तहसीलदार आय रिपोर्ट)',
        'आवेदक का पहचान पत्र (आधार कार्ड/मतदाता पहचान पत्र)',
        'निवास प्रमाण पत्र',
        'स्व-घोषणा पत्र / शपथ पत्र',
      ],
      mr: [
        'उत्पन्नाचा पुरावा (पगार स्लिप, फॉर्म १६, किंवा तलाठी/तहसीलदार यांचा अहवाल)',
        'अर्जदाराचा ओळखीचा पुरावा (आधार कार्ड किंवा मतदार ओळखपत्र)',
        'रहिवासी पुरावा (रेशन कार्ड किंवा वीज बिल)',
        'स्वयंघोषणापत्र / प्रतिज्ञापत्र',
      ],
    },
    documents: [
      {
        id: 'doc-identity',
        name: {
          en: 'Identity Proof',
          hi: 'पहचान का प्रमाण',
          mr: 'ओळखीचा पुरावा',
        },
        description: {
          en: 'Aadhaar Card, Voter ID, or PAN Card of the head of family.',
          hi: 'परिवार के मुखिया का आधार कार्ड, वोटर आईडी या पैन कार्ड।',
          mr: 'कुटुंबप्रमुखाचे आधार कार्ड, मतदार ओळखपत्र किंवा पॅन कार्ड.',
        },
        isMandatory: true,
        alternatives: {
          en: ['Aadhaar Card', 'Voter ID', 'Passport'],
          hi: ['आधार कार्ड', 'मतदाता पहचान पत्र', 'पासपोर्ट'],
          mr: ['आधार कार्ड', 'मतदार ओळखपत्र', 'पासपोर्ट'],
        },
      },
      {
        id: 'doc-address',
        name: {
          en: 'Address Proof',
          hi: 'निवास का प्रमाण',
          mr: 'पत्त्याचा पुरावा',
        },
        description: {
          en: 'Ration card, recent electricity bill, or domicile certificate.',
          hi: 'राशन कार्ड, हालिया बिजली बिल या निवास प्रमाण पत्र।',
          mr: 'रेशन कार्ड, चालू महिन्याचे वीज बिल किंवा रहिवासी दाखला.',
        },
        isMandatory: true,
      },
      {
        id: 'doc-income',
        name: {
          en: 'Income proof',
          hi: 'आय प्रमाण',
          mr: 'उत्पन्नाचा पुरावा',
        },
        description: {
          en: 'Income statement from employer, IT returns, or circle revenue officer report.',
          hi: 'नियोक्ता से वेतन प्रमाण, आयकर रिटर्न या राजस्व अधिकारी का प्रमाणपत्र।',
          mr: 'नोकरी असल्यास वेतनाचा दाखला, किंवा तलाठ्याचा उत्पन्नाचा दाखला.',
        },
        isMandatory: true,
      },
      {
        id: 'doc-photo',
        name: {
          en: 'Passport photo',
          hi: 'पासपोर्ट फोटो',
          mr: 'पासपोर्ट फोटो',
        },
        description: {
          en: 'Clear photograph in JPG/PNG format (typically under 100 KB).',
          hi: 'स्पष्ट फोटो (आमतौर पर 100 KB से कम आकार में)।',
          mr: 'स्पष्ट फोटो (सर्वसाधारणपणे १०० केबी पेक्षा कमी).',
        },
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Understand the service',
          hi: 'सेवा समझें',
          mr: 'सेवा समजून घ्या',
        },
        explanation: {
          en: 'Check if you need a 1-year or 3-year income certificate and identify your local revenue office (Tehsil).',
          hi: 'जांचें कि आपको 1 वर्ष या 3 वर्ष का प्रमाण पत्र चाहिए और अपनी तहसील पहचानें।',
          mr: 'तुम्हाला १ वर्षाचा की ३ वर्षांचा दाखला हवा आहे ते ठरवा आणि तुमची संबंधित तहसील निश्चित करा.',
        },
        whyItMatters: {
          en: 'Applying in the wrong administrative area will cause your application to be rejected.',
          hi: 'गलत क्षेत्र या तहसील में आवेदन करने पर आवेदन खारिज हो सकता है।',
          mr: 'चुकीच्या तालुक्यात किंवा चुकीच्या कालावधीचा अर्ज केल्यास अर्ज नामंजूर होऊ शकतो.',
        },
        requiredAction: {
          en: 'Confirm your required validity (1-year vs 3-year) based on your target scheme.',
          hi: 'संबंधित योजना के अनुसार प्रमाणपत्र की वैधता अवधि (1 या 3 वर्ष) सुनिश्चित करें।',
          mr: 'तुमच्या गरजेनुसार (उदा. शिष्यवृत्तीसाठी ३ वर्ष) दाखल्याचा कालावधी तपासा.',
        },
        simpleGuidance: {
          en: 'Decide if you need a 1-year or 3-year income certificate.',
          hi: 'तय करें कि आपको 1 साल या 3 साल का प्रमाण पत्र चाहिए।',
          mr: '१ वर्षाचा की ३ वर्षांचा दाखला हवा आहे ते निश्चित करा.',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Check your documents',
          hi: 'दस्तावेज जांचें',
          mr: 'कागदपत्रे तपासा',
        },
        explanation: {
          en: 'Keep your Aadhaar card, electricity bill, ration card, and income proof ready as digital scans (PDF or JPG).',
          hi: 'आधार कार्ड, बिजली बिल, राशन कार्ड और आय प्रमाण को डिजिटल स्कैन (PDF/JPG) के रूप में तैयार रखें।',
          mr: 'आधार कार्ड, वीज बिल, रेशन कार्ड आणि उत्पन्नाचा पुरावा यांची डिजिटल प्रत (PDF किंवा JPG) तयार ठेवा.',
        },
        whyItMatters: {
          en: 'Clear documents prevent verification delays at the Revenue Inspector level.',
          hi: 'दस्तावेज साफ और सही होने से राजस्व अधिकारी स्तर पर देरी नहीं होती।',
          mr: 'कागदपत्रे स्पष्ट असल्यास छाननी जलद होते आणि फेरचौकशी टळते.',
        },
        requiredAction: {
          en: 'Scan or photograph all 4 documents with text clearly legible.',
          hi: 'सभी 4 दस्तावेजों को स्पष्ट रूप से स्कैन या फोटो लें।',
          mr: 'चारही कागदपत्रांचे स्पष्ट स्कॅन किंवा फोटो तयार ठेवा.',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Apply online',
          hi: 'ऑनलाइन आवेदन करें',
          mr: 'ऑनलाइन अर्ज करा',
        },
        explanation: {
          en: 'Log in to your state public service portal (e.g. Aaple Sarkar in Maharashtra or ServicePlus in other states).',
          hi: 'अपने राज्य के आधिकारिक सेवा पोर्टल (उदा. महाराष्ट्र में आपले सरकार या अन्य राज्यों में ServicePlus) पर लॉगिन करें।',
          mr: 'राज्याच्या अधिकृत पोर्टलवर (उदा. आपले सरकार / ई-सेवा केंद्र) लॉगिन करून महसूल विभागात जा.',
        },
        whyItMatters: {
          en: 'Official submission generates an Application Tracking Number (Application ID).',
          hi: 'आधिकारिक पोर्टल पर जमा करने से ही ट्रैकिंग नंबर प्राप्त होता है।',
          mr: 'अधिकृत पोर्टलवर अर्ज भरल्यावरच अर्जाचा अधिकृत टोकन क्रमांक मिळतो.',
        },
        requiredAction: {
          en: 'Fill in family income details, attach scanned proofs, and make the statutory processing fee payment (~₹33).',
          hi: 'पारिवारिक आय विवरण भरें, दस्तावेज अपलोड करें और निर्धारित शुल्क (~₹33) का भुगतान करें।',
          mr: 'उत्पन्नाची माहिती भरा, कागदपत्रे जोडा आणि शासकीय शुल्क भरून पोचपावती घ्या.',
        },
        officialActionUrl: 'https://aaplesarkar.mahaonline.gov.in',
      },
      {
        stepNumber: 4,
        title: {
          en: 'Download certificate',
          hi: 'प्रमाणपत्र डाउनलोड करें',
          mr: 'दाखला डाउनलोड करा',
        },
        explanation: {
          en: 'The application is reviewed by the Revenue Assistant and signed digitally by the Tehsildar (typically within 7 to 15 days).',
          hi: 'राजस्व अधिकारी द्वारा सत्यापन के बाद तहसीलदार द्वारा डिजिटल हस्ताक्षर युक्त प्रमाणपत्र 7 से 15 दिनों में जारी किया जाता है।',
          mr: 'तलाठी व मंडळ अधिकारी छाननीनंतर तहसीलदारांच्या डिजिटल स्वाक्षरीने ७ ते १५ दिवसांत दाखला उपलब्ध होतो.',
        },
        whyItMatters: {
          en: 'Digitally signed certificates have a QR code and do not require physical stamps.',
          hi: 'डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र पर क्यूआर कोड होता है, किसी भौतिक मुहर की आवश्यकता नहीं होती।',
          mr: 'डिजिटल सहीच्या दाखल्यावर क्यूआर कोड असतो, त्याला तहसीलदारांच्या प्रत्यक्ष शिक्क्याची गरज नसते.',
        },
        requiredAction: {
          en: 'Use your Application ID to track status and download the final PDF with barcode/QR.',
          hi: 'आवेदन क्रमांक का उपयोग करके स्थिति जांचें और बारकोड युक्त पीडीएफ डाउनलोड करें।',
          mr: 'तुमच्या अर्ज क्रमांकावरून स्थिती तपासा आणि डाऊनलोड करून सुरक्षित ठेवा.',
        },
      },
    ],
    officialSource: {
      name: 'Aaple Sarkar / National Government Services Portal',
      url: 'https://aaplesarkar.mahaonline.gov.in',
      portalName: 'Revenue and Forest Department Portal',
      verifiedNote: {
        en: 'Official government portal for citizen revenue services.',
        hi: 'नागरिक राजस्व सेवाओं के लिए आधिकारिक सरकारी पोर्टल।',
        mr: 'नागरी महसूल सेवांसाठी अधिकृत शासकीय पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['income certificate', 'salary certificate', 'revenue certificate', 'income proof', 'tahsildar', 'tahsil'],
      hi: ['आय प्रमाण पत्र', 'इनकम सर्टिफिकेट', 'आय का दाखिला', 'तहसीलदार आय'],
      mr: ['उत्पन्न प्रमाणपत्र', 'उत्पन्नाचा दाखला', 'तहसीलदार दाखला', 'उत्पन्न', 'उत्पन्नाचे प्रमाणपत्र'],
    },
    disclaimer: {
      en: 'Requirements may change. Verify on the official portal before submitting.',
      hi: 'नियम बदल सकते हैं। अंतिम आवेदन से पहले आधिकारिक पोर्टल पर जांचें।',
      mr: 'नियम बदलू शकतात. अर्ज सादर करण्यापूर्वी अधिकृत पोर्टल तपासून घ्या.',
    },
  },
  {
    id: 'residence-certificate',
    slug: 'residence-certificate',
    category: 'certificates',
    name: {
      en: 'Residence Certificate',
      hi: 'निवास प्रमाण पत्र',
      mr: 'रहिवासी दाखला',
    },
    shortDescription: {
      en: 'Proof of residence',
      hi: 'निवास का प्रमाण',
      mr: 'वास्तव्याचा पुरावा',
    },
    whoItMayHelp: {
      en: [
        'Students taking state quota college and technical admissions (e.g. engineering, medical)',
        'Applicants for state government civil services and public exams',
        'Residents applying for regional state quotas',
      ],
      hi: [
        'राज्य कोटे के तहत कॉलेज/तकनीकी पाठ्यक्रमों में प्रवेश लेने वाले छात्र',
        'राज्य सरकारी नौकरियों और सार्वजनिक भर्ती परीक्षाओं के अभ्यर्थी',
        'राज्य स्तरीय आवासीय लाभ चाहने वाले नागरिक',
      ],
      mr: [
        'राज्य कोट्यातून इंजिनिअरिंग, मेडिकल किंवा महाविद्यालयीन प्रवेश घेणारे विद्यार्थी',
        'राज्य शासकीय सेवा आणि भरती परीक्षांसाठी अर्ज करणारे उमेदवार',
        'शासकीय गृहनिर्माण आणि स्थानिक आरक्षणाचा लाभ घेणारे नागरिक',
      ],
    },
    commonRequirements: {
      en: [
        'Proof of continuous residence for 10-15 years (School Leaving Certificate, Electricity Bills, Tax receipts)',
        'Identity proof (Aadhaar Card, Voter ID)',
        'Ration card or local address proof',
        'Passport photo and self-declaration affidavit',
      ],
      hi: [
        '10-15 वर्ष के निरंतर निवास का प्रमाण (स्कूल लीविंग सर्टिफिकेट, बिजली बिल, संपत्ति कर रसीद)',
        'पहचान पत्र (आधार कार्ड, वोटर कार्ड)',
        'राशन कार्ड या स्थानीय पता प्रमाण',
        'पासपोर्ट फोटो और शपथ पत्र',
      ],
      mr: [
        'गेल्या १० ते १५ वर्षांच्या वास्तव्याचा पुरावा (शाळा सोडल्याचा दाखला, जुनी वीज बिले, घरपट्टी पावती)',
        'ओळखपत्र (आधार कार्ड, मतदार ओळखपत्र)',
        'रेशन कार्ड किंवा स्थानिक वास्तव्याचा पुरावा',
        'पासपोर्ट आकाराचा फोटो आणि स्वयंघोषणापत्र',
      ],
    },
    documents: [
      {
        id: 'res-identity',
        name: {
          en: 'Identity Proof',
          hi: 'पहचान पत्र',
          mr: 'ओळखीचा पुरावा',
        },
        description: {
          en: 'Aadhaar Card, Voter ID or Passport.',
          hi: 'आधार कार्ड, वोटर आईडी अथवा पासपोर्ट।',
          mr: 'आधार कार्ड, मतदार ओळखपत्र किंवा पासपोर्ट.',
        },
        isMandatory: true,
      },
      {
        id: 'res-continuous',
        name: {
          en: 'Residence proof (10-15 yrs)',
          hi: 'निवास प्रमाण (10-15 वर्ष)',
          mr: 'वास्तव्याचा पुरावा (१०-१५ वर्षे)',
        },
        description: {
          en: 'School Leaving Certificate showing birthplace/schooling years or consecutive electricity/tax bills.',
          hi: 'जन्म स्थान या स्कूली वर्षों को दर्शाने वाला स्कूल लीविंग सर्टिफिकेट या पुरानी रसीदें।',
          mr: 'शाळा सोडल्याचा दाखला (LC) किंवा जुनी वीज बिले / घरपट्टी पावत्या.',
        },
        isMandatory: true,
      },
      {
        id: 'res-ration',
        name: {
          en: 'Address proof',
          hi: 'पता प्रमाण',
          mr: 'पत्त्याचा पुरावा',
        },
        description: {
          en: 'Ration card with applicant or parent name listed.',
          hi: 'राशन कार्ड जिसमें आवेदक या माता-पिता का नाम दर्ज हो।',
          mr: 'कुटुंबाचे रेशन कार्ड किंवा स्थानिक पत्त्याचा पुरावा.',
        },
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Understand the service',
          hi: 'सेवा समझें',
          mr: 'सेवा समजून घ्या',
        },
        explanation: {
          en: 'Ensure you have residence proofs dating back at least 10 or 15 years depending on state rules.',
          hi: 'सुनिश्चित करें कि आपके पास राज्य के नियमानुसार कम से कम 10 या 15 वर्ष पुराना निवास रिकॉर्ड है।',
          mr: 'तुमच्याकडे राज्याच्या नियमांनुसार सलग वास्तव्याचा किमान १० किंवा १५ वर्षांचा पुरावा आहे का ते तपासा.',
        },
        whyItMatters: {
          en: 'Incomplete historical records are the top reason for domicile application queries.',
          hi: 'अधूरे पुराने रिकॉर्ड निवास प्रमाण पत्र में देरी का सबसे बड़ा कारण होते हैं।',
          mr: 'जुना पुरावा नसल्यास तहसीलदार कार्यालयाकडून त्रुटी काढली जाते.',
        },
        requiredAction: {
          en: 'Collect your School Leaving Certificate (LC) and at least one old residential utility record.',
          hi: 'स्कूल लीविंग सर्टिफिकेट और कोई एक पुराना आवासीय बिल ढूंढ कर रखें।',
          mr: 'शाळा सोडल्याचा दाखला (LC) आणि जुने वास्तव्याचे कागदपत्र काढून ठेवा.',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Check your documents',
          hi: 'दस्तावेज जांचें',
          mr: 'कागदपत्रे तपासा',
        },
        explanation: {
          en: 'Enter your address history and upload scanned identity and school records.',
          hi: 'अपने पते का इतिहास दर्ज करें और पहचान व स्कूल रिकॉर्ड अपलोड करें।',
          mr: 'तुमच्या वास्तव्याचा तपशील भरा आणि ओळखीचे व शाळेचे पुरावे अपलोड करा.',
        },
        whyItMatters: {
          en: 'Accurate chronological dates prevent verification re-inspections.',
          hi: 'सटीक तिथियों से भौतिक सत्यापन में आसानी होती है।',
          mr: 'तारखा आणि पत्ता अचूक असल्यास प्रत्यक्ष पडताळणी विनाअडथळा होते.',
        },
        requiredAction: {
          en: 'Submit online via the official citizen services portal and note the token number.',
          hi: 'आधिकारिक नागरिक पोर्टल पर सबमिट करें और टोकन नंबर सुरक्षित रखें।',
          mr: 'अधिकृत पोर्टलवर अर्ज सादर करा आणि टोकन क्रमांक जपून ठेवा.',
        },
        officialActionUrl: 'https://services.india.gov.in',
      },
      {
        stepNumber: 3,
        title: {
          en: 'Apply online',
          hi: 'ऑनलाइन आवेदन करें',
          mr: 'ऑनलाइन अर्ज करा',
        },
        explanation: {
          en: 'The Talathi/Circle Inspector verifies the continuous stay and submits an inquiry report to the Sub-Divisional Officer.',
          hi: 'सर्कल इंस्पेक्टर या पटवारी आपके निवास की पुष्टि करते हुए रिपोर्ट अनुविभागीय अधिकारी को भेजते हैं।',
          mr: 'तलाठी व मंडळ अधिकारी वास्तव्याची खातरजमा करून अहवाल तहसीलदारांना सादर करतात.',
        },
        whyItMatters: {
          en: 'Local inquiry confirms you are a genuine resident of the state.',
          hi: 'स्थानीय जांच आपके वास्तविक निवासी होने की पुष्टि करती है।',
          mr: 'स्थानिक चौकशीमुळे तुम्ही त्या ठिकाणचे मूळ रहिवासी असल्याचे सिद्ध होते.',
        },
        requiredAction: {
          en: 'Keep your original documents ready in case the local office requests physical inspection.',
          hi: 'यदि स्थानीय कार्यालय भौतिक निरीक्षण के लिए बुलाए तो मूल दस्तावेज साथ रखें।',
          mr: 'कागदपत्रांची मूळ प्रत तयार ठेवा, गरज पडल्यास दाखवावी लागू शकते.',
        },
      },
      {
        stepNumber: 4,
        title: {
          en: 'Download certificate',
          hi: 'प्रमाणपत्र डाउनलोड करें',
          mr: 'दाखला डाउनलोड करा',
        },
        explanation: {
          en: 'Once approved by the competent authority, download the certificate with valid digital signature.',
          hi: 'अनुमोदन के बाद डिजिटल हस्ताक्षर युक्त वैध प्रमाण पत्र सीधे डाउनलोड करें।',
          mr: 'मंजूरीनंतर डिजिटल सहीचा अधिकृत दाखला पोर्टलवरून डाउनलोड करा.',
        },
        whyItMatters: {
          en: 'This certificate remains permanently valid for admissions unless otherwise specified.',
          hi: 'यह प्रमाण पत्र सामान्यतः स्थायी वैधता रखता है।',
          mr: 'हा दाखला सामान्यतः कायमस्वरूपी ग्राह्य धरला जातो.',
        },
        requiredAction: {
          en: 'Download the PDF and also save a copy to your DigiLocker for instant access.',
          hi: 'पीडीएफ डाउनलोड करें और त्वरित पहुंच के लिए इसे डिजीलॉकर में भी सुरक्षित रखें।',
          mr: 'दाखल्याची प्रत डाउनलोड करा आणि डिजीलॉकरमध्ये सेव्ह करून ठेवा.',
        },
      },
    ],
    officialSource: {
      name: 'National Government Services Portal / State e-District',
      url: 'https://services.india.gov.in',
      portalName: 'e-District Services',
      verifiedNote: {
        en: 'Official gateway for citizen certificates across Indian states.',
        hi: 'भारतीय राज्यों में नागरिक प्रमाण पत्रों के लिए आधिकारिक गेटवे।',
        mr: 'विविध राज्यांमधील नागरी प्रमाणपत्रांसाठी राष्ट्रीय सेवा पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['domicile', 'residence certificate', 'address proof', 'where i live', 'local resident', 'stay proof'],
      hi: ['निवास प्रमाण पत्र', 'अधिवास', 'डोमिसाइल', 'रहने का सबूत', 'स्थानीय निवासी'],
      mr: ['अधिवास प्रमाणपत्र', 'रहिवासी दाखला', 'डोमिसाइल दाखला', 'कुठे राहतो पुरावा', 'स्थानिक रहिवासी'],
    },
    disclaimer: {
      en: 'Residency period may vary by state. Verify on the official portal.',
      hi: 'निवास की अवधि राज्य अनुसार बदल सकती है। पोर्टल पर जांचें।',
      mr: 'वास्तव्याची अट राज्यानुसार बदलू शकते. अधिकृत पोर्टल तपासून घ्या.',
    },
  },
  {
    id: 'digilocker-guidance',
    slug: 'digilocker-guidance',
    category: 'identity',
    name: {
      en: 'DigiLocker',
      hi: 'डिजीलॉकर',
      mr: 'डिजीलॉकर',
    },
    shortDescription: {
      en: 'Access your documents',
      hi: 'अपने दस्तावेज प्राप्त करें',
      mr: 'तुमची कागदपत्रे मिळवा',
    },
    whoItMayHelp: {
      en: [
        'Anyone who wants to avoid carrying fragile physical original documents',
        'Drivers presenting legal licenses and RC to traffic police without physical paper',
        'Students submitting verified digital academic certificates for admissions',
      ],
      hi: [
        'जो लोग भौतिक मूल दस्तावेज साथ रखने से बचना चाहते हैं',
        'ट्रैफिक पुलिस को डिजिटल लाइसेंस व आरसी दिखाने वाले वाहन चालक',
        'कॉलेज और नौकरी में सत्यापित डिजिटल मार्कशीट प्रस्तुत करने वाले छात्र',
      ],
      mr: [
        'मूळ कागदपत्रे गहाळ होण्याच्या भीतीशिवाय सुरक्षित बाळगू इच्छिणारे नागरिक',
        'वाहतूक पोलिसांना ड्रायव्हिंग लायसन्स व आरसी डिजिटल दाखवू इच्छिणारे वाहनचालक',
        'शाळा-कॉलेज प्रवेशासाठी अधिकृत डिजिटल गुणपत्रिका वापरणारे विद्यार्थी',
      ],
    },
    commonRequirements: {
      en: [
        'Aadhaar number linked with an active mobile number for OTP verification',
        'Document registration number (e.g. Driving License number, Roll Number, or Vehicle registration)',
      ],
      hi: [
        'ओटीपी के लिए आधार से लिंक सक्रिय मोबाइल नंबर',
        'दस्तावेज पहचान संख्या (जैसे ड्राइविंग लाइसेंस नंबर, रोल नंबर या वाहन नंबर)',
      ],
      mr: [
        'ओटीपी पडताळणीसाठी आधारशी जोडलेला सक्रिय मोबाईल क्रमांक',
        'कागदपत्राचा क्रमांक (उदा. ड्रायव्हिंग लायसन्स नंबर, परीक्षेचा रोल नंबर, गाडी नंबर)',
      ],
    },
    documents: [
      {
        id: 'digi-aadhaar',
        name: {
          en: 'Aadhaar (linked to mobile)',
          hi: 'आधार (मोबाइल से लिंक)',
          mr: 'आधार (मोबाईल लिंक)',
        },
        description: {
          en: 'Required to create and verify your legal DigiLocker account.',
          hi: 'डिजीलॉकर खाता बनाने और सत्यापित करने के लिए अनिवार्य।',
          mr: 'डिजीलॉकर खाते उघडण्यासाठी आणि पडताळणीसाठी आवश्यक.',
        },
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Create account',
          hi: 'खाता बनाएं',
          mr: 'खाते तयार करा',
        },
        explanation: {
          en: 'Go to digilocker.gov.in or install the official DigiLocker app and register using your 12-digit Aadhaar number.',
          hi: 'digilocker.gov.in पर जाएं या आधिकारिक ऐप इंस्टॉल करें और अपने 12 अंकों के आधार से रजिस्टर करें।',
          mr: 'digilocker.gov.in वर जा किंवा अधिकृत ॲप डाउनलोड करून १२ अंकी आधार क्रमांकाने नोंदणी करा.',
        },
        whyItMatters: {
          en: 'Aadhaar authentication ensures your documents are issued solely to you with legal parity to original paper under the IT Act.',
          hi: 'आधार प्रमाणीकरण सुनिश्चित करता है कि आपके दस्तावेज केवल आपको जारी किए जाएं, जिन्हें आईटी अधिनियम के तहत कानूनी मान्यता प्राप्त है।',
          mr: 'माहिती तंत्रज्ञान कायद्यानुसार डिजीलॉकरमधील कागदपत्रे मूळ कागदपत्रांसारखीच कायदेशीररीत्या वैध ठरतात.',
        },
        requiredAction: {
          en: 'Enter your Aadhaar, receive SMS OTP on registered mobile, and set a 6-digit security PIN.',
          hi: 'आधार नंबर दर्ज करें, मोबाइल पर आया ओटीपी डालें और 6 अंकों का सुरक्षा पिन सेट करें।',
          mr: 'आधार क्रमांक टाका, मोबाईलवर आलेला ओटीपी प्रविष्ट करा आणि ६ अंकांचा सुरक्षा पिन ठरवा.',
        },
        officialActionUrl: 'https://www.digilocker.gov.in',
      },
      {
        stepNumber: 2,
        title: {
          en: 'Search document',
          hi: 'दस्तावेज खोजें',
          mr: 'कागदपत्र शोधा',
        },
        explanation: {
          en: 'Go to "Search Documents", select the issuing authority (e.g. MoRTH for Driving License or CBSE for Marksheet), and enter your document number.',
          hi: '"Search Documents" में जाएं, जारीकर्ता चुनें (जैसे लाइसेंस के लिए MoRTH) और अपना दस्तावेज नंबर डालें।',
          mr: '"Search Documents" मध्ये जाऊन संबंधित विभाग निवडा (उदा. लायसन्ससाठी परिवहन विभाग) आणि नंबर टाका.',
        },
        whyItMatters: {
          en: 'The document is fetched directly from the issuer server and cannot be forged.',
          hi: 'दस्तावेज सीधे सरकारी विभाग के सर्वर से आता है, इसलिए यह पूर्णतः प्रामाणिक है।',
          mr: 'कागदपत्र थेट संबंधित शासकीय सर्व्हरवरून येते, त्यामुळे ते बनावट असण्याची शक्यता नसते.',
        },
        requiredAction: {
          en: 'Consent to fetch the document. It will appear under your "Issued Documents" tab.',
          hi: 'दस्तावेज प्राप्त करने की सहमति दें। यह आपके "Issued Documents" अनुभाग में आ जाएगा।',
          mr: 'संमती द्या; कागदपत्र तुमच्या "Issued Documents" मध्ये कायमस्वरूपी उपलब्ध होईल.',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Show digital copy',
          hi: 'डिजिटल कॉपी दिखाएं',
          mr: 'डिजिटल कागदपत्र दाखवा',
        },
        explanation: {
          en: 'Open the DigiLocker app to show the QR-verified document whenever requested by authorities.',
          hi: 'मांगे जाने पर डिजीलॉकर ऐप में क्यूआर कोड युक्त सत्यापित दस्तावेज दिखाएं।',
          mr: 'आवश्यकता असेल तेव्हा ॲप उघडून क्यूआर कोड असलेला अधिकृत दाखला दाखवा.',
        },
        whyItMatters: {
          en: 'Under Rule 9A of the Information Technology Rules, 2016, DigiLocker issued documents are legally at par with physical originals.',
          hi: 'आईटी नियम 2016 के नियम 9A के तहत, ये दस्तावेज मूल कागजों के पूर्णतः समतुल्य हैं।',
          mr: 'आयटी कायदा नियमानुसार डिजीलॉकरमधील कागदपत्रे नाकारणे बेकायदेशीर आहे.',
        },
        requiredAction: {
          en: 'Never share your DigiLocker 6-digit PIN with anyone.',
          hi: 'अपना 6 अंकों का डिजीलॉकर सुरक्षा पिन कभी किसी से साझा न करें।',
          mr: 'तुमचा ६ अंकी डिजीलॉकर सिक्युरिटी पिन कधीही कोणाला सांगू नका.',
        },
      },
    ],
    officialSource: {
      name: 'DigiLocker - Ministry of Electronics and IT (MeitY)',
      url: 'https://www.digilocker.gov.in',
      portalName: 'National DigiLocker Portal',
      verifiedNote: {
        en: 'Official Government of India platform for digital document wallet.',
        hi: 'डिजिटल दस्तावेज वॉलेट के लिए भारत सरकार का आधिकारिक मंच।',
        mr: 'भारत सरकारचे अधिकृत डिजिटल कागदपत्र वॉलेट पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['digilocker', 'digital document', 'driving license online', 'marksheet download', 'rc book online', 'digital locker'],
      hi: ['डिजीलॉकर', 'डिजिटल दस्तावेज', 'लाइसेंस ऑनलाइन', 'मार्कशीट डाउनलोड', 'आरसी डाउनलोड'],
      mr: ['डिजीलॉकर', 'डिजिटल कागदपत्रे', 'ड्रायव्हिंग लायसन्स मोबाईलमध्ये', 'गुणपत्रिका', 'आरसी बुक'],
    },
    disclaimer: {
      en: 'Sahayak AI does not store passwords or documents. We provide safe guidance only.',
      hi: 'सहायक कोई पासवर्ड या दस्तावेज संचित नहीं करता। केवल सुरक्षित मार्गदर्शन।',
      mr: 'सहायक कोणताही पासवर्ड किंवा कागदपत्र साठवत नाही. केवळ सुरक्षित मार्गदर्शन.',
    },
  },
  {
    id: 'post-matric-scholarship',
    slug: 'post-matric-scholarship',
    category: 'education',
    name: {
      en: 'Scholarship',
      hi: 'छात्रवृत्ति',
      mr: 'शिष्यवृत्ती',
    },
    shortDescription: {
      en: 'Find education support',
      hi: 'शिक्षा सहायता खोजें',
      mr: 'शिक्षणासाठी आर्थिक मदत मिळवा',
    },
    whoItMayHelp: {
      en: [
        'Students whose annual family income is within government scholarship thresholds (typically below ₹2.5 Lakh or ₹8 Lakh for EBC)',
        'SC, ST, VJNT, OBC, SBC, and Economically Backward Class (EBC) students',
        'Students enrolled in recognized government or private affiliated colleges',
      ],
      hi: [
        'वे छात्र जिनके परिवार की वार्षिक आय निर्धारित सीमा के भीतर है',
        'एससी, एसटी, ओबीसी, ईडब्ल्यूएस और अल्पसंख्यक समुदाय के विद्यार्थी',
        'मान्यता प्राप्त कॉलेजों में उच्च शिक्षा प्राप्त कर रहे छात्र',
      ],
      mr: [
        'ज्यांच्या कुटुंबाचे वार्षिक उत्पन्न शासकीय मर्यादेत (उदा. २.५ लाख किंवा ईबीसीसाठी ८ लाख) आहे असे विद्यार्थी',
        'मागासवर्गीय, आर्थिक दुर्बल (EBC/EWS) आणि अल्पसंख्याक संवर्गातील विद्यार्थी',
        'मान्यताप्राप्त महाविद्यालयात किंवा विद्यापीठात शिक्षण घेणारे विद्यार्थी',
      ],
    },
    commonRequirements: {
      en: [
        'Current College Admission Fee Receipt and Allotment Letter',
        'Valid Income Certificate (issued by competent Tehsildar)',
        'Caste Certificate and Caste Validity Certificate (if applying under reserved category)',
        'Previous year marksheet showing passing grades',
        'Bank account seeded with Aadhaar (NPCI active)',
      ],
      hi: [
        'कॉलेज प्रवेश शुल्क रसीद और आवंटन पत्र',
        'तहसीलदार द्वारा जारी वैध आय प्रमाण पत्र',
        'जाति प्रमाण पत्र (यदि लागू हो)',
        'पिछली कक्षा की अंकतालिका (पास)',
        'आधार से जुड़ा बैंक खाता (NPCI एक्टिव)',
      ],
      mr: [
        'महाविद्यालयीन प्रवेश पावती (Admission Receipt) आणि वाटप पत्र',
        'तहसीलदारांचा वैध उत्पन्नाचा दाखला',
        'जात प्रमाणपत्र आणि जात वैधता प्रमाणपत्र (लागू असल्यास)',
        'मागील शैक्षणिक वर्षाची उत्तीर्ण गुणपत्रिका',
        'आधार संलग्न असलेले राष्ट्रीयीकृत बँक खाते (Aadhaar Seeding / NPCI)',
      ],
    },
    documents: [
      {
        id: 'sch-income',
        name: {
          en: 'Income certificate',
          hi: 'आय प्रमाण पत्र',
          mr: 'उत्पन्न दाखला',
        },
        description: {
          en: 'Tehsildar issued certificate reflecting family earnings.',
          hi: 'तहसीलदार द्वारा जारी पारिवारिक आय प्रमाण पत्र।',
          mr: 'तहसीलदार यांनी दिलेला कुटुंबाचा उत्पन्नाचा दाखला.',
        },
        isMandatory: true,
      },
      {
        id: 'sch-fee',
        name: {
          en: 'Fee receipt',
          hi: 'फीस रसीद',
          mr: 'फी पावती',
        },
        description: {
          en: 'Receipt confirming active enrollment in current academic year.',
          hi: 'वर्तमान शैक्षणिक वर्ष में सक्रिय नामांकन की रसीद।',
          mr: 'चालू शैक्षणिक वर्षात प्रवेश निश्चित झाल्याची पावती.',
        },
        isMandatory: true,
      },
      {
        id: 'sch-bank',
        name: {
          en: 'Aadhaar-linked bank passbook',
          hi: 'आधार लिंक बैंक पासबुक',
          mr: 'आधार लिंक बँक पासबुक',
        },
        description: {
          en: 'Direct Benefit Transfer (DBT) requires NPCI mapping on this account.',
          hi: 'डीबीटी के माध्यम से राशि पाने के लिए आधार लिंक बैंक खाता।',
          mr: 'शिष्यवृत्तीची रक्कम थेट खात्यात (DBT) येण्यासाठी आधार लिंक बँक खाते.',
        },
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Check bank link',
          hi: 'बैंक लिंक जांचें',
          mr: 'बँक खाते तपासा',
        },
        explanation: {
          en: 'Government scholarship funds are deposited directly via Aadhaar-enabled DBT. Check with your bank branch that your savings account is NPCI active.',
          hi: 'छात्रवृत्ति की राशि सीधे आधार डीबीटी से आती है। बैंक जाकर सुनिश्चित करें कि खाता एनपीसीआई से सक्रिय रूप से लिंक है।',
          mr: 'शिष्यवृत्तीचे पैसे थेट बँक खात्यात (DBT) जमा होतात. तुमचे बँक खाते NPCI शी लिंक असल्याची खात्री करा.',
        },
        whyItMatters: {
          en: 'Unlinked bank accounts are the single most common cause of scholarship payment failure.',
          hi: 'खाता लिंक न होना छात्रवृत्ति अटकने का सबसे बड़ा कारण है।',
          mr: 'बँक खाते आधारशी संलग्न नसल्यास शिष्यवृत्ती मंजूर होऊनही पैसे जमा होत नाहीत.',
        },
        requiredAction: {
          en: 'Ask your bank for an "Aadhaar Seeding Confirmation" if you are unsure.',
          hi: 'यदि संदेह हो तो अपनी बैंक शाखा से आधार सीडिंग की पुष्टि करवाएं।',
          mr: 'शंका असल्यास बँकेत जाऊन आधार सीडिंग फॉर्म भरून खात्री करा.',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Register profile',
          hi: 'प्रोफाइल बनाएं',
          mr: 'नोंदणी करा',
        },
        explanation: {
          en: 'Visit the official portal (such as MahaDBT in Maharashtra or NSP nationally) and create your student profile.',
          hi: 'आधिकारिक पोर्टल (जैसे महाराष्ट्र में MahaDBT या राष्ट्रीय स्तर पर NSP) पर प्रोफाइल बनाएं।',
          mr: 'अधिकृत पोर्टलवर (उदा. MahaDBT / National Scholarship Portal) जाऊन विद्यार्थी प्रोफाईल तयार करा.',
        },
        whyItMatters: {
          en: 'A complete profile matches you to specific applicable scholarship schemes automatically.',
          hi: 'पूरी प्रोफाइल आपको सही छात्रवृत्ति योजनाओं से स्वतः जोड़ती है।',
          mr: 'अचूक प्रोफाईलमुळे तुम्हाला कोणत्या योजनेचा लाभ मिळू शकतो हे समजते.',
        },
        requiredAction: {
          en: 'Enter personal details, address, caste category, and current course information.',
          hi: 'व्यक्तिगत जानकारी, वर्ग और वर्तमान पाठ्यक्रम का विवरण भरें।',
          mr: 'वैयक्तिक माहिती, जात प्रवर्ग आणि चालू अभ्यासक्रमाचा तपशील अचूक भरा.',
        },
        officialActionUrl: 'https://mahadbt.maharashtra.gov.in',
      },
      {
        stepNumber: 3,
        title: {
          en: 'Apply online',
          hi: 'ऑनलाइन आवेदन करें',
          mr: 'ऑनलाइन अर्ज करा',
        },
        explanation: {
          en: 'Upload clean scans of income certificate, marksheets, and fee receipt, then click apply.',
          hi: 'आय प्रमाण पत्र, अंकतालिका और फीस रसीद अपलोड करके आवेदन सबमिट करें।',
          mr: 'उत्पन्नाचा दाखला, गुणपत्रिका आणि फी पावती अपलोड करून अर्ज सबमिट करा.',
        },
        whyItMatters: {
          en: 'The college scholarship clerk conducts the initial verification before forwarding to the Social Welfare department.',
          hi: 'कॉलेज क्लर्क समाज कल्याण विभाग को भेजने से पहले दस्तावेजों की जांच करता है।',
          mr: 'कॉलेजच्या तपासणीनंतरच अर्ज समाज कल्याण विभागाकडे अंतिम मंजुरीसाठी जातो.',
        },
        requiredAction: {
          en: 'Submit a printed copy of the submitted form with document xerox to your college scholarship counter.',
          hi: 'आवेदन की एक मुद्रित प्रति और दस्तावेजों की फोटोकॉपी अपने कॉलेज काउंटर पर जमा करें।',
          mr: 'अर्जाची प्रिंट काढून आवश्यक कागदपत्रांसह कॉलेजच्या शिष्यवृत्ती विभागात जमा करा.',
        },
      },
    ],
    officialSource: {
      name: 'MahaDBT / National Scholarship Portal (NSP)',
      url: 'https://scholarships.gov.in',
      portalName: 'Direct Benefit Transfer Scholarship Portal',
      verifiedNote: {
        en: 'Official portal for state and central government educational scholarships.',
        hi: 'केंद्र और राज्य सरकार की शैक्षणिक छात्रवृत्ति के लिए आधिकारिक पोर्टल।',
        mr: 'केंद्र व राज्य शासनाच्या शिष्यवृत्ती योजनांचे अधिकृत पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['scholarship', 'education help', 'college fee concession', 'mahadbt', 'post matric', 'student assistance'],
      hi: ['छात्रवृत्ति', 'स्कॉलरशिप', 'शिक्षा सहायता', 'कॉलेज फीस छूट', 'विद्यार्थी मदद'],
      mr: ['शिष्यवृत्ती', 'शिक्षणासाठी मदत', 'कॉलेज फी सवलत', 'महाडीबीटी', 'विद्यार्थी सहाय्य', 'मुलींचे शिक्षण'],
    },
    disclaimer: {
      en: 'Deadlines and quotas vary each year. Verify on the official portal.',
      hi: 'अंतिम तिथि हर वर्ष बदलती है। आधिकारिक पोर्टल पर जांचें।',
      mr: 'अंतिम मुदत वेळोवेळी बदलू शकते. अधिकृत पोर्टल तपासून घ्या.',
    },
  },
  {
    id: 'digital-payments-safety',
    slug: 'digital-payments-safety',
    category: 'digital_finance',
    name: {
      en: 'UPI Help',
      hi: 'यूपीआई मदद',
      mr: 'UPI मदत',
    },
    shortDescription: {
      en: 'Learn digital payments',
      hi: 'डिजिटल पेमेंट सीखें',
      mr: 'डिजिटल पेमेंट्स शिका',
    },
    whoItMayHelp: {
      en: [
        'Senior citizens and first-time smartphone users starting to use digital payments',
        'Small business owners and citizens paying grocery and utility bills online',
        'Anyone who wants to understand UPI safety without complex financial jargon',
      ],
      hi: [
        'वरिष्ठ नागरिक और पहली बार डिजिटल पेमेंट इस्तेमाल करने वाले लोग',
        'ऑनलाइन बिल और किराना भुगतान करने वाले उपभोक्ता',
        'जो बिना जटिल बैंकिंग भाषा के यूपीआई सुरक्षा समझना चाहते हैं',
      ],
      mr: [
        'ज्येष्ठ नागरिक आणि स्मार्टफोनवर नव्याने डिजिटल व्यवहार सुरू करणारे नागरिक',
        'किराणा, वीज बिल आणि दैनंदिन व्यवहार सुरक्षित करू इच्छिणारे लोक',
        'ऑनलाइन फसवणुकीपासून स्वतःचे बँक खाते सुरक्षित ठेवू इच्छिणारे सर्वजण',
      ],
    },
    commonRequirements: {
      en: [
        'A bank account with an active debit/ATM card for one-time UPI registration',
        'Mobile number linked to the same bank account inserted in your smartphone',
        'A trusted payment application (e.g. BHIM UPI, official bank UPI app)',
      ],
      hi: [
        'यूपीआई पंजीकरण के लिए बैंक खाता और डेबिट/एटीएम कार्ड',
        'बैंक में दर्ज मोबाइल नंबर वाला सिम कार्ड उसी फोन में सक्रिय होना चाहिए',
        'एक विश्वसनीय पेमेंट ऐप (जैसे भीम यूपीआई अथवा बैंक का आधिकारिक ऐप)',
      ],
      mr: [
        'UPI नोंदणीसाठी बँक खाते आणि चालू डेबिट/एटीएम कार्ड',
        'बँकेशी जोडलेला मोबाईल नंबर असलेला सिम कार्ड फोनमध्ये असणे आवश्यक',
        'विश्वासू पेमेंट ॲप (उदा. BHIM UPI किंवा अधिकृत बँक ॲप)',
      ],
    },
    documents: [],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Understand UPI PIN',
          hi: 'यूपीआई पिन समझें',
          mr: 'UPI पिन समजून घ्या',
        },
        explanation: {
          en: 'You NEVER need to enter your UPI PIN to receive money, win a prize, or get a refund. If someone asks you to enter a PIN to receive funds, it is a scam.',
          hi: 'पैसे प्राप्त करने, पुरस्कार जीतने या रिफंड पाने के लिए कभी भी यूपीआई पिन दर्ज नहीं करना होता। कोई ऐसा कहे तो वह फ्रॉड है।',
          mr: 'पैसे स्वीकारण्यासाठी, बक्षीस किंवा रिफंड मिळवण्यासाठी कधीही UPI पिन टाकण्याची गरज नसते. पैसे मिळवण्यासाठी पिन मागितल्यास तो १००% फ्रॉड आहे.',
        },
        whyItMatters: {
          en: 'Entering your PIN authorizes funds to leave your bank account immediately.',
          hi: 'पिन डालते ही आपके बैंक खाते से पैसे तुरंत कट जाते हैं।',
          mr: 'पिन टाकताच तुमच्या खात्यातून पैसे समोरच्या खात्यात ट्रान्सफर होतात.',
        },
        requiredAction: {
          en: 'Remember: PIN = Pay. No PIN is ever required to receive funds.',
          hi: 'याद रखें: पिन केवल पैसे भेजने के लिए है, लेने के लिए नहीं।',
          mr: 'लक्षात ठेवा: पिन फक्त पैसे पाठवण्यासाठी; पैसे घेण्यासाठी पिन नसतो.',
        },
      },
      {
        stepNumber: 2,
        title: {
          en: 'Check recipient name',
          hi: 'प्राप्तकर्ता का नाम जांचें',
          mr: 'समोरचे नाव तपासा',
        },
        explanation: {
          en: 'When you scan a QR code or enter a phone number, the app displays the official registered account holder name. Look at it carefully.',
          hi: 'क्यूआर कोड स्कैन करने पर स्क्रीन पर खाताधारक का सही नाम दिखता है। पुष्टि के बाद ही आगे बढ़ें।',
          mr: 'QR कोड स्कॅन केल्यावर स्क्रीनवर समोरच्या दुकानदाराचे किंवा व्यक्तीचे नाव दिसते. ते नाव बरोबर असल्याची खात्री करा.',
        },
        whyItMatters: {
          en: 'Verifying the name prevents sending money to fraudulent or mistakenly swapped QR codes.',
          hi: 'नाम जांचने से गलत खाते या बदले हुए क्यूआर कोड पर पैसे जाने से बचाव होता है।',
          mr: 'नाव तपासल्याने चुकीच्या व्यक्तीला किंवा बदललेल्या QR कोडवर पैसे जाणे टळते.',
        },
        requiredAction: {
          en: 'Read the screen name aloud or double check it with the vendor before confirming.',
          hi: 'भुगतान की पुष्टि से पहले दुकानदार से नाम मिलाकर देखें।',
          mr: 'दुकानदाराला "तुमचे नाव हेच दिसत आहे का?" अशी विचारणा करा.',
        },
      },
      {
        stepNumber: 3,
        title: {
          en: 'Payment failed help',
          hi: 'विफल भुगतान मदद',
          mr: 'पैसे अडकल्यास काय करावे',
        },
        explanation: {
          en: 'Don’t panic. Under RBI guidelines, interbank settlements auto-reverse within 24 to 48 banking hours. Check your transaction status in the app.',
          hi: 'घबराएं नहीं। आरबीआई के नियमों के अनुसार 24 से 48 घंटों में पैसे स्वतः वापस आ जाते हैं। ऐप में स्टेटस जांचें।',
          mr: 'घाबरू नका. रिझर्व्ह बँकेच्या नियमांनुसार तांत्रिक अडचणीमुळे कापलेले पैसे २४ ते ४८ तासांत आपोआप खात्यात परत जमा होतात.',
        },
        whyItMatters: {
          en: 'Fraudsters often pose as fake customer care executives on Google Search to exploit panicking users.',
          hi: 'घबराहट में गूगल पर फर्जी हेल्पलाइन नंबर खोजने से ठगी का खतरा होता है।',
          mr: 'घाबरून गुगलवर कस्टमर केअर नंबर शोधल्यास सायबर भामटे फसवणूक करू शकतात.',
        },
        requiredAction: {
          en: 'Only use the in-app "Raise Dispute" button or call the official toll-free number written on your bank passbook.',
          hi: 'केवल ऐप के भीतर "Raise Dispute" विकल्प का उपयोग करें या पासबुक पर दिए नंबर पर कॉल करें।',
          mr: 'केवळ ॲपमधील "Help / Raise Dispute" पर्याय वापरा किंवा पासबुकवरील बँकेच्या टोल-फ्री नंबरवर संपर्क साधा.',
        },
      },
    ],
    officialSource: {
      name: 'National Payments Corporation of India (NPCI) & RBI Kehta Hai',
      url: 'https://www.npci.org.in',
      portalName: 'NPCI UPI Safety Portal',
      verifiedNote: {
        en: 'Official national authority operating UPI and digital retail payment infrastructure in India.',
        hi: 'भारत में यूपीआई और डिजिटल भुगतान का संचालन करने वाला आधिकारिक राष्ट्रीय प्राधिकरण।',
        mr: 'भारतातील UPI चे नियमन करणारी अधिकृत संस्था (NPCI).',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['upi', 'digital payment', 'send money', 'qr code', 'bhim', 'online payment', 'google pay', 'phonepe', 'upi safety'],
      hi: ['यूपीआई', 'डिजिटल पेमेंट', 'पैसे भेजना', 'क्यूआर कोड', 'ऑनलाइन पेमेंट', 'यूपीआई फ्रॉड'],
      mr: ['यूपीआय', 'डिजिटल पेमेंट', 'पैसे पाठवणे', 'क्यूआर कोड', 'मोबाईलवरून पैसे', 'यूपीआय सुरक्षा', 'पिन'],
    },
    disclaimer: {
      en: 'Educational guidance only. We never ask for your PIN or OTP.',
      hi: 'केवल मार्गदर्शन। हम कभी भी आपका पिन या ओटीपी नहीं मांगते।',
      mr: 'केवळ मार्गदर्शनासाठी. आम्ही कधीही तुमचा पिन किंवा OTP मागत नाही.',
    },
  },
  {
    id: 'senior-citizen-assistance',
    slug: 'senior-citizen-assistance',
    category: 'social_welfare',
    name: {
      en: 'Senior Citizen Benefits',
      hi: 'वरिष्ठ नागरिक सेवा',
      mr: 'ज्येष्ठ नागरिक सेवा',
    },
    shortDescription: {
      en: 'Pension and senior benefits',
      hi: 'पेंशन और वरिष्ठ लाभ',
      mr: 'पेन्शन आणि ज्येष्ठ नागरिक लाभ',
    },
    whoItMayHelp: {
      en: [
        'Pensioners needing to submit annual life certificates without visiting physical bank queues',
        'Senior citizens seeking fare concessions and healthcare priority cards',
        'Elderly citizens needing step-by-step assistance with assistive font and read-aloud support',
      ],
      hi: [
        'पेंशनभोगी जिन्हें बैंक गए बिना वार्षिक जीवन प्रमाण पत्र जमा करना है',
        'वरिष्ठ नागरिक पहचान पत्र और स्वास्थ्य लाभ चाहने वाले बुजुर्ग',
        'बड़ी लिखावट और बोलकर सुनने की सुविधा चाहने वाले नागरिक',
      ],
      mr: [
        'बँकेच्या रांगेत न उभे राहता घरबसल्या हयातीचा दाखला (Life Certificate) सादर करू इच्छिणारे पेन्शनधारक',
        'ज्येष्ठ नागरिक ओळखपत्र आणि सवलतींचा लाभ घेऊ इच्छिणारे नागरिक',
        'मोठ्या अक्षरात व आवाजाच्या सहाय्याने मार्गदर्शन हवे असणारे वृद्ध',
      ],
    },
    commonRequirements: {
      en: [
        'Aadhaar number and PPO (Pension Payment Order) number',
        'Bank account details where pension is credited',
        'Smartphone with front camera for Aadhaar Face RD verification or local CSC visit',
      ],
      hi: [
        'आधार नंबर और पीपीओ (पेंशन पेमेंट ऑर्डर) नंबर',
        'पेंशन खाता संख्या',
        'चेहरे के सत्यापन के लिए कैमरा वाला स्मार्टफोन अथवा नजदीकी सीएससी केंद्र',
      ],
      mr: [
        'आधार क्रमांक आणि पीपीओ (PPO) क्रमांक',
        'पेन्शन जमा होणाऱ्या बँक खात्याचा तपशील',
        'कॅमेरा असलेला स्मार्टफोन (Aadhaar Face RD ॲप) किंवा जवळचे आपले सरकार / CSC केंद्र',
      ],
    },
    documents: [
      {
        id: 'snr-ppo',
        name: {
          en: 'PPO number / passbook',
          hi: 'पीपीओ नंबर / पासबुक',
          mr: 'पीपीओ क्रमांक / पासबुक',
        },
        description: {
          en: 'The unique reference number assigned to every central/state pensioner.',
          hi: 'प्रत्येक पेंशनभोगी को आवंटित अद्वितीय पहचान संख्या।',
          mr: 'पेन्शन सुरू झाल्यावर मिळालेला अधिकृत पीपीओ क्रमांक.',
        },
        isMandatory: true,
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Understand life certificate',
          hi: 'जीवन प्रमाण समझें',
          mr: 'हयातीचा दाखला समजून घ्या',
        },
        explanation: {
          en: 'Every year in November, pensioners can generate their life certificate digitally using face authentication on their smartphone without standing in queues.',
          hi: 'हर वर्ष नवंबर में पेंशनभोगी घर बैठे स्मार्टफोन के कैमरे से चेहरा स्कैन करके जीवन प्रमाण पत्र जमा कर सकते हैं।',
          mr: 'दरवर्षी नोव्हेंबर महिन्यात पेन्शनधारकांना बँकेत न जाता स्मार्टफोनवरील फेस ऑथेंटिकेशनने घरबसल्या हयातीचा दाखला सादर करता येतो.',
        },
        whyItMatters: {
          en: 'Timely submission prevents interruption of monthly pension credits.',
          hi: 'समय पर प्रमाण पत्र देने से मासिक पेंशन रुकती नहीं है।',
          mr: 'वेळेवर हयातीचा दाखला न दिल्यास मासिक पेन्शन तात्पुरती थांबू शकते.',
        },
        requiredAction: {
          en: 'Keep your PPO number and pension bank account number handy.',
          hi: 'अपना पीपीओ नंबर और पेंशन बैंक खाता नंबर साथ रखें।',
          mr: 'तुमचा पीपीओ क्रमांक आणि पेन्शन खात्याचा नंबर लिहून ठेवा.',
        },
        officialActionUrl: 'https://jeevanpramaan.gov.in',
      },
      {
        stepNumber: 2,
        title: {
          en: 'Submit certificate',
          hi: 'प्रमाणपत्र जमा करें',
          mr: 'दाखला सादर करा',
        },
        explanation: {
          en: 'Install the official "Jeevan Pramaan" and "Aadhaar FaceRD" apps from Google Play Store, or request a doorstep postman visit via India Post Payments Bank.',
          hi: 'जीवन प्रमाण ऐप का उपयोग करें या डाकिया को घर बुलाकर बायोमेट्रिक सत्यापन करवाएं।',
          mr: 'जीवन प्रमाण ॲप वापरा किंवा इंडिया पोस्टच्या माध्यमातून पोस्टमनला घरी बोलावून बायोमेट्रिक हयातीचा दाखला द्या.',
        },
        whyItMatters: {
          en: 'The digital certificate is delivered instantly to your pension disbursing bank automatically.',
          hi: 'डिजिटल प्रमाण पत्र स्वतः आपके पेंशन बैंक को ऑनलाइन पहुंच जाता है।',
          mr: 'हा दाखला थेट तुमच्या पेन्शन बँकेकडे ऑनलाइन जमा होतो; पावती मोबाईलवर येते.',
        },
        requiredAction: {
          en: 'Save the Pramaan ID SMS confirmation as your proof of submission.',
          hi: 'एसएमएस में आए प्रमाण आईडी को अपने पास सुरक्षित रखें।',
          mr: 'मोबाईलवर आलेला मेसेज व दाखल्याचा क्रमांक सुरक्षित ठेवा.',
        },
      },
    ],
    officialSource: {
      name: 'Jeevan Pramaan - National Life Certificate Portal',
      url: 'https://jeevanpramaan.gov.in',
      portalName: 'Ministry of Personnel, Public Grievances and Pensions',
      verifiedNote: {
        en: 'Official Government of India portal for biometric and face-authenticated digital life certificates.',
        hi: 'डिजिटल जीवन प्रमाण पत्र के लिए भारत सरकार का आधिकारिक पोर्टल।',
        mr: 'डिजिटल जीवन प्रमाणपत्रासाठी भारत सरकारचे अधिकृत पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['senior citizen', 'pension', 'life certificate', 'jeevan pramaan', 'elderly help', 'old age pension'],
      hi: ['वरिष्ठ नागरिक', 'पेंशन', 'जीवन प्रमाण पत्र', 'हयाती का दाखिला', 'बुजुर्ग सहायता'],
      mr: ['ज्येष्ठ नागरिक', 'पेन्शन', 'हयातीचा दाखला', 'जीवन प्रमाण', 'वृद्धापकाळ पेन्शन', 'म्हातारपण'],
    },
    disclaimer: {
      en: 'Doorstep postman service may carry a small fee (~₹70).',
      hi: 'घर बैठे डाक सेवा के लिए मामूली शुल्क (~₹70) हो सकता है।',
      mr: 'घरपोच पोस्टमन सेवेसाठी अल्प शासकीय शुल्क (~₹७०) असू शकते.',
    },
  },
  {
    id: 'public-grievance',
    slug: 'public-grievance',
    category: 'grievances',
    name: {
      en: 'Public Grievance',
      hi: 'सरकारी शिकायत',
      mr: 'नागरी तक्रार',
    },
    shortDescription: {
      en: 'File complaints with government',
      hi: 'सरकारी शिकायत दर्ज करें',
      mr: 'शासकीय तक्रार नोंदवा',
    },
    whoItMayHelp: {
      en: [
        'Citizens whose legitimate applications are pending beyond the citizen charter timelines',
        'Beneficiaries not receiving approved pensions, scholarships, or rations',
        'People facing unresponsive local municipal or administrative offices',
      ],
      hi: [
        'वे नागरिक जिनके आवेदन निर्धारित समय सीमा से अधिक समय से लंबित हैं',
        'जिन्हें स्वीकृत छात्रवृत्ति या राशन मिलने में परेशानी हो रही है',
        'स्थानीय कार्यालय से सुनवाई न होने पर उच्च स्तर पर शिकायत दर्ज करने वाले लोग',
      ],
      mr: [
        'सेवा हमी कायद्यानुसार वेळेत दाखला किंवा सेवा न मिळालेले नागरिक',
        'मंजूर होऊनही पेन्शन, शिष्यवृत्ती किंवा रेशन न मिळालेले लाभार्थी',
        'स्थानिक कार्यालयाकडून योग्य प्रतिसाद न मिळाल्यास वरिष्ठ अधिकाऱ्यांकडे दाद मागणारे नागरिक',
      ],
    },
    commonRequirements: {
      en: [
        'Reference application number or token ID of the pending service',
        'Specific details of the office/department involved',
        'Brief plain-language description of what went wrong',
      ],
      hi: [
        'लंबित सेवा का आवेदन क्रमांक या संदर्भ नंबर',
        'संबंधित विभाग अथवा कार्यालय का नाम',
        'समस्या का संक्षिप्त और स्पष्ट विवरण',
      ],
      mr: [
        'मूळ अर्जाचा टोकन किंवा संदर्भ क्रमांक',
        'संबंधित शासकीय कार्यालयाचे नाव',
        'नेमकी काय अडचण आली याचे स्पष्ट व साध्या भाषेतील वर्णन',
      ],
    },
    documents: [],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Identify department',
          hi: 'विभाग पहचानें',
          mr: 'विभाग ओळखा',
        },
        explanation: {
          en: 'State matters (revenue, ration, electricity, municipal roads) go to your state portal (e.g. Aaple Sarkar Grievance). Central matters (railways, postal, national banks, EPFO) go to CPGRAMS.',
          hi: 'राज्य स्तर की शिकायतों के लिए राज्य का पोर्टल (जैसे आपले सरकार) और केंद्रीय विषयों (रेलवे, डाक, बैंक, पीएफ) के लिए CPGRAMS का उपयोग करें।',
          mr: 'स्थानिक बाबींसाठी (उदा. रेशन, दाखले, वीज) राज्याचे आपले सरकार पोर्टल, तर रेल्वे, पोस्ट, राष्ट्रीयीकृत बँक यांसाठी CPGRAMS वापरावे.',
        },
        whyItMatters: {
          en: 'Filing in the correct tier prevents automatic inter-departmental transfers that waste weeks.',
          hi: 'सही पोर्टल पर शिकायत करने से समय की बचत होती है और त्वरित कार्यवाही होती है।',
          mr: 'योग्य ठिकाणी तक्रार केल्यास फाईल इकडून तिकडे फिरण्यात वेळ वाया जात नाही.',
        },
        requiredAction: {
          en: 'Select the appropriate portal link based on whether the service is state or national.',
          hi: 'विभाग के अनुसार सही पोर्टल का चयन करें।',
          mr: 'संबंधित पोर्टलची निवड करा.',
        },
        officialActionUrl: 'https://pgportal.gov.in',
      },
      {
        stepNumber: 2,
        title: {
          en: 'Write complaint',
          hi: 'शिकायत लिखें',
          mr: 'तक्रार लिहा',
        },
        explanation: {
          en: 'State your application token number, date of submission, and the exact action pending. Avoid emotional expressions; focus on documented dates.',
          hi: 'आवेदन क्रमांक, आवेदन की तारीख और क्या कार्य रुका हुआ है, केवल आवश्यक तथ्यों का उल्लेख करें।',
          mr: 'अर्जाचा क्रमांक, तारीख आणि नेमके काय काम बाकी आहे ते मुद्देसूद लिहा. कागदपत्रांचे पुरावे सोबत जोडा.',
        },
        whyItMatters: {
          en: 'Public Grievance Officers act fastest on concise, reference-backed submissions.',
          hi: 'स्पष्ट और दस्तावेजों के साथ दर्ज शिकायतों पर अधिकारी तेजी से संज्ञान लेते हैं।',
          mr: 'तपशील स्पष्ट असल्यास तक्रार निवारण अधिकारी त्वरित आदेश देऊ शकतात.',
        },
        requiredAction: {
          en: 'Submit and save the Grievance Registration Number for tracking.',
          hi: 'शिकायत दर्ज कर पंजीकरण संख्या सुरक्षित रखें।',
          mr: 'तक्रार नोंदवून तक्रार क्रमांक (Grievance Registration Number) जपून ठेवा.',
        },
      },
    ],
    officialSource: {
      name: 'CPGRAMS (Central) & Aaple Sarkar Grievance (Maharashtra)',
      url: 'https://pgportal.gov.in',
      portalName: 'Centralized Public Grievance Redress and Monitoring System',
      verifiedNote: {
        en: 'Official statutory grievance portal monitored by the Department of Administrative Reforms & Public Grievances.',
        hi: 'प्रशासनिक सुधार और लोक शिकायत विभाग द्वारा संचालित आधिकारिक राष्ट्रीय शिकायत पोर्टल।',
        mr: 'प्रशासकीय सुधारणा व सार्वजनिक तक्रार विभागाचे अधिकृत राष्ट्रीय तक्रार पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['grievance', 'complaint government', 'service delayed', 'cpgrams', 'aaple sarkar complaint', 'officer not responding'],
      hi: ['शिकायत', 'जन शिकायत', 'सरकारी काम रुका हुआ', 'पोर्टल शिकायत', 'अधिकारी सुन नहीं रहे'],
      mr: ['तक्रार', 'शासकीय तक्रार', 'काम होत नाही', 'तक्रार नोंदणी', 'विलंब तक्रार', 'दाद मागणे'],
    },
    disclaimer: {
      en: 'Court matters cannot be filed on grievance portals.',
      hi: 'कोर्ट के मामलों की शिकायत पोर्टल पर नहीं की जा सकती।',
      mr: 'न्यायालयीन प्रकरणे तक्रार पोर्टलवर दाखल करता येत नाहीत.',
    },
  },
  {
    id: 'ration-card-services',
    slug: 'ration-card-services',
    category: 'social_welfare',
    name: {
      en: 'Ration Card',
      hi: 'राशन कार्ड',
      mr: 'रेशन कार्ड',
    },
    shortDescription: {
      en: 'Food grain support card',
      hi: 'राशन कार्ड और अनाज सहायता',
      mr: 'रेशन कार्ड आणि धान्य सहाय्य',
    },
    whoItMayHelp: {
      en: [
        'Families needing to add a newborn child or new daughter-in-law to the ration card',
        'Migrant workers wanting to collect subsidized rations anywhere in India under ONORC',
        'Households checking their monthly entitled grain allocation',
      ],
      hi: [
        'परिवार में नए सदस्य (बच्चे या बहू) का नाम राशन कार्ड में जुड़वाने वाले नागरिक',
        'प्रवासी श्रमिक जो वन नेशन वन राशन कार्ड के तहत किसी भी शहर में राशन लेना चाहते हैं',
        'मासिक अनाज कोटे की सही मात्रा जानने के इच्छुक परिवार',
      ],
      mr: [
        'रेशन कार्डमध्ये नवीन सदस्याचे (उदा. बाळ किंवा सून) नाव समाविष्ट करू इच्छिणारे कुटुंब',
        'कामानिमित्त स्थलांतरित झालेले कामगार जे इतर शहरातही रेशन घेऊ इच्छितात',
        'दरमहा मिळणाऱ्या धान्याचे प्रमाण व अधिकृत भाव तपासू इच्छिणारे नागरिक',
      ],
    },
    commonRequirements: {
      en: [
        'Existing Ration Card Number',
        'Aadhaar card of all family members to be linked',
        'Birth certificate (for newborn) or Marriage certificate (for spouse)',
      ],
      hi: [
        'वर्तमान राशन कार्ड नंबर',
        'परिवार के सभी सदस्यों के आधार कार्ड',
        'जन्म प्रमाण पत्र (बच्चे के लिए) या विवाह प्रमाण पत्र (विवाह के मामले में)',
      ],
      mr: [
        'सध्याच्या रेशन कार्डचा नंबर',
        'समाविष्ट करावयाच्या सर्व व्यक्तींचे आधार कार्ड',
        'लहान मूल असल्यास जन्म दाखला किंवा सुनेचे नाव असल्यास विवाह नोंदणी दाखला',
      ],
    },
    documents: [],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Check family link',
          hi: 'सदस्य आधार जांचें',
          mr: 'सदस्य आधार तपासा',
        },
        explanation: {
          en: 'Food grains under National Food Security Act (NFSA) are distributed using biometric e-PoS machines. Every family member must have their Aadhaar seeded.',
          hi: 'राशन वितरण बायोमेट्रिक ई-पॉस मशीन द्वारा होता है, इसलिए सभी का आधार जुड़ा होना आवश्यक है।',
          mr: 'रास्त भाव दुकानात बायोमेट्रिक अंगठ्यावरून धान्य मिळते, त्यामुळे घरातील सर्वांचे आधार कार्ड रेशनला जोडलेले असणे आवश्यक आहे.',
        },
        whyItMatters: {
          en: 'Unseeded members cannot be authenticated at the ration shop.',
          hi: 'आधार लिंक न होने पर उस सदस्य के हिस्से का अनाज मिलने में कठिनाई हो सकती है।',
          mr: 'आधार लिंक नसल्यास त्या सदस्याचे धान्य मिळण्यात अडचण येऊ शकते.',
        },
        requiredAction: {
          en: 'Visit the Food Civil Supplies portal or the Mera Ration app to view family members status.',
          hi: 'मेरा राशन ऐप अथवा खाद्य आपूर्ति पोर्टल पर अपने राशन कार्ड की स्थिति देखें।',
          mr: 'मेरा रेशन (Mera Ration) ॲप किंवा पुरवठा विभागाच्या पोर्टलवर सदस्यांची यादी तपासा.',
        },
        officialActionUrl: 'https://nfsa.gov.in',
      },
    ],
    officialSource: {
      name: 'National Food Security Portal (NFSA) / Mera Ration App',
      url: 'https://nfsa.gov.in',
      portalName: 'Department of Food and Public Distribution',
      verifiedNote: {
        en: 'Official central food security portal managing ONORC and grain distribution records.',
        hi: 'खाद्य और सार्वजनिक वितरण विभाग का आधिकारिक राष्ट्रीय पोर्टल।',
        mr: 'अन्न व नागरी पुरवठा विभागाचे अधिकृत राष्ट्रीय पोर्टल.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['ration card', 'food security', 'grain quota', 'mera ration', 'add name ration card', 'ration shop'],
      hi: ['राशन कार्ड', 'खाद्य सुरक्षा', 'अनाज कोटा', 'राशन में नाम जोड़ना', 'राशन दुकान'],
      mr: ['रेशन कार्ड', 'अन्नधान्य', 'रेशन दुकानात धान्य', 'रेशनवर नाव वाढवणे', 'रेशनिंग'],
    },
    disclaimer: {
      en: 'Grain quota depends on your ration card category.',
      hi: 'अनाज का कोटा राशन कार्ड श्रेणी पर निर्भर करता है।',
      mr: 'धान्याचे प्रमाण रेशन कार्डच्या प्रवर्गावर अवलंबून असते.',
    },
  },
  {
    id: 'aadhaar-address-update',
    slug: 'aadhaar-address-update',
    category: 'identity',
    name: {
      en: 'Aadhaar Address Update',
      hi: 'आधार पता बदलाव',
      mr: 'आधार पत्ता बदल',
    },
    shortDescription: {
      en: 'Update your Aadhaar address',
      hi: 'आधार का पता बदलें',
      mr: 'आधारवरील पत्ता अपडेट करा',
    },
    whoItMayHelp: {
      en: [
        'Citizens who recently relocated to a new rental house or city',
        'People requiring an updated address for bank KYC, passport, or subsidy schemes',
        'Women updating marital address without visiting crowded physical enrolment centers',
      ],
      hi: [
        'जो लोग हाल ही में नए पते या शहर में स्थानांतरित हुए हैं',
        'बैंक या सरकारी योजनाओं के लिए पते का सही रिकॉर्ड चाहने वाले लोग',
        'विवाह के बाद आधार में पता अपडेट करवाने वाली महिलाएं',
      ],
      mr: [
        'नुकतेच नवीन घरात किंवा शहरात वास्तव्यास गेलेले नागरिक',
        'बँक खाते किंवा शासकीय योजनांसाठी नवीन पत्ता हवा असणारे लोक',
        'विवाहानंतर सासरचा पत्ता आधारवर अद्ययावत करू इच्छिणाऱ्या महिला',
      ],
    },
    commonRequirements: {
      en: [
        'Aadhaar number linked to an active mobile phone to receive login OTP',
        'Valid address proof document in your name (Electricity bill, Rent agreement, Bank statement, Voter ID)',
        'Statutory online fee of ₹50 paid via UPI or card',
      ],
      hi: [
        'ओटीपी के लिए आधार से लिंक चालू मोबाइल नंबर',
        'स्वयं के नाम पर वैध पता प्रमाण (बिजली बिल, बैंक पासबुक, रेंट एग्रीमेंट या वोटर कार्ड)',
        'पोर्टल पर ₹50 का ऑनलाइन शुल्क',
      ],
      mr: [
        'ओटीपीसाठी आधारशी जोडलेला चालू मोबाईल क्रमांक',
        'स्वतःच्या नावावरील अधिकृत पत्त्याचा पुरावा (वीज बिल, बँक पासबुक, भाडेकरार किंवा मतदार ओळखपत्र)',
        'शासकीय ऑनलाइन शुल्क ₹५० (UPI किंवा कार्डद्वारे)',
      ],
    },
    documents: [],
    steps: [
      {
        stepNumber: 1,
        title: {
          en: 'Log in to portal',
          hi: 'पोर्टल पर लॉगिन करें',
          mr: 'पोर्टलवर लॉगिन करा',
        },
        explanation: {
          en: 'Always verify the URL starts with "myaadhaar.uidai.gov.in". Never click on unverified search ad links claiming to update Aadhaar.',
          hi: 'हमेशा सुनिश्चित करें कि वेबसाइट "myaadhaar.uidai.gov.in" ही हो। किसी अन्य विज्ञापन लिंक पर क्लिक न करें।',
          mr: 'वेबसाईटचा पत्ता "myaadhaar.uidai.gov.in" असल्याची खात्री करा. गुगलवरील संशयास्पद जाहिरातींवर क्लिक करू नका.',
        },
        whyItMatters: {
          en: 'Fake phishing websites mimic UIDAI to harvest your identity details.',
          hi: 'फर्जी वेबसाइट्स आपकी पहचान संबंधी जानकारी चुरा सकती हैं।',
          mr: 'बनावट वेबसाईट तुमची वैयक्तिक माहिती चोरी करू शकतात.',
        },
        requiredAction: {
          en: 'Enter your 12-digit Aadhaar, complete Captcha, and enter the SMS OTP.',
          hi: '12 अंकों का आधार नंबर डालें, कैप्चा भरें और मोबाइल पर आया ओटीपी दर्ज करें।',
          mr: 'आधार क्रमांक टाका, कॅप्चा भरा आणि मोबाईलवर आलेला ओटीपी प्रविष्ट करा.',
        },
        officialActionUrl: 'https://myaadhaar.uidai.gov.in',
      },
    ],
    officialSource: {
      name: 'Unique Identification Authority of India (UIDAI)',
      url: 'https://myaadhaar.uidai.gov.in',
      portalName: 'myAadhaar Portal',
      verifiedNote: {
        en: 'Sole statutory authority for Aadhaar generation and demographic updates in India.',
        hi: 'भारत में आधार जारी और संशोधित करने वाला एकमात्र वैधानिक प्राधिकरण।',
        mr: 'भारतात आधार कार्डचे नियमन करणारी एकमेव अधिकृत शासकीय संस्था.',
      },
    },
    languages: ['en', 'hi', 'mr'],
    keywords: {
      en: ['aadhaar address update', 'change address aadhaar', 'myaadhaar', 'uidai', 'address proof aadhaar'],
      hi: ['आधार में पता बदलना', 'आधार कार्ड संशोधन', 'माई आधार', 'आधार पता अपडेट'],
      mr: ['आधार पत्ता बदल', 'आधार कार्ड दुरुस्ती', 'पत्ता बदलणे', 'माय आधार', 'नवीन पत्ता'],
    },
    disclaimer: {
      en: 'Only address can be updated online. Other changes require an Aadhaar center visit.',
      hi: 'ऑनलाइन केवल पता बदलता है। अन्य बदलाव के लिए आधार केंद्र जाना होता है।',
      mr: 'ऑनलाइन फक्त पत्ता बदलता येतो. इतर बदलांसाठी आधार केंद्रात जावे लागते.',
    },
  },
];
