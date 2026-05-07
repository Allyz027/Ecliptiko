import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionLabel } from '../components/ui/SectionLabel';
import { heroAnim } from '../components/ui/anim';
import { GalaxyBg } from '../components/ui/GalaxyBg';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, delay, ease: 'easeOut' as const },
});

const PRODUCTS = [
  {
    id: 'galara',
    name: 'Galara',
    tagline: 'Revit AI Copilot',
    badge: 'GALARA',
    accentFrom: '#4B3F72',
    accentTo: '#FF377D',
    description:
      'Galara is your AI-powered copilot inside Revit. Describe any task in plain English — element placement, schedule generation, parameter updates, family creation — and Galara executes it instantly. No scripting, no plugins, no learning curve.',
    features: [
      'Natural language command interface — type what you want, Galara does it',
      'Deep Revit API integration — no external tools or plugins required',
      'AI-generated geometry, schedules, and parameters on demand',
      'Tasks that took hours completed in seconds',
      'Zero Python or scripting knowledge required',
      'Continuous learning — improves with every BIM project',
    ],
    href: '/products/galara',
  },
  {
    id: 'solara',
    name: 'Solara',
    tagline: 'Revit Productivity Toolbar',
    badge: 'SOLARA',
    accentFrom: '#5A7BBF',
    accentTo: '#E1694B',
    description:
      'Solara is a comprehensive productivity toolbar that covers every phase of your BIM project lifecycle. From sheets and drawings to family management and batch processing, Solara eliminates the repetitive manual work that slows every Revit workflow.',
    features: [
      'Lifecycle coverage — tools for every project phase',
      'Sheet and drawing automation — batch rename, sort, export',
      'Family and parameter management at scale',
      'Batch operations across entire models in one action',
      'Consistent output across large project teams',
      '3× faster sheet production, measurable time savings',
    ],
    href: '/products/solara',
  },
  {
    id: 'bcportal',
    name: 'BCPortal',
    tagline: 'Unified HRMS Web Portal',
    badge: 'BCPORTAL',
    accentFrom: '#FFD700',
    accentTo: '#E1694B',
    description:
      'BCPortal is the single source of truth for BIMCAP operations. It centralises task management, HR functions, IT resources, and global team visibility in one intelligent hub — accessible from anywhere, tailored to the unique structure of BIMCAP worldwide.',
    features: [
      'Unified task and deadline tracking across all departments',
      'HR and IT resource hub — one place for all company resources',
      'Real-time visibility across international teams',
      'Custom-built for BIMCAP operations and workflows',
      'Role-based access for department managers, HR, IT, and employees',
      'Secure, cloud-based, accessible from any device',
    ],
    href: '/products/bcportal',
  },
  {
    id: 'worktime-tracker',
    name: 'Worktime Tracker',
    tagline: 'Bitrix24 API Productivity Tool',
    badge: 'WORKTIME TRACKER',
    accentFrom: '#ADE1E5',
    accentTo: '#5A7BBF',
    description:
      'Worktime Tracker connects directly to your Bitrix24 workspace to deliver automated time tracking, productivity analytics, and manager dashboards. Every hour is accounted for — automatically categorised, visualised, and reported.',
    features: [
      'Seamless Bitrix24 API integration — no manual data entry',
      'Automatic time capture with intelligent categorisation',
      'Manager dashboards with real-time team productivity data',
      'Weekly and monthly reports with trend analysis',
      'Identify inefficiencies and flag anomalies automatically',
      'Works for in-office, hybrid, and fully remote teams',
    ],
    href: '/products/worktime-tracker',
  },
];

type Tab = 'all' | 'galara' | 'solara' | 'bcportal' | 'worktime-tracker';
const TABS: { id: Tab; label: string }[] = [
  { id: 'all',              label: 'All' },
  { id: 'galara',           label: 'Galara' },
  { id: 'solara',           label: 'Solara' },
  { id: 'bcportal',         label: 'BCPortal' },
  { id: 'worktime-tracker', label: 'Worktime Tracker' },
];

const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('all');

  const visible = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Ecliptiko Products — Galara, Solara, BCPortal &amp; More</title>
        <meta name="description" content="Explore Ecliptiko's AI-powered BIM tools: Galara (Revit AI Copilot), Solara (Productivity Toolbar), BCPortal (HRMS), Worktime Tracker." />
        <link rel="canonical" href="https://ecliptiko.com/products" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050912] flex items-center" style={{ minHeight: '70vh', paddingTop: 140, paddingBottom: 100 }} aria-labelledby="products-hero-heading">
        <GalaxyBg />
        <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel>Our Products</SectionLabel>
            <h1
              id="products-hero-heading"
              style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, letterSpacing: '0.01em', margin: 0 }}
            >
              Our Products
            </h1>
            <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '20px auto 0', textAlign: 'center' }}>
              Four AI-powered tools. One connected ecosystem. Designed to transform every layer of your BIM operation.
            </p>
          </motion.div>

          {/* Tab bar */}
          <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-2 mt-10">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-5 py-2 rounded-full text-[13px] font-medium transition-all duration-200',
                  activeTab === tab.id
                    ? 'bg-[#FFD700] text-[#112143]'
                    : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product cards — alternating layout */}
      <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }}>
        <div className="container-xl flex flex-col gap-10">
          {visible.map((p, i) => (
            <motion.article
              key={p.id}
              {...fadeUp(i * 0.06)}
              className="glass-card overflow-hidden"
              style={{ borderColor: `${p.accentFrom}20` }}
              aria-label={p.name}
            >
              {/* Accent top strip */}
              <div
                className="h-[3px]"
                style={{ background: `linear-gradient(90deg, ${p.accentFrom}, ${p.accentTo})` }}
              />

              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Visual */}
                <div
                  className="lg:w-2/5 min-h-[240px] flex items-center justify-center p-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${p.accentFrom}20 0%, transparent 70%)`,
                  }}
                >
                  <div className="text-center">
                    <span
                      className="text-[11px] font-medium uppercase tracking-[0.14em] block mb-3"
                      style={{ color: p.accentFrom }}
                    >
                      {p.badge}
                    </span>
                    <h2
                      style={{
                        fontSize: 'clamp(32px,5vw,60px)',
                        fontWeight: 200,
                        background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {p.name}
                    </h2>
                    <p style={{ color: p.accentTo, fontSize: '13px', marginTop: '8px' }}>{p.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col gap-6">
                  <p className="text-white/65 text-[15px] leading-[1.8]" style={{ fontWeight: 300 }}>
                    {p.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-[14px] text-white/70">
                        <CheckCircle2 size={15} style={{ color: p.accentFrom, marginTop: 3, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Button variant="primary" size="md" to={p.href}>
                      Explore {p.name} <ArrowRight size={15} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: 'linear-gradient(135deg, #112143 0%, #4B3F72 50%, #112143 100%)', paddingTop: 128, paddingBottom: 128 }}
      >
        <div className="container-xl text-center">
          <motion.div {...fadeUp()}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
              Ready to Eclipse your Limits?
            </h2>
            <p className="mt-4 text-white/55 text-[15px] max-w-lg mx-auto">
              Talk to our team — we'll match you with the right tools for your BIM workflows.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" to="/contact">Request a Demo <ArrowRight size={16} /></Button>
              <Button variant="ghost-yellow" size="lg" to="/contact">Contact Us</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
