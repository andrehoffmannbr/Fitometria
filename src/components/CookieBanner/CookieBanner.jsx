// CookieBanner.jsx
// Banner LGPD simples. Aparece só na primeira visita.
// Salva "accepted" ou "declined" no localStorage.

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const STORAGE_KEY = 'fitometria-cookie-consent';

export default function CookieBanner() {
  // null = não decidiu ainda | 'accepted' | 'declined'
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding]   = useState(false);

  useEffect(() => {
    // Só exibe se o usuário ainda não escolheu
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Pequeno delay para não aparecer junto com o carregamento
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  // Animação de saída antes de desmontar
  const dismiss = (choice) => {
    localStorage.setItem(STORAGE_KEY, choice);
    setHiding(true);
    setTimeout(() => setVisible(false), 450);
  };

  if (!visible) return null;

  return (
    <div
      className={`cookie-banner${visible && !hiding ? ' is-visible' : ''}${hiding ? ' is-hiding' : ''}`}
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies e privacidade"
    >
      {/* Ícone */}
      <span className="cookie-banner__icon" aria-hidden="true">🍪</span>

      {/* Texto */}
      <div className="cookie-banner__text">
        <p className="cookie-banner__title">Cookies e Privacidade</p>
        <p className="cookie-banner__desc">
          Usamos cookies mínimos e anônimos para melhorar o app (Analytics e Crashlytics).
          Seus dados de cultivo ficam salvos só no seu dispositivo.{' '}
          <Link to="/politica-de-privacidade">Saiba mais</Link>.
        </p>
      </div>

      {/* Botões */}
      <div className="cookie-banner__actions">
        <button
          className="cookie-banner__btn cookie-banner__btn--decline"
          onClick={() => dismiss('declined')}
        >
          Recusar
        </button>
        <button
          className="cookie-banner__btn cookie-banner__btn--accept"
          onClick={() => dismiss('accepted')}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
