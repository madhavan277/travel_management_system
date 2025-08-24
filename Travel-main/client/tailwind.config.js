/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vto: {
          50: "#ffeedb",
          100: "#ffd2ae",
          200: "#ffb47e",
          300: "#ff984c",
          400: "#ff7a1a",
          500: "#e66100",
          600: "#b44b00",
          700: "#813500",
          800: "#4f1e00",
          900: "#200800",
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
      tnr: ["Playfair Display"],
      cormorant: ["Cormorant"],
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};
