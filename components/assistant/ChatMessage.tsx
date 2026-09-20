'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChatMessage as ChatMessageType, Language } from '@/types';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useSavedServices } from '@/context/SavedServicesContext';
import {
  Volume2,
  VolumeX,
  Copy,
  Check,
  ArrowRight,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
  onSelectClarification?: (value: string) => void;
}

export function ChatMessage({ message, onSelectClarification }: ChatMessageProps) {
  const { speak, stopSpeaking, isSpeaking, language, t } = useAccessibility();
  const { isSaved, toggleSave } = useSavedServices();
  const [copied, setCopied] = useState(false);
  const isAssistant = message.role === 'assistant';

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReadAloud = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      speak(message.content, message.detectedLanguage || language);
    }
  };

  return (
    <div
      className={`flex flex-col mb-5 animate-in fade-in slide-in-from-bottom-2 duration-200 ${
        isAssistant ? 'items-start' : 'items-end'
      }`}
    >
      {/* Sender Header */}
      <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] text-[var(--text-muted)] font-medium">
        {isAssistant ? (
          <>
            <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)]" />
            <span>Sahayak AI</span>
            {message.detectedLanguage && (
              <span className="text-[10px] px-1.5 py-0.2 bg-[var(--bg-subtle)] rounded border border-[var(--border-color)]">
                {message.detectedLanguage.toUpperCase()}
              </span>
            )}
          </>
        ) : (
          <span>You</span>
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[90%] sm:max-w-[80%] rounded-lg p-4 text-sm leading-relaxed border transition-colors ${
          isAssistant
            ? 'bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-primary)] shadow-xs'
            : 'bg-[var(--brand-teal)] border-transparent text-white shadow-xs'
        }`}
      >
        <p className="whitespace-pre-line">{message.content}</p>

        {/* Clarification Options (P1/Smart Clarification) */}
        {message.clarificationOptions && message.clarificationOptions.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[var(--border-color)]/60 space-y-2">
            <span className="text-xs font-semibold text-[var(--text-secondary)] block">
              {t.assistant.clarificationPrompt}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {message.clarificationOptions.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onSelectClarification && onSelectClarification(opt.value)}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--brand-teal)] bg-[var(--brand-teal-light)] text-[var(--brand-teal)] hover:bg-[var(--brand-teal)] hover:text-white transition-colors"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Services in Response */}
        {message.recommendedServices && message.recommendedServices.length > 0 && (
          <div className="mt-4 pt-3 border-t border-[var(--border-color)]/60 space-y-3">
            <span className="text-xs font-semibold text-[var(--text-secondary)] block">
              {t.assistant.recommendedServices}:
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {message.recommendedServices.map((svc) => (
                <div
                  key={svc.id}
                  className="p-3 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-xs text-[var(--text-primary)]">
                      {svc.name[language] || svc.name.en}
                    </h4>
                    <p className="text-[11px] text-[var(--text-secondary)] line-clamp-1">
                      {svc.shortDescription[language] || svc.shortDescription.en}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <Link
                      href={`/task/${svc.id}`}
                      className="px-2.5 py-1.5 rounded bg-[var(--brand-teal)] text-white text-xs font-semibold hover:bg-[var(--brand-dark)] transition-colors flex items-center gap-1"
                    >
                      <span>{t.assistant.startJourney}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link
                      href={`/services/${svc.id}`}
                      className="px-2 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium"
                    >
                      {t.assistant.viewDetails}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contextual Action Bar */}
        {isAssistant && (
          <div className="mt-3 pt-2.5 border-t border-[var(--border-color)]/40 flex items-center justify-between text-xs text-[var(--text-muted)]">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleReadAloud}
                className="p-1.5 rounded hover:bg-[var(--bg-subtle)] hover:text-[var(--brand-teal)] transition-colors flex items-center gap-1 text-[11px] min-h-[32px]"
                aria-label={isSpeaking ? 'Stop reading' : 'Read message aloud'}
              >
                {isSpeaking ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[var(--color-danger)]" />
                    <span className="text-[var(--color-danger)]">{t.assistant.stopReading}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{t.assistant.readAloud}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="p-1.5 rounded hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 text-[11px] min-h-[32px]"
                aria-label="Copy message text"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--color-success)]" />
                    <span className="text-[var(--color-success)]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {message.recommendedServices && message.recommendedServices.length > 0 && (
              <button
                type="button"
                onClick={() => toggleSave(message.recommendedServices![0].id)}
                className="p-1.5 rounded hover:bg-[var(--bg-subtle)] flex items-center gap-1 text-[11px]"
                aria-label="Save primary service"
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${
                    isSaved(message.recommendedServices![0].id)
                      ? 'fill-[var(--warm-copper)] text-[var(--warm-copper)]'
                      : ''
                  }`}
                />
                <span>
                  {isSaved(message.recommendedServices![0].id)
                    ? t.assistant.saved
                    : t.assistant.saveService}
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
