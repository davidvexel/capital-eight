import React, { Component } from "react"
import { Row, Col, Container } from "react-bootstrap"
import heroBg from "../images/top-image.png"
import logoCenter from "../images/logo-center-home.png"

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
            <Col style={{ marginBottom: 200 }}>
              <span style={{ fontSize: 28 }}>
                <b>Technology</b> to deliver top performing risk-adjusted
                returns
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
