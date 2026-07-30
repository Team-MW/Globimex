import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <main>
      <Navbar />
      <section className="section container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <div className="neo-panel" style={{ padding: '4rem' }}>
          <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Politique de Confidentialité</h1>
          
          <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>1. Informations Générales</h3>
            <p>
              Globimex respecte pleinement votre droit à la vie privée et vous garantit la protection des données à caractère personnel que vous nous fournissez, conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>2. Responsable du Traitement</h3>
            <p>
              Le responsable du traitement des données collectées sur ce site web est Globimex, domicilié à Madrid, Espagne. Email de contact : info@globimex.com.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>3. Finalité du Traitement des Données</h3>
            <p>
              Les données personnelles collectées via le formulaire de contact ou les e-mails seront utilisées exclusivement dans le but de gérer votre demande de devis, répondre à vos questions ou requêtes concernant nos services.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>4. Légitimation et Conservation</h3>
            <p>
              La base légale du traitement de vos données est le consentement exprès de l'utilisateur. Les données fournies seront conservées tant que la relation commerciale sera maintenue ou pendant les années nécessaires pour se conformer aux obligations légales.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-main)', fontSize: '1.2rem' }}>5. Droits de l'Utilisateur</h3>
            <p>
              Toute personne a le droit d'obtenir confirmation pour savoir si chez Globimex nous traitons des données personnelles les concernant, ou non. Vous avez le droit d'accéder à vos données personnelles, ainsi que de demander la rectification des données inexactes ou, le cas échéant, demander leur suppression. Pour exercer ces droits, vous pouvez écrire à info@globimex.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
