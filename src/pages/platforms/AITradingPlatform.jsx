import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  ChartNoAxesCombined,
  Code2,
  Cpu,
  Database,
  Gauge,
  LineChart,
  Network,
  Play,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  BarChart3,
  Activity,
  Layers3,
  CircleDollarSign,
} from "lucide-react";
import "./AITradingPlatform.css";

const features = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "AI Strategy Builder",
    description:
      "Build and refine trading logic with AI-assisted tools that help translate strategy ideas into structured rules.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Algorithmic Execution",
    description:
      "Deploy live algorithms with configurable order routing, position sizing and execution schedules.",
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Backtesting Engine",
    description:
      "Validate strategies against historical market data and analyse how different rules performed across market conditions.",
  },
  {
    number: "04",
    icon: Play,
    title: "Paper Trading",
    description:
      "Test strategies with simulated orders and live market prices before moving to live execution.",
  },
  {
    number: "05",
    icon: LineChart,
    title: "Signals & Indicators",
    description:
      "Use a library of technical indicators and derived signals as building blocks for automated strategies.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Risk Controls",
    description:
      "Configure exposure limits, drawdown thresholds and automatic shutdown rules for individual strategies.",
  },
  {
    number: "07",
    icon: Layers3,
    title: "Strategy Portfolio",
    description:
      "Operate multiple algorithms together with configurable allocation and portfolio-level monitoring.",
  },
  {
    number: "08",
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Review returns, drawdown, win rate and strategy-level performance to understand how your algorithms behave.",
  },
  {
    number: "09",
    icon: Network,
    title: "Broker & Data Integration",
    description:
      "Connect authorised market-data sources and execution venues according to your business and technical requirements.",
  },
  {
    number: "10",
    icon: Code2,
    title: "API Access",
    description:
      "Extend the platform with your own models, internal tools and custom strategy logic through API integrations.",
  },
];

const adminFeatures = [
  {
    icon: Workflow,
    title: "Strategy Deployment",
    description: "Deploy, pause and roll back strategies from one console.",
  },
  {
    icon: Activity,
    title: "Live Execution Monitoring",
    description: "Monitor positions, order fills and execution latency.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Configuration",
    description: "Set exposure, drawdown and instrument-level limits.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Performance Comparison",
    description: "Compare historical backtests with live strategy results.",
  },
  {
    icon: SlidersHorizontal,
    title: "Access Management",
    description: "Manage users, permissions and API keys.",
  },
  {
    icon: Database,
    title: "Audit Trail",
    description: "Keep a traceable record of important platform actions.",
  },
];

const audiences = [
  {
    icon: TrendingUp,
    title: "Brokerages",
    description:
      "Add automated trading capabilities to an existing brokerage offering.",
  },
  {
    icon: Target,
    title: "Prop Firms",
    description:
      "Build systematic trading products and support algorithm-driven strategies.",
  },
  {
    icon: Cpu,
    title: "Fintech Founders",
    description:
      "Launch a branded algorithmic trading product with a custom technology layer.",
  },
  {
    icon: Gauge,
    title: "Trading Desks",
    description:
      "Move selected manual trading workflows into monitored automated execution.",
  },
];

