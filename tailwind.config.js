/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      /* DARK COLORS */
      "all-color": colors.zinc,
      "body-color": colors.zinc[950],
      "body-color-secondary": colors.zinc[900],
      "primary-color": colors.zinc[100],
      "secondary-color": colors.zinc[300],
      "neutral-color": colors.zinc[400],
      "highlight-color": colors.teal[300],
      "shadow-color": colors.black,

      /* LIGHT COLORS */
      // "all-color": colors.zinc,
      // "body-color": colors.zinc[50],
      // "body-color-secondary": colors.zinc[100],
      // "primary-color": colors.zinc[900],
      // "secondary-color": colors.zinc[700],
      // "neutral-color": colors.zinc[600],
      // "highlight-color": colors.rose[400],
      // "shadow-color": colors.zinc[200],
    },
  },
  plugins: [],
};
