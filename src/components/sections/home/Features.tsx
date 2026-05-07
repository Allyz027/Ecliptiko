import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Cpu, Zap, Plug, BarChart2, Lock } from 'lucide-react';
import { SectionLabel } from '../../ui/SectionLabel';
import { Card } from '../../ui/Card';

const features = [
  {
    Icon: Target,
    title: 'Strategic Clarity',
    desc: 'We cut through complexity to define what matters — aligning technology decisions with business outcomes from day one.',
  },
  {
    Icon: Cpu,
    title: 'Precision Execution',
    desc: 'Every deliverable is engineered to exact specification. No ambiguity, no shortcuts, no wasted motion.',
  },
  {
    Icon: Zap,
    title: 'Forward Intelligence',
    desc: 'AI-augmented insights that keep you ahead of the curve. We surface signals before they become market forces.',
  },
  {
    Icon: Plug,
    title: 'Seamless Integration',
    desc: 'Our solutions plug into your existing stack effortlessly — no rip-and-replace, no months of disruption.',
  },
  {
    Icon: BarChart2,
    title: 'Measurable Impact',
    desc: "Every engagement is tracked, reported, and optimized. You always know exactly what you're getting.",
  },
  {
    Icon: Lock,
    title: 'Enterprise Trust',
    desc: "Built to the standards the world's leading companies demand — secure, compliant, and production-hardened.",
  },
];

export const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-section bg-[#0A1020]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display font-bold text-white mt-2"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
            What Ecliptiko Does
          </h2>
          <p className="mt-3 text-[#ADE1E5] max-w-xl mx-auto text-base">
            Six disciplines, one mission: turning enterprise complexity into competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <div className="w-11 h-11 rounded-lg bg-[rgba(255,215,0,0.1)] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#FFD700]" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-[#ADE1E5] text-sm leading-relaxed">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
