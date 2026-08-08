// ============================================================
// Superfluids — component kit (Anchor-inspired design language)
//
// Everything here is local. The vendored design system supplies
// tokens and the Lucide `Icon` wrapper; the marketing components
// that carry the visual language are built here.
// ============================================================

const DSK = window.SuperfluidsDesignSystem_e3893d;
const Icon = DSK.Icon;

// ---- hooks --------------------------------------------------

function useMedia(query) {
  const [m, setM] = React.useState(() => {
    try { return window.matchMedia(query).matches; } catch { return false; }
  });
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const fn = (e) => setM(e.matches);
    mq.addEventListener("change", fn);
    setM(mq.matches);
    return () => mq.removeEventListener("change", fn);
  }, [query]);
  return m;
}

const useMobile = () => useMedia("(max-width: 900px)");

// Reveal-on-scroll. Falls back to visible if IO is unavailable.
function Reveal({ children, delay = 0, as: As = "div", style = {}, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add("is-in"); io.unobserve(el); }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref} className="sf-reveal" style={{ transitionDelay: delay + "ms", ...style }} {...rest}>
      {children}
    </As>
  );
}

// ---- layout -------------------------------------------------

const TONES = {
  light: { background: "var(--white)" },
  alt: { background: "var(--gray-50)" },
  navy: { background: "var(--navy-800)", color: "var(--white)" },
  deep: { background: "var(--gradient-navy)", color: "var(--white)" },
};

