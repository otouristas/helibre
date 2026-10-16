'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileDrawer from './MobileDrawer';

export default function HeaderLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <Navbar onOpenMobileMenu={openDrawer} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
