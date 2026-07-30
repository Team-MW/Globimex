"use client";

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Image src="/GNOLw.png" alt="Globimex Logo" width={220} height={60} style={{ objectFit: 'contain', marginBottom: '1.5rem' }} />
            <p style={{ maxWidth: '300px' }}>
              {t('footer_desc')}
            </p>
          </div>
          
          <div className="footer-col">
            <h3>{t('footer_contact_title')}</h3>
            <p><Phone size={18} className="text-accent" /> +34 900 123 456</p>
            <p><Mail size={18} className="text-accent" /> info@globimex.com</p>
            <p><MapPin size={18} className="text-accent" /> Madrid, España</p>
          </div>
          
          <div className="footer-col">
            <h3>{t('footer_links_title')}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#servicios" className="footer-link">{t('footer_link1')}</a>
              <a href="#nosotros" className="footer-link">{t('footer_link2')}</a>
              <a href="#contacto" className="footer-link">{t('footer_link3')}</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {t('footer_rights')}</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{t('footer_madeby')}</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="/mentions-legales" className="footer-legal-link">{t('footer_legal1')}</a>
            <a href="/politique-confidentialite" className="footer-legal-link">{t('footer_legal2')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
