import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  BarChart3,
  CandlestickChart,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileText,
  Gauge,
  Headphones,
  IndianRupee,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  PanelTop,
  PieChart,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Zap,
  Settings2,
  Activity,
} from "lucide-react";

import "./IndianTradingPlatform.css";

const features = [
  {
    number: "01",
    icon: Layers3,
    title: "Multi-Segment Coverage",
    description:
      "Support equity, futures and options, currency derivatives and commodity segments through a unified trading experience.",
    tags: ["Equity", "F&O", "Currency", "Commodities"],
  },
  {
    number: "02",
    icon: Zap,
    title: "Fast Order Entry",
    description:
      "Provide quick order windows, keyboard shortcuts, basket orders and convenient one-click order modification.",
    tags: ["Quick Orders", "Hotkeys", "Basket Orders"],
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Order Type Support",
    description:
      "Support market, limit, stop-loss and stop-loss market orders, with bracket and cover order structures where applicable.",
    tags: ["Market", "Limit", "Stop-Loss"],
  },
  {
    number: "04",
    icon: Activity,
    title: "Live Market Data",
    description:
      "Present real-time quotes, market depth and customizable watchlists to help traders follow their preferred instruments.",
    tags: ["Live Quotes", "Market Depth", "Watchlists"],
  },
  {
    number: "05",
    icon: CandlestickChart,
    title: "Charting & Analysis",
    description:
      "Offer multiple timeframes, technical indicators and chart-based order placement within the trading interface.",
    tags: ["Charts", "Indicators", "Analysis"],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Margin & Risk Management",
    description:
      "Configure margin calculations, exposure limits, square-off rules and risk management controls for trading operations.",
    tags: ["Margin", "Exposure", "RMS"],
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "Positions & P&L",
    description:
      "Display live position tracking, realised and unrealised profit and loss, and holdings in one place.",
    tags: ["Positions", "P&L", "Holdings"],
  },
  {
    number: "08",
    icon: FileText,
    title: "Back Office & Ledger",
    description:
      "Support client ledgers, contract notes, obligation statements and settlement-related reports.",
    tags: ["Ledger", "Contract Notes", "Reports"],
  },
  {
    number: "09",
    icon: Users,
    title: "Client Onboarding",
    description:
      "Provide digital account-opening workflows with document uploads and verification steps.",
    tags: ["Account Opening", "Documents", "Verification"],
  },
  {
    number: "10",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Offer Android and iOS applications designed around Indian trading workflows and available under your own brand.",
    tags: ["Android", "iOS", "White Label"],
  },
];

const adminFeatures = [
  {
    icon: Users,
    title: "Client & Branch Management",
    description:
      "Manage client records, account groups, branches and sub-broker hierarchies.",
  },
  {
    icon: Settings2,
    title: "Brokerage Configuration",
    description:
      "Configure brokerage plans for individual clients and groups.",
  },
  {
    icon: Gauge,
    title: "Margin & RMS Controls",
    description:
      "Set margin parameters, exposure limits and risk-management rules.",
  },
  {
    icon: Wallet,
    title: "Funds & Ledger",
    description:
      "Manage fund-transfer workflows, payouts and ledger reconciliation.",
  },
  {
    icon: BarChart3,
    title: "Segment-Wise Reports",
    description:
      "Review trading activity and revenue across supported segments.",
  },
  {
    icon: LockKeyhole,
    title: "Roles & Audit Trail",
    description:
      "Control staff permissions and maintain an audit trail of operations.",
  },
];

const audiences = [
  {
    icon: Landmark,
    title: "Broking Firms",
    description:
      "Build a branded, client-facing trading platform around your brokerage workflows.",
  },
  {
    icon: Network,
    title: "Sub-Broker Networks",
    description:
      "Manage partner structures and brokerage plans across your business network.",
  },
  {
    icon: Smartphone,
    title: "Fintech Startups",
    description:
      "Develop a trading product for your intended Indian market audience.",
  },
  {
    icon: TrendingUp,
    title: "Existing Brokers",
    description:
      "Explore replacing a dated third-party terminal with a more suitable platform.",
  },
];

