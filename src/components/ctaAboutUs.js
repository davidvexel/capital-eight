import React, { Component } from "react"
import { Row, Col, Container } from "react-bootstrap"
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"

export default class AboutUSCta extends Component {
  render() {
    return (
      <div className="grayBg py-3 ctaAboutus">
        <Container className="text-center">
          <Row style={{ margin: "80px 0" }}>
            <Col sm={12} md={4}>
              <h3>Data driven optimized solutions</h3>
              <div className="imageBox">
                <img className="img-fluid" src={about1} alt="" />
              </div>
            </Col>
            <Col sm={12} md={4}>
              <h3>Propietary analyticalmodels</h3>
              <div className="imageBox">
                <img className="img-fluid" src={about2} alt="" />
              </div>
            </Col>
            <Col sm={12} md={4}>
              <h3>Carefully curated data</h3>
              <div className="imageBox">
                <img className="img-fluid" src={about3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
