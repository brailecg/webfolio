/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#202020",
          secondary: "#323232",
          tertiary: "#9D9D9D",
        },
        font: {
          primary: "#DEDEDE",
          secondary: "#959595",
          tertiary: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
