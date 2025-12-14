# Final Web Project AI

Static three-page microsite that introduces large language models, retrieval-augmented generation, and local deployment strategies. The project showcases cohesive visual theming, reusable components, and light interactivity using vanilla HTML, CSS, and JavaScript.

## Highlights
- **Consistent visual identity:** Dark Robinhood-inspired palette driven by CSS custom properties, responsive typography via `clamp`, and neon accent highlights.
- **Polished hero experiences:** Each page opens with a gradient hero panel, branded imagery, and concise positioning copy.
- **Floating navigation:** All pages share a fixed dropdown button (📚) for quick cross-page navigation with keyboard and screen reader support.
- **Immersive media:** Home and deployment pages feature theatre-style video embeds to contextualise the narrative.
- **Structured storytelling:** Content panels, tool tables, and figure callouts present complex LLM concepts in readable chunks.
- **Shared assets:** Logo marquee and background imagery live in dedicated folders for easy maintenance.

## Pages
- **LLM-Home.html** – Introduces LLM fundamentals, transformer visualisations, and real-world capabilities with a scrolling logo marquee.
- **RAG-VectorDB.html** – Explains retrieval-augmented generation, vector databases, and the typical RAG pipeline using layered background sections.
- **Localizing-Deployment.html** – Covers local hosting benefits, tools, hardware considerations, and includes a creator-perspective video theatre.

## Tech Stack
- HTML5 for semantic structure and accessibility-first markup.
- CSS3 with custom properties, responsive layout utilities, and page-specific sections consolidated in `styles.css`.
- Vanilla JavaScript in `script.js` for dropdown navigation behaviour and logo marquee duplication/pause logic.

## Project Structure
```
Final_Web_Project_AI/
├─ LLM-Home.html
├─ RAG-VectorDB.html
├─ Localizing-Deployment.html
├─ styles.css
├─ script.js
├─ logos/
└─ pictures/
```

## Getting Started
1. Clone or download this repository.
2. Open any page (e.g., `LLM-Home.html`) directly in a modern browser.
3. Verify the `logos/` and `pictures/` directories contain the referenced assets (SVGs, PNGs, and JPEGs listed in markup).

No build step or external dependencies are required.

## Key Components
- **Hero layout (`.hero`, `.rag-hero`, `.deploy-hero`):** Reusable structure with gradient overlays, responsive copy blocks, and supporting imagery.
- **Logo marquee (`.logo-scroll-container`):** Seamless carousel implemented with CSS animation and JS duplication; hover pauses animation for readability.
- **Content panels (`.content-panel`, `.rag-panel`, `.deploy-panel`):** Glassmorphism-inspired cards that group explanatory text, lists, and tables.
- **Floating navigation (`.nav-dropdown`):** Accessible dropdown (ARIA roles, keyboard navigation, focus return) positioned with `.floating-nav`.
- **Deployment tools table:** Styled scrollable wrapper for tabular data, supporting desktop and mobile overflow.

## Styling Notes
- Global theme values are declared under `:root` in `styles.css` for easy palette adjustments.
- Typography relies on the Inter typeface (loaded via Google Fonts) with clamp-based sizing for headings and body text.
- Media queries tailor hero layouts, panels, and navigation for viewports below 900px/880px/720px.
- Custom utility classes like `.llm-highlight-list`, `.llm-sublist`, and `.llm-note` organise dense informational blocks.

## JavaScript Behaviour
- Duplicates logo marquee items to create an infinite loop while avoiding markup duplication.
- Pauses/resumes logo animation on hover for cross-browser consistency.
- Manages dropdown open/close states, focus traps, and Escape/outside-click dismissal.

## Accessibility & UX
- All interactive controls include `aria` attributes, keyboard focus states, and descriptive labels.
- Videos embed with descriptive titles and respect user controls (no autoplay).
- Color usage maintains sufficient contrast while highlighting key interactions with neon accents.

## Maintenance Tips
- When adding new logos, drop assets into `logos/` and update `LLM-Home.html`; the marquee will auto-loop them.
- Additional pages can reuse existing hero/panel classes to stay visually consistent.
- To adjust theming, tweak the `--bg`, `--bg-elev`, and `--accent` variables in one place.

## Future Ideas
- Add service worker caching for offline demos.
- Introduce light/dark theme toggle using the existing custom property system.
- Expand `script.js` with in-page analytics (e.g., marquee interaction counts) while preserving privacy.

Enjoy exploring the project and adapting it to your own LLM explainers or product demos!
