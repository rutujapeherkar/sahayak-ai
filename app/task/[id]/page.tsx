'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceById } from '@/lib/retrieval';
import { buildTaskPlan } from '@/lib/taskPlanner';
import { useAccessibility } from '@/context/AccessibilityContext';
import { DocumentChecklist } from '@/components/task/DocumentChecklist';
import { OfficialSourceButton } from '@/components/ui/OfficialSourceButton';
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  ArrowLeft,
  Volume2,
  VolumeX,
  ShieldCheck,
  Info,
  HelpCircle,
} from 'lucide-react';

interface TaskPageProps {
  params: Promise<{ id: string }>;
}

export default function TaskPage({ params }: TaskPageProps) {
  const resolvedParams = use(params);
  const service = getServiceById(resolvedParams.id);
  const { language, guidanceMode, setGuidanceMode, speak, stopSpeaking, isSpeaking, t } =
    useAccessibility();

  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  if (!service) {
    return notFound();
  }

  const taskPlan = buildTaskPlan(service, language, guidanceMode, completedIndices);
  const currentStep = taskPlan.steps[activeStepIndex] || taskPlan.steps[0];

  const handleStepComplete = (index: number) => {
    setCompletedIndices((prev) => {
      const next = prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index];
      return next;
    });

    if (activeStepIndex < taskPlan.steps.length - 1) {
      setActiveStepIndex((prev) => prev + 1);
    }
  };

  const handleReadStep = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const speech = `${currentStep.title}. ${currentStep.explanation}. ${t.task.whyItMatters}: ${currentStep.whyItMatters}. ${t.task.requiredAction}: ${currentStep.requiredAction}`;
      speak(speech, language);
    }
  };

  const progressPercent = Math.round(
    (completedIndices.length / taskPlan.steps.length) * 100
  );

  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Back and Mode Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-teal)] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.common.back}</span>
        </Link>

        {/* Digital Confidence Mode Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--text-muted)] font-medium">
            {t.task.confidenceMode}
          </span>
          <div className="inline-flex rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-0.5">
            {(['simple', 'standard', 'assisted'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setGuidanceMode(mode)}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors capitalize ${
                  guidanceMode === mode
                    ? 'bg-[var(--brand-teal)] text-white font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {mode === 'simple'
                  ? t.task.simpleMode.split(' ')[0]
                  : mode === 'standard'
                  ? t.task.standardMode
                  : t.task.assistedMode.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Task Header & Progress */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 space-y-4 shadow-xs">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            {taskPlan.serviceName}
          </h1>
        </div>

        {/* Progress Bar with Dual Cues (Number + Text + Visual) */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-medium text-[var(--text-secondary)]">
            <span>
              {t.task.progress}: <strong className="text-[var(--text-primary)]">{progressPercent}%</strong> ({completedIndices.length} {t.task.of} {taskPlan.steps.length} {t.task.completed})
            </span>
            <span>
              {t.task.step} {activeStepIndex + 1} {t.task.of} {taskPlan.steps.length}
            </span>
          </div>

          <div
            className="w-full h-2.5 rounded-full bg-[var(--bg-subtle)] overflow-hidden border border-[var(--border-color)]"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-[var(--brand-teal)] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Step Sequence Nav */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
          {taskPlan.steps.map((step, idx) => {
            const isDone = completedIndices.includes(idx);
            const isCurrent = activeStepIndex === idx;

            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-2.5 rounded-md border text-left transition-all text-xs flex items-center gap-2 min-h-[44px] ${
                  isCurrent
                    ? 'border-[var(--brand-teal)] bg-[var(--brand-teal-light)] font-semibold text-[var(--brand-teal)] ring-1 ring-[var(--brand-teal)]'
                    : isDone
                    ? 'border-[var(--color-success)]/40 bg-[var(--color-success-bg)] text-[var(--text-primary)]'
                    : 'border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
                }`}
                aria-current={isCurrent ? 'step' : undefined}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-success)] shrink-0" />
                ) : isCurrent ? (
                  <span className="w-4 h-4 rounded-full bg-[var(--brand-teal)] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </span>
                ) : (
                  <Circle className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
                )}
                <span className="truncate leading-tight">{step.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Spotlight Card */}
      <div className="rounded-md border-2 border-[var(--brand-teal)]/50 bg-[var(--bg-surface)] p-6 sm:p-8 space-y-6 shadow-xs relative">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded bg-[var(--brand-teal)] text-white font-mono text-xs font-bold">
              {t.task.step} {currentStep.stepNumber}
            </span>
            <h2 className="font-bold text-lg sm:text-xl text-[var(--text-primary)]">
              {currentStep.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleReadStep}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] hover:bg-[var(--brand-teal-light)] text-xs font-medium text-[var(--text-primary)] min-h-[36px] transition-colors"
            aria-label={isSpeaking ? 'Stop reading step' : 'Read this step aloud'}
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

        {/* Explanation */}
        <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed">
          {currentStep.explanation}
        </p>

        {/* Why it matters */}
        {guidanceMode !== 'simple' && (
          <div className="p-4 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-color)] space-y-1">
            <span className="text-xs font-semibold text-[var(--brand-teal)] flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              {t.task.whyItMatters}
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed pl-5">
              {currentStep.whyItMatters}
            </p>
          </div>
        )}

        {/* Required Action */}
        <div className="p-4 rounded-md bg-[var(--brand-teal-light)] border border-[var(--brand-teal)]/30 space-y-1">
          <span className="text-xs font-bold text-[var(--brand-teal)] flex items-center gap-1.5">
            <ArrowRight className="w-4 h-4" />
            {t.task.requiredAction}
          </span>
          <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed pl-5">
            {currentStep.requiredAction}
          </p>
        </div>

        {/* Action Buttons: Mark Completed / Next Step */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="px-3.5 py-2 rounded-md border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-40 min-h-[40px]"
            >
              {t.task.previousStep}
            </button>

            <button
              type="button"
              disabled={activeStepIndex >= taskPlan.steps.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(taskPlan.steps.length - 1, prev + 1))}
              className="px-3.5 py-2 rounded-md border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-40 min-h-[40px]"
            >
              {t.task.nextStep}
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleStepComplete(activeStepIndex)}
            className={`px-5 py-2.5 rounded-md font-semibold text-xs transition-colors min-h-[44px] flex items-center gap-2 shadow-xs ${
              completedIndices.includes(activeStepIndex)
                ? 'bg-[var(--color-success)] text-white'
                : 'bg-[var(--brand-teal)] hover:bg-[var(--brand-dark)] text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {completedIndices.includes(activeStepIndex)
                ? t.task.completed
                : t.task.markDone}
            </span>
          </button>
        </div>
      </div>

      {/* Document Checklist for Step 2 */}
      {service.documents.length > 0 && (
        <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-4 shadow-xs">
          <h3 className="font-semibold text-base text-[var(--text-primary)]">
            {t.task.documentChecklist}
          </h3>
          <DocumentChecklist
            serviceId={service.id}
            documents={service.documents}
            language={language}
          />
        </div>
      )}

      {/* Official Portal Execution Link */}
      <div className="rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 space-y-3 shadow-xs">
        <h3 className="font-semibold text-sm text-[var(--text-primary)]">
          {t.common.officialSourceNote}
        </h3>
        <p className="text-xs text-[var(--text-secondary)]">
          Submit on the official portal:
        </p>
        <OfficialSourceButton
          url={taskPlan.officialSource.url}
          portalName={taskPlan.officialSource.portalName}
          label={t.task.openOfficialPortal}
        />
      </div>
    </div>
  );
}
