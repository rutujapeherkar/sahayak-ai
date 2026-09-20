'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
  AccessibilityPreferences,
  ContrastMode,
  GuidanceMode,
  Language,
  MotionMode,
  TextSize,
} from '@/types';
import { TRANSLATIONS, Translations } from '@/locales/translations';

interface AccessibilityContextType extends AccessibilityPreferences {
  theme: 'light' | 'dark';
  setTextSize: (size: TextSize) => void;
  setContrast: (contrast: ContrastMode) => void;
  setMotion: (motion: MotionMode) => void;
  setVoiceEnabled: (enabled: boolean) => void;
  setLanguage: (lang: Language) => void;
  setGuidanceMode: (mode: GuidanceMode) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  resetDefaults: () => void;
  speak: (text: string, langOverride?: Language) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
  t: Translations;
}

const DEFAULT_PREFERENCES: AccessibilityPreferences = {
  textSize: 'default',
  contrast: 'default',
  motion: 'normal',
  voiceEnabled: true,
  language: 'mr', // Default to Marathi per demo first scenario
  guidanceMode: 'standard',
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('sahayak_a11y_prefs');
      if (saved) {
        const parsed = JSON.parse(saved);
        setPreferences((prev) => ({ ...prev, ...parsed }));
      }
      const savedTheme = localStorage.getItem('sahayak_theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setThemeState(savedTheme);
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  // Update DOM attributes when preferences change
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    root.setAttribute('data-text-size', preferences.textSize);
    root.setAttribute('data-contrast', preferences.contrast);
    root.setAttribute('data-reduced-motion', preferences.motion === 'reduced' ? 'true' : 'false');
    root.setAttribute('data-theme', theme);
    root.setAttribute('lang', preferences.language);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (isMounted) {
      try {
        localStorage.setItem('sahayak_a11y_prefs', JSON.stringify(preferences));
        localStorage.setItem('sahayak_theme', theme);
      } catch {
        // Ignore write errors
      }
    }
  }, [preferences, theme, isMounted]);

  const setTextSize = (textSize: TextSize) => setPreferences((p) => ({ ...p, textSize }));
  const setContrast = (contrast: ContrastMode) => setPreferences((p) => ({ ...p, contrast }));
  const setMotion = (motion: MotionMode) => setPreferences((p) => ({ ...p, motion }));
  const setVoiceEnabled = (voiceEnabled: boolean) => setPreferences((p) => ({ ...p, voiceEnabled }));
  const setLanguage = (language: Language) => setPreferences((p) => ({ ...p, language }));
  const setGuidanceMode = (guidanceMode: GuidanceMode) =>
    setPreferences((p) => ({ ...p, guidanceMode }));

  const setTheme = (newTheme: 'light' | 'dark') => setThemeState(newTheme);
  const toggleTheme = () => setThemeState((t) => (t === 'light' ? 'dark' : 'light'));

  const resetDefaults = () => {
    setPreferences(DEFAULT_PREFERENCES);
    setThemeState('light');
  };

  const stopSpeaking = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const speak = useCallback(
    (text: string, langOverride?: Language) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        return;
      }
      stopSpeaking();

      const utterance = new SpeechSynthesisUtterance(text);
      const targetLang = langOverride || preferences.language;

      if (targetLang === 'mr') {
        utterance.lang = 'mr-IN';
      } else if (targetLang === 'hi') {
        utterance.lang = 'hi-IN';
      } else {
        utterance.lang = 'en-IN';
      }

      utterance.rate = 0.95; // Slightly calmer speaking rate for clear comprehension
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [preferences.language, stopSpeaking]
  );

  const t = TRANSLATIONS[preferences.language] || TRANSLATIONS.en;

  return (
    <AccessibilityContext.Provider
      value={{
        ...preferences,
        theme,
        setTextSize,
        setContrast,
        setMotion,
        setVoiceEnabled,
        setLanguage,
        setGuidanceMode,
        setTheme,
        toggleTheme,
        resetDefaults,
        speak,
        stopSpeaking,
        isSpeaking,
        t,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
