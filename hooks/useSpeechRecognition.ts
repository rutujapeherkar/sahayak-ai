'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Language } from '@/types';

export type SpeechState =
  | 'idle'
  | 'listening'
  | 'processing'
  | 'unsupported'
  | 'permission_denied'
  | 'error';

interface UseSpeechRecognitionProps {
  language: Language;
  onResult: (transcript: string) => void;
}

export function useSpeechRecognition({ language, onResult }: UseSpeechRecognitionProps) {
  const [state, setState] = useState<SpeechState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setState('unsupported');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setState('listening');
        setErrorMessage(null);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript) {
          onResult(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === 'not-allowed') {
          setState('permission_denied');
          setErrorMessage('Microphone access was denied. Please allow microphone permissions.');
        } else {
          setState('error');
          setErrorMessage(
            event.error === 'no-speech'
              ? 'No speech detected. Please try speaking again.'
              : `Speech recognition error (${event.error}). You can type instead.`
          );
        }
      };

      recognition.onend = () => {
        setState((prev) => (prev === 'listening' ? 'idle' : prev));
      };

      recognitionRef.current = recognition;
    } catch {
      setState('unsupported');
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // Ignore
        }
      }
    };
  }, [onResult]);

  // Update recognition language
  useEffect(() => {
    if (recognitionRef.current) {
      if (language === 'mr') {
        recognitionRef.current.lang = 'mr-IN';
      } else if (language === 'hi') {
        recognitionRef.current.lang = 'hi-IN';
      } else {
        recognitionRef.current.lang = 'en-IN';
      }
    }
  }, [language]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setState('unsupported');
      return;
    }
    try {
      setErrorMessage(null);
      recognitionRef.current.start();
    } catch {
      // If already started, ignore or restart
      try {
        recognitionRef.current.stop();
        recognitionRef.current.start();
      } catch {
        // Ignore
      }
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        setState('idle');
      } catch {
        // Ignore
      }
    }
  }, []);

  return {
    state,
    errorMessage,
    isListening: state === 'listening',
    isSupported: state !== 'unsupported',
    startListening,
    stopListening,
  };
}
