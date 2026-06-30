// Superfluids website — Product detail page template.
const DSpdt = window.SuperfluidsDesignSystem_e3893d;

const PRODUCT_DATA = {
  "booster-pumps": {
    name: "Booster Pump Sets", category: "Pumping Systems", icon: "gauge", brands: "Grundfos · Ebara · CRI",
    tagline: "Packaged variable-speed booster sets that maintain constant pressure in high-rise water distribution.",
    overview: "Packaged multi-pump booster sets maintain constant pressure across tall buildings and distribution networks. Variable-speed control matches output precisely to demand, reducing energy use and water-hammer while extending equipment life. Each set is configured, packaged and commissioned by our factory-trained engineers.",
    applications: ["Residential & commercial towers", "Hotels and hospitals", "District water networks", "Industrial process supply", "Irrigation systems"],
    benefits: [
      { icon: "leaf", title: "Energy efficient", text: "VFD control cuts running cost vs. fixed-speed pumping." },
      { icon: "gauge", title: "Constant pressure", text: "Stable pressure across every floor and demand condition." },
      { icon: "shield-check", title: "Reliable redundancy", text: "Duty-standby configurations keep water flowing." },
      { icon: "volume-x", title: "Quiet operation", text: "Low-noise packaging suitable for occupied buildings." },
    ],
    specs: [["Flow Rate", "5 – 120 m³/h"], ["Max Head", "95 m"], ["Power", "0.75 – 22 kW"], ["Inlet / Outlet", "DN50 – DN150"], ["Control", "VFD, constant pressure"], ["Configuration", "Duty / duty-standby / multi-pump"], ["Material", "Stainless steel AISI 304"], ["Approvals", "CE, WRAS components"]],
  },
  "grp-tanks": {
    name: "GRP Sectional Tanks", category: "Water Storage", icon: "cylinder", brands: "Technodyne · EKF",
    tagline: "Hot-pressed sectional GRP water storage tanks in any capacity, hygienically certified.",
    overview: "Hot-pressed sectional GRP (glass-reinforced plastic) panel tanks provide hygienic, durable water storage in virtually any capacity and footprint. Modular panels allow installation in tight plant rooms and on rooftops, with insulated options for temperature control.",
    applications: ["Potable & domestic water storage", "Fire-fighting reserves", "Irrigation storage", "Rooftop & basement plant rooms", "District developments"],
    benefits: [
      { icon: "shield-check", title: "Hygienic", text: "Food-grade GRP, certified for potable water." },
      { icon: "ruler", title: "Any capacity", text: "Modular panels build to the exact volume required." },
      { icon: "package", title: "Easy to install", text: "Sectional panels fit through standard openings." },
      { icon: "thermometer", title: "Insulated options", text: "Thermal insulation to control water temperature." },
    ],
    specs: [["Capacity", "1 – 1000+ m³"], ["Panel Sizes", "1m × 1m, 1m × 0.5m"], ["Material", "Hot-pressed SMC GRP"], ["Max Height", "4 m (externally flanged)"], ["Insulation", "Optional 50mm"], ["Certification", "Potable-water approved"], ["Connections", "Inlet, outlet, overflow, drain"], ["Warranty", "10 years"]],
  },
  "vfd-systems": {
    name: "VFD Systems", category: "Control & Automation", icon: "settings-2", brands: "Grundfos · Custom panels",
    tagline: "Variable frequency drives for energy-efficient control of pumps, fans and process equipment.",
    overview: "Variable Frequency Drives precisely control motor speed to match real demand — the single biggest lever for energy efficiency in pumping and HVAC. We supply standalone drives and complete custom control panels, engineered and integrated for the application.",
    applications: ["Booster & circulation pumps", "Chilled-water systems", "Cooling-tower & AHU fans", "Process equipment", "Pressurisation units"],
    benefits: [
      { icon: "leaf", title: "Major energy savings", text: "Speed control dramatically reduces energy on variable loads." },
      { icon: "activity", title: "Soft start", text: "Eliminates inrush current and mechanical stress." },
      { icon: "sliders-horizontal", title: "Precise control", text: "Constant pressure, flow or temperature setpoints." },
      { icon: "shield-check", title: "Longer life", text: "Smoother operation extends equipment lifespan." },
    ],
    specs: [["Power Range", "0.75 – 315 kW"], ["Supply", "380 – 415 V, 3-phase"], ["Control Modes", "Pressure / flow / temperature"], ["Protection", "IP21 – IP54"], ["Communication", "Modbus, BACnet, BMS"], ["Enclosure", "Custom control panel options"], ["Standards", "IEC, CE"], ["Integration", "Full BMS interface"]],
  },
  "industrial-valves": {
    name: "Industrial Valves", category: "Pumping Systems", icon: "git-commit-horizontal", brands: "Crane · Pegler · Pratt · Sizif",
    tagline: "Gate, butterfly, check and control valves from trusted global manufacturers.",
    overview: "A complete range of isolation, control and check valves for water, HVAC and process applications. We select and supply the right valve for the duty — material, pressure rating and actuation — from the industry's most trusted manufacturers.",
    applications: ["Pump-room isolation", "HVAC & chilled-water lines", "Fire-fighting systems", "Process & industrial pipework", "District networks"],
    benefits: [
      { icon: "shield-check", title: "Trusted brands", text: "Crane, Pegler, Pratt and Sizif quality." },
      { icon: "layers", title: "Full range", text: "Gate, globe, check, butterfly and control valves." },
      { icon: "settings-2", title: "Actuation", text: "Manual, electric and pneumatic options." },
      { icon: "ruler", title: "All sizes", text: "DN15 to DN600 across pressure classes." },
    ],
    specs: [["Types", "Gate, butterfly, check, control"], ["Size Range", "DN15 – DN600"], ["Pressure", "PN10 – PN40"], ["Body Material", "Cast iron, ductile, bronze, SS"], ["Actuation", "Manual / electric / pneumatic"], ["End Connection", "Flanged, threaded, wafer"], ["Media", "Water, chilled water, process"], ["Standards", "BS, EN, API"]],
  },
  "hot-water-systems": {
    name: "Centralised Hot Water Systems", category: "Water & Heat", icon: "flame", brands: "Ariston · Climaveneta",
    tagline: "Calorifiers, heat pumps and central hot-water generation for commercial scale.",
    overview: "Centralised hot-water generation and storage for hotels, hospitals and large residential developments. We engineer complete systems — calorifiers, heat pumps, solar and electric heating — sized for peak demand with recovery and redundancy.",
    applications: ["Hotels & resorts", "Hospitals & healthcare", "Residential towers", "Labour accommodation", "Sports & leisure facilities"],
    benefits: [
      { icon: "flame", title: "Reliable hot water", text: "Sized for peak demand with fast recovery." },
      { icon: "leaf", title: "Efficient sources", text: "Heat-pump and solar options cut energy use." },
      { icon: "thermometer", title: "Temperature control", text: "Precise, safe delivery temperatures." },
      { icon: "shield-check", title: "Legionella safe", text: "Designed to control bacterial risk." },
    ],
    specs: [["Generation", "Calorifier, heat pump, solar, electric"], ["Storage", "Insulated cylinders & tanks"], ["Capacity", "Commercial scale"], ["Temperature", "Controlled & monitored"], ["Recovery", "High-recovery design"], ["Redundancy", "Duty-standby options"], ["Controls", "BMS integrated"], ["Standards", "Local & international codes"]],
  },
  "water-treatment": {
    name: "Water Treatment Systems", category: "Fluid Conditioning", icon: "filter", brands: "EKF · Specialist partners",
    tagline: "Filtration, softening and disinfection for clean, compliant water — plus air separation and deaeration.",
    overview: "Turnkey water-treatment packages that deliver clean, compliant water and protect downstream equipment. We supply filtration, softening, disinfection, air separators, deaeration systems and pressure vessels — engineered to the water quality and application.",
    applications: ["Potable water polishing", "HVAC & closed-loop protection", "Process water", "Cooling systems", "Pressurisation & expansion"],
    benefits: [
      { icon: "filter", title: "Clean water", text: "Filtration and softening to required quality." },
      { icon: "shield-check", title: "Compliant", text: "Disinfection for safe, certified water." },
      { icon: "wind", title: "Air separation", text: "Deaeration protects pumps and pipework." },
      { icon: "gauge", title: "System protection", text: "Pressure vessels stabilise the network." },
    ],
    specs: [["Filtration", "Sand, media, cartridge"], ["Softening", "Ion-exchange softeners"], ["Disinfection", "Chlorination, UV"], ["Air Control", "Separators & deaeration"], ["Vessels", "Pressure & expansion vessels"], ["Capacity", "Turnkey, application-sized"], ["Monitoring", "Quality instrumentation"], ["Service", "AMC & consumables"]],
  },
};

