import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, Brain, Palette, Cloud, PieChart, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    Icon: Compass,
    name: 'Strategic Consulting',
    desc: 'Digital transformation roadmapping built on research, not guesswork. We align every technology decision to your business context.',
    features: ['Technology audits', 'Roadmap development', 'Executive alignment workshops'],
  },
  {
    Icon: Brain,
    name: 'AI Integration',
    desc: 'Embedding intelligence into existing workflows — from LLM-powered tools to custom ML pipelines. No hype, just outcomes.',
    features: ['Model selection & fine-tuning', 'Workflow automation', 'AI governance frameworks'],
  },
  {
    Icon: Palette,
    name: 'UX & Product Design',
    desc: 'Research-led design for enterprise products that people actually use. We build for clarity, not awards.',
    features: ['User research & testing', 'Design systems', 'Prototyping & validation'],
  },
  {
    Icon: Cloud,
    name: 'Cloud Architecture',
    desc: 'Scalable, secure infrastructure design — from multi-cloud migrations to zero-trust security models.',
    features: ['Cloud migration strategy', 'Infrastructure as Code', 'Cost optimization'],
  },
  {
    Icon: PieChart,
    name: 'Data Intelligence',
    desc: 'Analytics platforms and insight engines that turn raw data into decisions. Built for analysts and executives alike.',
    features: ['Data platform engineering', 'BI & visualization', 'Real-time analytics'],
  },
  {
    Icon: GraduationCap,
    name: 'Training & Enablement',
    desc: 'Upskilling teams for the AI era — practical workshops, not slide decks. Your people leave ready to execute.',
    features: ['AI literacy programs', 'Technical bootcamps', 'Change management support'],
  },
];

export const ServicesGrid: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="py-section bg-[#0A1020]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(({ Icon, name, desc, features }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#112143] border border-[#1E3460] rounded-[16px] p-7
                         transition-all duration-200 hover:border-[rgba(255,215,0,0.45)]
                         hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="w-12 h-12 rounded-lg bg-[rgba(255,215,0,0.1)] flex items-center justify-center mb-5">
                <Icon size={24} className="text-[#FFD700]" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">{name}</h3>
              <p className="text-[#ADE1E5] text-sm leading-relaxed mb-5">{desc}</p>
              <ul className="space-y-2 mb-6">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A7BBF] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFD700]
                           hover:gap-3 transition-all duration-200"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
