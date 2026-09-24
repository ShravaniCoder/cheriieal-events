/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#10231D",
        emerald: "#17382D",
        ivory: "#F3EFE6",
        champagne: "#C5AB76",
        sage: "#89998B"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Arial", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(16,35,29,.18)",
        glass: "0 20px 60px rgba(4,16,12,.22)"
      }
    }
  },
  plugins: []
};
