import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Smartphone,
  Workflow,
  Palette,
  ShieldCheck,
  Search,
  Pencil,
  Rocket,
  FileCheck2,
  WalletCards,
  Fingerprint,
  Database,
  BarChart3,
  Users,
  Mail,
  PieChart,
  Link2,
  CheckCircle2,
  Headphones,
  Settings2,
  Globe2,
  Sparkles,
  MessageSquare,
  Clock3,
  MonitorSmartphone,
  CircleCheck,
  Zap,
} from "lucide-react";

import "./Services.css";

/* ==========================================
   ANIMATION VARIANTS
========================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
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

/* ==========================================
   SERVICES DATA
========================================== */

const services = [
  {
    number: "01",
    title: "Custom Trading Software",
    description:
      "Purpose-built systems designed around your instruments, workflows and revenue model.",
    icon: Code2,
    color: "cyan",
    features: [
      "Custom trading workflows",
      "Business-specific functionality",
      "Scalable architecture",
    ],
    link: "/contact",
  },
  {
    number: "02",
    title: "White-label Deployment",
    description:
      "Complete branding, configuration and launch of any of our four platforms under your identity.",
    icon: Layers3,
    color: "blue",
    features: [
      "Your brand identity",
      "Platform configuration",
      "Launch assistance",
    ],
    link: "/services/white-label-solutions",
  },
  {
    number: "03",
    title: "Mobile App Development",
    description:
      "Native Android and iOS trading apps, built for performance and published under your accounts.",
    icon: Smartphone,
    color: "purple",
    features: [
      "Android applications",
      "iOS applications",
      "Mobile-first experiences",
    ],
    link: "/contact",
  },
  {
    number: "04",
    title: "API & Third-party Integration",
    description:
      "Liquidity feeds, market data, payment gateways, KYC providers, CRM systems and internal tools.",
    icon: Workflow,
    color: "blue",
    features: [
      "Third-party APIs",
      "Payment integrations",
      "Trading infrastructure",
    ],
    link: "/services/integration-services",
  },
  {
    number: "05",
    title: "UI/UX for Trading Products",
    description:
      "Interfaces designed for dense data and fast decisions. Tested with traders, not just designers.",
    icon: Palette,
    color: "cyan",
    features: [
      "Trading-focused interfaces",
      "Intuitive user journeys",
      "Responsive layouts",
    ],
    link: "/contact",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description:
      "Uptime monitoring, issue resolution, security updates and scheduled feature releases.",
    icon: ShieldCheck,
    color: "purple",
    features: [
      "Technical assistance",
      "Security updates",
      "Ongoing maintenance",
    ],
    link: "/services/maintenance-support",
  },
];

/* ==========================================
   PROCESS DATA
========================================== */

const processSteps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We map your business model, markets, instruments and revenue structure, then turn it into a technical scope.",
    icon: Search,
  },
  {
    number: "02",
    title: "Branding & Configuration",
    description:
      "Your identity applied across terminal, admin, apps and emails. Trading rules and commercials configured.",
    icon: Pencil,
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Core build plus payment, KYC, liquidity and CRM connections. Progress demos, not silence.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & UAT",
    description:
      "Functional testing, load testing and a full acceptance round with your team before any real client sees it.",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Go Live & Support",
    description:
      "Deployment, staff training, documentation handover — then continuous monitoring and support.",
    icon: Rocket,
  },
];

/* ==========================================
   INTEGRATION DATA
========================================== */

const integrations = [
  {
    number: "01",
    title: "Payment gateways",
    description: "Seamless and secure payment integrations.",
    icon: WalletCards,
    color: "cyan",
  },
  {
    number: "02",
    title: "KYC & AML providers",
    description: "Verified identity and compliance integrations.",
    icon: Fingerprint,
    color: "purple",
  },
  {
    number: "03",
    title: "Liquidity providers",
    description: "Deep liquidity connectivity across global markets.",
    icon: Database,
    color: "blue",
  },
  {
    number: "04",
    title: "Market data feeds",
    description: "Real-time and historical market data.",
    icon: BarChart3,
    color: "cyan",
  },
  {
    number: "05",
    title: "CRM systems",
    description: "Customer and sales workflow integrations.",
    icon: Users,
    color: "purple",
  },
  {
    number: "06",
    title: "SMS & email services",
    description: "Transactional and notification services.",
    icon: Mail,
    color: "blue",
  },
  {
    number: "07",
    title: "Analytics tools",
    description: "Reporting, analytics and business intelligence.",
    icon: PieChart,
    color: "cyan",
  },
  {
    number: "08",
    title: "Custom APIs",
    description: "Integration with your preferred tools and systems.",
    icon: Link2,
    color: "purple",
  },
];

