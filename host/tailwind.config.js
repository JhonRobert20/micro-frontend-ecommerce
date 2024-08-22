const { join } = require("path");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    join(__dirname, "../cart/src/**/*.{js,jsx,ts,tsx,css,scss}"),
    join(__dirname, "../catalog/src/**/*.{js,jsx,ts,tsx,css,scss}"),
    join(__dirname, "../checkout/src/**/*.{js,jsx,ts,tsx,css,scss}"),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
