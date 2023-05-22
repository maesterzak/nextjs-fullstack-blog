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
      primaryBackground: "#FFF6EF",
      secondaryBackground: "#ffff",
      link: "#f08e80",
      textLigh: "",



    }
  },
  plugins: [],
}
