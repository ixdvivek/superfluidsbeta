// ============================================================
// Superfluids — Products & Services hub
// Four category groups feeding the 14 product pages.
// ============================================================

function ProductsScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    PageHero, Tile, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const bySlug = (s) => D.products.find((p) => p.slug === s);

  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Complete Fluid Engineering Solutions"
        body="6,500+ premium products across pumping, storage, heating, cooling, control and irrigation — supplied from 30+ authorised manufacturer partnerships."
        crumbs={[{ label: "Home", to: "Home" }, { label: "Products & Services" }]}
        onNavigate={onNavigate}
      >
        <div className="mt-3 flex flex-wrap gap-3">
          <Button variant="accent" size="lg" iconLeft="download">
            Download Full Catalogue (PDF)
          </Button>
          <Button variant="outlineDark" size="lg" onClick={() => onNavigate("Contact")}>
            Talk to an Engineer
          </Button>
        </div>
      </PageHero>

      {/* ── CATEGORY GROUPS ──────────────────────────────── */}
      {D.productGroups.map((group, gi) => (
        <Section key={group.title} tone={gi % 2 === 0 ? "light" : "alt"}>
          <SectionHead
            eyebrow={"0" + (gi + 1)}
            title={group.title}
            body={
              gi === 0 ? "Transfer, boosting, circulation and submersible duties across every building type."
              : gi === 1 ? "Storage and thermal systems — sectional tanks, vessels, solar heating and chillers."
              : gi === 2 ? "The control layer: panels, pressure management and fabricated manifolds."
              : "Purpose-built systems for irrigation and swimming pool applications."
            }
            style={{ marginBottom: isMobile ? 28 : 44 }}
          />
          <Grid cols={3} mob={1} gap={20}>
            {group.slugs.map((slug, i) => {
              const p = bySlug(slug);
              if (!p) return null;
              return (
                <Reveal key={slug} delay={i * 50}>
                  <Tile
                    icon={p.icon}
                    title={p.name}
                    description={p.tagline}
                    meta={p.brandList && p.brandList.length
                      ? p.brandList.slice(0, 3).join(" · ") + (p.brandList.length > 3 ? " + more" : "")
                      : null}
                    onClick={() => onNavigate({ name: "ProductDetail", param: slug })}
                  />
                </Reveal>
              );
            })}
          </Grid>
        </Section>
      ))}

      {/* ── SERVICES CROSS-LINK ──────────────────────────── */}
      <Section tone="navy" size="sm">
        <Grid cols={2} mob={1} gap={56} style={{ alignItems: "center" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow tone="onDark">Beyond supply</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-white">
              We don't just sell the equipment — we engineer the system
            </h2>
            <p className="text-pretty text-base leading-relaxed text-white/65">
              Design verification, installation, commissioning and long-term maintenance
              under one accountable contract.
            </p>
            <div className="mt-1">
              <Button variant="accent" icon="arrow-right" onClick={() => onNavigate("Services")}>
                Explore Services
              </Button>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="grid grid-cols-2 gap-3">
              {D.services.map((s) => (
                <a key={s.slug} href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate({ name: "ServiceDetail", param: s.slug }); }}
                  className="group flex items-center gap-3 rounded-lg px-4 py-3.5 ring-1 ring-white/10 transition-colors duration-200 ease-out hover:bg-white/5">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-sm bg-white/5 text-aqua-400">
                    <Icon name={s.icon} size={16} />
                  </span>
                  <span className="text-[13.5px] font-medium leading-tight text-white/80 group-hover:text-white">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </Grid>
      </Section>

      <CTABand
        title="Not sure which system you need?"
        body="Tell us the application and duty. Our engineers will specify it and quote it."
        primary={{ label: "Talk to an Engineer", to: "Contact" }}
        secondary={{ label: "View Projects", to: "Projects" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_ProductsScreen = ProductsScreen;
