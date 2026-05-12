import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with deep navy and cyan glow */}
      <div className="absolute inset-0 bg-deep-navy">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/20 rounded-full blur-[150px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[120px] -ml-48 -mb-48" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sora text-white mb-8 leading-tight">
            Ready to Build the <span className="text-gradient">Future of Your Business?</span>
          </h2>
          <p className="text-xl text-silver-gray mb-12 font-inter max-w-2xl mx-auto">
            Let's collaborate to engineer intelligent systems that drive growth and innovation. Schedule a free consultation with our experts today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              variant="gradient" 
              size="lg" 
              className="px-10"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('openQueryModal', {
                    detail: {
                      formName: 'Schedule Consultation Form',
                      title: 'Schedule Consultation',
                      service: 'AI Automation',
                      projectType: 'Schedule Consultation',
                    },
                  })
                )
              }
            >
              <Calendar className="mr-2" size={20} />
              Schedule Consultation
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-10 bg-white/5 border-white/10 text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              <MessageSquare className="mr-2" size={20} />
              Contact ShriGyro
            </Button>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-silver-gray/50 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span>Fast Execution</span>
            <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
            <span>Premium Quality</span>
            <span className="w-1 h-1 bg-white/20 rounded-full my-auto" />
            <span>Global Support</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTA;
