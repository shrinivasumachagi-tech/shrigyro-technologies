import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Cpu,
  Radio,
  Network,
  Code,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Factory,
  Activity,
  Rocket
} from "lucide-react";
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { cn } from '@/utils/cn';

const services = [
  {
    title: 'AI & Automation Research',
    description: 'We develop and experiment with machine learning models, automation workflows, and intelligent systems. Perfect for learning projects, prototypes, and AI research applications.',
    icon: Bot,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    price: 'Custom',
  },
  {
    title: 'Embedded Systems Development',
    description: 'Custom microcontroller programming, embedded prototypes, and IoT device development. From Arduino to advanced ARM platforms, we build learning-focused embedded solutions.',
    icon: Cpu,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    price: 'Custom',
  },
  {
    title: 'Automation & Control Systems',
    description: 'Prototype automation platforms, control system design, and experimentation frameworks. We focus on innovative proof-of-concept solutions and learning-driven projects.',
    icon: Radio,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    price: 'Custom',
  },
  {
    title: 'IoT & Sensor Solutions',
    description: 'Design and prototype Internet of Things systems with sensor networks, real-time data acquisition, and telemetry solutions for research and experimentation.',
    icon: Network,
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    price: 'Custom',
  },
  {
    title: 'Web & Software Development',
    description: 'Modern web applications, software solutions, and digital platforms built with cutting-edge technologies. From MVPs to full-featured applications.',
    icon: Code,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    price: 'Custom',
  },
  {
    title: 'LabVIEW & DAQ Systems',
    description: 'Prototype automation and data acquisition systems using LabVIEW. We create experimental control platforms and instrumentation solutions for research.',
    icon: Activity,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    price: 'Custom',
  },
  {
    title: 'Academic & Project Consulting',
    description: 'Comprehensive support for engineering and computer science students. End-to-end project development, consulting, and technical mentorship for academic goals.',
    icon: GraduationCap,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    price: 'Custom',
  },
];

const industries = [
  { name: 'Education', icon: BookOpen, color: 'text-blue-400', desc: 'Learning & academic projects.' },
  { name: 'Prototyping', icon: Rocket, color: 'text-indigo-500', desc: 'Proof-of-concept development.' },
  { name: 'Embedded', icon: Cpu, color: 'text-yellow-500', desc: 'Microcontroller & IoT projects.' },
  { name: 'AI/ML', icon: Bot, color: 'text-cyan-400', desc: 'Machine learning experimentation.' },
  { name: 'Automation', icon: Factory, color: 'text-orange-500', desc: 'Control systems & DAQ.' },
  { name: 'IoT', icon: Network, color: 'text-green-500', desc: 'Sensor & telemetry systems.' },
  { name: 'Web', icon: Code, color: 'text-rose-500', desc: 'Modern web applications.' },
  { name: 'Research', icon: Activity, color: 'text-purple-500', desc: 'Technical innovation & R&D.' },
];

const ServicesOverview: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white dark:bg-deep-navy/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-electric-blue/5 blur-[150px] pointer-events-none rounded-full" />
      
      <Container className="relative z-10">
        <SectionHeading
          title="Our Core Expertise"
          subtitle="We specialize in building innovative prototypes, learning-focused solutions, and cutting-edge software for ambitious projects and emerging technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard 
                className="h-full flex flex-col group cursor-pointer border-white/10 dark:border-white/5 hover:border-electric-blue/50 dark:hover:border-electric-blue/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)]"
                onClick={() => {
                  const el = document.getElementById('process-flow');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm", service.bg, service.color)}>
                    <service.icon size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-sora mb-4 text-gray-900 dark:text-white group-hover:text-electric-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-silver-gray mb-8 font-inter leading-relaxed flex-grow text-sm">
                  {service.description}
                </p>
                <div className="flex items-center text-electric-blue font-bold gap-2 group/btn border-t border-gray-100 dark:border-white/5 pt-6 mt-auto">
                  <span>Explore Solutions</span>
                  <ArrowRight size={18} className="transform group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas Section */}
        <div className="mt-16">
          <SectionHeading
            title="Our Focus Areas"
            subtitle="We bring innovation and technical excellence across multiple domains, from education and research to cutting-edge automation and AI."
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group p-6 glass rounded-3xl border border-gray-200/50 dark:border-white/5 hover:border-electric-blue/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`mb-4 transition-transform duration-500 group-hover:scale-125 ${ind.color}`}>
                    <ind.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-bold font-sora mb-2">{ind.name}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-inter leading-tight">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ServicesOverview;
