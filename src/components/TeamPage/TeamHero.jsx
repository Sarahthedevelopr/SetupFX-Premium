import React from "react";
import "./TeamHero.css";

const teamStats = [
  {
    number: "15+",
    label: "Team Members",
    icon: "♙",
  },
  {
    number: "6",
    label: "Departments",
    icon: "✳",
  },
  {
    number: "100+",
    label: "Projects Delivered",
    icon: "↗",
  },
  {
    number: "Global",
    label: "Client Support",
    icon: "◎",
  },
];

const TeamHero = () => {
  return (
    <section className="team-hero">
      {/* Background Effects */}
      <div className="team-hero-glow team-hero-glow-one"></div>
      <div className="team-hero-glow team-hero-glow-two"></div>

      <div className="team-hero-container">
        {/* LEFT CONTENT */}
        <div className="team-hero-content">
          <div className="team-hero-eyebrow">
            <span className="team-hero-dot"></span>
            OUR TEAM
          </div>

          <h1 className="team-hero-title">
            The People Behind
            <span className="team-hero-highlight">
              {" "}
              SetupFX.
            </span>
          </h1>

          <p className="team-hero-description">
            Meet the people who turn ideas into powerful trading
            technology. Our developers, designers and specialists
            work together to build reliable solutions for your
            business.
          </p>

          <div className="team-hero-actions">
            <a href="#team-members" className="team-hero-btn-primary">
              Meet Our Team
              <span aria-hidden="true">→</span>
            </a>

            <a href="/contact" className="team-hero-btn-secondary">
              Work With Us
            </a>
          </div>

          {/* STATS */}
          <div className="team-hero-stats">
            {teamStats.map((stat, index) => (
              <div className="team-hero-stat" key={stat.label}>
                <div className="team-hero-stat-top">
                  <span className="team-hero-stat-icon">
                    {stat.icon}
                  </span>

                  <span className="team-hero-stat-number">
                    {stat.number}
                  </span>
                </div>

                <span className="team-hero-stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="team-hero-visual">
          <div className="team-hero-orbit team-hero-orbit-one"></div>
          <div className="team-hero-orbit team-hero-orbit-two"></div>

          <div className="team-hero-image-wrap">
            <img
              src="/src/assets/images/team-hero.png"
              alt="SetupFX team collaborating on trading technology"
              className="team-hero-image"
            />
          </div>

          {/* FLOATING BADGES */}
          <div className="team-hero-badge team-hero-badge-top">
            <span className="team-hero-badge-icon">⌘</span>

            <div>
              <strong>Build Together</strong>
              <span>Technology Solutions</span>
            </div>
          </div>

          <div className="team-hero-badge team-hero-badge-bottom">
            <span className="team-hero-badge-icon">✦</span>

            <div>
              <strong>One Team</strong>
              <span>One Shared Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;