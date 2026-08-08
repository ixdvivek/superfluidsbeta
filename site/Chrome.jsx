// ============================================================
// Superfluids — floating pill nav + expanding overlay, and footer
// ============================================================

const K = window.SFKit;
const D = window.SFData;

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
  const { Icon } = K;
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const panelRef = React.useRef(null);

  const go = React.useCallback((r) => { setOpen(false); onNavigate(r); }, [onNavigate]);

  // Mount then animate, so the panel transitions in rather than snapping.
  React.useEffect(() => {
    if (open) { const t = setTimeout(() => setMounted(true), 10); return () => clearTimeout(t); }
    setMounted(false);
  }, [open]);

  // Escape to close; lock the scroll container while open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const app = document.getElementById("app");
    const prev = app ? app.style.overflow : "";
    if (app) app.style.overflow = "hidden";
    if (panelRef.current) panelRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      if (app) app.style.overflow = prev;
    };
  }, [open]);

  return (
    <React.Fragment>
      {/* ── Floating pill — hidden while the panel is open, since the
             panel carries its own logo and close control. ────────── */}
      <div
        className={
          "pointer-events-none fixed inset-x-0 top-4 z-[220] flex justify-center px-4 transition-all duration-300 ease-out sm:top-6 " +
          (open ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100")
        }
        aria-hidden={open}
      >
        <div
          className={
            "flex items-center gap-1 rounded-full bg-navy-900/95 py-2 pl-5 pr-2 shadow-xl ring-1 ring-white/10 backdrop-blur-md " +
            (open ? "pointer-events-none" : "pointer-events-auto")
          }
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); go("Home"); }}
            aria-label="Superfluids — home"
            className="flex items-center pr-3"
          >
            <img
              src="assets/logos/superfluids-wordmark-white.png"
              alt="Superfluids"
              className="block h-[22px] w-auto sm:h-6"
            />
          </a>
          <span className="h-6 w-px bg-white/15" aria-hidden="true" />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-200 ease-out hover:bg-white/10"
          >
            <Icon name={open ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {/* ── Overlay panel ─────────────────────────────── */}
      {open && (
        <div className="fixed inset-0 z-[210]">
          <div
            onClick={() => setOpen(false)}
            className={
              "absolute inset-0 bg-navy-900/45 backdrop-blur-sm transition-opacity duration-300 ease-out " +
              (mounted ? "opacity-100" : "opacity-0")
            }
          />

          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={
              "absolute inset-x-3 top-3 bottom-3 mx-auto flex max-w-container flex-col overflow-y-auto " +
              "rounded-2xl bg-navy-900 p-6 shadow-overlay ring-1 ring-white/10 outline-none " +
              "transition-all duration-[420ms] ease-out sm:inset-x-6 sm:top-5 sm:bottom-5 sm:p-10 " +
              (mounted ? "translate-y-0 scale-100 opacity-100" : "-translate-y-3 scale-[0.98] opacity-0")
            }
          >
            {/* panel header */}
            <div className="flex items-start justify-between">
              <img
                src="assets/logos/superfluids-wordmark-white.png"
                alt="Superfluids"
                className="h-7 w-auto sm:h-8"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-1 -mt-1 flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors duration-200 ease-out hover:bg-white/10 hover:text-white"
              >
                <Icon name="x" size={24} />
              </button>
            </div>

            {/* body */}
            <div className="mt-10 grid flex-1 gap-10 lg:mt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <nav className="flex flex-col">
                {D.nav.map((label, i) => {
                  const route = NAV_ROUTES[label];
                  const on = route === active;
                  return (
                    <a
                      key={label}
                      href="#"
                      onClick={(e) => { e.preventDefault(); go(route); }}
                      style={{ transitionDelay: mounted ? `${90 + i * 45}ms` : "0ms" }}
                      className={
                        "group flex items-center justify-between border-b border-white/10 py-4 " +
                        "text-2xl font-medium uppercase tracking-snug transition-all duration-500 ease-out sm:text-3xl " +
                        (mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0") + " " +
                        (on ? "text-aqua-400" : "text-white/80 hover:text-white")
                      }
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="sf-num text-xs font-semibold tracking-eyebrow text-white/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {label}
                      </span>
                      <span className="translate-x-0 text-white/25 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-aqua-400">
                        <Icon name="arrow-right" size={20} />
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* feature card */}
              <div
                style={{ transitionDelay: mounted ? "260ms" : "0ms" }}
                className={
                  "flex flex-col gap-4 transition-all duration-500 ease-out " +
                  (mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
                }
              >
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); go("Projects"); }}
                  className="group relative block flex-1 overflow-hidden rounded-xl bg-navy-800 ring-1 ring-white/10"
                  style={{ minHeight: 220 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,183,199,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.10) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                      maskImage: "radial-gradient(120% 110% at 70% 25%, #000 30%, transparent 80%)",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(70% 60% at 72% 28%, rgba(0,183,199,0.20), transparent 62%)" }}
                  />
                  <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <span className="flex flex-col gap-1">
                      <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-400">
                        Case studies
                      </span>
                      <span className="text-xl font-medium tracking-snug text-white">
                        2,500+ projects across the GCC
                      </span>
                    </span>
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                      <Icon name="arrow-right" size={18} />
                    </span>
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); go("Brands"); }}
                    className="rounded-lg px-4 py-3 text-sm text-white/70 ring-1 ring-white/10 transition-colors duration-200 ease-out hover:bg-white/5 hover:text-white"
                  >
                    Brands &amp; Partners
                  </a>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); go("Contact"); }}
                    className="flex items-center justify-between rounded-lg bg-aqua-600 px-4 py-3 text-sm font-medium text-navy-900 transition-colors duration-200 ease-out hover:bg-aqua-400"
                  >
                    Request a Quote <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* panel footer */}
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
              <span>Complete water &amp; fluid engineering across the GCC.</span>
              <span className="flex flex-wrap items-center gap-x-5 gap-y-1">
                <a href={"tel:" + D.company.phone.replace(/\s/g, "")} className="transition-colors hover:text-aqua-400">
                  {D.company.phone}
                </a>
                <a href={"mailto:" + D.company.email} className="transition-colors hover:text-aqua-400">
                  {D.company.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Footer({ onNavigate }) {
  const { Icon } = K;
  const c = D.company;

  const Col = ({ label, children }) => (
    <div className="flex flex-col gap-3.5">
      <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-white/40">{label}</span>
      {children}
    </div>
  );

  const linkCls = "text-[14.5px] leading-7 text-white/70 transition-colors duration-200 ease-out hover:text-aqua-400";

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-container px-5 pb-8 pt-14 sm:px-gutter sm:pt-20">
        <div className="pb-9 sm:pb-13">
          <img src="assets/logos/superfluids-wordmark-white.png" alt="Superfluids" className="block h-7" />
        </div>

        <div className="grid gap-9 border-b border-white/10 pb-8 sm:pb-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
          <Col label="Location">
            <span className="max-w-[320px] text-[14.5px] leading-7 text-white/70">{c.address}</span>
          </Col>

          <Col label="Our Services">
            <div className="flex flex-col gap-1.5">
              {D.services.map((s) => (
                <a key={s.slug} href="#" className={linkCls}
                   onClick={(e) => { e.preventDefault(); onNavigate({ name: "ServiceDetail", param: s.slug }); }}>
                  {s.name}
                </a>
              ))}
              <a href="#" className="text-[14.5px] leading-7 text-aqua-400 transition-colors hover:text-aqua-600"
                 onClick={(e) => { e.preventDefault(); onNavigate("Brands"); }}>
                Our Brands &amp; Partners
              </a>
            </div>
          </Col>

          <Col label="Contact">
            <div className="flex flex-col gap-2.5">
              <a href={"tel:" + c.phone.replace(/\s/g, "")} className={"inline-flex items-center gap-2.5 " + linkCls}>
                <Icon name="phone" size={15} color="var(--aqua-400)" /> {c.phone}
              </a>
              <a href={"mailto:" + c.email} className={"inline-flex items-center gap-2.5 " + linkCls}>
                <Icon name="mail" size={15} color="var(--aqua-400)" /> {c.email}
              </a>
              <span className="inline-flex items-center gap-2.5 text-[14.5px] leading-7 text-white/70">
                <Icon name="clock" size={15} color="var(--aqua-400)" /> Sun–Thu, 08:00–18:00 GST
              </span>
            </div>
          </Col>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Superfluids. All rights reserved.</span>
          <span>{D.markets.join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SF_Header: Header, SF_Footer: Footer });
