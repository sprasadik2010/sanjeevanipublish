/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",    
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding custom font-family
      },
      transitionDuration: {
        '3000': '3000ms',
      },
      fontFamily: {
        bauhaus: ['"Bauhaus 93"', 'sans-serif'], // Define the font family
      },
      keyframes: {
        textUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(110%)', opacity: '1' },
          '100%': { transform: 'scale(200%)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        zoomIn: 'zoomIn 100s',
        textUp: 'textUp 2s',
        fadeInUpTitle: 'fadeInUp 1s ease-out',
        fadeInUpDetails: 'fadeInUp 1.2s ease-out',
        fadeInUpButton: 'fadeInUp 2s ease-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')],
}

