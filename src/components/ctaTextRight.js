import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import PropTypes from "prop-types"
import { Parallax } from "react-parallax"

const CtaTextRight = ({ cssClassName, text, image }) => (
  <div className={cssClassName}>
    <Row noGutters={true} className="align-items-center grayBg">
      <Col md={6}>
        <Parallax
          blur={0}
          bgImage={image}
          bgImageAlt="Capital Eight"
          strength={200}
          className="fullWidthImg"
        >
          <div style={{ height: 600 }} />
        </Parallax>
      </Col>
      <Col md={6} className="textCol">
        <Container className="align-middle">
          <h2>{text.title}</h2>
          <p>{text.description}</p>
        </Container>
      </Col>
    </Row>
  </div>
)

CtaTextRight.propTypes = {
  text: PropTypes.object,
  image: PropTypes.string,
}

CtaTextRight.defaultProps = {
  text: {},
  image: ``,
}

export default CtaTextRight
