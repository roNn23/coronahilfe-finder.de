import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Content.scss'

const Content = ({ children, className }) => (
  <div className={`component-content ${className}`}>
    <Container>
      <Row>
        <Col lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
          {children}
        </Col>
      </Row>
    </Container>
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Content
