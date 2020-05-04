module.exports = {
  siteMetadata: {
    description: "Personal page of John Doe",
    locale: "en",
    title: "John Doe",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
