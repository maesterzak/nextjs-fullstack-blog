/** @type {import('tailwindcss').Config} */
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
      primaryBackground: "#03031b",
      secondaryBackground: "#16151d",
      link: "#ffa000",
      textLigh: "",
      categoryBackgroundColor: "rgba(240,142,128,.1)",
      categoryLinkColor: "#152035"



    }
  },
  plugins: [],
}
