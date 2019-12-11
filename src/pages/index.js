import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

const Index = () => {
    return (
      <Layout>
        <Head title='Home' />
          <h1>Hello</h1>
          <h2>
            I'm D. Strong. I'm a front-end developer living in Birmingham, AL.
          </h2>
          <p>
            Need a developer? <Link to="/contact">Contact Me</Link>
          </p>
      </Layout>
    )
}

export default Index