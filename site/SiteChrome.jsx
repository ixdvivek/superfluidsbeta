// Superfluids website — header & footer chrome.
const DS = window.SuperfluidsDesignSystem_e3893d;

const NAV = ["Home", "About", "Products", "Services", "Industries", "Projects", "Resources", "Contact"];

function Header({ active, onNavigate }) {
  const { Button } = DS;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("[data-site-scroll]");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 200,
      background: "var(--glass-bg)", backdropFilter: "var(--blur-md)", WebkitBackdropFilter: "var(--blur-md)",
      borderBottom: "1px solid " + (scrolled ? "var(--border-subtle)" : "transparent"),
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition: "var(--transition-base)",
    }}>
      <div style={{
        maxWidth: "var(--container-wide)", margin: "0 auto", padding: "0 32px", height: 76,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("Home"); }} style={{ display: "flex", alignItems: "center" }}>
          <img src="assets/logos/superfluids-wordmark-navy.png" alt="Superfluids" style={{ height: 30 }} />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV.map((item) => {
            const on = item === active;
            return (
              <a key={item} href="#" onClick={(e) => { e.preventDefault(); onNavigate(item); }}
                style={{
                  padding: "8px 13px", borderRadius: "var(--radius-sm)", textDecoration: "none",
                  fontFamily: "var(--font-body)", fontSize: 14.5, fontWeight: on ? 600 : 500,
                  color: on ? "var(--navy-800)" : "var(--gray-600)",
                  background: on ? "var(--aqua-50)" : "transparent",
                  transition: "var(--transition-base)",
                }}
                onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = "var(--navy-800)"; }}
                onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = "var(--gray-600)"; }}
              >{item}</a>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Button variant="accent" size="sm" iconRight="arrow-right" onClick={() => onNavigate("Contact")}>Request Consultation</Button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  const { Icon } = DS;
  const cols = [
    { title: "Solutions", links: ["Pumping Systems", "GRP Tanks", "VFD Systems", "Industrial Valves", "Hot Water Systems", "Water Treatment"] },
    { title: "Company", links: ["About", "Projects", "Industries", "Resources", "Contact"] },
    { title: "Support", links: ["Request Consultation", "Technical Resources", "Datasheets", "Maintenance (AMC)", "Emergency Support"] },
  ];
  return (
    <footer style={{ background: "var(--gradient-navy)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: "72px 32px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 300 }}>
            <img src="assets/logos/superfluids-wordmark-white.png" alt="Superfluids" style={{ height: 30, alignSelf: "flex-start" }} />
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--text-on-dark-secondary)" }}>
              Complete water & fluid engineering solutions across the UAE — design, supply, installation and maintenance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
              <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-on-dark-secondary)", lineHeight: 1.5 }}><Icon name="map-pin" size={16} color="var(--aqua-400)" /> 216 Arjumand Building, Dubai Investment Park 1, Green Community Village, Dubai, UAE</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-on-dark-secondary)" }}><Icon name="phone" size={16} color="var(--aqua-400)" /> +971 55 924 3822</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-on-dark-secondary)" }}><Icon name="mail" size={16} color="var(--aqua-400)" /> sales@superfluids.com</span>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--white)" }}>{col.title}</span>
              {col.links.map((l) => {
                const dest = NAV.includes(l) ? l : (l === "Water Treatment" || l.includes("Pump") || l.includes("Tank") || l.includes("VFD") || l.includes("Valve") || l.includes("Hot Water")) ? "Products" : (l.includes("Consultation") || l.includes("Emergency")) ? "Contact" : l.includes("Resource") || l.includes("Datasheet") ? "Resources" : l.includes("Maintenance") || l.includes("AMC") ? "Services" : null;
                return (
                  <a key={l} href="#" onClick={(e) => { e.preventDefault(); if (dest) onNavigate(dest); }} style={{ fontSize: 14, color: "var(--text-on-dark-secondary)", textDecoration: "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--aqua-400)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-on-dark-secondary)"}>{l}</a>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 28, flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontSize: 13, color: "var(--text-on-dark-secondary)" }}>© 2026 Superfluids Engineering LLC. All rights reserved.</span>
          <div style={{ display: "flex", gap: 18 }}>
            {["Privacy Policy", "Terms", "Authorisations"].map((l) => (
              <a key={l} href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, color: "var(--text-on-dark-secondary)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SF_Header: Header, SF_Footer: Footer, SF_NAV: NAV });
