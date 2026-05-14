import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹5,000+',
    description: 'Ideal for mini-projects and fundamental proof-of-concepts.',
    features: ['Standard Project Source Code', 'Basic Documentation', 'Component List & Schematic', '1-Week Email Support'],
    tech: 'Arduino, Basic Sensors, Simple Web hooks',
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Standard',
    price: '₹15,000+',
    description: 'Comprehensive solutions for final year projects and prototype validation.',
    features: ['Complete Source Code & Libraries', 'Detailed Project Report (60+ Pages)', 'PPT & Block Diagrams', '2-Week Support & Debugging', 'Hardware Assembly Guidance'],
    tech: 'ESP32, Raspberry Pi Pico, Flutter, IoT Dashboards',
    gradient: 'from-purple-500 to-indigo-600',
    popular: true
  },
  {
    name: 'Advanced',
    price: '₹35,000+',
    description: 'High-end intelligent systems integrating AI, Cloud, and custom Hardware.',
    features: ['Enterprise-Grade Source Code', 'IEEE Format Documentation', 'Cloud Database Integration', 'AI/ML Model Training', '4-Week Technical Support', 'Viva/Presentation Preparation'],
    tech: 'Edge AI, Jetson Nano, AWS IoT, Custom PCB Design',
    gradient: 'from-orange-400 to-red-500'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Scalable industrial solutions and full-scale product development.',
    features: ['Scalable Industrial Architecture', 'End-to-End Deployment', 'On-Site Technical Support', 'Full System Documentation', 'Lifecycle Maintenance'],
    tech: 'Industrial PLC, ERP Integration, Computer Vision, Robotics',
    gradient: 'from-gray-700 to-black'
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Flexible Solutions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Transparent Value</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Our pricing models are designed to cater to academic innovation and industrial excellence with zero hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden group`}
            >
              {/* Neon Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.gradient}`}></div>
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${plan.gradient}`}></div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${plan.gradient}`}>
                  {plan.price}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[60px]">
                {plan.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase text-slate-400 mb-3 tracking-widest">Included Technologies</h4>
                <p className="text-xs font-medium dark:text-slate-300 text-slate-600 italic">
                  {plan.tech}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 border-2 border-transparent bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-2xl`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
