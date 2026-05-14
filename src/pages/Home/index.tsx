// src/pages/Home/index.tsx
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Hero from '@/components/home/Hero';
import DomainMarquee from '@/components/DomainMarquee';
import ServicesOverview from '@/components/home/ServicesOverview';
import AcademicProjectSolutions from '@/components/home/AcademicProjectSolutions';
import ProjectDevelopmentFlow from '@/components/home/ProjectDevelopmentFlow';
import LabVIEWAutomation from '@/components/home/LabVIEWAutomation';
import TechMarquee from '@/components/home/TechMarquee';
import WhyShriGyro from '@/components/home/WhyShriGyro';
import PricingSection from '@/components/home/PricingSection';
import CostCalculator from '@/components/CostCalculator';
import FinalCTA from '@/components/home/FinalCTA';
import FloatingWhatsAppButton from '@/components/home/FloatingWhatsAppButton';
import SEO from '@/components/layout/SEO';

const HomePage: React.FC = () => (
  <AppLayout className="bg-white dark:bg-neutral-950 transition-colors duration-500">
    <SEO title="Bridging Hardware, Software & Intelligent Solutions" />
    <Hero />
    <DomainMarquee />
    <ServicesOverview />
    <AcademicProjectSolutions />
    <ProjectDevelopmentFlow />
    <LabVIEWAutomation />
    <TechMarquee />
    <PricingSection />
    <CostCalculator />
    <WhyShriGyro />
    <FinalCTA />
    <FloatingWhatsAppButton />
  </AppLayout>
);

export default HomePage;
