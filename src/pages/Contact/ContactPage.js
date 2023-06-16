import React from 'react'
import PageHeader from '../../GlobalComponents/PageHeader/PageHeader'
import HeadSection from '../../GlobalComponents/HeadSection/HeadSection'

import FooterSection from '../../GlobalComponents/FooterSection/FooterSection'
import ContactSection from '../../components/ContactSection/ContactSection'


const ContactPage = () => {
    return (
        <>
            <PageHeader Page_Header_title="contact" />
            <HeadSection Section__title="contact us" Section__subtitle="feel free to contact" />
            <ContactSection />
            <FooterSection />
        </>
    )
}

export default ContactPage