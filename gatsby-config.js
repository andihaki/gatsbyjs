module.exports = {
    siteMetadata: {
        title: `portofolio`,
    },
    plugins: [
        
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-emotion`,        
    ],
    pathPrefix: `/font`,
}