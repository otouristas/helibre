import React from 'react';
import type { Metadata } from 'next';
import PriceList from '@/components/PriceList';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'nl',
  title: 'Prijslijst 2026 | Vaste prijzen per minivan: luchthavens, steden, buitenland | Helicro',
  description: 'Alle vaste prijzen van Helicro: Brussel–Zaventem vanaf 35€, Charleroi vanaf 65€, gedeelde shuttle 25€ per persoon, Antwerpen, Gent, Brugge, Rijsel, Parijs, Amsterdam, Keulen, Luxemburg. Per voertuig, incl. btw.',
  alternates: { en: '/price-list', nl: '/nl/prijslijst', fr: '/fr/tarifs' },
  image: '/images/car-1.jpg',
});

export default function Page() {
  return <PriceList lang="nl" />;
}
