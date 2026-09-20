import { describe, it, expect } from 'vitest';
import { DemoProvider } from '../lib/ai/provider';

describe('AI Provider Abstraction & Fallback Reliability', () => {
  const provider = new DemoProvider();

  it('Generates structured Marathi assistant response without API keys', async () => {
    const response = await provider.generateResponse({
      message: 'मला उत्पन्न प्रमाणपत्र काढायचं आहे.',
      language: 'mr',
    });

    expect(response.detectedLanguage).toBe('mr');
    expect(response.detectedIntent).toBe('income_certificate');
    expect(response.recommendedServices).toBeDefined();
    expect(response.recommendedServices!.length).toBeGreaterThan(0);
    expect(response.recommendedServices![0].id).toBe('income-certificate');
  });

  it('Generates structured English residence proof response', async () => {
    const response = await provider.generateResponse({
      message: 'I need a document that proves where I live.',
      language: 'en',
    });

    expect(response.detectedIntent).toBe('residence_certificate');
    expect(response.recommendedServices![0].id).toBe('residence-certificate');
  });

  it('Handles ambiguous query by returning clarification options', async () => {
    const response = await provider.generateResponse({
      message: 'education help',
      language: 'en',
    });

    expect(response.type).toBe('clarification');
    expect(response.clarificationOptions).toBeDefined();
    expect(response.clarificationOptions!.length).toBeGreaterThan(0);
  });

  it('Provides helpful goal-based suggestions when query is completely unmatched', async () => {
    const response = await provider.generateResponse({
      message: 'zzzzqqqqwwww12345',
      language: 'en',
    });

    expect(response.type).toBe('understanding');
    expect(response.message).toContain("I couldn't find an exact match");
  });
});
