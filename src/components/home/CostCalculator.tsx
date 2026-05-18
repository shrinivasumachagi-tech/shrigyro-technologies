import React, { useState, useMemo } from 'react';
import {
    Calculator,
    CheckCircle2,
    Cpu,
    Globe,
    Brain,
    Zap,
    FileText,
    Rocket,
    Plus,
    ArrowRight
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { GlowBackground } from '@/components/ui/BackgroundAnimations';

const projectTypes = [
    { id: 'academic', label: 'Academic Project', icon: Zap, base: 5000 },
    { id: 'business', label: 'Business Website', icon: Globe, base: 15000 },
    { id: 'iot', label: 'IoT/Embedded System', icon: Cpu, base: 12000 },
    { id: 'ai', label: 'AI/ML Solution', icon: Brain, base: 25000 },
];

const addOns = [
    { id: 'docs', label: 'Full Documentation', price: 2000, icon: FileText },
    { id: 'ppt', label: 'PPT & Viva Support', price: 1500, icon: Rocket },
    { id: 'deploy', label: 'Cloud Deployment', price: 3000, icon: Globe },
    { id: 'hardware', label: 'Hardware Fabrication', price: 5000, icon: Cpu },
];

const CostCalculator: React.FC = () => {
    const [selectedType, setSelectedType] = useState(projectTypes[0]);
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const totalPrice = useMemo(() => {
        const addOnTotal = addOns
            .filter((addon) => selectedAddOns.includes(addon.id))
            .reduce((sum, addon) => sum + addon.price, 0);
        return selectedType.base + addOnTotal;
    }, [selectedType, selectedAddOns]);

    const toggleAddOn = (id: string) => {
        setSelectedAddOns((prev) =>
            prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
        );
    };

    return (
        <section id="cost-calculator" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-deep-navy/40">
            {/* Background decoration */}
            <GlowBackground />
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 blur-[100px] -mr-48 -mt-48 pointer-events-none" />

            <Container>
                <SectionHeading
                    title="Project Cost Estimator"
                    subtitle="Get a quick estimate for your project. Please note that final pricing may vary based on specific technical requirements and hardware components."
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
                    {/* Selection Area */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Project Types */}
                        <div>
                            <h3 className="text-xl font-bold font-sora text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Calculator className="text-electric-blue" size={24} />
                                1. Select Project Domain
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {projectTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        onClick={() => setSelectedType(type)}
                                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${selectedType.id === type.id
                                            ? 'border-electric-blue bg-electric-blue/5 shadow-lg shadow-electric-blue/10'
                                            : 'border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 hover:border-electric-blue/30'
                                            }`}
                                    >
                                        <div className={`p-3 rounded-xl ${selectedType.id === type.id ? 'bg-electric-blue text-white' : 'bg-gray-100 dark:bg-white/10 text-gray-500'}`}>
                                            <type.icon size={24} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 dark:text-white">{type.label}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Starts from Rs. {type.base.toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add-ons */}
                        <div>
                            <h3 className="text-xl font-bold font-sora text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <Plus className="text-electric-blue" size={24} />
                                2. Include Professional Support
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {addOns.map((addon) => (
                                    <div
                                        key={addon.id}
                                        onClick={() => toggleAddOn(addon.id)}
                                        className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${selectedAddOns.includes(addon.id)
                                            ? 'border-electric-blue bg-electric-blue/5'
                                            : 'border-gray-200 dark:border-white/5 bg-white dark:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${selectedAddOns.includes(addon.id) ? 'text-electric-blue' : 'text-gray-400'}`}>
                                                <addon.icon size={20} />
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{addon.label}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold text-gray-500">+Rs. {addon.price}</span>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${selectedAddOns.includes(addon.id) ? 'bg-electric-blue border-electric-blue text-white' : 'border-gray-300'}`}>
                                                {selectedAddOns.includes(addon.id) && <CheckCircle2 size={14} />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Estimate Summary */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24">
                        <GlassCard className="p-8 border-electric-blue/20 bg-gradient-to-br from-white to-blue-50/30 dark:from-white/5 dark:to-electric-blue/5 shadow-2xl">
                            <h4 className="text-lg font-bold font-sora text-gray-900 dark:text-white mb-6">Estimate Summary</h4>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Base Project ({selectedType.label})</span>
                                    <span className="font-bold text-gray-900 dark:text-white">Rs. {selectedType.base.toLocaleString()}</span>
                                </div>
                                {addOns.filter(a => selectedAddOns.includes(a.id)).map(addon => (
                                    <div key={addon.id} className="flex justify-between text-sm">
                                        <span className="text-gray-500">{addon.label}</span>
                                        <span className="font-bold text-gray-900 dark:text-white">+Rs. {addon.price.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-gray-200 dark:border-white/10 mb-8">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Estimated Total</span>
                                    <div className="text-right">
                                        <span className="block text-3xl font-black text-electric-blue font-sora">Rs. {totalPrice.toLocaleString()}*</span>
                                        <span className="text-[10px] text-gray-400 font-medium">*Starting estimate</span>
                                    </div>
                                </div>
                            </div>

                            <Button
                                variant="gradient"
                                className="w-full rounded-2xl py-4 group"
                                onClick={() =>
                                    window.dispatchEvent(
                                        new CustomEvent('openQueryModal', {
                                            detail: {
                                                formName: 'Cost Estimate Inquiry',
                                                title: 'Project Estimate Consultation',
                                                projectType: selectedType.label,
                                                service: `Estimate: Rs. ${totalPrice}`,
                                            },
                                        })
                                    )
                                }
                            >
                                Confirm Requirements
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>

                            <p className="text-[10px] text-center text-gray-400 mt-4 leading-relaxed">
                                Estimated price includes initial consulting and standard implementation. Hardware costs are calculated separately.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CostCalculator;
