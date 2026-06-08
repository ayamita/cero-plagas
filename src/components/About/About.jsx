import React from 'react';
import styles from './About.module.css';
import company from '../../data/company.json';

const PILLARS = [
  { icon: '🔬', title: 'Tecnología Avanzada', desc: 'Equipos y productos certificados de última generación.' },
  { icon: '👨‍🔬', title: 'Personal Certificado', desc: 'Técnicos capacitados y con certificación COFEPRIS.' },
  { icon: '🌿', title: 'Eco-Amigable', desc: 'Productos de bajo impacto ambiental y alta efectividad.' },
  { icon: '🛡️', title: 'Garantía Total', desc: '30 días de garantía en todos nuestros servicios.' },
];

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* Visual side */}
          <div className={styles.visual}>
            <div className={styles.imgGrid}>
              <div className={styles.imgBox}>🧪</div>
              <div className={styles.imgBox}>🦟</div>
              <div className={styles.imgBox}>🏠 Protegiendo hogares desde 2009</div>
            </div>
            <div className={styles.floatCard}>
              {company.stats[0].value}
              <span>{company.stats[0].label}</span>
            </div>
          </div>

          {/* Content side */}
          <div className={styles.content}>
            <span className={styles.label}>¿Quiénes somos?</span>
            <h2 className={styles.title}>
              Expertos en proteger lo que más importa
            </h2>
            <p className={styles.desc}>
              Somos una empresa yucateca especializada en control integral de plagas. Combinamos experiencia,
              tecnología certificada y compromiso con el medio ambiente para ofrecerte soluciones efectivas,
              seguras y duraderas para tu hogar o negocio.
            </p>

            <div className={styles.pillars}>
              {PILLARS.map((p, i) => (
                <div key={i} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{p.icon}</div>
                  <div className={styles.pillarTitle}>{p.title}</div>
                  <div className={styles.pillarDesc}>{p.desc}</div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              className={styles.cta}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Hablar con un experto
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
