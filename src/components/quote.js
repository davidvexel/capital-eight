import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"

export default class Quote extends Component {
  render() {
    return (
      <div className="grayBg quoteContainer">
        <Row>
          <div style={{ margin: "200px 180px", textAlign: "center" }}>
            <Col>
              <p className="quoteText">
                The market will favor firms that embrace the technological wave
                to be able to navigate through a new market structure.
              </p>
            </Col>
          </div>
        </Row>
      </div>
    )
  }
}
