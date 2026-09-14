import React from 'react';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import HeaderLayout from '@/components/HeaderLayout';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import type { Locale } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'greek'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

/**
 * Shared document shell. Each locale route group has its own root layout that renders this
 * with the correct `lang`, so every page carries the right <html lang> for search engines,
 * screen readers and translation tools.
 */
export default function RootShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} className={inter.variable}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <JsonLd data={localBusinessSchema()} />
        <HeaderLayout />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
