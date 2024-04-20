// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: theme => ({
        'red-gradient': ['rgba(251, 107, 107, 0)', 'rgba(251, 107, 107, 0.37)', 'rgba(249, 214, 213, 0.71)', '#FAFAFA'],
      }),
    },
  },
  plugins: [],
};
