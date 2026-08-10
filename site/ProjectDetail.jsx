// ============================================================
// Superfluids — project case study template (drives all 13)
// ============================================================

function ProjectDetailScreen({ onNavigate, param }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, MediaFrame, Steps, Gallery, Tile, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const project = D.projects.find((p) => p.slug === param) || D.projects[0];
  const related = D.projects
    .filter((p) => p.slug !== project.slug && p.sector === project.sector)
    .concat(D.projects.filter((p) => p.slug !== project.slug && p.sector !== project.sector))
    .slice(0, 3);

  // Placeholder until per-project content lands from the delivery team.
  const meta = [
    ["Client", "Confidential"],
    ["Sector", project.sector],
    ["Country", project.country],
    ["Year", project.year],
    ["Scope", project.scope],
  ];

  return (
    <div>
      <PageHero
        eyebrow="Case Study"
        title={project.name}
        body={project.tagline}
        crumbs={[
          { label: "Home", to: "Home" },
          { label: "Projects", to: "Projects" },
          { label: project.name },
        ]}
        onNavigate={onNavigate}
        media={<MediaFrame icon={project.icon} label={project.country} ratio="4 / 3" tone="alt" />}
      />

      {/* ── META STRIP ───────────────────────────────────── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-container px-5 sm:px-gutter">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-5 lg:gap-0 lg:py-12">
            {meta.map(([k, v], i) => (
              <div key={k} className={"flex flex-col gap-1.5 lg:px-7 " + (i > 0 ? "lg:border-l lg:border-line" : "")}>
                <dt className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">{k}</dt>
                <dd className="text-[15px] font-medium tracking-snug text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────── */}
      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">The brief</h2>
            <p className="text-pretty text-lg leading-relaxed text-gray-500">{project.tagline}</p>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              Superfluids was engaged to specify, supply and commission the fluid systems for
              this facility. Scope covered {project.scope.toLowerCase()}, delivered under a
              single point of accountability and handed over with full documentation.
            </p>
            <p className="text-sm italic leading-relaxed text-gray-400">
              Project narrative to be completed with input from the delivery team.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex flex-col gap-4 rounded-lg border border-line bg-gray-50 p-6 sm:p-7">
              <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">
                Services Provided
              </span>
              <div className="flex flex-col gap-2.5">
                {D.services.slice(0, 3).map((s) => (
                  <a key={s.slug} href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate({ name: "ServiceDetail", param: s.slug }); }}
                    className="group flex items-center justify-between gap-4 rounded-md bg-white px-4 py-3 ring-1 ring-line transition-colors duration-200 hover:ring-aqua-400">
                    <span className="flex items-center gap-3">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-aqua-50 text-aqua-700">
                        <Icon name={s.icon} size={16} />
                      </span>
                      <span className="text-[14.5px] font-medium text-ink">{s.name}</span>
                    </span>
                    <span className="text-gray-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-aqua-600">
                      <Icon name="arrow-right" size={15} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </Grid>
      </Section>

      {/* ── SCOPE OF WORK ────────────────────────────────── */}
      <Section tone="alt">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>Scope of Work</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">How it was delivered</h2>
            <p className="text-pretty text-base leading-relaxed text-gray-500">
              Five stages from design verification through to documented handover.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <Steps steps={D.projectProcess} />
          </Reveal>
        </Grid>
      </Section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <Section tone="light">
        <SectionHead
          eyebrow="Project Gallery"
          title="On site"
          style={{ marginBottom: isMobile ? 24 : 40 }}
        />
        <Reveal>
          <Gallery count={6} icon={project.icon} />
        </Reveal>
      </Section>

      {/* ── RELATED ──────────────────────────────────────── */}
      {related.length > 0 && (
        <Section tone="alt">
          <SectionHead
            eyebrow="Related Projects"
            title="More from our portfolio"
            style={{ marginBottom: isMobile ? 24 : 40 }}
            action={!isMobile && (
              <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Projects")}>
                All Projects
              </Button>
            )}
          />
          <Grid cols={3} mob={1} gap={24}>
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <a href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProjectDetail", param: p.slug }); }}
                  className="flex flex-col gap-4">
                  <MediaFrame label={p.country} icon={p.icon} ratio="4 / 3" />
                  <div className="flex flex-col gap-1.5">
                    <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">{p.sector}</span>
                    <h3 className="text-[19px] font-semibold tracking-snug text-ink">{p.name}</h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </Grid>
        </Section>
      )}

      <CTABand
        title="Have a similar project in mind?"
        body="Tell us the duty and site conditions — our engineers respond within one business day."
        primary={{ label: "Start Your Project", to: "Contact" }}
        secondary={{ label: "All Projects", to: "Projects" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_ProjectDetailScreen = ProjectDetailScreen;
