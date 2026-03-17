// SocialProof.jsx — Indicadores e depoimentos para aumentar conversão.

import './SocialProof.css';

const stats = [
  { value: '10', suffix: 'k+', label: 'Ciclos\nregistrados' },
  { value: '98', suffix: '%', label: 'Usuários\nsatisfeitos' },
  { value: '4.9', suffix: '★', label: 'Avaliação\nmedia' },
  { value: '7', suffix: 'dias', label: 'Trial\ngratuito' },
];

const testimonials = [
  {
    stars: 5,
    quote: 'Finalmente consigo ter controle real do meu cultivo. O VPD e os dados ambientais me ajudaram a melhorar muito meu yield.',
    name: 'Carlos M.',
    role: 'Cultivador Indoor há 3 anos',
    avatar: '🧑‍🌾',
    featured: false,
  },
  {
    stars: 5,
    quote: 'O calendário de atividades mudou tudo. Antes eu esquecia regas e podas. Agora tenho um histórico completo de todos os ciclos.',
    name: 'Ana L.',
    role: 'Cultivadora Hobbyista',
    avatar: '👩‍🌿',
    featured: true,
  },
  {
    stars: 5,
    quote: 'A exportação de PDF é incrível. Consigo comparar ciclos diferentes e entender o que funcionou melhor em cada um.',
    name: 'Bruno R.',
    role: 'Grower Profissional',
    avatar: '👨‍💼',
    featured: false,
  },
  {
    stars: 5,
    quote: 'Nunca mais errei o pH. O registro de cada rega com os dados de EC e pH transformou meu processo completamente.',
    name: 'Fernando K.',
    role: 'Cultivador Indoor',
    avatar: '🌱',
    featured: false,
  },
  {
    stars: 5,
    quote: 'A interface é super limpa e intuitiva. Consigo registrar tudo em segundos, até pelo celular durante o trato.',
    name: 'Julia S.',
    role: 'Cultivadora Iniciante',
    avatar: '🌿',
    featured: true,
  },
  {
    stars: 5,
    quote: 'Gosto muito de acompanhar a linha do tempo das fases. Ver o Vegetativo evoluir para a Floração documentado é satisfatório.',
    name: 'Rafael B.',
    role: 'Entusiasta de Cultivo',
    avatar: '🧪',
    featured: false,
  },
];

export default function SocialProof() {
  return (
    <section className="section social-proof" id="depoimentos" aria-labelledby="social-title">
      <div className="container">
        {/* Header */}
        <header className="section-header animate-on-scroll">
          <div className="section-badge">
            <span>✦</span> Prova Social
          </div>
          <h2 className="section-title" id="social-title">
            Cultivadores que já{' '}
            <span className="highlight">transformaram</span> seus resultados
          </h2>
          <p className="section-subtitle">
            Junte-se a milhares de cultivadores que usam o Fitometria
            para crescer com dados e consistência.
          </p>
        </header>

        {/* Indicadores */}
        <div className="social-proof__stats" role="list">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-box animate-on-scroll stagger-${i + 1}`} role="listitem">
              <div className="stat-box__value">
                {stat.value}<span>{stat.suffix}</span>
              </div>
              <div className="stat-box__label" style={{ whiteSpace: 'pre-line' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="testimonials__grid" role="list">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`testimonial-card animate-on-scroll stagger-${(i % 3) + 1}${t.featured ? ' testimonial-card--featured' : ''}`}
              role="listitem"
            >
              {/* Estrelas */}
              <div className="testimonial-card__stars" aria-label={`${t.stars} estrelas de 5`}>
                {'★'.repeat(t.stars)}
              </div>

              {/* Citação */}
              <p className="testimonial-card__quote">{t.quote}</p>

              {/* Autor */}
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
