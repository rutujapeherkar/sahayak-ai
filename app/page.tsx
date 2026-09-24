'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { VoiceInput } from '@/components/assistant/VoiceInput';
import {
  Search,
  MessageSquare,
  ScanEye,
  ShieldCheck,
  Sliders,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const { language, t } = useAccessibility();
  const [query, setQuery] = useState('');

  const { state: speechState, errorMessage, startListening, stopListening } =
    useSpeechRecognition({
      language,
      onResult: (transcript) => {
        setQuery(transcript);
      },
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/assistant?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectExample = (exampleText: string) => {
    router.push(`/assistant?q=${encodeURIComponent(exampleText)}`);
  };

  // Short, clear prompt examples
  const examplePrompts = [
    {
      text: 'मला उत्पन्न प्रमाणपत्र काढायचं आहे.',
      label: language === 'mr' ? 'उत्पन्न दाखला' : language === 'hi' ? 'आय प्रमाण पत्र' : 'Income certificate',
    },
    {
      text: 'I need a document that proves where I live.',
      label: language === 'mr' ? 'रहिवासी दाखला' : language === 'hi' ? 'निवास प्रमाण पत्र' : 'Proof of residence',
    },
    {
      text: 'मला UPI वापरायला शिकायचं आहे.',
      label: language === 'mr' ? 'UPI मदत' : language === 'hi' ? 'यूपीआई मदद' : 'UPI help',
    },
    {
      text: 'मुझे कॉलेज फीस और छात्रवृत्ति के लिए सरकारी मदद चाहिए।',
      label: language === 'mr' ? 'शिष्यवृत्ती' : language === 'hi' ? 'छात्रवृत्ति' : 'Scholarship',
    },
  ];

  const serviceEntryPoints = [
    {
      href: '/services',
      title: t.home.exploreServicesTitle,
      desc: t.home.exploreServicesDesc,
      icon: Search,
      tag: 'Catalog',
    },
    {
      href: '/explain-screen',
      title: t.home.explainScreenTitle,
      desc: t.home.explainScreenDesc,
      icon: ScanEye,
      tag: 'Screenshot Assistant',
    },
    {
      href: '/digital-payments',
      title: t.home.digitalPaymentsTitle,
      desc: t.home.digitalPaymentsDesc,
      icon: ShieldCheck,
      tag: 'Financial Safety',
    },
    {
      href: '/accessibility',
      title: t.home.accessibilityTitle,
      desc: t.home.accessibilityDesc,
      icon: Sliders,
      tag: 'Personalize',
    },
  ];

  return (
    <div className="flex-1 flex flex-col justify-start">
      {/* Central Goal Section */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-color)] bg-[var(--bg-surface)]">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          {/* Focal Question */}
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            {t.home.heroQuestion}
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            {t.home.heroSubtitle}
          </p>

          {/* Natural Language Input & Voice Action */}
          <form onSubmit={handleSubmit} className="pt-4 max-w-2xl mx-auto space-y-3">
            <div className="relative flex items-center rounded-lg border-2 border-[var(--border-color)] focus-within:border-[var(--brand-teal)] bg-[var(--bg-surface)] shadow-xs transition-colors p-1.5">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.home.inputPlaceholder}
                className="w-full px-3 py-2.5 text-sm sm:text-base bg-transparent border-none outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] min-h-[44px]"
                aria-label={t.home.heroQuestion}
              />

              <button
                type="submit"
                disabled={!query.trim()}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-[var(--brand-teal)] hover:bg-[var(--brand-dark)] text-white text-xs sm:text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0 min-h-[44px] shadow-xs"
              >
                <span>{t.home.askButton}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>

            {/* Voice Input Integration */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <VoiceInput
                state={speechState}
                errorMessage={errorMessage}
                onStart={startListening}
                onStop={stopListening}
                label={t.home.voiceButtonLabel}
              />
              <span className="text-[11px] text-[var(--text-muted)]">
                Accepts Marathi (मराठी), Hindi (हिंदी), and English
              </span>
            </div>
          </form>

          {/* Clickable Example Prompts */}
          <div className="pt-6 space-y-2 text-left max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-[var(--text-secondary)] block">
              {t.home.examplesHeading}
            </span>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2">
              {examplePrompts.map((example, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectExample(example.text)}
                  className="px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] hover:bg-[var(--brand-teal-light)] hover:border-[var(--brand-teal)]/40 text-left transition-all text-xs font-medium text-[var(--text-primary)] group flex items-center justify-between gap-2 shadow-2xs"
                >
                  <span>{example.label}</span>
                  <ArrowRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--brand-teal)] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restrained Service Entry Points */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceEntryPoints.map((entry) => {
            const Icon = entry.icon;
            return (
              <Link
                key={entry.href}
                href={entry.href}
                className="p-5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--brand-teal)]/60 transition-all group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-[var(--bg-subtle)] group-hover:bg-[var(--brand-teal-light)] text-[var(--brand-teal)] flex items-center justify-center mb-3 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--brand-teal)] transition-colors mb-1">
                    {entry.title}
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {entry.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border-color)]/50 flex items-center justify-between text-xs text-[var(--brand-teal)] font-medium">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* How It Works - Clean 3 Steps */}
        <div className="mt-8 p-5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col md:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="space-y-1.5 max-w-lg">
            <span className="text-[11px] font-bold text-[var(--brand-teal)] uppercase tracking-wider">
              {language === 'mr' ? 'कसे काम करते' : language === 'hi' ? 'कैसे काम करता है' : 'How it works'}
            </span>
            <h2 className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
              {language === 'mr'
                ? '१. गरज सांगा → २. पायऱ्या पाहा → ३. अधिकृत अर्ज करा'
                : language === 'hi'
                ? '1. जरूरत बताएं → 2. कदम देखें → 3. आधिकारिक आवेदन करें'
                : '1. Tell us your goal → 2. Follow simple steps → 3. Apply on official portal'}
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              {language === 'mr'
                ? 'शासकीय सेवा प्रत्येकासाठी सोपी आणि सुलभ.'
                : language === 'hi'
                ? 'सरकारी सेवाएं सभी के लिए आसान।'
                : 'Simple steps to complete government services.'}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <Image
              src="/images/citizen-assistance.svg"
              alt="Citizen assistance"
              width={200}
              height={130}
              className="rounded-md border border-[var(--border-color)]"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
