import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, LayoutGrid, RefreshCw, Package, FileStack, Settings2, Users } from 'lucide-react';
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

const FEATURES = [
  {
    icon: LayoutGrid,
    title: 'Sheet & Drawing Automation',
    body: 'Batch rename, sort, reorder, and export sheets across an entire project. One action replaces hours of repetitive clicking.',
  },
  {
    icon: Package,
    title: 'Family & Type Management',
    body: 'Audit, purge, rename, and organise families and types at scale. Keep your project library clean and consistent across every model.',
  },
  {
    icon: RefreshCw,
    title: 'Batch Parameter Operations',
    body: 'Update parameters across thousands of elements simultaneously. No manual selection, no scripting — just configure and execute.',
  },
  {
    icon: FileStack,
    title: 'Export & Output Pipelines',
    body: 'Standardised DWG, PDF, IFC, and NWC exports with a single click. Consistent output every time, for every team member.',
  },
  {
    icon: Settings2,
    title: 'View & Viewport Control',
    body: 'Manage view templates, crop regions, overrides, and visibility settings across hundreds of views simultaneously.',
  },
  {
    icon: Users,
    title: 'Team Consistency Tools',
    body: 'Enforce naming conventions, parameter standards, and model structure across your entire team without manual policing.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Select your operation',
    body: 'Choose from Solara\'s comprehensive toolset — sheet management, family tools, batch parameters, export pipelines, and more.',
  },
  {
    num: '02',
    title: 'Configure and preview',
    body: 'Set your parameters, review the scope of changes, and confirm before anything is modified. Full transparency, zero surprises.',
  },
  {
    num: '03',
    title: 'Execute at scale',
    body: 'Solara applies your operation across the model in seconds. What took your team hours is done before the next meeting.',
  },
];

const METRICS = [
  { value: '3×', label: 'Faster sheet production' },
  { value: '80%', label: 'Less time on repetitive tasks' },
  { value: '100%', label: 'Output consistency' },
];

const SolaraPage: React.FC = () => (
  <>
    <Helmet>
      <title>Solara — Revit Productivity Toolbar by Ecliptiko</title>
      <meta name="description" content="Solara is the comprehensive Revit productivity toolbar covering every phase of your BIM project lifecycle. 3× faster sheet production." />
      <link rel="canonical" href="https://ecliptiko.com/products/solara" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Solara',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Windows',
        creator: { '@type': 'Organization', name: 'Ecliptiko' },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section
      className="relative overflow-hidden"
      style={{ background: '#050912', paddingTop: 140, paddingBottom: 100 }}
      aria-labelledby="solara-heading"
    >
      <GalaxyBg />
      <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
        <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(225,105,75,0.12)', color: '#E1694B', border: '1px solid rgba(225,105,75,0.25)' }}
          >
            Revit Productivity Toolbar
          </span>
          <h1
            id="solara-heading"
            style={{ fontSize: 'clamp(56px,8vw,112px)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.05, margin: 0, color: '#ffffff' }}
          >
            Solara
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '24px auto 0', textAlign: 'center' }}>
            The comprehensive productivity toolbar covering every phase of your BIM project lifecycle.
            Eliminate repetitive manual work. Deliver consistent output at speed.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <Button variant="primary" size="lg" to="/contact">
              Request a Demo <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" size="lg" to="#features">
              See Features
            </Button>
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div {...fadeUp(0.15)} className="mt-16 flex flex-wrap justify-center gap-8">
          {METRICS.map(m => (
            <div key={m.label} className="text-center">
              <div
                className="text-[42px] font-black leading-none"
                style={{
                  background: 'linear-gradient(90deg, #5A7BBF, #E1694B)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
              >
                {m.value}
              </div>
              <div className="text-[13px] text-white/50 mt-1">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Video Container */}
        <motion.div {...fadeUp(0.25)} style={{ marginTop: 64 }}>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ background: '#ffffff', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
            <div className="flex items-center gap-2 px-5" style={{ height: 44, borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#f5f5f7' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="relative flex flex-col items-center justify-center" style={{ minHeight: 460, background: '#f0f0f2' }}>
              {/* <video src="/solara-demo.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> */}
              {/* <iframe src="https://www.youtube.com/embed/YOUR_ID" allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} /> */}
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.1)' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="rgba(0,0,0,0.3)" />
                </svg>
              </div>
              <p style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.25)' }}>Demo Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section id="features" className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="solara-features-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#5A7BBF">Features</SectionLabel>
          <h2 id="solara-features-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Every Tool Your BIM Team Needs
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.07)} className="glass-card p-7">
              <f.icon size={26} style={{ color: '#5A7BBF', marginBottom: 16 }} />
              <h3 className="text-[18px] font-medium text-white mb-3">{f.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="solara-how-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#E1694B">How It Works</SectionLabel>
          <h2 id="solara-how-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Powerful Operations. Simple Execution.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <motion.div key={s.num} {...fadeUp(i * 0.1)} className="relative">
              <div
                className="text-[56px] font-black leading-none mb-4"
                style={{
                  background: 'linear-gradient(90deg, #5A7BBF, #E1694B)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  opacity: 0.5,
                }}
              >
                {s.num}
              </div>
              <h3 className="text-[18px] font-medium text-white mb-3">{s.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Who It's For */}
    <section className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="solara-who-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <SectionLabel color="#5A7BBF">Who It's For</SectionLabel>
          <h2 id="solara-who-heading" style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 300 }}>
            Built for Every Revit Professional
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-3">
          {['BIM Managers', 'Revit Technicians', 'CAD Coordinators', 'Project Architects', 'BIM Authors'].map(r => (
            <span
              key={r}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium text-white"
              style={{ background: 'rgba(90,123,191,0.2)', border: '1px solid rgba(225,105,75,0.2)' }}
            >
              <Users size={14} style={{ color: '#5A7BBF' }} />
              {r}
            </span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div className="container-xl text-center">
        <motion.div {...fadeUp()}>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 300 }}>
            Get started with Solara
          </h2>
          <p className="mt-3 text-white/50 text-[15px]">See how Solara transforms your team's Revit productivity in days, not months.</p>
          <div className="mt-6">
            <Button variant="primary" size="lg" to="/contact">
              Contact Our Team <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default SolaraPage;
