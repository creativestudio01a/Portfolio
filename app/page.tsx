"use client";

import { type ComponentType, type FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  Sun,
  X
} from "lucide-react";
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
  transition: { duration: 0.55, ease: "easeOut" }
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function assetSrc(src: string) {
  return `${basePath}${src}`;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].href);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("pyae-zaw-theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("pyae-zaw-theme", theme);
  }, [theme]);

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
    <main className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-50">
      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setTheme={setTheme}
        theme={theme}
      />

      <section id="home" className="section-shell min-h-[calc(100vh-4rem)] pt-28 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <motion.div {...fadeIn} className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label-pill border-signal/35 bg-signal/10 text-signal">Available for remote work</span>
              <span className="text-sm text-muted dark:text-neutral-400">Mandalay, Myanmar</span>
            </div>

            <div className="space-y-5">
              <p className="section-kicker">Remote content and digital professional</p>
              <h1 className="max-w-4xl text-[clamp(3rem,9vw,8.4rem)] font-semibold leading-[0.9] tracking-normal">
                Ideas Into Content.
                <span className="block text-signal">Content Into Impact.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted dark:text-neutral-300">
                I am {profile.name}. I build content, AI-assisted creative systems, social media stories, scripts, and
                remote marketing support for teams that need clear execution.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#experience">
                View experience
                <ArrowRight size={18} />
              </a>
              <a className="btn-secondary" href="#contact">
                Contact me
                <Mail size={18} />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} className="hero-visual">
            <div className="profile-showcase">
              <div className="profile-photo-frame">
                <Image
                  src={assetSrc(profile.image.src)}
                  alt={profile.image.alt}
                  width={900}
                  height={1200}
                  priority
                  className="profile-photo"
                />
              </div>

              <div className="mt-5 flex items-end justify-between gap-4 border-t border-line pt-5 dark:border-neutral-800">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted dark:text-neutral-400">
                    Portfolio Snapshot
                  </span>
                  <p className="mt-2 text-3xl font-semibold leading-none tracking-normal">{profile.name}</p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted dark:text-neutral-300">{profile.title}</p>
                </div>
                <span className="grid size-12 shrink-0 place-items-center border border-ink bg-white text-sm font-bold text-signal dark:border-neutral-700 dark:bg-neutral-950">
                  PZ
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {["Content writing", "AI content creation", "Digital marketing", "Video production"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border border-line bg-paper px-4 py-3 text-sm font-semibold dark:border-neutral-800 dark:bg-neutral-950"
                  >
                    <span>{item}</span>
                    <Check className="text-signal" size={17} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <StatusPanel title="Core Work" value="Content + AI" detail="Writing, social content, visuals, and workflow support" />
              <StatusPanel title="Response Window" value="12-14h" detail="Daily online availability for remote teams" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-5 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-max animate-marquee items-center gap-6">
            {[...toolkitStrip, ...toolkitStrip].map((item, index) => (
              <span key={`${item}-${index}`} className="text-sm font-medium uppercase tracking-[0.18em] text-muted dark:text-neutral-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell">
        <SectionIntro
          kicker="About"
          title="A creative professional built for remote work."
          text="Pyae combines content writing, AI creation, teaching, marketing, and computing knowledge into a practical remote workflow."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div {...fadeIn} className="space-y-6">
            <div className="profile-focus-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">Remote Profile</p>
              <div className="mt-6 grid gap-3">
                {[
                  "Content writing for social, business, and tech audiences",
                  "AI-assisted research, scripts, visuals, and production support",
                  "Clear communication for remote teams and online workflows",
                  "Education background with C1-level English teaching experience"
                ].map((item) => (
                  <div key={item} className="flex gap-3 border-t border-line pt-3 dark:border-neutral-800">
                    <Check className="mt-1 shrink-0 text-signal" size={17} />
                    <span className="leading-7 text-muted dark:text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted dark:text-neutral-300">{profile.about}</p>
            <p className="max-w-xl text-lg leading-8 text-muted dark:text-neutral-300">
              He is cooperative, accountable, quality-focused, and available online for {profile.dailyAvailability} for
              remote content, marketing, AI, video, and teaching opportunities.
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.1 }} className="grid gap-3 sm:grid-cols-2">
            {profileCards.map((card) => (
              <InfoCard key={card.label} label={card.label} value={card.value} icon={card.icon} />
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-y border-line bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <motion.div {...fadeIn}>
              <p className="section-kicker">Services</p>
              <h2 className="mt-4 text-[clamp(2.4rem,5vw,5.6rem)] font-semibold leading-[0.96]">
                Practical content support for remote teams.
              </h2>
            </motion.div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} className="space-y-6">
              <p className="text-lg leading-8 text-muted dark:text-neutral-300">{profile.intro}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                <MetricCard value="4" label="core services" detail="content, AI, marketing, video" />
                <MetricCard value="2+" label="years writing" detail="social, tech, and business content" />
                <MetricCard value="C1" label="English level" detail="teaching and communication" />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionIntro
          kicker="Portfolio"
          title="Selected content systems and creative work."
          text="A compact showcase of writing, social content, AI creation, teaching materials, and digital marketing work."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-line bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="section-shell">
          <SectionIntro
            kicker="Experience"
            title="Content, teaching, marketing, and AI production."
            text="Hands-on work across personal channels, early clients, classrooms, and AI-supported creative workflows."
          />

          <div className="space-y-4">
            {experience.map((item, index) => (
              <ExperienceItem key={`${item.role}-${item.company}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell">
        <SectionIntro
          kicker="Skills"
          title="A practical toolkit for modern content teams."
          text="Structured around the work Pyae can do remotely: plan, write, design, produce, communicate, and iterate."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillPanel key={group.title} group={group} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-signal text-white">
        <div className="section-shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">Availability</p>
              <h2 className="mt-4 max-w-4xl text-[clamp(2.3rem,5vw,5.4rem)] font-semibold leading-[0.96]">
                Ready to support your team remotely.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
                Available for remote content writing, digital marketing, AI content creation, social media management,
                video script writing, and English teaching opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a className="btn-inverted" href={`mailto:${profile.email}`}>
                Send an email
                <Mail size={18} />
              </a>
              <a className="btn-ghost-light" href={`tel:${profile.phone}`}>
                Contact via phone
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Remote work only", "Online 12-14 hours daily", "Based in Mandalay", "Freelance, part-time, full-time"].map(
              (item) => (
                <div key={item} className="border border-white/24 bg-white/10 p-4 text-sm font-medium backdrop-blur">
                  <Check className="mb-5" size={18} />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell">
        <SectionIntro
          kicker="Contact"
          title="Let's build clear content together."
          text="Use the form or direct links below for remote roles, freelance content work, and digital marketing support."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeIn} className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                className="group flex items-center justify-between border border-line bg-white p-5 transition hover:border-signal hover:text-signal dark:border-neutral-800 dark:bg-neutral-900"
                href={method.href}
              >
                <span>
                  <span className="block text-sm uppercase tracking-[0.18em] text-muted dark:text-neutral-400">
                    {method.label}
                  </span>
                  <span className="mt-2 block text-lg font-semibold">{method.value}</span>
                </span>
                <ExternalLink className="transition group-hover:translate-x-1" size={18} />
              </a>
            ))}

            <div className="border border-line bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-sm uppercase tracking-[0.18em] text-muted dark:text-neutral-400">Profile</p>
              <dl className="mt-4 grid gap-3 text-sm">
                <ProfileRow label="Name" value={profile.name} />
                <ProfileRow label="Birthdate" value={profile.birthdate} />
                <ProfileRow label="Availability" value={profile.availability} />
              </dl>
            </div>
          </motion.div>

          <motion.form {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.12 }} onSubmit={handleSubmit} className="contact-form">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.name}
                label="Name"
                name="name"
                onChange={(value) => updateForm("name", value)}
                value={form.name}
              />
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
            <button className="btn-primary w-full justify-center sm:w-auto" type="submit">
              Send message
              <Send size={18} />
            </button>
            {sent ? (
              <p className="text-sm font-medium text-signal">Your email app is opening with the prepared message.</p>
            ) : null}
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
  setMenuOpen,
  setTheme,
  theme
}: {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setTheme: (theme: "light" | "dark") => void;
  theme: "light" | "dark";
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper/86 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/82">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a className="flex items-center gap-3" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="grid size-9 place-items-center border border-ink bg-white text-sm font-bold text-signal dark:border-neutral-700 dark:bg-neutral-900">
            PZ
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.16em]">{profile.name}</span>
            <span className="block text-xs text-muted dark:text-neutral-400">Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={cn("nav-link", activeSection === link.href && "nav-link-active")}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="icon-button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="hidden h-10 items-center gap-2 border border-ink px-4 text-sm font-semibold transition hover:bg-ink hover:text-white dark:border-neutral-700 dark:hover:bg-neutral-100 dark:hover:text-neutral-950 sm:flex" href="#contact">
            <Mail size={17} />
            Contact
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="icon-button lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={cn("mobile-menu lg:hidden", menuOpen ? "max-h-[480px] border-t border-line dark:border-neutral-800" : "max-h-0")}>
        <div className="space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={cn("mobile-link", activeSection === link.href && "mobile-link-active")}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="btn-primary mt-4 w-full justify-center" href="#contact">
            Contact
            <Mail size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionIntro({ kicker, text, title }: { kicker: string; text: string; title: string }) {
  return (
    <motion.div {...fadeIn} className="mb-10 grid gap-4 lg:mb-14 lg:grid-cols-[0.72fr_1fr] lg:items-end">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,5.4rem)] font-semibold leading-[0.96]">{title}</h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-muted dark:text-neutral-300">{text}</p>
    </motion.div>
  );
}

function MetricCard({ detail, label, value }: { detail: string; label: string; value: string }) {
  return (
    <div className="border border-line bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-3xl font-semibold tracking-normal text-signal">{value}</p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em]">{label}</p>
      <p className="mt-2 text-sm leading-6 text-muted dark:text-neutral-400">{detail}</p>
    </div>
  );
}

function StatusPanel({ detail, title, value }: { detail: string; title: string; value: string }) {
  return (
    <div className="border border-line bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-xs uppercase tracking-[0.18em] text-muted dark:text-neutral-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="mt-3 text-sm leading-6 text-muted dark:text-neutral-400">{detail}</p>
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
    <div className="group border border-line bg-white p-5 transition hover:border-signal dark:border-neutral-800 dark:bg-neutral-900">
      <Icon className="text-signal" size={22} />
      <p className="mt-8 text-sm uppercase tracking-[0.18em] text-muted dark:text-neutral-400">{label}</p>
      <p className="mt-2 text-xl font-semibold leading-snug">{value}</p>
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
    <motion.article {...fadeIn} className="group border border-line bg-paper p-5 transition hover:-translate-y-1 hover:border-signal dark:border-neutral-800 dark:bg-neutral-950">
      <Icon className="text-signal" size={24} />
      <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-muted dark:text-neutral-400">{description}</p>
    </motion.article>
  );
}

function ProjectCard({ index, project }: { index: number; project: (typeof projects)[number] }) {
  const image = "image" in project ? project.image : undefined;

  return (
    <motion.article
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.04 }}
      className="group border border-line bg-white p-4 transition hover:-translate-y-1 hover:border-signal dark:border-neutral-800 dark:bg-neutral-900"
    >
      {image ? (
        <div className="project-media">
          <Image
            src={assetSrc(image.src)}
            alt={image.alt}
            width={1200}
            height={800}
            className={cn("project-media-image", image.fit === "contain" && "object-contain p-6")}
          />
        </div>
      ) : (
        <div className="project-mockup" aria-hidden="true">
          <div className="flex items-center justify-between border-b border-line pb-3 dark:border-neutral-800">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">{project.number}</span>
            <span className="h-2 w-16 bg-ink dark:bg-neutral-100" />
          </div>
          <div className="mt-5 grid gap-2">
            <span className="h-3 w-10/12 bg-ink/85 dark:bg-neutral-100/85" />
            <span className="h-3 w-7/12 bg-muted/45 dark:bg-neutral-500" />
            <span className="h-3 w-9/12 bg-muted/25 dark:bg-neutral-700" />
          </div>
          <div className="mt-8 flex items-end gap-2">
            {[46, 72, 58, 86, 64].map((height, barIndex) => (
              <span
                key={`${project.title}-${barIndex}`}
                className={cn("w-full bg-signal", barIndex % 2 && "bg-olive dark:bg-neutral-500")}
                style={{ height }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="pt-5">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal">{project.category}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight">{project.title}</h3>
        <p className="mt-4 leading-7 text-muted dark:text-neutral-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
        <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-signal dark:text-neutral-50" href="#contact">
          View project
          <ArrowRight className="transition group-hover:translate-x-1" size={17} />
        </a>
      </div>
    </motion.article>
  );
}

function ExperienceItem({ index, item }: { index: number; item: (typeof experience)[number] }) {
  const image = "image" in item ? item.image : undefined;
  const certificate = "certificate" in item ? item.certificate : undefined;

  return (
    <motion.article
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.04 }}
      className="grid gap-5 border border-line bg-paper p-5 dark:border-neutral-800 dark:bg-neutral-950 lg:grid-cols-[0.28fr_1fr]"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.18em] text-muted dark:text-neutral-400">{item.period}</p>
        <span className="mt-4 inline-flex border border-signal px-3 py-1 text-sm font-semibold text-signal">{item.label}</span>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-signal">{item.company}</p>
        <h3 className="mt-2 text-2xl font-semibold">{item.role}</h3>
        {image || certificate ? (
          <div className="experience-evidence-box">
            {image ? (
              <div className="experience-media-item">
                <Image
                  src={assetSrc(image.src)}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="experience-media-image"
                />
              </div>
            ) : null}
            {certificate ? (
              <div className="experience-media-item certificate-media-item">
                <Image
                  src={assetSrc(certificate.src)}
                  alt={certificate.alt}
                  width={960}
                  height={1280}
                  className="experience-media-image"
                />
              </div>
            ) : null}
          </div>
        ) : null}
        <p className="mt-4 max-w-3xl leading-7 text-muted dark:text-neutral-400">{item.summary}</p>
        <ul className="mt-5 grid gap-3">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3 leading-7 text-muted dark:text-neutral-400">
              <Check className="mt-1 shrink-0 text-signal" size={17} />
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
    <motion.article
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.05 }}
      className="border border-line bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="flex items-center justify-between gap-5 border-b border-line pb-5 dark:border-neutral-800">
        <h3 className="text-2xl font-semibold">{group.title}</h3>
        <span className="text-sm font-semibold text-signal">{String(group.items.length).padStart(2, "0")}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
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
  const sharedClasses =
    "mt-2 w-full border border-line bg-paper px-4 py-3 text-base outline-none transition placeholder:text-muted/70 focus:border-signal dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-500";

  return (
    <label className="block" htmlFor={fieldId}>
      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-muted dark:text-neutral-400">{label}</span>
      {textarea ? (
        <textarea
          className={cn(sharedClasses, "min-h-40 resize-y")}
          id={fieldId}
          name={name}
          onChange={(event) => onChange(event.target.value)}
          value={value}
        />
      ) : (
        <input
          className={sharedClasses}
          id={fieldId}
          name={name}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          value={value}
        />
      )}
      {error ? <span className="mt-2 block text-sm font-medium text-red-600 dark:text-red-400">{error}</span> : null}
    </label>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-5 border-t border-line pt-3 dark:border-neutral-800">
      <dt className="text-muted dark:text-neutral-400">{label}</dt>
      <dd className="text-right font-semibold">{value}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-white py-10 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="text-2xl font-semibold">{profile.name}</p>
          <p className="mt-2 text-muted dark:text-neutral-400">{profile.title}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-muted dark:text-neutral-400">
            Building better content, stronger communication, and smarter digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="border border-line px-4 py-2 text-sm font-semibold transition hover:border-signal hover:text-signal dark:border-neutral-800"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
