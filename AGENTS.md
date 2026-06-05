# AGENTS.md

## Objective
Develop `martinaWeb` as a modern standalone demo for Martina Pallottini, keeping the project easy to evolve and ready for a first public demo release.

Priority order:
1. Correctness
2. Clarity
3. Scalability
4. Minimal change

## Project Context
- This project is a standalone frontend demo.
- It is not a WordPress theme.
- The target release platform is Netlify, not Sites.
- The current phase is iterative demo development, not final production migration.

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

### Minimal-change default
- Make the smallest correct change for each iteration.
- Do not refactor unrelated parts of the project.
- Do not introduce new libraries unless they solve a real problem that the current stack cannot solve cleanly.

### Deployment awareness
- Netlify is the target platform for demo releases.
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
- Keep sections visually distinct and readable.
- Preserve responsive behavior.
- Prefer simple composition over large monolithic page blocks.

### When editing content
- Keep placeholder data clearly identifiable.
- Avoid publishing real contact data until explicitly requested.
- Keep important claims verifiable and professionally appropriate.

## Roadmap

### Phase 1 - Demo foundation
- Maintain a clean one-page demo.
- Keep placeholder contacts.
- Validate typography, spacing, hierarchy, and mobile layout.
- Ensure the project builds locally.

### Phase 2 - Real content integration
- Replace placeholder copy with curated text from the current website.
- Add true sections for approach, services, studio, and contact.
- Reintroduce real contact data only when approved.
- Improve CTA wording and information architecture.

### Phase 3 - Visual refinement
- Improve imagery and section rhythm.
- Add lightweight motion where useful.
- Refine mobile layout and spacing.
- Improve first-screen clarity and trust signals.

### Phase 4 - Netlify release preparation
- Confirm `npm run build` works cleanly.
- Define the correct Netlify build settings.
- Prepare the repository structure for deployment.
- Create a first demo release.

### Phase 5 - Post-demo decisions
- Decide whether the approved direction should:
  - remain a standalone modern site, or
  - be ported later into WordPress
- Plan any extra pages, forms, analytics, SEO, or booking features only after the demo is approved.

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
