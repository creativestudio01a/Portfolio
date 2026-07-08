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
  image: {
    src: "/assets/pyae-zaw-profile.png",
    alt: "Pyae Zaw profile photo"
  },
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
    title: "Circuit Media Tech Review Page",
    category: "Tech Review / Circuit Media",
    description:
      "Smartphone and gadget review content for Circuit Media, focused on real context and smarter tech choices.",
    skills: ["Review writing", "Research", "Community content"],
    image: {
      src: "/assets/circuit-media.png",
      alt: "Circuit Media logo",
      fit: "contain"
    }
  },
  {
    number: "02",
    title: "AI Video Creation",
    category: "SkillBridge AI",
    description: "AI-supported video concepts, scriptwriting, editing support, and creative production workflows.",
    skills: ["ChatGPT", "CapCut", "AI visuals"],
    image: {
      src: "/assets/skillbridge-ai.png",
      alt: "SkillBridge AI logo",
      fit: "contain"
    }
  },
  {
    number: "03",
    title: "English Learning Content",
    category: "Speakeasy Language Centre",
    description: "Learning materials and practical English content shaped by C1-level teaching experience.",
    skills: ["Teaching", "Lesson content", "Communication"],
    image: {
      src: "/assets/speakeasy-language-centre.png",
      alt: "Speakeasy Language Centre logo",
      fit: "contain"
    }
  },
  {
    number: "04",
    title: "Digital Marketing Content",
    category: "DigitalMarketing.mm",
    description: "Promotional content for DigitalMarketing.mm designed to improve awareness, trust, and engagement.",
    skills: ["Marketing copy", "Brand message", "Canva"],
    image: {
      src: "/assets/digitalmarketing-mm.png",
      alt: "DigitalMarketing.mm logo",
      fit: "contain"
    }
  }
] as const;

export const experience = [
  {
    role: "Content Writer",
    company: "Circuit Media / JOY Home / DigitalMarketing.mm",
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
    company: "Speakeasy Language Centre",
    period: "March 2025 - April 2026",
    label: "Advanced C1",
    summary:
      "Delivered clear English lessons and learning materials with a professional communication style, supported by Duolingo English Test Advanced CEFR C1 results.",
    points: [
      "Supported student learning, confidence, and communication skills.",
      "Prepared educational content and lesson materials.",
      "Maintained a reliable, friendly, and structured teaching approach."
    ],
    certificate: {
      src: "/assets/duolingo-certificate.png",
      alt: "Duolingo English Test certificate showing Advanced CEFR C1 score"
    }
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
