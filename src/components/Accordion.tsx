'use client';

import { useState } from 'react';

type Item = { q: string; a: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div style={{ borderTop: '1px solid var(--slate-rule)' }}>
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} style={{ borderBottom: '1px solid var(--slate-rule)' }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
                padding: '24px 0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-serif), Georgia, serif',
                color: 'var(--slate-ink)',
                fontWeight: 500,
              }}
              className="faq-q"
            >
              <span style={{ flex: 1 }}>{item.q}</span>
              <span
                aria-hidden
                style={{
                  width: 36,
                  height: 36,
                  border: '1px solid var(--slate-rule)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isOpen ? 'var(--slate-accent)' : 'transparent',
                  color: isOpen ? 'var(--slate-on-accent)' : 'var(--slate-ink)',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                  transition: 'transform 0.18s ease, background 0.18s ease, color 0.18s ease',
                  flexShrink: 0,
                  fontSize: 18,
                  fontFamily: 'var(--font-mono), monospace',
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.25s ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  style={{
                    paddingBottom: 28,
                    color: 'var(--slate-body)',
                    fontSize: 17,
                    lineHeight: 1.6,
                    maxWidth: 720,
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .faq-q { font-size: 22px; }
        @media (max-width: 768px) {
          .faq-q { font-size: 16px; }
        }
      `}</style>
    </div>
  );
}
