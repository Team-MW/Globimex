import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AvisoLegal() {
  return (
    <main>
      <Navbar />
      <section className="section container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <div className="neo-panel" style={{ padding: '4rem' }}>
          <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Aviso Legal</h1>
          
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>1. Información General</h3>
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se detallan a continuación los datos de información general del sitio web:
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Titular:</strong> Globimex<br />
              <strong>Domicilio:</strong> Madrid, España<br />
              <strong>Email de contacto:</strong> info@globimex.com<br />
              <strong>Teléfono:</strong> +34 900 123 456
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>2. Términos y Condiciones de Uso</h3>
            <p>
              El acceso y uso de este sitio web atribuye la condición de Usuario, e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. El sitio web proporciona el acceso a multitud de informaciones, servicios o datos pertenecientes a Globimex.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>3. Propiedad Intelectual e Industrial</h3>
            <p>
              Globimex por sí misma o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño).
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>4. Exclusión de Garantías y Responsabilidad</h3>
            <p>
              Globimex no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>5. Modificaciones</h3>
            <p>
              Globimex se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
