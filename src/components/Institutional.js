import React from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import "./Institutional.scss";
import { FaMobileAlt, FaEye, FaGlobe, FaShieldAlt } from "react-icons/fa";


const Institutional = () => (
    <div className="Institutional mt-5">
        <Container className="container_Institutional">
            <Row>
                <Col></Col>
                <Col xs={12} lg={7} className="copy_Institutional ">
                    <Row>
                        <Col>
                            <p className="title_Institutional">Já nascemos digital</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="text_Institutional">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <FaMobileAlt className="icon_Institutional ml-4" /><p className="iconText_Institutional ml-3">Sem fila e sem burocracia</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FaEye className="icon_Institutional ml-4" /><p className="iconText_Institutional ml-3">Simples e prático</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FaGlobe className="icon_Institutional ml-4" /><p className="iconText_Institutional ml-3">Abertura de conta 100% online</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FaShieldAlt className="icon_Institutional ml-4" /><p className="iconText_Institutional ml-3">Transações maios seguras</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex justify-content-center" xs={12}>
                            <Button className="mt-5" variant="outline-light">Abra sua conta</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Institutional;