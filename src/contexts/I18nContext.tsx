import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'es' | 'en';

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Sobre Mí', en: 'About' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.experience': { es: 'Formación y Experiencia', en: 'Education & Experience' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },

  'hero.titlePrefix': { es: 'Hola, soy', en: "Hi, I'm" },
  'hero.role': { es: 'Desarrollador Web Full Stack', en: 'Full‑Stack Web Developer' },
  'hero.degree': { es: 'Graduado en Ingeniería Multimedia en la Universidad de Alicante', en: 'Graduated in Multimedia Engineering at the University of Alicante' },
  'hero.viewProjects': { es: 'Ver mis Proyectos', en: 'View Projects' },
  'hero.downloadCV': { es: 'Descargar CV', en: 'Download CV' },

  'about.title': { es: 'Sobre Mí', en: 'About Me' },
  'about.skills': { es: 'Habilidades Técnicas', en: 'Technical Skills' },
  'about.p1': {
    es: 'Ingeniero multimedia con experiencia en desarrollo web y móvil, apasionado por la tecnología y el aprendizaje continuo de tecnologías modernas. Capacidad de trabajo en equipo, adaptación a nuevos entornos y resolución de problemas técnicos.',
    en: 'Multimedia engineer with experience in web and mobile development, passionate about technology and continuous learning of modern stacks. Strong teamwork, adaptability to new environments, and technical problem‑solving skills.',
  },
  'about.p2': {
    es: 'Mi formación en Ingeniería Multimedia me ha proporcionado una base sólida en múltiples disciplinas tecnológicas, permitiéndome abordar proyectos desde diferentes perspectivas y encontrar soluciones innovadoras a desafíos complejos.',
    en: 'My degree in Multimedia Engineering provided me with a solid foundation across multiple technological disciplines, enabling me to tackle projects from different angles and find innovative solutions to complex challenges.',
  },
  'skills.level.advanced': { es: 'Avanzado', en: 'Advanced' },
  'skills.level.intermediate': { es: 'Intermedio', en: 'Intermediate' },
  'skills.level.basic': { es: 'Básico', en: 'Basic' },

  'projects.title': { es: 'Proyectos', en: 'Projects' },
  'projects.code': { es: 'Código', en: 'Code' },
  'projects.demo': { es: 'Demo', en: 'Demo' },
  'projects.ariaCode': { es: 'Ver código del proyecto', en: 'View project code' },
  'projects.ariaDemo': { es: 'Abrir demo del proyecto', en: 'Open project demo' },

  'experience.title': { es: 'Formación y Experiencia', en: 'Education & Experience' },

  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.lead': { es: '¿Te interesa mi perfil? ¡No dudes en contactarme!', en: "Interested in my profile? Feel free to reach out!" },
  'contact.cta': { es: 'Contactar →', en: 'Get in Touch →' },

  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  'footer.backTop': { es: 'Volver Arriba', en: 'Back to Top' },
  'footer.role': { es: 'Desarrollador Web Full Stack', en: 'Full-Stack Web Developer' },

  'notfound.title': { es: '404', en: '404' },
  'notfound.message': { es: 'Oops! Página no encontrada', en: 'Oops! Page not found' },
  'notfound.back': { es: 'Volver al Inicio', en: 'Back to Home' },
};

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio-language') as Language | null;
    return stored || 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    // Opcional: actualizar el atributo lang del html
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = useMemo(() => {
    return (key: keyof typeof translations) => translations[key][language];
  }, [language]);

  const value = useMemo<I18nContextValue>(() => ({ language, setLanguage, toggleLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}


