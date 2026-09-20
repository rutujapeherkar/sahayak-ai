'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { useAccessibility } from '@/context/AccessibilityContext';
import { SAMPLE_SCREENS } from '@/data/demoScenarios';
import { ScreenExplanation } from '@/types';
import {
  ScanEye,
  UploadCloud,
  FileImage,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Volume2,
  VolumeX,
} from 'lucide-react';

export default function ExplainScreenPage() {
  const { language, speak, stopSpeaking, isSpeaking, t } = useAccessibility();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<ScreenExplanation | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowed = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];
    if (!allowed.includes(file.type.toLowerCase())) {
      setErrorMessage('Please upload a PNG, JPG, JPEG, or WebP image.');
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);
    setSelectedSampleId(null);
    setPreviewUrl(URL.createObjectURL(file));
    setExplanation(null);
  };

  const handleSelectSample = (sampleId: string) => {
    const sample = SAMPLE_SCREENS.find((s) => s.id === sampleId);
    if (!sample) return;

    setErrorMessage(null);
    setSelectedFile(null);
    setSelectedSampleId(sample.id);
    setPreviewUrl(sample.imageUrl);
    setExplanation(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile && !selectedSampleId) return;

    setAnalyzing(true);
    setErrorMessage(null);

    try {
      if (selectedSampleId) {
        const res = await fetch('/api/explain-screen', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sampleId: selectedSampleId }),
        });
        const data = await res.json();
        setExplanation(data);
      } else if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const res = await fetch('/api/explain-screen', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data.error) {
          setErrorMessage(data.error);
        } else {
          setExplanation(data);
        }
      }
    } catch {
      setErrorMessage('Failed to analyze the screen. Please try again.');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleReadAloud = () => {
    if (!explanation) return;
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const text = `${explanation.screenTitle}. ${explanation.summary}. ${t.screenExplainer.nextActionTitle}: ${explanation.nextAction}`;
      speak(text, language);
    }
  };

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[var(--border-color)] pb-6 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--brand-teal-light)] text-[var(--brand-teal)] border border-[var(--brand-teal)]/20">
          <ScanEye className="w-3.5 h-3.5" />
          <span>Visual Assistance Layer</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          {t.screenExplainer.pageTitle}
        </h1>
        <p className="text-sm text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          {t.screenExplainer.pageSubtitle}
        </p>
      </div>

      {/* Upload Zone & Sample Selection */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left: Drag & Drop / File Input Box */}
        <div className="md:col-span-7 space-y-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-[var(--border-color)] hover:border-[var(--brand-teal)] bg-[var(--bg-surface)] hover:bg-[var(--bg-subtle)] rounded-lg p-8 text-center cursor-pointer transition-colors space-y-3 min-h-[220px] flex flex-col items-center justify-center"
            role="button"
            tabIndex={0}
            aria-label="Upload Screenshot"
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-12 h-12 rounded-full bg-[var(--brand-teal-light)] text-[var(--brand-teal)] flex items-center justify-center">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-sm text-[var(--text-primary)]">
                {t.screenExplainer.uploadBoxTitle}
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                {t.screenExplainer.uploadBoxDesc}
              </p>
            </div>
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors min-h-[36px]"
            >
              {t.screenExplainer.chooseFile}
            </button>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-md bg-[var(--color-danger-bg)] border border-[var(--color-danger)]/30 text-xs text-[var(--color-danger)] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Privacy Note */}
          <p className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-[var(--warm-copper)] shrink-0" />
            <span>
              Privacy First: Uploaded screenshots are analyzed in-memory and NEVER stored. Never
              upload bank passwords or PINs.
            </span>
          </p>
        </div>

        {/* Right: Quick Sample Civic Screens */}
        <div className="md:col-span-5 space-y-3">
          <span className="text-xs font-semibold text-[var(--text-secondary)] block">
            {t.screenExplainer.trySample}
          </span>
          <div className="space-y-2.5">
            {SAMPLE_SCREENS.map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => handleSelectSample(sample.id)}
                className={`w-full p-3 rounded-md border text-left transition-all text-xs flex items-start gap-3 ${
                  selectedSampleId === sample.id
                    ? 'border-[var(--brand-teal)] bg-[var(--brand-teal-light)] font-semibold text-[var(--brand-teal)] ring-1 ring-[var(--brand-teal)]'
                    : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <FileImage className="w-4 h-4 text-[var(--brand-teal)] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-xs leading-snug">{sample.title}</p>
                  <p className="text-[11px] text-[var(--text-secondary)] line-clamp-2">
                    {sample.sampleDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview & Analyze Action */}
      {previewUrl && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-sm text-[var(--text-primary)]">Screenshot Preview</h2>
            <button
              type="button"
              onClick={handleAnalyze}
              disabled={analyzing}
              className="px-5 py-2.5 rounded-md bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors disabled:opacity-50 min-h-[44px] flex items-center gap-2 shadow-xs"
            >
              <ScanEye className="w-4 h-4" />
              <span>{analyzing ? t.screenExplainer.analyzing : 'Explain This Screen'}</span>
            </button>
          </div>

          <div className="rounded border border-[var(--border-color)] bg-[var(--bg-subtle)] p-2 flex items-center justify-center max-h-[380px] overflow-hidden">
            <img
              src={previewUrl}
              alt="Uploaded screenshot preview"
              className="max-h-[360px] object-contain rounded"
            />
          </div>
        </div>
      )}

      {/* Structured Explanation Breakdown */}
      {explanation && (
        <div className="rounded-md border-2 border-[var(--brand-teal)]/40 bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6 shadow-xs animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-color)]">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--brand-teal)] uppercase tracking-wider">
                {t.screenExplainer.explanationTitle}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {explanation.screenTitle}
              </h2>
            </div>

            <button
              type="button"
              onClick={handleReadAloud}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--brand-teal-light)] min-h-[36px]"
              aria-label={isSpeaking ? 'Stop reading explanation' : 'Read explanation aloud'}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[var(--color-danger)]" />
                  <span className="text-[var(--color-danger)]">{t.assistant.stopReading}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
                  <span>{t.assistant.readAloud}</span>
                </>
              )}
            </button>
          </div>

          {/* 1. What is this screen? */}
          <div className="space-y-1.5">
            <h3 className="font-semibold text-sm text-[var(--text-primary)]">
              {t.screenExplainer.screenType}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-subtle)] p-3.5 rounded-md border border-[var(--border-color)]/60">
              {explanation.summary}
            </p>
          </div>

          {/* 2. What information is required? */}
          {explanation.requiredFields.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="font-semibold text-sm text-[var(--text-primary)]">
                {t.screenExplainer.requiredInformation}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {explanation.requiredFields.map((f, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] space-y-1 text-xs"
                  >
                    <div className="font-semibold text-[var(--text-primary)] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-teal)]" />
                      <span>{f.fieldName}</span>
                    </div>
                    <p className="text-[var(--text-secondary)]">{f.description}</p>
                    <p className="text-[11px] text-[var(--brand-teal)] font-medium pt-1">
                      Action: {f.expectedInput}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Confusing terms defined */}
          {explanation.terminologyDefinitions.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="font-semibold text-sm text-[var(--text-primary)]">
                {t.screenExplainer.termsTitle}
              </h3>
              <div className="space-y-2">
                {explanation.terminologyDefinitions.map((term, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-md border border-[var(--border-color)]/60 bg-[var(--bg-surface)] text-xs flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3"
                  >
                    <strong className="text-[var(--warm-copper)] font-semibold shrink-0 sm:w-44">
                      {term.term}:
                    </strong>
                    <span className="text-[var(--text-secondary)] leading-relaxed">
                      {term.plainExplanation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. What should I do next? */}
          <div className="p-4 rounded-md bg-[var(--brand-teal-light)] border border-[var(--brand-teal)]/30 space-y-1.5">
            <h3 className="font-bold text-sm text-[var(--brand-teal)] flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              <span>{t.screenExplainer.nextActionTitle}</span>
            </h3>
            <p className="text-sm text-[var(--text-primary)] font-medium leading-relaxed pl-6">
              {explanation.nextAction}
            </p>
          </div>

          {/* Caution points */}
          {explanation.cautionPoints.length > 0 && (
            <div className="p-4 rounded-md bg-[var(--color-warning-bg)] border border-[var(--color-warning)]/30 space-y-1 text-xs text-[var(--color-warning)]">
              <span className="font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{t.screenExplainer.cautionTitle}:</span>
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-[var(--text-secondary)] pl-2">
                {explanation.cautionPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-[11px] text-[var(--text-muted)] border-t border-[var(--border-color)]/60 pt-3 italic">
            {explanation.disclaimer}
          </p>
        </div>
      )}
    </div>
  );
}
