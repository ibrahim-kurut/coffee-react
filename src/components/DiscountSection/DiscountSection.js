import React from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import './DiscountSection.css'
const DiscountSection = () => {
    return (
        <div className="Discount">
            <p className="discount_title">50% off</p>
            <p className="discount_subtitle">sunday special offer</p>
            <p className="discount_text">only for sunday from 1st Jan to 30th Jan 2045</p>
            <InputGroup className="mb-3 w-50 m-auto">
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
    )
}

export default DiscountSection