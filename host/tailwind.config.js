const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    join(__dirname, "../cart/src/**/*.{js,jsx,ts,tsx,css,scss}"),
    join(__dirname, "../catalog/src/**/*.{js,jsx,ts,tsx,css,scss}"),
    join(__dirname, "../checkout/src/**/*.{js,jsx,ts,tsx,css,scss}"),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          "base-hover": "var(--color-text-base-hover)",
          details: "var(--color-details)",
          decorative: "var(--color-decorative-section)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-primary)",
          "button-acent": "var(--color-button-acent)",
          "button-acent-hover": "var(--color-button-acent-hover)",
          decorative: "var(--color-decorative-section)",
          details: "var(--color-details)",
        },
      },
      borderColor: {
        skin: {
          details: "var(--color-details)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
