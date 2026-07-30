"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="section container">
      <div className="neo-panel" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{t('about_title')}</h2>
        <div style={{
          width: '80px',
          height: '4px',
          background: 'var(--accent-color)',
          margin: '0 auto 2.5rem auto',
          boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.2), 1px 1px 3px rgba(0,0,0,0.3)'
        }}></div>
        <p style={{ 
          fontSize: '1.15rem', 
          color: 'var(--text-muted)', 
          lineHeight: '1.9', 
          maxWidth: '850px', 
          margin: '0 auto',
          textShadow: '0 1px 1px rgba(255,255,255,0.7)' 
        }}>
          {t('about_desc1')}<strong>{t('about_desc_strong')}</strong>{t('about_desc2')}
        </p>
      </div>
    </section>
  );
}
