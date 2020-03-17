module.exports = {
    pathPrefix: "nnekaen.github.io/interim-site/",
  siteMetadata: {
    title: 'SlaveFreeTrade',
    author: 'slavefreetrade',
    description:
      'Assessment and monitoring of the human supply chain. In real time, all the time.',
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    }, {
        resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `swiwfbk8sp2q`,
      accessToken: `BMJr3KQuD4EQyjnRlSeiGiCpUukSoMfT63A2XdAzfPw`,
    },
  },
      {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "slavefreetrade.org",
        protocol: "https",
        hostname: "www.slavefreetrade.org",
    },
  },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    
  ],
}