const PRODUCT_ORDER = ["booster-pumps", "grp-tanks", "vfd-systems", "industrial-valves", "hot-water-systems", "water-treatment"];

function ProductDetailScreen({ onNavigate, param }) {
  const { Button, Eyebrow, SectionHeader, Tabs, SpecTable, Badge, Card, Input, Icon, Breadcrumb } = DSpdt;
  const Photo = window.SF_Photo, Section = window.SF_Section;
  const id = PRODUCT_DATA[param] ? param : "booster-pumps";
  const p = PRODUCT_DATA[id];
  const related = PRODUCT_ORDER.filter((x) => x !== id).slice(0, 3);

  return (
    <div>
      {/* HERO / OVERVIEW */}
      <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at 70% 0%, #000, transparent 75%)" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "52px 32px 64px" }}>
          <Breadcrumb invert items={[{ label: "Home", href: "#" }, { label: "Products", href: "#" }, { label: p.name }]} />
          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Badge tone="aqua" variant="solid">{p.category}</Badge>
                <Badge tone="neutral" style={{ background: "rgba(255,255,255,0.1)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>{p.brands}</Badge>
              </div>
              <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 46, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>{p.name}</h1>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--text-on-dark-secondary)" }}>{p.tagline}</p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
                <Button variant="accent" size="lg" iconRight="arrow-right" onClick={() => onNavigate("Contact")}>Request a Quote</Button>
                <Button size="lg" variant="outline" iconLeft="download" style={{ background: "rgba(255,255,255,0.06)", color: "var(--white)", borderColor: "rgba(255,255,255,0.25)" }}>Datasheet</Button>
              </div>
            </div>
            <Photo icon={p.icon} label={p.name.toUpperCase()} height={300} />
          </div>
        </div>
      </section>

      {/* OVERVIEW + APPLICATIONS */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 56, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <SectionHeader eyebrow="Overview" title="About this system" />
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)" }}>{p.overview}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 28, background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>Applications</span>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {p.applications.map((a) => <li key={a} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, color: "var(--text-secondary)" }}><Icon name="check" size={16} color="var(--aqua-600)" style={{ marginTop: 2, flexShrink: 0 }} />{a}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section bg="var(--surface)">
        <SectionHeader align="center" eyebrow="Benefits" title="Why specify this system" style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {p.benefits.map((b) => (
            <div key={b.title} style={{ display: "flex", flexDirection: "column", gap: 12, padding: 26, background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", color: "var(--aqua-600)", alignItems: "center", justifyContent: "center" }}>
                <Icon name={b.icon} size={23} strokeWidth={1.75} />
              </span>
              <h4 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>{b.title}</h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)" }}>{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SPECS + DOWNLOADS + INQUIRY */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionHeader eyebrow="Technical Specifications" title="Specifications" />
            <SpecTable rows={p.specs} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>Downloads</span>
              {["Datasheet (PDF)", "Product Catalogue", "Installation Manual"].map((d) => (
                <a key={d} href="#" onClick={(e) => e.preventDefault()} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", textDecoration: "none", color: "var(--text-primary)", fontSize: 15, fontWeight: 500 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><Icon name="file-text" size={18} color="var(--color-secondary)" /> {d}</span>
                  <Icon name="download" size={18} color="var(--text-muted)" />
                </a>
              ))}
            </div>
          </div>
          <Card padding="xl" style={{ position: "sticky", top: 96 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 22, color: "var(--text-primary)" }}>Request information</h3>
                <p style={{ margin: 0, fontSize: 14, color: "var(--text-secondary)" }}>Tell us your requirements and our engineers will respond with a sized recommendation.</p>
              </div>
              <Input label="Full Name" placeholder="Jane Engineer" />
              <Input label="Email" type="email" iconLeft="mail" placeholder="you@company.com" />
              <Input label="Project Location" iconLeft="map-pin" placeholder="Dubai, UAE" />
              <Input label="Required duty" placeholder="e.g. 60 m³/h @ 70 m head" />
              <Button variant="accent" size="lg" fullWidth iconRight="arrow-right" onClick={() => onNavigate("Contact")}>Request a Quote</Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* RELATED */}
      <Section bg="var(--surface)">
        <SectionHeader eyebrow="Related Products" title="Explore the portfolio" style={{ marginBottom: 40 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {related.map((rid) => {
            const r = PRODUCT_DATA[rid];
            return (
              <a key={rid} href="#" onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProductDetail", param: rid }); }} style={{ display: "flex", flexDirection: "column", gap: 14, padding: 28, textDecoration: "none", background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)", transition: "var(--transition-base)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <span style={{ display: "inline-flex", width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", color: "var(--aqua-600)", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={r.icon} size={24} strokeWidth={1.75} />
                </span>
                <h4 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "var(--text-primary)" }}>{r.name}</h4>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--color-secondary)" }}>View product <Icon name="arrow-right" size={15} /></span>
              </a>
            );
          })}
        </div>
      </Section>

      {window.SF_FinalCTA({ onNavigate })}
    </div>
  );
}

window.SF_ProductDetailScreen = ProductDetailScreen;
window.SF_PRODUCT_DATA = PRODUCT_DATA;
