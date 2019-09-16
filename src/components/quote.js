import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

export default class Quote extends Component {
  render() {
    return (
      <Row noGutters className="pinkGrayBg quoteContainer">
        <Col className="quote-col">
          <div className="quote text-center">
            <p>
              The market will favor firms that embrace the technological wave to
              be able to navigate through a new market structure.
            </p>
          </div>
        </Col>
      </Row>
    )
  }
}
