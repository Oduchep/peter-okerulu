import * as React from "react"
import Banner from "../components/banner"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Banner />
  </Layout>
)

export default IndexPage
