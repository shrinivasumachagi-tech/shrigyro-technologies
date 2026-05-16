import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechFlow Systems',
    content: 'ShriGyro transformed our manufacturing line with their AI-driven robotics. The efficiency gain was visible within the first month of implementation.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    name: 'David Chen',
    role: 'Director of Ops, Global Logistics',
    content: 'The custom ERP system built by ShriGyro is exactly what we needed. It scales perfectly with our growing volume and provides real-time insights.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
  {
    name: 'Michael Smith',
    role: 'Founder, SmartEdge IoT',
    content: 'Their expertise in embedded systems is unmatched. They helped us bridge the gap between our sensors and cloud infrastructure seamlessly.',
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-deep-navy/50 overflow-hidden">
      <Container>
        <SectionHeading
          title="Client Success Stories"
          subtitle="Hear from the leaders who have transformed their businesses with our intelligent automation solutions."
        />

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <Quote className="text-electric-blue/20" size={80} />
              </div>
              
              <p className="text-2xl md:text-3xl font-inter font-medium text-gray-900 dark:text-white mb-12 italic leading-relaxed">
                "{testimonials[index].content}"
              </p>

              <div className="flex flex-col items-center">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full border-2 border-electric-blue/30 mb-4 object-cover"
                  loading="lazy"
                  decoding="async"
                  width="64"
                  height="64"
                />
                <h4 className="text-lg font-bold font-sora text-gray-900 dark:text-white">{testimonials[index].name}</h4>
                <p className="text-sm text-gray-500 font-inter">{testimonials[index].role}</p>
                
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={16} className="fill-electric-blue text-electric-blue" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-electric-blue' : 'bg-gray-300 dark:bg-white/10'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
