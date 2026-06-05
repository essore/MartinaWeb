# martinaWeb - Development Plan

## Objective
Build a first `Sites` demo for Martina Pallottini that is modern, credible and easy to evolve before deciding how to handle the existing WordPress site.

## Delivery strategy
- Keep `martinaWeb/` isolated from the root workspace.
- Use a content-first structure so copy can evolve without rewriting layout code.
- Treat the first release as a demo milestone, not as the final production migration.

## Planned phases

### Day 1 - Foundation
- Create the project folder and scaffold the `Sites` starter.
- Define the minimal information architecture.
- Build a small but scalable homepage.
- Centralize content in a dedicated file.

### Day 2 - Real content integration
- Replace placeholder demo text with curated content from the current site.
- Add the real sections for approach, services, studio and contact.
- Clean the copy for readability while keeping it clinically coherent.
- Add trusted references such as the professional register and location details.

### Day 3 - Visual refinement
- Improve spacing, hierarchy, imagery and section rhythm.
- Add the first meaningful motion and hover behaviors.
- Validate desktop and mobile behavior.
- Prepare the first review build.

### Day 4 - Release candidate
- Final content pass.
- Technical validation: install dependencies, run lint and build.
- Capture the representative preview image required for deployment.
- Prepare the first deployable version on `Sites`.

### Day 5 - First release
- Publish the demo release.
- Review the hosted version.
- Collect decisions for either:
  - continuing on `Sites` as a standalone modern site, or
  - porting the approved direction back into WordPress.

## Scope of v1 demo
- One-page structure.
- Clear identity block.
- Minimal section architecture.
- Contact section with real channels.
- Roadmap and release intent visible in the project.

## Non-goals for v1
- No CMS migration.
- No WordPress theme integration.
- No blog, booking flow or advanced forms yet.
- No SEO deep work beyond basic metadata.

## Release criteria for the first demo
- The structure is understandable in one pass.
- The visual direction feels newer than the current WordPress site.
- The codebase can absorb content growth without a rewrite.
- The project builds successfully once dependencies are installed.
