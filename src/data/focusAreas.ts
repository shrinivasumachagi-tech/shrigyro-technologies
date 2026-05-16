import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Factory,
  MessageCircle,
  Network,
  RadioTower,
  Workflow,
} from 'lucide-react';

export const focusAreas = [
  { name: 'AI Automation', icon: BrainCircuit },
  { name: 'Embedded Systems', icon: Cpu },
  { name: 'IoT Solutions', icon: Network },
  { name: 'Web Development', icon: Code2 },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'Industrial Automation', icon: Factory },
  { name: 'Robotics', icon: RadioTower },
  { name: 'ERP Solutions', icon: Workflow },
  { name: 'WhatsApp Automation', icon: MessageCircle },
  { name: 'Smart Digital Systems', icon: Bot },
] as const;
