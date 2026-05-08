// Features.jsx — Funcionalidades principais com layout alternado e mockups inline.

import './Features.css';

/* ---- MOCKUP: Calendário Inteligente ---- */
const CalendarMock = () => (
  <div className="feature-item__mock">
    <img
      src="/calendario.jpeg"
      alt="Tela de calendário do aplicativo Fitometria"
      className="feature-mock__image"
    />
  </div>
);

/* ---- MOCKUP: Fases do Cultivo ---- */
const FasesMock = () => (
  <div className="feature-item__mock">
    <img
      src="/cultivo.jpeg"
      alt="Tela de fases do cultivo do aplicativo Fitometria"
      className="feature-mock__image"
    />
  </div>
);

/* ---- MOCKUP: Controle Ambiental ---- */
const AmbientalMock = () => (
  <div className="feature-item__mock">
    <img
      src="/monitoramento.jpeg"
      alt="Tela de monitoramento ambiental do aplicativo Fitometria"
      className="feature-mock__image"
    />
  </div>
);

/* ---- MOCKUP: Nutrição e Rega ---- */
const NutricaoMock = () => (
  <div className="feature-item__mock">
    <div className="feature-mock__chrome">
      <span className="feature-mock__dot" style={{ background: '#ef4444' }} />
      <span className="feature-mock__dot" style={{ background: '#f59e0b' }} />
      <span className="feature-mock__dot" style={{ background: '#22c55e' }} />
    </div>
    <div className="feature-mock__body">
      <svg width="100%" viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="18" fontFamily="Inter" fontSize="14" fill="#f1f5f9" fontWeight="700">Nutrição e Rega</text>

        {/* Header indicadores */}
        {[
          { label: 'pH', value: '6.2', ideal: '5.8–6.5', pct: 0.65 },
          { label: 'EC', value: '1.8 mS', ideal: '1.5–2.2', pct: 0.58 },
        ].map((item, i) => (
          <g key={item.label}>
            <text x={0} y={42 + i * 64} fontFamily="Inter" fontSize="11" fill="#94a3b8">{item.label}</text>
            <text x={0} y={62 + i * 64} fontFamily="Inter" fontSize="24" fill="#34d399" fontWeight="700">{item.value}</text>
            <text x={70} y={62 + i * 64} fontFamily="Inter" fontSize="11" fill="#64748b">Ideal: {item.ideal}</text>
            <rect x={0} y={70 + i * 64} width={420} height={8} rx="4" fill="rgba(255,255,255,0.06)"/>
            <rect x={0} y={70 + i * 64} width={420 * item.pct} height={8} rx="4" fill="#10b981"/>
          </g>
        ))}

        {/* NPK */}
        <text x="0" y="168" fontFamily="Inter" fontSize="11" fill="#94a3b8" fontWeight="600">NUTRIENTES (N-P-K)</text>
        {[
          { label: 'N (Nitrogênio)', value: 3, max: 5, color: '#10b981' },
          { label: 'P (Fósforo)', value: 1, max: 5, color: '#3b82f6' },
          { label: 'K (Potássio)', value: 2, max: 5, color: '#f59e0b' },
        ].map((n, i) => (
          <g key={n.label}>
            <text x={0} y={188 + i * 26} fontFamily="Inter" fontSize="11" fill="#64748b">{n.label}</text>
            <rect x={130} y={178 + i * 26} width={270} height={12} rx="6" fill="rgba(255,255,255,0.06)"/>
            <rect x={130} y={178 + i * 26} width={270 * (n.value / n.max)} height={12} rx="6" fill={n.color} opacity="0.85"/>
            <text x={408} y={189 + i * 26} fontFamily="Inter" fontSize="11" fill={n.color} textAnchor="end" fontWeight="600">{n.value}</text>
          </g>
        ))}
      </svg>
    </div>
  </div>
);

