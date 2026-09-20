'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useSavedServices } from '@/context/SavedServicesContext';
import { Bookmark, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const { language, t } = useAccessibility();
  const { isSaved, toggleSave } = useSavedServices();
  const saved = isSaved(service.id);

  const categoryNames: Record<string, string> = {
    certificates: t.services.certificates,
    education: t.services.education,
    digital_finance: t.services.digitalFinance,
    identity: t.services.identity,
    social_welfare: t.services.socialWelfare,
    grievances: t.services.grievances,
  };

  return (
    <div className="group rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--brand-teal)]/50 transition-all p-5 flex flex-col justify-between shadow-xs">
      <div>
        {/* Category & Bookmark Header */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]/60">
            {categoryNames[service.category] || service.category}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleSave(service.id);
            }}
            className={`p-1.5 rounded-md min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors ${
              saved
                ? 'text-[var(--warm-copper)] bg-[var(--warm-copper-light)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
            }`}
            aria-label={saved ? 'Remove from saved' : 'Save service for later'}
          >
            <Bookmark className={`w-4 h-4 ${saved ? 'fill-[var(--warm-copper)]' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-base text-[var(--text-primary)] group-hover:text-[var(--brand-teal)] transition-colors mb-2 leading-snug">
          <Link href={`/services/${service.id}`} className="focus:outline-none focus:underline">
            {service.name[language] || service.name.en}
          </Link>
        </h3>

        {/* Plain language summary */}
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription[language] || service.shortDescription.en}
        </p>

        {/* Who it may help preview */}
        {!compact && service.whoItMayHelp[language] && service.whoItMayHelp[language].length > 0 && (
          <div className="space-y-1 mb-4 pt-3 border-t border-[var(--border-color)]/50">
            <span className="text-[11px] font-semibold text-[var(--text-muted)] block">
              {t.services.whoItHelps}:
            </span>
            <p className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-teal)] shrink-0 mt-0.5" />
              <span>{service.whoItMayHelp[language][0]}</span>
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-color)]/60 mt-auto">
        <Link
          href={`/task/${service.id}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors min-h-[40px]"
        >
          <span>{t.services.startJourney}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] text-xs font-medium transition-colors min-h-[40px]"
        >
          <span>{t.services.viewService}</span>
        </Link>
      </div>
    </div>
  );
}
