import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Clock, TrendingUp, PieChart, AlertCircle, Calendar, Plug } from 'lucide-react';
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
    icon: Plug,
    title: 'Seamless Bitrix24 Integration',
    body: 'Connects directly to your Bitrix24 workspace via API. No data entry, no imports — time data flows automatically from where work happens.',
  },
  {
    icon: Clock,
    title: 'Automatic Time Capture',
    body: 'Every tracked hour is captured and categorised without manual input. Activities are intelligently mapped to projects, tasks, and departments.',
  },
  {
    icon: TrendingUp,
    title: 'Manager Dashboards',
    body: 'Real-time visibility into team productivity. See who is working on what, track progress against targets, and identify bottlenecks instantly.',
  },
  {
    icon: PieChart,
    title: 'Detailed Reporting',
    body: 'Weekly and monthly reports with trend analysis, team comparisons, and project breakdowns. Exportable in multiple formats for stakeholder review.',
  },
  {
    icon: AlertCircle,
    title: 'Anomaly Detection',
    body: 'Automatic flags for unusual patterns — missed logging, overtime spikes, underutilised resources. Catch issues before they become problems.',
  },
  {
    icon: Calendar,
    title: 'Flexible for Any Team',
    body: 'Works for in-office, hybrid, and fully remote teams. Track productivity across time zones without changing how your team works.',
  },
];

const METRICS = [
  { value: '100%', label: 'Automatic time capture' },
  { value: '0', label: 'Manual data entry' },
  { value: 'Real-time', label: 'Manager visibility' },
];

const WorktimePage: React.FC = () => (
  <>
    <Helmet>
      <title>Worktime Tracker — Bitrix24 Productivity Tool by Ecliptiko</title>
      <meta name="description" content="Worktime Tracker connects to Bitrix24 to deliver automated time tracking, productivity analytics, and real-time manager dashboards." />
      <link rel="canonical" href="https://ecliptiko.com/products/worktime-tracker" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Worktime Tracker',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        creator: { '@type': 'Organization', name: 'Ecliptiko' },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section
      className="relative overflow-hidden"
      style={{ background: '#050912', paddingTop: 140, paddingBottom: 100 }}
      aria-labelledby="worktime-heading"
    >
      <GalaxyBg />
      <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
        <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(173,225,229,0.1)', color: '#ADE1E5', border: '1px solid rgba(173,225,229,0.25)' }}
          >
            Bitrix24 API
          </span>
          <h1
            id="worktime-heading"
            style={{ fontSize: 'clamp(48px,7vw,96px)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.05, margin: 0, color: '#ffffff' }}
          >
            Worktime Tracker
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '24px auto 0', textAlign: 'center' }}>
            Automated time tracking and productivity analytics powered by your existing Bitrix24 workspace.
            No manual entry. No gaps. Just clarity.
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
        <motion.div {...fadeUp(0.15)} className="mt-16 flex flex-wrap justify-center gap-10">
          {METRICS.map(m => (
            <div key={m.label} className="text-center">
              <div
                className="text-[42px] font-black leading-none"
                style={{
                  background: 'linear-gradient(90deg, #ADE1E5, #5A7BBF)',
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
              {/* <video src="/worktime-demo.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> */}
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
    <section id="features" className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="worktime-features-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#ADE1E5">Features</SectionLabel>
          <h2 id="worktime-features-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Complete Workforce Visibility
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.07)} className="glass-card p-7">
              <f.icon size={26} style={{ color: '#ADE1E5', marginBottom: 16 }} />
              <h3 className="text-[18px] font-medium text-white mb-3">{f.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Integration highlight */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="worktime-integration-heading">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp()}>
            <SectionLabel color="#5A7BBF">Bitrix24 Native</SectionLabel>
            <h2 id="worktime-integration-heading" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300, lineHeight: 1.2 }}>
              Works inside your existing Bitrix24 workspace
            </h2>
            <p className="mt-5 text-white/55 text-[15px] leading-relaxed">
              No new platforms to learn, no data migration, no disruption to existing workflows.
              Worktime Tracker plugs directly into your Bitrix24 environment and starts working immediately.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                'One-time API connection setup',
                'Automatic sync of all tracked time',
                'Works with all Bitrix24 plans',
                'No changes to your existing workflows',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-[14px] text-white/70">
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-[10px]"
                    style={{ background: 'rgba(173,225,229,0.15)', color: '#ADE1E5' }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="glass-card p-8" style={{ borderColor: 'rgba(173,225,229,0.15)' }}>
            <div className="text-[13px] text-white/40 uppercase tracking-wider mb-4">Live Dashboard Preview</div>
            <div className="flex flex-col gap-4">
              {[
                { name: 'Design Team', hours: 87, pct: 92 },
                { name: 'Modelling', hours: 64, pct: 71 },
                { name: 'Coordination', hours: 43, pct: 55 },
                { name: 'Management', hours: 22, pct: 38 },
              ].map(row => (
                <div key={row.name}>
                  <div className="flex justify-between text-[13px] mb-1.5">
                    <span className="text-white/70">{row.name}</span>
                    <span style={{ color: '#ADE1E5' }}>{row.hours}h logged</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${row.pct}%`,
                        background: 'linear-gradient(90deg, #ADE1E5, #5A7BBF)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div className="container-xl text-center">
        <motion.div {...fadeUp()}>
          <h2 style={{ fontSize: 'clamp(24px,3.5vw,44px)', fontWeight: 300 }}>
            Get started with Worktime Tracker
          </h2>
          <p className="mt-3 text-white/50 text-[15px]">Connect your Bitrix24 workspace and get real-time visibility within hours.</p>
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

export default WorktimePage;
