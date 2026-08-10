// ============================================================
// Superfluids — About
// ============================================================

function AboutScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, MediaFrame, InsetCard, CheckList, Tile, Gallery,
    LogoCylinder, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Engineering Fluid Solutions for Industrial Excellence"
        body="Transform your infrastructure with cutting-edge pumping systems, precision-engineered tanks, and intelligent automation."
        crumbs={[{ label: "Home", to: "Home" }, { label: "About" }]}
        onNavigate={onNavigate}
        media={<MediaFrame icon="waves" label="Superfluids · Dubai Investment Park" ratio="4 / 3" tone="alt" />}
      />

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-container px-5 sm:px-gutter">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4 lg:gap-0 lg:py-16">
              {D.aboutStats.map((s, i) => (
                <div key={s.label} className={"flex flex-col gap-2 lg:px-9 " + (i > 0 ? "lg:border-l lg:border-line" : "")}>
                  <span className="sf-num text-[34px] font-medium leading-none tracking-display text-brand-navy sm:text-[46px]">
                    {s.value}{s.suffix && <span className="text-aqua-600">{s.suffix}</span>}
                  </span>
                  <span className="text-sm leading-snug text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ─────────────────────────────── */}
      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow>Company Overview</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">
              A UAE-based engineering powerhouse
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-gray-500">
              Superfluids specialises in high-performance water pumping systems, fluid handling
              equipment, sectional water storage, pump automation and renewable thermal energy
              technologies.
            </p>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              We are the technical partner of choice for comprehensive fluid management and MEP
              solutions — bridging world-class manufacturing and site-specific operational
              excellence across six GCC markets.
            </p>
            <div className="mt-1">
              <Button variant="primary" icon="arrow-right" onClick={() => onNavigate("Services")}>
                Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <MediaFrame
              label="Engineering team on site" icon="users" ratio="4 / 5"
              inset={<InsetCard title="Delivered across" value="6" suffix=" markets"
                caption="UAE · Oman · Saudi Arabia · Qatar · Bahrain · Kuwait" />}
            />
          </Reveal>
        </Grid>
      </Section>

      {/* ── MISSION ──────────────────────────────────────── */}
      <Section tone="navy" size="sm">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-6 text-center">
          <Reveal><Eyebrow tone="onDark">Our Mission</Eyebrow></Reveal>
          <Reveal delay={80}>
            <p className="text-balance text-[24px] font-medium leading-[1.35] tracking-tighter2 text-white sm:text-[32px]">
              Delivering comprehensive fluid engineering solutions backed by decades of industry
              expertise and unwavering commitment to quality.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ── EXCELLENCE ───────────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Fluid Engineering Excellence"
          title="What we bring to a project"
          align="center" max={640}
          style={{ marginBottom: isMobile ? 32 : 52 }}
        />
        <Grid cols={3} mob={1} gap={20}>
          {D.excellence.map((e, i) => (
            <Reveal key={e.title} delay={i * 65}><Tile {...e} /></Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <Section tone="alt">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal delay={80}>
            <MediaFrame label="Our engineers" icon="users" ratio="16 / 10" />
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow>Team</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">
              Factory-trained, end to end
            </h2>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              Our sales and service teams are trained by the manufacturers we represent, so the
              advice you get on selection is the same advice that holds up at commissioning.
            </p>
            <CheckList items={D.teamPoints} />
            <div className="mt-1">
              <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Contact")}>
                Talk to Our Team
              </Button>
            </div>
          </Reveal>
        </Grid>
      </Section>

      {/* ── PROJECTS GALLERY ─────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Projects Gallery"
          title="Delivered across the GCC"
          style={{ marginBottom: isMobile ? 24 : 40 }}
          action={!isMobile && (
            <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Projects")}>
              View All Projects
            </Button>
          )}
        />
        <Reveal>
          <Gallery count={isMobile ? 6 : 9} icon="building-2" />
        </Reveal>
      </Section>

      {/* ── PARTNERS ─────────────────────────────────────── */}
      <Section tone="navy" size="sm">
        <div className="flex flex-col items-center gap-8">
          <SectionHead
            eyebrow="Partners" title="Authorised partnership with"
            align="center" onDark max={620} style={{ marginBottom: 0 }}
          />
          <div className="w-full">
            <LogoCylinder logos={D.partnerLogos} onDark speed={40} height={72} />
          </div>
          <Button variant="accent" icon="arrow-right" onClick={() => onNavigate("Brands")}>
            All Brands &amp; Partners
          </Button>
        </div>
      </Section>

      <CTABand
        title="Ready to engineer your next project?"
        body="Tell us the duty and we'll size the system. Our team responds within one business day."
        primary={{ label: "Get in Touch", to: "Contact" }}
        secondary={{ label: "Explore Products", to: "Products" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_AboutScreen = AboutScreen;
