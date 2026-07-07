# Pyae Zaw Portfolio

Minimal responsive personal portfolio and resume website for Pyae Zaw.

## Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Lucide React icons
- Framer Motion
- Contact form validation
- Dark/light mode toggle
- GitHub Pages static export

## Main Sections

- Home
- About
- Services
- Projects
- Experience
- Skills
- Contact

## Profile Notes

- The site focuses on remote content writing, AI content creation, digital marketing, video work, and English teaching.
- Contact actions use direct email and phone links.
- The interface uses CSS-based portfolio visuals so deployment does not depend on missing local image assets.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, builds the static Next.js export, and publishes the `out` folder to GitHub Pages.
