import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe } from 'lucide-react';
import { SectionLabel } from '../../ui/SectionLabel';

const team = [
  {
    initials: 'RD',
    name:     'Rafael Dela Cruz',
    role:     'CEO & Co-Founder',
    bio:      '20 years leading enterprise digital transformation across APAC and the Middle East.',
  },
  {
    initials: 'MO',
    name:     'Maya Ocampo',
    role:     'CTO',
    bio:      'Former principal architect at two Fortune 500 technology firms. Obsessed with systems that scale.',
  },
  {
    initials: 'JS',
    name:     'James Santiago',
    role:     'Head of AI Practice',
    bio:      'PhD in Machine Learning. Spent a decade making AI work in production, not just in papers.',
  },
  {
    initials: 'LC',
    name:     'Lena Cruz',
    role:     'Head of Design',
    bio:      'Research-first designer. Builds products that reduce friction and drive adoption at enterprise scale.',
  },
];

export const Team: React.FC = () => {
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
          <SectionLabel>The Team</SectionLabel>
          <h2 className="font-display font-bold text-white mt-2"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
            The People Behind the Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ initials, name, role, bio }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0A1020] border border-[#1E3460] rounded-[16px] p-6 flex flex-col items-center text-center
                         hover:border-[rgba(255,215,0,0.3)] hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ background: 'linear-gradient(135deg, #112143, #4B3F72)' }}
              >
                {initials}
              </div>
              <h3 className="font-display font-semibold text-white text-base">{name}</h3>
              <p className="font-mono text-xs text-[#FFD700] mt-1 mb-3">{role}</p>
              <p className="text-[#ADE1E5] text-xs leading-relaxed flex-1">{bio}</p>
              <a
                href="#"
                aria-label={`${name} on LinkedIn`}
                className="mt-4 w-8 h-8 flex items-center justify-center rounded-md border border-[#1E3460]
                           text-[#ADE1E5] hover:text-[#FFD700] hover:border-[#FFD700] transition-colors duration-200"
              >
                <Globe size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
