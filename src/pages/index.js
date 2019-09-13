import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CtaTextLeft from "../components/ctaTextLeft"
import CtaTextRight from "../components/ctaTextRight"
import HeroText from "../components/heroText"

import philosophyImage from "../images/imagen-philosophy.jpg"
import createdImage from "../images/imagen-created.jpg"
import Quote from "../components/quote"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Hero />

    <CtaTextLeft
      cssClassName="ctaTextLeftOrRight"
      text={{
        title: "Capital Eight’s philosophy",
        description:
          "A tech framework approach to scientific methods and innovation:  We invest by taking into account finance-economic information and by using machine learning models to enhance our decision-making process",
      }}
      image={philosophyImage}
    />
    <CtaTextRight
      cssClassName="ctaTextLeftOrRight"
      text={{
        title: "",
        description:
          "We create technology to serve our investment ideology: Mathematical and technological approach for execution and modelling, financial markets expertise and awareness for design. Ultimately, we balance human biases with machine strengths and machine weaknesses with human knowledge.",
      }}
      image={createdImage}
    />
    <HeroText />
    <Quote />
  </Layout>
)

export default IndexPage
