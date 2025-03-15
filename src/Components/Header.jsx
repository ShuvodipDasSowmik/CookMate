import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../StyleSheets/header.css';

function Header({ darkMode, setDarkMode }) {
    return (
        <Navbar expand="lg" className={`${darkMode ? "bg-custom-dark" : "bg-custom-light"} py-3`}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    CookMate
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        
                        <Nav.Link as={Link} to="/generate">
                            Generate
                        </Nav.Link>

                        <Nav.Link as={Link} to="/about">
                            About Us
                        </Nav.Link>
                
                        <Form.Check
                            type="switch"
                            id="dark-mode-switch"
                            label={darkMode ? "Dark" : "Light"}
                            className="ms-3"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;