/* ---- MOCKUP: Exportação PDF ---- */
const PdfMock = () => (
  <div className="feature-item__mock">
    <div className="feature-mock__chrome">
      <span className="feature-mock__dot" style={{ background: '#ef4444' }} />
      <span className="feature-mock__dot" style={{ background: '#f59e0b' }} />
      <span className="feature-mock__dot" style={{ background: '#22c55e' }} />
    </div>
    <div className="feature-mock__body">
      <svg width="100%" viewBox="0 0 420 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Folha de PDF */}
        <rect x="80" y="0" width="260" height="210" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.08)"/>
        <rect x="80" y="0" width="260" height="36" rx="8" fill="rgba(16,185,129,0.15)"/>
        <text x="96" y="24" fontFamily="Inter" fontSize="12" fill="#10b981" fontWeight="700">📄 FITOMETRIA</text>

        {/* Conteúdo simulado */}
        <text x="96" y="52" fontFamily="Inter" fontSize="11" fill="#94a3b8">Relatório do Ciclo #3 — Lote Alpha</text>
        <text x="96" y="68" fontFamily="Inter" fontSize="10" fill="#64748b">Gerado em: 17/03/2026</text>

        {/* Seções do PDF */}
        {[
          '■ Resumo do ciclo', '■ Histórico de fases',
          '■ Dados ambientais', '■ Registro de regas',
          '■ Atividades realizadas', '■ Gráficos e métricas',
        ].map((item, i) => (
          <g key={item}>
            <rect x="96" y={80 + i * 20} width={i % 2 === 0 ? 180 : 140} height="12" rx="3" fill="rgba(255,255,255,0.06)"/>
            <text x="96" y={91 + i * 20} fontFamily="Inter" fontSize="10" fill="#475569">{item}</text>
          </g>
        ))}

        {/* Botão download */}
        <rect x="96" y="198" width="108" height="28" rx="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)"/>
        <text x="115" y="217" fontFamily="Inter" fontSize="11" fill="#10b981" fontWeight="600">⬇ Baixar PDF</text>
        <rect x="216" y="198" width="108" height="28" rx="6" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)"/>
        <text x="232" y="217" fontFamily="Inter" fontSize="11" fill="#3b82f6" fontWeight="600">↗ Compartilhar</text>
      </svg>
    </div>
  </div>
);

/* ---- FEATURES DATA ---- */
const features = [
  {
    tag: '📅 Calendário',
    title: 'Calendário inteligente do seu ciclo',
    desc: 'Gerencie todas as atividades com uma visualização de calendário clara. Nunca mais esqueça uma poda, rega ou nutrição.',
    items: [
      'Linha do tempo visual de todo o ciclo',
      'Agendamento de atividades futuras',
      'Histórico completo por data',
      'Indicação visual de eventos por tipo',
    ],
    visual: <CalendarMock />,
  },
  {
    tag: '🌱 Fases do Cultivo',
    title: 'Acompanhe cada fase com precisão',
    desc: 'Do clone à secagem, cada etapa é monitorada, cronometrada e documentada. Saiba exatamente em que ponto está.',
    items: [
      'Clones → Vegetativo → Floração → Secagem',
      'Duração real de cada fase registrada',
      'Notas e observações por fase',
      'Previsão de colheita baseada no histórico',
    ],
    visual: <FasesMock />,
  },
  {
    tag: '🌡️ Controle Ambiental',
    title: 'Monitoramento do ambiente em tempo real',
    desc: 'Registre temperatura, umidade e VPD. Visualize graficamente e identifique imediatamente quando algo sai do ideal.',
    items: [
      'Temperatura e umidade com faixas ideais',
      'Cálculo automático de VPD',
      'Histórico gráfico de variações',
      'Alertas quando fora do range ideal',
    ],
    visual: <AmbientalMock />,
  },
  {
    tag: '💧 Nutrição e Rega',
    title: 'Controle total de pH, EC e NPK',
    desc: 'Registre cada rega com parâmetros completos. Histórico detalhado de nutrição para correlacionar com o desenvolvimento.',
    items: [
      'pH com faixas ideais por fase',
      'EC (condutividade elétrica) por litro',
      'Proporção NPK por semana',
      'Volume de água e frequência de rega',
    ],
    visual: <NutricaoMock />,
  },
  {
    tag: '📄 Exportação PDF',
    title: 'Gere relatórios completos em um clique',
    desc: 'Exporte o histórico completo do ciclo em PDF profissional. Ideal para referência, análise e compartilhamento.',
    items: [
      'PDF com todo o histórico do ciclo',
      'Dados ambientais e de nutrição',
      'Timeline de atividades realizada',
      'Compartilhe ou arquive com facilidade',
    ],
    visual: <PdfMock />,
  },
];

export default function Features() {
  return (
    <section className="section features" id="funcionalidades" aria-labelledby="features-title">
      <div className="container">
        {/* Header */}
        <header className="section-header animate-on-scroll">
          <div className="section-badge">
            <span>✦</span> Funcionalidades
          </div>
          <h2 className="section-title" id="features-title">
            Cada detalhe do cultivo,{' '}
            <span className="highlight">sob controle</span>
          </h2>
          <p className="section-subtitle">
            Ferramentas criadas especificamente para quem cultiva com seriedade.
            Simples de usar, poderosas nos resultados.
          </p>
        </header>

        {/* Lista de features alternadas */}
        <div className="features__list">
          {features.map((feature, i) => (
            <div
              key={feature.tag}
              className={`feature-item animate-on-scroll ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}
            >
              {/* Conteúdo */}
              <div className="feature-item__content">
                <span className="feature-item__tag">{feature.tag}</span>
                <h3 className="feature-item__title">{feature.title}</h3>
                <p className="feature-item__desc">{feature.desc}</p>
                <ul className="feature-item__list" role="list">
                  {feature.items.map((item) => (
                    <li key={item} className="feature-item__list-item">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="feature-item__visual">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
