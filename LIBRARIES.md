Project libraries and optional effects

Core runtime
- react, react-dom
- react-router-dom

UI components in this repo
- GlassyCircles (CSS-only animated background) in `src/components/GlassyCircles.jsx` + `GlassyCircles.css`
- SEO helper in `src/components/SEO.jsx`
- Reusable BTN in `src/components/BTN.jsx`
- Project grid styles in `src/components/Projects.css`

Install (after clone)
```bash
npm install
```

Optional: particles background (library alternative to GlassyCircles)
- If you prefer a library-based background, you can use tsparticles.

Install:
```bash
npm install tsparticles react-tsparticles tsparticles-preset-links
```

Usage sketch (replace GlassyCircles with this):
```jsx
// import { useMemo } from 'react';
// import Particles from 'react-tsparticles';
// import { loadLinksPreset } from 'tsparticles-preset-links';

// <Particles
//   id="tsparticles"
//   options={{ preset: 'links', background: { color: 'transparent' } }}
//   init={async (engine) => { await loadLinksPreset(engine); }}
//   style={{ position: 'fixed', inset: 0, zIndex: 0 }}
// />
```

Notes
- The current background uses no external images and sits behind all content.
- All content layers on UI/UX are above the background via the `uiux-foreground` wrapper.


