import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ menuOpen, toggleMenu }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Equipo', path: '/Equipo' },
    { name: 'Tecnologias', path: '/Tecnologias' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">Vida Fit</h1>

        {/* Botón móvil */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                menuOpen ? 'transform rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
                menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-green-600 transition-colors ${
                location.pathname === link.path ? 'text-green-600 font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 py-2 shadow"
          >
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className={`block py-2 transition-colors ${
                  location.pathname === link.path ? 'text-green-600 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
