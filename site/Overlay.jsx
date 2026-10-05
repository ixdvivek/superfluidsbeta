// ============================================================
// Superfluids — modal shell, image slider, shop helpers
// Extends window.SFKit. Wrapped in an IIFE: text/babel scripts share one
// global scope, so top-level names here would collide with Kit.jsx.
// ============================================================

(function () {
  const K = window.SFKit;
  const { Icon, MediaFrame } = K;

  // ---- helpers ------------------------------------------------

  // "AED 1,250" or "Price on request". A product with no numeric price —
  // null, 0, missing — is treated as on request, so the data can switch a
  // line to quote-only just by clearing the field.
  function priceLabel(p) {
    if (p == null || p.price == null || p.price === "" || Number(p.price) <= 0) return "Price on request";
    const n = Number(p.price);
    const cur = p.currency || "AED";
    return cur + " " + n.toLocaleString("en-US", {
      minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2,
    });
  }

  function hasPrice(p) {
    return p && p.price != null && p.price !== "" && Number(p.price) > 0;
  }

  // wa.me link with the enquiry pre-filled. The product URL goes last so
  // WhatsApp renders it as a tappable link under the message.
  function whatsappLink({ product, qty = 1, url }) {
    const num = (window.SFData.company && window.SFData.company.whatsapp) || "";
    const lines = ["Hello Superfluids, I'd like to enquire about:"];
    if (product) {
      lines.push("", product.name);
      if (product.brand) lines.push("Brand: " + product.brand);
      if (product.sku) lines.push("Model: " + product.sku);
      lines.push("Price: " + priceLabel(product));
      lines.push("Quantity: " + qty);
    }
    if (url) lines.push("", url);
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  // ---- image with placeholder fallback ------------------------

  // A real photo when one exists and loads; the blueprint MediaFrame when
  // the path is empty or 404s. Lets the data reference files before they
  // have been delivered without anything rendering broken.
  // `mark` puts the icon large in the middle of the placeholder — used on
  // product cards, where a blank light frame otherwise reads as missing.
  function SmartImage({ src, alt = "", fit = "cover", ratio = "4 / 3", icon = "image", label, tone = "navy", mark = false, className = "", style = {} }) {
    const [failed, setFailed] = React.useState(false);
    React.useEffect(() => { setFailed(false); }, [src]);
    if (!src || failed) {
      if (!mark) return <MediaFrame icon={icon} label={label} ratio={ratio} tone={tone} style={style} />;
      return (
        <div className="relative">
          <MediaFrame icon={icon} label={label} ratio={ratio} tone={tone} style={style} />
          <span aria-hidden="true" className={"pointer-events-none absolute inset-0 flex items-center justify-center " + (tone === "light" ? "text-gray-300" : "text-white/25")}>
            <Icon name={icon} size={56} strokeWidth={1.25} />
          </span>
        </div>
      );
    }
    return (
      <div
        className={"relative w-full overflow-hidden rounded-lg " + (fit === "contain" ? "bg-white " : "bg-gray-100 ") + className}
        style={{ aspectRatio: ratio, ...style }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={"absolute inset-0 h-full w-full " + (fit === "contain" ? "object-contain p-6" : "object-cover")}
        />
      </div>
    );
  }

  // ---- modal --------------------------------------------------

  // Centred dialog on desktop, bottom sheet on phones. Locks the #app
  // scroller (the page scrolls inside #app, not the window), closes on Esc
  // and backdrop click, and hands focus back to whatever opened it.
  function Modal({ open, onClose, label, children, maxWidth = 1080 }) {
    const panelRef = React.useRef(null);
    const [mounted, setMounted] = React.useState(open);
    const [shown, setShown] = React.useState(false);

    React.useEffect(() => {
      if (open) {
        setMounted(true);
        const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
        return () => cancelAnimationFrame(id);
      }
      setShown(false);
      const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const t = setTimeout(() => setMounted(false), reduced ? 0 : 260);
      return () => clearTimeout(t);
    }, [open]);

    React.useEffect(() => {
      if (!open) return;
      const prevFocus = document.activeElement;
      const app = document.getElementById("app");
      const prevOverflow = app ? app.style.overflow : "";
      if (app) app.style.overflow = "hidden";
      const onKey = (e) => {
        if (e.key === "Escape") { e.stopPropagation(); onClose(); }
        if (e.key === "Tab" && panelRef.current) {
          // Keep Tab inside the dialog.
          const f = panelRef.current.querySelectorAll('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
          if (!f.length) return;
          const first = f[0], last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      document.addEventListener("keydown", onKey);
      const id = requestAnimationFrame(() => panelRef.current && panelRef.current.focus());
      return () => {
        cancelAnimationFrame(id);
        document.removeEventListener("keydown", onKey);
        if (app) app.style.overflow = prevOverflow;
        if (prevFocus && prevFocus.focus) prevFocus.focus();
      };
    }, [open, onClose]);

    if (!mounted) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[240] flex items-end justify-center sm:items-center sm:p-6">
        <div
          onClick={onClose}
          className={"absolute inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity duration-200 ease-out " + (shown ? "opacity-100" : "opacity-0")}
        />
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={label}
          tabIndex={-1}
          className={
            "relative flex max-h-[92svh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-overlay outline-none " +
            "transition-all duration-[260ms] ease-out sm:max-h-[88vh] sm:rounded-2xl " +
            (shown ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-6 opacity-0 sm:translate-y-2 sm:scale-[0.98]")
          }
          style={{ maxWidth }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md ring-1 ring-black/5 transition-all duration-200 ease-out hover:bg-brand-aqua sm:right-4 sm:top-4"
          >
            <Icon name="x" size={20} />
          </button>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
        </div>
      </div>,
      document.body
    );
  }

  // ---- image slider -------------------------------------------

  // Main image, prev/next, counter and a thumbnail strip. Arrow keys work
  // while the slider is in view; swipe works on touch. With no images the
  // slider shows `placeholders` blueprint frames so the interaction can be
  // reviewed before photography lands.
  function ImageSlider({ images = [], alt = "", fit = "cover", ratio = "4 / 3", icon = "image", placeholders = 4, tone = "navy", keyboard = true }) {
    const slides = images.length ? images : Array.from({ length: placeholders }, () => null);
    const [i, setI] = React.useState(0);
    const n = slides.length;
    const go = React.useCallback((d) => setI((c) => (c + d + n) % n), [n]);
    React.useEffect(() => { setI(0); }, [images]);

    React.useEffect(() => {
      if (!keyboard || n < 2) return;
      const onKey = (e) => {
        if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [keyboard, n, go]);

    const start = React.useRef(null);
    const onPointerDown = (e) => { start.current = e.clientX; };
    const onPointerUp = (e) => {
      if (start.current == null) return;
      const dx = e.clientX - start.current;
      start.current = null;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    };

    const arrow = "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md ring-1 ring-black/5 transition-all duration-200 ease-out hover:bg-brand-aqua";

    return (
      <div className="flex flex-col gap-3">
        <div
          className="relative touch-pan-y select-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          aria-roledescription="carousel"
        >
          <SmartImage
            key={i + ":" + (slides[i] || "")}
            src={slides[i]}
            alt={alt + (n > 1 ? " — image " + (i + 1) + " of " + n : "")}
            fit={fit}
            ratio={ratio}
            icon={icon}
            tone={tone}
            mark
            label={slides[i] ? undefined : "Image " + (i + 1) + " of " + n}
          />
          {n > 1 && (
            <React.Fragment>
              <button className={arrow + " left-3"} onClick={() => go(-1)} aria-label="Previous image">
                <Icon name="chevron-left" size={20} />
              </button>
              <button className={arrow + " right-3"} onClick={() => go(1)} aria-label="Next image">
                <Icon name="chevron-right" size={20} />
              </button>
              <span className="sf-num absolute bottom-3 right-3 z-10 rounded-full bg-navy-900/70 px-2.5 py-1 text-[12px] font-medium text-white">
                {i + 1} / {n}
              </span>
            </React.Fragment>
          )}
        </div>

        {n > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {slides.map((src, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={"Show image " + (k + 1)}
                aria-current={k === i ? "true" : undefined}
                className={
                  "w-[72px] flex-none overflow-hidden rounded-md ring-2 transition-all duration-200 ease-out sm:w-[84px] " +
                  (k === i ? "ring-brand-aqua" : "opacity-60 ring-transparent hover:opacity-100")
                }
              >
                <SmartImage src={src} fit={fit} ratio="1 / 1" icon={icon} tone={tone} style={{ borderRadius: 6 }} />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ---- project gallery popup ----------------------------------

  // Shared by the Home gallery and the "Related projects" strip on service
  // pages. `project` null = closed; the last project is kept while the
  // modal animates out so the content doesn't blank mid-fade.
  function ProjectGalleryModal({ project, onClose }) {
    const last = React.useRef(project);
    if (project) last.current = project;
    const p = project || last.current;
    return (
      <Modal open={!!project} onClose={onClose} label={p ? p.name + " — project gallery" : "Project gallery"} maxWidth={980}>
        {p && (
          <div className="p-4 pb-6 sm:p-6 sm:pb-7">
            {/* Width capped from the viewport height so the 16:10 frame,
                thumbnails and caption fit a laptop screen without scrolling. */}
            <div className="mx-auto flex w-full flex-col gap-5" style={{ maxWidth: "max(320px, calc((88vh - 330px) * 1.6))" }}>
              <ImageSlider images={p.images || []} alt={p.name} icon={p.icon} ratio="16 / 10" placeholders={5} />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div className="flex flex-col gap-1.5">
                  <span className="text-eyebrow font-semibold uppercase tracking-eyebrow text-aqua-700">
                    {p.sector} · {p.country}
                  </span>
                  <h2 className="text-balance text-[22px] font-medium leading-tight tracking-snug text-ink sm:text-h4">{p.name}</h2>
                  {p.tagline && <p className="max-w-[60ch] text-pretty text-sm leading-relaxed text-gray-500">{p.tagline}</p>}
                </div>
                {p.scope && <span className="flex-none text-[13px] font-medium text-gray-500">{p.scope}</span>}
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }

  Object.assign(window.SFKit, { Modal, ImageSlider, SmartImage, ProjectGalleryModal, priceLabel, hasPrice, whatsappLink });
})();
