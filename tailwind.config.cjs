/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBlue: '#183282',
        mainBackground: '#ECEADD',
        gradientBlue: '#182E76',
        gradientPurple: '#37233B',
        gradientOrangeLight: '#FF9A63',
        gradientOrangeDark: '#FE804B',
        gradientLightBlue: '#7795FD',
        gradientLightBlueDarker: '#4958CC',
      },
      fontFamily: {
        atkinson: ['Atkinson Hyperlegible', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
