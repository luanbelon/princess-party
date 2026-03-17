import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="Princess Party" className={styles.logoImg} />
            <span className={styles.brandSub}>Seixal, Portugal</span>
            <p className={styles.brandDesc}>
              Um espaço mágico criado com muito amor e com o propósito de fazer sonhar as nossas princesas.
            </p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/princessparty.pt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" strokeWidth="0" />
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Princess-Party-100063639726948/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://wa.me/351919995052" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21l1.65-3.8a9 9 0 111.72 1.64z" />
                  <path d="M9 10c.17.5.5 1 1 1.5.18.2.45.47.8.6s.7.17 1.2-.17c.16-.1.3-.27.45-.35.3-.16.6-.06.84.1l1.8 1.1c.2.13.33.38.2.63-.4.83-1.3 2-2.26 2-.5 0-2-.4-4-2.4S6.5 9.5 6.5 9c0-.96 1.17-1.86 2-2.26.25-.13.5 0 .63.2l1.1 1.8c.16.24.26.54.1.84-.08.15-.25.3-.35.45z" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4>Serviços</h4>
            <ul>
              <li><a href="#serviços">Festa de aniversário</a></li>
              <li><a href="#serviços">Spa para Meninas</a></li>
              <li><a href="#serviços">Batizado</a></li>
              <li><a href="#serviços">Eventos Escolares</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#serviços">Serviços</a></li>
              <li><a href="#sobre">O espaço</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#depoimentos">Testemunhos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:info@princessparty.pt">info@princessparty.pt</a></li>
              <li><a href="https://wa.me/351919995052">+351 919 995 052</a></li>
              <li><span>Av. Principal 9 A e B, Casal do Marco, 2840-169 Arrentela, Portugal</span></li>
              <li><span>Seg-Dom: 10h-22h</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} Princess Party. Todos os direitos reservados.</span>
          <span>Seixal, Portugal</span>
        </div>
      </div>
    </footer>
  );
}
