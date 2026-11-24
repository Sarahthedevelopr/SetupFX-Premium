import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Copy,
  CreditCard,
  Gauge,
  Globe2,
  Headphones,
  Layers3,
  LockKeyhole,
  Network,
  PanelTop,
  Settings2,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

import "./ForexTradingPlatform.css";

const platformFeatures = [
  {
    number: "01",
    icon: Globe2,
    title: "Multi-Asset Trading",
    description:
      "Support forex pairs, precious metals, indices, energies, commodities and crypto CFDs from a single trading account.",
    tags: ["Forex", "Metals", "Indices"],
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Advanced Charting",
    description:
      "Give traders access to multiple timeframes, technical indicators, drawing tools and chart-based order placement.",
    tags: ["Indicators", "Timeframes", "Chart Tools"],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Complete Order Types",
    description:
      "Support market, limit, stop, stop-limit and trailing-stop orders, along with partial close and hedging functionality.",
    tags: ["Market Orders", "Stop Orders", "Hedging"],
  },
  {
    number: "04",
    icon: Network,
    title: "Liquidity Bridge Integration",
    description:
      "Connect liquidity providers with configurable routing, markup and spread controls based on your brokerage requirements.",
    tags: ["Liquidity Providers", "Routing", "Spread Control"],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Risk Management Engine",
    description:
      "Monitor exposure in real time and configure margin calls, stop-out levels and risk rules for different client groups.",
    tags: ["Exposure", "Margin", "Risk Rules"],
  },
  {
    number: "06",
    icon: Copy,
    title: "Copy Trading",
    description:
      "Allow clients to follow selected strategy providers with configurable allocation options.",
    tags: ["Strategy Providers", "Allocation"],
  },
  {
    number: "07",
    icon: Layers3,
    title: "MAM / PAMM Accounts",
    description:
      "Support money-manager structures with automated allocation and performance-fee calculations.",
    tags: ["MAM", "PAMM", "Allocation"],
  },
  {
    number: "08",
    icon: Users,
    title: "IB & Affiliate Module",
    description:
      "Manage multi-tier partner hierarchies with automated commission tracking and payout workflows.",
    tags: ["IB Management", "Commissions"],
  },
  {
    number: "09",
    icon: Wallet,
    title: "Client Portal",
    description:
      "Provide registration, KYC document uploads, deposits, withdrawals, account history and statements in one place.",
    tags: ["Registration", "KYC", "Funding"],
  },
  {
    number: "10",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Offer Android and iOS trading applications published under your own brand.",
    tags: ["Android", "iOS", "White Label"],
  },
];

const backOfficeFeatures = [
  {
    icon: Users,
    title: "Client Management",
    description:
      "Create and group client accounts and manage permissions.",
  },
  {
    icon: Settings2,
    title: "Trading Configuration",
    description:
      "Configure symbols, spreads, leverage, swaps and commissions.",
  },
  {
    icon: CreditCard,
    title: "Funding Operations",
    description:
      "Manage deposit and withdrawal approval workflows.",
  },
  {
    icon: Gauge,
    title: "Live Risk Monitoring",
    description:
      "Monitor live exposure and open trading positions.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Review trading activity, revenue and client reports.",
  },
  {
    icon: LockKeyhole,
    title: "Staff Permissions",
    description:
      "Manage staff roles, access permissions and audit logs.",
  },
];

const idealFor = [
  {
    icon: Zap,
    title: "New Brokerages",
    description:
      "Launch your first trading platform with a branded client experience and operational tools.",
  },
  {
    icon: Workflow,
    title: "Established Brokers",
    description:
      "Move beyond the limitations of an existing legacy trading system.",
  },
  {
    icon: Globe2,
    title: "White-Label Partners",
    description:
      "Build your business identity around a platform configured for your requirements.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Expanding Firms",
    description:
      "Support expansion into additional markets or asset classes.",
  },
];

