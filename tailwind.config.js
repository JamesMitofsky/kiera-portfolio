module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      sans: ["HelveticaNeue", "Arial", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
