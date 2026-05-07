import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cpu, Building2, Layers, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionLabel } from '../components/ui/SectionLabel';
import { StatCounter } from '../components/ui/StatCounter';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

/* ── Data ─────────────────────────────────────────── */

type BentoProduct = {
  title: string;
  tag: string;
  desc: string;
  href: string;
  c1: string;
  c2: string;
  pillA: { text: string; top: string; left?: string; right?: string };
  pillB: { text: string; top: string; left?: string; right?: string };
};

const BENTO_PRODUCTS: BentoProduct[] = [
  {
    title: 'Galara — Revit AI Copilot',
    tag: 'Galara',
    desc: 'Describe any Revit task in plain English. Galara executes it instantly — no scripting, no plugins.',
    href: '/products/galara',
    c1: '#4B3F72', c2: '#FF377D',
    pillA: { text: 'Place 12 columns on grid A', top: '22%', left: '14%' },
    pillB: { text: 'How can I help you?',         top: '52%', right: '12%' },
  },
  {
    title: 'Solara — Productivity Toolbar',
    tag: 'Solara',
    desc: 'Batch sheets, families, exports — every Revit chore done in one click.',
    href: '/products/solara',
    c1: '#5A7BBF', c2: '#E1694B',
    pillA: { text: 'Batch rename 124 sheets', top: '24%', left: '12%' },
    pillB: { text: 'Export DWG · Ready',       top: '58%', right: '14%' },
  },
  {
    title: 'BCPortal — Unified HRMS',
    tag: 'BCPortal',
    desc: 'Tasks, HR, IT and global team visibility — one centralised hub for BIMCAP worldwide.',
    href: '/products/bcportal',
    c1: '#FFD700', c2: '#E1694B',
    pillA: { text: '8 deadlines this week', top: '24%', left: '12%' },
    pillB: { text: 'Leave approved',         top: '58%', right: '16%' },
  },
  {
    title: 'Worktime Tracker',
    tag: 'Worktime',
    desc: 'Bitrix24-native time capture with real-time manager dashboards and anomaly detection.',
    href: '/products/worktime-tracker',
    c1: '#ADE1E5', c2: '#5A7BBF',
    pillA: { text: '8h logged today',  top: '24%', left: '14%' },
    pillB: { text: '92% productivity', top: '58%', right: '14%' },
  },
];

const PAIN_POINTS = [
  'Repetitive Revit tasks are eating your project hours',
  "You're generating models manually when AI could do it",
  "Your team tools don't talk to each other",
  "You need AI automation but don't know where to start",
  'Time tracking across global BIM teams is a nightmare',
];

const TICKER_ITEMS = [
  'Autodesk Revit', 'IFC Standards', 'BIM 360', 'Navisworks',
  'Dynamo Scripts', 'Bitrix24 API', 'Revit Families', 'BIM Coordination',
  'NWC Exports', 'Parameter Management', 'Revit API', 'IFC 4',
];

const STATS = [
  { value: 15, suffix: '+', label: 'Years BIM Experience' },
  { value: 4,  suffix: '',  label: 'Active Products' },
  { value: 8,  suffix: '+', label: 'Core Team Members' },
  { value: 90, suffix: '+', label: 'Global Employees' },
  { value: 70, suffix: '+', label: 'BIM Testers' },
];

const CASES = [
  {
    num: '01',
    title: 'Galara cuts Revit modelling time by 70% for a construction firm',
    desc: 'Automated element placement, schedule generation and parameter updates previously taking 8 hours per week — done in minutes.',
    tags: ['Enterprise', 'Automation'],
  },
  {
    num: '02',
    title: 'Solara accelerates drawing production 3× for an architectural practice',
    desc: 'Batch sheet renaming, DWG export pipelines and view template management rolled into a single one-click workflow.',
    tags: ['Architecture', 'Productivity'],
  },
  {
    num: '03',
    title: 'BCPortal unifies HR ops across 90+ global BIMCAP employees',
    desc: 'One platform replaced five disconnected systems — HR, IT, task management and cross-office visibility in a single hub.',
    tags: ['Enterprise', 'HRMS'],
  },
];

