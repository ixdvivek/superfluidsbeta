# Image manifest

Every image slot the site expects, with the folder to drop it in.
**Filenames are fixed** — the code resolves them by convention, so a file
named exactly as listed is picked up with no code change.

Anything missing keeps its placeholder, so partial delivery is fine and
nothing breaks.

---

## Sizes

These are measured from the built site, not estimated. Each slot's CSS
size is doubled for retina, then rounded up. Supplying larger is fine —
the build downsamples. Supplying smaller means visible softness.

| Shape | Rendered at | **Supply** | Used for |
| :--- | :--- | :--- | :--- |
| 4:3 | 554×416 | **1200×900** | products, services, projects, most cards |
| 4:5 portrait | 550×688 | **1200×1500** | About / Home / Services feature columns |
| 16:10 | 550×344 | **1200×750** | About "Our engineers" band |

**Format.** JPG or PNG, sRGB, no pre-compression — send the best original
you have and the build handles WebP conversion and fallbacks.

**Backgrounds.** Product shots want a white or transparent background.
Cut-outs on black read as dark rectangles on the site's light cards. If a
shot only exists on black, send it anyway and flag it — most can be cut.

---

## Per-item images

One per record. The same file serves the detail page hero and the smaller
cards that link to it, so only the one size is needed.

### Shop products — `assets/media/shop/<slug>/01.jpg, 02.jpg…` · 1:1

The Shop replaced the 14 product pages (those folders under
`products/` are no longer used). Shop photos are **listed in the data**
rather than found by filename: add the paths to that product's `images`
array in `site/shop.js` — the first is the card thumbnail, the rest
appear in the popup slider. Square, white or transparent background,
**1200×1200**.

### Services — `assets/media/services/<slug>/main.jpg` · 4:3

Work in progress rather than product shots — an engineer with a duty
schedule, a panel being wired, a pump being aligned.

- `equipment-supply/main.jpg`
- `design-engineering/main.jpg`
- `installation-commissioning/main.jpg`
- `energy-audits/main.jpg`
- `annual-maintenance-contracts/main.jpg`
- `total-mep-contracting/main.jpg`

### Projects — `assets/media/projects/<slug>/01.jpg, 02.jpg…` · 16:10 or 4:3

Projects are a gallery on the Home page; each opens a popup slider. List
the files in that project's `images` array in `site/data.js` — the first
is the grid thumbnail. As many photos per project as you like,
landscape, **1600×1000** or larger.

- `neom-utility-pump-station/`
- `yanbu-refinery-expansion/`
- `jubail-petrochemical-utilities/`
- `riyadh-business-park/`
- `sohar-industrial-estate-utilities/`
- `muscat-water-distribution-upgrade/`
- `salalah-beach-resort/`
- `kuwait-financial-centre-tower/`
- `al-adan-hospital-extension/`
- `hamad-medical-city-expansion/`
- `hidd-sewage-pumping-station/`
- `marina-heights-tower/`
- `green-community-residences/`

---

## Fixed slots

`assets/media/pages/`

- `about-facility.jpg` · 4:3 — the DIP premises
- `about-team-onsite.jpg` · **4:5 portrait** — engineering team on site
- `about-engineers.jpg` · 16:10 — engineers at work
- `home-feature.jpg` · **4:5 portrait** — team on site, home page
- `home-secondary.jpg` · 4:3
- `services-commissioning.jpg` · **4:5 portrait** — commissioning on site

---

## Already supplied

- `pages/home-hero.{mp4,webm,jpg}` — hero background video and poster
- `../logos/` — Superfluids wordmark and icon variants, from Figma
- `../brandicons/` — 30 manufacturer logos

## Still outstanding elsewhere

Six manufacturer logos have no file and render a placeholder: EDS Global,
DAB, Comer, Eaton, Schneider Electric, Siemens. Twelve more appear only in
product spec sheets: Ariston, AstralPool, CIMM, Econair, GWS, Genyo,
Marathon Motors, NEMA, Opar, Reflex, Wates.

Grundfos, Wilo and Ebara currently use a flat dark recolour of the white
hero marks; full-colour versions are expected.
