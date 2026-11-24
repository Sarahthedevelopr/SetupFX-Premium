import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  BarChart3,
  Bot,
  Building2,
  Check,
  Copy,
  CreditCard,
  Cpu,
  Fingerprint,
  Globe2,
  Gauge,
  LayoutDashboard,
  LineChart,
  LockKeyhole,
  Network,
  PanelTop,
  ShieldCheck,
  Smartphone,
  Users,
  WalletCards,
  Workflow,
  Zap,
  Layers3,
} from "lucide-react";

import "./Platforms.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const products = [
  {
    number: "01",
    eyebrow: "GLOBAL MARKETS",
    title: "Global Trading Platform",
    description:
      "Launch a branded multi-asset trading platform for international markets. Bring trading, operations, client management and reporting together in one connected system.",
    features: [
      "Liquidity Bridge",
      "MAM / PAMM",
      "Copy Trading",
    ],
    icon: Globe2,
    theme: "cyan",
    link: "/platforms/forex-trading-platform",
  },
  {
    number: "02",
    eyebrow: "PROP TRADING",
    title: "Global Prop Firm Platform",
    description:
      "Build a prop trading business with challenge workflows, trader monitoring, risk controls and operational tools designed around your business model.",
    features: [
      "Challenge Engine",
      "Risk Controls",
      "Back Office",
    ],
    icon: Building2,
    theme: "purple",
    link: "/platforms/global-prop-firm-platform",
  },
  {
    number: "03",
    eyebrow: "INDIAN MARKETS",
    title: "Indian Trading Platform",
    description:
      "Develop a trading application for Indian markets with equity and derivatives workflows, risk management and back-office operations.",
    features: [
      "Equity & F&O",
      "RMS",
      "Back Office",
    ],
    icon: BarChart3,
    theme: "orange",
    link: "/platforms/indian-trading-platform",
  },
  {
    number: "04",
    eyebrow: "AI & ALGORITHMIC",
    title: "AI Trading Platform",
    description:
      "Bring strategy research, AI-assisted strategy building, backtesting and algorithmic execution into a configurable trading environment.",
    features: [
      "AI Strategy Builder",
      "Algo Trading",
      "Backtesting",
    ],
    icon: Bot,
    theme: "blue",
    link: "/platforms/ai-trading-platform",
  },
];

const coreFeatures = [
  {
    number: "01",
    title: "Trading Terminal",
    description:
      "Web and mobile trading interfaces with charting, order entry, positions and account history.",
    icon: PanelTop,
  },
  {
    number: "02",
    title: "Admin Back Office",
    description:
      "Manage users, funds, risk parameters, reports and audit logs through a central operations console.",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "Risk Engine",
    description:
      "Monitor exposure, configure trading limits and apply automated controls around your operating model.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Client Portal",
    description:
      "Provide clients with onboarding, KYC uploads, deposits, withdrawals and account statements.",
    icon: Users,
  },
  {
    number: "05",
    title: "Reporting Suite",
    description:
      "Review trade activity, revenue, exposure and business performance through reporting dashboards.",
    icon: LineChart,
  },
  {
    number: "06",
    title: "White-Label Branding",
    description:
      "Configure your logo, colours, domain and app branding to create a consistent brand experience.",
    icon: Fingerprint,
  },
];

const comparisonRows = [
  {
    feature: "Best for",
    global: "Brokerages",
    prop: "Funded-trader firms",
    ai: "Systematic trading",
  },
  {
    feature: "Markets",
    global: "International markets",
    prop: "Markets defined by the business model",
    ai: "Supported venues",
  },
  {
    feature: "Challenge engine",
    global: "—",
    prop: "Available",
    ai: "—",
  },
  {
    feature: "Liquidity bridge",
    global: "Available",
    prop: "Scope dependent",
    ai: "Optional",
  },
  {
    feature: "AI strategy builder",
    global: "—",
    prop: "—",
    ai: "Available",
  },
  {
    feature: "Algorithmic execution",
    global: "Optional",
    prop: "Scope dependent",
    ai: "Available",
  },
  {
    feature: "Copy trading",
    global: "Available",
    prop: "Optional",
    ai: "Optional",
  },
  {
    feature: "IB / affiliate",
    global: "Available",
    prop: "Available",
    ai: "Optional",
  },
  {
    feature: "Mobile apps",
    global: "Available",
    prop: "Available",
    ai: "Available",
  },
  {
    feature: "White-label",
    global: "Available",
    prop: "Available",
    ai: "Available",
  },
];

