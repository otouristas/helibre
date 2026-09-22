import React from 'react';
import type { Metadata } from 'next';
import PriceList from '@/components/PriceList';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  title: 'Price List 2026 | Fixed Prices per Minivan: Airports, Cities, Cross-Border | Helicro',
  description: 'Every Helicro fixed price: Brussels to Zaventem from 35€, Charleroi from 65€, shared shuttle 25€ per person, Antwerp, Ghent, Bruges, Lille, Paris, Amsterdam, Cologne, Luxembourg. Per vehicle, VAT included.',
  alternates: { en: '/price-list', nl: '/nl/prijslijst', fr: '/fr/tarifs' },
  image: '/images/car-1.jpg',
});

export default function Page() {
  return <PriceList lang="en" />;
}
