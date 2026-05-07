import React from 'react';
import '../../../styles/animations.css';

const badges = [
  'Enterprise Tech',
  'Digital Transformation',
  'AI Solutions',
  'Cloud Infrastructure',
  'UX Research',
  'Product Strategy',
  'Innovation Labs',
  'Ecliptiko',
  'Data Intelligence',
  'Cybersecurity',
  'DevOps',
  'Machine Learning',
];

const Dot = () => (
  <span className="mx-4 text-[#FFD700] font-bold select-none">·</span>
);

export const LogoTicker: React.FC = () => (
  <section className="bg-[#112143] border-y border-[#1E3460] py-5 overflow-hidden">
    {/* Gradient fade edges */}
    <div className="relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #112143, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #112143, transparent)' }}
      />

      {/* Track — duplicated for seamless loop */}
      <div className="ticker-track flex whitespace-nowrap" aria-hidden="true">
        {[...badges, ...badges].map((badge, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#ADE1E5]">
              {badge}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  </section>
);
