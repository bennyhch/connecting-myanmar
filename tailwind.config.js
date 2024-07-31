/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-intro": "url('/src/assets/home-intro.jpg')",
      },
      height: {
        "70lvh": "70lvh",
      },
    },
  },
  plugins: [],
};
