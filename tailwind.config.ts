import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0B1628",
        "bg-card": "#0D1F30",
        "bg-surface": "#111D2E",
        "text-primary": "#EDF2F7",
        "text-secondary": "#C8D6E5",
        "text-muted": "#5B7B9A",
        "accent-blue": "#2E8BC0",
        "accent-green": "#27AE60",
        "accent-orange": "#E67E22",
        "accent-purple": "#8E44AD",
        "accent-teal": "#1D9E75",
        "accent-red": "#E74C3C",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "count-up": "countUp 2s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        countUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px #2E8BC040" },
          "50%": { boxShadow: "0 0 20px #2E8BC080" },
        },
      },
      boxShadow: {
        "blue-glow": "0 0 20px rgba(46, 139, 192, 0.3)",
        "blue-glow-lg": "0 0 40px rgba(46, 139, 192, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
