import copy from '../content/homepage.json';
import { LINKS, ASSET_PREFIX } from '../lib/links';
import Nav from '../components/Nav';
import Accordion from '../components/Accordion';

function SectionLabel({ label, tone = 'light' }: { label: string; tone?: 'light' | 'dark' }) {
  return (
    <span className={`section-label ${tone === 'dark' ? 'on-dark' : ''}`}>
      <span>{label}</span>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* 01. HERO */}
        <section className="section hero-section">
          <div className="container">
            <div className="hero-grid">
              <div>
                <h1 className="hero-headline" style={{ maxWidth: 760, fontSize: 76, lineHeight: 1.02 }}>{copy.hero.headline}</h1>
                <p style={{ marginTop: 28, maxWidth: 560, color: 'var(--slate-body)', fontSize: 18, lineHeight: 1.55 }}>
                  {copy.hero.subhead}
                </p>
                <div style={{ marginTop: 40, display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }} className="hero-ctas">
                  <a href={LINKS.book} className="cta-primary lg full-mobile">
                    {copy.hero.primaryCta} <span className="arrow" aria-hidden>{'->'}</span>
                  </a>
                  <a href={LINKS.webinar} className="cta-secondary">
                    {copy.hero.secondaryCta} <span className="arrow" aria-hidden>{'->'}</span>
                  </a>
                </div>
                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat-num">12 to 24</div>
                    <div className="stat-label">month engagement</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">$2M to $10M</div>
                    <div className="stat-label">revenue range</div>
                  </div>
                  <div className="stat">
                    <div className="stat-num">1 to 2</div>
                    <div className="stat-label">partners at a time</div>
                  </div>
                  <div className="stat hero-stat-mobile-only">
                    <div className="stat-num">Denver, CO</div>
                    <div className="stat-label">and surrounding</div>
                  </div>
                </div>
              </div>

              <div className="hero-photo-wrap">
                <div style={{ aspectRatio: '4 / 5', position: 'relative', overflow: 'hidden', border: '1px solid var(--slate-rule)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${ASSET_PREFIX}/jim-hero.jpg`}
                    alt="Jim Coleman, Founder of Slate Exit Advisory"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                  <span className="photo-tag" style={{ background: 'rgba(238, 232, 220, 0.85)', padding: '4px 8px' }}>Denver, CO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. TRUST BAR */}
        <section style={{ padding: '32px 0', background: 'var(--slate-bg-alt)', borderTop: '1px solid var(--slate-rule)', borderBottom: '1px solid var(--slate-rule)' }}>
          <div className="container">
            <div className="trust-bar-grid">
              <p className="serif" style={{ fontStyle: 'italic', fontSize: 15, color: 'var(--slate-body)', maxWidth: 280, lineHeight: 1.45 }}>
                {copy.trustBar.lead}
              </p>
              <ul className="industry-list" aria-label="Industries served">
                {copy.trustBar.industries.map((ind, i) => (
                  <li key={ind} className="mono" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--slate-ink)' }}>{ind}</span>
                    {i < copy.trustBar.industries.length - 1 && (
                      <span aria-hidden style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--slate-accent)', margin: '0 12px', display: 'inline-block' }} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 03. THE GAP */}
        <section className="section" id="gap">
          <div className="container">
            <SectionLabel label="The Gap" />
            <div className="gap-grid" style={{ marginTop: 48 }}>
              <div>
                <h2 style={{ maxWidth: 640 }}>{copy.gap.headline}</h2>
                <p style={{ marginTop: 32, color: 'var(--slate-body)', maxWidth: 640 }}>{copy.gap.body1}</p>
                <ol className="gap-bullets">
                  {copy.gap.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="bullet-num mono">0{i + 1}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ol>
                <p style={{ marginTop: 32, color: 'var(--slate-body)', maxWidth: 640 }}>{copy.gap.body2}</p>
              </div>

              <aside className="math-block">
                <div className="math-grid">
                  <div className="math-cell">
                    <div className="math-kicker mono">A. As Is</div>
                    <div className="math-line">{copy.gap.mathLeft.sde}</div>
                    <div className="math-mult mono">x {copy.gap.mathLeft.mult}</div>
                    <div className="math-rule" />
                    <div className="math-total serif">{copy.gap.mathLeft.total}</div>
                    <div className="math-label mono">{copy.gap.mathLeft.label}</div>
                  </div>
                  <div className="math-cell math-cell-dark">
                    <div className="math-kicker mono on-dark">B. With Slate</div>
                    <div className="math-line">{copy.gap.mathRight.sde}</div>
                    <div className="math-mult mono on-dark">x {copy.gap.mathRight.mult}</div>
                    <div className="math-rule on-dark" />
                    <div className="math-total serif">{copy.gap.mathRight.total}</div>
                    <div className="math-label mono on-dark">{copy.gap.mathRight.label}</div>
                  </div>
                </div>
                <div className="math-callout serif">{copy.gap.mathDiff}</div>
              </aside>
            </div>
          </div>
        </section>

        {/* 04. HOW SLATE IS DIFFERENT (dark) */}
        <section className="section dark" id="different">
          <div className="container">
            <SectionLabel label="How Slate Is Different" tone="dark" />
            <h2 style={{ marginTop: 32, maxWidth: 920 }}>{copy.different.headline}</h2>
            <div className="diff-intro-grid">
              <div>
                {copy.different.intro.split('\n\n').map((para, i) => (
                  <p key={i} style={{ color: 'var(--slate-muted-on-dark)', fontSize: 17, lineHeight: 1.6, marginTop: i === 0 ? 32 : 16, maxWidth: 640 }}>{para}</p>
                ))}
              </div>
              <div aria-hidden />
            </div>

            <div className="pillars-grid">
              {copy.different.pillars.map((p, i) => (
                <div key={i} className="pillar">
                  <span className="kicker on-dark">
                    <span className="kicker-num">0{i + 1}</span>
                    <span className="kicker-rule" aria-hidden />
                    <span>{p.kicker}</span>
                  </span>
                  <h3 style={{ marginTop: 20, color: 'var(--slate-ink-on-dark)' }}>{p.heading}</h3>
                  <p style={{ marginTop: 16, color: 'var(--slate-muted-on-dark)', fontSize: 15.5, lineHeight: 1.6 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05. OFFERS */}
        <section className="section" id="offers">
          <div className="container">
            <SectionLabel label="Three Ways To Work With Me" />
            <h2 style={{ marginTop: 32, maxWidth: 880 }}>{copy.offers.headline}</h2>
            <div className="offers-grid">
              {copy.offers.cards.map((card, i) => {
                const featured = i === 0;
                const hrefMap = [LINKS.webinar, LINKS.inquireIntensive, LINKS.inquirePartnership];
                return (
                  <article key={i} className={`offer-card ${featured ? 'featured' : ''}`}>
                    <span className="kicker" style={{ color: featured ? 'var(--slate-on-accent)' : 'var(--slate-muted)' }}>
                      <span className="kicker-num" style={{ color: featured ? '#94B8A0' : 'var(--slate-accent)' }}>Option 0{i + 1}</span>
                    </span>
                    <h3 className="serif" style={{ marginTop: 16, fontSize: 24, color: featured ? 'var(--slate-ink-on-dark)' : 'var(--slate-ink)' }}>{card.name}</h3>

                    <div className="offer-price-slot">
                      {featured ? (
                        <div className="offer-price-row">
                          <span className="offer-price serif">{card.price}</span>
                          <span className="offer-price-aside mono">90-minute webinar</span>
                        </div>
                      ) : i === 1 ? (
                        <span className="offer-price-mono mono">Full breakdown inside the webinar</span>
                      ) : (
                        <span className="offer-price-mono mono">{card.price}</span>
                      )}
                    </div>

                    <p className="serif" style={{ fontStyle: 'italic', marginTop: 16, fontSize: 16, color: featured ? 'var(--slate-muted-on-dark)' : 'var(--slate-body)' }}>
                      {card.subtitle}
                    </p>

                    <p style={{ marginTop: 20, fontSize: 15, lineHeight: 1.6, color: featured ? 'var(--slate-muted-on-dark)' : 'var(--slate-body)' }}>
                      {card.body}
                    </p>

                    <div style={{ marginTop: 32 }}>
                      {featured ? (
                        <a href={hrefMap[i]} className="cta-primary full-mobile" style={{ background: 'var(--slate-on-accent)', color: 'var(--slate-ink)' }}>
                          {card.cta} <span className="arrow" aria-hidden>{'->'}</span>
                        </a>
                      ) : (
                        <a href={hrefMap[i]} className="cta-secondary">
                          {card.cta} <span className="arrow" aria-hidden>{'->'}</span>
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 06. HOW IT WORKS / PROCESS */}
        <section className="section accent-soft" id="how-it-works">
          <div className="container">
            <SectionLabel label="The Engagement" />
            <div className="process-grid" style={{ marginTop: 32 }}>
              <div className="process-left">
                <h2>{copy.process.headline}</h2>
                <p style={{ marginTop: 24, color: 'var(--slate-body)', fontSize: 17, maxWidth: 480 }}>{copy.process.subhead}</p>
              </div>
              <ol className="process-steps">
                {copy.process.steps.map((step, i) => (
                  <li key={i} className="process-step">
                    <div className="process-num serif">{`0${i + 1}`}</div>
                    <div className="process-body">
                      <h3 className="serif" style={{ fontSize: 22, color: 'var(--slate-ink)' }}>{step.title}</h3>
                      <p style={{ marginTop: 10, color: 'var(--slate-body)', fontSize: 16, lineHeight: 1.6 }}>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 07. ABOUT JIM */}
        <section className="section" id="about">
          <div className="container">
            <SectionLabel label="About Jim" />
            <div className="about-grid" style={{ marginTop: 32 }}>
              <div className="about-left">
                <div style={{ aspectRatio: '4 / 5', position: 'relative', overflow: 'hidden', border: '1px solid var(--slate-rule)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${ASSET_PREFIX}/jim-about.jpg`}
                    alt="Jim Coleman"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>
                <p className="mono" style={{ marginTop: 12, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--slate-muted)' }}>
                  Denver, Colorado
                </p>
              </div>
              <div className="about-right">
                <h2 style={{ maxWidth: 720 }}>{copy.about.heading}</h2>
                <p className="serif" style={{ fontStyle: 'italic', marginTop: 16, fontSize: 20, color: 'var(--slate-accent)' }}>
                  {copy.about.subhead}
                </p>
                <div style={{ marginTop: 32 }}>
                  {copy.about.paragraphs.map((p, i) => (
                    <p key={i} style={{ color: 'var(--slate-body)', fontSize: 17, lineHeight: 1.65, marginBottom: 20, maxWidth: 720 }}>{p}</p>
                  ))}
                </div>
                <a href={LINKS.linkedin} className="cta-secondary" target="_blank" rel="noopener noreferrer" style={{ marginTop: 8 }}>
                  {copy.about.linkedin} <span className="arrow" aria-hidden>{'->'}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 08. FAQ */}
        <section className="section alt" id="faq">
          <div className="container">
            <SectionLabel label="Frequently Asked Questions" />
            <div className="faq-grid" style={{ marginTop: 32 }}>
              <div className="faq-left">
                <h2>{copy.faq.headline}</h2>
              </div>
              <div className="faq-right">
                <Accordion items={copy.faq.items} />
              </div>
            </div>
          </div>
        </section>

        {/* 09. FINAL CTA (dark) */}
        <section className="section dark" id="final-cta" style={{ padding: '160px 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <SectionLabel label="The Next Move" tone="dark" />
            <h2 style={{ marginTop: 32, fontSize: 56, maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }} className="final-headline">
              {copy.finalCta.headline}
            </h2>
            <p style={{ marginTop: 28, color: 'var(--slate-muted-on-dark)', fontSize: 18, lineHeight: 1.6, maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
              {copy.finalCta.subhead}
            </p>
            <div style={{ marginTop: 40, display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }} className="final-ctas">
              <a href={LINKS.book} className="cta-primary lg full-mobile">
                {copy.finalCta.primaryCta} <span className="arrow" aria-hidden>{'->'}</span>
              </a>
              <a href={LINKS.webinar} className="cta-secondary on-dark">
                {copy.finalCta.secondaryCta} <span className="arrow" aria-hidden>{'->'}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 10. FOOTER */}
        <footer className="alt" style={{ background: 'var(--slate-bg-alt)', borderTop: '1px solid var(--slate-rule)', padding: '72px 0 40px' }}>
          <div className="container">
            <div className="footer-grid">
              <div>
                <a href="#top" className="flex items-center gap-3 no-underline" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                  <span className="logo-mark" aria-hidden />
                  <span className="serif" style={{ fontSize: 18, fontWeight: 600, color: 'var(--slate-ink)' }}>Slate</span>
                </a>
                <p className="serif" style={{ fontStyle: 'italic', marginTop: 16, fontSize: 16, color: 'var(--slate-body)', maxWidth: 320 }}>
                  {copy.footer.tagline}
                </p>
              </div>
              <div>
                <p className="kicker" style={{ marginBottom: 16 }}>
                  <span className="kicker-num">a</span>
                  <span className="kicker-rule" aria-hidden />
                  <span>{copy.footer.col1Title}</span>
                </p>
                <ul className="footer-list">
                  {copy.footer.col1.map((item) => <li key={item}><a href="#" className="footer-link">{item}</a></li>)}
                </ul>
              </div>
              <div>
                <p className="kicker" style={{ marginBottom: 16 }}>
                  <span className="kicker-num">b</span>
                  <span className="kicker-rule" aria-hidden />
                  <span>{copy.footer.col2Title}</span>
                </p>
                <ul className="footer-list">
                  <li><a href="#" className="footer-link">Read the Blog</a></li>
                  <li><a href="#" className="footer-link">Subscribe</a></li>
                  <li><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a></li>
                </ul>
              </div>
              <div>
                <p className="kicker" style={{ marginBottom: 16 }}>
                  <span className="kicker-num">c</span>
                  <span className="kicker-rule" aria-hidden />
                  <span>{copy.footer.col3Title}</span>
                </p>
                <ul className="footer-list">
                  <li><a href={LINKS.email} className="footer-link">jim@slateexit.com</a></li>
                  <li style={{ color: 'var(--slate-body)' }}>Denver, Colorado</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--slate-muted)' }}>
                {copy.footer.bottom}
              </p>
              <ul className="footer-bottom-links">
                {copy.footer.bottomLinks.map((l) => <li key={l}><a href="#" className="footer-link mono" style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{l}</a></li>)}
              </ul>
            </div>
          </div>
        </footer>
      </main>

      {/* Page-specific styles (grid layouts and responsive rules) */}
      <style>{`
        /* Hero section: extra top padding to clear fixed nav */
        .hero-section { padding-top: 160px; }
        @media (max-width: 768px) {
          .hero-section { padding-top: 112px; }
        }

        /* Hero */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid var(--slate-rule);
          max-width: 640px;
        }
        .hero-stat-mobile-only { display: none; }
        .stat-num {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--slate-ink);
          line-height: 1.1;
        }
        .stat-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--slate-muted);
          margin-top: 8px;
        }

        /* Trust bar */
        .trust-bar-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: center;
        }
        .industry-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
        }

        /* Gap */
        .gap-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .gap-bullets {
          margin-top: 28px;
          list-style: none;
          padding: 0;
        }
        .gap-bullets li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--slate-rule);
          color: var(--slate-body);
        }
        .gap-bullets li:first-child { border-top: 1px solid var(--slate-rule); }
        .bullet-num { color: var(--slate-accent); font-size: 12px; padding-top: 4px; }

        .math-block { position: sticky; top: 100px; }
        .math-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--slate-rule);
        }
        .math-cell { padding: 32px; background: var(--slate-bg); }
        .math-cell.math-cell-dark { background: var(--slate-dark-bg); color: var(--slate-ink-on-dark); }
        .math-kicker {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--slate-muted);
        }
        .math-kicker.on-dark { color: var(--slate-muted-on-dark); }
        .math-line { font-family: var(--font-serif), Georgia, serif; font-size: 22px; margin-top: 16px; font-weight: 500; }
        .math-mult { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--slate-muted); margin-top: 4px; }
        .math-mult.on-dark { color: var(--slate-muted-on-dark); }
        .math-rule { height: 1px; background: var(--slate-rule); margin: 16px 0; }
        .math-rule.on-dark { background: var(--slate-rule-on-dark); }
        .math-total { font-size: 36px; font-weight: 600; }
        .math-label { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--slate-muted); margin-top: 8px; }
        .math-label.on-dark { color: var(--slate-muted-on-dark); }
        .math-callout {
          margin-top: 24px;
          padding: 24px 28px;
          border: 1px solid var(--slate-accent);
          color: var(--slate-ink);
          font-size: 22px;
          font-weight: 500;
        }

        /* Different (dark section) */
        .diff-intro-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          margin-top: 24px;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 80px;
          border-top: 1px solid var(--slate-rule-on-dark);
          border-bottom: 1px solid var(--slate-rule-on-dark);
        }
        .pillar {
          padding: 40px;
          border-right: 1px solid var(--slate-rule-on-dark);
        }
        .pillar:last-child { border-right: none; }

        /* Offers */
        .offers-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr;
          gap: 24px;
          margin-top: 56px;
          align-items: stretch;
        }
        .offer-card {
          padding: 40px 32px;
          background: var(--slate-bg-alt);
          border: 1px solid var(--slate-rule);
          display: flex;
          flex-direction: column;
        }
        .offer-card.featured {
          background: var(--slate-dark-bg);
          color: var(--slate-ink-on-dark);
          border: none;
          border-top: 4px solid var(--slate-accent);
        }
        .offer-price-slot {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--slate-rule);
          min-height: 80px;
        }
        .offer-card.featured .offer-price-slot { border-top: 1px solid var(--slate-rule-on-dark); }
        .offer-price-row { display: flex; align-items: baseline; gap: 16px; }
        .offer-price {
          font-size: 56px;
          font-weight: 600;
          color: var(--slate-on-accent);
          line-height: 1;
        }
        .offer-price-aside {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--slate-muted-on-dark);
        }
        .offer-price-mono {
          font-size: 13px;
          letter-spacing: 0.04em;
          color: var(--slate-body);
        }

        /* Process */
        .process-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }
        .process-left { position: sticky; top: 100px; }
        .process-steps { list-style: none; padding: 0; margin: 0; }
        .process-step {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 16px;
          padding: 32px 0;
          border-top: 1px solid var(--slate-rule);
        }
        .process-step:last-child { border-bottom: 1px solid var(--slate-rule); }
        .process-num { font-size: 36px; color: var(--slate-accent); font-weight: 500; line-height: 1; }

        /* About */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .about-left { position: sticky; top: 100px; }

        /* FAQ */
        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .faq-left { position: sticky; top: 100px; }

        /* Footer */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 48px;
        }
        .footer-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .footer-link {
          color: var(--slate-body);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.15s ease;
        }
        .footer-link:hover { color: var(--slate-accent); text-decoration: underline; text-underline-offset: 4px; }
        .footer-bottom {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid var(--slate-rule);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-bottom-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 24px;
        }

        /* Mobile breakpoints */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-photo-wrap { order: 2; max-width: 320px; margin: 0 auto; }
          .hero-stats {
            grid-template-columns: 1fr 1fr;
            max-width: none;
            gap: 24px;
          }
          .hero-stat-mobile-only { display: block; }
          .hero-ctas { flex-direction: column; align-items: stretch; }
          .hero-ctas .cta-secondary { justify-content: center; padding-top: 8px; }

          .trust-bar-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .gap-grid { grid-template-columns: 1fr; gap: 48px; }
          .math-block { position: static; }
          .math-grid { grid-template-columns: 1fr; }
          .math-cell { padding: 24px; }
          .math-callout { font-size: 18px; padding: 20px; }

          .diff-intro-grid { grid-template-columns: 1fr; gap: 0; }
          .pillars-grid {
            grid-template-columns: 1fr;
            border-top: 1px solid var(--slate-rule-on-dark);
            border-bottom: 1px solid var(--slate-rule-on-dark);
          }
          .pillar {
            padding: 32px 0;
            border-right: none;
            border-bottom: 1px solid var(--slate-rule-on-dark);
          }
          .pillar:last-child { border-bottom: none; }

          .offers-grid { grid-template-columns: 1fr; gap: 16px; }
          .offer-card { padding: 32px 24px; }
          .offer-price { font-size: 44px; }

          .process-grid { grid-template-columns: 1fr; gap: 32px; }
          .process-left { position: static; }
          .process-step { grid-template-columns: 56px 1fr; padding: 24px 0; }
          .process-num { font-size: 28px; }

          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .about-left { position: static; max-width: 320px; }

          .faq-grid { grid-template-columns: 1fr; gap: 32px; }
          .faq-left { position: static; }

          .hero-headline { font-size: 44px !important; line-height: 1.05 !important; }
          .final-headline { font-size: 36px !important; }
          .final-ctas { flex-direction: column; align-items: stretch; }
          .final-ctas .cta-secondary { justify-content: center; }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid { gap: 48px; }
          .gap-grid { gap: 48px; }
          .process-grid { gap: 48px; }
          .about-grid { gap: 48px; }
          .faq-grid { gap: 48px; }
          .pillars-grid { grid-template-columns: 1fr; border-bottom: 1px solid var(--slate-rule-on-dark); }
          .pillar { border-right: none; border-bottom: 1px solid var(--slate-rule-on-dark); padding: 32px 0; }
          .pillar:last-child { border-bottom: none; }
          .hero-headline { font-size: 56px !important; }
        }
      `}</style>
    </>
  );
}
