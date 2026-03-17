// FAQ.jsx — Accordion com dúvidas frequentes. Acessível e sem libs externas.

import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Preciso de experiência com cultivo para usar o Fitometria?',
    a: 'Não! O Fitometria foi projetado para ser simples e intuitivo. Se você está começando, ele vai ajudar a criar bons hábitos desde o início. Se já é experiente, terá dados precisos para otimizar cada ciclo.',
  },
  {
    q: 'O aplicativo funciona no celular?',
    a: 'Sim, completamente. O Fitometria é mobile-first — foi desenvolvido para funcionar perfeitamente no celular. Registre regas, podas e medições direto da sua área de cultivo, na hora que acontece.',
  },
  {
    q: 'Como funciona o teste gratuito de 7 dias?',
    a: 'Você cria uma conta sem precisar fornecer cartão de crédito. Nos primeiros 7 dias tem acesso a todas as funcionalidades da plataforma. Ao final do período, você escolhe continuar com o plano que faz sentido ou simplesmente não renova — sem cobranças automáticas.',
  },
  {
    q: 'Posso controlar múltiplos cultivos ao mesmo tempo?',
    a: 'Sim! O Fitometria suporta múltiplos lotes e ciclos ativos simultaneamente. Cada lote tem seu próprio histórico, fases, calendário e dados ambientais.',
  },
  {
    q: 'O que são as fases do cultivo no app?',
    a: 'O Fitometria organiza o ciclo nas fases: Clones, Vegetativo, Floração e Secagem. Você avança manualmente de uma fase para outra, e o app registra a duração, atividades e dados de cada etapa automaticamente.',
  },
  {
    q: 'Como funciona a exportação em PDF?',
    a: 'Com um clique você gera um relatório PDF completo com todo o histórico do ciclo: fases, atividades, regas, nutrição, dados ambientais e linha do tempo. Ideal para comparar ciclos e registrar aprendizados.',
  },
  {
    q: 'Meus dados são seguros?',
    a: 'Sim. Todos os dados são criptografados e armazenados com segurança. Você pode exportar e fazer backup dos seus dados a qualquer momento.',
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className={`faq-item animate-on-scroll stagger-${(index % 4) + 1}${open ? ' open' : ''}`}>
      <button
        className="faq-item__trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        id={`${id}-trigger`}
      >
        <span className="faq-item__question">{q}</span>
        <span className="faq-item__icon" aria-hidden="true">+</span>
      </button>

      <div
        className="faq-item__answer"
        id={id}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
      >
        <div className="faq-item__answer-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        {/* Header */}
        <header className="section-header animate-on-scroll">
          <div className="section-badge">
            <span>✦</span> Perguntas Frequentes
          </div>
          <h2 className="section-title" id="faq-title">
            Dúvidas? <span className="highlight">Respondemos</span>
          </h2>
          <p className="section-subtitle">
            Não encontrou sua dúvida? Entre em contato com nosso suporte.
          </p>
        </header>

        {/* Lista de FAQs */}
        <div className="faq__list" role="list">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* CTA para suporte */}
        <div className="section-header" style={{ marginTop: 'var(--space-10)', marginBottom: 0 }}>
          <p style={{ color: 'var(--clr-text-muted)', marginBottom: 'var(--space-4)' }}>
            Ainda tem dúvidas?
          </p>
          <a href="mailto:suporte@fitometria.com.br" className="btn btn-secondary">
            Falar com o suporte
          </a>
        </div>
      </div>
    </section>
  );
}
