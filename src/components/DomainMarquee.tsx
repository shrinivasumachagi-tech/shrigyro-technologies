import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { focusAreas } from '@/data/focusAreas';

const DomainMarquee: React.FC = () => {
  const marqueeItems = [...focusAreas, ...focusAreas, ...focusAreas];

  return (
    <section id="focus-areas" className="relative overflow-hidden bg-gray-50 py-20 dark:bg-deep-navy sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.13),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.1),transparent_32%)]" />
      <Container>
        <SectionHeading
          title="Our Focus Areas"
          subtitle="Our work connects business software, academic engineering, intelligent automation, and hardware innovation in one practical technology ecosystem."
        />
      </Container>

      <div className="relative mt-2">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-deep-navy md:w-48" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-deep-navy md:w-48" />

        <motion.div
          className="flex w-max gap-4 whitespace-nowrap py-5 sm:gap-5"
          animate={{ x: [0, -1800] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeItems.map((domain, index) => (
            <article
              key={`${domain.name}-${index}`}
              className="group flex min-w-[230px] items-center gap-4 rounded-2xl border border-blue-500/15 bg-white/75 px-5 py-5 shadow-sm shadow-blue-950/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-electric-blue/50 hover:bg-white hover:shadow-[0_18px_50px_rgba(37,99,235,0.16)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09] sm:min-w-[260px] sm:px-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-600/10 text-electric-blue shadow-[0_0_24px_rgba(37,99,235,0.16)] transition-all duration-300 group-hover:scale-110 group-hover:bg-electric-blue group-hover:text-white dark:text-cyan">
                <domain.icon size={24} />
              </div>
              <div>
                <p className="font-sora text-lg font-bold text-gray-900 dark:text-white">{domain.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-500/70 dark:text-cyan/70">Technology Domain</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DomainMarquee;