/* ── Sections ─────────────────────────────────────── */

const Hero = () => (
  <section
    aria-labelledby="hero-heading"
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '140px 40px 100px',
      position: 'relative',
      overflow: 'hidden',
      background: '#050912',
    }}
  >
    {/* Animated galaxy background */}
    <div className="galaxy-nebula" aria-hidden="true" />
    <div className="galaxy-stars" aria-hidden="true" />
    <div className="galaxy-stars-fine" aria-hidden="true" />
    <div className="galaxy-glow" aria-hidden="true" />
    <span className="shooting-star shooting-star-1" aria-hidden="true" />
    <span className="shooting-star shooting-star-2" aria-hidden="true" />
    <span className="shooting-star shooting-star-3" aria-hidden="true" />

    <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28, maxWidth: 960 }}>
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
      >
        <span style={{
          background: 'rgba(255,215,0,0.1)',
          border: '1px solid rgba(255,215,0,0.3)',
          borderRadius: 100,
          padding: '5px 14px',
          fontSize: 11,
          fontWeight: 500,
          color: '#FFD700',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}>
          2026
        </span>
        <span style={{ width: 3, height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: '50%' }} />
        <span>Next-Gen BIM AI Studio</span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        id="hero-heading"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ fontWeight: 300, fontSize: 'clamp(52px,8vw,92px)', lineHeight: 1.0, letterSpacing: '-0.025em', margin: 0 }}
      >
        <span style={{
          background: 'linear-gradient(90deg, #FFD700 0%, #FF377D 60%, #4B3F72 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          AI-Driven BIM Success.
        </span>
        <br />
        <span style={{ color: 'rgba(255,255,255,0.55)' }}>Redefining the Future of Revit.</span>
      </motion.h1>

      {/* Body */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
        style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: 0 }}
      >
        Building cutting-edge AI tools that transform how architects and engineers work —
        15+ years of BIM expertise, encoded into software.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <Button variant="primary" size="lg" to="/products">Explore Products</Button>
        <Button variant="ghost" size="lg" to="/contact">Request a Demo</Button>
      </motion.div>

      {/* Trust pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {['15+ Years', '4 AI Products', '90+ Employees'].map(b => (
          <span key={b} style={{ fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '5px 14px' }}>
            {b}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

const LogoTicker = () => (
  <div style={{
    padding: '22px 0',
    background: 'rgba(255,255,255,0.015)',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    overflow: 'hidden',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
  }}>
    <div className="logo-ticker-track">
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span key={i} style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', display: 'flex', alignItems: 'center', gap: 56 }}>
          {item}
          {i < TICKER_ITEMS.length * 2 - 1 && (
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'inline-block', flexShrink: 0 }} />
          )}
        </span>
      ))}
    </div>
  </div>
);

const BentoProductCard: React.FC<{ p: BentoProduct; featured?: boolean }> = ({ p, featured }) => (
  <Link
    to={p.href}
    className={`bento-product${featured ? ' bento-product-featured' : ''}`}
    style={{ ['--c1' as string]: p.c1, ['--c2' as string]: p.c2 } as React.CSSProperties}
  >
    <div className="bento-product-visual">
      <span
        className="bento-pill bento-pill-glow"
        style={{ top: p.pillA.top, left: p.pillA.left, right: p.pillA.right }}
      >
        <span className="bento-pill-dot" />
        {p.pillA.text}
      </span>
      <span
        className="bento-pill"
        style={{ top: p.pillB.top, left: p.pillB.left, right: p.pillB.right }}
      >
        {p.pillB.text}
      </span>
    </div>
    <div className="bento-product-content">
      <h3 className="bento-product-title">{p.title}</h3>
      <p className="bento-product-desc">{p.desc}</p>
    </div>
  </Link>
);

const ProductsBento = () => (
  <section style={{ padding: '120px 0', background: '#050912' }} aria-labelledby="products-bento-heading">
    <div className="container-xl">
      {/* 2-column header — label+H2 left, description top-right */}
      <motion.div
        {...fadeUp()}
        className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8"
        style={{ marginBottom: 64 }}
      >
        <div>
          <SectionLabel>Our Products</SectionLabel>
          <h2
            id="products-bento-heading"
            style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Built for BIM.<br />Powered by AI.
          </h2>
        </div>
        <div className="lg:pt-12">
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>
            Four AI-powered tools designed to eliminate friction
            and multiply your team's output across every BIM workflow.
          </p>
        </div>
      </motion.div>

      {/* Row 1 — Galara extends full width */}
      <motion.div {...fadeUp(0.05)} style={{ marginBottom: 20 }}>
        <BentoProductCard p={BENTO_PRODUCTS[0]} featured />
      </motion.div>

      {/* Row 2 — Solara, BCPortal, Worktime equal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <motion.div {...fadeUp(0.1)}>
          <BentoProductCard p={BENTO_PRODUCTS[1]} />
        </motion.div>
        <motion.div {...fadeUp(0.15)}>
          <BentoProductCard p={BENTO_PRODUCTS[2]} />
        </motion.div>
        <motion.div {...fadeUp(0.2)}>
          <BentoProductCard p={BENTO_PRODUCTS[3]} />
        </motion.div>
      </div>
    </div>
  </section>
);

const PainPoints = () => (
  <section style={{ padding: '100px 0', background: '#050912' }} aria-labelledby="pain-heading">
    <div className="container-prose">
      <motion.div {...fadeUp()} style={{ marginBottom: 56 }}>
        <SectionLabel color="rgba(255,255,255,0.3)">Is This You?</SectionLabel>
        <h2 id="pain-heading" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.01em' }}>
          Sound Familiar?
        </h2>
      </motion.div>
      <div>
        {PAIN_POINTS.map((point, i) => (
          <motion.div key={point} {...fadeUp(i * 0.07)} className="pain-item">
            <span className="pain-item-dot" />
            <span className="pain-item-text">{point}</span>
            <span className="pain-item-arrow">→</span>
          </motion.div>
        ))}
      </div>
      <motion.div {...fadeUp(PAIN_POINTS.length * 0.07 + 0.1)} style={{ marginTop: 48 }}>
        <Button variant="primary" size="lg" to="/products">See How Ecliptiko Solves This</Button>
      </motion.div>
    </div>
  </section>
);

const BentoSection = () => (
  <section style={{ padding: '100px 0', background: '#112143' }} aria-labelledby="why-heading">
    <div className="container-xl">
      <motion.div {...fadeUp()} style={{ marginBottom: 48 }}>
        <SectionLabel color="#FFD700">Why Ecliptiko</SectionLabel>
        <h2 id="why-heading" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.01em' }}>
          Where BIM Expertise Meets AI Innovation
        </h2>
      </motion.div>

      <div className="bento-grid">
        {/* Row 1 */}
        <motion.div {...fadeUp(0.05)} className="bento-cell-wide" style={{ background: 'rgba(75,63,114,0.12)' }}>
          <Cpu size={28} color="#FFD700" style={{ marginBottom: 20 }} />
          <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 12 }}>AI-First Approach</h3>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 480 }}>
            Natural language Revit automation — zero scripting, zero Python, zero learning curve.
            Describe what you want; Galara executes it immediately inside Revit.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="bento-cell" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 'clamp(52px,6vw,80px)', fontWeight: 300, color: '#FFD700', lineHeight: 1 }}>15+</div>
          <p style={{ fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,0.5)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Years of BIM expertise
          </p>
        </motion.div>

        {/* Row 2 */}
        <motion.div {...fadeUp(0.12)} className="bento-cell">
          <Building2 size={28} color="#FFD700" style={{ marginBottom: 20 }} />
          <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 10 }}>BIM-Native</h3>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            Built by BIM professionals for BIM professionals. 15+ years of Revit and IFC knowledge baked into every feature.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.15)} className="bento-cell-wide">
          <Layers size={28} color="#FFD700" style={{ marginBottom: 20 }} />
          <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 12 }}>Integrated Product Suite</h3>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 20 }}>
            From Revit AI copilot to HRMS — four products, one connected ecosystem designed to work independently or together.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Galara', 'Solara', 'BCPortal', 'Worktime'].map(n => (
              <span key={n} style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '4px 12px' }}>
                {n}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Row 3 */}
        <motion.div {...fadeUp(0.18)} className="bento-cell-full" style={{ background: 'rgba(255,215,0,0.04)', minHeight: 160 }}>
          <Zap size={28} color="#FFD700" style={{ marginBottom: 16 }} />
          <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 10 }}>Accessible to All</h3>
          <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: 680 }}>
            Galara and Solara require zero Python or coding knowledge. Any BIM professional can use them from day one —
            no IT department, no onboarding weeks, no specialist hire.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section
    style={{ padding: '80px 0', background: '#050912', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
    aria-label="Company statistics"
  >
    <div className="container-xl">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {STATS.map((s, i) => (
          <motion.div key={s.label} {...fadeUp(i * 0.07)}>
            <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section style={{ padding: '100px 0', background: '#112143' }} aria-labelledby="cases-heading">
    <div className="container-xl">
      <motion.div {...fadeUp()} style={{ marginBottom: 56 }}>
        <SectionLabel color="#FFD700">Client Results</SectionLabel>
        <h2 id="cases-heading" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.01em' }}>
          Real Impact. Real BIM Teams.
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CASES.map((c, i) => (
          <motion.div key={c.num} {...fadeUp(i * 0.1)} className="glass-card" style={{ padding: 36, position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: 72, fontWeight: 300, color: '#FFD700', opacity: 0.12, lineHeight: 1, position: 'absolute', top: 16, right: 24, userSelect: 'none' }}>
              {c.num}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#FFD700', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
              {c.num}
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 400, lineHeight: 1.5, marginBottom: 14, paddingRight: 40 }}>{c.title}</h3>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 20 }}>{c.desc}</p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {c.tags.map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '3px 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTABand = () => (
  <section
    style={{ padding: '100px 0', background: 'linear-gradient(135deg, #112143 0%, #4B3F72 50%, #112143 100%)' }}
    aria-labelledby="cta-heading"
  >
    <div className="container-xl" style={{ textAlign: 'center' }}>
      <motion.div {...fadeUp()}>
        <h2 id="cta-heading" style={{ fontSize: 'clamp(28px,4vw,52px)', fontWeight: 300, letterSpacing: '-0.01em', marginBottom: 16 }}>
          Ready to Eclipse your Limits?
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto 40px' }}>
          Talk to our team and discover how Ecliptiko's AI tools can transform your BIM workflows.
        </p>
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" to="/contact">Request a Demo</Button>
          <Button variant="ghost-yellow" size="lg" to="/contact">Contact Us</Button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── Page ─────────────────────────────────────────── */
const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>Ecliptiko — AI-Driven BIM Automation</title>
      <meta name="description" content="Eclipse your Limits. Ecliptiko builds AI-powered tools for the BIM industry — 15+ years of expertise, encoded into software." />
      <link rel="canonical" href="https://ecliptiko.com" />
      <meta property="og:title" content="Ecliptiko — AI-Driven BIM Automation" />
      <meta property="og:description" content="Eclipse your Limits. AI tools for architects, engineers, and BIM professionals." />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ecliptiko',
        url: 'https://ecliptiko.com',
        description: 'AI-driven automation company in the BIM industry',
        foundingDate: '2009',
        numberOfEmployees: '90+',
      })}</script>
    </Helmet>

    <Hero />
    <LogoTicker />
    <ProductsBento />
    <PainPoints />
    <BentoSection />
    <StatsSection />
    <CaseStudies />
    <CTABand />
  </>
);

export default HomePage;
