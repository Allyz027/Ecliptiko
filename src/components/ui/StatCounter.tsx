import React, { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  label,
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const duration = 2000;
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * value).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, value, decimals]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span
        className="font-light text-[#FFD700]"
        style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
      </span>
      <span className="text-[13px] uppercase tracking-[0.1em] text-[#ADE1E5]">
        {label}
      </span>
    </div>
  );
};
