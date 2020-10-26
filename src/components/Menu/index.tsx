import React, { useState } from 'react';
import Header from '../Header';
// import menuIndex from './menuIndex';
// import MenuBar from '../DrawerSite';

// This menu has 2 mainly components Header and DrawerSite (Menu)

const MenuSite = () => {
  const [mobileOpen, setMobileOpen] = useState(true);

  return (
    <div>
      {/* <MenuBar menuItems={menuIndex} mobileOpen={mobileOpen} /> */}

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </div>
  );
};

export default MenuSite;
