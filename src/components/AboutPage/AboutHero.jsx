import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  LockKeyhole,
  Headset,
  ArrowRight,
} from "lucide-react";

import "./AboutHero.css";
import aboutHeroImage from "../../assets/images/about-hero-hand.png";

const floatingIcons = [
  {
    Icon: ShieldCheck,
    className: "about-float-icon icon-one",
  },
  {
    Icon: LockKeyhole,
    className: "about-float-icon icon-two",
  },
  {
    Icon: Code2,
    className: "about-float-icon icon-three",
  },
];

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Background Effects */}
      <div className="about-hero-grid" />

      <div className="about-hero-glow about-glow-one" />
      <div className="about-hero-glow about-glow-two" />

      {/* Animated Wave Background */}
      <div className="about-wave-wrapper" aria-hidden="true">
        <svg
          className="about-wave-svg"
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="aboutWaveGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#087cff" stopOpacity="0" />
              <stop offset="35%" stopColor="#087cff" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#00d4ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#087cff" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="about-wave wave-one"
            d="M-100 330 C150 100, 250 440, 480 290 S800 100, 1030 280 S1300 410, 1540 100"
          />

          <path
            className="about-wave wave-two"
            d="M-100 370 C160 180, 300 450, 520 330 S800 180, 1030 330 S1300 440, 1540 190"
          />

          <path
            className="about-wave wave-three"
            d="M-100 250 C150 400, 300 100, 520 250 S800 400, 1030 210 S1300 100, 1540 300"
          />
        </svg>
      </div>

      <div className="about-hero-container">
        {/* Left Content */}
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="about-hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="about-eyebrow-dot" />
            SOFTWARE DEVELOPMENT COMPANY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We build the technology behind{" "}
            <span className="about-hero-gradient-text">
              trading businesses
            </span>
          </motion.h1>

          <motion.p
            className="about-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Not a broker. Not a reseller. A development team that
            ships trading platforms ready to run a real business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="about-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="/contact"
              className="about-btn about-btn-primary"
            >
              Book a Free Demo
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="about-btn about-btn-secondary"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="about-hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
          >
            <div className="about-feature">
              <div className="about-feature-icon">
                <Code2 size={21} />
              </div>

              <span>
                White-label
                <br />
                Solutions
              </span>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <ShieldCheck size={21} />
              </div>

              <span>
                Secure &
                <br />
                Scalable
              </span>
            </div>

            <div className="about-feature">
              <div className="about-feature-icon">
                <Headset size={21} />
              </div>

              <span>
                End-to-End
                <br />
                Support
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          className="about-hero-visual"
          initial={{ opacity: 0, scale: 0.88, x: 35 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
        >
          {/* Animated glow behind image */}
          <div className="about-image-glow" />

          {/* Decorative rings */}
          <div className="about-hero-ring about-ring-one" />
          <div className="about-hero-ring about-ring-two" />

          {/* Floating Icons */}
          {floatingIcons.map(({ Icon, className }, index) => (
            <motion.div
              key={className}
              className={className}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
            >
              <Icon size={24} strokeWidth={1.7} />
            </motion.div>
          ))}

          {/* Main Shield + Hand Image */}
          <motion.img
            src={aboutHeroImage}
            alt="Golden shield representing secure trading technology"
            className="about-hero-image"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bottom glowing line */}
          <div className="about-visual-base-glow" />
        </motion.div>
      </div>

      {/* Bottom Border Glow */}
      <div className="about-hero-bottom-line" />
    </section>
  );
}