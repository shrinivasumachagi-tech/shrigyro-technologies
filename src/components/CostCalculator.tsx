import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, Send } from 'lucide-react';
import PricingEngine from './smart-solution/PricingEngine';
import SectionHeading from '@/components/ui/SectionHeading';
import SmartRecommendationCard from './smart-solution/SmartRecommendationCard';

const projectTypePrices = {
  academic: 5000,
  website: 12000,
  dashboard: 25000,
  iot: 18000,
  embedded: 12000,
  robotics: 22000,
  erp: 45000,
  whatsapp: 18000,
} as const;

const technologyPrices = {
  basic: 0,
  react: 6000,
  fullstack: 15000,
  ai: 18000,
  iot: 12000,
  cloud: 10000,
} as const;

const websitePrices = {
  none: 0,
  landing: 6000,
  business: 12000,
  portfolio: 8000,
  ecommerce: 25000,
  admin: 22000,
} as const;

type CostCalculatorProps = {
  compact?: boolean;
  defaultProjectType?: keyof typeof projectTypePrices;
};

const formatPrice = (value: number) => `Rs. ${value.toLocaleString('en-IN')}`;

const CostCalculator: React.FC<CostCalculatorProps> = ({ compact = false, defaultProjectType = 'website' }) => {
  const [projectType, setProjectType] = useState<keyof typeof projectTypePrices>(defaultProjectType);
  const [technology, setTechnology] = useState<keyof typeof technologyPrices>('react');
  const [hardwareRequired, setHardwareRequired] = useState(false);
  const [aiFeatures, setAiFeatures] = useState(true);
  const [websiteType, setWebsiteType] = useState<keyof typeof websitePrices>('business');
  const [documentation, setDocumentation] = useState(true);
  const [supportDuration, setSupportDuration] = useState(1);
  const [deployment, setDeployment] = useState(true);

const rec = PricingEngine.calculate({ serviceId: 'web-development', selectedFeatures: [projectType, technology, websiteType, hardwareRequired ? 'Hardware Required' : '', aiFeatures ? 'AI Features' : '', documentation ? 'Documentation' : '', deployment ? 'Deployment' : ''] });
  const estimate = rec.estimatedCost.max;


  const summary = [
    projectType === 'website' || websiteType !== 'none' ? 'Website' : 'Project',
    aiFeatures ? 'AI' : '',
    websiteType === 'admin' || projectType === 'dashboard' ? 'Dashboard' : '',
  ].filter(Boolean).join(' + ');

  const content = (
    <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-blue-900/5 dark:border-white/10 dark:bg-white/5 md:p-8">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-electric-blue/10 blur-[90px]" />

      <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Project Type</span>
              <select
                value={projectType}
                onChange={(event) => setProjectType(event.target.value as keyof typeof projectTypePrices)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-electric-blue dark:border-white/10 dark:bg-deep-navy"
              >
                <option value="academic">Academic Project</option>
                <option value="website">Website</option>
                <option value="dashboard">Dashboard System</option>
                <option value="iot">IoT Solution</option>
                <option value="embedded">Embedded System</option>
                <option value="robotics">Robotics</option>
                <option value="erp">ERP System</option>
                <option value="whatsapp">WhatsApp Automation</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Technology</span>
              <select
                value={technology}
                onChange={(event) => setTechnology(event.target.value as keyof typeof technologyPrices)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-electric-blue dark:border-white/10 dark:bg-deep-navy"
              >
                <option value="basic">Basic Stack</option>
                <option value="react">React Frontend</option>
                <option value="fullstack">Full Stack App</option>
                <option value="ai">AI Integrated Stack</option>
                <option value="iot">IoT Stack</option>
                <option value="cloud">Cloud Ready Stack</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Website Type</span>
              <select
                value={websiteType}
                onChange={(event) => setWebsiteType(event.target.value as keyof typeof websitePrices)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-electric-blue dark:border-white/10 dark:bg-deep-navy"
              >
                <option value="none">Not Required</option>
                <option value="landing">Landing Page</option>
                <option value="business">Business Website</option>
                <option value="portfolio">Portfolio Website</option>
                <option value="ecommerce">E-commerce Website</option>
                <option value="admin">Admin Panel / Dashboard</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">Support Duration: {supportDuration} month(s)</span>
              <input
                type="range"
                min="1"
                max="12"
                value={supportDuration}
                onChange={(event) => setSupportDuration(Number(event.target.value))}
                className="w-full accent-electric-blue"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ['Hardware Required', hardwareRequired, setHardwareRequired],
              ['AI Features', aiFeatures, setAiFeatures],
              ['Documentation', documentation, setDocumentation],
              ['Deployment', deployment, setDeployment],
            ].map(([label, checked, setter]) => (
              <label
                key={label as string}
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all hover:border-electric-blue/50 dark:border-white/10 dark:bg-deep-navy/60"
              >
                <span className="font-semibold text-gray-700 dark:text-gray-200">{label as string}</span>
                <input
                  type="checkbox"
                  checked={checked as boolean}
                  onChange={(event) => (setter as React.Dispatch<React.SetStateAction<boolean>>)(event.target.checked)}
                  className="h-5 w-5 accent-electric-blue"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[1.5rem] border border-dashed border-electric-blue/30 bg-blue-50/80 p-6 text-center dark:bg-deep-navy/70">
          <div>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-blue/10 text-electric-blue">
              <Calculator size={28} />
            </div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Estimated Cost</p>
            <motion.p
              key={estimate}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mb-4 font-sora text-4xl font-black text-gray-900 dark:text-white md:text-5xl"
            >
              {formatPrice(estimate)}
                </motion.p>
            /* <RecommendationCard recommendation={rec} /> */
            <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {summary || 'Selected project'} estimated based on current choices. Final cost depends on exact features, hardware, APIs, and delivery timeline.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2 text-left text-sm text-gray-600 dark:text-gray-300">
              {['Transparent scope discussion', 'Documentation and deployment options', 'Support based on selected duration'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button
              variant="gradient"
              className="w-full"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('openQueryModal', {
                    detail: {
                      formName: 'Cost Calculator Inquiry',
                      title: 'Discuss Estimated Cost',
                      projectType: 'Custom Development',
                    },
                  })
                )
              }
            >
              <Send size={17} className="mr-2" />
              Discuss Estimate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  if (compact) {
    return content;
  }

  return (
    <section id="cost-calculator" className="bg-gray-50 py-24 dark:bg-deep-navy">
      <Container>
        <SectionHeading
          title="Dynamic Cost Calculator"
          subtitle="Select project type, technology, AI features, hardware, documentation, support, and deployment to get a quick budget estimate before contacting us."
        />
        {content}
            <SmartRecommendationCard recommendation={rec} />
      </Container>
    </section>
  );
};

export default CostCalculator;
