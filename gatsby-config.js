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
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
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
  ]
};
