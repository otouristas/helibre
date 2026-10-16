import React from 'react';
import type { Metadata } from 'next';
import PriceList from '@/components/PriceList';
import { PRICE_LIST_PATHS } from '@/config/translations';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'nl',
  title: 'Prijslijst 2026 | Vaste prijzen per minivan: luchthavens, steden, buitenland | Helicro',
  description: 'Alle vaste prijzen van Helicro: Brussel–Zaventem vanaf 35€, Charleroi vanaf 70€, gedeelde shuttle 25€ per persoon, Antwerpen, Gent, Brugge, Rijsel, Parijs, Amsterdam, Keulen, Luxemburg. Per voertuig, incl. btw.',
  alternates: PRICE_LIST_PATHS,
  image: '/images/car-1.jpg',
});

export default function Page() {
  return <PriceList lang="nl" />;
}
