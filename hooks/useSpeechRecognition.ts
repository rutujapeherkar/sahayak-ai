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

  // Store latest onResult and language in refs so re-renders don't recreate listeners
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const languageRef = useRef(language);
  languageRef.current = language;

  const recognitionRef = useRef<any>(null);

  // Check support on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setState('unsupported');
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignore
      }
      recognitionRef.current = null;
    }
    setState('idle');
  }, []);

  const startListening = useCallback(async () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setState('unsupported');
      setErrorMessage('Speech recognition is not supported in this browser.');
      return;
    }

    // Stop any existing session
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // Ignore
      }
      recognitionRef.current = null;
    }

    try {
      setState('processing');
      setErrorMessage(null);

      // Request microphone permission explicitly via mediaDevices
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach((track) => track.stop());
        } catch (mediaErr: any) {
          if (mediaErr.name === 'NotAllowedError' || mediaErr.name === 'PermissionDeniedError') {
            setState('permission_denied');
            setErrorMessage(
              'Microphone access is blocked. Click the lock/tune icon next to http://localhost:3000 in your browser address bar to allow Microphone, then refresh.'
            );
            return;
          }
        }
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      // Set language locale
      const currentLang = languageRef.current;
      if (currentLang === 'mr') {
        recognition.lang = 'mr-IN';
      } else if (currentLang === 'hi') {
        recognition.lang = 'hi-IN';
      } else {
        recognition.lang = 'en-IN';
      }

      recognition.onstart = () => {
        setState('listening');
        setErrorMessage(null);
      };

      recognition.onresult = (event: any) => {
        let fullTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          fullTranscript += event.results[i][0].transcript;
        }
        if (fullTranscript && onResultRef.current) {
          onResultRef.current(fullTranscript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('SpeechRecognition error:', event.error);
        if (event.error === 'not-allowed') {
          setState('permission_denied');
          setErrorMessage(
            'Microphone access denied. Please allow microphone permissions in your browser address bar.'
          );
        } else if (event.error === 'network') {
          setState('error');
          setErrorMessage(
            "Browser speech service network error. Chrome's Speech Recognition requires access to Google's speech servers. You can also type your goal."
          );
        } else if (event.error === 'no-speech') {
          // Do not treat no-speech as fatal error
        } else {
          setState('error');
          setErrorMessage(`Speech recognition notice: ${event.error}. You can type your goal.`);
        }
      };

      recognition.onend = () => {
        setState((prev) => (prev === 'listening' ? 'idle' : prev));
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setState('error');
      setErrorMessage(
        'Could not initialize microphone. Please check browser permissions or type instead.'
      );
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
