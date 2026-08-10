// ============================================================
// Superfluids — Industries We Serve
// ============================================================

function IndustriesScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, MediaFrame, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  return (
    <div>
      <PageHero
        eyebrow="Industries"
        title="Trusted Across Every Sector That Depends On Reliable Fluid Infrastructure"
        body="Nine sectors, one engineering standard — from residential towers to petrochemical utilities."
        crumbs={[{ label: "Home", to: "Home" }, { label: "Industries" }]}
        onNavigate={onNavigate}
      />

      {/* ── SECTOR GRID ──────────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Sector Grid"
          title="Where our systems are working"
          body="Each sector carries its own demands. These are representative deliveries."
          style={{ marginBottom: isMobile ? 32 : 52 }}
        />
        <Grid cols={3} mob={1} gap={20}>
          {D.sectors.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i, 5) * 55}>
              <div className="flex h-full flex-col gap-4 rounded-lg border border-line bg-white p-6 transition-all duration-200 ease-out hover:border-aqua-400 hover:shadow-md sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-aqua-50 text-aqua-700">
                  <Icon name={s.icon} size={22} strokeWidth={1.9} />
                </span>
                <h3 className="text-[20px] font-semibold tracking-snug text-ink">{s.name}</h3>
                <div className="mt-auto flex flex-col gap-1.5 border-t border-line pt-4">
                  <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">
                    Representative project
                  </span>
                  <span className="text-[14.5px] leading-snug text-gray-600">{s.project}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── CAPABILITY CROSS-LINK ────────────────────────── */}
      <Section tone="alt">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Eyebrow>One standard</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">
              The sector changes. The discipline doesn't.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              A hospital water loop and a petrochemical utility have very different compliance
              regimes — but both are sized, verified, commissioned and maintained the same way.
            </p>
            <div className="mt-1 flex flex-wrap gap-3">
              <Button variant="primary" icon="arrow-right" onClick={() => onNavigate("Services")}>
                Explore Services
              </Button>
              <Button variant="outline" onClick={() => onNavigate("Projects")}>
                See Projects
              </Button>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <MediaFrame label="Plant room commissioning" icon="activity" ratio="4 / 3" />
          </Reveal>
        </Grid>
      </Section>

      <CTABand
        title="Building in one of these sectors?"
        body="Our engineers understand the demands of your industry. Let's scope the right system."
        primary={{ label: "Request Consultation", to: "Contact" }}
        secondary={{ label: "View Products", to: "Products" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_IndustriesScreen = IndustriesScreen;
