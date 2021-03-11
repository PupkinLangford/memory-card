import React from "react";
import './Card.css'

const Card = props => {
    return (
        <div className="card">
            <img src={props.imgsrc} alt="" onClick={props.handler}/>
            <div className="Cardlabel">{props.country}</div>
        </div>
    )
}

export default Card;