import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Rocket, 
  ShieldCheck, 
  Layers,
  Zap,
  Globe,
  Brain,
  Activity
} from 'lucide-react';
import Container from '@/components/ui/Container';

const differentiators = [
  { title: 'Technical Innovation', icon: Brain, desc: 'We focus on building intelligent, thoughtful solutions. From AI experimentation to prototype automation systems, innovation drives our work.' },
  { title: 'Full-Spectrum Development', icon: Layers, desc: 'From embedded systems and IoT devices to modern web applications, we handle diverse technology stacks and project types.' },
  { title: 'Learning-Focused Approach', icon: Globe, desc: 'We emphasize education and knowledge sharing. We help students, startups, and teams learn cutting-edge technologies through hands-on project development.' },
  { title: 'Quality Craftsmanship', icon: ShieldCheck, desc: 'Every project is built with attention to detail, best practices, and a focus on clean, maintainable code and solid engineering.' }
];

const philosophy = [
  { title: 'Innovation First', icon: Zap, desc: 'We believe in building creative, forward-thinking solutions that challenge conventional approaches and embrace emerging technologies.' },
  { title: 'Problem Solving', icon: Target, desc: 'We understand your goals and constraints. We build thoughtful, tailored solutions that actually solve real problems.' },
  { title: 'Practical Results', icon: Activity, desc: 'We focus on building things that work. From working prototypes to production-ready software, we deliver tangible, functional solutions.' }
];

const stats = [
  { label: 'Projects Delivered', value: '10+' },
  { label: 'Tech Expertise', value: '15+' },
  { label: 'Focus Areas', value: '5' },
  { label: 'Team Passion', value: '100%' }
];

const WhyShriGyro: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-deep-navy">
      {/* Animated AI Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F0FF05_1px,transparent_1px),linear-gradient(to_bottom,#00F0FF05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* Floating Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-electric-blue/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <Container className="relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-electric-blue/30 text-electric-blue text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Zap size={14} className="animate-pulse" />
            The ShriGyro Manifesto
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-sora text-white mb-8 leading-tight"
          >
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-cyan to-purple-500 animate-gradient-x">Intelligent Future</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 font-inter leading-relaxed"
          >
            ShriGyro Technologies is an emerging innovation studio focused on building intelligent solutions and learning-driven platforms. We combine embedded systems engineering, AI/ML experimentation, and modern software development to create cutting-edge prototypes and research solutions. Our mission is to empower engineers, students, and innovators through technical excellence and creative problem-solving.
          </motion.p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border-white/5 hover:border-electric-blue/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.2)]">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold font-sora text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed font-inter text-justify">
              To become the global catalyst for innovation-driven engineering by building future-ready systems that seamlessly integrate physical hardware with advanced AI software. We envision a world where intelligent automation solves the most complex industrial bottlenecks, and where robust technology infrastructure empowers businesses to operate with unprecedented efficiency and scale.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border-white/5 hover:border-purple-500/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <Rocket size={32} />
            </div>
            <h3 className="text-2xl font-bold font-sora text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed font-inter text-justify">
              Empowering students and enterprises alike by delivering industry-oriented, scalable technology solutions. We are fiercely dedicated to translating theoretical academic research into robust industrial prototypes, and accelerating digital transformation through modern UI/UX, predictive analytics, and deeply integrated system engineering that puts our clients ahead of the technology curve.
            </p>
          </motion.div>
        </div>

        {/* Our Philosophy Layer */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold font-sora text-center text-white mb-12">Our Engineering Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophy.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 text-center relative group"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                 <item.icon size={36} className="text-cyan mb-6 mx-auto group-hover:scale-110 transition-transform" />
                 <h4 className="text-xl font-bold font-sora text-white mb-3">{item.title}</h4>
                 <p className="text-sm text-gray-400 font-inter leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold font-sora text-center text-white mb-12">The ShriGyro Advantage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((diff, i) => (
              <motion.div 
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 hover:bg-white/5 transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <diff.icon size={28} className="text-electric-blue mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold font-sora text-white mb-3">{diff.title}</h4>
                <p className="text-sm text-gray-400 font-inter leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[3rem] border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.1),transparent)]" />
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center px-4">
                <motion.h4 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="text-4xl md:text-5xl font-black font-sora text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan mb-2"
                >
                  {stat.value}
                </motion.h4>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default WhyShriGyro;
