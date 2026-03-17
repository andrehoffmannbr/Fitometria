// Footer.jsx — Rodapé com logo, links e copyright.

import { Link } from 'react-router-dom';
import './Footer.css';

const LeafIcon = () => (
  <span style={{ fontSize: '1.2rem' }}>🌿</span>
);

const footerLinks = {
  Produto: [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Preços', href: '#precos' },
    { label: 'Demonstração', href: '#demo' },
  ],
  Suporte: [
    { label: 'Central de Ajuda', href: '#' },
    { label: 'Contato', href: 'mailto:suporte@fitometria.app' },
    { label: 'Status do Sistema', href: '#' },
    { label: 'Comunidade', href: '#' },
  ],
  Legal: [
    { label: 'Termos de Uso', href: '/termos-de-uso' },
    { label: 'Privacidade', href: '/politica-de-privacidade' },
    { label: 'Cookies', href: '#' },
  ],
};

// Renderiza como Link (react-router) para rotas internas, ou <a> para externas/âncoras
function FooterLink({ href, label }) {
  if (href.startsWith('/')) {
    return <Link to={href} className="footer__link">{label}</Link>;
  }
  return <a href={href} className="footer__link">{label}</a>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          {/* Coluna brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo" aria-label="Fitometria — Início">
              <div className="footer__logo-icon">
                <LeafIcon />
              </div>
              <span className="footer__logo-text">
                Fito<span>metria</span>
              </span>
            </a>

            <p className="footer__brand-desc">
              Controle inteligente de cultivo indoor. Registre, acompanhe e otimize cada fase com precisão.
            </p>

            <a href="#cta" className="btn btn-primary btn-sm footer__cta-mini">
              Testar grátis 7 dias
            </a>
          </div>

          {/* Colunas de links */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h3 className="footer__col-title">{col}</h3>
              <nav className="footer__links" aria-label={`Links de ${col}`}>
                {links.map((link) => (
                  <FooterLink key={link.label} href={link.href} label={link.label} />
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} <a href="#">Fitometria</a>. Todos os direitos reservados. Cultivando com dados. 🌱
          </p>
          <div className="footer__badge">
            <span>⚡</span> Feito para cultivadores sérios
          </div>
        </div>
      </div>
    </footer>
  );
}
