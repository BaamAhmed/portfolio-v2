
module.exports = {
  darkMode: 'class',
  content: [
    // Or if using `src` directory:
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/pages/partials/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif']
    },
    extend: {},
  },
  plugins: [],
}