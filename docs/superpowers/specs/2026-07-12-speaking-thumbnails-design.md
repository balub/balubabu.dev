# Speaking Thumbnails Design

## Goal

Add a visual preview to every talk on the speaking page.

## Design

Each talk card gets a 16:9 media area above its text. Talks with a verified YouTube thumbnail use that image; all other talks use the same neutral placeholder with a play icon and “Talk recording” label. The entire card retains its existing destination and hover behavior.

The media uses rounded corners, a subtle border, responsive sizing, and `object-cover`. Thumbnail images have descriptive alt text. Placeholder decoration is hidden from assistive technology because the talk title already provides the useful label.

## Scope

- Modify only the speaking page.
- Use YouTube thumbnail URLs for CoryDora, Building Open Hardware with FOSS, and Realtime Apps with Server-Sent Events.
- Use the placeholder for the remaining four talks.
- Add no packages and do not alter talk copy or links.

## Verification

Run the production build and inspect the speaking page at mobile and desktop widths.
