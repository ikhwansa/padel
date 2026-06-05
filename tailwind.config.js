/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f3ffca",
          container: "#cafd00",
          fixed: "#cafd00",
          dim: "#beee00",
        },
        "on-primary": {
          fixed: "#3a4a00",
          container: "#4a5e00",
        },
        secondary: {
          DEFAULT: "#929bfa",
          container: "#343d96",
          "fixed-dim": "#babfff",
        },
        "on-secondary": {
          DEFAULT: "#0b1574",
          container: "#c9cdff",
        },
        tertiary: {
          DEFAULT: "#81ecff",
          container: "#00e3fd",
        },
        "on-tertiary": {
          DEFAULT: "#005762",
          container: "#004d57",
        },
        surface: {
          DEFAULT: "#0a0e14",
          bright: "#262c36",
          container: {
            DEFAULT: "#151a21",
            high: "#1b2028",
            highest: "#20262f",
            low: "#0f141a",
            lowest: "#000000",
          },
          variant: "#20262f",
        },
        "on-surface": {
          DEFAULT: "#f1f3fc",
          variant: "#a8abb3",
        },
        outline: {
          DEFAULT: "#72757d",
          variant: "#44484f",
        },
        error: {
          DEFAULT: "#ff7351",
        },
      },
      fontFamily: {
        headline: ["var(--font-lexend)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
