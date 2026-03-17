// Benefits.jsx — Cards de benefícios com scan rápido (ícone + título + desc curtíssima).
// UX: usuários escaneiam, não leem. Máx 2 linhas por item.

import './Benefits.css';

const benefits = [
  {
    icon: '🎛️',
    title: 'Controle total do cultivo',
    desc: 'Registre podas, LST, desfolha e amarrações com timeline completa.',
    highlight: true,
  },
  {
    icon: '📊',
    title: 'Dados organizados automaticamente',
    desc: 'pH, EC, temperatura e umidade sempre acessíveis e históriados.',
  },
  {
    icon: '🌿',
    title: 'Evolução por fases',
    desc: 'Acompanhe Clones → Vegetativo → Floração → Secagem com precisão.',
  },
  {
    icon: '🎯',
    title: 'Decisões baseadas em dados',
    desc: 'VPD, indicadores ambientais e alertas para o momento certo agir.',
    highlight: true,
  },
  {
    icon: '📅',
    title: 'Calendário inteligente',
    desc: 'Linha do tempo visual com todas as atividades e eventos do ciclo.',
  },
  {
    icon: '📄',
    title: 'Exportação em PDF',
    desc: 'Gere relatórios completos do histórico de cada cultivo em segundos.',
  },
  {
    icon: '💧',
    title: 'Controle de rega e nutrição',
    desc: 'Registre cada rega com valores de NPK, pH e EC em tempo real.',
  },
  {
    icon: '📦',
    title: 'Organização por lotes',
    desc: 'Gerencie múltiplos ciclos e lotes simultaneamente com clareza.',
  },
];

export default function Benefits() {
  return (
    <section className="section benefits" id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        {/* Header */}
        <header className="section-header animate-on-scroll">
          <div className="section-badge">
            <span>✦</span> Por que escolher o Fitometria?
          </div>
          <h2 className="section-title" id="benefits-title">
            Tudo que você precisa,{' '}
            <span className="highlight">em um só lugar</span>
          </h2>
          <p className="section-subtitle">
            Chega de planilhas e anotações perdidas. O Fitometria reúne
            todas as ferramentas de controle do seu cultivo.
          </p>
        </header>

        {/* Grid de cards */}
        <div className="benefits__grid" role="list">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`benefit-card animate-on-scroll stagger-${(i % 4) + 1}${b.highlight ? ' benefit-card--highlight' : ''}`}
              role="listitem"
            >
              <div className="benefit-card__icon" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="benefit-card__title">{b.title}</h3>
              <p className="benefit-card__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
