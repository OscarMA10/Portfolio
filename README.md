# Portfolio - Óscar Medina Amat

Single Page Application (SPA) creada con React + Vite y Tailwind CSS. Incluye dark/light mode, i18n (ES/EN), animaciones “scroll reveal”, secciones dinámicas (proyectos y formación/experiencia) y SEO básico listo para despliegue en Vercel.

## Características

- SPA con React 18 + Vite 5
- Estilos con Tailwind CSS y componentes UI (shadcn/ui + Radix)
- Dark/Light mode con toggle y persistencia
- Internacionalización (ES/EN) con contexto propio y persistencia
- Animaciones suaves (scroll reveal con IntersectionObserver)
- Datos dinámicos de proyectos y formación/experiencia en `src/data/*`
- Accesibilidad: focus visible, `aria-label` en acciones clave
- SEO básico: meta-etiquetas, Open Graph/Twitter, `robots.txt` y `sitemap.xml`

## Tech Stack

- React 18, React Router
- TypeScript
- Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons
- Vite (build dev/prod)
- TanStack Query (para futuros datos remotos)

## Estructura del proyecto

```text
src/
  assets/                 # Imágenes y estáticos internos
  components/             # Componentes de la UI y secciones
  contexts/               # Contextos (Theme, I18n)
  data/                   # Datos dinámicos (projects, experiences)
  hooks/                  # Hooks (scroll reveal, etc.)
  lib/                    # Utilidades
  pages/                  # Rutas (Index, NotFound)
  main.tsx, App.tsx       # Entrada y layout principal
public/
  favicon.ico, og-image.svg, robots.txt, sitemap.xml, Oscar_Medina_Amat_CV.pdf
```

## Requisitos

- Node.js 18+

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrir: `http://localhost:8080`

## Scripts

- `npm run dev`: entorno de desarrollo (Vite)
- `npm run build`: build producción (dist/)
- `npm run preview`: previsualizar build
- `npm run lint`: ejecutar ESLint

## Despliegue (Vercel)

1) Importa el repositorio en Vercel.
2) Build Command: `vite build` - Output: `dist`.
3) La app es SPA, Vercel sirve `index.html` por defecto (fallback ok).
4) Dominios y SEO: actualiza si cambias dominio los campos en:
   - `index.html` → `<link rel="canonical">`, `og:url`.
   - `public/robots.txt` → `Sitemap:`.
   - `public/sitemap.xml` → `<loc>`.

## Internacionalización (ES/EN)

- Contexto: `src/contexts/I18nContext.tsx` expone `language`, `toggleLanguage`, `t(key)`.
- Toggle: `LanguageToggle` en el header.
- Textos:
  - Estáticos: via `t('...')` en componentes.
  - Datos (proyectos/experiencias): campos `{ es, en }` y render con `language`.
- Añadir nuevas traducciones: agrega claves en `I18nContext.tsx` o añade pares `{ es, en }` en los datos.

## Modo oscuro/claro

- Contexto: `ThemeContext.tsx` con `theme`, `toggleTheme`, persistencia y clase `dark` en `<html>`.
- Toggle: `ThemeToggle` en el header.

## Animaciones (scroll reveal)

- Clases: `reveal`, `reveal-delay-1`, `reveal-delay-2` + `.show` al intersectar.
- Hook: `useRevealOnScroll` inicializado en `App`.
- Respeta `prefers-reduced-motion` (desactiva animaciones para accesibilidad).

## Accesibilidad

- Botones con `aria-label` (código/demo de proyectos, scroll-to-top)
- Focus visible con utilidades de Tailwind + tokens de color

## SEO

- Meta SEO y Open Graph/Twitter en `index.html`
- `public/og-image.svg` para tarjetas sociales
- `robots.txt` y `sitemap.xml` listos

## Personalización rápida

- Nombre y rol: `Footer.tsx` y `Hero.tsx`
- Enlaces sociales: `Footer.tsx`
- Proyectos: `src/data/projects.ts`
- Formación/Experiencia: `src/data/experiences.ts`
- Paleta/tema: tokens en `src/index.css` y `tailwind.config.ts`

## Licencia

Uso personal. Adapta libremente este proyecto para tu portfolio.
