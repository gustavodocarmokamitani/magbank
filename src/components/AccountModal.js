import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const AccountModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Seu Nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Seu Email</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label className="my-1 mr-2" htmlFor="formCitySelect">
                        Preference
                </Form.Label>
                    <Form.Control
                        as="select"
                        className="my-1 mr-sm-2"
                        id="formCitySelect"
                        custom
                    >
                        <option value="0">São Paulo - SP</option>
                        <option value="1">Guarulhos - SP</option>
                        <option value="2">Suzano - SP</option>
                        <option value="3">Osasco - SP</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Eu li e concordo com os termos de uso." />
                </Form.Group>              
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
          </Button>
            <Button variant="primary" onClick={handleClose}>
                Criar conta
          </Button>
        </Modal.Footer>
    </Modal>
);

export default AccountModal;