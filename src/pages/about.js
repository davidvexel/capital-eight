import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHero from "../components/aboutHero"
import AboutUSCta from "../components/ctaAboutUs"
import Founders from "../components/founders"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="About Us" keywords={[`about`, `about us`, `us`]} />
    <AboutHero />
    <AboutUSCta />
    <Founders />
  </Layout>
)

export default AboutPage
