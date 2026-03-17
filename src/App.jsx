// App.jsx — Landing page completa do Fitometria.
// Monta todas as seções e gerencia o estado de tema (dark/light).

import { useState, useEffect } from 'react';
import './App.css';

// Hooks
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Seções
import Navbar       from './components/Navbar/Navbar';
import Hero         from './components/Hero/Hero';
import Benefits     from './components/Benefits/Benefits';
import HowItWorks   from './components/HowItWorks/HowItWorks';
import Features     from './components/Features/Features';
import SocialProof  from './components/SocialProof/SocialProof';
import FinalCTA     from './components/FinalCTA/FinalCTA';
import FAQ          from './components/FAQ/FAQ';
import Footer       from './components/Footer/Footer';

function App() {
  // ---- Tema: dark (padrão) | light ----
  const [theme, setTheme] = useState(() => {
    // Recupera preferência salva ou usa dark como padrão
    return localStorage.getItem('fitometria-theme') || 'dark';
  });

  // Aplica o tema no <html> + persiste
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

  // ---- Inicializa animações de scroll ----
  useScrollAnimation();

  return (
    <div className="app">
      {/* Navbar fixa */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main content */}
      <main id="main-content">
        {/* 1. Hero — acima da dobra */}
        <Hero />

        {/* 2. Benefícios — scan rápido */}
        <Benefits />

        {/* 3. Como Funciona — 3 passos */}
        <HowItWorks />

        {/* 4. Features — detalhes das funcionalidades */}
        <Features />

        {/* 5. Prova Social — depoimentos e indicadores */}
        <SocialProof />

        {/* 6. CTA Final — conversão */}
        <FinalCTA />

        {/* 7. FAQ — dúvidas frequentes */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
