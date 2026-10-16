import React from 'react';
import type { Metadata } from 'next';
import PriceList from '@/components/PriceList';
import { PRICE_LIST_PATHS } from '@/config/translations';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  title: 'Cjenik 2026 | Fiksne cijene po kombiju | Helicro',
  description:
    'Sve fiksne cijene Helicra: Bruxelles–Zaventem od 35€, Charleroi od 70€, dijeljeni shuttle 25€ po osobi, Antwerpen, Ghent, Bruges, Lille, Pariz, Amsterdam, Köln, Luksemburg. Po vozilu, PDV uključen.',
  alternates: PRICE_LIST_PATHS,
  image: '/images/car-1.jpg',
});

export default function Page() {
  return <PriceList lang="hr" />;
}
