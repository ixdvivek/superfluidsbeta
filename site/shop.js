// ============================================================
// Superfluids — Shop catalogue
//
// PLACEHOLDER PRODUCTS. Names, specs and prices below are stand-ins built
// from the company profile brochure so the Shop can be reviewed. Replace
// them with the real catalogue — the page reads everything from here.
//
// Product fields
//   slug       unique, URL-safe; becomes #/shop/<category>/<slug>
//   name       display name
//   category   one of the category ids below
//   brand      shown on the card and in the enquiry message
//   sku        model / part number (optional)
//   price      number in `currency`; null or 0 = "Price on request"
//   currency   defaults to AED
//   inStock    true / false
//   badge      short label on the card, e.g. "Packaged system" (optional)
//   images     paths, first is the card thumbnail. Suggested location:
//              assets/media/shop/<slug>/01.jpg, 02.jpg… Empty = placeholder.
//   summary    one or two sentences for the popup
//   specs      [label, value] rows for the popup's spec table
// ============================================================

window.SFData = window.SFData || {};

window.SFData.shopCategories = [
  { id: "pumps", name: "Pumps", icon: "gauge" },
  { id: "tanks-vessels", name: "Tanks & Vessels", icon: "container" },
  { id: "heating-cooling", name: "Heating & Cooling", icon: "thermometer" },
  { id: "controls-automation", name: "Controls & Automation", icon: "cpu" },
  { id: "irrigation", name: "Irrigation", icon: "sprout" },
  { id: "pool", name: "Pool", icon: "waves" },
];

