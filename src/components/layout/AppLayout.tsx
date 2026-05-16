import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import QueryModal from '../ui/QueryModal';
import { cn } from '@/utils/cn';
import FloatingBrandElement from '@/components/branding/FloatingBrandElement';

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-deep-navy dark:text-white', className)}>
      <Navbar />
      <QueryModal />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow pt-20" // space for fixed navbar
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingBrandElement />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-blue z-[100] origin-left"
        style={{
          scaleX: 0, // This will be handled by Framer Motion scroll progress if needed, 
          // or we can use a custom scroll hook. For now, simple fixed bar.
        }}
      />
    </div>
  );
};

export default AppLayout;
