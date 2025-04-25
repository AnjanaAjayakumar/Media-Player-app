import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Media Player</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia numquam corrupti, ullam veritatis consectetur, ipsa et quibusdam repellat repudiandae, pariatur quas possimus quasi sapiente fugit a dolorum? Atque, ducimus.</p>
          </Col>

          <Col md={3}>
            <h5>Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="" className="text-light">Loading Page</Nav.Link>
              <Nav.Link href="" className="text-light">Home Page</Nav.Link>
              <Nav.Link href="" className="text-light">Watch History</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h5>Guides</h5>
            <Nav className="flex-column">
              <Nav.Link href="" className="text-light">React</Nav.Link>
              <Nav.Link href="" className="text-light">React Bootstrap</Nav.Link>
              <Nav.Link href="" className="text-light">Bootstrap</Nav.Link>
            </Nav>
          </Col>

          <Col md={3}>
            <h5>Contact</h5>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0 small">
          Copyright © {new Date().getFullYear()} Media Player. Built with React.
        </p>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
