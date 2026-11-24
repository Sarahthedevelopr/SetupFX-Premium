import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers3,
  Palette,
  Settings2,
  ShieldCheck,
  Smartphone,
  Monitor,
  Workflow,
  Rocket,
  Building2,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./WhiteLabelSolutions.css";

const whiteLabelFeatures = [
  {
    number: "01",
    icon: Palette,
    title: "Brand Customization",
    description:
      "Present your trading platform under your own business identity with consistent branding and visual styling.",
    points: [
      "Brand identity and logo placement",
      "Consistent visual presentation",
      "Brand-focused user experience",
    ],
  },
  {
    number: "02",
    icon: Settings2,
    title: "Platform Configuration",
    description:
      "Configure the platform around your agreed business requirements, workflows and operational preferences.",
    points: [
      "Platform configuration",
      "Business-specific workflows",
      "Requirements-led setup",
    ],
  },
  {
    number: "03",
    icon: Workflow,
    title: "Deployment Preparation",
    description:
      "Prepare the configured platform for testing, review and deployment according to the agreed project scope.",
    points: [
      "Configuration review",
      "Testing and validation",
      "Launch preparation",
    ],
  },
];

const launchSteps = [
  {
    number: "01",
    icon: Building2,
    title: "Understand Your Business",
    description:
      "Discuss your business model, brand identity and platform requirements.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Branding & Configuration",
    description:
      "Define the platform presentation and configure the agreed requirements.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Development & Setup",
    description:
      "Prepare the platform and implement the agreed configuration.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing & Review",
    description:
      "Review the setup and validate the agreed functionality before launch.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch Preparation",
    description:
      "Prepare the platform for deployment and discuss ongoing support requirements.",
  },
];

const benefits = [
  {
    icon: Palette,
    title: "Your Brand Identity",
    description:
      "Create a consistent branded presentation for your trading business.",
  },
  {
    icon: Settings2,
    title: "Configured to Your Needs",
    description:
      "Plan the platform around the requirements agreed during project scoping.",
  },
  {
    icon: Monitor,
    title: "Trading Technology",
    description:
      "Build your business around a configured trading technology solution.",
  },
  {
    icon: Layers3,
    title: "Structured Launch Process",
    description:
      "Move through branding, configuration, testing and launch preparation in stages.",
  },
];

