// ============================================================
// Superfluids — Home
// Section order follows the approved wireframe. Styling is Tailwind.
// ============================================================

// "Engineering partners" cards. One card is open at a time: it grows to
// twice the width of the others and reveals its photo beside the text.
// The first starts open; hover, focus or a tap opens another, and the last
// one opened stays open when the pointer leaves.
//
// The text column is sized to a closed card's inner width (a container
// query on the row), so the copy never re-wraps while a card opens — only
// the photo slides into the space that opens up.
function SFPartnerCards({ items }) {
  const { Icon, SmartImage, useMedia } = window.SFKit;
  const wide = useMedia("(min-width: 1024px)");
  const [active, setActive] = React.useState(0);

  const GAP = 12, PAD = 28, GROW = 2.4;
  // Closed cards take 1 share of the row, the open card GROW shares.
  const shares = items.length - 1 + GROW;
  const textW = "calc((100cqw - " + GAP * (items.length - 1) + "px) / " + shares + " - " + PAD * 2 + "px)";

  return (
    <div className="rounded-[28px] bg-gray-100 p-2.5 sm:p-3">
      <div
        className={wide ? "flex h-[400px]" : "flex flex-col"}
        style={{ gap: GAP, containerType: wide ? "inline-size" : undefined }}
      >
        {items.map((w, i) => {
          const on = i === active;
          return (
            <button
              key={w.title}
              type="button"
              aria-expanded={on}
              onMouseEnter={wide ? () => setActive(i) : undefined}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={
                "group relative flex min-w-0 overflow-hidden rounded-[20px] bg-white text-left outline-none " +
                "transition-[flex-grow,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
                "focus-visible:ring-2 focus-visible:ring-brand-aqua " +
                (wide ? "flex-row basis-0 " : "flex-col ") +
                (on ? "shadow-card" : "hover:shadow-card")
              }
              style={{ flexGrow: wide ? (on ? GROW : 1) : undefined, padding: PAD, gap: 24 }}
            >
              {/* text column — icon on top, title and copy pinned to the bottom */}
              <span
                className={"flex flex-none flex-col " + (wide ? "h-full" : "")}
                style={{ width: wide ? textW : "100%" }}
              >
                <span className={
                  "flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 " +
                  (on ? "bg-brand-aqua text-brand-navy" : "bg-aqua-50 text-aqua-700 group-hover:bg-aqua-100")
                }>
                  <Icon name={w.icon} size={22} strokeWidth={2} />
                </span>
                <span className={"flex flex-col gap-3 " + (wide ? "mt-auto" : "mt-8")}>
                  {/* Non-breaking hyphens: "Market-Leading" wraps as a word. */}
                  <span className="text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
                    {w.title.replace(/-/g, "\u2011")}
                  </span>
                  <span className="text-pretty text-[15px] leading-relaxed text-gray-500 lg:text-base">
                    {w.description}
                  </span>
                </span>
              </span>

              {/* photo — fills the space the open card gains. On phones it
                  unfolds beneath the text instead. */}
              {wide ? (
                <span
                  aria-hidden={!on}
                  className={
                    "relative min-w-0 flex-1 overflow-hidden rounded-xl transition-opacity duration-500 ease-out " +
                    (on ? "opacity-100 delay-150" : "opacity-0")
                  }
                >
                  <span className="absolute inset-0 [&>div]:!h-full [&>div]:!rounded-xl [&>div>div]:!h-full">
                    <SmartImage src={w.image} alt={w.title} icon={w.icon} ratio="auto" mark position={w.imagePos} style={{ height: "100%", aspectRatio: "auto" }} />
                  </span>
                </span>
              ) : (
                <span
                  aria-hidden={!on}
                  className={"grid transition-[grid-template-rows,opacity] duration-500 ease-out " + (on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                  style={{ marginTop: on ? 0 : -24 }}
                >
                  <span className="min-h-0 overflow-hidden">
                    <SmartImage src={w.image} alt={w.title} icon={w.icon} ratio="16 / 10" mark position={w.imagePos} />
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Core Product Portfolio card, from the Figma frame (uoTagj62uZCjBvcaxMbRu6,
// 18:254). Three resting looks — white, aqua, or a photo under a dark
// gradient — and one hover for all of them: the navy fill spreading from
// the pointer, the same ripple the rest of the site's cards use.
function SFPortfolioCard({ variant = "white", image, glyph, icon, title, description, onClick }) {
  const { Icon, NavGlyph, useRipple } = window.SFKit;
  const r = useRipple();
  const [imgOk, setImgOk] = React.useState(true);
  const photo = variant === "photo";
  const light = variant === "white";

  const iconBox = {
    white: "bg-aqua-50 text-aqua-700",
    aqua: "bg-[rgba(233,250,252,0.3)] text-white",
    photo: "text-white",
  }[variant];

  return (
    <div
      ref={r.ref}
      onClick={onClick}
      onPointerEnter={r.onPointerEnter}
      onPointerLeave={r.onPointerLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(e); } }}
      className={
        "group relative isolate flex h-[251px] cursor-pointer flex-col justify-between overflow-hidden rounded-lg px-[26px] py-7 " +
        "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg " +
        "focus-visible:-translate-y-1 focus-visible:bg-brand-navy focus-visible:outline-none " +
        (light ? "border border-line bg-white hover:border-transparent focus-visible:border-transparent " : "") +
        (variant === "aqua" ? "bg-aqua-600 " : "") +
        (photo ? "bg-navy-800 " : "")
      }
    >
      {photo && image && imgOk && (
        <span aria-hidden="true" className="absolute inset-0 -z-[2]">
          <img src={image} alt="" loading="lazy" onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70" />
        </span>
      )}
      <span {...r.rippleProps} style={{ ...r.rippleProps.style, background: "var(--brand-navy, #000A33)", zIndex: -1 }} />

      <span className={
        "sf-ink flex h-10 w-10 items-center justify-center rounded-sm " + iconBox + " " +
        "group-hover:bg-brand-aqua group-hover:text-brand-navy group-focus-visible:bg-brand-aqua group-focus-visible:text-brand-navy"
      }>
        {glyph ? <NavGlyph name={"material/" + glyph} size={22} /> : <Icon name={icon} size={20} />}
      </span>

      <span className="flex items-end gap-3">
        <span className="flex min-w-0 flex-1 flex-col">
          <span className={
            "sf-ink text-[19px] font-semibold leading-[30.4px] tracking-[-0.38px] " +
            (light ? "text-ink " : "text-white ") + "group-hover:text-white group-focus-visible:text-white"
          }>
            {title}
          </span>
          <span className={
            "sf-ink text-[14.5px] leading-5 tracking-[-0.16px] " +
            (light ? "text-gray-500 " : "text-white ") + "group-hover:text-white/70 group-focus-visible:text-white/70"
          }>
            {description}
          </span>
        </span>
        <span className={
          "sf-ink mb-[3px] flex-none transition-transform duration-300 ease-out group-hover:translate-x-1 " +
          (light ? "text-blue-600 " : "text-white ") + "group-hover:text-brand-aqua group-focus-visible:text-brand-aqua"
        }>
          <Icon name="arrow-right" size={15} />
        </span>
      </span>
    </div>
  );
}

function HomeScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    MediaFrame, InsetCard, CheckList, Tile, VideoBackdrop,
    LogoCylinder, CTABand, Icon, useMobile, SmartImage, ProjectGalleryModal,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const PROJECTS_SHOWN = 6;
  const [showAllProjects, setShowAllProjects] = React.useState(false);
  const [openProject, setOpenProject] = React.useState(null);
  const closeProject = React.useCallback(() => setOpenProject(null), []);
  const projects = showAllProjects ? D.projects : D.projects.slice(0, PROJECTS_SHOWN);

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────
          The section runs a fade-height taller than the fold, and the
          footage covers all of it. The fade to white is an overlay on
          that same footage, so there is no colour to match and no seam
          — matching a flat colour to the video failed because
          object-cover crops differently per viewport and the water is
          moving, so the visible bottom edge is never one fixed value. */}
      <section className="relative overflow-hidden bg-brand-cyan">
        <VideoBackdrop
          src="assets/media/pages/home-hero.mp4"
          webm="assets/media/pages/home-hero.webm"
          poster="assets/media/pages/home-hero.jpg"
          baseClass="bg-brand-cyan"
          filter="none"
          tintClass={null}
          scrim={null}
        />

        {/* the fold itself */}
        <div className="relative flex min-h-[100svh] flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-5 pb-8 pt-28 text-center sm:px-gutter sm:pt-32">
            <Reveal>
              <h1 className="mx-auto max-w-[16ch] text-balance text-[34px] font-bold leading-[1.04] tracking-[-0.04em] text-white sm:max-w-[989px] sm:text-[58px] lg:text-[80px]">
                Complete Fluid Engineering Solutions, Built to Perform.
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-6 max-w-[620px] text-pretty text-[15px] font-medium leading-[1.4] tracking-[-0.03em] text-white sm:mt-8 sm:text-lg">
                Pumping, water storage, heating, cooling and automation —
                engineered as one system.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
                <Button variant="primary" onClick={() => onNavigate("Shop")}>Explore Products</Button>
                <Button variant="white" onClick={() => onNavigate("Contact")}>Get A Quote</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} className="sf-reveal relative pb-10 sm:pb-14">
            <p className="mb-4 text-center text-[13px] font-medium tracking-[-0.02em] text-white sm:text-[15px]">
              Authorised partnership with
            </p>
            <LogoCylinder logos={D.partnerLogos} onDark speed={40} height={72} />
          </Reveal>
        </div>

        {/* fade band — sits below the fold, over the same footage */}
        <div className="relative h-[110px] sm:h-[170px]" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[110px] sm:h-[170px]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 45%, #FFFFFF 100%)" }}
        />
      </section>

      {/* ── COUNTERS ─────────────────────────────────────── */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-container px-5 sm:px-gutter">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-0">
              {D.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={
                    "flex flex-col gap-2 lg:px-9 " +
                    (i > 0 ? "lg:border-l lg:border-line" : "")
                  }
                >
                  <span className="sf-num text-[34px] font-medium leading-none tracking-display text-navy-800 sm:text-[46px]">
                    {s.value}
                    {s.suffix && <span className="text-aqua-600">{s.suffix}</span>}
                  </span>
                  <span className="text-sm leading-snug text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────── */}
      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">
              The technical partner of choice for fluid management and MEP
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-gray-500">
              At Superfluids, we specialise in the marketing, supply and integration of
              state-of-the-art equipment. We bridge the gap between world-class manufacturing
              and site-specific operational excellence — so your facility runs as one
              efficient ecosystem, not a collection of parts.
            </p>
            <CheckList items={[
              "Factory-trained sales and service engineers",
              "Authorised partnerships with 30+ manufacturers",
              "Design verification before anything is ordered",
              "Long-term maintenance and emergency support",
            ]} />
            <div className="mt-1">
              <Button variant="outline" size="md" icon="arrow-right" onClick={() => onNavigate("About")}>
                Learn More About Us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <MediaFrame
              label="Engineering team on site"
              icon="users"
              ratio="4 / 5"
              inset={
                <InsetCard
                  title="Delivered across"
                  value="6"
                  suffix=" markets"
                  caption="UAE · Oman · Saudi Arabia · Qatar · Bahrain · Kuwait"
                />
              }
            />
          </Reveal>
        </Grid>
      </Section>

      {/* ── CORE PRODUCT PORTFOLIO ───────────────────────── */}
      <Section tone="alt">
        <SectionHead
          eyebrow="Core Product Portfolio"
          title="Everything a fluid system needs, from one supplier"
          body="6,500+ premium products across pumping, storage, heating, cooling, control and irrigation."
          style={{ marginBottom: isMobile ? 36 : 56 }}
          action={!isMobile && (
            <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Shop")}>
              Visit the Shop
            </Button>
          )}
        />
        <Grid cols={3} mob={1} gap={20}>
          {D.portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 55}>
              <SFPortfolioCard {...p} onClick={() => onNavigate(p.to || "Shop")} />
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── WHY PARTNER ──────────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Why Partner With Superfluids"
          title="Engineering partners, not just suppliers"
          align="center"
          max={640}
          style={{ marginBottom: isMobile ? 36 : 56 }}
        />
        <Reveal>
          <SFPartnerCards items={D.whyPartner} />
        </Reveal>
      </Section>

      {/* ── PROJECTS GALLERY ─────────────────────────────
          Projects live here now — no separate page. Each card opens the
          project's photo gallery in a popup. Six show at first; the rest
          expand in place so every project stays reachable from Home. */}
      <Section tone="alt" id="projects">
        <SectionHead
          eyebrow="Featured Projects"
          title="2,500+ projects across the GCC"
          body="From petrochemical utilities in Saudi Arabia to hospital expansions in Doha. Select a project to see the gallery."
          style={{ marginBottom: isMobile ? 32 : 48 }}
        />
        <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60}>
              <button
                type="button"
                onClick={() => setOpenProject(p)}
                aria-label={"Open " + p.name + " gallery"}
                className="group flex w-full flex-col gap-4 text-left"
              >
                <span className="relative block overflow-hidden rounded-lg">
                  <span className="block transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                    <SmartImage src={(p.images || [])[0]} alt={p.name} icon={p.icon} ratio="4 / 3" mark />
                  </span>
                  <span className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold text-brand-navy shadow-md">
                      <Icon name="images" size={15} /> View gallery
                    </span>
                  </span>
                </span>
                <span className="flex flex-col gap-1.5">
                  <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">{p.sector}</span>
                  <span className="text-[19px] font-semibold leading-snug tracking-snug text-ink transition-colors duration-200 group-hover:text-navy-600">{p.name}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <Icon name="map-pin" size={14} color="var(--gray-400)" /> {p.country}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
        {D.projects.length > PROJECTS_SHOWN && (
          <div className="mt-12 flex justify-center">
            <Button variant="outline" icon={showAllProjects ? "chevron-up" : "chevron-down"} onClick={() => setShowAllProjects((v) => !v)}>
              {showAllProjects ? "Show fewer projects" : "Show all " + D.projects.length + " projects"}
            </Button>
          </div>
        )}
        <ProjectGalleryModal project={openProject} onClose={closeProject} />
      </Section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CTABand
        title="Ready to engineer your next project?"
        body="Tell us the duty and we'll size the system. Our engineering team responds within one business day."
        primary={{ label: "Get in Touch", to: "Contact" }}
        secondary={{ label: "Explore Services", to: "Services" }}
        onNavigate={onNavigate}
      />

    </div>
  );
}

window.SF_HomeScreen = HomeScreen;
