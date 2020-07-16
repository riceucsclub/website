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
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
