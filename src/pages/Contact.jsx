import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Search,
  MessageSquare,
  Layers3,
  FileText,
  Rocket,
  Mail,
  MessageCircle,
  MapPin,
  Headset,
  ChevronDown,
  ShieldCheck,
  Send,
  Clock3,
  Code2,
  Globe,
  Sparkles,
} from "lucide-react";

import ContactHero from "../components/ContactPage/ContactHero";
import "./Contact.css";

const processSteps = [
  {
    number: "01",
    title: "Enquiry Received",
    description:
      "Your project details reach our team for an initial review.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "We understand your business model, goals, and key requirements.",
    icon: Search,
  },
  {
    number: "03",
    title: "Discovery Call",
    description:
      "We discuss your vision, priorities, timeline, and questions.",
    icon: MessageSquare,
  },
  {
    number: "04",
    title: "Solution Planning",
    description:
      "We identify the appropriate platform, features, and integrations.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Scope & Proposal",
    description:
      "You receive a proposed scope, milestones, and quotation.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Project Kick-off",
    description:
      "After approval, we plan the next steps for development.",
    icon: Rocket,
  },
];

const contactItems = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Tell us about your project.",
    value: "Send an email",
    href: "mailto:",
    note: "Project enquiries",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Have a quick question?",
    value: "+1 (908) 228-0305",
    href: "https://wa.me/19082280305",
    note: "Message our team",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    description: "Find us in Raipur, India.",
    value: "Currency Tower, Vishal Nagar",
    href: "https://www.google.com/maps/search/?api=1&query=Currency+Tower+Vishal+Nagar+Raipur+Chhattisgarh",
    note: "View location",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description: "Support for existing clients.",
    value: "24/7 support coverage",
    href: null,
    note: "For live clients",
  },
];

const faqs = [
  {
    question: "How long does a platform take to launch?",
    answer:
      "The timeline depends on the project scope, required features, and integrations. After reviewing your requirements, a proposed timeline and milestones can be prepared.",
  },
  {
    question: "Will the platform carry SetupFX branding?",
    answer:
      "The platforms are designed for white-label deployment, allowing the client-facing experience to use your business branding.",
  },
  {
    question: "Can you customise the platform for my business model?",
    answer:
      "Customisation can cover relevant platform rules, instruments, fees, challenge parameters, user experience, and integrations, depending on the agreed scope.",
  },
  {
    question: "Do you provide mobile applications?",
    answer:
      "Android and iOS applications can be discussed as part of the project scope, including branding and publishing arrangements.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "Post-launch support arrangements, issue resolution, updates, and enhancements can be defined as part of the project's support scope.",
  },
  {
    question: "Do you help with licensing and regulation?",
    answer:
      "Technology and compliance workflows can be discussed with the team. Legal licensing and regulatory obligations depend on your business and jurisdiction, so specialist legal advice is recommended.",
  },
];

