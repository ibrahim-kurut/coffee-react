import React from 'react'
import { Card } from 'react-bootstrap'
import avatar from "../../asset/img/user2.jpg"
import './TestmonialCard.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaBehance } from "react-icons/fa";
const TestmonialCard = ({ namee, job }) => {
    return (
        <Card className="testimonialCard">
            <div className="cardImg">
                <Card.Img variant="top" src={avatar} />
            </div>
            <Card.Body>
                <Card.Title>
                    <h4>{namee}</h4>
                    <h6>{job}</h6>
                </Card.Title>
                <Card.Text>
                    <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </Card.Text>
                <div className="cardIcons">
                    <span><FaFacebookF /></span>
                    <span><FaInstagram /></span>
                    <span><FaTwitter /></span>
                    <span><FaBehance /></span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default TestmonialCard