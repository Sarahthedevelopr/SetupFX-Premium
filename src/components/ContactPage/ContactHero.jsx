import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import "./ContactHero.css";

const trustPoints = [
  {
    icon: CalendarDays,
    title: "Reply within",
    detail: "1 business day",
  },
  {
    icon: CheckCircle2,
    title: "Free demo",
    detail: "No pressure",
  },
  {
    icon: ShieldCheck,
    title: "No obligation",
    detail: "Just a conversation",
  },
];

function AnimatedCube() {
  const blocks = [];

  for (let z = 0; z < 3; z++) {
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        const index = z * 9 + y * 3 + x;

        blocks.push(
          <span
            className="contact-cubelet"
            key={`${x}-${y}-${z}`}
            style={{
              "--x": `${(x - 1) * 44}px`,
              "--y": `${(y - 1) * 44}px`,
              "--z": `${(z - 1) * 44}px`,
              "--dx": `${(x - 1) * (82 + (index % 3) * 12)}px`,
              "--dy": `${(y - 1) * (86 + (index % 4) * 10)}px`,
              "--dz": `${(z - 1) * (80 + (index % 5) * 8)}px`,
              "--delay": `${(index % 9) * 0.04}s`,
            }}
          >
            <i className="cube-face cube-front" />
            <i className="cube-face cube-back" />
            <i className="cube-face cube-right" />
            <i className="cube-face cube-left" />
            <i className="cube-face cube-top" />
            <i className="cube-face cube-bottom" />
          </span>
        );
      }
    }
  }

  return (
    <div
      className="contact-cube-scene"
      role="img"
      aria-label="Animated 3D cube that spreads apart and reforms"
    >
      <div className="contact-cube-orbit orbit-one" />
      <div className="contact-cube-orbit orbit-two" />

      <div className="contact-cube-glow" />

      <div className="contact-cube-group">{blocks}</div>

      <span className="contact-cube-particle particle-one" />
      <span className="contact-cube-particle particle-two" />
      <span className="contact-cube-particle particle-three" />

      <div className="contact-cube-caption">
        <span />
        Ideas into infrastructure
      </div>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-grid" aria-hidden="true" />

      <div className="contact-hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="contact-hero-copy"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-eyebrow">
            <span />
            GET IN TOUCH
          </div>

          <h1>
            Let’s talk about
            <span> your project.</span>
          </h1>

          <p className="contact-hero-description">
            Tell us what you’re building. We’ll help you explore the right
            trading technology, define the scope, and plan your next step.
          </p>

          <div className="contact-hero-trust">
            {trustPoints.map(({ icon: Icon, title, detail }, index) => (
              <motion.div
                className="contact-trust-item"
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.12 }}
              >
                <span className="contact-trust-icon">
                  <Icon size={19} />
                </span>

                <span className="contact-trust-text">
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
              </motion.div>
            ))}
          </div>

          <a className="contact-hero-scroll" href="#contact-enquiry">
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* RIGHT ANIMATED CUBE */}
        <motion.div
          className="contact-hero-visual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <AnimatedCube />
        </motion.div>
      </div>

      <div className="contact-hero-bottom-glow" aria-hidden="true" />
    </section>
  );
}