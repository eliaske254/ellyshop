module.exports = {
  purge: [
  	'./*.html',
  ],
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors : {
        "theme-green": "#00b140"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
