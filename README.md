# DaizLab static website

Mobile-first HTML, CSS and vanilla JavaScript. No framework, package manager, build command, backend or database.

## Pages
- index.html — intent objective and on-device reading reflection score
- archive.html — searchable research notes
- arch.html and waaas.html — architecture and lightweight web-app proof page
- haven/ — local-first private journal
- slos.html — transparent local-only learning check
- damiedaiz.html and dgcs.html — founder profile and growth framework
- legal/ — draft legal templates (review required)
- pwa-template/ — starter project

## Publish
Serve the repository root as a static site. GitHub Pages uses branch main and folder /(root); no build command is required. Enable Pages in repository Settings. Add a custom domain only after DNS and ownership verification.

## Launch checklist
Complete legal placeholders and obtain lawyer review. Verify company contact details and canonical domain. Test mobile and offline behavior. The reading score is an on-device activity indicator, not a comprehension test. Haven and quiz data remain in browser local storage and are deleted if browser site data is cleared. No testimonials, certifications or performance claims are invented.

## PWA starter
Copy pwa-template into a new static project, update the name and manifest, replace the SVG icon, adjust service-worker cache files, test online/offline, increment the cache version when assets change, and publish over HTTPS.