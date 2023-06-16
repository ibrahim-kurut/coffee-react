import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import about_img from "../../asset/img/about.png";
import './AboutSection.css'
const AboutSection = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center xx">
                <Col md="12" lg="4">
                    <div>
                        <h3>Our Story</h3>
                        <p className="p1">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                        <p className="p2">
                            Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
                        </p>
                    </div>
                </Col>
                <Col md="12" lg="4">
                    <div className="img">
                        <img src={about_img} />
                    </div>
                </Col>
                <Col md="12" lg="4">
                    <div>
                        <h3>Our Vision</h3>
                        <p className="p1">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                        <p className="p2">
                            Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection