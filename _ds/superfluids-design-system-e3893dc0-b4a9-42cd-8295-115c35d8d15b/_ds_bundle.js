/* @ds-bundle: {"format":3,"namespace":"SuperfluidsDesignSystem_e3893d","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Breadcrumb","sourcePath":"components/core/Breadcrumb.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"FeatureBlock","sourcePath":"components/marketing/FeatureBlock.jsx"},{"name":"LogoBar","sourcePath":"components/marketing/LogoBar.jsx"},{"name":"ProcessTimeline","sourcePath":"components/marketing/ProcessTimeline.jsx"},{"name":"ProjectCard","sourcePath":"components/marketing/ProjectCard.jsx"},{"name":"SolutionCard","sourcePath":"components/marketing/SolutionCard.jsx"},{"name":"SpecTable","sourcePath":"components/marketing/SpecTable.jsx"},{"name":"StatCard","sourcePath":"components/marketing/StatCard.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2b99194ea7d5","components/core/Accordion.jsx":"acb93a18fc62","components/core/Avatar.jsx":"bd5fe64df03a","components/core/Badge.jsx":"3930d8a3f217","components/core/Breadcrumb.jsx":"8dd54aa18ee1","components/core/Button.jsx":"c7b699660bcb","components/core/Card.jsx":"91b7c2a27882","components/core/Checkbox.jsx":"74d3b96650d0","components/core/Eyebrow.jsx":"a8799f2fdbbd","components/core/Icon.jsx":"4c35364e164d","components/core/IconButton.jsx":"871cb6635369","components/core/Input.jsx":"08dc0842517f","components/core/Radio.jsx":"5629433a4b89","components/core/SectionHeader.jsx":"7fdde4a6ee4c","components/core/Select.jsx":"f749779171cc","components/core/Switch.jsx":"e99d0a61f0b0","components/core/Tabs.jsx":"aa6a39813db5","components/core/Textarea.jsx":"65814c6488be","components/marketing/FeatureBlock.jsx":"fa8ecd0c73d0","components/marketing/LogoBar.jsx":"d917600a408d","components/marketing/ProcessTimeline.jsx":"51d7485809f5","components/marketing/ProjectCard.jsx":"1b7c06c22381","components/marketing/SolutionCard.jsx":"ac403d538082","components/marketing/SpecTable.jsx":"b56891a8b85f","components/marketing/StatCard.jsx":"df491cda9598","components/marketing/Testimonial.jsx":"bc35c1c0bcfa","ui_kits/website/ContactScreen.jsx":"ab6b10811b71","ui_kits/website/HomeScreen.jsx":"2890f7d105c9","ui_kits/website/ProductsScreen.jsx":"f8fc5cc90574","ui_kits/website/Shared.jsx":"5bab81e78ebb","ui_kits/website/SiteChrome.jsx":"b5c2e156a0aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SuperfluidsDesignSystem_e3893d = window.SuperfluidsDesignSystem_e3893d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — Superfluids brand lockup.
 * Prefer the real PNG (assets/logos/*) via `src`. With no `src`, renders a
 * styled text fallback: navy "super" + aqua "fluids".
 */
function Logo({
  variant = "navy",
  src,
  height = 32,
  style = {},
  ...rest
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "Superfluids",
      style: {
        height,
        width: "auto",
        display: "block",
        ...style
      }
    }, rest));
  }
  const isLight = variant === "white";
  const baseColor = isLight ? "var(--white)" : "var(--navy-800)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-bold)",
      fontSize: height * 0.82,
      lineHeight: 1,
      letterSpacing: "-0.03em",
      color: baseColor,
      ...style
    }
  }, rest), "super", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--aqua-600)"
    }
  }, "fluids"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular image or initials. Used for leadership profiles & testimonials.
 */
