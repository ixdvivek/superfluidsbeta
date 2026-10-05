// ============================================================
// Superfluids — Shop
//
// Enquiry-only catalogue: browse by category, open a product in a popup,
// enquire on WhatsApp. No cart or checkout.
//
// URLs:  #/shop                       all products
//        #/shop/<category>            a category
//        #/shop/<category>/<product>  a category with that product open
// Filter and popup changes rewrite the hash in place (replaceState), so the
// page doesn't wash or jump to the top, and any URL can be shared as-is.
// ============================================================

// WhatsApp's own glyph, for the enquiry buttons — Lucide carries no brand
// marks. Paints in currentColor.
function SFWhatsAppGlyph({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

function ShopScreen({ onNavigate, param }) {
  const {
    Section, Reveal, Eyebrow, Button, Icon, CTABand, useMobile,
    Modal, ImageSlider, SmartImage, SpecTable, priceLabel, hasPrice, whatsappLink,
  } = window.SFKit;
  const D = window.SFData;
  const isMobile = useMobile();
  const CATS = D.shopCategories;
  const ALL = D.shop;

  // ---- state from the URL --------------------------------------
  const parse = (p) => {
    const [a, b] = (p || "").split("/");
    const cat = CATS.some((c) => c.id === a) ? a : "all";
    // A product slug on its own (#/shop/<product>) is accepted too.
    const prodSlug = b || (!CATS.some((c) => c.id === a) && a && a !== "all" ? a : null);
    const prod = prodSlug ? ALL.find((x) => x.slug === prodSlug) || null : null;
    return { cat, prod };
  };
  const initial = parse(param);
  const [cat, setCat] = React.useState(initial.cat);
  const [open, setOpen] = React.useState(initial.prod);
  const [query, setQuery] = React.useState("");
  const [brands, setBrands] = React.useState([]);
  const [stockOnly, setStockOnly] = React.useState(false);
  const [pricedOnly, setPricedOnly] = React.useState(false);
  const [sort, setSort] = React.useState("featured");
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  // Another page linking in (#/shop/pumps) arrives as a new param.
  React.useEffect(() => {
    const s = parse(param);
    setCat(s.cat);
    setOpen(s.prod);
  }, [param]);

  // The app's route state can't see our replaceState rewrites, so a link
  // to the same route (the cart button while a category is showing) may
  // not re-render with a new param. Read the hash directly as well.
  React.useEffect(() => {
    const onHash = () => {
      const m = window.location.hash.match(/^#\/shop\/?(.*)$/);
      if (!m) return;
      const s = parse(m[1]);
      setCat(s.cat);
      setOpen(s.prod);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Keep the hash in step without a route change.
  React.useEffect(() => {
    let h = "#/shop";
    if (open) h += "/" + open.category + "/" + open.slug;
    else if (cat !== "all") h += "/" + cat;
    if (window.location.hash !== h) window.history.replaceState(null, "", h);
  }, [cat, open]);

  // Tab title follows the open product.
  React.useEffect(() => {
    if (open) document.title = open.name + " — Superfluids Shop";
    else {
      const c = CATS.find((x) => x.id === cat);
      document.title = (c ? c.name + " — " : "") + "Shop — Superfluids";
    }
  }, [open, cat]);

  // ---- filtering -----------------------------------------------
  const inCat = cat === "all" ? ALL : ALL.filter((p) => p.category === cat);
  const brandOptions = Array.from(new Set(inCat.map((p) => p.brand))).sort();
  const q = query.trim().toLowerCase();

  const list = inCat
    .filter((p) => !brands.length || brands.includes(p.brand))
    .filter((p) => !stockOnly || p.inStock)
    .filter((p) => !pricedOnly || hasPrice(p))
    .filter((p) => !q || [p.name, p.brand, p.sku, p.summary].concat((p.specs || []).map((r) => r.join(" ")))
      .join(" ").toLowerCase().includes(q));

  // Price sorts put "on request" items last either way — they have no
  // number to sort by, and leading with them reads as an empty result.
  const sorted = list.slice();
  if (sort === "price-asc" || sort === "price-desc") {
    const dir = sort === "price-asc" ? 1 : -1;
    sorted.sort((a, b) => {
      const pa = hasPrice(a), pb = hasPrice(b);
      if (pa !== pb) return pa ? -1 : 1;
      return pa ? (a.price - b.price) * dir : 0;
    });
  } else if (sort === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }

  const activeFilters = brands.length + (stockOnly ? 1 : 0) + (pricedOnly ? 1 : 0);
  const resetFilters = () => { setBrands([]); setStockOnly(false); setPricedOnly(false); setQuery(""); };
  const pickCat = (id) => { setCat(id); setBrands([]); };
  const countIn = (id) => (id === "all" ? ALL.length : ALL.filter((p) => p.category === id).length);
  const catName = (id) => (CATS.find((c) => c.id === id) || {}).name;

  // ---- pieces --------------------------------------------------
  const checkbox = (checked, onChange, label, count) => (
    <label key={label} className="group flex cursor-pointer items-center gap-3 py-1.5 text-sm text-gray-600">
      <input type="checkbox" checked={checked} onChange={onChange}
        className="h-[18px] w-[18px] flex-none cursor-pointer rounded border-gray-300 accent-[#000A33]" />
      <span className="flex-1 transition-colors group-hover:text-ink">{label}</span>
      {count != null && <span className="sf-num text-[13px] text-gray-400">{count}</span>}
    </label>
  );

  const filterGroups = (
    <div className="flex flex-col gap-7">
      {brandOptions.length > 1 && (
        <div className="flex flex-col gap-2">
          <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">Brand</span>
          <div className="flex flex-col">
            {brandOptions.map((b) => checkbox(
              brands.includes(b),
              () => setBrands((cur) => (cur.includes(b) ? cur.filter((x) => x !== b) : cur.concat(b))),
              b,
              inCat.filter((p) => p.brand === b).length,
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">Availability</span>
        <div className="flex flex-col">
          {checkbox(stockOnly, () => setStockOnly((v) => !v), "In stock")}
          {checkbox(pricedOnly, () => setPricedOnly((v) => !v), "Price shown")}
        </div>
      </div>
      {activeFilters > 0 && (
        <button onClick={resetFilters} className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-navy-700 transition-colors hover:text-aqua-700">
          <Icon name="rotate-ccw" size={14} /> Clear filters
        </button>
      )}
    </div>
  );

  const stock = (p) => (
    <span className={"inline-flex items-center gap-1.5 text-[12px] font-medium sm:text-[13px] " + (p.inStock ? "text-emerald-700" : "text-gray-400")}>
      <span className={"h-1.5 w-1.5 rounded-full " + (p.inStock ? "bg-emerald-500" : "bg-gray-300")} />
      {p.inStock ? "In stock" : "Made to order"}
    </span>
  );

  const shareUrl = (p) =>
    window.location.origin + window.location.pathname + "#/shop/" + p.category + "/" + p.slug;

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-800">
        <span aria-hidden="true" className="absolute inset-0"
          style={{ background: "linear-gradient(160deg,#0E2341 0%,#081728 100%)" }} />
        <span aria-hidden="true" className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(0,183,199,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.08) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
            maskImage: "radial-gradient(90% 120% at 85% 0%, #000 20%, transparent 70%)",
          }} />
        <div className="relative mx-auto max-w-container px-5 pb-12 pt-28 sm:px-gutter sm:pb-16 sm:pt-36">
          <div className="grid gap-8 lg:grid-cols-[1fr_440px] lg:items-end lg:gap-16">
            <div className="flex max-w-[640px] flex-col gap-4">
              <Eyebrow tone="onDark">Shop</Eyebrow>
              <h1 className="text-balance text-[34px] font-medium leading-[1.06] tracking-display text-white sm:text-h1">
                Pumps, tanks &amp; controls — ready to enquire
              </h1>
              <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                Browse the range and enquire on WhatsApp. Our team replies with
                stock, lead time and a quote — usually the same day.
              </p>
            </div>
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Icon name="search" size={19} />
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by product, brand or spec"
                className="w-full rounded-full border-0 bg-white py-4 pl-12 pr-5 text-[15px] text-ink shadow-lg outline-none ring-2 ring-transparent transition-shadow placeholder:text-gray-400 focus:ring-brand-aqua"
              />
            </label>
          </div>
        </div>
      </section>

      {/* ── CATEGORY BAR ─────────────────────────────────── */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-container px-5 sm:px-gutter">
          {/* Scrolls sideways on phones rather than wrapping into rows. */}
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 py-3.5 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Categories">
            {[{ id: "all", name: "All products", icon: "layout-grid" }].concat(CATS).map((c) => {
              const on = c.id === cat;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => pickCat(c.id)}
                  className={
                    "inline-flex flex-none items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold tracking-snug transition-all duration-200 ease-out " +
                    (on ? "bg-brand-navy text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-ink")
                  }
                >
                  <Icon name={c.icon} size={15} />
                  {c.name}
                  <span className={"sf-num text-[12px] " + (on ? "text-white/55" : "text-gray-400")}>{countIn(c.id)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── LISTING ──────────────────────────────────────── */}
      <Section tone="alt" size="xs" style={{ paddingTop: isMobile ? 28 : 44 }}>
        <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* sidebar — desktop */}
          {!isMobile && <aside className="pt-1">{filterGroups}</aside>}

          <div className="flex min-w-0 flex-col gap-6">
            {/* toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-gray-500" aria-live="polite">
                <span className="sf-num font-semibold text-ink">{sorted.length}</span>{" "}
                {sorted.length === 1 ? "product" : "products"}
                {cat !== "all" && <React.Fragment> in <span className="font-semibold text-ink">{catName(cat)}</span></React.Fragment>}
                {q && <React.Fragment> for “<span className="font-semibold text-ink">{query.trim()}</span>”</React.Fragment>}
              </p>
              <div className="flex items-center gap-2">
                {isMobile && (
                  <button onClick={() => setFiltersOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-[14px] font-semibold text-brand-navy">
                    <Icon name="sliders-horizontal" size={15} /> Filters
                    {activeFilters > 0 && <span className="sf-num rounded-full bg-brand-navy px-1.5 text-[12px] text-white">{activeFilters}</span>}
                  </button>
                )}
                <label className="relative">
                  <span className="sr-only">Sort</span>
                  <select value={sort} onChange={(e) => setSort(e.target.value)}
                    className="appearance-none rounded-full border border-gray-300 bg-white py-2 pl-4 pr-9 text-[14px] font-semibold text-brand-navy outline-none transition-colors hover:border-gray-400 focus:border-brand-aqua">
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: low to high</option>
                    <option value="price-desc">Price: high to low</option>
                    <option value="name">Name: A–Z</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon name="chevron-down" size={15} />
                  </span>
                </label>
              </div>
            </div>

            {/* grid */}
            {sorted.length ? (
              <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
                {sorted.map((p) => (
                  <article key={p.slug}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg">
                    {/* The whole card opens the popup; the WhatsApp button
                        sits above it as its own target. */}
                    <button type="button" onClick={() => setOpen(p)}
                      aria-label={"View " + p.name}
                      className="absolute inset-0 z-[1] rounded-xl" />
                    <div className="relative border-b border-line">
                      <SmartImage src={(p.images || [])[0]} alt={p.name} fit="contain" ratio="1 / 1"
                        icon={(CATS.find((c) => c.id === p.category) || {}).icon} tone="light" mark
                        style={{ borderRadius: 0, border: 0 }} />
                      {p.badge && (
                        <span className="absolute left-2 top-2 rounded-full bg-brand-navy px-2 py-1 text-[10px] sm:left-3 sm:top-3 sm:px-2.5 sm:text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5 p-3 sm:gap-2 sm:p-5">
                      <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-aqua-700 sm:text-eyebrow">{p.brand}</span>
                      <h3 className="text-[15px] sm:text-[17px] font-semibold leading-snug tracking-snug text-ink transition-colors group-hover:text-navy-600">{p.name}</h3>
                      <div className="mt-auto flex items-end justify-between gap-2 pt-2 sm:gap-3 sm:pt-3">
                        <div className="flex flex-col gap-1">
                          <span className={"sf-num " + (hasPrice(p) ? "text-[16px] font-semibold tracking-snug text-navy-800 sm:text-[19px]" : "text-[13px] font-medium text-gray-500 sm:text-[15px]")}>
                            {priceLabel(p)}
                          </span>
                          {stock(p)}
                        </div>
                        <a
                          href={whatsappLink({ product: p, url: shareUrl(p) })}
                          target="_blank" rel="noopener noreferrer"
                          aria-label={"Enquire about " + p.name + " on WhatsApp"}
                          title="Enquire on WhatsApp"
                          className="relative z-[2] flex h-9 w-9 flex-none sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <SFWhatsAppGlyph size={19} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Icon name="package-search" size={22} />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-ink">No products match these filters</p>
                  <p className="text-sm text-gray-500">Clear the filters, or ask us — we carry 6,500+ products that aren't all listed here.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="outline" size="sm" iconLeft="rotate-ccw" onClick={() => { resetFilters(); pickCat("all"); }}>Show all products</Button>
                  <Button variant="primary" size="sm" href={whatsappLink({})} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      <CTABand
        title="Can't find the exact model?"
        body="The Shop shows a selection. We supply 6,500+ products from 30+ manufacturers — send us the duty or the part number."
        primary={{ label: "Request a Quote", to: "Contact" }}
        secondary={{ label: "Our Services", to: "Services" }}
        onNavigate={onNavigate}
      />

      {/* ── FILTERS SHEET (mobile) ───────────────────────── */}
      <Modal open={filtersOpen} onClose={() => setFiltersOpen(false)} label="Filters" maxWidth={480}>
        <div className="flex flex-col gap-6 p-6 pt-7">
          <h2 className="text-h4 font-medium text-ink">Filters</h2>
          {filterGroups}
          <Button variant="primary" fullWidth onClick={() => setFiltersOpen(false)}>
            Show {sorted.length} {sorted.length === 1 ? "product" : "products"}
          </Button>
        </div>
      </Modal>

      {/* ── PRODUCT POPUP ────────────────────────────────── */}
      <ProductModal product={open} onClose={() => setOpen(null)} shareUrl={shareUrl} stock={stock} catName={catName} />
    </div>
  );
}

function ProductModal({ product, onClose, shareUrl, stock, catName }) {
  const { Modal, ImageSlider, SpecTable, Button, Icon, priceLabel, hasPrice, whatsappLink, useMobile } = window.SFKit;
  const isMobile = useMobile();
  const last = React.useRef(product);
  if (product) last.current = product;
  const p = product || last.current;
  const [qty, setQty] = React.useState(1);
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => { setQty(1); setCopied(false); }, [product && product.slug]);

  const icon = p && ((window.SFData.shopCategories.find((c) => c.id === p.category) || {}).icon);

  const copy = () => {
    const u = shareUrl(p);
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(u).then(done, done);
    else done();
  };

  return (
    <Modal open={!!product} onClose={onClose} label={p ? p.name : "Product"} maxWidth={1080}>
      {p && (
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="border-b border-line bg-gray-50 p-4 sm:p-6 md:border-b-0 md:border-r">
            <ImageSlider images={p.images || []} alt={p.name} fit="contain" ratio={isMobile ? "4 / 3" : "1 / 1"} icon={icon} tone="light" placeholders={3} />
          </div>

          <div className="flex flex-col gap-5 p-5 pb-6 sm:p-8">
            <div className="flex flex-col gap-2 pr-10">
              <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">
                {p.brand} · {catName(p.category)}
              </span>
              <h2 className="text-balance text-[24px] font-medium leading-[1.15] tracking-snug text-ink sm:text-[30px]">{p.name}</h2>
              {p.sku && <span className="sf-num text-[13px] text-gray-400">Model {p.sku}</span>}
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className={"sf-num " + (hasPrice(p) ? "text-[28px] font-semibold tracking-snug text-navy-800" : "text-[20px] font-medium text-gray-600")}>
                {priceLabel(p)}
              </span>
              {stock(p)}
            </div>
            {hasPrice(p) && <p className="-mt-3 text-[13px] text-gray-400">Price excludes VAT and delivery. Final quote confirmed on enquiry.</p>}

            {p.summary && <p className="text-pretty text-[15px] leading-relaxed text-gray-600">{p.summary}</p>}

            {p.specs && p.specs.length > 0 && (
              <div className="flex flex-col gap-2.5">
                <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">Specifications</span>
                <SpecTable rows={p.specs} />
              </div>
            )}

            {/* On phones the enquiry bar pins to the bottom of the sheet, so
                it stays in reach while the specs scroll. */}
            <div className="sticky bottom-0 -mx-5 -mb-6 mt-1 flex flex-col gap-3 border-t border-line bg-white px-5 pb-5 pt-4 sm:static sm:mx-0 sm:mb-0 sm:px-0 sm:pb-0 sm:pt-5">
              <div className="flex items-stretch gap-3">
                <div className="flex flex-none items-center rounded-full border border-gray-300" role="group" aria-label="Quantity">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"
                    className="flex h-full w-10 items-center justify-center rounded-l-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-ink">
                    <Icon name="minus" size={15} />
                  </button>
                  <span className="sf-num w-8 text-center text-[15px] font-semibold text-ink" aria-live="polite">{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(999, q + 1))} aria-label="Increase quantity"
                    className="flex h-full w-10 items-center justify-center rounded-r-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-ink">
                    <Icon name="plus" size={15} />
                  </button>
                </div>
                <a
                  href={whatsappLink({ product: p, qty, url: shareUrl(p) })}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-[15px] font-bold tracking-[-0.02em] text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#1EBE5B] hover:shadow-md"
                >
                  <SFWhatsAppGlyph size={20} /> Enquire on WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-gray-500">
                <span>Opens WhatsApp with this product and quantity filled in.</span>
                <button onClick={copy} className="inline-flex items-center gap-1.5 font-semibold text-navy-700 transition-colors hover:text-aqua-700">
                  <Icon name={copied ? "check" : "link"} size={14} /> {copied ? "Link copied" : "Copy link"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

window.SF_ShopScreen = ShopScreen;
