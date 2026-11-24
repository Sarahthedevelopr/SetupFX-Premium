import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import "./HomeHero.css";

const WHATSAPP_NUMBER = "91YOURNUMBER";

function HeroDashboard() {
  const marketBars = [32, 48, 39, 58, 46, 67, 53, 76, 61, 84, 69, 94, 78, 100, 82, 112, 91, 124];

  return (
    <motion.div
      className="hero-visual premium-hero-visual"
      initial={{ opacity: 0, scale: 0.92, x: 30, rotateY: -5 }}
      animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <motion.div
        className="premium-orbit-glow"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        <span className="premium-orbit-node node-one" />
        <span className="premium-orbit-node node-two" />
        <span className="premium-orbit-node node-three" />
      </motion.div>

      <motion.div
        className="premium-terminal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <div className="premium-terminal-topbar">
          <div className="premium-terminal-brand">
            <span className="premium-brand-mark"><Activity size={16} /></span>
            <span><strong>SETUPFX</strong><small>TRADING TERMINAL</small></span>
          </div>
          <div className="premium-terminal-status"><span /> SYSTEM ONLINE</div>
          <div className="premium-terminal-dots"><i /><i /><i /></div>
        </div>

        <div className="premium-terminal-body">
          <div className="premium-terminal-heading">
            <div>
              <span className="premium-eyebrow">MARKET INTELLIGENCE</span>
              <h3>Trading Overview</h3>
            </div>
            <span className="premium-live-pill"><span /> Live preview</span>
          </div>

          <div className="premium-metric-grid">
            <motion.div className="premium-metric-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <span className="premium-metric-icon blue-metric"><Activity size={15} /></span>
              <small>Platform status</small>
              <strong>Operational</strong>
              <span className="premium-metric-foot"><i /> All systems active</span>
            </motion.div>
            <motion.div className="premium-metric-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <span className="premium-metric-icon cyan-metric"><Network size={15} /></span>
              <small>Integrations</small>
              <strong>Connected</strong>
              <span className="premium-metric-foot">API network ready</span>
            </motion.div>
            <motion.div className="premium-metric-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <span className="premium-metric-icon violet-metric"><ShieldCheck size={15} /></span>
              <small>Risk management</small>
              <strong>Protected</strong>
              <span className="premium-metric-foot">Risk controls enabled</span>
            </motion.div>
          </div>

          <div className="premium-market-panel">
            <div className="premium-market-header">
              <div><span className="premium-eyebrow">MARKET ACTIVITY</span><h4>Performance analytics</h4></div>
              <span className="premium-period">Today <ArrowUpRight size={12} /></span>
            </div>
            <div className="premium-chart">
              <div className="premium-chart-grid"><i /><i /><i /><i /></div>
              <div className="premium-chart-bars">
                {marketBars.map((height, index) => (
                  <motion.span
                    key={index}
                    initial={{ height: 0, opacity: 0.3 }}
                    animate={{ height: `${height}px`, opacity: 1 }}
                    transition={{ duration: 0.65, delay: 0.45 + index * 0.035, ease: "easeOut" }}
                    className={index % 4 === 0 || index % 5 === 0 ? "premium-bar bar-cyan" : "premium-bar"}
                  />
                ))}
              </div>
              <svg className="premium-chart-line" viewBox="0 0 460 135" preserveAspectRatio="none" aria-hidden="true">
                <defs><linearGradient id="premiumLineGradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#4f8cff" /><stop offset="100%" stopColor="#36d6d0" /></linearGradient></defs>
                <path d="M0 112 C28 108 35 86 58 94 S94 102 116 74 S145 89 168 63 S201 75 226 48 S258 64 280 40 S313 51 337 30 S370 44 393 19 S433 29 460 8" fill="none" stroke="url(#premiumLineGradient)" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="460" cy="8" r="4" fill="#36d6d0" />
              </svg>
            </div>
            <div className="premium-chart-axis"><span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span></div>
          </div>

          <div className="premium-terminal-footer">
            <div><span className="premium-footer-icon"><Server size={14} /></span><span><strong>Trading infrastructure</strong><small>Secure platform architecture</small></span><Check size={15} className="premium-check" /></div>
            <div><span className="premium-footer-icon footer-cyan"><Network size={14} /></span><span><strong>Connected ecosystem</strong><small>Services and integrations</small></span><ArrowUpRight size={15} className="premium-check" /></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="floating-chip floating-chip-top premium-float-chip"
        animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="floating-chip-icon"><Code2 size={16} /></span>
        <span><strong>Custom Technology</strong><small>Built around your needs</small></span>
      </motion.div>

      <motion.div
        className="floating-chip floating-chip-bottom premium-float-chip"
        animate={{ y: [0, 9, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="floating-chip-icon cyan-icon"><Network size={16} /></span>
        <span><strong>Connected Ecosystem</strong><small>Platform & integrations</small></span>
      </motion.div>

      <motion.div className="premium-security-badge" animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <span><ShieldCheck size={16} /></span><div><strong>Secure by design</strong><small>Built for reliability</small></div>
      </motion.div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-cyan" />
        <div className="hero-grid" />
        <div className="hero-light-ray ray-one" />
        <div className="hero-light-ray ray-two" />
      </div>

      <div className="site-container hero-container">
        <div className="hero-copy">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={15} />
            <span>TRADING TECHNOLOGY · BUILT FOR GROWTH</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            Build Your Trading Platform.
            <span> Power Your Next Big Move.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore custom trading platforms, white-label solutions,
            powerful integrations, and technology designed around
            your business goals.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              className="button button-primary"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi SetupFX, I would like to discuss a trading platform project."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Started
              <ArrowUpRight size={18} />
            </a>

            <a className="button button-secondary" href="#platforms">
              Explore Platforms
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className="hero-proof-icon">
              <ShieldCheck size={18} />
            </div>

            <p>
              <strong>Technology tailored to your requirements</strong>
              <span>From initial planning to platform development.</span>
            </p>
          </motion.div>
        </div>

        <HeroDashboard />
      </div>

      <a className="hero-scroll" href="#trust-highlights">
        <span className="scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}

export default function HomeHero() {
  return <Hero />;
}
