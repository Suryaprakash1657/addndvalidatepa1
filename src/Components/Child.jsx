import React from "react";
import Parent from './Parent';
import './Card.css'

function DestC({image,name,location,description,price}){
    return(
        <>
        <div className="Card">
            <img src={image} alt={image} className="image"/>
            <h1 className="title">{name}</h1>
            <h2 className="location">{location}</h2>
            <p className="description">{description}</p>
            <h3 className="">{price}</h3>
        </div>
        </>
    )
}

export default DestC;