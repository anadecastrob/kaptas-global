# Gated PDF downloads

This folder hosts gated PDF assets served by the Kaptas Global site.

## Naming convention

Use a stable, slug-style filename so the corresponding landing page can
reference it without breaking. Filenames are kept obscure (not linked from
anywhere except the landing page after a successful form submission) so
casual URL-guessing does not bypass the gate.

## Current assets

| File | Used by | Page |
|---|---|---|
| `kg-smart-guide-hiring-brazilian-engineers.pdf` | `<Ebook />` page | `/ebook` |

## Adding a new gated asset

1. Add the PDF here with a slug-style filename.
2. Add a landing page under `src/pages/` that:
   - Renders a form
   - On successful Web3Forms submission, triggers download via an `<a download>` click on `/downloads/<filename>.pdf`
3. Add a `<Route>` in `App.tsx`.
4. Add to `scripts/build-sitemap.mjs` and regenerate sitemap.
5. Add an entry to this README.

## Notes

- Assets in `public/` are served at the root URL with no processing.
- These files are subject to public scraping. The gate is intent-friction,
  not security.
- For real authentication, move asset delivery behind a serverless function
  that validates a token sent by the form handler.
