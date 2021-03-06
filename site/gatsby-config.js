module.exports = {
  siteMetadata: {
    description: "Personal page of Hongru Xiang",
    locale: "en",
    title: "Hongru Xiang | Portfolio",
    formspreeEndpoint: "https://formspree.io/f/xaylgrvn",
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-172729265-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Defers execution of google analytics script after page load
        defer: false,
        cookieDomain: "none",
      },
    },
  ],
}
