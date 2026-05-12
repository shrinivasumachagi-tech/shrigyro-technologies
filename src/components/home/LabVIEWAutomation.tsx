import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Settings, Database, Activity, Zap } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const features = [
  {
    title: 'Instrument Communication',
    desc: 'Develop communication protocols (RS232, TCP/IP, GPIB) to connect and control instruments for prototype and experimental systems.',
    icon: Activity,
  },
  {
    title: 'NI VISA Integration',
    desc: 'Utilize National Instruments Virtual Instrument Software Architecture for seamless hardware-software integration in experimental setups.',
    icon: Settings,
  },
  {
    title: 'LabVIEW Dashboards',
    desc: 'Design intuitive GUI interfaces for real-time monitoring, data visualization, and control of prototype automation systems.',
    icon: Gauge,
  },
  {
    title: 'Data Acquisition (DAQ)',
    desc: 'Implement data logging, signal processing, and experimental analytics using DAQ hardware for prototype development.',
    icon: Database,
  },
  {
    title: 'Prototype Automation',
    desc: 'Build proof-of-concept automation systems and experimentation platforms for learning and research applications.',
    icon: Activity,
  },
  {
    title: 'Sensor Integration',
    desc: 'Develop sensor networks and data aggregation systems for prototype IoT and embedded experimentation projects.',
    icon: Zap,
  },
];

const LabVIEWAutomation: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-deep-navy/20">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan rounded-full blur-[150px] -translate-y-1/2 -ml-300" />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="LabVIEW Prototype & Automation Development"
              subtitle="Designing experimental automation systems, prototype controls, and data acquisition solutions with National Instruments LabVIEW."
              align="left"
            />
            <p className="text-gray-600 dark:text-silver-gray mb-8 font-inter leading-relaxed text-lg">
              We specialize in building innovative prototype automation systems and experimental control platforms using LabVIEW. From developing data acquisition pipelines to creating intuitive monitoring dashboards, we bridge hardware and software for learning-driven and research-focused automation projects.
            </p>
          </motion.div>

          <div className="relative">
             <div className="glass p-6 rounded-3xl border-white/20 shadow-2xl overflow-hidden">
                <div className="bg-black/80 rounded-2xl p-4 aspect-video flex flex-col gap-4">
                   {/* LabVIEW Style UI Mockup */}
                   <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <div className="text-[10px] text-cyan font-mono uppercase tracking-widest">ShriGyro LabVIEW Console v2.0</div>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                         <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                   </div>
                   <div className="flex-grow grid grid-cols-3 gap-4">
                      <div className="col-span-2 bg-white/5 rounded-lg border border-white/5 p-4 flex flex-col gap-4">
                         <div className="h-2 w-1/3 bg-cyan/20 rounded" />
                         <div className="flex-grow flex items-end gap-1">
                            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                               <motion.div 
                                 key={i} 
                                 initial={{ height: 0 }}
                                 animate={{ height: `${h}%` }}
                                 transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                                 className="flex-grow bg-electric-blue/40 rounded-t-sm" 
                               />
                            ))}
                         </div>
                      </div>
                      <div className="flex flex-col gap-4">
                         <div className="flex-grow bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col items-center justify-center gap-2">
                            <Gauge className="text-cyan animate-pulse" size={32} />
                            <div className="text-[10px] text-gray-400 font-mono">PSI: 124.5</div>
                         </div>
                         <div className="flex-grow bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col items-center justify-center gap-2">
                            <Activity className="text-electric-blue" size={32} />
                            <div className="text-[10px] text-gray-400 font-mono">STS: OK</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             {/* Decorative glow */}
             <div className="absolute -inset-4 bg-cyan/10 blur-[40px] -z-10 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full border-transparent hover:border-cyan/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h4 className="font-bold font-sora text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-silver-gray">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LabVIEWAutomation;
