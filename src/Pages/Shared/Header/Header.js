import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>

                    <NavLink className="brand-logo" to="/"><h3><img style={{width:'60px'}} src="https://i.ibb.co/2MnNjML/logo-removebg-preview.png" alt="" /> Volunteer Network</h3></NavLink>

                    <Nav className="ms-auto my-2 my-lg-0 navbar-links">

                        <NavLink to="/"><h5>Home</h5></NavLink>
                        <NavLink to="/contact"><h5>Contact</h5></NavLink>
                        <NavLink to="/login"><h5>Login</h5></NavLink>

                    </Nav>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                    style={{width:'250px'}}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >

                    <Offcanvas.Body>
                    <NavLink className="brand-logo" to="/"><h3><img style={{width:'60px'}} src="https://i.ibb.co/2MnNjML/logo-removebg-preview.png" alt="" /> Volunteer Network</h3></NavLink>
                        <Nav className="justify-content-end flex-grow-1 pe-3 offLinks">

                            <NavLink to="/"><h5>Home</h5></NavLink>
                            <NavLink to="/contact"><h5>Contact</h5></NavLink>
                            <NavLink to="/login"><h5>Login</h5></NavLink>

                        </Nav>
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;