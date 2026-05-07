import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionLabel } from '../../ui/SectionLabel';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    name: 'Starter',
    price: 'From $4,800',
    period: '/project',
    desc: 'Ideal for focused initiatives and proof-of-concepts.',
    features: [
      'Discovery & strategy workshop',
      'Technology audit report',
      'Roadmap document (90-day)',
      '2 stakeholder sessions',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: 'From $14,500',
    period: '/engagement',
    desc: 'For teams ready to move from strategy to full execution.',
    features: [
      'Everything in Starter',
      'Full execution sprint (8 weeks)',
      'Dedicated project lead',
      'Weekly progress dashboards',
      'Post-launch optimization (30 days)',
      'Priority Slack channel',
    ],
    cta: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    desc: 'Tailored partnerships for complex, multi-stream engagements.',
    features: [
      'Everything in Growth',
      'Multi-stream delivery',
      'Embedded team integration',
      'Executive steering committee',
      'SLA-backed support',
      'Annual roadmap planning',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export const Pricing: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-section bg-[#0A1020]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel>Investment</SectionLabel>
          <h2 className="font-display font-bold text-white mt-2"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
            Transparent Pricing
          </h2>
          <p className="mt-3 text-[#ADE1E5] max-w-lg mx-auto text-sm">
            No hidden fees. No surprise scopes. Pick what matches your scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map(({ name, price, period, desc, features, cta, popular }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={[
                'relative rounded-[16px] p-7 flex flex-col gap-5 transition-all duration-200',
                popular
                  ? 'bg-[#1A2E54] border-2 border-[#FFD700] shadow-[0_0_40px_rgba(255,215,0,0.12)]'
                  : 'bg-[#112143] border border-[#1E3460] hover:border-[rgba(255,215,0,0.3)]',
              ].join(' ')}
            >
              {popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF377D] text-white text-xs font-bold font-mono uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-display font-bold text-white text-xl">{name}</h3>
                <p className="text-[#ADE1E5] text-xs mt-1">{desc}</p>
              </div>
              <div>
                <span className="font-display font-bold text-[#FFD700] text-3xl">{price}</span>
                <span className="font-mono text-[#ADE1E5] text-xs ml-1">{period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check size={15} className="text-[#FFD700] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={popular ? 'primary' : 'ghost'}
                fullWidth
                onClick={() => navigate('/contact')}
              >
                {cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
