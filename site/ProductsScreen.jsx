// Superfluids website — Products screen (category grid + detail preview).
const DSp = window.SuperfluidsDesignSystem_e3893d;

const PRODUCTS = [
  { id: "booster-pumps", icon: "gauge", title: "Pumping Systems", description: "Booster sets, circulation, transfer and submersible pumps.", count: "120+ models" },
  { id: "grp-tanks", icon: "cylinder", title: "GRP Tanks", description: "Hot-pressed sectional GRP water storage tanks.", count: "Any capacity" },
  { id: "vfd-systems", icon: "settings-2", title: "VFD Systems", description: "Variable frequency drives for energy-efficient control.", count: "0.75–315 kW" },
  { id: "industrial-valves", icon: "git-commit-horizontal", title: "Industrial Valves", description: "Gate, butterfly, check and control valves.", count: "DN15–DN600" },
  { id: "hot-water-systems", icon: "flame", title: "Hot Water Systems", description: "Calorifiers, heat pumps and central HW generation.", count: "Commercial scale" },
  { id: "water-treatment", icon: "filter", title: "Water Treatment", description: "Filtration, softening and disinfection packages.", count: "Turnkey" },
];

function ProductsScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, SolutionCard, Breadcrumb, Tabs, SpecTable, Badge, Card, Input, Select, Textarea, Checkbox, Icon } = DSp;
  const Photo = window.SF_Photo, Section = window.SF_Section;

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at 70% 0%, #000, transparent 75%)" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "56px 32px 72px" }}>
          <Breadcrumb invert items={[{ label: "Home", href: "#" }, { label: "Products" }]} />
          <div style={{ marginTop: 28, maxWidth: 680, display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow tone="aqua">Product Portfolio</Eyebrow>
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 52, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)" }}>Engineered products, ready to specify</h1>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--text-on-dark-secondary)" }}>Six product families from the world's leading manufacturers — backed by Superfluids' in-house engineering, supply and service.</p>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <Section>
        <SectionHeader eyebrow="Categories" title="Browse by product family" style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PRODUCTS.map((p) => (
            <SolutionCard key={p.title} icon={p.icon} title={p.title} description={p.description} linkLabel="View range" onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProductDetail", param: p.id }); }} />
          ))}
        </div>
      </Section>

      {/* PRODUCT DETAIL PREVIEW */}
      <Section bg="var(--surface)">
        <SectionHeader eyebrow="Product Detail" title="Booster Pump Sets"
          description="An example of how each product is presented — overview, applications, specifications and downloads." style={{ marginBottom: 40 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Photo icon="gauge" label="VARIABLE-SPEED BOOSTER SET" height={300} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {["droplet", "settings-2", "activity"].map((ic, i) => (
                <Photo key={i} icon={ic} height={88} radius="var(--radius-md)" tone="alt" />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Badge tone="aqua">Pumping Systems</Badge>
              <Badge tone="success" variant="soft">In Stock</Badge>
              <Badge tone="neutral">Grundfos · Ebara</Badge>
            </div>
            <Tabs tabs={[
              { label: "Overview", content: (
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--text-secondary)" }}>Packaged multi-pump booster sets maintain constant pressure in high-rise water distribution. Variable-speed control matches output to demand, reducing energy use and water-hammer while extending equipment life.</p>
              ) },
              { label: "Applications", content: (
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, lineHeight: 1.9, color: "var(--text-secondary)" }}>
                  <li>Residential & commercial towers</li>
                  <li>Hotels and hospitals</li>
                  <li>District water networks</li>
                  <li>Industrial process supply</li>
                </ul>
              ) },
              { label: "Specifications", content: (
                <SpecTable rows={[["Flow Rate", "5–120 m³/h"], ["Max Head", "95 m"], ["Power", "0.75–22 kW"], ["Inlet / Outlet", "DN50 – DN150"], ["Control", "VFD, constant pressure"], ["Material", "Stainless steel AISI 304"]]} />
              ) },
              { label: "Downloads", content: (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Datasheet (PDF)", "Product Catalogue", "Installation Manual"].map((d) => (
                    <a key={d} href="#" onClick={(e) => e.preventDefault()} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", textDecoration: "none", color: "var(--text-primary)", fontSize: 15, fontWeight: 500 }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><Icon name="file-text" size={18} color="var(--color-secondary)" /> {d}</span>
                      <Icon name="download" size={18} color="var(--text-muted)" />
                    </a>
                  ))}
                </div>
              ) },
            ]} />
            <Card padding="md" style={{ background: "var(--gray-50)", boxShadow: "none" }}>
              <h4 style={{ margin: "0 0 12px", fontFamily: "var(--font-heading)", fontSize: 18, color: "var(--text-primary)" }}>Request information</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Input placeholder="Full name" />
                <Input placeholder="Email" type="email" iconLeft="mail" />
              </div>
              <div style={{ marginTop: 12 }}><Button variant="accent" fullWidth iconRight="arrow-right" onClick={() => onNavigate("Contact")}>Request a Quote</Button></div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

window.SF_ProductsScreen = ProductsScreen;
