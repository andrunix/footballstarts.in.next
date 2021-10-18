module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern':  "url(/images/background-2k.jpg)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
