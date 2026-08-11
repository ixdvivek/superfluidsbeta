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

// Pill CTAs. The hero pair is the canonical style — every button on
// the site inherits from here so they stay in step.
//
// Contrast: brand navy #000A33 behind white is 18.6:1. Aqua #54BFC6
// behind white is only 2.1:1, so the accent variant pairs aqua with
// navy text instead.

const BTN_SIZES = {
  sm: "px-[14px] py-2 text-[13px]",
  md: "px-[18px] py-2.5 text-[14px] sm:text-[15px]",
  lg: "px-6 py-3 text-[15px] sm:text-base",
};

// Resting states only — every filled variant shares one hover, below.
const BTN_VARIANTS = {
  primary:     "bg-brand-navy text-white",
  white:       "bg-white text-brand-navy",
  accent:      "bg-brand-aqua text-brand-navy",
  outline:     "border border-gray-300 text-brand-navy",
  outlineDark: "border border-white/35 text-white",
  ghost:       "text-gray-600",
};

// Shared hover: lift, fill to the brand light blue, deepen the shadow.
// Navy on #54BFC6 measures 9.1:1, so the label stays readable through
// the transition. Motion is suppressed under prefers-reduced-motion
// by the global rule in tailwind.src.css.
const BTN_HOVER =
  "hover:-translate-y-0.5 hover:bg-brand-aqua hover:text-brand-navy " +
  "hover:border-brand-aqua hover:shadow-md active:translate-y-0";

const BTN_HOVER_GHOST = "hover:-translate-y-0.5 hover:text-brand-navy";

