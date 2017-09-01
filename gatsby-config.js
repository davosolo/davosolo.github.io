module.exports = {
  siteMetadata: {
    title: `David Muñoz`,
  },
  plugins: [`gatsby-plugin-react-helmet`, `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-typography',
      pathToConfigModule: 'src/utils/typography'
    }
  ]
}