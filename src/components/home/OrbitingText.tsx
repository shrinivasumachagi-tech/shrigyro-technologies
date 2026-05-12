import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface OrbitingTextProps {
  text: string;
  radius: number;
  duration: number;
  direction?: 'clockwise' | 'counterclockwise';
  className?: string;
}

const OrbitingText: React.FC<OrbitingTextProps> = ({
  text,
  radius,
  duration,
  direction = 'clockwise',
  className = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Split text into individual characters
  const characters = text.split('');
  const anglePerChar = 360 / characters.length;

  return (
    <motion.div
      animate={{ rotate: direction === 'clockwise' ? 360 : -360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {characters.map((char, index) => {
        const angle = (index * anglePerChar * Math.PI) / 180;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotationAngle = (index * anglePerChar);

        return (
          <motion.span
            key={`${char}-${index}`}
            className={`absolute font-bold text-sm md:text-base tracking-wider ${className}`}
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${rotationAngle + 90}deg)`,
              color: isDark ? '#00d9ff' : '#0066cc',
              textShadow: isDark
                ? '0 0 10px rgba(0, 217, 255, 0.6)'
                : '0 0 8px rgba(0, 102, 204, 0.4)',
              opacity: 0.8,
              transformOrigin: 'center',
              letterSpacing: '0.15em',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default OrbitingText;
