import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textcolor: "var(--text-color)",
        primary: {
          50: "#9E9E9E",
          100: "#808080",
          200: "#636363",
          300: "#484848",
          400: "#2E2E2E",
          500: "#161616",
          600: "#030303",
          700: "#000000",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
