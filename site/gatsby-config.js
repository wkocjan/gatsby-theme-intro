module.exports = {
  siteMetadata: {
    description: "Personal page of Hongru Xiang",
    locale: "en",
    title: "Hongru Xiang | Portfolio",
  },
  plugins: [
    {
      resolve: "../gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
  ],
}
