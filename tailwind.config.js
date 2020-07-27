const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      boxShadow: {
        'teal': '0 0 0 4px rgba(0, 173, 181, 1)'
      },
      colors: {
        gray: {
          ...colors.gray,
          '200': '#bebebe',
          '500b': '#313131',
        },
        teal: {
          '500b' : '#00ADB5'
        },
      },
      spacing: {
       '72': '18rem',
       '78': '19.5rem',
       '84': '21rem',
       '96': '24rem',
       '108': '27rem',
       '120': '30rem',
       '180': '45rem',
       
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
