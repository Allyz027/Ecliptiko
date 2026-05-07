import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ExternalLink, Mail } from 'lucide-react';

const EcliptikoLogo: React.FC = () => (
  <svg viewBox="0 0 2980.46 632.43" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#ffffff' }} aria-label="Ecliptiko" height="22">
    <path d="M1176.7,466.31h-221.32c-40.39,0-73.24-32.86-73.24-73.24v-221.34h41.35v221.34c0,17.59,14.31,31.89,31.89,31.89h221.32v41.35Z"/>
    <rect x="2055.29" y="171.97" width="41.35" height="294.56"/>
    <rect x="1238.72" y="171.97" width="41.35" height="294.56"/>
    <rect x="1825.31" y="197.47" width="41.35" height="268.81"/>
    <rect x="1698.7"  y="171.71" width="294.56" height="41.35"/>
    <rect x="2158.67" y="171.84" width="41.35" height="294.56"/>
    <path d="M820.11,466.3h-147.31c-81.2,0-147.27-66.06-147.27-147.26s66.08-147.29,147.3-147.29h147.28v41.35h-147.28c-58.42,0-105.95,47.53-105.95,105.95s47.51,105.92,105.92,105.92h147.31v41.35Z"/>
    <path d="M1383.46,466.21h-41.35v-74.26c0-40.39,32.86-73.24,73.24-73.24h127.06c29.18,0,52.91-23.74,52.91-52.91s-23.72-52.87-52.87-52.87h-200.35v-41.35h200.35c51.96,0,94.22,42.27,94.22,94.22s-42.29,94.26-94.26,94.26h-127.06c-17.59,0-31.89,14.31-31.89,31.89v74.26Z"/>
    <path d="M2452.44,466.41l-157.11-122.11c-7.83-6.08-12.32-15.26-12.32-25.18,0-9.91,4.49-19.09,12.31-25.18l159.74-124.26h-67.35l-117.78,91.62c-17.97,13.98-28.28,35.06-28.27,57.83,0,22.77,10.32,43.84,28.29,57.81l115.1,89.47h67.38Z"/>
    <path d="M316.23,210.28h147.28v-41.35h-147.28c-81.22,0-147.3,66.08-147.3,147.3s66.06,147.26,147.26,147.26h147.31v-41.35h-147.31c-51.3,0-94.19-36.67-103.86-85.17h209.83v-41.35h-209.85c9.62-48.59,52.55-85.34,103.92-85.34Z"/>
    <path d="M2706.57,465.26h-84.53c-57.87,0-104.95-47.08-104.95-104.95v-84.53c0-57.87,47.08-104.95,104.95-104.95h84.53c57.87,0,104.95,47.08,104.95,104.95v84.53c0,57.87-47.08,104.95-104.95,104.95ZM2622.04,212.17c-35.07,0-63.6,28.53-63.6,63.6v84.53c0,35.07,28.53,63.6,63.6,63.6h84.53c35.07,0,63.6-28.53,63.6-63.6v-84.53c0-35.07-28.53-63.6-63.6-63.6h-84.53Z"/>
  </svg>
);

const COLS = [
  {
    heading: 'Products',
    links: [
      { label: 'Galara',           to: '/products/galara' },
      { label: 'Solara',           to: '/products/solara' },
      { label: 'BCPortal',         to: '/products/bcportal' },
      { label: 'Worktime Tracker', to: '/products/worktime-tracker' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/contact' },
      { label: 'Blog',    to: '/' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',   to: '/' },
      { label: 'Terms of Service', to: '/' },
      { label: 'Cookie Policy',    to: '/' },
    ],
  },
];

export const Footer: React.FC = () => (
  <footer className="bg-[#050912] border-t border-white/[0.06]">
    <div className="container-xl" style={{ paddingTop: 96, paddingBottom: 64 }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <EcliptikoLogo />
          <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#FFD700] mt-1 mb-5">
            Eclipse your Limits
          </p>
          <p className="text-[14px] leading-relaxed text-white/50 max-w-xs">
            AI-powered automation tools for BIM professionals — built on 15+ years of industry expertise.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Globe,        href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: ExternalLink, href: 'https://twitter.com', label: 'Twitter/X' },
              { Icon: Mail,     href: 'mailto:hello@ecliptiko.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-[#ADE1E5] hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-colors duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {COLS.map(({ heading, links }) => (
          <div key={heading}>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#FFD700] mb-4">
              {heading}
            </h4>
            <ul className="space-y-3">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[14px] text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[13px] text-white/40">
          © 2026 Ecliptiko. All rights reserved.
        </p>
        <p className="text-[13px] text-white/40">
          Manila, Philippines · Global Remote
        </p>
      </div>
    </div>
  </footer>
);
