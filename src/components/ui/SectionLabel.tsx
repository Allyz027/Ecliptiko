import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  /** Optional override colour (defaults to Ecliptiko Yellow) */
  color?: string;
}

/**
 * Pill-style section badge — matches the "2026" eyebrow chip on the homepage.
 * Yellow tint, soft border, mono-cap text.
 */
export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = '',
  color = '#FFD700',
}) => (
  <span
    className={`inline-block ${className}`}
    style={{
      background: `${color}1A`,           // ~10% tint of the colour
      border: `1px solid ${color}40`,     // ~25% border
      color,
      borderRadius: 100,
      padding: '6px 14px',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      marginBottom: 16,
    }}
  >
    {children}
  </span>
);
