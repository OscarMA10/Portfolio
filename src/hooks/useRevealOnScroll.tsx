import { useEffect } from "react";

/**
 * Observa elementos con clases `reveal`, `reveal-delay-1`, `reveal-delay-2` y
 * añade la clase `show` cuando entran en el viewport para disparar la animación.
 * Respeta `prefers-reduced-motion` desactivando el observer.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-delay-1, .reveal-delay-2"),
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("show");
            obs.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px", // dispara un poco antes
        threshold: 0.1,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}


