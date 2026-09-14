import React from 'react';
import type { Metadata } from 'next';
import ContactClient from '@/components/pages/ContactClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  ...metaTranslations['contact'].en,
  alternates: sharedPathAlternates('/contact'),
});

export default function Page() {
  return <ContactClient lang="en" />;
}
