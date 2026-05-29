# TEAMS Training Thailand

Website for [teamstrainingthailand.com](https://teamstrainingthailand.com)

Built with React + Vite. Designed to be hosted as a static site on GreenGeeks.

## Getting started

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Upload the `/dist` folder to GreenGeeks via FTP.

## Project structure

```
src/
  components/
    Nav.jsx / Nav.css       — sticky navigation with Programs dropdown
    Footer.jsx / Footer.css — site footer
    useFadeIn.js            — scroll animation hook
  pages/
    Home.jsx / Home.css     — homepage
    About.jsx / About.css   — about + founder bio
    Updates.jsx             — events and blog posts
    Contact.jsx / Contact.css — contact form + LINE QR
    programs/
      Corporate.jsx         — corporate program page
      Educators.jsx         — educators program page
      Youth.jsx             — youth program page
    ProgramPage.css         — shared styles for program pages
  App.jsx                   — routing
  main.jsx                  — entry point
  index.css                 — global CSS variables + shared styles
```

## Updating content

- **Events/updates**: edit the `POSTS` array in `src/pages/Updates.jsx`
- **Homepage events**: edit the `EVENTS` array in `src/pages/Home.jsx`
- **Program copy**: edit the relevant file in `src/pages/programs/`
- **Contact details**: update `src/pages/Contact.jsx` and `src/components/Footer.jsx`
