"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t, lang, toggleLanguage } = useLanguage();

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
        <Link href="/" className="navbar-logo">
          <Image 
            src="/GNOLw.png" 
            alt="Globimex Logo" 
            width={180} 
            height={50} 
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleLanguage}
            style={{
              background: 'transparent',
              border: '1px solid var(--accent-color)',
              color: 'var(--text-main)',
              padding: '0.3rem 0.8rem',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '600'
            }}
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#servicios" className="nav-link" onClick={() => setMenuOpen(false)}>{t('nav_servicios')}</a>
          <a href="#nosotros" className="nav-link" onClick={() => setMenuOpen(false)}>{t('nav_nosotros')}</a>
          <a href="#contacto" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }} onClick={() => setMenuOpen(false)}>{t('nav_contacto')}</a>
        </div>
      </div>
    </nav>
  );
}
