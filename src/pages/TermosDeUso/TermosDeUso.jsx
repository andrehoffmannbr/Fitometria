// TermosDeUso.jsx
// Página de Termos de Uso — mesmo design da Política de Privacidade.
// Rota: /termos-de-uso

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Reutiliza o mesmo CSS da Política de Privacidade (design idêntico)
import '../PoliticaPrivacidade/PoliticaPrivacidade.css';

// ---- SUMÁRIO ----
const sections = [
  { id: 'aceitacao',       label: '1. Aceitação' },
  { id: 'servico',         label: '2. O Serviço' },
  { id: 'cadastro',        label: '3. Cadastro e Conta' },
  { id: 'trial',           label: '4. Trial Gratuito' },
  { id: 'planos',          label: '5. Planos e Pagamentos' },
  { id: 'uso-permitido',   label: '6. Uso Permitido' },
  { id: 'restricoes',      label: '7. Restrições' },
  { id: 'conteudo',        label: '8. Conteúdo do Usuário' },
  { id: 'propriedade',     label: '9. Propriedade Intelectual' },
  { id: 'garantias',       label: '10. Isenção de Garantias' },
  { id: 'responsabilidade',label: '11. Limitação de Responsabilidade' },
  { id: 'neutralidade',    label: '12. Neutralidade' },
  { id: 'rescisao',        label: '13. Rescisão' },
  { id: 'alteracoes',      label: '14. Alterações' },
  { id: 'lei',             label: '15. Lei Aplicável' },
];

// ---- ÍCONES ----
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="2" y="3" width="12" height="11" rx="2"/>
    <line x1="5" y1="1" x2="5" y2="5"/>
    <line x1="11" y1="1" x2="11" y2="5"/>
    <line x1="2" y1="7" x2="14" y2="7"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="8" cy="8" r="6"/>
    <polyline points="8 5 8 8 10 10"/>
  </svg>
);

const PrintIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <polyline points="4 6 4 2 12 2 12 6"/>
    <rect x="2" y="6" width="12" height="7" rx="1"/>
    <rect x="5" y="10" width="6" height="3"/>
    <circle cx="12" cy="9" r="0.5" fill="currentColor"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="4 6 8 10 12 6"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="8" y1="13" x2="8" y2="3"/>
    <polyline points="3 7 8 2 13 7"/>
  </svg>
);

