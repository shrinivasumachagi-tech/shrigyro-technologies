import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bot, Layers, Network, Activity, Zap, CheckCircle2, Trophy, Terminal, Server, BarChart, Shield, BookOpen } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import DigitalGlobe from './DigitalGlobe';
import GlobeParticles from './GlobeParticles';
import OrbitingText from './OrbitingText';
import { cn } from '@/utils/cn';

// Distribution for multiple rings
const orbitData = [
  // Inner Ring (Stats) - Radius Index 0
  { name: 'AI Systems', value: '40+', icon: CheckCircle2, ring: 0, angle: 0 },
  { name: 'Client Satisfaction', value: '98%', icon: Trophy, ring: 0, angle: 120 },
  { name: 'Tech Stack', value: '10+', icon: Terminal, ring: 0, angle: 240 },
  
  // Middle Ring (Core Services) - Radius Index 1
  { name: 'AI Automation', icon: Bot, color: 'text-blue-500', ring: 1, angle: 30 },
  { name: 'ERP Systems', icon: Layers, color: 'text-purple-500', ring: 1, angle: 150 },
  { name: 'Embedded', icon: Cpu, color: 'text-orange-500', ring: 1, angle: 270 },
  
  // Outer Ring (Specialized) - Radius Index 2
  { name: 'Robotics', icon: Activity, color: 'text-red-500', ring: 2, angle: 60 },
  { name: 'IoT Edge', icon: Network, color: 'text-cyan-500', ring: 2, angle: 120 },
  { name: 'Cloud Infra', icon: Server, color: 'text-indigo-500', ring: 2, angle: 180 },
  { name: 'AI Analytics', icon: BarChart, color: 'text-green-500', ring: 2, angle: 240 },
  { name: 'Cyber Security', icon: Shield, color: 'text-yellow-500', ring: 2, angle: 300 },
  { name: 'Automation', icon: Zap, color: 'text-pink-500', ring: 2, angle: 0 },
  { name: 'Academic', icon: BookOpen, color: 'text-amber-500', ring: 1, angle: 90 },
];

const OrbitSystem: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ringRadii = isMobile ? [90, 160, 240] : [140, 260, 380];

  return (
    <div className="relative w-full aspect-square max-w-[900px] mx-auto flex items-center justify-center py-20">
      
      {/* Globe Particle Effects */}
      <GlobeParticles />

      {/* Central Digital Globe */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-50 flex items-center justify-center"
      >
        <DigitalGlobe />
      </motion.div>

      {/* Orbit Rings (Visuals) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {ringRadii.map((radius, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute border border-white/5 dark:border-white/10 rounded-full"
            style={{ width: radius * 2, height: radius * 2 }}
          >
            {/* Pulsing energy nodes on orbit ring */}
            {[...Array(4)].map((_, nodeIdx) => {
              const nodeAngle = (nodeIdx / 4) * Math.PI * 2;
              const nodeX = Math.cos(nodeAngle) * radius;
              const nodeY = Math.sin(nodeAngle) * radius;
              return (
                <motion.div
                  key={`ring-node-${i}-${nodeIdx}`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: nodeIdx * 0.3,
                  }}
                  className="absolute w-1.5 h-1.5 bg-electric-blue rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: -3,
                    marginTop: -3,
                    transform: `translate(${nodeX}px, ${nodeY}px)`,
                    boxShadow: 'inset 0 0 8px rgba(37, 99, 235, 0.5)',
                  }}
                />
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* Orbital Items */}
      {orbitData.map((item, index) => {
        const radius = ringRadii[item.ring];
        const angleRad = (item.angle * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;

        return (
          <motion.div
            key={`${item.name}-${index}`}
            className="absolute z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: x,
              y: y,
            }}
            transition={{ 
              delay: 0.5 + index * 0.05, 
              duration: 0.8, 
              ease: "backOut" 
            }}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: item.value ? (isMobile ? -60 : -75) : (isMobile ? -50 : -70), // Center the card
              marginTop: item.value ? (isMobile ? -35 : -45) : (isMobile ? -20 : -25),
            }}
          >
            {item.value ? (
              <StatCard item={item} isMobile={isMobile} duration={4 + (index % 3) * 0.8} />
            ) : (
              <ServiceCard item={item} isMobile={isMobile} duration={5 + (index % 3) * 0.8} />
            )}
          </motion.div>
        );
      })}

      {/* Background Decorative Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          className="absolute pointer-events-none opacity-[0.15]"
          style={{ width: `${ringRadii[2] * 2.2}px`, height: `${ringRadii[2] * 2.2}px` }}
        >
          <div className="w-1.5 h-1.5 bg-electric-blue rounded-full absolute top-1/2 left-0" />
        </motion.div>
      ))}
      
      {/* Orbiting Text - "GLOB" around the globe */}
      <OrbitingText
        text="SHRIGYRO TECHNOLOGY"
        radius={isMobile ? 115 : 165}
        duration={35}
        direction="clockwise"
        className="font-sora"
      />
    </div>
  );
};

const StatCard = ({ item, isMobile, duration }: { item: (typeof orbitData)[0], isMobile: boolean; duration: number }) => (
  <motion.div
    animate={{ y: [0, isMobile ? -5 : -10, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
    <GlassCard className="p-2 md:p-4 min-w-[120px] md:min-w-[150px] border-cyan/20 bg-gray-100/60 dark:bg-black/40 hover:border-cyan/50 transition-colors shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <item.icon size={isMobile ? 14 : 16} className="text-cyan mb-1.5" />
        <h4 className="text-lg md:text-2xl font-bold font-sora text-gray-900 dark:text-white leading-none">{item.value}</h4>
        <p className="text-[7px] md:text-[9px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{item.name}</p>
      </div>
    </GlassCard>
  </motion.div>
);

const ServiceCard = ({ item, isMobile, duration }: { item: (typeof orbitData)[0], isMobile: boolean; duration: number }) => (
  <motion.div
    animate={{ y: [0, isMobile ? 5 : 10, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="glass px-2.5 py-1.5 md:px-5 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 border-white/10 dark:border-white/5 hover:border-electric-blue/40 transition-all cursor-pointer shadow-xl group">
      <div className={cn("p-1 md:p-2 rounded-xl bg-gray-100 dark:bg-white/5 group-hover:bg-electric-blue group-hover:text-white transition-all", item.color)}>
        <item.icon size={isMobile ? 12 : 16} />
      </div>
      <span className="text-[8px] md:text-xs font-bold font-sora whitespace-nowrap text-gray-900 dark:text-white uppercase tracking-wider">{item.name}</span>
    </div>
  </motion.div>
);

export default OrbitSystem;
