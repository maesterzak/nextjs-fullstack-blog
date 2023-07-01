/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: '100vw',
      height: '100vh'

    },
    colors: {
      primaryBackground: "#f7f7f8",
      secondaryBackground: "#ff00ff",
      link: "#250657",
      secondLink: "#ffff",
      textLigh: "",
      categoryBackgroundColor: "#fcce32",
      categoryLinkColor: "#152035",
      loadingSkeleton: "#d3d3d3",

      primaryColor: "#45485F",
      linkColor1: "#22242f",
      linkColor2: "#fcce32",
      buttonText: "#ffff",
      grayBackground: "#FAFAFA",
      grayBorder: "#dddddd",
      thirdBackground: "#ff04ffb0"






    },
    fontFamily: {
      mont: ['var(--font-mont)', ...fontFamily.sans],
      mono: ['var(--font-roboto-mono)'],

    },
  },
  plugins: [],
}
