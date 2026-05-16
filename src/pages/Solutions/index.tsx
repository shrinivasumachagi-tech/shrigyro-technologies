import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FinalCTA from '@/components/home/FinalCTA';
import SEO from '@/components/layout/SEO';
import DomainMarquee from '@/components/DomainMarquee';
import { SITE_URL } from '@/constants/seo';

const SolutionsPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO title="Solutions | Smart Digital Systems | ShriGyro Technologies" url={`${SITE_URL}/solutions`} />
      <section className="pt-20 pb-12 bg-gray-50 dark:bg-deep-navy">
        <Container>
          <SectionHeading
            title="Solutions & Expertise Areas"
            subtitle="We develop innovative solutions and learning platforms across multiple domains, from academic projects to advanced technology prototypes."
            level={1}
          />
        </Container>
      </section>

      <DomainMarquee />

      <FinalCTA />
    </AppLayout>
  );
};

export default SolutionsPage;
