import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK_NUMBER } from '@/constants/branding';

const FloatingWhatsAppButton: React.FC = () => {
  const message = "Hello ShriGyro Technologies, I'm interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_LINK_NUMBER}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 0 }}
      animate={{ y: [-10, 0, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="group fixed bottom-6 right-5 z-[100] flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#25D366]/30 bg-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.34)] transition-all hover:scale-105 hover:shadow-[0_0_52px_rgba(37,211,102,0.5)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Contact ShriGyro on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/15 opacity-0 transition-opacity group-hover:opacity-100" />
      <MessageCircle size={26} fill="white" className="relative z-10 text-white sm:h-7 sm:w-7" />
    </motion.a>
  );
};

export default FloatingWhatsAppButton;
