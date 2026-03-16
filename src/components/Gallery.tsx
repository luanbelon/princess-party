import { useRef, useEffect } from 'react';
import styles from './Gallery.module.css';

const images = [
  { src: '/hero.jpg', alt: 'Espaço principal Princess Party', span: 'wide' },
  { src: '/gallery-spa.jpg', alt: 'Sala de spa para meninas', span: 'normal' },
  { src: '/gallery-party.jpg', alt: 'Festa de aniversário decorada', span: 'normal' },
  { src: '/gallery-details.jpg', alt: 'Detalhes da decoração', span: 'normal' },
  { src: '/gallery-spa.jpg', alt: 'Área de manicure', span: 'normal' },
  { src: '/gallery-party.jpg', alt: 'Sala de festas iluminada', span: 'normal' },
];

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Autoplay slider barely for mobile screens
    const interval = setInterval(() => {
      if (gridRef.current && window.innerWidth <= 700) {
        const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
        
        // Se chegou ao fim, volta pro inicio, senao avança 1 imagem (clientWidth)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          gridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          gridRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

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
        <div className={styles.grid} ref={gridRef}>
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
