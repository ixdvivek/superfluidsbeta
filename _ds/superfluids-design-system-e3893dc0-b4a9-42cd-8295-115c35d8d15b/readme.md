# Superfluids Design System

A design system for **Superfluids** — a UAE-based fluid-engineering company providing pumping systems, water storage (GRP tanks), variable frequency drives, industrial valves, hot-water systems, water-treatment systems, and the design / supply / installation / maintenance services around them.

The brand positions Superfluids as an **engineering solutions provider**, not just a product supplier. Everything here should feel **professional, technical, reliable, modern and premium** — built to win trust from contractors, consultants, developers, facility managers and government entities, and to generate qualified B2B leads.

> **Sources.** This system was built from a written brand/PRD brief plus four supplied logo assets (`uploads/`). There was **no codebase or Figma file** to reference — components and screens are an original interpretation of the brief, not a recreation of an existing product. The brief specifies the full site map (Home, About, Products, Services, Industries, Projects, Resources, Contact), the colour palette, the type scale, and the visual direction summarised below.

---

## Brand at a glance

- **Name styling:** always lowercase **"superfluids"** as one word. The "fl" ligature is rendered as a **glassy, liquid 3-D droplet mark** in aqua/teal — the brand's signature symbol.
- **Personality:** engineering authority (deep navy) + industrial precision (blue) + the fluid/water element (aqua teal).
- **Tagline territory:** "Complete Water & Fluid Engineering Solutions Across UAE."

---

## CONTENT FUNDAMENTALS

How Superfluids writes.

- **Voice:** confident, precise, engineering-led. Speaks as a capable partner — "we design, supply, install and maintain." Uses **"we"** for the company and **"you/your"** for the client ("your project requirements", "your building").
- **Register:** professional B2B, technical but not jargon-drunk. Real engineering nouns are welcome (booster set, hydraulic calculation, head, flow rate, commissioning, AMC) — they signal competence to a technical audience.
- **Casing:** Sentence case for body and most headings. **Eyebrows / kicker labels are UPPERCASE** and letter-spaced ("CORE SOLUTIONS", "WHY SUPERFLUIDS"). The wordmark is always lowercase.
- **Sentence length:** short, declarative, outcome-focused. "Engineered fluid systems, end to end." "Factory-trained engineers." Avoid fluff and superlatives without substance.
- **CTAs:** action + value. "Request Consultation", "Request a Technical Consultation", "Get a Quote", "View Products", "Speak With Our Engineering Team", "Submit Inquiry". Prefer "Consultation"/"Technical" framing over generic "Learn more / Sign up".
- **Numbers & units:** specific and metric (m³/h, m head, kW, DN50). Stats use round confident figures with an accent suffix ("500+", "15+"). Monospace is used for spec values.
- **Emoji:** never. This is a serious engineering brand. Iconography carries visual meaning instead.
- **Region:** UAE / Dubai context — "Across UAE", "+971" phone numbers, AED-scale commercial/government projects. SEO leans on "…UAE" / "…Dubai" suffixes.
- **Examples of on-brand copy:**
  - Hero: *"Complete Water & Fluid Engineering Solutions Across UAE"* / *"Design, Supply, Installation and Maintenance of High-Performance Pumping Systems, Water Storage Solutions and Automation Infrastructure."*
  - Section intro: *"Engineering partners, not just suppliers."*
  - Final CTA: *"Need a Fluid Engineering Partner? Request a Technical Consultation."*

---

## VISUAL FOUNDATIONS

The look and feel, in detail.

### Colour
- **Deep Navy `#0E2341`** is the primary — authority, headers, dark hero sections, primary buttons, footer. A deeper `#081728` anchors gradients and the darkest surfaces.
- **Industrial Blue `#0D6EFD`** is the secondary action / link colour.
- **Aqua Teal `#00B7C7`** is the accent — the water/droplet element. Used for eyebrows, the leading tick, icon fills on hover, stat suffixes, and the end of the signature gradient. Used as a **highlight, not a flood**.
- **Backgrounds** alternate between page grey `#F7F9FC` and white surfaces. Only 1–2 background tones per page; navy is reserved for high-impact bands (hero, testimonials, final CTA).
- **Imagery vibe:** real engineering photography — pump rooms, water systems, industrial facilities, infrastructure, engineers at work — cool-toned, clean, no warm/grainy filters. CAD/blueprint-inspired technical line graphics are welcome as accents. Avoid generic stock, cartoons, and template-y imagery.

### Type
- **Outfit** for headings/display (geometric, modern, confident). **Plus Jakarta Sans** is the alternative heading voice (used for pull-quotes). **Inter** for body/UI. **IBM Plex Mono** for technical spec values and numeric readouts (engineering precision).
- Scale: H1 64 · H2 48 · H3 32 · H4 24 · Body-lg 18 · Body 16 · Sm 14. Headings use tight tracking (`-0.02em`) and `text-wrap: balance`; body uses `1.6–1.7` line-height and `text-wrap: pretty`.
- **Eyebrow** label is the signature type motif: 13px, 700, uppercase, `0.14em` tracking, aqua, with a short 22px aqua tick before it.

