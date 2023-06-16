import React from 'react'
import PageHeader from '../../GlobalComponents/PageHeader/PageHeader'
import HeadSection from '../../GlobalComponents/HeadSection/HeadSection'
import MenuCard from '../../GlobalComponents/MenuCard/MenuCard'
import FooterSection from '../../GlobalComponents/FooterSection/FooterSection'
const MenuPage = () => {
    return (
        <>
            <PageHeader Page_Header_title="menu" />
            <HeadSection Section__title="MENU & PRICING" Section__subtitle="Competitive Pricing" />
            <MenuCard />
            <FooterSection />
        </>
    )
}

export default MenuPage