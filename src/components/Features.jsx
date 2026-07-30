"use client";

import { MessageCircle, MapPin, FileText, Calendar, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <MessageCircle size={28} />,
      title: "Contacto por WhatsApp",
      desc: "Nos escribes, te responde una persona real en menos de 2 horas. Sin bots ni formularios.",
      btnText: "Respuesta en menos de 2h"
    },
    {
      icon: <MapPin size={28} />,
      title: "Visita técnica gratuita",
      desc: "Venimos a ver el espacio. Sin coste, sin compromiso.",
      btnText: "Visita técnica sin coste alguno"
    },
    {
      icon: <FileText size={28} />,
      title: "Presupuesto cerrado",
      desc: "Detallado con partidas desglosadas. Lo que aparece es lo que pagas. En 24 horas.",
      btnText: "Sin sorpresas en tu factura"
    },
    {
      icon: <Calendar size={28} />,
      title: "Fecha firmada en contrato",
      desc: "Inicio, fin y responsable de obra por escrito. Sabes cuándo termina antes de empezar.",
      btnText: "Calendario garantizado"
    },
    {
      icon: <Award size={28} />,
      title: "Entrega con garantía",
      desc: "Limpieza diaria, revisión final contigo y garantía por escrito sobre toda la ejecución.",
      btnText: "Garantía en materiales"
    }
  ];

  return (
    <section className="section container">
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-col">
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
            <div className="feature-btn" style={{ 
              width: '100%', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600,
              padding: '0.8rem', borderRadius: '30px', 
              backgroundColor: 'var(--accent-color)', color: '#111' 
            }}>
              {f.btnText}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
