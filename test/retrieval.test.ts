import { describe, it, expect } from 'vitest';
import { retrieveServices, getServiceById } from '../lib/retrieval';

describe('Service Retrieval Engine', () => {
  it('Ranks Income Certificate first when searching for income keywords', () => {
    const results = retrieveServices('income proof', 'en');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].service.id).toBe('income-certificate');
  });

  it('Ranks Domicile / Residence Certificate when searching for domicile', () => {
    const results = retrieveServices('domicile', 'en');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].service.id).toBe('residence-certificate');
  });

  it('Filters correctly by category', () => {
    const results = retrieveServices('', 'en', 'education');
    expect(results.every((r) => r.service.category === 'education')).toBe(true);
  });

  it('Retrieves service by unique ID', () => {
    const service = getServiceById('digilocker-guidance');
    expect(service).toBeDefined();
    expect(service?.name.en).toContain('DigiLocker');
  });

  it('Returns empty array or zero matches for unrelated gibberish', () => {
    const results = retrieveServices('xyzqwerty12345', 'en');
    expect(results.length).toBe(0);
  });
});
