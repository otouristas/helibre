import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { eventTransfersHub } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Privatni transferi na festivale, Formulu 1, dane na stazi i poslovne sastanke u Belgiji. Fiksne cijene, do 8 putnika, zajamčeni kasni povratak.';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  title: 'Privatni prijevoz na događaje u Belgiji | Kombi s 8 sjedala | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers'),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = eventTransfersHub.hr;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Prijevoz na događaje i usluge vozača u Belgiji',
            serviceType: 'Prijevoz na događaj kombijem',
            description: PAGE_DESCRIPTION,
            url: '/hr/services/event-transfers',
            lang: 'hr',
            areaServed: [
              { type: 'Country', name: 'Belgium' },
              { type: 'City', name: 'Brussels' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Početna', url: '/hr' },
            { name: 'Prijevoz na događaje', url: '/hr/services/event-transfers' },
          ]),
        ]}
      />
      <EventTransferPage lang="hr" content={content} />
    </>
  );
}
