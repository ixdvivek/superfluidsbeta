// ============================================================
// Superfluids — brand logo registry
//
// Two corrections are baked in per logo, both measured rather than judged by
// eye: each logo is rendered at a common height, then its ink pixels and mean
// ink luminance are counted.
//
//   scale  Ink area spans 8.4x across the set (Hepworth 0.32x the median,
//          BASF 2.65x), so fitting every logo to one box leaves stacked
//          lockups looking tiny beside single-line wordmarks. Each is scaled
//          by sqrt(median_area / own_area), clamped to 0.72–1.55, which
//          equalises ink rather than bounding box.
//
//   dark   Mean ink luminance spans 31–204. Greyscale alone leaves Davey (204)
//          and Pegler (148) washed out next to Hepworth (46), so pale logos
//          carry a brightness multiplier bringing them to ~90. Logos already
//          dark enough are left at 1.
//
// Grundfos, Wilo and Ebara are recoloured from the white hero marks, which are
// a single fill; the originals stay in assets/media/brands for the dark
// sections. Brands with no file fall back to their name — see BrandTile.
// ============================================================

(function () {
  const ENTRIES = {
    "Grundfos": { src: "assets/brandicons/grundfos.svg", scale: 0.72, dark: 1.0 },
    "Pedrollo": { src: "assets/brandicons/pedrollo.svg", scale: 0.72, dark: 1.0 },
    "Goulds": { src: "assets/brandicons/goulds.svg", scale: 1.1, dark: 0.74 },
    "Lowara": { src: "assets/brandicons/lowara.svg", scale: 1.04, dark: 0.85 },
    "Teral": { src: "assets/brandicons/teral.svg", scale: 1.01, dark: 1.0 },
    "Davey": { src: "assets/brandicons/davey.svg", scale: 0.9, dark: 0.44 },
    "Speroni": { src: "assets/brandicons/speroni.svg", scale: 0.89, dark: 1.0 },
    "Wilo": { src: "assets/brandicons/wilo.svg", scale: 1.01, dark: 1.0 },
    "CRI": { src: "assets/brandicons/cri.svg", scale: 1.52, dark: 1.0 },
    "Espa": { src: "assets/brandicons/espa.svg", scale: 1.12, dark: 1.0 },
    "Ebara": { src: "assets/brandicons/ebara.svg", scale: 0.82, dark: 1.0 },
    "Tsurumi": { src: "assets/brandicons/tsurumi.svg", scale: 0.9, dark: 0.81 },
    "Calpeda": { src: "assets/brandicons/calpeda.svg", scale: 0.72, dark: 1.0 },
    "Georg Fischer (+GF+)": { src: "assets/brandicons/georg-fischer-gf.svg", scale: 0.92, dark: 0.96 },
    "Hepworth": { src: "assets/brandicons/hepworth.svg", scale: 1.55, dark: 1.0 },
    "Sekisui Eslon": { src: "assets/brandicons/sekisui-eslon.svg", scale: 0.73, dark: 1.0 },
    "Cepex": { src: "assets/brandicons/cepex.svg", scale: 1.07, dark: 1.0 },
    "Peštan": { src: "assets/brandicons/pestan.svg", scale: 0.99, dark: 0.92 },
    "MPI Atlas": { src: "assets/brandicons/mpi-atlas.svg", scale: 0.75, dark: 1.0 },
    "Rain Bird": { src: "assets/brandicons/rain-bird.svg", scale: 0.96, dark: 0.72 },
    "Pegler": { src: "assets/brandicons/pegler.svg", scale: 1.36, dark: 0.61 },
    "ABB": { src: "assets/brandicons/abb.svg", scale: 0.84, dark: 1.0 },
    "EKF": { src: "assets/brandicons/ekf.svg", scale: 0.87, dark: 1.0 },
    "RAK Ceramics": { src: "assets/brandicons/rak-ceramics.svg", scale: 1.52, dark: 1.0 },
    "Weber": { src: "assets/brandicons/weber.svg", scale: 1.22, dark: 1.0 },
    "BASF": { src: "assets/brandicons/basf.svg", scale: 0.72, dark: 1.0 },
    "GROHE": { src: "assets/brandicons/grohe.svg", scale: 1.14, dark: 1.0 },
    "Jaquar": { src: "assets/brandicons/jaquar.svg", scale: 1.01, dark: 1.0 },
    "Crane": { src: "assets/brandicons/crane.svg", scale: 1.23, dark: 1.0 },
    "Henry Pratt": { src: "assets/brandicons/henry-pratt.svg", scale: 1.42, dark: 1.0 }
  };

  // Names differ slightly between data.js, products.js and featuredBrands
  // ("Georg Fischer" vs "Georg Fischer (+GF+)"), so match loosely as well.
  const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "");
  const LOOSE = {};
  Object.keys(ENTRIES).forEach((k) => { LOOSE[norm(k)] = ENTRIES[k]; });
  const ALIASES = { "georgfischer": "Georg Fischer (+GF+)", "gf": "Georg Fischer (+GF+)",
                    "cripumps": "CRI", "grohegroup": "GROHE", "pestan": "Peštan" };

  window.SFBrandLogos = {
    get(name) {
      if (!name) return null;
      if (ENTRIES[name]) return ENTRIES[name];
      const n = norm(name);
      if (LOOSE[n]) return LOOSE[n];
      if (ALIASES[n]) return ENTRIES[ALIASES[n]];
      return null;
    },
    count: Object.keys(ENTRIES).length,
  };
})();
