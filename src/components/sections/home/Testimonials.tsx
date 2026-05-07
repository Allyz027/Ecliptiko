import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionLabel } from '../../ui/SectionLabel';

const testimonials = [
  {
    quote:
      "Ecliptiko transformed how we approach AI adoption. Within six months, they had integrated three new intelligence layers into our core platform — with zero disruption to our existing operations. The precision is unlike anything we'd seen before.",
    name:    'Sarah Chen',
    role:    'Chief Technology Officer',
    company: 'Meridian Global',
    initials: 'MC',
  },
  {
    quote:
      "They don't just deliver; they architect for the future. Our cloud migration was on time, under budget, and the infrastructure has performed flawlessly at scale.",
    name:    'Daniel Ortiz',
    role:    'VP of Engineering',
    company: 'NexCore Systems',
    initials: 'NS',
  },
  {
    quote:
      'The strategy work alone was worth every peso. Ecliptiko gave us a five-year technology roadmap that our board immediately approved — clear, actionable, defensible.',
    name:    'Priya Nair',
    role:    'Chief Digital Officer',
    company: 'Vertex Partners',
    initials: 'VP',
  },
];

export const Testimonials: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
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
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="font-display font-bold text-white mt-2"
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
            Trusted by Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role, company, initials }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#1A2E54] rounded-[16px] p-7 border-l-[3px] border-[#FF377D] flex flex-col gap-4"
            >
              <Quote size={28} className="text-[#FFD700] opacity-80" />
              <p className="text-white/90 text-base italic leading-relaxed flex-1">"{quote}"</p>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #112143, #4B3F72)' }}
                >
                  {initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{name}</p>
                  <p className="font-mono text-xs text-[#ADE1E5]">{role} · {company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
