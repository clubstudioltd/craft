module.exports = {
  purge: {
    content: [
      './resources/templates/**/*.twig',
    ],
    options: {
      whitelist: [],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}