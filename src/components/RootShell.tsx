import React from 'react';
import Script from 'next/script';
import '@/app/globals.css';
import HeaderLayout from '@/components/HeaderLayout';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { AVERAGE_RATING, REVIEW_COUNT } from '@/config/googleReviews';
import { FIXED_PRICES } from '@/config/seoFacts';
import type { MenuFacts } from '@/config/mobileMenu';
import type { Locale } from '@/lib/seo';

const GA_MEASUREMENT_ID = 'G-TDF6RCNBJX';

/** Marketing indicators for the mobile menu, computed here so the client bundle stays small. */
const MENU_FACTS: MenuFacts = {
  rating: AVERAGE_RATING,
  reviewCount: REVIEW_COUNT,
  airportFrom: Math.min(...FIXED_PRICES.brusselsToBRU.map((p) => p.price)),
  waitSchengen: FIXED_PRICES.waitingFreeMinutes,
  waitNonSchengen: FIXED_PRICES.waitingFreeMinutesNonSchengen,
};

/**
 * Shared document shell. Each locale route group has its own root layout that renders this
 * with the correct `lang`, so every page carries the right <html lang> for search engines,
 * screen readers and translation tools.
 */
export default function RootShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <JsonLd data={localBusinessSchema(lang)} />
        <HeaderLayout menuFacts={MENU_FACTS} />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
