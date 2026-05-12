import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Brain, Smartphone, Coffee, Flame, Code2, Gauge, Layers } from 'lucide-react';

const technologies = [
  { name: 'Python', icon: Code2, color: 'text-yellow-400' },
  { name: 'Java', icon: Coffee, color: 'text-orange-500' },
  { name: 'React', icon: Smartphone, color: 'text-cyan-400' },
  { name: 'Node.js', icon: Globe, color: 'text-green-500' },
  { name: 'Firebase', icon: Flame, color: 'text-yellow-500' },
  { name: 'AI/ML', icon: Brain, color: 'text-purple-500' },
  { name: 'IoT', icon: Zap, color: 'text-blue-500' },
  { name: 'ESP32', icon: Cpu, color: 'text-red-500' },
  { name: 'Arduino', icon: Cpu, color: 'text-teal-500' },
  { name: 'LabVIEW', icon: Gauge, color: 'text-blue-400' },
  { name: 'MERN Stack', icon: Layers, color: 'text-indigo-400' },
];

const TechMarquee: React.FC = () => {
  // Duplicate for seamless loop
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <div className="py-16 bg-gray-50/50 dark:bg-deep-navy/30 border-y border-gray-200/50 dark:border-white/5 overflow-hidden relative group backdrop-blur-sm">
      {/* Dynamic Floating Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100px] bg-electric-blue/10 dark:bg-electric-blue/20 blur-[80px] pointer-events-none rounded-[100%]" />

      {/* Smooth Edge Fades (Adapts to Light/Dark Mode) */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 dark:from-deep-navy dark:via-deep-navy/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 dark:from-deep-navy dark:via-deep-navy/80 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-8 items-center whitespace-nowrap group-hover:[animation-play-state:paused]"
        animate={{ x: [0, -2500] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeItems.map((tech, i) => (
          <div 
            key={i} 
            className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 hover:border-electric-blue/40 dark:hover:border-electric-blue/30 transition-all duration-300 group/item hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,240,255,0.15)] cursor-default"
          >
            <div className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center ${tech.color} group-hover/item:scale-110 transition-transform duration-300 shadow-sm dark:shadow-none`}>
              <tech.icon size={20} />
            </div>
            <span className="text-sm font-bold font-sora text-gray-700 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors uppercase tracking-widest">
              {tech.name}
            </span>
            <div className="absolute inset-0 bg-electric-blue/5 blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
