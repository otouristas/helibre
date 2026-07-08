import React from 'react';
import FleetClient from '@/app/fleet/FleetClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['fleet']['hr'].title,
  description: metaTranslations['fleet']['hr'].description,
    alternates: {
    canonical: 'https://helicro.be/hr/fleet',
    languages: {
      'en': 'https://helicro.be/fleet',
      'nl': 'https://helicro.be/nl/fleet',
      'fr': 'https://helicro.be/fr/fleet',
      'el': 'https://helicro.be/el/fleet',
      'hr': 'https://helicro.be/hr/fleet',
    }
  }
};

export default function Page() {
  return <FleetClient lang="hr" />;
}
