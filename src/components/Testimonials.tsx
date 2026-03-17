import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Ana Paula Ferreira',
    role: 'Mae da Margarida, 6 anos',
    text: 'A minha filha ainda sonha com a festa que fizemos no Princess Party. A equipa foi incrivelmente atenciosa, o espaco e lindo e cada detalhe foi pensado a perfeicao. Recomendo sem reservas!',
    stars: 5,
  },
  {
    name: 'Carla Rodrigues',
    role: 'Mae da Ines, 8 anos',
    text: 'Fizemos o spa de aniversario e foi uma experiencia magica. As meninas adoraram, a manicure, a maquilhagem, o ambiente... voltaremos com certeza! Servico de excelencia em tudo.',
    stars: 5,
  },
  {
    name: 'Sofia Mendes',
    role: 'Mae da Beatriz, 7 anos',
    text: 'Organizámos o baptizado da Beatriz aqui e foi perfeito. Espaço amplo, elegante e a equipa cuidou de tudo. Os convidados ficaram impressionados com a qualidade e o bom gosto da decoração.',
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 16 16" fill="#d4a017">
          <path d="M8 1.5l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.7l-3.6 1.9.7-4.1-3-2.9 4.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="depoimentos" className={styles.section}>
      <div className={styles.waveTop}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#fff5fb"/>
        </svg>
      </div>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Testemunhos</span>
          <h2 className="section-title">O que dizem as familias</h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle">
            A confianca das familias que nos escolheram e a nossa maior conquista.
          </p>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <Stars count={t.stars} />
              <blockquote className={styles.quote}>
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <div>
                  <strong className={styles.name}>{t.name}</strong>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
