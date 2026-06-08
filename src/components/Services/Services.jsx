import React, { useState } from 'react';
import styles from './Services.module.css';
import services from '../../data/services.json';
import company from '../../data/company.json';

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function ServiceCard({ service }) {
  const [expanded, setExpanded] = useState(false);
  const rgb = hexToRgb(service.color);

  return (
    <div
      className={`${styles.card} ${expanded ? styles.expanded : ''}`}
      style={{
        '--card-color': service.color,
        '--card-color-bg': `rgba(${rgb},0.1)`,
        '--card-color-border': `rgba(${rgb},0.2)`,
      }}
      onClick={() => setExpanded(v => !v)}
    >
      <div className={styles.cardTop}>
        <div className={styles.iconWrap}>{service.icon}</div>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardShort}>{service.shortDesc}</p>
        </div>
        <span className={styles.chevron}>{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          <p className={styles.cardDesc}>{service.description}</p>

          <div className={styles.meta}>
            <span className={styles.metaItem}>⏱ {service.duration}</span>
          </div>

          <div className={styles.tags}>
            {service.targets.map((t, i) => (
              <span key={i} className={styles.tag}>{t}</span>
            ))}
          </div>

          <div className={styles.benefits}>
            {service.benefits.map((b, i) => (
              <div key={i} className={styles.benefitItem}>{b}</div>
            ))}
          </div>

          <a
            href={`https://wa.me/${company.whatsapp}?text=Hola, me interesa el servicio de ${service.title}`}
            className={styles.cardCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar {service.title}
          </a>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Lo que ofrecemos</span>
          <h2 className={styles.title}>Nuestros Servicios</h2>
          <p className={styles.subtitle}>
            Soluciones especializadas para cada tipo de plaga, con tecnología certificada y personal capacitado.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
