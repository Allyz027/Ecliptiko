import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/Button';

const services = [
  'Strategic Consulting',
  'AI Integration',
  'UX & Product Design',
  'Cloud Architecture',
  'Data Intelligence',
  'Training & Enablement',
];

const fieldClass = [
  'w-full bg-[#1A2E54] border border-[#1E3460] rounded-[8px]',
  'px-4 py-3 text-sm text-white placeholder-[#ADE1E5]/50 font-display',
  'transition-all duration-200 outline-none',
  'focus:border-[#FFD700] focus:shadow-[0_0_0_3px_rgba(255,215,0,0.15)]',
].join(' ');

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  brief: string;
}

const empty: FormState = { name: '', email: '', company: '', service: '', brief: '' };

export const ContactForm: React.FC = () => {
  const [form,      setForm]      = useState<FormState>(empty);
  const [errors,    setErrors]    = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())                               e.name    = 'Name is required';
    if (!form.email.trim())                              e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.company.trim())                            e.company = 'Company is required';
    if (!form.service)                                   e.service = 'Select a service';
    if (!form.brief.trim())                              e.brief   = 'Tell us about your project';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSubmitted(true);
  };

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm(f => ({ ...f, [field]: e.target.value }));
    setErrors(er => ({ ...er, [field]: undefined }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center gap-4"
      >
        <CheckCircle size={52} className="text-[#FFD700]" />
        <h3 className="font-display font-bold text-white text-2xl">Message sent.</h3>
        <p className="text-[#ADE1E5] text-sm max-w-xs">
          We've received your brief and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => { setForm(empty); setSubmitted(false); }}
          className="mt-4 text-sm text-[#FFD700] underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-[#ADE1E5] mb-2">
          Full Name <span className="text-[#FF377D]">*</span>
        </label>
        <input
          type="text"
          placeholder="Alex Johnson"
          value={form.name}
          onChange={set('name')}
          className={fieldClass}
        />
        {errors.name && <p className="mt-1 text-xs text-[#FF377D]">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-[#ADE1E5] mb-2">
          Work Email <span className="text-[#FF377D]">*</span>
        </label>
        <input
          type="email"
          placeholder="alex@company.com"
          value={form.email}
          onChange={set('email')}
          className={fieldClass}
        />
        {errors.email && <p className="mt-1 text-xs text-[#FF377D]">{errors.email}</p>}
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-[#ADE1E5] mb-2">
          Company <span className="text-[#FF377D]">*</span>
        </label>
        <input
          type="text"
          placeholder="Acme Corp"
          value={form.company}
          onChange={set('company')}
          className={fieldClass}
        />
        {errors.company && <p className="mt-1 text-xs text-[#FF377D]">{errors.company}</p>}
      </div>

      {/* Service */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-[#ADE1E5] mb-2">
          Service Interest <span className="text-[#FF377D]">*</span>
        </label>
        <select
          value={form.service}
          onChange={set('service')}
          className={`${fieldClass} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Select a service…</option>
          {services.map(s => (
            <option key={s} value={s} className="bg-[#1A2E54]">{s}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-[#FF377D]">{errors.service}</p>}
      </div>

      {/* Brief */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-[#ADE1E5] mb-2">
          Project Brief <span className="text-[#FF377D]">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Tell us about your challenge, goals, and timeline…"
          value={form.brief}
          onChange={set('brief')}
          className={`${fieldClass} resize-none`}
        />
        {errors.brief && <p className="mt-1 text-xs text-[#FF377D]">{errors.brief}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth>
        Send Message <Send size={16} />
      </Button>
    </form>
  );
};
