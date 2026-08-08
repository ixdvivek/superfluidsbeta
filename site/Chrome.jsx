// ============================================================
// Superfluids — header & footer
// ============================================================

const K = window.SFKit;
const D = window.SFData;

// Nav label → route key
const NAV_ROUTES = {
  "Home": "Home",
  "About": "About",
  "Products & Services": "Products",
  "Services": "Services",
  "Industries": "Industries",
  "Projects": "Projects",
  "Contact": "Contact",
};

function Header({ active, onNavigate }) {
  const { Button, Icon, useMedia } = K;
  const isMobile = useMedia("(max-width: 1040px)");
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const go = React.useCallback((r) => { setOpen(false); onNavigate(r); }, [onNavigate]);

  React.useEffect(() => {
    const el = document.querySelector("[data-scroll]");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 6);
    el.addEventListener("scroll", fn, { passive: true });
    return () => el.removeEventListener("scroll", fn);
  }, []);

  React.useEffect(() => { if (isMobile === false) setOpen(false); }, [isMobile]);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 200,
      background: scrolled || open ? "rgba(255,255,255,0.86)" : "var(--white)",
      backdropFilter: scrolled || open ? "var(--blur-md)" : "none",
      WebkitBackdropFilter: scrolled || open ? "var(--blur-md)" : "none",
      borderBottom: "1px solid " + (scrolled || open ? "var(--gray-200)" : "transparent"),
      transition: "background var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto",
        padding: "0 var(--gutter)", height: 74,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("Home"); }}
           style={{ display: "flex", alignItems: "center", flexShrink: 0 }} aria-label="Superfluids — home">
          <img src="assets/logos/superfluids-wordmark-navy.png" alt="Superfluids" style={{ height: 26, display: "block" }} />
        </a>

        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {D.nav.map((label) => {
              const route = NAV_ROUTES[label];
              const on = route === active;
              return (
                <a key={label} href="#" onClick={(e) => { e.preventDefault(); go(route); }}
                  style={{
                    position: "relative", padding: "9px 14px",
                    fontSize: 14.5, fontWeight: on ? 550 : 450,
                    letterSpacing: "-0.01em",
                    color: on ? "var(--navy-800)" : "var(--gray-600)",
                    transition: "color var(--duration-base) var(--ease-out)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--navy-800)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = on ? "var(--navy-800)" : "var(--gray-600)"; }}
                >
                  {label}
                  {on && <span style={{
                    position: "absolute", left: 14, right: 14, bottom: 2, height: 2,
                    background: "var(--aqua-600)", borderRadius: 2,
                  }} />}
                </a>
              );
            })}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {!isMobile && (
            <Button variant="primary" size="sm" icon="arrow-right" onClick={() => go("Contact")}>
              Request a Quote
            </Button>
          )}
          {isMobile && (
            <button onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
              style={{
                width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center",
                border: "1px solid var(--gray-300)", borderRadius: "var(--radius-sm)",
                background: "var(--white)", color: "var(--navy-800)", cursor: "pointer",
              }}>
              <Icon name={open ? "x" : "menu"} size={21} />
            </button>
          )}
        </div>
      </div>

      {isMobile && open && (
        <div style={{ borderTop: "1px solid var(--gray-200)", background: "var(--white)" }}>
          <nav style={{ padding: "10px var(--gutter) 22px", display: "flex", flexDirection: "column", gap: 1 }}>
            {D.nav.map((label) => {
              const route = NAV_ROUTES[label];
              const on = route === active;
              return (
                <a key={label} href="#" onClick={(e) => { e.preventDefault(); go(route); }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 4px", fontSize: 16.5,
                    fontWeight: on ? 550 : 450, letterSpacing: "-0.015em",
                    color: on ? "var(--navy-800)" : "var(--gray-700)",
                    borderBottom: "1px solid var(--gray-100)",
                  }}>
                  {label}
                  <Icon name="arrow-right" size={16} color={on ? "var(--aqua-600)" : "var(--gray-300)"} />
                </a>
              );
            })}
            <div style={{ marginTop: 18 }}>
              <Button variant="primary" size="lg" fullWidth icon="arrow-right" onClick={() => go("Contact")}>
                Request a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer({ onNavigate }) {
  const { Icon, useMobile } = K;
  const isMobile = useMobile();
  const c = D.company;

  const Col = ({ label, children }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <span style={{
        fontSize: 12, fontWeight: 600, letterSpacing: "0.14em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.44)",
      }}>{label}</span>
      {children}
    </div>
  );

  const link = {
    fontSize: 14.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.7,
    transition: "color var(--duration-base) var(--ease-out)", cursor: "pointer",
  };
  const hoverOn = (e) => { e.currentTarget.style.color = "var(--aqua-400)"; };
  const hoverOff = (e) => { e.currentTarget.style.color = "rgba(255,255,255,0.72)"; };

  return (
    <footer style={{ background: "var(--navy-900)", color: "var(--white)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: isMobile ? "56px var(--gutter) 28px" : "80px var(--gutter) 32px" }}>

        <div style={{ paddingBottom: isMobile ? 36 : 52 }}>
          <img src="assets/logos/superfluids-wordmark-white.png" alt="Superfluids" style={{ height: 28, display: "block" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr 1fr",
          gap: isMobile ? 34 : 48,
          paddingBottom: isMobile ? 32 : 48,
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}>
          <Col label="Location">
            <span style={{ fontSize: 14.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: 320 }}>
              {c.address}
            </span>
          </Col>

          <Col label="Our Services">
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {D.services.map((s) => (
                <a key={s.slug} href="#" style={link} onMouseEnter={hoverOn} onMouseLeave={hoverOff}
                   onClick={(e) => { e.preventDefault(); onNavigate({ name: "ServiceDetail", param: s.slug }); }}>
                  {s.name}
                </a>
              ))}
              <a href="#" style={{ ...link, color: "var(--aqua-400)" }}
                 onClick={(e) => { e.preventDefault(); onNavigate("Brands"); }}>
                Our Brands & Partners
              </a>
            </div>
          </Col>

          <Col label="Contact">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href={"tel:" + c.phone.replace(/\s/g, "")} style={{ ...link, display: "inline-flex", alignItems: "center", gap: 9 }}
                 onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                <Icon name="phone" size={15} color="var(--aqua-400)" /> {c.phone}
              </a>
              <a href={"mailto:" + c.email} style={{ ...link, display: "inline-flex", alignItems: "center", gap: 9 }}
                 onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                <Icon name="mail" size={15} color="var(--aqua-400)" /> {c.email}
              </a>
              <span style={{ ...link, display: "inline-flex", alignItems: "center", gap: 9, cursor: "default" }}>
                <Icon name="clock" size={15} color="var(--aqua-400)" /> Sun–Thu, 08:00–18:00 GST
              </span>
            </div>
          </Col>
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 26, gap: 14, flexWrap: "wrap",
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Superfluids. All rights reserved.
          </span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            {D.markets.join(" · ")}
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SF_Header: Header, SF_Footer: Footer });
