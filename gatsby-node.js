exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql (`
    query {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                slug
              }
              id
            }
          }
        }
      }
    `)

    const postsPerPage = 2

    const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/` : `/${ i +1 }`,
            component: require.resolve("./src/templates/allPosts.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })

      // Create single blog posts
  // For each edge in the query, create a new page
  data.allMdx.edges.forEach(edge => {
    /* take in the values from the query for slug and id and store
them in slug and id const to be used in the createPage method
for the singlePost.js */

    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id },
    })
  })
}