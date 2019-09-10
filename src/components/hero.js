import React, { Component } from "react"
import { Row, Col, Container } from "react-bootstrap"
import heroBg from "../images/top-image.png"
import logoCenter from "../images/logo-center-home.png"
import iconHero1 from "../images/iconHero1.png"
import iconHero2 from "../images/iconHero2.png"
import iconHero3 from "../images/iconHero3.png"

export default class Hero extends Component {
  render() {
    return (
      <div
        className="top-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <Container className="text-center">
          <Row>
            <Col style={{ padding: 30, marginTop: 200 }}>
              <img src={logoCenter} alt="Logo Home" />
            </Col>
          </Row>
          <Row>
            <Col>
              <span style={{ fontSize: 28 }}>
                <b>Technology</b> to deliver top performing risk-adjusted
                returns
              </span>
            </Col>
          </Row>
        </Container>
        <div className="heroIconsBar">
          <Container className="text-center">
            <Row>
              <Col>
                <img src={iconHero3} alt="" />
              </Col>
              <Col>
                <img src={iconHero2} alt="" />
              </Col>
              <Col>
                <img src={iconHero1} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
