import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function MentionsLegales() {
  return (
    <main>
      <Navbar />
      <section className="section container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <div className="neo-panel" style={{ padding: '4rem' }}>
          <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Mentions Légales</h1>
          
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>1. Informations Générales</h3>
            <p>
              Conformément à la réglementation applicable, il est indiqué que ce site web est la propriété de Globimex.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <strong>Propriétaire:</strong> Globimex<br />
              <strong>Siège social:</strong> Madrid, Espagne<br />
              <strong>Email de contact:</strong> info@globimex.com<br />
              <strong>Téléphone:</strong> +34 900 123 456
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>2. Conditions d'utilisation</h3>
            <p>
              L'accès et l'utilisation de ce site web attribuent la condition d'Utilisateur et impliquent l'acceptation pleine et entière de toutes les dispositions incluses dans ces Mentions Légales.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>3. Propriété Intellectuelle et Industrielle</h3>
            <p>
              Globimex est propriétaire de tous les droits de propriété intellectuelle et industrielle de son site web, ainsi que des éléments qui y sont contenus.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>4. Exclusion de Garanties et Responsabilité</h3>
            <p>
              Globimex n'est en aucun cas responsable des dommages de toute nature pouvant être causés par des erreurs ou des omissions dans les contenus, le manque de disponibilité du portail ou la transmission de virus.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>5. Modifications</h3>
            <p>
              Globimex se réserve le droit d'apporter sans préavis les modifications qu'elle juge opportunes sur son portail.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
