/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1E88E5",
        "accent": "#43A047",
        "background-light": "#F7F9FC",
        "background-dark": "#111921",
        "text-light": "#212121",
        "text-dark": "#E0E0E0",
        "border-light": "#E0E0E0",
        "border-dark": "#374151"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "heading": ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem", 
        "lg": "1rem", 
        "xl": "1.5rem", 
        "full": "9999px"
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}