import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link }  from 'react-router-dom';

import './Header.css'

function Header() {
  return (
    <Navbar expand="md" className="bg-body-tertiar text-uppercase px-4 py-5">
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
            <div className='d-inline-block'>
                <Link className='btn-style contact-btn' to="/contactme">Contact Me</Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
