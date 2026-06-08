import React, { useState } from 'react';
import styles from './FloatingCTA.module.css';
import company from '../../data/company.json';

const ACTIONS = [
  { icon: '💬', label: 'WhatsApp', href: `https://wa.me/${company.whatsapp}`, external: true },
  { icon: '📞', label: company.phone, href: `tel:${company.phone}`, external: false },
  { icon: '📋', label: 'Cotizar', href: '#contacto', external: false },
];

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  const handleAction = (action) => {
    if (!action.external && action.href.startsWith('#')) {
      const id = action.href.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <div className={styles.wrap}>
      {open && (
        <div className={styles.menu}>
          {ACTIONS.map((a, i) => (
            a.external ? (
              <a key={i} href={a.href} className={styles.menuItem} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                {a.icon} {a.label}
              </a>
            ) : (
              <a key={i} href={a.href} className={styles.menuItem} onClick={() => handleAction(a)}>
                {a.icon} {a.label}
              </a>
            )
          ))}
        </div>
      )}
      <button
        className={`${styles.fab} ${open ? styles.open : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Contacto rápido"
      >
        {open ? '✕' : '📲'}
      </button>
    </div>
  );
}
