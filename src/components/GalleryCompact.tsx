'use client';

import { useState } from 'react';
import styles from './GalleryCompact.module.css';

const images = [
  { src: '/hero.jpg', alt: 'Espaco principal Princess Party' },
  { src: '/gallery-spa.jpg', alt: 'Sala de spa para meninas' },
  { src: '/gallery-party.jpg', alt: 'Festa de aniversario decorada' },
  { src: '/gallery-details.jpg', alt: 'Detalhes da decoracao' },
];

export default function GalleryCompact() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="galeria" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Galeria</span>
          <h2 className="section-title">Um espreitar ao nosso espaco</h2>
          <div className="divider-gold"></div>
        </div>
        <div className={styles.carousel} aria-label="Galeria de imagens">
          {images.map((img) => (
            <button
              key={img.src}
              type="button"
              className={styles.item}
              onClick={() => setActive(img.src)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className={styles.lightbox} onClick={() => setActive(null)}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button type="button" className={styles.close} onClick={() => setActive(null)}>
              ×
            </button>
            <img src={active} alt="" />
          </div>
        </div>
      )}
    </section>
  );
}