### Spacing & layout
- 8px base grid. Generous section rhythm — **96px** vertical section padding (64px tight). Content max-width 1200px, 24px gutters.
- Grids: solution/product tiles in 3 columns; industries in a denser multi-column grid; stats in 4 columns.

### Corner radius
- Soft but not pillowy. Inputs/buttons `12px` (md), cards `16px` (lg), large feature panels `24px` (xl), badges and the eyebrow tick are pill/`999px`. Icon chips `12px`.

### Cards
- White surface, `1px` subtle grey border (`#E2E8F0`), `16px` radius, and a **soft cool navy-tinted shadow** (`--shadow-card`) — never pure-black shadows. Interactive cards **lift 3–4px** and deepen the shadow on hover; solution-card icons fill with the blue→aqua **fluid gradient** on hover.

### Shadows & elevation
- All shadows are tinted with navy (`rgba(14,35,65,…)`) at low opacity for a cool, premium feel. Scale xs → xl. **Colored glows** (`--glow-accent`, `--glow-blue`) are reserved for accent/secondary CTAs and the process-step counters — used sparingly.

### Gradients
- **Fluid gradient** (`#0D6EFD → #00B7C7`, ~120°) is the hero accent — on accent buttons, the tab underline, process counters, and icon-hover fills.
- **Navy wash** (`#0E2341 → #081728`) backs dark hero/CTA bands.
- **Aqua-soft** tint for subtle highlight surfaces. **Scrims** (navy, top/▢ directional) protect text over photography.

### Glass / blur
- A nod to the glassy droplet mark: light and dark glassmorphism tokens (`--glass-bg`, `--blur-md`) for floating cards over photography or navy — used selectively, not everywhere.

### Motion
- Calm and engineered. Default transition `220ms` on a soft `cubic-bezier(0.16,1,0.3,1)` ease-out. Hover = lift + shadow + colour shift; no bounces, no flashy loops. Accordions expand via `grid-template-rows`. Respect `prefers-reduced-motion`.

### States
- **Hover:** lift + deeper shadow (cards), gradient fill (icons), colour darken (solid buttons), underline grow (tabs).
- **Focus:** 3px focus ring (`--focus-ring`, industrial blue at 35%) + border colour change on inputs.
- **Press/active:** subtle — colour darken; no aggressive shrink.
- **Borders/dividers:** hairline `#E2E8F0` subtle, `#CBD5E1` default; never heavy.

---

## ICONOGRAPHY

- **System:** [Lucide](https://lucide.dev) — clean, modern, consistent **2px stroke** line icons. This matches the technical, precise, non-decorative brand. Loaded from CDN (`https://unpkg.com/lucide@latest`). The `Icon` component wraps it (`<Icon name="droplet" />`).
- **Why Lucide:** no brand icon set was supplied; Lucide's even stroke weight and engineering-neutral style fit "clean modern iconography" from the brief. **This is a substitution — flagged for review.** If Superfluids has a bespoke icon set, drop the SVGs into `assets/icons/` and point `Icon` at them.
- **Usage:** icons sit in soft aqua-tinted rounded chips on solution cards / feature blocks; inline (15–18px) for meta (location, phone, mail); 26–28px as feature glyphs. Stroke weight may relax to `1.75` for large feature icons.
- **Common names:** `droplet`, `gauge` (pumps), `cylinder` (tanks), `settings-2` (VFD), `git-commit-horizontal` (valves), `flame` (hot water), `filter` (treatment), `shield-check`/`badge-check`, `wrench`, `waves`, `map-pin`, `phone`, `mail`, `arrow-right`, `download`, `chevron-down`.
- **Emoji / unicode icons:** not used.
- **Brand mark:** the glassy droplet "fl" is a brand asset (PNG), not an icon — see `assets/logos/`. Never redraw it; use the supplied files.

---

## INDEX — what's in this system

**Foundations (root)**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/effects.css` · `tokens/fonts.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Assets**
- `assets/logos/` — `superfluids-wordmark-navy.png` (light bg), `superfluids-wordmark-white.png` (dark bg), `superfluids-mark.png` (glassy droplet), `superfluids-mark-white.png`.

**Components** (`window.SuperfluidsDesignSystem_e3893d.*`)
- **core/** — Icon, Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Badge, Card, Eyebrow, SectionHeader, Avatar, Accordion, Tabs, Breadcrumb.
- **marketing/** — SolutionCard, FeatureBlock, StatCard, ProjectCard, ProcessTimeline, Testimonial, LogoBar, SpecTable.
- **brand/** — Logo.
- Each component has a `.jsx`, `.d.ts` (props + adherence), and `.prompt.md` (usage). Directory `*.card.html` files render in the Design System tab.

**UI kit**
- `ui_kits/website/` — interactive recreation of the Superfluids marketing site (Home, Products, Contact) composed from the components above. Open `ui_kits/website/index.html`.

**Skill**
- `SKILL.md` — makes this folder usable as a downloadable Agent Skill.

---

## Using it

Link the tokens, load the bundle, render components:

```html
<link rel="stylesheet" href="styles.css" />
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script src="_ds_bundle.js"></script>
<script>
  const { Button, SolutionCard } = window.SuperfluidsDesignSystem_e3893d;
</script>
```

Fonts (Outfit, Inter, Plus Jakarta Sans, IBM Plex Mono) load from Google Fonts via `tokens/fonts.css`.
