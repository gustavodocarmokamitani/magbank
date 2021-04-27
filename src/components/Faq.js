import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Faq.scss";

import { FaCcMastercard, FaWallet, FaShieldAlt, FaUserAstronaut } from "react-icons/fa";

const Faq = () => (
    <div className="container_Bg">
        <Container>
            <h2 className="title_Faq">Dúvidas frequentes</h2>
            <Row>
                <Col xs={12} lg={5} className="iconsCopy_Faq">
                    <Row>
                        <FaCcMastercard />
                        <p>Cartão de crédito e débito</p>
                    </Row>
                    <Row>
                        <FaWallet />
                        <p>Conta e abertura</p>
                    </Row>
                    <Row>
                        <FaShieldAlt />
                        <p>Token digital</p>
                    </Row>
                    <Row>
                        <FaUserAstronaut />
                        <p>Produtos e serviços</p>
                    </Row>
                </Col>
                <Col xs={12} lg={7} className="copy_Faq">
                    <Row>
                        <p>Lorem ipsum dolor sit amet</p>
                    </Row>
                    <Row>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                    </Row>
                    <Row>
                        <p>Nulla porttitor eros ac ex tristique posuere</p>
                    </Row>
                    <Row>
                        <p>Quisque fringilla tincidunt arcu</p>
                    </Row>
                    <Row>
                        <p>Nam elementum lobortis purus a maximus tortor</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Faq;