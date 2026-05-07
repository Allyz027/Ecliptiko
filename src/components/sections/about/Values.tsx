import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crosshair, Lightbulb, Eye, TrendingUp } from 'lucide-react';
import { SectionLabel } from '../../ui/SectionLabel';

const values = [
  {
    Icon: Crosshair,
    title: 'Precision',
    desc: 'We leave nothing to chance. Every decision is backed by data, every output reviewed to specification.',
    color: '#FFD700',
  },
  {
    Icon: Lightbulb,
    title: 'Innovation',
    desc: 'Tomorrow\'s solutions, delivered today. We stay two steps ahead so our clients don\'t have to.',
    color: '#FF377D',
  },
  {
    Icon: Eye,
    title: 'Integrity',
    desc: 'Radical transparency in every engagement. If something isn\'t working, you\'ll hear it from us first.',
    color: '#5A7BBF',
  },
  {
    Icon: TrendingUp,
    title: 'Impact',
    desc: 'We measure success by your outcomes — not our deliverable count. The work is done when it performs.',
    color: '#E1694B',
  },
];

export const Values: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-section bg-[#0A1020]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>What We Stand For</SectionLabel>
          <h2 className="font-display font-bold text-white mt-2"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
            Our Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#112143] border border-[#1E3460] rounded-[16px] p-7 flex gap-5
                         hover:border-[rgba(255,215,0,0.3)] hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}18` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div>
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
