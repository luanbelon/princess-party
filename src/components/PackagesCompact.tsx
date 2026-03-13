import styles from './Services.module.css';

const packages = [
  {
    name: 'Brilho',
    meta: '2h · até 12 crianças',
    price: 'desde 199 €',
    details: 'Decoracao base, musica ambiente e brincadeiras leves para a primeira festa de princesa.',
  },
  {
    name: 'Coroa',
    meta: '2h30 · até 15 crianças',
    price: 'desde 279 €',
    details: 'Decoracao + mesa de bolo, anfitria em tema de princesa generica e mini-coroacao.',
  },
  {
    name: 'Castelo',
    meta: '3h · até 18 crianças',
    price: 'desde 349 €',
    details: 'Decoracao completa, duas animadoras, luz ambiente e lembranca especial para a aniversariante.',
  },
];

export default function PackagesCompact() {
  return (
    <section id="pacotes" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Pacotes &amp; Precos</span>
          <h2 className={styles.headerTitle}>Escolhe o pacote perfeito</h2>
          <div className="divider-gold"></div>
        </div>
        <div className={styles.grid}>
          {packages.map((p) => (
            <article key={p.name} className={styles.card}>
              <div className={styles.iconWrap}>
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
                  <path d="M18 26l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Pacote {p.name}</h3>
              <p className={styles.cardText}>
                <strong>{p.meta}</strong>
                <br />
                {p.price}
              </p>
              <p className={styles.cardText}>{p.details}</p>
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Falar no WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

