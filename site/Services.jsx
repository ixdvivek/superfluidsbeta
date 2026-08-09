// ============================================================
// Superfluids — Services hub
// ============================================================

function ServicesScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, Steps, MediaFrame, InsetCard, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Total MEP & Fluid Engineering Services"
        body="Superfluids manages the complexity of mechanical, electrical and plumbing integration — so your facility runs as one efficient system."
        crumbs={[{ label: "Home", to: "Home" }, { label: "Services" }]}
        onNavigate={onNavigate}
      >
        <div className="mt-3 flex flex-wrap gap-3">
          <Button variant="accent" size="lg" icon="arrow-right" onClick={() => onNavigate("Contact")}>
            Request a Site Assessment
          </Button>
          <Button variant="outlineDark" size="lg" onClick={() => onNavigate("Contact")}>
            Talk to Our Engineering Team
          </Button>
        </div>
      </PageHero>

      {/* ── SERVICE OFFERINGS ────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Service Offerings"
          title="Six capabilities, one accountable partner"
          body="Each links through to how we deliver it, what's included, and what you get out of it."
          style={{ marginBottom: isMobile ? 32 : 52 }}
        />
        <Grid cols={3} mob={1} gap={20}>
          {D.services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 55}>
              <a href="#"
                onClick={(e) => { e.preventDefault(); onNavigate({ name: "ServiceDetail", param: s.slug }); }}
                className="group flex h-full flex-col gap-3 rounded-lg border border-line bg-white p-6 transition-all duration-200 ease-out hover:border-aqua-400 hover:shadow-md sm:p-7">
                <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-sm bg-aqua-50 text-aqua-700 transition-colors duration-200 group-hover:bg-aqua-600 group-hover:text-navy-900">
                  <Icon name={s.icon} size={20} strokeWidth={1.9} />
                </span>
                <h3 className="text-[19px] font-semibold tracking-snug text-ink">{s.name}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{s.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-blue-600">
                  Learn more
                  <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                    <Icon name="arrow-right" size={15} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── HOW WE WORK ──────────────────────────────────── */}
      <Section tone="alt">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">
              Four capability areas, run in sequence
            </h2>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              Whether it's a single pump room or a full MEP scope, every engagement
              follows the same disciplined path.
            </p>
            <div className="mt-2">
              <Steps steps={D.serviceProcess} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <MediaFrame
              label="Commissioning on site"
              icon="activity"
              ratio="4 / 5"
              inset={
                <InsetCard
                  title="Verified at handover"
                  value="100"
                  suffix="%"
                  caption="Design intent confirmed and documented before sign-off"
                />
              }
            />
          </Reveal>
        </Grid>
      </Section>

      <CTABand
        title="Have a system that needs engineering?"
        body="Tell us about the project and we'll scope the right solution — design, supply, install and maintain."
        primary={{ label: "Request a Site Assessment", to: "Contact" }}
        secondary={{ label: "View Products", to: "Products" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_ServicesScreen = ServicesScreen;
