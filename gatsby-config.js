module.exports = {
  siteMetadata: {
    title: 'Coronahilfe Finder',
    siteUrl: 'https://coronahilfe-finder.de',
    description: 'Finde Coronahilfen in deiner Stadt',
    imageUrl: 'https://coronahilfe-finder.de/og-image.png',
    imageType: 'image/png',
    imageWidth: 587,
    imageHeight: 173,
    menu: [
      {
        name: 'Regionale Hilfen',
        path: '/regional/',
      },
      {
        name: 'Deutschlandweite Hilfen',
        path: '/national/',
      },
      {
        name: 'Mithelfen',
        path: '/mithelfen/',
      },
      {
        name: 'Über uns',
        path: '/ueber-uns/',
      },
    ],
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
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/regional/*'] },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-force-trailing-slashes',
  ],
}
