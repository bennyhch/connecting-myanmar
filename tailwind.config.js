/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        actor: ["Actor", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "home-intro": "url('/src/assets/home-intro.jpg')",
      },
      height: {
        "50lvh": "50lvh",
        "70lvh": "70lvh", // TODO: Remove this if not used
      },
      colors: {
        customGold: "#b08c2c",
        customGreen: "#70bc3c",
        customBrown: "#8D5024",
      },
    },
  },
  plugins: [],
};
