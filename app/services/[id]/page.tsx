'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceById } from '@/lib/retrieval';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useSavedServices } from '@/context/SavedServicesContext';
import { DocumentChecklist } from '@/components/task/DocumentChecklist';
import { OfficialSourceButton } from '@/components/ui/OfficialSourceButton';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  FileText,
  AlertTriangle,
  MessageSquare,
  Clock,
  ShieldCheck,
} from 'lucide-react';

interface ServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const resolvedParams = use(params);
  const service = getServiceById(resolvedParams.id);
  const { language, t } = useAccessibility();
  const { isSaved, toggleSave } = useSavedServices();

  if (!service) {
    return notFound();
  }

  const saved = isSaved(service.id);

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back Navigation */}
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-teal)] hover:underline"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>{t.common.back}</span>
      </Link>

      {/* Main Header */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-[var(--brand-teal-light)] text-[var(--brand-teal)] border border-[var(--brand-teal)]/20 uppercase tracking-wider">
            {service.category}
          </span>

          <button
            type="button"
            onClick={() => toggleSave(service.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors border min-h-[36px] ${
              saved
                ? 'bg-[var(--warm-copper-light)] text-[var(--warm-copper)] border-[var(--warm-copper)]/30 font-semibold'
                : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border-[var(--border-color)] hover:bg-[var(--bg-subtle)]'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${saved ? 'fill-[var(--warm-copper)]' : ''}`} />
            <span>{saved ? t.assistant.saved : t.assistant.saveService}</span>
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          {service.name[language] || service.name.en}
        </h1>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {service.shortDescription[language] || service.shortDescription.en}
        </p>

        {/* Primary CTAs */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          <Link
            href={`/task/${service.id}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[var(--brand-teal)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)] transition-colors min-h-[44px] shadow-xs"
          >
            <span>{t.services.startJourney}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={`/assistant?q=${encodeURIComponent(
              service.name[language] || service.name.en
            )}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] text-sm font-medium transition-colors min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4 text-[var(--brand-teal)]" />
            <span>{t.assistant.pageTitle}</span>
          </Link>
        </div>
      </div>

      {/* Who it may help */}
      {service.whoItMayHelp[language] && service.whoItMayHelp[language].length > 0 && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
          <h2 className="font-semibold text-base text-[var(--text-primary)] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--brand-teal)]" />
            <span>{t.services.whoItHelps}</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] list-none">
            {service.whoItMayHelp[language].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--brand-teal)] font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Requirements */}
      {service.commonRequirements[language] && service.commonRequirements[language].length > 0 && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
          <h2 className="font-semibold text-base text-[var(--text-primary)] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--warm-copper)]" />
            <span>{t.services.commonReqs}</span>
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] list-none">
            {service.commonRequirements[language].map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[var(--warm-copper)] font-bold mt-0.5">•</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Required Documents Checklist */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
        <h2 className="font-semibold text-base text-[var(--text-primary)] flex items-center gap-2">
          <FileText className="w-4 h-4 text-[var(--brand-teal)]" />
          <span>{t.services.requiredDocs}</span>
        </h2>
        <DocumentChecklist
          serviceId={service.id}
          documents={service.documents}
          language={language}
        />
      </div>

      {/* How it generally works (Steps overview) */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
        <h2 className="font-semibold text-base text-[var(--text-primary)]">
          {t.services.stepByStep}
        </h2>
        <div className="space-y-3">
          {service.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-4 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--brand-teal)] text-white text-[11px] font-bold flex items-center justify-center">
                  {step.stepNumber}
                </span>
                <h3 className="font-semibold text-xs sm:text-sm text-[var(--text-primary)]">
                  {step.title[language] || step.title.en}
                </h3>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed pl-7">
                {step.explanation[language] || step.explanation.en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Official Government Source & Disclaimer */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[var(--color-warning)] shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-[var(--text-primary)]">
              {t.common.officialSourceNote}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {service.disclaimer[language] || service.disclaimer.en}
            </p>
          </div>
        </div>

        <div className="pt-2">
          <OfficialSourceButton
            url={service.officialSource.url}
            portalName={service.officialSource.portalName}
            label={t.services.officialSourceButton}
          />
        </div>
      </div>
    </div>
  );
}
