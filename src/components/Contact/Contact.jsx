import React from 'react';
import styles from './Contact.module.css';
import { useContactForm } from '../../hooks';
import company from '../../data/company.json';
import services from '../../data/services.json';

const CONTACT_INFO = [
  { icon: '📞', label: 'Teléfono', value: <a href={`tel:${company.phone}`}>{company.phone}</a> },
  { icon: '💬', label: 'WhatsApp', value: <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a> },
  { icon: '📧', label: 'Email', value: <a href={`mailto:${company.email}`}>{company.email}</a> },
  { icon: '📍', label: 'Dirección', value: company.address },
  { icon: '🕐', label: 'Horario', value: company.schedule },
];

export default function Contact() {
  const { form, status, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* Info */}
          <div>
            <span className={styles.label}>Estamos para ayudarte</span>
            <h2 className={styles.title}>Contáctanos hoy mismo</h2>
            <p className={styles.desc}>
              ¿Tienes una plaga que resolver? Escríbenos, llámanos o mándanos un WhatsApp. 
              Respondemos en minutos y coordinamos tu visita sin compromiso.
            </p>

            <div className={styles.contactList}>
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialRow}>
              <a href={company.socialMedia.whatsapp} className={styles.socialBtn} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              <a href={company.socialMedia.facebook} className={styles.socialBtn} target="_blank" rel="noopener noreferrer">📘 Facebook</a>
              <a href={company.socialMedia.instagram} className={styles.socialBtn} target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Solicitar Cotización</h3>
            <p className={styles.formSub}>Gratis y sin compromiso. Te respondemos en menos de 1 hora.</p>

            {status === 'sent' ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✅</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo a la brevedad. ¡Gracias!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label className={styles.label2}>Nombre *</label>
                    <input
                      className={styles.input}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label2}>Teléfono *</label>
                    <input
                      className={styles.input}
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+52 999 000 0000"
                      required
                    />
                  </div>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label2}>Correo electrónico</label>
                    <input
                      className={styles.input}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label2}>Servicio de interés *</label>
                    <select
                      className={styles.select}
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="otro">Otro / No sé cuál necesito</option>
                    </select>
                  </div>
                  <div className={`${styles.field} ${styles.fieldFull}`}>
                    <label className={styles.label2}>Mensaje</label>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe brevemente tu situación o plaga..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><div className={styles.spinner} /> Enviando...</>
                  ) : (
                    '📋 Enviar Solicitud'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
