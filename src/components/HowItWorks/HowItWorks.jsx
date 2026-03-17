// HowItWorks.jsx — 3 passos simples: Registre → Acompanhe → Otimize.

import { Fragment } from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: 1,
    icon: '✍️',
    title: 'Registre',
    desc: 'Configure seu lote, defina a fase inicial e comece a lançar atividades, regas e medições ambientais.',
  },
  {
    number: 2,
    icon: '👁️',
    title: 'Acompanhe',
    desc: 'Visualize a linha do tempo do ciclo, métricas ambientais e evolução de cada fase no calendário inteligente.',
  },
  {
    number: 3,
    icon: '🚀',
    title: 'Otimize',
    desc: 'Use os dados históricos e indicadores para tomar melhores decisões e maximizar cada colheita.',
  },
];

const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <polyline points="19 12 12 19 5 12"/>
  </svg>
);

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        {/* Header */}
        <header className="section-header animate-on-scroll">
          <div className="section-badge">
            <span>✦</span> Simples de usar
          </div>
          <h2 className="section-title" id="how-title">
            Três passos para o <span className="highlight">cultivo perfeito</span>
          </h2>
          <p className="section-subtitle">
            Não é preciso ser especialista. Em minutos você está organizando
            seu cultivo como um profissional.
          </p>
        </header>

        {/* Steps */}
        <div className="how-it-works__steps" role="list">
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              <article
                className={`step-card animate-on-scroll stagger-${i + 1}`}
                role="listitem"
              >
                <div className="step-card__number" aria-label={`Passo ${step.number}`}>
                  <span aria-hidden="true">{step.icon}</span>
                  <span className="step-card__badge" aria-hidden="true">{step.number}</span>
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__desc">{step.desc}</p>
              </article>

              {/* Seta mobile entre steps */}
              {i < steps.length - 1 && (
                <div className="how-it-works__arrow" aria-hidden="true">
                  <ArrowDown />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* CTA inline */}
        <div className="section-header" style={{ marginTop: 'var(--space-12)', marginBottom: 0 }}>
          <a href="#cta" className="btn btn-primary btn-lg animate-on-scroll">
            Começar agora — grátis por 7 dias
          </a>
        </div>
      </div>
    </section>
  );
}
