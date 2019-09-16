import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHero from "../components/aboutHero"
import AboutUSCta from "../components/ctaAboutUs"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="About Us" keywords={[`about`, `about us`, `us`]} />
    <AboutHero />
    <AboutUSCta />
  </Layout>
)

export default AboutPage
