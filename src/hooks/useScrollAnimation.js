// useScrollAnimation.js
// Hook que usa IntersectionObserver para acionar animações conforme o scroll.
// Aplicar className "animate-on-scroll" nos elementos. O hook adicionará
// "is-visible" quando o elemento entrar na viewport.

import { useEffect } from 'react';

export function useScrollAnimation(rootMargin = '-60px 0px') {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Anima apenas uma vez
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);
}
