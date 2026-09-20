import { describe, it, expect } from 'vitest';
import { detectIntent } from '../lib/intent';
import { detectLanguage } from '../lib/language';

describe('Intent Detection & Multi-lingual Processing', () => {
  it('Scenario A: Correctly identifies Marathi Income Certificate query', () => {
    const query = 'मला उत्पन्न प्रमाणपत्र काढायचं आहे.';
    const lang = detectLanguage(query);
    expect(lang).toBe('mr');

    const result = detectIntent(query);
    expect(result.intent).toBe('income_certificate');
    expect(result.matchedServiceId).toBe('income-certificate');
    expect(result.requiresClarification).toBe(false);
  });

  it('Scenario B: Correctly identifies English Residence Certificate query from intent', () => {
    const query = 'I need a document that proves where I live.';
    const lang = detectLanguage(query);
    expect(lang).toBe('en');

    const result = detectIntent(query);
    expect(result.intent).toBe('residence_certificate');
    expect(result.matchedServiceId).toBe('residence-certificate');
  });

  it('Scenario C: Correctly identifies Marathi UPI / Digital Payment query', () => {
    const query = 'मला UPI वापरायला शिकायचं आहे.';
    const lang = detectLanguage(query);
    expect(lang).toBe('mr');

    const result = detectIntent(query);
    expect(result.intent).toBe('digital_payments');
    expect(result.matchedServiceId).toBe('digital-payments-safety');
  });

  it('Identifies Ambiguous Education query and requests clarification', () => {
    const query = 'education help';
    const result = detectIntent(query);
    expect(result.requiresClarification).toBe(true);
    expect(result.clarificationOptions).toBeDefined();
    expect(result.clarificationOptions!.length).toBeGreaterThan(0);
  });

  it('Identifies Hindi Scholarship query', () => {
    const query = 'मुझे कॉलेज फीस और छात्रवृत्ति के लिए सरकारी मदद चाहिए।';
    const lang = detectLanguage(query);
    expect(lang).toBe('hi');

    const result = detectIntent(query);
    expect(result.intent).toBe('scholarship');
    expect(result.matchedServiceId).toBe('post-matric-scholarship');
  });
});
