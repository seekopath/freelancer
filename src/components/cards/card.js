import React from 'react';
import './card.css';

const Card = (props) => {
    return (
        <div className="cardd">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/competitions.svg" alt="smiley face" />
            <div className="containerrr">
                <h4 className="card_heading" style={{fontSize: "1rem"}}>{props.name}</h4>
            </div>
        </div>
    );
};
export default Card;