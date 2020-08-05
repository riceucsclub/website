const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '200': '#bebebe',
          '500': '#313131',
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
