import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

// Pure function to generate particles - defined outside component
const generateParticles = () => {
  return Array.from({ length: 40 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 40;
    return {
      id: i,
      cx: 50 + radius * Math.cos(angle),
      cy: 50 + radius * Math.sin(angle),
      r: Math.random() * 0.8 + 0.3,
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 1.5,
    };
  });
};

const DigitalGlobe: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isDark = theme === 'dark';
  const globeSize = isMobile ? 240 : 320;
  const particleColor = isDark ? '#00ffff' : '#0099ff';
  const glowColor = isDark ? 'rgba(0, 217, 255, 0.3)' : 'rgba(0, 102, 204, 0.2)';

  // Generate random particles inside circle using useMemo
  const particles = useMemo(() => {
    return generateParticles();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            boxShadow: [
              `0 0 40px 20px ${isDark ? 'rgba(0, 217, 255, 0.15)' : 'rgba(0, 102, 204, 0.1)'}`,
              `0 0 60px 30px ${isDark ? 'rgba(0, 217, 255, 0.08)' : 'rgba(0, 102, 204, 0.05)'}`,
              `0 0 40px 20px ${isDark ? 'rgba(0, 217, 255, 0.15)' : 'rgba(0, 102, 204, 0.1)'}`,
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: globeSize + 60,
            height: globeSize + 60,
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Simple SVG Circle with dot particles */}
      <svg
        width={globeSize}
        height={globeSize}
        viewBox="0 0 100 100"
        className="relative z-20"
        style={{
          filter: `drop-shadow(0 0 30px ${glowColor})`,
        }}
      >
        <defs>
          <radialGradient id="circleFill" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: isDark ? 'rgba(50, 243, 255, 0.08)' : 'rgba(118, 199, 255, 0.05)' }} />
            <stop offset="100%" style={{ stopColor: isDark ? 'rgba(0, 84, 166, 0.05)' : 'rgba(42, 108, 188, 0.03)' }} />
          </radialGradient>
        </defs>

        {/* Main circle */}
        <circle cx="50" cy="50" r="45" fill="url(#circleFill)" stroke={particleColor} strokeWidth="0.5" opacity="0.6" />

        {/* Dot particles inside circle */}
        <g fill={particleColor}>
          {particles.map((particle) => (
            <motion.circle
              key={particle.id}
              cx={particle.cx}
              cy={particle.cy}
              r={particle.r}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                r: [particle.r, particle.r * 1.5, particle.r],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: particle.delay,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Static company name below circle - NOT rotating */}
      <div className="absolute bottom-2 text-center text-[10px] font-bold uppercase tracking-[0.15em] opacity-70" style={{ color: particleColor }}>
        ShriGyro Technology
      </div>
    </motion.div>
  );
};

export default DigitalGlobe;
