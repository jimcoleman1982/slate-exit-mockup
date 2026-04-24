/* global React, ReactDOM */
// Slate Exit Advisory. Free Call Landing Page (Denver).
// Single-purpose: one CTA -> /book. No nav links anywhere.

const { useState, useEffect, useRef } = React;

/* ---------- CTA Button ---------- */
function CtaButton({ children, size = "lg", onClick }) {
  return (
    <button
      className="btn-cta"
      style={size === "xl" ? { padding: "20px 34px", fontSize: 17 } : {}}
      onClick={onClick || (() => { window.location.href = "/book"; })}
    >
      <span>{children}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>
    </button>
  );
}

/* ---------- Logomark (diamond) ---------- */
function SlateMark({ size = 26 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" style={{ display: "block" }}>
      <g transform="translate(24 24) rotate(45)">
        <rect x="-14" y="-14" width="28" height="28" fill="#1F2A33" />
        <rect x="-5" y="-5" width="10" height="10" fill="#2F4A3A" />
      </g>
    </svg>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="hero" data-screen-label="hero">
      <div className="container">
        <div className="hero-wrap">
          <div className="prehead">
            For Denver service business owners doing $2M to $10M in revenue
          </div>
          <h1>
            Find out what your business is actually worth.
            <span className="line-muted">Not what a broker says it is.</span>
          </h1>
          <p className="deck">
            60 minutes, one-on-one, with Jim Coleman. No slides. No sales pitch.
            Walk away knowing what your business is worth today, what it could
            be worth, and what it takes to close the gap.
          </p>

          <VslPlaceholder />
          <div className="vsl-caption">Hit play. The short version is in the video. Or scroll down to read it.</div>

          <div className="cta-group">
            <CtaButton size="xl">Get my Gap number</CtaButton>
            <div className="sub-cta">60 minutes with Jim. Free. No pitch.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VslPlaceholder() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="vsl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      aria-label="Play introduction video from Jim Coleman"
      tabIndex={0}
    >
      <div className="vsl-poster">
        <div className="tl">Video / Intro</div>
        <div className="bl">Shot: Jim Coleman, Front Range, Golden Hour</div>
        <div className="br">Coming soon</div>
        <div className="vsl-play" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="7,5 20,12 7,19" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------- Lead ---------- */
function Lead() {
  return (
    <section className="sec-md" data-screen-label="lead">
      <div className="container">
        <div className="lead-wrap">
          <p>
            If you own a Denver service business doing $2M to $10M a year, and
            you have been quietly thinking about what a real exit would look
            like, this 60 minutes was built for you.
          </p>
          <p>
            One hour. One-on-one. You walk away with a real number for your
            business. The truth about what a broker would pay you today. And
            the truth about what your business could sell for if you got it
            ready the right way.
          </p>
          <p>
            You won't see a slide deck. You won't get pitched. Just honest
            math from someone who has bought and sold businesses for a living.
          </p>
          <p>
            It takes 60 minutes. It costs you nothing. It's backed by the
            No-Pitch Promise.
          </p>
          <p>
            <strong>
              If you are a year or two or three out from wanting to sell, this
              is the call that tells you where to spend the next year of your
              life.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Story ---------- */
function Story() {
  return (
    <section style={{ background: "var(--bg-alt)" }} data-screen-label="story">
      <div className="container">
        <div className="story-wrap">
          <h2 style={{
            fontFamily: "var(--font-serif)", fontWeight: 400,
            fontSize: "clamp(30px, 3.8vw, 48px)",
            lineHeight: 1.1, letterSpacing: "-0.015em",
            color: "var(--fg-strong)", margin: "0 0 40px", textWrap: "balance"
          }}>
            Why most Denver owners get stuck.
          </h2>

          <p>Monday morning, and the phone is already ringing.</p>
          <p>
            You have been doing this for thirty years. You built it from a
            truck and a ladder and a lot of long nights. You earned every
            customer.
          </p>
          <p className="break">But the machine only runs when you are in it.</p>
          <p>
            Three days off and the wheels wobble. Foreman calls. Customer
            calls. Your wife looks at you over coffee and asks, again, when
            you are finally going to step back.
          </p>
          <p>So you thought about selling. You called a broker.</p>
          <p>
            He sat at your kitchen table, flipped through your books, and
            gave you a number so far under what you need to retire that you
            folded the paper and walked him to the door.
          </p>
          <p>You called a second broker. Same song.</p>
          <p>
            You asked your CPA. He has been with you eighteen years. He does
            tax work like a surgeon. But he couldn't tell you how a buyer
            would really value a business like yours. That's not his world.
          </p>
          <p>
            You spent a weekend online. Every "how to sell your business"
            article ended with a link to some Wall Street firm that wants to
            buy you for fifty cents on the dollar and fire your foreman.
          </p>
          <p className="break">Another Monday. Another year.</p>
          <p>
            That's where most Denver service business owners get stuck. Not
            because they're not ready. Because nobody has shown them a path
            that actually works for a local business like theirs.
          </p>

          <hr className="story-rule" style={{ margin: "40px 0 32px" }} />

          <p>
            I'm Jim Coleman. I live on the Front Range. I've bought and sold
            businesses for a living. I run an 80-person operations company
            called xFusion. I've sat with owners who walked out of closings
            with enough money to actually retire. I've also watched owners
            lose hundreds of thousands of dollars in that same room, because
            they didn't know what the buyer was looking at.
          </p>
          <p className="break">
            The difference was almost never the business. It was the preparation.
          </p>
          <p>
            I want you to walk out of that room. With enough to retire. With
            enough for your wife. With enough to finally say yes when your
            grandkids ask when you're coming to see them. With the crew you
            built still standing when the new owner takes over.
          </p>
          <p>
            If you're in Denver and you're tired, I'd like 60 minutes of
            your time. No slides. No pitch. Just the real math on your
            business and the number most owners never see.
          </p>

          <div className="story-sig">
            <SlateMark size={22} />
            <span className="mono">Jim Coleman · Principal · Slate Exit Advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Offer ---------- */
const OFFER_CARDS = [
  {
    num: "01",
    title: "What your business is actually worth today",
    bullets: [
      "A real number for what your business is worth right now, to a typical buyer",
      "What a broker would quote you vs. what a prepared buyer would actually pay",
      "What buyers in your industry actually pay, in plain English",
      "The things in your books that a buyer's CPA would flag in 30 seconds",
    ],
  },
  {
    num: "02",
    title: "Your Gap number",
    bullets: [
      "The real dollar number between what you'd get today and what you could get if you prepared",
      "The three to five things you can change that raise the price the most",
      "How close you actually are. A year. Two years. Maybe sooner than you think.",
    ],
  },
  {
    num: "03",
    title: "How to get ready to sell",
    bullets: [
      "What a business ready to sell actually looks like, in plain terms",
      "Your books, your team, your customers, your systems. Walked through honestly.",
      "The last-minute mistakes that cost owners the most money at the closing table",
    ],
  },
  {
    num: "04",
    title: "The people around you",
    bullets: [
      "How to talk to your spouse, your CPA, and your lawyer. Before they push back.",
      "What your key people need to hear. And when.",
      "How to keep it quiet so your crew doesn't start worrying.",
    ],
  },
];

function Offer() {
  return (
    <section style={{ background: "var(--bg-accent)" }} data-screen-label="offer">
      <div className="container">
        <div className="section-headline" style={{ maxWidth: 820, margin: "0 auto 48px" }}>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontWeight: 400,
            fontSize: "clamp(32px, 4vw, 52px)",
            lineHeight: 1.08, letterSpacing: "-0.015em",
            color: "var(--fg-strong)", margin: "0 0 28px", textWrap: "balance"
          }}>
            What we cover in 60 minutes.
          </h2>
          <p style={{ fontSize: "clamp(17px, 1.4vw, 19px)", lineHeight: 1.6, color: "var(--fg)", margin: "0 0 28px" }}>
            In one hour, together, we cover four things. You leave the call
            with answers you can't get from a broker, a CPA, or the internet.
          </p>
          <div className="pullquote" style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            fontSize: "clamp(22px, 2.3vw, 28px)", lineHeight: 1.35,
            color: "var(--fg-strong)", margin: 0,
            paddingLeft: 24, borderLeft: "2px solid var(--accent)"
          }}>
            You walk out knowing your gap in dollars. What your business is
            worth today. What it could be worth. And exactly what to change to
            close the distance.
          </div>
        </div>

        <div className="cards-grid">
          {OFFER_CARDS.map((c) => (
            <div key={c.num} className="offer-card-item">
              <div className="num">{c.num}</div>
              <h3>{c.title}</h3>
              <ul>{c.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          ))}
        </div>

        {/* Why this call */}
        <div style={{ maxWidth: 1040, margin: "96px auto 0" }}>
          <h3 style={{
            fontFamily: "var(--font-serif)", fontWeight: 400,
            fontSize: "clamp(26px, 2.8vw, 36px)",
            lineHeight: 1.2, color: "var(--fg-strong)",
            margin: "0 0 8px", letterSpacing: "-0.01em", textWrap: "balance"
          }}>
            Why this call, not a broker or a consultant.
          </h3>
          <div className="why-grid">
            <div className="why-item">
              <div className="num-big">01</div>
              <h4>I own an operations company.</h4>
              <p>xFusion. Built with 80-plus people who run operations for businesses every day. I don't just advise on this stuff. My team actually does it.</p>
            </div>
            <div className="why-item">
              <div className="num-big">02</div>
              <h4>I've been in your seat.</h4>
              <p>I've bought and sold businesses. I ran operations for a group that buys companies for a living. I've watched buyers tear apart owners who weren't ready.</p>
            </div>
            <div className="why-item">
              <div className="num-big">03</div>
              <h4>I'm not a broker.</h4>
              <p>I don't put up a sign. I don't take 10%. When I work with owners past this call, I put real money of my own on the line. I only win when you win.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Mid CTA band ---------- */
function MidCta() {
  return (
    <section className="mid-cta-band" data-screen-label="mid-cta" style={{ padding: 0, background: "var(--bg-alt)" }}>
      <div className="container" style={{ padding: "80px 48px" }}>
        <div className="mid-cta-inner">
          <div className="copy">
            <h3>60 minutes. Your Gap number. No pitch.</h3>
            <div className="sub-cta">Free. Phone or in-person for Denver owners.</div>
          </div>
          <div className="cta-group">
            <CtaButton size="xl">Book my 60 minutes with Jim</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Close / guarantee ---------- */
function Close() {
  return (
    <section data-screen-label="close">
      <div className="container">
        <div className="close-wrap">
          <h2 style={{
            fontFamily: "var(--font-serif)", fontWeight: 400,
            fontSize: "clamp(30px, 3.6vw, 44px)",
            lineHeight: 1.1, letterSpacing: "-0.015em",
            color: "var(--fg-strong)", margin: "0 0 32px", textWrap: "balance"
          }}>
            Why is it free?
          </h2>
          <p className="body-text" style={{ marginBottom: 0 }}>
            Most exit advisors charge thousands a month in fees before they do
            a day of work. Brokers take 10% of your sale, whether the deal is
            great or terrible. This call is one hour, one-on-one, and costs
            you nothing. Not because I'm in the business of free calls.
            Because I only take on a handful of owners at a time. This call is
            how I figure out if yours is one of them.
          </p>

          <div className="guarantee">
            <div className="label">The guarantee</div>
            <h3>The No-Pitch Promise.</h3>
            <p>
              In 60 minutes together, I will not pull out a slide deck. I will
              not sell you anything. You'll get a real number for your
              business. You'll get the three to five things you can change
              that raise the price the most. And you'll get an honest opinion
              on whether to start preparing now or wait. If at any point you
              feel like you're being sold, we end the call. You keep every
              piece of advice we covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQ_ITEMS = [
  { q: "What actually happens on this call?", a: "We cover four things. What your business is worth today. What it could be worth. What needs to change to get there. And how to handle the people around you: your spouse, your CPA, your lawyer, your team. You walk out with real numbers. Not a brochure." },
  { q: "Why is it free?", a: "I only work with a handful of owners at a time. This call is how I figure out if yours is a fit. Even owners who aren't a fit walk away with real answers. No pitch either way." },
  { q: "Is this a sales call?", a: "No. That's the No-Pitch Promise. I will not walk you through a deck. I will not ask for your credit card. If any of that starts to happen, we end the call and you keep the advice." },
  { q: "Phone or in person?", a: "Denver Front Range owners get the choice. I can come to you, you can come to my office, or we do it by phone. Outside the Front Range: phone or video. In-person is a Denver perk." },
  { q: "Do I need to prepare anything?", a: "Nothing required. If you have your last twelve months of P&L and tax returns handy, we can get more specific on your number. If you don't, we work with what you know off the top of your head and still get you useful answers." },
  { q: "How long is it really?", a: "60 minutes. Some calls run shorter when an owner is clearly not a fit. That's still useful information." },
  { q: "Is it confidential?", a: "Yes. I will sign a standard NDA on request. Nothing you share goes anywhere." },
  { q: "What happens after the call?", a: "Nothing automatic. You walk away with your numbers. If you want to talk about working together, you tell me. If you don't, we shake hands and you keep everything we covered." },
  { q: "What if my business is under $2M in revenue or outside HVAC, plumbing, electrical, pest control, landscaping, roofing, or restoration?", a: "Honest answer: probably not a fit. I'll still take the call if you want my time, but I'll tell you up front so you can decide if it's worth the hour." },
  { q: "What's the catch?", a: "No catch. The No-Pitch Promise holds. If you feel sold at any point, we end the call." },
];

function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <section style={{ background: "var(--bg-alt)" }} data-screen-label="faq">
      <div className="container">
        <div className="faq-wrap">
          <h2 style={{
            fontFamily: "var(--font-serif)", fontWeight: 400,
            fontSize: "clamp(30px, 3.6vw, 44px)",
            lineHeight: 1.1, letterSpacing: "-0.015em",
            color: "var(--fg-strong)", margin: "0 0 40px", textWrap: "balance"
          }}>
            Questions owners ask before they book.
          </h2>

          <div className="faq-list">
            {FAQ_ITEMS.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                  <button
                    className="faq-trigger"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="q-text">{it.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div className="faq-panel">
                    <div className="faq-body">{it.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCta() {
  return (
    <section className="final-cta" data-screen-label="final-cta">
      {/* Subtle mountain silhouette */}
      <svg className="mountains" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,160 L0,110 L120,70 L220,95 L320,50 L420,85 L520,35 L640,80 L760,40 L880,75 L1000,45 L1120,90 L1240,55 L1360,85 L1440,65 L1440,160 Z"
              fill="#2F4A3A" opacity="0.7" />
        <path d="M0,160 L0,130 L90,100 L200,115 L310,85 L420,110 L540,80 L660,105 L800,75 L940,100 L1080,85 L1200,110 L1320,90 L1440,105 L1440,160 Z"
              fill="#F4EFE2" opacity="0.06" />
      </svg>
      <div className="container">
        <div className="final-cta-inner">
          <div className="prehead">Denver Front Range. One to three years out.</div>
          <h2>
            Claim your 60 minutes.<br/>
            Walk away with the number.
          </h2>
          <p className="deck">
            No slides. No pitch. Just the real math on your business and an
            honest opinion on when to start.
          </p>
          <div className="cta-group center">
            <CtaButton size="xl">Claim my free 60 minutes</CtaButton>
            <div className="sub-cta">Denver-based. Free. No slides. No pitch. Walk away with your Gap number.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function LpFooter() {
  return (
    <footer className="lp-footer">
      <div className="container">
        <div className="lp-footer-inner">
          <div className="mono">Slate Exit Advisory. Principal, not broker. Denver, Colorado.</div>
          <div className="mono">© 2026</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <main>
        <Hero />
        <Lead />
        <Story />
        <Offer />
        <MidCta />
        <Close />
        <Faq />
        <FinalCta />
      </main>
      <LpFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
