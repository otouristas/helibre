import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { tomorrowlandContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Privatni kombi s 8 sjedala za Tomorrowland u Boomu. Preuzimanje iz Zaventema, Charleroija i hotela. Fiksne cijene i noćni povratak.';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  title: 'Tomorrowland privatni transferi | Bruxelles do Booma | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers/tomorrowland'),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = tomorrowlandContent.hr;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Privatni VIP transfer za Tomorrowland',
            serviceType: 'Prijevoz na događaj kombijem',
            description: PAGE_DESCRIPTION,
            url: '/hr/services/event-transfers/tomorrowland',
            lang: 'hr',
            areaServed: [
              { type: 'City', name: 'Boom' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Početna', url: '/hr' },
            { name: 'Prijevoz na događaje', url: '/hr/services/event-transfers' },
            { name: 'Tomorrowland', url: '/hr/services/event-transfers/tomorrowland' },
          ]),
        ]}
      />
      <EventTransferPage lang="hr" content={content} />
    </>
  );
}
