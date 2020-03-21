module.exports = {
  siteMetadata: {
    title: 'Coronahilfe Finder',
    description: 'Finde Coronahilfe in deiner Stadt',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
