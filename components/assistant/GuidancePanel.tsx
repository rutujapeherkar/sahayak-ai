'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/types';
import { useAccessibility } from '@/context/AccessibilityContext';
import { OfficialSourceButton } from '@/components/ui/OfficialSourceButton';
import { CheckCircle2, Circle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

interface GuidancePanelProps {
  activeService: Service | null;
  onSelectService?: (service: Service) => void;
}

export function GuidancePanel({ activeService }: GuidancePanelProps) {
  const { language, guidanceMode, setGuidanceMode, t } = useAccessibility();

  if (!activeService) {
    return (
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 flex flex-col items-center text-center justify-center min-h-[300px] shadow-xs">
        <HelpCircle className="w-8 h-8 text-[var(--text-muted)] mb-3" />
        <h3 className="font-semibold text-sm text-[var(--text-primary)] mb-1">
          {t.assistant.noActiveTask}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] max-w-xs leading-relaxed mb-4">
          {t.assistant.noActiveTaskDesc}
        </p>
        <Link
          href="/services"
          className="text-xs font-semibold text-[var(--brand-teal)] hover:underline inline-flex items-center gap-1"
        >
          <span>{t.nav.exploreServices}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 space-y-5 shadow-xs">
      {/* Service Header */}
      <div className="border-b border-[var(--border-color)]/60 pb-3">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-[var(--brand-teal)] block mb-1">
          {t.assistant.currentTaskTitle}
        </span>
        <h3 className="font-semibold text-base text-[var(--text-primary)]">
          {activeService.name[language] || activeService.name.en}
        </h3>
        <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
          {activeService.shortDescription[language] || activeService.shortDescription.en}
        </p>
      </div>

      {/* Digital Confidence Mode Switcher */}
      <div className="space-y-1.5">
        <label className="text-[11px] font-medium text-[var(--text-muted)] block">
          {t.task.confidenceMode}
        </label>
        <div className="grid grid-cols-3 gap-1 p-1 bg-[var(--bg-subtle)] rounded border border-[var(--border-color)]">
          {(['simple', 'standard', 'assisted'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setGuidanceMode(mode)}
              className={`py-1 text-[11px] font-medium rounded transition-all capitalize ${
                guidanceMode === mode
                  ? 'bg-[var(--bg-surface)] text-[var(--brand-teal)] font-semibold shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Step Sequence Overview */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold text-[var(--text-primary)] block">
          {t.services.stepByStep}:
        </span>
        <div className="space-y-2">
          {activeService.steps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className={`p-2.5 rounded border text-xs flex items-start gap-2.5 transition-colors ${
                idx === 0
                  ? 'bg-[var(--brand-teal-light)] border-[var(--brand-teal)]/40 text-[var(--brand-teal)] font-medium'
                  : 'bg-[var(--bg-subtle)] border-[var(--border-color)]/60 text-[var(--text-secondary)]'
              }`}
            >
              <span className="font-mono text-[11px] font-bold shrink-0 mt-0.5">
                {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
              </span>
              <div className="space-y-0.5">
                <p className="font-semibold leading-tight text-[var(--text-primary)]">
                  {step.title[language] || step.title.en}
                </p>
                <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2">
                  {step.explanation[language] || step.explanation.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary Action Button */}
      <Link
        href={`/task/${activeService.id}`}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors min-h-[44px] shadow-xs"
      >
        <span>{t.assistant.startJourney}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Official Government Portal Link */}
      <div className="pt-3 border-t border-[var(--border-color)]/60">
        <OfficialSourceButton
          url={activeService.officialSource.url}
          portalName={activeService.officialSource.portalName}
          label={t.task.openOfficialPortal}
        />
      </div>
    </div>
  );
}
