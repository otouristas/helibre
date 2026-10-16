import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { spaMotorsportContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

const PAGE_DESCRIPTION =
  'Privatni transferi do Spa-Francorchampsa za Formulu 1, Ferrari i 24 sata Spa. Kombi s 8 sjedala iz Bruxellesa i zračnih luka.';

export const metadata: Metadata = pageMetadata({
  lang: 'hr',
  title: 'Spa-Francorchamps F1 transferi | Privatni vozač | Helicro',
  description: PAGE_DESCRIPTION,
  alternates: sharedPathAlternates('/services/event-transfers/formula-1-spa-francorchamps'),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = spaMotorsportContent.hr;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Privatni vozač za Spa-Francorchamps',
            serviceType: 'Privatni prijevoz na utrke',
            description: PAGE_DESCRIPTION,
            url: '/hr/services/event-transfers/formula-1-spa-francorchamps',
            lang: 'hr',
            areaServed: [
              { type: 'City', name: 'Spa' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Početna', url: '/hr' },
            { name: 'Prijevoz na događaje', url: '/hr/services/event-transfers' },
            { name: 'Spa-Francorchamps F1', url: '/hr/services/event-transfers/formula-1-spa-francorchamps' },
          ]),
        ]}
      />
      <EventTransferPage lang="hr" content={content} />
    </>
  );
}
