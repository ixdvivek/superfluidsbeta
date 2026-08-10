// ============================================================
// Superfluids — Projects directory with working filters
// ============================================================

function ProjectsScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, MediaFrame, FilterSelect, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const [sector, setSector] = React.useState("All sectors");
  const [country, setCountry] = React.useState("All countries");

  const sectors = React.useMemo(
    () => ["All sectors", ...Array.from(new Set(D.projects.map((p) => p.sector))).sort()], []);
  const countries = React.useMemo(
    () => ["All countries", ...Array.from(new Set(D.projects.map((p) => p.country))).sort()], []);

  const filtered = D.projects.filter(
    (p) => (sector === "All sectors" || p.sector === sector) &&
           (country === "All countries" || p.country === country)
  );

  const cleared = sector === "All sectors" && country === "All countries";

  return (
    <div>
      <PageHero
        eyebrow="Projects"
        title="2,500+ Projects Across the GCC"
        body="From petrochemical utilities in Saudi Arabia to hospital expansions in Doha."
        crumbs={[{ label: "Home", to: "Home" }, { label: "Projects" }]}
        onNavigate={onNavigate}
      />

      <Section tone="light">
        {/* ── FILTERS ──────────────────────────────────── */}
        <Reveal>
          <div className="flex flex-col gap-4 rounded-xl border border-line bg-gray-50 p-5 sm:flex-row sm:items-end sm:gap-5 sm:p-6">
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
              <FilterSelect label="Sector" value={sector} options={sectors} onChange={setSector} />
              <FilterSelect label="Country" value={country} options={countries} onChange={setCountry} />
            </div>
            <div className="flex items-center gap-4">
              <span className="sf-num whitespace-nowrap text-sm text-gray-500">
                {filtered.length} of {D.projects.length}
              </span>
              {!cleared && (
                <Button variant="ghost" iconLeft="x"
                  onClick={() => { setSector("All sectors"); setCountry("All countries"); }}>
                  Clear
                </Button>
              )}
            </div>
          </div>
        </Reveal>

        {/* ── DIRECTORY ────────────────────────────────── */}
        <div className="mt-10 sm:mt-14">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <Icon name="search-x" size={32} color="var(--gray-400)" />
              <p className="text-base text-gray-500">
                No projects match that combination. Try clearing one filter.
              </p>
              <Button variant="outline"
                onClick={() => { setSector("All sectors"); setCountry("All countries"); }}>
                Clear filters
              </Button>
            </div>
          ) : (
            <Grid cols={3} mob={1} gap={24}>
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 5) * 55}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavigate({ name: "ProjectDetail", param: p.slug }); }}
                    className="group flex flex-col gap-4"
                  >
                    <MediaFrame label={p.country} icon={p.icon} ratio="4 / 3" />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">
                        {p.sector}
                      </span>
                      <h3 className="text-[19px] font-semibold tracking-snug text-ink">{p.name}</h3>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                        <Icon name="map-pin" size={14} /> {p.country}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </Grid>
          )}
        </div>
      </Section>

      <CTABand
        title="Have a project in mind?"
        body="From a single pump room to a full MEP scope — tell us the requirement and we'll scope it."
        primary={{ label: "Start Your Project", to: "Contact" }}
        secondary={{ label: "Explore Services", to: "Services" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_ProjectsScreen = ProjectsScreen;
