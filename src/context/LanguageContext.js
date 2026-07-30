"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es'); // default language
  
  // Opcional: Persistir el idioma en localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('globimex_lang');
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('globimex_lang', newLang);
  };

  const t = (key) => {
    return translations[lang][key] || translations['es'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
