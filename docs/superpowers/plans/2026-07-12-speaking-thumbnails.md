# Speaking Thumbnails Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a thumbnail or consistent placeholder to every speaking card.

**Architecture:** Extend the page-local `Appearance` component with an optional image URL. Render either a responsive image or an accessible, CSS-based placeholder inside the existing card.

**Tech Stack:** React, Next.js, Tailwind CSS

## Global Constraints

- Modify only the speaking page.
- Add no dependencies.
- Preserve the existing links, copy, and full-card click target.

---

### Task 1: Add talk artwork

**Files:**
- Modify: `src/pages/speaking.jsx`

**Interfaces:**
- Consumes: `Appearance({ title, description, event, cta, href, image })`
- Produces: A media area that renders `image` when supplied and a shared placeholder otherwise.

- [ ] **Step 1: Establish the current build baseline**

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 2: Add media rendering to `Appearance`**

Add an optional `image` prop. Render a 16:9 rounded image with `${title} talk thumbnail` alt text when supplied; otherwise render a neutral 16:9 placeholder with a play icon and “Talk recording” label.

- [ ] **Step 3: Assign verified thumbnails**

Pass these exact URLs:

```text
https://i.ytimg.com/vi/UiJbgOzwvzU/maxresdefault.jpg
https://i.ytimg.com/vi/pFYOFzUogiU/maxresdefault.jpg
https://i.ytimg.com/vi/_rhDb5x9kQA/hqdefault.jpg
```

Leave `image` unset for the other four talks so they use the placeholder.

- [ ] **Step 4: Format and verify**

Run: `npx prettier --check src/pages/speaking.jsx`
Expected: exit code 0.

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 5: Prepare a commit for the maintainer**

Proposed commit: `feat(speaking): add talk thumbnails`