const faqs = [
  {
    question: "Can we connect our own liquidity provider?",
    answer:
      "Yes. The liquidity bridge supports provider integration with configurable routing and markup. The integration requirements can be discussed during project scoping.",
  },
  {
    question: "Is the platform available on mobile?",
    answer:
      "The platform offering includes native Android and iOS trading applications that can be published under your brand.",
  },
  {
    question:
      "Can we configure different spreads and leverage for different client groups?",
    answer:
      "Yes. Group-based configuration for settings such as spreads and leverage is part of the platform's standard capabilities.",
  },
  {
    question: "How is client data secured?",
    answer:
      "The described system includes encrypted data handling, role-based access and audit logging. Hosting and the wider security architecture are agreed during project scoping.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <motion.div
      className={`ftp-section-heading ${
        centered ? "ftp-heading-centered" : ""
      }`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="ftp-eyebrow">
        <span className="ftp-eyebrow-dot" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function ForexTradingPlatform() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="ftp-page">
      {/* HERO */}
      <section className="ftp-hero">
        <div className="ftp-hero-orb ftp-orb-one" />
        <div className="ftp-hero-orb ftp-orb-two" />
        <div className="ftp-hero-grid" />

        <div className="ftp-container ftp-hero-layout">
          <motion.div
            className="ftp-hero-content"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="ftp-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronDown size={13} className="ftp-breadcrumb-arrow" />
              <Link to="/platforms">Platforms</Link>
              <ChevronDown size={13} className="ftp-breadcrumb-arrow" />
              <span>Forex Trading</span>
            </div>

            <span className="ftp-eyebrow">
              <span className="ftp-eyebrow-dot" />
              GLOBAL MARKETS
            </span>

            <h1>
              Global Trading Platform
              <span> for Global Brokerages</span>
            </h1>

            <p className="ftp-hero-description">
              A complete multi-asset trading system — branded as yours,
              integrated with your liquidity, and designed around your
              brokerage requirements.
            </p>

            <div className="ftp-hero-tags">
              <span>
                <Network size={15} />
                Liquidity Bridge
              </span>
              <span>
                <Layers3 size={15} />
                MAM / PAMM
              </span>
              <span>
                <Copy size={15} />
                Copy Trading
              </span>
            </div>

            <div className="ftp-hero-actions">
              <Link to="/contact" className="ftp-btn ftp-btn-primary">
                Request a Demo
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="ftp-btn ftp-btn-secondary">
                Talk to an Expert
                <ArrowDownRight size={18} />
              </Link>
            </div>

            <div className="ftp-hero-note">
              <CheckCircle2 size={17} />
              <span>
                Your brand. Your requirements. One integrated platform.
              </span>
            </div>
          </motion.div>

          {/* CSS-built platform visual */}
          <motion.div
            className="ftp-hero-visual"
            initial={{ opacity: 0, scale: 0.92, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <div className="ftp-visual-glow" />

            <div className="ftp-dashboard">
              <div className="ftp-dashboard-top">
                <div className="ftp-dashboard-brand">
                  <div className="ftp-brand-symbol">
                    <ChartNoAxesCombined size={18} />
                  </div>
                  <div>
                    <strong>Trading Console</strong>
                    <span>Broker Dashboard</span>
                  </div>
                </div>

                <div className="ftp-live-indicator">
                  <span />
                  LIVE
                </div>
              </div>

              <div className="ftp-dashboard-welcome">
                <div>
                  <span>MARKET OVERVIEW</span>
                  <h3>Trading at a glance</h3>
                </div>
                <div className="ftp-dashboard-icon">
                  <PanelTop size={20} />
                </div>
              </div>

              <div className="ftp-market-cards">
                <div className="ftp-market-card">
                  <span>EUR / USD</span>
                  <strong>1.0842</strong>
                  <small>Market instrument</small>
                </div>

                <div className="ftp-market-card">
                  <span>GBP / USD</span>
                  <strong>1.2718</strong>
                  <small>Market instrument</small>
                </div>
              </div>

              <div className="ftp-chart-panel">
                <div className="ftp-chart-heading">
                  <div>
                    <strong>Market Movement</strong>
                    <span>Illustrative interface</span>
                  </div>
                  <BarChart3 size={19} />
                </div>

                <div className="ftp-chart">
                  <div className="ftp-chart-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <svg
                    viewBox="0 0 420 150"
                    preserveAspectRatio="none"
                    role="img"
                    aria-label="Illustrative trading chart"
                  >
                    <defs>
                      <linearGradient
                        id="ftp-chart-fill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#24b7df"
                          stopOpacity=".28"
                        />
                        <stop
                          offset="100%"
                          stopColor="#24b7df"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 119 L25 105 L47 112 L70 82 L94 91 L116 65 L139 78 L161 50 L186 67 L209 43 L232 56 L256 34 L279 49 L302 25 L326 39 L350 18 L375 29 L398 10 L420 17 L420 150 L0 150 Z"
                      fill="url(#ftp-chart-fill)"
                    />

                    <path
                      d="M0 119 L25 105 L47 112 L70 82 L94 91 L116 65 L139 78 L161 50 L186 67 L209 43 L232 56 L256 34 L279 49 L302 25 L326 39 L350 18 L375 29 L398 10 L420 17"
                      fill="none"
                      stroke="#159fc8"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="ftp-dashboard-bottom">
                <div>
                  <div className="ftp-mini-icon">
                    <ShieldCheck size={17} />
                  </div>
                  <span>Risk monitoring</span>
                  <strong>Centralized</strong>
                </div>

                <div>
                  <div className="ftp-mini-icon">
                    <Users size={17} />
                  </div>
                  <span>Client operations</span>
                  <strong>Integrated</strong>
                </div>
              </div>
            </div>

            <motion.div
              className="ftp-float-card ftp-float-top"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="ftp-float-icon">
                <ShieldCheck size={20} />
              </div>
              <div>
                <strong>Risk Engine</strong>
                <span>Centralized controls</span>
              </div>
            </motion.div>

            <motion.div
              className="ftp-float-card ftp-float-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="ftp-float-icon">
                <Workflow size={20} />
              </div>
              <div>
                <strong>Integrated System</strong>
                <span>Terminal + Back Office</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="ftp-hero-bottom">
          <span>BUILT AROUND YOUR BROKERAGE</span>
          <div />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ftp-section ftp-overview-section">
        <div className="ftp-container ftp-overview-layout">
          <div className="ftp-overview-copy">
            <SectionHeading
              centered={false}
              eyebrow="PLATFORM OVERVIEW"
              title="Everything a Brokerage Needs, in One System"
              description="Running a forex brokerage means managing the client experience, the risk book and the operations behind both. The platform brings these essential areas together."
            />

            <div className="ftp-overview-points">
              <div>
                <span className="ftp-check-icon">
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Client experience</strong>
                  <br />
                  A clean trading terminal for web and mobile users.
                </p>
              </div>

              <div>
                <span className="ftp-check-icon">
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Risk visibility</strong>
                  <br />
                  Exposure monitoring and configurable risk controls.
                </p>
              </div>

              <div>
                <span className="ftp-check-icon">
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Operational control</strong>
                  <br />
                  Funding, verification, reporting and partner commissions.
                </p>
              </div>
            </div>

            <Link to="/contact" className="ftp-text-link">
              Discuss your platform requirements
              <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            className="ftp-overview-visual"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="ftp-overview-visual-top">
              <span>ONE CONNECTED ECOSYSTEM</span>
              <Workflow size={21} />
            </div>

            <div className="ftp-ecosystem-center">
              <div className="ftp-ecosystem-logo">
                <Layers3 size={32} />
              </div>
              <h3>Your Trading Platform</h3>
              <p>One integrated technology system</p>
            </div>

            <div className="ftp-ecosystem-connectors">
              <span />
              <span />
              <span />
            </div>

            <div className="ftp-ecosystem-items">
              <div>
                <Smartphone size={23} />
                <strong>Terminal</strong>
                <span>Web & Mobile</span>
              </div>

              <div>
                <Gauge size={23} />
                <strong>Risk Engine</strong>
                <span>Exposure & Limits</span>
              </div>

              <div>
                <PanelTop size={23} />
                <strong>Back Office</strong>
                <span>Operations & Reports</span>
              </div>
            </div>

            <div className="ftp-ecosystem-footer">
              <CheckCircle2 size={16} />
              <span>Configured for your business model</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="ftp-section ftp-features-section">
        <div className="ftp-container">
          <SectionHeading
            eyebrow="PLATFORM CAPABILITIES"
            title="Everything You Need to Operate"
            description="Explore the trading, connectivity, risk and client-management capabilities available for your brokerage platform."
          />

          <div className="ftp-features-grid">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="ftp-feature-card"
                  key={feature.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.08,
                  }}
                >
                  <div className="ftp-feature-card-top">
                    <div className="ftp-feature-icon">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>
                    <span>{feature.number}</span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="ftp-feature-tags">
                    {feature.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="ftp-feature-card-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BACK OFFICE */}
      <section className="ftp-section ftp-backoffice-section">
        <div className="ftp-container">
          <div className="ftp-backoffice-header">
            <SectionHeading
              centered={false}
              eyebrow="ADMIN & BACK OFFICE"
              title="Full Control From a Single Console"
              description="Give your operations team a centralized place to manage client accounts, trading configuration, funding workflows and reporting."
            />

            <Link to="/contact" className="ftp-btn ftp-btn-primary">
              Explore the Platform
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="ftp-backoffice-grid">
            {backOfficeFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="ftp-backoffice-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="ftp-backoffice-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <CheckCircle2
                    className="ftp-backoffice-check"
                    size={18}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="ftp-backoffice-note">
            <div className="ftp-note-icon">
              <Settings2 size={22} />
            </div>
            <div>
              <strong>Configured around your operation</strong>
              <p>
                Discuss the permissions, settings, reporting and workflows
                your brokerage needs during project scoping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="ftp-section ftp-audience-section">
        <div className="ftp-container">
          <SectionHeading
            eyebrow="WHO IT'S FOR"
            title="Built for Different Brokerage Stages"
            description="Whether you're launching a new brokerage or upgrading an existing operation, the platform can be scoped around your business needs."
          />

          <div className="ftp-audience-grid">
            {idealFor.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="ftp-audience-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="ftp-audience-icon">
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
      <section className="ftp-section ftp-faq-section">
        <div className="ftp-container ftp-faq-layout">
          <div className="ftp-faq-intro">
            <SectionHeading
              centered={false}
              eyebrow="FAQ"
              title="Questions Before You Get Started?"
              description="Here are some common questions about the global trading platform. Contact our team to discuss your specific requirements."
            />

            <div className="ftp-faq-help">
              <div className="ftp-faq-help-icon">
                <Headphones size={23} />
              </div>
              <div>
                <strong>Need more information?</strong>
                <p>Let's discuss your brokerage requirements.</p>
                <Link to="/contact">
                  Talk to our team <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="ftp-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`ftp-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="ftp-faq-question"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                  >
                    <span>{faq.question}</span>
                    <span className="ftp-faq-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="ftp-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEMO CTA */}
      <section className="ftp-section ftp-demo-section">
        <div className="ftp-container">
          <motion.div
            className="ftp-demo-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="ftp-demo-glow" />

            <div className="ftp-demo-content">
              <span className="ftp-eyebrow ftp-eyebrow-light">
                <span className="ftp-eyebrow-dot" />
                YOUR NEXT STEP
              </span>

              <h2>See the Global Trading Platform in Action</h2>

              <p>
                Tell us what you're building. We'll walk you through the
                platform architecture and discuss a clear scope and timeline
                for your project.
              </p>

              <div className="ftp-demo-actions">
                <Link to="/contact" className="ftp-btn ftp-btn-white">
                  Book Your Demo
                  <ArrowRight size={18} />
                </Link>

                <Link to="/platforms" className="ftp-demo-text-link">
                  Explore All Platforms
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="ftp-demo-note">
                <CheckCircle2 size={16} />
                No obligation. No sales pressure.
              </div>
            </div>

            <div className="ftp-demo-decoration">
              <div className="ftp-demo-ring ftp-ring-one" />
              <div className="ftp-demo-ring ftp-ring-two" />
              <div className="ftp-demo-center-icon">
                <CircleDollarSign size={54} />
              </div>
              <div className="ftp-demo-decoration-card ftp-decoration-card-one">
                <ShieldCheck size={20} />
                <span>Risk Controls</span>
              </div>
              <div className="ftp-demo-decoration-card ftp-decoration-card-two">
                <ChartNoAxesCombined size={20} />
                <span>Trading Tools</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="ftp-disclaimer">
        <div className="ftp-container ftp-disclaimer-inner">
          <div className="ftp-disclaimer-icon">
            <ShieldCheck size={19} />
          </div>
          <p>
            <strong>Important:</strong> SetupFX is a software development
            company. It builds and licenses trading technology and does not
            trade, broker, hold, manage or handle client funds, or provide
            financial, investment or advisory services.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ForexTradingPlatform;