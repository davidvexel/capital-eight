import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CallToActionThree from "../components/callToActionThree"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Hero />
    <CallToActionThree
      cssClassName="ctaThreeHome"
      firstBlock={{
        title: "Lorem Ipsum Dummy Text",
        text:
          "market and developing analytical frameworks, that can be derived into investment strategies based on the core values of the company: ",
      }}
      secondBlock={{
        title: "Lorem Ipsum Dummy Text",
        text:
          "market and developing analytical frameworks, that can be derived into investment strategies based on the core values of the company: ",
      }}
      thirdBlock={{
        title: "Lorem Ipsum Dummy Text",
        text:
          "market and developing analytical frameworks, that can be derived into investment strategies based on the core values of the company: ",
      }}
    />
  </Layout>
)

export default IndexPage
