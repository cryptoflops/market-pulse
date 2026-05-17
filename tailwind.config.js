/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#35825e",
          highlight: "#35825e20",
          dark: "#2a684b",
        },
        secondary: {
          DEFAULT: "#c0921a",
          highlight: "#c0921a20",
          dark: "#997414",
        },
        surface: {
          DEFAULT: "var(--surface)",
          container: "var(--surface-container)",
          variant: "var(--surface-variant)",
          bright: "var(--surface-bright)",
        },
        "on-surface": {
          DEFAULT: "var(--on-surface)",
          variant: "var(--on-surface-variant)",
        },
        outline: {
          DEFAULT: "var(--outline)",
          variant: "var(--outline-variant)",
        }
      },
      fontFamily: {
        display: ["var(--font-cabinet)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};