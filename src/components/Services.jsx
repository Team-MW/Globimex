"use client";

import { 
  Building2, 
  Wrench, 
  Leaf, 
  Paintbrush, 
  Trees, 
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      id: 1,
      title: t('srv1_title'),
      desc: t('srv1_desc'),
      icon: <Building2 size={24} />
    },
    {
      id: 2,
      title: t('srv2_title'),
      desc: t('srv2_desc'),
      icon: <Wrench size={24} />
    },
    {
      id: 3,
      title: t('srv3_title'),
      desc: t('srv3_desc'),
      icon: <Leaf size={24} />
    },
    {
      id: 4,
      title: t('srv4_title'),
      desc: t('srv4_desc'),
      icon: <Paintbrush size={24} />
    },
    {
      id: 5,
      title: t('srv5_title'),
      desc: t('srv5_desc'),
      icon: <Trees size={24} />
    },
    {
      id: 6,
      title: t('srv6_title'),
      desc: t('srv6_desc'),
      icon: <ClipboardCheck size={24} />
    }
  ];

  return (
    <section id="servicios" className="section container">
      
      <div className="services-header-layout">
        <span style={{ letterSpacing: '3px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-color)' }}>{t('services_tag')}</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 2rem 0', color: 'var(--text-main)', textTransform: 'none', fontFamily: 'serif' }}>
          {t('services_title_part1')}<span style={{ color: 'var(--accent-color)' }}>{t('services_title_part2')}</span>
        </h2>
        <p style={{ color: 'var(--text-main)', maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '4rem' }}>
          {t('services_desc')}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '2rem' }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', margin: 0, textTransform: 'none', fontFamily: 'serif' }}>{t('services_subtitle_part1')}<span style={{ color: 'var(--accent-color)' }}>{t('services_subtitle_part2')}</span></h3>
          <a href="#contacto" className="btn-services-outline">
            {t('services_btn')} <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="services-grid">
        {servicesList.map((srv, i) => (
          <motion.div 
            key={srv.id} 
            className="service-card neo-panel" 
            style={{ padding: 0, overflow: 'hidden', backgroundColor: 'var(--secondary-color)', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div style={{ padding: '2.5rem 2rem' }}>
              <div style={{ 
                width: '50px', height: '50px', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '1.5rem', border: '1px solid rgba(212,175,55,0.3)', color: 'var(--accent-color)'
              }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', textTransform: 'none', color: 'var(--text-main)' }}>{srv.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{srv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
