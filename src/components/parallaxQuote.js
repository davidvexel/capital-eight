import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import { Parallax } from "react-parallax"
import background from "../images/top-image.png"

export default class ParallaxQuote extends Component {
  render() {
    return (
      <Parallax
        className="quote-parallax"
        blur={0}
        bgImage={background}
        bgImageAlt="We foresee the evolution of a market increasingly reactive
                  to cycles and the need to assess a new risk structure."
        strength={200}
      >
        <Row>
          <Row noGutters className="quoteContainer">
            <Col className="quote-col">
              <div className="quote text-center">
                <p className="white">
                  We foresee the evolution of a market increasingly reactive to
                  cycles and the need to assess a new risk structure.
                </p>
              </div>
            </Col>
          </Row>
        </Row>
      </Parallax>
    )
  }
}
