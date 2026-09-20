import { Language } from '@/types';

export interface IntentResult {
  intent: string;
  confidence: number;
  matchedServiceId?: string;
  category?: string;
  requiresClarification: boolean;
  clarificationQuestion?: Record<Language, string>;
  clarificationOptions?: { label: Record<Language, string>; value: string }[];
}

interface PatternRule {
  intent: string;
  serviceId: string;
  category: string;
  keywords: string[];
}

const INTENT_RULES: PatternRule[] = [
  {
    intent: 'income_certificate',
    serviceId: 'income-certificate',
    category: 'certificates',
    keywords: [
      'income certificate',
      'salary certificate',
      'income proof',
      'annual income',
      'उत्पन्न',
      'उत्पन्नाचा',
      'उत्पन्नाचे',
      'दाखला',
      'आय प्रमाण पत्र',
      'आय प्रमाण',
      'इनकम सर्टिफिकेट',
      'आय प्रमाण-पत्र',
    ],
  },
  {
    intent: 'residence_certificate',
    serviceId: 'residence-certificate',
    category: 'certificates',
    keywords: [
      'where i live',
      'where live',
      'prove where',
      'residence certificate',
      'domicile certificate',
      'domicile',
      'living proof',
      'stay proof',
      'local resident',
      'रहिवासी',
      'अधिवास',
      'डोमिसाइल',
      'कुठे राहतो',
      'वास्तव्य',
      'निवास प्रमाण पत्र',
      'रहने का सबूत',
      'स्थानीय निवासी',
    ],
  },
  {
    intent: 'digital_payments',
    serviceId: 'digital-payments-safety',
    category: 'digital_finance',
    keywords: [
      'upi',
      'digital payment',
      'send money',
      'qr code',
      'bhim',
      'pay bill',
      'payment safety',
      'upi pin',
      'यूपीआय',
      'पैसे पाठवणे',
      'पैसे पाठवायला',
      'क्यूआर कोड',
      'यूपीआई',
      'पैसे भेजना',
    ],
  },
  {
    intent: 'scholarship',
    serviceId: 'post-matric-scholarship',
    category: 'education',
    keywords: [
      'scholarship',
      'college fee',
      'fee concession',
      'education help',
      'student assistance',
      'mahadbt',
      'post matric',
      'शिष्यवृत्ती',
      'शिक्षणासाठी मदत',
      'कॉलेज फी',
      'महाडीबीटी',
      'छात्रवृत्ति',
      'स्कॉलरशिप',
      'शिक्षा सहायता',
    ],
  },
  {
    intent: 'digilocker',
    serviceId: 'digilocker-guidance',
    category: 'identity',
    keywords: [
      'digilocker',
      'digital document',
      'driving license online',
      'marksheet',
      'rc book',
      'digital locker',
      'डिजीलॉकर',
      'डिजिटल कागदपत्रे',
      'लायसन्स',
    ],
  },
  {
    intent: 'senior_citizen',
    serviceId: 'senior-citizen-assistance',
    category: 'social_welfare',
    keywords: [
      'senior citizen',
      'pension',
      'life certificate',
      'jeevan pramaan',
      'elderly',
      'ज्येष्ठ नागरिक',
      'पेन्शन',
      'हयातीचा दाखला',
      'जीवन प्रमाण',
      'वरिष्ठ नागरिक',
    ],
  },
  {
    intent: 'public_grievance',
    serviceId: 'public-grievance',
    category: 'grievances',
    keywords: [
      'grievance',
      'complaint',
      'delayed service',
      'cpgrams',
      'officer not responding',
      'तक्रार',
      'काम होत नाही',
      'तक्रार नोंदणी',
      'जन शिकायत',
      'सरकारी शिकायत',
    ],
  },
  {
    intent: 'ration_card',
    serviceId: 'ration-card-services',
    category: 'social_welfare',
    keywords: [
      'ration card',
      'food grain',
      'ration quota',
      'mera ration',
      'रेशन कार्ड',
      'अन्नधान्य',
      'रेशन दुकानात धान्य',
      'राशन कार्ड',
      'खाद्य सुरक्षा',
    ],
  },
  {
    intent: 'aadhaar_update',
    serviceId: 'aadhaar-address-update',
    category: 'identity',
    keywords: [
      'aadhaar address',
      'change address in aadhaar',
      'myaadhaar',
      'update address',
      'आधार पत्ता',
      'आधार कार्ड दुरुस्ती',
      'आधार में पता बदलना',
      'आधार संशोधन',
    ],
  },
];

export function detectIntent(text: string): IntentResult {
  const clean = text.toLowerCase().trim();

  // Check for ambiguous or general requests that require smart clarification
  const isAmbiguousEducation = clean === 'education help' || clean === 'शिक्षण' || clean === 'शिक्षा सहायता';
  if (isAmbiguousEducation) {
    return {
      intent: 'clarification_needed',
      confidence: 0.5,
      requiresClarification: true,
      clarificationQuestion: {
        en: 'What kind of educational help are you looking for?',
        hi: 'आप किस प्रकार की शैक्षणिक सहायता ढूंढ रहे हैं?',
        mr: 'तुम्हाला शिक्षणासाठी कोणत्या प्रकारची मदत हवी आहे?',
      },
      clarificationOptions: [
        {
          label: {
            en: 'College Scholarships & Fee Waivers',
            hi: 'कॉलेज छात्रवृत्ति एवं फीस छूट',
            mr: 'महाविद्यालयीन शिष्यवृत्ती व फी सवलत',
          },
          value: 'I need scholarship and fee concession guidance',
        },
        {
          label: {
            en: 'Educational Document / Marksheet on DigiLocker',
            hi: 'डिजीलॉकर पर मार्कशीट निकालना',
            mr: 'डिजीलॉकरवरून गुणपत्रिका काढणे',
          },
          value: 'I need to download my marksheet on DigiLocker',
        },
        {
          label: {
            en: 'Income Certificate for Admission',
            hi: 'प्रवेश के लिए आय प्रमाण पत्र',
            mr: 'प्रवेशासाठी उत्पन्नाचा दाखला',
          },
          value: 'I need an income certificate for college admission',
        },
      ],
    };
  }

  let bestMatch: PatternRule | null = null;
  let highestScore = 0;

  for (const rule of INTENT_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (clean.includes(kw)) {
        score += kw.length > 8 ? 4 : 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = rule;
    }
  }

  if (bestMatch && highestScore >= 2) {
    return {
      intent: bestMatch.intent,
      confidence: Math.min(0.95, 0.6 + highestScore * 0.05),
      matchedServiceId: bestMatch.serviceId,
      category: bestMatch.category,
      requiresClarification: false,
    };
  }

  return {
    intent: 'general_query',
    confidence: 0.3,
    requiresClarification: false,
  };
}
