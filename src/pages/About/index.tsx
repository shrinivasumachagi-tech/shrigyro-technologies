import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Rocket, Zap, Code, Cpu, Network } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FinalCTA from '@/components/home/FinalCTA';
import SEO from '@/components/layout/SEO';
import AnimatedStats from '@/components/ui/AnimatedStats';
import { GlowBackground } from '@/components/ui/BackgroundAnimations';
import { SITE_URL } from '@/constants/seo';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';



const expertises = [
  { name: 'Artificial Intelligence', icon: Zap },
  { name: 'Embedded Systems', icon: Cpu },
  { name: 'Cloud Architecture', icon: Network },
  { name: 'Enterprise SaaS', icon: Code },
  { name: 'IoT Solutions', icon: Rocket },
  { name: 'Industrial Automation', icon: Lightbulb }
];

const AboutPage: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <AppLayout>
      <SEO title="About ShriGyro Technologies | AI & Engineering Future" url={`${SITE_URL}/about`} />
      
      {/* Hero Section */}
      <section className={cn("pt-32 pb-24 relative overflow-hidden transition-colors duration-700", isDarkMode ? "bg-slate-950" : "bg-slate-50")}>
        <GlowBackground />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="text-sm font-semibold tracking-wide uppercase text-gradient">
                Our Story
              </span>
            </div>
            <h1 className={cn("text-5xl md:text-6xl font-bold font-sora tracking-tight mb-6", isDarkMode ? "text-white" : "text-slate-900")}>
              Engineering the <span className="text-gradient">Next Era</span> of Technology
            </h1>
            <p className={cn("text-lg md:text-xl font-medium leading-relaxed", isDarkMode ? "text-gray-300" : "text-gray-600")}>
              ShriGyro Technologies is a premium innovation studio dedicated to bridging the gap between hardware engineering and intelligent software.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className={cn("py-24 relative", isDarkMode ? "bg-slate-900/50" : "bg-white")}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn("p-10 rounded-[2.5rem] border relative overflow-hidden group hover:-translate-y-2 transition-all duration-500", isDarkMode ? "glass border-white/10" : "bg-white border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]")}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <Target size={120} className={isDarkMode ? "text-electric-blue" : "text-blue-500"} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 text-electric-blue flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h3 className={cn("text-3xl font-bold font-sora mb-4", isDarkMode ? "text-white" : "text-slate-900")}>Our Vision</h3>
                <p className={cn("leading-relaxed text-lg", isDarkMode ? "text-gray-300" : "text-gray-600")}>
                  To become the global benchmark for intelligent automation and embedded technology, empowering businesses and engineers to construct a smarter, automated future.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn("p-10 rounded-[2.5rem] border relative overflow-hidden group hover:-translate-y-2 transition-all duration-500", isDarkMode ? "glass border-white/10" : "bg-white border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]")}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <Lightbulb size={120} className={isDarkMode ? "text-cyan" : "text-blue-500"} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-cyan/10 text-cyan flex items-center justify-center mb-6">
                  <Lightbulb size={32} />
                </div>
                <h3 className={cn("text-3xl font-bold font-sora mb-4", isDarkMode ? "text-white" : "text-slate-900")}>Our Mission</h3>
                <p className={cn("leading-relaxed text-lg", isDarkMode ? "text-gray-300" : "text-gray-600")}>
                  To deliver unparalleled engineering prototypes and production-ready SaaS architectures that solve complex industrial challenges through learning, experimentation, and extreme technical rigor.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Technology Expertise */}
      <section className={cn("py-24 relative overflow-hidden", isDarkMode ? "bg-slate-950" : "bg-slate-50")}>
        <Container>
          <SectionHeading
            title="Technology Expertise"
            subtitle="Mastery over the full spectrum of modern digital architecture."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {expertises.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("p-6 rounded-2xl border flex flex-col items-center text-center gap-4 transition-all hover:-translate-y-2", isDarkMode ? "glass border-white/5 hover:border-electric-blue/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]" : "bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg")}
              >
                <div className={cn("p-4 rounded-xl", isDarkMode ? "bg-white/5 text-electric-blue" : "bg-blue-50 text-blue-600")}>
                  <tech.icon size={32} />
                </div>
                <span className={cn("font-bold", isDarkMode ? "text-white" : "text-slate-900")}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Animated Stats */}
      <section className={cn("py-24 relative", isDarkMode ? "bg-slate-900" : "bg-white")}>
        <Container>
          <AnimatedStats
            stats={[
              { label: 'Successful Deployments', value: '15+' },
              { label: 'Technologies Mastered', value: '25+' },
              { label: 'Industry Verticals', value: '8' },
              { label: 'Client Satisfaction', value: '100%' },
            ]}
          />
        </Container>
      </section>



      <FinalCTA />
    </AppLayout>
  );
};

export default AboutPage;
