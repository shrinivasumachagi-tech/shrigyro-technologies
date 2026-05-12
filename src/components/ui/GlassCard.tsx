import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        'glass rounded-2xl p-6 relative overflow-hidden',
        hoverEffect && 'hover:shadow-2xl hover:shadow-electric-blue/10 transition-shadow duration-300',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      {/* Decorative gradient blur background */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan/10 rounded-full blur-3xl" />
    </motion.div>
  );
};

export default GlassCard;
