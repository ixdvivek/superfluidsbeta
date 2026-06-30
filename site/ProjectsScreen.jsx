// Superfluids website — Projects listing with working filters.
const DSpr = window.SuperfluidsDesignSystem_e3893d;

const ALL_PROJECTS = [
  { id: "marina-heights", name: "Marina Heights Tower", location: "Dubai Marina", emirate: "Dubai", industry: "Commercial", products: ["Booster Pumps", "GRP Tanks"], icon: "building-2", year: "2025" },
  { id: "al-noor-hospital", name: "Al Noor Hospital Expansion", location: "Abu Dhabi", emirate: "Abu Dhabi", industry: "Healthcare", products: ["Hot Water Systems", "Water Treatment"], icon: "heart-pulse", year: "2025" },
  { id: "logistics-park", name: "Logistics Park Phase II", location: "Jebel Ali", emirate: "Dubai", industry: "Industrial", products: ["VFD Systems", "Industrial Valves"], icon: "factory", year: "2024" },
  { id: "palm-resort", name: "Palm Beach Resort & Spa", location: "Palm Jumeirah", emirate: "Dubai", industry: "Hospitality", products: ["Hot Water Systems", "Booster Pumps"], icon: "concierge-bell", year: "2024" },
  { id: "district-cooling-plant", name: "Downtown District Cooling Plant", location: "Business Bay", emirate: "Dubai", industry: "District Cooling", products: ["Chilled Water Pumps", "VFD Systems"], icon: "snowflake", year: "2025" },
  { id: "govt-complex", name: "Federal Government Complex", location: "Abu Dhabi", emirate: "Abu Dhabi", industry: "Government", products: ["GRP Tanks", "Booster Pumps"], icon: "landmark", year: "2023" },
  { id: "green-community", name: "Green Community Residences", location: "Dubai Investment Park", emirate: "Dubai", industry: "Residential", products: ["Booster Pumps", "GRP Tanks"], icon: "building-2", year: "2024" },
  { id: "sharjah-utility", name: "Sharjah Utility Pump Station", location: "Sharjah", emirate: "Sharjah", industry: "Infrastructure", products: ["Pump Stations", "Industrial Valves"], icon: "construction", year: "2023" },
  { id: "energy-terminal", name: "Coastal Energy Terminal", location: "Fujairah", emirate: "Fujairah", industry: "Oil & Gas", products: ["Industrial Valves", "Transfer Pumps"], icon: "fuel", year: "2024" },
];

const PROJ_INDUSTRIES = ["All", "Commercial", "Healthcare", "Industrial", "Hospitality", "District Cooling", "Government", "Residential", "Infrastructure", "Oil & Gas"];
const PROJ_PRODUCT_FILTERS = ["All", "Booster Pumps", "GRP Tanks", "VFD Systems", "Hot Water Systems", "Water Treatment", "Industrial Valves", "Chilled Water Pumps"];
const PROJ_LOCATIONS = ["All", "Dubai", "Abu Dhabi", "Sharjah", "Fujairah"];

function ProjectsScreen({ onNavigate }) {
  const { Eyebrow, SectionHeader, ProjectCard, Icon } = DSpr;
  const Section = window.SF_Section, Hero = window.SF_PageHero;
  const [ind, setInd] = React.useState("All");
  const [prod, setProd] = React.useState("All");
  const [loc, setLoc] = React.useState("All");
  const isMobile = window.SF_useMedia('(max-width: 768px)');

  const filtered = ALL_PROJECTS.filter((p) =>
    (ind === "All" || p.industry === ind) &&
    (prod === "All" || p.products.includes(prod)) &&
    (loc === "All" || p.emirate === loc)
  );

  const FilterRow = ({ label, options, value, set }) => (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? 8 : 12 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", width: isMobile ? "auto" : 76, flexShrink: 0 }}>{label}</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {options.map((o) => {
          const on = o === value;
          return (
            <button key={o} onClick={() => set(o)} style={{
              padding: isMobile ? "6px 12px" : "7px 14px", borderRadius: "var(--radius-pill)", cursor: "pointer",
              border: "1px solid " + (on ? "transparent" : "var(--border-default)"),
              background: on ? "var(--navy-800)" : "var(--surface)",
              color: on ? "var(--white)" : "var(--text-secondary)",
              fontFamily: "var(--font-body)", fontSize: isMobile ? 12.5 : 13.5, fontWeight: on ? 600 : 500,
              transition: "var(--transition-base)",
            }}>{o}</button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <Hero eyebrow="Featured Projects" title="Delivered across the Emirates"
        description="A snapshot of engineering projects commissioned by Superfluids — filter by industry, product or location."
        crumb="Projects" onNavigate={onNavigate} />

      {/* FILTERS */}
      <Section py={isMobile ? 40 : 56}>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 18 : 16, padding: isMobile ? "20px" : "26px 28px", background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)" }}>
          <FilterRow label="Industry" options={PROJ_INDUSTRIES} value={ind} set={setInd} />
          <FilterRow label="Product" options={PROJ_PRODUCT_FILTERS} value={prod} set={setProd} />
          <FilterRow label="Location" options={PROJ_LOCATIONS} value={loc} set={setLoc} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "28px 0 20px" }}>
          <span style={{ fontSize: 15, color: "var(--text-secondary)" }}>Showing <strong style={{ color: "var(--text-primary)" }}>{filtered.length}</strong> {filtered.length === 1 ? "project" : "projects"}</span>
          {(ind !== "All" || prod !== "All" || loc !== "All") && (
            <button onClick={() => { setInd("All"); setProd("All"); setLoc("All"); }} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "var(--color-secondary)", fontSize: 14, fontWeight: 500 }}>
              <Icon name="x" size={15} /> Clear filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 24 }}>
            {filtered.map((p) => (
              <ProjectCard key={p.id} name={p.name} location={p.location} industry={p.industry} products={p.products}
                href="#" onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProjectDetail", param: p.id }); }} />
            ))}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "64px 0", textAlign: "center" }}>
            <Icon name="search-x" size={36} color="var(--text-muted)" />
            <p style={{ margin: 0, fontSize: 16, color: "var(--text-secondary)" }}>No projects match these filters. Try clearing one.</p>
          </div>
        )}
      </Section>

      {window.SF_FinalCTA({ onNavigate, title: "Have a project in mind?", body: "From a single pump room to a full MEP scope, our team delivers. Let's discuss your requirements.", cta: "Request Consultation" })}
    </div>
  );
}

window.SF_ProjectsScreen = ProjectsScreen;
window.SF_ALL_PROJECTS = ALL_PROJECTS;
