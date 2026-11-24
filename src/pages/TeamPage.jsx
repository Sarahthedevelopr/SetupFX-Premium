import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  Code2,
  BriefcaseBusiness,
  Palette,
  PanelsTopLeft,
  ShieldCheck,
  Server,
  Network,
  Headset,
  MessageSquare,
  ClipboardList,
  Settings,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import TeamHero from "../components/TeamPage/TeamHero";
import "./TeamPage.css";
import teamImage1 from "../assets/images/team-image1.png";
import teamImage2 from "../assets/images/team-image2.png";
import teamImage3 from "../assets/images/team-image3.png";
import teamImage4 from "../assets/images/team-image4.jpg";
import teamImage5 from "../assets/images/team-image5.jpg";
import teamImage6 from "../assets/images/team-image6.jpg";
import teamImage7 from "../assets/images/team-image7.jpg";
import teamImage8 from "../assets/images/team-image8.jpg";
import teamImage9 from "../assets/images/team-image9.jpg";
// The folder contains team-image110.jpg instead of team-image10; use the existing filename.
import teamImage10 from "../assets/images/team-image110.jpg";
import teamImage11 from "../assets/images/team-image11.avif";
import teamImage12 from "../assets/images/team-image12.jpg";
import teamImage13 from "../assets/images/team-image13.jpg";
import teamImage14 from "../assets/images/team-image14.jpg";
import teamImage15 from "../assets/images/team-image15.jpg";
import teamImage16 from "../assets/images/team-image16.avif";
import teamImage17 from "../assets/images/team-image17.avif";
import teamImage18 from "../assets/images/team-image18.avif";

