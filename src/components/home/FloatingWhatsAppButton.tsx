import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  const whatsappNumber = "7411655519";
  const message = "Hello ShriGyro Technologies, I’m interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 0 }}
      animate={{ y: [-10, 0, -10] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-3 glass rounded-full border-[#25D366]/30 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all group overflow-hidden"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]">
        <MessageCircle size={18} fill="white" className="text-white" />
      </div>
      <span className="relative z-10 font-bold font-sora text-white tracking-wider">
        WhatsApp
      </span>
    </motion.a>
  );
};

export default FloatingWhatsAppButton;
