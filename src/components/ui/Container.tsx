import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, className, fluid = false }) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        fluid ? 'max-w-full' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
