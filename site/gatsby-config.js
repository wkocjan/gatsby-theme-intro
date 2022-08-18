module.exports = {
  siteMetadata: {
    description: "Personal page of Rasmus Eduards",
    locale: "en",
    title: "Rasmus Eduards",
    formspreeEndpoint: "https://formspree.io/f/mdojojez",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "dark-pink",
      },
    },
  ],
}
