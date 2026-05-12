import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, 
  PenTool, 
  Code2, 
  Bug, 
  FileText, 
  Rocket 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Requirement Analysis & Strategy',
    description: 'We initiate every engagement with a comprehensive discovery phase. Our engineers collaborate with your team to deeply understand core objectives, assess technology stack feasibility, and define a scalable architecture roadmap.',
    icon: FileSearch,
    details: ['In-depth requirement gathering', 'Technology stack consulting', 'Domain & feasibility analysis'],
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    title: 'Architectural Planning',
    description: 'Before writing a single line of code, we design robust system blueprints. We map out database schemas, API topologies, hardware interfaces, and create high-fidelity UI/UX wireframes to guarantee alignment.',
    icon: PenTool,
    details: ['System architecture blueprints', 'Database & API design', 'UI/UX wireframing'],
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    title: 'Agile Engineering',
    description: 'Our core development phase merges precision engineering with agile methodologies. We build clean, modular, and highly scalable code across frontend interfaces, backend microservices, and custom hardware logic.',
    icon: Code2,
    details: ['Frontend & Backend coding', 'Custom hardware integration', 'AI & Machine Learning logic'],
    color: 'text-electric-blue',
    bg: 'bg-electric-blue/10',
    border: 'border-electric-blue/20'
  },
  {
    title: 'Rigorous QA & Testing',
    description: 'Quality is non-negotiable. We subject the system to exhaustive testing protocols including unit tests, UI/UX audits, security vulnerability checks, and high-load performance optimization.',
    icon: Bug,
    details: ['Automated functional testing', 'Security & load testing', 'UI/UX responsiveness checks'],
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    title: 'Enterprise Documentation',
    description: 'We deliver comprehensive, industry-standard documentation. For enterprise clients, this means full API references and deployment guides; for academia, it includes IEEE-format reports and abstract synopses.',
    icon: FileText,
    details: ['Technical & API documentation', 'IEEE format reports & PPTs', 'UML system diagrams'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  {
    title: 'Deployment & Handover',
    description: 'The final phase involves seamless deployment to your production environment or secure cloud infrastructure. We provide full source code handover, hardware setup support, and comprehensive training.',
    icon: Rocket,
    details: ['Cloud server deployment', 'Full source code handover', 'Post-deployment support'],
    color: 'text-cyan',
    bg: 'bg-cyan/10',
    border: 'border-cyan/20'
  }
];

const ProjectDevelopmentFlow: React.FC = () => {
  return (
    <section id="process-flow" className="py-24 relative overflow-hidden bg-deep-navy">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Project Development Flow"
          subtitle="Our enterprise-grade methodology ensures every system we build is scalable, secure, and delivered on time."
        />

        <div className="max-w-5xl mx-auto mt-20 relative">
          {/* Central Neon Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue/50 via-purple-500/50 to-cyan/50 -translate-x-1/2 rounded-full" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-deep-navy border-4 border-electric-blue items-center justify-center z-10 shadow-[0_0_20px_rgba(0,240,255,0.5)]"
                  >
                    <span className="text-white font-bold font-sora">{index + 1}</span>
                  </motion.div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                  >
                    <div className={`glass p-8 rounded-3xl border ${step.border} relative group hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl hover:shadow-electric-blue/10`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center`}>
                            <step.icon size={28} />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-electric-blue mb-1 block">Step 0{index + 1}</span>
                            <h3 className="text-2xl font-bold font-sora text-white">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 font-inter leading-relaxed mb-6">
                          {step.description}
                        </p>

                        <div className="space-y-3">
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                              <span className="text-sm font-medium text-gray-300">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDevelopmentFlow;
