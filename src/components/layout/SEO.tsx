import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "ShriGyro Technologies | Intelligent Automation & Engineering",
  description = "Bridging Hardware, Software & Intelligent Automation. ShriGyro Technologies offers AI solutions, ERP systems, embedded robotics, and IoT engineering.",
  keywords = "AI, Automation, ERP, Embedded Systems, Robotics, IoT, ShriGyro, Engineering, Software Development",
  image = "https://shrigyro.com/og-image.jpg", // Placeholder
  url = "https://shrigyro.com",
  type = "website"
}) => {
  const siteTitle = title.includes("ShriGyro") ? title : `${title} | ShriGyro Technologies`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

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
