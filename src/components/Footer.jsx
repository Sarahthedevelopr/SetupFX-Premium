import { useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Activity,
  Globe2,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import "./Footer.css";

/* =========================
   FOOTER NAVIGATION
========================= */

const platformLinks = [
  { label: "Trading Platforms", href: "/platforms" },
  { label: "White Label Solutions", href: "/white-label" },
  { label: "Prop Firm Solutions", href: "/prop-firm-setup" },
  { label: "Trading Infrastructure", href: "/trading-infrastructure" },
  { label: "PSP Solutions", href: "/forex-psp-solution" },
];

const serviceLinks = [
  { label: "Forex Web Development", href: "/forex-web-development" },
  { label: "Platform Integration", href: "/services" },
  { label: "Technology Solutions", href: "/services" },
  { label: "Maintenance & Support", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/#faq" },
];

/* =========================
   TRADING VISUAL CAROUSEL
========================= */

const tradingCards = [
  {
    title: "Trading Platforms",
    label: "01 / PLATFORM",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=720&q=85",
    alt: "Financial market chart displayed on a trading screen",
  },
  {
    title: "Crypto Markets",
    label: "02 / CRYPTO",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=720&q=85",
    alt: "Cryptocurrency market visual",
  },
  {
    title: "Market Analytics",
    label: "03 / ANALYTICS",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=720&q=85",
    alt: "Digital financial analytics",
  },
  {
    title: "Liquidity Network",
    label: "04 / LIQUIDITY",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=720&q=85",
    alt: "Abstract digital blockchain network",
  },
  {
    title: "Payment Systems",
    label: "05 / PAYMENTS",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=720&q=85",
    alt: "Digital payment being made",
  },
  {
    title: "Forex Infrastructure",
    label: "06 / FOREX",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=720&q=85",
    alt: "Business analytics dashboard on a laptop",
  },
  {
    title: "Trading Technology",
    label: "07 / TECHNOLOGY",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=720&q=85",
    alt: "Electronic circuit board representing technology",
  },
  {
    title: "Risk Management",
    label: "08 / RISK",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=85",
    alt: "Data analytics and charts",
  },
  {
    title: "Global Markets",
    label: "09 / GLOBAL",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=720&q=85",
    alt: "Modern global business district",
  },
  {
    title: "Digital Assets",
    label: "10 / ASSETS",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=720&q=85",
    alt: "Abstract digital asset network",
  },
];

function TradingCarousel() {
  const reduceMotion = useReducedMotion();
  const cards = reduceMotion ? tradingCards : [...tradingCards, ...tradingCards];

  return (
    <section
      className={`footer-animation-section ${
        reduceMotion ? "footer-carousel-reduced-motion" : ""
      }`}
      aria-label="SetupFX trading technology showcase"
    >
      <div className="footer-carousel-heading">
        <span className="footer-carousel-kicker">
          <span className="footer-carousel-live-dot" />
          BUILT FOR MODERN TRADING
        </span>
        <span className="footer-carousel-counter">TECHNOLOGY • MARKETS • INFRASTRUCTURE</span>
      </div>

      <div className="footer-carousel-window">
        <div className="footer-carousel-track">
          {cards.map((card, index) => (
            <article
              className="footer-showcase-card"
              key={`${card.label}-${index}`}
              aria-label={card.title}
            >
              <div className="footer-showcase-image-wrap">
                <img
                  className="footer-showcase-image"
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  draggable="false"
                />
                <span className="footer-showcase-image-shade" />
                <span className="footer-showcase-index">{card.label}</span>
                <span className="footer-showcase-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="footer-showcase-card-caption">
                <span>{card.title}</span>
                <span className="footer-showcase-status-dot" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="footer-carousel-bottom">
        <span>CONNECTED TRADING ECOSYSTEM</span>
        <span className="footer-carousel-line" />
        <span>MOVE WITH THE MARKET <ArrowRight size={13} /></span>
      </div>
    </section>
  );
}

/* =========================
   FOOTER LINK COLUMN
========================= */

function FooterLinkColumn({ title, links }) {
  return (
    <div className="footer-link-column">
      <h3>{title}</h3>

      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              <span>{link.label}</span>
              <ArrowUpRight size={13} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================
   MAIN FOOTER
========================= */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="footer">
      {/* 40vh: Animated visual */}

      <TradingCarousel />

      {/* Remaining footer information */}

      <div className="footer-information">
        <div className="footer-main-container">
          {/* Brand information */}

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">
                <Activity size={23} strokeWidth={2.2} />
              </span>

              <span className="footer-logo-text">
                Setup<span>FX</span>
              </span>
            </a>

            <p className="footer-description">
              Building technology for modern trading businesses with
              scalable platforms, integrated systems and digital
              infrastructure.
            </p>

            <div className="footer-trust-points">
              <div>
                <ShieldCheck size={15} />
                <span>Technology-focused</span>
              </div>

              <div>
                <Workflow size={15} />
                <span>Connected systems</span>
              </div>
            </div>

            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.2 10H5.8v8h2.4v-8ZM7 6.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM18.2 13.4c0-2.4-1.3-3.6-3.1-3.6a2.7 2.7 0 0 0-2.4 1.3V10h-2.4v8h2.4v-4.1c0-1.1.2-2.2 1.6-2.2s1.5 1.3 1.5 2.2V18h2.4v-4.6Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform links */}

          <FooterLinkColumn
            title="Platforms"
            links={platformLinks}
          />

          {/* Services links */}

          <FooterLinkColumn
            title="Services"
            links={serviceLinks}
          />

          {/* Company links */}

          <FooterLinkColumn
            title="Company"
            links={companyLinks}
          />

          {/* Contact information */}

          <div className="footer-contact-column">
            <h3>Get in touch</h3>

            <p className="footer-contact-description">
              Have a project in mind? Connect with our team to discuss
              your technology requirements.
            </p>

            <a href="/contact" className="footer-contact-link">
              Contact our team
              <ArrowRight size={15} />
            </a>

            <div className="footer-contact-meta">
              <div>
                <Globe2 size={15} />
                <span>Global technology solutions</span>
              </div>

              <div>
                <Layers3 size={15} />
                <span>Trading technology infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p>
              © {currentYear} SetupFX. All rights reserved.
            </p>

            <div className="footer-legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms & Conditions</a>
            </div>

            <a href="#top" className="footer-back-to-top">
              Back to top
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}