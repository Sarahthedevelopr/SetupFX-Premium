import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Droplets,
  BarChart3,
  Users,
  Mail,
  Workflow,
  Settings2,
  Plug,
  Code2,
  Network,
  RefreshCw,
  Headphones,
  Zap,
} from "lucide-react";

import "./IntegrationServices.css";

const integrations = [
  {
    number: "01",
    icon: CreditCard,
    title: "Payment Gateways",
    description:
      "Connect payment providers to your trading platform with deposit flows and withdrawal approval workflows.",
    tags: ["Deposits", "Withdrawals", "Payment APIs"],
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "KYC & AML Providers",
    description:
      "Integrate identity verification providers with document upload workflows and verification records.",
    tags: ["Identity checks", "Verification", "Audit trails"],
  },
  {
    number: "03",
    icon: Droplets,
    title: "Liquidity Providers",
    description:
      "Connect liquidity providers through bridge integrations with configurable routing, markup and spread controls.",
    tags: ["Liquidity bridges", "Routing", "Spread control"],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Market Data Feeds",
    description:
      "Connect market data sources to deliver real-time quotes and market depth for your supported instruments.",
    tags: ["Real-time quotes", "Market depth", "Instruments"],
  },
  {
    number: "05",
    icon: Users,
    title: "CRM Systems",
    description:
      "Connect customer relationship management systems with platform records, sales pipelines and client lifecycle workflows.",
    tags: ["Lead management", "Client records", "CRM APIs"],
  },
  {
    number: "06",
    icon: Mail,
    title: "SMS, Email & Analytics",
    description:
      "Connect notification services, transactional email providers and analytics tools to support communication and reporting.",
    tags: ["Notifications", "Email", "Analytics"],
  },
];

const integrationSteps = [
  {
    number: "01",
    title: "Understand Your Requirements",
    description:
      "We review your platform, existing providers and the systems your business needs to connect.",
    icon: Settings2,
  },
  {
    number: "02",
    title: "Plan the Integration",
    description:
      "We identify integration requirements, dependencies and the practical implementation approach.",
    icon: Network,
  },
  {
    number: "03",
    title: "Connect the Systems",
    description:
      "Our team works on connecting the required providers, APIs and platform workflows.",
    icon: Plug,
  },
  {
    number: "04",
    title: "Test and Validate",
    description:
      "We test the integrations as part of the acceptance process before the platform goes live.",
    icon: CheckCircle2,
  },
];

const benefits = [
  {
    icon: Workflow,
    title: "One Connected Ecosystem",
    description:
      "Bring your essential third-party services together within your trading platform workflow.",
  },
  {
    icon: Code2,
    title: "Integration During Development",
    description:
      "Plan and implement integrations as part of the project instead of leaving them as a separate task.",
  },
  {
    icon: RefreshCw,
    title: "Tested Workflows",
    description:
      "Validate connected services and their workflows during testing and user acceptance.",
  },
  {
    icon: Headphones,
    title: "A Team That Understands the Build",
    description:
      "Discuss integration requirements directly with the team working on your platform project.",
  },
];

const integrationTags = [
  "Payment Gateways",
  "KYC & AML",
  "Liquidity Providers",
  "Market Data",
  "CRM Systems",
  "Custom APIs",
];