function Section({ children, tone = "light", size = "lg", id, style = {}, bleed = false }) {
  const pad = size === "sm" ? "var(--section-y-sm)" : size === "xs" ? "var(--section-y-xs)" : "var(--section-y)";
  return (
    <section id={id} style={{ ...TONES[tone], paddingTop: pad, paddingBottom: pad, ...style }}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

function Container({ children, width = "var(--container-max)", style = {} }) {
  return (
    <div style={{ maxWidth: width, margin: "0 auto", padding: "0 var(--gutter)", ...style }}>
      {children}
    </div>
  );
}

// Responsive grid: `cols` desktop, `mob` mobile.
function Grid({ children, cols = 3, mob = 1, gap = 24, style = {} }) {
  const isMobile = useMobile();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${isMobile ? mob : cols}, minmax(0, 1fr))`,
      gap: isMobile ? Math.min(gap, 16) : gap,
      ...style,
    }}>{children}</div>
  );
}

// ---- type ---------------------------------------------------

function Eyebrow({ children, tone = "accent" }) {
  return (
    <span className="sf-eyebrow" style={tone === "onDark" ? { color: "var(--aqua-400)" } : undefined}>
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, body, align = "left", onDark = false, max = 720, action, style = {} }) {
  const isMobile = useMobile();
  const centered = align === "center";
  return (
    <div style={{
      display: "flex",
      alignItems: isMobile || !action ? "flex-start" : "flex-end",
      justifyContent: "space-between",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 20 : 32,
      ...style,
    }}>
      <div style={{
        display: "flex", flexDirection: "column", gap: 14,
        maxWidth: max,
        alignItems: centered ? "center" : "flex-start",
        textAlign: centered ? "center" : "left",
        margin: centered ? "0 auto" : undefined,
      }}>
        {eyebrow && <Eyebrow tone={onDark ? "onDark" : "accent"}>{eyebrow}</Eyebrow>}
        {title && <h2 className={"sf-h2" + (onDark ? " sf-on-dark" : "")}>{title}</h2>}
        {body && <p className={"sf-body-lg" + (onDark ? " sf-on-dark-muted" : "")}>{body}</p>}
      </div>
      {action}
    </div>
  );
}

// ---- button -------------------------------------------------
//
// Contrast note: aqua #00B7C7 fails WCAG AA behind white text
// (2.2:1), so the accent button pairs aqua with navy text (6.7:1).
// Navy behind white is 15:1.

const BTN_SIZES = {
  sm: { padding: "9px 16px", fontSize: 14 },
  md: { padding: "12px 22px", fontSize: 15 },
  lg: { padding: "15px 28px", fontSize: 16 },
};

function Button({
  children, variant = "primary", size = "md", icon, iconLeft,
  onClick, href, type, fullWidth, style = {}, ...rest
}) {
  const [hov, setHov] = React.useState(false);
  const V = {
    primary: {
      background: hov ? "var(--navy-700)" : "var(--navy-800)",
      color: "var(--white)", border: "1px solid transparent",
    },
    accent: {
      background: hov ? "var(--aqua-400)" : "var(--aqua-600)",
      color: "var(--navy-900)", border: "1px solid transparent",
    },
    outline: {
      background: hov ? "var(--gray-50)" : "transparent",
      color: "var(--navy-800)", border: "1px solid var(--gray-300)",
    },
    onDark: {
      background: hov ? "rgba(255,255,255,0.88)" : "var(--white)",
      color: "var(--navy-900)", border: "1px solid transparent",
    },
    outlineDark: {
      background: hov ? "rgba(255,255,255,0.1)" : "transparent",
      color: "var(--white)", border: "1px solid rgba(255,255,255,0.28)",
    },
    ghost: {
      background: "transparent",
      color: hov ? "var(--navy-800)" : "var(--gray-600)",
      border: "1px solid transparent", padding: 0,
    },
  }[variant];

  const El = href ? "a" : "button";
  return (
    <El
      href={href} type={El === "button" ? (type || "button") : undefined} onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center", justifyContent: "center", gap: 9,
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-body)", fontWeight: 500,
        letterSpacing: "-0.01em", cursor: "pointer", whiteSpace: "nowrap",
        transition: "background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)",
        ...BTN_SIZES[size], ...V, ...style,
      }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={17} />}
      {children}
      {icon && <Icon name={icon} size={17} />}
    </El>
  );
}

// ---- media --------------------------------------------------
//
// The photo slot. Clean placeholder until real photography lands;
// `inset` renders a floating card over the lower corner — the
// "data inset over imagery" treatment.

function MediaFrame({
  label, ratio = "16 / 10", height, inset, insetPos = "bottom-left",
  icon = "image", tone = "navy", style = {},
}) {
  const bg = tone === "light"
    ? "var(--gray-100)"
    : tone === "alt"
      ? "linear-gradient(150deg, #16335c 0%, #0E2341 100%)"
      : "var(--gradient-navy)";
  const dark = tone !== "light";
  const pos = {
    "bottom-left": { left: 20, bottom: 20 },
    "bottom-right": { right: 20, bottom: 20 },
    "top-right": { right: 20, top: 20 },
  }[insetPos];

  return (
    <div style={{
      position: "relative", width: "100%",
      aspectRatio: height ? undefined : ratio, height,
      background: bg, overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--gray-200)",
      ...style,
    }}>
      {/* blueprint grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: dark
          ? "linear-gradient(rgba(0,183,199,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.09) 1px, transparent 1px)"
          : "linear-gradient(rgba(14,35,65,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,35,65,0.05) 1px, transparent 1px)",
        backgroundSize: "34px 34px",
        maskImage: "radial-gradient(120% 120% at 68% 22%, #000 30%, transparent 82%)",
      }} />
      {dark && (
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(78% 68% at 74% 24%, rgba(0,183,199,0.16), transparent 62%)" }} />
      )}

      {label && (
        <span style={{
          position: "absolute", left: 20, top: 18,
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
          fontWeight: 500,
          color: dark ? "rgba(255,255,255,0.62)" : "var(--gray-500)",
        }}>
          <Icon name={icon} size={14} color={dark ? "var(--aqua-400)" : "var(--gray-400)"} />
          {label}
        </span>
      )}

      {inset && <div style={{ position: "absolute", ...pos, maxWidth: "min(300px, 72%)" }}>{inset}</div>}
    </div>
  );
}

// Floating data card used inside MediaFrame.
function InsetCard({ title, value, suffix, caption, chart, style = {} }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.94)",
      backdropFilter: "var(--blur-md)", WebkitBackdropFilter: "var(--blur-md)",
      border: "1px solid rgba(255,255,255,0.6)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "16px 18px",
      display: "flex", flexDirection: "column", gap: 10,
      ...style,
    }}>
      {title && (
        <span style={{ fontSize: 11, letterSpacing: "0.09em", textTransform: "uppercase", fontWeight: 600, color: "var(--gray-500)" }}>
          {title}
        </span>
      )}
      {value && (
        <span className="sf-num" style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.035em", color: "var(--navy-800)", lineHeight: 1 }}>
          {value}{suffix && <span style={{ color: "var(--aqua-600)" }}>{suffix}</span>}
        </span>
      )}
      {chart}
      {caption && <span style={{ fontSize: 12.5, color: "var(--gray-500)", lineHeight: 1.45 }}>{caption}</span>}
    </div>
  );
}

// Small inline bar chart — the "graph" in the inset treatment.
function MiniChart({ data = [38, 52, 45, 68, 60, 82, 74], height = 40, highlight = -1 }) {
  const max = Math.max(...data, 1);
  const hi = highlight < 0 ? data.length + highlight : highlight;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height }} aria-hidden="true">
      {data.map((v, i) => (
        <div key={i} style={{
          flex: 1,
          height: Math.max(8, (v / max) * height),
          borderRadius: "var(--radius-xs)",
          background: i === hi ? "var(--aqua-600)" : "var(--gray-200)",
        }} />
      ))}
    </div>
  );
}

// ---- content blocks ----------------------------------------

function CheckList({ items, columns = 1, onDark = false, gap = 12 }) {
  const isMobile = useMobile();
  return (
    <ul style={{
      margin: 0, padding: 0, listStyle: "none",
      display: "grid",
      gridTemplateColumns: `repeat(${isMobile ? 1 : columns}, minmax(0,1fr))`,
      gap: `${gap}px 28px`,
    }}>
      {items.map((t) => (
        <li key={t} style={{
          display: "flex", alignItems: "flex-start", gap: 11,
          fontSize: "var(--text-sm)", lineHeight: 1.55,
          color: onDark ? "rgba(255,255,255,0.78)" : "var(--text-primary)",
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 19, height: 19, flexShrink: 0, marginTop: 1,
            borderRadius: "50%", background: "var(--aqua-600)", color: "var(--navy-900)",
          }}>
            <Icon name="check" size={12} strokeWidth={3} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

// Stat band — value/suffix split, hairline dividers.
function StatBand({ stats, onDark = true, columns }) {
  const isMobile = useMobile();
  const cols = columns || stats.length;
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${isMobile ? 2 : cols}, minmax(0,1fr))`,
      gap: isMobile ? "28px 16px" : 0,
    }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{
          display: "flex", flexDirection: "column", gap: 8,
          padding: isMobile ? 0 : "0 32px",
          borderLeft: !isMobile && i > 0
            ? (onDark ? "1px solid rgba(255,255,255,0.16)" : "1px solid var(--gray-200)")
            : "none",
        }}>
          <span className="sf-num" style={{
            fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 500,
            letterSpacing: "-0.045em", lineHeight: 1,
            color: onDark ? "var(--white)" : "var(--navy-800)",
          }}>
            {s.value}
            {s.suffix && <span style={{ color: "var(--aqua-400)" }}>{s.suffix}</span>}
          </span>
          <span style={{
            fontSize: 14, lineHeight: 1.45,
            color: onDark ? "rgba(255,255,255,0.62)" : "var(--gray-500)",
          }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

// Bordered tile — product portfolio / capability grids.
function Tile({ icon, title, description, meta, onClick, compact = false }) {
  const [hov, setHov] = React.useState(false);
  const interactive = !!onClick;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={interactive ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(e); } } : undefined}
      style={{
        display: "flex", flexDirection: "column", gap: compact ? 8 : 12,
        padding: compact ? "20px 22px" : "28px 26px",
        background: "var(--white)",
        border: "1px solid " + (hov && interactive ? "var(--aqua-400)" : "var(--gray-200)"),
        borderRadius: "var(--radius-lg)",
        cursor: interactive ? "pointer" : "default",
        transition: "border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
        boxShadow: hov && interactive ? "var(--shadow-md)" : "none",
        height: "100%",
      }}
    >
      {icon && (
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 40, height: 40, marginBottom: 4,
          borderRadius: "var(--radius-sm)",
          background: hov && interactive ? "var(--aqua-600)" : "var(--aqua-50)",
          color: hov && interactive ? "var(--navy-900)" : "var(--aqua-700)",
          transition: "var(--transition-base)",
        }}>
          <Icon name={icon} size={20} strokeWidth={1.9} />
        </span>
      )}
      <h3 className="sf-h4" style={{ fontSize: compact ? 16 : 19 }}>{title}</h3>
      {description && <p className="sf-body" style={{ fontSize: 14.5 }}>{description}</p>}
      {meta && (
        <span style={{ marginTop: "auto", paddingTop: 10, fontSize: 13, color: "var(--gray-400)" }}>{meta}</span>
      )}
      {interactive && (
        <span style={{
          marginTop: "auto", paddingTop: 12, display: "inline-flex", alignItems: "center", gap: 7,
          fontSize: 14, fontWeight: 500,
          color: hov ? "var(--navy-800)" : "var(--color-secondary)",
        }}>
          View <Icon name="arrow-right" size={15} />
        </span>
      )}
    </div>
  );
}

