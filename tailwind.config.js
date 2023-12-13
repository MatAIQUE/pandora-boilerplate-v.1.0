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
          secondary: "#ABB1BA",
          danger: "#C5280C",
          bgDark: "#111622",
          bgLight: "#111622F5 96%",
          accent: "#37cdbe",
          neutral: "#111622",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};
