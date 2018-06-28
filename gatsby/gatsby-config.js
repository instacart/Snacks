const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '../src/components'),
        name: 'components',
      },
    },
    'gatsby-transformer-react-docgen',
  ],
}
