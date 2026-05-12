import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import WhyShriGyro from '@/components/home/WhyShriGyro';
import FinalCTA from '@/components/home/FinalCTA';
import SEO from '@/components/layout/SEO';
import AnimatedStats from '@/components/ui/AnimatedStats';
import GradientOrbs from '@/components/ui/GradientOrbs';

const AboutPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO title="About Us | Vision & Mission" description="Meet the team bridging the gap between engineering and intelligent software." />
      <section className="pt-20 pb-12 bg-gray-50 dark:bg-deep-navy">
        <Container>
          <SectionHeading
            title="About ShriGyro"
            subtitle="Engineering the future through intelligent automation and innovative digital solutions."
          />
        </Container>
      </section>

      <WhyShriGyro />

      <section className="py-24 bg-white dark:bg-deep-navy/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-sora text-gray-900 dark:text-white mb-8">About ShriGyro Technologies</h2>
            <p className="text-gray-600 dark:text-silver-gray font-inter leading-relaxed mb-12">
              ShriGyro Technologies is an emerging, innovation-driven engineering startup specializing in AI, embedded systems, automation research, and intelligent software solutions. We focus on building advanced prototype systems and learning-oriented solutions that bridge hardware and software innovation for the future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="glass p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-electric-blue mb-4 uppercase tracking-wider text-sm">Vision</h3>
                <p className="text-gray-600 dark:text-silver-gray font-inter leading-relaxed">
                  To become a leading innovation studio for intelligent automation, AI-powered systems, and embedded technology solutions that empower engineers and businesses to build the future.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-cyan mb-4 uppercase tracking-wider text-sm">Mission</h3>
                <p className="text-gray-600 dark:text-silver-gray font-inter leading-relaxed">
                  To deliver innovative prototype systems, educational solutions, and cutting-edge automation research while fostering learning, experimentation, and technical excellence in every project.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-deep-navy">
        <Container>
          <AnimatedStats
            stats={[
              { label: 'Projects Delivered', value: '10+' },
              { label: 'Tech Stack', value: '15+' },
              { label: 'Focus Areas', value: '5' },
              { label: 'Team Passion', value: '100%' },
            ]}
          />
        </Container>
      </section>

      <GradientOrbs />

      <FinalCTA />
    </AppLayout>
  );
};

export default AboutPage;
