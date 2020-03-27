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
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/',
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'coronahilfe-finder.de', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
            ErrorDocument 401 /error_pages/401.html
            ErrorDocument 404 /error_pages/404.html
            ErrorDocument 500 /error_pages/500.html
          `,
        redirect: ['RewriteRule ^(.*)$ https://coronahilfe-finder.de/$1 [R=301,L]'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
