# CLAUDE.md

Guía de contexto para trabajar en este repositorio con Claude Code.

## Qué es este proyecto

Portfolio personal de Óscar Medina Amat (Desarrollador Web Full Stack / Ingeniero Multimedia). SPA en React, desplegada en Vercel, con repositorio en GitHub (`OscarMA10/Portfolio`).

- **Producción**: https://oscar-medina-amat.vercel.app
- **Stack**: React 18 + TypeScript + Vite 6, Tailwind CSS 3, shadcn/ui + Radix UI, React Router 7, react-helmet-async (SEO).
- **Despliegue**: Vercel, auto-deploy en cada push a `main` (proyecto `portfolio`, team `oscarma10-proyectos`). No hay variables de entorno ni backend: sitio 100% estático.
- **Node**: 22.x (local y en Vercel).

## Comandos

```bash
npm run dev      # servidor de desarrollo (puerto 8080)
npm run build    # build de producción a dist/
npm run lint     # ESLint
npm run preview  # sirve el build de producción en local
```

Para previsualizar con el Browser pane de Claude Code: `.claude/launch.json` ya tiene configurado `portfolio-dev` (`npm run dev`, puerto 8080).

## Arquitectura y convenciones clave

- **Contenido bilingüe (ES/EN)**: todo el texto vive en `src/contexts/I18nContext.tsx` (diccionario `translations`, clave `TranslationKey` exportado) o en objetos `LocalizedString = { es, en }` dentro de `src/data/experiences.ts` y `src/data/projects.ts`. No hardcodear texto visible sin pasar por `t()` o `[language]`.
- **Tema claro/oscuro**: contexto propio en `src/contexts/ThemeContext.tsx` (NO se usa la librería `next-themes`, se quitó por no usarse). Clase `.dark` en `<html>`, variables CSS en `src/index.css`.
- **Componentes shadcn/ui** (`src/components/ui/*`): scaffold completo de shadcn, pero **solo se usan `Card`, `Button` y `Badge`** en la app real. El resto de componentes (`dialog`, `calendar`, `chart`, `sidebar`, etc.) están sin usar — se dejan tal cual por si se necesitan en el futuro (consistentes con `components.json`), pero no añaden peso al bundle porque Vite los excluye al no importarse. Si vas a usar uno nuevo, revisa antes si de verdad hace falta.
- **SEO**: `src/components/SEO.tsx` (react-helmet-async, dinámico según ruta/idioma) + meta tags estáticas y JSON-LD (`schema.org/Person`) en `index.html` (para lectura por crawlers que no ejecutan JS).
- **Cabeceras de seguridad**: definidas en `vercel.json` (CSP, X-Frame-Options, etc.). Si añades un recurso externo nuevo (fuente, script, API), actualiza la CSP o se bloqueará en producción.
- **CV descargable**: `public/Oscar_Medina_Amat_CV.pdf`, enlazado desde el botón "Descargar CV" del Hero. Actualizar este PDF directamente para reflejar el CV vigente.
- **Datos de experiencia/proyectos**: `src/data/experiences.ts` y `src/data/projects.ts`. Añadir una entrada nueva ahí basta para que aparezca en la web (ES/EN incluido).

## Flujo de trabajo esperado

- Antes de dar cambios por buenos: `npm run build` + `npm run lint` limpios, y verificación visual en el Browser pane (ES/EN, claro/oscuro, desktop/móvil como mínimo).
- Antes de cambios de dependencias que toquen versiones mayores: `npm audit` para saber qué se está cerrando, y probar build/lint/navegación después.
- Los pushes a `main` disparan deploy automático en Vercel; comprobar con `list_deployments`/`get_deployment` (MCP de Vercel) que el deploy queda `READY` y no `ERROR` antes de dar la tarea por terminada.

## Registro de cambios

**Instrucción permanente**: al final de una sesión de trabajo en la que se hayan hecho cambios en el proyecto, añade aquí un resumen fechado (grupo de bullets, sin detalle de cada commit) antes de cerrar la sesión. Mantén las entradas breves — el detalle exacto ya está en `git log`.

### 2026-09-22

- **Contenido**: nueva experiencia laboral "Anuubis Solutions" (Feb–Jul 2026) en Formación y Experiencia; CV descargable actualizado a la versión vigente.
- **Seguridad**: cabeceras de seguridad añadidas vía `vercel.json` (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy); dependencias actualizadas y `npm audit` a 0 vulnerabilidades (incluye Vite 5→6 y react-router-dom 6→7).
- **SEO**: `og-image` pasada de SVG a PNG (SVG no lo soportan bien Facebook/LinkedIn/X); bug corregido en `SEO.tsx` donde el fallback de imagen OG nunca se renderizaba; JSON-LD `schema.org/Person` añadido en `index.html`; `og:locale` dinámico según idioma; `sitemap.xml` con `lastmod`/`changefreq`; fuente Google Fonts precargada (`preconnect` + `<link>`) en vez de `@import` bloqueante en CSS.
- **Calidad de código**: eliminados `QueryClientProvider`, `TooltipProvider`, `Toaster`/`Sonner` de `App.tsx` (no los usaba ningún componente) junto con sus dependencias (`@tanstack/react-query`, `next-themes`, `sonner`) — bundle JS de producción reducido un 32% (418 KB → 285 KB); corregido bug de accesibilidad en `Projects.tsx` (el `alt` de las imágenes renderizaba `[object Object]`); corregido `aria-label` que decía "en GitHub" fijo en español independientemente del idioma; quitado texto justificado en "Sobre Mí" (generaba espaciados irregulares en móvil); 0 errores de ESLint (antes 6).
- **Otros**: enlace de LinkedIn corregido (sin tilde, `oscar-medina-amat`) en la web y en el perfil de GitHub; Vercel Web Analytics instalado y activado.
- **Repos de GitHub**: revisados — los 3 públicos (`Portfolio`, `TFG`, `OrdenaPlus`) son correctos como públicos porque la propia web los enlaza; cualquier repo futuro con código de cliente/empresa debería quedar privado.
