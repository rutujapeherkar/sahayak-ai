'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import { OfficialSourceButton } from '@/components/ui/OfficialSourceButton';
import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Lock,
  Smartphone,
  CreditCard,
  QrCode,
  Volume2,
  VolumeX,
} from 'lucide-react';

export default function DigitalPaymentsPage() {
  const { language, speak, stopSpeaking, isSpeaking, t } = useAccessibility();
  const [activeTab, setActiveTab] = useState<'safety' | 'sending' | 'failed' | 'scams'>('safety');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const safetyRules = [
    {
      id: 'rule-pin',
      title: 'Never share your UPI PIN',
      desc: 'PIN is only for sending money. Never enter a PIN to receive money.',
      icon: Lock,
    },
    {
      id: 'rule-name',
      title: 'Check recipient before paying',
      desc: 'Verify the name on screen before entering your PIN.',
      icon: QrCode,
    },
    {
      id: 'rule-otp',
      title: 'Never share an OTP',
      desc: 'Banks and officials never ask for your OTP or password.',
      icon: Smartphone,
    },
    {
      id: 'rule-reversal',
      title: 'Failed payments auto-reverse',
      desc: 'Deducted money usually returns within 24–48 hours.',
      icon: CreditCard,
    },
  ];

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-success-bg)] text-[var(--color-success)] border border-[var(--color-success)]/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Safety Guide</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          {t.payments.pageTitle}
        </h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {t.payments.pageSubtitle}
        </p>
      </div>

      {/* Primary Golden Rule Spotlight Banner */}
      <div className="rounded-md border-2 border-[var(--warm-copper)]/50 bg-[var(--warm-copper-light)] p-6 sm:p-8 space-y-3 shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-[var(--warm-copper)] text-white flex items-center justify-center font-bold text-sm">
            ★
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
            {t.payments.goldenRuleTitle}
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed pl-10 font-medium">
          {t.payments.goldenRuleDesc}
        </p>
        <div className="pl-10 pt-2 text-xs text-[var(--text-secondary)]">
          Remember: <strong>PIN = Pay</strong>. You never type a PIN to receive money.
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[var(--border-color)] overflow-x-auto pb-1">
        {[
          { id: 'safety', label: 'Safety rules' },
          { id: 'sending', label: 'Send money' },
          { id: 'failed', label: 'Payment failed' },
          { id: 'scams', label: 'Stay safe' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 -mb-1 min-h-[44px] ${
              activeTab === tab.id
                ? 'border-[var(--brand-teal)] text-[var(--brand-teal)]'
                : 'border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Core Safety Rules */}
      {activeTab === 'safety' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
          {safetyRules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.id}
                className="p-5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-2.5 shadow-xs"
              >
                <div className="flex items-center gap-2.5 text-[var(--brand-teal)]">
                  <div className="w-8 h-8 rounded bg-[var(--brand-teal-light)] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-snug">
                    {rule.title}
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: How to Send Money Step-by-Step */}
      {activeTab === 'sending' && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6 animate-in fade-in duration-200 shadow-xs">
          <h2 className="font-bold text-base text-[var(--text-primary)]">
            How to send money safely
          </h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: 'Open your UPI app',
                desc: 'Use your official UPI or bank app.',
              },
              {
                step: 2,
                title: 'Scan the QR code',
                desc: 'Point your camera at the shop’s QR code.',
              },
              {
                step: 3,
                title: 'Check recipient name',
                desc: 'Confirm the name on screen matches the recipient.',
              },
              {
                step: 4,
                title: 'Enter amount and PIN',
                desc: 'Enter amount and type your PIN privately.',
              },
              {
                step: 5,
                title: 'Show confirmation',
                desc: 'Show the green success screen to the merchant.',
              },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-3 p-3.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-color)]/60 text-xs">
                <span className="w-5 h-5 rounded-full bg-[var(--brand-teal)] text-white font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {s.step}
                </span>
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-[var(--text-primary)] text-xs">{s.title}</h3>
                  <p className="text-[var(--text-secondary)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: If Money is Deducted */}
      {activeTab === 'failed' && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-4 animate-in fade-in duration-200 shadow-xs">
          <h2 className="font-bold text-base text-[var(--text-primary)]">
            {t.payments.failedPaymentTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {t.payments.failedPaymentDesc}
          </p>
          <div className="p-4 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-color)] space-y-2 text-xs">
            <h3 className="font-semibold text-[var(--text-primary)]">What to do:</h3>
            <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary)] pl-1">
              <li>Note the 12-digit UPI / UTR reference number from transaction history.</li>
              <li>Tap &quot;Raise Dispute&quot; or &quot;Help&quot; inside your app.</li>
              <li>Wait 24–48 hours for auto-reversal before paying again.</li>
              <li>
                <strong>Never</strong> call customer care numbers from Google or social media.
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 4: Common Scams */}
      {activeTab === 'scams' && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-4 animate-in fade-in duration-200 shadow-xs">
          <h2 className="font-bold text-base text-[var(--text-primary)]">
            Common scams to avoid
          </h2>
          <div className="space-y-3">
            {[
              {
                title: 'Enter PIN to receive money',
                desc: 'Fraudsters say: "Scan this QR and enter PIN to receive money." Truth: You NEVER enter PIN to get money.',
              },
              {
                title: 'Fake bill or disconnection SMS',
                desc: 'Fake messages threatening power or SIM cutoff. Never pay through links in SMS.',
              },
              {
                title: 'Screen sharing apps',
                desc: 'Callers asking to install apps like AnyDesk. Never share your screen with strangers.',
              },
            ].map((scam, i) => (
              <div
                key={i}
                className="p-4 rounded-md bg-[var(--color-danger-bg)] border border-[var(--color-danger)]/30 space-y-1 text-xs"
              >
                <h3 className="font-semibold text-[var(--color-danger)] flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{scam.title}</span>
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed pl-5.5">{scam.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Safety Checklist */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
        <h2 className="font-semibold text-base text-[var(--text-primary)] flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[var(--color-success)]" />
          <span>{t.payments.safetyChecklistTitle}</span>
        </h2>
        <div className="space-y-2.5">
          {[
            { id: 'c1', label: 'I know that UPI PIN is NEVER required to receive money.' },
            { id: 'c2', label: 'I will verify the recipient name before entering my PIN.' },
            { id: 'c3', label: 'I will never share OTPs or install screen-sharing apps.' },
            { id: 'c4', label: 'I will wait 24–48 hours if a payment fails.' },
          ].map((item) => {
            const checked = !!checklist[item.id];
            return (
              <label
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="p-3 rounded-md border border-[var(--border-color)]/70 bg-[var(--bg-subtle)] flex items-center gap-3 text-xs cursor-pointer hover:bg-[var(--bg-surface)] transition-colors select-none"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {}}
                  className="rounded text-[var(--brand-teal)] focus:ring-[var(--brand-teal)] w-4 h-4"
                />
                <span
                  className={
                    checked
                      ? 'font-medium text-[var(--color-success)] line-through opacity-80'
                      : 'text-[var(--text-primary)]'
                  }
                >
                  {item.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Official Authorities & Helpline Links */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
        <div className="space-y-1">
          <h2 className="font-semibold text-sm text-[var(--text-primary)]">
            Helpline & Official Portals
          </h2>
          <p className="text-xs text-[var(--text-secondary)]">
            Suspect fraud? Call the Cyber Crime Helpline: <strong>1930</strong> or visit:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <OfficialSourceButton
            url="https://cybercrime.gov.in"
            portalName="National Cyber Crime Reporting Portal (MHA)"
            label="Cyber Crime Helpline (1930)"
          />
          <OfficialSourceButton
            url="https://www.npci.org.in"
            portalName="National Payments Corporation of India"
            label="NPCI UPI Portal"
          />
        </div>

        <p className="text-[11px] text-[var(--text-muted)] italic pt-2 border-t border-[var(--border-color)]/60">
          {t.payments.disclaimer}
        </p>
      </div>
    </div>
  );
}
