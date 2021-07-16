import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class barranavegacao extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Locadora</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/all">Catálogo</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

export default barranavegacao;