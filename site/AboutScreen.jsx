// Superfluids website — About screen.
const DSa = window.SuperfluidsDesignSystem_e3893d;

const VALUES = [
  { icon: "badge-check", title: "Technical Integrity", description: "Every system is engineered to perform — sized, specified and commissioned to peak operational standards, not just supplied." },
  { icon: "handshake", title: "Partnership", description: "We act as the client's technical partner of choice, accountable from first selection to long-term service." },
  { icon: "leaf", title: "Efficiency", description: "Energy-efficient, VFD-led solutions that reduce lifetime running cost and environmental impact." },
  { icon: "shield-check", title: "Reliability", description: "We exclusively partner with the industry's most trusted manufacturers in water and wastewater technology." },
  { icon: "route", title: "Accountability", description: "End-to-end ownership of mechanical, electrical and plumbing integration — one unified, efficient ecosystem." },
  { icon: "graduation-cap", title: "Expertise", description: "Factory-trained Sales and Service teams that bridge world-class manufacturing and site-specific excellence." },
];

const LEADERS = [
  { name: "Imran Qureshi", role: "Managing Director", bio: "Two decades in MEP and fluid systems across the GCC, leading Superfluids' engineering-first strategy." },
  { name: "Anita Fernandes", role: "Head of Engineering", bio: "Oversees hydraulic design, system packaging and commissioning for complex pumping and HVAC projects." },
  { name: "Mohammed Saleh", role: "Sales & Supply Director", bio: "Manages manufacturer partnerships and procurement, ensuring the right kit at the right time." },
  { name: "Priya Nair", role: "Service & AMC Manager", bio: "Leads preventive maintenance, retrofitting and 24/7 emergency response across the UAE." },
];

const CERTS = [
  { icon: "award", title: "ISO 9001:2015", sub: "Quality Management" },
  { icon: "leaf", title: "ISO 14001", sub: "Environmental Management" },
  { icon: "shield-check", title: "ISO 45001", sub: "Occupational Health & Safety" },
  { icon: "file-badge", title: "DED Trade Licence", sub: "Dubai Economy" },
  { icon: "badge-check", title: "Manufacturer Authorisations", sub: "Grundfos · Ebara · CRI · Ariston" },
  { icon: "building-2", title: "Approved Vendor", sub: "Leading UAE consultants & contractors" },
];

function AboutScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, StatCard, Icon } = DSa;
  const Photo = window.SF_Photo, Section = window.SF_Section, Hero = window.SF_PageHero;
  const isMobile = window.SF_useMedia('(max-width: 768px)');

  return (
    <div>
      <Hero eyebrow="About Superfluids" title="Engineering excellence across the UAE"
        description="The technical partner of choice for comprehensive fluid management and MEP solutions — marketing, supply, integration and service of state-of-the-art systems."
        crumb="About" onNavigate={onNavigate} />

      {/* COMPANY OVERVIEW */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr", gap: isMobile ? 32 : 64, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <SectionHeader eyebrow="Who We Are" title="Empowering infrastructure with precision engineering" />
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)" }}>
              At Superfluids, we specialise in the marketing, supply and integration of state-of-the-art equipment designed to optimise performance, efficiency and reliability across residential, commercial and industrial sectors.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)" }}>
              Our Sales and Service teams are factory-trained experts dedicated to high-performance packaging and integration of complex systems. We bridge the gap between world-class manufacturing and site-specific operational excellence.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
              <Button variant="accent" iconRight="arrow-right" onClick={() => onNavigate("Services")}>Our Services</Button>
              <Button variant="outline" onClick={() => onNavigate("Projects")}>View Projects</Button>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Photo icon="waves" label="SUPERFLUIDS · DUBAI INVESTMENT PARK" height={isMobile ? 220 : 300} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Photo icon="gauge" label="PUMP ROOM" height={isMobile ? 100 : 130} radius="var(--radius-md)" tone="alt" />
              <Photo icon="cylinder" label="GRP STORAGE" height={isMobile ? 100 : 130} radius="var(--radius-md)" tone="alt" />
            </div>
          </div>
        </div>
      </Section>

      {/* MISSION + VISION */}
      <Section bg="var(--surface)">
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
          {[
            { icon: "target", eyebrow: "Our Mission", title: "Reliable fluid systems, engineered to last", body: "To deliver high-performance pumping, storage and automation systems — configured, installed and commissioned to peak standards — and to support them through their entire operational life." },
            { icon: "telescope", eyebrow: "Our Vision", title: "The UAE's most trusted fluid engineering partner", body: "To be the region's reference for fluid and MEP engineering: the team developers, consultants and facility owners trust to solve complex problems efficiently and sustainably." },
          ].map((b) => (
            <div key={b.eyebrow} style={{ position: "relative", overflow: "hidden", background: "var(--gradient-navy)", borderRadius: "var(--radius-xl)", padding: isMobile ? "36px 28px" : "48px 44px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.08) 1px, transparent 1px)", backgroundSize: "36px 36px", maskImage: "radial-gradient(100% 100% at 85% 10%, #000, transparent 70%)" }} />
              <span style={{ position: "relative", display: "inline-flex", width: 52, height: 52, borderRadius: "var(--radius-md)", background: "rgba(0,183,199,0.16)", border: "1px solid rgba(0,183,199,0.3)", color: "var(--aqua-400)", alignItems: "center", justifyContent: "center" }}>
                <Icon name={b.icon} size={26} strokeWidth={1.75} />
              </span>
              <Eyebrow tone="aqua">{b.eyebrow}</Eyebrow>
              <h3 style={{ position: "relative", margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 22 : 26, fontWeight: 700, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>{b.title}</h3>
              <p style={{ position: "relative", margin: 0, fontSize: isMobile ? 14.5 : 16, lineHeight: 1.7, color: "var(--text-on-dark-secondary)" }}>{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section>
        <SectionHeader align="center" eyebrow="Core Values" title="What we stand for"
          description="The principles that guide every project, from first survey to long-term maintenance." style={{ marginBottom: isMobile ? 32 : 56 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 14 : 24 }}>
          {VALUES.map((v) => (
            <div key={v.title} style={{ display: "flex", flexDirection: "column", gap: 14, padding: isMobile ? 22 : 28, background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ display: "inline-flex", width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", color: "var(--aqua-600)", alignItems: "center", justifyContent: "center" }}>
                <Icon name={v.icon} size={24} strokeWidth={1.75} />
              </span>
              <h4 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "var(--text-primary)" }}>{v.title}</h4>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--text-secondary)" }}>{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP */}
      <Section bg="var(--surface)">
        <SectionHeader align="center" eyebrow="Leadership Team" title="The people behind the engineering"
          description="A management team with deep roots in MEP, fluid systems and UAE infrastructure." style={{ marginBottom: isMobile ? 32 : 56 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? 14 : 24 }}>
          {LEADERS.map((l) => (
            <div key={l.name} style={{ display: "flex", flexDirection: "column", background: "var(--surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
              <Photo icon="user" height={isMobile ? 130 : 180} radius="0" />
              <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: isMobile ? 14 : 22 }}>
                <h4 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 15 : 18, fontWeight: 600, color: "var(--text-primary)" }}>{l.name}</h4>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: isMobile ? 10.5 : 12.5, letterSpacing: "0.03em", color: "var(--aqua-600)", textTransform: "uppercase" }}>{l.role}</span>
                {!isMobile && <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)" }}>{l.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section>
        <SectionHeader align="center" eyebrow="Certifications & Authorisations" title="Credentials you can build on"
          description="Quality, environmental and safety accreditation, plus authorisations from the manufacturers we represent." style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 12 : 20 }}>
          {CERTS.map((c) => (
            <div key={c.title} style={{ display: "flex", alignItems: "center", gap: 18, padding: isMobile ? "18px 20px" : "22px 26px", background: "var(--gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)" }}>
              <span style={{ display: "inline-flex", width: 50, height: 50, flexShrink: 0, borderRadius: "var(--radius-md)", background: "var(--surface)", border: "1px solid var(--border-subtle)", color: "var(--color-secondary)", alignItems: "center", justifyContent: "center" }}>
                <Icon name={c.icon} size={24} strokeWidth={1.75} />
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>{c.title}</span>
                <span style={{ fontSize: 13.5, color: "var(--text-secondary)" }}>{c.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* COMPANY STATISTICS */}
      <Section bg="var(--gradient-navy)">
        <SectionHeader invert align="center" eyebrow="By the Numbers" title="A track record across the Emirates" style={{ marginBottom: isMobile ? 36 : 56 }} />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)", gap: isMobile ? 16 : 24 }}>
          <StatCard invert align="center" value="500" suffix="+" label="Projects Delivered" />
          <StatCard invert align="center" value="15" suffix="+" label="Years of Experience" />
          <StatCard invert align="center" value="14" suffix="" label="Brands Represented" />
          <StatCard invert align="center" value="9" suffix="" label="Industries Served" />
          <StatCard invert align="center" value="350" suffix="+" label="Satisfied Clients" />
        </div>
      </Section>

      {window.SF_FinalCTA({ onNavigate })}
    </div>
  );
}

window.SF_AboutScreen = AboutScreen;
