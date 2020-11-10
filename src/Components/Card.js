import React, { useState } from "react";
import './Card.css'

const Card = props => {
    return (
        <div className="card">
            <img src={props.imgsrc} alt=""/>
        </div>
    )
}

export default Card;