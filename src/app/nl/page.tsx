import React from 'react';
import HomeClient from '../HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helicro | Luchthavenvervoer Brussel & Privé Transfers',
  description: 'Privé luchthavenvervoer in Brussel met ervaren chauffeurs. Vaste prijzen naar Zaventem en Charleroi Airport. Boek uw Ford minivan online.',
  alternates: {
    canonical: 'https://helicro.be/nl',
    languages: {
      'en': 'https://helicro.be',
      'nl': 'https://helicro.be/nl',
      'fr': 'https://helicro.be/fr',
      'el': 'https://helicro.be/el',
    }
  }
};

export default function Page() {
  return <HomeClient lang="nl" />;
}
