import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa";
import './FormSection.css'
const FormSection = () => {
    return (
        <Container className="formSection">
            <Row>
                <Col md="6">
                    <div className="formSection-text">
                        <h1>30% off</h1>
                        <h4>For Online Reservation</h4>
                        <p>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>

                        <li>
                            <span className="ckeckIcon"><FaCheck /></span> Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            <span className="ckeckIcon"><FaCheck /></span> Lorem ipsum dolor sit amet
                        </li>
                        <li>
                            <span className="ckeckIcon"><FaCheck /></span> Lorem ipsum dolor sit amet
                        </li>



                    </div>
                </Col>
                <Col md="6" className="form-box">
                    <div className="fomm">
                        <h1>Book Your Table</h1>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control"
                                    placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control"
                                    placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <input type="date" class="form-control"
                                    placeholder="Date" />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control"
                                    placeholder="Time as 02:30 am" />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control"
                                    placeholder="Persone" />
                            </div>

                            <button type="submit" class="btn btn-primary w-100">Book Now</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FormSection
