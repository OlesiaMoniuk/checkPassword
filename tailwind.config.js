/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('assets/img/Bubbles.png')",
      },
      spacing: {
        500: "31.25rem",
        250: "15.6rem",
      },
      colors: {
        pink: "#E397AD",
        barGray: "#DDD",
      },
    },
  },
  plugins: [],
};
