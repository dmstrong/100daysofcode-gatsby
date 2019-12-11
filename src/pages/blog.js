import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import blogStyles from "../pages/blog.module.scss"
import Head from '../components/Head'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  `)

  //Markdown Data
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields{
  //               slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
    <Head title='Blog' />
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, id) => {
          return (
            <li key={id} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ul>

      {
        // Markdown JSX
        //<ul className={blogStyles.posts}>
        //     {data.allMarkdownRemark.edges.map((edge, id) => {
        //         return (
        //           <li key={id} className={blogStyles.post}>
        //             <h2>
        //               <Link to={`/blog/${edge.node.fields.slug}`}>
        //                 {edge.node.frontmatter.title}
        //               </Link>
        //             </h2>
        //             <p>{edge.node.frontmatter.date}</p>
        //           </li>
        //         )
        //     } )}
        // </ul>
      }
    </Layout>
  )
}

export default Blog
