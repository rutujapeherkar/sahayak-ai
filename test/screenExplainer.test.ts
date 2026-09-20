import { describe, it, expect } from 'vitest';
import { validateScreenImage, explainScreenImage } from '../lib/screenExplainer';

describe('Screen Explainer Module', () => {
  it('Validates acceptable image formats (PNG, JPG, WebP)', () => {
    const validPng = validateScreenImage({ name: 'test.png', type: 'image/png', size: 1024 * 50 });
    expect(validPng.isValid).toBe(true);

    const validJpg = validateScreenImage({ name: 'test.jpg', type: 'image/jpeg', size: 1024 * 50 });
    expect(validJpg.isValid).toBe(true);
  });

  it('Rejects invalid file formats gracefully without crashing', () => {
    const invalidPdf = validateScreenImage({ name: 'doc.pdf', type: 'application/pdf', size: 1024 });
    expect(invalidPdf.isValid).toBe(false);
    expect(invalidPdf.error).toContain('Please upload a PNG, JPG, JPEG, or WebP image');
  });

  it('Generates structured screen breakdown for curated sample screen', async () => {
    const explanation = await explainScreenImage('sample.png', 'screen-document-upload');
    expect(explanation.screenTitle).toBeDefined();
    expect(explanation.requiredFields.length).toBeGreaterThan(0);
    expect(explanation.terminologyDefinitions.length).toBeGreaterThan(0);
    expect(explanation.nextAction).toBeDefined();
    expect(explanation.disclaimer).toContain('Sahayak AI');
  });
});
