import React from "react";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";
import magicpay from "../assets/magicpay.png";
import "./Hero.scss";

const Hero = ({ onClick }) => (
    <Jumbotron className='jumbotron_Hero text-center text-light hero'>
        <Container className="container_Hero d-flex align-items-center">
            <Row className="copy_Hero" >
                <Col xs={12} lg={6} className='text-lg-right my-lg-5'>
                    <img src={magicpay} alt="Logo" width="100%" className="magicpay" />
                </Col>
                <Col className='text-lg-left my-lg-5'>
                    <p>Pague suas contas pelo nosso APP</p>

                    <Button variant="outline-light" onClick={onClick}>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
);

export default Hero;