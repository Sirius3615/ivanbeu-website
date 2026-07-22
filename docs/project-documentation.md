# Project case-study guide

The portfolio uses one shared case-study system. Every project page lives in `/projects`, loads `/projects/styling.css`, and uses `/js/site.js` for the year and subtle reveal behaviour.

## Add a project

1. Duplicate `/projects/template.html`.
2. Rename it with a readable URL slug, for example `solar-monitor.html`.
3. Replace every `[BRACKETED PLACEHOLDER]`.
4. Put local images in the repository root or a future `/images/projects/project-name` directory.
5. Add the project to the list in `/index.html`.
6. Update the previous and next links so project navigation remains a loop.
7. Remove the `draft-note` only after the facts and wording have been verified.

## Information to collect

The template is designed around a small, useful project brief:

- one-sentence description;
- your role and collaborators;
- date, status and public URL;
- the user or operational problem;
- what you personally designed or built;
- a four-step system or experience flow;
- technology stack;
- three or four important decisions and their reasoning;
- verified outcomes: adoption, performance, launch, feedback or lessons;
- next step;
- one strong cover image and two to five supporting images, if available.

## Writing rules

- Lead with the problem and outcome, not a list of technologies.
- Separate your contribution from the overall team effort.
- Use exact evidence when available; never invent metrics.
- Mark unverified or sample material as a working draft.
- Keep paragraphs short and explain technical choices in plain language.
- Give every image descriptive alternative text.

## Optional layouts

- Add `contain` to `case-cover` when the image is a UI screenshot that should not be cropped.
- Add `placeholder` to `case-cover` when the page needs a CSS-only visual while imagery is unavailable.
- Use `role-grid`, `decision-grid`, and `outcome-grid` for two or four cards.
- The `system-flow` component expects four nodes and collapses into a vertical sequence on mobile.

## Before publishing

- Check every navigation and external link.
- View the homepage and project page at phone and desktop widths.
- Confirm that no bracketed placeholders remain.
- Confirm that all claims and dates are accurate.
- Optimize large images before adding them to the repository.
