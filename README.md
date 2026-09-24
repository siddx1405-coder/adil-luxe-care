# Adil Luxe Care – website

One-page bilingual (English / Arabic) website for Adil Luxe Care, a nail & beauty salon in Doha.
Built with React + Vite + Tailwind CSS. Bookings are sent to the salon's WhatsApp.

## Run it on your computer

Needs Node.js 20.19+ or 22.12+ (`node -v` to check).

```bash
npm install      # first time only
npm run dev      # open the http://localhost:5173 link it prints
```

> Opening `index.html` directly or with VS Code Live Server shows a blank page – always use `npm run dev`.

## Before going live: set the domain

Search the project for `https://adilluxecarebeautyservices.com` and replace it with the real domain
(VS Code: Ctrl+Shift+H → Replace All). It appears in:

- `index.html` (SEO tags + structured data)
- `public/robots.txt`
- `public/sitemap.xml`

## Build / deploy

```bash
npm run build    # creates the dist/ folder
npm run preview  # test the built site locally
```

Cloudflare Pages settings: preset **React (Vite)**, build command `npm run build`,
output directory `dist`, environment variable `NODE_VERSION = 22`.

## Editing content

All text, prices, images, phone number and address live in `src/salonData.js`.
Images and the hero video are in `public/`.
