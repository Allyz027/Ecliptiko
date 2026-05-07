import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glowOnHover = true }) => (
  <div
    className={[
      'bg-[#112143] border border-[#1E3460] rounded-[16px] p-6',
      'transition-all duration-200 ease-out',
      glowOnHover
        ? 'hover:border-[rgba(255,215,0,0.45)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]'
        : '',
      className,
    ].join(' ')}
  >
    {children}
  </div>
);
