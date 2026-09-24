'use client';

import React, { useState, useMemo } from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import { retrieveServices } from '@/lib/retrieval';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ServiceCategory } from '@/types';
import { Search, Filter, HelpCircle } from 'lucide-react';

export default function ServicesPage() {
  const { language, t } = useAccessibility();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { id: ServiceCategory | 'all'; label: string }[] = [
    { id: 'all', label: t.services.allCategories },
    { id: 'certificates', label: t.services.certificates },
    { id: 'education', label: t.services.education },
    { id: 'digital_finance', label: t.services.digitalFinance },
    { id: 'identity', label: t.services.identity },
    { id: 'social_welfare', label: t.services.socialWelfare },
    { id: 'grievances', label: t.services.grievances },
  ];

  const filteredServices = useMemo(() => {
    const categoryParam = selectedCategory === 'all' ? undefined : selectedCategory;
    const ranked = retrieveServices(searchQuery, language, categoryParam, 20);
    return ranked.map((r) => r.service);
  }, [searchQuery, selectedCategory, language]);

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          {t.services.pageTitle}
        </h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {t.services.pageSubtitle}
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-[var(--text-muted)] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.services.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-sm sm:text-base text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-teal)] shadow-xs min-h-[44px]"
            aria-label={t.services.searchPlaceholder}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium p-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors min-h-[36px] flex items-center ${
                  isSelected
                    ? 'bg-[var(--brand-teal)] text-white shadow-xs font-semibold'
                    : 'bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] pt-2">
        <span>
          <strong className="text-[var(--text-primary)]">{filteredServices.length}</strong>{' '}
          {t.services.resultsFound}
        </span>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-md border border-dashed border-[var(--border-color)] p-12 text-center max-w-md mx-auto space-y-3">
          <HelpCircle className="w-10 h-10 text-[var(--text-muted)] mx-auto" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            {t.services.noResults}
          </h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {t.services.noResultsSuggestion}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-2 px-4 py-2 rounded-md bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors min-h-[40px]"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
