/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dce4f2',
          200: '#bccce6',
          300: '#92abd4',
          400: '#6685be',
          500: '#4768aa',
          600: '#36528b',
          700: '#2b406e',
          800: '#233458',
          900: '#0F172A',
          950: '#0b101c',
        },
        gold: {
          50: '#fbf9eb',
          100: '#f6f1ca',
          200: '#eee498',
          300: '#e6d25e',
          400: '#dec539',
          500: '#D4AF37', // Main gold color
          600: '#b38d27',
          700: '#8d6a22',
          800: '#735321',
          900: '#60431f',
          950: '#372610',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};