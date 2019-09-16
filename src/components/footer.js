import React from "react"
import logo from "../images/logo.png"

import { Row, Col } from "react-bootstrap"

const CustomFooter = () => {
  return (
    <footer className="footer">
      <Row noGutters>
        <Col>
          <img width={200} src={logo} alt="" />
        </Col>
      </Row>
      <hr />
      <Row noGutters className="footer-menu">
        <Col sm={12} md={6}>
          <a href="#">Copyright</a>
        </Col>
        <Col sm={12} md={6} className="text-right">
          <a href="#">Legal</a>
          <a href="#">Privacy</a>
        </Col>
      </Row>
    </footer>
  )
}

export default CustomFooter
