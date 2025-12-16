# Portfolio - Óscar Medina Amat

Single Page Application (SPA) profesional creada con React 18, Vite y Tailwind CSS. Diseñada para ser rápida, accesible y fácil de mantener.

## Características Principales

- **Rendimiento**: Carga rápida con imágenes WebP y Vite.
- **Diseño Moderno**: UI limpia con `shadcn/ui`, modo claro/oscuro persistente y animaciones "Scroll Reveal".
- **Configuración Centralizada**: Gestión sencilla de datos globales en `src/config/site.ts`.
- **SEO Optimizado**:
  - Títulos dinámicos con `react-helmet-async`.
  - Sitemap (`sitemap.xml`) y `robots.txt` incluidos.
  - Etiquetas OpenGraph y Twitter Cards para redes sociales.
- **Internacionalización**: Soporte completo ES/EN con persistencia.
- **Adaptabilidad**: Diseño 100% Responsive. Soporte especial para capturas de apps móviles verticales.

## Stack Tecnológico

- **Core**: React 18 + TypeScript + Vite
- **Estilos**: Tailwind CSS 3
- **UI Components**: shadcn/ui + Radix UI + Lucide Icons
- **Iconos Tech**: React Icons (SiIcons) + SVG Híbridos
- **SEO**: React Helmet Async
- **Deploy**: Optimizado para Vercel/Netlify

## Estructura del Proyecto

```text
public/
├── favicon.ico
├── og-image.svg
├── Oscar_Medina_Amat_CV.pdf
├── robots.txt
└── sitemap.xml
src/
├── assets/             # Imágenes optimizadas (.webp)
├── components/         # Bloques de UI (Header, Hero, Projects...)
├── config/             # Configuración Global (site.ts)
├── contexts/           # Lógica global (Theme, I18n)
├── data/               # Datos de contenido (projects, experience)
├── hooks/              # Hooks personalizados
├── pages/              # Rutas principales
└── App.tsx             # Layout y Providers
```

## Puesta en Marcha

1. **Instalar dependencias**:
   ```bash
   npm install
   ```
2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
3. **Construir para producción**:
   ```bash
   npm run build
   ```

## Guía de Personalización

### 1. Datos Generales

Edita `src/config/site.ts` para cambiar instantáneamente:

- Nombre y Título
- Enlaces a Redes Sociales (LinkedIn, GitHub, Email)
- Items del Menú de Navegación

### 2. Proyectos

Edita `src/data/projects.ts`.

- **Imágenes**: Usa formato `.webp` para mejor rendimiento.
- **Apps Móviles**: Si tu proyecto es una app vertical, añade la propiedad `isMobile: true` para activar el diseño especial de visualización.

### 3. SEO

El componente `<SEO/>` gestiona automáticamente los metadatos.

- Para cambiar la imagen por defecto al compartir en redes, reemplaza `public/og-image.svg`.

## Licencia

Uso personal. Siéntete libre de usar este código como base para tu propio portfolio.
