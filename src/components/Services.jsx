import { 
  Building2, 
  Wrench, 
  Leaf, 
  Paintbrush, 
  Trees, 
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Obra Gruesa y Demolición",
      desc: "Terrassement, fundaciones, albañilería general, construcción nueva, demolición y desamiantado.",
      icon: <Building2 size={24} />
    },
    {
      id: 2,
      title: "Obra Fina Especializada",
      desc: "Plomería, electricidad, HVAC, carpintería, aislamiento, revestimientos, pintura y restauración.",
      icon: <Wrench size={24} />
    },
    {
      id: 3,
      title: "Renovación Energética",
      desc: "Mejora del rendimiento energético: aislamiento avanzado y actualización de sistemas de calefacción.",
      icon: <Leaf size={24} />
    },
    {
      id: 4,
      title: "Interiorismo y Decoración",
      desc: "Acondicionamiento y diseño de espacios para residencias, locales comerciales e industriales.",
      icon: <Paintbrush size={24} />
    },
    {
      id: 5,
      title: "Exteriores y Paisajismo",
      desc: "Diseño exterior, áreas verdes, mantenimiento paisajístico, vallados y movimientos de tierra.",
      icon: <Trees size={24} />
    },
    {
      id: 6,
      title: "Dirección de Obra",
      desc: "Gestión integral, coordinación, pilotaje y supervisión experta de proyectos y chantiers.",
      icon: <ClipboardCheck size={24} />
    }
  ];

  return (
    <section id="servicios" className="section container">
      
      <div className="services-header-layout">
        <span style={{ letterSpacing: '3px', fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-color)' }}>— Nuestros Servicios</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '1rem 0 2rem 0', color: 'var(--text-main)', textTransform: 'none', fontFamily: 'serif' }}>
          Servicios de <span style={{ color: 'var(--accent-color)' }}>reformas en Málaga</span>
        </h2>
        <p style={{ color: 'var(--text-main)', maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '4rem' }}>
          Cubrimos las reformas más habituales para viviendas, comunidades y negocios locales. 
          Cada proyecto se estudia antes de empezar para evitar improvisaciones y ajustar la ejecución a las necesidades reales del espacio. 
          Desde una reforma de baño hasta la rehabilitación completa de una fachada. Mismo nivel de exigencia en cada proyecto.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '2rem' }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', margin: 0, textTransform: 'none', fontFamily: 'serif' }}>Todo lo que <span style={{ color: 'var(--accent-color)' }}>transformamos...</span></h3>
          <a href="#contacto" className="btn-services-outline">
            Consultar servicios de reforma <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="services-grid">
        {servicesList.map((srv) => (
          <div key={srv.id} className="service-card neo-panel" style={{ padding: 0, overflow: 'hidden', backgroundColor: 'var(--secondary-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ padding: '2.5rem 2rem' }}>
              <div style={{ 
                width: '50px', height: '50px', borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                marginBottom: '1.5rem', border: '1px solid rgba(212,175,55,0.3)', color: 'var(--accent-color)'
              }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', textTransform: 'none', color: 'var(--text-main)' }}>{srv.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
