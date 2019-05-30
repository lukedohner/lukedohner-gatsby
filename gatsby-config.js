module.exports = {
  siteMetadata: {
    description: `Files you might need.`,
    author: `xx @gatsbyjs`,
    author2: `xx @gatsbyjs`,
    siteUrl: `https://www.gatsbyjs.org`,
    title: `Hello from the gatsby-config.js file. `,
      menuLinks:[
        {
           name:`home`,
           link:`/`
        },
        {
           name:`banner`,
           link:`/detail-banners`
        },
        {
           name:`contact`,
           link:`/#homefooter`
        },
        {
           name:`page2`,
           link:`/page-2`
        }

      ]
  },
  pathPrefix: `/bootstrap-ld/react-site/my-public`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}