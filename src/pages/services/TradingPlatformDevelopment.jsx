import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Layers3,
  LineChart,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./TradingPlatformDevelopment.css";

const capabilities = [
  {
    number: "01",
    icon: LineChart,
    title: "Trading Terminal",
    description:
      "Trading interfaces designed around your instruments, workflows and business requirements.",
    points: [
      "Trading interface development",
      "Instrument-specific workflows",
      "User-focused interface design",
    ],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Back-Office Systems",
    description:
      "Administrative interfaces and operational systems designed to support your trading business.",
    points: [
      "Administrative workflows",
      "Operational management",
      "Business-specific configuration",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Risk Management Systems",
    description:
      "Technology designed to support risk-related controls and the operational needs of trading businesses.",
    points: [
      "Configurable trading rules",
      "Risk-related workflows",
      "Operational visibility",
    ],
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "Understand your business model, markets, instruments and technical requirements.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Planning & Configuration",
    description:
      "Define the platform structure, required functionality and project scope.",
    icon: Settings2,
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Build the agreed functionality and connect the required systems.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Validation",
    description:
      "Test functionality and workflows before the platform is released.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Deployment & Support",
    description:
      "Prepare the platform for launch and plan the ongoing technical support.",
    icon: Zap,
  },
];

const benefits = [
  {
    icon: Settings2,
    title: "Built Around Your Requirements",
    description:
      "Define the functionality and workflows your business actually needs.",
  },
  {
    icon: Workflow,
    title: "Connected Workflows",
    description:
      "Plan the systems and integrations needed to support your platform.",
  },
  {
    icon: BarChart3,
    title: "Operational Visibility",
    description:
      "Design interfaces that help teams understand relevant trading operations.",
  },
  {
    icon: Code2,
    title: "Purpose-Built Technology",
    description:
      "Develop a solution around an agreed technical scope instead of unnecessary features.",
  },
];

function TradingPlatformDevelopment() {
  return (
    <main className="tpd-page">
      {/* HERO */}
      <section className="tpd-hero">
        <div className="tpd-hero-glow tpd-hero-glow-one" />
        <div className="tpd-hero-glow tpd-hero-glow-two" />

        <div className="tpd-container tpd-hero-grid">
          <motion.div
            className="tpd-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="tpd-eyebrow">
              <span className="tpd-eyebrow-dot" />
              TRADING PLATFORM DEVELOPMENT
            </div>

            <h1>
              Trading Platforms
              <br />
              Built Around
              <br />
              <span>Your Business.</span>
            </h1>

            <p className="tpd-hero-description">
              Trading technology designed around your business
              model, trading workflows and operational
              requirements.
            </p>

            <div className="tpd-hero-actions">
              <Link to="/contact" className="tpd-button-primary">
                Discuss Your Project
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#tpd-capabilities"
                className="tpd-button-secondary"
              >
                Explore Development
                <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="tpd-hero-note">
              <CheckCircle2 size={17} />
              <span>
                Defined scope. Purpose-built technology.
              </span>
            </div>
          </motion.div>

          {/* Trading dashboard visual */}
          <motion.div
            className="tpd-dashboard-wrap"
            initial={{ opacity: 0, scale: 0.94, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <div className="tpd-dashboard-orbit tpd-orbit-one" />
            <div className="tpd-dashboard-orbit tpd-orbit-two" />

            <div className="tpd-dashboard">
              <div className="tpd-dashboard-topbar">
                <div className="tpd-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="tpd-dashboard-label">
                  TRADING TERMINAL
                </span>

                <div className="tpd-live-indicator">
                  <span />
                  LIVE UI
                </div>
              </div>

              <div className="tpd-dashboard-body">
                <div className="tpd-dashboard-heading">
                  <div>
                    <span className="tpd-muted-label">
                      PORTFOLIO OVERVIEW
                    </span>
                    <h3>Market Dashboard</h3>
                  </div>

                  <div className="tpd-chart-icon">
                    <LineChart size={19} />
                  </div>
                </div>

                <div className="tpd-market-summary">
                  <div className="tpd-market-card">
                    <span>EUR / USD</span>
                    <strong>1.0842</strong>
                    <small>+0.42%</small>
                  </div>

                  <div className="tpd-market-card">
                    <span>GBP / USD</span>
                    <strong>1.2718</strong>
                    <small>+0.28%</small>
                  </div>

                  <div className="tpd-market-card">
                    <span>USD / JPY</span>
                    <strong>149.62</strong>
                    <small>+0.16%</small>
                  </div>
                </div>

                <div className="tpd-chart-panel">
                  <div className="tpd-chart-heading">
                    <div>
                      <span className="tpd-muted-label">
                        MARKET ACTIVITY
                      </span>
                      <h4>Price Movement</h4>
                    </div>

                    <span className="tpd-chart-period">
                      1D
                    </span>
                  </div>

                  <div className="tpd-chart">
                    <div className="tpd-chart-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <svg
                      viewBox="0 0 500 180"
                      preserveAspectRatio="none"
                      role="img"
                      aria-label="Illustrative trading price chart"
                    >
                      <defs>
                        <linearGradient
                          id="tpdChartFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#28b8e8"
                            stopOpacity="0.25"
                          />
                          <stop
                            offset="100%"
                            stopColor="#28b8e8"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0,145 C25,130 30,145 55,115 S90,125 110,95 S145,120 170,82 S205,105 225,70 S255,95 280,62 S315,85 340,45 S375,72 395,42 S435,55 455,24 S480,36 500,12 L500,180 L0,180 Z"
                        fill="url(#tpdChartFill)"
                      />

                      <path
                        d="M0,145 C25,130 30,145 55,115 S90,125 110,95 S145,120 170,82 S205,105 225,70 S255,95 280,62 S315,85 340,45 S375,72 395,42 S435,55 455,24 S480,36 500,12"
                        fill="none"
                        stroke="#169fd4"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="tpd-chart-axis">
                    <span>09:00</span>
                    <span>11:00</span>
                    <span>13:00</span>
                    <span>15:00</span>
                    <span>17:00</span>
                  </div>
                </div>

                <div className="tpd-dashboard-bottom">
                  <div className="tpd-bottom-icon">
                    <Layers3 size={17} />
                  </div>

                  <div>
                    <strong>Platform Architecture</strong>
                    <span>Configured for your workflow</span>
                  </div>

                  <CheckCircle2
                    className="tpd-bottom-check"
                    size={19}
                  />
                </div>
              </div>
            </div>

            <motion.div
              className="tpd-floating-badge tpd-badge-top"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="tpd-floating-icon">
                <Code2 size={18} />
              </div>
              <div>
                <strong>Custom Development</strong>
                <span>Built to your scope</span>
              </div>
            </motion.div>

            <motion.div
              className="tpd-floating-badge tpd-badge-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="tpd-floating-icon tpd-floating-icon-cyan">
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong>Testing & Validation</strong>
                <span>Before deployment</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <a
          href="#tpd-overview"
          className="tpd-scroll-cue"
          aria-label="Scroll to overview"
        >
          <span />
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* OVERVIEW */}
      <section className="tpd-overview" id="tpd-overview">
        <div className="tpd-container tpd-overview-grid">
          <motion.div
            className="tpd-section-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tpd-section-kicker">
              WHAT WE BUILD
            </span>

            <h2>
              Development Services
              <br />
              <span>Beyond the Platform.</span>
            </h2>
          </motion.div>

          <motion.div
            className="tpd-overview-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              When your business model needs something our
              standard products do not cover, we build around
              your requirements.
            </p>

            <p>
              From the initial technical scope to integration,
              testing and deployment, the objective is to create
              technology that supports your actual business
              workflows.
            </p>

            <Link to="/contact" className="tpd-text-link">
              Discuss your requirements
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        className="tpd-capabilities"
        id="tpd-capabilities"
      >
        <div className="tpd-container">
          <motion.div
            className="tpd-centered-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tpd-section-kicker">
              DEVELOPMENT CAPABILITIES
            </span>

            <h2>
              Technology Designed
              <br />
              <span>Around Your Operations</span>
            </h2>

            <p>
              A closer look at the technology components that
              can form part of your agreed development scope.
            </p>
          </motion.div>

          <div className="tpd-capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="tpd-capability-card"
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                >
                  <div className="tpd-card-top">
                    <div className="tpd-capability-icon">
                      <Icon size={23} />
                    </div>

                    <span>{item.number}</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="tpd-card-divider" />

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="tpd-card-link"
                  >
                    Discuss this requirement
                    <ArrowUpRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="tpd-process">
        <div className="tpd-container">
          <motion.div
            className="tpd-centered-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tpd-section-kicker">
              OUR APPROACH
            </span>

            <h2>
              From Requirement
              <br />
              <span>to Live Platform</span>
            </h2>

            <p>
              A structured process that keeps scope,
              development and testing aligned.
            </p>
          </motion.div>

          <div className="tpd-timeline">
            {developmentSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="tpd-timeline-item"
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="tpd-timeline-marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="tpd-timeline-card">
                    <div className="tpd-timeline-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <span className="tpd-timeline-step">
                        STEP {step.number}
                      </span>

                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="tpd-benefits">
        <div className="tpd-container">
          <div className="tpd-benefits-heading">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="tpd-section-kicker">
                BUILT WITH PURPOSE
              </span>

              <h2>
                The Right Technology
                <br />
                <span>Starts With Your Needs.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
            >
              A clear technical scope helps align the platform
              with your workflows, integrations and operational
              priorities.
            </motion.p>
          </div>

          <div className="tpd-benefit-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  className="tpd-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="tpd-benefit-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tpd-cta-section">
        <div className="tpd-container">
          <motion.div
            className="tpd-cta-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="tpd-cta-glow" />

            <div className="tpd-cta-content">
              <span className="tpd-cta-kicker">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's Discuss Your
                <br />
                Trading Platform.
              </h2>

              <p>
                Tell us what you want to build. We can discuss
                your requirements, technical scope and the next
                steps for your project.
              </p>

              <Link
                to="/contact"
                className="tpd-button-primary"
              >
                Request a Proposal
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="tpd-cta-decoration">
              <div className="tpd-cta-circle tpd-cta-circle-one" />
              <div className="tpd-cta-circle tpd-cta-circle-two" />

              <div className="tpd-cta-symbol">
                <Code2 size={70} strokeWidth={1.1} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default TradingPlatformDevelopment;