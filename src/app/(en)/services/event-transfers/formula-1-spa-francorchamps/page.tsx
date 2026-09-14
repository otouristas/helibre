import React from 'react';
import type { Metadata } from 'next';
import EventTransferPage from '@/components/EventTransferPage';
import JsonLd from '@/components/JsonLd';
import { spaMotorsportContent } from '@/config/eventTransfersContent';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { pageMetadata, sharedPathAlternates } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  title: 'Spa-Francorchamps F1 & Motorsport Transfers | Private Chauffeur | Helicro',
  description: 'Premium private transfers to Circuit de Spa-Francorchamps for Formula 1, Ferrari track days, and 24h Spa. Luxury 8-seater van from Brussels & airports.',
  alternates: sharedPathAlternates('/services/event-transfers/formula-1-spa-francorchamps', ['en', 'nl', 'fr']),
  image: '/images/event-service.jpg',
});

export default function Page() {
  const content = spaMotorsportContent.en;
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Spa-Francorchamps F1 & Motorsport Private Chauffeur Service',
            serviceType: 'Motorsport Private Transport',
            description:
              'Executive 8-seater chauffeur service for Formula 1 Grand Prix, Ferrari track days, and events at Circuit de Spa-Francorchamps.',
            url: '/services/event-transfers/formula-1-spa-francorchamps',
            areaServed: [
              { type: 'City', name: 'Spa' },
              { type: 'City', name: 'Brussels' },
              { type: 'Country', name: 'Belgium' },
            ],
          }),
          faqSchema(content.faqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Event Transfers', url: '/services/event-transfers' },
            {
              name: 'Spa-Francorchamps F1',
              url: '/services/event-transfers/formula-1-spa-francorchamps',
            },
          ]),
        ]}
      />
      <EventTransferPage lang="en" content={content} />
    </>
  );
}
