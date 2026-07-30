"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <Image src="/GNOLw.png" alt="Globimex Logo" width={220} height={60} className="logo-img" />
        </a>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#servicios" className="nav-link" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" className="nav-link" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#contacto" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }} onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}
