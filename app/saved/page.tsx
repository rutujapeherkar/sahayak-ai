'use client';

import React from 'react';
import Link from 'next/link';
import { useSavedServices } from '@/context/SavedServicesContext';
import { useAccessibility } from '@/context/AccessibilityContext';
import { getServiceById } from '@/lib/retrieval';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Bookmark, ArrowRight, Trash2 } from 'lucide-react';

export default function SavedServicesPage() {
  const { savedIds, removeSaved } = useSavedServices();
  const { language, t } = useAccessibility();

  const savedServices = savedIds
    .map((id) => getServiceById(id))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] flex items-center gap-2.5">
            <Bookmark className="w-6 h-6 text-[var(--warm-copper)]" />
            <span>{t.nav.saved}</span>
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Services you saved for quick access.
          </p>
        </div>

        {savedServices.length > 0 && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-color)]">
            {savedServices.length} saved
          </span>
        )}
      </div>

      {/* List or Empty State */}
      {savedServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {savedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className="rounded-md border border-dashed border-[var(--border-color)] p-12 text-center max-w-md mx-auto space-y-3">
          <Bookmark className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-50" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            Nothing saved yet.
          </h2>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            Save a service to find it later.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors min-h-[40px]"
          >
            <span>{t.nav.exploreServices}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
