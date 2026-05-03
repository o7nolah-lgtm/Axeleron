import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      /* ── Design System: Axeleron Expo Sovereign ── */
      colors: {
        /* surfaces */
        "surface":                    "#16130d",
        "surface-dim":                "#16130d",
        "surface-bright":             "#3d3931",
        "surface-container-lowest":   "#100e08",
        "surface-container-low":      "#1e1b15",
        "surface-container":          "#221f19",
        "surface-container-high":     "#2d2a23",
        "surface-container-highest":  "#38342d",
        "surface-variant":            "#38342d",
        "surface-tint":               "#e6c364",
        /* on-surfaces */
        "on-surface":                 "#e9e1d7",
        "on-surface-variant":         "#d0c5b2",
        "inverse-surface":            "#e9e1d7",
        "inverse-on-surface":         "#343029",
        /* outlines */
        "outline":                    "#99907e",
        "outline-variant":            "#4d4637",
        /* primary — gold */
        "primary":                    "#e6c364",
        "on-primary":                 "#3d2e00",
        "primary-container":          "#c9a84c",
        "on-primary-container":       "#503d00",
        "inverse-primary":            "#755b00",
        "primary-fixed":              "#ffe08f",
        "primary-fixed-dim":          "#e6c364",
        "on-primary-fixed":           "#241a00",
        "on-primary-fixed-variant":   "#584400",
        /* secondary — silver */
        "secondary":                  "#c5c6ca",
        "on-secondary":               "#2e3034",
        "secondary-container":        "#47494d",
        "on-secondary-container":     "#b7b8bc",
        "secondary-fixed":            "#e2e2e6",
        "secondary-fixed-dim":        "#c5c6ca",
        "on-secondary-fixed":         "#1a1c1f",
        "on-secondary-fixed-variant": "#45474a",
        /* tertiary — blue */
        "tertiary":                   "#b9c4ff",
        "on-tertiary":                "#1e2b66",
        "tertiary-container":         "#9ba8eb",
        "on-tertiary-container":      "#2e3b77",
        "tertiary-fixed":             "#dde1ff",
        "tertiary-fixed-dim":         "#b9c3ff",
        "on-tertiary-fixed":          "#041451",
        "on-tertiary-fixed-variant":  "#35437e",
        /* error */
        "error":                      "#ffb4ab",
        "on-error":                   "#690005",
        "error-container":            "#93000a",
        "on-error-container":         "#ffdad6",
        /* background */
        "background":                 "#16130d",
        "on-background":              "#e9e1d7",
        /* brand constants */
        "oled":                       "#0a0a0a",
        "blue-accent":                "#1E90FF",
      },

      /* ── Border radius: Precision-Engineered ── */
      borderRadius: {
        sm:      "0.125rem",   /*  2px */
        DEFAULT: "0.25rem",    /*  4px */
        md:      "0.375rem",   /*  6px */
        lg:      "0.5rem",     /*  8px */
        xl:      "0.75rem",    /* 12px */
        "2xl":   "1rem",
        full:    "9999px",
      },

      /* ── Spacing ── */
      spacing: {
        "unit":          "8px",
        "gutter":        "32px",
        "margin-edge":   "64px",
        "section-gap":   "160px",
        "container-max": "1440px",
      },

      /* ── Typography ── */
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        "manrope":        ["var(--font-manrope)",        "Manrope",        "sans-serif"],
      },
      fontSize: {
        "h1":         ["72px",  { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "700" }],
        "h2":         ["48px",  { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h3":         ["32px",  { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg":    ["18px",  { lineHeight: "1.6", letterSpacing: "0.05em",  fontWeight: "400" }],
        "body-md":    ["16px",  { lineHeight: "1.6", letterSpacing: "0.03em",  fontWeight: "400" }],
        "label-caps": ["12px",  { lineHeight: "1.0", letterSpacing: "0.2em",   fontWeight: "700" }],
      },

      /* ── Box shadows: Energy Glows ── */
      boxShadow: {
        "glow-gold":  "0 0 20px rgba(201,168,76,0.4)",
        "glow-gold-lg":"0 0 40px rgba(201,168,76,0.5)",
        "glow-blue":  "0 0 20px rgba(30,144,255,0.4)",
        "glow-blue-lg":"0 0 40px rgba(30,144,255,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
