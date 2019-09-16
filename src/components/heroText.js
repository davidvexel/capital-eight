import React, { Component } from "react"
import { Row, Col, Button } from "react-bootstrap"
import heroBg from "../images/hero2.jpg"
import { Parallax } from "react-parallax"

export default class HeroText extends Component {
  render() {
    return (
      <Parallax
        blur={0}
        bgImage={heroBg}
        bgImageAlt="Capital Eight"
        strength={200}
        className="hero-text"
      >
        <div>
          <Row>
            <div style={{ margin: "300px 50px" }}>
              <Col md={{ span: 6, offset: 6 }} className="text-right">
                <p>
                  <b>Capital Eight’s</b> vision is to pioneer a new generation
                  of investment firms adapted to the reality of a fast evolving
                  market and anchored around the values of innovation,
                  meritocracy, transparency and alignment of interests.
                </p>
                <Button variant="outline-light" size="lg">
                  Learn more about us
                </Button>
              </Col>
            </div>
          </Row>
        </div>
      </Parallax>
    )
  }
}
