import React from 'react';

export const EclipseRing: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`relative flex items-center justify-center ${className}`}
    aria-hidden="true"
    style={{ isolation: 'isolate' }}
  >
    {/* Ambient glow */}
    <div
      style={{
        position: 'absolute',
        inset: '-40px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 65%)',
        animation: 'pulse 4s ease-in-out infinite',
        pointerEvents: 'none',
      }}
    />

    {/* Rotating ring SVG */}
    <svg
      viewBox="0 0 280 280"
      width="100%"
      height="100%"
      style={{ animation: 'spin 30s linear infinite', display: 'block' }}
    >
      {/* Outer dim ring */}
      <circle cx="140" cy="140" r="128" fill="none"
        stroke="rgba(255,215,0,0.07)" strokeWidth="1" />

      {/* Dashed orbit ring */}
      <circle cx="140" cy="140" r="104" fill="none"
        stroke="rgba(255,215,0,0.12)" strokeWidth="1"
        strokeDasharray="14 6" />

      {/* Bright arc segment — the "eclipse" highlight */}
      <path d="M140,36 A104,104 0 0,1 228,186"
        fill="none" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"
        style={{ filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.7))' }} />

      {/* Inner violet ring */}
      <circle cx="140" cy="140" r="76" fill="none"
        stroke="rgba(75,63,114,0.4)" strokeWidth="1" />

      {/* Moon disc */}
      <circle cx="140" cy="140" r="44" fill="#050912" />

      {/* Sun corona */}
      <circle cx="140" cy="140" r="52" fill="none"
        stroke="rgba(255,215,0,0.18)" strokeWidth="10" />

      {/* Corona tick marks */}
      {Array.from({ length: 12 }, (_, i) => {
        const deg = (i / 12) * 360;
        const rad = (deg * Math.PI) / 180;
        const r1 = 46; const r2 = i % 3 === 0 ? 55 : 50;
        return (
          <line key={i}
            x1={140 + Math.cos(rad) * r1} y1={140 + Math.sin(rad) * r1}
            x2={140 + Math.cos(rad) * r2} y2={140 + Math.sin(rad) * r2}
            stroke="#FFD700" strokeOpacity={i % 3 === 0 ? 0.5 : 0.25} strokeWidth="1"
          />
        );
      })}
    </svg>
  </div>
);
