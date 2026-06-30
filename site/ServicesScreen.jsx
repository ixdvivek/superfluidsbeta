// Superfluids website — Services screen.
const DSs = window.SuperfluidsDesignSystem_e3893d;

const SERVICES = [
  {
    icon: "ruler", eyebrow: "01 · Design & Engineering", title: "Design & engineering",
    photo: "pencil-ruler",
    body: "We translate requirements into engineered systems — sizing pumps, tanks and controls to real hydraulic demand and verifying every drawing before a single component is ordered.",
    points: ["Hydraulic calculations & flow analysis", "System design & equipment selection", "Drawing & specification alignment", "Energy-efficiency modelling"],
  },
  {
    icon: "package", eyebrow: "02 · Equipment Supply", title: "Equipment supply",
    photo: "package",
    body: "As authorised distributor for the industry's most trusted manufacturers, we procure premium pumps, tanks, valves and automation — managed end to end with full quality assurance.",
    points: ["Procurement & manufacturer partnerships", "Vendor management & lead-time control", "Quality assurance & inspection", "System packaging & integration"],
  },
  {
    icon: "wrench", eyebrow: "03 · Installation", title: "Installation",
    photo: "wrench",
    body: "Our teams deliver mechanical and electrical installation as a single coordinated scope — Total MEP integration so the facility operates as one efficient ecosystem.",
    points: ["Mechanical installation", "Electrical installation & panels", "MEP integration", "Site supervision & H&S compliance"],
  },
  {
    icon: "activity", eyebrow: "04 · Testing & Commissioning", title: "Testing & commissioning",
    photo: "activity",
    body: "Rigorous alignment, balancing and performance testing confirm every system meets its design intent before handover — with documented results you can rely on.",
    points: ["Performance & pressure testing", "Alignment & balancing", "Site commissioning", "Handover documentation"],
  },
  {
    icon: "shield-check", eyebrow: "05 · AMC & Maintenance", title: "AMC & maintenance",
    photo: "shield-check",
    body: "We protect your investment for the long term — preventive Annual Maintenance Contracts, 24/7 emergency support and retrofitting that upgrades obsolete installations.",
    points: ["Preventive Annual Maintenance Contracts", "24/7 emergency support", "Retrofit & upgrade solutions", "Energy audits"],
  },
];

function ServicesScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, ProcessTimeline, Icon } = DSs;
  const Photo = window.SF_Photo, Section = window.SF_Section, Hero = window.SF_PageHero;
  const isMobile = window.SF_useMedia('(max-width: 768px)');

  return (
    <div>
      <Hero eyebrow="Engineering Services" title="Engineered fluid systems, end to end"
        description="From hydraulic calculation to commissioning and the years of maintenance that follow — one accountable engineering partner for the whole system."
        crumb="Services" onNavigate={onNavigate} maskAt="30% 0%" />

      {/* SERVICE ROWS */}
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 52 : 88 }}>
          {SERVICES.map((s, i) => {
            const flip = !isMobile && i % 2 === 1;
            return (
              <div key={s.title} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 64, alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 18, order: flip ? 2 : 1 }}>
                  <span style={{ display: "inline-flex", width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", color: "var(--aqua-600)", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={s.icon} size={28} strokeWidth={1.75} />
                  </span>
                  <Eyebrow>{s.eyebrow}</Eyebrow>
                  <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 26 : 34, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>{s.title}</h2>
                  <p style={{ margin: 0, fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: "var(--text-secondary)" }}>{s.body}</p>
                  <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "10px 0" : "12px 20px" }}>
                    {s.points.map((p) => (
                      <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "var(--text-primary)" }}>
                        <Icon name="check" size={16} color="var(--aqua-600)" style={{ marginTop: 2, flexShrink: 0 }} /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ order: flip ? 1 : 2 }}>
                  <Photo icon={s.photo} label={s.title.toUpperCase()} height={isMobile ? 220 : 340} />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SERVICE PROCESS TIMELINE */}
      <Section bg="var(--surface)">
        <SectionHeader align="center" eyebrow="Service Process" title="A disciplined engineering workflow"
          description="Seven stages, one accountable team — from first consultation to ongoing maintenance." style={{ marginBottom: isMobile ? 36 : 56 }} />
        <ProcessTimeline steps={[
          { label: "Consultation", description: "Understand site & requirements." },
          { label: "Engineering Review", description: "Hydraulic calculations & design." },
          { label: "Equipment Selection", description: "Right-sized, efficient kit." },
          { label: "Supply", description: "Procurement & QA." },
          { label: "Installation", description: "Mechanical & electrical." },
          { label: "Commissioning", description: "Performance testing." },
          { label: "Maintenance", description: "Preventive AMC & support." },
        ]} />
      </Section>

      {window.SF_FinalCTA({ onNavigate, title: "Have a system that needs engineering?", body: "Tell us about your project and our team will scope the right solution — design, supply, install and maintain.", cta: "Request a Technical Consultation" })}
    </div>
  );
}

window.SF_ServicesScreen = ServicesScreen;
