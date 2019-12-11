const path = require('path')

//For Markdown Content
//www.gatsbyjs.org/docs/node-apis/#onCreateNode
// https: module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node: node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

//For Markdown Content
//https://www.gatsbyjs.org/docs/node-apis/#createPages
//module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve("./src/templates/blog.js")

//   const res = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             html
//             excerpt
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   res.data.allMarkdownRemark.edges.forEach((edge) => {
//     createPage({
//         path: `/blog/${edge.node.fields.slug}`,
//         component: blogPostTemplate,
//         context: {
//             slug: edge.node.fields.slug
//         }
//     })
//   })
// }

//For Contentful Content
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/Blog.js")

  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
              slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}