// Inline bordered pills — sectors, capabilities, outcomes.
function PillRow({ items, numbered = false, onDark = false }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {items.map((t, i) => (
        <span key={t} style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "9px 16px",
          border: "1px solid " + (onDark ? "rgba(255,255,255,0.18)" : "var(--gray-200)"),
          borderRadius: "var(--radius-pill)",
          fontSize: 14, fontWeight: 450,
          color: onDark ? "rgba(255,255,255,0.86)" : "var(--text-primary)",
          background: onDark ? "rgba(255,255,255,0.04)" : "var(--white)",
        }}>
          {numbered && (
            <span className="sf-num" style={{ color: "var(--aqua-600)", fontWeight: 600, fontSize: 12.5 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          )}
          {t}
        </span>
      ))}
    </div>
  );
}

// Horizontal card carousel with arrow controls.
function Carousel({ children, cardWidth = 340, gap = 20 }) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({ start: true, end: false });

  const sync = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setState({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  React.useEffect(() => {
    sync();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => { el.removeEventListener("scroll", sync); window.removeEventListener("resize", sync); };
  }, [sync]);

  const nudge = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  const Arrow = ({ dir, disabled }) => (
    <button
      onClick={() => nudge(dir)}
      disabled={disabled}
      aria-label={dir < 0 ? "Previous" : "Next"}
      style={{
        width: 42, height: 42, flexShrink: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--gray-300)",
        background: "var(--white)",
        color: disabled ? "var(--gray-300)" : "var(--navy-800)",
        cursor: disabled ? "default" : "pointer",
        transition: "var(--transition-base)",
      }}
    >
      <Icon name={dir < 0 ? "arrow-left" : "arrow-right"} size={18} />
    </button>
  );

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: -70, right: 0, display: "flex", gap: 8 }}>
        <Arrow dir={-1} disabled={state.start} />
        <Arrow dir={1} disabled={state.end} />
      </div>
      <div ref={ref} className="sf-scroller" style={{ display: "flex", gap, paddingBottom: 4 }}>
        {React.Children.map(children, (c) => (
          <div style={{ flex: `0 0 ${cardWidth}px`, maxWidth: "86vw" }}>{c}</div>
        ))}
      </div>
    </div>
  );
}

