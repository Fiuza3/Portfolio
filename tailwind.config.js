/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#cfeaf2',
          500: '#6ba6a1',
          600: '#3d6f68',
          700: '#244c47',
          900: '#0d2b27',
          950: '#092b25',
        },
        dark: {
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      }
    },
  },
  plugins: [],
}