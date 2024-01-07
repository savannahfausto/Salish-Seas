import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.css'

function Header() {
  return (
    <Navbar expand="md" className="bg-body-tertiar text-uppercase">
      <Container>
        <Navbar.Brand href="/" className="nav-link">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-around w-75">
            <Nav.Link href="/officiating">Officiating</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
          </Nav>
            <div className='contact-btn d-inline-block'>
                <Nav.Link href="/contactme">Contact Me</Nav.Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
