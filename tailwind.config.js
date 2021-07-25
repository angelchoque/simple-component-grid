module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: ['Karla','sans-serif']
    },
    extend: {
      colors: {
        'color-primary-dark': 'hsl(179, 62%, 43%)',
        'color-primary-bright': 'hsl(71, 73%, 54%)',
        'color-secondary-light': 'hsl(204, 43%, 93%)',
        'color-secondary-grayish': 'hsl(218, 22%, 67%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
