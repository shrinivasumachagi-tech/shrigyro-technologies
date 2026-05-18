import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Cpu, Globe, FileText, MessageSquare, FileCheck, HardDrive, Zap, Bot, Layers, Terminal, Users, Play, Brain, Gauge
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
const AcademicProjectSolutions: React.FC = () => {
  const projectTypes = [
    { name: 'Embedded Systems', icon: Cpu },
    { name: 'IoT Projects', icon: Globe },
    { name: 'AI/ML Projects', icon: Brain },
    { name: 'Robotics Projects', icon: Bot },
    { name: 'Web Applications', icon: Layers },
    { name: 'Final Year Projects', icon: Terminal },
    { name: 'Mini Projects', icon: Zap },
    { name: 'IEEE Projects', icon: FileCheck },
    { name: 'Internship Projects', icon: Users }
  ];

  const supportSubsections = [
    { title: 'Full Documentation', icon: FileText, desc: 'Project report, abstract, diagrams, module explanation, and implementation details.' },
    { title: 'PPT Preparation', icon: MessageSquare, desc: 'Clean presentation decks for reviews, demos, and final evaluation.' },
    { title: 'Source Code', icon: Code, desc: 'Organized source code with clear logic and explanation support.' },
    { title: 'Deployment Support', icon: Play, desc: 'Website, dashboard, cloud, or demo deployment assistance based on project scope.' },
    { title: 'Hardware Support', icon: HardDrive, desc: 'Component selection, wiring guidance, testing, and troubleshooting support.' },
    { title: 'Viva Preparation', icon: Users, desc: 'Expert guidance on frequently asked technical questions.' }
  ];

  return (
    <section id="academic-projects" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Gradients - Adjusted for Light/Dark visibility */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-blue rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          title="Professional Academic Project Solutions"
          subtitle="ShriGyro Technologies bridges the gap between theoretical classroom learning and real-world industrial application. We provide a premium, high-tech engineering environment where students can build, test, and deploy production-ready solutions for their final year milestones and research papers."
        />

        {/* Concise Impactful Description */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/5 shadow-lg hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Industry Standard</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Developed following strict industrial R&D standards with clean architecture and scalable code.</p>
          </div>
          <div className="glass p-6 rounded-2xl border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/5 shadow-lg hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">End-to-End Guidance</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">We ensure you thoroughly understand the code logic, hardware integration, and technical implementation.</p>
          </div>
          <div className="glass p-6 rounded-2xl border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/5 shadow-lg hover:-translate-y-1 transition-transform">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Complete Package</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Receive working source code, professional documentation, simulation files, and viva support.</p>
          </div>
        </div>

        <div className="mb-16 p-10 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-600/20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <p className="text-3xl font-black font-sora mb-2">Build Your Future with ShriGyro</p>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">Over 500+ successful project deliveries across Embedded, Web, and AI domains for students worldwide.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Project Categories */}
          <div className="glass p-8 rounded-[2.5rem] border-gray-200 dark:border-white/10 shadow-xl bg-white/60 dark:bg-white/5">
            <h3 className="text-2xl font-bold font-sora text-gray-900 dark:text-white mb-8">Specialized Domains</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map((item, i) => (
                <motion.div
                  key={item.name}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-electric-blue/50 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-electric-blue/10 text-electric-blue group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Support Services */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-sora text-gray-900 dark:text-white mb-2">Professional Project Lifecycle</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">We ensure your documentation, code, and presentation meet the highest university and industry standards.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {supportSubsections.map((item, i) => (
                <motion.div
                  key={item.title}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 glass rounded-2xl border-gray-200 dark:border-white/5 hover:border-blue-500/40 transition-all hover:shadow-lg group/item"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover/item:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* LabVIEW Highlight */}
        <div className="grid grid-cols-1 gap-8 mb-20">
          <div className="glass p-10 rounded-[3rem] border-cyan/20 bg-gradient-to-br from-cyan/5 to-blue-500/5">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="p-6 rounded-full bg-cyan/10 text-cyan">
                <Gauge size={64} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black font-sora text-gray-900 dark:text-white mb-4">LabVIEW Automation Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                  Our specialized LabVIEW division focuses on complex industrial monitoring and instrumentation. We provide data acquisition (DAQ), real-time control systems, and high-fidelity virtual instruments. Ideal for both advanced academic research and commercial industrial prototyping.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 rounded-[3rem] border-electric-blue/20 bg-gradient-to-r from-electric-blue/5 to-cyan/5 text-center"
        >
          <h4 className="text-2xl font-bold font-sora text-gray-900 dark:text-white mb-4">Accelerate Your Engineering Journey</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-inter">
            Get professional guidance for your final year submissions with transparent packages, production-ready code, and comprehensive deployment support.
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
