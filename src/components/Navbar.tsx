'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#pacotes', label: 'Festas & Pacotes' },
    { href: '#galeria', label: 'O Espaco' },
    { href: '/galeria', label: 'Galeria' },
    { href: '/faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contactos' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.topbarInner}>
            <span>Tel.: +351 919 995 052</span>
            <a href="https://wa.me/351919995052" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/princessparty.pt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Princess Party"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className={styles.mainBar}>
        <div className="container">
          <nav className={styles.nav}>
            <a href="/" className={`${styles.brand} ${scrolled ? styles.scrolledBrand : ''}`}>
              <img src="/logo.png" alt="Princess Party" className={styles.logoImg} />
            </a>

            <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.link} ${scrolled ? styles.scrolledLink : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="btn-primary"
                  onClick={() => setMenuOpen(false)}
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  Marcar Festa
                </a>
              </li>
            </ul>

            <button
              className={`${styles.burger} ${scrolled ? styles.scrolledBurger : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
