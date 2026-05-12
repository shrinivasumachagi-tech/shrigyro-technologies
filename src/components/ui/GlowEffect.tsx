import React from 'react';
import { cn } from '@/utils/cn';

interface GlowEffectProps {
  color?: string;
  size?: string;
  opacity?: string;
  className?: string;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  color = 'bg-electric-blue',
  size = 'w-96 h-96',
  opacity = 'opacity-20',
  className,
}) => {
  return (
    <div
      className={cn(
        'absolute rounded-full blur-[120px] pointer-events-none',
        color,
        size,
        opacity,
        className
      )}
    />
  );
};

export default GlowEffect;