function Button({
  children, variant = "primary", size = "md", icon, iconLeft,
  onClick, href, type, fullWidth, className = "", ...rest
}) {
  const El = href ? "a" : "button";
  const isGhost = variant === "ghost";
  return (
    <El
      href={href}
      type={El === "button" ? (type || "button") : undefined}
      onClick={onClick}
      className={
        (fullWidth ? "flex w-full " : "inline-flex ") +
        "items-center justify-center gap-2 whitespace-nowrap font-bold tracking-[-0.03em] " +
        "transition-all duration-200 ease-out " +
        (isGhost ? "" : "rounded-full ") +
        (isGhost ? "text-[14px] sm:text-[15px] " : BTN_SIZES[size] + " ") +
        BTN_VARIANTS[variant] + " " +
        (isGhost ? BTN_HOVER_GHOST : BTN_HOVER) + " " + className
      }
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={16} />}
      {children}
      {icon && <Icon name={icon} size={16} />}
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
// Bordered tile. Interactive tiles invert on hover — brand navy fill,
// white text, border dropped — driven by group-hover rather than React
// state so the whole card transitions as one.
function Tile({ icon, title, description, meta, onClick, compact = false }) {
  const interactive = !!onClick;

  return (
    <div
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={interactive ? (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(e); }
      } : undefined}
      className={
        "group flex h-full flex-col rounded-lg border bg-white " +
        "transition-all duration-200 ease-out " +
        (compact ? "gap-2 px-[22px] py-5 " : "gap-3 px-[26px] py-7 ") +
        (interactive
          ? "cursor-pointer border-line hover:-translate-y-1 hover:border-transparent " +
            "hover:bg-brand-navy hover:shadow-lg focus-visible:-translate-y-1 " +
            "focus-visible:border-transparent focus-visible:bg-brand-navy"
          : "border-line")
      }
    >
      {icon && (
        <span
          className={
            "mb-1 inline-flex h-10 w-10 items-center justify-center rounded-sm " +
            "bg-aqua-50 text-aqua-700 transition-colors duration-200 ease-out " +
            (interactive
              ? "group-hover:bg-brand-aqua group-hover:text-brand-navy " +
                "group-focus-visible:bg-brand-aqua group-focus-visible:text-brand-navy"
              : "")
          }
        >
          <Icon name={icon} size={20} strokeWidth={1.9} />
        </span>
      )}

      <h3
        className={
          "font-semibold tracking-snug text-ink transition-colors duration-200 ease-out " +
          (compact ? "text-[16px] " : "text-[19px] ") +
          (interactive ? "group-hover:text-white group-focus-visible:text-white" : "")
        }
      >
        {title}
      </h3>

      {description && (
        <p
          className={
            "text-[14.5px] leading-relaxed text-gray-500 transition-colors duration-200 ease-out " +
            (interactive ? "group-hover:text-white/70 group-focus-visible:text-white/70" : "")
          }
        >
          {description}
        </p>
      )}

      {meta && (
        <span
          className={
            "mt-auto pt-2.5 text-xs text-gray-400 transition-colors duration-200 ease-out " +
            (interactive ? "group-hover:text-white/50 group-focus-visible:text-white/50" : "")
          }
        >
          {meta}
        </span>
      )}

      {interactive && (
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-blue-600 transition-colors duration-200 ease-out group-hover:text-brand-aqua group-focus-visible:text-brand-aqua">
          View
          <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
            <Icon name="arrow-right" size={15} />
          </span>
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
// Horizontal card carousel.
//
// The header is rendered here rather than by the page: the arrows need
// the scroll state, and when the page drew its own header the absolutely
// positioned controls landed on top of its action button. Owning both
// keeps them on one baseline with no overlap.
function Carousel({
  children, cardWidth = 340, gap = 20,
  eyebrow, title, body, action,
}) {
  const ref = React.useRef(null);
  const [state, setState] = React.useState({ start: true, end: false });
  const isMobile = useMobile();

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
      className={
        "inline-flex h-9 w-9 flex-none items-center justify-center rounded-full " +
        "text-brand-navy transition-all duration-200 ease-out " +
        (disabled
          ? "cursor-default opacity-20"
          : "hover:-translate-y-0.5 hover:text-brand-aqua")
      }
    >
      <Icon name={dir < 0 ? "arrow-left" : "arrow-right"} size={20} />
    </button>
  );

  const controls = (
    <div className="flex flex-none items-center gap-1">
      <Arrow dir={-1} disabled={state.start} />
      <Arrow dir={1} disabled={state.end} />
    </div>
  );

  const hasHeader = eyebrow || title || body || action;

  return (
    <div>
      {hasHeader && (
        <SectionHead
          eyebrow={eyebrow}
          title={title}
          body={body}
          style={{ marginBottom: isMobile ? 28 : 44 }}
          action={
            <div className="flex items-center gap-4">
              {controls}
              {action}
            </div>
          }
        />
      )}

      <div ref={ref} className="sf-scroller flex pb-1" style={{ gap }}>
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
function LogoCylinder({
  logos, height = 132, itemWidth = 190, speed = 46, onDark = false, minFaces = 9,
}) {
  const isMobile = useMobile();
  const w = isMobile ? 130 : itemWidth;

  // With only a handful of marks the cylinder reads as sparse — you see
  // one at a time with dead space between. Repeat the set until there
  // are enough faces for the rotation to feel continuous.
  const faces = React.useMemo(() => {
    if (!logos || !logos.length) return [];
    const target = Math.max(minFaces, logos.length);
    const out = [];
    while (out.length < target) out.push(...logos);
    return out.slice(0, target);
  }, [logos, minFaces]);

  const step = 360 / Math.max(faces.length, 1);
  const radius = Math.round((w / 2) / Math.tan((step / 2) * Math.PI / 180));
  if (!faces.length) return null;

  return (
    <div className="sf-cylinder relative w-full" style={{ height: isMobile ? Math.round(height * 0.8) : height }}>
      <div className="sf-cylinder-stage absolute inset-0" style={{ "--sf-spin": speed + "s" }}>
        {faces.map((l, i) => {
          const isImg = l && typeof l === "object";
          return (
            <div
              key={i}
              className="sf-cylinder-item absolute left-1/2 top-1/2 flex items-center justify-center"
              style={{
                width: w, height: isMobile ? 40 : 48,
                marginLeft: -w / 2, marginTop: isMobile ? -20 : -24,
                transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
              }}
            >
              {isImg ? (
                <img src={l.src} alt={l.name}
                  className="h-[18px] w-auto max-w-full opacity-95 sm:h-7"
                  loading="lazy" decoding="async" />
              ) : (
                <span
                  className={
                    "select-none whitespace-nowrap text-center font-medium tracking-snug " +
                    (onDark ? "text-white/90" : "text-gray-400")
                  }
                  style={{ fontSize: isMobile ? 15 : 19 }}
                >{l}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Full-bleed video backdrop for hero bands.
//
// Degrades in three steps, so the page is correct at every stage:
//   1. no file present, or the fetch 404s  → navy gradient only
//   2. reduced motion, or small screens    → poster image, no video
//   3. otherwise                           → looping muted video
//
// A navy scrim always sits above the media: white hero text needs it to
// stay legible over moving footage, and it keeps the brand temperature
// cool regardless of what the clip is doing.
function VideoBackdrop({
  src, webm, poster, children, onActive,
  // Defaults suit a dark navy band. Pass filter="none" plus your own
  // scrim/tint for a light treatment.
  filter = "brightness(0.46) contrast(1.12) saturate(1.35)",
  tintClass = "bg-navy-900/45",
  scrim = "linear-gradient(100deg, rgba(8,23,40,0.90) 0%, rgba(8,23,40,0.74) 44%, rgba(14,35,65,0.36) 100%)",
  baseClass,
}) {
  const [videoOk, setVideoOk] = React.useState(false);
  const [posterOk, setPosterOk] = React.useState(false);
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const isMobile = useMobile();

  // Gated on the poster: it acts as the existence probe, so no requests
  // are made for a video that has not been supplied yet. A poster is
  // wanted regardless — it covers the buffer before first frame.
  const wantsVideo = !!src && posterOk && !reduced && !isMobile;

  // Probe the poster separately — it may exist before the video does.
  React.useEffect(() => {
    if (!poster) return;
    const img = new Image();
    img.onload = () => setPosterOk(true);
    img.onerror = () => setPosterOk(false);
    img.src = poster;
  }, [poster]);

  // Let the host hide decoration that would compete with live footage.
  React.useEffect(() => {
    if (onActive) onActive(videoOk || posterOk);
  }, [videoOk, posterOk, onActive]);

  return (
    <React.Fragment>
      {/* base: always painted, so a missing file is never a white hole */}
      <span aria-hidden="true" className={"absolute inset-0 " + (baseClass || "")}
        style={baseClass ? undefined : { background: "linear-gradient(160deg,#0E2341 0%,#081728 100%)" }} />

      {posterOk && (
        <span aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(" + poster + ")", filter }} />
      )}

      {wantsVideo && (
        <video
          className={
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out " +
            (videoOk ? "opacity-100" : "opacity-0")
          }
          style={{ filter }}
          autoPlay muted loop playsInline preload="metadata"
          poster={posterOk ? poster : undefined}
          aria-hidden="true" tabIndex={-1}
          onCanPlay={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src={src} type="video/mp4" />
        </video>
      )}

      {(videoOk || posterOk) && tintClass && (
        <span aria-hidden="true" className={"absolute inset-0 " + tintClass} />
      )}

      {(videoOk || posterOk) && scrim && (
        <span aria-hidden="true" className="absolute inset-0" style={{ background: scrim }} />
      )}

      {children}
    </React.Fragment>
  );
}

// Breadcrumb trail. Items: [{label, to}] — last item is the current page.
function Breadcrumb({ items, onNavigate, onDark = false }) {
  const base = onDark ? "text-white/45" : "text-gray-400";
  const link = onDark ? "hover:text-white" : "hover:text-navy-800";
  const current = onDark ? "text-white/80" : "text-gray-600";
  return (
    <nav aria-label="Breadcrumb" className={"flex flex-wrap items-center gap-1.5 text-xs " + base}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={it.label + i}>
            {i > 0 && <Icon name="chevron-right" size={13} />}
            {last || !it.to ? (
              <span className={current} aria-current={last ? "page" : undefined}>{it.label}</span>
            ) : (
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate(it.to); }}
                 className={"transition-colors duration-200 " + link}>{it.label}</a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

// Interior page hero — navy band with breadcrumb, eyebrow, title, body.
function PageHero({ eyebrow, title, body, crumbs, onNavigate, children, media }) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <span aria-hidden="true" className="absolute inset-0"
        style={{ background: "linear-gradient(160deg,#0E2341 0%,#081728 100%)" }} />
      <div className="relative mx-auto max-w-container px-5 pb-14 pt-28 sm:px-gutter sm:pb-20 sm:pt-36">
        {crumbs && <Breadcrumb items={crumbs} onNavigate={onNavigate} onDark />}
        <div className={"mt-6 grid gap-10 " + (media ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16" : "")}>
          <div className="flex max-w-[760px] flex-col gap-4">
            {eyebrow && <Eyebrow tone="onDark">{eyebrow}</Eyebrow>}
            <h1 className="text-balance text-[32px] font-medium leading-[1.08] tracking-display text-white sm:text-h1">
              {title}
            </h1>
            {body && <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">{body}</p>}
            {children}
          </div>
          {media}
        </div>
      </div>
    </section>
  );
}

// Technical specification table.
function SpecTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line">
      <table className="w-full border-collapse text-left">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={k} className={i % 2 ? "bg-gray-50" : "bg-white"}>
              <th scope="row" className="w-2/5 border-b border-line px-4 py-3 text-sm font-medium text-gray-600 sm:px-5">
                {k}
              </th>
              <td className="sf-num border-b border-line px-4 py-3 text-sm text-ink sm:px-5">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Product hero: main media plus a thumbnail row, copy alongside.
function SplitHero({ eyebrow, title, body, highlights, crumbs, onNavigate, icon, actions, thumbs = 4 }) {
  return (
    <section className="relative overflow-hidden bg-navy-800">
      <span aria-hidden="true" className="absolute inset-0"
        style={{ background: "linear-gradient(160deg,#0E2341 0%,#081728 100%)" }} />
      <div className="relative mx-auto max-w-container px-5 pb-14 pt-28 sm:px-gutter sm:pb-20 sm:pt-36">
        {crumbs && <Breadcrumb items={crumbs} onNavigate={onNavigate} onDark />}
        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="flex flex-col gap-3">
            <MediaFrame icon={icon} label={title} ratio="4 / 3" tone="alt" />
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: thumbs }).map((_, i) => (
                <MediaFrame key={i} icon={icon} ratio="1 / 1" tone="navy" style={{ borderRadius: "var(--radius-md)" }} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {eyebrow && <Eyebrow tone="onDark">{eyebrow}</Eyebrow>}
            <h1 className="text-balance text-[30px] font-medium leading-[1.1] tracking-display text-white sm:text-[44px]">
              {title}
            </h1>
            {body && <p className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">{body}</p>}
            {highlights && highlights.length > 0 && (
              <div className="mt-1">
                <CheckList items={highlights} onDark />
              </div>
            )}
            {actions && <div className="mt-3 flex flex-wrap gap-3">{actions}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

// Image gallery grid.
function Gallery({ count = 6, icon = "image", labels = [] }) {
  return (
    <Grid cols={3} mob={2} gap={16}>
      {Array.from({ length: count }).map((_, i) => (
        <MediaFrame key={i} icon={icon} ratio="4 / 3" label={labels[i]} />
      ))}
    </Grid>
  );
}

// Numbered process steps.
function Steps({ steps, onDark = false }) {
  return (
    <ol className="m-0 list-none p-0">
      {steps.map((s, i) => {
        const label = typeof s === "string" ? s : s.step;
        const detail = typeof s === "string" ? null : s.detail;
        return (
          <li key={label}
            className={"flex gap-5 border-b py-5 last:border-b-0 " + (onDark ? "border-white/10" : "border-line")}>
            <span className={"sf-num flex-none text-sm font-semibold " + (onDark ? "text-aqua-400" : "text-aqua-600")}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex flex-col gap-1">
              <span className={"text-base font-medium tracking-snug " + (onDark ? "text-white" : "text-ink")}>
                {label}
              </span>
              {detail && (
                <span className={"text-sm leading-relaxed " + (onDark ? "text-white/60" : "text-gray-500")}>
                  {detail}
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

// Select-style filter control.
function FilterSelect({ label, value, options, onChange }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2.5 pl-3.5 pr-9 text-sm text-ink transition-colors duration-200 hover:border-gray-400 focus:border-blue-600"
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon name="chevron-down" size={16} />
        </span>
      </div>
    </label>
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
  Breadcrumb, PageHero, SpecTable, SplitHero, Gallery, Steps, FilterSelect,
  VideoBackdrop,
  Icon,
};
