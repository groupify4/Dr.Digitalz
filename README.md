# Dr. Digitalz: Social Hub

A single-page, mobile-first link hub for Dr. Digitalz and its brands (Dr. Media, Dr. Language, Dr. Debater, My Way).
Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide.

## Run locally
```bash
npm install
npm run dev
```

## Customize
Edit **`src/config/site.ts`** only: brand name, tagline, description, logo, contact details, footer and every link.
A link with an empty `url` stays hidden. Logos live in `public/brand/`.
Dr. Language has no Instagram link yet; add it in the `brands` list.

## Deploy to GitHub Pages
```bash
git init && git add . && git commit -m "Dr. Digitalz hub"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Source: GitHub Actions**. The workflow in `.github/workflows/deploy.yml`
builds and publishes on every push to `main`. Your URL will be `https://YOUR_USER.github.io/YOUR_REPO/`.
Open it in a browser and confirm it loads before the next step.

## Generate the static QR code (after deployment)
```bash
npm run qr -- https://YOUR_USER.github.io/YOUR_REPO/
```
Creates `qr-code/dr-digitalz-qr.png` (2400 px) and `qr-code/dr-digitalz-qr.svg`, black on white, error correction H, 4-module quiet zone.
The script refuses localhost URLs. Scan the printed result with a phone before sending it to print.
Afterwards, set absolute URLs for `og:image` in `index.html`.
