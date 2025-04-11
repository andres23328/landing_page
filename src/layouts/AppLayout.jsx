import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
