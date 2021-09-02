import React from 'react';

import { NavButton } from './NavButton';
import './navHeader.css';
import './globalStyles.css';

export const NavHeader = () => (
  <header>
    <div className="wrapper">
      <NavButton size="h2" label="SALE" />
      <NavButton size="h2" label="NEW IN" />
      <NavButton size="h2" label="CLOTHING" />
      <NavButton size="h2" label="SHOES" />
      <NavButton size="h2" label="ACCESSORIES" />
      <NavButton size="h2" label="FEATURES" />
    </div>
  </header>
);
