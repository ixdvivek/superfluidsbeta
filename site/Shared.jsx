// Superfluids website — shared photo placeholder + section wrapper.
const DSx = window.SuperfluidsDesignSystem_e3893d;

// Engineering "photo" placeholder: cool navy gradient + blueprint grid + glyph.
function Photo({ icon = "image", label, height = "100%", radius = "var(--radius-lg)", tone = "navy", style = {} }) {
  const { Icon } = DSx;
  const bg = tone === "navy"
    ? "var(--gradient-navy)"
    : "linear-gradient(150deg, #16335c 0%, #0E2341 100%)";
  return (
    <div style={{
      position: "relative", width: "100%", height, borderRadius: radius, overflow: "hidden",
      background: bg, ...style,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,183,199,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.10) 1px, transparent 1px)",
        backgroundSize: "32px 32px", maskImage: "radial-gradient(120% 120% at 70% 20%, #000 30%, transparent 80%)",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 70% at 75% 25%, rgba(0,183,199,0.18), transparent 60%)" }} />
      <div style={{ position: "absolute", left: 20, bottom: 18, display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.78)" }}>
        <Icon name={icon} size={20} color="var(--aqua-400)" />
        {label && <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em" }}>{label}</span>}
      </div>
    </div>
  );
}

function Section({ children, bg = "var(--bg-page)", py = 96, id, style = {} }) {
  return (
    <section id={id} style={{ background: bg, padding: py + "px 0", ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px" }}>
        {children}
      </div>
    </section>
  );
}

// Reusable interior-page hero — navy band, breadcrumb, eyebrow, title, description.
function PageHero({ eyebrow, title, description, crumb, onNavigate, maskAt = "70% 0%", children }) {
  const { Eyebrow, Breadcrumb } = DSx;
  return (
    <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at " + maskAt + ", #000, transparent 75%)" }} />
      <img src="assets/logos/superfluids-mark.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "-2%", top: "10%", height: "80%", opacity: 0.28, filter: "drop-shadow(0 20px 60px rgba(0,183,199,0.3))", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "52px 32px 68px" }}>
        <Breadcrumb invert items={[{ label: "Home", href: "#", onClick: (e) => { e.preventDefault(); onNavigate && onNavigate("Home"); } }, { label: crumb || title }]} />
        <div style={{ marginTop: 26, maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
          <Eyebrow tone="aqua">{eyebrow}</Eyebrow>
          <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 50, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>{title}</h1>
          {description && <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "var(--text-on-dark-secondary)" }}>{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

// Reusable final call-to-action band (fluid gradient).
function FinalCTA({ onNavigate, title = "Need a fluid engineering partner?", body = "Request a technical consultation and our engineering team will respond within one business day.", cta = "Request Consultation" }) {
  const { Button } = DSx;
  return (
    <Section bg="var(--surface)" py={0} style={{ paddingTop: 0, paddingBottom: 96 }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-2xl)", background: "var(--gradient-fluid)", padding: "64px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at 90% 50%, #000, transparent 70%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 38, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>{title}</h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.9)" }}>{body}</p>
        </div>
        <div style={{ position: "relative", display: "flex", gap: 12 }}>
          <Button size="lg" onClick={() => onNavigate && onNavigate("Contact")} style={{ background: "var(--white)", color: "var(--navy-800)", border: "none" }} iconRight="arrow-right">{cta}</Button>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { SF_Photo: Photo, SF_Section: Section, SF_PageHero: PageHero, SF_FinalCTA: FinalCTA });
