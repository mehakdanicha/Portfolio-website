/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bodyfont:["Poppins","sans-serif"],
        titlefont:["Montserrat","sans-serif"],

      },
    },
  },
  plugins: [],
}

