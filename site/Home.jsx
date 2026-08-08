// ============================================================
// Superfluids — Home
// Section order and copy follow the approved wireframe.
// ============================================================

function HomeScreen({ onNavigate }) {
  const {
    Section, Container, Grid, Reveal, Eyebrow, SectionHead, Button,
    MediaFrame, InsetCard, MiniChart, CheckList, StatBand, Tile,
    PillRow, Carousel, LogoWall, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(120% 90% at 78% 8%, #000 18%, transparent 76%)",
        }} />
        {!isMobile && (
          <img src="assets/logos/superfluids-mark.png" alt="" aria-hidden="true"
            style={{
              position: "absolute", right: "-4%", top: "-6%", height: "116%", opacity: 0.4,
              filter: "drop-shadow(0 24px 80px rgba(0,183,199,0.32))", pointerEvents: "none",
            }} />
        )}

        <Container style={{ position: "relative" }}>
          <div style={{
            paddingTop: isMobile ? 72 : 152,
            paddingBottom: isMobile ? 48 : 88,
            maxWidth: 880, display: "flex", flexDirection: "column", gap: isMobile ? 20 : 26,
          }}>
            <Reveal><Eyebrow tone="onDark">Superfluids</Eyebrow></Reveal>
            <Reveal delay={70}>
              <h1 className="sf-display sf-on-dark">
                Pumping Systems, Water Storage, Hot Water &amp; Energy-Efficient Fluid Solutions
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="sf-body-lg sf-on-dark-muted" style={{ maxWidth: 560 }}>
                Pumps · Heaters · Tanks · VFDs · Valves · Chillers — designed, supplied,
                installed and maintained across the GCC.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
                <Button variant="accent" size="lg" icon="arrow-right" onClick={() => onNavigate("Products")}>
                  Explore Products
                </Button>
                <Button variant="outlineDark" size="lg" onClick={() => onNavigate("Contact")}>
                  Request a Quote
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Hero media with data inset */}
          <Reveal delay={280}>
            <MediaFrame
              label="Pump room · Dubai Investment Park"
              icon="gauge"
              ratio={isMobile ? "4 / 3" : "21 / 8"}
              tone="alt"
              inset={!isMobile && (
                <InsetCard
                  title="Energy after VFD retrofit"
                  value="32"
                  suffix="%"
                  caption="Average reduction in pump-room consumption"
                  chart={<MiniChart data={[74, 70, 66, 58, 52, 46, 42]} height={34} />}
                />
              )}
              insetPos="bottom-right"
            />
          </Reveal>

          {/* Stats */}
          <div style={{ padding: isMobile ? "40px 0 56px" : "64px 0 88px" }}>
            <Reveal><StatBand stats={D.stats} onDark /></Reveal>
          </div>
        </Container>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────── */}
      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="sf-h2">The technical partner of choice for fluid management and MEP</h2>
            <p className="sf-body-lg">
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
            <div style={{ marginTop: 4 }}>
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
            <h2 className="sf-h2">Trusted where reliability is non-negotiable</h2>
            <div style={{ marginTop: 4 }}>
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
            <a key={p.slug} href="#"
              onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProjectDetail", param: p.slug }); }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <MediaFrame label={p.country} icon={p.icon} ratio="4 / 3" />
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--aqua-700)" }}>
                  {p.sector}
                </span>
                <h3 className="sf-h4" style={{ fontSize: 19 }}>{p.name}</h3>
              </div>
            </a>
          ))}
        </Carousel>
        {isMobile && (
          <div style={{ marginTop: 28 }}>
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
            <h2 className="sf-h2 sf-on-dark">Four capability areas, one accountable team</h2>
            <p className="sf-body sf-on-dark-muted">
              Every engagement runs through the same disciplined sequence — whether it's a
              single pump room or a full MEP scope.
            </p>
            <div style={{ marginTop: 6 }}>
              <PillRow items={D.capabilities} numbered onDark />
            </div>
          </Reveal>

          <Reveal delay={100} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow tone="onDark">Outcomes</Eyebrow>
            <h2 className="sf-h2 sf-on-dark">What clients get out of it</h2>
            <p className="sf-body sf-on-dark-muted">
              Measured results, not promises — lower running costs, fewer failures, and
              systems that hold their design performance.
            </p>
            <div style={{ marginTop: 6 }}>
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
        <Reveal><LogoWall logos={D.featuredBrands} columns={5} /></Reveal>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Brands")}>
            View All Brands &amp; Partners
          </Button>
        </div>
      </Section>

    </div>
  );
}

window.SF_HomeScreen = HomeScreen;
