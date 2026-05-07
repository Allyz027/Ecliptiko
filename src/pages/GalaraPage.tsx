import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Cpu, Layers, Zap, Users } from 'lucide-react';
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
    icon: MessageSquare,
    title: 'Natural Language Commands',
    body: 'Type what you want in plain English. "Place 12 columns on grid A" or "Generate a door schedule for Level 3" — Galara interprets and executes instantly.',
  },
  {
    icon: Cpu,
    title: 'Revit-Native Integration',
    body: 'Deep Revit API access — no external tools, no browser plugins. Galara lives inside Revit and works with your existing files and workflows.',
  },
  {
    icon: Layers,
    title: 'AI-Generated Geometry & Data',
    body: 'Create families, update parameters, generate complex schedules, and modify model data through a single conversational interface.',
  },
  {
    icon: Zap,
    title: 'Production Speed Multiplier',
    body: 'Tasks that took hours of manual work — repetitive placements, schedule updates, parameter sweeps — completed in seconds.',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Describe your task',
    body: 'Type your instruction in plain language directly inside Revit. No special syntax, no command memorisation.',
  },
  {
    num: '02',
    title: 'Galara interprets and maps',
    body: 'The AI engine maps your instruction to the exact Revit operations required — geometry, parameters, families, schedules.',
  },
  {
    num: '03',
    title: 'Review and apply',
    body: 'Preview the change, approve, and Galara executes — changes reflected instantly in your model. You stay in control.',
  },
];

const GalaraPage: React.FC = () => (
  <>
    <Helmet>
      <title>Galara — Revit AI Copilot by Ecliptiko</title>
      <meta name="description" content="Galara automates complex Revit tasks with plain-language commands. No scripting. No plugins. Just intelligence." />
      <link rel="canonical" href="https://ecliptiko.com/products/galara" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Galara',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Windows',
        creator: { '@type': 'Organization', name: 'Ecliptiko' },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section
      className="relative overflow-hidden"
      style={{ background: '#050912', paddingTop: 140, paddingBottom: 100 }}
      aria-labelledby="galara-heading"
    >
      <GalaxyBg />
      <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
        <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,55,125,0.12)', color: '#FF377D', border: '1px solid rgba(255,55,125,0.25)' }}
          >
            Revit AI Copilot
          </span>
          <h1
            id="galara-heading"
            style={{ fontSize: 'clamp(56px,8vw,112px)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.05, margin: 0, color: '#ffffff' }}
          >
            Galara
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '24px auto 0', textAlign: 'center' }}>
            Automate complex Revit tasks with plain-language commands. No scripting. No plugins. Just intelligence.
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

        {/* Video Container */}
        <motion.div {...fadeUp(0.2)} style={{ marginTop: 64 }}>
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ background: '#ffffff', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
            <div className="flex items-center gap-2 px-5" style={{ height: 44, borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#f5f5f7' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            </div>
            <div className="relative flex flex-col items-center justify-center" style={{ minHeight: 460, background: '#f0f0f2' }}>
              {/* <video src="/galara-demo.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> */}
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
    <section id="features" className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="galara-features-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#FF377D">Features</SectionLabel>
          <h2 id="galara-features-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Everything You Need, in Plain Language
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.08)} className="glass-card p-7">
              <f.icon size={26} style={{ color: '#FF377D', marginBottom: 16 }} />
              <h3 className="text-[18px] font-medium text-white mb-3">{f.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="galara-how-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#4B3F72">How It Works</SectionLabel>
          <h2 id="galara-how-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Three Steps to AI-Powered Revit
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <motion.div key={s.num} {...fadeUp(i * 0.1)} className="relative">
              <div
                className="text-[56px] font-black leading-none mb-4"
                style={{
                  background: 'linear-gradient(90deg, #4B3F72, #FF377D)',
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
    <section className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="galara-who-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-10">
          <SectionLabel color="#FF377D">Who It's For</SectionLabel>
          <h2 id="galara-who-heading" style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 300 }}>
            Built for BIM Professionals
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap justify-center gap-3">
          {['BIM Managers', 'Revit Modellers', 'Project Engineers', 'Architects'].map(r => (
            <span
              key={r}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium text-white"
              style={{ background: 'rgba(75,63,114,0.3)', border: '1px solid rgba(255,55,125,0.2)' }}
            >
              <Users size={14} style={{ color: '#FF377D' }} />
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
            Get started with Galara
          </h2>
          <p className="mt-3 text-white/50 text-[15px]">Contact our team today — we'll have you running in Revit within days.</p>
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

export default GalaraPage;
