import React from 'react'
import { useState } from "react";

const ChangeColor = () => {


    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        // alert()
    };


    return (
        <div onClick={handleClick}

            style={{ backgroundColor: active ? "black" : "white" }}
        >
            <h1>Change Color</h1>

        </div>
    )
}

export default ChangeColor