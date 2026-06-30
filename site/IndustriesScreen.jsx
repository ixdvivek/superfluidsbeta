// Superfluids website — Industries screen (interactive sector selector).
const DSi = window.SuperfluidsDesignSystem_e3893d;

const SECTORS = [
  {
    icon: "building", name: "Commercial Buildings",
    overview: "Offices, retail and mixed-use towers demand reliable water distribution and energy-efficient plant rooms that perform under variable occupancy.",
    challenges: ["Fluctuating demand across floors", "Pressure stability in high-rise risers", "Energy cost of continuous pumping"],
    solutions: ["Variable-speed booster sets", "Smart VFD pressure control", "Right-sized GRP storage"],
    products: ["Booster Pumps", "VFD Systems", "GRP Tanks"], projects: 120,
  },
  {
    icon: "concierge-bell", name: "Hospitality",
    overview: "Hotels and resorts need uninterrupted hot and cold water, silent operation and guaranteed comfort for guests around the clock.",
    challenges: ["Peak demand at unpredictable hours", "Centralised hot-water reliability", "Acoustic and vibration control"],
    solutions: ["Centralised hot-water systems", "Duty-standby booster sets", "Low-noise pump packaging"],
    products: ["Hot Water Systems", "Booster Pumps", "Water Treatment"], projects: 65,
  },
  {
    icon: "heart-pulse", name: "Healthcare",
    overview: "Hospitals and clinics require hygienically certified water, redundancy and strict compliance — failure is not an option.",
    challenges: ["Hygiene & water quality compliance", "Zero-downtime redundancy", "Legionella risk management"],
    solutions: ["Treated & disinfected water loops", "N+1 redundant pumping", "Certified GRP storage"],
    products: ["Water Treatment", "GRP Tanks", "Booster Pumps"], projects: 48,
  },
  {
    icon: "factory", name: "Industrial",
    overview: "Manufacturing and process facilities depend on robust process water, transfer and cooling systems built for continuous duty.",
    challenges: ["Continuous heavy-duty operation", "Aggressive fluids & solids handling", "Process pressure precision"],
    solutions: ["Heavy-duty transfer pumps", "Custom control panels", "Industrial valve packages"],
    products: ["Transfer Pumps", "Industrial Valves", "VFD Systems"], projects: 90,
  },
  {
    icon: "landmark", name: "Government",
    overview: "Public infrastructure and government facilities require compliant, documented and durable fluid systems that stand the test of time.",
    challenges: ["Strict procurement standards", "Long-term durability", "Full documentation & traceability"],
    solutions: ["Approved-vendor supply", "Documented commissioning", "Long-term AMC"],
    products: ["GRP Tanks", "Booster Pumps", "Valves"], projects: 40,
  },
  {
    icon: "construction", name: "Infrastructure",
    overview: "Utilities, district networks and large-scale developments rely on engineered pumping and storage across extended sites.",
    challenges: ["Large flow & head requirements", "Distributed site coordination", "Network pressure management"],
    solutions: ["High-capacity pump stations", "Network booster systems", "Bulk GRP storage"],
    products: ["Pump Stations", "GRP Tanks", "VFD Systems"], projects: 35,
  },
  {
    icon: "fuel", name: "Oil & Gas",
    overview: "Energy-sector sites demand certified, safety-rated equipment engineered for demanding fluids and environments.",
    challenges: ["Hazardous-area compliance", "Demanding fluid characteristics", "Stringent safety standards"],
    solutions: ["Safety-rated pump packages", "Specialist valve selection", "Robust control & monitoring"],
    products: ["Industrial Valves", "Transfer Pumps", "Control Panels"], projects: 22,
  },
  {
    icon: "snowflake", name: "District Cooling",
    overview: "District cooling plants need precise chilled-water circulation and energy optimisation at scale to keep cities comfortable.",
    challenges: ["Massive chilled-water flows", "Energy optimisation at scale", "Pressure & temperature control"],
    solutions: ["Chilled-water pump sets", "VFD energy optimisation", "Air separation & deaeration"],
    products: ["Chilled Water Pumps", "VFD Systems", "Air Separators"], projects: 28,
  },
  {
    icon: "building-2", name: "Residential",
    overview: "Residential towers and communities need quiet, dependable water supply and efficient plant that keeps running costs low.",
    challenges: ["Consistent supply to every unit", "Quiet, low-vibration operation", "Lifetime running cost"],
    solutions: ["Variable-speed booster sets", "Compact GRP storage", "Solar & electric hot water"],
    products: ["Booster Pumps", "GRP Tanks", "Hot Water Systems"], projects: 140,
  },
];

function IndustriesScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, Badge, Icon } = DSi;
  const Photo = window.SF_Photo, Section = window.SF_Section, Hero = window.SF_PageHero;
  const [active, setActive] = React.useState(0);
  const isMobile = window.SF_useMedia('(max-width: 768px)');
  const s = SECTORS[active];

  return (
    <div>
      <Hero eyebrow="Industries We Serve" title="Trusted across every sector"
        description="From residential towers to oil & gas and district cooling, our systems perform where reliability is non-negotiable."
        crumb="Industries" onNavigate={onNavigate} />

      {/* MOBILE: dropdown selector */}
      {isMobile && (
        <Section py={32}>
          <select
            value={active}
            onChange={(e) => setActive(Number(e.target.value))}
            style={{ width: "100%", padding: "14px 16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-default)", background: "var(--surface)", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-primary)", appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
          >
            {SECTORS.map((sec, i) => <option key={sec.name} value={i}>{sec.name}</option>)}
          </select>
        </Section>
      )}

      {/* SELECTOR + DETAIL */}
      <Section py={isMobile ? 0 : 96}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.8fr 1.2fr", gap: isMobile ? 24 : 48, alignItems: "start" }}>
          {/* Desktop sidebar list */}
          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 96 }}>
              {SECTORS.map((sec, i) => {
                const on = i === active;
                return (
                  <button key={sec.name} onClick={() => setActive(i)} style={{
                    display: "flex", alignItems: "center", gap: 14, width: "100%", textAlign: "left", cursor: "pointer",
                    padding: "16px 18px", borderRadius: "var(--radius-md)", border: "1px solid " + (on ? "var(--aqua-400)" : "var(--border-subtle)"),
                    background: on ? "var(--aqua-50)" : "var(--surface)", transition: "var(--transition-base)",
                    boxShadow: on ? "var(--shadow-sm)" : "none",
                  }}>
                    <span style={{ display: "inline-flex", width: 42, height: 42, flexShrink: 0, borderRadius: "var(--radius-sm)", background: on ? "var(--surface)" : "var(--gray-50)", color: on ? "var(--aqua-600)" : "var(--text-secondary)", alignItems: "center", justifyContent: "center" }}>
                      <Icon name={sec.icon} size={21} strokeWidth={1.75} />
                    </span>
                    <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: on ? 600 : 500, color: on ? "var(--navy-800)" : "var(--text-primary)" }}>{sec.name}</span>
                    <Icon name="chevron-right" size={18} color={on ? "var(--aqua-600)" : "var(--text-muted)"} style={{ marginLeft: "auto" }} />
                  </button>
                );
              })}
            </div>
          )}

          {/* Detail panel */}
          <div key={active} style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: isMobile ? 24 : 0 }}>
            <Photo icon={s.icon} label={s.name.toUpperCase()} height={isMobile ? 200 : 240} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Eyebrow>{s.name}</Eyebrow>
              <p style={{ margin: 0, fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: "var(--text-secondary)" }}>{s.overview}</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 12 : 20 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: isMobile ? 16 : 24, background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-heading)", fontSize: isMobile ? 13 : 15, fontWeight: 600, color: "var(--text-primary)" }}><Icon name="alert-triangle" size={17} color="var(--color-warning, #C77700)" /> Challenges</span>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.challenges.map((c) => <li key={c} style={{ fontSize: isMobile ? 13 : 14.5, lineHeight: 1.5, color: "var(--text-secondary)", paddingLeft: 14, position: "relative" }}><span style={{ position: "absolute", left: 0, top: 8, width: 5, height: 5, borderRadius: "50%", background: "var(--text-muted)" }} />{c}</li>)}
                </ul>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: isMobile ? 16 : 24, background: "var(--aqua-50)", border: "1px solid var(--aqua-200, rgba(0,183,199,0.3))", borderRadius: "var(--radius-lg)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-heading)", fontSize: isMobile ? 13 : 15, fontWeight: 600, color: "var(--navy-800)" }}><Icon name="check-circle" size={17} color="var(--aqua-600)" /> Our Solutions</span>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.solutions.map((c) => <li key={c} style={{ display: "flex", gap: 8, fontSize: isMobile ? 13 : 14.5, lineHeight: 1.5, color: "var(--navy-800)" }}><Icon name="check" size={15} color="var(--aqua-600)" style={{ marginTop: 2, flexShrink: 0 }} />{c}</li>)}
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16, padding: isMobile ? "18px 20px" : "20px 24px", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--text-muted)", textTransform: "uppercase" }}>Recommended Products</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{s.products.map((p) => <Badge key={p} tone="aqua" variant="soft">{p}</Badge>)}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "flex-start" : "flex-end" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 800, color: "var(--color-primary)", lineHeight: 1 }}>{s.projects}<span style={{ color: "var(--color-accent)" }}>+</span></span>
                  <span style={{ fontSize: 12.5, color: "var(--text-secondary)" }}>projects delivered</span>
                </div>
                <Button variant="outline" size="sm" iconRight="arrow-right" onClick={() => onNavigate("Projects")}>View Projects</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {window.SF_FinalCTA({ onNavigate, title: "Building in this sector?", body: "Our engineers understand the demands of your industry. Let's scope the right fluid system for your project.", cta: "Request Consultation" })}
    </div>
  );
}

window.SF_IndustriesScreen = IndustriesScreen;
