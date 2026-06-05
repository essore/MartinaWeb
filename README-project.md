# martinaWeb

This folder contains the standalone site for Martina Pallottini, already published once on Netlify and now iterated locally.

## Purpose
- Build a modern replacement for `https://www.martinapallottini.it/`.
- Keep the current version intentionally focused and easy to evolve.
- Preserve a scalable structure for later content and design iterations.
- Refine the interface mobile-first before wider content expansion.
- Improve discoverability for Google and readability for conversational search engines such as Gemini and GPT.
- Position Martina primarily as a psychotherapist, not only through generic psychological support language.

## Project structure
- `app/`: homepage and global styles.
- `content/`: centralized content used by the UI.
- `docs/`: planning and release notes.
- `.openai/hosting.json`: starter metadata inherited from the template. It is not the active release target.

## Current state
- Starter scaffold adapted into a standalone Next site.
- Minimal homepage implemented and first Netlify publish completed manually.
- Current work is focused on integrating real public content from the existing website and the GuidaPsicologi profile, while preserving the mobile-first direction.

## Editorial notes
- Treat `martinapallottini.it` and `guidapsicologi.it/studio/dottssa-martina-pallottini` as public reference sources.
- When wording differs, prefer the positioning that reflects Martina's current status as a psychotherapist already registered with the professional board.
- Give GuidaPsicologi more prominence than Facebook because it adds professional context, patient feedback, and public educational activity.
- Keep Facebook references secondary and discreet.
- A minimal collapsible menu is acceptable when it improves navigation without making the interface feel heavy.

## Next technical step
Run local validation for each iteration:

```bash
npm run lint
npm run build
```

Remote verification and Netlify release checks are intentionally out of scope unless explicitly requested.
