module.exports = {
  siteMetadata: {
    siteUrl: `https://www.kaleemelahi.co`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'open sans\:400,700'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96285546-1",
        head: false,
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ],
}
