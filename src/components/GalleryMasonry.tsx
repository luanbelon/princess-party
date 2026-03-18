'use client';

import { useEffect, useState } from 'react';
import styles from './GalleryMasonry.module.css';

const defaultImages = [
  '/galeria/galeria1.jpg',
  '/galeria/galeria2.jpg',
  '/galeria/galeria3.jpg',
  '/galeria/0457.jpg',
  '/galeria/0003.jpg',
  '/galeria/galeria7.png',
  '/galeria/galeria6.png',
  '/galeria/0022.jpg',
  '/galeria/0024.jpg',
  '/galeria/0023.jpg',
  '/galeria/0233.jpg',
  '/galeria/0234.jpg',
  '/galeria/galeria10.jpg',
  '/galeria/0275.jpg',
  '/galeria/0300.jpg',
  '/galeria/0321.jpg',
  '/galeria/0322.jpg',
];

type GalleryImage = {
  id: number;
  path: string;
  alt: string | null;
};

export default function GalleryMasonry() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/gallery');
        if (!res.ok) {
          throw new Error('erro');
        }
        const data = await res.json();
        const items = (data.items || []) as { id: number; path: string; alt?: string | null }[];
        if (items.length > 0) {
          setImages(items.map((it) => ({ id: it.id, path: it.path, alt: it.alt ?? null })));
        } else {
          setImages(defaultImages.map((p, i) => ({ id: i + 1, path: p, alt: null })));
        }
      } catch {
        setImages(defaultImages.map((p, i) => ({ id: i + 1, path: p, alt: null })));
      }
    };

    fetchImages();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Galeria completa</span>
          <h2 className="section-title">Um passeio pelo nosso Espaço</h2>
          <div className="divider-gold"></div>
        </div>
      </div>
      <div className={styles.masonry}>
        {images.map((img) => (
          <button
            type="button"
            key={img.id}
            className={styles.item}
            onClick={() => setActive(img.path)}
          >
            <img src={img.path} alt={img.alt || 'Festa infantil Princess Party'} loading="lazy" />
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