function Avatar({
  src,
  name = "",
  size = 48,
  style = {},
  ...rest
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    title: name,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: src ? "transparent" : "var(--navy-700)",
      color: "var(--white)",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-semibold)",
      fontSize: size * 0.38,
      overflow: "hidden",
      flexShrink: 0,
      boxShadow: "0 0 0 1px var(--border-subtle)",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/category label.
 * Tones: navy, blue, aqua, success, warning, danger, neutral.
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "md",
  style = {},
  ...rest
}) {
  const palette = {
    navy: {
      solid: "var(--navy-800)",
      soft: "var(--gray-100)",
      softText: "var(--navy-800)"
    },
    blue: {
      solid: "var(--blue-600)",
      soft: "var(--blue-50)",
      softText: "var(--blue-700)"
    },
    aqua: {
      solid: "var(--aqua-600)",
      soft: "var(--aqua-50)",
      softText: "var(--aqua-700)"
    },
    success: {
      solid: "var(--green-600)",
      soft: "var(--green-50)",
      softText: "var(--green-600)"
    },
    warning: {
      solid: "var(--amber-600)",
      soft: "var(--amber-50)",
      softText: "var(--amber-600)"
    },
    danger: {
      solid: "var(--red-600)",
      soft: "var(--red-50)",
      softText: "var(--red-600)"
    },
    neutral: {
      solid: "var(--gray-600)",
      soft: "var(--gray-100)",
      softText: "var(--gray-600)"
    }
  };
  const p = palette[tone] || palette.neutral;
  const sizes = {
    sm: {
      fs: 11,
      pad: "3px 8px"
    },
    md: {
      fs: 12,
      pad: "4px 10px"
    },
    lg: {
      fs: 13,
      pad: "5px 12px"
    }
  };
  const s = sizes[size] || sizes.md;
  const styles = variant === "solid" ? {
    background: p.solid,
    color: "var(--white)"
  } : variant === "outline" ? {
    background: "transparent",
    color: p.softText,
    boxShadow: `inset 0 0 0 1px ${p.solid}`
  } : {
    background: p.soft,
    color: p.softText
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-body)",
      fontSize: s.fs,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      padding: s.pad,
      borderRadius: "var(--radius-pill)",
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      ...styles,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container with elevation. The core layout primitive.
 */
function Card({
  children,
  padding = "lg",
  elevation = "card",
  interactive = false,
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px"
  };
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    card: "var(--shadow-card)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: pads[padding] ?? pads.lg,
      boxShadow: shadows[elevation] ?? shadows.card,
      transition: "var(--transition-base)",
      cursor: interactive ? "pointer" : "default",
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.borderColor = "var(--border-default)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = shadows[elevation] ?? shadows.card;
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — small uppercase label above a heading, with optional leading tick.
 */
function Eyebrow({
  children,
  tone = "accent",
  showTick = true,
  style = {},
  ...rest
}) {
  const colors = {
    accent: "var(--color-accent)",
    blue: "var(--color-secondary)",
    navy: "var(--color-primary)",
    muted: "var(--text-secondary)"
  };
  const c = colors[tone] || colors.accent;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: c,
      ...style
    }
  }, rest), showTick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: c,
      borderRadius: 2
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a Lucide icon by name.
 * Requires the Lucide UMD script to be present on the page
 * (https://unpkg.com/lucide@latest). Falls back to an empty box if absent.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const node = ref.current;
    if (!node || !window.lucide) return;
    node.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    node.appendChild(i);
    try {
      window.lucide.createIcons();
    } catch (e) {/* noop */}
    const svg = node.querySelector("svg");
    if (svg) {
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.style.strokeWidth = strokeWidth;
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color,
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Accordion — expandable FAQ list. Pass `items` of { question, answer }.
 */
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(allowMultiple ? defaultOpen >= 0 ? [defaultOpen] : [] : defaultOpen);
  const isOpen = i => allowMultiple ? open.includes(i) : open === i;
  const toggle = i => {
    if (allowMultiple) {
      setOpen(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
    } else {
      setOpen(prev => prev === i ? -1 : i);
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...style
    }
  }, rest), items.map((item, i) => {
    const expanded = isOpen(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: expanded ? "var(--shadow-sm)" : "none",
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "18px 22px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-heading)",
        fontSize: 17,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-primary)"
      }
    }, item.question, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        display: "inline-flex",
        color: expanded ? "var(--color-accent)" : "var(--text-muted)",
        transform: expanded ? "rotate(180deg)" : "rotate(0)",
        transition: "var(--transition-base)"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: expanded ? "1fr" : "0fr",
        transition: "grid-template-rows var(--duration-base) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 22px 20px",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, item.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb — path navigation. Pass `items` of { label, href }.
 */
function Breadcrumb({
  items = [],
  invert = false,
  style = {},
  ...rest
}) {
  const sub = invert ? "var(--text-on-dark-secondary)" : "var(--text-secondary)";
  const cur = invert ? "var(--white)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: 8,
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: cur,
        fontWeight: "var(--weight-semibold)"
      }
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href || "#",
      style: {
        color: sub,
        textDecoration: "none"
      }
    }, item.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 15,
      color: sub
    }));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action element.
 * Variants: primary (navy), secondary (industrial blue), accent (aqua),
 * outline, ghost. Sizes: sm / md / lg.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 16px",
      height: 38,
      fontSize: 14,
      gap: 7,
      iconSize: 16
    },
    md: {
      padding: "0 22px",
      height: 46,
      fontSize: 15,
      gap: 8,
      iconSize: 18
    },
    lg: {
      padding: "0 30px",
      height: 56,
      fontSize: 17,
      gap: 10,
      iconSize: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--white)",
      border: "1px solid var(--color-primary)",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--color-secondary)",
      color: "var(--white)",
      border: "1px solid var(--color-secondary)",
      boxShadow: "var(--glow-blue)"
    },
    accent: {
      background: "var(--gradient-fluid)",
      color: "var(--white)",
      border: "1px solid transparent",
      boxShadow: "var(--glow-accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-secondary)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-body)",
      fontSize: s.fontSize,
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      transition: "var(--transition-base)",
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.iconSize
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — labelled checkbox. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const cbId = id || (label ? "cb-" + String(label).replace(/\s+/g, "-").toLowerCase() : undefined);
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      lineHeight: 1.4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: isControlled ? checked : undefined,
    defaultChecked: isControlled ? undefined : defaultChecked,
    disabled: disabled,
    onChange: handle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      border: on ? "1px solid var(--color-secondary)" : "1px solid var(--border-strong)",
      background: on ? "var(--color-secondary)" : "var(--surface)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--white)",
      transition: "var(--transition-base)"
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square button containing a single icon.
 */
function IconButton({
  icon,
  variant = "outline",
  size = "md",
  "aria-label": ariaLabel,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 22
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--white)",
      border: "1px solid var(--color-primary)"
    },
    secondary: {
      background: "var(--color-secondary)",
      color: "var(--white)",
      border: "1px solid var(--color-secondary)"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--white)",
      border: "1px solid var(--color-accent)"
    },
    outline: {
      background: "var(--surface)",
      color: "var(--color-primary)",
      border: "1px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-base)",
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSizes[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  required = false,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? "in-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--color-danger)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    required: required,
    style: {
      width: "100%",
      height: 46,
      padding: iconLeft ? "0 14px 0 42px" : "0 14px",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      transition: "var(--transition-base)",
      boxSizing: "border-box",
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.borderColor = "var(--border-focus)";
      e.target.style.boxShadow = `0 0 0 3px ${error ? "var(--red-50)" : "var(--focus-ring)"}`;
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = "none";
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-danger)" : "var(--text-secondary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — labelled radio button. Use inside a shared `name` group.
 */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const rId = id || (value ? "rd-" + String(value).replace(/\s+/g, "-").toLowerCase() : undefined);
  const on = checked;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      borderRadius: "var(--radius-pill)",
      border: on ? "1px solid var(--color-secondary)" : "1px solid var(--border-strong)",
      background: "var(--surface)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-pill)",
      background: "var(--color-secondary)",
      transform: on ? "scale(1)" : "scale(0)",
      transition: "var(--transition-base)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeader — eyebrow + title + optional description block.
 * Used to open every marketing section.
 */
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  maxWidth = 640,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: align === "center" ? maxWidth : undefined,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: invert ? "aqua" : "accent"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-h2)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-tight)",
      color: invert ? "var(--text-on-dark)" : "var(--text-primary)",
      textWrap: "balance"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth,
      color: invert ? "var(--text-on-dark-secondary)" : "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown styled to match the input system.
 */
function Select({
  label,
  hint,
  error,
  required = false,
  options = [],
  placeholder,
  id,
  style = {},
  ...rest
}) {
  const selId = id || (label ? "sel-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--color-danger)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    required: required,
    defaultValue: placeholder ? "" : undefined,
    style: {
      width: "100%",
      height: 46,
      padding: "0 42px 0 14px",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      appearance: "none",
      cursor: "pointer",
      transition: "var(--transition-base)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(opt => {
    const value = typeof opt === "string" ? opt : opt.value;
    const text = typeof opt === "string" ? opt : opt.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none",
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-danger)" : "var(--text-secondary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle.
 */
function Switch({
  checked,
  defaultChecked,
  disabled = false,
  label,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const control = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 44,
      height: 26,
      flexShrink: 0,
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 3,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      background: on ? "var(--color-secondary)" : "var(--gray-300)",
      transition: "var(--transition-base)",
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transform: on ? "translateX(18px)" : "translateX(0)",
      transition: "var(--transition-base)"
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, control, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — horizontal tab navigation. Pass `tabs` of { label, content }.
 */
function Tabs({
  tabs = [],
  defaultIndex = 0,
  style = {},
  ...rest
}) {
  const [active, setActive] = React.useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border-subtle)",
      marginBottom: 24,
      overflowX: "auto"
    }
  }, tabs.map((tab, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": on,
      onClick: () => setActive(i),
      style: {
        position: "relative",
        padding: "12px 18px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: on ? "var(--color-primary)" : "var(--text-secondary)",
        transition: "var(--transition-base)"
      }
    }, tab.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: "var(--gradient-fluid)",
        borderRadius: 2,
        transform: on ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "center",
        transition: "var(--transition-base)"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    role: "tabpanel"
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text field with label / hint / error.
 */
function Textarea({
  label,
  hint,
  error,
  required = false,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const taId = id || (label ? "ta-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
  const borderColor = error ? "var(--color-danger)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    required: required,
    style: {
      width: "100%",
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-primary)",
      background: "var(--surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      resize: "vertical",
      transition: "var(--transition-base)",
      boxSizing: "border-box",
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.borderColor = "var(--border-focus)";
      e.target.style.boxShadow = `0 0 0 3px ${error ? "var(--red-50)" : "var(--focus-ring)"}`;
    },
    onBlur: e => {
      e.target.style.borderColor = borderColor;
      e.target.style.boxShadow = "none";
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-danger)" : "var(--text-secondary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureBlock — icon + title + text, for "Why Superfluids" value props.
 * Two layouts: "stack" (icon above) or "row" (icon left).
 */
function FeatureBlock({
  icon = "shield-check",
  title,
  description,
  layout = "stack",
  invert = false,
  style = {},
  ...rest
}) {
  const row = layout === "row";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: row ? "row" : "column",
      gap: row ? 16 : 16,
      alignItems: "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 52,
      height: 52,
      flexShrink: 0,
      borderRadius: "var(--radius-md)",
      background: invert ? "rgba(0,183,199,0.15)" : "var(--aqua-50)",
      color: "var(--aqua-600)",
      boxShadow: invert ? "inset 0 0 0 1px rgba(0,183,199,0.3)" : "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 26,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h5)",
      fontWeight: "var(--weight-semibold)",
      color: invert ? "var(--text-on-dark)" : "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: "var(--leading-normal)",
      color: invert ? "var(--text-on-dark-secondary)" : "var(--text-secondary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { FeatureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LogoBar — "Trusted Brands" strip of manufacturer logos.
 * Renders names as monochrome wordmarks when no image is supplied.
 */
function LogoBar({
  logos = [],
  label,
  invert = false,
  style = {},
  ...rest
}) {
  const fg = invert ? "rgba(255,255,255,0.72)" : "var(--gray-400)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: invert ? "var(--text-on-dark-secondary)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "32px 56px"
    }
  }, logos.map((logo, i) => {
    const name = typeof logo === "string" ? logo : logo.name;
    const src = typeof logo === "string" ? null : logo.src;
    return src ? /*#__PURE__*/React.createElement("img", {
      key: i,
      src: src,
      alt: name,
      style: {
        height: 30,
        objectFit: "contain",
        opacity: 0.85,
        filter: invert ? "brightness(0) invert(1)" : "none"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: 24,
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-snug)",
        color: fg
      }
    }, name);
  })));
}
Object.assign(__ds_scope, { LogoBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoBar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessTimeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProcessTimeline — numbered horizontal/vertical step sequence.
 * Used for "Our Process" (7 steps) and the service workflow.
 */
function ProcessTimeline({
  steps = [],
  orientation = "horizontal",
  invert = false,
  style = {},
  ...rest
}) {
  const horiz = orientation === "horizontal";
  const lineColor = invert ? "rgba(255,255,255,0.16)" : "var(--border-default)";
  const numBg = "var(--gradient-fluid)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: horiz ? "grid" : "flex",
      gridTemplateColumns: horiz ? `repeat(${steps.length}, 1fr)` : undefined,
      flexDirection: horiz ? undefined : "column",
      gap: horiz ? 0 : 28,
      ...style
    }
  }, rest), steps.map((step, i) => {
    const label = typeof step === "string" ? step : step.label;
    const desc = typeof step === "string" ? null : step.description;
    const last = i === steps.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: horiz ? "column" : "row",
        gap: horiz ? 16 : 18,
        position: "relative",
        alignItems: horiz ? "flex-start" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        flexDirection: horiz ? "row" : "column",
        alignItems: "center",
        flexShrink: 0,
        width: horiz ? "100%" : "auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        borderRadius: "var(--radius-pill)",
        flexShrink: 0,
        background: numBg,
        color: "var(--white)",
        zIndex: 2,
        fontFamily: "var(--font-heading)",
        fontWeight: "var(--weight-bold)",
        fontSize: 17,
        boxShadow: "var(--glow-accent)"
      }
    }, String(i + 1).padStart(2, "0")), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        background: lineColor,
        ...(horiz ? {
          height: 2,
          flex: 1,
          marginLeft: 8
        } : {
          width: 2,
          flex: 1,
          marginTop: 8,
          minHeight: 24
        })
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingRight: horiz ? 16 : 0,
        paddingBottom: horiz ? 0 : 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: 17,
        fontWeight: "var(--weight-semibold)",
        color: invert ? "var(--text-on-dark)" : "var(--text-primary)"
      }
    }, label), desc && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14,
        lineHeight: "var(--leading-normal)",
        color: invert ? "var(--text-on-dark-secondary)" : "var(--text-secondary)"
      }
    }, desc)));
  }));
}
Object.assign(__ds_scope, { ProcessTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessTimeline.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — image + meta for the Projects grid / Featured Projects.
 */
function ProjectCard({
  image,
  name,
  location,
  industry,
  products = [],
  href = "#",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      textDecoration: "none",
      background: "var(--surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)",
      transition: "var(--transition-base)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.transform = "translateY(-4px)";
      const im = e.currentTarget.querySelector("[data-pc-img]");
      if (im) im.style.transform = "scale(1.06)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
      e.currentTarget.style.transform = "translateY(0)";
      const im = e.currentTarget.querySelector("[data-pc-img]");
      if (im) im.style.transform = "scale(1)";
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      overflow: "hidden",
      background: "var(--navy-800)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    "data-pc-img": true,
    src: image,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform var(--duration-slow) var(--ease-out)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    "data-pc-img": true,
    style: {
      width: "100%",
      height: "100%",
      background: "var(--gradient-navy)",
      transition: "transform var(--duration-slow) var(--ease-out)"
    }
  }), industry && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "aqua",
    variant: "solid"
  }, industry))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h5)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)"
    }
  }, name), location && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15
  }), " ", location), products.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 4
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    tone: "neutral"
  }, p)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SolutionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SolutionCard — icon + title + description + "Learn More" link.
 * The core product/solution tile used across Home and Products.
 */
