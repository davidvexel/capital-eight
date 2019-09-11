import React, { Component } from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import heroBg from "../images/hero2.jpg"

export default class HeroText extends Component {
  render() {
    return (
      <div
        className="hero-text"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <Row>
          <div style={{ margin: "300px 50px" }}>
            <Col md={6}>
              <p>
                <b>Capital Eight’s</b> vision is to pioneer a new generation of
                investment firms adapted to the reality of a fast evolving
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
    )
  }
}
