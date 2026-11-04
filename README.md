# DaizLab — Next.js application

This repository contains the native Next.js App Router implementation of DaizLab. The application uses Next.js 16, React 19 and TypeScript.

## Development
Install dependencies with npm install, run npm run dev for local development, and use npm run build to create a production build.

## Routes
- / — intent objective and on-device reading reflection
- /archive — searchable research archive
- /architecture — intent architecture
- /haven — private local-first reflection space
- /slos — local-only Smart Logistics Operating Systems learning check
- /waaas — Web Accessible Application Systems proof page
- /damiedaiz — founder profile
- /growth-systems — digital growth and conversion systems

Legacy HTML files are retained as migration references. Next.js redirects their former .html paths to native routes. Do not copy HTML pages into public; update the matching App Router page instead.

Haven entries, reading activity and SLOS results stay in browser local storage. The root-scoped service worker provides an offline fallback without caching private journal or form data. The reading score is an activity indicator, not a comprehension test.