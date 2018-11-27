const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// ini untuk modifikasi slug & url (path)
// getNode = dapetin filename
exports.onCreateNode = ({ node, getNode, actions }) => {
    // createNodeField = masukin slug ke graphql MarkdownRemark
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages`});
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
        // console.log(`\n`, createFilePath({node, getNode, basePath: `pages`}))
    }
}

// bikin pages
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise(( resolve, reject ) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then( result => {
            //// console.log(JSON.stringify(result, null, 4))
            // bikin page dengan template tsb
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.jsx`),
                    context: {
                        // data passed to context is available
                        // in page queries as GraphQL variables
                        slug: node.fields.slug
                    }
                })
            })
            resolve()
        })
    })
}