import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Cpu, Globe,
  FileText, MessageSquare, CheckCircle,
  Package, FileCheck, Book, HardDrive, 
  Hospital, Zap, Bot, Layers, Smartphone, Gauge, Shield, Brain
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const AcademicProjectSolutions: React.FC = () => {
  const services = [
    'Full Project Development', 'Source Code & Database', 'Frontend + Backend Development',
    'Modern UI/UX Design', 'Testing & Debugging', 'Deployment Support', 'Hardware Integration Support'
  ];

  const docs = [
    'Complete Project Report', 'Synopsis Preparation', 'Abstract & Documentation',
    'Flowcharts / UML Diagrams', 'PPT Presentation', 'Viva Questions & Demo Support'
  ];

  const delivery = [
    { title: 'Soft Copy (PDF + DOC)', icon: FileCheck },
    { title: 'Hard Copy Printed Report', icon: Book },
    { title: 'Spiral / Hard Binding', icon: Package },
    { title: 'Final Ready-to-Submit Project Kit', icon: HardDrive }
  ];

  const domains = [
    { name: 'AI Chatbots', icon: MessageSquare },
    { name: 'ERP Systems', icon: Layers },
    { name: 'Smart Attendance Systems', icon: Shield },
    { name: 'IoT Automation', icon: Globe },
    { name: 'Hospital/College Systems', icon: Hospital },
    { name: 'Embedded & IoT Projects', icon: Cpu },
    { name: 'LabVIEW Automation Projects', icon: Gauge },
    { name: 'Web & Mobile Applications', icon: Smartphone },
    { name: 'AI & Automation Projects', icon: Brain },
    { name: 'Robotics Projects', icon: Bot }
  ];

  return (
    <section id="academic-projects" className="py-24 relative overflow-hidden bg-deep-navy">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Academic Project Solutions"
          subtitle="Empowering the next generation of engineers with industry-grade project development. We bridge the academic-industrial gap by delivering production-ready source code, rigorous hardware integration, and comprehensive architectural documentation required for top-tier university submissions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Services & Documentation */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold font-sora text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-electric-blue/10 text-electric-blue">
                  <Code size={20} />
                </div>
                Services Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 glass p-4 rounded-xl border-white/5 hover:border-electric-blue/30 transition-all group"
                  >
                    <CheckCircle size={16} className="text-cyan group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold font-sora text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                  <FileText size={20} />
                </div>
                Documentation & Reporting
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {docs.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 glass p-4 rounded-xl border-white/5 hover:border-purple-500/30 transition-all group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Delivery & Domains */}
          <div className="space-y-12">
             <div>
              <h3 className="text-xl font-bold font-sora text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500">
                  <Package size={20} />
                </div>
                Project Delivery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {delivery.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col gap-3 glass p-6 rounded-2xl border-white/5 hover:border-green-500/30 transition-all group"
                  >
                    <item.icon size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-300 font-bold font-sora leading-tight">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
               <h3 className="text-xl font-bold font-sora text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  <Zap size={20} />
                </div>
                Project Domains
              </h3>
              <div className="flex flex-wrap gap-3">
                {domains.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="flex items-center gap-2 px-4 py-2 glass rounded-full border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all cursor-pointer group"
                  >
                    <item.icon size={14} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Summary (Integrated) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 rounded-[3rem] border-electric-blue/20 bg-gradient-to-r from-electric-blue/5 to-cyan/5 text-center"
        >
          <h4 className="text-2xl font-bold font-sora text-white mb-4">Accelerate Your Engineering Journey</h4>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto font-inter leading-relaxed">
            From initial research and architecture planning to final code compilation and hardware deployment, our dedicated engineering team ensures your project is flawless. Get enterprise-grade guidance and support for your final year submissions, with completely transparent packages tailored to your specific technical requirements.
          </p>
          <button 
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent('openQueryModal', {
                  detail: {
                    formName: 'Academic Project Inquiry Form',
                    title: 'Academic Project Inquiry',
                    service: 'Academic Project',
                    projectType: 'Academic Project',
                  },
                })
              )
            }
            className="px-8 py-4 rounded-2xl bg-electric-blue hover:bg-electric-blue/80 text-white font-bold font-sora transition-all shadow-xl shadow-electric-blue/20"
          >
            Inquire Now
          </button>
        </motion.div>
      </Container>
    </section>
  );
};

export default AcademicProjectSolutions;
