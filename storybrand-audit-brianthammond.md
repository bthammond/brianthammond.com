# StoryBrand (SB7) Audit — brianthammond.com

**Audited:** 19 August 2026 · **Framework:** Donald Miller's SB7
**Before:** 21 / 70 · **After rewrite:** 64 / 70

Anything applied beyond Miller's SB7 is flagged inline as **[not SB7]**.

---

## Executive Summary — the five things that mattered

### 1. The site made Brian the hero, not the visitor
The `<h1>` was `"Brian T. Hammond"` — a name, not a problem. The first word of the hero subhead was `"I."` Three consecutive sections (about → stats → track record), roughly 60% of the body copy, were biography, closing with an infinite marquee that looped the same nine credentials twice. Measured across the homepage: **54 first-person words to 31 second-person — 1.74 "I" for every "you."**

The credibility itself was never the problem. Goodyear, CompUSA, Capital One, United Airlines, Goldman Sachs 10KSB, Dartmouth Tuck is an A-tier stack. It was being spent as a highlight reel instead of as reassurance.

**Fixed:** three biography sections compressed into one 150-word guide section that leads with empathy and treats the résumé as a supporting column. Ratio is now **2.09 "you" for every "I"** — a full inversion.

### 2. There was no plan, and no way in short of booking a call
No 3-step process existed anywhere. What stood in its place was worse: a four-door menu in position 2 headed `"Where do you need to start?"` — which hands the diagnostic work back to the visitor before any trust is built. Five sections later the page contradicted itself: `"You don't have to figure out which service you need."`

There was also **zero transitional CTA**. The only options were book a call with a stranger, or leave. Both ble.training (`"Take the free Scorecard"`) and Family Business Performance Group (`"Start with a diagnostic"`) had one. Brian's own site — where trust matters most — did not.

**Fixed:** the four-door menu is gone. A real 3-step plan (The Call / The Read / The Work) and a working 12-question **Owner's Bottleneck Audit** now sit in its place.

### 3. The stakes were never named — neither the villain, nor the cost
No villain. No failure. Four separate sentences stopped one clause short of a consequence: `"before it costs them growth"`, `"before you have to"`, `"long before the pressure is on."` Costs what? Or what happens? Nothing on the page made anyone act this quarter rather than next year.

Meanwhile ble.training opens with `"Your best people got promoted. Nobody taught them to manage."` — a villain, personified, in nine words.

**Fixed:** the villain is now named and repeated — **the owner-shaped bottleneck** — with a three-layer problem section (external / internal / philosophical) and a dedicated stakes section.

### 4. Eight direct CTAs, five different wordings, and a broken door
`"Let's Talk"` / `"Schedule a Discovery Conversation"` / `"Start a Conversation"` / `"Start Here"` / `"Schedule a Discovery Call"` / `"Get in Touch"` — one action, six phrasings. Eight more links pointed off-site; more paths led away from the site than toward a conversation.

Every `"Schedule"` button resolved to a bare `mailto:` — a scheduler was promised and an empty email draft delivered, at the moment of highest intent.

And one of the four doors was broken: **`coursebldr.ai` 308-redirects to `instructorkit.com`**, a different brand aimed at working trainers, not owners.

**Fixed:** one CTA — *"Book a 30-Minute Owner-to-Owner Call"* — worded identically in all five places, wired through a single `BOOKING_URL` constant, with a pre-filled email as the fallback. Dead CourseBldr door removed.

### 5. The agreement plan existed but did about a fifth of its job
`"No pitch. No pressure."` was the right instinct in the wrong volume — it addressed being sold to and nothing else. It never promised **confidentiality**, which is the first thing an owner needs before discussing succession and family conflict. And it never addressed the obvious conflict of interest: *an advisor who owns a training company will recommend training.*

**Fixed:** a four-line promise box, including the line that costs nothing and buys the most trust: *"I won't sell you training you don't need — even though I own a training company."*

---

## SB7 Scorecard

