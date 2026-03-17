import styles from './About.module.css';

const highlights = [
  { number: '150 m²', label: 'de espaço exclusivo' },
  { number: 'Até 30', label: 'crianças por evento' },
  { number: '100%', label: 'seguro e higienizado' },
  { number: 'Seixal', label: 'fácil acesso' },
];

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#fff5fb"/>
        </svg>
      </div>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageFr}>
              <div className={styles.imageMain}>
                <img src="/hero.jpg" alt="Interior do Espaço Princess Party" />
              </div>
              <div className={styles.imageBadge}>
                <span className={styles.badgeNumber}>5</span>
                <span className={styles.badgeText}>anos de felicidade</span>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <span className="section-label">O nosso espaço</span>
            <h2 className="section-title">Um mundo encantado criado com amor</h2>
            <div className="divider-gold"></div>
            <p className={styles.bodyText}>
              O Princess Party nasceu do desejo de criar um espaço verdadeiramente mágico para as meninas em Seixal. 
              Cada detalhe foi pensado para proporcionar momentos únicos, desde a decoração delicada até aos serviços 
              personalizados que oferecemos.
            </p>
            <p className={styles.bodyText}>
              Contamos com uma equipa apaixonada e experiente, dedicada a fazer de cada evento uma memória 
              inesquecível. Porque cada princesa merece o melhor.
            </p>
            <div className={styles.highlights}>
              {highlights.map((h) => (
                <div key={h.label} className={styles.highlightItem}>
                  <strong>{h.number}</strong>
                  <span>{h.label}</span>
                </div>
              ))}
            </div>
            <a href="#contacto" className="btn-primary" style={{display:'inline-block'}}>
              Agende uma visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
