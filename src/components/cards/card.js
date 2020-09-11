import React from 'react';
import './card.css';

const Card = props => {
    return (
        <div className="card">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/competitions.svg" alt="smiley face" />
            <div className="containerr">
                <h4>{props.name}</h4>
            </div>
        </div>
    );
};
export default Card;