import React from 'react';
import { BOOKING_POLICIES, type PolicyLang } from '@/config/bookingPolicies';

export default function BookingPolicyPanels({ lang }: { lang: PolicyLang }) {
  const policy = BOOKING_POLICIES[lang];

  return (
    <div style={{ marginBottom: '60px' }}>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '20px' }}>
        {policy.sectionTitle}
      </h2>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}
        className="grid-cols-mobile"
      >
        <article style={{ background: '#f8fafc', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
            {policy.airportWaitingTitle}
          </h3>
          {policy.airportWaiting.map((paragraph) => (
            <p key={paragraph} style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              {paragraph}
            </p>
          ))}
        </article>

        <article style={{ background: '#f8fafc', padding: '24px', borderRadius: 'var(--radius)', border: '1px solid var(--card-border)' }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '16px', color: 'var(--primary-dark)', marginBottom: '12px' }}>
            {policy.multiDayTitle}
          </h3>
          <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '12px' }}>
            {policy.multiDayIntro}
          </p>
          <ul style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: '0 0 12px 18px', padding: 0 }}>
            <li>{policy.multiDayFullRefund}</li>
            <li>{policy.multiDayNoRefund}</li>
          </ul>
          {policy.multiDayNotes.map((paragraph) => (
            <p key={paragraph} style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
}
