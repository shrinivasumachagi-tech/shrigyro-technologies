import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Basic Package',
    price: '₹5,000 - ₹8,000',
    desc: 'Ideal for foundational engineering projects, minor semester submissions, and core skill building without compromising on code quality.',
    features: [
      'Mini Projects',
      'Basic Web Applications',
      'Simple IoT Projects',
      'Source Code Included',
      'Basic Documentation'
    ],
    color: 'border-blue-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    btnVariant: 'secondary' as const,
  },
  {
    name: 'Standard Package',
    price: '₹10,000 - ₹18,000',
    desc: 'Comprehensive end-to-end solutions designed for major final-year projects and modern software requirements with full reporting.',
    features: [
      'Full Stack Applications',
      'ERP Systems',
      'AI Chatbots',
      'Smart Automation Projects',
      'Complete Project Report'
    ],
    highlight: true,
    color: 'border-electric-blue',
    glow: 'shadow-[0_0_40px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_60px_rgba(0,240,255,0.3)]',
    btnVariant: 'gradient' as const,
  },
  {
    name: 'Advanced Package',
    price: '₹20k - ₹35k+',
    desc: 'Complex hardware-software integration tailored for rigorous industrial use cases, advanced academic research, and deep tech prototypes.',
    features: [
      'Embedded + IoT Systems',
      'LabVIEW Automation',
      'Industrial Monitoring',
      'AI/Automation Platforms',
      'Deployment & Hardware Support'
    ],
    color: 'border-purple-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    btnVariant: 'secondary' as const,
  },
  {
    name: 'Enterprise/Custom',
    price: 'Custom Quote',
    desc: 'Bespoke, end-to-end intelligent systems engineered to solve massive industrial bottlenecks and scale seamlessly across your organization.',
    features: [
      'Custom AI Systems',
      'Industrial Automation',
      'End-to-End Intelligent Systems',
      'Scalable Architecture Design',
      'Dedicated Maintenance'
    ],
    color: 'border-emerald-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    btnVariant: 'secondary' as const,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white dark:bg-deep-navy">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-electric-blue/5 blur-[120px] pointer-events-none" />
      
      <Container>
        <SectionHeading
          title="Project Packages"
          subtitle="Transparent, value-driven pricing tailored for academic excellence and industrial innovation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass p-8 rounded-[2rem] flex flex-col border ${plan.color} ${plan.glow} transition-all duration-500 group ${plan.highlight ? 'scale-105 z-10 bg-electric-blue/5' : 'hover:-translate-y-2'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-blue text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold font-sora text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 dark:text-silver-gray min-h-[40px]">{plan.desc}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/5">
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black font-sora text-gradient tracking-tight">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? 'bg-electric-blue/20 text-electric-blue' : 'bg-gray-100 dark:bg-white/5 text-gray-400'}`}>
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.btnVariant}
                className="w-full py-4 rounded-2xl group/btn"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent('openQueryModal', {
                      detail: {
                        formName: 'Popup Query Modal',
                        title: `${plan.name} Inquiry`,
                        projectType: 'Custom Development',
                      },
                    })
                  )
                }
              >
                Inquire Now
                <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto glass px-6 py-4 rounded-2xl border border-white/5 inline-block">
             <span className="text-electric-blue font-bold">Note:</span> Pricing may vary depending on project complexity, technology stack, hardware requirements, documentation standards, and deployment needs.
           </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