/* ==========================================
   HERO VISUAL
========================================== */

function ServicesHeroVisual() {
  return (
    <motion.div
      className="services-hero-visual"
      initial={{ opacity: 0, x: 35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.85, delay: 0.15 }}
    >
      <div className="services-visual-orb services-visual-orb-one" />
      <div className="services-visual-orb services-visual-orb-two" />

      <div className="services-floating-tag services-tag-top">
        <span className="services-tag-icon">
          <ShieldCheck size={17} />
        </span>

        <span>
          <strong>Enterprise Security</strong>
          <small>Security-focused architecture</small>
        </span>
      </div>

      <div className="services-device-stage">
        <div className="services-phone">
          <div className="services-phone-camera" />

          <div className="services-phone-screen">
            <div className="services-device-brand">
              <span className="services-brand-dot" />
              SetupFX
            </div>

            <div className="services-device-small-label">
              Portfolio balance
            </div>

            <div className="services-device-small-value">
              $24,680.50
            </div>

            <div className="services-phone-chart">
              <svg viewBox="0 0 160 90" role="img" aria-label="Illustrative trading chart">
                <defs>
                  <linearGradient
                    id="servicesPhoneChartFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#28cbd4" stopOpacity=".3" />
                    <stop offset="100%" stopColor="#28cbd4" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 68 L18 58 L31 63 L45 40 L60 48 L76 30 L91 37 L107 19 L120 27 L138 12 L160 17 L160 90 L0 90 Z"
                  fill="url(#servicesPhoneChartFill)"
                />

                <path
                  d="M0 68 L18 58 L31 63 L45 40 L60 48 L76 30 L91 37 L107 19 L120 27 L138 12 L160 17"
                  fill="none"
                  stroke="#28cbd4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="services-phone-stats">
              <span>Market</span>
              <span>Live data</span>
            </div>

            <div className="services-phone-list">
              <div>
                <span className="services-market-dot" />
                EUR/USD
                <strong>1.0842</strong>
              </div>

              <div>
                <span className="services-market-dot market-dot-blue" />
                GBP/USD
                <strong>1.2638</strong>
              </div>

              <div>
                <span className="services-market-dot market-dot-purple" />
                USD/JPY
                <strong>149.62</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="services-laptop">
          <div className="services-laptop-screen">
            <div className="services-laptop-topbar">
              <div className="services-device-brand">
                <span className="services-brand-dot" />
                SetupFX
              </div>

              <div className="services-laptop-menu">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="services-laptop-body">
              <aside className="services-laptop-sidebar">
                <span className="sidebar-active" />
                <span />
                <span />
                <span />
                <span />
              </aside>

              <div className="services-laptop-content">
                <div className="services-laptop-heading">
                  <div>
                    <small>TRADING OVERVIEW</small>
                    <h3>Market Dashboard</h3>
                  </div>

                  <span className="services-live-badge">
                    <i />
                    Live
                  </span>
                </div>

                <div className="services-chart-panel">
                  <div className="services-chart-header">
                    <div>
                      <small>EUR/USD</small>
                      <strong>1.08425</strong>
                    </div>

                    <span>+2.48%</span>
                  </div>

                  <div className="services-large-chart">
                    <div className="services-chart-grid">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <svg
                      viewBox="0 0 440 150"
                      preserveAspectRatio="none"
                      role="img"
                      aria-label="Illustrative trading dashboard chart"
                    >
                      <defs>
                        <linearGradient
                          id="servicesLargeChartFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#28cbd4"
                            stopOpacity=".2"
                          />

                          <stop
                            offset="100%"
                            stopColor="#28cbd4"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 123 L20 115 L39 119 L56 91 L74 101 L91 77 L112 85 L129 62 L149 73 L167 55 L185 63 L205 36 L224 49 L241 26 L259 39 L280 21 L301 34 L322 14 L342 28 L362 17 L381 29 L400 8 L420 17 L440 4 L440 150 L0 150 Z"
                        fill="url(#servicesLargeChartFill)"
                      />

                      <path
                        d="M0 123 L20 115 L39 119 L56 91 L74 101 L91 77 L112 85 L129 62 L149 73 L167 55 L185 63 L205 36 L224 49 L241 26 L259 39 L280 21 L301 34 L322 14 L342 28 L362 17 L381 29 L400 8 L420 17 L440 4"
                        fill="none"
                        stroke="#28cbd4"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="services-chart-axis">
                    <span>09:00</span>
                    <span>11:00</span>
                    <span>13:00</span>
                    <span>15:00</span>
                    <span>17:00</span>
                  </div>
                </div>

                <div className="services-dashboard-bottom">
                  <div>
                    <small>Open positions</small>
                    <strong>24</strong>
                  </div>

                  <div>
                    <small>Active users</small>
                    <strong>1,284</strong>
                  </div>

                  <div>
                    <small>System status</small>
                    <strong className="services-status-text">
                      Operational
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-laptop-base" />
        </div>
      </div>

      <div className="services-floating-tag services-tag-bottom">
        <span className="services-tag-icon">
          <Zap size={17} />
        </span>

        <span>
          <strong>Built to scale</strong>
          <small>Flexible trading technology</small>
        </span>
      </div>

      <div className="services-visual-caption">
        <span />
        Trading technology tailored to your business
      </div>
    </motion.div>
  );
}

