# Aditya Elango | AI/ML & Full-Stack Portfolio

A single-page portfolio highlighting AI/ML, full-stack, and cloud projects. Built with static HTML, Tailwind (CDN), and vanilla JavaScript—no build step or bundler required.

## Contents
- Overview
- Running locally
- Folder structure
- Page layout
- Behavior (script.js)
- Editing data (projects, filters)
- Contact form wiring
- Styling notes
- Assets
- Deployment
- Performance and accessibility
- Troubleshooting

## Running Locally
- Option A: open `index.html` directly in a browser (works because everything is static).
- Option B: serve from this folder to keep relative paths consistent: `python -m http.server 8000` then visit `http://localhost:8000`.
- Option C: VS Code Live Server: right-click `index.html` → “Open with Live Server”.

## Folder Structure
```
.
├── index.html      # Page layout and content sections
├── styles.css      # Custom styling on top of Tailwind CDN
├── script.js       # Interactivity and utilities
└── photos/         # Profile and project imagery
```

## Page Layout
- Hero: headline, role tags, CTAs, hero photo, scroll cue, particles background.
- About: bio, highlights, stats, and supporting imagery.
- Education & Career: education cards (accordion on mobile) and experience timeline with expandable bullets.
- Skills: grouped tech stacks with collapsible rows on small screens.
- Projects: featured trio plus filterable grid (categories like AI/ML, Full-Stack, Security, Big Data, Systems); modal details per project.
- Publications: timeline-style list with badges for awards and venues.
- Certifications: grid of credentials with hover emphasis.
- Achievements: cards for leadership, hackathons, volunteering, workshops.
- Contact: left column with quick info, right column form.
- Footer: copyright line.

## Behavior (script.js)
- Scroll progress bar and active section highlighting.
- Mobile nav drawer toggle (open/close + auto-close on link tap).
- Project filtering (buttons + mobile filter drawer) and modal system driven by the `projectDetails` map.
- Scroll effects: section title underline animation, timeline dot glow, smooth scrolling.
- Responsive toggles: education accordions, experience extra bullets, skills “show more” rows.
- Utilities: lazy image loading (`data-src`), back-to-top button, 3D tilt/parallax on `.card-3d`, prefers-reduced-motion checks.
- Particles.js backgrounds for hero, career, projects, certifications, contact.
- Contact form validation and submission UX (simulated async placeholder).

## Editing Data (Projects & Filters)
1) Add/update project cards in `index.html` under “Featured Projects” or “More Projects”. Make sure each grid card’s `data-categories` matches the filters you want (e.g., `"AI / ML"`, `"Full-Stack"`).
2) Keep filter buttons and counts in `index.html` aligned with the categories you expose.
3) Add modal content in `script.js` inside `projectDetails`. Each entry expects:
```
projectDetails['project-key'] = {
	title: 'Title',
	meta: 'Stack · Domain · Year',
	desc: 'Short summary',
	features: ['Bullet 1', 'Bullet 2', ...],
	impact: 'Key impact metric',
	tags: ['Tech1', 'Tech2', ...],
	github: 'https://github.com/...'
};
```
4) The modal open buttons call `openModal('project-key')`. Match the key to your new entry.

## Contact Form Wiring
- Current behavior validates name/email/message, shows a spinner, and simulates an async send with `setTimeout`.
- To connect a real backend, replace the simulated block with a `fetch` call to your endpoint and handle success/error states:
```js
// inside the submit handler after validation
const res = await fetch('https://your-endpoint.example/send', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ name, email, message })
});
if (!res.ok) throw new Error('Send failed');
```
- Remember to keep the button disable/restore and message UI states for good UX.

## Styling Notes
- Tailwind is pulled from the CDN; `styles.css` overrides and adds custom components, animations, and layout polish.
- Animations (tilt, smooth scroll) respect `prefers-reduced-motion`; leave as-is for accessibility unless you add more motion.

## Assets
- All images live in `photos/`. Replace with your own while keeping filenames consistent with `index.html` references.

## Deployment (Static Hosting)
- GitHub Pages: push the folder to a repo → Settings → Pages → Source: `main` branch `/root` → Save → visit the published URL.
- Netlify: drag-and-drop the folder or connect the repo; build command is not needed (static).
- Vercel: import the repo, set framework to “Other”, output directory `/`.
- Any static host works as long as external CDNs (Tailwind, Font Awesome, Particles.js) are allowed.

## Performance and Accessibility
- Lazy loading and modest particle counts reduce initial load; keep image sizes reasonable.
- Modals close on ESC; consider adding focus trapping if you extend them.
- Test mobile toggles (nav, filters, skills, experience accordions) after content edits.
- If you add heavy media, consider deferring or lazy-loading it.

## Troubleshooting
- Particles not visible: confirm the `particles-*.js` targets exist in `index.html` and the CDN is reachable.
- Modal not opening: ensure the button’s `openModal('key')` matches a key in `projectDetails`.
- Filters miscounted: update both the `data-categories` attributes and the filter button counts/labels.

Use this as a starter; adapt text, counts, and links to your own profile before publishing.
