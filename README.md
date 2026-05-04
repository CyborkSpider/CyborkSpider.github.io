# CyborkSpider Portfolio

Dark bilingual (Arabic + English) portfolio for GitHub Pages.

## Language / Routes

- Arabic (default): `/`
- English: `/en/`

## Update projects (static)

Edit:

`src/data/projects.ts`

Add/update entries (including private repos that should be shown as case studies).

## Add your photo

Place your image here:

`public/profile.jpg`

## Development

```sh
npm install
npm run dev
```

Open: `http://localhost:4321`

## Build

```sh
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow that builds the site and deploys `./dist` to GitHub Pages on every push to `main`.
