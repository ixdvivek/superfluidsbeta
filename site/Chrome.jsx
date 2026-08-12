// ============================================================
// Superfluids — floating pill nav + expanding overlay, and footer
// ============================================================

const K = window.SFKit;
const D = window.SFData;

// Matches the panel's own rounded-3xl. The collapsed clip rounds at 28px,
// the pill's capsule radius, so the two shapes coincide exactly.
const CLIP_OPEN = "inset(0px 0px 0px 0px round 24px)";

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
  // closed → opening → open → closing → closed. The panel stays mounted
  // through "closing" so it can animate back into the pill; a boolean
  // would unmount it instantly and there would be no exit.
  const [phase, setPhase] = React.useState("closed");
  const open = phase === "opening" || phase === "open";
  const panelRef = React.useRef(null);
  const pillRef = React.useRef(null);
  const pillRect = React.useRef(null);
  const closeTimer = React.useRef(null);

  const setOpen = React.useCallback((next) => {
    setPhase((cur) => {
      const isOpen = cur === "opening" || cur === "open";
      const want = typeof next === "function" ? next(isOpen) : next;
      if (want === isOpen) return cur;
      return want ? "opening" : (cur === "closed" ? "closed" : "closing");
    });
  }, []);

  const go = React.useCallback((r) => { setOpen(false); onNavigate(r); }, [onNavigate, setOpen]);

  // The panel sits at its final layout the whole time; what animates is a
  // clip rectangle growing out of the pill. Scaling — the obvious approach —
  // squashes the type and multiplies the corner radius, so a 24px corner
  // starts life as a ~70px blob. Clipping leaves both alone: the menu is
  // full-size from the first frame and the corners never change.
  const clipToPill = React.useCallback(() => {
    const panel = panelRef.current, f = pillRect.current;
    if (!panel || !f) return null;
    const p = panel.getBoundingClientRect();
    if (!p.width || !p.height) return null;
    const px = (n) => Math.max(0, Math.round(n)) + "px";
    return "inset(" + px(f.top - p.top) + " " + px(p.right - f.right) + " " +
           px(p.bottom - f.bottom) + " " + px(f.left - p.left) + " round 28px)";
  }, []);

  React.useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (phase === "opening") {
      // Measured while the pill is still at rest — by "closing" it has been
      // nudged up 8px on its way out, which would aim the collapse high.
      if (pillRef.current) pillRect.current = pillRef.current.getBoundingClientRect();
      const start = clipToPill();
      if (!start) { setPhase("open"); return; }

      // The transition must be suppressed while the start state is applied.
      // Leave it on and the panel animates *into* the collapsed box instead
      // of starting there, so releasing a frame later moves it barely at all.
      panel.style.transition = "none";
      panel.style.clipPath = start;
      void panel.offsetWidth;              // commit the start state
      panel.style.transition = "";         // hand back to .sf-morph

      const id = requestAnimationFrame(() => {
        panel.style.clipPath = CLIP_OPEN;
        setPhase("open");
      });
      return () => cancelAnimationFrame(id);
    }

    if (phase === "closing") {
      const reduced = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      panel.style.clipPath = clipToPill() || CLIP_OPEN;
      void panel.offsetWidth;              // start the transition now, not
                                           // whenever the next recalc lands
      // Unmount when the clip has actually landed on the pill's box — both are
      // navy and occupy the same rect by then, so the handover is invisible.
      // The timer is only a fallback: transitionend never fires if the
      // transition is suppressed or interrupted.
      const done = (e) => { if (!e || e.target === panel) setPhase("closed"); };
      panel.addEventListener("transitionend", done);
      closeTimer.current = setTimeout(done, reduced ? 0 : 420);
      return () => {
        panel.removeEventListener("transitionend", done);
        clearTimeout(closeTimer.current);
      };
    }
  }, [phase, clipToPill]);

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
             panel carries its own logo and close control. It comes back
             with no transition: the collapsing panel lands on exactly this
             box in the same navy, so a fade would flash a gap. ─────── */}
      <div
        className={
          "pointer-events-none fixed inset-x-0 top-4 z-[220] flex justify-center px-4 transition-all ease-out sm:top-6 " +
          (phase === "closed"
            ? "translate-y-0 opacity-100 duration-0"
            : "-translate-y-2 opacity-0 duration-200")
        }
        aria-hidden={phase !== "closed"}
      >
        <div
          ref={pillRef}
          className={
            "flex h-14 items-center gap-3 rounded-full bg-brand-navy py-1 pl-8 pr-3 shadow-xl " +
            (phase === "closed" ? "pointer-events-auto" : "pointer-events-none")
          }
        >
          {/* No optical nudge any more: the Figma frame already sits the
              word where it belongs, with the droplet's descender balanced
              against the space above. Heights are set so the word renders
              at the size it did before — the new frame carries padding the
              old crop did not. */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); go("Home"); }}
            aria-label="Superfluids — home"
            className="flex items-center pr-4"
          >
            <K.Logo variant="wordmark-white" className="block h-[36px] w-auto sm:h-[41px]" />
          </a>

          <a
            href={"tel:" + D.company.phone.replace(/\s/g, "")}
            aria-label={"Call Superfluids on " + D.company.phone}
            title={D.company.phone}
            tabIndex={phase === "closed" ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-aqua text-brand-navy transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-aqua-400 hover:shadow-md"
          >
            <Icon name="phone" size={19} />
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            tabIndex={phase === "closed" ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-aqua hover:shadow-md"
          >
            <Icon name={open ? "x" : "menu"} size={19} />
          </button>
        </div>
      </div>

      {/* ── Overlay panel ─────────────────────────────── */}
      {phase !== "closed" && (
        <div className="fixed inset-0 z-[210]">
          <div
            onClick={() => setOpen(false)}
            className={
              "absolute inset-0 bg-navy-900/45 backdrop-blur-sm transition-opacity duration-300 ease-out " +
              (phase === "open" ? "opacity-100" : "opacity-0")
            }
          />

          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={
              // Width is set by the content, not the viewport: the longest nav
              // row needs 278px and the panel footer 647px, so 760px is about
              // as tight as this copy goes before things wrap.
              // No ring or drop shadow: clip-path cuts both away mid-animation,
              // so they would pop in at the end. The scrim does the separating.
              "sf-morph absolute inset-x-3 top-3 mx-auto flex max-h-[calc(100vh-24px)] max-w-[760px] flex-col " +
              "overflow-hidden rounded-3xl bg-brand-navy p-5 outline-none " +
              "sm:inset-x-6 sm:top-5 sm:p-7"
            }
          >
            {/* Nothing to hide or stagger: the contents are at full size the
                whole time and the growing clip reveals them, top-down and
                centre-out, exactly as the reference does. */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* panel header */}
            <div className="flex items-center justify-between">
              <K.Logo variant="wordmark-white" className="h-[44px] w-auto sm:h-[48px]" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors duration-200 ease-out hover:bg-white/10 hover:text-white"
              >
                <Icon name="x" size={22} />
              </button>
            </div>

            {/* body */}
            {/* min-w-0 on both tracks: a grid item defaults to min-content,
                which lets the long nav labels push the panel wider than its
                max-width and put a scrollbar under it. */}
            <div className="mt-6 grid gap-7 sm:mt-7 lg:grid-cols-[1fr_264px] lg:gap-9">
              <div className="flex min-w-0 flex-col">
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
                        className={
                          "group flex items-center justify-between border-b border-white/10 py-2.5 " +
                          "text-lg font-medium uppercase tracking-snug transition-colors duration-200 ease-out sm:text-xl " +
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
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
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
              <div className="flex min-w-0 flex-col gap-2.5">
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

                {/* Side by side these two need 309px; the rail is 264, so they
                    stack once the two-column layout kicks in. */}
                <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-1">
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
        </div>
      )}
    </React.Fragment>
  );
}

// Footer per Figma node 6:2. Two bands: three text columns on top, then
// an oversized wordmark paired with the contact block. The design drops
// the copyright and markets line — they exist in the file but the
// designer left the frame hidden.
function Footer({ onNavigate }) {
  const { Icon, Logo } = K;
  const c = D.company;

  // Six services split across two equal columns, in the order the design
  // lists them.
  const half = Math.ceil(D.services.length / 2);
  const serviceCols = [D.services.slice(0, half), D.services.slice(half)];

  const labelCls = "text-eyebrow font-semibold uppercase tracking-eyebrow text-white/40";
  const bodyCls = "text-[14.5px] leading-7 tracking-[-0.16px] text-white/70";
  const linkCls = bodyCls + " transition-colors duration-200 ease-out hover:text-aqua-400";

  const contact = [
    { icon: "phone", text: c.phone, href: "tel:" + c.phone.replace(/\s/g, "") },
    { icon: "mail", text: c.email, href: "mailto:" + c.email },
    { icon: "clock", text: "Sun–Thu, 08:00–18:00 GST" },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-container px-5 pb-8 pt-14 sm:px-gutter sm:pt-20">

        {/* ── columns ─────────────────────────────────── */}
        <div className="grid gap-9 pb-10 sm:pb-12 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-3.5">
            <span className={labelCls}>Location</span>
            <span className={"max-w-[320px] " + bodyCls}>
              {c.addressLines.map((line) => (
                <React.Fragment key={line}>{line}<br /></React.Fragment>
              ))}
            </span>
          </div>

          {serviceCols.map((group, i) => (
            <div key={i} className="flex flex-col gap-3.5">
              {/* The design repeats the heading over both service columns.
                  The second is hidden from assistive tech so the group is
                  announced once rather than twice. */}
              <span className={labelCls} aria-hidden={i > 0 ? "true" : undefined}>
                Our Services
              </span>
              <div className="flex flex-col gap-1.5">
                {group.map((s) => (
                  <a
                    key={s.slug}
                    href="#"
                    className={linkCls}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate({ name: "ServiceDetail", param: s.slug });
                    }}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── wordmark + contact ──────────────────────── */}
        <div className="flex flex-col gap-10 pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          {/* 579px is the Figma frame's own width, which lands the glyph on
              the 534×157 the design measures. */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onNavigate("Home"); }}
            aria-label="Superfluids — home"
            className="block w-[282px] max-w-full sm:w-[433px] lg:w-[579px]"
          >
            <Logo variant="wordmark-white" className="block h-auto w-full" />
          </a>

          <div className="flex flex-none flex-col gap-2.5">
            {contact.map((row) => {
              const inner = (
                <React.Fragment>
                  <span className="flex h-[15px] w-[15px] flex-none items-center justify-center">
                    <Icon name={row.icon} size={15} color="var(--aqua-400)" />
                  </span>
                  {row.text}
                </React.Fragment>
              );
              return row.href ? (
                <a key={row.icon} href={row.href} className={"inline-flex items-center gap-2.5 " + linkCls}>
                  {inner}
                </a>
              ) : (
                <span key={row.icon} className={"inline-flex items-center gap-2.5 " + bodyCls}>
                  {inner}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}

Object.assign(window, { SF_Header: Header, SF_Footer: Footer });
