'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import Link from 'next/link';

export default function HeaderLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* 1. Special Offer Banner - Sits at the very top (scrolls away) */}
      <div 
        style={{
          width: '100%',
          background: 'linear-gradient(90deg, #fee83d 0%, #ffb300 100%)',
          color: '#1a1a1a',
          fontWeight: '700',
          fontSize: '0.9rem',
          textAlign: 'center',
          padding: '10px 16px',
          cursor: 'pointer',
          letterSpacing: '0.5px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          position: 'relative',
          zIndex: 101,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Link 
          href="/special-offers" 
          style={{ 
            color: 'inherit', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <span>🎉 Special Offer: Earn free rides with our loyalty program.</span>
          <span style={{ color: '#d32f2f', textDecoration: 'underline', fontWeight: 800 }}>Learn more</span>
        </Link>
      </div>

      {/* 2. Main Navigation Shell (includes Topbar and Navbar) */}
      <Navbar onOpenMobileMenu={openDrawer} />

      {/* 3. Mobile Navigation Drawer */}
      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
