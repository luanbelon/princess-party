'use client';

import { useEffect, useState } from 'react';
import styles from './HeroCompact.module.css';

const slides = [
  { src: '/galeria/galeria1.jpg', alt: 'Meninas a relaxar no spa infantil' },
  { src: '/galeria/galeria2.jpg', alt: 'Equipa a cuidar das princesas no spa' },
  { src: '/galeria/galeria3.jpg', alt: 'Princesa a brincar no Espaço de beleza' },
  { src: '/galeria/0457.jpg', alt: 'Festa com decoração  rosa e dourado' },
  { src: '/galeria/0276.jpg', alt: 'Mesa de bolo cheia de detalhes' },
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
            festas inesquecíveis
          </h1>
          <p className={styles.subtitle}>
            Espaço de festas infantis no Seixal, com o tema Princesas. 
            <br />
            Se quer um dia mágico para a sua Princesa está no lugar certo! Fale connosco que nós tratamos de tudo.
          </p>
          <div className={styles.actions}>
            <a
              href="https://wa.me/351919995052"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Orçamento por WhatsApp
            </a>
            <a href="#pacotes" className="btn-outline">
              Ver packs
            </a>
          </div>
        </div>

        <div className={styles.mediaCol} aria-label="Fotos do Espaço">
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

