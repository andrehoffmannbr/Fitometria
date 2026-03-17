// Navbar.jsx — Barra de navegação fixa com scroll-aware styling,
// dark/light mode toggle e menu mobile responsivo.

import { useState, useEffect } from 'react';
import './Navbar.css';

// Ícone da folha (logo)
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C12 2 21 4.5 21 12C21 17.52 17.52 22 12 22Z"
      fill="rgba(255,255,255,0.2)"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M12 22C12 22 6 16 6 10C6 7 8.5 5 12 5C12 5 18 7.5 18 12"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M12 22L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const navLinks = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu ao clicar em um link
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Navegação principal">
        <div className="container">
          <div className="navbar__inner">
            {/* Logo */}
            <a href="#" className="navbar__logo" aria-label="Fitometria — Início">
              <div className="navbar__logo-icon">
                <LeafIcon />
              </div>
              <span className="navbar__logo-text">
                Fito<span>metria</span>
              </span>
            </a>

            {/* Nav links — desktop */}
            <nav className="navbar__nav">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="navbar__link">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="navbar__actions">
              {/* Botão dark/light mode */}
              <button
                className="theme-toggle"
                onClick={onToggleTheme}
                aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* CTA desktop */}
              <a href="#cta" className="btn btn-primary btn-sm navbar__cta">
                Testar grátis
              </a>

              {/* Hamburger mobile */}
              <button
                className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileOpen}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`navbar__mobile${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cta"
          className="btn btn-primary btn-lg navbar__mobile-cta"
          onClick={handleLinkClick}
        >
          🌱 Testar grátis por 7 dias
        </a>
      </div>
    </>
  );
}
