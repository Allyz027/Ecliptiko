import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const AboutHero: React.FC = () => (
  <section
    className="pt-32 pb-20 relative overflow-hidden text-center"
    style={{ background: '#0A1020' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(75,63,114,0.2) 0%, transparent 70%)',
      }}
    />
    {/* Eclipse motif background */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 60%)',
      }}
    />

    <div className="max-w-[1200px] mx-auto px-6 relative z-10">
      <nav className="flex items-center justify-center gap-2 font-mono text-xs text-[#ADE1E5]/60 mb-10">
        <Link to="/" className="hover:text-[#FFD700] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-[#FFD700]">About</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className="font-display font-bold text-white"
          style={{ fontSize: 'clamp(36px, 6vw, 76px)' }}
        >
          We Are{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #FFD700, #FF377D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ecliptiko
          </span>
        </h1>
        <p className="mt-6 text-[#ADE1E5] text-base max-w-2xl mx-auto leading-relaxed">
          A team built for precision. A company obsessed with outcomes. We exist to give
          enterprise teams the technology edge they need — and the intelligence to know what to do with it.
        </p>
      </motion.div>
    </div>
  </section>
);
