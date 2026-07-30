"use client";

import { useEffect, useRef } from 'react';

export default function ContactForm() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Escuchar los mensajes del iframe de Jotform para ajustar la altura dinámicamente
    const handleIframeMessage = (e) => {
      if (typeof e.data === 'string') {
        const args = e.data.split(':');
        if (args.length > 2) {
          const iframe = iframeRef.current;
          if (!iframe) return;
          
          let action = args[0];
          
          if (action === 'setHeight') {
            iframe.style.height = `${args[1]}px`;
          }
        }
      }
    };
    
    window.addEventListener('message', handleIframeMessage);
    return () => window.removeEventListener('message', handleIframeMessage);
  }, []);

  return (
    <section id="presupuesto" className="section container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ color: 'var(--text-main)' }}>Solicita tu Presupuesto</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Completa el siguiente formulario para que podamos entender mejor tus necesidades y ofrecerte una solución a medida.
        </p>
      </div>
      
      <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', overflow: 'hidden' }}>
        <iframe
          ref={iframeRef}
          id="JotFormIFrame-262102631371344"
          title="Globimex Contact Form"
          onLoad={() => window.parent.scrollTo(0,0)}
          allowtransparency="true"
          allowFullScreen={true}
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/262102631371344"
          frameBorder="0"
          style={{
            minWidth: '100%',
            height: '539px',
            border: 'none'
          }}
          scrolling="no"
        />
      </div>
    </section>
  );
}
