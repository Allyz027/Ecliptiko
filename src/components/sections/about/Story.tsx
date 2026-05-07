import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionLabel } from '../../ui/SectionLabel';

export const Story: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-section bg-[#0A1020]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display font-bold text-white mt-2 mb-6"
                style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
              Built from a conviction that technology should work for people
            </h2>
            <div className="space-y-5 text-[#ADE1E5] text-sm leading-relaxed">
              <p>
                Ecliptiko was founded in 2014 by a group of engineers and strategists who kept
                seeing the same problem: enterprises investing millions in technology and getting
                far less than they paid for. Not because the technology was wrong — but because
                the thinking was.
              </p>
              <p>
                We set out to fix the gap between ambition and execution. Our model is simple:
                deep research first, precision strategy second, disciplined delivery third. Every
                engagement follows that order, without shortcuts.
              </p>
              <p>
                Today we work with over 500 enterprise clients across Southeast Asia, the Middle
                East, and North America. Our mission hasn't changed: make technology perform the
                way leadership needs it to — clearly, measurably, and at scale.
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div
              className="w-full aspect-square rounded-[24px] overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #112143 0%, #4B3F72 60%, #0A1020 100%)' }}
            >
              {/* Geometric eclipse motif */}
              <svg viewBox="0 0 400 400" className="w-3/4 h-3/4 opacity-80">
                <defs>
                  <radialGradient id="storyGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="140" fill="url(#storyGrad)" />
                <circle cx="200" cy="200" r="140" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#5A7BBF" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="200" cy="200" r="60"  fill="#0A1020" />
                <circle cx="200" cy="200" r="60"  fill="none" stroke="#FF377D" strokeWidth="1.5" strokeOpacity="0.5" />
                {/* Orbit dots */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  return (
                    <circle
                      key={i}
                      cx={200 + Math.cos(rad) * 120}
                      cy={200 + Math.sin(rad) * 120}
                      r="4"
                      fill="#ADE1E5"
                      opacity="0.6"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#FFD700] text-[#112143] rounded-[12px] px-5 py-3 font-display font-bold text-sm shadow-[0_8px_24px_rgba(255,215,0,0.35)]">
              Since 2014
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
