module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
          decorative: "var(--color-decorative-section)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
