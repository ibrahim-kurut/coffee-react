import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HeadSection.css'
const HeadSection = ({ Section__title, Section__subtitle }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="HeadSection">
                        <h1 className="HeadSection__title">{Section__title}</h1>
                        <p className="HeadSection__subtitle">{Section__subtitle}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeadSection