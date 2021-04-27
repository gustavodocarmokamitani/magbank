import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {
    FaCcMastercard,
    FaShoppingCart,
    FaMobileAlt,
    FaWallet
} from "react-icons/fa";
import "./CreditCard.scss"; 

import CreditCardImg from "../assets/CreditCardImg.png"

const CreditCard = () => (
    <Container className="container_CC">
        <Row>
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
                <Row>
                    <h2 className="title_CC">Cartão de crédito</h2>
                </Row>
                <Row>
                    <Col className="icon_CC">
                        <FaCcMastercard size={28} color='#f05656' textClassName='h5 text-muted' />
                        <p className="textCopy_CC">Crédito Pessoal</p>
                    </Col>

                    <Col className="icon_CC">
                        <FaShoppingCart size={28} color='#f05656' textClassName='h5 text-muted' />
                        <p className="textCopy_CC">Pagamentos Online</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="icon_CC"> 
                        <FaMobileAlt size={28} color='#f05656' textClassName='h5 text-muted' />
                        <p className="textCopy_CC">App</p>
                    </Col>
                    <Col className="icon_CC">
                        <FaWallet size={28} color='#f05656' textClassName='h5 text-muted' />
                        <p className="textCopy_CC">Carteira Digital</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={5}>
                <Image src={CreditCardImg} alt="Magbank Credit Card Example" fluid />
            </Col>
        </Row>
    </Container>
)

export default CreditCard;