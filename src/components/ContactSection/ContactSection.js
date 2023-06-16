import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import map_img from "../../asset/img/map.jpg"
import './ContactSection.css'
const ContactSection = () => {
    return (
        <Container>
            <Row>
                <div className="top-contact">
                    <Col lg="4" sm="12">
                        <div className="contact-box">
                            <p className="contact-icon"><FaMapMarkerAlt /></p>
                            <span className="icon-text">address</span>
                            <span className="icontext">123 Street, new sity</span>
                        </div>
                    </Col>
                    <Col lg="4" sm="12">
                        <div className="contact-box">
                            <p className="contact-icon"><FaPhoneAlt /></p>
                            <span className="icon-text">phone</span>
                            <span className="icontext">+012 345 6789</span>
                        </div>
                    </Col>
                    <Col lg="4" sm="12">
                        <div className="contact-box">
                            <p className="contact-icon"><FaRegEnvelope /></p>
                            <span className="icon-text">email</span>
                            <span className="icontext">info@example.com</span>
                        </div>
                    </Col>
                </div>
                <div className="bottom-contact mt-5">
                    <Col lg="6" sm="12">

                        <div className="contact-map">
                            <img src={map_img} />
                        </div>

                    </Col>
                    <Col lg="6" sm="12">

                        <div className="contact-form">
                            <Form className="mt-sm-3">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="email" placeholder="Your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>
                                <FloatingLabel controlId="floatingTextarea2" label="Messages">
                                    <Form.Control
                                        as="textarea"
                                        style={{ height: '100px' }}
                                    />
                                </FloatingLabel>
                                <Button className="btn btn-brown w-100 mt-3" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </div>

                    </Col>
                </div>

            </Row>
        </Container>
    )
}

export default ContactSection