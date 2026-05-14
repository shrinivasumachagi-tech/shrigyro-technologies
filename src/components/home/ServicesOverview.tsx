import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Cloud,
  Code,
  Cpu,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  Network,
  RadioTower,
  Rocket,
  Workflow,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { serviceDetails } from '@/data/serviceDetails';
import { cn } from '@/utils/cn';

const iconMap = {
  'ai-automation': Bot,
  'web-development': Code,
  'embedded-systems': Cpu,
  'iot-solutions': Network,
  'whatsapp-automation': MessageCircle,
  'erp-systems': LayoutDashboard,
  robotics: RadioTower,
  'academic-projects': GraduationCap,
  'portfolio-websites': BriefcaseBusiness,
  'business-websites': Rocket,
  'cloud-solutions': Cloud,
  'pcb-design': Workflow,
  'labview-systems': Gauge,
} as const;

const accentClasses = [
  'text-blue-500 bg-blue-500/10',
  'text-cyan-500 bg-cyan-500/10',
  'text-emerald-500 bg-emerald-500/10',
  'text-orange-500 bg-orange-500/10',
  'text-purple-500 bg-purple-500/10',
  'text-rose-500 bg-rose-500/10',
];

const ServicesOverview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services-overview" className="relative overflow-hidden bg-white py-28 transition-colors duration-500 dark:bg-deep-navy/80">
      <div className="absolute right-0 top-0 h-[560px] w-1/2 rounded-full bg-electric-blue/5 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Services Overview"
          subtitle="ShriGyro Technologies builds practical technology solutions for startups, businesses, students, professionals, and research teams. We combine AI, software, embedded systems, IoT, cloud, and automation into clear, business-ready delivery."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceDetails.map((service, index) => {
            const Icon = iconMap[service.id as keyof typeof iconMap] || Activity;
            const accent = accentClasses[index % accentClasses.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
              >
                <GlassCard
                  className="group flex h-full cursor-pointer flex-col border-gray-200/70 bg-white/75 shadow-sm transition-all duration-300 hover:border-electric-blue/50 hover:shadow-[0_16px_50px_rgba(37,99,235,0.15)] dark:border-white/10 dark:bg-white/5"
                  onClick={() => navigate(`/services#${service.id}`)}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className={cn('flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110', accent)}>
                      <Icon size={28} />
                    </div>
                    <span className="rounded-full border border-gray-200 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gray-500 dark:border-white/10 dark:text-gray-400">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="mb-3 font-sora text-2xl font-bold text-gray-900 transition-colors group-hover:text-electric-blue dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-6 line-clamp-4 flex-grow text-sm leading-relaxed text-gray-600 dark:text-silver-gray">
                    {service.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <span key={feature} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-white/5 dark:text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-bold text-electric-blue dark:border-white/10">
                    <span>View Details</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
