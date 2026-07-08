import React from 'react';
import EventsClient from '@/app/services/events/EventsClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['services/events']['hr'].title,
  description: metaTranslations['services/events']['hr'].description,
    alternates: {
    canonical: 'https://helicro.be/hr/services/events',
    languages: {
      'en': 'https://helicro.be/services/events',
      'nl': 'https://helicro.be/nl/services/events',
      'fr': 'https://helicro.be/fr/services/events',
      'el': 'https://helicro.be/el/services/events',
      'hr': 'https://helicro.be/hr/services/events',
    }
  }
};

export default function Page() {
  return <EventsClient lang="hr" />;
}
