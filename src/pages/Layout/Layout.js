import React from 'react'
import "./Layout.css"
import { Outlet, Link } from "react-router-dom";


import ChangeBgColorBtn from '../../components/ChangeBgColorBtn/ChangeBgColorBtn';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Layout = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">coffee shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link className="nav-item nav-link active" to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link" to="/about">About</Link>
                                </li>
                            </Nav.Link>
                            <Nav.Link>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link" to="/service">Service</Link>
                                </li>
                            </Nav.Link>
                            <Nav.Link>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link" to="/menu">Menu</Link>
                                </li>
                            </Nav.Link>
                            <Nav.Link>
                                <li className="nav-item">
                                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                                </li>
                            </Nav.Link>


                        </Nav>
                        {/* <p className="changeColor">
                            <ChangeBgColorBtn />
                        </p> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Layout


