import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import GlobeBackground from './GlobeBackground';
import OrbitSystem from './OrbitSystem';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Enhanced Animated Background with Deep-Space Digital Atmosphere */}
      <GlobeBackground />
      
      {/* Additional glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 dark:to-black/40" />
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-electric-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
          </span>
          Engineering the Intelligent Future
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-4xl mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-bold font-sora leading-[1.05] tracking-tight mb-8"
          >
            Engineering the Future of <span className="text-gradient">Intelligent Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-silver-gray font-inter leading-relaxed max-w-3xl mx-auto"
          >
            We are an emerging innovation-driven engineering studio specializing in AI, embedded systems, automation research, and intelligent software development. We transform ambitious ideas into working prototypes and learning-focused solutions, bridging creative thinking with cutting-edge technology to drive innovation and technical excellence.
          </motion.p>
        </div>

        {/* Centerpiece: Technology Orbit System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="relative w-full mb-20"
        >
          <OrbitSystem />
        </motion.div>

        {/* Bottom Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="gradient"
              size="lg"
              className="px-10 py-6 text-lg shadow-2xl shadow-electric-blue/20 group"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('openQueryModal', {
                    detail: {
                      formName: 'Popup Query Modal',
                      title: 'Start Your Project',
                    },
                  })
                )
              }
            >
              Get Started
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-10 py-6 text-lg glass backdrop-blur-md"
              onClick={() => navigate('/solutions')}
            >
              Explore Solutions
            </Button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-5 h-8 rounded-full border border-gray-400 flex items-start justify-center p-1">
              <motion.div className="w-1 h-1 bg-gray-400 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        {/* Technology Badges (Bottom Sticky-ish) */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          {['AI-POWERED', 'ENTERPRISE-GRADE', 'CLOUD-NATIVE', 'ACADEMIC EXCELLENCE'].map(badge => (
            <span key={badge} className="text-[10px] font-bold tracking-[0.3em] font-sora">{badge}</span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
