import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, 
  PenTool, 
  Code2, 
  Bug, 
  FileText, 
  Rocket,
  MessageSquare,
  Headphones,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Requirement Discussion',
    description: 'We begin with a clear discussion about your business goal, academic requirement, expected features, budget, timeline, and final output. This helps us understand the real problem before choosing the technology.',
    icon: MessageSquare,
    details: ['Goal and scope discussion', 'Feature list preparation', 'Budget and timeline clarity'],
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    title: 'Planning & Architecture',
    description: 'We plan the system structure, modules, database, hardware connections, APIs, and delivery stages. This step gives every project a strong technical direction before development starts.',
    icon: FileSearch,
    details: ['System architecture', 'Module planning', 'Technology stack selection'],
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    title: 'UI/UX & System Design',
    description: 'For websites, dashboards, and apps, we design simple and modern interfaces. For hardware systems, we prepare circuit flow, control logic, data flow, and demo structure.',
    icon: PenTool,
    details: ['Responsive UI planning', 'Hardware and data flow', 'User journey design'],
    color: 'text-electric-blue',
    bg: 'bg-electric-blue/10',
    border: 'border-electric-blue/20'
  },
  {
    title: 'Development Phase',
    description: 'We build the project with clean code, practical hardware logic, API integrations, automation flows, and clear module separation. Progress is shared in stages when the project scope requires it.',
    icon: Code2,
    details: ['Frontend and backend coding', 'Firmware or AI logic', 'API and database integration'],
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    title: 'Testing & Debugging',
    description: 'We test the project for errors, responsiveness, hardware stability, data accuracy, and demo readiness. Bugs are fixed before final delivery so the solution is usable and reliable.',
    icon: Bug,
    details: ['Functional testing', 'Responsive and hardware checks', 'Bug fixing and refinement'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  {
    title: 'Documentation',
    description: 'We prepare technical documentation based on the project type. Academic projects can include report, PPT, diagrams, abstract, implementation details, and viva guidance.',
    icon: FileText,
    details: ['Project report', 'PPT and diagrams', 'Code and module explanation'],
    color: 'text-cyan',
    bg: 'bg-cyan/10',
    border: 'border-cyan/20'
  },
  {
    title: 'Deployment',
    description: 'For websites, dashboards, cloud systems, and IoT panels, we deploy the project and verify the live flow. For hardware projects, we prepare demo setup and working instructions.',
    icon: Rocket,
    details: ['Cloud or Netlify deployment', 'Hardware demo setup', 'Final delivery checklist'],
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20'
  },
  {
    title: 'Client Support',
    description: 'After delivery, we provide support based on the selected package. We help with small fixes, explanation, handover, and guidance so clients and students can use the project confidently.',
    icon: Headphones,
    details: ['Support period included', 'Usage guidance', 'Upgrade discussion'],
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20'
  }
];

const ProjectDevelopmentFlow: React.FC = () => {
  return (
    <section id="project-workflow" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Project Development Flow"
          subtitle="Our workflow keeps every project clear from the first discussion to delivery, documentation, deployment, and client support."
        />

        <div className="max-w-5xl mx-auto mt-20 relative">
          {/* Central Neon Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue/50 via-purple-500/50 to-cyan/50 -translate-x-1/2 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.7)]" />

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
