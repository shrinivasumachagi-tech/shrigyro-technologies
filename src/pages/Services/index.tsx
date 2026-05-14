import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ServicesOverview from '@/components/home/ServicesOverview';
import ServiceDetailSections from '@/components/services/ServiceDetailSections';
import FinalCTA from '@/components/home/FinalCTA';
import SEO from '@/components/layout/SEO';

const ServicesPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO title="Services | AI, Web, Embedded, IoT and Automation" description="Detailed ShriGyro Technologies services for AI automation, web development, embedded systems, IoT, ERP, robotics, WhatsApp automation, academic projects, cloud, PCB, and LabVIEW." />

      <section className="relative overflow-hidden bg-gray-50 pb-16 pt-24 dark:bg-deep-navy">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-electric-blue/10 blur-[90px]" />
        <Container className="relative z-10">
          <SectionHeading
            title="Services"
            subtitle="Explore our complete service ecosystem. Each section includes description, features, technologies, workflow, pricing estimate, cost calculator, benefits, FAQ, and a direct contact action."
          />
        </Container>
      </section>

      <ServicesOverview />
      <ServiceDetailSections />
      <FinalCTA />
    </AppLayout>
  );
};

export default ServicesPage;
