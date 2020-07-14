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
      },
      spacing: {
       '72': '18rem',
       '84': '21rem',
       '96': '24rem',
       '50%' : '50%',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textOpacity: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'group-hover'],
    flex: ['responsive', 'hover', 'group-hover'],
    objectPosition: ['responsive', 'hover', 'group-hover'],
    justifyContent: ['responsive', 'hover', 'group-hover'],
    alignItems: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
}