/* ==========================================
   HERO SECTION
========================================== */

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-grid-bg" />

      <div className="services-hero-glow services-glow-left" />
      <div className="services-hero-glow services-glow-right" />

      <div className="services-container services-hero-container">
        <div className="services-hero-copy">
          <motion.div
            className="services-eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="services-eyebrow-line" />
            WHAT WE BUILD
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Development services
            <span>beyond the platform.</span>
          </motion.h1>

          <motion.p
            className="services-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            When your business model needs something our standard products
            don&apos;t cover, we build it.
          </motion.p>

          <motion.div
            className="services-hero-tags"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              "Custom development",
              "White-label",
              "Mobile apps",
              "Integrations",
              "Support",
            ].map((tag) => (
              <span className="services-hero-tag" key={tag}>
                <CheckCircle2 size={14} />
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="services-hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="services-btn services-btn-primary">
              Request a Proposal
              <ArrowRight size={17} />
            </Link>

            <Link to="/contact" className="services-btn services-btn-outline">
              <MessageSquare size={16} />
              Book a Call
            </Link>
          </motion.div>

          <motion.div
            className="services-hero-trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div className="services-trust-icon">
              <ShieldCheck size={18} />
            </div>

            <div>
              <strong>Technology built around your business</strong>
              <span>From initial scope to ongoing support</span>
            </div>
          </motion.div>
        </div>

        <ServicesHeroVisual />
      </div>

      <div className="services-hero-bottom-line" />
    </section>
  );
}

