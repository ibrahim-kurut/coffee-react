import React from 'react'

import Slider from '../../components/Slider/Slider'
import AboutSection from '../../GlobalComponents/AboutSection/AboutSection'
import HeadSection from '../../GlobalComponents/HeadSection/HeadSection'
import ServiceCard from '../../GlobalComponents/ServiceCard/ServiceCard'
import { FaShippingFast } from "react-icons/fa";
import './HomePage.css'
import DiscountSection from '../../components/DiscountSection/DiscountSection'
import MenuCard from '../../GlobalComponents/MenuCard/MenuCard'
import FormSection from '../../components/FormSection/FormSection'
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection"
import FooterSection from '../../GlobalComponents/FooterSection/FooterSection'
const HomePage = ({ Section__title, Section__subtitle }) => {


    return (
        <div className="HomePage">
            <Slider />
            <HeadSection Section__title="about us" Section__subtitle="serving Since 1950" />
            <AboutSection />
            <HeadSection Section__title="our services" Section__subtitle="fresh & organic beans" />
            <ServiceCard />
            <DiscountSection />
            <HeadSection Section__title="MENU & PRICING" Section__subtitle="Competitive Pricing" />
            <MenuCard />
            <FormSection />
            <HeadSection Section__title="TESTIMONIAL" Section__subtitle="Our Clients Say" />
            <TestimonialsSection />
            <FooterSection />
        </div>
    )
}

export default HomePage