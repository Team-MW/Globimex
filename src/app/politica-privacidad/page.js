import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PoliticaPrivacidad() {
  return (
    <main>
      <Navbar />
      <section className="section container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <div className="neo-panel" style={{ padding: '4rem' }}>
          <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Política de Privacidad</h1>
          
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>1. Información General</h3>
            <p>
              Globimex respeta plenamente su derecho a la privacidad y le garantiza la protección de los datos de carácter personal que nos suministre de conformidad con lo establecido en el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la normativa aplicable en España.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>2. Responsable del Tratamiento</h3>
            <p>
              El responsable del tratamiento de los datos recabados en este sitio web es Globimex, con domicilio en Madrid, España, y correo electrónico de contacto info@globimex.com.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>3. Finalidad del Tratamiento de Datos</h3>
            <p>
              Los datos personales que se recaben a través del formulario de contacto o correos electrónicos serán utilizados exclusivamente con la finalidad de gestionar su solicitud de presupuesto, responder a sus dudas o consultas sobre nuestros servicios de construcción y reformas.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>4. Legitimación y Conservación</h3>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento expreso del usuario al marcar la casilla de aceptación y enviar el formulario de contacto. Los datos proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>5. Derechos del Usuario</h3>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si en Globimex estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión. Para ejercer estos derechos, puede escribir a info@globimex.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
