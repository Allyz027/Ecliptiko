import React from 'react';
import { Mail, MapPin, Clock, Globe, Share2, Code2 } from 'lucide-react';

const socials = [
  { Icon: Globe,   href: '#', label: 'LinkedIn' },
  { Icon: Share2,  href: '#', label: 'Twitter/X' },
  { Icon: Code2,   href: '#', label: 'GitHub' },
];

export const ContactInfo: React.FC = () => (
  <div className="space-y-8">
    {/* Info items */}
    {[
      {
        Icon: Mail,
        label: 'Email',
        value: 'hello@ecliptiko.com',
        href: 'mailto:hello@ecliptiko.com',
      },
      {
        Icon: MapPin,
        label: 'Location',
        value: 'Manila, Philippines · Global Remote',
        href: null,
      },
      {
        Icon: Clock,
        label: 'Support Hours',
        value: 'Monday–Friday, 9AM–6PM PHT',
        href: null,
      },
    ].map(({ Icon, label, value, href }) => (
      <div key={label} className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[rgba(90,123,191,0.12)] flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-[#5A7BBF]" />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#ADE1E5]/60 mb-0.5">{label}</p>
          {href ? (
            <a href={href} className="text-sm text-white hover:text-[#FFD700] transition-colors">{value}</a>
          ) : (
            <p className="text-sm text-white">{value}</p>
          )}
        </div>
      </div>
    ))}

    {/* Social links */}
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-[#ADE1E5]/60 mb-3">Connect</p>
      <div className="flex gap-3">
        {socials.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#1E3460]
                       text-[#ADE1E5] hover:text-[#FFD700] hover:border-[#FFD700] transition-colors duration-200"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>

    {/* Response promise */}
    <div
      className="rounded-[12px] p-5 border-l-4 border-[#FFD700]"
      style={{ background: '#112143' }}
    >
      <p className="font-display font-semibold text-white text-sm mb-1">We respond within 24 hours.</p>
      <p className="text-[#ADE1E5] text-xs leading-relaxed">
        Every inquiry is reviewed by a senior team member — not an auto-responder.
        If your project is urgent, say so in the brief.
      </p>
    </div>
  </div>
);
