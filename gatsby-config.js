module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      }
    }
  ],
};
