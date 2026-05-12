import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ServicesOverview from '@/components/home/ServicesOverview';
import FinalCTA from '@/components/home/FinalCTA';
import SEO from '@/components/layout/SEO';

const ServicesPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO title="Our Services | Intelligent Engineering Solutions" description="Discover our range of AI, IoT, ERP, and robotics services." />
      <section className="pt-20 pb-12 bg-gray-50 dark:bg-deep-navy">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="We deliver innovative prototype development, learning solutions, and cutting-edge software engineering across AI, embedded systems, automation, and modern web technologies."
          />
        </Container>
      </section>
      
      {/* Reusing the ServicesOverview component for now, but could be expanded */}
      <ServicesOverview />
      
      <section className="py-24 bg-white dark:bg-deep-navy/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-sora mb-6 text-gray-900 dark:text-white">Our Development Approach</h2>
              <p className="text-gray-600 dark:text-silver-gray mb-8 font-inter">
                We follow a clear, collaborative process to transform your ideas into working solutions. Our approach emphasizes learning, innovation, and technical excellence at every stage.
              </p>
              <ul className="space-y-4">
                {['Understand Your Vision', 'Plan & Design', 'Build & Iterate', 'Test & Refine'].map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-electric-blue text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl border-electric-blue/20">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Engineering Process" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </AppLayout>
  );
};

export default ServicesPage;
