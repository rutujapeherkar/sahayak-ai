'use client';

import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

interface OfficialSourceButtonProps {
  url: string;
  portalName?: string;
  label?: string;
  className?: string;
}

export function OfficialSourceButton({
  url,
  portalName,
  label = 'Open Official Government Portal',
  className = '',
}: OfficialSourceButtonProps) {
  let hostname = '';
  try {
    hostname = new URL(url).hostname;
  } catch {
    hostname = url;
  }

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md font-semibold text-xs text-white bg-[var(--brand-teal)] hover:bg-[var(--brand-dark)] transition-colors shadow-xs min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)]"
      >
        <ShieldCheck className="w-4 h-4 text-emerald-300" />
        <span>{label}</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-90 ml-0.5" />
      </a>
      <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] px-1">
        <span>Source: {portalName || hostname}</span>
        <span className="font-mono text-[10px]">{hostname} ↗</span>
      </div>
    </div>
  );
}
