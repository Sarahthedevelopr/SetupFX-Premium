import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  ShieldCheck,
  RefreshCw,
  Clock3,
  ClipboardCheck,
  BellRing,
  CheckCircle2,
  Settings,
  Wrench,
  LockKeyhole,
  FileText,
  Headphones,
  Server,
  Zap,
  CalendarClock,
  CircleCheck,
  Gauge,
  MessageSquare,
} from "lucide-react";

import "./MaintenanceSupport.css";

const supportServices = [
  {
    number: "01",
    icon: Activity,
    title: "Uptime Monitoring",
    description:
      "Continuous checks with alerting for important platform services to help identify availability issues.",
    points: [
      "Service availability checks",
      "Important service alerts",
      "Issue visibility",
    ],
  },
  {
    number: "02",
    icon: Wrench,
    title: "Issue Resolution",
    description:
      "Work with the team familiar with your platform to investigate issues and coordinate the resolution process.",
    points: [
      "Issue investigation",
      "Technical troubleshooting",
      "Resolution coordination",
    ],
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Security Updates",
    description:
      "Keep platform dependencies and relevant components updated through a planned maintenance cycle.",
    points: [
      "Dependency updates",
      "Platform patching",
      "Scheduled maintenance",
    ],
  },
  {
    number: "04",
    icon: RefreshCw,
    title: "Feature Releases",
    description:
      "Plan and deliver platform enhancements in agreed development cycles as your business requirements evolve.",
    points: [
      "Enhancement planning",
      "Feature development",
      "Release coordination",
    ],
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Change Reporting",
    description:
      "Keep track of changes, pending items and decisions through regular project and maintenance updates.",
    points: [
      "Change summaries",
      "Pending action items",
      "Release updates",
    ],
  },
];

const supportSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell Us the Issue",
    description:
      "Share what is happening, which platform component is affected and the impact on your operations.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Review & Prioritise",
    description:
      "Review the reported issue or requested change and determine the appropriate next steps.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Work on the Solution",
    description:
      "Investigate, implement the required changes and coordinate any necessary maintenance.",
  },
  {
    number: "04",
    icon: CircleCheck,
    title: "Validate & Report",
    description:
      "Validate the changes and communicate the outcome, completed work and any remaining actions.",
  },
];

const supportBenefits = [
  {
    icon: Headphones,
    title: "A Team Familiar With Your Build",
    description:
      "Discuss platform issues with the team that understands the original implementation.",
  },
  {
    icon: CalendarClock,
    title: "Planned Maintenance",
    description:
      "Organise maintenance and enhancement work around an agreed schedule.",
  },
  {
    icon: LockKeyhole,
    title: "Security-Conscious Updates",
    description:
      "Address relevant platform and dependency updates through a planned maintenance process.",
  },
  {
    icon: FileText,
    title: "Clear Change Tracking",
    description:
      "Keep changes, queued items and important decisions visible through regular reporting.",
  },
];

const MaintenanceSupport = () => {
  return (
    <main className="maintenance-page">
      {/* ================= HERO SECTION ================= */}
      <section className="maintenance-hero">
        <div className="maintenance-hero-glow maintenance-glow-one" />
        <div className="maintenance-hero-glow maintenance-glow-two" />

        <div className="maintenance-container maintenance-hero-grid">
          <motion.div
            className="maintenance-hero-content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="maintenance-eyebrow">
              <span className="maintenance-eyebrow-dot" />
              SUPPORT BEYOND LAUNCH
            </div>

            <h1>
              Support that continues
              <span> after go-live.</span>
            </h1>

            <p className="maintenance-hero-description">
              Monitoring, updates and enhancement cycles — part of the
              relationship, not an upsell after the invoice clears.
            </p>

            <div className="maintenance-hero-tags">
              <span>
                <Activity size={15} />
                Monitoring
              </span>

              <span>
                <Wrench size={15} />
                Issue Resolution
              </span>

              <span>
                <ShieldCheck size={15} />
                Security Updates
              </span>

              <span>
                <RefreshCw size={15} />
                Enhancements
              </span>
            </div>

            <div className="maintenance-hero-actions">
              <Link
                to="/contact"
                className="maintenance-btn maintenance-btn-primary"
              >
                Discuss Support
                <ArrowRight size={18} />
              </Link>

              <a
                href="#support-scope"
                className="maintenance-btn maintenance-btn-secondary"
              >
                Explore Support
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="maintenance-hero-note">
              <CheckCircle2 size={17} />
              <span>
                Ongoing maintenance planned around your platform requirements
              </span>
            </div>
          </motion.div>

          {/* HERO SUPPORT DASHBOARD */}
          <motion.div
            className="maintenance-visual"
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="maintenance-visual-orbit maintenance-orbit-one" />
            <div className="maintenance-visual-orbit maintenance-orbit-two" />

            <div className="maintenance-dashboard">
              <div className="maintenance-dashboard-header">
                <div className="maintenance-dashboard-brand">
                  <div className="maintenance-brand-icon">
                    <Activity size={20} />
                  </div>

                  <div>
                    <strong>Platform Care</strong>
                    <span>Maintenance overview</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="maintenance-dashboard-menu"
                  aria-label="Dashboard options"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>

              <div className="maintenance-dashboard-welcome">
                <div>
                  <span>PLATFORM STATUS</span>
                  <h3>System Overview</h3>
                </div>

                <div className="maintenance-status-pill">
                  <span />
                  Overview
                </div>
              </div>

              <div className="maintenance-status-grid">
                <div className="maintenance-status-card">
                  <div className="maintenance-status-card-top">
                    <span>Monitoring</span>
                    <Activity size={17} />
                  </div>

                  <strong>Active</strong>

                  <div className="maintenance-status-indicator">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <small>Service checks</small>
                </div>

                <div className="maintenance-status-card">
                  <div className="maintenance-status-card-top">
                    <span>Updates</span>
                    <ShieldCheck size={17} />
                  </div>

                  <strong>Planned</strong>

                  <div className="maintenance-update-track">
                    <span />
                  </div>

                  <small>Maintenance cycle</small>
                </div>
              </div>

              <div className="maintenance-dashboard-section-title">
                <strong>Maintenance activities</strong>
                <span>Project overview</span>
              </div>

              <div className="maintenance-activity-list">
                <div className="maintenance-activity-item">
                  <div className="maintenance-activity-icon maintenance-icon-blue">
                    <Activity size={17} />
                  </div>

                  <div className="maintenance-activity-copy">
                    <strong>Service monitoring</strong>
                    <span>Availability checks</span>
                  </div>

                  <span className="maintenance-activity-state">
                    Monitoring
                  </span>
                </div>

                <div className="maintenance-activity-item">
                  <div className="maintenance-activity-icon maintenance-icon-cyan">
                    <ShieldCheck size={17} />
                  </div>

                  <div className="maintenance-activity-copy">
                    <strong>Security maintenance</strong>
                    <span>Scheduled updates</span>
                  </div>

                  <span className="maintenance-activity-state">
                    Planned
                  </span>
                </div>

                <div className="maintenance-activity-item">
                  <div className="maintenance-activity-icon maintenance-icon-purple">
                    <RefreshCw size={17} />
                  </div>

                  <div className="maintenance-activity-copy">
                    <strong>Feature enhancements</strong>
                    <span>Release planning</span>
                  </div>

                  <span className="maintenance-activity-state">
                    Review
                  </span>
                </div>
              </div>

              <div className="maintenance-dashboard-footer">
                <div className="maintenance-footer-check">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <strong>Stay on top of platform changes</strong>
                  <span>Maintenance and enhancement workflow</span>
                </div>

                <ArrowUpRight size={18} />
              </div>
            </div>

            <div className="maintenance-floating-card maintenance-floating-top">
              <div className="maintenance-floating-icon">
                <BellRing size={19} />
              </div>

              <div>
                <strong>Monitoring</strong>
                <span>Service checks</span>
              </div>
            </div>

            <div className="maintenance-floating-card maintenance-floating-bottom">
              <div className="maintenance-floating-icon maintenance-floating-green">
                <CheckCircle2 size={19} />
              </div>

              <div>
                <strong>Planned Updates</strong>
                <span>Maintenance cycle</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="maintenance-hero-bottom-line" />
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="maintenance-overview maintenance-section-spacing">
        <div className="maintenance-container maintenance-overview-grid">
          <motion.div
            className="maintenance-overview-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="maintenance-section-label">
              BEYOND THE LAUNCH
            </span>

            <h2>
              Go-live is the
              <span> start, not the finish.</span>
            </h2>
          </motion.div>

          <motion.div
            className="maintenance-overview-copy"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <p>
              A live trading platform needs ongoing attention. Services must
              be monitored, relevant dependencies patched and improvements
              planned as requirements change.
            </p>

            <p>
              Working with the team familiar with the original build gives
              you a direct route to discuss maintenance, investigate issues
              and plan future enhancements.
            </p>

            <div className="maintenance-overview-highlight">
              <div className="maintenance-highlight-icon">
                <RefreshCw size={23} />
              </div>

              <div>
                <strong>Keep improving after launch</strong>
                <span>
                  Monitoring, maintenance and feature work organised around
                  agreed requirements.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SUPPORT SERVICES ================= */}
      <section
        className="maintenance-scope maintenance-section-spacing"
        id="support-scope"
      >
        <div className="maintenance-container">
          <motion.div
            className="maintenance-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="maintenance-section-label">
              WHAT SUPPORT COVERS
            </span>

            <h2>
              Support for the platform
              <span> you depend on.</span>
            </h2>

            <p>
              From monitoring and issue resolution to scheduled updates
              and feature releases, support is organised around your
              platform's requirements.
            </p>
          </motion.div>

          <div className="maintenance-services-grid">
            {supportServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="maintenance-service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                >
                  <div className="maintenance-service-card-top">
                    <div className="maintenance-service-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span>{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="maintenance-service-description">
                    {service.description}
                  </p>

                  <div className="maintenance-service-divider" />

                  <div className="maintenance-service-points">
                    {service.points.map((point) => (
                      <div key={point}>
                        <CheckCircle2 size={15} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="maintenance-service-bottom">
                    <span>Support scope</span>
                    <ArrowUpRight size={19} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SUPPORT PROCESS ================= */}
      <section className="maintenance-process maintenance-section-spacing">
        <div className="maintenance-container">
          <motion.div
            className="maintenance-section-heading"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="maintenance-section-label">
              OUR SUPPORT WORKFLOW
            </span>

            <h2>
              From reported issue
              <span> to validated solution.</span>
            </h2>

            <p>
              A clear workflow helps organise technical issues,
              maintenance tasks and requested enhancements.
            </p>
          </motion.div>

          <div className="maintenance-process-grid">
            {supportSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="maintenance-process-card"
                  key={step.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="maintenance-process-card-top">
                    <span className="maintenance-process-number">
                      {step.number}
                    </span>

                    <div className="maintenance-process-icon">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>

                  {index !== supportSteps.length - 1 && (
                    <div className="maintenance-process-connector">
                      <ArrowRight size={17} />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>

          <div className="maintenance-process-note">
            <Clock3 size={19} />

            <p>
              <strong>Need support for an existing platform?</strong>
              {" "}Tell us what is happening, which components are affected
              and how quickly you need the issue addressed.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY SUPPORT ================= */}
      <section className="maintenance-benefits maintenance-section-spacing">
        <div className="maintenance-container maintenance-benefits-grid">
          <motion.div
            className="maintenance-benefits-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="maintenance-section-label">
              WHY ONGOING SUPPORT
            </span>

            <h2>
              Your platform evolves.
              <span> Your support should too.</span>
            </h2>

            <p>
              Platform requirements do not stop changing after launch.
              Maintenance and enhancement work helps your team address
              issues, plan updates and manage changes over time.
            </p>

            <Link
              to="/contact"
              className="maintenance-text-link"
            >
              Discuss your support needs
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="maintenance-benefits-list">
            {supportBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  className="maintenance-benefit-item"
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="maintenance-benefit-icon">
                    <Icon size={23} />
                  </div>

                  <div className="maintenance-benefit-copy">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>

                  <CheckCircle2
                    className="maintenance-benefit-check"
                    size={19}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="maintenance-contact-section">
        <div className="maintenance-container">
          <motion.div
            className="maintenance-contact-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="maintenance-contact-decoration maintenance-decoration-one" />
            <div className="maintenance-contact-decoration maintenance-decoration-two" />

            <div className="maintenance-contact-content">
              <span className="maintenance-contact-eyebrow">
                LET'S KEEP THINGS RUNNING
              </span>

              <h2>
                Keep your platform
                <span> running.</span>
              </h2>

              <p>
                Already running a live platform? Tell us what needs attention,
                what is breaking and what kind of maintenance or enhancement
                support you are looking for.
              </p>

              <div className="maintenance-contact-actions">
                <Link
                  to="/contact"
                  className="maintenance-btn maintenance-btn-white"
                >
                  Talk to Our Team
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="maintenance-contact-secondary"
                >
                  Contact Us
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="maintenance-contact-reassurance">
                <CheckCircle2 size={16} />
                No obligation. No sales pressure.
              </div>
            </div>

            <div className="maintenance-contact-visual">
              <div className="maintenance-contact-orbit maintenance-contact-orbit-one" />
              <div className="maintenance-contact-orbit maintenance-contact-orbit-two" />

              <div className="maintenance-contact-center">
                <Server size={36} />
              </div>

              <div className="maintenance-contact-node maintenance-node-one">
                <Activity size={21} />
              </div>

              <div className="maintenance-contact-node maintenance-node-two">
                <ShieldCheck size={21} />
              </div>

              <div className="maintenance-contact-node maintenance-node-three">
                <Wrench size={21} />
              </div>

              <div className="maintenance-contact-node maintenance-node-four">
                <RefreshCw size={21} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="maintenance-final-cta">
        <div className="maintenance-container maintenance-final-cta-inner">
          <div>
            <span className="maintenance-section-label">
              YOUR NEXT STEP
            </span>

            <h2>Ready to launch your trading platform?</h2>

            <p>
              Let's discuss your platform, maintenance requirements
              and future development plans.
            </p>
          </div>

          <Link
            to="/contact"
            className="maintenance-btn maintenance-btn-primary"
          >
            Book a Free Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MaintenanceSupport;