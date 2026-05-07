import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { SectionLabel } from '../../ui/SectionLabel';
import { EclipseAnimation } from '../../ui/EclipseAnimation';

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 32 },
  animate:   { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: '#0A1020' }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(75,63,114,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#ADE1E5 1px, transparent 1px), linear-gradient(90deg, #ADE1E5 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">

          {/* Left column */}
          <div className="flex-1 text-center md:text-left">
            <motion.div {...fadeUp(0)}>
              <SectionLabel>Next Generation Technology</SectionLabel>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold leading-[1.1] tracking-tight mt-2"
              style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
            >
              Precision Technology.{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #FFD700, #FF377D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Eclipse
              </span>{' '}
              the Ordinary.
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-[#ADE1E5] leading-relaxed max-w-lg mx-auto md:mx-0"
              style={{ fontSize: 'clamp(16px, 1.6vw, 18px)' }}
            >
              We engineer outcomes for enterprise teams — from AI integration to
              cloud architecture. Every engagement is measured, precise, and built to last.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Get Started <ArrowRight size={18} />
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('/services')}>
                See Our Work
              </Button>
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="mt-6 flex items-center justify-center md:justify-start gap-2"
            >
              <Shield size={14} className="text-[#ADE1E5]" />
              <span className="font-mono text-xs text-[#ADE1E5]">
                Trusted by 500+ enterprise clients · ISO certified
              </span>
            </motion.div>
          </div>

          {/* Right column — Eclipse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" as const }}
            className="flex-shrink-0 flex justify-center"
          >
            <EclipseAnimation className="w-[220px] h-[220px] md:w-[320px] md:h-[320px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
