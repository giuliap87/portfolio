exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allProjectJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("There was a problem loading this page.")
    return
  }

  const projects = result.data.allProjectJson.edges
  projects.forEach(({ node: project }) => {
    const slug = project.slug
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        slug,
      },
    })
  })
}
