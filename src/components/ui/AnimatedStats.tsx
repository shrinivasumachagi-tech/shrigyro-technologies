import React, { useEffect, useRef } from 'react';

interface Stat {
  label: string;
  value: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats }) => {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && countersRef.current) {
          const counters = countersRef.current.querySelectorAll('[data-counter]');
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-counter') || '0', 10);
            let current = 0;
            const increment = Math.ceil(target / 50);
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              counter.textContent = current.toString();
            }, 30);
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={countersRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="glass p-6 md:p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent mb-2"
            data-counter={stat.value.replace(/[^0-9]/g, '') || '0'}
          >
            {stat.value}
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-silver-gray font-inter">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedStats;
