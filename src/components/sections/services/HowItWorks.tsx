import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../../ui/SectionLabel';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep-dive research into your business context — stakeholder interviews, systems audit, competitive landscape. We learn before we prescribe.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Precision planning with measurable outcomes. Every initiative is sequenced, resourced, and tied to a KPI that matters.',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Agile delivery with full transparency. Weekly check-ins, live dashboards, and no surprises at delivery.',
  },
  {
    num: '04',
    title: 'Optimization',
    desc: 'Continuous measurement and refinement. We stay engaged post-launch to ensure outcomes hold at scale.',
  },
];

export const HowItWorks: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-section bg-[#112143]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-display font-bold text-white mt-2"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
            How We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+12px)] right-0 h-px bg-[#1E3460] w-6" />
              )}
              <div className="bg-[#0A1020] border border-[#1E3460] rounded-[16px] p-6 h-full">
                <span className="font-mono text-3xl font-bold text-[#5A7BBF] block mb-4">{num}</span>
                <h3 className="font-display font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-[#ADE1E5] text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
