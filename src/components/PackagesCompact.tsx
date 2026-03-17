import styles from './Services.module.css';

const packages = [
  {
    name: 'Aniversário',
    meta: 'Mínimo 10 participantes',
    price: 'desde €23',
    details: 'Festa de aniversário com decoração base, música e brincadeiras leves para a primeira festa de princesa.',
  },
  {
    name: 'Chá de Princesas',
    meta: 'Mínimo 6 participantes',
    price: 'desde €23',
    details: 'Chá de princesas com decoração especial, mesa de bolo, anfitriã temática e momento de coroação.',
  },
  {
    name: 'SPA',
    meta: 'Mínimo 3 participantes',
    price: 'desde €18',
    details: 'Experiência de spa infantil com roupões, cuidados de beleza e muitas fotos com as amigas.',
  },
  {
    name: 'SPA Mãe e Eu',
    meta: 'Mínimo 2 participantes',
    price: 'desde €50',
    details: 'Sessão exclusiva de spa para mãe e filha, com momento relaxante, fotos e memórias para guardar para sempre.',
  },
];

export default function PackagesCompact() {
  return (
    <section id="pacotes" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Pacotes &amp; Preços</span>
          <h2 className={styles.headerTitle}>Escolha a opção perfeita</h2>
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
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardText}>
                <strong>{p.meta}</strong>
                <br />
                {p.price}
              </p>
              <p className={styles.cardText}>{p.details}</p>
              <a
                href="https://wa.me/351919995052"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                Para mais detalhes contactar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

