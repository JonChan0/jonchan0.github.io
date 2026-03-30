# Jonathan H Chan — Personal Website

A single-page personal portfolio site for a statistical genetics / clinical genomics PhD student targeting pharma/biotech industry roles. Built with React + TypeScript + Vite, styled with Tailwind CSS v4, deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite 7
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **Animations**: Framer Motion
- **Icons**: lucide-react
- **Deploy**: GitHub Actions → `gh-pages` branch → `https://JonChan0.github.io/`

## Common Commands

```bash
npm run dev       # Start dev server
npm run build     # Type-check + build to dist/
npm run lint      # ESLint
npm run preview   # Preview production build locally
npm run deploy    # Build + push to gh-pages branch (manual deploy)
```

Auto-deploy: pushes to `main` trigger the CI workflow (`.github/workflows/deploy.yml`) which builds and deploys via `JamesIves/github-pages-deploy-action`.

## Project Structure

```
src/
  components/
    Header.tsx    # Fixed nav with social links (LinkedIn, Google Scholar, GitHub)
    Hero.tsx      # Landing section with animated intro
    About.tsx     # Background / research focus
    Posters.tsx   # Conference posters displayed as images (not PDF viewer)
    Footer.tsx    # Footer embedded inside the contact section
  App.tsx         # Single-page layout with snap-scroll sections
  index.css       # Global styles, CSS variables, custom classes
  main.tsx        # Entry point

public/           # Static assets served at root
docs/             # CV PDF and poster source files
```

## Design System

- **Theme**: Light, industrial/brutalist aesthetic
- **Layout**: Full-height snap-scroll sections (`snap-y snap-mandatory`)
- **CSS variables**: `--color-bg`, `--color-accent` (orange `#FF5100`) defined in `index.css`
- **Font**: Monospace-heavy, uppercase headings, tight tracking
- **Accent colour**: `#FF5100` (orange)

## Key Constraints

- Posters are rendered as high-res images, not embedded PDFs
- CV is linked as `/docs/CV_JonathanChan.pdf` (opens in new tab)
- Social links: [LinkedIn](https://www.linkedin.com/in/jchan0), [Google Scholar](https://scholar.google.com/citations?user=hwdg8aQAAAAJ), [GitHub](https://github.com/JonChan0)
- Contact email: `jonathan.chan0@protonmail.com`
- Target audience: pharma/biotech hiring managers — content emphasises translational value of research (patient risk stratification, statistical genetics, clinical genomics)
