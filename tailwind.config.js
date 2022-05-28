module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        logystoDarkBlue: 'hsl(253, 85%, 24%)',
        logystoOrange: 'hsl(3, 95%, 60%)',
      }
    },
  },
  plugins: [],
}