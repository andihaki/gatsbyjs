module.exports = {
    siteMetadata: {
        title: `busyLESSman`,
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
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        
    ],
}