'use client';

import React, { useMemo, useState } from 'react';

export type EventType =
  | 'general'
  | 'tomorrowland'
  | 'spa_f1'
  | 'ferrari_track_day'
  | 'corporate_summit'
  | 'other_festival';

const BOOK_URL = 'https://forms.clickup.com/9015129384/f/8cnfx98-215/HYNDJD9OSRESGIPWVM';
const WA_NUMBER = '32472358805';

const EVENT_MESSAGES: Record<EventType, string> = {
  general: 'Hello Helicro, I would like a quote for an event transfer.',
  tomorrowland: 'Hi Helicro, I need a quote for Tomorrowland transfers.',
  spa_f1: 'Hi Helicro, I need a quote for Spa-Francorchamps transfers.',
  ferrari_track_day: 'Hi Helicro, I need a quote for a Ferrari / motorsport track day transfer.',
  corporate_summit: 'Hi Helicro, I need a quote for an EU summit / trade fair transfer.',
  other_festival: 'Hi Helicro, I need a quote for a music festival transfer.',
};

const LABELS = {
  en: {
    label: 'Event / Special Occasion (Optional)',
    options: {
      general: 'General / Standard Transfer',
      tomorrowland: 'Tomorrowland (Boom)',
      spa_f1: 'Formula 1 Spa-Francorchamps',
      ferrari_track_day: 'Ferrari / Motorsport Track Day',
      corporate_summit: 'EU Summit / Trade Fair',
      other_festival: 'Other Music Festival',
    },
    whatsapp: 'Request Quote on WhatsApp',
    book: 'Book Online',
  },
  nl: {
    label: 'Evenement / Speciale gelegenheid (optioneel)',
    options: {
      general: 'Algemeen / Standaard transfer',
      tomorrowland: 'Tomorrowland (Boom)',
      spa_f1: 'Formule 1 Spa-Francorchamps',
      ferrari_track_day: 'Ferrari / Motorsport track day',
      corporate_summit: 'EU-top / Beurs',
      other_festival: 'Ander muziekfestival',
    },
    whatsapp: 'Vraag offerte via WhatsApp',
    book: 'Online boeken',
  },
  fr: {
    label: 'Événement / Occasion spéciale (optionnel)',
    options: {
      general: 'Général / Transfert standard',
      tomorrowland: 'Tomorrowland (Boom)',
      spa_f1: 'Formule 1 Spa-Francorchamps',
      ferrari_track_day: 'Ferrari / Journée circuit',
      corporate_summit: 'Sommet UE / Salon professionnel',
      other_festival: 'Autre festival de musique',
    },
    whatsapp: 'Demander un devis sur WhatsApp',
    book: 'Réserver en ligne',
  },
} as const;

type Lang = keyof typeof LABELS;

interface EventQuoteCTAProps {
  lang?: Lang;
  defaultEvent?: EventType;
  showSelector?: boolean;
  whatsappLabel?: string;
  bookLabel?: string;
}

export default function EventQuoteCTA({
  lang = 'en',
  defaultEvent = 'general',
  showSelector = true,
  whatsappLabel,
  bookLabel,
}: EventQuoteCTAProps) {
  const [eventType, setEventType] = useState<EventType>(defaultEvent);
  const t = LABELS[lang] || LABELS.en;

  const waHref = useMemo(() => {
    const msg = EVENT_MESSAGES[eventType];
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [eventType]);

  const bookHref = useMemo(() => {
    return `${BOOK_URL}?event_type=${encodeURIComponent(eventType)}`;
  }, [eventType]);

  return (
    <div
      style={{
        backgroundColor: 'var(--primary-dark)',
        color: '#ffffff',
        padding: '40px 24px',
        textAlign: 'center',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(255,255,255,0.1)',
        margin: '40px auto 0 auto',
        maxWidth: '1000px',
      }}
    >
      {showSelector && (
        <div className="form-group" style={{ maxWidth: 420, margin: '0 auto 24px', textAlign: 'left' }}>
          <label
            htmlFor="event-select"
            style={{ display: 'block', marginBottom: 8, fontSize: 14, color: 'rgba(255,255,255,0.85)' }}
          >
            {t.label}
          </label>
          <select
            id="event-select"
            name="event_type"
            className="form-control"
            value={eventType}
            onChange={(e) => setEventType(e.target.value as EventType)}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.2)',
              background: '#fff',
              color: '#111',
              fontSize: 15,
            }}
          >
            {(Object.keys(t.options) as EventType[]).map((key) => (
              <option key={key} value={key}>
                {t.options[key]}
              </option>
            ))}
          </select>
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#25D366',
            color: '#fff',
            padding: '14px 22px',
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          {whatsappLabel || t.whatsapp}
        </a>
        <a
          href={bookHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--accent)',
            color: '#111',
            padding: '14px 22px',
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          {bookLabel || t.book}
        </a>
      </div>
    </div>
  );
}
