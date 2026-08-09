// ============================================================
// Superfluids — service detail template (drives all 6 services)
// ============================================================

function ServiceDetailScreen({ onNavigate, param }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, CheckList, Steps, MediaFrame, Tile, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const service = D.services.find((s) => s.slug === param) || D.services[0];
  const others = D.services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedProjects = D.projects.slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Service"
        title={service.name}
        body={service.overview}
        crumbs={[
          { label: "Home", to: "Home" },
          { label: "Services", to: "Services" },
          { label: service.name },
        ]}
        onNavigate={onNavigate}
        media={
          <MediaFrame icon={service.icon} label={service.name} ratio="4 / 3" tone="alt" />
        }
      >
        <div className="mt-3 flex flex-wrap gap-3">
          <Button variant="accent" size="lg" icon="arrow-right" onClick={() => onNavigate("Contact")}>
            Request This Service
          </Button>
        </div>
      </PageHero>

      {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>What's Included</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">Scope of the service</h2>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              Everything below is delivered under one contract, by one team, with a single
              point of accountability.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="flex flex-col gap-4 rounded-lg border border-line bg-gray-50 p-6 sm:p-7">
              <CheckList items={service.included} />
            </div>
          </Reveal>
        </Grid>
      </Section>

      {/* ── OUR PROCESS ──────────────────────────────────── */}
      <Section tone="alt">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">How it runs</h2>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              The same four-stage sequence underpins every engagement, adapted to the
              scope in front of us.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <Steps steps={D.serviceProcess} />
          </Reveal>
        </Grid>
      </Section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Benefits"
          title="What you get out of it"
          align="center"
          max={620}
          style={{ marginBottom: isMobile ? 32 : 48 }}
        />
        <Grid cols={4} mob={2} gap={16}>
          {service.benefits.map((b, i) => (
            <Reveal key={b} delay={i * 55}>
              <div className="flex h-full flex-col gap-3 rounded-lg border border-line bg-white p-5 sm:p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-aqua-50 text-aqua-700">
                  <Icon name="check" size={17} strokeWidth={2.4} />
                </span>
                <span className="text-[15px] font-medium leading-snug tracking-snug text-ink">{b}</span>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── RELATED PROJECTS ─────────────────────────────── */}
      <Section tone="alt">
        <SectionHead
          eyebrow="Related Projects"
          title="Delivered with this service"
          style={{ marginBottom: isMobile ? 28 : 44 }}
          action={!isMobile && (
            <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Projects")}>
              All Projects
            </Button>
          )}
        />
        <Grid cols={3} mob={1} gap={20}>
          {relatedProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <a href="#"
                onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProjectDetail", param: p.slug }); }}
                className="flex flex-col gap-4">
                <MediaFrame label={p.country} icon={p.icon} ratio="4 / 3" />
                <div className="flex flex-col gap-1.5">
                  <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">
                    {p.sector}
                  </span>
                  <h3 className="text-[19px] font-semibold tracking-snug text-ink">{p.name}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── OTHER SERVICES ───────────────────────────────── */}
      <Section tone="light" size="sm">
        <SectionHead
          eyebrow="Other Services"
          title="The rest of the scope"
          style={{ marginBottom: isMobile ? 24 : 40 }}
        />
        <Grid cols={3} mob={1} gap={20}>
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 55}>
              <Tile
                icon={s.icon}
                title={s.name}
                description={s.tagline}
                onClick={() => onNavigate({ name: "ServiceDetail", param: s.slug })}
              />
            </Reveal>
          ))}
        </Grid>
      </Section>

      <CTABand
        title="Need this on your project?"
        body="Tell us the scope and site. Our engineering team responds within one business day."
        primary={{ label: "Request a Quote", to: "Contact" }}
        secondary={{ label: "All Services", to: "Services" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_ServiceDetailScreen = ServiceDetailScreen;
