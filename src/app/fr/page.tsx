import React from 'react';
import HomeClient from '../HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helicro | Navette Aéroport Bruxelles & Transfert Privé',
  description: 'Transferts aéroport privés à Bruxelles avec chauffeur. Tarifs fixes vers Zaventem et Charleroi. Réservez votre van Ford en ligne.',
  alternates: {
    canonical: 'https://helicro.be/fr',
    languages: {
      'en': 'https://helicro.be',
      'nl': 'https://helicro.be/nl',
      'fr': 'https://helicro.be/fr',
      'el': 'https://helicro.be/el',
    }
  }
};

export default function Page() {
  return <HomeClient lang="fr" />;
}
