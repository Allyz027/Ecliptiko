import React from 'react';

/**
 * Animated galaxy background — nebula clouds, twinkling stars, drifting fine stars,
 * extra flicker-layer, pulsing glow, and 6 shooting stars. Drop inside any
 * `position: relative` section.
 */
export const GalaxyBg: React.FC = () => (
  <>
    <div className="galaxy-nebula" aria-hidden="true" />
    <div className="galaxy-stars" aria-hidden="true" />
    <div className="galaxy-stars-fine" aria-hidden="true" />
    <div className="galaxy-twinkle" aria-hidden="true" />
    <div className="galaxy-glow" aria-hidden="true" />
    <span className="shooting-star shooting-star-1" aria-hidden="true" />
    <span className="shooting-star shooting-star-2" aria-hidden="true" />
    <span className="shooting-star shooting-star-3" aria-hidden="true" />
    <span className="shooting-star shooting-star-4" aria-hidden="true" />
    <span className="shooting-star shooting-star-5" aria-hidden="true" />
    <span className="shooting-star shooting-star-6" aria-hidden="true" />
  </>
);
