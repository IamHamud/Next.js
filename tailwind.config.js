module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'checkout-bg': '#e6e7ec',
      },
      textColor: {
        'checkout-text': '#1a1b1f',
      },
      gradientColorStops: {
        'checkout-start': '#2bd4db',
        'checkout-end': '#ffffc8',
      },
    },
  },
  plugins: [],
};
