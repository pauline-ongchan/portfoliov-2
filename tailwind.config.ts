import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
      },
      colors: {
        base: "#fafafa",
        foreground: "#111111",
        muted: "#55534b",
        accent: "#c2410c",
        divider: "#e2e2e2",
        placeholder: "#e8e6e0",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