function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    platform: "",
    message: "",
  });

  const [enquiryMessage, setEnquiryMessage] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = `SetupFX Enquiry - ${form.platform}`;
    const message = `
New Project Enquiry

Full Name: ${form.fullName}
Email: ${form.email}
Phone / WhatsApp: ${form.phone || "Not provided"}
Company: ${form.company || "Not provided"}
Platform of Interest: ${form.platform}

Project Details:
${form.message}
    `.trim();

    const emailUrl =
      `mailto:?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;
    const whatsappUrl =
      `https://wa.me/19082280305?text=${encodeURIComponent(message)}`;

    setEnquiryMessage({ emailUrl, whatsappUrl });
  }

  return (
    <section className="contact-enquiry-section" id="contact-enquiry">
      <div className="contact-container contact-enquiry-layout">
        <motion.div
          className="contact-form-intro"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="contact-section-label">
            YOUR NEXT STEP
          </span>

          <h2>
            Tell us what
            <span> you're building.</span>
          </h2>

          <p>
            Share a few details about your business and project.
            Our team can use them to understand your requirements
            and prepare for a productive conversation.
          </p>

          <div className="contact-intro-feature">
            <span>
              <CheckCircle2 size={21} />
            </span>

            <div>
              <strong>Every project starts with a conversation.</strong>
              <p>No obligation to proceed.</p>
            </div>
          </div>

          <div className="contact-intro-feature">
            <span>
              <ShieldCheck size={21} />
            </span>

            <div>
              <strong>Clear scope. Clear communication.</strong>
              <p>Discuss your requirements with the team.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {enquiryMessage ? (
            <div className="contact-form-success" role="status">
              <span className="contact-success-icon">
                <CheckCircle2 size={42} />
              </span>

              <h3>Choose how to send your enquiry</h3>

              <p>
                Your enquiry details are ready. Choose email or WhatsApp
                to open a message with your project information included.
                You will need to press Send in the app that opens.
              </p>

              <div className="contact-send-options">
                <a
                  href={enquiryMessage.emailUrl}
                  className="contact-primary-button"
                >
                  <Mail size={18} />
                  Send via Email
                </a>

                <a
                  href={enquiryMessage.whatsappUrl}
                  className="contact-whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </a>
              </div>

              <button
                type="button"
                className="contact-back-button"
                onClick={() => setEnquiryMessage(null)}
              >
                Back to form
              </button>
            </div>
          ) : (
            <>
              <div className="contact-form-heading">
                <span className="contact-form-heading-icon">
                  <Send size={21} />
                </span>

                <div>
                  <h3>Send us an enquiry</h3>
                  <p>Tell us a little about your project.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <label>
                    Full name <span>*</span>

                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </label>

                  <label>
                    Email address <span>*</span>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label>
                    Phone / WhatsApp

                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      autoComplete="tel"
                    />
                  </label>

                  <label>
                    Company name

                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      autoComplete="organization"
                    />
                  </label>

                  <label className="contact-form-full">
                    Platform of interest <span>*</span>

                    <select
                      name="platform"
                      value={form.platform}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a platform</option>
                      <option value="Global Trading Platform">
                        Global Trading Platform
                      </option>
                      <option value="Global Prop Firm Platform">
                        Global Prop Firm Platform
                      </option>
                      <option value="AI Trading Platform">
                        AI Trading Platform
                      </option>
                      <option value="Custom Development">
                        Custom Development
                      </option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </label>

                  <label className="contact-form-full">
                    Tell us about your project <span>*</span>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your requirements, timeline, or questions..."
                      rows={4}
                      required
                    />
                  </label>
                </div>

                <button
                  className="contact-primary-button"
                  type="submit"
                >
                  Send Enquiry
                  <ArrowRight size={18} />
                </button>

                <p className="contact-form-footnote">
                  Your information should only be used to respond
                  to your enquiry.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ContactProcess() {
  return (
    <section className="contact-process-section">
      <div className="contact-container">
        <motion.div
          className="contact-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="contact-section-label">
            WHAT HAPPENS NEXT?
          </span>

          <h2>
            From your enquiry
            <span> to the next step.</span>
          </h2>

          <p>
            A transparent process helps you understand what happens
            after you contact our team.
          </p>
        </motion.div>

        <div className="contact-process-grid">
          {processSteps.map(
            ({ number, title, description, icon: Icon }, index) => (
              <motion.article
                className="contact-process-card"
                key={number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
              >
                <div className="contact-process-top">
                  <span className="contact-process-number">
                    {number}
                  </span>

                  <span className="contact-process-icon">
                    <Icon size={23} strokeWidth={1.7} />
                  </span>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="contact-process-progress">
                  <span style={{ "--progress": `${((index + 1) / 6) * 100}%` }} />
                </div>

                <small>STEP {number} / 06</small>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <section className="contact-info-section">
      <div className="contact-container">
        <motion.div
          className="contact-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="contact-section-label">
            WE'RE HERE TO HELP
          </span>

          <h2>Reach us directly.</h2>

          <p>
            Choose the contact option that works best for you.
          </p>
        </motion.div>

        <div className="contact-info-grid">
          {contactItems.map(
            ({ icon: Icon, title, description, value, href, note }, index) => (
              <motion.article
                className="contact-info-card"
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="contact-info-icon">
                  <Icon size={23} />
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

                {href ? (
                  <a
                    href={href}
                    className="contact-info-link"
                    target={
                      href.startsWith("https://")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("https://")
                        ? "noreferrer"
                        : undefined
                    }
                  >
                    {value}
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <strong className="contact-info-value">
                    {value}
                  </strong>
                )}

                <small>{note}</small>
              </motion.article>
            )
          )}
        </div>

        <div className="contact-company-address">
          <strong>Setupfx Softech OPC Pvt Ltd</strong>

          <span>
            4012, 4th Floor, Currency Tower, Vishal Nagar,
            Raipur, Chhattisgarh 492001
          </span>

          <span>GST No. 22ABSCS5663H1ZX</span>
        </div>
      </div>
    </section>
  );
}

function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="contact-faq-section">
      <div className="contact-container contact-faq-layout">
        <motion.div
          className="contact-faq-intro"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="contact-section-label">
            QUICK ANSWERS
          </span>

          <h2>
            Have questions?
            <span> Start here.</span>
          </h2>

          <p>
            Here are answers to some common questions about
            starting a trading technology project.
          </p>

          <a href="#contact-enquiry" className="contact-faq-link">
            Ask about your project
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="contact-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`contact-faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="contact-faq-question"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={19}
                    className="contact-faq-chevron"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="contact-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <>
      <section className="contact-final-cta">
        <div className="contact-cta-grid" />

        <motion.div
          className="contact-cta-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="contact-section-label">
            <Sparkles size={14} />
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2>
            Ready to launch your
            <span> trading platform?</span>
          </h2>

          <p>
            Let's discuss your business model, requirements,
            and the right technology for your next step.
          </p>

          <a href="#contact-enquiry" className="contact-cta-button">
            Book a Free Demo
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </section>

      <section className="contact-disclaimer">
        <div className="contact-container">
          <p>
            <strong>Disclaimer:</strong> SetupFX is a software
            development company. It builds and licenses trading
            technology and does not provide trading, brokerage,
            fund management, financial, investment, or advisory services.
          </p>
        </div>
      </section>
    </>
  );
}

export default function Contact() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactForm />
      <ContactProcess />
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
    </main>
  );
}