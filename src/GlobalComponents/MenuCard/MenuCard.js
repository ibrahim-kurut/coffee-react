import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import menuImg from '../../asset/img/menu-1.jpg'
import './MenuCard.css'
const MenuCard = ({ Card_title, Card_text }) => {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <h2>Hot Coffee</h2>
                    <Card className="menuCard mb-2 d-flex flex-row align-items-center">
                        <div className="menuImg">
                            <span className="price">10</span>
                            <Card.Img variant="top" src={menuImg} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                {Card_title}
                                Fastest Door Delivery
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="menuCard mb-2 d-flex flex-row align-items-center">
                        <div className="menuImg">
                            <span className="price">10</span>
                            <Card.Img variant="top" src={menuImg} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                {Card_title}
                                Fastest Door Delivery
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="6">
                    <h2>Cold Coffee</h2>
                    <Card className="menuCard mb-2 d-flex flex-row align-items-center">
                        <div className="menuImg">
                            <span className="price">10</span>
                            <Card.Img variant="top" src={menuImg} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                {Card_title}
                                Fastest Door Delivery
                            </Card.Title>
                            <Card.Text>
                                {Card_text}
                                <p>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="menuCard mb-2 d-flex flex-row align-items-center">
                        <div className="menuImg">
                            <span className="price">10</span>
                            <Card.Img variant="top" src={menuImg} />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                {Card_title}
                                Fastest Door Delivery
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

export default MenuCard