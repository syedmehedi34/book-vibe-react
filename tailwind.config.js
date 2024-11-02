/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#131313",
        text80: "#131313CC",
        greeny: "#23BE0A",
      },
    },
    fontFamily: {
      playFair: "Playfair Display",
    },
  },
  plugins: [require("daisyui")],
};
