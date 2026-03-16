'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

export default function ContactFormCompact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: '',
    rgpdConsent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.rgpdConsent) {
      alert("Por favor, aceite a Política de Privacidade para enviar o formulário.");
      return;
    }

    setLoading(true);

    try {
      // Registrar consentimento no banco de dados Neon
      await fetch('/api/consent-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          consent: form.rgpdConsent,
        }),
      });

      const subject = encodeURIComponent(
        `Pedido de orcamento — ${form.service || 'Servico'} — ${form.name}`,
      );
      const body = encodeURIComponent(
        `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\nData desejada: ${form.date
        }\nServico: ${form.service}\n\nMensagem:\n${form.message}`,
      );

      // Abrir cliente de email
      window.location.href = `mailto:geral@princessparty.pt?subject=${subject}&body=${body}`;
      setSent(true);
    } catch (error) {
      console.error("Erro ao enviar formulario", error);
      alert("Houve um erro ao enviar o seu pedido. Por favor tente novamente.");
    } finally {
      setLoading(false);
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
              Preencha o formulario e entraremos em contacto em menos de 24 horas para apresentar todas
              as opcoes e preparar uma proposta personalizada.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21c-4-3.5-8-7.5-8-11a8 8 0 1116 0c0 3.5-4 7.5-8 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <strong>Localizacao</strong>
                  <span>Seixal, Setubal, Portugal</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 8l10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:geral@princessparty.pt">geral@princessparty.pt</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.25 3.75a1 1 0 01-.27 1.05L8.5 9.75a11.05 11.05 0 005.75 5.75l1.27-1.73a1 1 0 011.05-.27l3.75 1.25A1 1 0 0121 15.72V19a2 2 0 01-2 2H17C9.27 21 3 14.73 3 7V5z" />
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/351912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +351 912 345 678
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="24" cy="24" r="20" />
                    <path d="M14 24l7 7 13-13" strokeLinecap="round" strokeLinejoin="round" />
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
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="O seu nome"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Telefone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+351 9XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="o.seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="service">Servico</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      <option>Festa de Aniversario</option>
                      <option>Spa para Meninas</option>
                      <option>Baptizado</option>
                      <option>Evento Escolar</option>
                      <option>Outro</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="date">Data desejada</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Conte-nos um pouco sobre o evento que tem em mente..."
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className={styles.checkboxField} style={{ marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <input
                    id="rgpdConsent"
                    name="rgpdConsent"
                    type="checkbox"
                    required
                    checked={form.rgpdConsent}
                    onChange={handleChange}
                    style={{ marginTop: '4px', cursor: 'pointer', width: '20px', height: '20px', flexShrink: 0, accentColor: 'var(--pink-primary)' }}
                  />
                  <label htmlFor="rgpdConsent" style={{ fontSize: '0.9rem', color: 'var(--text-dark)', cursor: 'pointer' }}>
                    Autorizo o envio dos meus dados de acordo com o Regulamento Geral de Protecção de Dados e concordo com a Política de Privacidade.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={loading || !form.rgpdConsent}
                  style={{ width: '100%', padding: '16px', fontSize: '1rem', opacity: (loading || !form.rgpdConsent) ? 0.7 : 1 }}
                >
                  {loading ? 'A enviar...' : 'Enviar pedido de orcamento'}
                </button>
                <p className={styles.disclaimer}>
                  Ao enviar, autoriza o contacto para efeitos de orcamentacao. Resposta garantida em 24h.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

