import {
  AtSign,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Megaphone,
  MonitorPlay,
  PenTool
} from "lucide-react";

export const profile = {
  name: "Pyae Zaw",
  title: "Content Writer / AI Content Creator / Digital Marketer",
  tagline: "Creative content, smart strategy, reliable remote support.",
  location: "Mandalay, Myanmar",
  email: "pyaezaw203@gmail.com",
  phone: "09761976584",
  birthdate: "20 March 2003",
  availability: "Remote employee only",
  dailyAvailability: "12-14 hours daily",
  intro:
    "I help brands turn ideas into clear content systems, social media stories, AI-assisted visuals, videos, and learning materials.",
  about:
    "I am a remote digital professional from Mandalay with Level 4 and Level 5 Computing Diplomas, C1-level English teaching experience, and hands-on work across content writing, social media, digital marketing, AI content creation, scriptwriting, video editing, and video production."
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
] as const;

export const heroMetrics = [
  { value: "2+", label: "years writing", detail: "content and marketing practice" },
  { value: "4", label: "core streams", detail: "writing, AI, video, teaching" },
  { value: "12-14h", label: "daily availability", detail: "remote-work ready" },
  { value: "C1", label: "English level", detail: "teaching and communication" }
] as const;

export const profileCards = [
  { label: "Location", value: "Mandalay, Myanmar", icon: MapPin },
  { label: "Work Preference", value: "Remote only", icon: BriefcaseBusiness },
  { label: "Availability", value: "12-14 hours daily", icon: MonitorPlay },
  { label: "Education", value: "Level 4 & 5 Computing Diplomas", icon: GraduationCap },
  { label: "Contact", value: "pyaezaw203@gmail.com", icon: AtSign },
  { label: "Focus", value: "Content, marketing, AI, video", icon: BrainCircuit }
] as const;

export const services = [
  {
    title: "Content Writing",
    description: "Captions, scripts, tech review content, educational posts, brand messages, and content plans.",
    icon: PenTool
  },
  {
    title: "AI Content Creation",
    description: "AI-assisted writing, visual concepts, short-form video ideas, research, and production support.",
    icon: BrainCircuit
  },
  {
    title: "Digital Marketing",
    description: "Social media planning, campaign copy, page content, community touchpoints, and brand communication.",
    icon: Megaphone
  },
  {
    title: "Video Production",
    description: "Video scripts, editing workflows, content outlines, AI video concepts, and publishing-ready stories.",
    icon: MonitorPlay
  }
] as const;

export const projects = [
  {
    number: "01",
    title: "Tech Review Content",
    category: "Content Writing / Tech Media",
    description: "Smartphone and gadget review content focused on helping audiences make clearer buying decisions.",
    skills: ["Review writing", "Research", "Social content"]
  },
  {
    number: "02",
    title: "Social Media Content Campaign",
    category: "Social Media Management",
    description: "Strategic captions, post ideas, visual directions, and message systems for online business pages.",
    skills: ["Captions", "Planning", "Community content"]
  },
  {
    number: "03",
    title: "AI Video Content",
    category: "AI Content Creation",
    description: "AI-supported video concepts, scriptwriting, editing support, and creative production workflows.",
    skills: ["ChatGPT", "CapCut", "AI visuals"]
  },
  {
    number: "04",
    title: "English Learning Content",
    category: "Education",
    description: "Learning materials and practical English content shaped by C1-level teaching experience.",
    skills: ["Teaching", "Lesson content", "Communication"]
  },
  {
    number: "05",
    title: "Digital Marketing Content",
    category: "Business Marketing",
    description: "Promotional content designed to improve awareness, trust, and audience engagement for brands.",
    skills: ["Marketing copy", "Brand message", "Canva"]
  }
] as const;

export const experience = [
  {
    role: "Content Writer",
    company: "Own Page / JOY Home / DigitalMarketing.mm",
    period: "2024 - Present",
    label: "2+ years",
    summary: "Created social media content, captions, product review ideas, and business marketing messages.",
    points: [
      "Wrote captions, posts, promotional content, and brand messages for digital audiences.",
      "Developed technology and product-review content for personal pages and channels.",
      "Supported online business marketing with consistent content planning."
    ]
  },
  {
    role: "English Teacher",
    company: "SpeakEasy Institute",
    period: "March 2025 - April 2026",
    label: "13 months",
    summary: "Delivered clear English lessons and learning materials with a professional communication style.",
    points: [
      "Supported student learning, confidence, and communication skills.",
      "Prepared educational content and lesson materials.",
      "Maintained a reliable, friendly, and structured teaching approach."
    ]
  },
  {
    role: "AI Content Creator",
    company: "SkillBridge AI",
    period: "December 2025 - Present",
    label: "AI workflow",
    summary: "Created AI-powered content for social media, scripts, video concepts, visuals, and digital projects.",
    points: [
      "Used AI tools for content research, writing, visuals, and creative production.",
      "Wrote video scripts and creative concepts for short-form content.",
      "Supported editing and production workflows for digital channels."
    ]
  }
] as const;

export const skillGroups = [
  {
    title: "Content & Marketing",
    items: [
      "Content Writing",
      "Social Media Content",
      "Copywriting",
      "Content Planning",
      "Digital Marketing",
      "Business Marketing",
      "Community Engagement",
      "Tech Review Content",
      "Script Writing",
      "Video Production"
    ]
  },
  {
    title: "AI & Creative Tools",
    items: [
      "ChatGPT",
      "Google Gemini",
      "Kling",
      "Seedance",
      "Veo 3",
      "Canva",
      "CapCut",
      "AI-Assisted Writing",
      "AI Visual Content Creation"
    ]
  },
  {
    title: "Technical & Computing",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "Website Fundamentals",
      "Microsoft Office",
      "Google Workspace"
    ]
  },
  {
    title: "Strengths",
    items: [
      "Reliable",
      "Cooperative",
      "Accountable",
      "Quality-focused",
      "Remote-work discipline",
      "Fast learner",
      "Creative thinker",
      "Consistent communicator"
    ]
  }
] as const;

export const toolkitStrip = [
  "Content Strategy",
  "AI Workflow",
  "Social Media",
  "Video Production",
  "Remote Collaboration",
  "Canva",
  "CapCut",
  "Google Workspace"
] as const;

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" }
] as const;

export const contactMethods = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "Location", value: profile.location, href: "#contact" }
] as const;
