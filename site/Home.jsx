// ============================================================
// Superfluids — Home
// Section order follows the approved wireframe. Styling is Tailwind.
// ============================================================

function HomeScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    MediaFrame, InsetCard, CheckList, Tile, VideoBackdrop,
    PillRow, Carousel, LogoCylinder, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

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
                <Button variant="primary" onClick={() => onNavigate("Products")}>Explore Products</Button>
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
            <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Products")}>
              View All Products
            </Button>
          )}
        />
        <Grid cols={3} mob={1} gap={20}>
          {D.portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 55}>
              <Tile {...p} onClick={() => onNavigate("Products")} />
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
        <Grid cols={3} mob={1} gap={20}>
          {D.whyPartner.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <Tile {...w} />
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── SECTORS ──────────────────────────────────────── */}
      <Section tone="alt" size="sm">
        <Grid cols={2} mob={1} gap={56} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow>Sectors We've Helped</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">
              Trusted where reliability is non-negotiable
            </h2>
            <div className="mt-1">
              <Button variant="ghost" icon="arrow-right" onClick={() => onNavigate("Industries")}>
                Explore industries
              </Button>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <PillRow items={D.sectors.map((s) => s.name)} />
          </Reveal>
        </Grid>
      </Section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <Section tone="light">
        <Carousel
          cardWidth={isMobile ? 280 : 360}
          gap={20}
          eyebrow="Featured Projects"
          title="2,500+ projects across the GCC"
          body="From petrochemical utilities in Saudi Arabia to hospital expansions in Doha."
          action={!isMobile && (
            <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Projects")}>
              View All Projects
            </Button>
          )}
        >
          {D.projects.slice(0, 8).map((p) => (
            <a
              key={p.slug}
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProjectDetail", param: p.slug }); }}
              className="flex flex-col gap-4"
            >
              <MediaFrame label={p.country} icon={p.icon} ratio="4 / 3" />
              <div className="flex flex-col gap-1.5">
                <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">
                  {p.sector}
                </span>
                <h3 className="text-[19px] font-semibold tracking-snug text-ink">{p.name}</h3>
              </div>
            </a>
          ))}
        </Carousel>
        {isMobile && (
          <div className="mt-7">
            <Button variant="outline" fullWidth icon="arrow-right" onClick={() => onNavigate("Projects")}>
              View All Projects
            </Button>
          </div>
        )}
      </Section>

      {/* ── CAPABILITIES + OUTCOMES ──────────────────────── */}
      <Section tone="navy">
        <Grid cols={2} mob={1} gap={64}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow tone="onDark">Capabilities Matrix</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-white">
              Four capability areas, one accountable team
            </h2>
            <p className="text-pretty text-base leading-relaxed text-white/65">
              Every engagement runs through the same disciplined sequence — whether it's a
              single pump room or a full MEP scope.
            </p>
            <div className="mt-1.5">
              <PillRow items={D.capabilities} numbered onDark />
            </div>
          </Reveal>

          <Reveal delay={100} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow tone="onDark">Outcomes</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-white">
              What clients get out of it
            </h2>
            <p className="text-pretty text-base leading-relaxed text-white/65">
              Measured results, not promises — lower running costs, fewer failures, and
              systems that hold their design performance.
            </p>
            <div className="mt-1.5">
              <PillRow items={D.outcomes} onDark />
            </div>
          </Reveal>
        </Grid>
      </Section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CTABand
        title="Ready to engineer your next project?"
        body="Tell us the duty and we'll size the system. Our engineering team responds within one business day."
        primary={{ label: "Get in Touch", to: "Contact" }}
        secondary={{ label: "Explore Services", to: "Services" }}
        onNavigate={onNavigate}
      />

      {/* ── STRATEGIC BRANDS ─────────────────────────────── */}
      <Section tone="light" size="sm">
        <SectionHead
          eyebrow="Strategic Brands"
          title="We exclusively partner with the industry's most trusted manufacturers"
          align="center"
          max={700}
          style={{ marginBottom: isMobile ? 32 : 48 }}
        />
        <Grid cols={4} mob={1} gap={20}>
          {D.brandGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 60}>
              <div className="flex h-full flex-col gap-3 rounded-lg border border-line p-6">
                <span className="sf-num text-sm font-semibold text-aqua-600">
                  {String(g.brands.length).padStart(2, "0")}
                </span>
                <h3 className="text-[17px] font-semibold tracking-snug text-ink">{g.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {g.brands.slice(0, 4).join(" · ")}
                  {g.brands.length > 4 && " + more"}
                </p>
              </div>
            </Reveal>
          ))}
        </Grid>
        <div className="mt-8 flex justify-center">
          <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Brands")}>
            View All Brands &amp; Partners
          </Button>
        </div>
      </Section>

    </div>
  );
}

window.SF_HomeScreen = HomeScreen;
