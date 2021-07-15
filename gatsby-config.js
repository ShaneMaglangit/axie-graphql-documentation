module.exports = {
  siteMetadata: {
    siteTitle: `Axie GraphQL Docs`,
    defaultTitle: `Axie GraphQL Docs`,
    siteTitleShort: `Axie GraphQL Docs`,
    siteDescription: `API Documentation for the Axie Infinity GraphQL Endpoint`,
    siteUrl: `https://axie-graphql.shanemaglangit.com`,
    siteAuthor: `@shanemaglangit`,
    siteImage: `/favicon.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://axie-graphql.shanemaglangit.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
