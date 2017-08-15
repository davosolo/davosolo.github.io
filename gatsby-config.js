module.exports = {
  siteMetadata: {
    title: `David's Site`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-typography',
      pathToConfigModule: 'src/utils/typography'
    }
  ]
}