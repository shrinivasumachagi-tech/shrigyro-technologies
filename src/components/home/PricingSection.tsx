import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Zap, Rocket, Crown } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Basic',
    price: 'Rs. 5,000+',
    desc: 'For mini projects, simple websites, basic embedded work, and fast academic prototypes.',
    features: ['Mini projects', 'Basic web applications', 'Simple IoT or embedded logic', 'Source code included', 'Standard documentation', 'Basic deployment guidance', '7-day support'],
    color: 'border-blue-500/20',
    icon: Zap,
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    btnVariant: 'secondary' as const,
  },
  {
    name: 'Standard',
    price: 'Rs. 15,000+',
    desc: 'For final year projects, business websites, IoT systems, and complete project delivery.',
    features: ['Full stack development', 'Advanced IoT systems', 'Business or portfolio website', 'Full project report', 'PPT and viva guidance', 'Deployment support', '30-day support'],
    icon: Rocket,
    highlight: true,
    color: 'border-electric-blue',
    glow: 'shadow-[0_0_40px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_60px_rgba(37,99,235,0.3)]',
    btnVariant: 'gradient' as const,
  },
  {
    name: 'Advanced',
    price: 'Rs. 35,000+',
    desc: 'For AI integration, dashboards, LabVIEW systems, robotics, and industrial-grade prototypes.',
    features: ['AI / ML integration', 'Dashboard or admin panel', 'LabVIEW automation', 'Real-time monitoring', 'IEEE paper support', 'Hardware support', '90-day priority support'],
    icon: Crown,
    color: 'border-purple-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    btnVariant: 'secondary' as const,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For custom ERP, cloud platforms, automation systems, and long-term business solutions.',
    features: ['Custom AI systems', 'ERP and workflow modules', 'Industrial automation', 'Scalable architecture design', 'Documentation and deployment', 'Maintenance SLA', 'Dedicated project support'],
    icon: Sparkles,
    color: 'border-emerald-500/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    btnVariant: 'secondary' as const,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-24 dark:bg-deep-navy">
      <div className="absolute left-1/2 top-0 h-96 w-full max-w-5xl -translate-x-1/2 bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          title="Pricing Packages"
          subtitle="Choose a starting package based on project size. Final pricing is confirmed after requirement discussion, technology selection, hardware needs, documentation level, deployment, and support duration."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative flex flex-col rounded-[2rem] border bg-white/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-500 dark:bg-white/5 ${plan.color} ${plan.glow} ${plan.highlight ? 'z-10 scale-[1.02]' : 'hover:-translate-y-2'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-electric-blue px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                  <Sparkles size={12} />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${plan.highlight ? 'bg-electric-blue/20 text-electric-blue' : 'bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400'}`}>
                  <plan.icon size={24} />
                </div>
                <h3 className="mb-2 font-sora text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="min-h-[58px] text-xs leading-relaxed text-gray-500 dark:text-silver-gray">{plan.desc}</p>
              </div>

              <div className="mb-8 border-b border-gray-200 pb-8 dark:border-white/10">
                <span className="font-sora text-3xl font-black tracking-tight text-gradient">{plan.price}</span>
              </div>

              <div className="mb-10 flex-grow space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.highlight ? 'bg-electric-blue/20 text-electric-blue' : 'bg-blue-500/10 text-blue-500 dark:bg-white/5 dark:text-gray-400'}`}>
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.btnVariant}
                className="group/btn w-full rounded-2xl py-4"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent('openQueryModal', {
                      detail: {
                        formName: 'Pricing Package Inquiry',
                        title: `${plan.name} Package Inquiry`,
                        projectType: 'Custom Development',
                      },
                    })
                  )
                }
              >
                Inquire Now
                <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block max-w-3xl rounded-2xl border border-gray-200 bg-white/70 px-6 py-4 text-sm text-gray-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
            <span className="font-bold text-electric-blue">Note:</span> These are estimated starting ranges. We confirm exact pricing after scope discussion.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
