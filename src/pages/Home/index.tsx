// src/pages/Home/index.tsx
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import AcademicProjectSolutions from '@/components/home/AcademicProjectSolutions';
import ProjectDevelopmentFlow from '@/components/home/ProjectDevelopmentFlow';
import LabVIEWAutomation from '@/components/home/LabVIEWAutomation';
import TechMarquee from '@/components/home/TechMarquee';
import WhyShriGyro from '@/components/home/WhyShriGyro';
import PricingSection from '@/components/home/PricingSection';
import FinalCTA from '@/components/home/FinalCTA';
import FloatingWhatsAppButton from '@/components/home/FloatingWhatsAppButton';
import SEO from '@/components/layout/SEO';

const HomePage: React.FC = () => (
  <AppLayout>
    <SEO title="Bridging Hardware, Software & Intelligent Solutions" />
    <Hero />
    <ServicesOverview />
    <AcademicProjectSolutions />
    <ProjectDevelopmentFlow />
    <LabVIEWAutomation />
    <TechMarquee />
    <WhyShriGyro />
    <PricingSection />
    <FinalCTA />
    <FloatingWhatsAppButton />
  </AppLayout>
);

export default HomePage;
