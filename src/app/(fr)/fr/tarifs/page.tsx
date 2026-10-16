import React from 'react';
import type { Metadata } from 'next';
import PriceList from '@/components/PriceList';
import { PRICE_LIST_PATHS } from '@/config/translations';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'fr',
  title: 'Tarifs 2026 | Prix fixes par minivan : aéroports, villes, étranger | Helicro',
  description: 'Tous les prix fixes Helicro : Bruxelles–Zaventem dès 35€, Charleroi dès 70€, navette partagée 25€ par personne, Anvers, Gand, Bruges, Lille, Paris, Amsterdam, Cologne, Luxembourg. Par véhicule, TVA comprise.',
  alternates: PRICE_LIST_PATHS,
  image: '/images/car-1.jpg',
});

export default function Page() {
  return <PriceList lang="fr" />;
}
