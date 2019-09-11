import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import PropTypes from "prop-types"

const CallToActionThree = ({
  cssClassName,
  firstBlock,
  secondBlock,
  thirdBlock,
}) => (
  <div className={cssClassName}>
    <Container>
      <Row>
        <Col className="ctaCol" sm={12} md={4}>
          <h4>{firstBlock.title}</h4>
          <span>{firstBlock.text}</span>
        </Col>
        <Col className="ctaCol" sm={12} md={4}>
          <h4>{secondBlock.title}</h4>
          <span>{secondBlock.text}</span>
        </Col>
        <Col className="ctaCol" sm={12} md={4}>
          <h4>{thirdBlock.title}</h4>
          <span>{thirdBlock.text}</span>
        </Col>
      </Row>
    </Container>
  </div>
)

CallToActionThree.propTypes = {
  firstBlock: PropTypes.object,
  secondBlock: PropTypes.object,
  thirdBlock: PropTypes.object,
}

CallToActionThree.defaultProps = {
  firstBlock: {},
  secondBlock: {},
  thirdBlock: {},
  cssClassName: ``,
}

export default CallToActionThree
