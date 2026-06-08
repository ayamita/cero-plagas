import React from 'react';
import styles from './Hero.module.css';
import company from '../../data/company.json';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className={styles.hero}>
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.radialGlow} />
        <div className={styles.radialGlow2} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          {/* Content */}
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {company.tagline} Profesional
            </div>

            <h1 className={styles.heading}>
              {company.slogan.split(', ').map((part, i) =>
                i === 0 ? <span key={i}>{part},<br /></span>
                        : <span key={i} className={styles.headingAccent}>{part}</span>
              )}
            </h1>

            <p className={styles.desc}>{company.description}</p>

            <div className={styles.actions}>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
              <button className={styles.btnSecondary} onClick={scrollToContact}>
                📋 Cotizar Gratis
              </button>
            </div>

            <div className={styles.certifs}>
              {company.certifications.map((c, i) => (
                <span key={i} className={styles.certifTag}>{c}</span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={styles.visual}>
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.centerIcon}>
              <span>🛡️</span>
              <span>BioShield</span>
            </div>
            <span className={styles.orbitDot} style={{ top: '18%', left: '68%' }} />
            <span className={styles.orbitDot} style={{ bottom: '22%', left: '25%', background: 'var(--c-accent2)', boxShadow: '0 0 10px var(--c-accent2)' }} />
            <span className={styles.orbitDot} style={{ top: '55%', right: '15%', background: 'var(--c-accent)', boxShadow: '0 0 10px var(--c-accent)' }} />
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          {company.stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
