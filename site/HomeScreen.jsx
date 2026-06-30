// Superfluids website — Home screen.
const DSh = window.SuperfluidsDesignSystem_e3893d;

const SOLUTIONS = [
  { icon: "gauge", title: "Pumping Systems", description: "Booster sets, circulation and transfer pumps engineered for UAE conditions." },
  { icon: "cylinder", title: "GRP Tanks", description: "Sectional GRP water storage tanks in any capacity, hygienically certified." },
  { icon: "settings-2", title: "Variable Frequency Drives", description: "Energy-saving VFD control for pumps, fans and process equipment." },
  { icon: "git-commit-horizontal", title: "Industrial Valves", description: "Gate, check, butterfly and control valves from trusted manufacturers." },
  { icon: "flame", title: "Hot Water Systems", description: "Calorifiers, heat pumps and central hot-water generation." },
  { icon: "filter", title: "Water Treatment Systems", description: "Filtration, softening and disinfection for clean, compliant water." },
];

const WHY = [
  { icon: "badge-check", title: "Factory-Trained Engineers", description: "Certified by the manufacturers we represent." },
  { icon: "route", title: "End-to-End Project Delivery", description: "Design, supply, install, commission — one partner." },
  { icon: "leaf", title: "Energy-Efficient Solutions", description: "VFD-led systems that cut lifetime running cost." },
  { icon: "wrench", title: "Long-Term Maintenance Support", description: "Preventive AMC and 24/7 emergency response." },
];

const HOME_INDUSTRIES = [
  { icon: "building-2", name: "Residential" }, { icon: "building", name: "Commercial" },
  { icon: "heart-pulse", name: "Healthcare" }, { icon: "concierge-bell", name: "Hospitality" },
  { icon: "factory", name: "Industrial" }, { icon: "landmark", name: "Government" },
  { icon: "construction", name: "Infrastructure" }, { icon: "fuel", name: "Oil & Gas" },
  { icon: "snowflake", name: "District Cooling" },
];

const PROJECTS = [
  { name: "Marina Heights Tower", location: "Dubai Marina", industry: "Commercial", products: ["Booster Pumps", "GRP Tanks"], icon: "building-2" },
  { name: "Al Noor Hospital Expansion", location: "Abu Dhabi", industry: "Healthcare", products: ["Hot Water", "Water Treatment"], icon: "heart-pulse" },
  { name: "Logistics Park Phase II", location: "Jebel Ali", industry: "Industrial", products: ["VFD Systems", "Valves"], icon: "factory" },
];

function HomeScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, SolutionCard, FeatureBlock, StatCard, ProcessTimeline, Testimonial, LogoBar, Badge, Icon } = DSh;
  const Photo = window.SF_Photo, Section = window.SF_Section;
  const isMobile = window.SF_useMedia('(max-width: 768px)');

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(110% 90% at 80% 10%, #000 20%, transparent 75%)" }} />
        {!isMobile && <img src="assets/logos/superfluids-mark.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "4%", top: "6%", height: "92%", opacity: 0.5, filter: "drop-shadow(0 20px 60px rgba(0,183,199,0.35))", pointerEvents: "none" }} />}
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: isMobile ? "72px 20px 64px" : "120px 32px 110px" }}>
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: isMobile ? 20 : 26 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, alignSelf: "flex-start", padding: "7px 14px", borderRadius: "var(--radius-pill)", background: "rgba(0,183,199,0.14)", border: "1px solid rgba(0,183,199,0.3)", color: "var(--aqua-400)", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>
              <Icon name="map-pin" size={14} /> UAE Fluid Engineering Specialists
            </span>
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 36 : 60, lineHeight: 1.06, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>
              Complete Water &amp; Fluid Engineering Solutions Across UAE
            </h1>
            <p style={{ margin: 0, fontSize: isMobile ? 15 : 19, lineHeight: 1.6, color: "var(--text-on-dark-secondary)", maxWidth: 600 }}>
              Design, supply, installation and maintenance of high-performance pumping systems, water storage solutions and automation infrastructure.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: isMobile ? 2 : 6 }}>
              <Button variant="accent" size={isMobile ? "md" : "lg"} iconRight="arrow-right" onClick={() => onNavigate("Contact")}>Request Consultation</Button>
              <Button variant="outline" size={isMobile ? "md" : "lg"} onClick={() => onNavigate("Products")} style={{ background: "rgba(255,255,255,0.06)", color: "var(--white)", borderColor: "rgba(255,255,255,0.25)" }}>View Products</Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 24 : 40, marginTop: isMobile ? 16 : 22, paddingTop: isMobile ? 20 : 26, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <StatCard value="500" suffix="+" label="Projects Delivered" invert />
              <StatCard value="15" suffix="+" label="Years Experience" invert />
              <StatCard value="40" suffix="+" label="Brands Represented" invert />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS */}
      <Section bg="var(--surface)" py={48}>
        <LogoBar label="Authorised distributor for leading global manufacturers" logos={["Ebara", "Grundfos", "CRI", "Ariston", "Pegler", "Crane"]} />
      </Section>

      {/* CORE SOLUTIONS */}
      <Section>
        <SectionHeader align="center" eyebrow="Core Solutions" title="Engineered fluid systems, end to end"
          description="Six core capability areas — specified, supplied, installed and maintained by one accountable engineering partner." style={{ marginBottom: isMobile ? 36 : 56 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {SOLUTIONS.map((s) => <SolutionCard key={s.title} {...s} onClick={(e) => { e.preventDefault(); onNavigate("Products"); }} />)}
        </div>
      </Section>

      {/* WHY SUPERFLUIDS */}
      <Section bg="var(--gradient-navy)">
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr", gap: isMobile ? 36 : 64, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <SectionHeader invert eyebrow="Why Superfluids" title="Engineering partners, not just suppliers"
              description="We take responsibility for the whole system — from hydraulic calculation to commissioning and the years of maintenance that follow." />
            <Button variant="accent" iconRight="arrow-right" style={{ alignSelf: "flex-start" }} onClick={() => onNavigate("About")}>About Our Company</Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? 16 : 28 }}>
            {WHY.map((w) => <FeatureBlock key={w.title} {...w} invert />)}
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section bg="var(--surface)">
        <SectionHeader align="center" eyebrow="Industries Served" title="Trusted across every sector"
          description="From residential towers to oil &amp; gas and district cooling, our systems perform where reliability is non-negotiable." style={{ marginBottom: isMobile ? 28 : 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 10 : 16 }}>
          {HOME_INDUSTRIES.map((ind) => (
            <div key={ind.name} style={{ display: "flex", alignItems: "center", gap: isMobile ? 10 : 16, padding: isMobile ? "14px 16px" : "20px 24px", background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", transition: "var(--transition-base)", cursor: "pointer" }}
              onClick={() => onNavigate("Industries")}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.borderColor = "var(--aqua-400)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gray-50)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}>
              <span style={{ display: "inline-flex", width: isMobile ? 36 : 44, height: isMobile ? 36 : 44, flexShrink: 0, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", alignItems: "center", justifyContent: "center", color: "var(--aqua-600)" }}>
                <Icon name={ind.icon} size={isMobile ? 18 : 22} strokeWidth={1.75} />
              </span>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: isMobile ? 14 : 17, fontWeight: 600, color: "var(--text-primary)" }}>{ind.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: isMobile ? 28 : 48, gap: 24, flexWrap: "wrap" }}>
          <SectionHeader eyebrow="Featured Projects" title="Delivered across the Emirates"
            description="A snapshot of recent engineering projects commissioned by Superfluids." />
          <Button variant="outline" iconRight="arrow-right" onClick={() => onNavigate("Projects")}>View All Projects</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          {PROJECTS.map((p) => (
            <div key={p.name} style={{ display: "flex", flexDirection: "column", background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
              <div style={{ position: "relative" }}>
                <Photo icon={p.icon} label={p.location.toUpperCase()} height={180} radius="0" />
                <span style={{ position: "absolute", top: 14, left: 14 }}><Badge tone="aqua" variant="solid">{p.industry}</Badge></span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: isMobile ? 18 : 24 }}>
                <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</h3>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--text-secondary)" }}><Icon name="map-pin" size={15} /> {p.location}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>{p.products.map((pr) => <Badge key={pr} tone="neutral">{pr}</Badge>)}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* OUR PROCESS */}
      <Section bg="var(--surface)">
        <SectionHeader align="center" eyebrow="Our Process" title="A disciplined engineering workflow"
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

      {/* TESTIMONIALS */}
      <Section bg="var(--gradient-navy)">
        <SectionHeader invert align="center" eyebrow="Client Feedback" title="What our clients say" style={{ marginBottom: isMobile ? 28 : 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 24 }}>
          <Testimonial invert rating={5} quote="Superfluids delivered the entire booster system on schedule and commissioned it flawlessly. A genuine engineering partner." author="Eng. Rashid Hassan" role="MEP Director" company="Gulf Contracting" />
          <Testimonial invert rating={5} quote="Their VFD retrofit cut our pump-room energy use noticeably. Professional from survey to handover." author="Sara Al Marri" role="Facilities Manager" company="Emirates Hospitality" />
          <Testimonial invert rating={5} quote="Responsive AMC team and genuine technical depth. They understand UAE water systems inside out." author="Daniel Okafor" role="Project Engineer" company="Skyline Developments" />
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section bg="var(--surface)" py={0} style={{ paddingTop: 0, paddingBottom: isMobile ? 56 : 96 }}>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-2xl)", background: "var(--gradient-fluid)", padding: isMobile ? "40px 28px" : "72px 64px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at 90% 50%, #000, transparent 70%)" }} />
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12, maxWidth: 620 }}>
            <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 24 : 40, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>Need a fluid engineering partner?</h2>
            <p style={{ margin: 0, fontSize: isMobile ? 14 : 18, lineHeight: 1.6, color: "rgba(255,255,255,0.9)" }}>Request a technical consultation and our engineering team will respond within one business day.</p>
          </div>
          <div style={{ position: "relative" }}>
            <Button size={isMobile ? "md" : "lg"} onClick={() => onNavigate("Contact")} style={{ background: "var(--white)", color: "var(--navy-800)", border: "none" }} iconRight="arrow-right">Contact Us</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

window.SF_HomeScreen = HomeScreen;
