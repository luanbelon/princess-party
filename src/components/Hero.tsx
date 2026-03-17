import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bgDecor}>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
      </div>
      <div className={styles.stars}>
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={styles.star}></span>
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.crown} aria-hidden="true">
          <img src="/coroa.png" alt="" />
        </div>
        <h1 className={styles.title}>
          Onde os sonhos se tornam
          <br />
          festas inesquecíveis
        </h1>
        <p className={styles.subtitle}>
          Espaço de festas infantis em [cidade], com temas de princesa,
          <br />
          muitas fotos e zero stress para quem organiza.
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer" className="btn-primary">
            WhatsApp
          </a>
          <a href="#pacotes" className="btn-outline">Ver Pacotes</a>
        </div>
        {/* <div className={styles.trust}>
          <div className={styles.trustItem}>
            <strong>+500</strong>
            <span>Festas realizadas</span>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustItem}>
            <strong>5 anos</strong>
            <span>de experiencia</span>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustItem}>
            <strong>100%</strong>
            <span>Personalizado</span>
          </div>
        </div> */}
      </div>

      <div className={styles.waveBottom}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff5fb" />
        </svg>
      </div>

      <a href="#serviços" className={styles.scrollHint} aria-label="Ver mais">
        <span></span>
      </a>
    </section>
  );
}
