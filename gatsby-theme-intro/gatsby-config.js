module.exports = ({
  basePath = "/",
  contentPath = "content/",
  showThemeLogo = true,
  theme = "classic",
  darktheme = "dark-blue",
  lang = null,  // null: Only add the 'lang' tag if it was explicitely given by user
  tailwindConfig = null
}) => {
  // Merge additional tailwindCSS config with the default config
  tailwindOptions = require("./tailwind.config")(theme, darktheme)
  if (tailwindConfig != null) {
    tailwindOptions = {...tailwindOptions, ...tailwindConfig}
  }

  console.log(theme, darktheme)

  return {
    // siteMetadata should be overwritten by the website config
    siteMetadata: {
      description: "Personal page of John Doe",
      title: "John Doe",
      formspreeEndpoint: "https://formspree.io/f/{your-id}",
      lang: lang,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(tailwindOptions),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
        },
      },
      {
        resolve: `gatsby-plugin-react-svg`,
        options: {
          rule: {
            omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'rdfAbout',
                       'xmlnsSodipodi', 'xmlnsInkscape', 'rdfResource']
          }
        }
      },
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
