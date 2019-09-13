import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

import { Navbar, Nav, Container } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        id="site-navbar"
        style={{ padding: 15 }}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/about" className="link-no-style">
                <Nav.Link as="span" eventKey="about">
                  About Us
                </Nav.Link>
              </Link>
              <Link to="/contact" className="link-no-style">
                <Nav.Link as="span" eventKey="contact">
                  Contact us
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <img style={{ height: 40 }} alt="Capital Eight" src={logo} />
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
