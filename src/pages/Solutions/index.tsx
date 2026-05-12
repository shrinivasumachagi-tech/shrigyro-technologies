import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FinalCTA from '@/components/home/FinalCTA';
import SEO from '@/components/layout/SEO';

const SolutionsPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO title="Solutions | Innovation-Driven Development" description="Prototype development, learning solutions, and research platforms across multiple domains." />
      <section className="pt-20 pb-12 bg-gray-50 dark:bg-deep-navy">
        <Container>
          <SectionHeading
            title="Solutions & Expertise Areas"
            subtitle="We develop innovative solutions and learning platforms across multiple domains, from academic projects to advanced technology prototypes."
          />
        </Container>
      </section>

      <section className="py-24 bg-white dark:bg-deep-navy/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-sora text-gray-900 dark:text-white mb-4">Our Focus Areas</h2>
            <p className="text-gray-600 dark:text-silver-gray max-w-2xl mx-auto">
              We bring technical innovation and creative problem-solving across multiple domains and project types.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Education', 'Prototyping', 'Embedded', 'AI/ML', 'Automation', 'IoT'].map((industry) => (
              <div key={industry} className="p-6 rounded-2xl glass text-center hover:border-electric-blue/50 transition-colors">
                <span className="font-bold text-gray-800 dark:text-gray-200">{industry}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </AppLayout>
  );
};

export default SolutionsPage;
