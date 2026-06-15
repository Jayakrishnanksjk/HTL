# Task Plan — HTL Website Updates

## Overview

Three independent tasks on a static HTML/CSS/JS website (no framework).

---




## Task 4 — News & Insights: Fix 1st Article Link

**File:** `index.html` line 1165

**Change:** Replace href in the 1st news card's "Read more" link:

| Before | After |
|---|---|
| `https://images.unsplash.com/photo-...` | `https://www.theceo.in/amp/story/industry/marketing-news/htl-airconpvt-ltd-symbolizing-the-next-wave-of-the-hvac-industry` |

The link in `newsData.js` (used by `news.html`) is already correct — only the hardcoded card on the Home Page needs fixing.

---

## Decision Log

| Decision | Alternatives | Rationale |
|---|---|---|
| Remove HTML blocks directly | Commenting out, JS filtering | Direct removal is cleanest for static HTML |
| Only fix article 1 on homepage | Dynamic from JS, fixing all 3 | Only 1st article link is wrong |
| Forms left as-is | Refactoring to AJAX | Forms are structurally correct; server-side testing needs PHP host |
