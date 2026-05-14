import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const plans = [
    {
        name: 'Basic',
        price: '₹5,000+',
        icon: <Zap className="w-6 h-6 text-blue-500" />,
        description: 'Perfect for mini-projects and basic automation logic.',
        features: ['Single Module Code', 'Basic Documentation', '7-Day Support', 'Hardware Consulting'],
        color: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/30'
    },
    {
        name: 'Standard',
        price: '₹15,000+',
        icon: <Rocket className="w-6 h-6 text-purple-500" />,
        description: 'Ideal for IoT prototypes and academic final year projects.',
        features: ['End-to-End System', 'Complete Documentation', '30-Day Support', 'Deployment Guidance', 'PPT & Report Support'],
        color: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/30',
        popular: true
    },
    {
        name: 'Advanced',
        price: '₹35,000+',
        icon: <Crown className="w-6 h-6 text-amber-500" />,
        description: 'Premium AI-integrated solutions for complex engineering.',
        features: ['AI/ML Integration', 'Web Dashboard', '90-Day Support', 'Hardware Fabrication', 'IEEE Paper Support'],
        color: 'from-amber-500/20 to-orange-500/20',
        border: 'border-amber-500/30'
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        icon: <Zap className="w-6 h-6 text-emerald-500" />,
        description: 'Full-scale industrial automation and ERP systems.',
        features: ['Scalable Architecture', '24/7 Priority Support', 'On-site Deployment', 'Full Source Rights', 'System Maintenance'],
        color: 'from-emerald-500/20 to-teal-500/20',
        border: 'border-emerald-500/30'
    }
];

const PricingSection = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="pricing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
                    >
                        Transparent Solution Pricing
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Tailored investment plans for academic excellence and industrial innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className={`relative p-8 rounded-2xl border ${plan.border} backdrop-blur-xl bg-white/50 dark:bg-white/5 transition-all duration-300 group`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-blue-500/50">
                                    Most Popular
                                </div>
                            )}

                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 rounded-lg bg-white dark:bg-white/10 w-fit shadow-inner">
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-3xl font-black mb-4 text-blue-600 dark:text-blue-400">
                                    {plan.price}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${plan.popular
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 hover:bg-blue-700'
                                            : 'bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20'
                                        }`}
                                >
                                    Choose {plan.name}
                                </motion.button>
                            </div>

                            {/* Neon Glow effect on hover */}
                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;