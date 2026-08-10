// ============================================================
// Superfluids — Brands & Partners
// ============================================================

function BrandsScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, LogoCylinder, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const total = D.brandGroups.reduce((a, g) => a + g.brands.length, 0);

  return (
    <div>
      <PageHero
        eyebrow="Partners"
        title="We Exclusively Partner With The Industry's Most Trusted Manufacturers"
        body={total + "+ manufacturer partnerships across pumps, piping, controls and fittings — so selection is driven by the duty, not by what happens to be in stock."}
        crumbs={[{ label: "Home", to: "Home" }, { label: "Brands & Partners" }]}
        onNavigate={onNavigate}
      >
        <div className="mt-3 flex flex-wrap gap-3">
          <Button variant="accent" iconLeft="download">Download Full Brand Portfolio</Button>
          <Button variant="outlineDark" onClick={() => onNavigate("Contact")}>Talk to an Engineer</Button>
        </div>
      </PageHero>

      {/* ── FEATURED ─────────────────────────────────────── */}
      <Section tone="light" size="sm">
        <div className="flex flex-col items-center gap-8">
          <p className="text-center text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">
            Authorised partnership with
          </p>
          <div className="w-full">
            <LogoCylinder logos={D.partnerLogos} speed={40} height={72} />
          </div>
        </div>
      </Section>

      {/* ── GROUPS ───────────────────────────────────────── */}
      {D.brandGroups.map((group, gi) => (
        <Section key={group.title} tone={gi % 2 === 0 ? "alt" : "light"}>
          <SectionHead
            eyebrow={"0" + (gi + 1)}
            title={group.title}
            body={group.brands.length + " manufacturer" + (group.brands.length === 1 ? "" : "s") + " represented."}
            style={{ marginBottom: isMobile ? 24 : 40 }}
          />
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {group.brands.map((b) => (
                <span
                  key={b}
                  className="flex min-h-[72px] flex-1 basis-[calc(50%-0.375rem)] items-center justify-center rounded-lg border border-line bg-white px-5 py-4 text-center text-[15px] font-medium tracking-snug text-gray-500 sm:basis-[calc(25%-0.5625rem)]"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </Section>
      ))}

      {/* ── WHY IT MATTERS ───────────────────────────────── */}
      <Section tone="navy" size="sm">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Eyebrow tone="onDark">Why it matters</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-white">
              Authorised supply, genuine parts, real warranty
            </h2>
            <p className="text-pretty text-base leading-relaxed text-white/65">
              Being an authorised partner means the equipment arrives with manufacturer warranty
              intact, spares are genuine, and technical escalation goes straight to the factory.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                { icon: "badge-check", t: "Authorised channels" },
                { icon: "shield-check", t: "Warranty intact" },
                { icon: "package", t: "Genuine spares" },
                { icon: "life-buoy", t: "Factory escalation" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-lg px-4 py-3.5 ring-1 ring-white/10">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-white/5 text-aqua-400">
                    <Icon name={x.icon} size={16} />
                  </span>
                  <span className="text-[14px] font-medium text-white/85">{x.t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Grid>
      </Section>

      <CTABand
        title="Looking for a specific manufacturer?"
        body="If it moves, stores or conditions fluid, we can likely source it. Ask us."
        primary={{ label: "Get in Touch", to: "Contact" }}
        secondary={{ label: "View Products", to: "Products" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_BrandsScreen = BrandsScreen;
