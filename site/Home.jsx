// ============================================================
// Superfluids — Home
// Section order follows the approved wireframe. Styling is Tailwind.
// ============================================================

function HomeScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    MediaFrame, InsetCard, CheckList, Tile,
    PillRow, Carousel, LogoCylinder, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-800">
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg,#0E2341 0%,#081728 100%)" }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(120% 90% at 78% 8%, #000 18%, transparent 76%)",
          }}
        />
        {/* Copy area — the droplet mark is scoped here so it never
            overlaps the partner band below. */}
        <div className="relative overflow-hidden">
          {/* WebP is 87KB against 1.3MB for the source PNG, which still
              serves as the fallback. Decorative, so aria-hidden. */}
          {!isMobile && (
            <picture>
              <source srcSet="assets/logos/superfluids-mark.webp" type="image/webp" />
              <img
                src="assets/logos/superfluids-mark.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute -right-[4%] -top-[14%] h-[128%] opacity-40"
                style={{ filter: "drop-shadow(0 24px 80px rgba(0,183,199,0.32))" }}
              />
            </picture>
          )}

          <div className="relative mx-auto max-w-container px-5 sm:px-gutter">
          <div className="flex max-w-[900px] flex-col gap-5 pb-14 pt-32 sm:gap-6 sm:pb-20 sm:pt-44">
            <Reveal><Eyebrow tone="onDark">Superfluids</Eyebrow></Reveal>

            <Reveal delay={70}>
              <h1 className="text-balance text-[40px] font-medium leading-[1.04] tracking-display text-white sm:text-display">
                Pumping Systems, Water Storage, Hot Water &amp; Energy-Efficient Fluid Solutions
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="max-w-[560px] text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                Pumps · Heaters · Tanks · VFDs · Valves · Chillers — designed,
                supplied, installed and maintained across the GCC.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-1 flex flex-wrap gap-3">
                <Button variant="accent" size="lg" icon="arrow-right" onClick={() => onNavigate("Products")}>
                  Explore Products
                </Button>
                <Button variant="outlineDark" size="lg" onClick={() => onNavigate("Contact")}>
                  Request a Quote
                </Button>
              </div>
            </Reveal>
          </div>
          </div>
        </div>

        {/* Partner logos — rotating cylinder, fading at both edges */}
        <div className="relative border-t border-white/10 py-8 sm:py-10">
          <p className="mx-auto mb-5 max-w-container px-5 text-center text-eyebrow font-semibold uppercase tracking-eyebrow text-white/35 sm:px-gutter">
            Authorised partner to the industry's most trusted manufacturers
          </p>
          <LogoCylinder logos={D.featuredBrands} onDark speed={46} />
        </div>
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
        <SectionHead
          eyebrow="Featured Projects"
          title="2,500+ projects across the GCC"
          body="From petrochemical utilities in Saudi Arabia to hospital expansions in Doha."
          style={{ marginBottom: isMobile ? 32 : 56 }}
          action={!isMobile && (
            <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Projects")}>
              View All Projects
            </Button>
          )}
        />
        <Carousel cardWidth={isMobile ? 280 : 360} gap={20}>
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
