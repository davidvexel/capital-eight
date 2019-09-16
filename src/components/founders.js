import React, { Component } from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import josephMug from "../images/joseph.png"
import santiagoMug from "../images/santiago.png"

export default class Founders extends Component {
  render() {
    return (
      <div className="py-5 founders">
        <Container>
          <Row>
            <Col className="text-center">
              <h1>The Founders</h1>
            </Col>
          </Row>

          <Row className="my-5">
            <Col sm={12} md={6}>
              <img src={santiagoMug} alt="" className="img-fluid" />
              <h3 className="my-4">
                Santiago is co-founder of Capital Eight - Investment Technology,
                where he drives the company’s strategic vision.
              </h3>
              <p>
                Santiago leads the market oversight and investments initiatives,
                and structures the design of the analytical frameworks developed
                at the company.
              </p>
              <p>
                He holds over 12 years of experience in the financial industry,
                most recently serving as Director of Equity Capital Markets at
                Citigroup prior to founding Capital Eight Investment Technology.
              </p>
              <p>
                Santiago received his MBA specializing in Business Analytics
                from Massachusetts Institute of Technology, his MSc in
                Investment Management from Cass Business School and his BSc in
                Chemical Engineering from Tec de Monterrey.
              </p>
            </Col>
            <Col sm={12} md={6}>
              <img src={josephMug} alt="" className="img-fluid" />
              <h3 className="my-4">
                Joseph is co-founder of Capital Eight Investment Technology,
                where he drives the company´s strategic growth and its
                operations.
              </h3>
              <p>
                Santiago leads the market oversight and investments initiatives,
                and structures the design of the analytical frameworks developed
                at the company.
              </p>
              <p>
                He holds over 12 years of experience in the financial industry,
                most recently serving as Director of Equity Capital Markets at
                Citigroup prior to founding Capital Eight Investment Technology.
              </p>
              <p>
                Santiago received his MBA specializing in Business Analytics
                from Massachusetts Institute of Technology, his MSc in
                Investment Management from Cass Business School and his BSc in
                Chemical Engineering from Tec de Monterrey.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <Button variant="outline-dark">Learn more about us</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
