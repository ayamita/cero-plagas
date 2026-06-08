import React from 'react';
import styles from './Navbar.module.css';
import { useScrollPosition, useActiveSection, useMobileMenu } from '../../hooks';
import company from '../../data/company.json';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const activeSection = useActiveSection();
  const { isOpen, toggle, close } = useMobileMenu();

  const handleClick = (href) => {
    close();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#inicio" className={styles.logo} onClick={() => handleClick('#inicio')}>
            <span className={styles.logoIcon}>🛡️</span>
            <span>
              Bio<span className={styles.logoAccent}>Shield</span>
            </span>
          </a>

          <div className={styles.links}>
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`${styles.link} ${activeSection === href.replace('#','') ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); handleClick(href); }}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href={`tel:${company.phone}`}
            className={styles.cta}
          >
            📞 Llamar Ahora
          </a>

          <button
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={toggle}
            aria-label="Menú"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`${styles.mobileLink} ${activeSection === href.replace('#','') ? styles.active : ''}`}
            onClick={(e) => { e.preventDefault(); handleClick(href); }}
          >
            {label}
          </a>
        ))}
        <a href={`tel:${company.phone}`} className={styles.mobileCta} onClick={close}>
          📞 {company.phone}
        </a>
      </div>
    </>
  );
}
