'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          date: form.date,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Falha ao enviar email');
      }

      setSent(true);
    } catch (error) {
      console.error('Erro ao enviar formulario', error);
      alert('Houve um erro ao enviar o seu pedido. Por favor tente novamente.');
    }
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <span className="section-label">Contacto</span>
            <h2 className="section-title">Reserve o dia especial da sua princesa</h2>
            <div className="divider-gold"></div>
            <p className={styles.bodyText}>
              Preencha o formulário e entraremos em contacto em menos de 24 horas para apresentar 
              todas as opções e preparar uma proposta personalizada.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21c-4-3.5-8-7.5-8-11a8 8 0 1116 0c0 3.5-4 7.5-8 11z"/>
                    <circle cx="12" cy="10" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <strong>Localização</strong>
                  <span>Av. Principal 9 A e B, Casal do Marco, 2840-169 Arrentela, Portugal</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 8l10 7 10-7"/>
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@princessparty.pt">info@princessparty.pt</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.25 3.75a1 1 0 01-.27 1.05L8.5 9.75a11.05 11.05 0 005.75 5.75l1.27-1.73a1 1 0 011.05-.27l3.75 1.25A1 1 0 0121 15.72V19a2 2 0 01-2 2H17C9.27 21 3 14.73 3 7V5z"/>
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/351919995052" target="_blank" rel="noopener noreferrer">+351 919 995 052</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <strong>Horário</strong>
                  <span>Seg-Sex: 10h-20h | Sáb-Dom: 10h-22h</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="24" cy="24" r="20"/>
                    <path d="M14 24l7 7 13-13" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Mensagem enviada!</h3>
                <p>O seu pedido foi enviado. Entraremos em contacto em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Nome completo</label>
                    <input id="name" name="name" type="text" required placeholder="O seu nome" value={form.name} onChange={handleChange} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+351 9XX XXX XXX" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="o.seu@email.com" value={form.email} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="date">Data desejada</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea id="message" name="message" rows={4} placeholder="Conte-nos um pouco sobre o evento que tem em mente..." value={form.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem' }}>
                  Enviar pedido de orçamento
                </button>
                <p className={styles.disclaimer}>
                  Ao enviar, autoriza o contacto para efeitos de orçamentação. Resposta garantida em 24h.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
