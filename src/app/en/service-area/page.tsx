import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Area | Helicro Transport Belgium',
  description: 'See every Belgian city, airport and route Helicro covers, with maps, fixed prices and direct booking links.',
};

interface CityArea {
  name: string;
  slug: string;
  description: string;
}

export default function ServiceAreaHub() {
  const cities: CityArea[] = [
    { name: 'Brussels', slug: 'brussels', description: 'Airport transfers, sightseeing, event shuttles, and corporate protocol.' },
    { name: 'Antwerp', slug: 'antwerp', description: 'Transfers from Antwerp province to Zaventem and Charleroi airports.' },
    { name: 'Ghent', slug: 'ghent', description: 'Flemish jewel sightseeing tours and direct airport transfers.' },
    { name: 'Bruges', slug: 'bruges', description: 'Private tours of the Venice of the North and airport transfers.' },
    { name: 'Leuven', slug: 'leuven', description: 'Quick university city airport transfers in under 30 minutes.' },
    { name: 'Mechelen', slug: 'mechelen', description: 'Door-to-door private transfers to Zaventem & Charleroi.' },
    { name: 'Liège', slug: 'liege', description: 'Airport connections for Walloon business and leisure travelers.' },
    { name: 'Namur', slug: 'namur', description: 'Capital city of Wallonia transfers to Brussels South Charleroi (CRL).' },
    { name: 'Charleroi', slug: 'charleroi', description: 'Private transfers serving budget airline flight connections.' },
    { name: 'Mons', slug: 'mons', description: 'Minivan transfer routes connecting Mons directly to airports.' },
    { name: 'Hasselt', slug: 'hasselt', description: 'Direct transfers from Limburg province to Zaventem & Charleroi.' },
    { name: 'Ostend', slug: 'ostend', description: 'Coastal pickups and airport transfers for seaside travelers.' }
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="text-center text-4xl font-extrabold mb-4" style={{ color: 'var(--primary-dark)' }}>
          Helicro Service Area
        </h1>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
          We operate across Flanders, Wallonia, and the Brussels-Capital Region, connecting all major cities to Belgian airports.
        </p>

        {/* Cities Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px' 
          }}
        >
          {cities.map((city, i) => (
            <div 
              key={i}
              style={{
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition)'
              }}
              className="city-card"
            >
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--primary-dark)', marginBottom: '8px' }}>
                {city.name}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '16px' }}>
                {city.description}
              </p>
              <Link 
                href={`/en/service-area/${city.slug}`}
                style={{ 
                  color: 'var(--primary-light)', 
                  fontWeight: '600', 
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>View Chauffeur Details</span>
                &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* Custom CSS overrides for hover transition */}
        <style dangerouslySetInnerHTML={{__html: `
          .city-card:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow) !important;
            border-color: rgba(0, 62, 113, 0.12) !important;
          }
        `}} />
      </div>
    </div>
  );
}
