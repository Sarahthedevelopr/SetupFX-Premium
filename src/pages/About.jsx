import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  Handshake,
  Headphones,
  Layers3,
  MapPin,
  MonitorCog,
  Palette,
  Rocket,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import AboutHero from "../components/AboutPage/AboutHero";
import "./About.css";

const processSteps = [
  {
    number: "01",
    title: "Development",
    description:
      "Trading technology shaped around your business model, markets and workflows.",
    Icon: Code2,
  },
  {
    number: "02",
    title: "Branding",
    description:
      "Your identity across the platform experience, from the interface to the client journey.",
    Icon: Palette,
  },
  {
    number: "03",
    title: "Integration",
    description:
      "Connect the services your business needs, including payments, KYC, CRM and APIs.",
    Icon: Workflow,
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Prepare, configure and launch your platform with a clear implementation process.",
    Icon: Rocket,
  },
  {
    number: "05",
    title: "Support",
    description:
      "Keep improving after launch with monitoring, issue resolution and ongoing updates.",
    Icon: Headphones,
  },
];

const principles = [
  {
    number: "01",
    title: "Ownership",
    description:
      "We take responsibility for what we ship, including the parts that are hard to fix.",
    Icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Clarity",
    description:
      "Plain timelines, plain pricing, plain answers. No jargon used to cover gaps.",
    Icon: Compass,
  },
  {
    number: "03",
    title: "Longevity",
    description:
      "Systems built to run for years and scale with your client base.",
    Icon: Layers3,
  },
  {
    number: "04",
    title: "Partnership",
    description:
      "Our best client relationships are measured in years, not project cycles.",
    Icon: Handshake,
  },
];

const disciplines = [
  { label: "Development", Icon: Code2 },
  { label: "Design", Icon: Palette },
  { label: "QA", Icon: CheckCircle2 },
  { label: "DevOps", Icon: MonitorCog },
  { label: "Support", Icon: Headphones },
];

