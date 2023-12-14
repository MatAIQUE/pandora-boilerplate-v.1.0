/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        kmc: {
          primary: "#FF7200",
          secondary: "#DDE0E4",
          danger: "#C5280C",
          bgDark: "#111622",
          bgLight: "#111622F5",
          accent: "#141b2c",
          neutral: "#111622",
          "base-100": "#1a1f2b",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};
