'use client';

import { useEffect, useState } from 'react';
import copy from '../content/homepage.json';
import { LINKS } from '../lib/links';

const navAnchors = [
  { label: 'Home', href: '#top' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Jim', href: '#about' },
  { label: 'The Webinar', href: '#offers' },
  { label: 'The Intensive', href: '#offers' },
  { label: 'The Partnership', href: '#offers' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        background: scrolled ? 'var(--slate-nav-bg-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--slate-rule)' : '1px solid transparent',
      }}
    >
      <div className="container flex items-center justify-between" style={{ height: 72 }}>
        <a href="#top" className="flex items-center gap-3 no-underline" aria-label="Slate Exit Advisory home">
          <span className="logo-mark" aria-hidden />
          <span className="flex flex-col leading-none">
            <span className="serif" style={{ fontWeight: 600, fontSize: 18, color: 'var(--slate-ink)' }}>Slate</span>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--slate-muted)', marginTop: 2 }}>Exit Advisory</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Primary">
          {navAnchors.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mono no-underline whitespace-nowrap"
              style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--slate-ink)' }}
            >
              {item.label}
            </a>
          ))}
          <a href={LINKS.book} className="cta-primary sm whitespace-nowrap">
            {copy.nav.cta} <span className="arrow" aria-hidden>{'->'}</span>
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          style={{
            background: 'transparent',
            border: '1px solid var(--slate-rule)',
            padding: '10px 14px',
            borderRadius: 3,
            cursor: 'pointer',
          }}
        >
          <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--slate-ink)' }}>
            {open ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            position: 'fixed',
            inset: '72px 0 0 0',
            background: 'var(--slate-bg)',
            padding: 24,
            borderTop: '1px solid var(--slate-rule)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            overflowY: 'auto',
          }}
        >
          {navAnchors.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="serif no-underline"
              style={{ fontSize: 24, color: 'var(--slate-ink)', padding: '14px 0', borderBottom: '1px solid var(--slate-rule)' }}
            >
              {item.label}
            </a>
          ))}
          <a href={LINKS.book} onClick={() => setOpen(false)} className="cta-primary lg full-mobile" style={{ marginTop: 16 }}>
            {copy.nav.cta} <span className="arrow" aria-hidden>{'->'}</span>
          </a>
        </div>
      )}
    </header>
  );
}
