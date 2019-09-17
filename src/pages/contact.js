import React from "react"
import { Parallax } from "react-parallax"
import { Row, Col, Container } from "react-bootstrap"

import background from "../images/img-contact-bg.png"
import logo from "../images/logo-contact.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageInfo={{ pageName: "contact" }}>
    <SEO title="Contact" keywords={[`contact`, `contact us`, `mail`]} />
    <Parallax
      className="contact-parallax"
      blur={0}
      bgImage={background}
      bgImageAlt="Contact"
      strength={200}
    >
      <div style={{ height: 850 }}>
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Container>
            <Col sm={12} md={{ span: 8, offset: 2 }}>
              <img className="img-fluid" height={180} src={logo} alt="" />
            </Col>
          </Container>
        </Row>
        <Row>
          <Container>
            <Col sm={12} md={{ span: 8, offset: 2 }} className="contactDetails">
              <h1 className="semiBold">Contact Us</h1>
              <hr />
              <a href="mailto:c8@capital8investment.com">
                c8@capital8investment.com
              </a>
            </Col>
          </Container>
        </Row>
      </div>
    </Parallax>
  </Layout>
)

export default AboutPage
