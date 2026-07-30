import { 
  Building2, 
  Wrench, 
  Leaf, 
  Paintbrush, 
  Trees, 
  ClipboardCheck 
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
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ color: 'var(--text-main)' }}>Nuestros Servicios Integrales</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Cubrimos todas las fases de tu proyecto de construcción o renovación, garantizando resultados excepcionales.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((srv) => (
          <div key={srv.id} className="service-card glass-panel">
            <div className="service-icon">
              {srv.icon}
            </div>
            <h3 className="service-title">{srv.title}</h3>
            <p className="service-desc">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
