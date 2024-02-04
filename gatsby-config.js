/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-stance-site`,
    siteUrl: `https://stancepilates.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stance Pilates`,
        short_name: `Stance`,
        start_url: `/`,
        background_color: `#7E8A9B`,
        theme_color: `rgb(241, 238, 234)`,
        display: `standalone`,
        icon: `src/images/sp.png`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap`,
          },
          {
            name: `Jost`,
            file: `https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap`,
          },
          {
            name: `Lato`,
            file: `https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap`,
          },
        ],
      },
    },
  ],
};