const IntegrationServices = () => {
  return (
    <main className="integration-page">
      {/* HERO SECTION */}
      <section className="integration-hero">
        <div className="integration-hero-glow integration-glow-one" />
        <div className="integration-hero-glow integration-glow-two" />

        <div className="integration-container integration-hero-grid">
          <motion.div
            className="integration-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="integration-eyebrow">
              <span className="integration-eyebrow-dot" />
              CONNECT YOUR ECOSYSTEM
            </div>

            <h1>
              Integrations, handled
              <span> during the build.</span>
            </h1>

            <p className="integration-hero-description">
              Payments, KYC, liquidity, CRM and third-party APIs — connected
              as part of the project, not left as your problem afterwards.
            </p>

            <div className="integration-tag-list">
              {integrationTags.map((tag, index) => (
                <motion.span
                  className="integration-tag"
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.07 }}
                >
                  <CheckCircle2 size={14} />
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="integration-hero-actions">
              <Link
                to="/contact"
                className="integration-btn integration-btn-primary"
              >
                Discuss Your Integration
                <ArrowRight size={18} />
              </Link>

              <a
                href="#integration-scope"
                className="integration-btn integration-btn-secondary"
              >
                Explore Integrations
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="integration-hero-note">
              <span className="integration-note-icon">
                <CheckCircle2 size={16} />
              </span>
              Integrations planned and tested as part of your project
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            className="integration-visual"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="integration-visual-orbit integration-orbit-one" />
            <div className="integration-visual-orbit integration-orbit-two" />

            <div className="integration-network-card">
              <div className="integration-network-header">
                <div>
                  <span className="integration-small-label">
                    CONNECTED SYSTEMS
                  </span>
                  <h3>Integration Network</h3>
                </div>

                <span className="integration-network-status">
                  <span />
                  Connected
                </span>
              </div>

              <div className="integration-network-diagram">
                <svg
                  className="integration-network-lines"
                  viewBox="0 0 420 320"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M210 160 L92 72" />
                  <path d="M210 160 L328 72" />
                  <path d="M210 160 L70 160" />
                  <path d="M210 160 L350 160" />
                  <path d="M210 160 L92 250" />
                  <path d="M210 160 L328 250" />

                  <circle cx="92" cy="72" r="3" />
                  <circle cx="328" cy="72" r="3" />
                  <circle cx="70" cy="160" r="3" />
                  <circle cx="350" cy="160" r="3" />
                  <circle cx="92" cy="250" r="3" />
                  <circle cx="328" cy="250" r="3" />
                </svg>

                <div className="integration-core">
                  <div className="integration-core-icon">
                    <Network size={30} />
                  </div>
                  <strong>Your Platform</strong>
                  <span>Core system</span>
                </div>

                <div className="integration-node integration-node-payment">
                  <CreditCard size={21} />
                  <span>Payments</span>
                </div>

                <div className="integration-node integration-node-kyc">
                  <ShieldCheck size={21} />
                  <span>KYC & AML</span>
                </div>

                <div className="integration-node integration-node-data">
                  <BarChart3 size={21} />
                  <span>Market Data</span>
                </div>

                <div className="integration-node integration-node-liquidity">
                  <Droplets size={21} />
                  <span>Liquidity</span>
                </div>

                <div className="integration-node integration-node-crm">
                  <Users size={21} />
                  <span>CRM</span>
                </div>

                <div className="integration-node integration-node-api">
                  <Code2 size={21} />
                  <span>Custom APIs</span>
                </div>
              </div>

              <div className="integration-network-footer">
                <div className="integration-footer-icon">
                  <Zap size={17} />
                </div>

                <div>
                  <strong>One connected workflow</strong>
                  <span>Designed around your requirements</span>
                </div>

                <ArrowUpRight size={19} className="integration-footer-arrow" />
              </div>
            </div>

            <div className="integration-floating-card integration-floating-top">
              <span className="integration-floating-icon">
                <Plug size={19} />
              </span>
              <div>
                <strong>API Integration</strong>
                <span>Provider connectivity</span>
              </div>
            </div>

            <div className="integration-floating-card integration-floating-bottom">
              <span className="integration-floating-icon integration-floating-green">
                <CheckCircle2 size={19} />
              </span>
              <div>
                <strong>Testing Included</strong>
                <span>Acceptance workflow</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="integration-hero-bottom-line" />
      </section>

      {/* OVERVIEW SECTION */}
      <section className="integration-overview section-spacing">
        <div className="integration-container integration-overview-grid">
          <motion.div
            className="integration-overview-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="integration-section-label">
              THE BIGGER PICTURE
            </span>

            <h2>
              We handle
              <span> the plumbing.</span>
            </h2>
          </motion.div>

          <motion.div
            className="integration-overview-copy"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <p>
              A trading platform depends on more than its core software.
              Deposits, identity verification, market prices and client records
              all rely on the systems connected around it.
            </p>

            <p>
              We handle these connections during the build and test them as
              part of the acceptance round, so integration requirements are
              considered within the project from the beginning.
            </p>

            <div className="integration-overview-highlight">
              <div className="integration-highlight-icon">
                <Network size={22} />
              </div>
              <div>
                <strong>Built around your existing ecosystem</strong>
                <span>
                  Providers and requirements reviewed before implementation.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTEGRATION CARDS */}
      <section
        className="integration-scope section-spacing"
        id="integration-scope"
      >
        <div className="integration-container">
          <motion.div
            className="integration-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="integration-section-label">
              WHAT WE CONNECT
            </span>

            <h2>
              The systems your
              <span> platform depends on.</span>
            </h2>

            <p>
              From payments and verification to market data and CRM, we work
              with the integrations your business needs.
            </p>
          </motion.div>

          <div className="integration-cards-grid">
            {integrations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="integration-service-card"
                  key={item.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.1,
                  }}
                  whileHover={{ y: -7 }}
                >
                  <div className="integration-card-top">
                    <div className="integration-service-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="integration-card-number">
                      {item.number}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="integration-card-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="integration-card-bottom">
                    <span>Integration scope</span>
                    <ArrowUpRight size={19} />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="integration-scope-note">
            <span>
              <CheckCircle2 size={18} />
            </span>
            <p>
              <strong>Have a different provider?</strong> Share the details
              with us. We will review the integration requirements and explain
              what can be connected cleanly and where custom work may be needed.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="integration-process section-spacing">
        <div className="integration-container">
          <motion.div
            className="integration-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="integration-section-label">
              OUR APPROACH
            </span>

            <h2>
              From requirements
              <span> to tested connections.</span>
            </h2>

            <p>
              A structured process to understand your systems, connect the
              right providers and validate the resulting workflows.
            </p>
          </motion.div>

          <div className="integration-process-grid">
            {integrationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="integration-process-card"
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <div className="integration-process-card-top">
                    <span className="integration-process-number">
                      {step.number}
                    </span>

                    <div className="integration-process-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index !== integrationSteps.length - 1 && (
                    <div className="integration-process-connector">
                      <ArrowRight size={17} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="integration-benefits section-spacing">
        <div className="integration-container integration-benefits-grid">
          <motion.div
            className="integration-benefits-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="integration-section-label">
              WHY INTEGRATION MATTERS
            </span>

            <h2>
              Less disconnected work.
              <span> More connected systems.</span>
            </h2>

            <p>
              Integrations are part of the platform experience. Planning them
              early helps your team understand dependencies, workflows and
              testing requirements before launch.
            </p>

            <Link
              to="/contact"
              className="integration-text-link"
            >
              Discuss your requirements
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="integration-benefits-list">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  className="integration-benefit-item"
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="integration-benefit-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>

                  <CheckCircle2
                    className="integration-benefit-check"
                    size={19}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="integration-contact-section">
        <div className="integration-container">
          <motion.div
            className="integration-contact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="integration-contact-decoration integration-contact-decoration-one" />
            <div className="integration-contact-decoration integration-contact-decoration-two" />

            <div className="integration-contact-content">
              <span className="integration-contact-eyebrow">
                LET'S CONNECT THE PIECES
              </span>

              <h2>
                Tell us what needs
                <span> connecting.</span>
              </h2>

              <p>
                Share the providers, services or APIs you need to integrate.
                We will review your requirements and discuss what can be
                integrated cleanly and what may require custom work.
              </p>

              <div className="integration-contact-actions">
                <Link
                  to="/contact"
                  className="integration-btn integration-btn-white"
                >
                  Talk to Our Team
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="integration-contact-secondary"
                >
                  Contact Us
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="integration-contact-reassurance">
                <CheckCircle2 size={16} />
                No obligation. No sales pressure.
              </div>
            </div>

            <div className="integration-contact-visual">
              <div className="integration-contact-orbit integration-contact-orbit-one" />
              <div className="integration-contact-orbit integration-contact-orbit-two" />

              <div className="integration-contact-center">
                <Network size={38} />
              </div>

              <div className="integration-contact-node integration-contact-node-one">
                <CreditCard size={21} />
              </div>

              <div className="integration-contact-node integration-contact-node-two">
                <ShieldCheck size={21} />
              </div>

              <div className="integration-contact-node integration-contact-node-three">
                <BarChart3 size={21} />
              </div>

              <div className="integration-contact-node integration-contact-node-four">
                <Users size={21} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="integration-final-cta">
        <div className="integration-container integration-final-cta-inner">
          <div>
            <span className="integration-section-label">
              YOUR NEXT STEP
            </span>

            <h2>Ready to launch your trading platform?</h2>

            <p>
              Let's discuss your platform, integration requirements and
              project goals.
            </p>
          </div>

          <Link
            to="/contact"
            className="integration-btn integration-btn-primary"
          >
            Book a Free Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default IntegrationServices;