'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccessibility } from '@/context/AccessibilityContext';
import { Search, MessageSquare, ScanEye, ShieldCheck, Sliders } from 'lucide-react';

export function MobileNav() {
  const pathname = usePathname();
  const { t } = useAccessibility();

  const items = [
    { href: '/services', label: t.nav.exploreServices, icon: Search },
    { href: '/assistant', label: t.nav.askSahayak, icon: MessageSquare },
    { href: '/explain-screen', label: t.nav.explainScreen, icon: ScanEye },
    { href: '/digital-payments', label: t.nav.digitalPayments, icon: ShieldCheck },
    { href: '/accessibility', label: t.nav.accessibility, icon: Sliders },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-surface)] border-t border-[var(--border-color)] px-2 py-1 flex items-center justify-around shadow-lg">
      {items.map((item) => {
        const active = isActive(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center min-w-[56px] min-h-[48px] py-1 px-1 text-[10px] font-medium transition-colors ${
              active
                ? 'text-[var(--brand-teal)] font-semibold'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Icon className={`w-5 h-5 mb-0.5 ${active ? 'stroke-[2.2]' : 'stroke-[1.6]'}`} />
            <span className="truncate max-w-[62px] text-center leading-tight">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