function SolutionCard({
  icon = "droplet",
  title,
  description,
  href = "#",
  linkLabel = "Learn More",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      textDecoration: "none",
      background: "var(--surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 32,
      boxShadow: "var(--shadow-card)",
      transition: "var(--transition-base)",
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.borderColor = "var(--aqua-400)";
      const ic = e.currentTarget.querySelector("[data-sc-icon]");
      if (ic) {
        ic.style.background = "var(--gradient-fluid)";
        ic.style.color = "var(--white)";
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = "var(--shadow-card)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
      const ic = e.currentTarget.querySelector("[data-sc-icon]");
      if (ic) {
        ic.style.background = "var(--aqua-50)";
        ic.style.color = "var(--aqua-600)";
      }
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "data-sc-icon": true,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 56,
      height: 56,
      borderRadius: "var(--radius-md)",
      background: "var(--aqua-50)",
      color: "var(--aqua-600)",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 28,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: "var(--leading-normal)",
      color: "var(--text-secondary)"
    }
  }, description)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: "var(--weight-semibold)",
      color: "var(--color-secondary)"
    }
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { SolutionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SolutionCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpecTable — two-column technical specifications table.
 * Pass `rows` of { label, value } or [label, value] tuples.
 */
function SpecTable({
  rows = [],
  title,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--surface)",
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 20px",
      background: "var(--navy-800)",
      color: "var(--white)",
      fontFamily: "var(--font-heading)",
      fontSize: 15,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, title), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => {
    const label = Array.isArray(row) ? row[0] : row.label;
    const value = Array.isArray(row) ? row[1] : row.value;
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        background: i % 2 ? "var(--gray-50)" : "var(--surface)"
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        padding: "13px 20px",
        width: "45%",
        fontSize: 14,
        fontWeight: "var(--weight-medium)",
        color: "var(--text-secondary)",
        borderBottom: "1px solid var(--border-subtle)",
        verticalAlign: "top"
      }
    }, label), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "13px 20px",
        fontSize: 14,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-mono)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, value));
  }))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — large number + label, for company statistics.
 */
