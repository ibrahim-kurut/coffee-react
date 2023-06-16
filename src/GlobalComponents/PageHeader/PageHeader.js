import React from 'react'
import './PageHeader.css'
const PageHeader = ({ Page_Header_title }) => {
    return (
        <div className="PageHeader">
            <h1>{Page_Header_title}</h1>
        </div>
    )
}

export default PageHeader