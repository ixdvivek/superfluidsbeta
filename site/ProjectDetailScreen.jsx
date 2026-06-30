// Superfluids website — Project detail page.
const DSpd = window.SuperfluidsDesignSystem_e3893d;

const PROJECT_DETAIL = {
  "marina-heights": {
    overview: "A 48-storey residential and retail tower in Dubai Marina required a complete water distribution and storage solution capable of maintaining constant pressure across every floor while minimising energy use.",
    scope: "Design, supply, installation and commissioning of variable-speed booster sets and sectional GRP storage, fully integrated with the building's BMS.",
    challenges: ["Maintaining stable pressure across 48 storeys and pressure zones", "Energy cost of continuous high-rise pumping", "Tight plant-room footprint at podium level"],
    solutions: ["Multi-zone variable-speed booster sets with constant-pressure VFD control", "Hot-pressed sectional GRP tanks sized to peak demand plus reserve", "BMS integration for remote monitoring and alarms"],
    outcomes: [["32%", "lower pump energy vs. fixed-speed"], ["0", "pressure complaints since handover"], ["48", "floors served reliably"]],
    feedback: { quote: "Superfluids delivered the entire booster system on schedule and commissioned it flawlessly. A genuine engineering partner.", author: "Eng. Rashid Hassan", role: "MEP Director, Gulf Contracting" },
  },
  default: {
    overview: "Superfluids delivered an engineered fluid system tailored to this facility's demand profile — from selection and packaging through installation and commissioning.",
    scope: "Design verification, equipment supply, installation and commissioning, backed by an ongoing maintenance contract.",
    challenges: ["Site-specific demand and pressure requirements", "Coordination with the wider MEP scope", "Long-term reliability and efficiency targets"],
    solutions: ["Right-sized, energy-efficient equipment from trusted manufacturers", "Coordinated mechanical and electrical installation", "Documented testing, commissioning and handover"],
    outcomes: [["100%", "design intent verified at commissioning"], ["24/7", "maintenance support in place"], ["On time", "delivered to programme"]],
    feedback: { quote: "Professional from survey to handover, with genuine technical depth. They understand UAE water systems inside out.", author: "Project Engineer", role: "Main Contractor" },
  },
};

function ProjectDetailScreen({ onNavigate, param }) {
  const { Button, Eyebrow, SectionHeader, Badge, Icon, Breadcrumb } = DSpd;
  const Photo = window.SF_Photo, Section = window.SF_Section;
  const projects = window.SF_ALL_PROJECTS || [];
  const p = projects.find((x) => x.id === param) || projects[0];
  const d = PROJECT_DETAIL[p.id] || PROJECT_DETAIL.default;

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at 70% 0%, #000, transparent 75%)" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "52px 32px 64px" }}>
          <Breadcrumb invert items={[{ label: "Home", href: "#" }, { label: "Projects", href: "#" }, { label: p.name }]} />
          <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 18, maxWidth: 760 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Badge tone="aqua" variant="solid">{p.industry}</Badge>
              <Badge tone="neutral" style={{ background: "rgba(255,255,255,0.1)", color: "var(--white)", borderColor: "rgba(255,255,255,0.2)" }}>{p.year}</Badge>
            </div>
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 48, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>{p.name}</h1>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, color: "var(--text-on-dark-secondary)" }}><Icon name="map-pin" size={17} color="var(--aqua-400)" /> {p.location}, {p.emirate}, UAE</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW + META */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <Photo icon={p.icon} label={p.name.toUpperCase()} height={360} />
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <SectionHeader eyebrow="Project Overview" title="The brief" />
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)" }}>{d.overview}</p>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)" }}><strong style={{ color: "var(--text-primary)" }}>Scope:</strong> {d.scope}</p>
            </div>
          </div>
          {/* Meta card */}
          <div style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 18, padding: 28, background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)" }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>Project details</span>
            {[["Industry", p.industry], ["Location", p.location], ["Emirate", p.emirate], ["Year", p.year]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 12, paddingBottom: 12, borderBottom: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{k}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--text-primary)", textAlign: "right" }}>{v}</span>
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>Products used</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{p.products.map((pr) => <Badge key={pr} tone="aqua" variant="soft">{pr}</Badge>)}</div>
            </div>
            <Button variant="accent" fullWidth iconRight="arrow-right" onClick={() => onNavigate("Contact")}>Discuss a Similar Project</Button>
          </div>
        </div>
      </Section>

      {/* CHALLENGES + SOLUTIONS */}
      <Section bg="var(--surface)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "var(--text-primary)" }}><Icon name="alert-triangle" size={20} color="#C77700" /> Challenges</span>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {d.challenges.map((c) => <li key={c} style={{ display: "flex", gap: 10, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-secondary)" }}><span style={{ marginTop: 7, width: 6, height: 6, flexShrink: 0, borderRadius: "50%", background: "var(--text-muted)" }} />{c}</li>)}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 32, background: "var(--surface)", border: "1px solid var(--aqua-200, rgba(0,183,199,0.3))", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "var(--navy-800)" }}><Icon name="check-circle" size={20} color="var(--aqua-600)" /> Solutions Provided</span>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {d.solutions.map((c) => <li key={c} style={{ display: "flex", gap: 10, fontSize: 15.5, lineHeight: 1.6, color: "var(--text-primary)" }}><Icon name="check" size={17} color="var(--aqua-600)" style={{ marginTop: 2, flexShrink: 0 }} />{c}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section>
        <SectionHeader eyebrow="Gallery" title="On site" style={{ marginBottom: 32 }} />
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}>
          <Photo icon={p.icon} label="MAIN PLANT ROOM" height={340} />
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 16 }}>
            <Photo icon="gauge" label="BOOSTER SET" height="100%" tone="alt" />
            <Photo icon="settings-2" label="CONTROL PANEL" height="100%" tone="alt" />
          </div>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section bg="var(--gradient-navy)">
        <SectionHeader invert align="center" eyebrow="Project Outcomes" title="Measured results" style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {d.outcomes.map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center", textAlign: "center", padding: "32px 24px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 800, color: "var(--aqua-400)", lineHeight: 1, letterSpacing: "-0.02em" }}>{v}</span>
              <span style={{ fontSize: 15, color: "var(--text-on-dark-secondary)", lineHeight: 1.5 }}>{l}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CLIENT FEEDBACK */}
      <Section>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center", textAlign: "center" }}>
          <Icon name="quote" size={40} color="var(--aqua-400)" />
          <p style={{ margin: 0, fontFamily: "var(--font-display, var(--font-heading))", fontSize: 28, lineHeight: 1.45, fontWeight: 500, color: "var(--text-primary)", textWrap: "balance" }}>"{d.feedback.quote}"</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>{d.feedback.author}</span>
            <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{d.feedback.role}</span>
          </div>
        </div>
      </Section>

      {/* BACK */}
      <Section py={0} style={{ paddingBottom: 64 }}>
        <Button variant="ghost" iconLeft="arrow-left" onClick={() => onNavigate("Projects")}>Back to all projects</Button>
      </Section>

      {window.SF_FinalCTA({ onNavigate })}
    </div>
  );
}

window.SF_ProjectDetailScreen = ProjectDetailScreen;
