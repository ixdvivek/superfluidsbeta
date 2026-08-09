// ============================================================
// Superfluids — product detail template (drives all 14 products)
// Section order and copy follow the approved wireframe.
// ============================================================

function ProductDetailScreen({ onNavigate, param }) {
  const {
    Section, Grid, Reveal, Eyebrow, SectionHead, Button,
    SplitHero, SpecTable, CheckList, Tile, MediaFrame, CTABand, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();

  const product = D.products.find((p) => p.slug === param) || D.products[0];

  // Sibling products from the same hub group, for the related row.
  const group = D.productGroups.find((g) => g.slugs.includes(product.slug));
  const related = (group ? group.slugs : D.products.map((p) => p.slug))
    .filter((s) => s !== product.slug)
    .slice(0, 3)
    .map((s) => D.products.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div>
      <SplitHero
        eyebrow="Product"
        title={product.name}
        body={product.tagline}
        highlights={(product.highlights || []).slice(0, 4)}
        icon={product.icon}
        crumbs={[
          { label: "Home", to: "Home" },
          { label: "Products & Services", to: "Products" },
          { label: product.name },
        ]}
        onNavigate={onNavigate}
        actions={
          <React.Fragment>
            <Button variant="accent" size="lg" icon="arrow-right" onClick={() => onNavigate("Contact")}>
              Request a Quote
            </Button>
            <Button variant="outlineDark" size="lg" iconLeft="download">
              Download Spec Sheet
            </Button>
          </React.Fragment>
        }
      />

      {/* ── OVERVIEW + APPLICATIONS ──────────────────────── */}
      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="text-balance text-h2 font-medium text-ink">About this system</h2>
            <p className="text-pretty text-lg leading-relaxed text-gray-500">{product.overview}</p>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex flex-col gap-4 rounded-lg border border-line bg-gray-50 p-6 sm:p-7">
              <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">
                Applications
              </span>
              <CheckList items={product.applications || []} />
            </div>
          </Reveal>
        </Grid>
      </Section>

      {/* ── KEY FEATURES ─────────────────────────────────── */}
      <Section tone="alt">
        <SectionHead
          eyebrow="Key Features & Components"
          title="What's in the package"
          body="Every set is configured, assembled and tested as a complete unit before it leaves us."
          style={{ marginBottom: isMobile ? 32 : 48 }}
        />
        <Grid cols={2} mob={1} gap={16}>
          {(product.features || []).map((f, i) => (
            <Reveal key={f} delay={i * 45}>
              <div className="flex h-full items-start gap-4 rounded-lg border border-line bg-white p-5">
                <span className="sf-num flex-none pt-0.5 text-xs font-semibold text-aqua-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-relaxed text-ink">{f}</span>
              </div>
            </Reveal>
          ))}
        </Grid>
      </Section>

      {/* ── SPECIFICATIONS (only where the wireframe has a table) ── */}
      {product.specs && product.specs.length > 0 && (
        <Section tone="light">
          <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Eyebrow>Technical Specifications</Eyebrow>
              <h2 className="text-balance text-h2 font-medium text-ink">Specifications</h2>
              <p className="text-pretty text-base leading-relaxed text-gray-500">
                Indicative figures. Final selection is sized against your duty point —
                send us the flow and head and our engineers will confirm.
              </p>
              <div className="mt-1">
                <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Contact")}>
                  Get a Sized Recommendation
                </Button>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <SpecTable rows={product.specs} />
            </Reveal>
          </Grid>
        </Section>
      )}

      {/* ── BRANDS AVAILABLE ─────────────────────────────── */}
      {product.brandList && product.brandList.length > 0 && (
        <Section tone={product.specs && product.specs.length ? "alt" : "light"} size="sm">
          <Grid cols={2} mob={1} gap={56} style={{ alignItems: "center" }}>
            <Reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Eyebrow>Brands Available</Eyebrow>
              <h2 className="text-balance text-h2 font-medium text-ink">
                Supplied from authorised partners
              </h2>
              <p className="text-pretty text-base leading-relaxed text-gray-500">
                We select the manufacturer to suit the duty, the budget and the lead time —
                not whichever brand we happen to stock.
              </p>
              <div className="mt-1">
                <Button variant="ghost" icon="arrow-right" onClick={() => onNavigate("Brands")}>
                  All brands &amp; partners
                </Button>
              </div>
            </Reveal>
            {/* Flex-wrap rather than a fixed grid: brand counts vary from 2
                to 6 per product, and a grid leaves dead cells on the last row. */}
            <Reveal delay={90}>
              <div className="flex flex-wrap gap-3">
                {product.brandList.map((b) => (
                  <span key={b}
                    className="flex min-h-[68px] flex-1 basis-[calc(50%-0.375rem)] items-center justify-center rounded-lg border border-line bg-white px-5 py-4 text-center text-sm font-medium tracking-snug text-gray-400 sm:basis-[calc(33.333%-0.5rem)]">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </Grid>
        </Section>
      )}

      {/* ── RELATED PRODUCTS ─────────────────────────────── */}
      {related.length > 0 && (
        <Section tone="light">
          <SectionHead
            eyebrow="Related Products"
            title={group ? group.title : "Explore the portfolio"}
            style={{ marginBottom: isMobile ? 28 : 44 }}
            action={!isMobile && (
              <Button variant="outline" icon="arrow-right" onClick={() => onNavigate("Products")}>
                All Products
              </Button>
            )}
          />
          <Grid cols={3} mob={1} gap={20}>
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Tile
                  icon={r.icon}
                  title={r.name}
                  description={r.tagline}
                  onClick={() => onNavigate({ name: "ProductDetail", param: r.slug })}
                />
              </Reveal>
            ))}
          </Grid>
        </Section>
      )}

      <CTABand
        title={"Need a " + product.name.toLowerCase() + " system sized for your project?"}
        body="Send us the duty and site conditions. Our engineers respond within one business day."
        primary={{ label: "Request a Quote", to: "Contact" }}
        secondary={{ label: "Talk to an Engineer", to: "Contact" }}
        onNavigate={onNavigate}
      />
    </div>
  );
}

window.SF_ProductDetailScreen = ProductDetailScreen;
