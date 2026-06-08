import React from 'react';
import styles from './Footer.module.css';
import company from '../../data/company.json';
import services from '../../data/services.json';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🛡️</span>
              Bio<span className={styles.logoAccent}>Shield</span>
            </div>
            <p className={styles.brandDesc}>
              Especialistas en control de plagas en Mérida, Yucatán. 
              Más de 15 años protegiendo hogares y negocios con tecnología certificada.
            </p>
            <div className={styles.socials}>
              <a href={company.socialMedia.whatsapp} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
              <a href={company.socialMedia.facebook} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href={company.socialMedia.instagram} className={styles.social} target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Servicios</p>
            <div className={styles.colLinks}>
              {services.map(s => (
                <a key={s.id} href="#servicios" className={styles.colLink} onClick={(e) => { e.preventDefault(); scrollTo('servicios'); }}>
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Navegación</p>
            <div className={styles.colLinks}>
              {['inicio','servicios','nosotros','testimonios','contacto'].map(id => (
                <a key={id} href={`#${id}`} className={styles.colLink} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <p className={styles.colTitle}>Contacto</p>
            <div className={styles.colLinks}>
              <a href={`tel:${company.phone}`} className={styles.colLink}>{company.phone}</a>
              <a href={`mailto:${company.email}`} className={styles.colLink}>{company.email}</a>
              <span className={styles.colLink}>{company.schedule}</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} BioShield {company.tagline}. Todos los derechos reservados.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Aviso de Privacidad</a>
            <a href="#" className={styles.bottomLink}>Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
