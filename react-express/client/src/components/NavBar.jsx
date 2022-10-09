import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


export default function NavBar() {
    return (
        <Navbar variant='dark' bg="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <div className="d-flex align-items-center">
                        <img alt='react logo' src='./logo.png' style={{ maxWidth: '2.5rem' }} className='me-3' />
                        <span>Software engineering assignment-2</span>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}