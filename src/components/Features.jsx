"use client";

import { MessageCircle, MapPin, FileText, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <MessageCircle size={28} />,
      title: t('feat1_title'),
      desc: t('feat1_desc'),
      btnText: t('feat1_btn')
    },
    {
      icon: <MapPin size={28} />,
      title: t('feat2_title'),
      desc: t('feat2_desc'),
      btnText: t('feat2_btn')
    },
    {
      icon: <FileText size={28} />,
      title: t('feat3_title'),
      desc: t('feat3_desc'),
      btnText: t('feat3_btn')
    },
    {
      icon: <Calendar size={28} />,
      title: t('feat4_title'),
      desc: t('feat4_desc'),
      btnText: t('feat4_btn')
    },
    {
      icon: <Award size={28} />,
      title: t('feat5_title'),
      desc: t('feat5_desc'),
      btnText: t('feat5_btn')
    }
  ];

  return (
    <section className="section container">
      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            className="feature-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="feature-icon" style={{ 
              width: '50px', height: '50px', borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'var(--accent-color)', marginBottom: '1.5rem',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}>
              {f.icon}
            </div>
            <h3 className="feature-title" style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem', minHeight: '50px' }}>{f.title}</h3>
            <p className="feature-desc" style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '2rem' }}>{f.desc}</p>
            <motion.div 
              className="feature-btn" 
              style={{ 
                width: '100%', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600,
                padding: '0.8rem', borderRadius: '30px', 
                backgroundColor: 'var(--accent-color)', color: '#111', cursor: 'pointer' 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f.btnText}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
