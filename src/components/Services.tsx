import styles from './Services.module.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18 18-8.06 18-18S33.94 6 24 6z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16c2 3 4 5 8 5s6-2 8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 32h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Temas magicos',
    description:
      'Cenarios de princesa com coroas, castelos e detalhes encantados, pensados para brilhar em cada fotografia.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20l14-8 14 8v14H10V20z" stroke="currentColor" strokeWidth="2" />
        <path d="M20 32v-6h8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 22l16-10 16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Espaco seguro',
    description:
      'Playground infantil fechado, com regras simples, higienizacao frequente e equipa sempre atenta aos pequenos.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 34c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 34c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Equipa atenciosa',
    description:
      'Monitores e anfitrioes que acompanham cada passo da festa, para que pais e avos possam apenas aproveitar.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#fff5fb"/>
        </svg>
      </div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">O que oferecemos</span>
          <h2 className={styles.headerTitle}>
            Servicos pensados para
            <br />
            momentos inesqueciveis
          </h2>
          <div className="divider-gold"></div>
          <p className={styles.headerSubtitle}>
            Cada detalhe e cuidadosamente planeado para que a sua princesa
            <br />
            viva uma experiencia unica, segura e cheia de magia.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.description}</p>
              <a href="#contacto" className={styles.cardLink}>
                Saber mais
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
