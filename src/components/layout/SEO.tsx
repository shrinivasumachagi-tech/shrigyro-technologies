import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND_ASSETS } from '@/constants/branding';
import {
  SEO_DESCRIPTION,
  SEO_IMAGE,
  SEO_KEYWORDS,
  SEO_TITLE,
  SITE_URL,
  buildSchemaGraph,
} from '@/constants/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = SEO_TITLE,
  description = SEO_DESCRIPTION,
  keywords = SEO_KEYWORDS,
  image = SEO_IMAGE,
  url = SITE_URL,
  type = 'website'
}) => {
  const siteTitle = title;
  const canonicalUrl = url;
  const schema = buildSchemaGraph(canonicalUrl);

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="ShriGyro Technologies" />
      <meta name="theme-color" content="#2563eb" />
      <link rel="icon" type="image/png" href={BRAND_ASSETS.globe192} />
      <link rel="apple-touch-icon" href={BRAND_ASSETS.globe192} />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="ShriGyro Technologies" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="ShriGyro Technologies logo" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="ShriGyro Technologies logo" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
