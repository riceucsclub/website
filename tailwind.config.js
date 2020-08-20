const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '85%',
      'full': '100%',
            },
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '200': '#bebebe',
          '500': '#313131',
        },
        orange: {
          ...colors.orange,
          '200': '#f8f2ea',
        },
        blue: {
          ...colors.blue,
          '200': '#00adb5',
          '400': '#154fff',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
