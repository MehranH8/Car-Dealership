/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      sans: ["IRANSansX", ...defaultTheme.fontFamily.sans],
      yekan: ["IRANYekanX", ...defaultTheme.fontFamily.serif],
    },
    colors: {
      "mainorange": "#f7763d",
      "mainblue": "#664BFA",
      "lightblue": "#E0F5FF",
      "maingrey":"#e5e6e4",
      "textgrey":"#797877",
      "bggrey":"#f8f8f7",
      "darkgrey":"#666666",
      "maingreen":"#79AF79"
    },
    extend: {},
  },
  plugins: [],
})

