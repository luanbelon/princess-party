'use client';

import { useEffect, useState } from 'react';
import styles from './HeroCompact.module.css';

const slides = [
  { src: '/hero.jpg', alt: 'Espaco principal Princess Party' },
  { src: '/gallery-party.jpg', alt: 'Festa de aniversario cheia de baloes' },
  { src: '/gallery-spa.jpg', alt: 'Meninas a desfrutar do spa infantil' },
];

export default function HeroCompact() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.bgDecor}>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle}></div>
      </div>
      <div className={styles.stars}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={styles.star}></span>
        ))}
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.textCol}>
          <div className={styles.crown} aria-hidden="true">
            <img src="/coroa.png" alt="" />
          </div>
          <h1 className={styles.title}>
            Onde os sonhos se tornam
            festas inesqueciveis
          </h1>
          <p className={styles.subtitle}>
            Espaco de festas infantis em Seixal, com temas de princesa,
            <br />
            muitas fotos e zero stress para quem organiza.
          </p>
          <div className={styles.actions}>
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Orcamento no WhatsApp
            </a>
            <a href="#pacotes" className="btn-outline">
              Ver packs
            </a>
          </div>
        </div>

        <div className={styles.mediaCol} aria-label="Fotos do espaco">
          <div className={styles.slider}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.src} className={styles.slide}>
                  <img src={slide.src} alt={slide.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

