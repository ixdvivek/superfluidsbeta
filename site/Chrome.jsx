// ============================================================
// Superfluids — floating pill nav + expanding overlay, and footer
// ============================================================

const K = window.SFKit;
const D = window.SFData;

// WebP is 37KB against 274KB for the source PNG, which stays as the
// fallback. Used in the pill, the overlay header and the footer.
function Wordmark({ className }) {
  return (
    <picture>
      <source srcSet="assets/logos/superfluids-wordmark-white.webp" type="image/webp" />
      <img src="assets/logos/superfluids-wordmark-white.png" alt="Superfluids" className={className} />
    </picture>
  );
}

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
            "flex h-14 items-center gap-1.5 rounded-full bg-navy-900/95 py-2 pl-6 pr-2 shadow-xl ring-1 ring-white/10 backdrop-blur-md " +
            (open ? "pointer-events-none" : "pointer-events-auto")
          }
        >
          {/* The wordmark's droplet descender fills the lower half of the
              asset, so the word alone reads far smaller than the box.
              Sized up accordingly and nudged down to optically centre the
              word rather than the bounding box. */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); go("Home"); }}
            aria-label="Superfluids — home"
            className="flex h-11 items-center pr-4"
          >
            <Wordmark className="block h-[30px] w-auto translate-y-[5px] sm:h-[34px]" />
          </a>

          <span className="h-7 w-px bg-white/15" aria-hidden="true" />

          <a
            href={"tel:" + D.company.phone.replace(/\s/g, "")}
            aria-label={"Call Superfluids on " + D.company.phone}
            title={D.company.phone}
            className="ml-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-aqua-600 text-navy-900 transition-colors duration-200 ease-out hover:bg-aqua-400"
          >
            <Icon name="phone" size={17} />
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-200 ease-out hover:bg-white/10"
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
              "absolute inset-x-3 top-3 mx-auto flex max-h-[calc(100vh-24px)] max-w-[1080px] flex-col " +
              "overflow-y-auto rounded-2xl bg-navy-900 p-5 shadow-overlay ring-1 ring-white/10 outline-none " +
              "transition-all duration-[420ms] ease-out sm:inset-x-6 sm:top-5 sm:p-7 " +
              (mounted ? "translate-y-0 scale-100 opacity-100" : "-translate-y-3 scale-[0.98] opacity-0")
            }
          >
            {/* panel header */}
            <div className="flex items-center justify-between">
              <Wordmark className="h-9 w-auto translate-y-[4px] sm:h-10" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-1 flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors duration-200 ease-out hover:bg-white/10 hover:text-white"
              >
                <Icon name="x" size={22} />
              </button>
            </div>

            {/* body */}
            <div className="mt-6 grid gap-7 sm:mt-7 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
              <div className="flex flex-col">
                {/* primary */}
                <nav className="flex flex-col">
                  {D.navPrimary.map((label, i) => {
                    const route = NAV_ROUTES[label];
                    const on = route === active;
                    return (
                      <a
                        key={label}
                        href="#"
                        onClick={(e) => { e.preventDefault(); go(route); }}
                        style={{ transitionDelay: mounted ? `${80 + i * 40}ms` : "0ms" }}
                        className={
                          "group flex items-center justify-between border-b border-white/10 py-2.5 " +
                          "text-lg font-medium uppercase tracking-snug transition-all duration-500 ease-out sm:text-xl " +
                          (mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0") + " " +
                          (on ? "text-aqua-400" : "text-white/85 hover:text-white")
                        }
                      >
                        <span className="flex items-baseline gap-3.5">
                          <span className="sf-num text-[11px] font-semibold tracking-eyebrow text-white/25">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {label}
                        </span>
                        <span className="text-white/25 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-aqua-400">
                          <Icon name="arrow-right" size={17} />
                        </span>
                      </a>
                    );
                  })}
                </nav>

                {/* secondary — compact horizontal row */}
                <div
                  style={{ transitionDelay: mounted ? "250ms" : "0ms" }}
                  className={
                    "mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 transition-all duration-500 ease-out " +
                    (mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0")
                  }
                >
                  {D.navSecondary.map((label) => {
                    const route = NAV_ROUTES[label];
                    const on = route === active;
                    return (
                      <a
                        key={label}
                        href="#"
                        onClick={(e) => { e.preventDefault(); go(route); }}
                        className={
                          "text-[13px] font-medium uppercase tracking-eyebrow transition-colors duration-200 ease-out " +
                          (on ? "text-aqua-400" : "text-white/55 hover:text-white")
                        }
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* feature card + actions */}
              <div
                style={{ transitionDelay: mounted ? "230ms" : "0ms" }}
                className={
                  "flex flex-col gap-2.5 transition-all duration-500 ease-out " +
                  (mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
                }
              >
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); go("Projects"); }}
                  className="group relative hidden flex-1 overflow-hidden rounded-xl bg-navy-800 ring-1 ring-white/10 lg:block"
                  style={{ minHeight: 130 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,183,199,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.10) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      maskImage: "radial-gradient(120% 110% at 70% 25%, #000 30%, transparent 80%)",
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(70% 60% at 72% 28%, rgba(0,183,199,0.20), transparent 62%)" }}
                  />
                  <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-aqua-400">
                        Case studies
                      </span>
                      <span className="text-[15px] font-medium tracking-snug text-white">
                        2,500+ projects across the GCC
                      </span>
                    </span>
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                      <Icon name="arrow-right" size={15} />
                    </span>
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); go("Brands"); }}
                    className="rounded-lg px-3.5 py-2.5 text-[13px] text-white/70 ring-1 ring-white/10 transition-colors duration-200 ease-out hover:bg-white/5 hover:text-white"
                  >
                    Brands &amp; Partners
                  </a>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); go("Contact"); }}
                    className="flex items-center justify-between rounded-lg bg-aqua-600 px-3.5 py-2.5 text-[13px] font-medium text-navy-900 transition-colors duration-200 ease-out hover:bg-aqua-400"
                  >
                    Request a Quote <Icon name="arrow-right" size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* panel footer */}
            <div className="mt-6 flex flex-col gap-1.5 border-t border-white/10 pt-4 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
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
          <Wordmark className="block h-7" />
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
