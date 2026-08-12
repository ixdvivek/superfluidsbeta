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

## Per-item images — 33

One per record. The same file serves the detail page hero and the smaller
cards that link to it, so only the one size is needed.

### Products — `assets/media/products/<slug>/main.jpg` · 4:3

The company profile deck already carries a usable reference shot for the
ones marked ✓ — those are the subjects to match, not the files to use
(the deck's copies are 100dpi and too small).

- `transfer-pumps/main.jpg` ✓ deck p6
- `booster-pumps/main.jpg` ✓ deck p5
- `agriculture-irrigation-pumps/main.jpg` ✓ deck p11
- `circulation-chilled-water-pumps/main.jpg` ✓ deck p6
- `submersible-pumps/main.jpg` ✓ deck p7
- `pressure-kits/main.jpg` ✓ deck p9
- `pressure-tanks/main.jpg` ✓ deck p8
- `control-panels/main.jpg` — nothing usable in the deck
- `manifolds/main.jpg` — nothing usable in the deck
- `grp-panel-tanks/main.jpg` ✓ deck p10
- `solar-water-heaters/main.jpg` ✓ deck p10
- `water-chillers/main.jpg` ✓ deck p10
- `irrigation-products/main.jpg` — nothing usable in the deck
- `swimming-pool-products/main.jpg` ✓ deck p11

### Services — `assets/media/services/<slug>/main.jpg` · 4:3

Work in progress rather than product shots — an engineer with a duty
schedule, a panel being wired, a pump being aligned.

- `equipment-supply/main.jpg`
- `design-engineering/main.jpg`
- `installation-commissioning/main.jpg`
- `energy-audits/main.jpg`
- `annual-maintenance-contracts/main.jpg`
- `total-mep-contracting/main.jpg`

### Projects — `assets/media/projects/<slug>/main.jpg` · 4:3

Real site photography. These carry the most weight on the site and are the
one category manufacturer stock cannot cover.

- `neom-utility-pump-station/main.jpg`
- `yanbu-refinery-expansion/main.jpg`
- `jubail-petrochemical-utilities/main.jpg`
- `riyadh-business-park/main.jpg`
- `sohar-industrial-estate-utilities/main.jpg`
- `muscat-water-distribution-upgrade/main.jpg`
- `salalah-beach-resort/main.jpg`
- `kuwait-financial-centre-tower/main.jpg`
- `al-adan-hospital-extension/main.jpg`
- `hamad-medical-city-expansion/main.jpg`
- `hidd-sewage-pumping-station/main.jpg`
- `marina-heights-tower/main.jpg`
- `green-community-residences/main.jpg`

---

## Fixed slots — 7

`assets/media/pages/`

- `about-facility.jpg` · 4:3 — the DIP premises
- `about-team-onsite.jpg` · **4:5 portrait** — engineering team on site
- `about-engineers.jpg` · 16:10 — engineers at work
- `home-feature.jpg` · **4:5 portrait** — team on site, home page
- `home-secondary.jpg` · 4:3
- `industries-commissioning.jpg` · 4:3 — plant room commissioning
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
