import React from 'react';
import ParcelClient from '@/app/services/parcel/ParcelClient';
import type { Metadata } from 'next';
import { metaTranslations } from '@/config/metaTranslations';

export const metadata: Metadata = {
  title: metaTranslations['services/parcel']['el'].title,
  description: metaTranslations['services/parcel']['el'].description,
  alternates: {
    canonical: 'https://helicro.be/el/services/parcel',
    languages: {
      'en': 'https://helicro.be/services/parcel',
      'nl': 'https://helicro.be/nl/services/parcel',
      'fr': 'https://helicro.be/fr/services/parcel',
      'el': 'https://helicro.be/el/services/parcel',
    }
  }
};

export default function Page() {
  return <ParcelClient lang="el" />;
}