const faqs = [
  {
    question: "Do we need our own quantitative research team?",
    answer:
      "Not necessarily. An AI-assisted strategy builder can help structure strategy logic. The exact capabilities depend on the scope agreed for your platform, and strategies still need proper validation.",
  },
  {
    question: "Can we integrate our own AI models?",
    answer:
      "Yes. Custom models and internal systems can be considered through API integrations, subject to the agreed architecture and technical requirements.",
  },
  {
    question: "Can we test strategies before going live?",
    answer:
      "Yes. The platform scope can include historical backtesting and paper trading so strategies can be evaluated before live execution.",
  },
  {
    question: "Which brokers and market-data providers can be connected?",
    answer:
      "The execution venue and data providers are agreed during project scoping, based on technical compatibility and the relevant authorisations.",
  },
  {
    question: "Does AI guarantee profitable trading?",
    answer:
      "No. AI, automation and backtesting cannot guarantee profits or eliminate market risk. Strategies can lose money, and appropriate risk controls remain essential.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="ai-section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="ai-eyebrow">
        <Sparkles size={15} />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function StrategyDashboard() {
  const bars = [30, 44, 37, 55, 47, 66, 53, 73, 62, 82, 68, 91];

  return (
    <motion.div
      className="ai-dashboard"
      initial={{ opacity: 0, scale: 0.94, x: 25 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      <div className="ai-dashboard-glow" />

      <div className="ai-dashboard-top">
        <div className="ai-dashboard-brand">
          <span className="ai-dashboard-brand-icon">
            <BrainCircuit size={19} />
          </span>
          <div>
            <strong>Strategy Engine</strong>
            <small>Algorithm workspace</small>
          </div>
        </div>

        <span className="ai-live-status">
          <span />
          SYSTEM READY
        </span>
      </div>

      <div className="ai-dashboard-metrics">
        <div className="ai-metric-card">
          <span>Active Strategies</span>
          <strong>08</strong>
          <small>
            <Activity size={13} /> Monitoring enabled
          </small>
        </div>

        <div className="ai-metric-card">
          <span>Risk Status</span>
          <strong className="ai-risk-value">Controlled</strong>
          <small>
            <ShieldCheck size={13} /> Limits configured
          </small>
        </div>
      </div>

      <div className="ai-chart-panel">
        <div className="ai-chart-header">
          <div>
            <span>Strategy Performance</span>
            <strong>Execution overview</strong>
          </div>
          <span className="ai-chart-label">ILLUSTRATIVE</span>
        </div>

        <div className="ai-chart">
          <div className="ai-chart-grid">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="ai-chart-bars">
            {bars.map((height, index) => (
              <motion.div
                className="ai-chart-bar"
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.045,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="ai-chart-legend">
          <span>
            <i className="ai-legend-dot" />
            Strategy activity
          </span>
          <span>Sample visualisation</span>
        </div>
      </div>

      <div className="ai-dashboard-bottom">
        <div className="ai-engine-icon">
          <Cpu size={19} />
        </div>
        <div>
          <strong>Execution engine</strong>
          <span>Strategy monitoring enabled</span>
        </div>
        <CheckCircle2 size={20} className="ai-engine-check" />
      </div>

      <motion.div
        className="ai-floating-card ai-floating-card-one"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="ai-floating-icon">
          <BrainCircuit size={17} />
        </span>
        <div>
          <strong>AI Strategy</strong>
          <small>Logic workspace</small>
        </div>
      </motion.div>

      <motion.div
        className="ai-floating-card ai-floating-card-two"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="ai-floating-icon ai-floating-icon-cyan">
          <ShieldCheck size={17} />
        </span>
        <div>
          <strong>Risk Controls</strong>
          <small>Rules configured</small>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AITradingPlatform() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="ai-trading-page">
      {/* HERO */}
      <section className="ai-hero">
        <div className="ai-hero-orb ai-hero-orb-one" />
        <div className="ai-hero-orb ai-hero-orb-two" />
        <div className="ai-hero-rays" />

        <div className="ai-container ai-hero-layout">
          <motion.div
            className="ai-hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.div className="ai-hero-badge" variants={fadeUp}>
              <span className="ai-badge-pulse" />
              AI-POWERED TRADING TECHNOLOGY
            </motion.div>

            <motion.h1 variants={fadeUp}>
              AI Trading Platform
              <span>Strategies That Run Themselves</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              We build the AI strategy layer and algorithmic engine that
              executes it — researched, backtested and deployed under your own
              brand.
            </motion.p>

            <motion.div className="ai-hero-actions" variants={fadeUp}>
              <Link to="/contact" className="ai-btn ai-btn-primary">
                Request a Demo <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="ai-btn ai-btn-secondary">
                Talk to an Expert
              </Link>
            </motion.div>

            <motion.div className="ai-hero-tags" variants={fadeUp}>
              <span>
                <BrainCircuit size={15} /> AI Strategy Builder
              </span>
              <span>
                <Zap size={15} /> Algo Trading
              </span>
              <span>
                <ChartNoAxesCombined size={15} /> Backtesting
              </span>
            </motion.div>
          </motion.div>

          <div className="ai-hero-visual">
            <StrategyDashboard />
          </div>
        </div>

        <div className="ai-hero-bottom-line" />
      </section>

      {/* OVERVIEW */}
      <section className="ai-overview section-padding">
        <div className="ai-container ai-overview-layout">
          <motion.div
            className="ai-overview-visual"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="ai-workflow-card">
              <div className="ai-workflow-heading">
                <div className="ai-workflow-icon">
                  <Workflow size={21} />
                </div>
                <div>
                  <strong>From Idea to Execution</strong>
                  <span>A connected strategy workflow</span>
                </div>
              </div>

              <div className="ai-workflow-steps">
                <div className="ai-workflow-step">
                  <span className="ai-step-number">01</span>
                  <span className="ai-step-icon">
                    <BrainCircuit size={20} />
                  </span>
                  <div>
                    <strong>Define Strategy</strong>
                    <small>Rules and trading logic</small>
                  </div>
                  <CheckCircle2 size={18} />
                </div>

                <div className="ai-workflow-connector" />

                <div className="ai-workflow-step">
                  <span className="ai-step-number">02</span>
                  <span className="ai-step-icon">
                    <ChartNoAxesCombined size={20} />
                  </span>
                  <div>
                    <strong>Backtest & Validate</strong>
                    <small>Historical performance analysis</small>
                  </div>
                  <CheckCircle2 size={18} />
                </div>

                <div className="ai-workflow-connector" />

                <div className="ai-workflow-step">
                  <span className="ai-step-number">03</span>
                  <span className="ai-step-icon">
                    <Play size={20} />
                  </span>
                  <div>
                    <strong>Paper Trade</strong>
                    <small>Simulated execution</small>
                  </div>
                  <CheckCircle2 size={18} />
                </div>

                <div className="ai-workflow-connector" />

                <div className="ai-workflow-step">
                  <span className="ai-step-number">04</span>
                  <span className="ai-step-icon">
                    <Zap size={20} />
                  </span>
                  <div>
                    <strong>Deploy & Monitor</strong>
                    <small>Controlled live execution</small>
                  </div>
                  <CheckCircle2 size={18} />
                </div>
              </div>

              <div className="ai-workflow-note">
                <ShieldCheck size={17} />
                Risk controls can be configured throughout the workflow.
              </div>
            </div>
          </motion.div>

          <div className="ai-overview-content">
            <span className="ai-eyebrow">
              <Sparkles size={15} /> THE PLATFORM
            </span>

            <h2>From Strategy Idea to Live Algorithm</h2>

            <p>
              A trading strategy needs more than a promising idea. It needs
              clear rules, historical validation, reliable execution and
              continuous monitoring.
            </p>

            <p>
              Our AI Trading Platform brings these building blocks together
              into a technology layer that can be configured and branded for
              your business.
            </p>

            <div className="ai-overview-points">
              <div>
                <span>
                  <CheckCircle2 size={17} />
                </span>
                AI-assisted strategy development
              </div>
              <div>
                <span>
                  <CheckCircle2 size={17} />
                </span>
                Historical validation and paper trading
              </div>
              <div>
                <span>
                  <CheckCircle2 size={17} />
                </span>
                Automated execution and risk monitoring
              </div>
            </div>

            <Link to="/contact" className="ai-text-link">
              Discuss Your Requirements <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="ai-features section-padding">
        <div className="ai-container">
          <SectionHeading
            eyebrow="PLATFORM CAPABILITIES"
            title="Everything Your AI Trading Business Needs"
            description="A connected set of tools for building, testing, deploying and monitoring algorithmic trading strategies."
          />

          <div className="ai-features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="ai-feature-card"
                  key={feature.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="ai-feature-card-top">
                    <span className="ai-feature-icon">
                      <Icon size={23} />
                    </span>
                    <span className="ai-feature-number">
                      {feature.number}
                    </span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="ai-feature-card-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMIN PANEL */}
      <section className="ai-admin section-padding">
        <div className="ai-container">
          <div className="ai-admin-heading">
            <SectionHeading
              eyebrow="ADMIN & BACK OFFICE"
              title="Operate the Engine From One Console"
              description="Give your team a central workspace to manage strategies, monitor execution and maintain control over the trading environment."
            />
          </div>

          <div className="ai-admin-layout">
            <motion.div
              className="ai-admin-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <div className="ai-admin-window">
                <div className="ai-admin-window-top">
                  <div className="ai-window-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>ADMIN CONTROL CENTER</span>
                </div>

                <div className="ai-admin-window-body">
                  <aside className="ai-admin-sidebar">
                    <div className="ai-sidebar-logo">
                      <BrainCircuit size={20} />
                    </div>
                    <span className="active">
                      <Gauge size={17} />
                    </span>
                    <span>
                      <Layers3 size={17} />
                    </span>
                    <span>
                      <Activity size={17} />
                    </span>
                    <span>
                      <ShieldCheck size={17} />
                    </span>
                  </aside>

                  <div className="ai-admin-main">
                    <div className="ai-admin-welcome">
                      <div>
                        <small>WORKSPACE OVERVIEW</small>
                        <strong>Strategy Control</strong>
                      </div>
                      <span>
                        <span className="ai-badge-pulse" /> Connected
                      </span>
                    </div>

                    <div className="ai-admin-summary">
                      <div>
                        <small>Strategy Groups</small>
                        <strong>04</strong>
                      </div>
                      <div>
                        <small>Risk Profiles</small>
                        <strong>06</strong>
                      </div>
                    </div>

                    <div className="ai-admin-list">
                      <div className="ai-admin-list-heading">
                        <strong>Strategy workspace</strong>
                        <span>Status</span>
                      </div>

                      {[
                        ["Momentum Model", "Configured"],
                        ["Mean Reversion", "Configured"],
                        ["Portfolio Engine", "Monitoring"],
                      ].map((item) => (
                        <div className="ai-admin-list-row" key={item[0]}>
                          <span className="ai-admin-row-icon">
                            <CircleDollarSign size={16} />
                          </span>
                          <strong>{item[0]}</strong>
                          <span className="ai-admin-row-status">
                            <i />
                            {item[1]}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="ai-admin-footnote">
                      <ShieldCheck size={15} />
                      Illustrative interface — not live trading data.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="ai-admin-features">
              {adminFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="ai-admin-feature"
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <span className="ai-admin-feature-icon">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="ai-audience section-padding">
        <div className="ai-container">
          <SectionHeading
            eyebrow="WHO IT'S FOR"
            title="Built for Businesses Moving Into Automation"
            description="A configurable technology foundation for different trading business models."
          />

          <div className="ai-audience-grid">
            {audiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="ai-audience-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <span className="ai-audience-icon">
                    <Icon size={25} />
                  </span>
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
      <section className="ai-faq section-padding">
        <div className="ai-container ai-faq-layout">
          <div className="ai-faq-intro">
            <span className="ai-eyebrow">
              <Sparkles size={15} /> FAQ
            </span>

            <h2>Questions About AI Trading Technology?</h2>

            <p>
              Understand the technology, integration options and important
              considerations before building your platform.
            </p>

            <Link to="/contact" className="ai-btn ai-btn-primary">
              Ask Our Team <ArrowRight size={17} />
            </Link>
          </div>

          <div className="ai-faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`ai-faq-item ${
                  openFaq === index ? "ai-faq-open" : ""
                }`}
                key={faq.question}
              >
                <button
                  className="ai-faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={19} />
                </button>

                <div className="ai-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO CTA */}
      <section className="ai-demo section-padding">
        <div className="ai-container">
          <motion.div
            className="ai-demo-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div className="ai-demo-glow" />

            <div className="ai-demo-content">
              <span className="ai-eyebrow">
                <Sparkles size={15} /> LET'S BUILD YOUR PLATFORM
              </span>

              <h2>Build Your AI Trading Platform</h2>

              <p>
                Tell us about your strategies, markets, integrations and
                business model. We'll discuss the technical scope and a
                practical path forward.
              </p>

              <div className="ai-demo-actions">
                <Link to="/contact" className="ai-btn ai-btn-primary">
                  Book a Demo <ArrowRight size={18} />
                </Link>

                <Link
                  to="/platforms"
                  className="ai-btn ai-btn-secondary"
                >
                  Explore All Platforms
                </Link>
              </div>

              <span className="ai-demo-note">
                <CheckCircle2 size={15} />
                No obligation. No sales pressure.
              </span>
            </div>

            <div className="ai-demo-art">
              <motion.div
                className="ai-demo-orbit ai-demo-orbit-one"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="ai-demo-orbit ai-demo-orbit-two"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 32,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="ai-demo-core">
                <BrainCircuit size={48} />
              </div>

              <span className="ai-demo-node ai-demo-node-one">
                <Zap size={20} />
              </span>
              <span className="ai-demo-node ai-demo-node-two">
                <LineChart size={20} />
              </span>
              <span className="ai-demo-node ai-demo-node-three">
                <ShieldCheck size={20} />
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="ai-disclaimer">
        <div className="ai-container ai-disclaimer-inner">
          <ShieldCheck size={20} />

          <div>
            <strong>Technology & Risk Disclaimer</strong>
            <p>
              SetupFX provides software development and trading technology.
              AI strategies and automated execution do not guarantee profits
              and involve market risk. The platform does not replace
              appropriate authorisations, compliance obligations or
              independent financial and legal advice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}