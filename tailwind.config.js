const defaultTheme = require('tailwindcss/defaultTheme')

const sizing = () => {
  const obj = {}
  for (i of new Array(9).keys()) {
    obj[`${i + 1}/10`] = `${(i + 1) * 10}%`
  }
  return obj
}

const fontFamily = {
  title: [
    'Nunito',
    ...defaultTheme.fontFamily.sans,
  ],
  sans: [
    'Nunito',
    ...defaultTheme.fontFamily.sans,
  ],
  mono: [
    'Inconsolata',
    ...defaultTheme.fontFamily.mono,
  ],
}

const colors = {
  'rp-gray': {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#D7D7D7',
    300: '#BFBFBF',
    400: '#908F8F',
    500: '#605F5F',
    600: '#565656',
    700: '#3A3939',
    800: '#2B2B2B',
    900: '#1D1D1D',
  },
  'rp-blue': {
    default: '#22ACE2',
    '100': '#D6F0FA',
    '200': '#A9DFF4',
    '300': '#7CCEEE',
    '400': '#4FBDE8',
    '500': '#22ACE2',
    '600': '#188BB9',
    '700': '#12698C',
    '800': '#0C475F',
    '900': '#062532'
  },
  'rp-yellow': {
    default: '#F6EE55',
    '100': '#FCFACA',
    '200': '#FBF7AD',
    '300': '#F9F490',
    '400': '#F8F172',
    '500': '#F6EE55',
    '600': '#F4E925',
    '700': '#DAD00B',
    '800': '#AAA209',
    '900': '#797306'
  },
}

module.exports = {
  mode: 'jit',
  purge: [
    './{pages,lib,components,www,styles}/**/*.{html,js,ts,jsx,tsx,css,pcss}'
  ],
  darkMode: false,
  theme: {
    extend: {
      'animation': {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      'keyframes': {
        'gradient-y': {
          '0%, 100%': {
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      screens: {
        'xxl': {'min': '1480px'}
      },
      fontFamily,
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing(),
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },

      inset: {
        '-15': '-3.75rem',
        '2': '0.5rem',
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing(),
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },
      colors,
    },
  },
  plugins: [
    require('tailwindcss-safe-area'),
    require('@tailwindcss/typography'),
  ],
}
