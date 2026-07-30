"use client";

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Image src="/GNOL.png" alt="Globimex Logo" width={150} height={40} style={{ objectFit: 'contain', marginBottom: '1.5rem' }} />
            <p style={{ maxWidth: '300px' }}>
              Tu socio de confianza en proyectos de construcción, renovación y diseño integral.
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Contacto</h3>
            <p><Phone size={18} className="text-accent" /> +34 900 123 456</p>
            <p><Mail size={18} className="text-accent" /> info@globimex.com</p>
            <p><MapPin size={18} className="text-accent" /> Madrid, España</p>
          </div>
          
          <div className="footer-col">
            <h3>Enlaces Rápidos</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="#servicios" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-color)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Nuestros Servicios</a>
              <a href="#nosotros" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-color)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Sobre Nosotros</a>
              <a href="#contacto" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-color)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Presupuesto</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Globimex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
