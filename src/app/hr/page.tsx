import React from 'react';
import HomeClient from '../HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HELICRO | TAKSI ZRAČNE LUKE BRUXELLES & PRIVATNI TRANSFERI',
  description: 'Privatni transferi zračne luke u Briselu. Fiksne cijene za Zaventem i Charleroi. Rezervirajte online.',
    alternates: {
    canonical: 'https://helicro.be/hr',
    languages: {
      'en': 'https://helicro.be',
      'nl': 'https://helicro.be/nl',
      'fr': 'https://helicro.be/fr',
      'el': 'https://helicro.be/el',
      'hr': 'https://helicro.be/hr',
    }
  }
};

export default function Page() {
  return <HomeClient lang="hr" />;
}