| Element | Before | After | What changed |
|---|:--:|:--:|---|
| **1. Character** | 3 | 9 | `<h1>` moved from Brian's name to the visitor's problem. Audience cut from seven (incl. Fortune 500, government agencies, trainers) to one: owner-led and family businesses. |
| **2. Problem** | 3 | 9 | Villain named ("the owner-shaped bottleneck"); dedicated section covering all three layers. Internal layer went from three fragments to a full column. |
| **3. Guide** | 5 | 9 | Empathy 4→9, Authority 5→9. Three bio sections → one. Empathy leads; résumé demoted to a sidebar. |
| **4. Plan** | 2 | 9 | 3-step process (The Call / The Read / The Work) plus a real agreement plan with confidentiality and the conflict-of-interest disclosure. |
| **5. Call to Action** | 3 | 9 | One direct CTA, one wording, wired to a single constant. First-ever transitional CTA — a working audit. |
| **6. Success** | 3 | 10 | Dedicated section: five concrete scenes of life after the work. |
| **7. Failure** | 2 | 9 | Dedicated stakes section naming four specific costs, closing on "None of this is urgent. That is exactly the problem." |
| **Total** | **21/70** | **64/70** | |

**Why not 70/70.** Three items are gated on things only you can supply, and no copywriting closes them:
1. **Testimonials are still anonymous.** `"Manufacturing Owner"` carries a fraction of the weight of a real name. I did not invent names — that would be fabricating testimonials. Getting four clients to go on record is worth ~3 points and cannot be written.
2. **No scheduler is connected.** The CTAs currently open a pre-filled email. A real booking link is a one-line change (below) and is worth ~2 points of real conversion.
3. **No results data anywhere.** Not one number on the page describes a client outcome. One quantified case study would be the single highest-value addition left.

---

## Diagnostic Tests

### The Grunt Test *(above the fold only)*

| | Before | After |
|---|---|---|
| What does he offer? | **Fuzzy** — "Business Advisor," then four services in one sentence | **Clear** — succession and getting the owner out of the middle |
| How will it make my life better? | **Fuzzy/Absent** — one benefit, fourth in a list of four | **Clear** — "a company that runs without you, and people prepared to take it" |
| What do I need to do to buy it? | **Clear** as a button, **Fuzzy** as a transaction (opened an email client) | **Clear** — one primary CTA plus a no-commitment second option |

### The Five-Second Test **[not SB7 — standard UX practice]**

- **Before:** *"A very accomplished man, presented beautifully."* Serif display type, a conference photo, a name as the headline, blue-chip logos. It signalled seniority and expense — attracting people evaluating Brian's stature, and repelling the owner who is quietly embarrassed their 60-person company runs on a spreadsheet and a brother-in-law.
- **After:** *"This person already knows what's happening in my company."* The design did not change; only the words did.

### The Hero/Guide Test **[the 2:1 target is a practitioner heuristic, not Miller's — the underlying rule, customer-as-hero, is his]**

| | I / me / my | you / your | Ratio |
|---|:--:|:--:|---|
| Before | 54 | 31 | **1.74 : 1 toward "I"** |
| After | 45 | 94 | **2.09 : 1 toward "you"** |

### The Ecosystem Test

**Verdict before: decision paralysis, and the most damaging structural problem on the page.** Four doors fired at position 2 — before trust — asking `"Where do you need to start?"`, while section 7 said `"You don't have to figure out which service you need."` The page argued with itself, and the wrong side went first. A fifth destination (`learning.ble.training`) appeared nowhere else, and the CourseBldr door was broken.

**After:** one door. The four-door menu is deleted; "One Call. Three Teams." survives and now carries the promise on its own, placed *after* trust is built rather than before.

### Jargon Scan — removed

**Tier 1 (high-traffic):** `operational drag` (was in the hero subhead) · `Talent Architecture` · `Capital Readiness` · `Enterprise Entrepreneur DNA` · `That range is my superpower` · `we wrap around your business` · `30 years of pattern recognition` · `enterprise-grade thinking… without the enterprise-grade complexity`

**Tier 2:** all **16** consultant nouns in the service chip lists deleted — `Operational Scaling` · `Process Optimization` · `Financial Analysis` · `Growth Strategy` · `Leadership Development` · `Team & Culture` · `Executive Coaching` · `Custom Training Programs` · `Succession Planning` · `Ownership Transitions` · `Family Governance` · `Multi-Generational Planning` · `Business Valuation` · `Strategic Planning` · `Market Positioning` · `Capital Readiness`

