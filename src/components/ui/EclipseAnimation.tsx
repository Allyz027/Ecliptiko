import React from 'react';
import '../../styles/animations.css';

interface EclipseAnimationProps {
  className?: string;
}

export const EclipseAnimation: React.FC<EclipseAnimationProps> = ({ className = '' }) => {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const r  = 110;

  return (
    <div
      className={`relative flex items-center justify-center float-anim ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer violet ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(75,63,114,0.35) 0%, transparent 70%)',
          transform: 'scale(1.4)',
        }}
      />

      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}
      >
        <defs>
          {/* Sun radial gradient */}
          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFD700" stopOpacity="0.95" />
            <stop offset="50%"  stopColor="#FFD700" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </radialGradient>

          {/* Corona glow filter */}
          <filter id="coronaGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur1" />
            <feGaussianBlur stdDeviation="3" result="blur2" in="SourceGraphic" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Clip to keep moon within canvas */}
          <clipPath id="canvasClip">
            <rect x="0" y="0" width={size} height={size} />
          </clipPath>
        </defs>

        {/* Light rays — subtle conic effect with SVG lines */}
        <g
          style={{
            transformOrigin: `${cx}px ${cy}px`,
            animation: 'ray-spin 12s linear infinite',
            opacity: 0.07,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = cx + Math.cos(angle) * (r + 10);
            const y1 = cy + Math.sin(angle) * (r + 10);
            const x2 = cx + Math.cos(angle) * (r + 70);
            const y2 = cy + Math.sin(angle) * (r + 70);
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#FFD700" strokeWidth="2"
              />
            );
          })}
        </g>

        {/* Sun orb */}
        <circle cx={cx} cy={cy} r={r} fill="url(#sunGrad)" />

        {/* Corona ring — visible only during transit center */}
        <g style={{ animation: 'corona-pulse 12s ease-in-out infinite' }}>
          <circle
            cx={cx} cy={cy} r={r + 4}
            fill="none"
            stroke="#FFD700"
            strokeWidth="2.5"
            filter="url(#coronaGlow)"
            style={{
              filter: 'drop-shadow(0 0 24px #FFD700) drop-shadow(0 0 8px #FF377D)',
            }}
          />
        </g>

        {/* Moon disc — transits across the sun */}
        <g clipPath="url(#canvasClip)">
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="#0A1020"
            style={{
              animation: 'moon-transit 12s ease-in-out infinite',
            }}
          />
        </g>
      </svg>
    </div>
  );
};
