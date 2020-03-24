module.exports = {
  siteMetadata: {
    title: 'Coronahilfe Finder',
    description: 'Finde Coronahilfe in deiner Stadt',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-161734177-1',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
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
