import React from 'react';
import { motion } from 'framer-motion';
import { BRAND_ASSETS } from '@/constants/branding';

const FloatingBrandElement: React.FC = () => {
  return (
    <motion.div
      className="pointer-events-none fixed bottom-6 left-4 z-40 hidden h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/15 bg-white/55 shadow-[0_0_34px_rgba(37,99,235,0.22)] backdrop-blur-xl dark:bg-black/25 sm:flex md:bottom-8 md:left-8 md:h-16 md:w-16"
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay: 0.8 },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        scale: { duration: 0.7, delay: 0.8 },
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl" />
      <img
        src={BRAND_ASSETS.globe}
        alt=""
        className="relative h-9 w-9 object-contain drop-shadow-[0_0_18px_rgba(56,189,248,0.65)] md:h-11 md:w-11"
        width="44"
        height="44"
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
};

export default FloatingBrandElement;
