import React from 'react'

import Layout from "../components/Layout"
import Head from '../components/Head'

const Contact = () => {
    return (
      <Layout>
      <Head title='Contact' />
        <h1>Contact</h1>
        <p>
          Find me on Twitter:
          <a href="https://twitter.com/_DevthaDude_" target="_blank" rel="noopener noreferrer">@_DevThaDude_</a>
        </p>
      </Layout>
    )
}

export default Contact