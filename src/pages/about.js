import React from "react"
import { Link } from "gatsby"

import Head from '../components/Head'

import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
    <Head title='About' />
      <h1>About</h1>
      <p>I am originally from Georgia. Go Dawgs!</p>
      <p>
        Want to work with me? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default About
