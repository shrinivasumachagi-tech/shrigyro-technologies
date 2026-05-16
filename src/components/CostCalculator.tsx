import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Globe,
  Cpu,
  Bot,
  Server,
  GraduationCap,
  IndianRupee,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  CalendarClock,
} from 'lucide-react';
import { WHATSAPP_LINK_NUMBER } from '@/constants/branding';

type ServiceType = 'web' | 'automation' | 'embedded' | 'labview' | 'cloud' | 'academic';

interface PriceRange {
  min: number;
  max: number;
}

interface ProjectOption extends PriceRange {
  label: string;
  timeline: string;
}

interface ModifierOption extends PriceRange {
  label: string;
}

interface FeatureOption extends ModifierOption {
  id: string;
  services: ServiceType[];
}

interface ServiceConfig {
  id: ServiceType;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  projects: ProjectOption[];
  deliveryStyles: ModifierOption[];
  duration: {
    min: number;
    max: number;
    recommended: number;
    monthlyMin: number;
    monthlyMax: number;
  };
  scale: {
    min: number;
    max: number;
    recommended: number;
  };
}

interface EstimateResult {
  title: string;
  min: number;
  max: number;
  timeline: string;
  features: string[];
  breakdown: Array<{ label: string; min: number; max: number }>;
}

interface CostCalculatorProps {
  compact?: boolean;
  defaultProjectType?: string;
}

