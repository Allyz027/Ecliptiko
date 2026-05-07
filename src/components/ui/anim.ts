/**
 * Shared motion presets.
 * - heroAnim: animates on mount (use for hero content above the fold)
 * - fadeUp: animates when scrolled into view (use for sections below the fold)
 */
export const heroAnim = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, delay, ease: 'easeOut' as const },
});
