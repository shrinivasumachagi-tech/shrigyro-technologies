import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const GlobeParticles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Generate floating particles positions (memoized to avoid regeneration)
  const floatingParticles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      // Use seeded random based on index for deterministic but pseudo-random positions
      left: (i * 37 % 100),
      top: (i * 43 % 100),
    })),
    []
  );

  useEffect(() => {
    // Animate orbital particles using CSS
    // This creates the orbital particle effect without needing anime.js
    return () => {};
  }, [isDark]);

  const particleColor = isDark ? '#00d9ff' : '#0066cc';
  const particleTrailColor = isDark ? 'rgba(0, 217, 255, 0.3)' : 'rgba(0, 102, 204, 0.2)';

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Orbital ring with moving particles */}
      <svg
        className="absolute"
        width="340"
        height="340"
        viewBox="0 0 340 340"
        style={{ animation: 'none' }}
      >
        <defs>
          <filter id="particleGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Moving particles along orbital path */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 150;
          const cx = 170 + radius * Math.cos(angle);
          const cy = 170 + radius * Math.sin(angle);

          return (
            <motion.g
              key={`orbital-${i}`}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ transformOrigin: '170px 170px' }}
            >
              <circle
                cx={cx}
                cy={cy}
                r="3"
                fill={particleColor}
                opacity="0.8"
                filter="url(#particleGlow)"
              />
              <circle
                cx={cx}
                cy={cy}
                r="6"
                fill={particleTrailColor}
                opacity="0.4"
              />
            </motion.g>
          );
        })}

        {/* Orbital trail circle */}
        <circle
          cx="170"
          cy="170"
          r="150"
          fill="none"
          stroke={particleColor}
          strokeWidth="0.8"
          opacity="0.15"
          strokeDasharray="4,3"
          style={{ animation: 'dash 30s linear infinite' }}
        />
      </svg>

      {/* Floating particle effects */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          data-particle={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: particleColor,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            boxShadow: `0 0 10px ${isDark ? 'rgba(0, 217, 255, 0.6)' : 'rgba(0, 102, 204, 0.4)'}`,
          }}
        />
      ))}

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -942;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobeParticles;
