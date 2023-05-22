// https://www.youtube.com/watch?v=Ts3kTbdQ_4U
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Card.css'

export default function Card({
    imgSrc,
    imgAlt,
    title,
    description,
    buttonText,
    items,
    navPath
}){
    const navigate = useNavigate();

    return (
        <div className="card-container">
            {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt} className="card-image"/>)}     
            { title && <h1 className="card-title">{title}</h1>}
            {description && <p className='card-description'>{description}</p>}
            {items}
            <button onClick={() => navigate(navPath)} className="card-btn">{buttonText}</button>
        </div>
      
    )
}