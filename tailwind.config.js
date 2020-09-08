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
      
      boxShadow: {
        'teal': '0 0 0 4px rgba(0, 173, 181, 1)'
      },
      colors: {
        gray: {
          ...colors.gray,
          '200': '#bebebe',
          '500b': '#313131',
        },
        orange: {
          ...colors.orange,
          '200b': '#f8f2ea',
        },
        teal: {
          '500b' : '#00ADB5'
        },
        blue: {
          ...colors.blue,
          '200b': '#00adb5',
          '400b': '#154fff',
        }
      },
      spacing: {
       '36': '9rem',
       '72': '18rem',
       '78': '19.5rem',
       '84': '21rem',
       '96': '24rem',
       '108': '27rem',
       '120': '30rem',
       '128': '32rem',
       '148': '37rem',
       '176': '44rem',
       '180': '45rem',
       '1/2': '50%',
       '1/3': '33.333333%',
       '2/3': '66.666667%',
       '1/4': '25%',
       '3/4': '75%',
       '1/6': '16.666667%',
       '5/6': '83.333333%',
       '9/20': '45%',
       '9/25': '36%',
       '19/50': '38%',
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