function StatCard({
  value,
  label,
  suffix = "",
  invert = false,
  align = "left",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-h1)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-tight)",
      color: invert ? "var(--text-on-dark)" : "var(--color-primary)",
      display: "flex",
      alignItems: "baseline"
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)",
      marginLeft: 2
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: "var(--weight-medium)",
      color: invert ? "var(--text-on-dark-secondary)" : "var(--text-secondary)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — client quote card with author + optional rating.
 */
function Testimonial({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  invert = false,
  style = {},
  ...rest
}) {
  const fg = invert ? "var(--text-on-dark)" : "var(--text-primary)";
  const sub = invert ? "var(--text-on-dark-secondary)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      margin: 0,
      background: invert ? "var(--glass-bg-dark)" : "var(--surface)",
      border: invert ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      padding: 32,
      boxShadow: invert ? "none" : "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 3,
      color: "var(--amber-600)"
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      opacity: i < rating ? 1 : 0.25
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 18,
    strokeWidth: 0,
    style: {
      fill: "var(--amber-600)"
    }
  })))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading-alt)",
      fontSize: 19,
      lineHeight: 1.5,
      fontWeight: "var(--weight-medium)",
      color: fg,
      textWrap: "pretty"
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: author,
    src: avatar,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      fontWeight: "var(--weight-semibold)",
      color: fg
    }
  }, author), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: sub
    }
  }, role, role && company ? ", " : "", company))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Superfluids website — Contact screen with working inquiry form.