const serviceConfigs: Record<ServiceType, ServiceConfig> = {
  web: {
    id: 'web',
    title: 'Web Development',
    icon: Globe,
    projects: [
      { label: 'Business Website', min: 10000, max: 15000, timeline: '1 - 3 Weeks' },
      { label: 'Portfolio Website', min: 5000, max: 8000, timeline: '1 - 2 Weeks' },
      { label: 'Landing Page', min: 4000, max: 7000, timeline: '3 - 7 Days' },
      { label: 'E-Commerce', min: 15000, max: 35000, timeline: '2 - 5 Weeks' },
      { label: 'Custom Web App', min: 20000, max: 50000, timeline: '3 - 8 Weeks' },
    ],
    deliveryStyles: [
      { label: 'Static Website', min: 0, max: 0 },
      { label: 'Premium UI Website', min: 2000, max: 5000 },
      { label: '3D Website', min: 3000, max: 7000 },
    ],
    duration: { min: 1, max: 24, recommended: 3, monthlyMin: 500, monthlyMax: 1500 },
    scale: { min: 1, max: 36, recommended: 6 },
  },
  automation: {
    id: 'automation',
    title: 'WhatsApp Automation',
    icon: Bot,
    projects: [
      { label: 'Basic WhatsApp Bot', min: 2000, max: 8000, timeline: '3 - 7 Days' },
      { label: 'Lead Capture Flow', min: 4000, max: 10000, timeline: '5 - 10 Days' },
      { label: 'Booking Automation', min: 6000, max: 14000, timeline: '1 - 2 Weeks' },
      { label: 'CRM Connected Automation', min: 9000, max: 22000, timeline: '2 - 4 Weeks' },
    ],
    deliveryStyles: [
      { label: 'Starter Flow', min: 0, max: 0 },
      { label: 'Multi-Step Flow', min: 1500, max: 3500 },
      { label: 'Business Workflow', min: 2500, max: 6000 },
    ],
    duration: { min: 1, max: 24, recommended: 2, monthlyMin: 400, monthlyMax: 1200 },
    scale: { min: 1, max: 36, recommended: 6 },
  },
  embedded: {
    id: 'embedded',
    title: 'Embedded Systems',
    icon: Cpu,
    projects: [
      { label: 'Sensor Prototype', min: 8000, max: 15000, timeline: '2 - 4 Weeks' },
      { label: 'IoT Monitoring System', min: 12000, max: 28000, timeline: '3 - 6 Weeks' },
      { label: 'Industrial Controller', min: 18000, max: 45000, timeline: '4 - 8 Weeks' },
      { label: 'Hardware + Dashboard', min: 22000, max: 55000, timeline: '5 - 10 Weeks' },
    ],
    deliveryStyles: [
      { label: 'Prototype Build', min: 0, max: 0 },
      { label: 'PCB-Ready Build', min: 4000, max: 10000 },
      { label: 'Field-Ready Build', min: 7000, max: 18000 },
    ],
    duration: { min: 1, max: 24, recommended: 4, monthlyMin: 700, monthlyMax: 2000 },
    scale: { min: 1, max: 36, recommended: 6 },
  },
  labview: {
    id: 'labview',
    title: 'LabVIEW Solutions',
    icon: Server,
    projects: [
      { label: 'LabVIEW Project', min: 20000, max: 100000, timeline: '2 - 8 Weeks' },
      { label: 'DAQ Monitoring System', min: 25000, max: 120000, timeline: '3 - 10 Weeks' },
      { label: 'Test Bench Automation', min: 35000, max: 150000, timeline: '4 - 12 Weeks' },
      { label: 'Industrial HMI System', min: 45000, max: 180000, timeline: '6 - 14 Weeks' },
    ],
    deliveryStyles: [
      { label: 'Standard Interface', min: 0, max: 0 },
      { label: 'Advanced Dashboard', min: 8000, max: 22000 },
      { label: 'Industrial Test Suite', min: 10000, max: 30000 },
    ],
    duration: { min: 1, max: 24, recommended: 6, monthlyMin: 1000, monthlyMax: 3000 },
    scale: { min: 1, max: 36, recommended: 12 },
  },
  cloud: {
    id: 'cloud',
    title: 'Cloud Services',
    icon: Briefcase,
    projects: [
      { label: 'Cloud Deployment', min: 5000, max: 15000, timeline: '1 - 2 Weeks' },
      { label: 'Backend Hosting Setup', min: 8000, max: 20000, timeline: '1 - 3 Weeks' },
      { label: 'Database + API Setup', min: 12000, max: 30000, timeline: '2 - 4 Weeks' },
      { label: 'SaaS Cloud Foundation', min: 18000, max: 45000, timeline: '3 - 6 Weeks' },
    ],
    deliveryStyles: [
      { label: 'Deployment Setup', min: 0, max: 0 },
      { label: 'Managed Foundation', min: 3000, max: 9000 },
      { label: 'Scalable SaaS Setup', min: 7000, max: 18000 },
    ],
    duration: { min: 1, max: 24, recommended: 3, monthlyMin: 600, monthlyMax: 1800 },
    scale: { min: 1, max: 36, recommended: 12 },
  },
  academic: {
    id: 'academic',
    title: 'Academic Projects',
    icon: GraduationCap,
    projects: [
      { label: 'Mini Project', min: 4000, max: 15000, timeline: '1 - 3 Weeks' },
      { label: 'Final Year Project', min: 8000, max: 25000, timeline: '2 - 5 Weeks' },
      { label: 'IEEE-Based Project', min: 12000, max: 30000, timeline: '3 - 6 Weeks' },
      { label: 'Hardware Academic Project', min: 15000, max: 35000, timeline: '3 - 7 Weeks' },
    ],
    deliveryStyles: [
      { label: 'Prototype Support', min: 0, max: 0 },
      { label: 'Complete Package', min: 2000, max: 5000 },
      { label: 'Demo-Ready Package', min: 3000, max: 8000 },
    ],
    duration: { min: 1, max: 12, recommended: 2, monthlyMin: 300, monthlyMax: 900 },
    scale: { min: 1, max: 24, recommended: 3 },
  },
};

const featureOptions: FeatureOption[] = [
  { id: 'ai', label: 'AI Integration', min: 2000, max: 5000, services: ['web', 'automation', 'embedded', 'labview', 'cloud', 'academic'] },
  { id: 'deployment', label: 'Deployment', min: 1000, max: 3000, services: ['web', 'automation', 'cloud', 'academic'] },
  { id: 'seo', label: 'SEO', min: 1000, max: 2000, services: ['web'] },
  { id: 'admin', label: 'Admin Dashboard', min: 3000, max: 8000, services: ['web', 'automation', 'embedded', 'cloud'] },
  { id: 'whatsapp', label: 'WhatsApp Integration', min: 2000, max: 4000, services: ['web', 'automation', 'cloud'] },
  { id: 'hardware', label: 'Hardware', min: 3000, max: 5000, services: ['embedded', 'labview', 'academic'] },
  { id: 'report', label: 'Report', min: 2000, max: 3000, services: ['academic', 'embedded', 'labview'] },
  { id: 'chatBooking', label: 'Chat Booking', min: 2000, max: 3000, services: ['automation', 'web'] },
];

const serviceOptions = Object.values(serviceConfigs).map(({ id, title, icon }) => ({
  id,
  title,
  icon,
}));

