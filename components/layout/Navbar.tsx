'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAccessibility } from '@/context/AccessibilityContext';
import { useSavedServices } from '@/context/SavedServicesContext';
import {
  Globe,
  Sliders,
  Bookmark,
  Sun,
  Moon,
  MessageSquare,
  Search,
  ScanEye,
  ShieldCheck,
  Menu,
  X,
} from 'lucide-react';
import { Language } from '@/types';

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, theme, toggleTheme, t } = useAccessibility();
  const { savedIds } = useSavedServices();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: t.nav.exploreServices, icon: Search },
    { href: '/assistant', label: t.nav.askSahayak, icon: MessageSquare },
    { href: '/explain-screen', label: t.nav.explainScreen, icon: ScanEye },
    { href: '/digital-payments', label: t.nav.digitalPayments, icon: ShieldCheck },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'mr', label: 'मराठी' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'en', label: 'English' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-surface)] border-b border-[var(--border-color)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] rounded-md px-1 py-1"
          aria-label="Sahayak AI Home"
        >
          {/* Restrained geometric brand mark: Deep Teal square with warm copper accent */}
          <div className="w-8 h-8 rounded bg-[var(--brand-teal)] flex items-center justify-center text-white font-semibold text-base shadow-xs relative overflow-hidden">
            <span className="relative z-10">स</span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[var(--warm-copper)] rounded-full opacity-90" />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-lg tracking-tight text-[var(--text-primary)] leading-tight group-hover:text-[var(--brand-teal)] transition-colors">
              {t.nav.brand}
            </span>
            <span className="text-[11px] text-[var(--text-muted)] tracking-normal hidden sm:inline leading-none">
              {t.nav.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation */}
        <nav className="hidden md:flex items-center space-x-1" aria-label="Primary Navigation">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  active
                    ? 'bg-[var(--brand-teal-light)] text-[var(--brand-teal)] font-semibold border border-[var(--brand-teal)]/20'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Saved, Accessibility, Language, Theme */}
        <div className="flex items-center space-x-2">
          {/* Saved Items Link */}
          <Link
            href="/saved"
            aria-label={`${t.nav.saved} (${savedIds.length})`}
            className={`p-2 rounded-md text-sm font-medium transition-colors relative flex items-center justify-center min-w-[44px] min-h-[44px] ${
              isActive('/saved')
                ? 'bg-[var(--brand-teal-light)] text-[var(--brand-teal)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            {savedIds.length > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[var(--warm-copper)] text-white text-[10px] font-bold flex items-center justify-center">
                {savedIds.length}
              </span>
            )}
          </Link>

          {/* Accessibility Settings Center */}
          <Link
            href="/accessibility"
            aria-label={t.nav.accessibility}
            className={`p-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] ${
              isActive('/accessibility')
                ? 'bg-[var(--brand-teal-light)] text-[var(--brand-teal)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
            }`}
          >
            <Sliders className="w-4 h-4" />
          </Link>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="px-2.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] text-xs font-medium flex items-center gap-1.5 min-h-[40px] hover:bg-[var(--bg-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)]"
              aria-expanded={langMenuOpen}
              aria-haspopup="true"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--brand-teal)]" />
              <span>{languages.find((l) => l.code === language)?.label}</span>
            </button>

            {langMenuOpen && (
              <div
                className="absolute right-0 mt-1 w-32 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-md shadow-md py-1 z-50 animate-in fade-in zoom-in-95"
                role="menu"
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[var(--bg-subtle)] ${
                      language === l.code
                        ? 'text-[var(--brand-teal)] font-semibold bg-[var(--brand-teal-light)]'
                        : 'text-[var(--text-primary)]'
                    }`}
                    role="menuitem"
                  >
                    <span>{l.label}</span>
                    {language === l.code && <span className="text-[var(--brand-teal)]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)]"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-4 py-3 space-y-2">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium ${
                  active
                    ? 'bg-[var(--brand-teal-light)] text-[var(--brand-teal)] font-semibold'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <Icon className="w-4 h-4 opacity-75" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:underline py-1"
            >
              {t.nav.about}
            </Link>
            <span>{t.common.privacyNote}</span>
          </div>
        </div>
      )}
    </header>
  );
}
