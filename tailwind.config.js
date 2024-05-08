/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1b4b88",
        secondaryColor: "#777e80",
        primaryColorHover: "#265da2",
        secondaryColorHover: "#636a6d",
      },
      boxShadow: {
        custom: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
