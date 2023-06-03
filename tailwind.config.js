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
      primaryBackground: "#ffff",
      secondaryBackground: "#7746c7",
      thirdBackground: "#250657",
      link: "#250657",
      secondLink: "#ffff",
      textLigh: "",
      categoryBackgroundColor: "rgba(240,142,128,.1)",
      categoryLinkColor: "#152035",
      loadingSkeleton: "#d3d3d3",

      primaryColor: "#45485F",
      linkColor1: "#22242f",
      linkColor2: "#1818DC",
      buttonText: "#ffff"




    }
  },
  plugins: [],
}
