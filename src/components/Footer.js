import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import logo from "../assets/MagBankFooter.png";
import appleStore from "../assets/AppleApp.png";
import googlePlay from "../assets/GoogleApp.png";

import "./Footer.scss";
const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="text-center py-5">
                <Col xs={12} lg={6} className="text-lg-left">
                    <Image src={logo} />
                </Col>
                <Col xs={12} lg={4}>
                    <Image src={appleStore} />
                    <Image src={googlePlay} />
                </Col>
                <Col xs={12} lg={2} className="d-flex align-items-center justify-content-center">
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} color="#7c7c7c" size="2x"/></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} color="#7c7c7c"size="2x"/></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} color="#7c7c7c"size="2x"/></a>
                    
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;