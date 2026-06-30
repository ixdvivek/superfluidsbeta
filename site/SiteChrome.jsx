// Superfluids website — header & footer chrome.
const DS = window.SuperfluidsDesignSystem_e3893d;

const NAV = ["Home", "About", "Products", "Services", "Industries", "Projects", "Resources", "Contact"];

function Header({ active, onNavigate }) {
  const { Button, Icon } = DS;
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isMobile = window.SF_useMedia('(max-width: 960px)');

  const nav = React.useCallback((r) => { setMenuOpen(false); onNavigate(r); }, [onNavigate]);

  React.useEffect(() => {
    const el = document.querySelector("[data-site-scroll]");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on scroll
  React.useEffect(() => {
    if (!menuOpen) return;
    const el = document.querySelector("[data-site-scroll]");
    if (!el) return;
    const fn = () => setMenuOpen(false);
    el.addEventListener("scroll", fn, { passive: true });
    return () => el.removeEventListener("scroll", fn);
  }, [menuOpen]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 200,
      background: "var(--glass-bg)", backdropFilter: "var(--blur-md)", WebkitBackdropFilter: "var(--blur-md)",
      borderBottom: "1px solid " + (scrolled || menuOpen ? "var(--border-subtle)" : "transparent"),
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition: "var(--transition-base)",
    }}>
      <div style={{
        maxWidth: "var(--container-wide)", margin: "0 auto",
        padding: "0 " + (isMobile ? "20px" : "32px"), height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); nav("Home"); }} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <img src="assets/logos/superfluids-wordmark-navy.png" alt="Superfluids" style={{ height: 26 }} />
        </a>

        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {NAV.map((item) => {
              const on = item === active;
              return (
                <a key={item} href="#" onClick={(e) => { e.preventDefault(); nav(item); }}
                  style={{
                    padding: "7px 11px", borderRadius: "var(--radius-sm)", textDecoration: "none",
                    fontFamily: "var(--font-body)", fontSize: 14, fontWeight: on ? 600 : 500,
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
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {!isMobile && (
            <Button variant="accent" size="sm" iconRight="arrow-right" onClick={() => nav("Contact")}>Request Consultation</Button>
          )}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: "var(--radius-md)", background: "none", border: "1px solid var(--border-default)", cursor: "pointer", color: "var(--navy-800)" }}
            >
              <Icon name={menuOpen ? "x" : "menu"} size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <div style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--glass-bg)", backdropFilter: "var(--blur-md)", WebkitBackdropFilter: "var(--blur-md)" }}>
          <nav style={{ padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 2 }}>
            {NAV.map((item) => {
              const on = item === active;
              return (
                <a key={item} href="#" onClick={(e) => { e.preventDefault(); nav(item); }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "13px 16px", borderRadius: "var(--radius-md)", textDecoration: "none",
                    fontFamily: "var(--font-body)", fontSize: 16, fontWeight: on ? 600 : 500,
                    color: on ? "var(--navy-800)" : "var(--gray-700)",
                    background: on ? "var(--aqua-50)" : "transparent",
                  }}
                >
                  {item}
                  {on && <Icon name="chevron-right" size={17} color="var(--aqua-600)" />}
                </a>
              );
            })}
            <div style={{ marginTop: 10, paddingTop: 14, borderTop: "1px solid var(--border-subtle)" }}>
              <Button variant="accent" fullWidth iconRight="arrow-right" onClick={() => nav("Contact")}>Request Consultation</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer({ onNavigate }) {
  const { Icon } = DS;
  const isMobile = window.SF_useMedia('(max-width: 768px)');
  const cols = [
    { title: "Solutions", links: ["Pumping Systems", "GRP Tanks", "VFD Systems", "Industrial Valves", "Hot Water Systems", "Water Treatment"] },
    { title: "Company", links: ["About", "Projects", "Industries", "Resources", "Contact"] },
    { title: "Support", links: ["Request Consultation", "Technical Resources", "Datasheets", "Maintenance (AMC)", "Emergency Support"] },
  ];
  return (
    <footer style={{ background: "var(--gradient-navy)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-wide)", margin: "0 auto", padding: isMobile ? "48px 20px 28px" : "72px 32px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr 1fr 1fr", gap: isMobile ? 36 : 48, paddingBottom: isMobile ? 32 : 48, borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: isMobile ? "100%" : 300 }}>
            <img src="assets/logos/superfluids-wordmark-white.png" alt="Superfluids" style={{ height: 28, alignSelf: "flex-start" }} />
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--text-on-dark-secondary)" }}>
              Complete water & fluid engineering solutions across the UAE — design, supply, installation and maintenance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
              <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-on-dark-secondary)", lineHeight: 1.5 }}><Icon name="map-pin" size={16} color="var(--aqua-400)" style={{ marginTop: 2, flexShrink: 0 }} /> 216 Arjumand Building, Dubai Investment Park 1, Green Community Village, Dubai, UAE</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-on-dark-secondary)" }}><Icon name="phone" size={16} color="var(--aqua-400)" /> +971 55 924 3822</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-on-dark-secondary)" }}><Icon name="mail" size={16} color="var(--aqua-400)" /> sales@superfluids.com</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "1fr", gap: isMobile ? 24 : 0 }}>
            {/* On mobile, show all 3 link columns side by side in one row */}
            {isMobile ? cols.map((col) => (
              <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--white)" }}>{col.title}</span>
                {col.links.map((l) => {
                  const dest = NAV.includes(l) ? l : (l.includes("Pump") || l.includes("Tank") || l.includes("VFD") || l.includes("Valve") || l.includes("Hot Water") || l === "Water Treatment") ? "Products" : (l.includes("Consultation") || l.includes("Emergency")) ? "Contact" : l.includes("Resource") || l.includes("Datasheet") ? "Resources" : l.includes("Maintenance") || l.includes("AMC") ? "Services" : null;
                  return (
                    <a key={l} href="#" onClick={(e) => { e.preventDefault(); if (dest) onNavigate(dest); }} style={{ fontSize: 13, color: "var(--text-on-dark-secondary)", textDecoration: "none", lineHeight: 1.5 }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--aqua-400)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-on-dark-secondary)"}>{l}</a>
                  );
                })}
              </div>
            )) : null}
          </div>
          {!isMobile && cols.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--white)" }}>{col.title}</span>
              {col.links.map((l) => {
                const dest = NAV.includes(l) ? l : (l.includes("Pump") || l.includes("Tank") || l.includes("VFD") || l.includes("Valve") || l.includes("Hot Water") || l === "Water Treatment") ? "Products" : (l.includes("Consultation") || l.includes("Emergency")) ? "Contact" : l.includes("Resource") || l.includes("Datasheet") ? "Resources" : l.includes("Maintenance") || l.includes("AMC") ? "Services" : null;
                return (
                  <a key={l} href="#" onClick={(e) => { e.preventDefault(); if (dest) onNavigate(dest); }} style={{ fontSize: 14, color: "var(--text-on-dark-secondary)", textDecoration: "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--aqua-400)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-on-dark-secondary)"}>{l}</a>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13, color: "var(--text-on-dark-secondary)" }}>© 2026 Superfluids Engineering LLC. All rights reserved.</span>
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
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
