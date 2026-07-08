import type { FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  contactMethods,
  developerSkills,
  experience,
  heroMetrics,
  profile,
  profileCards,
  projects,
  services,
  skillGroups,
  toolkitStrip
} from "@/data/portfolio";
import { ContactForm, ProfileRow } from "./contact-form";
import { ExperienceItem, InfoCard, MetricCard, ProjectCard, ServiceCard, SkillPanel } from "./cards";
import { SectionIntro } from "./section-intro";
import { assetSrc, fadeIn, type ContactFormState } from "./shared";

type ContactSectionProps = {
  errors: Partial<ContactFormState>;
  form: ContactFormState;
  onChange: (field: keyof ContactFormState, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  sent: boolean;
};

export function HeroSection() {
  return (
    <section id="home" className="split-hero">
      <div className="split-hero-inner">
        <motion.div {...fadeIn} className="identity-panel identity-panel-left">
          <p className="identity-eyebrow">content side</p>
          <h1>Creator</h1>
          <p>
            Content writing, social media stories, brand messaging, and tech review copy shaped for audiences that need
            clarity before action. AI-assisted video concepts, digital marketing workflows, English teaching materials,
            and practical remote support delivered with structure.
          </p>
          <a href="#projects" className="identity-link">
            portfolio
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="portrait-stage">
          <div className="paint-stack" aria-hidden="true">
            <span className="paint-mark paint-mark-blue" />
            <span className="paint-mark paint-mark-gold" />
            <span className="paint-mark paint-mark-red" />
          </div>
          <Image
            src={assetSrc(profile.image.src)}
            alt={profile.image.alt}
            width={900}
            height={1200}
            priority
            className="hero-person-photo"
          />
          <div className="portrait-caption">
            <span>available remote</span>
            <strong>{profile.name}</strong>
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.16 }} className="identity-panel identity-panel-right">
          <p className="identity-eyebrow">system side</p>
          <h1>&lt;Builder&gt;</h1>
          <p>
            Developer profile for practical web projects, landing pages, portfolio systems, and front-end workflows
            built with clean structure and responsive behavior.
          </p>
          <div className="builder-stack" aria-label="Developer skills">
            {developerSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <a href="#contact" className="identity-link">
            hire me
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>

      <div className="hero-metrics-bar">
        {heroMetrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>
    </section>
  );
}

export function ToolkitStrip() {
  return (
    <section className="toolkit-strip" aria-label="Creative toolkit">
      <div className="toolkit-track">
        {[...toolkitStrip, ...toolkitStrip].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionIntro
        kicker="About"
        title="Two sides, one workflow."
        text="Pyae combines content writing, AI creation, teaching, marketing, and computing knowledge into a practical remote workflow."
      />

      <div className="about-grid">
        <motion.div {...fadeIn} className="statement-panel">
          <p>{profile.about}</p>
          <p>
            He is cooperative, accountable, quality-focused, and available online for {profile.dailyAvailability} for
            remote content, marketing, AI, video, and teaching opportunities.
          </p>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} className="profile-card-grid">
          {profileCards.map((card) => (
            <InfoCard key={card.label} label={card.label} value={card.value} icon={card.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="black-section">
      <div className="section-shell">
        <SectionIntro kicker="Featured" title="Services built for modern content teams." text={profile.intro} inverted />

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ShowcaseSection() {
  return (
    <section id="projects" className="section-shell showcase-section">
      <SectionIntro
        kicker="Experience Showcase"
        title="Proof, projects, and role experience in one place."
        text="A combined showcase of visual proof, content work, AI production, teaching evidence, and hands-on experience."
      />

      <div className="showcase-stack">
        <div className="showcase-block">
          <div className="showcase-subhead">
            <p>Visual proof</p>
            <h3>Selected creative work</h3>
          </div>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div id="experience" className="showcase-block experience-anchor">
          <div className="showcase-subhead">
            <p>Experience</p>
            <h3>Content, teaching, marketing, and AI production</h3>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <ExperienceItem key={`${item.role}-${item.company}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="black-section">
      <div className="section-shell">
        <SectionIntro
          kicker="Skills"
          title="A practical toolkit for execution."
          text="Structured around the work Pyae can do remotely: plan, write, design, produce, communicate, and iterate."
          inverted
        />

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <SkillPanel key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ errors, form, onChange, onSubmit, sent }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell contact-section">
      <SectionIntro
        kicker="Contact"
        title="Let's build clear content together."
        text="Use the form or direct links below for remote roles, freelance content work, and digital marketing support."
      />

      <div className="contact-grid">
        <motion.div {...fadeIn} className="contact-rail">
          {contactMethods.map((method) => (
            <a key={method.label} className="contact-method" href={method.href}>
              <span>
                <small>{method.label}</small>
                <strong>{method.value}</strong>
              </span>
              <ExternalLink size={18} />
            </a>
          ))}

          <div className="profile-summary">
            <p>Profile</p>
            <ProfileRow label="Name" value={profile.name} />
            <ProfileRow label="Birthdate" value={profile.birthdate} />
            <ProfileRow label="Availability" value={profile.availability} />
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }}>
          <ContactForm errors={errors} form={form} onChange={onChange} onSubmit={onSubmit} sent={sent} />
        </motion.div>
      </div>
    </section>
  );
}
