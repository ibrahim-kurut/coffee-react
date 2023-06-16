import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../asset/img/carousel-1.jpg"
import img2 from "../../asset/img/carousel-2.jpg"
import './Slider.css'
function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='slider'>
            <div className='overlay'></div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carouselCaptionText">
                        <div className='text-center'>
                            <h3>We Have Been Serving</h3>
                            <p>COFFEE</p>
                        </div>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carouselCaptionText">
                        <div className='text-center'>
                            <h3>We Have Been Serving</h3>
                            <p>COFFEE</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>

    );
}

export default Slider;