const DSc = window.SuperfluidsDesignSystem_e3893d;
function ContactScreen({
  onNavigate
}) {
  const {
    Button,
    Eyebrow,
    SectionHeader,
    Input,
    Select,
    Textarea,
    Checkbox,
    Accordion,
    Card,
    Badge,
    Icon,
    Breadcrumb
  } = DSc;
  const Section = window.SF_Section;
  const [submitted, setSubmitted] = React.useState(false);
  const contactBlocks = [{
    icon: "map-pin",
    title: "Office Location",
    lines: ["Dubai Industrial City", "Dubai, United Arab Emirates"]
  }, {
    icon: "phone",
    title: "Phone",
    lines: ["Sales · +971 4 XXX XXXX", "Support · +971 4 XXX XXXX", "Emergency · +971 50 XXX XXXX"]
  }, {
    icon: "mail",
    title: "Email",
    lines: ["info@superfluids.com", "sales@superfluids.com", "support@superfluids.com"]
  }, {
    icon: "clock",
    title: "Business Hours",
    lines: ["Monday – Friday", "08:00 – 18:00 GST"]
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "radial-gradient(100% 100% at 30% 0%, #000, transparent 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 32px 72px"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    invert: true,
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Contact"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      maxWidth: 680,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "aqua"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 52,
      lineHeight: 1.08,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--white)"
    }
  }, "Let's discuss your project"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--text-on-dark-secondary)"
    }
  }, "Our engineering team is ready to assist with your project requirements \u2014 from sizing to supply and commissioning.")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, contactBlocks.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.title,
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 46,
      height: 46,
      flexShrink: 0,
      borderRadius: "var(--radius-md)",
      background: "var(--aqua-50)",
      color: "var(--aqua-600)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 22,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, b.title), b.lines.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: 14.5,
      color: "var(--text-secondary)",
      lineHeight: 1.5
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 180,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "linear-gradient(135deg, #16335c, #0E2341)",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(0,183,199,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.14) 1px, transparent 1px)",
      backgroundSize: "24px 24px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: 8,
      color: "rgba(255,255,255,0.85)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 28,
    color: "var(--aqua-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "GOOGLE MAPS EMBED")))), /*#__PURE__*/React.createElement(Card, {
    padding: "xl"
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      padding: "48px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--green-50)",
      color: "var(--green-600)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 24,
      color: "var(--text-primary)"
    }
  }, "Inquiry received"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: "var(--text-secondary)",
      maxWidth: 360,
      lineHeight: 1.6
    }
  }, "Thank you \u2014 our engineering team will respond within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSubmitted(false)
  }, "Submit another inquiry")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 22,
      color: "var(--text-primary)"
    }
  }, "Submit an inquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Tell us about your project and we'll get back to you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    placeholder: "Jane Engineer",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company Name",
    placeholder: "Acme Contracting"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email Address",
    type: "email",
    iconLeft: "mail",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone Number",
    iconLeft: "phone",
    placeholder: "+971 50 000 0000"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Project Location",
    iconLeft: "map-pin",
    placeholder: "Dubai, UAE"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Industry",
    placeholder: "Select industry",
    options: ["Residential", "Commercial", "Healthcare", "Hospitality", "Industrial", "Government", "Infrastructure", "Oil & Gas", "District Cooling"]
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Subject",
    placeholder: "e.g. Booster pump system for a 20-storey tower"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 4,
    placeholder: "Describe your requirements, flow rates, timelines\u2026",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 14px",
      border: "1px dashed var(--border-default)",
      borderRadius: "var(--radius-md)",
      color: "var(--text-secondary)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "paperclip",
    size: 18
  }), " Attach drawings or specs (optional)"), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to be contacted regarding my inquiry.",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right"
  }, "Submit Inquiry"))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 56,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "FAQ",
    title: "Common questions",
    description: "Quick answers on availability, support, quotations and maintenance. Need more? Speak with our engineering team."
  }), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: "Which manufacturers do you supply?",
      answer: "We are an authorised distributor for Grundfos, Ebara, CRI, Ariston, Pegler, Crane and other leading brands across pumps, valves and water systems."
    }, {
      question: "Do you provide technical support and sizing?",
      answer: "Yes — our factory-trained engineers handle hydraulic calculations, system design and equipment selection as part of every project."
    }, {
      question: "How quickly can I get a quotation?",
      answer: "Most quotations are returned within one to two business days. Complex engineered systems may require a short site survey first."
    }, {
      question: "Can you arrange project consultations on site?",
      answer: "Absolutely. We carry out site consultations across the UAE to assess requirements and recommend the right solution."
    }, {
      question: "Do you offer maintenance contracts?",
      answer: "We provide preventive Annual Maintenance Contracts (AMC), emergency support and retrofit services to keep systems running efficiently."
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--gradient-navy)",
    py: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "aqua"
  }, "Technical Assistance"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--white)",
      textWrap: "balance"
    }
  }, "Speak with our engineering team")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right"
  }, "Request Consultation"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconLeft: "message-circle",
    style: {
      background: "var(--green-600)",
      color: "var(--white)",
      border: "none"
    }
  }, "WhatsApp")))));
}
window.SF_ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Superfluids website — Home screen.
const DSh = window.SuperfluidsDesignSystem_e3893d;
const SOLUTIONS = [{
  icon: "gauge",
  title: "Pumping Systems",
  description: "Booster sets, circulation and transfer pumps engineered for UAE conditions."
}, {
  icon: "cylinder",
  title: "GRP Tanks",
  description: "Sectional GRP water storage tanks in any capacity, hygienically certified."
}, {
  icon: "settings-2",
  title: "Variable Frequency Drives",
  description: "Energy-saving VFD control for pumps, fans and process equipment."
}, {
  icon: "git-commit-horizontal",
  title: "Industrial Valves",
  description: "Gate, check, butterfly and control valves from trusted manufacturers."
}, {
  icon: "flame",
  title: "Hot Water Systems",
  description: "Calorifiers, heat pumps and central hot-water generation."
}, {
  icon: "filter",
  title: "Water Treatment Systems",
  description: "Filtration, softening and disinfection for clean, compliant water."
}];
const WHY = [{
  icon: "badge-check",
  title: "Factory-Trained Engineers",
  description: "Certified by the manufacturers we represent."
}, {
  icon: "route",
  title: "End-to-End Project Delivery",
  description: "Design, supply, install, commission — one partner."
}, {
  icon: "leaf",
  title: "Energy-Efficient Solutions",
  description: "VFD-led systems that cut lifetime running cost."
}, {
  icon: "wrench",
  title: "Long-Term Maintenance Support",
  description: "Preventive AMC and 24/7 emergency response."
}];
const INDUSTRIES = [{
  icon: "building-2",
  name: "Residential"
}, {
  icon: "building",
  name: "Commercial"
}, {
  icon: "heart-pulse",
  name: "Healthcare"
}, {
  icon: "concierge-bell",
  name: "Hospitality"
}, {
  icon: "factory",
  name: "Industrial"
}, {
  icon: "landmark",
  name: "Government"
}, {
  icon: "construction",
  name: "Infrastructure"
}, {
  icon: "fuel",
  name: "Oil & Gas"
}, {
  icon: "snowflake",
  name: "District Cooling"
}];
const PROJECTS = [{
  name: "Marina Heights Tower",
  location: "Dubai Marina",
  industry: "Commercial",
  products: ["Booster Pumps", "GRP Tanks"],
  icon: "building-2"
}, {
  name: "Al Noor Hospital Expansion",
  location: "Abu Dhabi",
  industry: "Healthcare",
  products: ["Hot Water", "Water Treatment"],
  icon: "heart-pulse"
}, {
  name: "Logistics Park Phase II",
  location: "Jebel Ali",
  industry: "Industrial",
  products: ["VFD Systems", "Valves"],
  icon: "factory"
}];
function HomeScreen({
  onNavigate
}) {
  const {
    Button,
    Eyebrow,
    SectionHeader,
    SolutionCard,
    FeatureBlock,
    StatCard,
    ProjectCard,
    ProcessTimeline,
    Testimonial,
    LogoBar,
    Badge,
    Icon
  } = DSh;
  const Photo = window.SF_Photo,
    Section = window.SF_Section;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "44px 44px",
      maskImage: "radial-gradient(110% 90% at 80% 10%, #000 20%, transparent 75%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/superfluids-mark.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "4%",
      top: "6%",
      height: "92%",
      opacity: 0.5,
      filter: "drop-shadow(0 20px 60px rgba(0,183,199,0.35))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "120px 32px 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      alignSelf: "flex-start",
      padding: "7px 14px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(0,183,199,0.14)",
      border: "1px solid rgba(0,183,199,0.3)",
      color: "var(--aqua-400)",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), " UAE Fluid Engineering Specialists"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 60,
      lineHeight: 1.05,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--white)",
      textWrap: "balance"
    }
  }, "Complete Water & Fluid Engineering Solutions Across UAE"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 19,
      lineHeight: 1.6,
      color: "var(--text-on-dark-secondary)",
      maxWidth: 600
    }
  }, "Design, supply, installation and maintenance of high-performance pumping systems, water storage solutions and automation infrastructure."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onNavigate("Contact")
  }, "Request Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNavigate("Products"),
    style: {
      background: "rgba(255,255,255,0.06)",
      color: "var(--white)",
      borderColor: "rgba(255,255,255,0.25)"
    }
  }, "View Products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      marginTop: 22,
      paddingTop: 26,
      borderTop: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "500",
    suffix: "+",
    label: "Projects Delivered",
    invert: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "15",
    suffix: "+",
    label: "Years Experience",
    invert: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "40",
    suffix: "+",
    label: "Brands Represented",
    invert: true
  }))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)",
    py: 48
  }, /*#__PURE__*/React.createElement(LogoBar, {
    label: "Authorised distributor for leading global manufacturers",
    logos: ["Ebara", "Grundfos", "CRI", "Ariston", "Pegler", "Crane"]
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "Core Solutions",
    title: "Engineered fluid systems, end to end",
    description: "Six core capability areas \u2014 specified, supplied, installed and maintained by one accountable engineering partner.",
    style: {
      marginBottom: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, SOLUTIONS.map(s => /*#__PURE__*/React.createElement(SolutionCard, _extends({
    key: s.title
  }, s, {
    onClick: e => {
      e.preventDefault();
      onNavigate("Products");
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--gradient-navy)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    invert: true,
    eyebrow: "Why Superfluids",
    title: "Engineering partners, not just suppliers",
    description: "We take responsibility for the whole system \u2014 from hydraulic calculation to commissioning and the years of maintenance that follow."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: "arrow-right",
    style: {
      alignSelf: "flex-start"
    },
    onClick: () => onNavigate("About")
  }, "About Our Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 28
    }
  }, WHY.map(w => /*#__PURE__*/React.createElement(FeatureBlock, _extends({
    key: w.title
  }, w, {
    invert: true
  })))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "Industries Served",
    title: "Trusted across every sector",
    description: "From residential towers to oil & gas and district cooling, our systems perform where reliability is non-negotiable.",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, INDUSTRIES.map(ind => /*#__PURE__*/React.createElement("div", {
    key: ind.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "20px 24px",
      background: "var(--gray-50)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      transition: "var(--transition-base)",
      cursor: "pointer"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface)";
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.borderColor = "var(--aqua-400)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--gray-50)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.borderColor = "var(--border-subtle)";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--aqua-50)",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--aqua-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ind.icon,
    size: 22,
    strokeWidth: 1.75
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, ind.name))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 48,
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Featured Projects",
    title: "Delivered across the Emirates",
    description: "A snapshot of recent engineering projects commissioned by Superfluids."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconRight: "arrow-right",
    onClick: () => onNavigate("Projects")
  }, "View All Projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    icon: p.icon,
    label: p.location.toUpperCase(),
    height: 200,
    radius: "0"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "aqua",
    variant: "solid"
  }, p.industry))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 20,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15
  }), " ", p.location), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 4
    }
  }, p.products.map(pr => /*#__PURE__*/React.createElement(Badge, {
    key: pr,
    tone: "neutral"
  }, pr)))))))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "Our Process",
    title: "A disciplined engineering workflow",
    description: "Seven stages, one accountable team \u2014 from first consultation to ongoing maintenance.",
    style: {
      marginBottom: 56
    }
  }), /*#__PURE__*/React.createElement(ProcessTimeline, {
    steps: [{
      label: "Consultation",
      description: "Understand site & requirements."
    }, {
      label: "Engineering Review",
      description: "Hydraulic calculations & design."
    }, {
      label: "Equipment Selection",
      description: "Right-sized, efficient kit."
    }, {
      label: "Supply",
      description: "Procurement & QA."
    }, {
      label: "Installation",
      description: "Mechanical & electrical."
    }, {
      label: "Commissioning",
      description: "Performance testing."
    }, {
      label: "Maintenance",
      description: "Preventive AMC & support."
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--gradient-navy)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    invert: true,
    align: "center",
    eyebrow: "Client Feedback",
    title: "What our clients say",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    invert: true,
    rating: 5,
    quote: "Superfluids delivered the entire booster system on schedule and commissioned it flawlessly. A genuine engineering partner.",
    author: "Eng. Rashid Hassan",
    role: "MEP Director",
    company: "Gulf Contracting"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    invert: true,
    rating: 5,
    quote: "Their VFD retrofit cut our pump-room energy use noticeably. Professional from survey to handover.",
    author: "Sara Al Marri",
    role: "Facilities Manager",
    company: "Emirates Hospitality"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    invert: true,
    rating: 5,
    quote: "Responsive AMC team and genuine technical depth. They understand UAE water systems inside out.",
    author: "Daniel Okafor",
    role: "Project Engineer",
    company: "Skyline Developments"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)",
    py: 0,
    style: {
      paddingTop: 0,
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      background: "var(--gradient-fluid)",
      padding: "72px 64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "radial-gradient(100% 100% at 90% 50%, #000, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--white)",
      textWrap: "balance"
    }
  }, "Need a fluid engineering partner?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.9)"
    }
  }, "Request a technical consultation and our engineering team will respond within one business day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate("Contact"),
    style: {
      background: "var(--white)",
      color: "var(--navy-800)",
      border: "none"
    },
    iconRight: "arrow-right"
  }, "Contact Us")))));
}
window.SF_HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsScreen.jsx
try { (() => {
// Superfluids website — Products screen (category grid + detail preview).
const DSp = window.SuperfluidsDesignSystem_e3893d;
const PRODUCTS = [{
  icon: "gauge",
  title: "Pumping Systems",
  description: "Booster sets, circulation, transfer and submersible pumps.",
  count: "120+ models"
}, {
  icon: "cylinder",
  title: "GRP Tanks",
  description: "Hot-pressed sectional GRP water storage tanks.",
  count: "Any capacity"
}, {
  icon: "settings-2",
  title: "VFD Systems",
  description: "Variable frequency drives for energy-efficient control.",
  count: "0.75–315 kW"
}, {
  icon: "git-commit-horizontal",
  title: "Industrial Valves",
  description: "Gate, butterfly, check and control valves.",
  count: "DN15–DN600"
}, {
  icon: "flame",
  title: "Hot Water Systems",
  description: "Calorifiers, heat pumps and central HW generation.",
  count: "Commercial scale"
}, {
  icon: "filter",
  title: "Water Treatment",
  description: "Filtration, softening and disinfection packages.",
  count: "Turnkey"
}];
function ProductsScreen({
  onNavigate
}) {
  const {
    Button,
    Eyebrow,
    SectionHeader,
    SolutionCard,
    Breadcrumb,
    Tabs,
    SpecTable,
    Badge,
    Card,
    Input,
    Select,
    Textarea,
    Checkbox,
    Icon
  } = DSp;
  const Photo = window.SF_Photo,
    Section = window.SF_Section;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-navy)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      maskImage: "radial-gradient(100% 100% at 70% 0%, #000, transparent 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "56px 32px 72px"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    invert: true,
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Products"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      maxWidth: 680,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "aqua"
  }, "Product Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: 52,
      lineHeight: 1.08,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--white)"
    }
  }, "Engineered products, ready to specify"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--text-on-dark-secondary)"
    }
  }, "Six product families from the world's leading manufacturers \u2014 backed by Superfluids' in-house engineering, supply and service.")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Categories",
    title: "Browse by product family",
    style: {
      marginBottom: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(SolutionCard, {
    key: p.title,
    icon: p.icon,
    title: p.title,
    description: p.description,
    linkLabel: "View range",
    onClick: e => e.preventDefault()
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--surface)"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Product Detail",
    title: "Booster Pump Sets",
    description: "An example of how each product is presented \u2014 overview, applications, specifications and downloads.",
    style: {
      marginBottom: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    icon: "gauge",
    label: "VARIABLE-SPEED BOOSTER SET",
    height: 300
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12
    }
  }, ["droplet", "settings-2", "activity"].map((ic, i) => /*#__PURE__*/React.createElement(Photo, {
    key: i,
    icon: ic,
    height: 88,
    radius: "var(--radius-md)",
    tone: "alt"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "aqua"
  }, "Pumping Systems"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "soft"
  }, "In Stock"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Grundfos \xB7 Ebara")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: "Overview",
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--text-secondary)"
        }
      }, "Packaged multi-pump booster sets maintain constant pressure in high-rise water distribution. Variable-speed control matches output to demand, reducing energy use and water-hammer while extending equipment life.")
    }, {
      label: "Applications",
      content: /*#__PURE__*/React.createElement("ul", {
        style: {
          margin: 0,
          paddingLeft: 18,
          fontSize: 15,
          lineHeight: 1.9,
          color: "var(--text-secondary)"
        }
      }, /*#__PURE__*/React.createElement("li", null, "Residential & commercial towers"), /*#__PURE__*/React.createElement("li", null, "Hotels and hospitals"), /*#__PURE__*/React.createElement("li", null, "District water networks"), /*#__PURE__*/React.createElement("li", null, "Industrial process supply"))
    }, {
      label: "Specifications",
      content: /*#__PURE__*/React.createElement(SpecTable, {
        rows: [["Flow Rate", "5–120 m³/h"], ["Max Head", "95 m"], ["Power", "0.75–22 kW"], ["Inlet / Outlet", "DN50 – DN150"], ["Control", "VFD, constant pressure"], ["Material", "Stainless steel AISI 304"]]
      })
    }, {
      label: "Downloads",
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 10
        }
      }, ["Datasheet (PDF)", "Product Catalogue", "Installation Manual"].map(d => /*#__PURE__*/React.createElement("a", {
        key: d,
        href: "#",
        onClick: e => e.preventDefault(),
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 18px",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-md)",
          textDecoration: "none",
          color: "var(--text-primary)",
          fontSize: 15,
          fontWeight: 500
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 18,
        color: "var(--color-secondary)"
      }), " ", d), /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 18,
        color: "var(--text-muted)"
      }))))
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    padding: "md",
    style: {
      background: "var(--gray-50)",
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-heading)",
      fontSize: 18,
      color: "var(--text-primary)"
    }
  }, "Request information"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    iconLeft: "mail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    iconRight: "arrow-right"
  }, "Request a Quote")))))));
}
window.SF_ProductsScreen = ProductsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
// Superfluids website — shared photo placeholder + section wrapper.
const DSx = window.SuperfluidsDesignSystem_e3893d;