const roundToNearest = (value: number, nearest = 500) => Math.round(value / nearest) * nearest;

const getScaleModifier = (months: number): PriceRange => {
  if (months >= 24) return { min: 5000, max: 12000 };
  if (months >= 12) return { min: 3000, max: 8000 };
  if (months >= 6) return { min: 1500, max: 4000 };
  return { min: 0, max: 0 };
};

const resolveDefaultService = (projectType?: string): ServiceType => {
  const normalized = projectType?.toLowerCase();

  if (normalized === 'academic') return 'academic';
  if (normalized === 'whatsapp' || normalized === 'automation') return 'automation';
  if (normalized === 'embedded' || normalized === 'iot' || normalized === 'robotics') return 'embedded';
  if (normalized === 'cloud' || normalized === 'erp') return 'cloud';
  if (normalized === 'labview') return 'labview';
  return 'web';
};

const CostCalculator: React.FC<CostCalculatorProps> = ({ compact = false, defaultProjectType }) => {
  const initialService = resolveDefaultService(defaultProjectType);
  const initialConfig = serviceConfigs[initialService];
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>(initialService);
  const [projectType, setProjectType] = useState(initialConfig.projects[0].label);
  const [designType, setDesignType] = useState(initialConfig.deliveryStyles[0].label);
  const [features, setFeatures] = useState<string[]>([]);
  const [projectDuration, setProjectDuration] = useState(initialConfig.duration.recommended);
  const [businessGrowth, setBusinessGrowth] = useState(initialConfig.scale.recommended);

  const activeConfig = serviceConfigs[service];
  const availableFeatures = featureOptions.filter((feature) => feature.services.includes(service));

  const selectService = (nextService: ServiceType) => {
    const config = serviceConfigs[nextService];
    setService(nextService);
    setProjectType(config.projects[0].label);
    setDesignType(config.deliveryStyles[0].label);
    setProjectDuration(config.duration.recommended);
    setBusinessGrowth(config.scale.recommended);
    setFeatures((previous) =>
      previous.filter((id) => featureOptions.find((feature) => feature.id === id)?.services.includes(nextService))
    );
  };

  const toggleFeature = (featureId: string) => {
    if (!availableFeatures.some((feature) => feature.id === featureId)) return;

    setFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((feature) => feature !== featureId)
        : [...prev, featureId]
    );
  };

  const estimate = useMemo<EstimateResult>(() => {
    const selectedProject = activeConfig.projects.find((project) => project.label === projectType) ?? activeConfig.projects[0];
    const selectedStyle = activeConfig.deliveryStyles.find((style) => style.label === designType) ?? activeConfig.deliveryStyles[0];
    const selectedFeatures = featureOptions.filter(
      (feature) => features.includes(feature.id) && feature.services.includes(service)
    );
    const extraDurationMonths = Math.max(0, projectDuration - activeConfig.duration.recommended);
    const durationModifier = {
      min: Math.min(extraDurationMonths, 6) * activeConfig.duration.monthlyMin,
      max: Math.min(extraDurationMonths, 6) * activeConfig.duration.monthlyMax,
    };
    const scaleModifier = getScaleModifier(businessGrowth);

    const breakdown = [
      { label: selectedProject.label, min: selectedProject.min, max: selectedProject.max },
      { label: selectedStyle.label, min: selectedStyle.min, max: selectedStyle.max },
      ...selectedFeatures.map(({ label, min, max }) => ({ label, min, max })),
      { label: `${projectDuration} month project window`, min: durationModifier.min, max: durationModifier.max },
      { label: `${businessGrowth} month scaling plan`, min: scaleModifier.min, max: scaleModifier.max },
    ].filter((item) => item.min > 0 || item.max > 0);

    const min = breakdown.reduce((total, item) => total + item.min, 0);
    const max = breakdown.reduce((total, item) => total + item.max, 0);
    const guardedMin = Math.max(1000, roundToNearest(min));
    const guardedMax = Math.max(guardedMin + 1000, roundToNearest(max));

    return {
      title: activeConfig.title,
      min: guardedMin,
      max: guardedMax,
      timeline: selectedProject.timeline,
      features: [
        selectedProject.label,
        selectedStyle.label,
        ...selectedFeatures.map((feature) => feature.label),
        `${projectDuration} month delivery window`,
        `${businessGrowth} month growth planning`,
      ],
      breakdown,
    };
  }, [activeConfig, businessGrowth, designType, features, projectDuration, projectType, service]);

  const whatsappMessage = encodeURIComponent(
    `Hello ShriGyro Technologies, I want a consultation for ${estimate.title}. Estimated range: Rs. ${estimate.min.toLocaleString()} - Rs. ${estimate.max.toLocaleString()}.`
  );

  return (
    <section
      className={`w-full bg-white dark:bg-[#050816] transition-all duration-500 ${compact ? 'py-10 rounded-3xl' : 'py-20'}`}
      id="smart-solution-finder"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 text-sm font-medium mb-5 shadow-[0_0_24px_rgba(37,99,235,0.08)]">
            Smart Solution Finder
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-black dark:text-white">
            Find Your Perfect <span className="text-blue-600">Solution</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Answer a few questions and get a smart recommendation with estimated pricing based on your requirements.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 mb-12 flex-wrap">
          {[1, 2, 3, 4].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setStep(item)}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-semibold transition-all duration-300 ${
                step >= item
                  ? 'bg-blue-600 border-blue-600 text-white shadow-[0_0_28px_rgba(37,99,235,0.26)]'
                  : 'border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'
              }`}
              aria-label={`Go to calculator step ${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-[#0B1220] border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-950/5 transition-all duration-500">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
              >
                <div className="flex items-center justify-between mb-8 gap-4">
                  <h3 className="text-2xl font-bold text-black dark:text-white">Select Your Service</h3>
                  <span className="text-gray-500 dark:text-gray-400">Step 1 of 4</span>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  {serviceOptions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => selectService(item.id)}
                        className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                          service === item.id
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-[0_0_28px_rgba(37,99,235,0.12)]'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-950/5'
                        }`}
                      >
                        <Icon className="w-10 h-10 text-blue-600 mb-4" />
                        <h4 className="font-semibold text-lg text-black dark:text-white">{item.title}</h4>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-end mt-10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_28px_rgba(37,99,235,0.22)]"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
              >
                <div className="flex items-center justify-between mb-8 gap-4">
                  <h3 className="text-2xl font-bold text-black dark:text-white">Select Project Type</h3>
                  <span className="text-gray-500 dark:text-gray-400">Step 2 of 4</span>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {activeConfig.projects.map((type) => (
                    <button
                      key={type.label}
                      type="button"
                      onClick={() => setProjectType(type.label)}
                      className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                        projectType === type.label
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-[0_0_28px_rgba(37,99,235,0.12)]'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'
                      }`}
                    >
                      <h4 className="font-semibold text-lg text-black dark:text-white">{type.label}</h4>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Rs. {type.min.toLocaleString()} - Rs. {type.max.toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="block mb-3 text-lg font-semibold text-black dark:text-white">
                    Select Delivery Style
                  </label>

                  <div className="grid md:grid-cols-2 gap-5">
                    {activeConfig.deliveryStyles.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setDesignType(item.label)}
                        className={`p-5 rounded-2xl border transition-all duration-300 text-left ${
                          designType === item.label
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-[0_0_28px_rgba(37,99,235,0.12)]'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'
                        }`}
                      >
                        <span className="font-semibold text-black dark:text-white">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-10 gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_28px_rgba(37,99,235,0.22)]"
                  >
                    Continue
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
              >
                <div className="flex items-center justify-between mb-8 gap-4">
                  <h3 className="text-2xl font-bold text-black dark:text-white">Select Features</h3>
                  <span className="text-gray-500 dark:text-gray-400">Step 3 of 4</span>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {availableFeatures.map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => toggleFeature(feature.id)}
                      className={`p-5 rounded-2xl border transition-all duration-300 text-left ${
                        features.includes(feature.id)
                          ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-[0_0_28px_rgba(37,99,235,0.12)]'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-medium text-black dark:text-white">{feature.label}</span>
                        {features.includes(feature.id) && <CheckCircle2 className="text-blue-600 shrink-0" />}
                      </div>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        + Rs. {feature.min.toLocaleString()} - Rs. {feature.max.toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <CalendarClock className="text-blue-600" />
                      <h4 className="text-xl font-bold text-black dark:text-white">Project Duration</h4>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-5">
                      Choose the month window for delivery, support, and controlled rollout.
                    </p>

                    <div className="bg-gray-100 dark:bg-[#111827] rounded-2xl p-6">
                      <input
                        type="range"
                        min={activeConfig.duration.min}
                        max={activeConfig.duration.max}
                        value={projectDuration}
                        onChange={(event) => setProjectDuration(Number(event.target.value))}
                        className="w-full accent-blue-600"
                        aria-label="Project duration in months"
                      />

                      <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{activeConfig.duration.min} Month</span>
                        <span className="font-bold text-blue-600 text-lg">{projectDuration} Months</span>
                        <span>{activeConfig.duration.max / 12 >= 1 ? `${activeConfig.duration.max / 12} Years` : `${activeConfig.duration.max} Months`}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <CalendarClock className="text-blue-600" />
                      <h4 className="text-xl font-bold text-black dark:text-white">Business Growth Planning</h4>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-5">
                      Select how long the solution should stay startup-friendly while scaling.
                    </p>

                    <div className="bg-gray-100 dark:bg-[#111827] rounded-2xl p-6">
                      <input
                        type="range"
                        min={activeConfig.scale.min}
                        max={activeConfig.scale.max}
                        value={businessGrowth}
                        onChange={(event) => setBusinessGrowth(Number(event.target.value))}
                        className="w-full accent-blue-600"
                        aria-label="Business scaling plan in months"
                      />

                      <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{activeConfig.scale.min} Month</span>
                        <span className="font-bold text-blue-600 text-lg">{businessGrowth} Months</span>
                        <span>{activeConfig.scale.max / 12} Years</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10 gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_28px_rgba(37,99,235,0.22)]"
                  >
                    See Estimate
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.24 }}
              >
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-5 py-2 text-blue-600 font-medium mb-5">
                    Recommended Solution
                  </div>

                  <h3 className="text-4xl font-bold mb-3 text-black dark:text-white">{estimate.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300">Estimated pricing based on your selections</p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                  <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] p-8 shadow-[0_0_38px_rgba(37,99,235,0.07)]">
                    <div className="flex items-center gap-3 mb-6">
                      <IndianRupee className="text-blue-600" />
                      <h4 className="text-xl font-bold text-black dark:text-white">Estimated Cost</h4>
                    </div>

                    <div className="text-5xl font-bold text-blue-600 mb-3">
                      Rs. {estimate.min.toLocaleString()} -
                    </div>

                    <div className="text-3xl font-bold text-black dark:text-white mb-5">
                      Rs. {estimate.max.toLocaleString()}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300">
                      Startup-friendly estimate with guarded scaling so pricing stays realistic for the selected scope.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111827] p-8">
                    <h4 className="text-xl font-bold mb-5 text-black dark:text-white">Project Details</h4>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 gap-4">
                        <span className="text-gray-600 dark:text-gray-300">Timeline</span>
                        <span className="font-semibold text-black dark:text-white text-right">{estimate.timeline}</span>
                      </div>

                      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 gap-4">
                        <span className="text-gray-600 dark:text-gray-300">Growth Planning</span>
                        <span className="font-semibold text-blue-600 text-right">{businessGrowth} Months</span>
                      </div>

                      <div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">Included Features</p>

                        <div className="flex flex-wrap gap-3">
                          {estimate.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14 bg-blue-50 dark:bg-blue-900/10 rounded-3xl p-8 text-center border border-blue-500/10">
                  <h4 className="text-2xl font-bold mb-4 text-black dark:text-white">Why Choose ShriGyro Technologies?</h4>

                  <div className="grid md:grid-cols-3 gap-5 mt-8">
                    <div className="bg-white dark:bg-[#111827] rounded-2xl p-6">
                      <h5 className="font-bold text-blue-600 text-xl mb-2">100%</h5>
                      <p className="text-gray-600 dark:text-gray-300">Customer Satisfaction</p>
                    </div>

                    <div className="bg-white dark:bg-[#111827] rounded-2xl p-6">
                      <h5 className="font-bold text-blue-600 text-xl mb-2">24/7</h5>
                      <p className="text-gray-600 dark:text-gray-300">Client Support</p>
                    </div>

                    <div className="bg-white dark:bg-[#111827] rounded-2xl p-6">
                      <h5 className="font-bold text-blue-600 text-xl mb-2">On-Time</h5>
                      <p className="text-gray-600 dark:text-gray-300">Project Delivery</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-10 gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-black dark:text-white inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_LINK_NUMBER}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 shadow-[0_0_28px_rgba(37,99,235,0.22)]"
                  >
                    Get Free Consultation
                    <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
