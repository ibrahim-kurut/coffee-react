import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import './FooterSection.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
    return (
        <div className="footerSection">
            <Container>
                <Row>
                    <Col md="3" className="xx text-md-start">
                        <div className="footer-info">
                            <h2>get in touch</h2>
                            <p> <FaMapMarkerAlt /> 123 Street,location</p>
                            <p> <FaPhoneAlt /> +012 345 67890</p>
                            <p> <FaEnvelope /> info@example.com</p>
                        </div>
                    </Col>
                    <Col md="3" className="xx ">
                        <div className="footer-social">
                            <h2>FOLLOW US</h2>
                            <p>
                                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
                            </p>

                            <div className="footer-icons">
                                <p><FaTwitter /></p>
                                <p><FaFacebookF /></p>
                                <p><FaLinkedinIn /></p>
                                <p><FaInstagram /></p>
                            </div>

                        </div>
                    </Col>
                    <Col md="3" className="xx ">
                        <div className="footer-worktime">
                            <h4>open hours</h4>
                            <span>MONDAY - FRIDAY</span>
                            <p>8.00 am - 8.00 pm</p>
                            <span>SATURDAY - SUNDAY</span>
                            <p>2.00 am - 8.00 pm</p>
                        </div>
                    </Col>
                    <Col md="3" className="xx ">
                        <div className="footer-worktime">
                            <h4>NEWSLETTER</h4>
                            <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                            <InputGroup className="mb-3 m-auto">
                                <Form.Control
                                    placeholder="Your Email"
                                    aria-describedby="basic-addon2"
                                    className="myInput"
                                />
                                <Button className="bg-btn" id="button-addon2">
                                    Button
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterSection