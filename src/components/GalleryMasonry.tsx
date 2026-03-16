 'use client';

import { useState } from 'react';
import styles from './GalleryMasonry.module.css';

const images = [
  '/galeria/galeria1.jpg',
  '/galeria/galeria2.jpg',
  '/galeria/galeria3.jpg',
  '/galeria/0457.jpg',
  '/galeria/0276.jpg',
  '/galeria/galeria7.png',
  '/galeria/galeria6.png',
  '/galeria/0022.jpg',
  '/galeria/0024.jpg',
  '/galeria/0023.jpg',
  '/galeria/0233.jpg',
  '/galeria/0234.jpg',
  '/galeria/0275.jpg',
  '/galeria/0276.jpg',
  '/galeria/0300.jpg',
  '/galeria/0321.jpg',
  '/galeria/0322.jpg',
];

export default function GalleryMasonry() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Galeria completa</span>
          <h2 className="section-title">Um passeio pelo nosso espaco</h2>
          <div className="divider-gold"></div>
        </div>
      </div>
      <div className={styles.masonry}>
        {images.map((src, i) => (
          <button
            type="button"
            key={src + i}
            className={styles.item}
            onClick={() => setActive(src)}
          >
            <img src={src} alt="Festa infantil Princess Party" loading="lazy" />
          </button>
        ))}
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

