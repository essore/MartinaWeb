# martinaWeb - Development Plan

## Objective
Evolve the current Netlify site for Martina Pallottini into a modern, credible and easy-to-grow replacement for `https://www.martinapallottini.it/`.

## Delivery strategy
- Keep `martinaWeb/` isolated from the root workspace.
- Use a content-first structure so copy can evolve without rewriting layout code.
- Treat the current published version as an intermediate milestone, not as the final production migration.
- Validate each iteration locally before any manual release.
- Design and refine the interface mobile-first, then extend it for larger screens.
- Improve the site's ability to be discovered and interpreted by Google and conversational search engines such as Gemini and GPT.

## Planned phases

### Completed milestone - Foundation and first publish
- Project folder created from the starter and adapted into a standalone site.
- Minimal information architecture defined.
- Small but scalable homepage implemented.
- Content centralized in a dedicated file.
- First Netlify version published manually.

### Next milestone - Real content integration
- Replace placeholder text with curated content from the current site.
- Add the real sections for approach, services, studio and contact.
- Clean the copy for readability while keeping it clinically coherent.
- Add trusted references such as the professional register and location details.

### Next milestone - Visual refinement
- Improve spacing, hierarchy, imagery and section rhythm with a mobile-first approach.
- Add the first meaningful motion and hover behaviors.
- Validate local behavior on mobile, tablet and desktop.
- Prepare the next review build.

### Next milestone - Release candidate
- Final content pass.
- Technical validation in local workspace: run lint and build.
- Capture representative preview assets only when needed for release notes or review.
- Prepare the next deployable Netlify version for manual release.

### Later milestone - Post-review decisions
- Review the approved local candidate before manual release.
- Collect decisions for either:
  - continuing on Netlify as a standalone modern site, or
  - porting the approved direction back into WordPress.

## Current v1 scope
- One-page structure.
- Clear identity block.
- Minimal section architecture.
- Contact section with placeholder channels until real data is approved.
- Roadmap and release intent visible in the project.

## Non-goals for v1
- No CMS migration.
- No WordPress theme integration.
- No blog, booking flow or advanced forms yet.
- No SEO deep work beyond basic metadata.

## Release criteria for the next iteration
- The structure is understandable in one pass.
- The visual direction feels newer than the current WordPress site.
- The codebase can absorb content growth without a rewrite.
- The project builds successfully in local validation before release.
