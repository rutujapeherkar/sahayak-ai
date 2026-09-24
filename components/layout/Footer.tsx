'use client';

import React from 'react';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import { ShieldCheck, Info } from 'lucide-react';

export function Footer() {
  const { t } = useAccessibility();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface)] mt-auto py-8 text-xs text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Authoritative Disclaimer Banner */}
        <div className="p-3.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-color)] flex items-start gap-3">
          <Info className="w-4 h-4 text-[var(--brand-teal)] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-[var(--text-primary)]">
              {t.common.officialSourceNote}
            </p>
            <p className="leading-relaxed">
              {t.common.disclaimer} {t.common.verifyOfficial}
            </p>
          </div>
        </div>

        {/* Footer Meta and Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--color-success)]" />
            <span>{t.common.privacyNote}</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/about"
              className="text-[var(--text-secondary)] hover:text-[var(--brand-teal)] hover:underline"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/accessibility"
              className="text-[var(--text-secondary)] hover:text-[var(--brand-teal)] hover:underline"
            >
              {t.nav.accessibility}
            </Link>
            <Link
              href="/digital-payments"
              className="text-[var(--text-secondary)] hover:text-[var(--brand-teal)] hover:underline"
            >
              {t.nav.digitalPayments}
            </Link>
          </div>
        </div>

        <div className="text-center text-[11px] text-[var(--text-muted)] border-t border-[var(--border-color)]/60 pt-4">
          Sahayak AI — Digital help for everyone.
        </div>
      </div>
    </footer>
  );
}
