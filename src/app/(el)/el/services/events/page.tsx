import React from 'react';
import type { Metadata } from 'next';
import EventsClient from '@/components/pages/EventsClient';
import { metaTranslations } from '@/config/metaTranslations';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  ...metaTranslations['services/events'].el,
  alternates: sharedPathAlternates('/services/events'),
});

export default function Page() {
  return <EventsClient lang="el" />;
}
