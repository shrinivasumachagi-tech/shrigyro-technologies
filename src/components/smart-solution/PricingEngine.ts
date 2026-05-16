import { serviceDetails } from '../../data/serviceDetails';

export interface Recommendation {
  solution: string;
  stack: string[];
  estimatedCost: { min: number; max: number };
  timeline: string;
  addOns: string[];
  matchPercentage?: number;
  workflow?: string[];
  estimatedTimeline?: string;
  maintenanceRecommendation?: string;
  costBreakdown?: Record<string, number>;
}

const PricingEngine = {
  calculate: ({ serviceId, selectedFeatures }: { serviceId: string; selectedFeatures: string[] }): Recommendation => {
    const base: Record<string, { min: number; max: number; timeline: string; stack: string[]; addOns: string[] }> = {
      'ai-automation': { min: 20000, max: 50000, timeline: '4–8 weeks', stack: ['Python', 'OpenAI APIs', 'Node.js', 'React'], addOns: ['AI Assistant', 'Analytics Dashboard', 'Lead Automation'] },
      'web-development': { min: 10000, max: 20000, timeline: '3–6 weeks', stack: ['React', 'Tailwind', 'Node.js', 'Firebase'], addOns: ['SEO Audits', 'WhatsApp Integration', 'AI Chatbot'] },
      'embedded-systems': { min: 8000, max: 15000, timeline: '4–8 weeks', stack: ['ESP32', 'Arduino', 'Raspberry Pi'], addOns: ['Industrial Monitoring', 'IoT Dashboard', 'Gateway Integration'] },
      'whatsapp-automation': { min: 2000, max: 8000, timeline: '2–4 weeks', stack: ['Node.js', 'WhatsApp API', 'CRM'], addOns: ['Appointment Scheduler', 'Lead Capture', 'AI Support'] },
      'academic-projects': { min: 4000, max: 15000, timeline: '1–3 months', stack: ['Python', 'React', 'Arduino'], addOns: ['Documentation', 'PPT', 'Report'] },
      'labview-systems': { min: 20000, max: 100000, timeline: '3–6 months', stack: ['LabVIEW', 'NI DAQ'], addOns: ['Data Acquisition', 'Automation', 'Reporting'] },
    };
    const { min, max, timeline, stack, addOns } = base[serviceId] || { min: 10000, max: 20000, timeline: '1–2 months', stack: [], addOns: [] };
    const estimateMin = min + selectedFeatures.length * 2000;
    const estimateMax = max + selectedFeatures.length * 2000;
    const service = serviceDetails.find(s => s.id === serviceId);
    const coreFeatures = service?.features || [];
    const satisfied = selectedFeatures.filter(f => coreFeatures.includes(f)).length;
    const matchPercentage = coreFeatures.length ? Math.floor((satisfied / coreFeatures.length) * 100) : 100;
    const estimatedTimeline = selectedFeatures.length > 5 ? '14–21 Days' : '5–7 Days';
    const maintenanceRecommendation = selectedFeatures.length > 3 ? 'Maintenance Included' : 'Optional Maintenance';
    const costBreakdown: Record<string, number> = {};
    selectedFeatures.forEach(f => {
      if (f.toLowerCase().includes('hardware')) costBreakdown['Hardware'] = 10000;
      else if (f.toLowerCase().includes('ai')) costBreakdown['AI'] = 12000;
      else if (f.toLowerCase().includes('documentation')) costBreakdown['Documentation'] = 4000;
      else if (f.toLowerCase().includes('deployment')) costBreakdown['Deployment'] = 5000;
      else costBreakdown[f] = 1000;
    });
    costBreakdown['Base'] = estimateMax;
    return {
      solution: service?.title || 'Custom Solution',
      stack,
      estimatedCost: { min: estimateMin, max: estimateMax },
      timeline,
      addOns,
      matchPercentage,
      workflow: service?.workflow,
      estimatedTimeline,
      maintenanceRecommendation,
      costBreakdown,
    };
  },
};

export default PricingEngine;
