import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/hero_bg_new.png"
        alt="Construcción Premium"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>
      
      <div className="container" style={{ zIndex: 1, position: 'relative' }}>
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Excelencia en Construcción</span>
          <h1>Edificando el futuro con precisión y calidad.</h1>
          <p className="hero-description">
            Especialistas en obra gruesa, obra fina, renovación energética, interiorismo y paisajismo. 
            Soluciones integrales desde los cimientos hasta la entrega llave en mano.
          </p>
          <div className="hero-buttons">
            <a href="#servicios" className="btn btn-primary">
              Nuestros Servicios <ArrowRight size={20} />
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
