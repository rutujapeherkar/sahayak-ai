import { Language } from '@/types';

export interface Translations {
  nav: {
    brand: string;
    tagline: string;
    home: string;
    exploreServices: string;
    askSahayak: string;
    explainScreen: string;
    digitalPayments: string;
    saved: string;
    accessibility: string;
    about: string;
  };
  home: {
    heroQuestion: string;
    heroSubtitle: string;
    inputPlaceholder: string;
    voiceButtonLabel: string;
    voiceListening: string;
    askButton: string;
    examplesHeading: string;
    exploreServicesTitle: string;
    exploreServicesDesc: string;
    explainScreenTitle: string;
    explainScreenDesc: string;
    digitalPaymentsTitle: string;
    digitalPaymentsDesc: string;
    accessibilityTitle: string;
    accessibilityDesc: string;
    confidenceModeTitle: string;
    confidenceModeDesc: string;
  };
  assistant: {
    pageTitle: string;
    pageSubtitle: string;
    conversationTitle: string;
    guidanceTitle: string;
    clearChat: string;
    inputPlaceholder: string;
    sendButton: string;
    voiceInput: string;
    voiceStop: string;
    understoodLabel: string;
    recommendedServices: string;
    startJourney: string;
    viewDetails: string;
    readAloud: string;
    stopReading: string;
    saveService: string;
    saved: string;
    officialSource: string;
    currentTaskTitle: string;
    noActiveTask: string;
    noActiveTaskDesc: string;
    clarificationPrompt: string;
    disclaimer: string;
  };
  services: {
    pageTitle: string;
    pageSubtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    certificates: string;
    education: string;
    digitalFinance: string;
    identity: string;
    socialWelfare: string;
    grievances: string;
    resultsFound: string;
    noResults: string;
    noResultsSuggestion: string;
    viewService: string;
    startJourney: string;
    whoItHelps: string;
    commonReqs: string;
    requiredDocs: string;
    stepByStep: string;
    officialSourceButton: string;
  };
  task: {
    step: string;
    of: string;
    progress: string;
    currentStep: string;
    whyItMatters: string;
    requiredAction: string;
    documentChecklist: string;
    markDone: string;
    completed: string;
    nextStep: string;
    previousStep: string;
    finishJourney: string;
    openOfficialPortal: string;
    confidenceMode: string;
    simpleMode: string;
    standardMode: string;
    assistedMode: string;
  };
  screenExplainer: {
    pageTitle: string;
    pageSubtitle: string;
    uploadBoxTitle: string;
    uploadBoxDesc: string;
    chooseFile: string;
    trySample: string;
    sampleScreens: string;
    analyzing: string;
    explanationTitle: string;
    screenType: string;
    requiredInformation: string;
    termsTitle: string;
    nextActionTitle: string;
    cautionTitle: string;
    disclaimer: string;
  };
  payments: {
    pageTitle: string;
    pageSubtitle: string;
    goldenRuleTitle: string;
    goldenRuleDesc: string;
    verifyRecipientTitle: string;
    verifyRecipientDesc: string;
    failedPaymentTitle: string;
    failedPaymentDesc: string;
    safetyChecklistTitle: string;
    disclaimer: string;
  };
  accessibility: {
    pageTitle: string;
    pageSubtitle: string;
    textSizeTitle: string;
    textSizeDesc: string;
    textSizeDefault: string;
    textSizeLarge: string;
    textSizeXLarge: string;
    contrastTitle: string;
    contrastDesc: string;
    contrastDefault: string;
    contrastHigh: string;
    motionTitle: string;
    motionDesc: string;
    motionNormal: string;
    motionReduced: string;
    voiceTitle: string;
    voiceDesc: string;
    voiceOn: string;
    voiceOff: string;
    languageTitle: string;
    languageDesc: string;
    previewHeading: string;
    previewBody: string;
    resetDefaults: string;
  };
  common: {
    disclaimer: string;
    officialSourceNote: string;
    verifyOfficial: string;
    privacyNote: string;
    back: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      brand: 'Sahayak AI',
      tagline: 'Services made simple',
      home: 'Home',
      exploreServices: 'Services',
      askSahayak: 'Ask',
      explainScreen: 'Explain Screen',
      digitalPayments: 'Payments',
      saved: 'Saved',
      accessibility: 'Settings',
      about: 'About',
    },
    home: {
      heroQuestion: 'What do you need help with?',
      heroSubtitle: 'Tell me what you want to do.',
      inputPlaceholder: 'Type your question...',
      voiceButtonLabel: 'Speak',
      voiceListening: 'Listening...',
      askButton: 'Ask',
      examplesHeading: 'Quick examples:',
      exploreServicesTitle: 'Services',
      exploreServicesDesc: 'Find certificates, schemes, and IDs.',
      explainScreenTitle: 'Explain Screen',
      explainScreenDesc: 'Understand any confusing portal screen.',
      digitalPaymentsTitle: 'Safe Payments',
      digitalPaymentsDesc: 'Learn UPI and avoid online scams.',
      accessibilityTitle: 'Settings',
      accessibilityDesc: 'Change text size, contrast, or voice.',
      confidenceModeTitle: 'Help Detail',
      confidenceModeDesc: 'Pick simple or detailed guidance.',
    },
    assistant: {
      pageTitle: 'Ask Sahayak',
      pageSubtitle: 'One simple step at a time.',
      conversationTitle: 'Chat',
      guidanceTitle: 'Next Action',
      clearChat: 'Clear',
      inputPlaceholder: 'Type in English, Hindi, or Marathi...',
      sendButton: 'Send',
      voiceInput: 'Speak',
      voiceStop: 'Stop',
      understoodLabel: 'I can help with that:',
      recommendedServices: 'Recommended:',
      startJourney: 'Start',
      viewDetails: 'Details',
      readAloud: 'Listen',
      stopReading: 'Stop',
      saveService: 'Save',
      saved: 'Saved',
      officialSource: 'Official Portal',
      currentTaskTitle: 'Current task:',
      noActiveTask: 'No active task',
      noActiveTaskDesc: 'Ask a question or pick a service below.',
      clarificationPrompt: 'What kind of help do you need?',
      disclaimer: 'Guidance only. Final submission happens on the official portal.',
    },
    services: {
      pageTitle: 'Public Services',
      pageSubtitle: 'Find what you need in plain words.',
      searchPlaceholder: 'Search (e.g. income, residence, scholarship)...',
      allCategories: 'All',
      certificates: 'Certificates',
      education: 'Scholarships',
      digitalFinance: 'Payments',
      identity: 'Identity',
      socialWelfare: 'Pensions & Welfare',
      grievances: 'Complaints',
      resultsFound: 'services',
      noResults: 'No matching service found.',
      noResultsSuggestion: 'Describe what you need (e.g. proof of where I live).',
      viewService: 'Details',
      startJourney: 'Start',
      whoItHelps: 'Who it helps',
      commonReqs: 'Requirements',
      requiredDocs: 'Documents needed',
      stepByStep: 'Steps',
      officialSourceButton: 'Open Official Portal',
    },
    task: {
      step: 'Step',
      of: 'of',
      progress: 'Progress',
      currentStep: 'Current Step',
      whyItMatters: 'Why it matters',
      requiredAction: 'What to do now',
      documentChecklist: 'Document checklist',
      markDone: 'Done',
      completed: 'Completed',
      nextStep: 'Next',
      previousStep: 'Back',
      finishJourney: 'Finish',
      openOfficialPortal: 'Open Official Portal',
      confidenceMode: 'Detail level:',
      simpleMode: 'Simple',
      standardMode: 'Standard',
      assistedMode: 'Detailed',
    },
    screenExplainer: {
      pageTitle: 'Explain This Screen',
      pageSubtitle: 'Upload a confusing screen for a quick breakdown.',
      uploadBoxTitle: 'Upload a screenshot',
      uploadBoxDesc: 'PNG, JPG, or WebP.',
      chooseFile: 'Choose File',
      trySample: 'Or test with a sample:',
      sampleScreens: 'Sample Screens',
      analyzing: 'Reading screen...',
      explanationTitle: 'Screen Breakdown',
      screenType: 'What is this?',
      requiredInformation: 'What is needed?',
      termsTitle: 'Terms explained',
      nextActionTitle: 'Next step',
      cautionTitle: 'Keep in mind',
      disclaimer: 'AI guidance only. Never share passwords or PINs.',
    },
    payments: {
      pageTitle: 'Safe Digital Payments',
      pageSubtitle: 'Learn UPI safety in 2 minutes.',
      goldenRuleTitle: 'The Golden Rule of UPI',
      goldenRuleDesc: 'UPI PIN is ONLY for SENDING money. You NEVER enter a PIN to receive money.',
      verifyRecipientTitle: 'Always check the name',
      verifyRecipientDesc: 'Read the name on your screen before typing your PIN.',
      failedPaymentTitle: 'Money deducted but payment failed?',
      failedPaymentDesc: 'Banks auto-reverse failed transfers within 24 to 48 hours.',
      safetyChecklistTitle: 'Safety Checklist',
      disclaimer: 'Educational guide. We never ask for PINs or OTPs.',
    },
    accessibility: {
      pageTitle: 'Accessibility Settings',
      pageSubtitle: 'Adjust for comfortable reading.',
      textSizeTitle: 'Text Size',
      textSizeDesc: 'Change font size.',
      textSizeDefault: 'Normal (16px)',
      textSizeLarge: 'Large (18px)',
      textSizeXLarge: 'Extra Large (20px)',
      contrastTitle: 'Contrast',
      contrastDesc: 'Boost border and text contrast.',
      contrastDefault: 'Normal',
      contrastHigh: 'High Contrast',
      motionTitle: 'Motion',
      motionDesc: 'Reduce animations.',
      motionNormal: 'Normal',
      motionReduced: 'Reduced Motion',
      voiceTitle: 'Read Aloud',
      voiceDesc: 'Speak out guidance.',
      voiceOn: 'On',
      voiceOff: 'Off',
      languageTitle: 'Language',
      languageDesc: 'Choose your language.',
      previewHeading: 'Preview',
      previewBody: 'This sample text shows your active font size and contrast settings.',
      resetDefaults: 'Reset',
    },
    common: {
      disclaimer: 'Sahayak AI gives guidance. Verify on the official portal before submitting.',
      officialSourceNote: 'Official Source',
      verifyOfficial: 'Verify on official portal before final submission.',
      privacyNote: 'Privacy: No passwords, OTPs, or IDs are stored.',
      back: 'Back',
    },
  },
  hi: {
    nav: {
      brand: 'सहायक AI',
      tagline: 'सेवाएं आसान बनाईं',
      home: 'होम',
      exploreServices: 'सेवाएं',
      askSahayak: 'पूछें',
      explainScreen: 'स्क्रीन समझें',
      digitalPayments: 'पेमेंट्स',
      saved: 'सेव की गई',
      accessibility: 'सेटिंग्स',
      about: 'परिचय',
    },
    home: {
      heroQuestion: 'आपको किसमें मदद चाहिए?',
      heroSubtitle: 'बताएं आप क्या करना चाहते हैं।',
      inputPlaceholder: 'यहाँ प्रश्न लिखें...',
      voiceButtonLabel: 'बोलें',
      voiceListening: 'सुन रहे हैं...',
      askButton: 'पूछें',
      examplesHeading: 'जल्दी चुनें:',
      exploreServicesTitle: 'सेवाएं',
      exploreServicesDesc: 'प्रमाणपत्र, योजनाएं और पहचान पत्र।',
      explainScreenTitle: 'स्क्रीन समझें',
      explainScreenDesc: 'कठिन फॉर्म का आसान मतलब जानें।',
      digitalPaymentsTitle: 'सुरक्षित पेमेंट्स',
      digitalPaymentsDesc: 'यूपीआई फ्रॉड से बचना सीखें।',
      accessibilityTitle: 'सेटिंग्स',
      accessibilityDesc: 'अक्षरों का आकार और भाषा बदलें।',
      confidenceModeTitle: 'मार्गदर्शन स्तर',
      confidenceModeDesc: 'सरल या विस्तृत जानकारी चुनें।',
    },
    assistant: {
      pageTitle: 'सहायक से पूछें',
      pageSubtitle: 'एक समय में एक आसान कदम।',
      conversationTitle: 'बातचीत',
      guidanceTitle: 'अगला कदम',
      clearChat: 'हटाएं',
      inputPlaceholder: 'हिंदी, मराठी या अंग्रेजी में लिखें...',
      sendButton: 'भेजें',
      voiceInput: 'बोलें',
      voiceStop: 'रोकें',
      understoodLabel: 'हम यह समझ पाए हैं:',
      recommendedServices: 'सुझाई गई सेवा:',
      startJourney: 'शुरू करें',
      viewDetails: 'विवरण',
      readAloud: 'सुनें',
      stopReading: 'रोकें',
      saveService: 'सेव करें',
      saved: 'सेव किया गया',
      officialSource: 'आधिकारिक पोर्टल',
      currentTaskTitle: 'चालू कार्य:',
      noActiveTask: 'कोई कार्य नहीं चुना गया',
      noActiveTaskDesc: 'नीचे से कोई सेवा चुनें या प्रश्न पूछें।',
      clarificationPrompt: 'आपको किस प्रकार की मदद चाहिए?',
      disclaimer: 'केवल मार्गदर्शन। अंतिम आवेदन आधिकारिक पोर्टल पर करें।',
    },
    services: {
      pageTitle: 'सरकारी सेवाएं',
      pageSubtitle: 'सरल शब्दों में समझें।',
      searchPlaceholder: 'खोजें (जैसे आय, निवास, छात्रवृत्ति)...',
      allCategories: 'सभी',
      certificates: 'प्रमाणपत्र',
      education: 'छात्रवृत्ति',
      digitalFinance: 'पेमेंट्स',
      identity: 'पहचान पत्र',
      socialWelfare: 'पेंशन एवं कल्याण',
      grievances: 'शिकायतें',
      resultsFound: 'सेवाएं',
      noResults: 'कोई सेवा नहीं मिली।',
      noResultsSuggestion: 'सीधे अपनी जरूरत लिखें (जैसे रहने का सबूत)।',
      viewService: 'विवरण',
      startJourney: 'शुरू करें',
      whoItHelps: 'किसके लिए',
      commonReqs: 'आवश्यकताएं',
      requiredDocs: 'जरूरी दस्तावेज',
      stepByStep: 'कदम',
      officialSourceButton: 'आधिकारिक पोर्टल खोलें',
    },
    task: {
      step: 'कदम',
      of: 'का',
      progress: 'प्रगति',
      currentStep: 'वर्तमान कदम',
      whyItMatters: 'क्यों जरूरी है',
      requiredAction: 'अब क्या करें',
      documentChecklist: 'दस्तावेज चेकलिस्ट',
      markDone: 'पूर्ण',
      completed: 'पूर्ण हुआ',
      nextStep: 'अगला',
      previousStep: 'पिछला',
      finishJourney: 'समाप्त',
      openOfficialPortal: 'आधिकारिक पोर्टल खोलें',
      confidenceMode: 'मार्गदर्शन स्तर:',
      simpleMode: 'सरल',
      standardMode: 'सामान्य',
      assistedMode: 'विस्तृत',
    },
    screenExplainer: {
      pageTitle: 'यह स्क्रीन समझें',
      pageSubtitle: 'स्क्रीनशॉट अपलोड करें और आसान अर्थ जानें।',
      uploadBoxTitle: 'स्क्रीनशॉट अपलोड करें',
      uploadBoxDesc: 'PNG, JPG या WebP.',
      chooseFile: 'फाइल चुनें',
      trySample: 'या नमूना स्क्रीन देखें:',
      sampleScreens: 'नमूना स्क्रीन',
      analyzing: 'स्क्रीन जांच रहे हैं...',
      explanationTitle: 'स्क्रीन का विवरण',
      screenType: 'यह क्या है?',
      requiredInformation: 'क्या भरना है?',
      termsTitle: 'कठिन शब्द',
      nextActionTitle: 'अगला कदम',
      cautionTitle: 'ध्यान रखें',
      disclaimer: 'केवल मार्गदर्शन। कभी भी पिन या पासवर्ड न डालें।',
    },
    payments: {
      pageTitle: 'सुरक्षित डिजिटल पेमेंट्स',
      pageSubtitle: 'यूपीआई सुरक्षा को 2 मिनट में समझें।',
      goldenRuleTitle: 'यूपीआई का मुख्य नियम',
      goldenRuleDesc: 'यूपीआई पिन केवल पैसे भेजने के लिए है। पैसे पाने के लिए पिन कभी न डालें।',
      verifyRecipientTitle: 'हमेशा नाम जांचें',
      verifyRecipientDesc: 'पिन डालने से पहले स्क्रीन पर दिखने वाला नाम जरूर देखें।',
      failedPaymentTitle: 'पैसे कट गए पर भुगतान नहीं हुआ?',
      failedPaymentDesc: 'चिंता न करें, 24 से 48 घंटे में पैसे वापस आ जाते हैं।',
      safetyChecklistTitle: 'सुरक्षा चेकलिस्ट',
      disclaimer: 'शैक्षणिक गाइड। हम कभी पिन या ओटीपी नहीं मांगते।',
    },
    accessibility: {
      pageTitle: 'सुलभता सेटिंग्स',
      pageSubtitle: 'सुविधा अनुसार अक्षर और रंग बदलें।',
      textSizeTitle: 'अक्षर आकार',
      textSizeDesc: 'फॉन्ट आकार बदलें।',
      textSizeDefault: 'सामान्य (16px)',
      textSizeLarge: 'बड़ा (18px)',
      textSizeXLarge: 'अति बड़ा (20px)',
      contrastTitle: 'कंट्रास्ट',
      contrastDesc: 'रंग कंट्रास्ट बढ़ाएं।',
      contrastDefault: 'सामान्य',
      contrastHigh: 'उच्च कंट्रास्ट',
      motionTitle: 'एनिमेशन',
      motionDesc: 'गति कम करें।',
      motionNormal: 'सामान्य',
      motionReduced: 'कम गति',
      voiceTitle: 'बोलकर सुनना',
      voiceDesc: 'निर्देश आवाज में सुनें।',
      voiceOn: 'चालू',
      voiceOff: 'बंद',
      languageTitle: 'भाषा',
      languageDesc: 'अपनी भाषा चुनें।',
      previewHeading: 'पूर्वावलोकन',
      previewBody: 'यह नमूना पाठ आपके चुने गए अक्षर और कंट्रास्ट को दिखाता है।',
      resetDefaults: 'रीसेट',
    },
    common: {
      disclaimer: 'सहायक एआई मार्गदर्शन देता है। अंतिम आवेदन आधिकारिक पोर्टल पर करें।',
      officialSourceNote: 'आधिकारिक स्रोत',
      verifyOfficial: 'अंतिम आवेदन से पहले आधिकारिक पोर्टल जांचें।',
      privacyNote: 'गोपनीयता: कोई पासवर्ड या ओटीपी सेव नहीं होता।',
      back: 'पीछे',
    },
  },
  mr: {
    nav: {
      brand: 'सहायक AI',
      tagline: 'सेवा सोपी केली',
      home: 'मुख्यपृष्ठ',
      exploreServices: 'सेवा',
      askSahayak: 'विचारा',
      explainScreen: 'स्क्रीन समजून घ्या',
      digitalPayments: 'पेमेंट्स',
      saved: 'सेव्ह केलेल्या',
      accessibility: 'सेटिंग्ज',
      about: 'माहिती',
    },
    home: {
      heroQuestion: 'कशासाठी मदत हवी आहे?',
      heroSubtitle: 'तुम्हाला काय करायचे आहे ते सांगा.',
      inputPlaceholder: 'येथे प्रश्न लिहा...',
      voiceButtonLabel: 'बोला',
      voiceListening: 'ऐकत आहोत...',
      askButton: 'विचारा',
      examplesHeading: 'पटकन निवडा:',
      exploreServicesTitle: 'सेवा',
      exploreServicesDesc: 'दाखले, पेन्शन आणि ओळखपत्रे.',
      explainScreenTitle: 'स्क्रीन समजून घ्या',
      explainScreenDesc: 'कठीण फॉर्मचा सोपा अर्थ जाणून घ्या.',
      digitalPaymentsTitle: 'सुरक्षित पेमेंट्स',
      digitalPaymentsDesc: 'UPI फ्रॉडपासून सावध राहा.',
      accessibilityTitle: 'सेटिंग्ज',
      accessibilityDesc: 'अक्षरांचा आकार किंवा भाषा बदला.',
      confidenceModeTitle: 'माहितीचे स्वरूप',
      confidenceModeDesc: 'साधे किंवा सविस्तर मार्गदर्शन.',
    },
    assistant: {
      pageTitle: 'सहायकला विचारा',
      pageSubtitle: 'एका वेळी एकच सोपी पायरी.',
      conversationTitle: 'संवाद',
      guidanceTitle: 'पुढील कृती',
      clearChat: 'पुसा',
      inputPlaceholder: 'मराठी, हिंदी किंवा इंग्रजीत लिहा...',
      sendButton: 'पाठवा',
      voiceInput: 'बोला',
      voiceStop: 'थांबवा',
      understoodLabel: 'यासाठी आम्ही मदत करू शकतो:',
      recommendedServices: 'सुचवलेली सेवा:',
      startJourney: 'सुरू करा',
      viewDetails: 'माहिती',
      readAloud: 'ऐका',
      stopReading: 'थांबवा',
      saveService: 'सेव्ह करा',
      saved: 'सेव्ह केले',
      officialSource: 'अधिकृत पोर्टल',
      currentTaskTitle: 'चालू काम:',
      noActiveTask: 'कोणतेही काम निवडलेले नाही',
      noActiveTaskDesc: 'खालील सेवा निवडा किंवा प्रश्न विचारा.',
      clarificationPrompt: 'कोणत्या प्रकारची मदत हवी आहे?',
      disclaimer: 'केवळ मार्गदर्शनासाठी. प्रत्यक्ष अर्ज अधिकृत पोर्टलवरच करा.',
    },
    services: {
      pageTitle: 'शासकीय सेवा',
      pageSubtitle: 'साध्या सोप्या मराठीत.',
      searchPlaceholder: 'शोधा (उदा. उत्पन्न, रहिवासी, शिष्यवृत्ती)...',
      allCategories: 'सर्व',
      certificates: 'दाखले',
      education: 'शिष्यवृत्ती',
      digitalFinance: 'पेमेंट्स',
      identity: 'ओळखपत्र',
      socialWelfare: 'पेन्शन व कल्याण',
      grievances: 'तक्रारी',
      resultsFound: 'सेवा',
      noResults: 'कोणतीही सेवा सापडली नाही.',
      noResultsSuggestion: 'थेट तुमची गरज लिहा (उदा. राहण्याचा पुरावा).',
      viewService: 'माहिती',
      startJourney: 'सुरू करा',
      whoItHelps: 'कोणासाठी',
      commonReqs: 'अटी व पात्रता',
      requiredDocs: 'लागणारी कागदपत्रे',
      stepByStep: 'पायऱ्या',
      officialSourceButton: 'अधिकृत पोर्टल उघडा',
    },
    task: {
      step: 'पायरी',
      of: 'पैकी',
      progress: 'प्रगती',
      currentStep: 'सध्याची पायरी',
      whyItMatters: 'का महत्त्वाचे',
      requiredAction: 'आता काय करावे',
      documentChecklist: 'कागदपत्रांची यादी',
      markDone: 'झाले',
      completed: 'पूर्ण झाले',
      nextStep: 'पुढे',
      previousStep: 'मागे',
      finishJourney: 'पूर्ण',
      openOfficialPortal: 'अधिकृत पोर्टल उघडा',
      confidenceMode: 'माहिती पातळी:',
      simpleMode: 'साधी',
      standardMode: 'सामान्य',
      assistedMode: 'सविस्तर',
    },
    screenExplainer: {
      pageTitle: 'स्क्रीन समजून घ्या',
      pageSubtitle: 'स्क्रीनशॉट अपलोड करा आणि सोपा अर्थ जाणून घ्या.',
      uploadBoxTitle: 'स्क्रीनशॉट अपलोड करा',
      uploadBoxDesc: 'PNG, JPG किंवा WebP.',
      chooseFile: 'फोटो निवडा',
      trySample: 'किंवा नमुना स्क्रीन पहा:',
      sampleScreens: 'नमुना स्क्रीन',
      analyzing: 'तपासणी सुरू आहे...',
      explanationTitle: 'स्क्रीनचा अर्थ',
      screenType: 'ही स्क्रीन कशाची आहे?',
      requiredInformation: 'काय भरायचे आहे?',
      termsTitle: 'कठीण शब्दांचा अर्थ',
      nextActionTitle: 'पुढील कृती',
      cautionTitle: 'काळजी घ्या',
      disclaimer: 'केवळ माहितीसाठी. पिन किंवा पासवर्ड कधीही देऊ नका.',
    },
    payments: {
      pageTitle: 'सुरक्षित डिजिटल पेमेंट्स',
      pageSubtitle: 'UPI सुरक्षा २ मिनिटांत समजून घ्या.',
      goldenRuleTitle: 'UPI चा सुवर्ण नियम',
      goldenRuleDesc: 'UPI पिन फक्त पैसे पाठवण्यासाठी असतो. पैसे स्वीकारण्यासाठी पिन कधीही टाकू नका.',
      verifyRecipientTitle: 'नेहमी नाव तपासा',
      verifyRecipientDesc: 'पिन टाकण्यापूर्वी समोर दिसणारे नाव बरोबर असल्याची खात्री करा.',
      failedPaymentTitle: 'पैसे कापले पण समोर पोहोचले नाहीत?',
      failedPaymentDesc: 'घाबरू नका, २४ ते ४८ तासांत पैसे आपोआप परत मिळतात.',
      safetyChecklistTitle: 'सुरक्षा यादी',
      disclaimer: 'केवळ जनजागृतीसाठी. आम्ही पिन किंवा OTP मागत नाही.',
    },
    accessibility: {
      pageTitle: 'सुलभता सेटिंग्ज',
      pageSubtitle: 'वाचायला सोपे जावे म्हणून बदल करा.',
      textSizeTitle: 'अक्षरांचा आकार',
      textSizeDesc: 'फॉन्ट आकार बदला.',
      textSizeDefault: 'नेहमीचा (16px)',
      textSizeLarge: 'मोठा (18px)',
      textSizeXLarge: 'खूप मोठा (20px)',
      contrastTitle: 'कॉन्ट्रास्ट',
      contrastDesc: 'कंट्रास्ट वाढवा.',
      contrastDefault: 'नेहमीचा',
      contrastHigh: 'हाय कॉन्ट्रास्ट',
      motionTitle: 'हालचाली',
      motionDesc: 'ॲनिमेशन कमी करा.',
      motionNormal: 'नेहमीच्या',
      motionReduced: 'कमी हालचाली',
      voiceTitle: 'आवाजात ऐकणे',
      voiceDesc: 'माहिती आवाजात ऐका.',
      voiceOn: 'चालू',
      voiceOff: 'बंद',
      languageTitle: 'भाषा',
      languageDesc: 'भाषा निवडा.',
      previewHeading: 'पूर्वावलोकन',
      previewBody: 'हा नमुना मजकूर तुमच्या फॉन्ट व कॉन्ट्रास्टची झलक दाखवतो.',
      resetDefaults: 'रीसेट',
    },
    common: {
      disclaimer: 'सहायक केवळ मार्गदर्शन करतो. अंतिम अर्ज अधिकृत पोर्टलवरच करा.',
      officialSourceNote: 'अधिकृत स्रोत',
      verifyOfficial: 'अंतिम अर्जापूर्वी अधिकृत पोर्टल तपासून घ्या.',
      privacyNote: 'गोपनीयता: कोणताही पासवर्ड किंवा OTP साठवला जात नाही.',
      back: 'मागे',
    },
  },
};
