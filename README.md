# zhenga8533.github.io

Personal portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages at https://zhenga8533.github.io.

## Development

```sh
npm install
npm run dev      # start the dev server at localhost:4321
npm run check    # type-check .astro and .ts files
npm run build    # build the static site to dist/
```

## Editing content

All site content lives in `src/data/`:

| File | Content |
| --- | --- |
| `profile.ts` | Name, role, tagline, social links, and optional resume URL |
| `projects.ts` | Project cards |
| `experience.ts` | Work and education timeline |
| `skills.ts` | Grouped tech stack |

To show a resume button, add the PDF to `public/` and set `resumeUrl` in `profile.ts` (e.g. `'/resume.pdf'`).

## Deployment

Pushing to `main` builds and deploys the site with the workflow in `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
