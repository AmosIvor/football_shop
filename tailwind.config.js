/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        football: {
          sub: '#FEF1D8',
          primary: '#F5AC00'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      }
    }
  },
  plugins: []
}