const capabilities = [
  {
    title: "White-label by design",
    description:
      "Your brand, your domain and a platform experience configured for your business.",
    Icon: ShieldCheck,
  },
  {
    title: "Connected systems",
    description:
      "Integrations for payments, KYC, liquidity, CRM and other third-party services.",
    Icon: Blocks,
  },
  {
    title: "Support beyond launch",
    description:
      "A technology partner for monitoring, issue resolution and future enhancements.",
    Icon: Wrench,
  },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <motion.div
      className={`about-section-heading${centered ? " is-centered" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {eyebrow && <span className="about-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />

      {/* INTRO / VALUE PROPOSITION */}
      <section className="about-overview about-section">
        <div className="about-shell about-overview-grid">
          <SectionHeading
            eyebrow="IN SHORT"
            title="Trading platforms, built to launch"
            description="We develop platforms covering global forex markets, Indian exchanges and the prop firm industry — and build custom systems when your business model calls for something different."
          />

          <motion.div
            className="about-overview-panel"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-panel-topline">
              <span className="about-status-dot" />
              <span>BUILT AROUND YOUR BUSINESS</span>
            </div>
            <h3>One technology partner. From first build to go-live.</h3>
            <p>
              Every deployment is white-labelled, integrated with your
              payments and KYC stack, and supported after launch.
            </p>
            <div className="about-panel-tags">
              <span>White-label</span>
              <span>Integrations</span>
              <span>Deployment</span>
              <span>Support</span>
            </div>
            <div className="about-panel-orbit orbit-a" />
            <div className="about-panel-orbit orbit-b" />
            <div className="about-panel-symbol">
              <MonitorCog size={38} strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="about-capabilities about-section">
        <div className="about-shell">
          <SectionHeading
            eyebrow="WHAT YOU CAN EXPECT"
            title="Technology made for real operations"
            description="A platform is more than a screen. It needs a considered user experience, connected services and a team that can support it after launch."
            centered
          />

          <div className="about-capability-grid">
            {capabilities.map(({ title, description, Icon }, index) => (
              <motion.article
                className="about-capability-card"
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="about-card-icon">
                  <Icon size={25} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="about-card-line" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-process about-section">
        <div className="about-shell">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="From development to ongoing support"
            description="A clear, connected process to take your platform from the first requirements to a live product."
            centered
          />

          <div className="about-process-grid">
            {processSteps.map(({ number, title, description, Icon }, index) => (
              <motion.article
                className="about-process-card"
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="about-process-top">
                  <span className="about-process-number">{number}</span>
                  <div className="about-process-icon">
                    <Icon size={22} />
                  </div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="about-principles about-section">
        <div className="about-shell">
          <SectionHeading
            eyebrow="OUR PRINCIPLES"
            title="Four things we hold to"
            description="Good technology comes from clear communication, responsibility and thinking beyond launch day."
            centered
          />

          <div className="about-principles-grid">
            {principles.map(({ number, title, description, Icon }, index) => (
              <motion.article
                className="about-principle-card"
                key={title}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div className="about-principle-top">
                  <span>{number}</span>
                  <Icon size={23} strokeWidth={1.7} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team about-section">
        <div className="about-shell about-team-grid">
          <motion.div
            className="about-team-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-team-visual-glow" />
            <div className="about-team-window">
              <div className="about-window-bar">
                <span />
                <span />
                <span />
                <small>SETUPFX / DELIVERY TEAM</small>
              </div>
              <div className="about-window-content">
                <div className="about-window-sidebar">
                  <span className="active" />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="about-window-main">
                  <div className="about-window-heading">
                    <span />
                    <span />
                  </div>
                  <div className="about-code-lines">
                    <i className="line-wide" />
                    <i className="line-medium" />
                    <i className="line-short" />
                    <i className="line-wide" />
                    <i className="line-medium" />
                    <i className="line-short" />
                  </div>
                  <div className="about-window-chart">
                    <svg viewBox="0 0 340 105" role="img" aria-label="Abstract trading technology chart">
                      <defs>
                        <linearGradient id="aboutChartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00d5ff" stopOpacity=".28" />
                          <stop offset="100%" stopColor="#00d5ff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 82 L34 70 L62 76 L92 43 L121 55 L154 27 L185 42 L218 19 L251 36 L280 12 L310 24 L340 4 L340 105 L0 105 Z" fill="url(#aboutChartFill)" />
                      <path d="M0 82 L34 70 L62 76 L92 43 L121 55 L154 27 L185 42 L218 19 L251 36 L280 12 L310 24 L340 4" fill="none" stroke="#00d5ff" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-team-floating-card">
              <div className="about-floating-check"><CheckCircle2 size={20} /></div>
              <div>
                <strong>Built together</strong>
                <span>Design · Build · Support</span>
              </div>
            </div>
            <div className="about-team-orbit" />
          </motion.div>

          <div className="about-team-copy">
            <SectionHeading
              eyebrow="WHO YOU'LL WORK WITH"
              title="One team, start to finish"
              description="Developers, UI/UX designers, QA engineers, DevOps specialists and support staff — organised into dedicated project teams."
            />
            <p className="about-team-extra">
              You'll know who is building your platform and who to contact
              when something needs attention. No account manager relaying
              messages to a team you never meet.
            </p>

            <div className="about-discipline-list">
              {disciplines.map(({ label, Icon }) => (
                <span className="about-discipline" key={label}>
                  <Icon size={16} />
                  {label}
                </span>
              ))}
            </div>

            <a className="about-text-link" href="/team">
              Meet our team <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section className="about-contact about-section">
        <div className="about-shell">
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Where to find us"
            description="Have a platform in mind? Tell us what you are building and let's talk through the next step."
            centered
          />

          <div className="about-contact-grid">
            <motion.div
              className="about-contact-card about-contact-main"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-contact-icon"><Building2 size={24} /></div>
              <span className="about-contact-label">COMPANY</span>
              <h3>Setupfx Softech OPC Pvt Ltd</h3>
              <div className="about-contact-divider" />
              <span className="about-contact-label">REGISTERED OFFICE</span>
              <p className="about-contact-address">
                4012, 4th Floor, Currency Tower,
                <br />
                Vishal Nagar, Raipur,
                <br />
                Chhattisgarh 492001
              </p>
              <div className="about-gst">
                <ShieldCheck size={16} />
                <span>GST No. 22ABSCS5663H1ZX</span>
              </div>
            </motion.div>

            <motion.div
              className="about-contact-card about-contact-map"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="about-map-art" aria-hidden="true">
                <div className="about-map-grid" />
                <div className="about-map-route route-one" />
                <div className="about-map-route route-two" />
                <div className="about-map-pin"><MapPin size={27} /></div>
                <span className="about-map-label">RAIPUR, INDIA</span>
              </div>
              <div className="about-map-bottom">
                <div>
                  <span className="about-contact-label">OUR LOCATION</span>
                  <h3>Currency Tower</h3>
                  <p>Vishal Nagar, Raipur, Chhattisgarh</p>
                </div>
                <a
                  className="about-map-link"
                  href="https://www.google.com/maps/search/?api=1&query=Currency+Tower+Vishal+Nagar+Raipur+Chhattisgarh"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open SetupFX office location in Google Maps"
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="about-contact-note">
            <Headphones size={18} />
            <span>Prefer to discuss your requirements first?</span>
            <a href="/contact">Contact our team <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* NEXT STEP CTA */}
      <section className="about-next-step about-section">
        <div className="about-shell about-next-grid">
          <motion.div
            className="about-next-copy"
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-eyebrow">NEXT STEP</span>
            <h2>Let's talk about what you're building</h2>
            <p>
              Tell us your business model and target market. We'll show you
              the platform that fits and give you a straight answer on scope
              and timeline.
            </p>
            <div className="about-next-buttons">
              <a className="about-action-primary" href="/contact">
                Book a Free Demo <ArrowRight size={17} />
              </a>
              <a className="about-action-secondary" href="/contact">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-next-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-next-orb orb-one" />
            <div className="about-next-orb orb-two" />
            <div className="about-next-icon"><Rocket size={38} /></div>
            <div className="about-next-ring ring-one" />
            <div className="about-next-ring ring-two" />
            <div className="about-next-caption">
              <span className="about-status-dot" />
              <span>YOUR NEXT BUILD STARTS HERE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-final-cta">
        <div className="about-shell about-final-inner">
          <div className="about-final-glow" />
          <div className="about-final-icon"><ShieldCheck size={24} /></div>
          <div className="about-final-copy">
            <span className="about-eyebrow">LET'S BUILD SOMETHING SOLID</span>
            <h2>Ready to launch your trading platform?</h2>
            <p>
              A software development partner for forex brokerages, Indian
              market brokers and prop firms.
            </p>
          </div>
          <a className="about-action-primary" href="/contact">
            Book a Free Demo <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="about-disclaimer">
        <div className="about-shell">
          <ShieldCheck size={17} />
          <p>
            SetupFX is a software development company only. We build and
            license trading technology; we do not trade, broker, hold, manage
            or handle client funds, and we provide no financial, investment
            or advisory services.
          </p>
        </div>
      </section>
    </main>
  );
}
