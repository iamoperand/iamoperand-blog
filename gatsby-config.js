module.exports = {
  siteMetadata: {
    title: '@iamoperand',
    description: 'Official blog of @iamoperand',
    keywords: '@iamoperand, Nikhil Arora',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
  ],
};
