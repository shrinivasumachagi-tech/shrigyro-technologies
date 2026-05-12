import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const WhatsAppInquiry: React.FC = () => {
  const whatsappNumber = "7411678188";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hello%20ShriGyro%20Technologies,%20I%20have%20an%20inquiry%20regarding%20academic%20projects.`;

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-deep-navy">
      <Container>
        <GlassCard className="bg-gradient-to-br from-green-500/5 to-cyan-500/5 border-green-500/20 p-8 md:p-16 rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 blur-[100px] -mr-48 -mt-48 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-widest mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Instant Support
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold font-sora text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Quick Inquiry via <span className="text-green-500">WhatsApp</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-silver-gray mb-10 font-inter"
              >
                Have questions about your project? Scan the QR code or click the button below to start an instant conversation with our experts.
              </motion.p>
              
              <div className="space-y-4 mb-10">
                {[
                  'Instant response within 1 hour',
                  'Dedicated academic project consultants',
                  'Direct communication with developers',
                  'Project status updates on the go'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={20} className="text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant="gradient"
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 border-none shadow-xl shadow-green-500/20 group"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <MessageCircle size={20} className="mr-2" />
                  Chat on WhatsApp
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass p-10 rounded-[3rem] border-white/20 shadow-2xl bg-white/80 dark:bg-black/20 backdrop-blur-xl">
                  <div className="p-4 bg-white rounded-2xl mb-6">
                    <QrCode size={200} className="text-gray-900" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold font-sora text-gray-900 dark:text-white uppercase tracking-widest mb-1">Scan to Connect</p>
                    <p className="text-[10px] text-gray-500 uppercase">+91 {whatsappNumber}</p>
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -left-10 glass w-20 h-20 rounded-2xl flex items-center justify-center text-green-500 shadow-xl border-green-500/30"
                >
                  <MessageCircle size={40} />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
};

export default WhatsAppInquiry;
