'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChatMessage as ChatMessageType, Service } from '@/types';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { ChatMessage } from '@/components/assistant/ChatMessage';
import { GuidancePanel } from '@/components/assistant/GuidancePanel';
import { VoiceInput } from '@/components/assistant/VoiceInput';
import { getServiceById } from '@/lib/retrieval';
import { Send, Trash2, ArrowDown } from 'lucide-react';

function AssistantContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q');
  const { language, guidanceMode, t } = useAccessibility();

  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const initialProcessed = useRef(false);

  const { state: speechState, errorMessage, startListening, stopListening } =
    useSpeechRecognition({
      language,
      onResult: (transcript) => {
        setInputText(transcript);
      },
    });

  // Initial welcome message localized to active language
  useEffect(() => {
    let welcomeText = '';
    if (language === 'mr') {
      welcomeText =
        'नमस्कार! मी सहायक AI आहे. तुम्हाला कोणत्या शासकीय योजनेबद्दल, दाखल्याबद्दल किंवा डिजिटल सेवेबद्दल मदत हवी आहे?';
    } else if (language === 'hi') {
      welcomeText =
        'नमस्ते! मैं सहायक AI हूँ। आपको किस सरकारी योजना, प्रमाण पत्र या डिजिटल सेवा के संबंध में मार्गदर्शन चाहिए?';
    } else {
      welcomeText =
        'Hello! I am Sahayak AI. Which civic service, certificate, or welfare scheme can I help guide you through today?';
    }

    setMessages([
      {
        id: 'msg-welcome',
        role: 'assistant',
        content: welcomeText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'understanding',
      },
    ]);
  }, [language]);

  // Handle URL query parameter ?q=
  useEffect(() => {
    if (initialQuery && !initialProcessed.current) {
      initialProcessed.current = true;
      handleSendMessage(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsg: ChatMessageType = {
      id: `msg-user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          language,
          guidanceMode,
        }),
      });

      const data = await response.json();

      const assistantMsg: ChatMessageType = {
        id: `msg-asst-${Date.now()}`,
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: data.type,
        detectedLanguage: data.detectedLanguage,
        recommendedServices: data.recommendedServices,
        clarificationOptions: data.clarificationOptions,
        actions: data.actions,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // If a service was matched or recommended, spotlight it in the guidance panel
      if (data.recommendedServices && data.recommendedServices.length > 0) {
        setActiveService(data.recommendedServices[0]);
      } else if (data.taskRecommendation?.serviceId) {
        const found = getServiceById(data.taskRecommendation.serviceId);
        if (found) setActiveService(found);
      }
    } catch {
      // Graceful offline fallback
      const fallbackMsg: ChatMessageType = {
        id: `msg-err-${Date.now()}`,
        role: 'assistant',
        content:
          language === 'mr'
            ? 'मी तुमची मदत करू शकतो. कृपया उपलब्ध सेवांची यादी पहा.'
            : 'I can help you explore public services step-by-step.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'understanding',
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setActiveService(null);
  };

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
            {t.assistant.pageTitle}
          </h1>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            {t.assistant.pageSubtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={handleClearChat}
          className="text-xs text-[var(--text-muted)] hover:text-[var(--color-danger)] flex items-center gap-1 px-2.5 py-1.5 rounded border border-[var(--border-color)] hover:border-[var(--color-danger)]/40 transition-colors"
          aria-label="Clear chat"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.assistant.clearChat}</span>
        </button>
      </div>

      {/* Two-Column Responsive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-start">
        {/* Left / Primary Column: Conversation Stream */}
        <div className="lg:col-span-7 flex flex-col h-[650px] rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-xs overflow-hidden">
          {/* Messages list */}
          <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2">
            {messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                onSelectClarification={(val) => handleSendMessage(val)}
              />
            ))}

            {loading && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-[var(--bg-subtle)] text-xs text-[var(--text-secondary)] animate-pulse max-w-xs">
                <span className="w-2 h-2 rounded-full bg-[var(--brand-teal)] animate-ping" />
                <span>Sahayak is thinking...</span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Sticky Input Footer */}
          <div className="p-3 sm:p-4 border-t border-[var(--border-color)] bg-[var(--bg-subtle)] space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={t.assistant.inputPlaceholder}
                disabled={loading}
                className="flex-1 px-3.5 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-teal)] min-h-[44px]"
                aria-label={t.assistant.inputPlaceholder}
              />

              <button
                type="submit"
                disabled={!inputText.trim() || loading}
                className="px-4 py-2.5 rounded-md bg-[var(--brand-teal)] hover:bg-[var(--brand-dark)] text-white text-xs font-semibold flex items-center justify-center transition-colors disabled:opacity-50 min-h-[44px] shadow-xs shrink-0"
                aria-label={t.assistant.sendButton}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between">
              <VoiceInput
                state={speechState}
                errorMessage={errorMessage}
                onStart={startListening}
                onStop={stopListening}
                label={t.assistant.voiceInput}
              />
              <span className="text-[10px] text-[var(--text-muted)] hidden sm:inline">
                {t.assistant.disclaimer}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contextual Guidance & Active Task Panel */}
        <div className="lg:col-span-5">
          <GuidancePanel activeService={activeService} />
        </div>
      </div>
    </div>
  );
}

export default function AssistantPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-xs text-[var(--text-muted)]">Loading Assistant...</div>
        </div>
      }
    >
      <AssistantContent />
    </Suspense>
  );
}