const teamDepartments = [
  {
    id: "leadership",
    title: "Leadership",
    description: "The person accountable for every platform we ship.",
    icon: UsersRound,
    members: [
      { name: "Shivam Singh", role: "Founder & Director", initials: "SS", image: teamImage1 },
      { name: "Add Team Member", role: "Add name & designation", initials: "+", isPlaceholder: true, image: teamImage2 },
      { name: "Add Team Member", role: "Add name & designation", initials: "+", isPlaceholder: true, image: teamImage3 },
    ],
  },
  {
    id: "management",
    title: "Management",
    description: "Scoping, planning and delivery — the people who own your timeline.",
    icon: BriefcaseBusiness,
    members: [
      { name: "Suresh Chaudhary", role: "Senior Manager", initials: "SC", image: teamImage4 },
      { name: "Nidhi Kashyap", role: "Operation Manager", initials: "NK", image: teamImage5 },
      { name: "Ayush Thakur", role: "Sales Executive", initials: "AT", image: teamImage6 },
    ],
  },
  {
    id: "designing",
    title: "Designing",
    description: "UI/UX for dense data and fast decisions, across web and mobile.",
    icon: Palette,
    members: [
      { name: "Dewanng Kumar", role: "UI Designer, Social Media Management", initials: "DK", image: teamImage7 },
      { name: "Add Team Member", role: "Add name & designation", initials: "+", isPlaceholder: true, image: teamImage8 },
      { name: "Add Team Member", role: "Add name & designation", initials: "+", isPlaceholder: true, image: teamImage9 },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Engineers building the trading terminal, risk logic and back office.",
    icon: Code2,
    members: [
      { name: "Vibhooti Tiwari", role: "Senior Developer", initials: "VT", image: teamImage10 },
      { name: "Vaishanv Kumbhar", role: "Senior Developer", initials: "VK", image: teamImage11 },
      { name: "Tarun Dewangan", role: "Developer", initials: "TD", image: teamImage12 },
      { name: "Harishankar Banjare", role: "Developer", initials: "HB", image: teamImage13 },
      { name: "Shivam Kumar", role: "Developer", initials: "SK", image: teamImage14 },
      { name: "Omkar Mishra", role: "Developer", initials: "OM", image: teamImage15 },
    ],
  },
  {
    id: "quality-support",
    title: "Quality & Support",
    description: "Testing, reliability and assistance throughout the client journey.",
    icon: ShieldCheck,
    members: [
      { name: "Quality Assurance", role: "Testing & Validation", initials: "QA", image: teamImage16 },
      { name: "Client Support", role: "Post-launch Assistance", initials: "CS", image: teamImage17 },
      { name: "Add Team Member", role: "Add name & designation", initials: "+", isPlaceholder: true, image: teamImage18 },
    ],
  },
];

const disciplines = [
  {
    number: "01",
    title: "Platform Development",
    description:
      "Engineers who build the trading terminal, the matching and risk logic, and the back office behind them.",
    icon: Code2,
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Designers working on dense, fast interfaces — order entry, dashboards and mobile layouts.",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Functional, load and user acceptance testing before anything reaches a live client.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "DevOps & Infrastructure",
    description:
      "Deployment, monitoring, scaling and uptime for platforms running real order volume.",
    icon: Server,
  },
  {
    number: "05",
    title: "Integrations",
    description:
      "Payment gateways, KYC and AML providers, liquidity feeds and CRM systems.",
    icon: Network,
  },
  {
    number: "06",
    title: "Client Support",
    description:
      "The people who answer after go-live — issue resolution, updates and enhancement cycles.",
    icon: Headset,
  },
];

const workflow = [
  {
    number: "01",
    title: "Tell us what you're building",
    description:
      "Share your business goals, platform idea and the features you need.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Scope & timeline",
    description:
      "We discuss requirements and provide a written project scope and timeline.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Dedicated project team",
    description:
      "Relevant people from development, design and delivery work on your build.",
    icon: UsersRound,
  },
  {
    number: "04",
    title: "Build, launch & support",
    description:
      "The team works through implementation and remains available for post-launch updates.",
    icon: Rocket,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function SectionLabel({ children }) {
  return (
    <div className="tp-eyebrow">
      <span className="tp-eyebrow-dot" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, description, centered = false }) {
  return (
    <motion.div
      className={`tp-section-heading ${centered ? "tp-heading-centered" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2>
        {title} <span>{accent}</span>
      </h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function TeamMemberCard({ member, index }) {
  return (
    <motion.article
      className="tp-member-card"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: Math.min(index * 0.045, 0.22) }}
      whileHover={{ y: -5 }}
      tabIndex={0}
      aria-label={`${member.name}, ${member.role}`}
    >
      <div className={`tp-member-portrait ${member.isPlaceholder ? "tp-member-portrait-placeholder" : ""}`} aria-hidden="true">
        {member.image ? (
          <img src={member.image} alt="" loading="lazy" />
        ) : (
          <span className="tp-member-initials">{member.initials}</span>
        )}
        <div className="tp-member-overlay">
          <span className="tp-member-name">{member.name}</span>
          <span className="tp-member-role">{member.role}</span>
          <span className="tp-member-hover-line" />
        </div>
      </div>
    </motion.article>
  );
}

function TeamMembersSection() {
  return (
    <section className="tp-team-section" id="team-members">
      <div className="tp-container">
        <SectionHeading
          eyebrow="WHO YOU'LL WORK WITH"
          title="The Team Behind"
          accent="Your Build."
          description="Meet the people and core functions behind your platform — from leadership and delivery to development, quality and support."
        />

        <div className="tp-departments">
          {teamDepartments.map((department, departmentIndex) => {
            const DepartmentIcon = department.icon;
            return (
              <motion.section
                className={`tp-department tp-department-${department.id}`} style={{ "--member-count": department.members.length }}
                key={department.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: departmentIndex * 0.05 }}
              >
                <div className="tp-department-heading">
                  <div className="tp-department-icon">
                    <DepartmentIcon size={21} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3>{department.title}</h3>
                    <p>{department.description}</p>
                  </div>
                  <span className="tp-department-count">
                    {String(department.members.length).padStart(2, "0")}
                  </span>
                </div>

                <div className={`tp-members-grid ${department.members.length === 1 ? "tp-members-grid-single" : ""}`}>
                  {department.members.map((member, index) => (
                    <TeamMemberCard
                      key={member.name}
                      member={member}
                      index={index}
                    />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamDisciplinesSection() {
  return (
    <section className="tp-disciplines-section" id="team-expertise">
      <div className="tp-container">
        <SectionHeading
          eyebrow="MEET OUR TEAM"
          title="Teamwork Makes the"
          accent="Platform Work."
          description="Six disciplines, organised into a dedicated team for every build."
        />

        <div className="tp-disciplines-grid">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="tp-discipline-card"
                key={item.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: (index % 3) * 0.07 }}
                whileHover={{ y: -7 }}
              >
                <div className="tp-discipline-card-top">
                  <div className="tp-discipline-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <span>{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tp-discipline-bottom-line" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamWorkflowSection() {
  return (
    <section className="tp-workflow-section" id="team-process">
      <div className="tp-container">
        <SectionHeading
          eyebrow="A CLEAR WAY FORWARD"
          title="From First Conversation"
          accent="to Your Build."
          description="A straightforward project journey, with communication and responsibilities made clear from the start."
        />

        <div className="tp-workflow-grid">
          {workflow.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                className="tp-workflow-card"
                key={step.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -5 }}
              >
                <div className="tp-workflow-number">{step.number}</div>
                <div className="tp-workflow-icon">
                  <Icon size={22} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < workflow.length - 1 && (
                  <span className="tp-workflow-connector" aria-hidden="true">
                    <ArrowRight size={17} />
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorkWithTeamSection() {
  return (
    <section className="tp-next-step-section" id="work-with-us">
      <motion.div
        className="tp-container tp-next-step-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="tp-next-step-copy">
          <SectionLabel>NEXT STEP</SectionLabel>
          <h2>
            Want This Team
            <span> on Your Project?</span>
          </h2>
          <p>
            Tell us what you are building. We will put the right people on it
            and give you a written scope and timeline.
          </p>
          <div className="tp-next-step-points">
            <span><CheckCircle2 size={16} /> A team matched to your project</span>
            <span><CheckCircle2 size={16} /> Written scope and timeline</span>
          </div>
          <div className="tp-cta-buttons">
            <a
              className="tp-button tp-button-primary"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
            >
              Book a Free Demo <ArrowRight size={17} />
            </a>
            <a className="tp-button tp-button-secondary" href="/contact">
              Contact Us
            </a>
          </div>
          <small>No obligation. No sales pressure. Just a straight conversation about your project.</small>
        </div>

        <div className="tp-next-step-visual" aria-hidden="true">
          <div className="tp-visual-orbit tp-visual-orbit-one" />
          <div className="tp-visual-orbit tp-visual-orbit-two" />
          <div className="tp-visual-glow" />
          <div className="tp-visual-dashboard">
            <div className="tp-dashboard-header">
              <div className="tp-dashboard-dots"><i /><i /><i /></div>
              <span>PROJECT TEAM</span>
              <Sparkles size={16} />
            </div>
            <div className="tp-dashboard-row">
              <span><Code2 size={18} /></span>
              <div><b>Development</b><i /></div>
              <CheckCircle2 size={17} />
            </div>
            <div className="tp-dashboard-row">
              <span><Palette size={18} /></span>
              <div><b>Design</b><i /></div>
              <CheckCircle2 size={17} />
            </div>
            <div className="tp-dashboard-row">
              <span><Settings size={18} /></span>
              <div><b>Delivery</b><i /></div>
              <CheckCircle2 size={17} />
            </div>
            <div className="tp-dashboard-progress"><span /></div>
            <div className="tp-dashboard-caption">Working together, from scope to launch</div>
          </div>
          <div className="tp-visual-float tp-visual-float-one"><UsersRound size={21} /></div>
          <div className="tp-visual-float tp-visual-float-two"><Rocket size={20} /></div>
        </div>
      </motion.div>
    </section>
  );
}

function FinalTeamCTA() {
  return (
    <motion.section
      className="tp-final-cta"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <div className="tp-container tp-final-cta-inner">
        <div>
          <SectionLabel>READY TO GET STARTED?</SectionLabel>
          <h2>Ready to Launch Your Trading Platform?</h2>
          <p>Let's talk about what you want to build.</p>
        </div>
        <a
          className="tp-button tp-button-primary"
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
        >
          Book a Free Demo <ArrowRight size={17} />
        </a>
      </div>
    </motion.section>
  );
}

export default function TeamPage() {
  return (
    <main className="tp-page">
      <TeamHero />
      <TeamMembersSection />
      <TeamDisciplinesSection />
      <TeamWorkflowSection />
      <WorkWithTeamSection />
      <FinalTeamCTA />
    </main>
  );
}
