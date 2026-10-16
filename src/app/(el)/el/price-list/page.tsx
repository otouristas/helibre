import React from 'react';
import type { Metadata } from 'next';
import PriceList from '@/components/PriceList';
import { PRICE_LIST_PATHS } from '@/config/translations';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  title: 'Τιμοκατάλογος 2026 | Σταθερές τιμές ανά minivan | Helicro',
  description:
    'Όλες οι τιμές Helicro: Βρυξέλλες–Zaventem από 35€, Charleroi από 70€, κοινόχρηστο λεωφορείο 25€ ανά άτομο, Αμβέρσα, Γάνδη, Μπρυζ, Λιλ, Παρίσι, Άμστερνταμ, Κολωνία, Λουξεμβούργο. Ανά όχημα, με ΦΠΑ.',
  alternates: PRICE_LIST_PATHS,
  image: '/images/car-1.jpg',
});

export default function Page() {
  return <PriceList lang="el" />;
}
