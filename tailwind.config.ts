import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e6c364",
        "primary-container": "#C9A84C",
        secondary: "#c5c6ca",
        tertiary: "#b9c4ff",
        error: "#ffb4ab",
        "on-primary": "#3d2e00",
        "on-primary-fixed": "#241a00",
        "on-surface": "#e9e1d7",
        "on-surface-variant": "#d0c5b2",
        "on-background": "#e9e1d7",
        "on-secondary-container": "#b7b8bc",
        "surface": "#16130d",
        "surface-container": "#221f19",
        "surface-container-low": "#1e1b15",
        "surface-container-high": "#2d2a23",
        "surface-container-highest": "#38342d",
        "surface-container-lowest": "#100e08",
        "surface-variant": "#38342d",
        "background": "#16130d",
        "outline": "#99907e",
        "outline-variant": "#4d4637",
        "tertiary-container": "#9ba8eb",
        "inverse-surface": "#e9e1d7",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        "manrope": ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      spacing: {
        "section-gap": "160px",
        "margin-edge": "64px",
        "gutter": "32px",
        "container-max": "1440px",
      },
      fontSize: {
        "h1": ["72px", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "700" }],
        "h2": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h3": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", letterSpacing: "0.05em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", letterSpacing: "0.03em", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.2em", fontWeight: "700" }],
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
