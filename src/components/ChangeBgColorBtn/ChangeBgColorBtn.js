import React from 'react'
import { useState, useEffect } from 'react';
import { FaSun } from 'react-icons/fa';
const ChangeBgColorBtn = () => {
    const [color, setColor] = useState("#fffbf2");

    const handleChangeBgCoolor = color => {
        setColor(color)
    }
    useEffect(() => {
        document.body.style.backgroundColor = color
        // document.body.style.color = "#fff"
    }, [color])
    return (
        <span onClick={() => { handleChangeBgCoolor("rgb(33 37 41)") }}><FaSun /></span>
    )
}

export default ChangeBgColorBtn