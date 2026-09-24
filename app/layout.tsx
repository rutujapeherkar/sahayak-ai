import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_Devanagari } from 'next/font/google';
import './globals.css';
import { AccessibilityProvider } from '@/context/AccessibilityContext';
import { SavedServicesProvider } from '@/context/SavedServicesContext';
import { Navbar, Footer, MobileNav } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-devanagari',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sahayak AI — Making Digital Services Usable For Everyone',
  description:
    'An AI-powered accessibility and task-navigation layer for digital public services. Making essential public services understandable, navigable, and accessible for every citizen.',
  keywords: [
    'civic tech',
    'accessibility',
    'digital public services',
    'task navigation',
    'income certificate',
    'residence certificate',
    'upi safety',
    'screen explanation',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${inter.variable} ${notoDevanagari.variable}`}>
      <body className="flex flex-col min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] antialiased selection:bg-[var(--brand-teal-light)] selection:text-[var(--brand-teal)]">
        <AccessibilityProvider>
          <SavedServicesProvider>
            {/* Skip to Main Content Link for Keyboard / Screen Reader Accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--brand-teal)] text-white rounded font-medium shadow-md outline-none"
            >
              Skip to main content
            </a>

            <Navbar />
            <main id="main-content" className="flex-1 flex flex-col pb-20 md:pb-0">
              {children}
            </main>
            <Footer />
            <MobileNav />
          </SavedServicesProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
