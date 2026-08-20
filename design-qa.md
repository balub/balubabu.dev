# CoryDora Draft Note — Design QA

## Evidence

- Source visual truth: `/Users/balubabu/.codex/generated_images/01a01fe4-d93e-7520-8546-9bdf608e95e0/exec-fac32952-5dfb-461f-8e82-17d921d41c3b.png`
- Browser-rendered implementation: `design-implementation-full.png`
- Focused implementation crop: `design-implementation-draft-note.png`
- Normalized comparison: `design-comparison.png`
- Mobile implementation: `design-implementation-mobile.png`
- Route: `/articles/corydora-open-hardware-case-study`
- State: dark theme, draft note visible below the hero image
- Desktop viewport: 1280 × 720 CSS px, device scale factor 1
- Mobile viewport: 390 × 844 CSS px, device scale factor 1
- Source image: 1680 × 935 px
- Source focus crop: 1450 × 215 px, normalized to 704 × 104 px
- Implementation focus crop: 704 × 90 px

## Full-view comparison evidence

The browser capture shows the draft marker in article context. The filled pale
card is gone. The marker now behaves as inline editorial metadata: an outlined
teal pill followed by zinc body copy and an underlined teal link. It follows the
article column and leaves the surrounding content hierarchy intact.

## Focused comparison evidence

`design-comparison.png` places the normalized source crop above the
implementation crop. A focused comparison is useful here because the selected
target is a single typography-and-spacing component rather than a full page.
The implementation matches the selected structure, hierarchy, palette, pill
shape, link treatment, and natural two-line wrap.

## Required fidelity surfaces

- Fonts and typography: Uses the site's existing Inter stack. The label is
  14 px, semibold, uppercase, and letter-spaced; body copy is 16 px with a
  28 px line height. This is slightly smaller than the generated mock's display
  scale by design so it remains consistent with the article typography.
- Spacing and layout rhythm: The pill is inline with the sentence, with 12 px
  separation and a 32 px vertical article margin. It wraps naturally without
  changing the article column width. The pill measures about 128 × 26 px.
- Colors and visual tokens: Reuses the site's zinc foregrounds and teal accent.
  The outline stays subtle in dark mode and avoids the rejected pale surface.
- Image quality and asset fidelity: The selected component contains no raster
  assets or icons, so no asset substitutions were required.
- Copy and content: The label, explanatory sentence, and linked article title
  match the selected design and requested meaning.

## Findings

No actionable P0, P1, or P2 differences remain.

- [P3] The generated concept uses a slightly larger overall type scale than the
  live article. The implementation intentionally uses the site's established
  body scale so the note reads as metadata instead of a new content tier.

## Interaction and responsive checks

- The linked title navigates to
  `/articles/I-wrote-one-blog-then-disappeared` and browser back returns to the
  CoryDora article.
- At 390 × 844, the note wraps to three lines, stays inside the 343 px article
  column, and creates no horizontal overflow.
- Browser console errors checked: none.

## Comparison history

1. First implementation pass: P2 — the 12 px label and compact padding made the
   badge visibly undersized against the selected reference.
2. Fix: increased the label to 14 px, horizontal padding from 12 px to 16 px,
   vertical padding to 4 px, and the pill-to-copy gap to 12 px.
3. Post-fix evidence: `design-implementation-full.png`,
   `design-implementation-mobile.png`, and `design-comparison.png`. No P0/P1/P2
   findings remain.

## Implementation checklist

- [x] Remove filled callout surface.
- [x] Add compact outlined draft pill.
- [x] Keep explanatory copy inline and readable.
- [x] Preserve the teal linked article title.
- [x] Verify dark mode, mobile wrapping, navigation, and console state.

final result: passed