function WhiteLabelSolutions() {
  return (
    <main className="wls-page">
      {/* =====================================
          HERO SECTION
      ====================================== */}
      <section className="wls-hero">
        <div className="wls-hero-glow wls-glow-one" />
        <div className="wls-hero-glow wls-glow-two" />

        <div className="wls-container wls-hero-grid">
          <motion.div
            className="wls-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="wls-eyebrow">
              <span className="wls-eyebrow-dot" />
              WHITE LABEL SOLUTION
            </div>

            <h1>
              Your Trading
              <br />
              Platform.
              <br />
              <span>Your Brand.</span>
            </h1>

            <p className="wls-hero-description">
              Launch with a branded trading platform configured
              around your business identity and requirements.
              Start with a clear scope and a structured setup
              process.
            </p>

            <div className="wls-hero-actions">
              <Link
                to="/contact"
                className="wls-button-primary"
              >
                Discuss Your Requirements
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="#wls-features"
                className="wls-button-secondary"
              >
                Explore the Solution
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="wls-hero-note">
              <CheckCircle2 size={17} />
              <span>
                Branding, configuration and launch preparation
              </span>
            </div>
          </motion.div>

          {/* Branded platform visual */}
          <motion.div
            className="wls-visual-wrap"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <div className="wls-visual-orbit wls-orbit-one" />
            <div className="wls-visual-orbit wls-orbit-two" />

            <div className="wls-brand-panel">
              <div className="wls-panel-topbar">
                <div className="wls-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>BRANDED TRADING PLATFORM</span>

                <div className="wls-panel-status">
                  <span />
                  CONFIGURED
                </div>
              </div>

              <div className="wls-brand-layout">
                {/* Sidebar */}
                <aside className="wls-sidebar">
                  <div className="wls-brand-logo">
                    <div className="wls-logo-mark">
                      <Layers3 size={20} />
                    </div>

                    <div>
                      <strong>YOUR BRAND</strong>
                      <span>TRADING PLATFORM</span>
                    </div>
                  </div>

                  <div className="wls-sidebar-label">
                    WORKSPACE
                  </div>

                  <div className="wls-sidebar-link active">
                    <Monitor size={15} />
                    <span>Dashboard</span>
                  </div>

                  <div className="wls-sidebar-link">
                    <Layers3 size={15} />
                    <span>Markets</span>
                  </div>

                  <div className="wls-sidebar-link">
                    <Workflow size={15} />
                    <span>Orders</span>
                  </div>

                  <div className="wls-sidebar-link">
                    <Settings2 size={15} />
                    <span>Settings</span>
                  </div>

                  <div className="wls-sidebar-bottom">
                    <div className="wls-avatar">YB</div>

                    <div>
                      <strong>Your Business</strong>
                      <span>Workspace</span>
                    </div>
                  </div>
                </aside>

                {/* Dashboard */}
                <div className="wls-workspace">
                  <div className="wls-workspace-heading">
                    <div>
                      <span>OVERVIEW</span>
                      <h3>Trading Dashboard</h3>
                    </div>

                    <div className="wls-profile">
                      <span>YB</span>
                    </div>
                  </div>

                  <div className="wls-welcome-card">
                    <div>
                      <span>YOUR BRAND EXPERIENCE</span>
                      <h4>Welcome to your workspace</h4>
                      <p>
                        A platform presentation aligned with
                        your business identity.
                      </p>
                    </div>

                    <div className="wls-welcome-icon">
                      <Layers3 size={27} />
                    </div>
                  </div>

                  <div className="wls-stat-grid">
                    <div className="wls-stat-card">
                      <span>PLATFORM</span>
                      <strong>Configured</strong>
                      <small>
                        <CheckCircle2 size={12} />
                        Setup overview
                      </small>
                    </div>

                    <div className="wls-stat-card">
                      <span>WORKSPACE</span>
                      <strong>Branded</strong>
                      <small>
                        <CheckCircle2 size={12} />
                        Visual identity
                      </small>
                    </div>
                  </div>

                  <div className="wls-preview-panel">
                    <div className="wls-preview-heading">
                      <div>
                        <span>PLATFORM OVERVIEW</span>
                        <strong>Interface Preview</strong>
                      </div>

                      <div className="wls-preview-icon">
                        <Palette size={17} />
                      </div>
                    </div>

                    <div className="wls-preview-content">
                      <div className="wls-preview-lines">
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="wls-preview-bars">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating brand badge */}
            <motion.div
              className="wls-floating-card wls-floating-top"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="wls-floating-icon">
                <Palette size={18} />
              </div>

              <div>
                <strong>Your Brand Identity</strong>
                <span>Consistent presentation</span>
              </div>
            </motion.div>

            <motion.div
              className="wls-floating-card wls-floating-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="wls-floating-icon wls-icon-cyan">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <strong>Platform Configuration</strong>
                <span>Based on agreed requirements</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <a
          href="#wls-overview"
          className="wls-scroll-cue"
          aria-label="Scroll to overview"
        >
          <span />
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* =====================================
          OVERVIEW
      ====================================== */}
      <section className="wls-overview" id="wls-overview">
        <div className="wls-container wls-overview-grid">
          <motion.div
            className="wls-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wls-section-kicker">
              THE WHITE LABEL APPROACH
            </span>

            <h2>
              Trading Technology.
              <br />
              <span>Your Business Identity.</span>
            </h2>
          </motion.div>

          <motion.div
            className="wls-overview-copy"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              A white-label solution allows a trading business
              to use a configured platform under its own brand.
              The specific branding and functionality depend on
              the selected platform and agreed project scope.
            </p>

            <p>
              We work through the requirements, branding,
              configuration and testing so that the platform
              setup follows a clearly defined process.
            </p>

            <Link to="/contact" className="wls-text-link">
              Discuss your project
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          FEATURES
      ====================================== */}
      <section
        className="wls-features"
        id="wls-features"
      >
        <div className="wls-container">
          <motion.div
            className="wls-centered-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wls-section-kicker">
              WHAT THE SETUP COVERS
            </span>

            <h2>
              A Structured Approach
              <br />
              <span>to Your Branded Platform</span>
            </h2>

            <p>
              The setup is organized around your brand,
              configuration requirements and launch preparation.
            </p>
          </motion.div>

          <div className="wls-feature-grid">
            {whiteLabelFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="wls-feature-card"
                  key={feature.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -7 }}
                >
                  <div className="wls-feature-card-top">
                    <div className="wls-feature-icon">
                      <Icon size={23} />
                    </div>

                    <span>{feature.number}</span>
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>

                  <div className="wls-feature-divider" />

                  <ul>
                    {feature.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="wls-feature-link"
                  >
                    Discuss requirements
                    <ArrowUpRight size={16} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          DESKTOP + MOBILE PREVIEW
      ====================================== */}
      <section className="wls-experience">
        <div className="wls-container wls-experience-grid">
          <motion.div
            className="wls-experience-copy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wls-section-kicker">
              YOUR BRAND EXPERIENCE
            </span>

            <h2>
              One Consistent
              <br />
              <span>Brand Experience.</span>
            </h2>

            <p>
              A branded trading experience should feel
              consistent with your business identity. The
              platform presentation and configuration can be
              planned around the requirements agreed for your
              project.
            </p>

            <div className="wls-experience-points">
              <div>
                <CheckCircle2 size={18} />
                <span>Brand-focused platform presentation</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Configuration based on project scope</span>
              </div>

              <div>
                <CheckCircle2 size={18} />
                <span>Testing before deployment</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="wls-button-primary"
            >
              Talk to Our Team
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          {/* Device mockups */}
          <motion.div
            className="wls-device-stage"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="wls-device-glow" />

            <div className="wls-desktop-device">
              <div className="wls-device-browser">
                <div className="wls-window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>YOURBRAND.COM</span>
              </div>

              <div className="wls-device-content">
                <div className="wls-device-header">
                  <div className="wls-device-logo">
                    <Layers3 size={17} />
                    <strong>YOUR BRAND</strong>
                  </div>

                  <div className="wls-device-header-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="wls-device-hero-block">
                  <span>YOUR TRADING WORKSPACE</span>
                  <strong>
                    A Platform Built
                    <br />
                    Around Your Brand
                  </strong>
                  <div />
                </div>

                <div className="wls-device-card-row">
                  <div>
                    <span />
                    <span />
                  </div>

                  <div>
                    <span />
                    <span />
                  </div>

                  <div>
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>

            <div className="wls-mobile-device">
              <div className="wls-mobile-speaker" />

              <div className="wls-mobile-screen">
                <div className="wls-mobile-brand">
                  <div className="wls-mobile-logo">
                    <Layers3 size={14} />
                  </div>

                  <strong>YOUR BRAND</strong>
                </div>

                <span className="wls-mobile-label">
                  WORKSPACE
                </span>

                <div className="wls-mobile-welcome">
                  <span>WELCOME BACK</span>
                  <strong>Your Dashboard</strong>
                  <div />
                </div>

                <div className="wls-mobile-stat">
                  <span>PLATFORM STATUS</span>
                  <strong>
                    <CheckCircle2 size={13} />
                    Configured
                  </strong>
                </div>

                <div className="wls-mobile-stat">
                  <span>WORKSPACE</span>
                  <strong>
                    <CheckCircle2 size={13} />
                    Your Brand
                  </strong>
                </div>

                <div className="wls-mobile-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="wls-device-badge">
              <Smartphone size={17} />
              <span>Responsive interface concept</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          LAUNCH PROCESS
      ====================================== */}
      <section className="wls-process">
        <div className="wls-container">
          <motion.div
            className="wls-centered-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wls-section-kicker">
              FROM SETUP TO LAUNCH
            </span>

            <h2>
              A Clear Path to
              <br />
              <span>Your Branded Platform</span>
            </h2>

            <p>
              Each stage helps define the requirements and
              prepare the agreed solution for deployment.
            </p>
          </motion.div>

          <div className="wls-timeline">
            {launchSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="wls-timeline-item"
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -15 : 15,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="wls-timeline-marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="wls-timeline-card">
                    <div className="wls-timeline-icon">
                      <Icon size={21} />
                    </div>

                    <span className="wls-step-label">
                      STEP {step.number}
                    </span>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          BENEFITS
      ====================================== */}
      <section className="wls-benefits">
        <div className="wls-container">
          <div className="wls-benefits-heading">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="wls-section-kicker">
                WHY WHITE LABEL
              </span>

              <h2>
                Focus on Your Brand.
                <br />
                <span>Define Your Requirements.</span>
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
              A structured white-label project starts with
              clear business requirements and a shared
              understanding of the platform configuration.
            </motion.p>
          </div>

          <div className="wls-benefit-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  className="wls-benefit-card"
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="wls-benefit-icon">
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

      {/* =====================================
          CTA
      ====================================== */}
      <section className="wls-cta-section">
        <div className="wls-container">
          <motion.div
            className="wls-cta-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="wls-cta-glow" />

            <div className="wls-cta-content">
              <span className="wls-cta-kicker">
                START WITH YOUR REQUIREMENTS
              </span>

              <h2>
                Ready to Build
                <br />
                Under Your Brand?
              </h2>

              <p>
                Tell us about your business and the platform
                you want to launch. We can discuss the
                requirements, configuration and next steps.
              </p>

              <Link
                to="/contact"
                className="wls-button-primary"
              >
                Discuss Your Project
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="wls-cta-decoration">
              <div className="wls-cta-circle wls-cta-circle-one" />
              <div className="wls-cta-circle wls-cta-circle-two" />

              <div className="wls-cta-symbol">
                <Layers3 size={65} strokeWidth={1.15} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default WhiteLabelSolutions;