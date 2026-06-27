# dannyroosevelt.com

My personal site — a minimal, single-page portfolio. Live at
[dannyroosevelt.com](https://dannyroosevelt.com).

## Stack

- [Next.js](https://nextjs.org/) (App Router) + React
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on [Vercel](https://vercel.com/)

## Development

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config)
```

## Notes

- Light/dark theme follows the OS setting and can be toggled; the choice is
  remembered and applied before paint to avoid a flash.
- The contact email is decoded on the client and never rendered into the
  static HTML, to keep it away from scrapers.
- The Open Graph share image is generated at build time in
  `src/app/opengraph-image.tsx`.
