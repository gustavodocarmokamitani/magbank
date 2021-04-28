import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MagBankFooter from "../assets/MagBankFooter.png"
import GoogleApp from "../assets/GoogleApp.png"
import AppleApp from "../assets/AppleApp.png"

import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => (
    <Container className="container_Footer">
        <Row className="copy_Footer text-center">
            <Col xs={12} lg={5}>
                <a href="home"> <img src={MagBankFooter} className="logo_Footer"/> </a>
            </Col>
            <Col xs={6} lg={7} className="social_Footer">
                <a href="#appGoogle"> <img src={GoogleApp} /> </a>
                <a href="#appApple"> <img src={AppleApp} /> </a>

                <a href="#Twitter"> <FaTwitter /> </a>
                <a href="#Facebook"> <FaFacebook /> </a>
                <a href="#Youtube"> <FaYoutube /> </a>
            </Col>
        </Row>
    </Container>
);

export default Footer;
