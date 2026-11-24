import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  Menu,
  MonitorSmartphone,
  Network,
  Puzzle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  Zap,
  Headphones,
  Settings2,
  Rocket,
  ChartNoAxesCombined,
  Bot,
  Wallet,
  CircleHelp,
  MessageCircle,
  Terminal,
  Activity,
  Server,
} from "lucide-react";

import "./Home.css";
import HomeHero from "./HomeHero";

const WHATSAPP_NUMBER = "91YOURNUMBER";

const platforms = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Forex Trading Platform",
    description:
      "Build a trading environment with tailored interfaces, essential trading tools, and integrations aligned with your brokerage model.",
    tags: ["Trading Interface", "Broker Tools"],
    link: "/platforms/forex-trading-platform",
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Global Prop Firm Platform",
    description:
      "Create a prop trading ecosystem with challenge workflows, trader dashboards, rule management, and performance tracking.",
    tags: ["Challenge Management", "Trader Dashboard"],
    link: "/platforms/global-prop-firm-platform",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Indian Trading Platform",
    description:
      "Develop trading software around your business requirements, market workflows, and relevant integrations.",
    tags: ["Custom Workflows", "Integrations"],
    link: "/platforms/indian-trading-platform",
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Trading Platform",
    description:
      "Explore AI-assisted analytics, strategy tools, automated workflows, and data-driven trading capabilities.",
    tags: ["AI Workflows", "Analytics"],
    link: "/platforms/ai-trading-platform",
  },
];

const services = [
  {
    icon: Code2,
    title: "Trading Platform Development",
    description:
      "Custom trading software designed around your business model, users, and operational requirements.",
    link: "/services/trading-platform-development",
  },
  {
    icon: Layers3,
    title: "White-Label Solutions",
    description:
      "Build a branded trading experience using a solution tailored to your launch requirements.",
    link: "/services/white-label-solutions",
  },
  {
    icon: Network,
    title: "Integration Services",
    description:
      "Connect relevant third-party services, APIs, payment systems, and operational tools.",
    link: "/services/integration-services",
  },
  {
    icon: Settings2,
    title: "Maintenance & Support",
    description:
      "Keep your platform evolving with technical assistance, updates, and ongoing improvements.",
    link: "/services/maintenance-support",
  },
];

const infrastructure = [
  {
    icon: MonitorSmartphone,
    title: "Trading Interface",
    description:
      "A focused user experience for accessing trading tools and relevant information.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "Support business-defined risk rules and workflows through suitable system integrations.",
  },
  {
    icon: Workflow,
    title: "Admin Back Office",
    description:
      "Organise operational workflows, user management, and platform administration.",
  },
  {
    icon: Wallet,
    title: "Payment Integrations",
    description:
      "Connect suitable payment services to support your business's transaction workflows.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Discover",
    description:
      "We understand your business model, target users, requirements, and project scope.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Design",
    description:
      "We plan the user experience, interface, system architecture, and implementation approach.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Develop",
    description:
      "We build the agreed solution and work on the required integrations and functionality.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy & Improve",
    description:
      "We prepare the agreed deployment and discuss the ongoing support your project needs.",
  },
];

const benefits = [
  {
    icon: Puzzle,
    title: "Built Around Your Business",
    description:
      "Solutions shaped around your business model, workflows, and specific requirements.",
  },
  {
    icon: Cpu,
    title: "Flexible Technology",
    description:
      "A technology approach selected according to the needs and complexity of your project.",
  },
  {
    icon: Zap,
    title: "Integration-Ready",
    description:
      "Connect relevant third-party tools and services based on your technical requirements.",
  },
  {
    icon: Headphones,
    title: "Ongoing Technical Support",
    description:
      "Discuss maintenance, troubleshooting, and future improvements for your platform.",
  },
];

const integrations = [
  "Payment Gateways",
  "KYC & Verification",
  "CRM Systems",
  "Market Data APIs",
  "Liquidity Integrations",
  "Third-Party APIs",
];

const faqs = [
  {
    question: "What types of trading platforms can you develop?",
    answer:
      "We can discuss Forex Trading Platforms, Global Prop Firm Platforms, Indian Trading Platforms, and AI-focused trading solutions. The final scope depends on your business requirements and the integrations needed.",
  },
  {
    question: "Can I launch a platform under my own brand?",
    answer:
      "White-label solutions can be explored for businesses that want a branded platform. The available features, customisation, licensing, and third-party dependencies need to be confirmed for each project.",
  },
  {
    question: "Can the platform be customised?",
    answer:
      "Yes, customisation requirements can be discussed for the interface, workflows, business rules, integrations, and administrative experience, subject to the agreed project scope.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Integration requirements can be evaluated for services such as payment gateways, verification providers, CRM systems, and APIs. Compatibility and provider requirements must be checked before implementation.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on the project scope, complexity, design requirements, integrations, and testing. We would need to understand your requirements before providing a realistic estimate.",
  },
  {
    question: "How can I discuss my project?",
    answer:
      "Use the Get Started or WhatsApp button to share your requirements. You can describe your business, the type of platform you need, and the functionality you want to explore.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 32,
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

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`section-heading ${
        centered ? "section-heading-centered" : ""
      }`}
    >
      <span className="section-eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function TrustHighlights() {
  const highlights = [
    {
      icon: Layers3,
      title: "Custom Solutions",
      description: "Designed around your business",
    },
    {
      icon: Network,
      title: "Connected Systems",
      description: "Relevant third-party integrations",
    },
    {
      icon: Settings2,
      title: "Flexible Workflows",
      description: "Aligned with your requirements",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Support options for your project",
    },
  ];

  return (
    <section className="trust-section" id="trust-highlights">
      <div className="site-container">
        <div className="trust-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="trust-item">
                  <div className="trust-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section className="home-section platforms-section" id="platforms">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="OUR PLATFORMS"
            title={
              <>
                Technology for Your
                <span> Trading Vision.</span>
              </>
            }
            description="Explore platform solutions shaped around your business model, operational needs, and long-term goals."
            centered
          />
        </Reveal>

        <div className="platform-grid">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <Reveal
                key={platform.title}
                delay={index * 0.08}
                className="platform-reveal"
              >
                <article className="platform-card">
                  <div className="platform-card-top">
                    <span className="platform-number">
                      / {platform.number}
                    </span>

                    <div className="platform-icon">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="platform-corner">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <h3>{platform.title}</h3>
                  <p>{platform.description}</p>

                  <div className="platform-tags">
                    {platform.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a className="text-link" href={platform.link}>
                    Explore Platform
                    <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="home-section services-section" id="services">
      <div className="site-container">
        <Reveal>
          <div className="services-heading-row">
            <SectionHeading
              eyebrow="WHAT WE DO"
              title={
                <>
                  Everything You Need to
                  <span> Build & Scale.</span>
                </>
              }
              description="From development to integration, explore the technical services that can help bring your trading technology vision to life."
            />

            <a className="button button-secondary services-all-link" href="/services">
              Explore All Services
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                className="service-reveal"
              >
                <a className="service-card" href={service.link}>
                  <div className="service-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="service-arrow">
                    <ArrowUpRight size={19} />
                  </span>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <span className="text-link">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TradingInfrastructure() {
  return (
    <section className="home-section infrastructure-section" id="infrastructure">
      <div className="infrastructure-glow" />

      <div className="site-container infrastructure-layout">
        <Reveal className="infrastructure-copy">
          <SectionHeading
            eyebrow="TRADING INFRASTRUCTURE"
            title={
              <>
                One Ecosystem.
                <span> Connected Technology.</span>
              </>
            }
            description="A trading platform is more than its interface. Explore the systems, workflows, and integrations that can work together to support your business."
          />

          <div className="infrastructure-points">
            <div>
              <Check size={17} />
              <span>Business-specific workflows</span>
            </div>

            <div>
              <Check size={17} />
              <span>Relevant system integrations</span>
            </div>

            <div>
              <Check size={17} />
              <span>Administrative and user experiences</span>
            </div>
          </div>

          <a className="button button-primary" href="/services/integration-services">
            Explore Integrations
            <ArrowUpRight size={17} />
          </a>
        </Reveal>

        <Reveal className="infrastructure-visual" delay={0.12}>
          <div className="infra-visual-heading">
            <div>
              <span className="dashboard-muted">SYSTEM OVERVIEW</span>
              <h3>Connected Architecture</h3>
            </div>

            <span className="infra-status">
              <span />
              SYSTEM MAP
            </span>
          </div>

          <div className="infra-diagram">
            <div className="infra-connectors">
              <span className="infra-connector connector-one" />
              <span className="infra-connector connector-two" />
              <span className="infra-connector connector-three" />
              <span className="infra-connector connector-four" />
            </div>

            <div className="infra-node infra-node-top">
              <Network size={19} />
              <span>External Services</span>
            </div>

            <div className="infra-node infra-node-left">
              <MonitorSmartphone size={19} />
              <span>Trading UI</span>
            </div>

            <div className="infra-core">
              <div className="infra-core-icon">
                <Workflow size={29} />
              </div>

              <strong>Trading Platform</strong>
              <span>Core Application</span>
            </div>

            <div className="infra-node infra-node-right">
              <ShieldCheck size={19} />
              <span>Risk Rules</span>
            </div>

            <div className="infra-node infra-node-bottom">
              <Server size={19} />
              <span>Admin & Operations</span>
            </div>
          </div>

          <div className="infra-legend">
            <span>
              <i className="legend-blue" />
              Core platform
            </span>

            <span>
              <i className="legend-cyan" />
              Connected systems
            </span>
          </div>
        </Reveal>
      </div>

      <div className="site-container infra-cards">
        {infrastructure.map((item, index) => {
          const Icon = item.icon;

          return (
            <Reveal key={item.title} delay={index * 0.07}>
              <article className="infra-card">
                <Icon size={22} />

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="home-section process-section" id="process">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="OUR APPROACH"
            title={
              <>
                From First Idea to
                <span> Implementation.</span>
              </>
            }
            description="A structured approach helps turn your requirements into a clear development plan."
            centered
          />
        </Reveal>

        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} delay={index * 0.09}>
                <article className="process-card">
                  <div className="process-card-top">
                    <span>{step.number}</span>

                    <div className="process-icon">
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  {index !== processSteps.length - 1 && (
                    <ArrowRight className="process-next" size={18} />
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="home-section benefits-section" id="why-setupfx">
      <div className="site-container benefits-layout">
        <Reveal>
          <SectionHeading
            eyebrow="WHY SETUPFX"
            title={
              <>
                Technology With
                <span> Your Goals in Focus.</span>
              </>
            }
            description="Every trading business has different needs. The right technology should support your workflows, integration requirements, and future plans."
          />

          <a className="text-link benefits-link" href="/about">
            Learn About SetupFX
            <ArrowRight size={17} />
          </a>
        </Reveal>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.title} delay={index * 0.07}>
                <article className="benefit-card">
                  <div className="benefit-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="home-section integrations-section" id="integrations">
      <div className="site-container integrations-layout">
        <Reveal>
          <SectionHeading
            eyebrow="INTEGRATION ECOSYSTEM"
            title={
              <>
                Connect the Tools
                <span> Your Business Needs.</span>
              </>
            }
            description="Explore integrations that can support your operational workflows. The exact options depend on provider availability, compatibility, and project scope."
          />

          <a
            className="text-link"
            href="/services/integration-services"
          >
            Discuss Your Requirements
            <ArrowRight size={17} />
          </a>
        </Reveal>

        <Reveal className="integration-cloud" delay={0.12}>
          <div className="integration-orbit integration-orbit-one" />
          <div className="integration-orbit integration-orbit-two" />

          <div className="integration-center">
            <div>
              <Network size={30} />
            </div>

            <strong>Your Platform</strong>
            <span>Connected Ecosystem</span>
          </div>

          {integrations.map((item, index) => (
            <motion.div
              key={item}
              className={`integration-pill integration-pill-${index + 1}`}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              <span className="integration-pill-dot" />
              {item}
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-section faq-section" id="faq">
      <div className="site-container faq-layout">
        <Reveal>
          <SectionHeading
            eyebrow="COMMON QUESTIONS"
            title={
              <>
                Let's Clear Things
                <span> Up.</span>
              </>
            }
            description="A few things to know before starting your trading technology project."
          />

          <div className="faq-help-card">
            <div className="faq-help-icon">
              <CircleHelp size={22} />
            </div>

            <h3>Have a different question?</h3>
            <p>Tell us what you're planning to build.</p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hi SetupFX, I have a question about your trading technology services."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              <MessageCircle size={17} />
              Talk to Our Team
            </a>
          </div>
        </Reveal>

        <Reveal className="faq-list" delay={0.1}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{faq.question}</span>

                  <ChevronDown
                    className="faq-chevron"
                    size={19}
                  />
                </button>

                <motion.div
                  className="faq-answer-wrapper"
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: "easeInOut",
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta-section" id="contact-cta">
      <div className="site-container">
        <Reveal>
          <div className="final-cta-card">
            <div className="cta-glow cta-glow-one" />
            <div className="cta-glow cta-glow-two" />
            <div className="cta-grid" />

            <div className="cta-content">
              <span className="section-eyebrow">
                <span className="eyebrow-dot" />
                LET'S BUILD SOMETHING MEANINGFUL
              </span>

              <h2>
                Ready to Build Your
                <span> Trading Platform?</span>
              </h2>

              <p>
                Tell us about your business, your requirements, and
                the technology you need. Let's discuss the right
                approach for your project.
              </p>

              <div className="cta-actions">
                <a
                  className="button button-primary"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hi SetupFX, I would like to discuss my trading platform project."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let's Talk
                  <ArrowUpRight size={18} />
                </a>

                <a className="button button-secondary" href="/contact">
                  Contact Us
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="cta-visual" aria-hidden="true">
              <div className="cta-visual-ring ring-one" />
              <div className="cta-visual-ring ring-two" />
              <div className="cta-visual-ring ring-three" />

              <div className="cta-visual-core">
                <Terminal size={35} />
              </div>

              <span className="cta-floating-icon cta-icon-one">
                <Code2 size={19} />
              </span>

              <span className="cta-floating-icon cta-icon-two">
                <Network size={19} />
              </span>

              <span className="cta-floating-icon cta-icon-three">
                <Cpu size={19} />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />
      <TrustHighlights />
      <Platforms />
      <Services />
      <TradingInfrastructure />
      <HowWeWork />
      <WhyChooseUs />
      <Integrations />
      <FAQs />
      <FinalCTA />
    </main>
  );
}