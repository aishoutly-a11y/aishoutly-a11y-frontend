/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1447E6",
        "brand-purple": "#8B2CF5",
        "brand-pink": "#F6339A",
        "brand-green": "#00C950",
        "brand-dark-green": "#009F46",
        "brand-light-blue": "#4C8DFF",
        "brand-light-purple": "#C07BFF",
        "brand-light-pink": "#FF74C6",

      },

      backgroundSize: {
        "200": "200% 200%",
      },
      animation: {
        "gradient-move": "gradientMove 6s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
