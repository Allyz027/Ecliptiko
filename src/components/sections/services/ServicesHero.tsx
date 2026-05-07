import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SectionLabel } from '../../ui/SectionLabel';

export const ServicesHero: React.FC = () => (
  <section
    className="pt-32 pb-20 relative overflow-hidden"
    style={{ background: '#0A1020' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(90,123,191,0.12) 0%, transparent 70%)',
      }}
    />
    <div className="max-w-[1200px] mx-auto px-6 relative z-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-mono text-xs text-[#ADE1E5]/60 mb-8">
        <Link to="/" className="hover:text-[#FFD700] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <span className="text-[#FFD700]">Services</span>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <SectionLabel>What We Offer</SectionLabel>
        <h1 className="font-display font-bold text-white mt-3"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}>
          Services Built for Scale
        </h1>
        <p className="mt-5 text-[#ADE1E5] text-base max-w-2xl mx-auto leading-relaxed">
          From strategy to execution — every service we offer is calibrated for enterprise outcomes.
          We don't do generic. We do yours.
        </p>
      </motion.div>
    </div>
  </section>
);
