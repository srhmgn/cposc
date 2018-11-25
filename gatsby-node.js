const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve) => {
        graphql(`
            {
                allContentfulContentPage {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `).then(result => {
            const contentPageTemplate = path.resolve(`./src/templates/content-page.js`)
            result.data.allContentfulContentPage.edges.forEach(({ node }) => {
                createPage({
                    path: `/${node.slug}`,
                    component: contentPageTemplate,
                    context: {
                        slug: node.slug
                    }
                })
            })

            resolve()
        })
    })
}
