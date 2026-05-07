import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, BarChart3, Users, Bell, Database } from 'lucide-react';
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
    icon: BarChart3,
    title: 'Unified Task & Deadline Tracking',
    body: 'Every team, every department, every deadline — visible in one place. Real-time status updates with priority flags and escalation workflows.',
  },
  {
    icon: Users,
    title: 'HR & People Management',
    body: 'Employee profiles, leave management, onboarding workflows, and HR document storage. Everything your HR team needs, none of the spreadsheets.',
  },
  {
    icon: Database,
    title: 'IT Resource Hub',
    body: 'Software licences, hardware inventory, access credentials, and IT request management — centralised and searchable across all global offices.',
  },
  {
    icon: Globe,
    title: 'Global Team Visibility',
    body: 'Live org charts, team directories, and cross-office project assignments. Know who is working on what, wherever they are in the world.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access Control',
    body: 'Department managers, HR, IT, and employees each see exactly what they need. Granular permissions protect sensitive data at every level.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    body: 'Automated alerts for deadlines, approvals, and escalations. Never miss a critical update — notifications delivered where your team works.',
  },
];

const DEPARTMENTS = [
  { name: 'Management', desc: 'Company-wide visibility and KPI dashboards' },
  { name: 'HR', desc: 'Personnel records, leave, onboarding' },
  { name: 'IT', desc: 'Asset tracking, licences, helpdesk' },
  { name: 'Project Teams', desc: 'Task boards, deadlines, dependencies' },
  { name: 'Finance', desc: 'Budget tracking and approvals' },
  { name: 'Operations', desc: 'Cross-department coordination' },
];

const BCPortalPage: React.FC = () => (
  <>
    <Helmet>
      <title>BCPortal — Unified HRMS Web Portal by Ecliptiko</title>
      <meta name="description" content="BCPortal centralises task management, HR functions, IT resources, and global team visibility in one intelligent hub for BIMCAP worldwide." />
      <link rel="canonical" href="https://ecliptiko.com/products/bcportal" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'BCPortal',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        creator: { '@type': 'Organization', name: 'Ecliptiko' },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section
      className="relative overflow-hidden"
      style={{ background: '#050912', paddingTop: 140, paddingBottom: 100 }}
      aria-labelledby="bcportal-heading"
    >
      <GalaxyBg />
      <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
        <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.25)' }}
          >
            Unified HRMS Web Portal
          </span>
          <h1
            id="bcportal-heading"
            style={{ fontSize: 'clamp(56px,8vw,112px)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.05, margin: 0, color: '#ffffff' }}
          >
            BCPortal
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '24px auto 0', textAlign: 'center' }}>
            The single source of truth for BIMCAP operations. Tasks, HR, IT, and global team management
            — all centralised in one intelligent hub, accessible from anywhere.
          </p>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <Button variant="primary" size="lg" to="/contact">
              Request Access <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" size="lg" to="#features">
              Explore Features
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
              {/* <video src="/bcportal-demo.mp4" controls style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> */}
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
    <section id="features" className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="bcportal-features-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#FFD700">Features</SectionLabel>
          <h2 id="bcportal-features-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Everything in One Place
          </h2>
          <p className="mt-4 text-white/50 text-[15px] max-w-xl mx-auto">
            No more scattered spreadsheets, email chains, or disconnected systems. BCPortal replaces them all.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title} {...fadeUp(i * 0.07)} className="glass-card p-7">
              <f.icon size={26} style={{ color: '#FFD700', marginBottom: 16 }} />
              <h3 className="text-[18px] font-medium text-white mb-3">{f.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Departments */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="bcportal-dept-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#E1694B">Built For Every Team</SectionLabel>
          <h2 id="bcportal-dept-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            One Portal, Every Department
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEPARTMENTS.map((d, i) => (
            <motion.div
              key={d.name}
              {...fadeUp(i * 0.07)}
              className="glass-card p-6 flex items-start gap-4"
            >
              <div
                className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-[14px] font-bold"
                style={{ background: 'rgba(255,215,0,0.12)', color: '#FFD700' }}
              >
                {d.name[0]}
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-white mb-1">{d.name}</h3>
                <p className="text-[13px] text-white/55">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Access info */}
    <section className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div className="max-w-[860px] mx-auto px-6">
        <motion.div {...fadeUp()} className="glass-card p-10 text-center" style={{ borderColor: 'rgba(255,215,0,0.15)' }}>
          <div
            className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,215,0,0.1)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.25)' }}
          >
            Custom-Built for BIMCAP
          </div>
          <h2 style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 300 }}>
            Tailored to your organisation's structure
          </h2>
          <p className="mt-4 text-white/55 text-[15px] leading-relaxed max-w-xl mx-auto">
            BCPortal is a bespoke solution built specifically for BIMCAP's global operations.
            Access is managed through your organisation's credentials — contact us for onboarding.
          </p>
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

export default BCPortalPage;
