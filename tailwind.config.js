/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#0e7490',
        'teal': '#14b8a6',
        
      }
    },
  },
  plugins: [],
}

