"use client";

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq1_q'),
      answer: t('faq1_a')
    },
    {
      question: t('faq2_q'),
      answer: t('faq2_a')
    },
    {
      question: t('faq3_q'),
      answer: t('faq3_a')
    },
    {
      question: t('faq4_q'),
      answer: t('faq4_a')
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>{t('faq_title')}</h2>
      </div>
      
      <div className="neo-panel" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: index !== faqs.length - 1 ? '1.5rem' : '0' }}>
            <button
              onClick={() => toggleFaq(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.2rem 1.5rem',
                backgroundColor: openIndex === index ? 'rgba(0,0,0,0.03)' : 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}
              className={openIndex === index ? 'neo-panel-inset' : 'service-card'}
            >
              <span style={{ 
                fontFamily: 'var(--font-montserrat), sans-serif',
                fontWeight: '600',
                color: 'var(--text-main)',
                fontSize: '1.05rem',
                letterSpacing: '0.05em'
              }}>
                {faq.question}
              </span>
              <span style={{ 
                fontSize: '1.5rem', 
                color: 'var(--accent-color)',
                transition: 'transform 0.3s ease',
                transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)'
              }}>
                +
              </span>
            </button>
            
            <div style={{
              maxHeight: openIndex === index ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease, opacity 0.4s ease',
              opacity: openIndex === index ? 1 : 0
            }}>
              <div style={{ 
                padding: '1.5rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                borderLeft: '2px solid var(--accent-color)',
                marginLeft: '1.5rem',
                marginTop: '0.5rem',
                textShadow: '0 1px 1px rgba(255,255,255,0.5)'
              }}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
