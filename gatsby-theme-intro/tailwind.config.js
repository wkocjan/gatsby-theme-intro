const color = require("color")

module.exports = theme => {
  const colors =
    typeof theme === "string" ? require(`./src/themes/${theme}`) : theme

  return {
    purge: {
      content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
      options: {
        whitelistPatterns: [/^text-skill/, /^border-skill/],
      },
    },
    darkMode: false,
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
