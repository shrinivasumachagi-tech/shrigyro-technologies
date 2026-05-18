import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceDetails } from '@/data/serviceDetails';
import { cn } from '@/utils/cn';
import SectionHeading from '@/components/ui/SectionHeading';
import Container from '@/components/ui/Container';
import { Bot, Code, Cpu, Network, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import Tilt from 'react-parallax-tilt';

const iconMap: Record<string, React.ElementType> = {
  'ai-automation': Bot,
  'web-development': Code,
  'embedded-systems': Cpu,
  'iot-solutions': Network,
  'whatsapp-automation': MessageCircle,
};

const ServicesOverview: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [activeId, setActiveId] = useState<string>(serviceDetails[0].id);

  const activeService = serviceDetails.find((s) => s.id === activeId) || serviceDetails[0];
  const ActiveIcon = iconMap[activeService.id] || Bot;

  return (
    <section id="services" className={`relative py-24 overflow-hidden transition-colors duration-700 ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 right-0 w-1/3 h-[600px] rounded-full blur-[150px] opacity-30 ${isDarkMode ? 'bg-cyan-900/40' : 'bg-blue-100'}`} />
        <div className={`absolute bottom-0 left-0 w-1/3 h-[500px] rounded-full blur-[150px] opacity-30 ${isDarkMode ? 'bg-blue-900/40' : 'bg-cyan-100'}`} />
      </div>

      <Container className="relative z-10">
        <SectionHeading 
          title="Premium Capabilities" 
          subtitle="Explore our advanced ecosystem of AI, embedded systems, and digital automation solutions designed for the future."
          centered
        />

        <div className="mt-16 flex flex-col lg:flex-row gap-8 min-h-[600px]">
          {/* Left Side - Compact Vertical Tabs */}
          <div className="w-full lg:w-4/12 flex flex-col gap-3">
            {serviceDetails.map((service) => {
              const Icon = iconMap[service.id] || Bot;
              const isActive = activeId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveId(service.id);
                    if (window.innerWidth < 1024) {
                      document.getElementById('service-detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                  }}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={cn(
                    "text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg",
                    isActive 
                      ? isDarkMode 
                        ? 'bg-slate-900 neon-border' 
                        : 'bg-white shadow-xl border-blue-500 border'
                      : isDarkMode
                        ? 'bg-slate-900/40 border border-white/5 hover:bg-slate-800'
                        : 'bg-white/60 border border-slate-200 hover:bg-white'
                  )}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={cn(
                      "p-2.5 rounded-lg transition-colors duration-300",
                      isActive
                        ? "bg-electric-blue text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                        : isDarkMode ? "bg-slate-800 text-slate-400 group-hover:text-electric-blue" : "bg-slate-100 text-slate-500 group-hover:text-blue-500"
                    )}>
                      <Icon size={20} />
                    </div>
                    <h3 className={cn(
                      "text-sm lg:text-base font-bold transition-colors duration-300",
                        isActive 
                          ? isDarkMode ? "text-white" : "text-blue-600"
                          : isDarkMode ? "text-slate-300" : "text-slate-700"
                      )}>
                        {service.title}
                    </h3>
                  </div>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-electric-blue shadow-[0_0_10px_#0ea5e9]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side - Detailed Premium Preview Panel */}
          <div id="service-detail-panel" className="w-full lg:w-8/12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full"
              >
                <Tilt 
                  tiltMaxAngleX={5} 
                  tiltMaxAngleY={5} 
                  glareEnable={true} 
                  glareMaxOpacity={0.1}
                  className={cn(
                    "h-full rounded-3xl p-8 lg:p-12 border flex flex-col justify-between relative overflow-hidden group/card",
                    isDarkMode 
                      ? "bg-slate-900/60 backdrop-blur-xl border-white/10 shadow-[0_0_40px_rgba(14,165,233,0.1)]" 
                      : "bg-white border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                  )}
                >
                  <div className="absolute -bottom-20 -right-20 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0 transform -rotate-12 group-hover/card:rotate-0 group-hover/card:scale-110 transition-all duration-700 ease-out">
                    <ActiveIcon size={350} />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-electric-blue/10 text-electric-blue">
                        <ActiveIcon size={32} />
                      </div>
                      <h2 className={cn("text-3xl lg:text-4xl font-bold", isDarkMode ? "text-white" : "text-slate-900")}>
                        {activeService.title}
                      </h2>
                    </div>

                    <p className={cn("text-lg mb-8 leading-relaxed", isDarkMode ? "text-slate-300" : "text-slate-600")}>
                      {activeService.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className={cn("text-sm font-semibold uppercase tracking-wider mb-4", isDarkMode ? "text-slate-400" : "text-slate-500")}>Key Features</h4>
                        <ul className="space-y-3">
                          {activeService.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 size={18} className="text-electric-blue mt-0.5 shrink-0" />
                              <span className={cn("text-sm", isDarkMode ? "text-slate-300" : "text-slate-700")}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className={cn("text-sm font-semibold uppercase tracking-wider mb-4", isDarkMode ? "text-slate-400" : "text-slate-500")}>Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeService.technologies.slice(0, 6).map((tech, i) => (
                            <span 
                              key={i}
                              className={cn(
                                "px-3 py-1 text-xs font-medium rounded-full border",
                                isDarkMode ? "bg-slate-800 border-slate-700 text-slate-300" : "bg-slate-100 border-slate-200 text-slate-700"
                              )}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-electric-blue/10 to-transparent border-l-4 border-electric-blue">
                      <h4 className={cn("text-sm font-bold uppercase tracking-wider mb-2", isDarkMode ? "text-white" : "text-slate-900")}>Workflow Highlights</h4>
                      <p className={cn("text-sm", isDarkMode ? "text-slate-300" : "text-slate-600")}>End-to-end industrial lifecycle including architecture planning, rapid prototyping, rigorous testing, and seamless enterprise integration.</p>
                    </div>
                  </div>

                  <div className="pt-8 mt-auto relative z-10 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className={isDarkMode ? "text-slate-400" : "text-slate-500"}>
                      <span className="text-sm">Starting from</span>
                      <div className={cn("text-2xl font-bold", isDarkMode ? "text-white" : "text-slate-900")}>
                        {activeService.startingPrice}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => window.location.href = `/services#${activeService.id}`}
                      className={cn(
                        "w-full sm:w-auto px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105",
                        isDarkMode ? "bg-electric-blue text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:bg-cyan-500" : "bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                      )}
                    >
                      View Full Details
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </Tilt>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
