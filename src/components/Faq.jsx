"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "¿Qué tipo de proyectos abordan?",
    answer: "Nos encargamos de todo tipo de proyectos, desde pequeñas reformas de interiorismo hasta construcción de obra nueva, rehabilitación energética y acondicionamiento de exteriores. Ningún proyecto es demasiado complejo para nuestro equipo."
  },
  {
    question: "¿Gestionan las licencias y permisos de obra?",
    answer: "Sí, nuestro equipo técnico (arquitectos e ingenieros) se encarga de todo el proceso burocrático, desde el diseño inicial y proyectos técnicos, hasta la solicitud de licencias en los ayuntamientos."
  },
  {
    question: "¿Trabajan con presupuestos cerrados?",
    answer: "Absolutamente. Realizamos un estudio previo muy exhaustivo para poder ofrecer un presupuesto cerrado y detallado. Esto garantiza que no haya sorpresas durante la ejecución de la obra."
  },
  {
    question: "¿Ofrecen garantía sobre los trabajos realizados?",
    answer: "Sí, todos nuestros trabajos cuentan con las garantías que exige la ley para la construcción y reformas, asegurando la durabilidad y calidad de los materiales y la ejecución."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Preguntas Frecuentes</h2>
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
