// FinalCTA.jsx — CTA final com reforço da proposta de valor.

import './FinalCTA.css';

const CheckIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="section final-cta" id="cta" aria-labelledby="cta-headline">
      <div className="container">
        <div className="final-cta__box animate-on-scroll scale-up">
          <span className="final-cta__emoji" aria-hidden="true">🌱</span>

          <h2 className="final-cta__headline" id="cta-headline">
            Comece hoje, sem risco
          </h2>

          <p className="final-cta__desc">
            7 dias de acesso completo, gratuito, sem cartão de crédito.
            Se não gostar, cancele com um clique. Mas você vai gostar.
          </p>

          {/* Botões */}
          <div className="final-cta__buttons">
            <a href="/register" className="btn btn-primary btn-lg">
              🌱 Testar grátis por 7 dias
            </a>
            <a href="/demo" className="btn btn-secondary btn-lg">
              Ver demonstração
            </a>
          </div>

          {/* Trust items */}
          <div className="final-cta__trust-items" role="list">
            {[
              'Sem cartão de crédito',
              'Cancele quando quiser',
              '7 dias grátis e completo',
              'Suporte incluso',
            ].map((item) => (
              <div key={item} className="final-cta__trust-item" role="listitem">
                <CheckIcon aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