/* ==========================================
   SECTION HEADING
========================================== */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <motion.div
      className={`services-section-heading ${
        centered ? "services-heading-centered" : ""
      }`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="services-eyebrow">
        <span className="services-eyebrow-line" />
        {eyebrow}
      </div>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

/* ==========================================
   SERVICES OVERVIEW
========================================== */

function ServicesOverview() {
  return (
    <section className="services-overview section-padding" id="our-services">
      <div className="services-container">
        <div className="services-overview-top">
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Six things we deliver well"
          />

          <motion.p
            className="services-overview-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            From custom development to long-term support, we help brokers,
            prop firms and trading businesses build, launch and scale with
            confidence.
          </motion.p>
        </div>

        <motion.div
          className="services-cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="services-card"
                key={service.number}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
              >
                <div className="services-card-top">
                  <div
                    className={`services-card-icon icon-${service.color}`}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <span className="services-card-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="services-card-features">
                  {service.features.map((feature) => (
                    <span key={feature}>
                      <CircleCheck size={14} />
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.link}
                  className="services-card-link"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>

                <div className="services-card-decoration" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================
   PROCESS SECTION
========================================== */

function DevelopmentProcess() {
  return (
    <section className="services-process section-padding" id="our-process">
      <div className="services-container">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="From requirement to live platform in five steps"
          description="A clear, structured process that keeps your project on track, from initial discussions to post-launch support."
        />

        <div className="services-process-track">
          <div className="services-process-line">
            <motion.div
              className="services-process-line-progress"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            />
          </div>

          <motion.div
            className="services-process-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="services-process-step"
                  key={step.number}
                  variants={fadeUp}
                >
                  <div className="services-process-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <div className="services-process-step-heading">
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                  </div>

                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="services-process-note"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="services-process-note-icon">
            <Clock3 size={19} />
          </div>

          <p>
            <strong>Clear communication at every stage.</strong>
            Your team stays informed through development, testing and launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================
   INTEGRATIONS SECTION
========================================== */

function IntegrationsSection() {
  return (
    <section
      className="services-integrations section-padding"
      id="integrations"
    >
      <div className="services-container">
        <div className="services-integrations-header">
          <SectionHeading
            eyebrow="CONNECTED DURING THE BUILD"
            title="We handle the plumbing"
            description="Integrations are part of the project, not left as your problem afterwards."
          />

          <div className="services-integration-badge">
            <div className="services-integration-badge-icon">
              <Workflow size={22} />
            </div>

            <div>
              <strong>Connected systems</strong>
              <span>Designed for your workflow</span>
            </div>
          </div>
        </div>

        <motion.div
          className="services-integrations-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {integrations.map((integration) => {
            const Icon = integration.icon;

            return (
              <motion.article
                className="services-integration-card"
                key={integration.number}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22 }}
              >
                <div
                  className={`services-integration-icon icon-${integration.color}`}
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div className="services-integration-copy">
                  <span className="services-integration-number">
                    {integration.number}
                  </span>

                  <h3>{integration.title}</h3>

                  <p>{integration.description}</p>
                </div>

                <ArrowUpRight
                  className="services-integration-arrow"
                  size={17}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================
   PROPOSAL CTA
========================================== */

function ProposalCTA() {
  const benefits = [
    "Detailed scope",
    "Realistic timeline",
    "Transparent pricing",
    "Expert recommendations",
  ];

  return (
    <section className="services-proposal-section">
      <div className="services-container">
        <motion.div
          className="services-proposal-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="services-proposal-glow" />

          <div className="services-proposal-copy">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line" />
              NEXT STEP
            </div>

            <h2>Tell us what you need built</h2>

            <p>
              Send us the requirement. We&apos;ll come back with a scope, a
              timeline and an honest answer on whether we&apos;re the right
              team for it.
            </p>

            <div className="services-proposal-actions">
              <Link
                to="/contact"
                className="services-btn services-btn-primary"
              >
                Request a Proposal
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="services-btn services-btn-outline"
              >
                <MessageSquare size={16} />
                Book a Call
              </Link>
            </div>
          </div>

          <div className="services-proposal-visual">
            <div className="services-proposal-visual-glow" />

            <div className="services-proposal-dashboard">
              <div className="services-proposal-dashboard-top">
                <span className="services-brand-dot" />
                <span>Project Overview</span>
                <Settings2 size={16} />
              </div>

              <div className="services-proposal-dashboard-body">
                <div className="services-proposal-dashboard-label">
                  Development progress
                </div>

                <div className="services-proposal-dashboard-value">
                  <strong>Project plan</strong>
                  <span>Ready to scope</span>
                </div>

                <div className="services-proposal-progress">
                  <span />
                </div>

                <div className="services-proposal-dashboard-stats">
                  <div>
                    <small>Planning</small>
                    <strong>01</strong>
                  </div>

                  <div>
                    <small>Build</small>
                    <strong>02</strong>
                  </div>

                  <div>
                    <small>Launch</small>
                    <strong>03</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-proposal-checklist">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle2 size={16} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================
   FINAL CTA
========================================== */

function ServicesFinalCTA() {
  return (
    <section className="services-final-cta">
      <div className="services-container">
        <motion.div
          className="services-final-cta-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="services-final-decoration services-final-decoration-left" />
          <div className="services-final-decoration services-final-decoration-right" />

          <div className="services-final-cta-content">
            <div className="services-final-cta-icon">
              <MonitorSmartphone size={26} />
            </div>

            <h2>
              Ready to launch your <span>trading platform?</span>
            </h2>

            <p>
              Let&apos;s discuss your project and show you how we can help.
            </p>

            <Link
              to="/contact"
              className="services-btn services-btn-primary"
            >
              Book a Free Demo
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================
   DISCLAIMER
========================================== */

function ServicesDisclaimer() {
  return (
    <section className="services-disclaimer">
      <div className="services-container services-disclaimer-inner">
        <div className="services-disclaimer-icon">
          <ShieldCheck size={19} />
        </div>

        <div>
          <strong>Important information</strong>

          <p>
            SetupFX is a software development company. We build and license
            trading technology. We do not trade, act as a broker, hold or
            manage client funds, or provide financial, investment or advisory
            services.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   MAIN SERVICES PAGE
========================================== */

export default function Services() {
  return (
    <main className="services-page">
      <ServicesHero />

      <ServicesOverview />

      <DevelopmentProcess />

      <IntegrationsSection />

      <ProposalCTA />

      <ServicesFinalCTA />

      <ServicesDisclaimer />
    </main>
  );
}