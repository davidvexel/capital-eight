import React, { Component } from "react"
import { Row, Col, Container } from "react-bootstrap"
import background from "../images/about-img.jpg"
import { Parallax } from "react-parallax"

export default class AboutHero extends Component {
  render() {
    return (
      <Parallax
        className="about-hero"
        blur={0}
        bgImage={background}
        bgImageAlt="About Capital Eight"
        strength={200}
      >
        <div className="about-hero-content">
          <Container className="text-center">
            <Row>
              <Col sm={12} md={{ span: 8, offset: 2}} className="about-hero-col">
                <h1>About<br/> Capital Eight</h1>
                <hr/>
                <div>
                <p>Capital Eight is focusing on the US market and developing analytical frameworks, that can be derived into investment strategies based on the core values of the company:</p>
                <p>Emphasis on risk management</p>
                <p>Data driven analysis of current vulnerability of the market</p>
                <p>Limitation of human biases in execution</p>
                <p>Long-term approach to value creation</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
    )
  }
}
