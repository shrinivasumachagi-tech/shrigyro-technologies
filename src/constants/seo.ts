import { BRAND_ASSETS } from './branding';

export const SITE_URL = 'https://shrigyro.com';

export const SEO_TITLE =
  'ShriGyro Technologies | AI Automation, Embedded Systems & Smart Digital Solutions';

export const SEO_DESCRIPTION =
  'ShriGyro Technologies provides AI automation, embedded systems, IoT solutions, web development, cloud services, industrial automation, robotics, ERP systems, and intelligent digital solutions for startups, businesses, and industries.';

export const SEO_KEYWORDS = [
  'AI Automation',
  'Embedded Systems',
  'IoT Solutions',
  'Web Development',
  'Industrial Automation',
  'Cloud Services',
  'Robotics',
  'ERP Solutions',
  'WhatsApp Automation',
  'LabVIEW',
  'Software Development',
  'Smart Digital Solutions',
  'Technology Startup India',
].join(', ');

export const SEO_IMAGE = `${SITE_URL}${BRAND_ASSETS.globe512}`;

export const coreServices = [
  'AI Automation',
  'Embedded Systems',
  'IoT Solutions',
  'Web Development',
  'Cloud Services',
  'Industrial Automation',
  'Robotics',
  'ERP Solutions',
  'WhatsApp Automation',
  'LabVIEW Solutions',
] as const;

export const buildSchemaGraph = (url = SITE_URL) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'ShriGyro Technologies',
      url: SITE_URL,
      logo: SEO_IMAGE,
      image: SEO_IMAGE,
      description: SEO_DESCRIPTION,
      sameAs: ['https://github.com/ShrinivasRU'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-7411655519',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Kannada', 'Hindi'],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'ShriGyro Technologies',
      url: SITE_URL,
      image: SEO_IMAGE,
      logo: SEO_IMAGE,
      telephone: '+91-7411655519',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      description: SEO_DESCRIPTION,
    },
    ...coreServices.map((service) => ({
      '@type': 'Service',
      '@id': `${SITE_URL}/services#${service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      name: service,
      serviceType: service,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'India',
      url: `${SITE_URL}/services`,
      description: `${service} services by ShriGyro Technologies for startups, businesses, industries, and academic innovation teams.`,
    })),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'ShriGyro Technologies',
      url: SITE_URL,
      description: SEO_DESCRIPTION,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/services?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: SEO_TITLE,
      description: SEO_DESCRIPTION,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en-IN',
    },
  ],
});
