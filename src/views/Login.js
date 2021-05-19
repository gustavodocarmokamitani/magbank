import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Login.scss";
import logo from "../assets/logo.svg";

const Login = () => (
    <div className="containerLogin d-flex justify-content-center align-items-center">
        <Container>
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <img src={logo} alt="Logo" height="60" className="d-inline-block align-top" />
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Número da conta</Form.Label>
                            <Form.Control type="email"/>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                        <Button className="mt-2" variant="success" type="submit">
                            Criar Conta
                        </Button>
                    </Form>
                </Col>
            </Row>            
        </Container >
    </div >
);

export default Login;