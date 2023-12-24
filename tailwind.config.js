/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#091E3A',
        secondary: '#323750',
        thirdColor: '#1950DD',
        fourColor: '#0B244C ',
        fiveColor: '#fff',
      },
    },
  },
  plugins: [],
}