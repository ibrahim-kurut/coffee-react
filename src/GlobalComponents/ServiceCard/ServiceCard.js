import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import serviceImg from '../../asset/img/service-1.jpg'
import serviceImg2 from '../../asset/img/service-2.jpg'
import serviceImg3 from '../../asset/img/service-3.jpg'
import serviceImg4 from '../../asset/img/service-4.jpg'
import './ServiceCard.css'
import { FaShippingFast, FaCoffee, FaAward, FaTable } from "react-icons/fa";
const ServiceCard = ({ Card_title, Card_text }) => {
    return (
        <Container className='py-5'>
            <Row>
                <Col md="6">
                    <Card className="myCard d-flex flex-row align-items-center">
                        <div className="serviveImg">
                            <Card.Img variant="top" src={serviceImg} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <span className="icons"><FaShippingFast /></span>
                                {Card_title}
                                Fastest Door Delivery
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="myCard d-flex flex-row align-items-center">
                        <div className="serviveImg">
                            <Card.Img variant="top" src={serviceImg3} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <span className="icons"><FaAward /></span>
                                {Card_title}
                                Best Quality Coffee
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <Card className="myCard d-flex flex-row align-items-center">
                        <div className="serviveImg">
                            <Card.Img variant="top" src={serviceImg2} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <span className="icons"><FaCoffee /></span>
                                {Card_title}
                                Fresh Coffee Beans
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="myCard d-flex flex-row align-items-center">
                        <div className="serviveImg">
                            <Card.Img variant="top" src={serviceImg4} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <span className="icons"><FaTable /></span>
                                {Card_title}
                                Online Table Booking
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceCard