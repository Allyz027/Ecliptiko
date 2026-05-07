import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'ghost' | 'ghost-yellow';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const PRIMARY_PADDING: Record<Size, string> = {
  sm: '8px 20px',
  md: '11px 26px',
  lg: '13px 32px',
};
const FONT_SIZES: Record<Size, string> = { sm: '13px', md: '14px', lg: '15px' };

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  to,
  href,
  type = 'button',
  disabled,
  className = '',
  fullWidth,
}) => {

  /* ── Primary = glass-morphism animated pill (no avatar) ── */
  if (variant === 'primary') {
    const inner = (
      <span
        className="bima-btn-label"
        style={{ fontSize: FONT_SIZES[size], padding: PRIMARY_PADDING[size], display: 'inline-flex', alignItems: 'center', gap: 8 }}
      >
        {children}
      </span>
    );

    const cls = ['bima-btn', fullWidth ? 'w-full justify-center' : '', className].filter(Boolean).join(' ');

    if (to)   return <Link to={to} className={cls}>{inner}</Link>;
    if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{inner}</a>;
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={cls}>
        {inner}
      </button>
    );
  }

  /* ── Ghost variants ── */
  const ghostSizes: Record<Size, React.CSSProperties> = {
    sm: { padding: '9px 20px',  fontSize: '13px' },
    md: { padding: '11px 26px', fontSize: '14px' },
    lg: { padding: '13px 32px', fontSize: '15px' },
  };
  const ghostCls = [
    variant === 'ghost-yellow' ? 'btn-ghost-yellow' : 'btn-ghost',
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = <>{children}</>;

  if (to)   return <Link to={to} className={ghostCls} style={ghostSizes[size]}>{inner}</Link>;
  if (href) return <a href={href} className={ghostCls} style={ghostSizes[size]} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={ghostCls} style={ghostSizes[size]}>
      {inner}
    </button>
  );
};
