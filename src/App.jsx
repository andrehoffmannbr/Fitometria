// App.jsx — Roteamento principal da landing page Fitometria.
// Gerencia o tema (dark/light) e distribui para todas as rotas.

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Hooks
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Seções — landing page
import Navbar     from './components/Navbar/Navbar';
import Hero       from './components/Hero/Hero';
import Benefits   from './components/Benefits/Benefits';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features   from './components/Features/Features';
import FinalCTA   from './components/FinalCTA/FinalCTA';
import Footer     from './components/Footer/Footer';

// Páginas adicionais
import PoliticaPrivacidade from './pages/PoliticaPrivacidade/PoliticaPrivacidade';
import TermosDeUso         from './pages/TermosDeUso/TermosDeUso';

// Banner LGPD
import CookieBanner from './components/CookieBanner/CookieBanner';

// ---- Landing page completa ----
function LandingPage({ theme, onToggleTheme }) {
  useScrollAnimation();

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main id="main-content">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ---- App root ----
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('fitometria-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('fitometria-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<LandingPage theme={theme} onToggleTheme={toggleTheme} />}
        />
        <Route
          path="/politica-de-privacidade"
          element={<PoliticaPrivacidade theme={theme} onToggleTheme={toggleTheme} />}
        />
        <Route
          path="/termos-de-uso"
          element={<TermosDeUso theme={theme} onToggleTheme={toggleTheme} />}
        />
      </Routes>

      {/* Banner LGPD — aparece só na primeira visita, em todas as páginas */}
      <CookieBanner />
    </>
  );
}

export default App;
