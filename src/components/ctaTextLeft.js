import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import PropTypes from "prop-types"

const CtaTextLeft = ({ cssClassName, text, image }) => (
  <div className={cssClassName}>
    <Row noGutters={true} className="align-items-center grayBg">
      <Col md={6} className="textCol">
        <Container className="align-middle">
          <h2>{text.title}</h2>
          <p>{text.description}</p>
        </Container>
      </Col>
      <Col md={6}>
        <img className="fullWidthImg" alt="" src={image} />
      </Col>
    </Row>
  </div>
)

CtaTextLeft.propTypes = {
  text: PropTypes.object,
  image: PropTypes.string,
}

CtaTextLeft.defaultProps = {
  text: {},
  image: ``,
}

export default CtaTextLeft
