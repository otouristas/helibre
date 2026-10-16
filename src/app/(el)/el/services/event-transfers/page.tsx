import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { eventTransfersHub } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Ιδιωτικές μεταφορές σε φεστιβάλ, Formula 1, ημέρες πίστας και εταιρικές συνόδους στο Βέλγιο. Σταθερές τιμές, έως 8 επιβάτες, εγγυημένη νυχτερινή επιστροφή.';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  title: 'Μεταφορές εκδηλώσεων στο Βέλγιο | Σοφέρ minivan 8 θέσεων | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers'),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = eventTransfersHub.el;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Μεταφορές εκδηλώσεων και υπηρεσίες σοφέρ στο Βέλγιο',
            serviceType: 'Μεταφορά εκδήλωσης με minivan',
            description: PAGE_DESCRIPTION,
            url: '/el/services/event-transfers',
            lang: 'el',
            areaServed: [
              { type: 'Country', name: 'Belgium' },
              { type: 'City', name: 'Brussels' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Αρχική', url: '/el' },
            { name: 'Μεταφορές εκδηλώσεων', url: '/el/services/event-transfers' },
          ]),
        ]}
      />
      <EventTransferPage lang="el" content={content} />
    </>
  );
}
