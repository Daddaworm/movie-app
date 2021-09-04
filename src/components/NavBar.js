import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ currentUser }) => {
  return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Movie Collection Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/moviecollection">Movie Collection</Nav.Link>
                    <Nav.Link href="/addmovie">Add Movie</Nav.Link>
                    <Nav.Link href="/favorites">View Favorites</Nav.Link>
                </Nav>
                <Nav>
                    {/* <Nav.Link href="#deets">
                        More deets
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    <NavDropdown title="" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/login">
                        Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/logout">
                        Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/signup">
                        Sign-up
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/about">
                        About this Project
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text>
                        Signed in as: <a href="/moviecollection">{currentUser ? `${currentUser.username}` : "Not Signed In"}</a>
                    </Navbar.Text>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
