import React from 'react'
import './ServicePage.css'
import PageHeader from '../../GlobalComponents/PageHeader/PageHeader'
import HeadSection from '../../GlobalComponents/HeadSection/HeadSection'
import ServiceCard from '../../GlobalComponents/ServiceCard/ServiceCard'
import FooterSection from '../../GlobalComponents/FooterSection/FooterSection'
const ServicePage = () => {
    return (
        <>
            <PageHeader Page_Header_title="services" />
            <HeadSection Section__title="our services" Section__subtitle="fresh & organic beans" />
            <ServiceCard />
            <FooterSection />
        </>
    )
}

export default ServicePage