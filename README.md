# Pyae Zaw Portfolio

Responsive personal portfolio for Pyae Zaw, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and local portfolio assets.

## Project Structure

- `app/` - Next.js route files, global styles, and page aliases.
- `components/portfolio/` - Portfolio UI split into page shell, sections, cards, header, footer, form, and shared helpers.
- `data/portfolio.ts` - All editable portfolio text, links, services, projects, experience, skills, and profile details.
- `public/assets/` - Profile photo, logos, certificate image, and other static images.
- `.github/workflows/deploy.yml` - GitHub Pages static export deployment.

## Main Sections

- Home
- About
- Services
- Experience Showcase
- Skills
- Contact

## Local Development

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

## Production Build

```bash
npm run lint
npm run build
```

For GitHub Pages export testing:

```bash
GITHUB_PAGES=true npm run build
```

## Deploy

Pushing to `main` runs the GitHub Actions workflow and publishes the static export to:

```text
https://vick01a.github.io/Portfolio/
```