window.SFData.shop = [
  // ---- Pumps ------------------------------------------------
  {
    slug: "duty-standby-booster-set-vfd",
    name: "Duty / Standby Booster Set with VFD",
    category: "pumps", brand: "Superfluids", sku: "SF-BST-DS-VFD",
    price: null, inStock: true, badge: "Packaged system", images: [],
    summary: "Complete pressure-boosting set built to your duty point — two pumps, manifolds, pressure tank and VFD control panel, tested as one unit.",
    specs: [
      ["Configuration", "Duty + standby (assist / jockey as required)"],
      ["Control", "VFD · PLC · HMI · BMS outputs"],
      ["Manifolds", "SS304 / SS316 / MS / GI"],
      ["Valves", "SS / brass / bronze / CI, with NRV"],
      ["Pressure tank", "60 – 2,000 L"],
      ["Base", "SS / MS skid"],
    ],
  },
  {
    slug: "horizontal-multistage-pump-1-1kw",
    name: "Horizontal Multistage Pump 1.1 kW",
    category: "pumps", brand: "Wilo", sku: "SF-HMP-110",
    price: 1450, inStock: true, images: [],
    summary: "Compact stainless multistage pump for domestic pressure boosting and water transfer.",
    specs: [
      ["Flow", "Up to 6 m³/h"],
      ["Head", "Up to 50 m"],
      ["Motor", "1.1 kW"],
      ["Power supply", "1-phase, 240 V, 50 Hz"],
      ["Pump body", "SS304"],
      ["Liquid temperature", "Up to 60 °C"],
    ],
  },
  {
    slug: "submersible-drainage-pump-float",
    name: "Submersible Drainage Pump with Float",
    category: "pumps", brand: "Tsurumi", sku: "SF-SDP-075",
    price: 980, inStock: true, images: [],
    summary: "Automatic sump and drainage pump for grey water, storm water and basement sumps.",
    specs: [
      ["Motor", "0.75 kW"],
      ["Power supply", "1-phase, 240 V, 50 Hz"],
      ["Operation", "Automatic, float switch"],
      ["Solids handling", "Up to 35 mm"],
      ["Applications", "Grey water, storm water, sump emptying"],
    ],
  },

  // ---- Tanks & Vessels --------------------------------------
  {
    slug: "pressure-tank-24l-8bar",
    name: "Pressure Tank 24 L — 8 bar",
    category: "tanks-vessels", brand: "EDS Global", sku: "SF-PT-024",
    price: 159, inStock: true, images: [],
    summary: "Membrane pressure tank that stops booster pumps short-cycling and holds closed-valve pressure.",
    specs: [
      ["Capacity", "24 L"],
      ["Max. working pressure", "8 bar"],
      ["Membrane", "EPDM, interchangeable"],
      ["Connection", "1\" male"],
      ["Mounting", "Vertical"],
    ],
  },
  {
    slug: "expansion-vessel-100l-heating",
    name: "Expansion Vessel 100 L — Heating",
    category: "tanks-vessels", brand: "Reflex", sku: "SF-EV-100H",
    price: 690, inStock: false, images: [],
    summary: "Fixed-membrane expansion vessel for closed heating, solar and chilled-water circuits.",
    specs: [
      ["Capacity", "100 L"],
      ["Max. working pressure", "6 bar"],
      ["Max. temperature", "70 °C"],
      ["Membrane", "Butyl, fixed"],
      ["Pre-charge", "Set via top filling valve"],
    ],
  },
  {
    slug: "grp-sectional-panel-tank",
    name: "GRP Sectional Panel Tank",
    category: "tanks-vessels", brand: "Superfluids", sku: "SF-GRP-CUSTOM",
    price: null, inStock: true, badge: "Built to size", images: [],
    summary: "Modular fibreglass tank for potable water, firefighting reserve and industrial storage, assembled on site.",
    specs: [
      ["Capacity", "1,000 L to 1,000,000+ L"],
      ["Construction", "Insulated or non-insulated panels"],
      ["Internal tie rods", "Stainless steel grade 316"],
      ["Included", "Lockable manhole, ladders, level indicator"],
    ],
  },

  // ---- Heating & Cooling ------------------------------------
  {
    slug: "solar-water-heater-300l",
    name: "Solar Water Heater 300 L",
    category: "heating-cooling", brand: "Ariston", sku: "SF-SWH-300",
    price: 3950, inStock: true, images: [],
    summary: "Vacuum-tube solar water heater with electric backup for villas and small commercial buildings.",
    specs: [
      ["Capacity", "300 L"],
      ["Collector", "Dual-glass vacuum tubes, 58 × 1,800 mm"],
      ["Inner tank", "SUS304 stainless steel"],
      ["Heat retention", "Up to 72 hours"],
      ["Backup", "Built-in electric element"],
    ],
  },
  {
    slug: "roof-tank-water-chiller",
    name: "Roof Tank Water Chiller",
    category: "heating-cooling", brand: "Econair", sku: "SF-WC-RT",
    price: null, inStock: true, images: [],
    summary: "Keeps rooftop tank water cool through the summer for homes, offices and labour accommodation.",
    specs: [
      ["Configuration", "Roof water-tank chiller"],
      ["Applications", "Domestic, commercial, industrial"],
      ["Sizing", "Selected to tank volume and demand"],
    ],
  },
  {
    slug: "hot-water-circulator-pump",
    name: "Hot Water Circulator Pump",
    category: "heating-cooling", brand: "Grundfos", sku: "SF-CIRC-HW",
    price: 720, inStock: true, images: [],
    summary: "Quiet circulator for hot-water return loops, so taps run hot straight away.",
    specs: [
      ["Duty", "Single duty"],
      ["Pump body", "Non-corrosive, for potable hot water"],
      ["Control", "Timer and temperature control"],
      ["Applications", "Villas, hotels, laundries"],
    ],
  },

  // ---- Controls & Automation --------------------------------
  {
    slug: "electronic-pressure-kit",
    name: "Electronic Pressure Kit",
    category: "controls-automation", brand: "Pedrollo", sku: "SF-PK-22",
    price: 245, inStock: true, images: [],
    summary: "Automatic start-stop controller that runs a pump on demand and protects it from running dry.",
    specs: [
      ["Delivery", "Up to 10 m³/h"],
      ["Pump power", "Up to 2.2 kW"],
      ["Max. operating pressure", "10 bar"],
      ["Liquid temperature", "Up to 60 °C"],
      ["Protection", "Dry-running, with alarm indication"],
    ],
  },
  {
    slug: "vfd-pump-control-panel",
    name: "VFD Pump Control Panel",
    category: "controls-automation", brand: "Superfluids", sku: "SF-CP-VFD",
    price: null, inStock: true, badge: "Made in-house", images: [],
    summary: "Designed, built and tested in-house to suit the pump set — constant pressure with lower running cost.",
    specs: [
      ["Starting", "VFD (DOL and star-delta also available)"],
      ["Controller", "PLC with HMI touchscreen"],
      ["Integration", "BMS outputs, alarms"],
      ["Components", "Schneider · ABB · Siemens · Eaton"],
    ],
  },
  {
    slug: "ss304-pump-manifold-3-branch",
    name: "SS304 Pump Manifold — 3 Branch",
    category: "controls-automation", brand: "Superfluids", sku: "SF-MAN-304-3",
    price: 2800, inStock: false, images: [],
    summary: "Suction / discharge manifold for three-pump booster and transfer sets, made to order.",
    specs: [
      ["Material", "SS304 (SS316 on request)"],
      ["Branches", "3"],
      ["Nominal diameter", "2\""],
      ["Pressure rating", "16 bar"],
      ["Connection", "Flanged / grooved"],
    ],
  },

  // ---- Irrigation -------------------------------------------
  {
    slug: "adjustable-sprinkler-40-360",
    name: "Adjustable Sprinkler 40°–360°",
    category: "irrigation", brand: "Rain Bird", sku: "SF-SPR-8N",
    price: 38, inStock: true, images: [],
    summary: "Adjustable-arc sprinkler with eight nozzles for lawns and landscaped areas.",
    specs: [
      ["Arc", "40° – 360°"],
      ["Nozzles", "8, with plastic cover"],
      ["Working pressure", "2.1 – 3.4 bar"],
      ["Throw", "4.6 – 13.5 m"],
      ["Inlet", "½\" F and ¾\" F"],
    ],
  },
  {
    slug: "irrigation-electric-valve-1in",
    name: "Irrigation Electric Valve 1\"",
    category: "irrigation", brand: "Rain Bird", sku: "SF-IEV-100",
    price: 165, inStock: true, images: [],
    summary: "24 VAC solenoid valve for zoned, timer-controlled irrigation.",
    specs: [
      ["Size", "1\""],
      ["Solenoid", "24 VAC"],
      ["Flow control", "Adjustable"],
      ["Body", "Glass-filled nylon"],
    ],
  },

  // ---- Pool -------------------------------------------------
  {
    slug: "pool-sand-filter-600",
    name: "Pool Sand Filter Ø600 mm",
    category: "pool", brand: "AstralPool", sku: "SF-PSF-600",
    price: 1890, inStock: true, images: [],
    summary: "Side-mount sand filter with six-way multiport valve for residential and hotel pools.",
    specs: [
      ["Diameter", "600 mm"],
      ["Filtration flow", "Up to 14 m³/h"],
      ["Valve", "Six-way multiport, side mount"],
      ["Media", "Silica sand or glass media"],
    ],
  },
  {
    slug: "pool-led-light",
    name: "Pool LED Light — RGB",
    category: "pool", brand: "AstralPool", sku: "SF-PLL-RGB",
    price: null, inStock: true, images: [],
    summary: "Colour-changing underwater LED light for new pools and retrofits.",
    specs: [
      ["Light", "RGB LED"],
      ["Supply", "12 VAC"],
      ["Rating", "IP68"],
      ["Installation", "Flush niche or surface mount"],
    ],
  },
];
