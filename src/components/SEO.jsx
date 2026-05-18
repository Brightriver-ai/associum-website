import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ 
  title, 
  description, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogImageAlt, 
  ogUrl = 'https://www.associum.ai', 
  ogType = 'website',
  ogSiteName = 'Associum',
  canonical
}) {
  const siteUrl = 'https://www.associum.ai';
  const fullOgImage = ogImage?.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const fullCanonical = canonical?.startsWith('http') ? canonical : `${siteUrl}${canonical || ''}`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      <meta property="og:site_name" content={ogSiteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
}
