import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button, ButtonGroup } from "react-bootstrap";
import logo from "../assets/logo.svg";
import "./Navbar.scss";

const Navigation = ( { handleCreateAcc }) => (
    <Navbar expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="/"><img src={logo} alt="Logo" height="30" className="d-inline-block align-top" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Cartão</Nav.Link>
                    <Nav.Link href="#link">Quem somos</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                </Nav>
                <ButtonGroup aria-label="Basic exemple">
                    <Button variant="outline-light">
                        <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login">Pessoa Física</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Pessoa Jurídica</NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light" onClick={handleCreateAcc}>Abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;