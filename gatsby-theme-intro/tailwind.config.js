const color = require("color")

module.exports = (theme, darktheme) => {
  const colors =
    typeof theme === "string" ? require(`./src/themes/${theme}`) : theme
  const darkColors =
    typeof darktheme === "string" ? require(`./src/themes/${darktheme}`) : darktheme

  return {
    content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
    safelist: [{pattern: /text-skill-.+/},
               {pattern: /border-skill-.+/}],
    
    darkMode: "media",
    theme: {
      fontFamily: {
        header: ["Source Sans Pro", "sans-serif"],
        text: ["Roboto", "sans-serif"],
      },
      extend: {
        colors: {
          ...colors,
          "back-light": color(colors.back)
            .lighten(0.18)
            .hex(),
          // Add '-dark' to all the color names in `darkColors`, to distinguish them from `colors`
          ...((colors) => {
                _darkColors = {};
                for (let k in colors) {
                  _darkColors[`${k}-dark`] = `${colors[k]}`;}
                return _darkColors})(darkColors),
          "back-light-dark": color(darkColors.back)
            .lighten(0.18)
            .hex()
        },
        borderRadius: {
          lg: "1rem",
        },
        spacing: {
          "14": "3.5rem",
        },
      },
    },
  }
}