const faqs = [
  {
    question: "Which market segments can the platform support?",
    answer:
      "The platform scope can include equity, futures and options, currency derivatives and commodities. Final coverage depends on the required integrations and your authorized market access.",
  },
  {
    question: "Can we manage branches and sub-brokers?",
    answer:
      "The described back-office scope supports multi-level branch and partner structures with independently configurable brokerage plans.",
  },
  {
    question: "Are Android and iOS applications available?",
    answer:
      "The platform offering includes Android and iOS applications that can be published under your own brand.",
  },
  {
    question: "Does the software itself provide exchange membership or regulatory approval?",
    answer:
      "No. The software layer can be integrated with data and execution infrastructure authorized by your firm. Exchange memberships, registrations and regulatory filings remain the firm's responsibility. Discuss these requirements with your compliance adviser early in the project.",
  },
];

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <motion.div
      className={`itp-section-heading ${
        centered ? "itp-heading-centered" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <span className="itp-eyebrow">
        <span className="itp-eyebrow-dot" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function IndianTradingPlatform() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="itp-page">
      {/* HERO */}
      <section className="itp-hero">
        <div className="itp-hero-grid" />
        <div className="itp-hero-orb itp-orb-one" />
        <div className="itp-hero-orb itp-orb-two" />

        <div className="itp-container itp-hero-layout">
          <motion.div
            className="itp-hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="itp-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronDown size={13} className="itp-breadcrumb-arrow" />
              <Link to="/platforms">Platforms</Link>
              <ChevronDown size={13} className="itp-breadcrumb-arrow" />
              <span>Indian Trading</span>
            </div>

            <span className="itp-eyebrow">
              <span className="itp-eyebrow-dot" />
              INDIAN MARKETS
            </span>

            <h1>
              Indian Trading Platform
              <span>Built Around Your Business</span>
            </h1>

            <p className="itp-hero-description">
              A trading application designed around Indian exchange workflows,
              instruments and trader expectations — delivered under your brand.
            </p>

            <div className="itp-hero-tags">
              <span>
                <TrendingUp size={15} />
                Equity & F&O
              </span>
              <span>
                <ShieldCheck size={15} />
                RMS
              </span>
              <span>
                <PanelTop size={15} />
                Back Office
              </span>
            </div>

            <div className="itp-hero-actions">
              <Link to="/contact" className="itp-btn itp-btn-primary">
                Request a Demo
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="itp-btn itp-btn-secondary">
                Talk to an Expert
                <ArrowDownRight size={18} />
              </Link>
            </div>

            <div className="itp-hero-note">
              <CheckCircle2 size={17} />
              <span>
                A configurable trading experience for Indian market workflows.
              </span>
            </div>
          </motion.div>

          {/* UPDATED MARKET INTELLIGENCE HERO VISUAL */}
          <motion.div
            className="itp-hero-visual itp-market-stage"
            initial={{ opacity: 0, scale: 0.94, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="itp-market-aura" />
            <div className="itp-market-orbit itp-market-orbit-one" />
            <div className="itp-market-orbit itp-market-orbit-two" />
            <div className="itp-market-orbit-dot itp-market-orbit-dot-one" />
            <div className="itp-market-orbit-dot itp-market-orbit-dot-two" />

            <motion.div
              className="itp-market-side-card itp-market-side-left"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="itp-market-side-icon"><Activity size={18} /></div>
              <div>
                <span>Market activity</span>
                <strong>Live overview</strong>
              </div>
              <span className="itp-market-live-dot" />
            </motion.div>

            <div className="itp-market-main-card">
              <div className="itp-market-main-top">
                <div className="itp-market-brand-mark"><BarChart3 size={21} /></div>
                <div className="itp-market-main-heading">
                  <span>TRADING WORKSPACE</span>
                  <strong>Market Pulse</strong>
                </div>
                <div className="itp-market-live-label"><i /> LIVE VIEW</div>
              </div>

              <div className="itp-market-highlight">
                <div>
                  <span>Market segments</span>
                  <strong>One connected view</strong>
                  <small>Equity · F&amp;O · Currency · Commodities</small>
                </div>
                <div className="itp-market-highlight-icon"><CandlestickChart size={25} /></div>
              </div>

              <div className="itp-market-graph">
                <div className="itp-market-graph-top">
                  <span>Illustrative price movement</span>
                  <span className="itp-market-period">1D&nbsp;⌄</span>
                </div>
                <div className="itp-market-graph-grid">
                  <i /><i /><i /><i />
                </div>
                <svg viewBox="0 0 460 170" preserveAspectRatio="none" role="img" aria-label="Decorative illustrative market movement chart">
                  <defs>
                    <linearGradient id="itp-market-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#23b8db" stopOpacity=".3" />
                      <stop offset="100%" stopColor="#23b8db" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="itp-market-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#087fae" />
                      <stop offset="100%" stopColor="#36cce5" />
                    </linearGradient>
                  </defs>
                  <path d="M0 132 L25 119 L48 126 L72 95 L94 104 L118 82 L140 91 L164 58 L187 70 L210 48 L235 65 L257 36 L281 47 L304 29 L327 43 L350 20 L374 34 L397 16 L425 26 L460 8 L460 170 L0 170 Z" fill="url(#itp-market-area)" />
                  <path d="M0 132 L25 119 L48 126 L72 95 L94 104 L118 82 L140 91 L164 58 L187 70 L210 48 L235 65 L257 36 L281 47 L304 29 L327 43 L350 20 L374 34 L397 16 L425 26 L460 8" fill="none" stroke="url(#itp-market-line)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="460" cy="8" r="5" fill="#ffffff" stroke="#13a9c9" strokeWidth="3" />
                </svg>
              </div>

              <div className="itp-market-segment-row">
                <div><span className="itp-market-segment-icon"><TrendingUp size={16} /></span><span><small>SEGMENT</small><strong>Equity</strong></span><b>01</b></div>
                <div><span className="itp-market-segment-icon itp-market-segment-cyan"><Layers3 size={16} /></span><span><small>SEGMENT</small><strong>Derivatives</strong></span><b>02</b></div>
                <div><span className="itp-market-segment-icon itp-market-segment-purple"><Gauge size={16} /></span><span><small>CONTROL</small><strong>Risk &amp; RMS</strong></span><b>03</b></div>
              </div>
            </div>

            <motion.div
              className="itp-market-side-card itp-market-side-right"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="itp-market-side-icon itp-market-side-icon-cyan"><ShieldCheck size={19} /></div>
              <div>
                <span>Risk management</span>
                <strong>Configured controls</strong>
              </div>
              <CheckCircle2 size={17} className="itp-market-card-check" />
            </motion.div>

            <motion.div
              className="itp-market-bottom-chip"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="itp-market-bottom-chip-icon"><PanelTop size={17} /></div>
              <span><strong>Connected back office</strong><small>Ledger · Reports · Operations</small></span>
            </motion.div>
          </motion.div>
        </div>

        <div className="itp-hero-bottom">
          <span>INDIAN MARKET WORKFLOWS</span>
          <div />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="itp-section">
        <div className="itp-container itp-overview-layout">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="PLATFORM OVERVIEW"
              title="Designed for How India Trades"
              description="Indian trading workflows need quick order entry, clear positions and margin visibility. Brokers also need risk controls, accurate ledgers and dependable operational reporting."
            />

            <div className="itp-overview-points">
              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Responsive trading terminal</strong>
                  <br />
                  A web and mobile experience for supported market segments.
                </p>
              </div>

              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Brokerage operations</strong>
                  <br />
                  Configurable risk controls, client workflows and reports.
                </p>
              </div>

              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Connected back office</strong>
                  <br />
                  Client records, ledgers and settlement-related reporting.
                </p>
              </div>
            </div>

            <Link to="/contact" className="itp-text-link">
              Discuss your requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            className="itp-overview-visual"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="itp-visual-header">
              <span>CONNECTED TRADING WORKSPACE</span>
              <Workflow size={21} />
            </div>

            <div className="itp-ecosystem-main">
              <div className="itp-ecosystem-main-icon">
                <Layers3 size={30} />
              </div>
              <h3>Your Trading Platform</h3>
              <p>Trading terminal + operations</p>
            </div>

            <div className="itp-connector-lines">
              <span />
              <span />
              <span />
            </div>

            <div className="itp-ecosystem-grid">
              <div>
                <Smartphone size={23} />
                <strong>Trading App</strong>
                <span>Web & Mobile</span>
              </div>
              <div>
                <Gauge size={23} />
                <strong>Risk Engine</strong>
                <span>Margins & RMS</span>
              </div>
              <div>
                <PanelTop size={23} />
                <strong>Back Office</strong>
                <span>Ledger & Reports</span>
              </div>
            </div>

            <div className="itp-visual-footer">
              <CheckCircle2 size={16} />
              Configured around your workflows
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="itp-section itp-features-section">
        <div className="itp-container">
          <SectionHeading
            eyebrow="PLATFORM FEATURES"
            title="Tools for the Modern Indian Trader"
            description="From order placement and market data to risk controls and back-office reporting, explore the capabilities that can be scoped into your platform."
          />

          <div className="itp-features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="itp-feature-card"
                  key={feature.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.07,
                  }}
                >
                  <div className="itp-feature-top">
                    <div className="itp-feature-icon">
                      <Icon size={23} />
                    </div>
                    <span>{feature.number}</span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="itp-feature-tags">
                    {feature.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="itp-feature-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMIN & BACK OFFICE */}
      <section className="itp-section">
        <div className="itp-container">
          <div className="itp-admin-header">
            <SectionHeading
              centered={false}
              eyebrow="ADMIN & BACK OFFICE"
              title="Operations Control Panel"
              description="Manage the operational side of your trading business through a centralized administration interface."
            />

            <Link to="/contact" className="itp-btn itp-btn-primary">
              Request a Demo
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="itp-admin-grid">
            {adminFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="itp-admin-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="itp-admin-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <CheckCircle2 size={18} className="itp-admin-check" />
                </motion.div>
              );
            })}
          </div>

          <div className="itp-admin-note">
            <div className="itp-admin-note-icon">
              <Settings2 size={22} />
            </div>
            <div>
              <strong>Designed around your operational structure</strong>
              <p>
                Discuss client groups, branch hierarchy, brokerage plans and
                reporting requirements during project scoping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="itp-section itp-audience-section">
        <div className="itp-container">
          <SectionHeading
            eyebrow="WHO IT'S FOR"
            title="Built Around Your Business Model"
            description="A platform foundation for firms building or improving a branded trading experience for Indian market participants."
          />

          <div className="itp-audience-grid">
            {audiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="itp-audience-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className="itp-audience-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to="/contact" aria-label={`Discuss ${item.title}`}>
                    <ArrowRight size={19} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="itp-section itp-faq-section">
        <div className="itp-container itp-faq-layout">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Before You Build"
              description="Understand the platform scope and the responsibilities that need to be addressed before launch."
            />

            <div className="itp-faq-help">
              <div className="itp-faq-help-icon">
                <Headphones size={23} />
              </div>
              <div>
                <strong>Have a specific requirement?</strong>
                <p>Talk to our team about your project.</p>
                <Link to="/contact">
                  Contact our team <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="itp-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`itp-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="itp-faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="itp-faq-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="itp-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="itp-section itp-cta-section">
        <div className="itp-container">
          <motion.div
            className="itp-cta-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="itp-cta-content">
              <span className="itp-eyebrow itp-eyebrow-light">
                <span className="itp-eyebrow-dot" />
                YOUR NEXT STEP
              </span>

              <h2>Build Your Indian Trading Platform</h2>

              <p>
                Tell us about your target market segments, client base and
                back-office requirements. We'll discuss the project scope
                and next steps with you.
              </p>

              <div className="itp-cta-actions">
                <Link to="/contact" className="itp-btn itp-btn-white">
                  Schedule a Demo
                  <ArrowRight size={18} />
                </Link>

                <Link to="/platforms" className="itp-cta-link">
                  Explore All Platforms
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="itp-cta-note">
                <CheckCircle2 size={16} />
                No obligation. No sales pressure.
              </div>
            </div>

            <div className="itp-cta-visual">
              <div className="itp-cta-ring itp-cta-ring-one" />
              <div className="itp-cta-ring itp-cta-ring-two" />

              <div className="itp-cta-center">
                <IndianRupee size={49} />
              </div>

              <div className="itp-cta-floating itp-cta-floating-one">
                <ShieldCheck size={19} />
                <span>Risk Controls</span>
              </div>

              <div className="itp-cta-floating itp-cta-floating-two">
                <BarChart3 size={19} />
                <span>Trading Tools</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="itp-disclaimer">
        <div className="itp-container itp-disclaimer-inner">
          <ShieldCheck size={20} />
          <p>
            <strong>Important:</strong> Platform software does not itself
            provide exchange membership, regulatory authorization or compliance
            approval. Market access, registrations and regulatory filings remain
            the responsibility of the relevant firm. Confirm applicable
            requirements with your compliance adviser.
          </p>
        </div>
      </section>
    </main>
  );
}

export default IndianTradingPlatform;