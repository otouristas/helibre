import React from 'react';
import HomeClient from './HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helicro | Brussels Airport Taxi & Private Transfers',
  description: 'Private airport transfers in Brussels with English-speaking drivers, a Ford fleet and fixed prices to Zaventem & Charleroi. Book online with Helicro.',
  alternates: {
    canonical: 'https://helicro.be',
    languages: {
      'en': 'https://helicro.be',
      'nl': 'https://helicro.be/nl',
      'fr': 'https://helicro.be/fr',
      'el': 'https://helicro.be/el',
    }
  }
};

export default function Page() {
  return <HomeClient lang="en" />;
}
