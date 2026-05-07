import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const ContactHero: React.FC = () => (
  <section
    className="pt-32 pb-16 relative overflow-hidden text-center"
    style={{ background: '#0A1020' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,215,0,0.05) 0%, transparent 70%)',
      }}
    />
    <div className="max-w-[1200px] mx-auto px-6 relative z-10">
      <nav className="flex items-center justify-center gap-2 font-mono text-xs text-[#ADE1E5]/60 mb-8">
        <Link to="/" className="hover:text-[#FFD700] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-[#FFD700]">Contact</span>
      </nav>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
          Let's Build Something Together
        </h1>
        <p className="mt-4 text-[#ADE1E5] text-base max-w-lg mx-auto">
          Tell us about your project. We'll respond within 24 hours.
        </p>
      </motion.div>
    </div>
  </section>
);
