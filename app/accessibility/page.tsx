'use client';

import React from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';
import {
  Sliders,
  Type,
  Eye,
  Activity,
  Volume2,
  Globe,
  RotateCcw,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { ContrastMode, Language, MotionMode, TextSize } from '@/types';

export default function AccessibilityPage() {
  const {
    textSize,
    setTextSize,
    contrast,
    setContrast,
    motion,
    setMotion,
    voiceEnabled,
    setVoiceEnabled,
    language,
    setLanguage,
    resetDefaults,
    t,
  } = useAccessibility();

  const textSizes: { id: TextSize; label: string; desc: string }[] = [
    { id: 'default', label: t.accessibility.textSizeDefault, desc: 'Standard 16px font size' },
    { id: 'large', label: t.accessibility.textSizeLarge, desc: 'Enhanced 18px reading scale' },
    { id: 'xlarge', label: t.accessibility.textSizeXLarge, desc: 'Maximum 20px high visibility' },
  ];

  const contrasts: { id: ContrastMode; label: string; desc: string }[] = [
    { id: 'default', label: t.accessibility.contrastDefault, desc: 'Curated civic-tech mineral palette' },
    { id: 'high', label: t.accessibility.contrastHigh, desc: 'Deep black & white high-contrast borders' },
  ];

  const motions: { id: MotionMode; label: string; desc: string }[] = [
    { id: 'normal', label: t.accessibility.motionNormal, desc: 'Smooth transitions' },
    { id: 'reduced', label: t.accessibility.motionReduced, desc: 'Zero animations / instant displays' },
  ];

  const languages: { id: Language; label: string; sub: string }[] = [
    { id: 'mr', label: 'मराठी', sub: 'Marathi' },
    { id: 'hi', label: 'हिंदी', sub: 'Hindi' },
    { id: 'en', label: 'English', sub: 'English' },
  ];

  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-teal-light)] text-[var(--brand-teal)] border border-[var(--brand-teal)]/20">
            <Sliders className="w-3.5 h-3.5" />
            <span>Inclusive Civic Design</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            {t.accessibility.pageTitle}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            {t.accessibility.pageSubtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={resetDefaults}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors min-h-[40px] shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.accessibility.resetDefaults}</span>
        </button>
      </div>

      {/* 1. Language Preference */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[var(--brand-teal)]" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            {t.accessibility.languageTitle}
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          {t.accessibility.languageDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {languages.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLanguage(l.id)}
              className={`p-3.5 rounded-md border text-left transition-all text-xs flex items-center justify-between min-h-[44px] ${
                language === l.id
                  ? 'border-[var(--brand-teal)] bg-[var(--brand-teal-light)] font-semibold text-[var(--brand-teal)] ring-1 ring-[var(--brand-teal)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
              }`}
            >
              <div>
                <p className="font-bold text-sm">{l.label}</p>
                <p className="text-[11px] text-[var(--text-secondary)]">{l.sub}</p>
              </div>
              {language === l.id && <Check className="w-4 h-4 text-[var(--brand-teal)]" />}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Text Size Preference */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Type className="w-4 h-4 text-[var(--brand-teal)]" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            {t.accessibility.textSizeTitle}
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          {t.accessibility.textSizeDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {textSizes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTextSize(item.id)}
              className={`p-3.5 rounded-md border text-left transition-all text-xs flex items-center justify-between min-h-[44px] ${
                textSize === item.id
                  ? 'border-[var(--brand-teal)] bg-[var(--brand-teal-light)] font-semibold text-[var(--brand-teal)] ring-1 ring-[var(--brand-teal)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
              }`}
            >
              <div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-[11px] text-[var(--text-secondary)]">{item.desc}</p>
              </div>
              {textSize === item.id && <Check className="w-4 h-4 text-[var(--brand-teal)]" />}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Contrast Mode */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[var(--brand-teal)]" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            {t.accessibility.contrastTitle}
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          {t.accessibility.contrastDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {contrasts.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setContrast(item.id)}
              className={`p-3.5 rounded-md border text-left transition-all text-xs flex items-center justify-between min-h-[44px] ${
                contrast === item.id
                  ? 'border-[var(--brand-teal)] bg-[var(--brand-teal-light)] font-semibold text-[var(--brand-teal)] ring-1 ring-[var(--brand-teal)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
              }`}
            >
              <div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-[11px] text-[var(--text-secondary)]">{item.desc}</p>
              </div>
              {contrast === item.id && <Check className="w-4 h-4 text-[var(--brand-teal)]" />}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Motion / Animations */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--brand-teal)]" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            {t.accessibility.motionTitle}
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          {t.accessibility.motionDesc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {motions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMotion(item.id)}
              className={`p-3.5 rounded-md border text-left transition-all text-xs flex items-center justify-between min-h-[44px] ${
                motion === item.id
                  ? 'border-[var(--brand-teal)] bg-[var(--brand-teal-light)] font-semibold text-[var(--brand-teal)] ring-1 ring-[var(--brand-teal)]'
                  : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
              }`}
            >
              <div>
                <p className="font-bold text-sm">{item.label}</p>
                <p className="text-[11px] text-[var(--text-secondary)]">{item.desc}</p>
              </div>
              {motion === item.id && <Check className="w-4 h-4 text-[var(--brand-teal)]" />}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Voice Read Aloud Toggle */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-[var(--brand-teal)]" />
          <h2 className="font-semibold text-base text-[var(--text-primary)]">
            {t.accessibility.voiceTitle}
          </h2>
        </div>
        <p className="text-xs text-[var(--text-secondary)]">
          {t.accessibility.voiceDesc}
        </p>
        <div className="flex items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`px-4 py-2 rounded-md font-semibold text-xs transition-colors min-h-[44px] flex items-center gap-2 ${
              voiceEnabled
                ? 'bg-[var(--brand-teal)] text-white'
                : 'border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)]'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{voiceEnabled ? t.accessibility.voiceOn : t.accessibility.voiceOff}</span>
          </button>
        </div>
      </div>

      {/* Live Interactive Preview Box */}
      <div className="rounded-md border-2 border-[var(--brand-teal)]/30 bg-[var(--bg-surface)] p-6 space-y-2 shadow-xs">
        <span className="text-xs font-bold text-[var(--brand-teal)] uppercase tracking-wider block">
          {t.accessibility.previewHeading}
        </span>
        <h2 className="font-bold text-lg text-[var(--text-primary)]">
          उत्पन्न व रहिवासी प्रमाणपत्र मार्गदर्शन (Sample Guidance)
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {t.accessibility.previewBody} This confirms that your selected font scaling and contrast
          parameters render crisply without breaking line rhythm or UI hierarchy.
        </p>
      </div>
    </div>
  );
}
