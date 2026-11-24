import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  Activity,
  Award,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Gauge,
  Headphones,
  Layers3,
  LockKeyhole,
  Network,
  PanelTop,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";

import "./GlobalPropFirmPlatform.css";

const platformFeatures = [
  {
    number: "01",
    icon: Layers3,
    title: "Multi-Model Challenge Engine",
    description:
      "Configure single-phase, two-phase and three-phase evaluations, or instant-funding models to suit your firm's offering.",
    tags: ["Single Phase", "Multi-Phase", "Instant Funding"],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Real-Time Rule Enforcement",
    description:
      "Configure rules for drawdown, daily loss, profit targets, trading days and consistency requirements.",
    tags: ["Drawdown", "Daily Loss", "Profit Targets"],
  },
  {
    number: "03",
    icon: Users,
    title: "Trader Portal",
    description:
      "Give traders a dedicated portal to view objectives, evaluation progress, performance statistics, certificates and payout history.",
    tags: ["Progress", "Statistics", "Payout History"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Trading Terminal Integration",
    description:
      "Connect the prop firm workflow with the selected trading terminal or trading environment agreed for the project.",
    tags: ["Terminal", "Account Integration"],
  },
  {
    number: "05",
    icon: Clock3,
    title: "Instrument & News Restrictions",
    description:
      "Configure permitted instruments, weekend holding conditions and news-trading restrictions according to your rule set.",
    tags: ["Instruments", "News Rules", "Weekend Rules"],
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Scaling Plans",
    description:
      "Define account-growth plans and progression conditions for traders who meet your firm's performance criteria.",
    tags: ["Account Growth", "Progression"],
  },
  {
    number: "07",
    icon: Wallet,
    title: "Payout Workflow",
    description:
      "Manage payout requests, profit-split calculations, approval stages and payment integrations.",
    tags: ["Payout Requests", "Profit Split", "Approvals"],
  },
];

const adminFeatures = [
  {
    icon: Layers3,
    title: "Challenge Management",
    description:
      "Create, clone and edit challenge plans and evaluation rules.",
  },
  {
    icon: ClipboardCheck,
    title: "Account & Trade Reviews",
    description:
      "Review trader accounts, trading history and rule-breach events.",
  },
  {
    icon: Wallet,
    title: "Payout Approvals",
    description:
      "Review payout requests and maintain a documented approval trail.",
  },
  {
    icon: Users,
    title: "Trader Management",
    description:
      "Manage trader accounts, resets, upgrades and dispute workflows.",
  },
  {
    icon: Gauge,
    title: "Funded Exposure Monitoring",
    description:
      "Monitor funded accounts and the exposure associated with them.",
  },
  {
    icon: LockKeyhole,
    title: "Staff Permissions",
    description:
      "Configure team roles, access permissions and administrative controls.",
  },
];

const audiences = [
  {
    icon: Zap,
    title: "New Prop Firm Founders",
    description:
      "Plan the technology behind your international prop firm and evaluation model.",
  },
  {
    icon: RefreshCw,
    title: "Existing Prop Firms",
    description:
      "Explore migrating from a platform that no longer meets your operational needs.",
  },
  {
    icon: Network,
    title: "Brokerages",
    description:
      "Explore adding a funded-trader division to your existing business.",
  },
  {
    icon: Layers3,
    title: "Multi-Brand Operators",
    description:
      "Discuss operating multiple brands with a shared technology backend.",
  },
];

const faqs = [
  {
    question: "Can we configure our own challenge rules?",
    answer:
      "The challenge engine can be configured around requirements such as evaluation phases, drawdown, daily loss, profit targets and trading restrictions. Custom requirements should be reviewed during project scoping.",
  },
  {
    question: "Can multiple brands use a shared backend?",
    answer:
      "Multi-brand operations can be discussed as part of the architecture and project scope. The required separation of branding, users, rules and operations should be defined before development.",
  },
  {
    question: "Can payout workflows be automated?",
    answer:
      "The platform can support payout requests, profit-split calculations, approval stages and payment integrations. The exact level of automation depends on the agreed workflow and integrations.",
  },
  {
    question: "Can the platform be fully white-labeled?",
    answer:
      "The platform is designed for branding under your business identity. The agreed scope should specify the branding, trader portal, checkout, integrations and other required touchpoints.",
  },
  {
    question: "Does the platform guarantee trading profits?",
    answer:
      "No. Software cannot guarantee trading profits or successful trader outcomes. Market risk remains, and the prop firm's rules, business model and applicable legal requirements should be assessed independently.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}) {
  return (
    <motion.div
      className={`gpf-section-heading ${
        centered ? "gpf-heading-centered" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <span className="gpf-eyebrow">
        <span className="gpf-eyebrow-dot" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.div>
  );
}

function GlobalPropFirmPlatform() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="gpf-page">
      {/* HERO */}
      <section className="gpf-hero">
        <div className="gpf-hero-grid" />
        <div className="gpf-hero-orb gpf-orb-one" />
        <div className="gpf-hero-orb gpf-orb-two" />

        <div className="gpf-container gpf-hero-layout">
          <motion.div
            className="gpf-hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gpf-breadcrumb">
              <Link to="/">Home</Link>
              <ChevronDown size={13} />
              <Link to="/platforms">Platforms</Link>
              <ChevronDown size={13} />
              <span>Prop Firm Platform</span>
            </div>

            <span className="gpf-eyebrow">
              <span className="gpf-eyebrow-dot" />
              PROP FIRM TECHNOLOGY
            </span>

            <h1>
              Forex Prop Firm Platform
              <span>for Global Operators</span>
            </h1>

            <p className="gpf-hero-description">
              Everything required to sell challenges, evaluate traders,
              manage funded accounts and handle payout workflows — under
              your brand and according to your rules.
            </p>

            <div className="gpf-hero-tags">
              <span>
                <Layers3 size={15} />
                Multi-Phase
              </span>

              <span>
                <ShieldCheck size={15} />
                Rule Enforcement
              </span>

              <span>
                <Wallet size={15} />
                Payout Workflows
              </span>
            </div>

            <div className="gpf-hero-actions">
              <Link to="/contact" className="gpf-btn gpf-btn-primary">
                Request a Demo
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="gpf-btn gpf-btn-secondary">
                Talk to an Expert
                <ArrowDownRight size={18} />
              </Link>
            </div>

            <div className="gpf-hero-note">
              <CheckCircle2 size={17} />
              <span>
                Your challenge rules, your brand and your operating model.
              </span>
            </div>
          </motion.div>

          {/* PROP FIRM DASHBOARD */}
          <motion.div
            className="gpf-hero-visual"
            initial={{ opacity: 0, scale: 0.92, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="gpf-dashboard">
              <div className="gpf-dashboard-top">
                <div className="gpf-dashboard-brand">
                  <div className="gpf-brand-icon">
                    <Target size={20} />
                  </div>

                  <div>
                    <strong>Prop Firm Console</strong>
                    <span>Trader Management</span>
                  </div>
                </div>

                <span className="gpf-dashboard-status">
                  <i />
                  DASHBOARD
                </span>
              </div>

              <div className="gpf-dashboard-welcome">
                <div>
                  <span>FIRM OVERVIEW</span>
                  <h3>Evaluation Workspace</h3>
                </div>

                <div className="gpf-dashboard-welcome-icon">
                  <PanelTop size={21} />
                </div>
              </div>

              <div className="gpf-metric-grid">
                <div className="gpf-metric-card">
                  <div className="gpf-metric-label">
                    <span>Evaluation</span>
                    <Layers3 size={16} />
                  </div>
                  <strong>Phase 01</strong>
                  <small>Challenge configuration</small>
                </div>

                <div className="gpf-metric-card">
                  <div className="gpf-metric-label">
                    <span>Rule Monitoring</span>
                    <ShieldCheck size={16} />
                  </div>
                  <strong>Configured</strong>
                  <small>Illustrative status</small>
                </div>
              </div>

              <div className="gpf-progress-panel">
                <div className="gpf-progress-heading">
                  <div>
                    <strong>Evaluation Progress</strong>
                    <span>Illustrative interface</span>
                  </div>
                  <Activity size={19} />
                </div>

                <div className="gpf-progress-row">
                  <span>Profit target</span>
                  <strong>Target configured</strong>
                </div>

                <div className="gpf-progress-track">
                  <span />
                </div>

                <div className="gpf-progress-row">
                  <span>Risk rules</span>
                  <strong>Rule monitoring</strong>
                </div>

                <div className="gpf-progress-track gpf-track-two">
                  <span />
                </div>
              </div>

              <div className="gpf-dashboard-bottom">
                <div>
                  <ClipboardCheck size={19} />
                  <span>Challenges</span>
                </div>

                <div>
                  <TrendingUp size={19} />
                  <span>Performance</span>
                </div>

                <div>
                  <Wallet size={19} />
                  <span>Payouts</span>
                </div>
              </div>
            </div>

            <motion.div
              className="gpf-float-card gpf-float-top"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="gpf-float-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Rule Engine</strong>
                <span>Configurable controls</span>
              </div>
            </motion.div>

            <motion.div
              className="gpf-float-card gpf-float-bottom"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="gpf-float-icon">
                <CircleDollarSign size={20} />
              </div>

              <div>
                <strong>Payout Workflow</strong>
                <span>Requests & approvals</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="gpf-hero-bottom">
          <span>CHALLENGES TO FUNDED ACCOUNTS</span>
          <div />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="gpf-section">
        <div className="gpf-container gpf-overview-layout">
          <div className="gpf-overview-copy">
            <SectionHeading
              centered={false}
              eyebrow="PLATFORM OVERVIEW"
              title="Built to Scale With Your Firm"
              description="Prop firms need more than a challenge checkout. They need consistent rule enforcement, clear trader progress, controlled payouts and an operator console that keeps the business manageable."
            />

            <div className="gpf-overview-points">
              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Evaluation workflows</strong>
                  <br />
                  Configure challenge phases and progression conditions.
                </p>
              </div>

              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Trader performance visibility</strong>
                  <br />
                  Review account progress, trading metrics and rule events.
                </p>
              </div>

              <div>
                <span>
                  <CheckCircle2 size={19} />
                </span>
                <p>
                  <strong>Operational oversight</strong>
                  <br />
                  Manage trader accounts, funded exposure and payout requests.
                </p>
              </div>
            </div>

            <Link to="/contact" className="gpf-text-link">
              Discuss your prop firm model
              <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div
            className="gpf-overview-visual"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="gpf-visual-header">
              <span>PROP FIRM WORKFLOW</span>
              <Workflow size={21} />
            </div>

            <div className="gpf-workflow-list">
              <div className="gpf-workflow-step">
                <div className="gpf-workflow-number">01</div>
                <div className="gpf-workflow-icon">
                  <Layers3 size={22} />
                </div>
                <div>
                  <strong>Challenge Setup</strong>
                  <span>Configure phases and rules</span>
                </div>
                <CheckCircle2 size={18} className="gpf-workflow-check" />
              </div>

              <div className="gpf-workflow-connector" />

              <div className="gpf-workflow-step">
                <div className="gpf-workflow-number">02</div>
                <div className="gpf-workflow-icon">
                  <Activity size={22} />
                </div>
                <div>
                  <strong>Trader Evaluation</strong>
                  <span>Monitor progress and rule events</span>
                </div>
                <CheckCircle2 size={18} className="gpf-workflow-check" />
              </div>

              <div className="gpf-workflow-connector" />

              <div className="gpf-workflow-step">
                <div className="gpf-workflow-number">03</div>
                <div className="gpf-workflow-icon">
                  <Award size={22} />
                </div>
                <div>
                  <strong>Funded Account</strong>
                  <span>Apply your progression conditions</span>
                </div>
                <CheckCircle2 size={18} className="gpf-workflow-check" />
              </div>

              <div className="gpf-workflow-connector" />

              <div className="gpf-workflow-step">
                <div className="gpf-workflow-number">04</div>
                <div className="gpf-workflow-icon">
                  <Wallet size={22} />
                </div>
                <div>
                  <strong>Payout Management</strong>
                  <span>Review requests and approvals</span>
                </div>
                <CheckCircle2 size={18} className="gpf-workflow-check" />
              </div>
            </div>

            <div className="gpf-visual-footer">
              <CheckCircle2 size={16} />
              Workflows configured for your firm
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="gpf-section gpf-features-section">
        <div className="gpf-container">
          <SectionHeading
            eyebrow="PLATFORM FEATURES"
            title="The Technology Behind Your Prop Firm"
            description="Explore the core capabilities for challenge management, trader evaluation, rule enforcement and payout operations."
          />

          <div className="gpf-features-grid">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="gpf-feature-card"
                  key={feature.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 3) * 0.07,
                  }}
                >
                  <div className="gpf-feature-top">
                    <div className="gpf-feature-icon">
                      <Icon size={23} />
                    </div>
                    <span>{feature.number}</span>
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>

                  <div className="gpf-feature-tags">
                    {feature.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="gpf-feature-line" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMIN BACK OFFICE */}
      <section className="gpf-section">
        <div className="gpf-container">
          <div className="gpf-admin-header">
            <SectionHeading
              centered={false}
              eyebrow="ADMIN & BACK OFFICE"
              title="Run the Firm From One Place"
              description="Give your operations team tools to manage challenge plans, trader accounts, payouts and funded exposure through a centralized console."
            />

            <Link to="/contact" className="gpf-btn gpf-btn-primary">
              Explore the Platform
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="gpf-admin-grid">
            {adminFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="gpf-admin-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="gpf-admin-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <CheckCircle2 size={18} className="gpf-admin-check" />
                </motion.div>
              );
            })}
          </div>

          <div className="gpf-admin-note">
            <div className="gpf-admin-note-icon">
              <PanelTop size={22} />
            </div>
            <div>
              <strong>Centralized operational visibility</strong>
              <p>
                Define your challenge rules, account lifecycle, staff access
                and payout approval requirements during project scoping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="gpf-section gpf-audience-section">
        <div className="gpf-container">
          <SectionHeading
            eyebrow="WHO IT'S FOR"
            title="Built for Prop Firm Business Models"
            description="A configurable technology foundation for businesses launching or expanding a funded-trader offering."
          />

          <div className="gpf-audience-grid">
            {audiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="gpf-audience-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                >
                  <div className="gpf-audience-icon">
                    <Icon size={24} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <Link
                    to="/contact"
                    aria-label={`Discuss ${item.title}`}
                  >
                    <ArrowRight size={19} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="gpf-section gpf-faq-section">
        <div className="gpf-container gpf-faq-layout">
          <div>
            <SectionHeading
              centered={false}
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Questions Before You Launch?"
              description="Understand the platform's configurable workflows and discuss your requirements before committing to a build."
            />

            <div className="gpf-faq-help">
              <div className="gpf-faq-help-icon">
                <Headphones size={23} />
              </div>

              <div>
                <strong>Have a specific rule set?</strong>
                <p>Let's discuss your challenge model.</p>
                <Link to="/contact">
                  Talk to our team
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="gpf-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`gpf-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="gpf-faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="gpf-faq-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="gpf-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gpf-section gpf-cta-section">
        <div className="gpf-container">
          <motion.div
            className="gpf-cta-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="gpf-cta-content">
              <span className="gpf-eyebrow gpf-eyebrow-light">
                <span className="gpf-eyebrow-dot" />
                YOUR NEXT STEP
              </span>

              <h2>Start Building Your Prop Firm</h2>

              <p>
                Tell us about your challenge rules, supported markets and
                payout model. We'll discuss the technology scope and the
                next steps for your project.
              </p>

              <div className="gpf-cta-actions">
                <Link to="/contact" className="gpf-btn gpf-btn-white">
                  Book a Demo
                  <ArrowRight size={18} />
                </Link>

                <Link to="/platforms" className="gpf-cta-link">
                  Explore All Platforms
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="gpf-cta-note">
                <CheckCircle2 size={16} />
                No obligation. No sales pressure.
              </div>
            </div>

            <div className="gpf-cta-visual">
              <div className="gpf-cta-ring gpf-cta-ring-one" />
              <div className="gpf-cta-ring gpf-cta-ring-two" />

              <div className="gpf-cta-center">
                <Target size={49} />
              </div>

              <div className="gpf-cta-floating gpf-cta-floating-one">
                <ShieldCheck size={19} />
                <span>Challenge Rules</span>
              </div>

              <div className="gpf-cta-floating gpf-cta-floating-two">
                <Wallet size={19} />
                <span>Payout Workflows</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="gpf-disclaimer">
        <div className="gpf-container gpf-disclaimer-inner">
          <ShieldCheck size={20} />
          <p>
            <strong>Important:</strong> The platform provides software
            capabilities for prop firm operations. It does not guarantee
            trading profits or trader outcomes. The operator is responsible
            for assessing its business model, applicable legal requirements
            and regulatory obligations with qualified advisers.
          </p>
        </div>
      </section>
    </main>
  );
}

export default GlobalPropFirmPlatform;