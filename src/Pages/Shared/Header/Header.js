import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './header.css'


const Header = () => {
    
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>

                    <NavLink className="brand-logo" to="/"><h3><img style={{width:'60px'}} src="https://i.ibb.co/2MnNjML/logo-removebg-preview.png" alt="" /> Volunteer Network</h3></NavLink>

                    <Nav className="ms-auto my-2 my-lg-0 navbar-links">

                        <NavLink to="/"><h5>Home</h5></NavLink>
                        <NavLink to="/causes"><h5>Causes</h5></NavLink>
                        <NavLink to="/events"><h5>Events</h5></NavLink>
                        <NavLink to="/contact"><h5>Contact</h5></NavLink>
                        <NavLink to="/become-volunteer"><h5>Become-Volunteer</h5></NavLink>
                        {
                                user ? <h5 className="user-name"><i class="fas fa-user"></i> <Button onClick={ logOut } variant="danger" className="logout-button">Logout</Button> </h5>: <NavLink to="/login"><h5>Login</h5></NavLink>
                        }

                    </Nav>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                    style={{width:'250px'}}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >

                    <Offcanvas.Body className="mobile-header-container">
                    <NavLink className="brand-logo" to="/"><h3><img style={{width:'60px'}} src="https://i.ibb.co/2MnNjML/logo-removebg-preview.png" alt="" /> Volunteer Network</h3></NavLink>
                        <Nav className="justify-content-end flex-grow-1 pe-3 offLinks">

                            <NavLink to="/"><h5>Home</h5></NavLink>
                            <NavLink to="/causes"><h5>Causes</h5></NavLink>
                            <NavLink to="/events"><h5>Events</h5></NavLink>
                            <NavLink to="/contact"><h5>Contact</h5></NavLink>
                            <NavLink to="/become-volunteer"><h5>Become-Volunteer</h5></NavLink>
                            {
                                user ? <h5 className="user-name"><i class="fas fa-user"></i> <Button onClick={ logOut } className="logout-button">Logout</Button> </h5>: <NavLink to="/login"><h5>Login</h5></NavLink>
                            }

                        </Nav>
                        
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;