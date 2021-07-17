import React from 'react'
import { Navbar, nav, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function NavbarComponent() {
    return (
        <Navbar bg='light' expand='sm'>
            <Navbar.Brand as={Link} to='/'>
                ZASolution Drive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to='/user'>
                    Profile
                </Nav.Link>
            </Nav>

        </Navbar>
    )
}
