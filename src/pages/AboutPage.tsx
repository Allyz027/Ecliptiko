import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionLabel } from '../components/ui/SectionLabel';
import { heroAnim } from '../components/ui/anim';
import { StatCounter } from '../components/ui/StatCounter';
import { GalaxyBg } from '../components/ui/GalaxyBg';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, delay, ease: 'easeOut' as const },
});

const STATS = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 4,  suffix: '',  label: 'Active Products' },
  { value: 8,  suffix: '+', label: 'Core Team Members' },
  { value: 90, suffix: '+', label: 'Global Employees' },
  { value: 70, suffix: '+', label: 'BIM Testers' },
];

const VALUES = [
  {
    icon: Eye,
    title: 'Vision',
    body: 'A world where BIM professionals spend their time on creative and strategic work — not repetitive manual tasks. We build the tools that make that possible.',
  },
  {
    icon: Target,
    title: 'Mission',
    body: 'To encode 15+ years of BIM expertise into AI-powered software that transforms how architects, engineers, and project managers work every day.',
  },
  {
    icon: Heart,
    title: 'Values',
    body: 'BIM-native thinking, radical accessibility, zero compromise on quality. We build for professionals, tested by professionals — and it shows.',
  },
];

const TIMELINE = [
  { year: '2009', event: 'Founded with a focus on BIM consulting and Revit implementation across MENA.' },
  { year: '2015', event: 'Expanded to a global team of 50+ BIM professionals across three continents.' },
  { year: '2019', event: 'Launched Solara — our first Revit productivity toolbar, deployed across enterprise BIM teams.' },
  { year: '2022', event: 'BCPortal and Worktime Tracker deployed across BIMCAP global operations.' },
  { year: '2024', event: 'Galara released — AI copilot for Revit, built on deep Revit API expertise and LLM integration.' },
  { year: '2025', event: 'Ecliptiko formalised as an independent AI software company. The next chapter begins.' },
];

const AboutPage: React.FC = () => (
  <>
    <Helmet>
      <title>About Ecliptiko — AI-Driven BIM Automation</title>
      <meta name="description" content="Ecliptiko is an AI software company with 15+ years of BIM expertise. We build tools that transform how architects, engineers, and BIM professionals work." />
      <link rel="canonical" href="https://ecliptiko.com/about" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ecliptiko',
        url: 'https://ecliptiko.com',
        foundingDate: '2009',
        description: 'AI-driven automation company in the BIM industry',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: '90+' },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section
      className="relative overflow-hidden flex items-center"
      style={{ background: '#050912', minHeight: '85vh', paddingTop: 140, paddingBottom: 140 }}
      aria-labelledby="about-heading"
    >
      <GalaxyBg />
      <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
        <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SectionLabel>About Ecliptiko</SectionLabel>
          <h1
            id="about-heading"
            style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.1, margin: 0 }}
          >
            15 Years of BIM.{' '}
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #4B3F72, #FFD700)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Encoded into AI.</span>
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 640, margin: '24px auto 0', textAlign: 'center' }}>
            Ecliptiko is an AI software company born from deep BIM expertise. We don't just build tools —
            we encode over a decade of real-world experience into software that works the way BIM professionals think.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-label="Company statistics">
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

    {/* Vision / Mission / Values */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="about-values-heading">
      <div className="container-xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel color="#FFD700">Who We Are</SectionLabel>
          <h2 id="about-values-heading" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Built on Expertise. Driven by Purpose.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <motion.div key={v.title} {...fadeUp(i * 0.1)} className="glass-card p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(255,215,0,0.1)' }}
              >
                <v.icon size={24} style={{ color: '#FFD700' }} />
              </div>
              <h3 className="text-[20px] font-medium text-white mb-3">{v.title}</h3>
              <p className="text-[14px] text-white/60 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="bg-[#112143]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="about-story-heading">
      <div className="container-prose">
        <motion.div {...fadeUp()} className="text-center mb-12">
          <SectionLabel color="#4B3F72">Our Story</SectionLabel>
          <h2 id="about-story-heading" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300 }}>
            From BIM Consulting to AI Software
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.1)} className="text-white/65 text-[15px] leading-[1.9]" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>
            Ecliptiko began not as a software company, but as a BIM consultancy. For over a decade, our team worked
            directly inside some of the world's most complex architectural and engineering projects — managing Revit
            models, coordinating BIM deliverables, and solving the same problems over and over again.
          </p>
          <p>
            The repetition was the signal. Every hour spent on batch renaming, parameter sweeps, schedule formatting —
            that was an hour not spent on design, coordination, and problem-solving. We started building internal tools.
            They worked. So we kept going.
          </p>
          <p>
            Today, Ecliptiko builds AI-powered software for the BIM industry — not because it's a trend, but because
            we've spent 15 years understanding exactly which problems need solving, and we finally have the technology to solve them properly.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }} aria-labelledby="about-timeline-heading">
      <div className="container-prose">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <SectionLabel>Timeline</SectionLabel>
          <h2 id="about-timeline-heading" style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 300 }}>
            Our Journey
          </h2>
        </motion.div>
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 w-[1px]"
            style={{ left: '60px', background: 'linear-gradient(to bottom, transparent, rgba(255,215,0,0.3), transparent)' }}
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8">
            {TIMELINE.map((t, i) => (
              <motion.div key={t.year} {...fadeUp(i * 0.07)} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 text-right text-[14px] font-medium pt-0.5"
                  style={{ width: '60px', color: '#FFD700' }}
                >
                  {t.year}
                </div>
                <div
                  className="flex-shrink-0 rounded-full relative z-10"
                  style={{ width: '12px', height: '12px', marginTop: '6px', background: '#FFD700', boxShadow: '0 0 10px rgba(255,215,0,0.5)' }}
                />
                <p className="text-[14px] text-white/65 leading-relaxed pt-0.5">{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section
      style={{ background: 'linear-gradient(135deg, #112143 0%, #4B3F72 50%, #112143 100%)', paddingTop: 128, paddingBottom: 128 }}
    >
      <div className="container-xl text-center">
        <motion.div {...fadeUp()}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 300 }}>
            Ready to work with us?
          </h2>
          <p className="mt-4 text-white/55 text-[15px] max-w-lg mx-auto">
            Whether you're looking for our tools or want to discuss a custom solution, we'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" to="/contact">Get in Touch <ArrowRight size={16} /></Button>
            <Button variant="ghost-yellow" size="lg" to="/products">Explore Products</Button>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default AboutPage;