const modules = [
  {
    number: "01",
    title: "CRM & Client Management",
    description:
      "Manage leads, pipelines and the client lifecycle through an organised workspace.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Payment Gateways",
    description:
      "Connect payment providers and configure deposit and withdrawal workflows.",
    icon: CreditCard,
  },
  {
    number: "03",
    title: "KYC & AML",
    description:
      "Create document upload and verification workflows with traceable audit records.",
    icon: LockKeyhole,
  },
  {
    number: "04",
    title: "Copy & Social Trading",
    description:
      "Allow clients to follow selected strategies with configurable platform controls.",
    icon: Copy,
  },
  {
    number: "05",
    title: "IB & Affiliate System",
    description:
      "Manage partner structures, referrals and commission tracking.",
    icon: Network,
  },
  {
    number: "06",
    title: "Mobile Applications",
    description:
      "Create a mobile trading experience for Android and iOS under your brand.",
    icon: Smartphone,
  },
  {
    number: "07",
    title: "Liquidity Integration",
    description:
      "Connect liquidity providers and configure routing to meet project requirements.",
    icon: Zap,
  },
  {
    number: "08",
    title: "Analytics",
    description:
      "Monitor revenue, exposure, trading activity and business performance.",
    icon: BarChart3,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      className="platforms-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      <span className="platforms-eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function TradingDashboard() {
  return (
    <motion.div
      className="platforms-dashboard-wrapper"
      initial={{
        opacity: 0,
        x: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
    >
      <div className="dashboard-orbit orbit-one" />
      <div className="dashboard-orbit orbit-two" />

      <div className="trading-dashboard">
        <div className="dashboard-navbar">
          <div className="dashboard-logo">
            <Activity size={17} />
            <strong>
              TRADE<span>CORE</span>
            </strong>
          </div>

          <span className="dashboard-status">
            <i />
            SYSTEM ONLINE
          </span>
        </div>

        <div className="dashboard-content">
          <aside className="dashboard-sidebar">
            <span className="active">
              <LayoutDashboard size={17} />
            </span>

            <span>
              <LineChart size={17} />
            </span>

            <span>
              <WalletCards size={17} />
            </span>

            <span>
              <Users size={17} />
            </span>

            <span>
              <Gauge size={17} />
            </span>
          </aside>

          <div className="dashboard-main">
            <div className="dashboard-title">
              <div>
                <small>PORTFOLIO OVERVIEW</small>
                <h3>Market Performance</h3>
              </div>

              <span className="dashboard-period">
                LAST 30 DAYS
              </span>
            </div>

            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <small>Account Equity</small>
                <strong>$84,290.50</strong>
                <span>Illustrative UI</span>
              </div>

              <div className="dashboard-stat">
                <small>Open Positions</small>
                <strong>12</strong>
                <span>Portfolio overview</span>
              </div>
            </div>

            <div className="dashboard-chart-card">
              <div className="chart-title">
                <strong>Performance Overview</strong>
                <span>1D　1W　1M　1Y</span>
              </div>

              <svg
                className="trading-chart"
                viewBox="0 0 440 150"
                role="img"
                aria-label="Illustrative trading performance chart"
              >
                <defs>
                  <linearGradient
                    id="tradingChartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#36d5dc"
                      stopOpacity=".35"
                    />

                    <stop
                      offset="100%"
                      stopColor="#36d5dc"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {[25, 60, 95, 130].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="440"
                    y2={y}
                    stroke="rgba(255,255,255,.1)"
                  />
                ))}

                <path
                  d="M0 119 L25 102 L47 109 L72 78 L94 90 L117 67 L140 77 L166 49 L190 63 L215 38 L237 52 L260 29 L285 44 L310 22 L336 35 L359 17 L386 26 L412 10 L440 16 L440 150 L0 150 Z"
                  fill="url(#tradingChartGradient)"
                />

                <path
                  d="M0 119 L25 102 L47 109 L72 78 L94 90 L117 67 L140 77 L166 49 L190 63 L215 38 L237 52 L260 29 L285 44 L310 22 L336 35 L359 17 L386 26 L412 10 L440 16"
                  fill="none"
                  stroke="#36d5dc"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="dashboard-watchlist">
              <div className="watchlist-heading">
                <strong>Market Watch</strong>
                <span>Illustrative data</span>
              </div>

              <div className="watchlist-row">
                <span className="watch-symbol euro">€</span>

                <div>
                  <strong>EUR/USD</strong>
                  <small>Euro / US Dollar</small>
                </div>

                <b>1.08492</b>
                <em>+0.42%</em>
              </div>

              <div className="watchlist-row">
                <span className="watch-symbol gold">Au</span>

                <div>
                  <strong>XAU/USD</strong>
                  <small>Gold / US Dollar</small>
                </div>

                <b>2,347.80</b>
                <em>+1.08%</em>
              </div>

              <div className="watchlist-row">
                <span className="watch-symbol nas">N</span>

                <div>
                  <strong>NAS100</strong>
                  <small>Nasdaq 100</small>
                </div>

                <b>18,642.2</b>
                <em className="negative">-0.16%</em>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="dashboard-floating-card floating-top"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="floating-icon">
          <ShieldCheck size={19} />
        </span>

        <span>
          <small>Risk Monitoring</small>
          <strong>Controls active</strong>
        </span>

        <Check size={17} className="floating-check" />
      </motion.div>

      <motion.div
        className="dashboard-floating-card floating-bottom"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="floating-icon purple">
          <Activity size={19} />
        </span>

        <span>
          <small>Platform Modules</small>
          <strong>Connected workspace</strong>
        </span>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({ product }) {
  const Icon = product.icon;

  return (
    <motion.article
      className={`platform-product-card ${product.theme}`}
      variants={fadeUp}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="product-card-top">
        <span className="product-number">
          {product.number}
        </span>

        <div className="product-icon">
          <Icon size={24} />
        </div>
      </div>

      <span className="product-eyebrow">
        {product.eyebrow}
      </span>

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <div className="product-features">
        {product.features.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>

      <a className="product-link" href={product.link}>
        Explore Platform
        <ArrowUpRight size={17} />
      </a>

      <div className="product-decoration" />
    </motion.article>
  );
}

export default function Platforms() {
  return (
    <main className="platforms-page">

      {/* HERO SECTION */}

      <section className="platforms-hero">
        <div className="hero-grid-background" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="platforms-container hero-layout">
          <motion.div
            className="platforms-hero-copy"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="hero-badge"
              variants={fadeUp}
            >
              <span className="badge-dot" />
              FOUR FLAGSHIP PLATFORMS

              <span className="badge-divider" />

              ONE TECHNOLOGY PARTNER
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Trading platforms,
              <br />
              <span>built and branded as yours.</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Complete trading systems — terminal, back office,
              risk engine and reporting — configured for your
              business model and deployed under your brand.
            </motion.p>

            <motion.div
              className="hero-market-tags"
              variants={fadeUp}
            >
              {[
                "Forex",
                "Indian Markets",
                "Prop Firms",
                "Custom Builds",
              ].map((item) => (
                <span key={item}>
                  <Check size={14} />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="hero-buttons"
              variants={fadeUp}
            >
              <a
                href="/contact"
                className="platform-btn platform-btn-primary"
              >
                Book a Free Demo
                <ArrowRight size={17} />
              </a>

              <a
                href="#platform-products"
                className="platform-btn platform-btn-outline"
              >
                Explore Platforms
                <ArrowDownRight size={17} />
              </a>
            </motion.div>

            <motion.div
              className="hero-trust-note"
              variants={fadeUp}
            >
              <ShieldCheck size={16} />

              <span>
                Built around your workflows. Branded for your business.
              </span>
            </motion.div>
          </motion.div>

          <TradingDashboard />
        </div>

        <div className="hero-bottom-strip">
          <div className="platforms-container hero-strip-content">
            <span className="strip-label">PLATFORM ECOSYSTEM</span>

            {[
              "Trading Terminal",
              "Operations",
              "Risk Controls",
              "Reporting",
              "Your Brand",
            ].map((item) => (
              <div key={item}>
                <i />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PRODUCTS */}

      <section
        className="platforms-section products-section"
        id="platform-products"
      >
        <div className="platforms-container">
          <SectionHeading
            eyebrow="OUR PRODUCTS"
            title={
              <>
                Four platforms.
                <br />
                <span>One technology partner.</span>
              </>
            }
            description="Each platform provides a foundation for a different trading business model. Choose the direction that fits your requirements and discuss the configuration with our team."
          />

          <motion.div
            className="platform-products-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.number}
                product={product}
              />
            ))}
          </motion.div>

          <p className="platforms-small-note">
            Final platform scope and integrations depend on your
            requirements, operating model and technical discovery.
          </p>
        </div>
      </section>

      {/* CORE FEATURES */}

      <section className="platforms-section core-section">
        <div className="platforms-container">
          <SectionHeading
            eyebrow="STANDARD IN EVERY BUILD"
            title={
              <>
                The core system ships
                <br />
                <span>with every platform.</span>
              </>
            }
            description="Connect the trading experience with the operational tools behind it. These foundational components help bring trading, client management, risk controls and reporting together."
          />

          <motion.div
            className="core-features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
          >
            {coreFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="core-feature-card"
                  key={feature.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                >
                  <div className="core-feature-top">
                    <span>{feature.number}</span>

                    <div>
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <span className="feature-bottom-line" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* COMPARISON TABLE */}

      <section className="platforms-section comparison-section">
        <div className="platforms-container">
          <SectionHeading
            eyebrow="SIDE-BY-SIDE COMPARISON"
            title={
              <>
                Which platform fits
                <br />
                <span>your business?</span>
              </>
            }
            description="Compare the typical capabilities of each platform family. Final features and integrations must be confirmed during project discovery."
          />

          <motion.div
            className="comparison-wrapper"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="comparison-scroll">
              <table className="platform-comparison-table">
                <thead>
                  <tr>
                    <th>Capability</th>

                    <th>
                      <Globe2 size={17} />
                      Global Trading
                    </th>

                    <th>
                      <Building2 size={17} />
                      Global Prop Firm
                    </th>

                    <th>
                      <Bot size={17} />
                      AI Trading
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <th>{row.feature}</th>

                      <td>{row.global}</td>

                      <td>{row.prop}</td>

                      <td>{row.ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="comparison-bottom">
              <div className="comparison-bottom-icon">
                <Layers3 size={20} />
              </div>

              <div className="comparison-bottom-copy">
                <strong>Not sure which platform you need?</strong>

                <p>
                  Tell us about your business model and we can
                  discuss a suitable starting point.
                </p>
              </div>

              <a href="/contact">
                Talk to Our Team
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ADDITIONAL MODULES */}

      <section className="platforms-section modules-section">
        <div className="platforms-container">
          <SectionHeading
            eyebrow="EXTEND THE CORE"
            title={
              <>
                Add the modules
                <br />
                <span>your model needs.</span>
              </>
            }
            description="Extend the core platform with the additional workflows and integrations your business needs. The final combination can be defined during discovery."
          />

          <motion.div
            className="platform-modules-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {modules.map((module) => {
              const Icon = module.icon;

              return (
                <motion.article
                  className="platform-module-card"
                  key={module.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                >
                  <div className="module-top">
                    <span>{module.number}</span>

                    <div>
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{module.title}</h3>

                  <p>{module.description}</p>

                  <span className="module-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* DEMO SECTION */}

      <section className="platforms-section demo-section">
        <div className="platforms-container">
          <motion.div
            className="demo-panel"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <div className="demo-panel-grid" />

            <div className="demo-panel-content">
              <span className="platforms-eyebrow">
                <span className="eyebrow-line" />
                SEE IT IN ACTION
              </span>

              <h2>
                See the platform
                <br />
                <span>before you commit.</span>
              </h2>

              <p>
                Book a walkthrough to explore the system,
                understand the admin panel and discuss a written
                project scope and timeline around your needs.
              </p>

              <div className="demo-benefits">
                <span>
                  <Check size={15} />
                  Product walkthrough
                </span>

                <span>
                  <Check size={15} />
                  Scope discussion
                </span>

                <span>
                  <Check size={15} />
                  Project timeline
                </span>
              </div>

              <div className="hero-buttons">
                <a
                  href="/contact"
                  className="platform-btn platform-btn-primary"
                >
                  Book a Free Demo
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="platform-btn platform-btn-light"
                >
                  WhatsApp Us
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <small className="demo-note">
                <ShieldCheck size={14} />
                No obligation. No sales pressure.
              </small>
            </div>

            <div className="demo-dashboard-visual">
              <div className="demo-window">
                <div className="demo-window-header">
                  <span />
                  <span />
                  <span />

                  <b>PLATFORM OVERVIEW</b>
                </div>

                <div className="demo-window-body">
                  <aside>
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </aside>

                  <div className="demo-window-main">
                    <div className="demo-placeholder-title">
                      <span />
                      <span />
                    </div>

                    <div className="demo-placeholder-stats">
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className="demo-placeholder-chart">
                      <svg
                        viewBox="0 0 340 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 78 L28 66 L51 72 L76 42 L103 56 L130 31 L157 48 L182 22 L210 37 L236 18 L264 29 L293 10 L340 15"
                          fill="none"
                          stroke="#35d0d6"
                          strokeWidth="2.5"
                        />

                        <path
                          d="M0 78 L28 66 L51 72 L76 42 L103 56 L130 31 L157 48 L182 22 L210 37 L236 18 L264 29 L293 10 L340 15 L340 100 L0 100Z"
                          fill="#35d0d6"
                          opacity=".1"
                        />
                      </svg>
                    </div>

                    <div className="demo-placeholder-rows">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="demo-floating-label"
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <ShieldCheck size={19} />

                <span>
                  <strong>One connected system</strong>

                  <small>
                    Trading · Operations · Reporting
                  </small>
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="platforms-final-cta">
        <div className="platforms-container final-cta-layout">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
            }}
          >
            <span className="platforms-eyebrow">
              <span className="eyebrow-line" />
              LET'S BUILD YOUR PLATFORM
            </span>

            <h2>
              Ready to launch your
              <br />
              <span>trading platform?</span>
            </h2>

            <p>
              Start with a conversation about your market,
              business model and the system you want to build.
            </p>

            <a
              href="/contact"
              className="platform-btn platform-btn-primary"
            >
              Book a Free Demo
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <div className="final-platform-graphic">
            <div className="final-ring ring-one" />
            <div className="final-ring ring-two" />
            <div className="final-ring ring-three" />

            <div className="final-graphic-core">
              <Cpu size={42} />
            </div>

            <span className="final-graphic-node node-one" />
            <span className="final-graphic-node node-two" />
            <span className="final-graphic-node node-three" />
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}

      <section className="platforms-disclaimer">
        <div className="platforms-container disclaimer-layout">
          <ShieldCheck size={19} />

          <p>
            <strong>Important:</strong> Platform scope, integrations,
            market access and operational features depend on the
            agreed project requirements, applicable regulations and
            third-party providers. Technology availability does not
            itself confer regulatory authorisation. Obtain independent
            legal and compliance advice for your business and target
            markets.
          </p>
        </div>
      </section>
    </main>
  );
}