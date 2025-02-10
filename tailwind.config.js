/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik Spray Paint', 'serif'],
        pangolin: ['Pangolin', 'serif'],
        lilita: ['Lilita One', 'serif'],
      },
      colors: {
        pinkest: '#FF67AB',
        pinker: '#FF9CB8',
        lesspink: '#FFDBE5',
        purplepink: '#FF9CFD',
      },
    },
  },
  plugins: [],
};
