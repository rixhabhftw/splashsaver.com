/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 0.8s ease-in-out",
        slide: {
          keyframes: {
            "0%": { translateX: "-2px" },
            "100%": { translateX: 0 },
          },
        },
      },
    },
  },
  plugins: [],
};
