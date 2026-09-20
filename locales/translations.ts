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
      tagline: 'Making digital services usable for everyone',
      home: 'Home',
      exploreServices: 'Explore Services',
      askSahayak: 'Ask Sahayak',
      explainScreen: 'Explain This Screen',
      digitalPayments: 'Digital Payments',
      saved: 'Saved',
      accessibility: 'Accessibility',
      about: 'About',
    },
    home: {
      heroQuestion: 'What are you trying to do?',
      heroSubtitle: 'Describe your goal in your own words. We help you understand which service you need and guide you step-by-step.',
      inputPlaceholder: 'e.g. I need a document proving where I live, or how to get an income certificate...',
      voiceButtonLabel: 'Speak your goal',
      voiceListening: 'Listening... please speak clearly',
      askButton: 'Ask Sahayak',
      examplesHeading: 'Or try one of these common goals:',
      exploreServicesTitle: 'Explore Services',
      exploreServicesDesc: 'Browse certificates, pensions, scholarships, and identity services in simple language.',
      explainScreenTitle: 'Explain This Screen',
      explainScreenDesc: 'Upload a confusing screenshot from any government portal and get a simple breakdown.',
      digitalPaymentsTitle: 'Digital Payments Learning',
      digitalPaymentsDesc: 'Learn how to pay bills safely with UPI without fear of cyber fraud.',
      accessibilityTitle: 'Accessibility Center',
      accessibilityDesc: 'Adjust text size, contrast, language, and screen reader preferences for maximum comfort.',
      confidenceModeTitle: 'Digital Confidence Mode',
      confidenceModeDesc: 'Tailor how detailed guidance should be based on your comfort with technology.',
    },
    assistant: {
      pageTitle: 'Ask Sahayak',
      pageSubtitle: 'Tell us what you want to achieve. We provide clear, structured guidance one step at a time.',
      conversationTitle: 'Conversation',
      guidanceTitle: 'Current Guidance & Action',
      clearChat: 'Clear Conversation',
      inputPlaceholder: 'Ask in English, Hindi, or Marathi...',
      sendButton: 'Send',
      voiceInput: 'Voice Input',
      voiceStop: 'Stop Listening',
      understoodLabel: 'Here is what I understood:',
      recommendedServices: 'Recommended Services',
      startJourney: 'Start Guided Journey',
      viewDetails: 'View Service Details',
      readAloud: 'Read Aloud',
      stopReading: 'Stop',
      saveService: 'Save for later',
      saved: 'Saved',
      officialSource: 'Official Portal',
      currentTaskTitle: 'Active Task Progress',
      noActiveTask: 'No active task selected',
      noActiveTaskDesc: 'Ask a question or select a recommended service to start a step-by-step journey.',
      clarificationPrompt: 'To help you accurately, please choose:',
      disclaimer: 'Sahayak AI provides educational guidance. Final application submission occurs on the official government portal.',
    },
    services: {
      pageTitle: 'Civic & Digital Services',
      pageSubtitle: 'Find essential public services explained in plain language without bureaucratic jargon.',
      searchPlaceholder: 'Search by what you want to do (e.g. living proof, college fees, pension)...',
      allCategories: 'All Categories',
      certificates: 'Certificates & Revenue',
      education: 'Education & Scholarships',
      digitalFinance: 'Digital Payments & UPI',
      identity: 'Identity & DigiLocker',
      socialWelfare: 'Social Welfare & Senior Citizens',
      grievances: 'Public Grievances',
      resultsFound: 'services found',
      noResults: 'No exact matches found.',
      noResultsSuggestion: 'Try describing what you need to accomplish instead of using administrative terms.',
      viewService: 'View Details',
      startJourney: 'Start Journey',
      whoItHelps: 'Who it may help',
      commonReqs: 'Common requirements',
      requiredDocs: 'Required documents checklist',
      stepByStep: 'Step-by-step procedure',
      officialSourceButton: 'Go to Official Government Portal',
    },
    task: {
      step: 'Step',
      of: 'of',
      progress: 'Overall Progress',
      currentStep: 'Current Action',
      whyItMatters: 'Why this step matters',
      requiredAction: 'What you need to do now',
      documentChecklist: 'Document Preparation Checklist',
      markDone: 'Mark as Completed',
      completed: 'Completed',
      nextStep: 'Next Step',
      previousStep: 'Previous Step',
      finishJourney: 'Complete Journey',
      openOfficialPortal: 'Open Official Service Portal',
      confidenceMode: 'Guidance Detail Level:',
      simpleMode: 'Simple (One thing at a time)',
      standardMode: 'Standard',
      assistedMode: 'Assisted (Extra explanations)',
    },
    screenExplainer: {
      pageTitle: 'Explain This Screen',
      pageSubtitle: 'Stuck on a confusing government portal or payment page? Upload a screenshot for a plain-language explanation.',
      uploadBoxTitle: 'Drag & drop your screenshot here',
      uploadBoxDesc: 'Supports PNG, JPG, JPEG, and WebP images. Max size 10MB.',
      chooseFile: 'Choose an Image File',
      trySample: 'Or click a sample government screen to test immediately:',
      sampleScreens: 'Sample Civic Portal Screens',
      analyzing: 'Analyzing screenshot...',
      explanationTitle: 'Screen Explanation Breakdown',
      screenType: 'What is this screen?',
      requiredInformation: 'Information required from you',
      termsTitle: 'Confusing terms explained simply',
      nextActionTitle: 'What should you do next?',
      cautionTitle: 'Important things to keep in mind',
      disclaimer: 'Sahayak AI explains screens to assist understanding. Never upload passwords, PINs, or sensitive bank credentials.',
    },
    payments: {
      pageTitle: 'Digital Payments & UPI Safety',
      pageSubtitle: 'Learn how to send money, scan QR codes, and pay utility bills without fear of fraud.',
      goldenRuleTitle: 'The Golden Rule of UPI',
      goldenRuleDesc: 'UPI PIN is ONLY entered to SEND money. You NEVER enter a PIN to receive money or get a refund.',
      verifyRecipientTitle: 'Always Check the Recipient Name',
      verifyRecipientDesc: 'Before confirming any transaction, read the name shown on your screen. Verify it matches the shop or person.',
      failedPaymentTitle: 'What If Money Was Deducted?',
      failedPaymentDesc: 'Do not panic. If money was deducted for a failed transaction, bank systems auto-reverse it within 24 to 48 hours.',
      safetyChecklistTitle: 'Interactive Safety Checklist',
      disclaimer: 'Educational guide only. Sahayak AI never requests your PIN or conducts financial transactions.',
    },
    accessibility: {
      pageTitle: 'Accessibility Control Center',
      pageSubtitle: 'Customize your reading and visual preferences. Changes are applied across the entire application.',
      textSizeTitle: 'Text Size',
      textSizeDesc: 'Increase font scale for comfortable reading without breaking the layout.',
      textSizeDefault: 'Default (16px)',
      textSizeLarge: 'Large (18px)',
      textSizeXLarge: 'Extra Large (20px)',
      contrastTitle: 'Contrast Mode',
      contrastDesc: 'Boost border definition and text contrast for low vision needs.',
      contrastDefault: 'Standard Contrast',
      contrastHigh: 'High Contrast',
      motionTitle: 'Motion & Animations',
      motionDesc: 'Reduce or eliminate interface transitions and animated elements.',
      motionNormal: 'Normal Motion',
      motionReduced: 'Reduced Motion',
      voiceTitle: 'Voice & Read Aloud',
      voiceDesc: 'Enable automatic text-to-speech support for key guidance points.',
      voiceOn: 'Enabled',
      voiceOff: 'Disabled',
      languageTitle: 'Preferred Language',
      languageDesc: 'Select your preferred language for all interface elements and guidance.',
      previewHeading: 'Live Preview',
      previewBody: 'This sample text demonstrates your active visual settings: font size, contrast, and layout clarity.',
      resetDefaults: 'Reset to Defaults',
    },
    common: {
      disclaimer: 'Sahayak AI is an independent accessibility assistance layer and is NOT an official government portal. Verify procedures on the official source.',
      officialSourceNote: 'Official Government Source',
      verifyOfficial: 'Verify on official portal before final submission.',
      privacyNote: 'Privacy First: No passwords, OTPs, or sensitive identity numbers are stored.',
      back: 'Go Back',
    },
  },
  hi: {
    nav: {
      brand: 'सहायक AI',
      tagline: 'डिजिटल सेवाओं को सबके लिए आसान बनाना',
      home: 'होम',
      exploreServices: 'सेवाएं देखें',
      askSahayak: 'सहायक से पूछें',
      explainScreen: 'स्क्रीन समझाएं',
      digitalPayments: 'डिजिटल भुगतान',
      saved: 'सुरक्षित सेवाएं',
      accessibility: 'सुलभता केंद्र',
      about: 'परिचय',
    },
    home: {
      heroQuestion: 'आप क्या करना चाहते हैं?',
      heroSubtitle: 'अपनी आवश्यकता को सरल भाषा में बताएं। हम सही सेवा ढूंढकर चरण-दर-चरण मार्गदर्शन करेंगे।',
      inputPlaceholder: 'उदा. मुझे निवास प्रमाण पत्र चाहिए, या आय प्रमाण पत्र कैसे बनवाएं...',
      voiceButtonLabel: 'बोलकर बताएं',
      voiceListening: 'सुन रहे हैं... कृपया स्पष्ट बोलें',
      askButton: 'सहायक से पूछें',
      examplesHeading: 'या इनमें से कोई विकल्प चुनें:',
      exploreServicesTitle: 'सेवाएं देखें',
      exploreServicesDesc: 'प्रमाणपत्र, पेंशन, छात्रवृत्ति और पहचान पत्र सेवाओं की सरल जानकारी।',
      explainScreenTitle: 'स्क्रीन समझाएं',
      explainScreenDesc: 'सरकारी पोर्टल का कठिन स्क्रीनशॉट अपलोड करें और सरल शब्दों में अर्थ समझें।',
      digitalPaymentsTitle: 'डिजिटल भुगतान सीखें',
      digitalPaymentsDesc: 'धोखाधड़ी से बचते हुए यूपीआई से सुरक्षित भुगतान करना सीखें।',
      accessibilityTitle: 'सुलभता केंद्र',
      accessibilityDesc: 'अक्षरों का आकार, रंग कंट्रास्ट और बोलकर सुनने की सुविधा सेट करें।',
      confidenceModeTitle: 'डिजिटल विश्वास मोड',
      confidenceModeDesc: 'अपनी सुविधानुसार मार्गदर्शन का विस्तार (सरल, सामान्य या विस्तृत) चुनें।',
    },
    assistant: {
      pageTitle: 'सहायक से पूछें',
      pageSubtitle: 'अपनी समस्या बताएं। हम आपको एक समय में एक स्पष्ट कदम का मार्गदर्शन देंगे।',
      conversationTitle: 'बातचीत',
      guidanceTitle: 'वर्तमान मार्गदर्शन एवं अगला कदम',
      clearChat: 'बातचीत साफ करें',
      inputPlaceholder: 'हिंदी, मराठी या अंग्रेजी में पूछें...',
      sendButton: 'भेजें',
      voiceInput: 'बोलकर बताएं',
      voiceStop: 'रोकें',
      understoodLabel: 'हम यह समझ पाए हैं:',
      recommendedServices: 'सुझाई गई सेवाएं',
      startJourney: 'मार्गदर्शन शुरू करें',
      viewDetails: 'विवरण देखें',
      readAloud: 'बोलकर सुनें',
      stopReading: 'रोकें',
      saveService: 'बाद के लिए सुरक्षित करें',
      saved: 'सुरक्षित किया गया',
      officialSource: 'आधिकारिक पोर्टल',
      currentTaskTitle: 'सक्रिय कार्य प्रगति',
      noActiveTask: 'कोई कार्य चुना नहीं गया है',
      noActiveTaskDesc: 'सवाल पूछें या सुझाई गई सेवा चुनकर प्रक्रिया शुरू करें।',
      clarificationPrompt: 'सटीक सहायता के लिए कृपया चुनें:',
      disclaimer: 'सहायक एआई केवल मार्गदर्शन देता है। अंतिम आवेदन आधिकारिक सरकारी पोर्टल पर ही करें।',
    },
    services: {
      pageTitle: 'नागरिक एवं डिजिटल सेवाएं',
      pageSubtitle: 'बिना कठिन कानूनी शब्दों के, आम नागरिक की सरल भाषा में समझें।',
      searchPlaceholder: 'आप क्या करना चाहते हैं लिखकर खोजें (उदा. कॉलेज फीस, आय, निवास)...',
      allCategories: 'सभी श्रेणियां',
      certificates: 'प्रमाणपत्र एवं राजस्व',
      education: 'शिक्षा एवं छात्रवृत्ति',
      digitalFinance: 'डिजिटल भुगतान एवं यूपीआई',
      identity: 'पहचान पत्र एवं डिजीलॉकर',
      socialWelfare: 'समाज कल्याण एवं पेंशन',
      grievances: 'जन शिकायत',
      resultsFound: 'सेवाएं मिलीं',
      noResults: 'कोई सटीक परिणाम नहीं मिला।',
      noResultsSuggestion: 'सरकारी शब्द के बजाय अपना मुख्य उद्देश्य लिखकर पुनः प्रयास करें।',
      viewService: 'विवरण देखें',
      startJourney: 'शुरू करें',
      whoItHelps: 'यह किसके काम आ सकती है',
      commonReqs: 'सामान्य आवश्यकताएं',
      requiredDocs: 'जरूरी दस्तावेजों की सूची',
      stepByStep: 'आवेदन की क्रमवार प्रक्रिया',
      officialSourceButton: 'आधिकारिक सरकारी पोर्टल पर जाएं',
    },
    task: {
      step: 'कदम',
      of: 'का',
      progress: 'कुल प्रगति',
      currentStep: 'वर्तमान कदम',
      whyItMatters: 'यह कदम क्यों जरूरी है',
      requiredAction: 'अब आपको क्या करना है',
      documentChecklist: 'दस्तावेज तैयारी सूची',
      markDone: 'पूर्ण चिह्नित करें',
      completed: 'पूर्ण',
      nextStep: 'अगला कदम',
      previousStep: 'पिछला कदम',
      finishJourney: 'प्रक्रिया समाप्त करें',
      openOfficialPortal: 'आधिकारिक पोर्टल खोलें',
      confidenceMode: 'मार्गदर्शन का स्तर:',
      simpleMode: 'सरल (एक समय में एक बात)',
      standardMode: 'सामान्य',
      assistedMode: 'विस्तृत (अतिरिक्त व्याख्या)',
    },
    screenExplainer: {
      pageTitle: 'यह स्क्रीन समझें',
      pageSubtitle: 'क्या किसी सरकारी पोर्टल पर कोई फॉर्म समझ नहीं आ रहा? स्क्रीनशॉट अपलोड करें और सरल अर्थ जानें।',
      uploadBoxTitle: 'स्क्रीनशॉट यहां खींचें या चुनें',
      uploadBoxDesc: 'PNG, JPG, WebP फाइलों का समर्थन। अधिकतम आकार 10MB।',
      chooseFile: 'फाइल चुनें',
      trySample: 'या तुरंत जांचने के लिए इस नमूना स्क्रीन पर क्लिक करें:',
      sampleScreens: 'नमूना सरकारी स्क्रीन',
      analyzing: 'स्क्रीन का विश्लेषण किया जा रहा है...',
      explanationTitle: 'स्क्रीन का सरल विवरण',
      screenType: 'यह कौन सी स्क्रीन है?',
      requiredInformation: 'आपसे मांगी गई जानकारी',
      termsTitle: 'कठिन शब्दों का आसान मतलब',
      nextActionTitle: 'अब आपको आगे क्या करना चाहिए?',
      cautionTitle: 'सावधानियां',
      disclaimer: 'यह व्याख्या समझने में मदद के लिए है। कभी भी पासवर्ड, पिन या ओटीपी अपलोड न करें।',
    },
    payments: {
      pageTitle: 'डिजिटल भुगतान एवं यूपीआई सुरक्षा',
      pageSubtitle: 'बिना डर के सुरक्षित रूप से पैसे भेजना, बिल भरना और फ्रॉड से बचना सीखें।',
      goldenRuleTitle: 'यूपीआई का स्वर्णिम नियम',
      goldenRuleDesc: 'यूपीआई पिन केवल पैसे भेजने के लिए दर्ज किया जाता है। पैसे पाने या रिफंड के लिए पिन कभी न डालें।',
      verifyRecipientTitle: 'हमेशा प्राप्तकर्ता का नाम जांचें',
      verifyRecipientDesc: 'पिन डालने से पहले स्क्रीन पर दिखने वाले नाम की दुकानदार से पुष्टि अवश्य करें।',
      failedPaymentTitle: 'यदि पैसे कट जाएं और भुगतान न हो?',
      failedPaymentDesc: 'घबराएं नहीं! बैंकिंग नियमों के तहत यह राशि 24 से 48 घंटों में आपके खाते में स्वतः लौट आती है।',
      safetyChecklistTitle: 'सुरक्षा चेकलिस्ट',
      disclaimer: 'यह केवल शैक्षणिक मार्गदर्शन है। सहायक कभी पिन नहीं मांगता और कोई लेनदेन नहीं करता।',
    },
    accessibility: {
      pageTitle: 'सुलभता नियंत्रण केंद्र',
      pageSubtitle: 'अपनी सुविधा के अनुसार अक्षरों और रंगों को बदलें। यह बदलाव पूरी वेबसाइट पर लागू होगा।',
      textSizeTitle: 'अक्षरों का आकार (Text Size)',
      textSizeDesc: 'आराम से पढ़ने के लिए अक्षरों का आकार बढ़ाएं।',
      textSizeDefault: 'सामान्य (16px)',
      textSizeLarge: 'बड़ा (18px)',
      textSizeXLarge: 'अति बड़ा (20px)',
      contrastTitle: 'कंट्रास्ट मोड',
      contrastDesc: 'कम रोशनी या कमजोर दृष्टि के लिए स्पष्ट बॉर्डर और गहरा रंग।',
      contrastDefault: 'सामान्य कंट्रास्ट',
      contrastHigh: 'उच्च कंट्रास्ट (High Contrast)',
      motionTitle: 'एनिमेशन व गति',
      motionDesc: 'स्क्रीन पर अनावश्यक गति और एनिमेशन बंद करें।',
      motionNormal: 'सामान्य',
      motionReduced: 'कम एनिमेशन (Reduced Motion)',
      voiceTitle: 'बोलकर सुनाना (Voice)',
      voiceDesc: 'निर्देशों को आवाज में सुनने की सुविधा चालू करें।',
      voiceOn: 'चालू',
      voiceOff: 'बंद',
      languageTitle: 'भाषा का चयन',
      languageDesc: 'पूरी वेबसाइट के लिए अपनी पसंदीदा भाषा चुनें।',
      previewHeading: 'लाइव पूर्वावलोकन',
      previewBody: 'यह नमूना पाठ आपके चुने गए आकार और कंट्रास्ट को प्रदर्शित करता है।',
      resetDefaults: 'मूल सेटिंग्स पर लौटें',
    },
    common: {
      disclaimer: 'सहायक एआई एक सुलभता सहायता प्रणाली है और यह कोई आधिकारिक सरकारी पोर्टल नहीं है। आधिकारिक पुष्टि अवश्य करें।',
      officialSourceNote: 'आधिकारिक सरकारी स्रोत',
      verifyOfficial: 'अंतिम आवेदन करने से पहले आधिकारिक पोर्टल पर नियम जांचें।',
      privacyNote: 'गोपनीयता सर्वोपरि: कोई पासवर्ड, ओटीपी या आधार नंबर यहां नहीं रखा जाता।',
      back: 'पीछे जाएं',
    },
  },
  mr: {
    nav: {
      brand: 'सहायक AI',
      tagline: 'डिजिटल सेवा प्रत्येकासाठी सुलभ आणि सोप्या',
      home: 'मुख्यपृष्ठ',
      exploreServices: 'सेवा शोधा',
      askSahayak: 'सहायकला विचारा',
      explainScreen: 'स्क्रीन समजून घ्या',
      digitalPayments: 'डिजिटल पेमेंट्स',
      saved: 'जतन केलेल्या सेवा',
      accessibility: 'सुलभता केंद्र',
      about: 'माहिती',
    },
    home: {
      heroQuestion: 'तुम्हाला काय करायचे आहे?',
      heroSubtitle: 'तुमची गरज साध्या शब्दांत सांगा. आम्ही योग्य सेवा शोधून एक-एक पाऊल पुढे जाण्यास मदत करू.',
      inputPlaceholder: 'उदा. मला उत्पन्नाचा दाखला काढायचा आहे, किंवा रहिवासी पुरावा काय लागतो...',
      voiceButtonLabel: 'बोलून सांगा',
      voiceListening: 'ऐकत आहोत... कृपया स्पष्ट बोला',
      askButton: 'सहायकला विचारा',
      examplesHeading: 'किंवा यापैकी एका पर्यायावर क्लिक करा:',
      exploreServicesTitle: 'सेवा शोधा',
      exploreServicesDesc: 'दाखले, पेन्शन, शिष्यवृत्ती आणि ओळखपत्रांची माहिती साध्या सोप्या मराठीत.',
      explainScreenTitle: 'स्क्रीन समजून घ्या',
      explainScreenDesc: 'शासकीय पोर्टलवरील अवघड फॉर्मचा फोटो अपलोड करा आणि त्याचा सोपा अर्थ समजून घ्या.',
      digitalPaymentsTitle: 'डिजिटल पेमेंट्स शिका',
      digitalPaymentsDesc: 'फसवणुकीची भीती न बाळगता UPI द्वारे सुरक्षित व्यवहार करायला शिका.',
      accessibilityTitle: 'सुलभता केंद्र',
      accessibilityDesc: 'अक्षरांचा आकार, हाय कॉन्ट्रास्ट आणि आवाजात वाचून दाखवण्याची सुविधा सेट करा.',
      confidenceModeTitle: 'डिजिटल आत्मविश्वास मोड',
      confidenceModeDesc: 'तुमच्या गरजेनुसार माहितीचे स्वरूप (साधे, मध्यम किंवा सविस्तर) निवडा.',
    },
    assistant: {
      pageTitle: 'सहायकला विचारा',
      pageSubtitle: 'तुम्हाला काय हवे आहे ते सांगा. आम्ही एका वेळी एकच गोष्ट समजावून सांगू.',
      conversationTitle: 'संवाद',
      guidanceTitle: 'सध्याचे मार्गदर्शन आणि पुढील कृती',
      clearChat: 'संवाद पुसून टाका',
      inputPlaceholder: 'मराठी, हिंदी किंवा इंग्रजीत विचारा...',
      sendButton: 'पाठवा',
      voiceInput: 'बोलून सांगा',
      voiceStop: 'थांबवा',
      understoodLabel: 'आम्हाला हे समजले:',
      recommendedServices: 'सुचवलेल्या सेवा',
      startJourney: 'मार्गदर्शन सुरू करा',
      viewDetails: 'सविस्तर माहिती',
      readAloud: 'ऐका (Read Aloud)',
      stopReading: 'थांबवा',
      saveService: 'नंतरसाठी सेव्ह करा',
      saved: 'सेव्ह केले',
      officialSource: 'अधिकृत पोर्टल',
      currentTaskTitle: 'चालू कामाची प्रगती',
      noActiveTask: 'सध्या कोणतेही काम निवडलेले नाही',
      noActiveTaskDesc: 'प्रश्न विचारा किंवा सुचवलेल्या सेवेवर क्लिक करून पायऱ्या सुरू करा.',
      clarificationPrompt: 'योग्य माहितीसाठी कृपया एक पर्याय निवडा:',
      disclaimer: 'सहायक एआय केवळ मार्गदर्शनासाठी आहे. प्रत्यक्ष अर्ज अधिकृत शासकीय पोर्टलवरच भरावा लागतो.',
    },
    services: {
      pageTitle: 'नागरी व डिजिटल सेवा',
      pageSubtitle: 'शासकीय क्लिष्ट भाषेऐवजी सर्वसामान्यांना समजणाऱ्या साध्या मराठीत.',
      searchPlaceholder: 'तुम्हाला काय करायचे आहे ते लिहा (उदा. उत्पन्न, रेशन, घरचा पत्ता)...',
      allCategories: 'सर्व वर्गवारी',
      certificates: 'दाखले आणि महसूल',
      education: 'शिक्षण आणि शिष्यवृत्ती',
      digitalFinance: 'डिजिटल पेमेंट्स व UPI',
      identity: 'ओळखपत्र आणि डिजीलॉकर',
      socialWelfare: 'समाजकल्याण व ज्येष्ठ नागरिक',
      grievances: 'नागरी तक्रार निवारण',
      resultsFound: 'सेवा आढळल्या',
      noResults: 'कोणतीही जुळणारी सेवा सापडली नाही.',
      noResultsSuggestion: 'शासकीय नावाऐवजी तुमची नेमकी अडचण किंवा उद्देश लिहून पुन्हा शोधा.',
      viewService: 'माहिती पहा',
      startJourney: 'सुरू करा',
      whoItHelps: 'ही सेवा कोणासाठी उपयुक्त आहे',
      commonReqs: 'सर्वसाधारण पात्रता व अटी',
      requiredDocs: 'लागणारी आवश्यक कागदपत्रे',
      stepByStep: 'अर्जाची पायरी-दर-पायरी पद्धत',
      officialSourceButton: 'अधिकृत शासकीय पोर्टलवर जा',
    },
    task: {
      step: 'पायरी',
      of: 'पैकी',
      progress: 'एकूण प्रगती',
      currentStep: 'सध्याची पायरी',
      whyItMatters: 'ही पायरी का महत्त्वाची आहे?',
      requiredAction: 'आता तुम्हाला काय करायचे आहे?',
      documentChecklist: 'कागदपत्रांची पडताळणी यादी',
      markDone: 'झाले म्हणून खूण करा',
      completed: 'पूर्ण झाले',
      nextStep: 'पुढील पायरी',
      previousStep: 'मागील पायरी',
      finishJourney: 'मार्गदर्शन पूर्ण करा',
      openOfficialPortal: 'अधिकृत पोर्टल उघडा',
      confidenceMode: 'मार्गदर्शनाची पद्धत:',
      simpleMode: 'साधी (एका वेळी एकच गोष्ट)',
      standardMode: 'सामान्य',
      assistedMode: 'सविस्तर (अधिक स्पष्टीकरणासह)',
    },
    screenExplainer: {
      pageTitle: 'स्क्रीन समजून घ्या',
      pageSubtitle: 'शासकीय वेबसाईटवरील फॉर्म किंवा पेमेंट स्क्रीन समजण्यात अडचण येतेय? फोटो अपलोड करा आणि सोप्या भाषेत अर्थ जाणून घ्या.',
      uploadBoxTitle: 'स्क्रीनशॉट येथे ड्रॅग करा किंवा निवडा',
      uploadBoxDesc: 'PNG, JPG, WebP फॉरमॅट. कमाल आकार 10MB.',
      chooseFile: 'फोटो निवडा',
      trySample: 'किंवा लगेच तपासून पाहण्यासाठी या नमुना स्क्रीनवर क्लिक करा:',
      sampleScreens: 'नमुना शासकीय स्क्रीन',
      analyzing: 'स्क्रीनची तपासणी सुरू आहे...',
      explanationTitle: 'स्क्रीनचे सोपे स्पष्टीकरण',
      screenType: 'ही स्क्रीन नेमकी कशाची आहे?',
      requiredInformation: 'तुमच्याकडून मागितलेली माहिती',
      termsTitle: 'अवघड शब्दांचा सोपा अर्थ',
      nextActionTitle: 'आता पुढे काय करावे?',
      cautionTitle: 'महत्त्वाची काळजी',
      disclaimer: 'हे स्पष्टीकरण समजण्यासाठी आहे. पासवर्ड, पिन किंवा ओटीपी कधीही कोणालाही देऊ नका.',
    },
    payments: {
      pageTitle: 'डिजिटल पेमेंट्स आणि UPI सुरक्षा',
      pageSubtitle: 'भीतीशिवाय पैसे पाठवायला, बिल भरायला आणि ऑनलाइन फसवणुकीपासून स्वतःचा बचाव करायला शिका.',
      goldenRuleTitle: 'UPI चा सुवर्ण नियम',
      goldenRuleDesc: 'UPI पिन फक्त पैसे पाठवण्यासाठी टाकावा लागतो. पैसे मिळवण्यासाठी किंवा रिफंडसाठी पिन नसतो.',
      verifyRecipientTitle: 'पिन टाकण्यापूर्वी नाव नक्की तपासा',
      verifyRecipientDesc: 'पैसे पाठवण्यापूर्वी स्क्रीनवर दिसणारे दुकानदाराचे किंवा व्यक्तीचे नाव अचूक असल्याची खात्री करा.',
      failedPaymentTitle: 'पैसे कापले पण व्यवहार अपूर्ण राहिल्यास?',
      failedPaymentDesc: 'घाबरू नका! रिझर्व्ह बँकेच्या नियमांनुसार तांत्रिक अडचणीने कापलेले पैसे २४ ते ४८ तासांत खात्यात परत येतात.',
      safetyChecklistTitle: 'सुरक्षा पडताळणी यादी',
      disclaimer: 'केवळ जनजागृतीसाठी. सहायक कधीही पिन मागत नाही व येथे कोणताही आर्थिक व्यवहार होत नाही.',
    },
    accessibility: {
      pageTitle: 'सुलभता नियंत्रण केंद्र',
      pageSubtitle: 'वाचायला सोपे जावे म्हणून अक्षरांचा आकार आणि रंग बदला. हे बदल संपूर्ण वेबसाईटवर लागू होतील.',
      textSizeTitle: 'अक्षरांचा आकार (Text Size)',
      textSizeDesc: 'डोळ्यांवर ताण न येता स्पष्ट दिसण्यासाठी अक्षरांचा आकार वाढवा.',
      textSizeDefault: 'नेहमीचा आकार (16px)',
      textSizeLarge: 'मोठा आकार (18px)',
      textSizeXLarge: 'खूप मोठा आकार (20px)',
      contrastTitle: 'कॉन्ट्रास्ट मोड (Contrast)',
      contrastDesc: 'कमी दृष्टी असलेल्यांसाठी गडद अक्षरे आणि ठळक बॉर्डर.',
      contrastDefault: 'नेहमीचा कॉन्ट्रास्ट',
      contrastHigh: 'हाय कॉन्ट्रास्ट (High Contrast)',
      motionTitle: 'ॲनिमेशन व हालचाली',
      motionDesc: 'स्क्रीनवरील हालचाली किंवा ॲनिमेशन कमी करा.',
      motionNormal: 'सामान्य',
      motionReduced: 'कमी हालचाली (Reduced Motion)',
      voiceTitle: 'आवाजात ऐकणे (Voice)',
      voiceDesc: 'महत्त्वाचे मार्गदर्शन आवाजात ऐकण्याची सोय चालू करा.',
      voiceOn: 'चालू',
      voiceOff: 'बंद',
      languageTitle: 'भाषेची निवड',
      languageDesc: 'संपूर्ण ॲप्लिकेशनसाठी तुमची सोयीची भाषा निवडा.',
      previewHeading: 'थेट पूर्वावलोकन',
      previewBody: 'हा नमुना मजकूर तुम्ही निवडलेला अक्षरांचा आकार व कॉन्ट्रास्ट कसा दिसेल हे दाखवतो.',
      resetDefaults: 'मूळ सेटिंग्जवर जा',
    },
    common: {
      disclaimer: 'सहायक एआय हा स्वतंत्र नागरी सुलभता उपक्रम असून हे कोणतेही अधिकृत शासकीय पोर्टल नाही.',
      officialSourceNote: 'अधिकृत शासकीय स्रोत',
      verifyOfficial: 'अंतिम अर्ज सादर करण्यापूर्वी अधिकृत पोर्टलवरील माहिती तपासून घ्या.',
      privacyNote: 'गोपनीयता: कोणताही पासवर्ड, ओटीपी किंवा बँक माहिती येथे साठवली जात नाही.',
      back: 'मागे जा',
    },
  },
};
