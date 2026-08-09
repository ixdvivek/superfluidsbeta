/** @type {import('tailwindcss').Config} */
// Brand palette carried over unchanged from the design system.
// Type, tracking, radius and rhythm follow the Anchor-inspired language.
module.exports = {
  content: ["./index.html", "./site/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#081728", 800: "#0E2341", 700: "#16335c", 600: "#1f4880" },
        blue: { 700: "#0a55c9", 600: "#0D6EFD", 500: "#3d8bfd", 100: "#e3edfe", 50: "#eef4ff" },
        aqua: { 700: "#00919e", 600: "#00B7C7", 400: "#4fd3de", 100: "#d2f4f7", 50: "#e9fafc" },
        ink: "#1A1A1A",
        // From the Figma header design; see note in theme.css
        brand: { navy: "#000A33", aqua: "#54BFC6", cyan: "#03B8DA" },
        line: "#E2E8F0",
        gray: {
          50: "#F7F9FC", 100: "#EEF2F7", 200: "#E2E8F0", 300: "#CBD5E1",
          400: "#94A3B8", 500: "#667085", 600: "#475569", 700: "#334155",
          800: "#1D2939", 900: "#101828",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["12px", { lineHeight: "1.3", letterSpacing: "0.14em" }],
        xs: ["13px", { lineHeight: "1.5" }],
        sm: ["15px", { lineHeight: "1.55" }],
        base: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        h4: ["24px", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        h3: ["28px", { lineHeight: "1.3", letterSpacing: "-0.035em" }],
        h2: ["40px", { lineHeight: "1.2", letterSpacing: "-0.035em" }],
        h1: ["56px", { lineHeight: "1.08", letterSpacing: "-0.045em" }],
        display: ["68px", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
      },
      letterSpacing: {
        display: "-0.045em",
        tighter2: "-0.035em",
        snug: "-0.02em",
        eyebrow: "0.14em",
      },
      borderRadius: {
        sm: "4px", DEFAULT: "6px", md: "6px", lg: "8px", xl: "12px", "2xl": "16px", "3xl": "24px",
      },
      maxWidth: {
        container: "1224px",
        measure: "720px",
      },
      spacing: {
        gutter: "30px",
        section: "140px",
        "section-sm": "100px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(14,35,65,0.06), 0 1px 2px rgba(14,35,65,0.04)",
        md: "0 4px 12px rgba(14,35,65,0.08), 0 2px 4px rgba(14,35,65,0.05)",
        lg: "0 12px 28px rgba(14,35,65,0.12), 0 4px 8px rgba(14,35,65,0.06)",
        xl: "0 24px 56px rgba(14,35,65,0.16), 0 8px 16px rgba(14,35,65,0.08)",
        overlay: "0 40px 120px rgba(8,23,40,0.55)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-up": "fade-up 620ms cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
