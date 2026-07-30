"use client";

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero">
      <img
        src="/hero_bg_new.png"
        alt="Construcción Premium"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>
      
      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('hero_subtitle')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('hero_title')}
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {t('hero_desc')}
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#servicios" className="btn btn-primary">
              {t('hero_btn_services')} <ArrowRight size={20} />
            </a>
            <a href="#contacto" className="btn btn-secondary">
              {t('hero_btn_contact')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
