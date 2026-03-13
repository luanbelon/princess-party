import styles from './Gallery.module.css';

const images = [
  { src: '/hero.jpg', alt: 'Espaco principal Princess Party', span: 'wide' },
  { src: '/gallery-spa.jpg', alt: 'Sala de spa para meninas', span: 'normal' },
  { src: '/gallery-party.jpg', alt: 'Festa de aniversario decorada', span: 'normal' },
  { src: '/gallery-details.jpg', alt: 'Detalhes da decoracao', span: 'normal' },
  { src: '/gallery-spa.jpg', alt: 'Area de manicure', span: 'normal' },
  { src: '/gallery-party.jpg', alt: 'Sala de festas iluminada', span: 'normal' },
];

export default function Gallery() {
  return (
    <section id="galeria" className={styles.section}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#ffffff"/>
        </svg>
      </div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Galeria</span>
          <h2 className="section-title">Veja o nosso espaco magico</h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle">
            Cada cantinho foi pensado ao detalhe para criar a atmosfera perfeita para a sua princesa.
          </p>
        </div>
        <div className={styles.grid}>
          {images.map((img, i) => (
            <div key={i} className={`${styles.item} ${img.span === 'wide' ? styles.wide : ''}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className={styles.itemOverlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <p className={styles.ctaText}>Quer ver o espaco pessoalmente?</p>
          <a href="#contacto" className="btn-primary">Agende uma visita gratuita</a>
        </div>
      </div>
    </section>
  );
}
