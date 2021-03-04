/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Giulia Piras' Portfolio",
    titleTemplate: "%s | My projects",
    author: "Giulia Piras",
    description:
      "My name is Giulia Piras and I am a front end developer. Check out my portfolio!",
    url: "http://giuliapiras-portfolio.surge.sh/", // No trailing slash allowed!
    image: "/logo.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giulia Piras' Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#47ad90`,
        theme_color: `#47ad90`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`
  ],
}
