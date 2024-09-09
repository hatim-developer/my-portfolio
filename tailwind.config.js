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
      "body-color": colors.zinc[900],
      "primary-color": colors.zinc[100],
      "secondary-color": colors.zinc[300],
      "neutral-color": colors.zinc[400],
      "highlight-color": colors.teal[300],
    },
  },
  plugins: [],
};
