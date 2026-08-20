# The Lab — Design Specification

## Purpose

Replace the existing experiment gallery at `/lab` with a permanent, image-first workshop journal. The page documents the physical place where Balu's projects begin and is designed to accumulate entries for decades without turning into a portfolio, project gallery, or polished social feed.

## Direction

The visual direction is a quiet field journal: documentary photography, generous editorial spacing, restrained typography, warm image treatment, and minimal interface chrome. The existing site's zinc-and-teal light/dark theme remains intact so the page feels native to the website. The page avoids masonry, animation, decorative notebook effects, and repeated bordered cards.

## Information Architecture

The page has four regions in this order:

1. A short introduction headed “The Lab.”
2. A newest-first journal containing three initial July 2026 entries.
3. A Workbench Archive with one unstaged photograph per month.
4. A simple vertical workshop milestone timeline.

The existing `/lab` route and first-class navigation item remain unchanged.

## Journal Entries

Each entry contains a machine-sortable date, displayed month and year, title, one or more photos, a short memory-like caption, and optional tags. Photographs use stable, large aspect-ratio frames and dominate the entry. Text sits beneath the image with the date and title providing a light editorial hierarchy.

The initial entries are:

- “The laser arrives” — July 2026
- “Electronics bench” — July 2026
- “A room with potential” — July 2026

Captions describe remembered friction or meaning rather than inventorying equipment.

## Workbench Archive

Each archive item contains a month, a machine-sortable date, one photo, and alt text. Desktop uses a calm three-column grid; narrow screens use a horizontal snap rail so images remain large enough to read. Entries render newest first automatically. The section explicitly states the rule: one photo every month, with no cleaning, staging, or filters.

## Milestones

Milestones contain a date and a short personal statement. They render in chronological order on a single vertical line with restrained markers. Initial milestones cover the first oscilloscope, first production PCB, SillyCuts shipping, the laser cutter, and future workshop growth without inventing completed achievements.

## Content Model

All editable content lives in `src/data/lab.js` as three exported arrays: journal entries, workbench photographs, and milestones. Components sort dated items rather than relying on file order. Adding an update requires only content fields; layout and styling remain automatic.

Placeholder images are local assets under `public/images/lab/`. They will be neutral documentary-style workshop placeholders with descriptive alt text and stable filenames, making later replacement possible without component changes.

## Responsive and Theme Behavior

Journal photos span the available editorial width at every breakpoint. Text measure remains narrower than photographs. Mobile spacing is reduced without shrinking image prominence. Light mode uses the site's white and zinc palette; dark mode uses zinc surfaces without heavy boxes. Teal appears only as a quiet site-wide accent.

## Accessibility and Performance

The page uses semantic sections, headings in order, `<time>` elements, descriptive image alt text, and visible keyboard focus inherited from the site. Next.js `Image` supplies responsive sizes and prevents layout shift. The first journal photograph is prioritized; later images load lazily by default.

## Verification

Verification includes lint/build checks, desktop and mobile browser review, dark-mode review, horizontal archive interaction on mobile, content ordering, image loading, and visual inspection for overflow, excessive card chrome, weak image prominence, or portfolio-like presentation.
