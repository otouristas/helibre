'use client';

import React, { useCallback, useState } from 'react';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';
import type { MenuFacts } from '@/config/mobileMenu';

export default function HeaderLayout({ menuFacts }: { menuFacts: MenuFacts }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      <Navbar onOpenMobileMenu={openDrawer} isMobileMenuOpen={isDrawerOpen} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} facts={menuFacts} />
    </>
  );
}
