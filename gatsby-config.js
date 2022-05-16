module.exports = {
  siteMetadata: {
    description: "Portfolio of Iftekhar Riyad",
    locale: "en",
    title: "Iftekhar Riyad",
    formspreeEndpoint: "https://formspree.io/f/mqknwggj",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
  ],
}
