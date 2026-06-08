import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import data from '../../data/testimonials.json';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ''}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(v => !v)}>
        {item.question}
        <span className={styles.faqChev}>▼</span>
      </button>
      {open && <div className={styles.faqAnswer}>{item.answer}</div>}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Lo que dicen nuestros clientes</span>
          <h2 className={styles.title}>Testimonios</h2>
        </div>

        <div className={styles.grid}>
          {data.testimonials.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.quote}>"</div>
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className={styles.star}>⭐</span>
                ))}
              </div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}</div>
                  <div className={styles.authorLoc}>📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.faqTitle}>Preguntas Frecuentes</h3>
        <div className={styles.faqList}>
          {data.faq.map(item => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
