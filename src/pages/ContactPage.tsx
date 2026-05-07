import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
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

type FormState = {
  name: string;
  email: string;
  company: string;
  product: string;
  message: string;
};

const PRODUCTS = ['Galara', 'Solara', 'BCPortal', 'Worktime Tracker', 'General Enquiry'];

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', product: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputBase = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '14px',
    padding: '12px 16px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  } as React.CSSProperties;

  const errorStyle: React.CSSProperties = { borderColor: '#FF377D' };

  return (
    <>
      <Helmet>
        <title>Contact Ecliptiko — Request a Demo or Get in Touch</title>
        <meta name="description" content="Contact Ecliptiko to request a demo, ask about our products, or discuss a custom solution for your BIM workflows." />
        <link rel="canonical" href="https://ecliptiko.com/contact" />
      </Helmet>

      {/* Hero */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ background: '#050912', minHeight: '70vh', paddingTop: 140, paddingBottom: 100 }}
        aria-labelledby="contact-heading"
      >
        <GalaxyBg />
        <div className="container-xl" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <motion.div {...heroAnim()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h1
              id="contact-heading"
              style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.1, margin: 0 }}
            >
              Let's Talk BIM
            </h1>
            <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '20px auto 0', textAlign: 'center' }}>
              Request a demo, ask about our products, or tell us about your workflow challenges.
              We typically respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#050912]" style={{ paddingTop: 128, paddingBottom: 128 }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

            {/* Form */}
            <motion.div {...fadeUp()}>
              {submitted ? (
                <div className="glass-card p-12 text-center" style={{ borderColor: 'rgba(255,55,125,0.2)' }}>
                  <CheckCircle2 size={48} style={{ color: '#FFD700', margin: '0 auto 20px' }} />
                  <h2 style={{ fontSize: '24px', fontWeight: 300 }}>Message received.</h2>
                  <p className="mt-3 text-white/55 text-[15px]">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="glass-card p-8 flex flex-col gap-5">
                  <h2 style={{ fontSize: '20px', fontWeight: 400 }} className="text-white mb-1">Send us a message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">
                        Full Name <span style={{ color: '#FF377D' }}>*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" autoComplete="name"
                        placeholder="Your name"
                        value={form.name} onChange={handleChange}
                        style={{ ...inputBase, ...(errors.name ? errorStyle : {}) }}
                      />
                      {errors.name && <p className="mt-1 text-[12px]" style={{ color: '#FF377D' }}>{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">
                        Work Email <span style={{ color: '#FF377D' }}>*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" autoComplete="email"
                        placeholder="you@company.com"
                        value={form.email} onChange={handleChange}
                        style={{ ...inputBase, ...(errors.email ? errorStyle : {}) }}
                      />
                      {errors.email && <p className="mt-1 text-[12px]" style={{ color: '#FF377D' }}>{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">
                        Company
                      </label>
                      <input
                        id="company" name="company" type="text" autoComplete="organization"
                        placeholder="Your company"
                        value={form.company} onChange={handleChange}
                        style={inputBase}
                      />
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">
                        Product Interest
                      </label>
                      <select
                        id="product" name="product"
                        value={form.product} onChange={handleChange}
                        style={{ ...inputBase, cursor: 'pointer' }}
                      >
                        <option value="" style={{ background: '#112143' }}>Select a product</option>
                        {PRODUCTS.map(p => (
                          <option key={p} value={p} style={{ background: '#112143' }}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[12px] text-white/50 uppercase tracking-wider mb-1.5">
                      Message <span style={{ color: '#FF377D' }}>*</span>
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      placeholder="Tell us about your project or what you're looking to solve..."
                      value={form.message} onChange={handleChange}
                      style={{ ...inputBase, resize: 'vertical', ...(errors.message ? errorStyle : {}) }}
                    />
                    {errors.message && <p className="mt-1 text-[12px]" style={{ color: '#FF377D' }}>{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="lg" type="submit">
                      Send Message <Send size={15} />
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(255,215,0,0.1)' }}
                  >
                    <Mail size={18} style={{ color: '#FFD700' }} />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/40 uppercase tracking-wider mb-1">Email Us</p>
                    <a
                      href="mailto:hello@ecliptiko.com"
                      className="text-[14px] text-white hover:text-[#FFD700] transition-colors"
                    >
                      hello@ecliptiko.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(255,215,0,0.1)' }}
                  >
                    <MapPin size={18} style={{ color: '#FFD700' }} />
                  </div>
                  <div>
                    <p className="text-[12px] text-white/40 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-[14px] text-white/70">Global · Remote-first team</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <p className="text-[12px] text-white/40 uppercase tracking-wider mb-3">Response Time</p>
                <p className="text-[14px] text-white/70 leading-relaxed">
                  We respond to all enquiries within <span className="text-white">one business day</span>.
                  For urgent matters, mention it in your message.
                </p>
              </div>

              <div className="glass-card p-6" style={{ borderColor: 'rgba(255,55,125,0.15)' }}>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  Looking to request a demo? Include your preferred product and team size and we'll set up a personalised walkthrough.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
