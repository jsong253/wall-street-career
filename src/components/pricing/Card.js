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
    navPath
}){
    const navigate = useNavigate();

    return (
        <div className="card-container">
            <img src={imgSrc} alt={imgAlt} className="card-image"/>
            <h1 className="card-title">{title}</h1>
            <p className='card-description'>{description}</p>
            <button onClick={() => navigate(navPath)} className="card-btn">{buttonText}</button>
        </div>
      
    )
}