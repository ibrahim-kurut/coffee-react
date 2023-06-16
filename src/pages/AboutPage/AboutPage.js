import React from 'react'
import AboutSection from '../../GlobalComponents/AboutSection/AboutSection'
import FooterSection from '../../GlobalComponents/FooterSection/FooterSection'
import HeadSection from '../../GlobalComponents/HeadSection/HeadSection'
import PageHeader from '../../GlobalComponents/PageHeader/PageHeader'
import './AboutPage.css'
const AboutPage = ({ Page_Header_title }) => {
    return (
        <>
            <PageHeader Page_Header_title="about us" />
            <HeadSection Section__title="about us" Section__subtitle="serving Since 1950" />
            <AboutSection />
            <FooterSection />
        </>
    )
}

export default AboutPage