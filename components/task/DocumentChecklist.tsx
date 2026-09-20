'use client';

import React, { useState, useEffect } from 'react';
import { ServiceDocument, Language } from '@/types';
import { CheckSquare, Square, FileText, AlertCircle } from 'lucide-react';

interface DocumentChecklistProps {
  serviceId: string;
  documents: ServiceDocument[];
  language: Language;
}

export function DocumentChecklist({ serviceId, documents, language }: DocumentChecklistProps) {
  const storageKey = `sahayak_docs_${serviceId}`;
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCheckedIds(JSON.parse(saved));
      }
    } catch {
      // Ignore
    }
  }, [storageKey]);

  const toggleCheck = (docId: string) => {
    setCheckedIds((prev) => {
      const updated = prev.includes(docId)
        ? prev.filter((id) => id !== docId)
        : [...prev, docId];
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  };

  if (!documents || documents.length === 0) {
    return (
      <div className="p-4 rounded-md border border-[var(--border-color)] bg-[var(--bg-subtle)] text-xs text-[var(--text-secondary)]">
        No specific physical documents are mandated prior to registration for this service.
      </div>
    );
  }

  const completedCount = documents.filter((d) => checkedIds.includes(d.id)).length;
  const isAllDone = completedCount === documents.length;

  return (
    <div className="space-y-3">
      {/* Progress header */}
      <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] pb-1">
        <span>
          Prepared: <strong className="text-[var(--text-primary)]">{completedCount}</strong> of{' '}
          {documents.length}
        </span>
        {isAllDone && (
          <span className="text-[var(--color-success)] font-semibold flex items-center gap-1">
            ✓ All documents ready!
          </span>
        )}
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5">
        {documents.map((doc) => {
          const isChecked = checkedIds.includes(doc.id);
          const name = doc.name[language] || doc.name.en;
          const desc = doc.description[language] || doc.description.en;
          const alts = doc.alternatives ? doc.alternatives[language] : null;

          return (
            <div
              key={doc.id}
              onClick={() => toggleCheck(doc.id)}
              className={`p-3.5 rounded-md border text-xs cursor-pointer transition-all flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-[var(--color-success-bg)] border-[var(--color-success)]/40 text-[var(--text-primary)]'
                  : 'bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--brand-teal)]/40'
              }`}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleCheck(doc.id);
                }
              }}
            >
              <button
                type="button"
                className="mt-0.5 text-[var(--brand-teal)] shrink-0 focus:outline-none"
                tabIndex={-1}
                aria-hidden="true"
              >
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-[var(--color-success)]" />
                ) : (
                  <Square className="w-4 h-4 text-[var(--text-muted)]" />
                )}
              </button>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-semibold text-xs ${
                      isChecked ? 'line-through opacity-80' : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {name}
                  </span>
                  {doc.isMandatory && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[var(--color-danger-bg)] text-[var(--color-danger)] font-medium shrink-0">
                      Required
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{desc}</p>

                {alts && alts.length > 0 && (
                  <p className="text-[10px] text-[var(--text-muted)] italic">
                    Acceptable options: {alts.join(' • ')}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
