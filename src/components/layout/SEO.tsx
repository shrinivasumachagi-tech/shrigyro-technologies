import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND_ASSETS } from '@/constants/branding';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ShriGyro Technologies',
  description = 'ShriGyro Technologies provides AI automation, embedded systems, IoT solutions, web development, industrial automation, cloud services, and intelligent digital solutions for startups, businesses, and industries.',
  keywords = 'ShriGyro Technologies, AI automation, embedded systems, IoT solutions, web development, industrial automation, cloud services, robotics, ERP solutions, WhatsApp automation',
  image = 'https://shrigyro.com/logo/shrigyro-globe.png',
  url = "https://shrigyro.com",
  type = "website"
}) => {
  const siteTitle = title.includes('ShriGyro Technologies') ? title : `${title} | ShriGyro Technologies`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/png" href={BRAND_ASSETS.globe} />
      <link rel="apple-touch-icon" href={BRAND_ASSETS.globe} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
