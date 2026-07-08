"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";
import { Footer } from "./footer";
import { Header } from "./header";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  ShowcaseSection,
  SkillsSection,
  ToolkitStrip
} from "./sections";
import { emptyContactForm, type ContactFormState } from "./shared";

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].href);
  const [form, setForm] = useState<ContactFormState>(emptyContactForm);
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
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

  function updateForm(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSent(false);
  }

  function validateForm() {
    const nextErrors: Partial<ContactFormState> = {};
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
      <HeroSection />
      <ToolkitStrip />
      <AboutSection />
      <ServicesSection />
      <ShowcaseSection />
      <SkillsSection />
      <ContactSection errors={errors} form={form} onChange={updateForm} onSubmit={handleSubmit} sent={sent} />
      <Footer />
    </main>
  );
}
