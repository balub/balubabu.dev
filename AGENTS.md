# balubabu.dev Project Notes

Git rules for all agents working on this project: never add `Co-Authored-By`
trailers or any attribution of AI, agents, or generation tools in commits, pull
requests, issues, code comments, or documentation. Commit messages must follow
Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`,
`ci:`, etc.), with an optional scope. Keep changes small and focused. Unless the
maintainer explicitly asks otherwise, propose a commit message and let the
maintainer commit manually.

balubabu.dev is Balu's personal website and portfolio. Preserve the author's
voice: direct, personal, curious, and specific. Avoid generic portfolio copy,
corporate language, inflated claims, and text that sounds machine-generated.

The site is built with Next.js 13, React 18, Tailwind CSS, and MDX. Use npm and
keep `package-lock.json` as the single lockfile. Do not change the framework,
package manager, or major architecture unless the maintainer explicitly asks.

Common commands:

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run lint` runs the configured Next.js lint checks.

Design direction: treat this as an expressive personal site, not a generic SaaS
landing page. Reuse the existing typography, spacing, components, light/dark
theme behavior, and visual language before introducing new patterns. New pages
should feel consistent with the rest of the site while retaining the personality
of their subject matter.

Content lives primarily in `src/pages`, `src/data`, and `src/content`. Shared UI
lives in `src/components`; prefer extending those components over duplicating
markup. Static assets belong in `public`, while imported image assets belong in
`src/images`.

For design-related decisions, show concrete visual options whenever practical
instead of asking only abstract questions. Treat negative feedback as useful
direction and iterate from visible alternatives.

Before handing off a change, run the checks relevant to the files touched. Do
not overwrite or clean up unrelated working-tree changes, generated files, or
work already present in the repository.
