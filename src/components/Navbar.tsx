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
            <a
              href="https://wa.me/351919995052"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Princess Party"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/princessparty.pt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Princess Party"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" strokeWidth="0" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/p/Princess-Party-100063639726948/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Princess Party"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
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
