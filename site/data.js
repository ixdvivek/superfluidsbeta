// ============================================================
// Superfluids — site content.
// Structure and copy follow the approved wireframe.
// ============================================================

window.SFData = window.SFData || {};

Object.assign(window.SFData, {

  nav: ["Home", "About", "Products & Services", "Services", "Industries", "Projects", "Contact"],

  // Overlay menu hierarchy: primary items get the large vertical list,
  // secondary sit in a compact horizontal row beneath.
  navPrimary: ["Home", "Products & Services", "Services", "Projects"],
  navSecondary: ["About", "Industries", "Contact"],

  company: {
    address: "216 Arjumand Building, 3rd Floor, Dubai Investment Park First, Green Community Village, Dubai, UAE",
    addressShort: "DIP, Dubai Investment Park, Dubai, UAE",
    phone: "+971 55 924 3822",
    email: "Sales@superfluidsme.com",
    servicesLine: "Equipment Supply · Design & Engineering · Installation · Energy Audits · AMC",
  },

  // Headline figures — per the wireframe.
  stats: [
    { value: "20", suffix: "+", label: "Years in the industry" },
    { value: "2,500", suffix: "+", label: "Projects delivered" },
    { value: "6,500", suffix: "+", label: "Premium products" },
    { value: "6", suffix: "", label: "GCC markets served" },
  ],

  markets: ["UAE", "Oman", "Saudi Arabia", "Qatar", "Bahrain", "Kuwait"],

  // Home — Core Product Portfolio
  portfolio: [
    { icon: "gauge", title: "Pumping Systems", description: "Transfer, booster, chilled water and irrigation pump sets." },
    { icon: "container", title: "Water & Heat Management", description: "Storage tanks, electrical and solar water heaters." },
    { icon: "filter", title: "Fluid Conditioning", description: "Treatment, air separators and pressure vessels." },
    { icon: "cpu", title: "Control & Automation", description: "Custom control panels and VFD systems." },
    { icon: "wind", title: "HVAC & Plumbing Support", description: "Pressurisation units and MEP integration." },
    { icon: "layers", title: "Total MEP Contracting", description: "End-to-end mechanical, electrical and plumbing delivery." },
  ],

  whyPartner: [
    { icon: "award", title: "Market-Leading Brands", description: "Authorised partnerships with the manufacturers specifiers already trust." },
    { icon: "graduation-cap", title: "Technical Proficiency", description: "Factory-trained specialists sizing every system to real hydraulic demand." },
    { icon: "life-buoy", title: "End-to-End Support", description: "One accountable partner from selection through long-term maintenance." },
  ],

  sectors: [
    { name: "Residential", project: "Green Community Residences, Dubai", icon: "building-2" },
    { name: "Commercial", project: "Marina Heights Tower, Dubai", icon: "building" },
    { name: "Hospitality", project: "Palm Beach Resort & Spa", icon: "concierge-bell" },
    { name: "Healthcare", project: "Hamad Medical City, Doha", icon: "heart-pulse" },
    { name: "Industrial", project: "Jubail Petrochemical Utilities", icon: "factory" },
    { name: "Infrastructure", project: "Muscat Water Distribution Upgrade", icon: "construction" },
    { name: "Government", project: "Ministry of Municipal Affairs", icon: "landmark" },
    { name: "District Cooling", project: "Downtown District Cooling Plant", icon: "snowflake" },
    { name: "Oil & Gas", project: "Coastal Energy Terminal, Fujairah", icon: "fuel" },
  ],

  capabilities: ["Equipment Supply", "Design Verification", "Testing & Commissioning", "Retrofitting Solutions"],

  outcomes: ["Client Insights", "Increased Efficiency", "Automation", "Innovation", "Fast Delivery", "Reduced Costs"],

  // Products hub grouping
  productGroups: [
    { title: "Pumping Systems", slugs: ["transfer-pumps", "booster-pumps", "agriculture-irrigation-pumps", "circulation-chilled-water-pumps", "submersible-pumps"] },
    { title: "Water Storage & Heat Management", slugs: ["grp-panel-tanks", "pressure-tanks", "solar-water-heaters", "water-chillers"] },
    { title: "Control & Automation", slugs: ["control-panels", "pressure-kits", "manifolds"] },
    { title: "Specialty Systems", slugs: ["irrigation-products", "swimming-pool-products"] },
  ],

  services: [
    { slug: "equipment-supply", name: "Equipment Supply", icon: "package", tagline: "6,500+ products, 30+ brands",
      overview: "Authorised supply across pumps, tanks, valves, controls and piping — procured, inspected and packaged as a tested system rather than a parts list.",
      included: ["Procurement across 30+ manufacturer partnerships", "Lead-time management and vendor coordination", "Inspection and quality assurance on receipt", "System packaging, skid assembly and manifold fabrication"],
      benefits: ["Single accountable supplier", "Genuine parts with manufacturer warranty", "Predictable lead times", "Right-sized selection, not over-specification"] },
    { slug: "design-engineering", name: "Design & Engineering", icon: "ruler", tagline: "Hydraulic calculation review",
      overview: "We verify the design intent before anything is ordered — hydraulic calculations, duty points, pipe sizing and control philosophy checked against real site conditions.",
      included: ["Hydraulic calculation and flow analysis", "Duty point selection and pump curve matching", "Control philosophy and panel specification", "Drawing review and technical submittals"],
      benefits: ["Errors caught on paper, not on site", "Energy modelled before purchase", "Submittals consultants approve first time", "Documented basis of design"] },
    { slug: "installation-commissioning", name: "Installation & Commissioning", icon: "wrench", tagline: "Turnkey, factory-trained",
      overview: "Mechanical and electrical installation delivered as one coordinated scope, then tested, balanced and commissioned to the documented design intent.",
      included: ["Mechanical installation and alignment", "Electrical termination and panel commissioning", "Pressure testing, flushing and balancing", "Performance verification and handover documentation"],
      benefits: ["One team, no interface gaps", "Factory-trained engineers on site", "Documented commissioning results", "Clean handover to facilities teams"] },
    { slug: "energy-audits", name: "Energy Audits", icon: "activity", tagline: "VFD retrofits, savings analysis",
      overview: "Pump rooms are among the largest controllable energy loads in a building. We measure actual consumption, model the savings, and retrofit where the payback justifies it.",
      included: ["Site energy measurement and load profiling", "Pump efficiency and duty-point analysis", "VFD retrofit modelling with payback period", "Post-retrofit verification"],
      benefits: ["Quantified savings before you commit", "Lower lifetime running cost", "Reduced mechanical wear", "Evidence for sustainability reporting"] },
    { slug: "annual-maintenance-contracts", name: "Annual Maintenance Contracts", icon: "shield-check", tagline: "Scheduled proactive maintenance",
      overview: "Planned preventive maintenance that keeps systems at design performance, with emergency response when something does go wrong.",
      included: ["Scheduled preventive maintenance visits", "Condition monitoring and performance logging", "Priority emergency call-out", "Genuine spare parts and consumables"],
      benefits: ["Fewer unplanned failures", "Extended equipment life", "Predictable maintenance budget", "Compliance records maintained"] },
    { slug: "total-mep-contracting", name: "Total MEP Contracting", icon: "layers", tagline: "Single point of accountability",
      overview: "Full mechanical, electrical and plumbing scope under one contract — so integration between disciplines is our problem to solve, not yours to coordinate.",
      included: ["Mechanical, electrical and plumbing delivery", "Interface and services coordination", "Programme and subcontractor management", "Integrated testing and handover"],
      benefits: ["One contract, one accountable party", "No inter-trade disputes", "Coordinated programme", "Unified as-built documentation"] },
  ],

  serviceProcess: [
    { step: "Equipment Supply", detail: "Right-sized selection from authorised partners." },
    { step: "Design Verification", detail: "Hydraulic calculations checked against site conditions." },
    { step: "Testing & Commissioning", detail: "Performance proven and documented before handover." },
    { step: "Retrofitting Solutions", detail: "Upgrades that cut energy on existing installations." },
  ],

  brandGroups: [
    { title: "Pumps", brands: ["Grundfos", "Pedrollo", "Goulds", "Lowara", "Teral", "EDS Global", "DAB", "Davey", "Speroni", "Wilo", "CRI", "Espa", "Ebara", "Tsurumi", "Calpeda"] },
    { title: "Piping Systems", brands: ["Georg Fischer (+GF+)", "Hepworth", "Sekisui Eslon", "Cepex", "Peštan", "Comer", "MPI Atlas", "Rain Bird", "Pegler"] },
    { title: "Controls & Electrical", brands: ["Eaton", "ABB", "Schneider Electric", "Siemens", "EKF"] },
    { title: "Sanitaryware, Adhesives & Fittings", brands: ["RAK Ceramics", "Weber", "BASF", "GROHE", "Jaquar", "Crane", "Henry Pratt"] },
  ],

  // Real manufacturer marks, white-filled for the cyan hero band.
  partnerLogos: [
    { name: "Wilo", src: "assets/media/brands/wilo.svg", maxWidth: 74 },
    { name: "Grundfos", src: "assets/media/brands/grundfos.svg", maxWidth: 250 },
    { name: "Ebara", src: "assets/media/brands/ebara.svg", maxWidth: 110 },
  ],

  featuredBrands: ["Grundfos", "Wilo", "Ebara", "DAB", "Lowara", "ABB", "Schneider Electric", "Georg Fischer", "Pedrollo", "Tsurumi"],

  projects: [
    { slug: "neom-utility-pump-station", name: "NEOM Utility Pump Station", country: "Saudi Arabia", sector: "Infrastructure", icon: "construction",
      tagline: "Large-scale utility pump station infrastructure delivered for a giga-project development.", year: "202X", scope: "Supply · Install · Commission" },
    { slug: "yanbu-refinery-expansion", name: "Yanbu Refinery Expansion", country: "Saudi Arabia", sector: "Oil & Gas", icon: "fuel",
      tagline: "Process water and transfer systems for a major refinery expansion.", year: "202X", scope: "Supply · Install" },
    { slug: "jubail-petrochemical-utilities", name: "Jubail Petrochemical Utilities", country: "Saudi Arabia", sector: "Industrial", icon: "factory",
      tagline: "Utility pumping and cooling infrastructure for a petrochemical complex.", year: "202X", scope: "Supply · Install · Commission" },
    { slug: "riyadh-business-park", name: "Riyadh Business Park", country: "Saudi Arabia", sector: "Commercial", icon: "building",
      tagline: "Booster and chilled-water systems across a multi-tower business park.", year: "202X", scope: "Supply · Install" },
    { slug: "sohar-industrial-estate-utilities", name: "Sohar Industrial Estate Utilities", country: "Oman", sector: "Industrial", icon: "factory",
      tagline: "Shared utility pumping infrastructure for an industrial estate.", year: "202X", scope: "Supply · Commission" },
    { slug: "muscat-water-distribution-upgrade", name: "Muscat Water Distribution Upgrade", country: "Oman", sector: "Infrastructure", icon: "construction",
      tagline: "Network pressure management and pump station upgrade.", year: "202X", scope: "Design · Supply · Install" },
    { slug: "salalah-beach-resort", name: "Salalah Beach Resort", country: "Oman", sector: "Hospitality", icon: "concierge-bell",
      tagline: "Centralised hot water and booster systems for a coastal resort.", year: "202X", scope: "Supply · Install · Commission" },
    { slug: "kuwait-financial-centre-tower", name: "Kuwait Financial Centre Tower", country: "Kuwait", sector: "Commercial", icon: "building",
      tagline: "High-rise pressure zoning and booster sets for a financial district tower.", year: "202X", scope: "Supply · Install" },
    { slug: "al-adan-hospital-extension", name: "Al Adan Hospital Extension", country: "Kuwait", sector: "Healthcare", icon: "heart-pulse",
      tagline: "Redundant pumping and treated water loops for a hospital extension.", year: "202X", scope: "Design · Supply · Commission" },
    { slug: "hamad-medical-city-expansion", name: "Hamad Medical City Expansion, Doha", country: "Qatar", sector: "Healthcare", icon: "heart-pulse",
      tagline: "Hygienic water storage and distribution for a major medical campus.", year: "202X", scope: "Supply · Install · Commission" },
    { slug: "hidd-sewage-pumping-station", name: "Hidd Sewage Pumping Station", country: "Bahrain", sector: "Infrastructure", icon: "construction",
      tagline: "Submersible pumping and control systems for a municipal station.", year: "202X", scope: "Supply · Install" },
    { slug: "marina-heights-tower", name: "Marina Heights Tower, Dubai", country: "UAE", sector: "Commercial", icon: "building",
      tagline: "Multi-zone variable-speed booster sets and sectional GRP storage for a 48-storey tower.", year: "202X", scope: "Design · Supply · Install · Commission" },
    { slug: "green-community-residences", name: "Green Community Residences, Dubai", country: "UAE", sector: "Residential", icon: "building-2",
      tagline: "Quiet, efficient booster and storage systems across a residential community.", year: "202X", scope: "Supply · Install" },
  ],

  // About page — figures differ from the home band, per the wireframe.
  aboutStats: [
    { value: "117", suffix: "+", label: "Projects delivered" },
    { value: "9", suffix: "", label: "Key industries" },
    { value: "20", suffix: "+", label: "Years expertise" },
    { value: "4", suffix: "", label: "Capability areas" },
  ],

  excellence: [
    { icon: "ruler", title: "Precision Design", description: "Custom-engineered solutions sized to the duty in front of us, not a catalogue default." },
    { icon: "shield-check", title: "Reliable Infrastructure", description: "Premium components from authorised partners, backed by long-term maintenance." },
    { icon: "leaf", title: "Energy Optimization", description: "Smart automation and VFD systems that cut lifetime running cost." },
  ],

  teamPoints: [
    "Certified engineers and technicians",
    "World-leading manufacturer partnerships",
    "Comprehensive after-sales support",
  ],

  contactSubjects: [
    "Pumping Systems", "Water Storage & Tanks", "Hot Water & Heating",
    "Cooling & Chillers", "Control & Automation", "Irrigation",
    "Swimming Pool Systems", "Design & Engineering", "Installation & Commissioning",
    "Energy Audit", "Annual Maintenance Contract", "Total MEP Contracting", "Other",
  ],

  projectProcess: [
    "Design verification & hydraulic calculation review",
    "Equipment supply & manifold fabrication",
    "Site installation & alignment",
    "Testing, balancing & commissioning",
    "Handover & documentation",
  ],
});
