import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

const PRODUCTS = [
  { label: 'Galara',           to: '/products/galara',           color: '#FF377D' },
  { label: 'Solara',           to: '/products/solara',           color: '#E1694B' },
  { label: 'BCPortal',         to: '/products/bcportal',         color: '#FFD700' },
  { label: 'Worktime Tracker', to: '/products/worktime-tracker', color: '#ADE1E5' },
];

const NAV = [
  { label: 'Home',     to: '/' },
  { label: 'Products', to: '/products', dropdown: true },
  { label: 'About',    to: '/about' },
  { label: 'Contact',  to: '/contact' },
];

const Logo = () => (
  <Link to="/" className="flex items-center shrink-0" aria-label="Ecliptiko home">
    <svg viewBox="0 0 2980.46 632.43" xmlns="http://www.w3.org/2000/svg"
      style={{ fill: '#ffffff', height: 24 }} aria-label="Ecliptiko">
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
  </Link>
);

export const Navbar: React.FC = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobile,    setMobile]    = useState(false);
  const [dropdown,  setDropdown]  = useState(false);
  const location = useLocation();
  const dropRef  = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobile(false); setDropdown(false); }, [location.pathname]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node))
        setDropdown(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(10,22,40,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      } : {}}
    >
      {/* 3-col grid: logo | centered nav | CTA */}
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 40px',
          height: 64,
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        {/* Left: logo */}
        <div style={{ justifySelf: 'start' }}>
          <Logo />
        </div>

        {/* Center: nav links (desktop) */}
        <ul
          className="hidden md:flex items-center"
          style={{ gap: 36, listStyle: 'none', justifySelf: 'center' }}
        >
          {NAV.map(({ label, to, dropdown: hasDD }) => {
            const active = isActive(to);
            if (hasDD) {
              return (
                <li key={to} ref={dropRef} className="relative">
                  <button
                    onClick={() => setDropdown(v => !v)}
                    className={`nav-link flex items-center gap-1 bg-transparent border-0 cursor-pointer ${active ? 'active' : ''}`}
                    style={{ padding: '4px 0' }}
                  >
                    {label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdown && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-card py-2"
                      style={{ width: 200, borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      {PRODUCTS.map(p => (
                        <Link key={p.to} to={p.to}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/[0.04] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                          {p.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            }
            return (
              <li key={to}>
                <Link to={to} className={`nav-link ${active ? 'active' : ''}`} style={{ padding: '4px 0' }}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: CTA + mobile toggle */}
        <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="hidden md:block">
            <Button variant="primary" size="sm" to="/contact">Request a Demo</Button>
          </div>
          <button
            className="md:hidden text-white p-2 bg-transparent border-0 cursor-pointer"
            onClick={() => setMobile(v => !v)}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobile && (
        <div
          className="md:hidden overflow-hidden"
          style={{
            background: 'rgba(10,22,40,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {NAV.map(({ label, to }) => (
              <Link key={to} to={to}
                className={`nav-link block py-3 border-b border-white/[0.05] text-[15px] ${isActive(to) ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <div style={{ marginTop: 16 }}>
              <Button variant="primary" size="md" to="/contact" fullWidth>Request a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
