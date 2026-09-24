'use client';

import React from 'react';
import { Mic, MicOff, AlertCircle } from 'lucide-react';
import { SpeechState } from '@/hooks/useSpeechRecognition';

interface VoiceInputProps {
  state: SpeechState;
  errorMessage: string | null;
  onStart: () => void;
  onStop: () => void;
  label?: string;
}

export function VoiceInput({
  state,
  errorMessage,
  onStart,
  onStop,
  label = 'Voice Input',
}: VoiceInputProps) {
  const isListening = state === 'listening';
  const isProcessing = state === 'processing';
  const isUnsupported = state === 'unsupported';

  if (isUnsupported) {
    return (
      <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5 px-2 py-1">
        <MicOff className="w-3.5 h-3.5" />
        <span>Voice input is not supported in this browser. You can type instead.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={isListening ? onStop : onStart}
          disabled={isProcessing}
          className={`min-w-[44px] min-h-[44px] px-3 py-2 rounded-md font-medium text-xs flex items-center justify-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] ${
            isListening
              ? 'bg-[var(--color-danger)] text-white animate-pulse shadow-sm'
              : isProcessing
              ? 'bg-[var(--bg-subtle)] border border-[var(--brand-teal)] text-[var(--brand-teal)]'
              : 'border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
          }`}
          aria-label={isListening ? 'Stop Listening' : label}
          aria-pressed={isListening}
        >
          {isListening ? (
            <>
              <MicOff className="w-4 h-4" />
              <span>Listening... Click to Stop</span>
            </>
          ) : isProcessing ? (
            <>
              <span className="w-3 h-3 rounded-full border-2 border-[var(--brand-teal)] border-t-transparent animate-spin" />
              <span>Connecting Mic...</span>
            </>
          ) : (
            <>
              <Mic className="w-4 h-4 text-[var(--brand-teal)]" />
              <span>{label}</span>
            </>
          )}
        </button>

        {isListening && (
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-danger)] font-medium">
            <span className="w-2 h-2 rounded-full bg-[var(--color-danger)] animate-ping" />
            Microphone active (Speak now)
          </span>
        )}
      </div>

      {errorMessage && (
        <p className="mt-1 text-xs text-[var(--color-danger)] flex items-center gap-1" role="alert">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMessage}</span>
        </p>
      )}
    </div>
  );
}
