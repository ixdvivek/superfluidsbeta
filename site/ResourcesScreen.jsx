// Superfluids website — Resources screen (downloads + articles + search).
const DSr = window.SuperfluidsDesignSystem_e3893d;

const DOWNLOADS = [
  { title: "Booster Pump Sets — Datasheet", type: "Datasheet", cat: "Pumping Systems", size: "PDF · 1.8 MB", icon: "gauge" },
  { title: "GRP Sectional Tanks — Catalogue", type: "Catalogue", cat: "GRP Tanks", size: "PDF · 4.2 MB", icon: "cylinder" },
  { title: "VFD Control Systems — Datasheet", type: "Datasheet", cat: "VFD Systems", size: "PDF · 2.1 MB", icon: "settings-2" },
  { title: "Industrial Valves — Product Catalogue", type: "Catalogue", cat: "Valves", size: "PDF · 5.6 MB", icon: "git-commit-horizontal" },
  { title: "Centralised Hot Water — Installation Manual", type: "Manual", cat: "Hot Water", size: "PDF · 3.0 MB", icon: "flame" },
  { title: "Water Treatment Packages — Datasheet", type: "Datasheet", cat: "Water Treatment", size: "PDF · 2.4 MB", icon: "filter" },
  { title: "ISO 9001:2015 Certificate", type: "Certificate", cat: "Certificates", size: "PDF · 0.6 MB", icon: "award" },
  { title: "Manufacturer Authorisations", type: "Certificate", cat: "Certificates", size: "PDF · 1.1 MB", icon: "badge-check" },
];

const ARTICLES = [
  { title: "How to select the right pump for a high-rise tower", cat: "Pump Selection Guide", read: "6 min read", icon: "gauge", date: "Jun 2026" },
  { title: "Sizing GRP water storage: capacity, reserve and hygiene", cat: "Water Storage Systems", read: "5 min read", icon: "cylinder", date: "May 2026" },
  { title: "Energy saving through VFDs: where the payback really comes from", cat: "Energy Saving Through VFDs", read: "7 min read", icon: "settings-2", date: "May 2026" },
  { title: "Preventive maintenance for pump rooms: a practical checklist", cat: "Maintenance Best Practices", read: "4 min read", icon: "wrench", date: "Apr 2026" },
  { title: "Designing centralised hot water for hospitality", cat: "Engineering Insights", read: "6 min read", icon: "flame", date: "Apr 2026" },
  { title: "Water-hammer and how constant-pressure control prevents it", cat: "Engineering Insights", read: "5 min read", icon: "waves", date: "Mar 2026" },
];

const TYPE_TONE = { Datasheet: "aqua", Catalogue: "info", Manual: "neutral", Certificate: "success" };

function ResourcesScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, Badge, Input, Icon } = DSr;
  const Section = window.SF_Section, Hero = window.SF_PageHero;
  const [q, setQ] = React.useState("");
  const isMobile = window.SF_useMedia('(max-width: 768px)');
  const ql = q.trim().toLowerCase();
  const match = (s) => !ql || s.toLowerCase().includes(ql);

  const dls = DOWNLOADS.filter((d) => match(d.title) || match(d.cat) || match(d.type));
  const arts = ARTICLES.filter((a) => match(a.title) || match(a.cat));

  return (
    <div>
      <Hero eyebrow="Technical Resources" title="Datasheets, catalogues & engineering insight"
        description="Everything you need to specify with confidence — product documentation, certificates and technical articles from our engineering team."
        crumb="Resources" onNavigate={onNavigate}>
        <div style={{ marginTop: 8, maxWidth: 460 }}>
          <Input value={q} onChange={(e) => setQ(e.target.value)} iconLeft="search" placeholder="Search documents and articles…"
            style={{ background: "var(--white)" }} />
        </div>
      </Hero>

      {/* DOWNLOADS */}
      <Section>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
          <SectionHeader eyebrow="Downloads" title="Product documentation"
            description="Datasheets, catalogues, manuals and certificates — ready to download." />
          {ql && <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{dls.length} of {DOWNLOADS.length} documents</span>}
        </div>
        {dls.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: isMobile ? 12 : 16 }}>
            {dls.map((d) => (
              <a key={d.title} href="#" onClick={(e) => e.preventDefault()} style={{
                display: "flex", alignItems: "center", gap: 16, padding: isMobile ? "16px 18px" : "20px 22px", textDecoration: "none",
                background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)", transition: "var(--transition-base)",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "var(--aqua-400)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}>
                <span style={{ display: "inline-flex", width: 44, height: 44, flexShrink: 0, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", color: "var(--aqua-600)", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={d.icon} size={22} strokeWidth={1.75} />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 5, flex: 1, minWidth: 0 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: isMobile ? 14 : 15.5, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.35 }}>{d.title}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <Badge tone={TYPE_TONE[d.type] || "neutral"} variant="soft">{d.type}</Badge>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{d.size}</span>
                  </div>
                </div>
                <Icon name="download" size={18} color="var(--text-muted)" style={{ flexShrink: 0 }} />
              </a>
            ))}
          </div>
        ) : <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>No documents match "{q}".</p>}
      </Section>

      {/* ARTICLES */}
      <Section bg="var(--surface)">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
          <SectionHeader eyebrow="Technical Articles" title="Engineering insight & guides"
            description="Practical guidance from our engineers on selection, efficiency and maintenance." />
          {ql && <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{arts.length} of {ARTICLES.length} articles</span>}
        </div>
        {arts.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 24 }}>
            {arts.map((a) => (
              <a key={a.title} href="#" onClick={(e) => e.preventDefault()} style={{
                display: "flex", flexDirection: "column", textDecoration: "none",
                background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)",
                overflow: "hidden", boxShadow: "var(--shadow-card)", transition: "var(--transition-base)",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ position: "relative" }}>
                  <window.SF_Photo icon={a.icon} height={isMobile ? 130 : 150} radius="0" />
                  <span style={{ position: "absolute", top: 12, left: 12 }}><Badge tone="aqua" variant="solid">{a.cat}</Badge></span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: isMobile ? 18 : 22, flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 16 : 18, fontWeight: 600, lineHeight: 1.35, color: "var(--text-primary)", textWrap: "balance" }}>{a.title}</h3>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--text-muted)" }}>
                    <span style={{ fontFamily: "var(--font-mono)" }}>{a.date}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><Icon name="clock" size={13} /> {a.read}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : <p style={{ fontSize: 15, color: "var(--text-secondary)" }}>No articles match "{q}".</p>}
      </Section>

      {window.SF_FinalCTA({ onNavigate, title: "Need a document you can't find?", body: "Our engineering team can provide bespoke datasheets, sizing calculations and technical submittals for your project.", cta: "Request Documents" })}
    </div>
  );
}

window.SF_ResourcesScreen = ResourcesScreen;
