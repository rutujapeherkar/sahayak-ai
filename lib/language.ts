import { Language } from '@/types';

const MARATHI_MARKERS = [
  'आहे',
  'आहेत',
  'करायचं',
  'काढायचं',
  'शिकायचं',
  'हवं',
  'हवी',
  'हवेत',
  'दाखला',
  'पाहिजे',
  'माझ्या',
  'माझे',
  'माझी',
  'मला',
  'काय',
  'कसे',
  'कशी',
  'नाही',
  'करावे',
  'लागेल',
  'उत्पन्न',
  'रहिवासी',
  'जात',
  'वय',
  'शिक्षण',
];

const HINDI_MARKERS = [
  'है',
  'हैं',
  'करना',
  'चाहिए',
  'आवेदन',
  'प्रमाण पत्र',
  'कैसे',
  'मुझे',
  'मेरा',
  'मेरी',
  'मेरे',
  'क्या',
  'होगा',
  'सकता',
  'सकती',
  'नहीं',
  'बनाना',
  'बनवाना',
  'सहायता',
  'छात्रवृत्ति',
];

export function detectLanguage(text: string, fallbackLanguage: Language = 'en'): Language {
  if (!text || !text.trim()) {
    return fallbackLanguage;
  }

  const clean = text.toLowerCase().trim();

  // Check for Devanagari script
  const devanagariRegex = /[\u0900-\u097F]/;
  const hasDevanagari = devanagariRegex.test(clean);

  if (!hasDevanagari) {
    return 'en';
  }

  let marathiScore = 0;
  let hindiScore = 0;

  for (const marker of MARATHI_MARKERS) {
    if (clean.includes(marker)) {
      marathiScore += 2;
    }
  }

  for (const marker of HINDI_MARKERS) {
    if (clean.includes(marker)) {
      hindiScore += 2;
    }
  }

  if (marathiScore > hindiScore) {
    return 'mr';
  }
  if (hindiScore > marathiScore) {
    return 'hi';
  }

  // If tied or generic Devanagari, preserve the user's active session language if it's Devanagari
  if (fallbackLanguage === 'mr' || fallbackLanguage === 'hi') {
    return fallbackLanguage;
  }

  return 'mr'; // Default regional preference for this project context
}

export function getLanguageDisplayName(lang: Language): string {
  switch (lang) {
    case 'en':
      return 'English';
    case 'hi':
      return 'हिंदी';
    case 'mr':
      return 'मराठी';
  }
}