// Engineering "photo" placeholder: cool navy gradient + blueprint grid + glyph.
function Photo({
  icon = "image",
  label,
  height = "100%",
  radius = "var(--radius-lg)",
  tone = "navy",
  style = {}
}) {
  const {
    Icon
  } = DSx;
  const bg = tone === "navy" ? "var(--gradient-navy)" : "linear-gradient(150deg, #16335c 0%, #0E2341 100%)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height,
      borderRadius: radius,
      overflow: "hidden",
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "linear-gradient(rgba(0,183,199,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.10) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      maskImage: "radial-gradient(120% 120% at 70% 20%, #000 30%, transparent 80%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(80% 70% at 75% 25%, rgba(0,183,199,0.18), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      bottom: 18,
      display: "flex",
      alignItems: "center",
      gap: 10,
      color: "rgba(255,255,255,0.78)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--aqua-400)"
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.04em"
    }
  }, label)));
}
function Section({
  children,
  bg = "var(--bg-page)",
  py = 96,
  id,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: py + "px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 32px"
    }
  }, children));
}
Object.assign(window, {
  SF_Photo: Photo,
  SF_Section: Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
// Superfluids website — header & footer chrome.
const DS = window.SuperfluidsDesignSystem_e3893d;
const NAV = ["Home", "About", "Products", "Services", "Industries", "Projects", "Resources", "Contact"];
function Header({
  active,
  onNavigate
}) {
  const {
    Button
  } = DS;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector("[data-site-scroll]");
    if (!el) return;
    const fn = () => setScrolled(el.scrollTop > 8);
    el.addEventListener("scroll", fn);
    return () => el.removeEventListener("scroll", fn);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 200,
      background: "var(--glass-bg)",
      backdropFilter: "var(--blur-md)",
      WebkitBackdropFilter: "var(--blur-md)",
      borderBottom: "1px solid " + (scrolled ? "var(--border-subtle)" : "transparent"),
      boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      transition: "var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "0 32px",
      height: 76,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("Home");
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/superfluids-wordmark-navy.png",
    alt: "Superfluids",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, NAV.map(item => {
    const on = item === active;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(item);
      },
      style: {
        padding: "8px 13px",
        borderRadius: "var(--radius-sm)",
        textDecoration: "none",
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        fontWeight: on ? 600 : 500,
        color: on ? "var(--navy-800)" : "var(--gray-600)",
        background: on ? "var(--aqua-50)" : "transparent",
        transition: "var(--transition-base)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = "var(--navy-800)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = "var(--gray-600)";
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => onNavigate("Contact")
  }, "Request Consultation"))));
}
function Footer({
  onNavigate
}) {
  const {
    Icon
  } = DS;
  const cols = [{
    title: "Solutions",
    links: ["Pumping Systems", "GRP Tanks", "VFD Systems", "Industrial Valves", "Hot Water Systems", "Water Treatment"]
  }, {
    title: "Company",
    links: ["About", "Projects", "Industries", "Resources", "Careers", "Contact"]
  }, {
    title: "Support",
    links: ["Request Consultation", "Technical Resources", "Datasheets", "Maintenance (AMC)", "Emergency Support"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--gradient-navy)",
      color: "var(--white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "72px 32px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: 48,
      paddingBottom: 48,
      borderBottom: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/superfluids-wordmark-white.png",
    alt: "Superfluids",
    style: {
      height: 30,
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.7,
      color: "var(--text-on-dark-secondary)"
    }
  }, "Complete water & fluid engineering solutions across the UAE \u2014 design, supply, installation and maintenance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 14,
      color: "var(--text-on-dark-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--aqua-400)"
  }), " Dubai Industrial City, UAE"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 14,
      color: "var(--text-on-dark-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--aqua-400)"
  }), " +971 4 XXX XXXX"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 14,
      color: "var(--text-on-dark-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--aqua-400)"
  }), " info@superfluids.com"))), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--white)"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: "var(--text-on-dark-secondary)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--aqua-400)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-on-dark-secondary)"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 28,
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-on-dark-secondary)"
    }
  }, "\xA9 2026 Superfluids Engineering LLC. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, ["Privacy Policy", "Terms", "Authorisations"].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 13,
      color: "var(--text-on-dark-secondary)",
      textDecoration: "none"
    }
  }, l))))));
}
Object.assign(window, {
  SF_Header: Header,
  SF_Footer: Footer,
  SF_NAV: NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FeatureBlock = __ds_scope.FeatureBlock;

__ds_ns.LogoBar = __ds_scope.LogoBar;

__ds_ns.ProcessTimeline = __ds_scope.ProcessTimeline;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SolutionCard = __ds_scope.SolutionCard;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
