import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const features = [
  {
    title: 'Temas magicos',
    text: 'Cenarios de princesa e detalhes pensados para brilhar em cada fotografia.',
  },
  {
    title: 'Espaco seguro',
    text: 'Regras simples, equipamento adequado e equipa atenta em todos os momentos.',
  },
  {
    title: 'Tudo tratado',
    text: 'Decoracao, animacao e apoio aos convidados para que os pais so tenham de aproveitar.',
  },
];

const highlightPackages = [
  {
    name: 'Brilho',
    meta: '2h · ate 12 criancas',
    price: 'desde 199 €',
  },
  {
    name: 'Coroa',
    meta: '2h30 · ate 15 criancas',
    price: 'desde 279 €',
  },
  {
    name: 'Castelo',
    meta: '3h · ate 18 criancas',
    price: 'desde 349 €',
  },
];

const testimonials = [
  {
    quote: 'Equipa impecavel, as criancas adoraram!',
    author: 'Ana',
  },
  {
    quote: 'Marquei, cheguei e aproveitei.',
    author: 'Rui',
  },
];

export default function ModeloGuia() {
  return (
    <div className="pp-page">
      {/* Topo com contactos rapidos */}
      <div className="pp-topbar">
        <div className="pp-topbar-inner">
          <span>Tel.: +351 9XX XXX XXX</span>
          <a href="https://wa.me/3519XXXXXXXX" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="#" aria-label="Instagram Princess Party">
            Instagram
          </a>
        </div>
      </div>

      {/* Header principal */}
      <header className="pp-header">
        <div className="pp-header-inner">
          <a href="#" className="pp-logo">
            Princess Party
          </a>
          <nav className="pp-nav" aria-label="Menu principal">
            <a href="#pacotes">Festas &amp; Pacotes</a>
            <a href="#espaco">O Espaco</a>
            <a href="#galeria">Galeria</a>
            <a href="#faq">FAQ</a>
            <a href="#contactos">Contactos</a>
            <a href="#contactos" className="pp-btn-primary">
              Marcar Festa
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="pp-hero" id="inicio">
          <div className="pp-hero-inner">
            <div>
              <h1 className="pp-hero-title">Onde os sonhos se tornam festas inesqueciveis</h1>
              <p className="pp-hero-sub">
                Um espaco de festas infantis magico, pensado para criancas, pais e avos — com temas de
                princesa, muita brincadeira e zero stress.
              </p>
              <div className="pp-hero-actions">
                <a href="#contactos" className="pp-btn-primary">
                  Marcar Festa
                </a>
                <a href="#pacotes" className="pp-btn-secondary">
                  Ver Pacotes
                </a>
              </div>
            </div>
            <div className="pp-hero-image">
              <img src="/hero.jpg" alt="Criancas a brincar no espaco de festas Princess Party" />
            </div>
          </div>
        </section>

        {/* 3 Icones / beneficios */}
        <section className="pp-section">
          <h2 className="pp-section-title">Porque as familias escolhem a Princess Party</h2>
          <p className="pp-section-sub">Temas magicos, espaco seguro e uma equipa que trata de tudo.</p>
          <div className="pp-features">
            {features.map((f) => (
              <article key={f.title} className="pp-feature-card">
                <h3 className="pp-feature-title">{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pacotes em destaque */}
        <section id="pacotes" className="pp-section pp-section-alt">
          <h2 className="pp-section-title">Pacotes em destaque</h2>
          <p className="pp-section-sub">
            Escolhe o pacote que combina convosco. Comeca simples e acrescenta extras para personalizar.
          </p>
          <div className="pp-packages-grid">
            {highlightPackages.map((p) => (
              <article key={p.name} className="pp-package-card">
                <h3 className="pp-package-name">Pacote {p.name}</h3>
                <p className="pp-package-meta">{p.meta}</p>
                <p className="pp-package-price">{p.price}</p>
                <ul className="pp-bullets">
                  <li>Decoracao de princesa ajustada ao espaco.</li>
                  <li>Espaco preparado para brincadeiras em grupo.</li>
                  <li>Apoio da equipa durante toda a festa.</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* O nosso espaco */}
        <section id="espaco" className="pp-section">
          <div className="pp-space-grid">
            <div>
              <h2 className="pp-section-title">O nosso espaco</h2>
              <p className="pp-section-sub">
                Salas amplas, decoracao encantadora e zonas ajustadas a idade. Limpeza frequente e regras
                simples, como o uso de meias antiderrapantes.
              </p>
              <ul className="pp-bullets">
                <li>Sala principal para as grandes aventuras.</li>
                <li>Cantinho dos mais pequenos com brinquedos adequados.</li>
                <li>Zona para pais e avos acompanharem com conforto.</li>
                <li>Limpeza entre festas e atencao a alergias previamente informadas.</li>
              </ul>
            </div>
            <div className="pp-space-photos">
              <img src="/hero.jpg" alt="Sala principal decorada para festa de aniversario" />
              <img src="/gallery-party.jpg" alt="Mesa de bolo com castelo e baloes dourados" />
              <img src="/gallery-spa.jpg" alt="Cantinho de spa preparado para as princesas" />
              <img src="/gallery-details.jpg" alt="Detalhes de decoracao em rosa e dourado" />
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="pp-section">
          <h2 className="pp-section-title">O que dizem as familias</h2>
          <div className="pp-testimonials">
            {testimonials.map((t) => (
              <article key={t.author} className="pp-testimonial">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <strong>{t.author}</strong>
              </article>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="pp-section pp-section-alt">
          <h2 className="pp-section-title">Prontos para uma festa de conto de fadas?</h2>
          <p className="pp-section-sub">
            Preenche o formulario ou fala connosco por WhatsApp. Ajudamos a escolher o pacote ideal para a
            tua familia.
          </p>
          <div className="pp-hero-actions">
            <a href="#contactos" className="pp-btn-primary">
              Marcar Festa
            </a>
            <a
              href="https://wa.me/3519XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="pp-btn-secondary"
            >
              Falar por WhatsApp
            </a>
          </div>
        </section>

        {/* FAQ resumido */}
        <section id="faq" className="pp-section">
          <h2 className="pp-section-title">Perguntas frequentes</h2>
          <ul className="pp-faq-list">
            <li>Idades recomendadas: 3 a 10 anos (adaptamos as atividades ao grupo).</li>
            <li>Alimentacao: podes levar bolo/comida, mediante combinacao e atencao a alergias.</li>
            <li>Número de criancas: depende do pacote; ajustamos conforme disponibilidade.</li>
            <li>Reservas: sinal de 30% no ato e restante no dia da festa.</li>
            <li>Cancelamentos: remarcacao ate 7 dias antes, mediante disponibilidade.</li>
          </ul>
        </section>

        {/* Contactos / Reservas */}
        <section id="contactos" className="pp-section pp-section-alt">
          <h2 className="pp-section-title">Contactos e reservas</h2>
          <p className="pp-section-sub">
            Diz-nos a data, o numero aproximado de criancas e o pacote preferido. Respondemos ainda hoje
            com sugestoes e disponibilidade.
          </p>
          <form
            style={{ display: 'grid', gap: 12, maxWidth: 520 }}
          >
            <input name="nome" placeholder="Nome" required />
            <input name="email" placeholder="Email" type="email" required />
            <input name="telefone" placeholder="Telemovel" />
            <input name="data" placeholder="Data da festa" />
            <input name="criancas" placeholder="Numero de criancas" />
            <textarea name="mensagem" placeholder="Conta-nos como imaginas a festa" rows={4} />
            <button type="submit" className="pp-btn-primary">
              Enviar pedido
            </button>
          </form>
        </section>
      </main>

      {/* CTA fixo mobile */}
      <div className="pp-mobile-cta">
        <a href="#contactos" className="pp-btn-primary">
          Marcar Festa
        </a>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

