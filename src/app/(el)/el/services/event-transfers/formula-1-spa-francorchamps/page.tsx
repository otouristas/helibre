import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { spaMotorsportContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Ιδιωτικές μεταφορές στο Spa-Francorchamps για Formula 1, Ferrari και 24 Ώρες. Minivan 8 θέσεων από Βρυξέλλες και αεροδρόμια.';

export const metadata: Metadata = pageMetadata({
  lang: 'el',
  title: 'Spa-Francorchamps F1 μεταφορές | Ιδιωτικός σοφέρ | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers/formula-1-spa-francorchamps'),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = spaMotorsportContent.el;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Ιδιωτικός σοφέρ για το Spa-Francorchamps',
            serviceType: 'Ιδιωτική μεταφορά αγώνων',
            description: PAGE_DESCRIPTION,
            url: '/el/services/event-transfers/formula-1-spa-francorchamps',
            lang: 'el',
            areaServed: [
              { type: 'City', name: 'Spa' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Αρχική', url: '/el' },
            { name: 'Μεταφορές εκδηλώσεων', url: '/el/services/event-transfers' },
            { name: 'Spa-Francorchamps F1', url: '/el/services/event-transfers/formula-1-spa-francorchamps' },
          ]),
        ]}
      />
      <EventTransferPage lang="el" content={content} />
    </>
  );
}
