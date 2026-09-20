import { Language, Service, ServiceCategory } from '@/types';
import { SERVICES_DATA } from '@/data/services';

export interface RankedServiceResult {
  service: Service;
  score: number;
  matchReasons: string[];
}

export function retrieveServices(
  query: string,
  userLanguage: Language = 'en',
  categoryFilter?: ServiceCategory,
  limit: number = 3
): RankedServiceResult[] {
  if (!query && !categoryFilter) {
    return SERVICES_DATA.slice(0, limit).map((s) => ({
      service: s,
      score: 1,
      matchReasons: ['Default catalog view'],
    }));
  }

  const cleanQuery = query.toLowerCase().trim();
  const tokens = cleanQuery.split(/\s+/).filter((t) => t.length > 1);

  const scoredList: RankedServiceResult[] = [];

  for (const service of SERVICES_DATA) {
    // If a category filter is active and this service doesn't match, skip or heavily penalize
    if (categoryFilter && service.category !== categoryFilter) {
      continue;
    }

    let score = 0;
    const matchReasons: string[] = [];

    // If matching category
    if (categoryFilter && service.category === categoryFilter) {
      score += 3;
      matchReasons.push('Category filter match');
    }

    if (cleanQuery) {
      // 1. Exact phrase in service name (+5)
      for (const lang of ['en', 'hi', 'mr'] as Language[]) {
        const name = service.name[lang].toLowerCase();
        if (name.includes(cleanQuery)) {
          score += 5;
          matchReasons.push(`Exact match in ${lang.toUpperCase()} name`);
          break;
        }
      }

      // 2. Exact phrase in keywords (+5)
      for (const lang of ['en', 'hi', 'mr'] as Language[]) {
        const keywords = service.keywords[lang] || [];
        for (const kw of keywords) {
          if (cleanQuery.includes(kw.toLowerCase()) || kw.toLowerCase().includes(cleanQuery)) {
            score += 5;
            matchReasons.push(`Keyword match: "${kw}"`);
            break;
          }
        }
      }

      // 3. Token-level keyword match (+3)
      for (const token of tokens) {
        for (const lang of ['en', 'hi', 'mr'] as Language[]) {
          const keywords = service.keywords[lang] || [];
          for (const kw of keywords) {
            if (kw.toLowerCase().includes(token)) {
              score += 3;
              matchReasons.push(`Token match: "${token}" in ${kw}`);
              break;
            }
          }
        }
      }

      // 4. Short description match (+2)
      for (const lang of ['en', 'hi', 'mr'] as Language[]) {
        const desc = service.shortDescription[lang].toLowerCase();
        for (const token of tokens) {
          if (desc.includes(token)) {
            score += 2;
            matchReasons.push(`Description match: "${token}"`);
            break;
          }
        }
      }

      // 5. Language keyword boost (+2 for matching user's active language)
      const userLangKeywords = service.keywords[userLanguage] || [];
      for (const kw of userLangKeywords) {
        if (cleanQuery.includes(kw.toLowerCase())) {
          score += 2;
          matchReasons.push(`Active language boost (${userLanguage.toUpperCase()})`);
          break;
        }
      }
    }

    if (score > 0) {
      scoredList.push({
        service,
        score,
        matchReasons: Array.from(new Set(matchReasons)),
      });
    }
  }

  // Sort descending by score
  scoredList.sort((a, b) => b.score - a.score);

  return scoredList.slice(0, limit);
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES_DATA.find((s) => s.id === id || s.slug === id);
}
