// Hero.jsx — Seção acima da dobra com headline, CTA e mockup do app.
// Mobile-first. Usuário entende o valor em menos de 3 segundos.

import './Hero.css';

// Ícone de check
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="3" y="7" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// SVG do mockup do phone com tela simulando o app
const PhoneMockup = () => (
  <svg
    width="280"
    height="560"
    viewBox="0 0 280 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Mockup do aplicativo Fitometria"
    role="img"
  >
    {/* Corpo do phone */}
    <rect x="4" y="4" width="272" height="552" rx="36" fill="#1a2332" stroke="#2d3f52" strokeWidth="2"/>
    <rect x="8" y="8" width="264" height="544" rx="33" fill="#0f172a"/>

    {/* Câmera front */}
    <rect x="114" y="18" width="52" height="20" rx="10" fill="#1a2332"/>
    <circle cx="140" cy="28" r="5" fill="#0a0f1e"/>
    <circle cx="140" cy="28" r="2.5" fill="#1e3040"/>

    {/* ====== CONTEÚDO DA TELA ====== */}

    {/* Header do app */}
    <rect x="20" y="52" width="240" height="48" rx="12" fill="#1e293b"/>
    <text x="36" y="81" fontFamily="Inter, sans-serif" fontSize="13" fill="#10b981" fontWeight="700">🌿 Fitometria</text>
    <text x="196" y="81" fontFamily="Inter, sans-serif" fontSize="11" fill="#64748b">Ciclo #3</text>

    {/* Status bar - fase atual */}
    <rect x="20" y="112" width="240" height="60" rx="12" fill="#1e293b"/>
    <rect x="20" y="112" width="4" height="60" rx="2" fill="#10b981"/>
    <text x="36" y="132" fontFamily="Inter, sans-serif" fontSize="10" fill="#94a3b8">FASE ATUAL</text>
    <text x="36" y="152" fontFamily="Inter, sans-serif" fontSize="16" fill="#f1f5f9" fontWeight="700">🌸 Floração</text>
    <text x="160" y="132" fontFamily="Inter, sans-serif" fontSize="10" fill="#94a3b8">DIA</text>
    <text x="160" y="152" fontFamily="Inter, sans-serif" fontSize="16" fill="#10b981" fontWeight="700">42</text>

    {/* Cards ambientais - linha 1 */}
    <rect x="20" y="184" width="112" height="72" rx="12" fill="#1e293b"/>
    <text x="34" y="208" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748b">TEMPERATURA</text>
    <text x="34" y="230" fontFamily="Inter, sans-serif" fontSize="20" fill="#f1f5f9" fontWeight="700">24.5°</text>
    <text x="34" y="248" fontFamily="Inter, sans-serif" fontSize="9" fill="#10b981">↑ Ideal</text>

    <rect x="148" y="184" width="112" height="72" rx="12" fill="#1e293b"/>
    <text x="162" y="208" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748b">UMIDADE</text>
    <text x="162" y="230" fontFamily="Inter, sans-serif" fontSize="20" fill="#f1f5f9" fontWeight="700">62%</text>
    <text x="162" y="248" fontFamily="Inter, sans-serif" fontSize="9" fill="#10b981">↑ Ideal</text>

    {/* VPD card */}
    <rect x="20" y="268" width="240" height="56" rx="12" fill="#1e293b"/>
    <text x="36" y="292" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748b">VPD</text>
    <text x="36" y="312" fontFamily="Inter, sans-serif" fontSize="14" fill="#f1f5f9" fontWeight="600">1.2 kPa</text>
    {/* Barra de progresso VPD */}
    <rect x="100" y="299" width="144" height="8" rx="4" fill="#0f172a"/>
    <rect x="100" y="299" width="86" height="8" rx="4" fill="#10b981"/>

    {/* Seção Nutrição */}
    <text x="20" y="348" fontFamily="Inter, sans-serif" fontSize="11" fill="#94a3b8" fontWeight="600">NUTRIÇÃO — ÚLTIMA REGA</text>
    <rect x="20" y="356" width="72" height="56" rx="10" fill="#1e293b"/>
    <text x="36" y="380" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748b">pH</text>
    <text x="36" y="400" fontFamily="Inter, sans-serif" fontSize="16" fill="#34d399" fontWeight="700">6.2</text>

    <rect x="104" y="356" width="72" height="56" rx="10" fill="#1e293b"/>
    <text x="120" y="380" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748b">EC</text>
    <text x="120" y="400" fontFamily="Inter, sans-serif" fontSize="16" fill="#34d399" fontWeight="700">1.8</text>

    <rect x="188" y="356" width="72" height="56" rx="10" fill="#1e293b"/>
    <text x="204" y="380" fontFamily="Inter, sans-serif" fontSize="10" fill="#64748b">NPK</text>
    <text x="197" y="400" fontFamily="Inter, sans-serif" fontSize="12" fill="#34d399" fontWeight="700">3-1-2</text>

    {/* Timeline atividades */}
    <text x="20" y="438" fontFamily="Inter, sans-serif" fontSize="11" fill="#94a3b8" fontWeight="600">ÚLTIMAS ATIVIDADES</text>
    <rect x="20" y="446" width="240" height="32" rx="8" fill="#1e293b"/>
    <rect x="28" y="454" width="8" height="16" rx="3" fill="#10b981"/>
    <text x="44" y="466" fontFamily="Inter, sans-serif" fontSize="11" fill="#f1f5f9">Desfolha leve • Hoje 09:30</text>

    <rect x="20" y="484" width="240" height="32" rx="8" fill="#1e293b"/>
    <rect x="28" y="492" width="8" height="16" rx="3" fill="#3b82f6"/>
    <text x="44" y="504" fontFamily="Inter, sans-serif" fontSize="11" fill="#f1f5f9">Rega + nutrição • Ontem 10:00</text>

    {/* Bottom nav */}
    <rect x="20" y="524" width="240" height="44" rx="12" fill="#1e293b"/>
    <text x="45" y="550" fontFamily="Inter, sans-serif" fontSize="18">🏠</text>
    <text x="96" y="550" fontFamily="Inter, sans-serif" fontSize="18">📅</text>
    <text x="147" y="550" fontFamily="Inter, sans-serif" fontSize="18">📊</text>
    <text x="198" y="550" fontFamily="Inter, sans-serif" fontSize="18">⚙️</text>
  </svg>
);

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-headline">
      <div className="container">
        <div className="hero__inner">

          {/* ---- CONTEÚDO ESQUERDA ---- */}
          <div className="hero__content">
            {/* Badge */}
            <div className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Novo — Trial grátis de 7 dias
            </div>

            {/* Headline */}
            <h1 className="hero__headline" id="hero-headline">
              Cultive com{' '}
              <span className="gradient-text">precisão</span>{' '}
              e inteligência
            </h1>

            {/* Subheadline */}
            <p className="hero__subheadline">
              Registre cada fase, monitore ambiente, controle nutrição e tome
              decisões baseadas em dados — tudo em um só aplicativo.
            </p>

            {/* Prova rápida */}
            <div className="hero__proof" role="list">
              {[
                'Controle total do cultivo',
                'Dados organizados automaticamente',
                'Decisões baseadas em dados',
              ].map((item, i) => (
                <span key={i} className="hero__proof-item" role="listitem">
                  <CheckIcon />
                  {item}
                  {i < 2 && <span className="hero__proof-divider" aria-hidden="true" />}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero__ctas">
              <a href="#cta" className="btn btn-primary btn-lg">
                🌱 Testar grátis por 7 dias
              </a>
              <a href="#como-funciona" className="btn btn-secondary btn-lg">
                Como funciona?
              </a>
            </div>

            {/* Trust note */}
            <div className="hero__trust">
              <LockIcon aria-hidden="true" />
              Sem cartão de crédito · Cancele quando quiser · Dados protegidos
            </div>

            {/* Stats */}
            <div className="hero__stats">
              {[
                { value: '10k+', suffix: '', label: 'Ciclos registrados' },
                { value: '98', suffix: '%', label: 'Satisfação' },
                { value: '4.9', suffix: '★', label: 'Avaliação média' },
              ].map((stat, i) => (
                <div key={i} className="hero__stat">
                  <span className="hero__stat-value">
                    {stat.value}<span>{stat.suffix}</span>
                  </span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ---- MOCKUP DIREITA ---- */}
          <div className="hero__visual" aria-hidden="true">
            {/* Card flutuante - Temperatura */}
            <div className="hero__float-card hero__float-card--left">
              <div className="hero__float-card-icon">🌡️</div>
              <div className="hero__float-card-info">
                <span className="hero__float-card-value">24.5°C</span>
                <span className="hero__float-card-label">Temperatura ideal</span>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="hero__phone">
              <PhoneMockup />
            </div>

            {/* Card flutuante - Progresso */}
            <div className="hero__float-card hero__float-card--right">
              <div className="hero__float-card-icon">📈</div>
              <div className="hero__float-card-info">
                <span className="hero__float-card-value">Dia 42</span>
                <span className="hero__float-card-label">Floração</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
