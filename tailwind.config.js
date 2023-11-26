/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        laptopXS: '1380px',
        laptop: '1650px'
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        football: {
          sub: '#FEF1D8',
          primary: '#F5AC00',
          blue11: '#11006F',
          grayF6: '#F6F5F9',
          gray7A: '#7A7A9D'
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
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          width: '78%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        }
      })
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ]
}
