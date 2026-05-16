// src/pages/Home/index.tsx
import React, { lazy, Suspense } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import SEO from '@/components/layout/SEO';
import { SITE_URL } from '@/constants/seo';

const Hero = lazy(() => import('@/components/home/Hero'));
const DomainMarquee = lazy(() => import('@/components/DomainMarquee'));
const ServicesOverview = lazy(() => import('@/components/home/ServicesOverview'));
const AcademicProjectSolutions = lazy(() => import('@/components/home/AcademicProjectSolutions'));
const ProjectDevelopmentFlow = lazy(() => import('@/components/home/ProjectDevelopmentFlow'));
const LabVIEWAutomation = lazy(() => import('@/components/home/LabVIEWAutomation'));
const TechMarquee = lazy(() => import('@/components/home/TechMarquee'));
const WhyShriGyro = lazy(() => import('@/components/home/WhyShriGyro'));
const PricingSection = lazy(() => import('@/components/home/PricingSection'));
const CostCalculator = lazy(() => import('@/components/CostCalculator'));
const FinalCTA = lazy(() => import('@/components/home/FinalCTA'));
const FloatingWhatsAppButton = lazy(() => import('@/components/home/FloatingWhatsAppButton'));

const SectionFallback = ({ height = 'min-h-40' }: { height?: string }) => (
  <div className={`${height} bg-white dark:bg-deep-navy`} aria-hidden="true" />
);

const HomePage: React.FC = () => (
  <AppLayout className="bg-white dark:bg-neutral-950 transition-colors duration-500">
    <SEO url={SITE_URL} />
    <Suspense fallback={<SectionFallback height="min-h-[calc(100vh-5rem)]" />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <DomainMarquee />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <ServicesOverview />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <AcademicProjectSolutions />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <ProjectDevelopmentFlow />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <LabVIEWAutomation />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <TechMarquee />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <PricingSection />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <CostCalculator />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <WhyShriGyro />
    </Suspense>
    <Suspense fallback={<SectionFallback />}>
      <FinalCTA />
    </Suspense>
    <Suspense fallback={null}>
      <FloatingWhatsAppButton />
    </Suspense>
  </AppLayout>
);

export default HomePage;
