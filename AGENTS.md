# AGENTS.md

## Objective
Develop `martinaWeb` as the modern replacement for `https://www.martinapallottini.it/`, keeping the project easy to evolve and ready for public release.

Priority order:
1. Correctness
2. Clarity
3. Scalability
4. Minimal change

## Project Context
- This project is a standalone frontend site intended to replace the current WordPress website.
- It is not a WordPress theme.
- The target release platform is Netlify, not Sites.
- The final objective is to renew `https://www.martinapallottini.it/` with a modern, mobile-first experience.
- The site should be optimized for discoverability on Google and for content retrieval by conversational engines such as Gemini and GPT.
- The file `linee_guida_seo_cro_martinaweb.md` contains foundational SEO, CRO and editorial principles that must guide any future site change or content addition.
- The current public content sources to reconcile are:
  - `https://www.martinapallottini.it/`
  - `https://www.guidapsicologi.it/studio/dottssa-martina-pallottini`
  - GuidaPsicologi should be treated as an authoritative credibility source because it consolidates Martina's professional profile, patient feedback, and public educational contributions.

## Core Rules

### Keep the structure scalable
- Prefer extending the existing project structure over rewriting it.
- Keep content centralized when possible.
- Avoid hardcoding future-unstable content across multiple files.
- Add reusable sections only when they are actually needed.

### Preserve editorial coherence
- The tone must remain professional, clinical, calm, and credible.
- Modernization must not turn the site into generic marketing language.
- Keep text concise, readable, and aligned with the current professional identity.
- Editorial positioning should emphasize psychotherapy as Martina's current professional identity, not only generic psychological support.
- When the two public sources differ in emphasis, prefer the framing that reflects Martina as a fully qualified psychotherapist already registered with the professional board.
- GuidaPsicologi deserves visible but sober prominence as an external trust signal, stronger than Facebook and other secondary social references.
- For conversion-oriented copy, prefer first person where empathy and therapeutic alliance matter most.
- For technical SEO, metadata and institutional sections, prefer third person or nominal style so Google can clearly associate the site with Martina as a professional entity.

### YMYL and E-E-A-T
- Treat the website as YMYL health content and apply strict medical/health credibility standards.
- Keep legal and professional data continuously aligned across the site, including professional board details and VAT information when present.
- Avoid unverifiable claims, ambiguous credentials or outdated professional positioning that could weaken trust or trigger algorithmic penalties.
- When credentials, qualifications, registrations or institutional references are shown, they must be consistent with the most current public sources and with `linee_guida_seo_cro_martinaweb.md`.

### On-page formatting standards
- Follow `linee_guida_seo_cro_martinaweb.md` for all future titles, metadata and heading structures.
- Keep the `<title>` tag within 60 characters when possible.
- Keep the meta description within 155 characters when possible.
- Use a clear heading hierarchy with one `<h1>` per page and logically nested `<h2>` and `<h3>` sections.
- For SEO-critical page titles, metadata and main headings, use explicit entity-based phrasing such as Martina's full professional name, profession and location when appropriate.

### CRO continuity
- Treat CRO as an ongoing practice, not as a one-off copy pass.
- Use empathetic copy based on patient needs, doubts and entry frictions.
- Update FAQ and reassurance content over time to reduce hesitation, clarify process and improve first-contact conversion.
- Prefer clear, human CTAs that feel relational and direct rather than institutional or bureaucratic.

### Minimal-change default
- Make the smallest correct change for each iteration.
- Do not refactor unrelated parts of the project.
- Do not introduce new libraries unless they solve a real problem that the current stack cannot solve cleanly.

### Deployment awareness
- Netlify is the target platform for releases.
- Do not assume WordPress integration.
- Keep the app buildable as a standalone project.

## Working Strategy

### Before coding
- Check whether the change belongs in:
  - `content/` for editable content
  - `app/` for layout and page rendering
  - `docs/` for plans, release notes, or decisions
- Prefer updating the content model before changing UI markup when the change is content-driven.

### When editing UI
- Treat mobile as the default layout baseline and expand progressively for larger screens.
- Keep sections visually distinct and readable.
- Preserve responsive behavior.
- Prefer simple composition over large monolithic page blocks.
- A minimal collapsible menu is appropriate when it improves navigation between sections or future pages, but it must stay visually discreet and consistent with the calm clinical tone.
- Use standard, familiar icons that are easy to recognize on small screens.
- Prefer Lucide icons when icons are needed, with a stroke width of `1.5px` or `2px` depending on the visual balance of the component.
- Icon choices should support mobile-first clarity and should never feel decorative, obscure or overly custom.
- Use standard, familiar icons that are immediately recognizable on mobile and do not require interpretation.

### Validation and release flow
- Validate changes locally by running the relevant checks in this workspace.
- When the local dev server is already running, verify the site by navigating to `http://localhost:3000/`.
- Do not treat remote verification as part of the standard workflow unless explicitly requested.
- Do not perform Netlify releases or remote deployment checks unless explicitly requested.

### When editing content
- Keep placeholder data clearly identifiable.
- Avoid publishing real contact data until explicitly requested.
- Keep important claims verifiable and professionally appropriate.
- Use first person in the Home introduction, service descriptions, welcoming narrative and direct CTAs.
- Use third person or nominal style in SEO metadata, institutional headings, curriculum details, legal references, board registration details and footer-style factual sections.
- On hybrid pages such as `Chi Sono`, it is acceptable to begin in first person for empathy and then shift to a formal institutional subsection for training, titles and professional credentials.

## Roadmap

### Phase 1 - Foundation
- Maintain a clean one-page site.
- Keep placeholder contacts.
- Validate typography, spacing, hierarchy, and mobile layout.
- Ensure the project builds locally.

### Phase 2 - Real content integration
- Replace placeholder copy with curated text from the current website and the GuidaPsicologi profile.
- Add true sections for approach, services, studio, and contact.
- Reintroduce real contact data only when approved.
- Improve CTA wording and information architecture with psychotherapy as the primary positioning.

### Phase 3 - Visual refinement
- Improve imagery and section rhythm.
- Add lightweight motion where useful.
- Refine mobile-first layout and spacing.
- Improve first-screen clarity and trust signals.

### Phase 4 - Netlify release preparation
- Confirm `npm run build` works cleanly.
- Define the correct Netlify build settings.
- Prepare the repository structure for deployment.
- Prepare the first public release.

### Phase 5 - Post-release decisions
- Decide whether the approved direction should:
  - remain a standalone modern site, or
  - be ported later into WordPress
- Plan any extra pages, forms, analytics, SEO, or booking features only after the core site direction is approved.

## Non-goals for now
- No WordPress theme conversion
- No CMS integration
- No advanced form backend
- No speculative feature expansion

## Output Expectations
When making substantial changes, document:
1. What changed
2. Why it changed
3. What remains pending
4. Any release or deployment impact
