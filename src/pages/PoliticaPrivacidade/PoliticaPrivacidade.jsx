// PoliticaPrivacidade.jsx
// Página de Política de Privacidade — mesmo design system da landing page.
// Rota: /politica-de-privacidade

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar  from '../../components/Navbar/Navbar';
import Footer  from '../../components/Footer/Footer';
import './PoliticaPrivacidade.css';

// ---- SUMÁRIO ----
const sections = [
  { id: 'intro',          label: '1. Introdução' },
  { id: 'dados-locais',   label: '2. Dados Locais' },
  { id: 'dados-auto',     label: '3. Dados Automáticos' },
  { id: 'nao-coletamos',  label: '4. Não Coletamos' },
  { id: 'compartilhamento', label: '5. Compartilhamento' },
  { id: 'base-legal',     label: '6. Base Legal (LGPD)' },
  { id: 'seguranca',      label: '7. Segurança' },
  { id: 'retencao',       label: '8. Retenção e Exclusão' },
  { id: 'direitos',       label: '9. Seus Direitos' },
  { id: 'neutralidade',   label: '10. Neutralidade' },
  { id: 'alteracoes',     label: '11. Alterações' },
  { id: 'contato',        label: '12. Contato' },
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
export default function PoliticaPrivacidade({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('intro');
  const [readingProgress, setReadingProgress] = useState(0);
  const [tocMobileOpen, setTocMobileOpen] = useState(false);
  const contentRef = useRef(null);

  // Barra de progresso de leitura
  useEffect(() => {
    const onScroll = () => {
      const el   = document.documentElement;
      const top  = el.scrollTop || document.body.scrollTop;
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

  // Volta ao topo
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
          <div className="policy-hero__badge">📄 Documento Legal</div>

          <h1 className="policy-hero__title">Política de Privacidade</h1>

          <div className="policy-hero__meta">
            <span className="policy-hero__meta-item">
              <CalendarIcon aria-hidden="true" />
              Última atualização: 17 de março de 2026
            </span>
            <span className="policy-hero__meta-divider" aria-hidden="true" />
            <span className="policy-hero__meta-item">
              <ClockIcon aria-hidden="true" />
              Leitura estimada: 5 min
            </span>
          </div>
        </div>
      </header>

      {/* ---- CONTEÚDO ---- */}
      <div className="policy-layout">
        <div className="container">
          <div className="policy-layout__inner">

            {/* ---- SIDEBAR DESKTOP ---- */}
            <aside className="policy-toc" aria-label="Sumário da política">
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
                <span>📋 Ver sumário da política</span>
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

              {/* Seção 1 */}
              <section className="policy-section" id="intro">
                <span className="policy-section__number">1</span>
                <h2 className="policy-section__title">Introdução</h2>
                <div className="policy-section__body">
                  <p>
                    O aplicativo <strong>Fitometria</strong> ("nós", "nosso" ou "app") é uma ferramenta de controle
                    e registro pessoal de cultivos indoor e hidropônicos. Ele ajuda usuários a organizar ciclos de
                    cultivo, calcular parâmetros ambientais como Déficit de Pressão de Vapor (VPD) e registrar
                    rotinas diárias de forma simples e offline.
                  </p>
                  <p>
                    Estamos comprometidos em proteger sua privacidade. Esta Política de Privacidade explica quais
                    dados coletamos (ou não coletamos), como os tratamos e seus direitos, em conformidade com a{' '}
                    <strong>LGPD (Lei nº 13.709/2018)</strong> no Brasil e as políticas do Google Play.
                  </p>

                  <div className="policy-infobox">
                    <span className="policy-infobox__icon">🔒</span>
                    <p className="policy-infobox__text">
                      <strong>Resumo rápido:</strong> o Fitometria funciona majoritariamente offline.
                      Seus dados ficam salvos no seu dispositivo e não são compartilhados comercialmente.
                    </p>
                  </div>
                </div>
              </section>

              {/* Seção 2 */}
              <section className="policy-section" id="dados-locais">
                <span className="policy-section__number">2</span>
                <h2 className="policy-section__title">Dados armazenados localmente (sem envio para servidores)</h2>
                <div className="policy-section__body">
                  <p>
                    O Fitometria funciona <strong>majoritariamente offline</strong>. Praticamente todos os dados
                    que você insere ficam salvos <strong>exclusivamente no seu dispositivo</strong>:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Informações de ciclos de cultivo (fases, datas, plantas)</li>
                    <li>Registros diários (rega, nutrientes, EC/pH, altura, pragas, tratamentos)</li>
                    <li>Dados ambientais (temperatura, umidade, luz, CO₂)</li>
                    <li>Fotos tiradas dentro do app</li>
                    <li>Cálculos e histórico de VPD</li>
                  </ul>
                  <p>
                    Esses dados <strong>não são enviados</strong> para nós ou para terceiros de forma automática.
                    Eles só saem do dispositivo se você escolher exportar manualmente (ex.: PDF, CSV por e-mail
                    ou armazenamento em nuvem do seu celular).
                  </p>
                </div>
              </section>

              {/* Seção 3 */}
              <section className="policy-section" id="dados-auto">
                <span className="policy-section__number">3</span>
                <h2 className="policy-section__title">Dados coletados automaticamente (mínimos e anônimos)</h2>
                <div className="policy-section__body">
                  <p>
                    Podemos utilizar ferramentas do Google como <strong>Firebase Analytics</strong> e{' '}
                    <strong>Firebase Crashlytics</strong> para entender o uso geral do app e corrigir erros.
                    Os dados coletados são <strong>anônimos</strong> e incluem apenas:
                  </p>
                  <ul className="policy-list" role="list">
                    <li>Versão do aplicativo</li>
                    <li>Modelo e versão do dispositivo Android</li>
                    <li>Idioma e país aproximado (sem localização precisa)</li>
                    <li>Eventos de uso (ex.: abertura de tela, uso da calculadora VPD)</li>
                    <li>Relatórios de falhas (crashes), sem qualquer conteúdo pessoal</li>
                  </ul>
                  <p>
                    Esses dados <strong>não identificam você</strong> e são usados exclusivamente para melhorar o aplicativo.
                  </p>
                </div>
              </section>

              {/* Seção 4 */}
              <section className="policy-section" id="nao-coletamos">
                <span className="policy-section__number">4</span>
                <h2 className="policy-section__title">Dados que NÃO coletamos</h2>
                <div className="policy-section__body">
                  <ul className="policy-list policy-list--no" role="list">
                    <li>Localização precisa (GPS)</li>
                    <li>Contatos, microfone, câmera (exceto fotos voluntárias que ficam locais)</li>
                    <li>Histórico de navegação, SMS, calendário</li>
                    <li>Dados financeiros, de saúde ou biométricos</li>
                  </ul>
                </div>
              </section>

              {/* Seção 5 */}
              <section className="policy-section" id="compartilhamento">
                <span className="policy-section__number">5</span>
                <h2 className="policy-section__title">Compartilhamento de dados</h2>
                <div className="policy-section__body">
                  <p>
                    Não vendemos, alugamos, compartilhamos nem transferimos dados pessoais para terceiros
                    com fins comerciais.
                  </p>
                  <p>Os únicos casos de compartilhamento ocorrem:</p>
                  <ul className="policy-list" role="list">
                    <li>
                      Com prestadores de serviço essenciais (ex.: Google Firebase), que estão contratualmente
                      obrigados a proteger os dados e usá-los apenas para o serviço prestado
                    </li>
                    <li>Quando exigido por lei, ordem judicial ou autoridade competente</li>
                  </ul>
                </div>
              </section>

              {/* Seção 6 */}
              <section className="policy-section" id="base-legal">
                <span className="policy-section__number">6</span>
                <h2 className="policy-section__title">Base legal para o tratamento de dados (LGPD)</h2>
                <div className="policy-section__body">
                  <ul className="policy-list" role="list">
                    <li>Consentimento (quando aplicável, ex.: uso de analytics)</li>
                    <li>Legítimo interesse (melhoria do app via dados anônimos e correção de erros)</li>
                    <li>Execução de contrato (funcionamento do app conforme esperado pelo usuário)</li>
                  </ul>
                  <p>
                    Você pode revogar o consentimento a qualquer momento desativando as opções de analytics
                    nas configurações do app (quando disponível) ou desinstalando o aplicativo.
                  </p>
                </div>
              </section>

              {/* Seção 7 */}
              <section className="policy-section" id="seguranca">
                <span className="policy-section__number">7</span>
                <h2 className="policy-section__title">Segurança</h2>
                <div className="policy-section__body">
                  <p>
                    Os dados locais no dispositivo são protegidos pelas medidas de segurança nativas do Android
                    (criptografia em repouso, sandbox). Não mantemos banco de dados central com seus registros pessoais.
                  </p>
                </div>
              </section>

              {/* Seção 8 */}
              <section className="policy-section" id="retencao">
                <span className="policy-section__number">8</span>
                <h2 className="policy-section__title">Retenção e exclusão de dados</h2>
                <div className="policy-section__body">
                  <ul className="policy-list" role="list">
                    <li>
                      Dados locais: permanecem no dispositivo enquanto o app estiver instalado.
                      Ao desinstalar, são excluídos automaticamente.
                    </li>
                    <li>
                      Dados anônimos de analytics: retidos pelo Google por até 14–26 meses (padrão Firebase).
                      Você pode solicitar exclusão entrando em contato conosco.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Seção 9 */}
              <section className="policy-section" id="direitos">
                <span className="policy-section__number">9</span>
                <h2 className="policy-section__title">Seus direitos (LGPD)</h2>
                <div className="policy-section__body">
                  <p>Você tem direito a:</p>
                  <ul className="policy-list" role="list">
                    <li>Confirmar a existência de tratamento de dados</li>
                    <li>Acessar seus dados (exporte manualmente do app)</li>
                    <li>Corrigir dados inexatos</li>
                    <li>Anonimizar, bloquear ou eliminar dados desnecessários</li>
                    <li>Revogar consentimento</li>
                    <li>Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD)</li>
                  </ul>
                  <p>
                    Para exercer qualquer direito, envie e-mail para:{' '}
                    <a href="mailto:suporte@fitometria.app">suporte@fitometria.app</a>
                  </p>
                </div>
              </section>

              {/* Seção 10 */}
              <section className="policy-section" id="neutralidade">
                <span className="policy-section__number">10</span>
                <h2 className="policy-section__title">Neutralidade e responsabilidade do usuário</h2>
                <div className="policy-section__body">
                  <div className="policy-infobox policy-infobox--warning">
                    <span className="policy-infobox__icon">⚠️</span>
                    <p className="policy-infobox__text">
                      <strong>Importante:</strong> o Fitometria é uma ferramenta neutra de organização e
                      registro. Não promovemos, incentivamos nem fornecemos orientações sobre atividades ilegais.
                    </p>
                  </div>
                  <p>
                    O Fitometria é uma ferramenta neutra de organização e registro. Não promovemos,
                    incentivamos nem fornecemos orientações sobre atividades ilegais. O usuário é o único
                    responsável por garantir que seu uso do aplicativo esteja em conformidade com as leis do
                    seu país. Todo uso deve ser legal e responsável.
                  </p>
                </div>
              </section>

              {/* Seção 11 */}
              <section className="policy-section" id="alteracoes">
                <span className="policy-section__number">11</span>
                <h2 className="policy-section__title">Alterações nesta política</h2>
                <div className="policy-section__body">
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará
                    sempre disponível nesta página. Recomendamos verificar de tempos em tempos. A continuidade
                    no uso do app após alterações implica aceitação.
                  </p>
                </div>
              </section>

              {/* Seção 12 */}
              <section className="policy-section" id="contato">
                <span className="policy-section__number">12</span>
                <h2 className="policy-section__title">Contato</h2>
                <div className="policy-section__body">
                  <p>
                    Dúvidas sobre esta Política de Privacidade?<br />
                    E-mail: <a href="mailto:suporte@fitometria.app">suporte@fitometria.app</a><br />
                    Desenvolvedor: Fitometria
                  </p>
                  <p>Obrigado por usar o Fitometria de forma responsável.</p>
                </div>
              </section>

              {/* Rodapé da política */}
              <div className="policy-footer-note">
                <p>
                  Este documento está em conformidade com a{' '}
                  <strong>LGPD (Lei nº 13.709/2018)</strong> e as políticas do Google Play.
                  Última atualização: 17 de março de 2026.
                </p>
              </div>

              {/* Voltar ao início */}
              <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
                <ArrowUpIcon aria-hidden="true" />
                Voltar ao topo
              </button>

              {/* Link de volta */}
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