// ---- COMPONENTE PRINCIPAL ----
export default function TermosDeUso({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('aceitacao');
  const [readingProgress, setReadingProgress] = useState(0);
  const [tocMobileOpen, setTocMobileOpen] = useState(false);
  const contentRef = useRef(null);

  // Barra de progresso de leitura
  useEffect(() => {
    const onScroll = () => {
      const el     = document.documentElement;
      const top    = el.scrollTop || document.body.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setReadingProgress(height > 0 ? (top / height) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight do item ativo no sumário
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Barra de progresso de leitura */}
      <div
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progresso de leitura"
      />

      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      {/* ---- HERO DA PÁGINA ---- */}
      <header className="policy-hero">
        <div className="container">
          <div className="policy-hero__badge">📋 Documento Legal</div>
          <h1 className="policy-hero__title">Termos de Uso</h1>
          <div className="policy-hero__meta">
            <span className="policy-hero__meta-item">
              <CalendarIcon aria-hidden="true" />
              Última atualização: 17 de março de 2026
            </span>
            <span className="policy-hero__meta-divider" aria-hidden="true" />
            <span className="policy-hero__meta-item">
              <ClockIcon aria-hidden="true" />
              Leitura estimada: 7 min
            </span>
          </div>
        </div>
      </header>

      {/* ---- CONTEÚDO ---- */}
      <div className="policy-layout">
        <div className="container">
          <div className="policy-layout__inner">

            {/* ---- SIDEBAR DESKTOP ---- */}
            <aside className="policy-toc" aria-label="Sumário dos termos">
              <p className="policy-toc__title">Sumário</p>
              <nav className="policy-toc__list">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`policy-toc__link${activeSection === id ? ' active' : ''}`}
                    onClick={() => setActiveSection(id)}
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <div className="policy-toc__actions">
                <button className="policy-toc__action-btn" onClick={() => window.print()}>
                  <PrintIcon aria-hidden="true" />
                  Imprimir / Salvar PDF
                </button>
              </div>
            </aside>

            {/* ---- SUMÁRIO MOBILE ---- */}
            <div className="policy-toc-mobile">
              <button
                className={`policy-toc-mobile__toggle${tocMobileOpen ? ' open' : ''}`}
                onClick={() => setTocMobileOpen(!tocMobileOpen)}
                aria-expanded={tocMobileOpen}
              >
                <span>📋 Ver sumário dos termos</span>
                <ChevronIcon />
              </button>
              <div className={`policy-toc-mobile__body${tocMobileOpen ? ' open' : ''}`}>
                <div className="policy-toc-mobile__list">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="policy-toc-mobile__link"
                      onClick={() => setTocMobileOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ---- CONTEÚDO PRINCIPAL ---- */}
            <main className="policy-content" ref={contentRef} id="main-content">

              {/* 1. Aceitação */}
              <section className="policy-section" id="aceitacao">
                <span className="policy-section__number">1</span>
                <h2 className="policy-section__title">Aceitação dos Termos</h2>
                <div className="policy-section__body">
                  <p>
                    Ao acessar, baixar ou utilizar o aplicativo <strong>Fitometria</strong> ("App", "Serviço"),
                    você concorda integralmente com estes Termos de Uso ("Termos"). Se não concordar com algum
                    item, não utilize o App.
                  </p>
                  <p>
                    Estes Termos constituem um contrato vinculante entre você ("Usuário") e a <strong>Fitometria</strong>.
                    O uso continuado do App após alterações nos Termos implica aceitação das novas versões.
                  </p>
                  <div className="policy-infobox">
                    <span className="policy-infobox__icon">📌</span>
                    <p className="policy-infobox__text">
                      <strong>Resumo:</strong> ao usar o Fitometria, você aceita estes Termos.
                      Leia com atenção antes de continuar.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. O Serviço */}
              <section className="policy-section" id="servico">
                <span className="policy-section__number">2</span>
                <h2 className="policy-section__title">O Serviço</h2>
                <div className="policy-section__body">
                  <p>
                    O <strong>Fitometria</strong> é uma plataforma de controle e registro pessoal de cultivos
                    indoor e hidropônicos. O App permite:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Registrar e acompanhar ciclos de cultivo (fases, datas, lotes)</li>
                    <li>Monitorar parâmetros ambientais (temperatura, umidade, VPD, CO₂)</li>
                    <li>Controlar rega, nutrição (pH, EC, NPK) e atividades de manejo</li>
                    <li>Gerar relatórios e exportar histórico em PDF</li>
                    <li>Utilizar calculadoras de VPD e outros parâmetros agronômicos</li>
                  </ul>
                  <p>
                    O Fitometria reserva-se o direito de modificar, suspender ou descontinuar funcionalidades
                    a qualquer momento, com ou sem aviso prévio.
                  </p>
                </div>
              </section>

              {/* 3. Cadastro */}
              <section className="policy-section" id="cadastro">
                <span className="policy-section__number">3</span>
                <h2 className="policy-section__title">Cadastro e Conta de Usuário</h2>
                <div className="policy-section__body">
                  <p>
                    Para acessar determinadas funcionalidades, pode ser necessário criar uma conta. Ao se
                    cadastrar, você concorda em:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Fornecer informações verdadeiras, precisas e atualizadas</li>
                    <li>Manter a confidencialidade de suas credenciais de acesso</li>
                    <li>Ser o único responsável por todas as atividades realizadas em sua conta</li>
                    <li>Notificar imediatamente em caso de acesso não autorizado</li>
                  </ul>
                  <p>
                    O Fitometria não será responsável por perdas decorrentes do uso não autorizado de sua
                    conta por terceiros.
                  </p>
                </div>
              </section>

              {/* 4. Trial */}
              <section className="policy-section" id="trial">
                <span className="policy-section__number">4</span>
                <h2 className="policy-section__title">Período de Trial Gratuito</h2>
                <div className="policy-section__body">
                  <div className="policy-infobox">
                    <span className="policy-infobox__icon">🎁</span>
                    <p className="policy-infobox__text">
                      <strong>7 dias grátis, sem cartão de crédito.</strong> Acesso completo a todas as
                      funcionalidades durante o período de avaliação.
                    </p>
                  </div>
                  <p>
                    Oferecemos um período de avaliação gratuita de <strong>7 (sete) dias</strong> com acesso
                    completo ao plano contratado. Durante o trial:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Nenhum dado de pagamento é solicitado para iniciar o trial</li>
                    <li>Ao término do período, o acesso passa para o plano gratuito (se disponível) ou é suspenso</li>
                    <li>Dados inseridos durante o trial são mantidos caso o usuário assine um plano pago</li>
                    <li>O trial é limitado a uma conta por usuário</li>
                  </ul>
                </div>
              </section>

              {/* 5. Planos */}
              <section className="policy-section" id="planos">
                <span className="policy-section__number">5</span>
                <h2 className="policy-section__title">Planos e Pagamentos</h2>
                <div className="policy-section__body">
                  <p>
                    O Fitometria pode oferecer planos pagos com funcionalidades adicionais. Ao assinar um plano:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Os preços são informados previamente e podem ser alterados com aviso de 30 dias</li>
                    <li>A cobrança é recorrente (mensal ou anual, conforme o plano escolhido)</li>
                    <li>O cancelamento pode ser feito a qualquer momento; o acesso permanece até o fim do período pago</li>
                    <li>Não há reembolso proporcional por cancelamento antecipado, salvo disposição legal em contrário</li>
                    <li>Inadimplência por mais de 7 dias pode resultar em suspensão da conta</li>
                  </ul>
                </div>
              </section>

              {/* 6. Uso Permitido */}
              <section className="policy-section" id="uso-permitido">
                <span className="policy-section__number">6</span>
                <h2 className="policy-section__title">Uso Permitido</h2>
                <div className="policy-section__body">
                  <p>O App é licenciado para uso pessoal, não comercial, salvo acordo expresso em contrário. É permitido:</p>
                  <ul className="policy-list" role="list">
                    <li>Utilizar o App para registro e controle de seus próprios cultivos</li>
                    <li>Exportar seus dados pessoais para fins de backup ou análise</li>
                    <li>Compartilhar relatórios gerados pelo App com terceiros de sua escolha</li>
                    <li>Utilizar as calculadoras e ferramentas disponíveis no App</li>
                  </ul>
                </div>
              </section>

              {/* 7. Restrições */}
              <section className="policy-section" id="restricoes">
                <span className="policy-section__number">7</span>
                <h2 className="policy-section__title">Restrições de Uso</h2>
                <div className="policy-section__body">
                  <p>É expressamente proibido:</p>
                  <ul className="policy-list policy-list--no" role="list">
                    <li>Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte do App</li>
                    <li>Utilizar o App para fins ilegais ou que violem a legislação vigente</li>
                    <li>Compartilhar credenciais de acesso com terceiros</li>
                    <li>Utilizar bots, scripts ou métodos automatizados para acessar o App</li>
                    <li>Revender, sublicenciar ou explorar comercialmente o App sem autorização escrita</li>
                    <li>Tentar comprometer a segurança, integridade ou disponibilidade do serviço</li>
                  </ul>
                  <p>
                    Violações podem resultar em suspensão ou encerramento imediato da conta,
                    sem direito a reembolso, e sujeitas às medidas legais cabíveis.
                  </p>
                </div>
              </section>

              {/* 8. Conteúdo */}
              <section className="policy-section" id="conteudo">
                <span className="policy-section__number">8</span>
                <h2 className="policy-section__title">Conteúdo do Usuário</h2>
                <div className="policy-section__body">
                  <p>
                    Todo conteúdo inserido no App (registros, fotos, anotações) permanece de sua propriedade.
                    Ao utilizar o App, você nos concede uma licença limitada, não exclusiva, para processar
                    e armazenar esses dados exclusivamente para operar o serviço.
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Você é responsável pela legalidade do conteúdo que insere</li>
                    <li>Seus dados não são usados para fins comerciais nem compartilhados com terceiros</li>
                    <li>Você pode exportar ou excluir seus dados a qualquer momento</li>
                  </ul>
                </div>
              </section>

              {/* 9. Propriedade Intelectual */}
              <section className="policy-section" id="propriedade">
                <span className="policy-section__number">9</span>
                <h2 className="policy-section__title">Propriedade Intelectual</h2>
                <div className="policy-section__body">
                  <p>
                    O App, incluindo seu código-fonte, design, logotipos, textos, ícones e funcionalidades,
                    é de propriedade exclusiva do <strong>Fitometria</strong> e protegido pelas leis de
                    direitos autorais e propriedade intelectual do Brasil e tratados internacionais.
                  </p>
                  <p>
                    Nenhuma licença sobre a propriedade intelectual do Fitometria é concedida ao Usuário além
                    do direito de uso do App conforme descrito nestes Termos.
                  </p>
                </div>
              </section>

              {/* 10. Garantias */}
              <section className="policy-section" id="garantias">
                <span className="policy-section__number">10</span>
                <h2 className="policy-section__title">Isenção de Garantias</h2>
                <div className="policy-section__body">
                  <p>
                    O App é fornecido <strong>"no estado em que se encontra"</strong>, sem garantias de qualquer
                    natureza, expressas ou implícitas. Não garantimos que:
                  </p>
                  <ul className="policy-list policy-list--no" role="list">
                    <li>O serviço estará disponível de forma ininterrupta ou livre de erros</li>
                    <li>Os resultados obtidos com o uso do App serão precisos ou confiáveis para fins agronômicos profissionais</li>
                    <li>Eventuais falhas serão corrigidas em prazo determinado</li>
                  </ul>
                  <p>
                    Recomendamos sempre validar dados críticos com profissionais especializados.
                  </p>
                </div>
              </section>

              {/* 11. Responsabilidade */}
              <section className="policy-section" id="responsabilidade">
                <span className="policy-section__number">11</span>
                <h2 className="policy-section__title">Limitação de Responsabilidade</h2>
                <div className="policy-section__body">
                  <p>
                    Na máxima extensão permitida pela lei, o Fitometria não se responsabiliza por:
                  </p>
                  <ul className="policy-list policy-list--no" role="list">
                    <li>Danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou incapacidade de uso do App</li>
                    <li>Perda de dados por falha de dispositivo, desinstalação ou sincronia</li>
                    <li>Decisões de cultivo tomadas com base nas informações do App</li>
                    <li>Danos causados por acesso não autorizado à sua conta</li>
                  </ul>
                  <p>
                    Em nenhuma hipótese a responsabilidade total do Fitometria excederá o valor pago pelo
                    Usuário nos últimos 3 meses de serviço.
                  </p>
                </div>
              </section>

              {/* 12. Neutralidade */}
              <section className="policy-section" id="neutralidade">
                <span className="policy-section__number">12</span>
                <h2 className="policy-section__title">Neutralidade e Responsabilidade do Usuário</h2>
                <div className="policy-section__body">
                  <div className="policy-infobox policy-infobox--warning">
                    <span className="policy-infobox__icon">⚠️</span>
                    <p className="policy-infobox__text">
                      <strong>O Fitometria é uma ferramenta neutra.</strong> Não promovemos, apoiamos nem
                      orientamos atividades ilegais. O uso legal e responsável é inteira
                      responsabilidade do Usuário.
                    </p>
                  </div>
                  <p>
                    O Fitometria é uma ferramenta de organização e registro de dados. Não incentivamos,
                    orientamos nem apoiamos qualquer atividade que contrarie a legislação vigente no país do Usuário.
                    O Usuário é único e exclusivo responsável por garantir que o uso do App esteja em
                    conformidade com todas as leis aplicáveis em sua jurisdição.
                  </p>
                </div>
              </section>

              {/* 13. Rescisão */}
              <section className="policy-section" id="rescisao">
                <span className="policy-section__number">13</span>
                <h2 className="policy-section__title">Rescisão</h2>
                <div className="policy-section__body">
                  <p>
                    Qualquer das partes pode encerrar a relação de uso a qualquer momento:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>
                      <strong>Pelo Usuário:</strong> basta cancelar a conta nas configurações do App ou
                      desinstalar o aplicativo
                    </li>
                    <li>
                      <strong>Pelo Fitometria:</strong> podemos suspender ou encerrar contas em caso de
                      violação destes Termos, com ou sem aviso prévio
                    </li>
                  </ul>
                  <p>
                    Ao encerrar a conta, os dados locais no dispositivo são removidos junto com o App.
                    Dados em servidores (quando aplicável) serão excluídos em até 30 dias.
                  </p>
                </div>
              </section>

              {/* 14. Alterações */}
              <section className="policy-section" id="alteracoes">
                <span className="policy-section__number">14</span>
                <h2 className="policy-section__title">Alterações nos Termos</h2>
                <div className="policy-section__body">
                  <p>
                    Podemos atualizar estes Termos periodicamente. Alterações relevantes serão comunicadas
                    via notificação no App ou e-mail cadastrado com antecedência mínima de 7 dias.
                    A versão mais recente estará sempre disponível nesta página.
                  </p>
                  <p>
                    A continuidade no uso do App após a data de vigência das novas condições
                    implica aceitação automática das alterações.
                  </p>
                </div>
              </section>

              {/* 15. Lei Aplicável */}
              <section className="policy-section" id="lei">
                <span className="policy-section__number">15</span>
                <h2 className="policy-section__title">Lei Aplicável e Foro</h2>
                <div className="policy-section__body">
                  <p>
                    Estes Termos são regidos e interpretados de acordo com as leis da
                    <strong> República Federativa do Brasil</strong>. Eventuais conflitos serão submetidos
                    ao foro da comarca do domicílio do Usuário, salvo disposição legal em contrário.
                  </p>
                  <p>
                    Dúvidas ou questões sobre estes Termos? Entre em contato:{' '}
                    <a href="mailto:suporte@fitometria.com.br">suporte@fitometria.com.br</a>
                  </p>
                </div>
              </section>

              {/* Rodapé */}
              <div className="policy-footer-note">
                <p>
                  Estes Termos de Uso estão em conformidade com o <strong>Código de Defesa do Consumidor
                  (Lei nº 8.078/1990)</strong> e a <strong>LGPD (Lei nº 13.709/2018)</strong>.
                  Última atualização: 17 de março de 2026.{' '}
                  Leia também nossa{' '}
                  <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
                </p>
              </div>

              <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
                <ArrowUpIcon aria-hidden="true" />
                Voltar ao topo
              </button>

              <div style={{ marginTop: 'var(--space-4)' }}>
                <Link to="/" className="btn btn-secondary btn-sm">
                  ← Voltar para o início
                </Link>
              </div>

            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