// Rotating 3D logo cylinder. Logos sit around a horizontal circle;
// the CSS animation spins the stage, backface-visibility hides the
// rear arc, and a horizontal mask fades both edges.
function LogoCylinder({ logos, height = 132, itemWidth = 190, speed = 46, onDark = false }) {
  const isMobile = useMobile();
  const w = isMobile ? 140 : itemWidth;
  const step = 360 / logos.length;
  // Radius that spaces items without overlap at this step angle.
  const radius = Math.round((w / 2) / Math.tan((step / 2) * Math.PI / 180));

  return (
    <div className="sf-cylinder relative w-full" style={{ height: isMobile ? 104 : height }}>
      <div
        className="sf-cylinder-stage absolute inset-0"
        style={{ "--sf-spin": speed + "s" }}
      >
        {logos.map((l, i) => (
          <div
            key={l}
            className="sf-cylinder-item absolute left-1/2 top-1/2 flex items-center justify-center"
            style={{
              width: w,
              height: isMobile ? 44 : 56,
              marginLeft: -w / 2,
              marginTop: isMobile ? -22 : -28,
              transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
            }}
          >
            <span
              className={
                "select-none whitespace-nowrap text-center font-medium tracking-snug " +
                (onDark ? "text-white/55" : "text-gray-400")
              }
              style={{ fontSize: isMobile ? 15 : 19 }}
            >
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Logo wall — placeholder cells until real logo assets land.
function LogoWall({ logos, columns = 5 }) {
  const isMobile = useMobile();
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: `repeat(${isMobile ? 2 : columns}, minmax(0,1fr))`,
      gap: 1, background: "var(--gray-200)",
      border: "1px solid var(--gray-200)", borderRadius: "var(--radius-lg)", overflow: "hidden",
    }}>
      {logos.map((l) => (
        <div key={l} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 84, padding: "18px 12px", background: "var(--white)",
          fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em",
          color: "var(--gray-400)", textAlign: "center",
        }}>{l}</div>
      ))}
    </div>
  );
}

// Full-width call to action.
function CTABand({ title, body, primary, secondary, onNavigate }) {
  const isMobile = useMobile();
  return (
    <Section tone="deep" size="sm">
      <div style={{
        display: "flex", flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between", gap: 32,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 680 }}>
          <h2 className="sf-h2 sf-on-dark">{title}</h2>
          {body && <p className="sf-body-lg sf-on-dark-muted">{body}</p>}
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
          {primary && (
            <Button variant="accent" size="lg" icon="arrow-right" onClick={() => onNavigate(primary.to)}>
              {primary.label}
            </Button>
          )}
          {secondary && (
            <Button variant="outlineDark" size="lg" onClick={() => onNavigate(secondary.to)}>
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}

window.SFKit = {
  useMedia, useMobile, Reveal,
  Section, Container, Grid,
  Eyebrow, SectionHead, Button,
  MediaFrame, InsetCard, MiniChart,
  CheckList, StatBand, Tile, PillRow, Carousel, LogoWall, LogoCylinder, CTABand,
  Icon,
};
