"use client";

import { type ComponentType, type FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ExternalLink, Mail, Menu, Phone, Send, X } from "lucide-react";
import {
  contactMethods,
  experience,
  heroMetrics,
  navLinks,
  profile,
  profileCards,
  projects,
  services,
  skillGroups,
  socialLinks,
  toolkitStrip
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" }
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetSrc(src: string) {
  return `${basePath}${src}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].href);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-32% 0px -54% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const mailtoHref = useMemo(() => {
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Portfolio inquiry")}&body=${body}`;
  }, [form]);

  function updateForm(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  }

  function validateForm() {
    const nextErrors: Partial<FormState> = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!emailPattern.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.subject.trim()) nextErrors.subject = "Add a subject.";
    if (form.message.trim().length < 12) nextErrors.message = "Write at least 12 characters.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    setSent(true);
    window.location.href = mailtoHref;
  }

  return (
    <main className="min-h-screen bg-white text-ink">
      <Header activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section id="home" className="split-hero">
        <div className="split-hero-inner">
          <motion.div {...fadeIn} className="identity-panel identity-panel-left">
            <p className="identity-eyebrow">content side</p>
            <h1>creator</h1>
            <p>
              Content writing, social media stories, brand messaging, and tech review copy shaped for audiences that
              need clarity before action.
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
            <h1>&lt;builder&gt;</h1>
            <p>
              AI-assisted video concepts, digital marketing workflows, English teaching materials, and practical remote
              support delivered with structure.
            </p>
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

      <section className="toolkit-strip" aria-label="Creative toolkit">
        <div className="toolkit-track">
          {[...toolkitStrip, ...toolkitStrip].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

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

      <section id="services" className="black-section">
        <div className="section-shell">
          <SectionIntro
            kicker="Featured"
            title="Services built for modern content teams."
            text={profile.intro}
            inverted
          />

          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionIntro
          kicker="Portfolio"
          title="Selected visual proof and creative work."
          text="A compact showcase of writing, social content, AI creation, teaching materials, and digital marketing work."
        />

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell experience-section">
        <SectionIntro
          kicker="Experience"
          title="Content, teaching, marketing, and AI production."
          text="Hands-on work across Circuit Media, DigitalMarketing.mm, Speakeasy Language Centre, and SkillBridge AI."
        />

        <div className="experience-list">
          {experience.map((item, index) => (
            <ExperienceItem key={`${item.role}-${item.company}`} item={item} index={index} />
          ))}
        </div>
      </section>

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

          <motion.form {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <Field error={errors.name} label="Name" name="name" onChange={(value) => updateForm("name", value)} value={form.name} />
              <Field
                error={errors.email}
                label="Email"
                name="email"
                onChange={(value) => updateForm("email", value)}
                type="email"
                value={form.email}
              />
            </div>
            <Field
              error={errors.subject}
              label="Subject"
              name="subject"
              onChange={(value) => updateForm("subject", value)}
              value={form.subject}
            />
            <Field
              error={errors.message}
              label="Message"
              name="message"
              onChange={(value) => updateForm("message", value)}
              textarea
              value={form.message}
            />
            <button className="btn-primary" type="submit">
              Send message
              <Send size={18} />
            </button>
            {sent ? <p className="form-note">Your email app is opening with the prepared message.</p> : null}
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header({
  activeSection,
  menuOpen,
  setMenuOpen
}: {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="topbar">
      <nav className="topbar-inner" aria-label="Main navigation">
        <a className="brand-mark" href="#home" onClick={() => setMenuOpen(false)}>
          PZ
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} className={cn(activeSection === link.href && "nav-active")} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="topbar-actions">
          <a href={`mailto:${profile.email}`} aria-label="Email Pyae Zaw">
            <Mail size={17} />
          </a>
          <a href={`tel:${profile.phone}`} aria-label="Call Pyae Zaw">
            <Phone size={17} />
          </a>
          <button aria-expanded={menuOpen} aria-label="Toggle navigation menu" onClick={() => setMenuOpen(!menuOpen)} type="button">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <div className={cn("mobile-drawer", menuOpen && "mobile-drawer-open")}>
        {navLinks.map((link) => (
          <a key={link.href} className={cn(activeSection === link.href && "nav-active")} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function SectionIntro({
  inverted = false,
  kicker,
  text,
  title
}: {
  inverted?: boolean;
  kicker: string;
  text: string;
  title: string;
}) {
  return (
    <motion.div {...fadeIn} className={cn("section-intro", inverted && "section-intro-inverted")}>
      <div>
        <p>{kicker}</p>
        <h2>{title}</h2>
      </div>
      <span>{text}</span>
    </motion.div>
  );
}

function MetricCard({ detail, label, value }: { detail: string; label: string; value: string }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <p>{detail}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="info-card">
      <Icon size={22} />
      <small>{label}</small>
      <strong>{value}</strong>
    </div>
  );
}

function ServiceCard({
  description,
  icon: Icon,
  title
}: {
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
}) {
  return (
    <motion.article {...fadeIn} className="service-card">
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

function ProjectCard({ index, project }: { index: number; project: (typeof projects)[number] }) {
  const image = "image" in project ? project.image : undefined;

  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="project-card">
      {image ? (
        <div className="project-media">
          <Image
            src={assetSrc(image.src)}
            alt={image.alt}
            width={1200}
            height={800}
            className={cn("project-media-image", image.fit === "contain" && "project-media-contain")}
          />
        </div>
      ) : (
        <div className="project-mockup" aria-hidden="true">
          <span>{project.number}</span>
          <div />
          <div />
          <div />
        </div>
      )}

      <div className="project-copy">
        <p>{project.category}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
        <div>
          {project.skills.map((skill) => (
            <small key={skill}>{skill}</small>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ExperienceItem({ index, item }: { index: number; item: (typeof experience)[number] }) {
  const certificate = "certificate" in item ? item.certificate : undefined;

  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="experience-item">
      <div className="experience-meta">
        <span>{item.period}</span>
        <strong>{item.label}</strong>
      </div>
      <div className="experience-copy">
        <p>{item.company}</p>
        <h3>{item.role}</h3>
        {certificate ? (
          <div className="experience-evidence-box">
            <div className="experience-media-item certificate-media-item">
              <Image
                src={assetSrc(certificate.src)}
                alt={certificate.alt}
                width={960}
                height={1280}
                className="experience-media-image"
              />
            </div>
          </div>
        ) : null}
        <span>{item.summary}</span>
        <ul>
          {item.points.map((point) => (
            <li key={point}>
              <Check size={17} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function SkillPanel({ group, index }: { group: (typeof skillGroups)[number]; index: number }) {
  return (
    <motion.article {...fadeIn} transition={{ ...fadeIn.transition, delay: index * 0.04 }} className="skill-panel">
      <div>
        <h3>{group.title}</h3>
        <span>{String(group.items.length).padStart(2, "0")}</span>
      </div>
      <p>
        {group.items.map((item) => (
          <small key={item}>{item}</small>
        ))}
      </p>
    </motion.article>
  );
}

function Field({
  error,
  label,
  name,
  onChange,
  textarea = false,
  type = "text",
  value
}: {
  error?: string;
  label: string;
  name: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  type?: string;
  value: string;
}) {
  const fieldId = `field-${name}`;

  return (
    <label className="field" htmlFor={fieldId}>
      <span>{label}</span>
      {textarea ? (
        <textarea id={fieldId} name={name} onChange={(event) => onChange(event.target.value)} value={value} />
      ) : (
        <input id={fieldId} name={name} onChange={(event) => onChange(event.target.value)} type={type} value={value} />
      )}
      {error ? <small>{error}</small> : null}
    </label>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="profile-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{profile.name}</strong>
        <span>{profile.title}</span>
      </div>
      <nav aria-label="Social links">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
