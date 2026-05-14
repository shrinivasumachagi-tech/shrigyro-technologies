import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cloud, Code2, Cpu, Gauge, Layers, Network, RadioTower, Workflow, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const domains = [
  { name: 'AI', icon: Bot, color: 'text-blue-500' },
  { name: 'IoT', icon: Network, color: 'text-cyan-500' },
  { name: 'Embedded', icon: Cpu, color: 'text-orange-500' },
  { name: 'Automation', icon: Zap, color: 'text-emerald-500' },
  { name: 'Robotics', icon: RadioTower, color: 'text-rose-500' },
  { name: 'Cloud', icon: Cloud, color: 'text-sky-500' },
  { name: 'ERP', icon: Layers, color: 'text-violet-500' },
  { name: 'PCB', icon: Workflow, color: 'text-amber-500' },
  { name: 'Web Development', icon: Code2, color: 'text-green-500' },
  { name: 'LabVIEW', icon: Gauge, color: 'text-indigo-500' },
];

const DomainMarquee: React.FC = () => {
  const marqueeItems = [...domains, ...domains, ...domains];

  return (
    <section id="focus-areas" className="relative overflow-hidden bg-gray-50 py-24 dark:bg-deep-navy">
      <Container>
        <SectionHeading
          title="Focus Areas"
          subtitle="Our work connects business software, academic engineering, intelligent automation, and hardware innovation in one practical technology ecosystem."
        />
      </Container>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-deep-navy md:w-48" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-deep-navy md:w-48" />

        <motion.div
          className="flex w-max gap-5 whitespace-nowrap py-4"
          animate={{ x: [0, -1600] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeItems.map((domain, index) => (
            <div
              key={`${domain.name}-${index}`}
              className="group flex min-w-[220px] items-center gap-4 rounded-2xl border border-gray-200 bg-white/80 px-6 py-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/50 hover:shadow-[0_14px_45px_rgba(37,99,235,0.16)] dark:border-white/10 dark:bg-white/5"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition-transform duration-300 group-hover:scale-110 dark:bg-white/10 ${domain.color}`}>
                <domain.icon size={24} />
              </div>
              <div>
                <p className="font-sora text-lg font-bold text-gray-900 dark:text-white">{domain.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Technology Domain</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DomainMarquee;
