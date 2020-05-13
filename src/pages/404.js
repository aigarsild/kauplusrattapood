import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ei leidnud otsitavat lehte :((</h1>
    <Link to="/">Mine tagasi esilehele</Link>
  </Layout>
)

export default NotFoundPage
