/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables manual dark mode toggling
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#f8fafc',
          dark: '#0f172a',
          primary: '#2563eb',
          accent: '#22c55e', // WhatsApp Green
        }
      }
    },
  },
  plugins: [],
}