**Tier 3:** the four role tabs (`Fellow Business Owner / Advisor / Coach / Speaker`) labelled Brian, not the visitor's situation. Replaced with `"I'm the bottleneck"` / `"My managers aren't ready"` / `"I need to hand this off"` / `"I have nobody to ask"`.

**Also fixed:** `"client Impact"` — a lowercase typo in a section heading on a site selling judgment.

---

## Recommended Copy — the BrandScript

> **A CHARACTER** — An owner of a $5M–$75M owner-led or family business, 25–500 employees. They built it. They're proud of it. They're also the reason it can't grow, and they know it.
>
> **HAS A PROBLEM**
> - *Villain:* the owner-shaped bottleneck. The company was designed around one person and never redesigned.
> - *External:* the business outgrew how it's run. Managers were promoted for the old job. Nothing important happens without the owner. No plan for who runs it next.
> - *Internal:* trapped in something they built. Successful on paper, exhausted in practice, with no one to admit it to.
> - *Philosophical:* you shouldn't have to choose between the business you built and the life you wanted out of it.
>
> **AND MEETS A GUIDE**
> - *Empathy:* "I've signed the front of the check. I know the week where the math doesn't work and you tell nobody."
> - *Authority:* thirty years; advised Capital One and United Airlines; built to 50+ employees across six cities. Most advisors have done one or the other.
>
> **WHO GIVES THEM A PLAN** — The Call (30 min) → The Read (2–4 weeks) → The Work (90 days at a time).
>
> **AND CALLS THEM TO ACTION** — *Direct:* Book a 30-minute owner-to-owner call. *Transitional:* Take the Owner's Bottleneck Audit.
>
> **THAT ENDS IN SUCCESS** — Two weeks off and nothing breaks. Managers make the call you'd have made. You know who runs this next, and so do they. The business is worth what you think, because a buyer isn't buying you.
>
> **AND HELPS THEM AVOID FAILURE** — Another eighteen months as the bottleneck. Another good manager gone. A handoff decided by a health event or a 30-day window instead of by you.

### One-liner, three levels of directness

**Soft** — "Most owner-led companies reach a point where everything still runs through the owner. I help them build the managers and the systems to take that weight off — so the business can grow past the owner and still be worth handing over."

**Medium (in use on the site)** — "You built a business that can't run without you. I help owner-led and family companies fix that — so you can step back, hand it off, or sell it on your terms instead of someone else's."

**Direct** — "Most owners are the bottleneck in their own business. I help you get out of the middle of it — before your best people leave or somebody else decides how this ends."

### Hero — the three options, and which shipped

**Option A — "The Bottleneck"**
> Your business can't run a week without you.
*Bet: the most universally felt pain. Widest net, least differentiated.*

**Option B — "The Handoff" ← SHIPPED**
> One day this business changes hands. Right now it isn't ready.
> *Succession isn't a document — it's a company that runs without you, and people prepared to take it. I help family and owner-led businesses build both, years before the pressure is on.*
> **Book a 30-Minute Owner-to-Owner Call**
*Bet: narrows the audience but raises stakes, deal size and differentiation at once. It's the only one no generic "business consultant" can credibly say, and it's coherent with Family Business Performance Group.*
*Flagged risk: reads succession-only. Mitigated — the four situations below it lead with operations and management, not succession, so the operational work stays visible.*

**Option C — "Owner to Owner"**
> I've made payroll. That's why owners call me.
*Bet: leads with empathy rather than credentials. Most distinctly Brian, least orthodox StoryBrand — it still makes him the subject.*

---

## Prioritized Action List

Ranked by impact per unit of effort. **Items 1–11 are already done and committed on branch `storybrand-rewrite`.** Items 12–17 need you.

### DO NOW — done, pending your review and deploy

