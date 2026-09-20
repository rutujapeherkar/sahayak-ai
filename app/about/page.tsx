'use client';

import React from 'react';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Info,
  HeartHandshake,
  Users,
  Compass,
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useAccessibility();

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-teal-light)] text-[var(--brand-teal)] border border-[var(--brand-teal)]/20">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Product Definition</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          About Sahayak AI
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          Making digital services usable for everyone.
        </p>
      </div>

      {/* Core Mission Banner */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-3 shadow-xs">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Our Core USP</h2>
        <blockquote className="border-l-4 border-[var(--brand-teal)] pl-4 py-1 text-base sm:text-lg font-semibold text-[var(--brand-teal)]">
          &ldquo;We don&apos;t replace digital services. We make them usable.&rdquo;
        </blockquote>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pt-2">
          India has built extraordinary digital public infrastructure. However, millions of
          citizens—especially senior citizens, first-time smartphone users, and regional language
          speakers—struggle with bureaucratic jargon, complex forms, and multi-step procedures.
          Sahayak AI bridges this last-mile gap as an assistive layer.
        </p>
      </div>

      {/* What Sahayak IS vs What Sahayak IS NOT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* What Sahayak IS */}
        <div className="rounded-md border border-[var(--color-success)]/40 bg-[var(--color-success-bg)]/30 p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-base text-[var(--color-success)] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>What Sahayak AI IS</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-[var(--text-primary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success)] font-bold mt-0.5">✓</span>
              <span>An AI-powered accessibility and task-navigation layer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success)] font-bold mt-0.5">✓</span>
              <span>A plain-language translator of confusing administrative procedures</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success)] font-bold mt-0.5">✓</span>
              <span>A step-by-step preparation companion with document checklists</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success)] font-bold mt-0.5">✓</span>
              <span>A multi-lingual guide supporting Marathi, Hindi, and English</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-success)] font-bold mt-0.5">✓</span>
              <span>A screen breakdown explainer for confusing government portals</span>
            </li>
          </ul>
        </div>

        {/* What Sahayak IS NOT */}
        <div className="rounded-md border border-[var(--color-danger)]/40 bg-[var(--color-danger-bg)]/30 p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-base text-[var(--color-danger)] flex items-center gap-2">
            <XCircle className="w-5 h-5 shrink-0" />
            <span>What Sahayak AI IS NOT</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-[var(--text-primary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-danger)] font-bold mt-0.5">✕</span>
              <span>NOT another government portal or replica application</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-danger)] font-bold mt-0.5">✕</span>
              <span>NOT a generic, ungrounded conversational chatbot</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-danger)] font-bold mt-0.5">✕</span>
              <span>NOT an automatic form submission or credential collector</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-danger)] font-bold mt-0.5">✕</span>
              <span>NOT a financial transaction or payment processing system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-danger)] font-bold mt-0.5">✕</span>
              <span>NOT an entity that stores passwords, OTPs, or Aadhaar numbers</span>
            </li>
          </ul>
        </div>
      </div>

      {/* The Central Transformation Flow */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
        <h2 className="font-bold text-base text-[var(--text-primary)]">
          The Central Product Transformation
        </h2>
        <div className="flex flex-wrap items-center justify-between gap-2 p-4 rounded bg-[var(--bg-subtle)] border border-[var(--border-color)]/60 text-xs font-semibold text-[var(--text-primary)]">
          <span>Citizen Goal</span>
          <span className="text-[var(--brand-teal)]">→</span>
          <span>Understand Intent</span>
          <span className="text-[var(--brand-teal)]">→</span>
          <span>Find Service</span>
          <span className="text-[var(--brand-teal)]">→</span>
          <span>Simplify Info</span>
          <span className="text-[var(--brand-teal)]">→</span>
          <span>Build Task Journey</span>
          <span className="text-[var(--brand-teal)]">→</span>
          <span>Official Step</span>
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
          &ldquo;The user should never have to understand the technology before understanding what
          to do next.&rdquo;
        </p>
      </div>

      {/* Privacy and Trust */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <h2 className="font-bold text-base text-[var(--text-primary)] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[var(--color-success)]" />
          <span>Privacy &amp; Data Ethics</span>
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          Sahayak AI is built with privacy-by-design. We do not require accounts or logins for MVP
          guidance. No passwords, OTPs, UPI PINs, or sensitive banking credentials are ever stored.
          Uploaded screenshots are analyzed purely in-memory and immediately discarded.
        </p>
      </div>
    </div>
  );
}
