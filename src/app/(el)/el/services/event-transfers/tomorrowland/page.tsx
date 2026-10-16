import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { tomorrowlandContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Ιδιωτικό minivan 8 θέσεων για το Tomorrowland στο Boom. Παραλαβή από Zaventem, Charleroi και ξενοδοχεία. Σταθερές τιμές και νυχτερινή επιστροφή.';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  title: 'Tomorrowland ιδιωτικές μεταφορές | Βρυξέλλες προς Boom | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers/tomorrowland'),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = tomorrowlandContent.el;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Ιδιωτική μεταφορά VIP για το Tomorrowland',
            serviceType: 'Μεταφορά εκδήλωσης με minivan',
            description: PAGE_DESCRIPTION,
            url: '/el/services/event-transfers/tomorrowland',
            lang: 'el',
            areaServed: [
              { type: 'City', name: 'Boom' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Αρχική', url: '/el' },
            { name: 'Μεταφορές εκδηλώσεων', url: '/el/services/event-transfers' },
            { name: 'Tomorrowland', url: '/el/services/event-transfers/tomorrowland' },
          ]),
        ]}
      />
      <EventTransferPage lang="el" content={content} />
    </>
  );
}
