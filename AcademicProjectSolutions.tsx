import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Share2, BookOpen, PenTool, FileText, Play, Users } from 'lucide-react';

const projectCategories = [
    { title: 'Embedded & IoT', icon: <Cpu />, list: ['ESP32 Web Servers', 'Raspberry Pi Edge AI', 'Sensor Networks', 'Real-time Monitoring'] },
    { title: 'AI & Robotics', icon: <Share2 />, list: ['Computer Vision Systems', 'Autonomous Navigation', 'Speech Recognition', 'Industrial Arms'] },
    { title: 'Web & Mobile', icon: <Globe />, list: ['Full-stack Dashboards', 'Firebase Integration', 'Inventory Management', 'E-commerce API'] },
    { title: 'Advanced Research', icon: <BookOpen />, list: ['IEEE Paper Implementation', 'Matlab Simulations', 'Signal Processing', 'Cloud Infrastructure'] }
];

const services = [
    { name: 'Documentation Support', icon: <FileText />, desc: 'Comprehensive technical report writing following university standards.' },
    { name: 'PPT & Viva Prep', icon: <Users />, desc: 'Interactive session for Viva-Voce and presentation design.' },
    { name: 'Deployment Guidance', icon: <Play />, desc: 'Step-by-step guidance on hardware setup and cloud hosting.' },
    { name: 'Source Code', icon: <PenTool />, desc: 'Clean, commented, and professionally structured source code.' }
];

const AcademicProjectSolutions = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-neutral-900/50" id="academic">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Academic Excellence</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                Bridging the Gap Between <span className="text-blue-500">Learning & Innovation</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                ShriGyro Technologies specializes in transforming complex academic requirements into fully functional technical prototypes.
                                We provide end-to-end support for engineering students and researchers.
                            </p>

                            <div className="p-6 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                                <p className="text-2xl font-bold">10+ Successful Deployments</p>
                                <p className="opacity-90">Embedded and IoT projects successfully developed for students and professional clients.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {services.map((s) => (
                                    <div key={s.name} className="flex flex-col gap-2 p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/5">
                                        <div className="text-blue-500">{s.icon}</div>
                                        <h4 className="font-bold text-sm">{s.name}</h4>
                                        <p className="text-xs text-gray-500">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {projectCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all"
                            >
                                <div className="mb-4 text-blue-600 dark:text-blue-400 p-2 bg-blue-50 dark:bg-blue-900/20 w-fit rounded-lg">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                                <ul className="space-y-2">
                                    {cat.list.map(item => (
                                        <li key={item} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack Marquee can go here or as a separate component */}
                <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10">
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                        <span className="font-bold text-xl">Arduino</span>
                        <span className="font-bold text-xl">Raspberry Pi</span>
                        <span className="font-bold text-xl">ESP32</span>
                        <span className="font-bold text-xl">STM32</span>
                        <span className="font-bold text-xl">Python</span>
                        <span className="font-bold text-xl">React</span>
                        <span className="font-bold text-xl">TensorFlow</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicProjectSolutions;