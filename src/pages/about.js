import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHero from "../components/aboutHero"
import AboutUSCta from "../components/ctaAboutUs"
import Founders from "../components/founders"
import ParallaxQuote from "../components/parallaxQuote"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <SEO title="About Us" keywords={[`about`, `about us`, `us`]} />
    <AboutHero />
    <AboutUSCta />
    <Founders />
    <ParallaxQuote />
  </Layout>
)

export default AboutPage