| # | Action | Impact |
|:--:|---|---|
| 1 | **Replaced the hero.** `<h1>` moved from "Brian T. Hammond" to the visitor's problem. Name demoted to the eyebrow. | Highest |
| 2 | **Deleted the four-door menu.** The single most damaging structural element — it asked the visitor to self-diagnose across four brands before any trust existed. | Highest |
| 3 | **Fixed the broken CourseBldr door.** It pointed at a 308 to InstructorKit, a different brand for a different buyer. Removed rather than relabelled. | High — this was actively losing trust |
| 4 | **Added the Problem section.** Villain named; all three layers, each in its own column. | Highest |
| 5 | **Added the 3-step plan + agreement plan**, including the confidentiality promise and the training conflict-of-interest disclosure. | Highest |
| 6 | **Built the Owner's Bottleneck Audit** — 12 questions, 4 domains, scored in-browser, no backend, no email required. First transitional CTA the site has ever had. | Highest |
| 7 | **Compressed three bio sections into one guide section.** Empathy first, résumé as a sidebar. Swung the pronoun ratio from 1.74:1 "I" to 2.09:1 "you". | High |
| 8 | **Added Success and Stakes sections.** Both were absent. | High |
| 9 | **Unified every CTA** to one wording, wired through a single `BOOKING_URL` constant with a pre-filled email fallback. | High |
| 10 | **Deleted all jargon** listed above, including all 16 service chips; relabelled the four tabs by the visitor's situation. | Medium |
| 11 | **Technical:** duplicate `id="ecosystem"` fixed (nav was misrouting) · `"client Impact"` typo · canonical, `og:url`, `sitemap.xml` and `robots.txt` all pointed at the apex domain that 308s to www · unverified `twitter.com`/`github.com` profiles removed from JSON-LD · title/description/OG rewritten problem-first · WCAG AA contrast failures fixed (audit section was 1.53:1; `.quote-author` 3.08:1; `.service-group-label` 3.19:1) · mobile horizontal overflow and sub-44px tap targets fixed. | Medium |

### DO NEXT — needs you, this week

| # | Action | Why |
|:--:|---|---|
| 12 | **Connect a real scheduler.** Open `index.html`, find `var BOOKING_URL = '';` near the bottom, paste your Calendly/SavvyCal link. Every CTA switches over. **~30 seconds.** | Best effort-to-impact ratio left on the entire list. Until then the CTAs open an email draft. |
| 13 | **Get four clients to go on record.** First name, last initial, industry, city — ideally a photo. Anonymous testimonials carry a fraction of the weight, and this is the largest remaining SB7 gap. I would not invent these. | ~3 points of the 6 still missing |
| 14 | **Decide the assessment story across three properties.** ble.training has a Scorecard, FBPG has a diagnostic, and brianthammond.com now has the Bottleneck Audit. Three overlapping assessments will confuse the same owner. My recommendation: this one is the *owner-personal* diagnostic, BLE's is the *company/team* one, FBPG's is the *family* one — and each should say so in one line. | Medium |

### DO LATER

| # | Action | Why |
|:--:|---|---|
| 15 | **Add one quantified case study.** There is not a single client outcome number on the site. "Cut owner-dependency from X to Y in 9 months" would outperform all four testimonials combined. | High value, high effort — needs a willing client |
| 16 | **Capture audit results by email.** The audit deliberately requires no email today, which maximizes completions but captures no leads. Once a scheduler is in place, consider an optional "email me this readout" — optional, never gated. | Medium |
| 17 | **Replace the hero photo.** The current image is a wide conference shot with the subject small in frame and text overlaid on a busy background. A closer, quieter portrait would suit "owner to owner" better than "keynote speaker." | Low urgency, real effect on the five-second impression |

---

## How to work on this file

The site is one hand-edited `index.html` (~93KB, inline CSS and JS, no build step). Edit it directly.

- **Change every CTA at once:** `var BOOKING_URL` near the bottom of the file.
- **Change the audit:** the `auditWidget` IIFE at the bottom — `DOMAINS` holds the 12 questions and the "what to fix first" advice, `BANDS` holds the four score ranges.
- **Preview locally:** `.claude/launch.json` serves the folder on port 4321.

**Verified before commit:** no duplicate IDs · no broken anchors · zero console errors · all 12 audit questions score correctly across low/mixed/high runs, with partial-submit blocked and reset working · all 8 CTAs wired · WCAG AA passed on 130 text elements (buttons 13–16:1) · zero horizontal overflow and 44px tap targets at 375px.
