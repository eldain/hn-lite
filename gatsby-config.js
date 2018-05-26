module.exports = {
  siteMetadata: {
    title: 'HNL',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HNL',
        short_name: 'HNL',
        start_url: '/',
        background_color: '#141414',
        theme_color: '#141414',
        display: 'standalone',
        icon: 'src/assets/favicons/favicon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
