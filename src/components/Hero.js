import React from "react";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import magicpay from "../assets/magicpay.png";
import "./Hero.scss";

const Hero = () => (
    <Jumbotron className='jumbotron_Hero text-center text-light hero'>
        <Container className="container_Hero d-flex align-items-center">
            <Row>
                <Col className='text-lg-right my-lg-5'>
                    <img src={magicpay} alt="Logo" height="100%" className="magicpay" />
                </Col>
                <Col className='text-lg-left my-lg-5'>
                    <p>Pague suas contas pelo nosso APP</p>

                    <Button variant="outline-light">Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
);

export default Hero;