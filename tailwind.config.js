module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-light-desktop": "url('./images/bg-desktop-light.jpg')",
        "hero-light-mobile": "url('./images/bg-mobile-light.jpg')",
        "hero-dark-desktop": "url('./images/bg-desktop-dark.jpg')",
        "hero-dark-mobile": "url('./images/bg-mobile-dark.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
