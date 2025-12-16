import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/contexts/I18nContext';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ title, description, image, url }: SEOProps) {
  const { language } = useI18n();

  const activeTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const activeDescription = description || siteConfig.description;
  const activeUrl = url || siteConfig.url;
  const activeImage = image || siteConfig.ogImage;

  return (
    <Helmet prioritizeSeoTags>
      <title>{activeTitle}</title>
      <meta name="description" content={activeDescription} />
      <html lang={language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={activeUrl} />
      <meta property="og:title" content={activeTitle} />
      <meta property="og:description" content={activeDescription} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={activeUrl} />
      <meta property="twitter:title" content={activeTitle} />
      <meta property="twitter:description" content={activeDescription} />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
}
