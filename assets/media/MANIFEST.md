# Image manifest

Every image slot the site expects, with the folder to drop it in.
Filenames are fixed — the code resolves them by convention, so a file
named exactly as listed is picked up with no code change.

**Formats.** Supply JPG or PNG at the stated size or larger; the build
converts to WebP with a fallback. Do not pre-compress — send the best
original you have. Logos should be SVG or transparent PNG.

**Tier 1** is the minimum to take placeholders off the site.
**Tier 2** completes it. Anything missing keeps its current placeholder,
so partial delivery is fine and nothing breaks.

---

## Tier 1 — minimum viable (44 images)

### Page heroes — `assets/media/pages/` · 2400x1000 landscape
- `home-hero.jpg`
- `about-hero.jpg`
- `products-hero.jpg`
- `services-hero.jpg`
- `industries-hero.jpg`
- `brands-hero.jpg`
- `projects-hero.jpg`
- `contact-hero.jpg`

Home may instead take a background video: `home-hero.mp4`, 1080p, under
8s, silent, seamless loop. If both are supplied the video is used with the
image as poster.

### Product mains — `assets/media/products/<slug>/main.jpg` · 1600x1200 (4:3)
- `transfer-pumps/main.jpg` — Transfer Pumps
- `booster-pumps/main.jpg` — Booster Pumps (Pressure Boosting)
- `agriculture-irrigation-pumps/main.jpg` — Agriculture & Irrigation Pumps
- `circulation-chilled-water-pumps/main.jpg` — Circulation & Chilled Water Pumps (Hot/Cold)
- `submersible-pumps/main.jpg` — Submersible Pumps
- `pressure-kits/main.jpg` — Pressure Kits
- `pressure-tanks/main.jpg` — Pressure Tanks
- `control-panels/main.jpg` — Control Panels (PLC, HMI, VFD, Star-Delta, DOL)
- `manifolds/main.jpg` — Manifolds GI/MS/SS
- `grp-panel-tanks/main.jpg` — GRP Panel Tanks
- `solar-water-heaters/main.jpg` — Solar Water Heaters
- `water-chillers/main.jpg` — Water Chillers
- `irrigation-products/main.jpg` — Irrigation Products
- `swimming-pool-products/main.jpg` — Swimming Pool Products

### Project covers — `assets/media/projects/<slug>/cover.jpg` · 1600x1200 (4:3)
- `neom-utility-pump-station/cover.jpg` — NEOM Utility Pump Station (Saudi Arabia)
- `yanbu-refinery-expansion/cover.jpg` — Yanbu Refinery Expansion (Saudi Arabia)
- `jubail-petrochemical-utilities/cover.jpg` — Jubail Petrochemical Utilities (Saudi Arabia)
- `riyadh-business-park/cover.jpg` — Riyadh Business Park (Saudi Arabia)
- `sohar-industrial-estate-utilities/cover.jpg` — Sohar Industrial Estate Utilities (Oman)
- `muscat-water-distribution-upgrade/cover.jpg` — Muscat Water Distribution Upgrade (Oman)
- `salalah-beach-resort/cover.jpg` — Salalah Beach Resort (Oman)
- `kuwait-financial-centre-tower/cover.jpg` — Kuwait Financial Centre Tower (Kuwait)
- `al-adan-hospital-extension/cover.jpg` — Al Adan Hospital Extension (Kuwait)
- `hamad-medical-city-expansion/cover.jpg` — Hamad Medical City Expansion, Doha (Qatar)
- `hidd-sewage-pumping-station/cover.jpg` — Hidd Sewage Pumping Station (Bahrain)
- `marina-heights-tower/cover.jpg` — Marina Heights Tower, Dubai (UAE)
- `green-community-residences/cover.jpg` — Green Community Residences, Dubai (UAE)

### Sector images — `assets/media/sectors/` · 1200x900 (4:3)
- `residential.jpg` — Residential
- `commercial.jpg` — Commercial
- `hospitality.jpg` — Hospitality
- `healthcare.jpg` — Healthcare
- `industrial.jpg` — Industrial
- `infrastructure.jpg` — Infrastructure
- `government.jpg` — Government
- `district-cooling.jpg` — District Cooling
- `oil-gas.jpg` — Oil & Gas

---

## Tier 2 — completes the build

### Product thumbnails — `assets/media/products/<slug>/` · 800x800 (1:1)
Four per product, named `01.jpg` to `04.jpg`. 56 total.
Fewer than four is fine — the row collapses to what exists.

### Service imagery — `assets/media/services/` · 1600x1000 (16:10)
- `equipment-supply.jpg` — Equipment Supply
- `design-engineering.jpg` — Design & Engineering
- `installation-commissioning.jpg` — Installation & Commissioning
- `energy-audits.jpg` — Energy Audits
- `annual-maintenance-contracts.jpg` — Annual Maintenance Contracts
- `total-mep-contracting.jpg` — Total MEP Contracting

### Project galleries — `assets/media/projects/<slug>/` · 1600x1200
Up to six per project, named `01.jpg` to `06.jpg`. Optional per project —
the gallery section hides when a project has none.

### Brand logos — `assets/media/brands/` · SVG preferred, else transparent PNG at 400px wide

Priority — the 10 on the rotating home band:
- `grundfos.svg`
- `wilo.svg`
- `ebara.svg`
- `dab.svg`
- `lowara.svg`
- `abb.svg`
- `schneider-electric.svg`
- `georg-fischer.svg`
- `pedrollo.svg`
- `tsurumi.svg`

Remaining 26 for the Brands page:

**Pumps**
- `goulds.svg` — Goulds
- `teral.svg` — Teral
- `eds-global.svg` — EDS Global
- `davey.svg` — Davey
- `speroni.svg` — Speroni
- `cri.svg` — CRI
- `espa.svg` — Espa
- `calpeda.svg` — Calpeda

**Piping Systems**
- `georg-fischer-(+gf+).svg` — Georg Fischer (+GF+)
- `hepworth.svg` — Hepworth
- `sekisui-eslon.svg` — Sekisui Eslon
- `cepex.svg` — Cepex
- `pe-tan.svg` — Peštan
- `comer.svg` — Comer
- `mpi-atlas.svg` — MPI Atlas
- `rain-bird.svg` — Rain Bird
- `pegler.svg` — Pegler

**Controls & Electrical**
- `eaton.svg` — Eaton
- `siemens.svg` — Siemens
- `ekf.svg` — EKF

**Sanitaryware, Adhesives & Fittings**
- `rak-ceramics.svg` — RAK Ceramics
- `weber.svg` — Weber
- `basf.svg` — BASF
- `grohe.svg` — GROHE
- `jaquar.svg` — Jaquar
- `crane.svg` — Crane
- `henry-pratt.svg` — Henry Pratt

---

## Notes

- **Orientation matters.** Product mains are 4:3 landscape; a tall portrait
  shot will letterbox. Send landscape where possible.
- **Cool tone.** The design language is cool navy and aqua. Warm or heavily
  filtered photography will fight it.
- **People.** Shots with engineers at work outperform bare equipment for
  the page heroes. Equipment-only is right for product mains.
