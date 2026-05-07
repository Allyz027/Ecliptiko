import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 10,  suffix: '+', label: 'Years Delivering Excellence' },
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

const StatItem: React.FC<{ value: number; suffix: string; label: string; active: boolean }> = ({
  value, suffix, label, active,
}) => {
  const count = useCountUp(value, active);
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="font-display font-bold text-[#FFD700]"
            style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}>
        {count}{suffix}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-[#ADE1E5]">{label}</span>
    </div>
  );
};

export const StatsBanner: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="bg-[#112143] border-y border-[#1E3460] py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {stats.map(({ value, suffix, label }, i) => (
            <React.Fragment key={label}>
              <StatItem value={value} suffix={suffix} label={label} active={inView} />
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px bg-[#1E3460] self-stretch" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
